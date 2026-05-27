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

      if (!customerEmail) break

      // Abonnement
      if (priceKey?.includes('optimal')) {
        const isYearly = priceKey.includes('yearly')
        const dateExpiration = new Date()
        dateExpiration.setMonth(dateExpiration.getMonth() + (isYearly ? 12 : 1))

        await supabaseAdmin
          .from('users')
          .update({
            abonnement_actif: true,
            abonnement_type: priceKey.includes('pro') ? 'optimal_pro' : 'optimal_particulier',
            abonnement_periode: isYearly ? 'yearly' : 'monthly',
            stripe_customer_id: session.customer as string,
            date_expiration: dateExpiration.toISOString(),
          })
          .eq('email', customerEmail)
      }

      // Question unitaire
      if (priceKey === 'question_unitaire' || priceKey === 'question_abonne') {
        await supabaseAdmin
          .from('questions')
          .insert({
            user_id: null, // sera mis à jour après identification
            question: '',
            statut: 'en_attente',
            type: priceKey === 'question_unitaire' ? 'unitaire' : 'abonne',
            stripe_payment_id: session.payment_intent as string,
          })
      }

      // Forfait conseil assurances
      if (priceKey?.includes('conseil_assurances')) {
        await supabaseAdmin
          .from('dossiers_assurances')
          .insert({
            user_id: null,
            statut: 'en_attente',
            type: priceKey.includes('pro') ? 'pro' : 'particulier',
            stripe_payment_id: session.payment_intent as string,
          })
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