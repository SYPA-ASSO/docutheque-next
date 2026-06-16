import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'
import Stripe from 'stripe'

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