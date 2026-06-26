import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'
import Stripe from 'stripe'
import { AVIS_GOOGLE } from '@/lib/avis-google'

// Invitation unique a laisser un avis Google apres le premier achat a l'unite d'un non-abonne.
// La colonne avis_google_propose garantit qu'un client n'est sollicite qu'une seule fois (email ou in-app).
async function proposerAvisGoogleApresAchat(userId: string) {
  try {
    const { data: u } = await supabaseAdmin
      .from('users')
      .select('email, prenom, abonnement_actif, avis_google_propose')
      .eq('id', userId)
      .single()
    if (!u?.email || u.abonnement_actif || u.avis_google_propose) return

    // Reservation atomique de la sollicitation : evite tout double envoi.
    const { data: claim } = await supabaseAdmin
      .from('users')
      .update({ avis_google_propose: true })
      .eq('id', userId)
      .eq('avis_google_propose', false)
      .select('id')
    if (!claim || claim.length === 0) return

    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey) return
    const prenomTxt = u.prenom ? ' ' + u.prenom : ''
    const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Merci pour votre confiance</h2>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour${prenomTxt},</p>
    <p>Votre document est disponible dans votre espace client. Nous esp\u00e9rons qu'il vous sera utile.</p>
    <p>Si le Cabinet Cholez-Pagotto vous a rendu service, un avis sur Google nous aiderait beaucoup \u00e0 le faire conna\u00eetre. Cela ne prend qu'une minute, et chaque avis compte.</p>
    <p style="text-align:center;margin:24px 0;">
      <a href="${AVIS_GOOGLE.lien}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:8px;font-weight:700;font-size:14px;">Laisser un avis sur Google</a>
    </p>
    <p style="font-size:12px;color:#6b7280;">Vous ne recevrez ce message qu'une seule fois. Merci d'avance pour votre soutien.</p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      <a href="https://cholez-pagotto.fr/connexion" style="color:#1a4fba;text-decoration:none;">Votre espace client</a>
    </p>
  </div>
</body>
</html>`
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: u.email, name: u.prenom || u.email }],
        subject: 'Merci, et votre avis nous aiderait',
        htmlContent: html,
      }),
    }).catch((err) => console.error('[Avis Google] Email echoue:', err))
  } catch (err) {
    console.error('[Avis Google] Erreur:', err)
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
          await proposerAvisGoogleApresAchat(userId)
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
          await proposerAvisGoogleApresAchat(userId)
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