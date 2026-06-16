'use client'

// components/CookieBanner.tsx
// Bandeau cookies conforme CNIL délibération n°2020-091
// Format : carte flottante bas gauche + icône persistante (obligation CNIL)
// À intégrer dans app/layout.tsx : <CookieBanner />

import { useState, useEffect } from 'react'
import { X, Settings, CheckCircle, XCircle, ChevronDown, ChevronUp, SlidersHorizontal } from 'lucide-react'

type ConsentState = {
  analytics: boolean
  marketing: boolean
}

type BannerState = 'visible' | 'hidden' | 'settings' | 'minimized'

const COOKIE_KEY = 'cholez_pagotto_consent'
const COOKIE_EXPIRY_DAYS = 180

function setCookieConsent(value: string) {
  const expires = new Date()
  expires.setDate(expires.getDate() + COOKIE_EXPIRY_DAYS)
  document.cookie = `${COOKIE_KEY}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

function getCookieConsent(): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${COOKIE_KEY}=([^;]+)`))
  return match ? decodeURIComponent(match[2]) : null
}

// Logo SVG Cabinet Cholez-Pagotto — identique au Header/Footer
function LogoCP({ size = 28 }: { size?: number }) {
  const hauteur = size
  const largeur = Math.round(size * 2.8)
  return (
    <svg width={largeur} height={hauteur} viewBox={`0 0 ${largeur} ${hauteur}`} xmlns="http://www.w3.org/2000/svg" aria-label="Cabinet Cholez-Pagotto">
      {/* Filet vertical or */}
      <rect x="2" y={Math.round(hauteur * 0.1)} width="4" height={Math.round(hauteur * 0.8)} rx="2" fill="#c8a84b" />
      {/* Initiales CP */}
      <text
        x="12"
        y={Math.round(hauteur * 0.72)}
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize={Math.round(hauteur * 0.62)}
        fill="#0f2d6e"
      >
        CP
      </text>
    </svg>
  )
}

export default function CookieBanner() {
  const [bannerState, setBannerState] = useState<BannerState>('hidden')
  const [consent, setConsent] = useState<ConsentState>({ analytics: false, marketing: false })
  const [detailsOuverts, setDetailsOuverts] = useState(false)

  useEffect(() => {
    const existing = getCookieConsent()
    if (!existing) {
      const timer = setTimeout(() => setBannerState('visible'), 900)
      return () => clearTimeout(timer)
    } else {
      setBannerState('minimized')
    }
  }, [])

  const accepterTout = () => {
    setCookieConsent(JSON.stringify({ analytics: true, marketing: true, date: new Date().toISOString() }))
    setConsent({ analytics: true, marketing: true })
    setBannerState('minimized')
  }

  const refuserTout = () => {
    setCookieConsent(JSON.stringify({ analytics: false, marketing: false, date: new Date().toISOString() }))
    setConsent({ analytics: false, marketing: false })
    setBannerState('minimized')
  }

  const enregistrerChoix = () => {
    setCookieConsent(JSON.stringify({ ...consent, date: new Date().toISOString() }))
    setBannerState('minimized')
  }

  // ─── ICÔNE PERSISTANTE ───
  if (bannerState === 'minimized') {
    return (
      <button
        onClick={() => setBannerState('settings')}
        title="Gérer mes préférences cookies"
        aria-label="Gérer mes préférences cookies"
        style={{
          position: 'fixed', bottom: '1.25rem', left: '1.25rem', zIndex: 9999,
          width: 40, height: 40, borderRadius: '50%',
          background: '#0f2d6e', border: '2px solid white',
          boxShadow: '0 2px 12px rgba(15,45,110,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        <SlidersHorizontal size={16} color="white" strokeWidth={2} />
      </button>
    )
  }

  // En-tête logo commun aux deux panneaux
  const EnTeteLogo = ({ onClose }: { onClose: () => void }) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1rem 1.25rem 0.75rem', borderBottom: '1px solid #f3f4f6',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{ background: 'white', borderRadius: 6, padding: '2px 4px', display: 'flex', alignItems: 'center' }}>
          <LogoCP size={24} />
        </div>
        <div>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Cabinet Cholez-Pagotto</p>
          <p style={{ fontSize: 10, color: '#6b7280', margin: 0 }}>Vos préférences cookies</p>
        </div>
      </div>
      <button
        onClick={onClose}
        aria-label="Fermer"
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 4 }}
      >
        <X size={16} />
      </button>
    </div>
  )

  // ─── PANNEAU PARAMÉTRAGE ───
  if (bannerState === 'settings') {
    return (
      <>
        <div
          onClick={() => setBannerState('minimized')}
          style={{ position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(0,0,0,0.4)' }}
        />
        <div style={{
          position: 'fixed', bottom: '1.25rem', left: '1.25rem', zIndex: 9999,
          background: 'white', width: 'min(400px, calc(100vw - 2.5rem))',
          borderRadius: 16, boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          maxHeight: '85vh', overflowY: 'auto',
          border: '1px solid #e5e7eb'
        }}>

          <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1, borderRadius: '16px 16px 0 0' }}>
            <EnTeteLogo onClose={() => setBannerState('minimized')} />
          </div>

          <div style={{ padding: '1.25rem' }}>
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Le Cabinet Cholez-Pagotto (SIRET 490 889 516 00053) utilise des cookies sur son site
              pour améliorer votre navigation et mesurer l'audience de nos pages.
              Les cookies nécessaires ne peuvent pas être refusés.
            </p>

            {/* Nécessaires */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, marginBottom: '0.6rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', background: '#f8fafc' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2d6e' }}>Cookies nécessaires</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1 }}>Fonctionnement du site</div>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#16a34a', background: '#f0fdf4', padding: '2px 8px', borderRadius: 20, border: '1px solid #bbf7d0', whiteSpace: 'nowrap' }}>
                  Toujours actifs
                </span>
              </div>
              {detailsOuverts && (
                <div style={{ padding: '0.6rem 1rem', borderTop: '1px solid #f3f4f6', fontSize: 11, color: '#6b7280', lineHeight: 1.6 }}>
                  Session, sécurité, mémorisation du consentement. Durée de conservation : 6 mois.
                </div>
              )}
            </div>

            {/* Analytiques */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, marginBottom: '0.6rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2d6e' }}>Cookies analytiques</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1 }}>Mesure d'audience</div>
                </div>
                <button
                  onClick={() => setConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
                  aria-label={consent.analytics ? 'Désactiver' : 'Activer'}
                  style={{ width: 40, height: 22, borderRadius: 11, background: consent.analytics ? '#1a4fba' : '#d1d5db', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}
                >
                  <div style={{ position: 'absolute', top: 3, left: consent.analytics ? 20 : 3, width: 16, height: 16, borderRadius: '50%', background: 'white', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                </button>
              </div>
              {detailsOuverts && (
                <div style={{ padding: '0.6rem 1rem', borderTop: '1px solid #f3f4f6', fontSize: 11, color: '#6b7280', lineHeight: 1.6 }}>
                  Pages visitées, durée des visites. Données anonymisées. Durée : 13 mois maximum.
                </div>
              )}
            </div>

            {/* Marketing */}
            <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, marginBottom: '1rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2d6e' }}>Cookies marketing</div>
                  <div style={{ fontSize: 11, color: '#6b7280', marginTop: 1 }}>Publicité ciblée</div>
                </div>
                <button
                  onClick={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
                  aria-label={consent.marketing ? 'Désactiver' : 'Activer'}
                  style={{ width: 40, height: 22, borderRadius: 11, background: consent.marketing ? '#1a4fba' : '#d1d5db', border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}
                >
                  <div style={{ position: 'absolute', top: 3, left: consent.marketing ? 20 : 3, width: 16, height: 16, borderRadius: '50%', background: 'white', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                </button>
              </div>
              {detailsOuverts && (
                <div style={{ padding: '0.6rem 1rem', borderTop: '1px solid #f3f4f6', fontSize: 11, color: '#6b7280', lineHeight: 1.6 }}>
                  Contenus et publicités personnalisés. Durée : 13 mois maximum.
                </div>
              )}
            </div>

            {/* Toggle détails */}
            <button
              onClick={() => setDetailsOuverts(!detailsOuverts)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', background: 'none', border: 'none', cursor: 'pointer', color: '#1a4fba', fontSize: 11, fontWeight: 600, marginBottom: '1rem', padding: 0 }}
            >
              {detailsOuverts ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
              {detailsOuverts ? 'Masquer les détails' : 'Voir les détails'}
            </button>

            {/* Boutons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button onClick={enregistrerChoix} style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '10px', borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                Enregistrer mes choix
              </button>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={refuserTout} style={{ flex: 1, background: 'transparent', color: '#374151', border: '1px solid #e5e7eb', padding: '9px', borderRadius: 8, fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>
                  Tout refuser
                </button>
                <button onClick={accepterTout} style={{ flex: 1, background: '#16a34a', color: 'white', border: 'none', padding: '9px', borderRadius: 8, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>
                  Tout accepter
                </button>
              </div>
            </div>

            <p style={{ fontSize: 10, color: '#9ca3af', marginTop: '0.75rem', lineHeight: 1.6, textAlign: 'center' }}>
              <a href="/confidentialite" style={{ color: '#1a4fba' }}>Politique de confidentialité</a>
              {' '}-{' '}
              <a href="/mentions-legales" style={{ color: '#1a4fba' }}>Mentions légales</a>
            </p>
          </div>
        </div>
      </>
    )
  }

  // ─── CARTE FLOTTANTE PRINCIPALE ───
  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        position: 'fixed', bottom: '1.25rem', left: '1.25rem', zIndex: 9999,
        background: 'white', width: 'min(360px, calc(100vw - 2.5rem))',
        borderRadius: 16, boxShadow: '0 8px 32px rgba(15,45,110,0.15)',
        border: '1px solid #e5e7eb',
        animation: 'slideUp 0.3s ease-out'
      }}>

        <EnTeteLogo onClose={() => setBannerState('minimized')} />

        <div style={{ padding: '0.875rem 1.25rem' }}>
          <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.7, margin: '0 0 1rem' }}>
            Le site du cabinet utilise des cookies pour améliorer votre navigation et mesurer l'audience de ses pages.
            Vous gardez le contrôle total sur vos choix.{' '}
            <a href="/confidentialite" style={{ color: '#1a4fba', textDecoration: 'underline' }}>
              En savoir plus
            </a>
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={accepterTout}
              style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '10px', borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
            >
              <CheckCircle size={14} /> Tout accepter
            </button>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={refuserTout}
                style={{ flex: 1, background: 'transparent', color: '#374151', border: '1px solid #e5e7eb', padding: '9px', borderRadius: 8, fontWeight: 600, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
              >
                <XCircle size={13} /> Tout refuser
              </button>
              <button
                onClick={() => setBannerState('settings')}
                style={{ flex: 1, background: 'transparent', color: '#374151', border: '1px solid #e5e7eb', padding: '9px', borderRadius: 8, fontWeight: 600, fontSize: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
              >
                <Settings size={13} /> Je choisis
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}