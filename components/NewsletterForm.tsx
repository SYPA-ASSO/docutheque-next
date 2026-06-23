'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Mail } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterForm({ variant = 'hero' }: { variant?: 'hero' | 'cta' }) {
  const [email, setEmail] = useState('')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [erreur, setErreur] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prenom.trim()) { setErreur('Veuillez saisir votre prénom.'); return }
    if (!nom.trim()) { setErreur('Veuillez saisir votre nom.'); return }
    if (!email.trim()) { setErreur('Veuillez saisir votre adresse email.'); return }
    setStatus('loading')
    setErreur('')

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), prenom: prenom.trim(), nom: nom.trim() }),
      })
      const data = await res.json()
      if (!res.ok) {
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
      <div style={{
        background: variant === 'hero' ? 'rgba(255,255,255,0.15)' : '#f0fdf4',
        border: `1px solid ${variant === 'hero' ? 'rgba(255,255,255,0.3)' : '#bbf7d0'}`,
        borderRadius: '10px',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '480px',
        margin: '0 auto',
      }}>
        <CheckCircle size={18} color={variant === 'hero' ? 'white' : '#16a34a'} style={{ flexShrink: 0 }} />
        <div>
          <p style={{ color: variant === 'hero' ? 'white' : '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>
            Vérifiez votre boîte mail
          </p>
          <p style={{ color: variant === 'hero' ? 'rgba(255,255,255,0.8)' : '#374151', fontSize: '12px', margin: 0 }}>
            {variant === 'hero'
              ? 'Un email de confirmation vient de vous être envoyé. Cliquez sur le lien de confirmation pour valider votre inscription.'
              : 'Un email de confirmation vient de vous être envoyé. Cliquez sur le lien de confirmation pour valider votre inscription.'}
          </p>
        </div>
      </div>
    )
  }

  const isHero = variant === 'hero'

  const inputStyle = (hasError = false) => ({
    padding: '11px 14px',
    borderRadius: '8px',
    border: isHero ? 'none' : `1px solid ${hasError ? '#dc2626' : '#d1d5db'}`,
    fontSize: '13px',
    background: isHero ? 'rgba(255,255,255,0.15)' : 'white',
    color: isHero ? 'white' : '#374151',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box' as const,
  })

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '480px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <input
            type="text"
            value={prenom}
            onChange={e => { setPrenom(e.target.value); setErreur('') }}
            placeholder="Prénom *"
            required
            style={inputStyle(!!erreur && !prenom.trim())}
          />
          <input
            type="text"
            value={nom}
            onChange={e => { setNom(e.target.value); setErreur('') }}
            placeholder="Nom *"
            required
            style={inputStyle(!!erreur && !nom.trim())}
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setErreur('') }}
          placeholder="votre@email.fr *"
          required
          style={inputStyle(!!erreur && !email.trim())}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            background: isHero ? 'white' : '#0f2d6e',
            color: isHero ? '#0f2d6e' : 'white',
            border: 'none',
            padding: '11px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '700',
            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '7px',
            opacity: status === 'loading' ? 0.7 : 1,
          }}
        >
          <Mail size={14} />
          {status === 'loading' ? "Inscription en cours..." : "S'inscrire gratuitement"}
        </button>
      </div>

      {erreur && (
        <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginTop: '8px' }}>
          <AlertCircle size={13} color={isHero ? 'white' : '#dc2626'} style={{ flexShrink: 0 }} />
          <p style={{ color: isHero ? 'rgba(255,255,255,0.9)' : '#dc2626', fontSize: '12px', margin: 0 }}>{erreur}</p>
        </div>
      )}

      <p style={{ color: isHero ? 'rgba(255,255,255,0.4)' : '#9ca3af', fontSize: '10px', margin: '8px 0 0', textAlign: 'center' }}>
        Tous les champs sont obligatoires · Désinscription en un clic · Conforme RGPD
      </p>
    </form>
  )
}