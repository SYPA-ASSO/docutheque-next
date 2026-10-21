'use client'

// Encart "A la une" pilotable depuis le back-office (/admin/banniere).
// Reutilise la meme table Supabase (banniere_catalogue) et le meme rendu
// partout ou l'encart doit apparaitre, pour eviter toute divergence entre pages.

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

type Banniere = { active: boolean; variante: string; titre: string | null; texte: string | null; libelle_bouton: string | null; lien: string | null }

export default function BanniereALaUne({ maxWidth = 1100, outerPadding = '0 1.5rem' }: { maxWidth?: number; outerPadding?: string }) {
  const [banniere, setBanniere] = useState<Banniere | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('banniere_catalogue')
        .select('active, variante, titre, texte, libelle_bouton, lien')
        .eq('id', 1)
        .maybeSingle()
      if (data) setBanniere(data as Banniere)
    }
    load()
  }, [])

  if (!banniere?.active || (!banniere.titre && !banniere.texte)) return null

  const v = banniere.variante === 'nouveau'
    ? { bg: '#f1f8f3', bd: '#cfe6d6', ac: '#16a34a', badge: 'NOUVEAU' }
    : banniere.variante === 'info'
    ? { bg: '#f5f8ff', bd: '#d6e0f2', ac: '#1a4fba', badge: 'À LA UNE' }
    : { bg: '#fbf6e7', bd: '#e7d49b', ac: '#b8860b', badge: 'OFFRE' }

  return (
    <div style={{ maxWidth, margin: '0 auto', padding: outerPadding }}>
      <div style={{ background: v.bg, border: `1px solid ${v.bd}`, borderLeft: `4px solid ${v.ac}`, borderRadius: 14, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <span style={{ display: 'inline-block', background: v.ac, color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: 20, marginBottom: 8 }}>{v.badge}</span>
          {banniere.titre && <p style={{ color: '#0f2d6e', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 4px' }}>{banniere.titre}</p>}
          {banniere.texte && <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.7, margin: 0, whiteSpace: 'pre-line' }}>{banniere.texte}</p>}
        </div>
        {banniere.lien && banniere.libelle_bouton && (
          <a href={banniere.lien} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: v.ac, color: 'white', padding: '11px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            {banniere.libelle_bouton} <ArrowRight size={15} />
          </a>
        )}
      </div>
    </div>
  )
}
