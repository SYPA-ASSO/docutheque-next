// lib/revenus-stripe.ts
// Agregation des revenus reels depuis Stripe (source de verite des montants).
//
// MRR : pour chaque abonnement actif, on lit le TOTAL de sa prochaine facture
// (invoices.createPreview), que Stripe calcule deja net de toutes les remises,
// qu'elles soient portees par l'abonnement OU par le client, et en respectant
// la duree du coupon. Un abonnement remise a 100 % donne donc un total de 0.
// Ce montant (sur une periode de facturation) est ensuite ramene au mois.
//
// Repli : si l'apercu de facture echoue, on calcule le brut a partir des lignes
// et on applique manuellement les remises de l'abonnement ET du client.
//
// Encaissements : charges Stripe abouties, deduction faite des remboursements.
// Churn : abonnements resilies sur les 30 derniers jours.
//
// Module appele cote serveur uniquement (routes API admin).

import Stripe from 'stripe'
import { stripe, PRICE_IDS } from '@/lib/stripe'

export type RepartitionAbonnes = {
  particulier_mensuel: number
  particulier_annuel: number
  pro_mensuel: number
  pro_annuel: number
  autre: number
}

export type DetailAbonnement = {
  email: string | null
  brut_mensuel: number
  net_mensuel: number
  remise: boolean
  methode: string
}

export type RevenusReels = {
  stripeOk: boolean
  erreur?: string
  mrr: number
  arr: number
  nb_abonnes_actifs: number
  repartition: RepartitionAbonnes
  churn_30j: number
  encaisse_stripe_total: number
  encaisse_stripe_30j: number
  nb_paiements: number
  nb_paiements_30j: number
  detail_abonnements: DetailAbonnement[]
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

// Table inverse priceId -> categorie, a partir des identifiants en vigueur
// (surcharges d'environnement comprises : prix LIVE en production).
function tablePrix(): Record<string, { type: 'particulier' | 'pro'; periode: 'mensuel' | 'annuel' }> {
  return {
    [PRICE_IDS.optimal_particulier_monthly]: { type: 'particulier', periode: 'mensuel' },
    [PRICE_IDS.optimal_particulier_yearly]: { type: 'particulier', periode: 'annuel' },
    [PRICE_IDS.optimal_pro_monthly]: { type: 'pro', periode: 'mensuel' },
    [PRICE_IDS.optimal_pro_yearly]: { type: 'pro', periode: 'annuel' },
  }
}

function clientObjet(c: string | Stripe.Customer | Stripe.DeletedCustomer | null): Stripe.Customer | null {
  if (!c || typeof c === 'string') return null
  if ((c as Stripe.DeletedCustomer).deleted) return null
  return c as Stripe.Customer
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
    detail_abonnements: [],
  }

  try {
    const maintenant = Date.now()
    const seuil30j = Math.floor((maintenant - 30 * 24 * 60 * 60 * 1000) / 1000)
    const prix = tablePrix()

    // Cache de coupons resolus par identifiant (pour le repli manuel).
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

    // Repli : applique manuellement une liste de remises a un brut mensuel.
    async function netApresRemises(brutMensuel: number, interval: string, count: number, remises: Stripe.Discount[]): Promise<{ net: number; remise: boolean }> {
      let net = brutMensuel
      let remiseAppliquee = false
      for (const d of remises) {
        const coupon = await resoudreCoupon(d.source.coupon)
        if (!coupon) continue
        if (coupon.duration === 'once') continue
        if (coupon.duration === 'repeating' && d.end && d.end * 1000 < maintenant) continue
        if (coupon.percent_off != null) {
          net = net * (1 - coupon.percent_off / 100)
          remiseAppliquee = true
        } else if (coupon.amount_off != null) {
          net = Math.max(0, net - parMois(coupon.amount_off, interval, count))
          remiseAppliquee = true
        }
      }
      return { net: Math.max(0, net), remise: remiseAppliquee }
    }

    // 1. Abonnements actifs (client etendu pour lire son eventuelle remise + son email).
    const abosActifs = await stripe.subscriptions
      .list({ status: 'active', limit: 100, expand: ['data.customer'] })
      .autoPagingToArray({ limit: 1000 })

    const repartition: RepartitionAbonnes = {
      particulier_mensuel: 0,
      particulier_annuel: 0,
      pro_mensuel: 0,
      pro_annuel: 0,
      autre: 0,
    }
    let mrrCents = 0
    const detail: DetailAbonnement[] = []

    for (const sub of abosActifs) {
      const client = clientObjet(sub.customer)

      // Brut sur une periode de facturation, a partir des lignes de l'abonnement.
      let brutPeriodeCents = 0
      let interval = 'month'
      let count = 1
      let premiere = true
      for (const item of sub.items.data) {
        const p = item.price
        if (!p || p.unit_amount == null || !p.recurring) continue
        const qty = item.quantity ?? 1
        brutPeriodeCents += p.unit_amount * qty
        if (premiere) {
          interval = p.recurring.interval
          count = p.recurring.interval_count
          premiere = false
        }
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
      const brutMensuel = parMois(brutPeriodeCents, interval, count)

      // Net : on lit le total de la prochaine facture (deja net de toutes les remises).
      let netMensuel = brutMensuel
      let remiseDetectee = false
      let methode = 'apercu facture'
      try {
        const apercu = await stripe.invoices.createPreview({ subscription: sub.id })
        netMensuel = parMois(apercu.total, interval, count)
        remiseDetectee = apercu.total < brutPeriodeCents
      } catch {
        // Repli : remises de l'abonnement + du client, calculees manuellement.
        const remises: Stripe.Discount[] = []
        for (const d of sub.discounts) if (typeof d !== 'string') remises.push(d)
        if (client && client.discount) remises.push(client.discount)
        const r = await netApresRemises(brutMensuel, interval, count, remises)
        netMensuel = r.net
        remiseDetectee = r.remise
        methode = 'calcul manuel'
      }

      if (netMensuel < 0) netMensuel = 0
      mrrCents += netMensuel // brutMensuel et netMensuel sont deja en centimes

      detail.push({
        email: client?.email ?? null,
        brut_mensuel: arrondi(brutMensuel / 100),
        net_mensuel: arrondi(netMensuel / 100),
        remise: remiseDetectee,
        methode,
      })
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
      detail_abonnements: detail,
    }
  } catch (e) {
    return { ...vide, erreur: e instanceof Error ? e.message : 'Erreur Stripe inconnue.' }
  }
}
