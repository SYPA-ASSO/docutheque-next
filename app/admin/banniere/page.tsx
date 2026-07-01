'use client'

import { useState, useEffect, type CSSProperties } from 'react'
import { useAdmin } from '../layout'
import { supabase } from '@/lib/supabase'

type Banniere = {
  active: boolean
  variante: string
  titre: string
  texte: string
  libelle_bouton: string
  lien: string
}

const VIDE: Banniere = { active: false, variante: 'promo', titre: '', texte: '', libelle_bouton: '', lien: '' }

function theme(variante: string) {
  if (variante === 'nouveau') return { bg: '#f1f8f3', bd: '#cfe6d6', ac: '#16a34a', badge: 'NOUVEAU' }
  if (variante === 'info') return { bg: '#f5f8ff', bd: '#d6e0f2', ac: '#1a4fba', badge: 'À LA UNE' }
  return { bg: '#fbf6e7', bd: '#e7d49b', ac: '#b8860b', badge: 'OFFRE' }
}

export default function AdminBanniere() {
  const { password } = useAdmin()
  const [b, setB] = useState<Banniere>(VIDE)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    supabase
      .from('banniere_catalogue')
      .select('active, variante, titre, texte, libelle_bouton, lien')
      .eq('id', 1)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          setB({
            active: !!data.active,
            variante: data.variante || 'promo',
            titre: data.titre || '',
            texte: data.texte || '',
            libelle_bouton: data.libelle_bouton || '',
            lien: data.lien || '',
          })
        }
        setLoading(false)
      })
  }, [])

  const save = async () => {
    setSaving(true)
    setMsg(null)
    try {
      const res = await fetch('/api/admin/banniere-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password || '' },
        body: JSON.stringify(b),
      })
      setMsg(res.ok ? 'Bandeau enregistré.' : "Erreur lors de l'enregistrement.")
    } catch {
      setMsg("Erreur lors de l'enregistrement.")
    }
    setSaving(false)
  }

  if (loading) return <p style={{ color: '#6b7280', fontSize: 14 }}>Chargement...</p>

  const v = theme(b.variante)
  const label: CSSProperties = { display: 'block', fontSize: 12, fontWeight: 700, color: '#374151', margin: '0 0 6px' }
  const input: CSSProperties = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 14, boxSizing: 'border-box', fontFamily: 'inherit' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 780 }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 4px' }}>Bandeau du catalogue</h1>
        <p style={{ color: '#9ca3af', fontSize: 13, margin: 0 }}>Un message mis en avant sous l&apos;en-tête de la page catalogue. Lorsqu&apos;il est masqué, rien ne s&apos;affiche à sa place.</p>
      </div>

      <label style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: '14px 16px', cursor: 'pointer' }}>
        <input type="checkbox" checked={b.active} onChange={e => setB({ ...b, active: e.target.checked })} style={{ width: 18, height: 18 }} />
        <span style={{ fontSize: 14, fontWeight: 700, color: b.active ? '#15803d' : '#6b7280' }}>{b.active ? 'Bandeau affiché sur le catalogue' : 'Bandeau masqué'}</span>
      </label>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: 20 }}>
        <div>
          <label style={label}>Thème de couleur</label>
          <select value={b.variante} onChange={e => setB({ ...b, variante: e.target.value })} style={input}>
            <option value="promo">Offre (doré)</option>
            <option value="nouveau">Nouveau (vert)</option>
            <option value="info">À la une (bleu)</option>
          </select>
        </div>
        <div>
          <label style={label}>Titre</label>
          <input value={b.titre} onChange={e => setB({ ...b, titre: e.target.value })} style={input} placeholder="Nouveau pack Conformité vente en ligne" />
        </div>
        <div>
          <label style={label}>Texte</label>
          <textarea value={b.texte} onChange={e => setB({ ...b, texte: e.target.value })} style={{ ...input, minHeight: 82, resize: 'vertical' }} placeholder="Cinq documents pour sécuriser votre boutique, disponibles à l'unité ou en pack." />
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 210 }}>
            <label style={label}>Libellé du bouton (optionnel)</label>
            <input value={b.libelle_bouton} onChange={e => setB({ ...b, libelle_bouton: e.target.value })} style={input} placeholder="Découvrir le pack" />
          </div>
          <div style={{ flex: 1, minWidth: 210 }}>
            <label style={label}>Lien du bouton (optionnel)</label>
            <input value={b.lien} onChange={e => setB({ ...b, lien: e.target.value })} style={input} placeholder="/catalogue/pack-conformite-vente-en-ligne" />
          </div>
        </div>
        <p style={{ color: '#9ca3af', fontSize: 12, margin: 0 }}>Le bouton n&apos;apparaît que si le libellé et le lien sont tous deux renseignés.</p>
      </div>

      <div>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#374151', margin: '0 0 8px' }}>Aperçu</p>
        {(b.titre || b.texte) ? (
          <div style={{ background: v.bg, border: `1px solid ${v.bd}`, borderLeft: `4px solid ${v.ac}`, borderRadius: 14, padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <span style={{ display: 'inline-block', background: v.ac, color: 'white', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', padding: '3px 10px', borderRadius: 20, marginBottom: 8 }}>{v.badge}</span>
              {b.titre && <p style={{ color: '#0f2d6e', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 4px' }}>{b.titre}</p>}
              {b.texte && <p style={{ color: '#4b5563', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{b.texte}</p>}
            </div>
            {b.lien && b.libelle_bouton && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: v.ac, color: 'white', padding: '11px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, whiteSpace: 'nowrap' }}>{b.libelle_bouton} →</span>
            )}
          </div>
        ) : (
          <p style={{ color: '#9ca3af', fontSize: 13, fontStyle: 'italic' }}>Renseignez un titre ou un texte pour visualiser le bandeau.</p>
        )}
        {!b.active && <p style={{ color: '#b45309', fontSize: 12, margin: '10px 0 0' }}>Le bandeau est actuellement masqué. Cochez la case ci-dessus pour l&apos;afficher sur le catalogue.</p>}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button onClick={save} disabled={saving} style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '12px 28px', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: saving ? 'default' : 'pointer', opacity: saving ? 0.7 : 1 }}>
          {saving ? 'Enregistrement...' : 'Enregistrer'}
        </button>
        {msg && <span style={{ fontSize: 13, fontWeight: 600, color: msg.includes('Erreur') ? '#dc2626' : '#15803d' }}>{msg}</span>}
      </div>
    </div>
  )
}
