import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { PRICE_IDS } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const { priceKey, userEmail, successUrl, cancelUrl } = await request.json()

    const priceId = PRICE_IDS[priceKey as keyof typeof PRICE_IDS]
    if (!priceId) {
      return NextResponse.json({ error: 'Produit invalide' }, { status: 400 })
    }

    const isSubscription = priceKey.includes('optimal')

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      customer_email: userEmail,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/espace-client?success=true`,
      cancel_url: cancelUrl || `${process.env.NEXT_PUBLIC_SITE_URL}/tarifs`,
      locale: 'fr',
      metadata: { priceKey },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}