import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'
import Stripe from 'stripe'

const SITE_CONFIRM = 'https://cholez-pagotto.fr'

function eur(centimes: number | null | undefined): string {
  if (centimes == null) return ''
  return (centimes / 100).toFixed(2).replace('.', ',') + '\u00a0\u20ac'
}

type TypeCommande = 'abonnement' | 'document' | 'panier' | 'question' | 'conseil'

function contenuConfirmation(type: TypeCommande): { sujet: string; titre: string; corps: string; cta: string; lien: string } {
  switch (type) {
    case 'abonnement':
      return { sujet: 'Votre abonnement Optimal est actif', titre: 'Bienvenue, votre abonnement est actif', corps: "Votre abonnement Optimal est désormais actif. Vous avez accès à la bibliothèque complète de documents, à vos questions au juriste et à l'ensemble des avantages de votre formule.", cta: 'Accéder à mon espace', lien: `${SITE_CONFIRM}/espace-client` }
    case 'document':
      return { sujet: 'Votre achat est confirmé', titre: 'Merci, votre achat est confirmé', corps: "Votre paiement a bien été reçu. Votre document est dès à présent disponible au téléchargement dans votre espace client, onglet Documents.", cta: 'Télécharger mon document', lien: `${SITE_CONFIRM}/espace-client?onglet=documents` }
    case 'panier':
      return { sujet: 'Votre commande est confirmée', titre: 'Merci, votre commande est confirmée', corps: "Votre paiement a bien été reçu. Vos documents sont dès à présent disponibles au téléchargement dans votre espace client, onglet Documents.", cta: 'Accéder à mes documents', lien: `${SITE_CONFIRM}/espace-client?onglet=documents` }
    case 'question':
      return { sujet: 'Votre question a bien été enregistrée', titre: 'Votre question est bien prise en compte', corps: "Votre paiement a bien été reçu et votre question est enregistrée. Notre juriste vous répondra dans les meilleurs délais, sous 24 à 48 heures ouvrées.", cta: 'Suivre ma demande', lien: `${SITE_CONFIRM}/espace-client` }
    case 'conseil':
      return { sujet: 'Votre demande de conseil en assurances est confirmée', titre: 'Votre demande est bien enregistrée', corps: "Votre paiement a bien été reçu. Votre demande de conseil en assurances est enregistrée, nous revenons vers vous dans les meilleurs délais.", cta: 'Accéder à mon espace', lien: `${SITE_CONFIRM}/espace-client` }
  }
}

function emailConfirmationHtml(prenom: string, type: TypeCommande, montant: string): string {
  const c = contenuConfirmation(type)
  const ligneMontant = montant
    ? `<table style="width:100%;border-top:1px solid #f1f3f7;border-bottom:1px solid #f1f3f7;margin:0 0 22px;"><tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Montant réglé</td><td style="padding:8px 0;text-align:right;font-weight:700;color:#0f2d6e;font-size:13px;">${montant}</td></tr></table>`
    : ''
  const salutation = prenom ? `Bonjour ${prenom},` : 'Bonjour,'
  return `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#374151;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#0f2d6e;border-radius:12px 12px 0 0;padding:28px;">
      <p style="margin:0;color:#c8a84b;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Cabinet Cholez-Pagotto</p>
      <h1 style="margin:8px 0 0;color:#ffffff;font-size:19px;">${c.titre}</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:28px;">
      <p style="margin:0 0 14px;font-size:14px;line-height:1.7;">${salutation}</p>
      <p style="margin:0 0 18px;font-size:14px;line-height:1.7;">${c.corps}</p>
      ${ligneMontant}
      <div style="text-align:center;margin:24px 0;">
        <a href="${c.lien}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:13px 30px;border-radius:50px;">${c.cta}</a>
      </div>
      <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;">Ce message vous confirme votre commande. Pour toute question, répondez simplement à cet email ou utilisez le formulaire de contact du site.</p>
    </div>
    <p style="text-align:center;color:#9ca3af;font-size:11px;margin:16px 0 0;">Cabinet Cholez-Pagotto &middot; 12 rue d'Olima &middot; 88000 &Eacute;pinal &middot; cholez-pagotto.fr</p>
  </div>
</body></html>`
}

async function envoyerConfirmationCommande(email: string, prenom: string, type: TypeCommande, montant: string): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) { console.error('[Webhook] BREVO_API_KEY manquante, email de confirmation non envoye'); return }
  const c = contenuConfirmation(type)
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet Cholez-Pagotto', email: 'contact@cholez-pagotto.fr' },
        to: [{ email, name: prenom || email }],
        subject: c.sujet,
        htmlContent: emailConfirmationHtml(prenom, type, montant),
      }),
    })
    if (!res.ok) { const err = await res.json().catch(() => ({})); console.error('[Webhook] echec email de confirmation:', err) }
  } catch (e) {
    console.error('[Webhook] erreur reseau email de confirmation:', e)
  }
}


export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature error:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {

    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const priceKey = session.metadata?.priceKey
      const customerEmail = session.customer_email
      const metaUserId = session.metadata?.userId || null

      if (!customerEmail) break

      // Résoudre userId : metadata en priorité, sinon lookup par email
      const resolveUserId = async (): Promise<string | null> => {
        if (metaUserId) return metaUserId
        const { data } = await supabaseAdmin
          .from('users')
          .select('id')
          .eq('email', customerEmail)
          .single()
        return data?.id || null
      }

      // Abonnement Optimal
      if (priceKey?.includes('optimal')) {
        const isYearly = priceKey.includes('yearly')
        const dateExpiration = new Date()
        dateExpiration.setMonth(dateExpiration.getMonth() + (isYearly ? 12 : 1))

        const updateData = {
          abonnement_actif: true,
          abonnement_type: priceKey.includes('pro') ? 'optimal_pro' : 'optimal_particulier',
          abonnement_periode: isYearly ? 'yearly' : 'monthly',
          stripe_customer_id: session.customer as string,
          date_expiration: dateExpiration.toISOString(),
        }

        const userId = await resolveUserId()
        if (userId) {
          await supabaseAdmin.from('users').update(updateData).eq('id', userId)
        } else {
          await supabaseAdmin.from('users').update(updateData).eq('email', customerEmail)
        }
      }

      // Question unitaire ou abonne
      if (priceKey === 'question_unitaire' || priceKey === 'question_abonne') {
        const userId = await resolveUserId()
        await supabaseAdmin
          .from('questions')
          .insert({
            user_id: userId,
            question: null,
            statut: 'en_attente',
            type: priceKey === 'question_unitaire' ? 'unitaire' : 'abonne',
            stripe_payment_id: session.payment_intent as string,
          })
      }

      // Forfait conseil assurances
      if (priceKey?.includes('conseil_assurances')) {
        const userId = await resolveUserId()
        await supabaseAdmin
          .from('dossiers_assurances')
          .insert({
            user_id: userId,
            statut: 'en_attente',
            type: priceKey.includes('pro') ? 'pro' : 'particulier',
            stripe_payment_id: session.payment_intent as string,
          })
      }

      // Achat de document a l'unite (carte) : acces accorde via achats_documents
      if (session.metadata?.produit === 'document' && session.metadata?.documentId) {
        const userId = await resolveUserId()
        const paymentId = session.payment_intent as string
        // Idempotence : ne pas inserer deux fois pour la meme transaction Stripe
        const { data: existant } = await supabaseAdmin
          .from('achats_documents')
          .select('id')
          .eq('stripe_payment_id', paymentId)
          .limit(1)
        if (userId && (!existant || existant.length === 0)) {
          await supabaseAdmin
            .from('achats_documents')
            .insert({
              user_id: userId,
              document_id: session.metadata.documentId,
              stripe_payment_id: paymentId,
              montant: session.amount_total != null ? session.amount_total / 100 : null,
              mode_paiement: 'carte',
              statut: 'paye',
            })
        }
      }

      // Achat groupe (panier) : acces accorde pour chaque document de la commande
      if (session.metadata?.produit === 'panier' && session.metadata?.documentIds) {
        const userId = await resolveUserId()
        const paymentId = session.payment_intent as string
        const ids = session.metadata.documentIds.split(',').map((s) => s.trim()).filter(Boolean)
        if (userId && ids.length > 0) {
          const { data: docs } = await supabaseAdmin
            .from('documents')
            .select('id, prix_unitaire')
            .in('id', ids)
          const prixMap = new Map((docs || []).map((d) => [d.id, d.prix_unitaire]))
          for (const docId of ids) {
            const { data: existant } = await supabaseAdmin
              .from('achats_documents')
              .select('id')
              .eq('stripe_payment_id', paymentId)
              .eq('document_id', docId)
              .limit(1)
            if (!existant || existant.length === 0) {
              await supabaseAdmin
                .from('achats_documents')
                .insert({
                  user_id: userId,
                  document_id: docId,
                  stripe_payment_id: paymentId,
                  montant: prixMap.get(docId) ?? null,
                  mode_paiement: 'carte',
                  statut: 'paye',
                })
            }
          }
        }
      }

      // Email de confirmation de commande (carte) aux couleurs du cabinet
      {
        let typeCommande: TypeCommande | null = null
        if (priceKey?.includes('optimal')) typeCommande = 'abonnement'
        else if (session.metadata?.produit === 'document') typeCommande = 'document'
        else if (session.metadata?.produit === 'panier') typeCommande = 'panier'
        else if (priceKey === 'question_unitaire' || priceKey === 'question_abonne') typeCommande = 'question'
        else if (priceKey?.includes('conseil_assurances')) typeCommande = 'conseil'

        if (typeCommande) {
          const { data: u } = await supabaseAdmin.from('users').select('prenom').eq('email', customerEmail).maybeSingle()
          await envoyerConfirmationCommande(customerEmail, u?.prenom || '', typeCommande, eur(session.amount_total))
        }
      }
      break
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      // Resiliation programmee : Stripe positionne cancel_at_period_end (et cancel_at)
      // quand une fin de periode est demandee, et les remet a false/null en cas de reactivation.
      if (subscription.cancel_at_period_end) {
        const finUnix = subscription.cancel_at
        await supabaseAdmin
          .from('users')
          .update({
            resiliation_programmee: true,
            resiliation_fin: finUnix ? new Date(finUnix * 1000).toISOString() : null,
          })
          .eq('stripe_customer_id', customerId)
      } else {
        await supabaseAdmin
          .from('users')
          .update({
            resiliation_programmee: false,
            resiliation_fin: null,
          })
          .eq('stripe_customer_id', customerId)
      }

      break
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      const customerId = subscription.customer as string

      await supabaseAdmin
        .from('users')
        .update({
          abonnement_actif: false,
          abonnement_type: null,
          date_expiration: null,
          resiliation_programmee: false,
          resiliation_fin: null,
        })
        .eq('stripe_customer_id', customerId)

      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice
      const customerId = invoice.customer as string

      await supabaseAdmin
        .from('users')
        .update({ abonnement_actif: false })
        .eq('stripe_customer_id', customerId)

      break
    }
  }

  return NextResponse.json({ received: true })
}