'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { ShieldCheck, CheckCircle, Clock, Mail, Phone, ChevronDown, ChevronUp, Upload, FileText, CreditCard, Landmark } from 'lucide-react'

type Dossier = {
  id: string
  user_id: string
  forfait: string
  montant: number | null
  mode_paiement: string
  reference: string | null
  statut: string
  livrable_url: string | null
  created_at: string
  users: { prenom: string; nom: string; email: string; telephone: string | null } | null
}

const STATUTS = [
  { value: 'en_attente', label: 'En attente', color: '#d97706', bg: '#fef3c7' },
  { value: 'en_cours', label: 'En cours', color: '#1a4fba', bg: '#eff6ff' },
  { value: 'livre', label: 'Livré', color: '#15803d', bg: '#f0fdf4' },
]

function forfaitLabel(forfait: string, montant: number | null): string {
  const prix = montant ? `${montant}\u00a0€` : ''
  if (forfait === 'standard') return `Diagnostic Standard${prix ? ` · ${prix}` : ''}`
  return `Diagnostic Essentiel${prix ? ` · ${prix}` : ''}`
}

export default function AdminDossiersRgpd() {
  const { password } = useAdmin()
  const [dossiers, setDossiers] = useState<Dossier[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [saveStatut, setSaveStatut] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({})
  const [filtre, setFiltre] = useState<'tous' | 'en_attente' | 'en_cours' | 'livre'>('en_attente')
  const [fichier, setFichier] = useState<Record<string, File | null>>({})
  const [uploadStatut, setUploadStatut] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({})
  const [uploadErreur, setUploadErreur] = useState<Record<string, string>>({})

  useEffect(() => {
    if (!password) return
    loadDossiers()
  }, [password])

  const loadDossiers = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/dossiers-rgpd-list', { headers: { 'x-admin-password': password } })
    if (res.ok) { const d = await res.json(); setDossiers(d.dossiers || []) }
    setLoading(false)
  }

  const updateStatut = async (id: string, statut: string) => {
    setSaveStatut(s => ({ ...s, [id]: 'loading' }))
    const res = await fetch('/api/admin/dossiers-rgpd-update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ id, statut }),
    })
    if (res.ok) {
      setSaveStatut(s => ({ ...s, [id]: 'success' }))
      loadDossiers()
      setTimeout(() => setSaveStatut(s => ({ ...s, [id]: 'idle' })), 2000)
    } else {
      setSaveStatut(s => ({ ...s, [id]: 'error' }))
    }
  }

  const handleUpload = async (d: Dossier) => {
    const file = fichier[d.id]
    if (!file) { setUploadErreur(e => ({ ...e, [d.id]: 'Sélectionnez un fichier PDF.' })); return }
    setUploadStatut(s => ({ ...s, [d.id]: 'loading' }))
    setUploadErreur(e => ({ ...e, [d.id]: '' }))
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('dossierId', d.id)
      formData.append('userId', d.user_id)
      const res = await fetch('/api/admin/livrable-rgpd-upload', {
        method: 'POST',
        headers: { 'x-admin-password': password },
        body: formData,
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setUploadStatut(s => ({ ...s, [d.id]: 'success' }))
        setFichier(f => ({ ...f, [d.id]: null }))
        loadDossiers()
        setTimeout(() => setUploadStatut(s => ({ ...s, [d.id]: 'idle' })), 2500)
      } else {
        setUploadStatut(s => ({ ...s, [d.id]: 'error' }))
        setUploadErreur(e => ({ ...e, [d.id]: data.error || 'Le dépôt a échoué.' }))
      }
    } catch {
      setUploadStatut(s => ({ ...s, [d.id]: 'error' }))
      setUploadErreur(e => ({ ...e, [d.id]: 'Erreur réseau. Veuillez réessayer.' }))
    }
  }

  const dossiersFiltres = dossiers.filter(d => filtre === 'tous' ? true : d.statut === filtre)

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Diagnostics RGPD</h1>
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
          <ShieldCheck size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
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
                      <span style={{ background: '#f5f3ff', color: '#7c3aed', fontSize: '10px', fontWeight: '600', padding: '1px 7px', borderRadius: '4px' }}>
                        {forfaitLabel(d.forfait, d.montant)}
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '1px 7px', borderRadius: '4px' }}>
                        {d.mode_paiement === 'virement' ? <Landmark size={10} /> : <CreditCard size={10} />}
                        {d.mode_paiement === 'virement' ? 'Virement' : 'Carte'}
                      </span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                      {d.users?.email} · {new Date(d.created_at).toLocaleDateString('fr-FR')}
                      {d.reference ? ` · Réf. ${d.reference}` : ''}
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
                    <div style={{ marginTop: '14px' }}>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 8px' }}>Statut du dossier</p>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {STATUTS.map(s => (
                          <button key={s.value}
                            onClick={() => updateStatut(d.id, s.value)}
                            disabled={saveStatut[d.id] === 'loading'}
                            style={{ padding: '7px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: d.statut === s.value ? s.bg : 'white', color: d.statut === s.value ? s.color : '#6b7280', border: `1px solid ${d.statut === s.value ? s.color : '#e5e7eb'}`, transition: 'all 0.15s' }}>
                            {s.label}
                          </button>
                        ))}
                      </div>
                      {saveStatut[d.id] === 'success' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                          <CheckCircle size={14} color="#16a34a" />
                          <p style={{ color: '#15803d', fontSize: '12px', margin: 0 }}>Statut mis à jour.</p>
                        </div>
                      )}
                    </div>

                    {/* Livrable */}
                    <div>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 8px' }}>Rapport de conformité (PDF)</p>

                      {d.livrable_url && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '10px 12px', marginBottom: '10px' }}>
                          <FileText size={14} color="#15803d" style={{ flexShrink: 0 }} />
                          <p style={{ color: '#15803d', fontSize: '12px', margin: 0, flex: 1 }}>Un livrable est déjà déposé. Déposer un nouveau fichier le remplacera dans l'espace client.</p>
                          <a href={d.livrable_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '700', textDecoration: 'none', flexShrink: 0 }}>Ouvrir</a>
                        </div>
                      )}

                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <input
                          type="file"
                          accept=".pdf,application/pdf"
                          onChange={e => { setFichier(f => ({ ...f, [d.id]: e.target.files && e.target.files[0] ? e.target.files[0] : null })); setUploadErreur(er => ({ ...er, [d.id]: '' })) }}
                          style={{ fontSize: '12px', color: '#374151' }}
                        />
                        <button
                          onClick={() => handleUpload(d)}
                          disabled={uploadStatut[d.id] === 'loading' || !fichier[d.id]}
                          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: uploadStatut[d.id] === 'loading' || !fichier[d.id] ? '#9ca3af' : '#0f2d6e', color: 'white', border: 'none', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: uploadStatut[d.id] === 'loading' || !fichier[d.id] ? 'not-allowed' : 'pointer' }}>
                          <Upload size={13} />
                          {uploadStatut[d.id] === 'loading' ? 'Dépôt en cours...' : 'Déposer et marquer livré'}
                        </button>
                      </div>

                      {uploadStatut[d.id] === 'success' && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                          <CheckCircle size={14} color="#16a34a" />
                          <p style={{ color: '#15803d', fontSize: '12px', margin: 0 }}>Rapport déposé. Dossier marqué livré et visible dans l'espace client.</p>
                        </div>
                      )}
                      {uploadErreur[d.id] && (
                        <p style={{ color: '#dc2626', fontSize: '12px', margin: '8px 0 0' }}>{uploadErreur[d.id]}</p>
                      )}
                    </div>

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