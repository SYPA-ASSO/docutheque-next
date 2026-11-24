'use client'

// components/LienSortieDocutheque.tsx
// Lien vers la Docuthèque avec fenêtre d'information avant la sortie du site du cabinet.

import { useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

const URL_DOCUTHEQUE = 'https://docutheque.cholez-pagotto.fr/tarifs'

export default function LienSortieDocutheque({ children, style, href = URL_DOCUTHEQUE }: { children: ReactNode; style?: CSSProperties; href?: string }) {
  const [ouvert, setOuvert] = useState(false)

  useEffect(() => {
    if (!ouvert) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOuvert(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ouvert])

  return (
    <>
      <a
        href={href}
        onClick={(e) => { e.preventDefault(); setOuvert(true) }}
        style={style}
      >
        {children}
      </a>
      {ouvert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sortie-titre"
          onClick={() => setOuvert(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', zIndex: 1000 }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: 14, padding: '1.75rem', maxWidth: 440, width: '100%', boxShadow: '0 20px 50px rgba(0,0,0,0.25)' }}>
            <h2 id="sortie-titre" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.75rem' }}>
              Vous quittez le site du cabinet
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
              Vous quittez le site principal du cabinet pour rejoindre celui de notre Docuthèque. Merci de votre visite.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button type="button" onClick={() => setOuvert(false)} style={{ background: 'white', color: '#374151', border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 18px', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
                Rester ici
              </button>
              <a href={href} style={{ background: '#0f2d6e', color: 'white', borderRadius: 8, padding: '10px 18px', fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Accéder à la Docuthèque
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
