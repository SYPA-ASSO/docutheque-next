// lib/revenus-stripe.ts
// Agregation des revenus reels depuis Stripe (source de verite des montants).
//
// Objectif : des chiffres fideles a la realite, et non au tarif nominal.
//   - MRR / ARR calcules sur les abonnements actifs NETS de leurs coupons.
//     Un abonnement remise a 100 % compte donc pour zero.
//     La duree du coupon est respectee :
//       * forever   -> reduit le MRR durablement
//       * repeating -> reduit le MRR tant que la remise court (fenetre non expiree)
//       * once      -> ne reduit PAS le MRR (seule la premiere echeance etait remisee,
//                      l'abonnement se renouvelle au tarif plein)
//   - Encaissements reels = charges Stripe abouties, deduction faite des remboursements.
//   - Churn = abonnements resilies sur les 30 derniers jours.
//
// Ce module est appele cote serveur uniquement (routes API admin).

import Stripe from 'stripe'
import { stripe, PRICE_IDS } from '@/lib/stripe'

export type RepartitionAbonnes = {
  particulier_mensuel: number
  particulier_annuel: number
  pro_mensuel: number
  pro_annuel: number
  autre: number
}

export type RevenusReels = {
  stripeOk: boolean
  erreur?: string
  // Abonnements (nets de coupons)
  mrr: number
  arr: number
  nb_abonnes_actifs: number
  repartition: RepartitionAbonnes
  churn_30j: number
  // Encaissements cartes (Stripe)
  encaisse_stripe_total: number
  encaisse_stripe_30j: number
  nb_paiements: number
  nb_paiements_30j: number
}

const arrondi = (n: number) => Math.round(n * 100) / 100

// Ramene un montant (en centimes) a son equivalent mensuel selon l'intervalle de facturation.
function parMois(montantCents: number, interval: string, intervalCount: number): number {
  const c = intervalCount > 0 ? intervalCount : 1
  switch (interval) {
    case 'month':
      return montantCents / c
    case 'year':
      return montantCents / (12 * c)
    case 'week':
      return (montantCents * 52) / 12 / c
    case 'day':
      return (montantCents * 365) / 12 / c
    default:
      return montantCents / c
  }
}

// Construit la table inverse priceId -> categorie, a partir des identifiants en vigueur
// (surcharges d'environnement comprises : on lit donc les prix LIVE en production).
function tablePrix(): Record<string, { type: 'particulier' | 'pro'; periode: 'mensuel' | 'annuel' }> {
  return {
    [PRICE_IDS.optimal_particulier_monthly]: { type: 'particulier', periode: 'mensuel' },
    [PRICE_IDS.optimal_particulier_yearly]: { type: 'particulier', periode: 'annuel' },
    [PRICE_IDS.optimal_pro_monthly]: { type: 'pro', periode: 'mensuel' },
    [PRICE_IDS.optimal_pro_yearly]: { type: 'pro', periode: 'annuel' },
  }
}

export async function calculeRevenusReels(): Promise<RevenusReels> {
  const vide: RevenusReels = {
    stripeOk: false,
    mrr: 0,
    arr: 0,
    nb_abonnes_actifs: 0,
    repartition: { particulier_mensuel: 0, particulier_annuel: 0, pro_mensuel: 0, pro_annuel: 0, autre: 0 },
    churn_30j: 0,
    encaisse_stripe_total: 0,
    encaisse_stripe_30j: 0,
    nb_paiements: 0,
    nb_paiements_30j: 0,
  }

  try {
    const maintenant = Date.now()
    const seuil30j = Math.floor((maintenant - 30 * 24 * 60 * 60 * 1000) / 1000)
    const prix = tablePrix()

    // Cache de coupons resolus par identifiant (evite les appels repetes).
    const cacheCoupons = new Map<string, Stripe.Coupon | null>()
    async function resoudreCoupon(c: string | Stripe.Coupon | null): Promise<Stripe.Coupon | null> {
      if (!c) return null
      if (typeof c !== 'string') return c
      if (cacheCoupons.has(c)) return cacheCoupons.get(c) ?? null
      try {
        const coupon = await stripe.coupons.retrieve(c)
        cacheCoupons.set(c, coupon)
        return coupon
      } catch {
        cacheCoupons.set(c, null)
        return null
      }
    }

    // 1. Abonnements actifs -> MRR net de coupons + repartition.
    const abosActifs = await stripe.subscriptions.list({ status: 'active', limit: 100 }).autoPagingToArray({ limit: 1000 })

    const repartition: RepartitionAbonnes = {
      particulier_mensuel: 0,
      particulier_annuel: 0,
      pro_mensuel: 0,
      pro_annuel: 0,
      autre: 0,
    }
    let mrrCents = 0

    for (const sub of abosActifs) {
      // Montant brut mensuel = somme des lignes de l'abonnement, ramenees au mois.
      let brutMensuel = 0
      let intervalPrincipal = 'month'
      let countPrincipal = 1
      let premiereLigne = true

      for (const item of sub.items.data) {
        const p = item.price
        if (!p || p.unit_amount == null || !p.recurring) continue
        const qty = item.quantity ?? 1
        const ligneMensuelle = parMois(p.unit_amount * qty, p.recurring.interval, p.recurring.interval_count)
        brutMensuel += ligneMensuelle
        if (premiereLigne) {
          intervalPrincipal = p.recurring.interval
          countPrincipal = p.recurring.interval_count
          premiereLigne = false
        }

        // Repartition par categorie (sur la base du prix de chaque ligne).
        const cat = prix[p.id]
        if (cat) {
          if (cat.type === 'particulier' && cat.periode === 'mensuel') repartition.particulier_mensuel++
          else if (cat.type === 'particulier' && cat.periode === 'annuel') repartition.particulier_annuel++
          else if (cat.type === 'pro' && cat.periode === 'mensuel') repartition.pro_mensuel++
          else if (cat.type === 'pro' && cat.periode === 'annuel') repartition.pro_annuel++
          else repartition.autre++
        } else {
          repartition.autre++
        }
      }

      // Application des remises (coupons) en respectant leur duree.
      let netMensuel = brutMensuel
      for (const d of sub.discounts) {
        if (typeof d === 'string') continue // remise non detaillee : ignoree
        const coupon = await resoudreCoupon(d.source.coupon)
        if (!coupon) continue
        if (coupon.duration === 'once') continue // n'affecte que la 1re echeance : pas d'impact recurrent
        if (coupon.duration === 'repeating' && d.end && d.end * 1000 < maintenant) continue // fenetre expiree

        if (coupon.percent_off != null) {
          netMensuel = netMensuel * (1 - coupon.percent_off / 100)
        } else if (coupon.amount_off != null) {
          const reduction = parMois(coupon.amount_off, intervalPrincipal, countPrincipal)
          netMensuel = Math.max(0, netMensuel - reduction)
        }
      }

      if (netMensuel < 0) netMensuel = 0
      mrrCents += netMensuel
    }

    const mrr = arrondi(mrrCents / 100)
    const arr = arrondi(mrr * 12)

    // 2. Encaissements reels (charges abouties, nettes de remboursements).
    const charges = await stripe.charges.list({ limit: 100 }).autoPagingToArray({ limit: 2000 })
    let encaisseTotalCents = 0
    let encaisse30jCents = 0
    let nbPaiements = 0
    let nbPaiements30j = 0
    for (const ch of charges) {
      if (ch.status !== 'succeeded') continue
      const netCents = ch.amount - ch.amount_refunded
      if (netCents <= 0) continue
      encaisseTotalCents += netCents
      nbPaiements++
      if (ch.created >= seuil30j) {
        encaisse30jCents += netCents
        nbPaiements30j++
      }
    }

    // 3. Churn : abonnements resilies sur 30 jours.
    const abosResilies = await stripe.subscriptions.list({ status: 'canceled', limit: 100 }).autoPagingToArray({ limit: 1000 })
    const churn30j = abosResilies.filter((s) => s.canceled_at != null && s.canceled_at >= seuil30j).length

    return {
      stripeOk: true,
      mrr,
      arr,
      nb_abonnes_actifs: abosActifs.length,
      repartition,
      churn_30j: churn30j,
      encaisse_stripe_total: arrondi(encaisseTotalCents / 100),
      encaisse_stripe_30j: arrondi(encaisse30jCents / 100),
      nb_paiements: nbPaiements,
      nb_paiements_30j: nbPaiements30j,
    }
  } catch (e) {
    return { ...vide, erreur: e instanceof Error ? e.message : 'Erreur Stripe inconnue.' }
  }
}
