'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { MapPin, Clock, Search, Scale } from 'lucide-react'
import { REGIONS, DOMAINES, nomComplet, euro, type Avocat } from '@/lib/avocats'

export default function AnnuaireClient({ avocats }: { avocats: Avocat[] }) {
  const [region, setRegion] = useState('')
  const [domaine, setDomaine] = useState('')
  const [q, setQ] = useState('')

  const liste = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return avocats.filter((a) => {
      if (region && a.region !== region) return false
      if (domaine && !(a.domaines || []).includes(domaine)) return false
      if (needle) {
        const hay = [a.prenom, a.nom, a.ville, a.barreau, (a.domaines || []).join(' ')].join(' ').toLowerCase()
        if (!hay.includes(needle)) return false
      }
      return true
    })
  }, [avocats, region, domaine, q])

  const selectStyle: React.CSSProperties = {
    width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d7dce5',
    fontSize: '13px', color: '#1f2937', background: 'white', boxSizing: 'border-box',
  }

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1.5rem 3rem' }}>
      {/* Filtres */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Domaine</label>
          <select value={domaine} onChange={(e) => setDomaine(e.target.value)} style={selectStyle}>
            <option value="">Tous les domaines</option>
            {DOMAINES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Région</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} style={selectStyle}>
            <option value="">Toutes les régions</option>
            {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>Recherche</label>
          <div style={{ position: 'relative' }}>
            <Search size={15} style={{ position: 'absolute', left: '11px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Nom, ville, domaine..." style={{ ...selectStyle, paddingLeft: '34px' }} />
          </div>
        </div>
      </div>

      <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 1rem' }}>
        {liste.length} avocat{liste.length > 1 ? 's' : ''} partenaire{liste.length > 1 ? 's' : ''}
      </p>

      {liste.length === 0 ? (
        <div style={{ background: 'white', border: '1px solid #eaedf3', borderRadius: '14px', padding: '2.5rem', textAlign: 'center', color: '#6b7280' }}>
          <Scale size={28} style={{ color: '#c8a84b', marginBottom: '10px' }} />
          <p style={{ margin: 0, fontSize: '14px' }}>Aucun avocat ne correspond à ces critères pour le moment.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {liste.map((a) => (
            <Link key={a.id} href={`/annuaire-avocats/${a.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ background: 'white', border: '1px solid #eaedf3', borderLeft: '4px solid #c8a84b', borderRadius: '12px', padding: '1.25rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', transition: 'box-shadow .15s', boxShadow: '0 1px 2px rgba(15,45,110,0.04)' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#0f2d6e', fontWeight: 700 }}>{nomComplet(a)}</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#9aa2b1' }}>
                  {[a.barreau, a.ville].filter(Boolean).join(' · ')}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', margin: '2px 0' }}>
                  {(a.domaines || []).slice(0, 3).map((d) => (
                    <span key={d} style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '3px 8px', borderRadius: '50px', background: '#eef1fa', color: '#0f2d6e' }}>{d}</span>
                  ))}
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px', borderTop: '1px solid #f1f3f7' }}>
                  {a.tarif_montant != null && (
                    <span style={{ fontSize: '12px', color: '#15803d', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {euro(a.tarif_montant)} <span style={{ color: '#9aa2b1', fontWeight: 400 }}>{a.tarif_unite || ''}</span>
                    </span>
                  )}
                  {a.delai_reponse && (
                    <span style={{ fontSize: '12px', color: '#6b7280', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={13} /> {a.delai_reponse}
                    </span>
                  )}
                  {a.region && (
                    <span style={{ fontSize: '12px', color: '#6b7280', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} /> {a.region}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
