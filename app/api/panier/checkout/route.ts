import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const runtime = 'nodejs'

// app/api/panier/checkout/route.ts
// Paiement par carte d'un panier de plusieurs documents (Stripe Checkout multi-lignes).
// L'acces a chaque document est accorde par le webhook a la fin du paiement (produit = panier).
// Un document est payable des qu'il est acces_payant avec un prix_unitaire > 0.
// Un abonne Optimal n'a pas a payer les documents inclus dans son abonnement (acces_optimal) : ils sont exclus du paiement.
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

export async function POST(request: NextRequest) {
  try {
    // 1. Authentification
    const authHeader = request.headers.get('authorization') || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
    if (!token) {
      return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
    }
    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token)
    if (userErr || !userData?.user) {
      return NextResponse.json({ error: 'Session invalide.' }, { status: 401 })
    }
    const userId = userData.user.id

    // 2. Entree
    const body = await request.json()
    const ids: string[] = Array.isArray(body.documentIds)
      ? body.documentIds.map((x: unknown) => String(x)).filter(Boolean)
      : []
    if (ids.length === 0) {
      return NextResponse.json({ error: 'Panier vide.' }, { status: 400 })
    }

    // 3. Acheteur + statut d'abonnement (necessaire pour exclure les documents inclus dans l'abonnement)
    const { data: profil } = await supabaseAdmin
      .from('users')
      .select('email, abonnement_actif')
      .eq('id', userId)
      .single()
    if (!profil?.email) {
      return NextResponse.json({ error: 'Compte introuvable.' }, { status: 404 })
    }
    const estAbonne = !!profil.abonnement_actif

    // 4. Documents : actifs, payants, avec prix
    const { data: documents } = await supabaseAdmin
      .from('documents')
      .select('id, nom, prix_unitaire, acces_payant, acces_optimal, actif, masque_catalogue')
      .in('id', ids)
      .eq('actif', true)

    // 5. Documents deja acquis a l'unite (a exclure)
    const { data: dejaPayes } = await supabaseAdmin
      .from('achats_documents')
      .select('document_id')
      .eq('user_id', userId)
      .eq('statut', 'paye')
      .in('document_id', ids)
    const possedes = new Set((dejaPayes || []).map((d) => d.document_id))

    // 6. Selection des lignes valides :
    //    payantes, prix > 0, non deja acquises, et non incluses gratuitement dans l'abonnement de l'utilisateur
    const valides = (documents || []).filter((d) => {
      const prix = Number(d.prix_unitaire)
      if (!d.acces_payant || !(prix > 0)) return false
      if (d.masque_catalogue) return false
      if (possedes.has(d.id)) return false
      if (estAbonne && d.acces_optimal) return false
      return true
    })
    if (valides.length === 0) {
      return NextResponse.json(
        { error: "Aucun document du panier n'est disponible à l'achat (déjà acquis, inclus dans votre abonnement, ou indisponibles)." },
        { status: 400 },
      )
    }

    // 7. Origine
    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // 8. Session Stripe Checkout multi-lignes
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: profil.email,
      line_items: valides.map((d) => ({
        price_data: {
          currency: 'eur',
          product_data: { name: d.nom },
          unit_amount: Math.round(Number(d.prix_unitaire) * 100),
        },
        quantity: 1,
      })),
      metadata: {
        produit: 'panier',
        documentIds: valides.map((d) => d.id).join(','),
        userId,
      },
      success_url: `${origin}/espace-client?onglet=documents&achat=succes`,
      cancel_url: `${origin}/panier`,
    })

    return NextResponse.json({ url: session.url, count: valides.length })
  } catch (error) {
    console.error('[Panier checkout] Erreur:', error)
    return NextResponse.json({ error: 'Une erreur est survenue. Veuillez reessayer.' }, { status: 500 })
  }
}
