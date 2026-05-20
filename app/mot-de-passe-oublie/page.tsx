'use client'

// app/mot-de-passe-oublie/page.tsx
// Cabinet Cholez-Pagotto - Mot de passe oublié
// Formulaire simple - envoi email via Brevo (à connecter à l'API reset)

import { useState } from 'react'
import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { Mail, ArrowRight, CheckCircle, ArrowLeft, Lock } from 'lucide-react'

export default function MotDePasseOubliePage() {
  const [email, setEmail] = useState('')
  const [statut, setStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [erreur, setErreur] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErreur('')

    if (!email || !email.includes('@')) {
      setErreur('Veuillez saisir une adresse email valide.')
      return
    }

    setStatut('loading')

    try {
      // À connecter à l'endpoint de reset quand NextAuth sera en place
      // Pour l'instant : simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 1200))
      setStatut('success')
    } catch {
      setStatut('error')
      setErreur('Une erreur est survenue. Veuillez réessayer ou contacter le support.')
    }
  }

  return (
    <>
      <Header />

      <main style={{
        background: '#f8fafc', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem 1.5rem'
      }}>
        <div style={{ width: '100%', maxWidth: 440 }}>

          {/* Icône */}
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: '#eff6ff', border: '1px solid #bfdbfe',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <Lock size={24} strokeWidth={1.5} style={{ color: '#1a4fba' }} />
            </div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.4rem' }}>
              Mot de passe oublié
            </h1>
            <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
              Saisissez votre adresse email. Nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>
          </div>

          {/* Carte formulaire */}
          <div style={{
            background: 'white', border: '1px solid #e5e7eb',
            borderRadius: 14, padding: '1.75rem'
          }}>

            {statut === 'success' ? (
              /* ─── SUCCÈS ─── */
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: '#f0fdf4', border: '1px solid #bbf7d0',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <CheckCircle size={22} strokeWidth={1.5} style={{ color: '#16a34a' }} />
                </div>
                <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
                  Email envoyé
                </h2>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Si l'adresse <strong>{email}</strong> correspond à un compte Docuthèque,
                  vous recevrez un email avec un lien de réinitialisation sous quelques minutes.
                </p>
                <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Pensez à vérifier vos courriers indésirables (spam) si vous ne recevez pas l'email.
                </p>
                <a href="/connexion" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  color: '#1a4fba', textDecoration: 'none', fontSize: 13, fontWeight: 600
                }}>
                  <ArrowLeft size={14} /> Retour à la connexion
                </a>
              </div>
            ) : (
              /* ─── FORMULAIRE ─── */
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{
                    display: 'block', fontSize: 13, fontWeight: 600,
                    color: '#374151', marginBottom: '0.5rem'
                  }}>
                    Adresse email
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail
                      size={16}
                      strokeWidth={1.5}
                      style={{
                        position: 'absolute', left: 12, top: '50%',
                        transform: 'translateY(-50%)', color: '#9ca3af'
                      }}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => { setEmail(e.target.value); setErreur('') }}
                      placeholder="votre@email.fr"
                      autoComplete="email"
                      disabled={statut === 'loading'}
                      style={{
                        width: '100%', padding: '10px 12px 10px 38px',
                        border: `1px solid ${erreur ? '#dc2626' : '#e5e7eb'}`,
                        borderRadius: 8, fontSize: 13, outline: 'none',
                        background: statut === 'loading' ? '#f9fafb' : 'white',
                        boxSizing: 'border-box' as const,
                        color: '#374151'
                      }}
                    />
                  </div>
                  {erreur && (
                    <p style={{ fontSize: 12, color: '#dc2626', marginTop: '0.4rem' }}>
                      {erreur}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={statut === 'loading'}
                  style={{
                    width: '100%', background: statut === 'loading' ? '#6b7280' : '#0f2d6e',
                    color: 'white', border: 'none', padding: '11px',
                    borderRadius: 8, fontWeight: 700, fontSize: 13,
                    cursor: statut === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    transition: 'background 0.15s'
                  }}
                >
                  {statut === 'loading' ? (
                    'Envoi en cours...'
                  ) : (
                    <>Envoyer le lien de réinitialisation <ArrowRight size={15} /></>
                  )}
                </button>

                {statut === 'error' && (
                  <p style={{ fontSize: 12, color: '#dc2626', marginTop: '0.75rem', textAlign: 'center' }}>
                    {erreur}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Liens bas de page */}
          <div style={{ textAlign: 'center', marginTop: '1.25rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="/connexion" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>
              Retour à la connexion
            </a>
            <span style={{ color: '#e5e7eb' }}>|</span>
            <a href="/contact" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>
              Contacter le support
            </a>
          </div>

        </div>
      </main>

      <FooterMinimal />
    </>
  )
}