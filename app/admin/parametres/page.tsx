'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { Save, Shield, Mail, Bell, FileText, AlertCircle, CheckCircle } from 'lucide-react'

type Settings = {
  email_admin: string
  notif_inscription: string
  notif_question: string
  notif_download: string
}

export default function AdminSettings() {
  const { password } = useAdmin()
  const [settings, setSettings] = useState<Settings>({
    email_admin: '',
    notif_inscription: 'true',
    notif_question: 'true',
    notif_download: 'false',
  })
  const [loading, setLoading] = useState(true)
  const [saveStatut, setSaveStatut] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({})
  const [confirmPwd, setConfirmPwd] = useState('')
  const [emailErreur, setEmailErreur] = useState('')

  useEffect(() => {
    if (!password) return
    fetch('/api/admin/settings', { headers: { 'x-admin-password': password } })
      .then(r => r.json())
      .then(d => { if (d.settings) setSettings(d.settings); setLoading(false) })
  }, [password])

  const saveSetting = async (id: string, valeur: string, opts?: { confirmation_password?: string }) => {
    setSaveStatut(s => ({ ...s, [id]: 'loading' }))
    const res = await fetch('/api/admin/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ id, valeur, ...opts }),
    })
    const data = await res.json()
    if (res.ok) {
      setSaveStatut(s => ({ ...s, [id]: 'success' }))
      setTimeout(() => setSaveStatut(s => ({ ...s, [id]: 'idle' })), 2000)
    } else {
      setSaveStatut(s => ({ ...s, [id]: 'error' }))
      if (id === 'email_admin') setEmailErreur(data.error || 'Erreur')
    }
  }

  const handleEmailAdmin = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailErreur('')
    if (!confirmPwd) { setEmailErreur('Confirmez votre mot de passe.'); return }
    if (!settings.email_admin.includes('@')) { setEmailErreur('Email invalide.'); return }
    await saveSetting('email_admin', settings.email_admin, { confirmation_password: confirmPwd })
    setConfirmPwd('')
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none' }
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600' as const, color: '#374151', marginBottom: '6px' }

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Paramètres</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Configuration du back-office</p>
      </div>

      {/* Email admin */}
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <div style={{ width: '36px', height: '36px', background: '#fef3c7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={18} color="#d97706" strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>Email administrateur</p>
            <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>Email de réception des notifications et adresse d'envoi</p>
          </div>
        </div>

        <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '8px', padding: '10px 14px', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={14} color="#d97706" style={{ flexShrink: 0 }} />
          <p style={{ color: '#92400e', fontSize: '12px', margin: 0 }}>
            Modification sécurisée : confirmation du mot de passe admin requise.
          </p>
        </div>

        <form onSubmit={handleEmailAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div>
              <label style={labelStyle}>Nouvel email admin</label>
              <input type="email" value={settings.email_admin}
                onChange={e => setSettings(s => ({ ...s, email_admin: e.target.value }))}
                style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Confirmer votre mot de passe admin</label>
              <input type="password" value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)}
                placeholder="••••••••" style={inputStyle} />
            </div>
          </div>
          {emailErreur && <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{emailErreur}</p>}
          {saveStatut['email_admin'] === 'success' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={14} color="#16a34a" />
              <p style={{ color: '#15803d', fontSize: '12px', margin: 0 }}>Email admin mis à jour.</p>
            </div>
          )}
          <div>
            <button type="submit" disabled={saveStatut['email_admin'] === 'loading'}
              style={{ background: saveStatut['email_admin'] === 'loading' ? '#6b7280' : '#d97706', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Save size={14} /> {saveStatut['email_admin'] === 'loading' ? 'Enregistrement...' : 'Mettre à jour'}
            </button>
          </div>
        </form>
      </div>

      {/* Notifications */}
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
          <div style={{ width: '36px', height: '36px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Bell size={18} color="#1a4fba" strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>Notifications email</p>
            <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>Activez les alertes reçues à l'email admin</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { key: 'notif_inscription' as const, label: 'Nouvelle inscription client', sub: 'Email reçu à chaque nouveau compte créé' },
            { key: 'notif_question' as const, label: 'Nouvelle question posée', sub: 'Email reçu dès qu\'un client paie et pose une question' },
            { key: 'notif_download' as const, label: 'Téléchargement document', sub: 'Email reçu à chaque téléchargement (peut être fréquent)' },
          ].map(item => (
            <div key={item.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e5e7eb' }}>
              <div>
                <p style={{ color: '#374151', fontSize: '13px', fontWeight: '600', margin: '0 0 2px' }}>{item.label}</p>
                <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>{item.sub}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                {saveStatut[item.key] === 'success' && <CheckCircle size={14} color="#16a34a" />}
                <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px', cursor: 'pointer' }}>
                  <input type="checkbox"
                    checked={settings[item.key] === 'true'}
                    onChange={async e => {
                      const val = e.target.checked ? 'true' : 'false'
                      setSettings(s => ({ ...s, [item.key]: val }))
                      await saveSetting(item.key, val)
                    }}
                    style={{ opacity: 0, width: 0, height: 0, position: 'absolute' }} />
                  <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, background: settings[item.key] === 'true' ? '#0f2d6e' : '#d1d5db', borderRadius: '24px', transition: '0.2s' }}>
                    <span style={{ position: 'absolute', height: '18px', width: '18px', left: settings[item.key] === 'true' ? '23px' : '3px', bottom: '3px', background: 'white', borderRadius: '50%', transition: '0.2s' }} />
                  </span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info emails automatiques */}
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <div style={{ width: '36px', height: '36px', background: '#f0fdf4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Mail size={18} color="#15803d" strokeWidth={1.5} />
          </div>
          <div>
            <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>Emails automatiques clients</p>
            <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>Envoyés automatiquement par le système</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Confirmation inscription', declencheur: 'À la création du compte', statut: 'Actif' },
            { label: 'Réponse à une question juridique', declencheur: 'Quand François répond depuis l\'admin', statut: 'Actif' },
            { label: 'Validation migration Pro', declencheur: 'Quand François valide une demande migration', statut: 'Actif' },
            { label: 'Confirmation paiement', declencheur: 'Via Stripe (reçu automatique)', statut: 'Actif' },
            { label: 'Facture disponible', declencheur: 'Quand une facture est déposée depuis l\'admin', statut: 'Actif' },
            { label: 'Réinitialisation de mot de passe', declencheur: 'Depuis « Mot de passe oublié »', statut: 'Actif' },
            { label: 'Confirmation de résiliation', declencheur: 'À la résiliation de l\'abonnement', statut: 'Actif' },
          ].map((email, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px' }}>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>{email.label}</p>
                <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>{email.declencheur}</p>
              </div>
              <span style={{ background: email.statut === 'Actif' ? '#f0fdf4' : '#f3f4f6', color: email.statut === 'Actif' ? '#15803d' : '#9ca3af', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', flexShrink: 0 }}>
                {email.statut}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}