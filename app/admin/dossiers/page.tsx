'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { Shield, CheckCircle, Clock, AlertCircle, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react'

type Dossier = {
  id: string
  user_id: string
  statut: string
  type: string
  notes: string | null
  date_livraison: string | null
  created_at: string
  stripe_payment_id: string | null
  users: { prenom: string; nom: string; email: string; telephone: string | null } | null
}

const STATUTS = [
  { value: 'en_attente', label: 'En attente', color: '#d97706', bg: '#fef3c7' },
  { value: 'en_cours', label: 'En cours', color: '#1a4fba', bg: '#eff6ff' },
  { value: 'livre', label: 'Livré', color: '#15803d', bg: '#f0fdf4' },
]

export default function AdminDossiers() {
  const { password } = useAdmin()
  const [dossiers, setDossiers] = useState<Dossier[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [saveStatut, setSaveStatut] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({})
  const [filtre, setFiltre] = useState<'tous' | 'en_attente' | 'en_cours' | 'livre'>('en_attente')

  useEffect(() => {
    if (!password) return
    loadDossiers()
  }, [password])

  const loadDossiers = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/dossiers-list', { headers: { 'x-admin-password': password } })
    if (res.ok) { const d = await res.json(); setDossiers(d.dossiers || []) }
    setLoading(false)
  }

  const updateDossier = async (id: string, updates: Record<string, string | null>) => {
    setSaveStatut(s => ({ ...s, [id]: 'loading' }))
    const res = await fetch('/api/admin/dossiers-update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ id, ...updates }),
    })
    if (res.ok) {
      setSaveStatut(s => ({ ...s, [id]: 'success' }))
      loadDossiers()
      setTimeout(() => setSaveStatut(s => ({ ...s, [id]: 'idle' })), 2000)
    } else {
      setSaveStatut(s => ({ ...s, [id]: 'error' }))
    }
  }

  const dossiersFiltres = dossiers.filter(d => filtre === 'tous' ? true : d.statut === filtre)

  const typeLabel = (type: string) => type === 'pro' ? 'Pro / Association — 150 € HT' : 'Particulier — 90 € HT'

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Dossiers assurances</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>
          {dossiers.filter(d => d.statut === 'en_attente').length} en attente · {dossiers.length} au total
        </p>
      </div>

      {/* Filtres */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {[
          { key: 'en_attente', label: 'En attente', count: dossiers.filter(d => d.statut === 'en_attente').length },
          { key: 'en_cours', label: 'En cours', count: dossiers.filter(d => d.statut === 'en_cours').length },
          { key: 'livre', label: 'Livrés', count: dossiers.filter(d => d.statut === 'livre').length },
          { key: 'tous', label: 'Tous', count: dossiers.length },
        ].map(f => (
          <button key={f.key} onClick={() => setFiltre(f.key as typeof filtre)}
            style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: filtre === f.key ? '#0f2d6e' : 'white', color: filtre === f.key ? 'white' : '#6b7280', border: filtre === f.key ? 'none' : '1px solid #e5e7eb' } as React.CSSProperties}>
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {dossiersFiltres.length === 0 ? (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <Shield size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Aucun dossier dans cette catégorie.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {dossiersFiltres.map(d => {
            const statut = STATUTS.find(s => s.value === d.statut) || STATUTS[0]
            return (
              <div key={d.id} style={{ background: 'white', border: `1px solid ${d.statut === 'en_attente' ? '#fcd34d' : '#e5e7eb'}`, borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ padding: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}
                  onClick={() => setExpanded(expanded === d.id ? null : d.id)}>
                  <div style={{ width: '36px', height: '36px', background: statut.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {d.statut === 'livre' ? <CheckCircle size={16} color={statut.color} /> : <Clock size={16} color={statut.color} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>
                        {d.users ? `${d.users.prenom} ${d.users.nom}` : 'Client'}
                      </p>
                      <span style={{ background: statut.bg, color: statut.color, fontSize: '10px', fontWeight: '700', padding: '1px 7px', borderRadius: '4px' }}>
                        {statut.label}
                      </span>
                      <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '1px 7px', borderRadius: '4px' }}>
                        {typeLabel(d.type)}
                      </span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                      {d.users?.email} · {new Date(d.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    {d.users?.email && (
                      <a href={`mailto:${d.users.email}`} onClick={e => e.stopPropagation()}
                        style={{ background: '#f3f4f6', border: 'none', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Mail size={13} color="#6b7280" />
                      </a>
                    )}
                    {d.users?.telephone && (
                      <a href={`tel:${d.users.telephone}`} onClick={e => e.stopPropagation()}
                        style={{ background: '#f3f4f6', border: 'none', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Phone size={13} color="#6b7280" />
                      </a>
                    )}
                    {expanded === d.id ? <ChevronUp size={16} color="#9ca3af" /> : <ChevronDown size={16} color="#9ca3af" />}
                  </div>
                </div>

                {expanded === d.id && (
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: '14px' }}>

                    {/* Changer statut */}
                    <div>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 8px' }}>Statut du dossier</p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {STATUTS.map(s => (
                          <button key={s.value}
                            onClick={() => updateDossier(d.id, { statut: s.value })}
                            style={{ padding: '7px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: d.statut === s.value ? s.bg : 'white', color: d.statut === s.value ? s.color : '#6b7280', border: `1px solid ${d.statut === s.value ? s.color : '#e5e7eb'}`, transition: 'all 0.15s' }}>
                            {s.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes internes */}
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                        Notes internes (non visibles du client)
                      </label>
                      <textarea
                        value={notes[d.id] ?? (d.notes || '')}
                        onChange={e => setNotes(n => ({ ...n, [d.id]: e.target.value }))}
                        placeholder="Notes sur le dossier, contacts, état d'avancement..."
                        rows={3}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none', resize: 'vertical' as const }}
                      />
                    </div>

                    {saveStatut[d.id] === 'success' && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={14} color="#16a34a" />
                        <p style={{ color: '#15803d', fontSize: '12px', margin: 0 }}>Dossier mis à jour.</p>
                      </div>
                    )}

                    <button
                      onClick={() => updateDossier(d.id, { notes: notes[d.id] ?? d.notes ?? '' })}
                      disabled={saveStatut[d.id] === 'loading'}
                      style={{ background: saveStatut[d.id] === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', alignSelf: 'flex-start' }}>
                      {saveStatut[d.id] === 'loading' ? 'Enregistrement...' : 'Enregistrer les notes'}
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}