import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia',
})

// Identifiants de prix Stripe.
// Chaque cle peut etre surchargee par une variable d'environnement : on met les identifiants
// LIVE sur l'environnement Production de Vercel. A defaut de variable, on retombe sur
// l'identifiant de TEST en dur, pour que le developpement local et les deploiements Preview
// fonctionnent en mode test sans configuration supplementaire.
export const PRICE_IDS = {
  optimal_particulier_monthly:    process.env.STRIPE_PRICE_OPTIMAL_PARTICULIER_MONTHLY || 'price_1Tb1Z4Bmvu2pHBgzcD2iuldz',
  optimal_particulier_yearly:     process.env.STRIPE_PRICE_OPTIMAL_PARTICULIER_YEARLY  || 'price_1Tb1enBmvu2pHBgzcd9eTgtq',
  optimal_pro_monthly:            process.env.STRIPE_PRICE_OPTIMAL_PRO_MONTHLY         || 'price_1Tb1kJBmvu2pHBgzdqt7kCcr',
  optimal_pro_yearly:             process.env.STRIPE_PRICE_OPTIMAL_PRO_YEARLY          || 'price_1Tb1ruBmvu2pHBgzJs8l7ngI',
  question_unitaire:              process.env.STRIPE_PRICE_QUESTION_UNITAIRE           || 'price_1Tb1unBmvu2pHBgzWRQD1Bf0',
  question_abonne:                process.env.STRIPE_PRICE_QUESTION_ABONNE             || 'price_1Tb1wCBmvu2pHBgzaY7auzsK',
  conseil_assurances_particulier: process.env.STRIPE_PRICE_CONSEIL_PARTICULIER        || 'price_1Tb1xyBmvu2pHBgzOnHchsZ3',
  conseil_assurances_pro:         process.env.STRIPE_PRICE_CONSEIL_PRO                 || 'price_1Tb20ABmvu2pHBgzjSyOfDb5',
}