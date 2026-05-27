'use client'

import { TrendingUp, Clock } from 'lucide-react'

export default function AdminRevenus() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Revenus</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Statistiques financières via Stripe</p>
      </div>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
        <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
          <TrendingUp size={26} color="white" strokeWidth={1.5} />
        </div>
        <p style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: '700', margin: '0 0 8px' }}>Disponible après déploiement NDD</p>
        <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 20px', lineHeight: '1.7', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
          Les statistiques de revenus seront activées une fois le NDD <strong>cholez-pagotto.fr</strong> déployé et le webhook Stripe production configuré.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', maxWidth: '500px', margin: '0 auto' }}>
          {[
            'Revenus mensuels MRR',
            'Revenus annuels ARR',
            'Chiffre d\'affaires total',
            'Abonnements actifs',
            'Taux de churn',
            'Panier moyen',
          ].map((label, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: '8px', padding: '12px', border: '1px dashed #e5e7eb' }}>
              <p style={{ color: '#d1d5db', fontSize: '11px', margin: '0 0 4px' }}>{label}</p>
              <div style={{ height: '20px', background: '#e5e7eb', borderRadius: '4px', width: '60%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}