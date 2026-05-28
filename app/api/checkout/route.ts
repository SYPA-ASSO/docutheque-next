import { NextResponse } from 'next/server'
import { stripe, PRICE_IDS } from '@/lib/stripe'

export async function POST(request: Request) {
  try {
    const { priceKey, userEmail, userId } = await request.json()

    const priceId = PRICE_IDS[priceKey as keyof typeof PRICE_IDS]
    if (!priceId) {
      return NextResponse.json({ error: 'Produit invalide' }, { status: 400 })
    }

    // Résolution de l'URL de base — côté serveur uniquement
    // SITE_URL (sans préfixe NEXT_PUBLIC_) est disponible à runtime serveur
    // Fallback sur l'origin de la requête si non défini
    const origin = new URL(request.url).origin
    const baseUrl = process.env.SITE_URL || origin

    const isSubscription = priceKey.includes('optimal')
    const isQuestion = priceKey === 'question_unitaire' || priceKey === 'question_abonne'
    const isAssurance = priceKey?.includes('conseil_assurances')

    const successUrl = isQuestion
      ? `${baseUrl}/espace-client?onglet=questions`
      : isSubscription
        ? `${baseUrl}/espace-client?success=abonnement`
        : isAssurance
          ? `${baseUrl}/espace-client?onglet=commandes`
          : `${baseUrl}/espace-client`

    const session = await stripe.checkout.sessions.create({
      mode: isSubscription ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      customer_email: userEmail,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: `${baseUrl}/espace-client`,
      locale: 'fr',
      metadata: {
        priceKey,
        userId: userId || '',
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}