'use client'

// components/AuditExpressForm.tsx
// Formulaire de capture Audit RGPD Express. Poste vers /api/audit-express.
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

import { useState } from 'react'
import { CheckCircle, AlertCircle, Send, Clock } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const SECTEURS = [
  'Micro-entreprise / freelance',
  'TPE / PME',
  'Profession libérale',
  'Profession de santé ou sociale',
  'Association / ESS',
  'Collectivité / secteur public',
  'Autre',
]

export default function AuditExpressForm() {
  const [form, setForm] = useState({
    nom: '',
    structure: '',
    email: '',
    telephone: '',
    secteur: '',
    rgpd: false,
    website: '', // honeypot, ne jamais afficher
  })
  const [status, setStatus] = useState<Status>('idle')
  const [erreur, setErreur] = useState('')

  const set = (field: string, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async () => {
    if (!form.nom.trim()) { setErreur('Veuillez saisir votre nom.'); setStatus('error'); return }
    if (!form.structure.trim()) { setErreur('Veuillez indiquer votre structure.'); setStatus('error'); return }
    if (!form.email.trim()) { setErreur('Veuillez saisir votre adresse email.'); setStatus('error'); return }
    if (!form.secteur) { setErreur('Veuillez sélectionner votre secteur.'); setStatus('error'); return }
    if (!form.rgpd) { setErreur('Veuillez accepter la politique de confidentialité.'); setStatus('error'); return }

    setStatus('loading')
    setErreur('')

    try {
      const res = await fetch('/audit-express', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setErreur(data.error || 'Une erreur est survenue. Veuillez réessayer.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErreur('Erreur réseau. Veuillez réessayer.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 10, padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <CheckCircle size={18} color="#16a34a" style={{ flexShrink: 0 }} />
          <p style={{ color: '#15803d', fontSize: 13, fontWeight: 700, margin: 0 }}>Demande bien reçue</p>
        </div>
        <p style={{ color: '#374151', fontSize: 12.5, lineHeight: 1.6, margin: 0 }}>
          Vous allez recevoir un email avec les cinq questions de l'audit. Dès réception de vos réponses,
          notre juriste vous adresse votre note de synthèse sous 72&nbsp;heures ouvrées.
        </p>
      </div>
    )
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 13px',
    border: '1px solid #d1d5db',
    borderRadius: 8,
    fontSize: 13,
    color: '#374151',
    background: 'white',
    boxSizing: 'border-box' as const,
    outline: 'none',
    fontFamily: 'inherit',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>

      {/* HONEYPOT invisible */}
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={e => set('website', e.target.value)}
        />
      </div>

      <input
        type="text"
        placeholder="Nom et prénom *"
        value={form.nom}
        onChange={e => { set('nom', e.target.value); setErreur('') }}
        maxLength={100}
        autoComplete="name"
        style={inputStyle}
      />
      <input
        type="text"
        placeholder="Nom de votre structure *"
        value={form.structure}
        onChange={e => { set('structure', e.target.value); setErreur('') }}
        maxLength={150}
        autoComplete="organization"
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Adresse email *"
        value={form.email}
        onChange={e => { set('email', e.target.value); setErreur('') }}
        maxLength={254}
        autoComplete="email"
        style={inputStyle}
      />
      <input
        type="tel"
        placeholder="Téléphone *"
        value={form.telephone}
        onChange={e => { set('telephone', e.target.value); setErreur('') }}
        maxLength={20}
        autoComplete="tel"
        style={inputStyle}
      />
      <select
        value={form.secteur}
        onChange={e => { set('secteur', e.target.value); setErreur('') }}
        style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer' }}
      >
        <option value="">Votre secteur d'activité *</option>
        {SECTEURS.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', cursor: 'pointer', margin: '0.2rem 0' }}>
        <input
          type="checkbox"
          checked={form.rgpd}
          onChange={e => { set('rgpd', e.target.checked); setErreur('') }}
          style={{ marginTop: 2, flexShrink: 0, cursor: 'pointer' }}
        />
        <span style={{ color: '#6b7280', fontSize: 11.5, lineHeight: 1.55 }}>
          J'accepte que mes données soient utilisées pour traiter ma demande d'Audit RGPD Express, conformément à la{' '}
          <a href="/confidentialite" style={{ color: '#7c3aed', textDecoration: 'none' }}>politique de confidentialité</a>. *
        </span>
      </label>

      {status === 'error' && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 12px' }}>
          <AlertCircle size={15} color="#dc2626" style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: '#dc2626', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{erreur}</p>
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={status === 'loading'}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          background: status === 'loading' ? '#a78bda' : '#7c3aed',
          color: 'white', border: 'none', padding: '12px', borderRadius: 8,
          fontSize: 13, fontWeight: 700, cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          width: '100%',
        }}
      >
        <Send size={15} />
        {status === 'loading' ? 'Envoi en cours...' : 'Recevoir mon Audit Express offert'}
      </button>

      <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', color: '#9ca3af', fontSize: 10.5, margin: '2px 0 0', textAlign: 'center' }}>
        <Clock size={11} /> Sans engagement · Restitution sous 72&nbsp;heures ouvrées
      </p>
    </div>
  )
}