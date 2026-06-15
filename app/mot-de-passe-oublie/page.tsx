'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { Mail, CheckCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MotDePasseOublie() {
  const [email, setEmail] = useState('')
  const [statut, setStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [erreur, setErreur] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) { setErreur('Veuillez saisir votre adresse email.'); return }
    setStatut('loading')
    setErreur('')

    try {
      const res = await fetch('/api/compte/mot-de-passe-oublie', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok && data.success) {
        setStatut('success')
      } else {
        setStatut('error')
        setErreur(data.error || 'Une erreur est survenue. Veuillez réessayer.')
      }
    } catch {
      setStatut('error')
      setErreur('Erreur réseau. Veuillez réessayer.')
    }
  }

  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>
          <Link href="/connexion" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '13px', textDecoration: 'none', marginBottom: '1.5rem' }}>
            <ArrowLeft size={14} /> Retour à la connexion
          </Link>

          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '52px', height: '52px', background: '#eff6ff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Mail size={22} color="#1a4fba" strokeWidth={1.5} />
              </div>
              <h1 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px' }}>Mot de passe oublié</h1>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                Saisissez votre adresse email. Vous recevrez un lien pour réinitialiser votre mot de passe.
              </p>
            </div>

            {statut === 'success' ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.25rem' }}>
                  <CheckCircle size={24} color="#16a34a" style={{ marginBottom: '10px' }} />
                  <p style={{ color: '#15803d', fontSize: '14px', fontWeight: '700', margin: '0 0 6px' }}>Email envoyé</p>
                  <p style={{ color: '#374151', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    Si un compte existe avec l'adresse <strong>{email}</strong>, vous recevrez un lien de réinitialisation dans les prochaines minutes.
                  </p>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 16px', lineHeight: '1.6' }}>
                  Vérifiez vos spams si vous ne trouvez pas l'email.
                </p>
                <Link href="/connexion"
                  style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
                  Retour à la connexion
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErreur('') }}
                    placeholder="votre@email.fr"
                    required
                    style={{ width: '100%', padding: '11px 12px', border: `1px solid ${erreur ? '#dc2626' : '#d1d5db'}`, borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none' }}
                  />
                  {erreur && <p style={{ color: '#dc2626', fontSize: '12px', margin: '6px 0 0' }}>{erreur}</p>}
                </div>
                <button type="submit" disabled={statut === 'loading'}
                  style={{ background: statut === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: statut === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  {statut === 'loading' ? 'Envoi en cours...' : <><Mail size={15} /> Envoyer le lien de réinitialisation</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <FooterMinimal />
    </>
  )
}