'use client'

import { useState, useRef, useEffect } from 'react'
import { FileText } from 'lucide-react'
import type { DocItem } from '@/lib/types'
import { formatPrix } from '@/lib/format'

type Props = {
  documents: DocItem[]
  onSelect?: (doc: DocItem) => void
  onSubmit?: (query: string) => void
  placeholder?: string
  maxHeight?: number
  onChange?: (filtered: DocItem[]) => void
}

export function DocumentSearch({
  documents,
  onSelect,
  onSubmit,
  onChange,
  placeholder = 'Rechercher un document...',
  maxHeight = 320,
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
    ? documents
    : documents.filter(doc => {
        const q = query.toLowerCase()
        if (doc.nom.toLowerCase().includes(q)) return true
        if (doc.description?.toLowerCase().includes(q)) return true
        if (doc.categories?.some((c: string) => c.toLowerCase().includes(q))) return true
        return false
      })

  useEffect(() => {
    onChange?.(filtered)
  }, [query, documents.length])

  const accesLabel = (doc: DocItem) => {
    const parts: string[] = []
    if (doc.acces_gratuit) parts.push('Gratuit')
    if (doc.acces_optimal) parts.push('Optimal')
    if (doc.acces_payant) parts.push(formatPrix(doc.prix_unitaire) || "À l'unité")
    return parts.join(' · ') || '-'
  }

  const accesColor = (doc: DocItem) => {
    if (doc.acces_gratuit) return '#15803d'
    if (doc.acces_optimal) return '#1a4fba'
    return '#d97706'
  }

  if (onChange && !onSelect) {
    return (
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '14px' }}>🔍</span>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={placeholder}
          style={{
            width: '100%', padding: '10px 36px',
            border: '1px solid #e5e7eb', borderRadius: '8px',
            fontSize: '13px', outline: 'none', boxSizing: 'border-box' as const,
            background: '#f8fafc',
          }}
        />
        {query && (
          <button type="button" onClick={() => setQuery('')}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '18px', padding: 0, lineHeight: 1 }}>
            ×
          </button>
        )}
      </div>
    )
  }

  const soumettre = () => {
    if (onSubmit && query.trim()) {
      onSubmit(query.trim())
      setOuvert(false)
    }
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', fontSize: '14px' }}>🔍</span>
        <input
          type="text"
          value={query}
          onChange={e => { setQuery(e.target.value); setOuvert(true) }}
          onFocus={() => setOuvert(true)}
          onKeyDown={e => { if (e.key === 'Enter') soumettre() }}
          placeholder={placeholder}
          style={{
            width: '100%', padding: '9px 12px 9px 32px',
            border: '1px solid #d1d5db', borderRadius: '8px',
            fontSize: '13px', outline: 'none', boxSizing: 'border-box' as const,
          }}
        />
        {query && (
          <button type="button" onClick={() => { setQuery(''); setOuvert(false) }}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '18px', padding: 0, lineHeight: 1 }}>
            ×
          </button>
        )}
      </div>
      {ouvert && query.trim().length > 0 && filtered.length > 0 && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
          background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 50,
          maxHeight: `${maxHeight}px`, overflowY: 'auto' as const,
        }}>
          {filtered.slice(0, 8).map(doc => (
            <button key={doc.id} type="button"
              onClick={() => { onSelect?.(doc); setQuery(''); setOuvert(false) }}
              style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'white', border: 'none', cursor: 'pointer', borderBottom: '1px solid #f3f4f6', display: 'flex', alignItems: 'center', gap: '10px' }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = '#f8fafc'}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = 'white'}>
              <div style={{ width: '32px', height: '32px', background: '#eff6ff', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FileText size={15} color="#1a4fba" strokeWidth={1.5} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '600', margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.nom}</p>
                {doc.categories && doc.categories.length > 0 && (
                  <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {doc.categories.slice(0, 2).join(' · ')}
                  </p>
                )}
              </div>
              <span style={{ color: accesColor(doc), fontSize: '10px', fontWeight: '700', flexShrink: 0 }}>{accesLabel(doc)}</span>
            </button>
          ))}
          {onSubmit && (
            <button type="button" onClick={soumettre}
              style={{ width: '100%', textAlign: 'center', padding: '10px 14px', background: '#f8fafc', border: 'none', borderTop: filtered.length > 0 ? 'none' : undefined, cursor: 'pointer', color: '#1a4fba', fontSize: '12.5px', fontWeight: 700 }}>
              Voir tous les résultats{filtered.length > 8 ? ` (${filtered.length})` : ''}
            </button>
          )}
        </div>
      )}
      {ouvert && query.trim().length > 0 && filtered.length === 0 && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
          background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 50, padding: '14px 16px',
        }}>
          <p style={{ color: '#374151', fontSize: '13px', fontWeight: 600, margin: '0 0 4px' }}>Aucun document ne correspond à votre recherche.</p>
          <p style={{ color: '#6b7280', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>
            Ce document n'est pas encore en ligne&nbsp;? <a href="/contact" style={{ color: '#1a4fba', fontWeight: 700 }}>Sollicitez-le auprès du cabinet</a>, nous vous le transmettons rapidement.
          </p>
        </div>
      )}
    </div>
  )
}
