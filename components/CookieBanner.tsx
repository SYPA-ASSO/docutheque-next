'use client'

// components/CookieBanner.tsx
// Bandeau d'INFORMATION cookies (et non de consentement) :
// le site ne depose que des cookies techniques strictement necessaires,
// exemptes de consentement (deliberation CNIL n 2020-091 du 17 septembre 2020).
// Aucune mesure d'audience, aucun tracage : il n'y a donc aucun choix a recueillir.

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

const COOKIE_KEY = 'cholez_pagotto_cookies_info'
const COOKIE_EXPIRY_DAYS = 180

function marquerCommeLu() {
  const expires = new Date()
  expires.setDate(expires.getDate() + COOKIE_EXPIRY_DAYS)
  document.cookie = `${COOKIE_KEY}=ack; expires=${expires.toUTCString()}; path=/; SameSite=Lax`
}

function dejaLu(): boolean {
  return document.cookie.includes(`${COOKIE_KEY}=ack`)
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!dejaLu()) setVisible(true)
  }, [])

  const fermer = () => {
    marquerCommeLu()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="status"
      aria-label="Information sur les cookies"
      style={{
        position: 'fixed', bottom: '16px', left: '16px', zIndex: 1000,
        maxWidth: '380px', width: 'calc(100vw - 32px)',
        background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px',
        boxShadow: '0 12px 40px rgba(15,45,110,0.18)', padding: '1.1rem 1.25rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <div style={{ width: 34, height: 34, background: '#eff6ff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Cookie size={17} color="#1a4fba" strokeWidth={1.5} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: 700, margin: '0 0 4px' }}>Cookies : l&apos;essentiel</p>
          <p style={{ color: '#4b5563', fontSize: '12px', lineHeight: 1.6, margin: '0 0 10px' }}>
            Ce site n&apos;utilise que des cookies techniques strictement nécessaires (session, authentification, sécurité du paiement).
            Aucune mesure d&apos;audience, aucun traçage publicitaire.{' '}
            <a href="/confidentialite" style={{ color: '#1a4fba', fontWeight: 600 }}>En savoir plus</a>
          </p>
          <button
            type="button"
            onClick={fermer}
            style={{ background: '#0f2d6e', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}
          >
            J&apos;ai compris
          </button>
        </div>
        <button type="button" onClick={fermer} aria-label="Fermer" style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0, flexShrink: 0 }}>
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
