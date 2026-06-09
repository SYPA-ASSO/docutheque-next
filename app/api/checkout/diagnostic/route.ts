import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

// app/api/checkout/diagnostic/route.ts
// Cree une session Stripe Checkout pour le Diagnostic RGPD Essentiel (350 euros).
// price_data inline : aucun produit a creer dans le dashboard Stripe.
// success_url / cancel_url derivees de l'origine de la requete : compatible URL Vercel temporaire et NDD.

export async function POST(request: NextRequest) {
  try {
    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      locale: 'fr',
      billing_address_collection: 'required',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: 35000,
            product_data: {
              name: 'Diagnostic RGPD Essentiel',
              description: 'Diagnostic de conformite RGPD, livrable sous 30 jours calendaires',
            },
          },
          quantity: 1,
        },
      ],
      metadata: { produit: 'diagnostic_essentiel' },
      payment_intent_data: { metadata: { produit: 'diagnostic_essentiel' } },
      success_url: `${origin}/rgpd-conformite/diagnostic-essentiel?paye=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/rgpd-conformite/diagnostic-essentiel?annule=1`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[Checkout Diagnostic] Erreur Stripe:', error)
    return NextResponse.json(
      { error: 'Le paiement par carte est momentanément indisponible. Vous pouvez régler par virement.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}