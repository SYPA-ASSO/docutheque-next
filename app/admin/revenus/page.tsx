'use client'

import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { TrendingUp, Crown, Wallet, ShoppingBag, Info } from 'lucide-react'

const NB = '\u00a0'
function eur(n: number) {
  return n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + NB + '€'
}

const NOTE =
  "Le MRR et l'ARR sont calculés à partir des abonnements actifs et des tarifs en vigueur. Le chiffre d'affaires des abonnements encaissés, le total tous canaux confondus et le taux de churn ne sont pas reconstituables depuis la base de données : ils nécessitent une agrégation directe depuis Stripe, prévue comme étape suivante."

type Stats = {
  nb_abonnes: number
  repartition: { particulier_mensuel: number; particulier_annuel: number; pro_mensuel: number; pro_annuel: number }
  mrr: number
  arr: number
  ca_documents: number
  ca_documents_30j: number
  nb_ventes: number
  nb_ventes_30j: number
  panier_moyen: number
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

  const cards = [
    { label: 'Revenus mensuels (MRR)', value: eur(stats.mrr), sub: 'abonnements en cours', icon: <TrendingUp size={20} color="#1a4fba" strokeWidth={1.5} />, bg: '#eff6ff' },
    { label: 'Revenus annuels (ARR)', value: eur(stats.arr), sub: 'MRR projeté sur 12 mois', icon: <TrendingUp size={20} color="#15803d" strokeWidth={1.5} />, bg: '#f0fdf4' },
    { label: 'Abonnés actifs', value: String(stats.nb_abonnes), sub: 'comptes avec abonnement', icon: <Crown size={20} color="#d97706" strokeWidth={1.5} />, bg: '#fff7ed' },
    { label: 'Panier moyen (documents)', value: eur(stats.panier_moyen), sub: `${stats.nb_ventes} vente${stats.nb_ventes > 1 ? 's' : ''} au total`, icon: <Wallet size={20} color="#7c3aed" strokeWidth={1.5} />, bg: '#f5f3ff' },
  ]

  const repart = [
    { l: 'Particulier mensuel', v: stats.repartition.particulier_mensuel },
    { l: 'Particulier annuel', v: stats.repartition.particulier_annuel },
    { l: 'Pro mensuel', v: stats.repartition.pro_mensuel },
    { l: 'Pro annuel', v: stats.repartition.pro_annuel },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 4px' }}>Revenus</h1>
        <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>Revenu récurrent et ventes de documents</p>
      </div>

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

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
        <h2 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: '0 0 14px' }}>Répartition des abonnés actifs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12 }}>
          {repart.map((r, i) => (
            <div key={i} style={bloc}>
              <p style={valStyle}>{r.v}</p>
              <p style={labStyle}>{r.l}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <ShoppingBag size={18} color="#0f2d6e" strokeWidth={1.5} />
          <h2 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: 0 }}>{"Ventes de documents à l'unité"}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          <div style={bloc}>
            <p style={valStyle}>{eur(stats.ca_documents)}</p>
            <p style={labStyle}>{"Chiffre d'affaires documents (total)"}</p>
          </div>
          <div style={bloc}>
            <p style={valStyle}>{eur(stats.ca_documents_30j)}</p>
            <p style={labStyle}>Sur les 30 derniers jours</p>
          </div>
          <div style={bloc}>
            <p style={valStyle}>{stats.nb_ventes}</p>
            <p style={labStyle}>Documents vendus (total)</p>
          </div>
          <div style={bloc}>
            <p style={valStyle}>{stats.nb_ventes_30j}</p>
            <p style={labStyle}>Vendus sur 30 jours</p>
          </div>
        </div>
      </div>

      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.9rem 1.1rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <Info size={16} color="#1a4fba" style={{ marginTop: 2, flexShrink: 0 }} />
        <p style={{ color: '#374151', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{NOTE}</p>
      </div>
    </div>
  )
}

const bloc: CSSProperties = { background: '#f8fafc', borderRadius: 8, padding: '12px 14px' }
const valStyle: CSSProperties = { color: '#0f2d6e', fontSize: '1.3rem', fontWeight: 800, margin: '0 0 2px' }
const labStyle: CSSProperties = { color: '#6b7280', fontSize: 11, margin: 0 }
