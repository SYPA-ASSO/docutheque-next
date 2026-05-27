'use client'

import { useState, useRef, useEffect } from 'react'
import type { Categorie } from '@/lib/types'

type Props = {
  categories: Categorie[]
  selected: string[]
  onToggle: (nom: string) => void
  placeholder?: string
  maxHeight?: number
}

export function CategorySearch({
  categories,
  selected,
  onToggle,
  placeholder = 'Rechercher une catégorie...',
  maxHeight = 280,
}: Props) {
  const [query, setQuery] = useState('')
  const [ouvert, setOuvert] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOuvert(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const filtered = query.trim().length === 0
    ? categories
    : categories.filter(cat => {
        const q = query.toLowerCase()
        if (cat.nom.toLowerCase().includes(q)) return true
        if (cat.mots_cles?.some((m: string) => m.toLowerCase().includes(q))) return true
        return false
      })

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '14px' }}>🔍</span>
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOuvert(true) }}
          onFocus={() => setOuvert(true)}
          placeholder={placeholder}
          style={{
            width: '100%', padding: '9px 12px 9px 32px',
            border: '1px solid #d1d5db', borderRadius: '8px',
            fontSize: '13px', outline: 'none', boxSizing: 'border-box' as const,
            background: 'white',
          }}
        />
        {query && (
          <button type="button" onClick={() => { setQuery(''); setOuvert(false) }}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '16px', padding: 0, lineHeight: 1 }}>
            ×
          </button>
        )}
      </div>

      {ouvert && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
          background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 50,
          maxHeight: `${maxHeight}px`, overflowY: 'auto' as const,
        }}>
          {filtered.length === 0 ? (
            <p style={{ color: '#9ca3af', fontSize: '13px', padding: '12px 14px', margin: 0 }}>
              Aucune catégorie correspondante.
            </p>
          ) : (
            filtered.sort((a, b) => a.ordre - b.ordre).map(cat => {
              const isSelected = selected.includes(cat.nom)
              const q = query.toLowerCase()
              const matchMotCle = q && !cat.nom.toLowerCase().includes(q)
                ? cat.mots_cles?.find((m: string) => m.toLowerCase().includes(q))
                : undefined

              return (
                <button key={cat.id} type="button"
                  onClick={() => { onToggle(cat.nom); setQuery(''); setOuvert(false) }}
                  style={{
                    width: '100%', textAlign: 'left', padding: '10px 14px',
                    background: isSelected ? '#eff6ff' : 'white',
                    border: 'none', cursor: 'pointer', borderBottom: '1px solid #f3f4f6',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px',
                  }}
                  onMouseEnter={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = '#f8fafc' }}
                  onMouseLeave={e => { if (!isSelected) (e.currentTarget as HTMLButtonElement).style.background = 'white' }}>
                  <div>
                    <p style={{ color: isSelected ? '#1a4fba' : '#374151', fontSize: '13px', fontWeight: isSelected ? '700' : '400', margin: 0 }}>
                      {cat.nom}
                    </p>
                    {matchMotCle && (
                      <p style={{ color: '#9ca3af', fontSize: '11px', margin: '2px 0 0', fontStyle: 'italic' }}>
                        → {matchMotCle}
                      </p>
                    )}
                  </div>
                  {isSelected && <span style={{ color: '#1a4fba', fontSize: '14px', flexShrink: 0 }}>✓</span>}
                </button>
              )
            })
          )}
        </div>
      )}

      {selected.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
          {selected.map(nom => (
            <span key={nom} style={{
              background: '#eff6ff', color: '#1a4fba', fontSize: '12px',
              padding: '4px 8px 4px 12px', borderRadius: '20px',
              border: '1px solid #bfdbfe', display: 'inline-flex', alignItems: 'center', gap: '6px'
            }}>
              {nom}
              <button type="button" onClick={() => onToggle(nom)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a4fba', padding: 0, fontSize: '14px', lineHeight: 1 }}>
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}