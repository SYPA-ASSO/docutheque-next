'use client'

import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { TrendingUp, TrendingDown, Crown, Wallet, CreditCard, Banknote, Activity, Info, AlertTriangle } from 'lucide-react'

const NB = '\u00a0'
function eur(n: number) {
  return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + NB + '€'
}

const NOTE =
  "Les montants proviennent directement de Stripe. Le MRR et l'ARR portent sur les abonnements actifs, nets de leurs remises et coupons : un abonnement remisé à 100 % compte donc pour zéro, et la durée du coupon est respectée (une remise permanente réduit durablement le MRR, une remise sur la première échéance seulement ne le réduit pas). Les encaissements correspondent aux paiements par carte réellement perçus, déduction faite des remboursements. Les ventes réglées par virement sont lues depuis la base et ajoutées au total. Les abonnements en période d'essai et les éventuels encaissements par virement hors documents ne sont pas comptés ici."

type Repartition = {
  particulier_mensuel: number
  particulier_annuel: number
  pro_mensuel: number
  pro_annuel: number
  autre: number
}

type Stats = {
  stripeOk: boolean
  erreur: string | null
  mrr: number
  arr: number
  nb_abonnes_actifs: number
  repartition: Repartition
  churn_30j: number
  encaisse_stripe_total: number
  encaisse_stripe_30j: number
  nb_paiements: number
  nb_paiements_30j: number
  ca_virements_documents: number
  nb_virements_documents: number
  total_ca_reel: number
  nb_ventes_documents: number
  nb_ventes_documents_30j: number
  detail_abonnements: Array<{ email: string | null; brut_mensuel: number; net_mensuel: number; remise: boolean; methode: string }>
}

export default function AdminRevenus() {
  const { password } = useAdmin()
  const [stats, setStats] = useState<Stats | null>(null)
  const [erreur, setErreur] = useState(false)

  useEffect(() => {
    if (!password) return
    fetch('/api/admin/revenus-stats', { headers: { 'x-admin-password': password } })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('http'))))
      .then(setStats)
      .catch(() => setErreur(true))
  }, [password])

  if (erreur) return <p style={{ color: '#dc2626', fontSize: 14 }}>Impossible de charger les statistiques de revenus.</p>
  if (!stats) return <p style={{ color: '#6b7280', fontSize: 14 }}>Chargement...</p>

  const ok = stats.stripeOk
  const val = (v: string) => (ok ? v : 'indisponible')

  const cards = [
    { label: 'Revenus mensuels (MRR)', value: val(eur(stats.mrr)), sub: 'abonnements actifs, net des remises', icon: <TrendingUp size={20} color="#1a4fba" strokeWidth={1.5} />, bg: '#eff6ff' },
    { label: 'Revenus annuels (ARR)', value: val(eur(stats.arr)), sub: 'MRR projeté sur 12 mois', icon: <TrendingUp size={20} color="#15803d" strokeWidth={1.5} />, bg: '#f0fdf4' },
    { label: 'Abonnés actifs', value: val(String(stats.nb_abonnes_actifs)), sub: 'abonnements Stripe en cours', icon: <Crown size={20} color="#d97706" strokeWidth={1.5} />, bg: '#fff7ed' },
    { label: 'Résiliations (30 j)', value: val(String(stats.churn_30j)), sub: 'abonnements résiliés sur 30 jours', icon: <TrendingDown size={20} color="#dc2626" strokeWidth={1.5} />, bg: '#fef2f2' },
  ]

  const repart = [
    { l: 'Particulier mensuel', v: stats.repartition.particulier_mensuel },
    { l: 'Particulier annuel', v: stats.repartition.particulier_annuel },
    { l: 'Pro mensuel', v: stats.repartition.pro_mensuel },
    { l: 'Pro annuel', v: stats.repartition.pro_annuel },
  ]
  if (stats.repartition.autre > 0) repart.push({ l: 'Autre', v: stats.repartition.autre })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 4px' }}>Revenus</h1>
        <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>Chiffres réels, lus directement depuis Stripe</p>
      </div>

      {!ok && (
        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 10, padding: '0.9rem 1.1rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <AlertTriangle size={16} color="#d97706" style={{ marginTop: 2, flexShrink: 0 }} />
          <p style={{ color: '#92400e', fontSize: 12, lineHeight: 1.6, margin: 0 }}>
            {"Connexion à Stripe momentanément indisponible : les montants des abonnements et des encaissements ne peuvent pas être affichés. Les indicateurs issus de la base (virements, volume de documents) restent visibles."}
          </p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
            <div style={{ width: 36, height: 36, background: c.bg, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>{c.icon}</div>
            <p style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: 800, margin: '0 0 2px' }}>{c.value}</p>
            <p style={{ color: '#6b7280', fontSize: 12, fontWeight: 600, margin: '0 0 2px' }}>{c.label}</p>
            <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>{c.sub}</p>
          </div>
        ))}
      </div>

      {ok && stats.detail_abonnements.length > 0 && (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <TrendingUp size={18} color="#0f2d6e" strokeWidth={1.5} />
            <h2 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: 0 }}>{'Détail du MRR par abonnement'}</h2>
          </div>
          <p style={{ color: '#9ca3af', fontSize: 11, margin: '0 0 14px' }}>{'Montant net calculé par Stripe, remises comprises'}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {stats.detail_abonnements.map((d, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 10, alignItems: 'center', background: '#f8fafc', borderRadius: 8, padding: '10px 14px' }}>
                <div style={{ minWidth: 0 }}>
                  <p style={{ color: '#0f2d6e', fontSize: 12.5, fontWeight: 600, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.email || 'Client'}</p>
                  <p style={{ color: '#9ca3af', fontSize: 10.5, margin: '1px 0 0' }}>{d.methode}</p>
                </div>
                <div>
                  <p style={{ color: '#6b7280', fontSize: 13, margin: 0, fontWeight: 600 }}>{eur(d.brut_mensuel)}</p>
                  <p style={{ color: '#9ca3af', fontSize: 10, margin: 0 }}>brut / mois</p>
                </div>
                <div>
                  <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999, background: d.remise ? '#fef3c7' : '#f1f5f9', color: d.remise ? '#92400e' : '#64748b' }}>
                    {d.remise ? 'Remise' : 'Plein tarif'}
                  </span>
                </div>
                <div>
                  <p style={{ color: d.net_mensuel === 0 ? '#dc2626' : '#15803d', fontSize: 14, margin: 0, fontWeight: 800 }}>{eur(d.net_mensuel)}</p>
                  <p style={{ color: '#9ca3af', fontSize: 10, margin: 0 }}>net / mois</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <Wallet size={18} color="#0f2d6e" strokeWidth={1.5} />
          <h2 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: 0 }}>Encaissements réels</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 12 }}>
          <Bloc accent="#0f2d6e" valeur={val(eur(stats.total_ca_reel))} libelle="Total encaissé (réel)" detail="cartes Stripe + virements documents" />
          <Bloc valeur={val(eur(stats.encaisse_stripe_total))} libelle="Encaissé par carte (Stripe)" detail={ok ? `dont ${eur(stats.encaisse_stripe_30j)} sur 30 jours` : 'net des remboursements'} icon={<CreditCard size={15} color="#1a4fba" strokeWidth={1.6} />} />
          <Bloc valeur={eur(stats.ca_virements_documents)} libelle="Virements documents" detail={`${stats.nb_virements_documents} virement${stats.nb_virements_documents > 1 ? 's' : ''} validé${stats.nb_virements_documents > 1 ? 's' : ''}`} icon={<Banknote size={15} color="#15803d" strokeWidth={1.6} />} />
          <Bloc valeur={val(String(stats.nb_paiements))} libelle="Paiements par carte" detail={ok ? `dont ${stats.nb_paiements_30j} sur 30 jours` : ''} />
        </div>
      </div>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
        <h2 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: '0 0 14px' }}>Répartition des abonnés actifs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
          {repart.map((r, i) => (
            <Bloc key={i} valeur={ok ? String(r.v) : '-'} libelle={r.l} />
          ))}
        </div>
      </div>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <Activity size={18} color="#0f2d6e" strokeWidth={1.5} />
          <h2 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: 0 }}>Activité documents</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          <Bloc valeur={String(stats.nb_ventes_documents)} libelle="Documents vendus (total)" detail="toutes ventes payées" />
          <Bloc valeur={String(stats.nb_ventes_documents_30j)} libelle="Vendus sur 30 jours" />
        </div>
      </div>

      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.9rem 1.1rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <Info size={16} color="#1a4fba" style={{ marginTop: 2, flexShrink: 0 }} />
        <p style={{ color: '#374151', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{NOTE}</p>
      </div>
    </div>
  )
}

function Bloc({ valeur, libelle, detail, icon, accent }: { valeur: string; libelle: string; detail?: string; icon?: ReactNode; accent?: string }) {
  return (
    <div style={{ background: '#f8fafc', borderRadius: 8, padding: '12px 14px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, margin: '0 0 2px' }}>
        {icon}
        <p style={{ color: accent || '#0f2d6e', fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>{valeur}</p>
      </div>
      <p style={{ color: '#6b7280', fontSize: 11, fontWeight: 600, margin: 0 }}>{libelle}</p>
      {detail ? <p style={{ color: '#9ca3af', fontSize: 10.5, margin: '1px 0 0' }}>{detail}</p> : null}
    </div>
  )
}

