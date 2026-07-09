'use client'

// components/GoogleAnalytics.tsx
// Charge le script Google Analytics (G-FKNY1K4BZY) UNIQUEMENT si l'utilisateur
// a donne son consentement (cookie cholez_pagotto_consent=granted).
// Ecoute l'evenement personnalise "cookieConsent" emis par CookieBanner
// pour activer / desactiver GA sans recharger la page.

import Script from 'next/script'
import { useState, useEffect } from 'react'

const GA_ID = 'G-FKNY1K4BZY'

function lireConsentement(): boolean {
  if (typeof document === 'undefined') return false
  return document.cookie.includes('cholez_pagotto_consent=granted')
}

export default function GoogleAnalytics() {
  const [actif, setActif] = useState(false)

  useEffect(() => {
    setActif(lireConsentement())

    const handler = (e: Event) => {
      setActif((e as CustomEvent<string>).detail === 'granted')
    }
    window.addEventListener('cookieConsent', handler)
    return () => window.removeEventListener('cookieConsent', handler)
  }, [])

  if (!actif) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-config" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
    </>
  )
}
