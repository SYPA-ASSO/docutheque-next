import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-04-22.dahlia',
})

export const PRICE_IDS = {
  optimal_particulier_monthly: 'price_1Tb1Z4Bmvu2pHBgzcD2iuldz',
  optimal_particulier_yearly:  'price_1Tb1enBmvu2pHBgzcd9eTgtq',
  optimal_pro_monthly:         'price_1Tb1kJBmvu2pHBgzdqt7kCcr',
  optimal_pro_yearly:          'price_1Tb1ruBmvu2pHBgzJs8l7ngI',
  question_unitaire:           'price_1Tb1unBmvu2pHBgzWRQD1Bf0',
  question_abonne:             'price_1Tb1wCBmvu2pHBgzaY7auzsK',
  conseil_assurances_particulier: 'price_1Tb1xyBmvu2pHBgzOnHchsZ3',
  conseil_assurances_pro:      'price_1Tb20ABmvu2pHBgzjSyOfDb5',
}