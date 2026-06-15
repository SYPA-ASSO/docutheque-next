import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const runtime = 'nodejs'

// app/api/compte/resilier/route.ts
// Resiliation en ligne de l'abonnement (resiliation en trois clics : article L215-1-1 du Code de
// la consommation et decret n. 2023-417 du 31 mai 2023). A partir du jeton d'authentification,
// retrouve l'abonnement Stripe actif du client et programme sa resiliation a la fin de la periode
// en cours : l'abonne conserve ses avantages jusqu'au terme deja paye, sans renouvellement.
// Un email de confirmation precisant la date d'effet est envoye (accuse de reception sur support durable).

export async function POST(request: NextRequest) {
  try {
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

    const { data: profil, error: profilErr } = await supabaseAdmin
      .from('users')
      .select('email, prenom, stripe_customer_id')
      .eq('id', userId)
      .single()
    if (profilErr || !profil) {
      return NextResponse.json({ error: 'Compte introuvable.' }, { status: 404 })
    }
    if (!profil.stripe_customer_id) {
      return NextResponse.json({ error: "Aucun abonnement actif n'a ete trouve." }, { status: 400 })
    }

    // Retrouver l'abonnement actif du client
    const abonnements = await stripe.subscriptions.list({
      customer: profil.stripe_customer_id,
      status: 'active',
      limit: 1,
    })
    const abonnement = abonnements.data[0]
    if (!abonnement) {
      return NextResponse.json({ error: "Aucun abonnement actif n'a ete trouve." }, { status: 400 })
    }

    // Programmer la resiliation a la fin de la periode en cours (pas de prelevement supplementaire)
    const misAJour = await stripe.subscriptions.update(abonnement.id, { cancel_at_period_end: true })

    // cancel_at est renseigne par Stripe lorsqu'une resiliation de fin de periode est programmee
    const finUnix = misAJour.cancel_at || null
    const finPeriode = finUnix ? new Date(finUnix * 1000) : null
    const finPeriodeTexte = finPeriode
      ? finPeriode.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
      : null

    // Accuse de reception de la resiliation, par email, via Brevo
    const brevoKey = process.env.BREVO_API_KEY
    if (brevoKey && profil.email) {
      const prenomTxt = profil.prenom ? ' ' + profil.prenom : ''
      const phrasePeriode = finPeriodeTexte
        ? `Votre abonnement reste actif jusqu'au ${finPeriodeTexte}, date a laquelle il prendra fin sans renouvellement. Vous conservez l'acces a vos avantages jusque-la.`
        : "Votre abonnement ne sera pas renouvele."
      const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">R&eacute;siliation de votre abonnement</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Cabinet CHOLEZ PAGOTTO &middot; Espace client</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour${prenomTxt},</p>
    <p>Nous confirmons la r&eacute;siliation de votre abonnement Optimal, demand&eacute;e depuis votre espace client.</p>
    <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;font-size:13px;color:#1e3a5f;line-height:1.6;">
      ${phrasePeriode} Aucun nouveau pr&eacute;l&egrave;vement ne sera effectu&eacute; apr&egrave;s cette date.
    </p>
    <p>Vous pouvez souscrire &agrave; nouveau &agrave; tout moment depuis votre espace client.</p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      <span style="color:#6b7280;">Votre espace client</span> : <a href="https://cholez-pagotto.fr/connexion" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr/connexion</a><br>
      <span style="color:#6b7280;">Une question ?</span> <a href="mailto:contact@cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">contact@cholez-pagotto.fr</a>
    </p>
  </div>
</body>
</html>`
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: profil.email }],
          subject: 'Confirmation de la resiliation de votre abonnement',
          htmlContent: html,
        }),
      }).catch(err => console.error('[Resiliation] Erreur email Brevo:', err))
    }

    return NextResponse.json({ success: true, finPeriode: finPeriodeTexte })
  } catch (error) {
    console.error('[Resiliation] erreur inattendue:', error)
    return NextResponse.json({ error: 'La resiliation a echoue. Veuillez reessayer ou nous contacter.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Methode non autorisee.' }, { status: 405 })
}