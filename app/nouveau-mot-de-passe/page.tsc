'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { Lock, CheckCircle, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function NouveauMotDePasse() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [statut, setStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [erreur, setErreur] = useState('')
  const [sessionValide, setSessionValide] = useState<boolean | null>(null)

  useEffect(() => {
    // Vérifier qu'une session recovery est bien active
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSessionValide(!!session)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErreur('')

    if (password.length < 8) {
      setErreur('Le mot de passe doit contenir au moins 8 caractères.')
      return
    }
    if (password !== passwordConfirm) {
      setErreur('Les mots de passe ne correspondent pas.')
      return
    }

    setStatut('loading')

    const { error } = await supabase.auth.updateUser({ password })

    if (error) {
      setStatut('error')
      setErreur('Une erreur est survenue. Le lien a peut-être expiré. Faites une nouvelle demande.')
    } else {
      setStatut('success')
      // Redirection automatique vers l'espace client après 3 secondes
      setTimeout(() => router.push('/espace-client'), 3000)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '11px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '13px',
    boxSizing: 'border-box' as const,
    outline: 'none',
  }

  // Session non vérifiée — chargement
  if (sessionValide === null) {
    return (
      <>
        <Header />
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>Vérification en cours...</p>
        </main>
        <FooterMinimal />
      </>
    )
  }

  // Session invalide — lien expiré ou accès direct sans token
  if (!sessionValide) {
    return (
      <>
        <Header />
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <div style={{ width: '100%', maxWidth: '440px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2.5rem', textAlign: 'center' }}>
            <div style={{ width: '52px', height: '52px', background: '#fef2f2', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
              <AlertCircle size={22} color="#dc2626" strokeWidth={1.5} />
            </div>
            <h1 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 8px' }}>Lien invalide ou expiré</h1>
            <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 24px', lineHeight: '1.6' }}>
              Ce lien de réinitialisation est invalide ou a expiré. Faites une nouvelle demande depuis la page de connexion.
            </p>
            <Link href="/mot-de-passe-oublie"
              style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
              Nouvelle demande
            </Link>
          </div>
        </main>
        <FooterMinimal />
      </>
    )
  }

  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ width: '100%', maxWidth: '440px' }}>

          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ width: '52px', height: '52px', background: '#eff6ff', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                <Lock size={22} color="#1a4fba" strokeWidth={1.5} />
              </div>
              <h1 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px' }}>Nouveau mot de passe</h1>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                Choisissez un nouveau mot de passe pour votre compte Docuthèque.
              </p>
            </div>

            {statut === 'success' ? (
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.25rem' }}>
                  <CheckCircle size={24} color="#16a34a" style={{ marginBottom: '10px' }} />
                  <p style={{ color: '#15803d', fontSize: '14px', fontWeight: '700', margin: '0 0 6px' }}>Mot de passe mis à jour</p>
                  <p style={{ color: '#374151', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                    Votre mot de passe a été modifié avec succès. Redirection vers votre espace client dans 3 secondes...
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                    Nouveau mot de passe *
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value); setErreur('') }}
                    placeholder="••••••••"
                    required
                    minLength={8}
                    style={{ ...inputStyle, borderColor: erreur ? '#dc2626' : '#d1d5db' }}
                  />
                  <p style={{ color: '#9ca3af', fontSize: '11px', margin: '4px 0 0' }}>8 caractères minimum</p>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                    Confirmer le mot de passe *
                  </label>
                  <input
                    type="password"
                    value={passwordConfirm}
                    onChange={e => { setPasswordConfirm(e.target.value); setErreur('') }}
                    placeholder="••••••••"
                    required
                    style={{ ...inputStyle, borderColor: erreur ? '#dc2626' : '#d1d5db' }}
                  />
                </div>

                {erreur && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 12px' }}>
                    <AlertCircle size={14} color="#dc2626" style={{ flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{erreur}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={statut === 'loading'}
                  style={{ background: statut === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: statut === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {statut === 'loading' ? 'Mise à jour...' : 'Mettre à jour mon mot de passe'}
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