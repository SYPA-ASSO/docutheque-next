'use client'

import { useState, useEffect, useCallback } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { Upload, Receipt, Search, X } from 'lucide-react'

type User = {
  id: string
  prenom: string
  nom: string
  email: string
}

type Facture = {
  id: string
  user_id: string
  facture_url: string
  montant: number | null
  type: string | null
  created_at: string
  users?: { prenom: string; nom: string; email: string }
}

export default function AdminFactures() {
  const { password } = useAdmin()
  const [factures, setFactures] = useState<Facture[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [searchUser, setSearchUser] = useState('')
  const [uploadStatut, setUploadStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [uploadErreur, setUploadErreur] = useState('')
  const [form, setForm] = useState({
    userId: '',
    montant: '',
    type: 'abonnement',
    file: null as File | null,
    notifier: true,
  })
  const [dernierNotifie, setDernierNotifie] = useState(true)

  const loadFactures = useCallback(async (pwd: string) => {
    setLoading(true)
    const res = await fetch('/api/admin/factures-list', {
      headers: { 'x-admin-password': pwd },
    })
    if (res.ok) {
      const data = await res.json()
      setFactures(data.factures || [])
    }
    setLoading(false)
  }, [])

  const loadUsers = useCallback(async (pwd: string) => {
    const res = await fetch('/api/admin/users-list', {
      headers: { 'x-admin-password': pwd },
    })
    if (res.ok) {
      const data = await res.json()
      setUsers(data.users || [])
    }
  }, [])

  useEffect(() => {
    if (!password) return
    loadFactures(password)
    loadUsers(password)
  }, [password])



  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.file || !form.userId) {
      setUploadErreur('Fichier PDF et client requis.')
      return
    }
    setUploadStatut('loading')
    setUploadErreur('')

    const fd = new FormData()
    fd.append('file', form.file)
    fd.append('userId', form.userId)
    fd.append('type', form.type)
    if (form.montant) fd.append('montant', form.montant)
    fd.append('notifier', form.notifier ? '1' : '0')

    const res = await fetch('/api/admin/factures-upload', {
      method: 'POST',
      headers: { 'x-admin-password': password },
      body: fd,
    })

    if (res.ok) {
      setDernierNotifie(form.notifier)
      setUploadStatut('success')
      setShowForm(false)
      setForm({ userId: '', montant: '', type: 'abonnement', file: null, notifier: true })
      loadFactures(password)
      setTimeout(() => setUploadStatut('idle'), 3000)
    } else {
      setUploadStatut('error')
      setUploadErreur("Erreur lors de l'upload.")
    }
  }

  const usersFiltrés = searchUser.trim()
    ? users.filter(u =>
        `${u.prenom} ${u.nom} ${u.email}`.toLowerCase().includes(searchUser.toLowerCase())
      )
    : users

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none' }
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600' as const, color: '#374151', marginBottom: '6px' }

  const TYPES_FACTURE = [
    { value: 'abonnement', label: 'Abonnement Optimal' },
    { value: 'question', label: 'Information sur vos droits' },
    { value: 'conseil_assurances_particulier', label: 'Forfait conseil assurances Particulier' },
    { value: 'conseil_assurances_pro', label: 'Forfait conseil assurances Pro/Asso' },
    { value: 'autre', label: 'Autre' },
  ]

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>Gestion des factures</h1>
            <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>{factures.length} facture{factures.length > 1 ? 's' : ''} émise{factures.length > 1 ? 's' : ''}</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="/admin/documents" style={{ background: 'white', color: '#0f2d6e', border: '1px solid #e5e7eb', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none' }}>
              Documents
            </a>
            <button onClick={() => setShowForm(true)} style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Upload size={16} /> Déposer une facture
            </button>
          </div>
        </div>

        {uploadStatut === 'success' && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 16px', marginBottom: '1rem' }}>
            <p style={{ color: '#15803d', fontSize: '13px', margin: 0 }}>✓ Facture déposée avec succès. Le client peut la consulter dans son espace{dernierNotifie ? ' et a été prévenu par email.' : ', sans email de notification.'}</p>
          </div>
        )}

        {/* Formulaire upload */}
        {showForm && (
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0 }}>Déposer une facture</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={18} /></button>
            </div>
            <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Recherche client */}
              <div>
                <label style={labelStyle}>Client *</label>
                <div style={{ position: 'relative', marginBottom: '8px' }}>
                  <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>🔍</span>
                  <input type="text" value={searchUser} onChange={e => setSearchUser(e.target.value)}
                    placeholder="Rechercher par nom ou email..."
                    style={{ ...inputStyle, paddingLeft: '32px' }} />
                </div>
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', maxHeight: '200px', overflowY: 'auto' as const }}>
                  {usersFiltrés.slice(0, 10).map(u => (
                    <button key={u.id} type="button"
                      onClick={() => { setForm({ ...form, userId: u.id }); setSearchUser(`${u.prenom} ${u.nom}`) }}
                      style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: form.userId === u.id ? '#eff6ff' : 'white', border: 'none', cursor: 'pointer', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: form.userId === u.id ? '700' : '400' }}>{u.prenom} {u.nom}</span>
                      <span style={{ color: '#9ca3af', fontSize: '11px' }}>{u.email}</span>
                    </button>
                  ))}
                  {usersFiltrés.length === 0 && (
                    <p style={{ color: '#9ca3af', fontSize: '13px', padding: '12px 14px', margin: 0 }}>Aucun client trouvé.</p>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Type de prestation</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={inputStyle}>
                    {TYPES_FACTURE.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Montant (€ TTC)</label>
                  <input type="number" value={form.montant} onChange={e => setForm({ ...form, montant: e.target.value })}
                    placeholder="Ex. 149" step="0.01" min="0" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Fichier PDF *</label>
                <input type="file" accept=".pdf"
                  onChange={e => setForm({ ...form, file: e.target.files?.[0] || null })}
                  style={{ ...inputStyle, padding: '8px 12px' }} required />
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#374151', cursor: 'pointer' }}>
                <input type="checkbox" checked={form.notifier} onChange={e => setForm({ ...form, notifier: e.target.checked })} style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>
                  Prévenir le client par email
                  <span style={{ display: 'block', color: '#9ca3af', fontSize: '11px', marginTop: '2px' }}>
                    Décochez pour une facture déjà réglée : elle sera visible dans l'espace client, sans email.
                  </span>
                </span>
              </label>

              {uploadErreur && <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{uploadErreur}</p>}

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={uploadStatut === 'loading'}
                  style={{ background: uploadStatut === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: uploadStatut === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Upload size={15} /> {uploadStatut === 'loading' ? 'Dépôt en cours...' : 'Déposer la facture'}
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '11px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Liste factures */}
        {loading ? (
          <p style={{ color: '#6b7280', fontSize: '13px', textAlign: 'center', padding: '2rem' }}>Chargement...</p>
        ) : factures.length === 0 ? (
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <Receipt size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 16px' }}>Aucune facture déposée.</p>
            <button onClick={() => setShowForm(true)}
              style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Déposer la première facture
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {factures.map(f => (
              <div key={f.id} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Receipt size={18} color="#1a4fba" strokeWidth={1.5} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>
                      {f.users ? `${f.users.prenom} ${f.users.nom}` : 'Client inconnu'}
                    </p>
                    {f.montant && <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '10px', fontWeight: '700', padding: '1px 7px', borderRadius: '4px' }}>{f.montant} €</span>}
                    {f.type && <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '1px 7px', borderRadius: '4px' }}>{TYPES_FACTURE.find(t => t.value === f.type)?.label || f.type}</span>}
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                    {f.users?.email} · Émise le {new Date(f.created_at).toLocaleDateString('fr-FR')}
                  </p>
                </div>
                <a href={f.facture_url} target="_blank" rel="noopener noreferrer"
                  style={{ background: '#eff6ff', color: '#1a4fba', padding: '8px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', flexShrink: 0 }}>
                  Voir PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

const TYPES_FACTURE = [
  { value: 'abonnement', label: 'Abonnement Optimal' },
  { value: 'question', label: 'Information sur vos droits' },
  { value: 'conseil_assurances_particulier', label: 'Forfait conseil assurances Particulier' },
  { value: 'conseil_assurances_pro', label: 'Forfait conseil assurances Pro/Asso' },
  { value: 'autre', label: 'Autre' },
]