// lib/tarifs.ts
// Tarifs des abonnements et calcul du revenu mensuel recurrent (MRR).
// Equivalent mensuel en euros par type et periode (annuel ramene au mois).

export const MRR_PAR_ABONNEMENT: Record<string, number> = {
  'optimal_particulier|monthly': 17.9,
  'optimal_particulier|yearly': 149 / 12,
  'optimal_pro|monthly': 27.9,
  'optimal_pro|yearly': 249 / 12,
}

type AbonnementMinimal = { abonnement_type?: string | null; abonnement_periode?: string | null }

export function calculeMRR(abonnes: AbonnementMinimal[]): number {
  let mrr = 0
  for (const a of abonnes) {
    const type = a.abonnement_type === 'optimal_pro' ? 'optimal_pro' : 'optimal_particulier'
    const periode = a.abonnement_periode === 'yearly' ? 'yearly' : 'monthly'
    mrr += MRR_PAR_ABONNEMENT[`${type}|${periode}`] || 0
  }
  return Math.round(mrr * 100) / 100
}

export function repartitionAbonnes(abonnes: AbonnementMinimal[]) {
  const r = { particulier_mensuel: 0, particulier_annuel: 0, pro_mensuel: 0, pro_annuel: 0 }
  for (const a of abonnes) {
    const pro = a.abonnement_type === 'optimal_pro'
    const annuel = a.abonnement_periode === 'yearly'
    if (pro && annuel) r.pro_annuel++
    else if (pro) r.pro_mensuel++
    else if (annuel) r.particulier_annuel++
    else r.particulier_mensuel++
  }
  return r
}
