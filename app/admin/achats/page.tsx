'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '../layout'
import { ShoppingBag, CheckCircle, Clock, CreditCard, Landmark, XCircle } from 'lucide-react'

type Achat = {
  id: string
  user_id: string
  document_id: string
  montant: number | null
  mode_paiement: string | null
  statut: string | null
  reference: string | null
  stripe_payment_id: string | null
  created_at: string
  user: { prenom: string; nom: string; email: string } | null
  document_nom: string | null
}

export default function AdminAchats() {
  const { password } = useAdmin()
  const [achats, setAchats] = useState<Achat[]>([])
  const [loading, setLoading] = useState(true)
  const [filtre, setFiltre] = useState<'en_attente' | 'paye' | 'annule' | 'tous'>('en_attente')
  const [actionId, setActionId] = useState<string | null>(null)

  useEffect(() => {
    if (!password) return
    loadAchats()
  }, [password])

  const loadAchats = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/achats-list', { headers: { 'x-admin-password': password } })
    if (res.ok) { const d = await res.json(); setAchats(d.achats || []) }
    setLoading(false)
  }

  const majStatut = async (id: string, statut: string) => {
    if (statut === 'paye' && !confirm('Valider ce paiement ? Le document deviendra immediatement telechargeable par le client.')) return
    if (statut === 'annule' && !confirm('Annuler cette commande ? Le client n\'aura pas acces au document.')) return
    setActionId(id)
    try {
      const res = await fetch('/api/admin/achats-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ id, statut }),
      })
      if (res.ok) await loadAchats()
    } finally {
      setActionId(null)
    }
  }

  const statutDe = (a: Achat) => a.statut || 'paye'

  const achatsFiltres = achats.filter(a => filtre === 'tous' ? true : statutDe(a) === filtre)

  const compte = (s: string) => achats.filter(a => statutDe(a) === s).length
  const enAttenteVirement = achats.filter(a => statutDe(a) === 'en_attente').length

  const badgeStatut = (s: string) => {
    if (s === 'paye') return { label: 'Payé', bg: '#f0fdf4', color: '#15803d' }
    if (s === 'annule') return { label: 'Annulé', bg: '#f3f4f6', color: '#6b7280' }
    return { label: 'En attente de virement', bg: '#fff7ed', color: '#d97706' }
  }

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Achats de documents</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>{enAttenteVirement} en attente de virement · {achats.length} au total</p>
      </div>

      {/* Filtres */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { key: 'en_attente', label: 'En attente', count: compte('en_attente') },
          { key: 'paye', label: 'Payés', count: compte('paye') },
          { key: 'annule', label: 'Annulés', count: compte('annule') },
          { key: 'tous', label: 'Tous', count: achats.length },
        ].map(f => (
          <button key={f.key} onClick={() => setFiltre(f.key as typeof filtre)}
            style={{ padding: '8px 16px', borderRadius: '8px', border: filtre === f.key ? 'none' : '1px solid #e5e7eb', background: filtre === f.key ? '#0f2d6e' : 'white', color: filtre === f.key ? 'white' : '#6b7280', fontSize: '12px', fontWeight: '600', cursor: 'pointer' } as React.CSSProperties}>
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {achatsFiltres.length === 0 ? (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <ShoppingBag size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
            {filtre === 'en_attente' ? 'Aucun virement en attente.' : 'Aucun achat.'}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {achatsFiltres.map(a => {
            const s = statutDe(a)
            const badge = badgeStatut(s)
            const virement = a.mode_paiement === 'virement'
            const montantAff = a.montant != null
              ? Number(a.montant).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u00a0€'
              : '-'
            return (
              <div key={a.id} style={{ background: 'white', border: `1px solid ${s === 'en_attente' ? '#fed7aa' : '#e5e7eb'}`, borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ width: '36px', height: '36px', background: virement ? '#fff7ed' : '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {virement ? <Landmark size={16} color="#d97706" /> : <CreditCard size={16} color="#1a4fba" />}
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>{a.document_nom || 'Document'}</p>
                      <span style={{ background: badge.bg, color: badge.color, fontSize: '10px', fontWeight: '700', padding: '1px 8px', borderRadius: '20px' }}>{badge.label}</span>
                    </div>
                    <p style={{ color: '#374151', fontSize: '12px', margin: '0 0 2px' }}>
                      {a.user ? `${a.user.prenom} ${a.user.nom}` : 'Client'}
                      {a.user?.email ? <span style={{ color: '#9ca3af' }}> · {a.user.email}</span> : null}
                    </p>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                      {montantAff} · {virement ? 'Virement' : 'Carte'}
                      {virement && a.reference ? ` · ${a.reference}` : ''} · {new Date(a.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  {s === 'en_attente' && (
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0, flexWrap: 'wrap' }}>
                      <button onClick={() => majStatut(a.id, 'paye')} disabled={actionId === a.id}
                        style={{ background: actionId === a.id ? '#9ca3af' : '#16a34a', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: actionId === a.id ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={13} /> {actionId === a.id ? '...' : 'Valider le paiement'}
                      </button>
                      <button onClick={() => majStatut(a.id, 'annule')} disabled={actionId === a.id}
                        style={{ background: 'transparent', color: '#dc2626', border: '1px solid #fecaca', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: actionId === a.id ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <XCircle size={13} /> Annuler
                      </button>
                    </div>
                  )}
                  {s === 'paye' && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#15803d', fontSize: '12px', fontWeight: '600', flexShrink: 0 }}>
                      <CheckCircle size={14} /> Accès ouvert
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
        Les achats par carte sont validés automatiquement. Pour un virement, cliquez sur « Valider le paiement » dès réception des fonds : le document devient alors téléchargeable depuis l'espace client de l'acheteur.
      </p>
    </div>
  )
}