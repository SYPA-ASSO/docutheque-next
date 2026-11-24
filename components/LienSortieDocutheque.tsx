'use client'

import { useState, useEffect } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  href: string
  children: ReactNode
  style?: CSSProperties
}

export default function LienSortieDocutheque({ href, children, style }: Props) {
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
          onClick={() => setOuvert(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sortie-titre"
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'white', borderRadius: 14, padding: '1.75rem', maxWidth: 440, width: '100%', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
          >
            <h2 id="sortie-titre" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.75rem' }}>
              Vous quittez le site du cabinet
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
              Vous quittez le site principal du cabinet pour rejoindre celui de notre Docuthèque. Merci de votre visite.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setOuvert(false)}
                style={{ background: 'transparent', color: '#0f2d6e', border: '1.5px solid #0f2d6e', padding: '10px 18px', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
              >
                Rester ici
              </button>
              <a
                href={href}
                onClick={() => setOuvert(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '10px 18px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}
              >
                Accéder à la Docuthèque <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
