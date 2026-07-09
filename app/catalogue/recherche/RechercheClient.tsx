'use client'

import { useState, useEffect, useMemo, type CSSProperties } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'
import { formatPrix } from '@/lib/format'
import type { DocItem, Categorie } from '@/lib/types'
import { FileText, Package, Search, ArrowRight } from 'lucide-react'

type Acces = 'tous' | 'gratuit' | 'unite' | 'optimal'
type Tri = 'pertinence' | 'nom' | 'prix'

const ACCES_OPTIONS: { v: Acces; label: string }[] = [
  { v: 'tous', label: 'Tous' },
  { v: 'gratuit', label: 'Gratuit' },
  { v: 'unite', label: "À l'unité" },
  { v: 'optimal', label: 'Optimal' },
]

export default function RechercheClient() {
  const [documents, setDocuments] = useState<DocItem[]>([])
  const [categories, setCategories] = useState<Categorie[]>([])
  const [loading, setLoading] = useState(true)

  const [q, setQ] = useState('')
  const [categorie, setCategorie] = useState('')
  const [acces, setAcces] = useState<Acces>('tous')
  const [tri, setTri] = useState<Tri>('pertinence')

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    setQ(sp.get('q') || '')
    setCategorie(sp.get('categorie') || '')
    const a = sp.get('acces')
    if (a === 'gratuit' || a === 'unite' || a === 'optimal') setAcces(a)
  }, [])

  useEffect(() => {
    const load = async () => {
      const { data: docs } = await supabase
        .from('documents')
        .select('id, nom, slug, description, blob_url, categories, profils_autorises, acces_gratuit, acces_optimal, acces_payant, prix_unitaire, actif, ordre, type, masque_catalogue')
        .eq('actif', true)
        .eq('masque_catalogue', false)
        .order('ordre', { ascending: true })
      const { data: cats } = await supabase
        .from('categories')
        .select('id, nom, ordre, mots_cles')
        .order('ordre', { ascending: true })
      if (docs) setDocuments(docs)
      if (cats) setCategories(cats)
      setLoading(false)
    }
    load()
  }, [])

  const syncUrl = (nq: string, ncat: string, nacc: Acces) => {
    const sp = new URLSearchParams()
    if (nq.trim()) sp.set('q', nq.trim())
    if (ncat) sp.set('categorie', ncat)
    if (nacc !== 'tous') sp.set('acces', nacc)
    const qs = sp.toString()
    window.history.replaceState(null, '', qs ? `/catalogue/recherche?${qs}` : '/catalogue/recherche')
  }

  const resultats = useMemo(() => {
    let out = documents
    const query = q.trim().toLowerCase()
    if (query) {
      out = out.filter(d =>
        d.nom.toLowerCase().includes(query) ||
        (d.description ? d.description.toLowerCase().includes(query) : false) ||
        (d.categories ? d.categories.some(c => c.toLowerCase().includes(query)) : false)
      )
    }
    if (categorie) out = out.filter(d => d.categories?.includes(categorie))
    if (acces === 'gratuit') out = out.filter(d => d.acces_gratuit)
    else if (acces === 'unite') out = out.filter(d => d.acces_payant)
    else if (acces === 'optimal') out = out.filter(d => d.acces_optimal)

    const arr = [...out]
    if (tri === 'nom') arr.sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))
    else if (tri === 'prix') arr.sort((a, b) => (a.prix_unitaire ?? 0) - (b.prix_unitaire ?? 0))
    return arr
  }, [documents, q, categorie, acces, tri])

  const accesLabel = (d: DocItem) => {
    const parts: string[] = []
    if (d.acces_gratuit) parts.push('Gratuit')
    if (d.acces_optimal) parts.push('Optimal')
    if (d.acces_payant) parts.push(formatPrix(d.prix_unitaire) || "À l'unité")
    return parts.join(' · ') || '-'
  }
  const accesColor = (d: DocItem) => (d.acces_gratuit ? '#15803d' : d.acces_optimal ? '#1a4fba' : '#d97706')

  const nbActifs = (categorie ? 1 : 0) + (acces !== 'tous' ? 1 : 0) + (q.trim() ? 1 : 0)
  const reset = () => { setQ(''); setCategorie(''); setAcces('tous'); setTri('pertinence'); syncUrl('', '', 'tous') }

  const champ: CSSProperties = { padding: '9px 12px', border: '1px solid #d1d5db', borderRadius: 8, fontSize: 13, background: 'white', fontFamily: 'inherit', color: '#0f2d6e' }
  const chip = (actif: boolean): CSSProperties => ({ padding: '7px 14px', borderRadius: 20, fontSize: 12.5, fontWeight: 700, cursor: 'pointer', border: `1px solid ${actif ? '#1a4fba' : '#e5e7eb'}`, background: actif ? '#1a4fba' : 'white', color: actif ? 'white' : '#374151' })
  const badge: CSSProperties = { display: 'inline-block', background: '#eef1fa', color: '#0f2d6e', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 20, marginRight: 5, marginTop: 4 }

  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '2.5rem 1.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)', margin: '0 0 6px' }}>CATALOGUE</p>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2rem)', fontWeight: 700, margin: '0 0 8px' }}>Recherche de documents</h1>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
              Trouvez le bon modèle par mot-clé, affinez par catégorie et par niveau d&apos;accès. Chaque résultat mène à sa fiche détaillée.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1.5rem' }}>

          <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
            <Search size={17} color="#9ca3af" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
              onBlur={() => syncUrl(q, categorie, acces)}
              onKeyDown={e => { if (e.key === 'Enter') syncUrl(q, categorie, acces) }}
              placeholder="Rechercher un document par nom, catégorie ou mot-clé..."
              style={{ width: '100%', padding: '13px 40px', border: '1px solid #d1d5db', borderRadius: 10, fontSize: 15, outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }}
            />
            {q && (
              <button type="button" onClick={() => { setQ(''); syncUrl('', categorie, acces) }}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: 20, lineHeight: 1, padding: 0 }}>×</button>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: '0.5rem' }}>
            <select value={categorie} onChange={e => { setCategorie(e.target.value); syncUrl(q, e.target.value, acces) }} style={champ}>
              <option value="">Toutes les catégories</option>
              {categories.map(c => <option key={c.id} value={c.nom}>{c.nom}</option>)}
            </select>

            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {ACCES_OPTIONS.map(o => (
                <button key={o.v} type="button" onClick={() => { setAcces(o.v); syncUrl(q, categorie, o.v) }} style={chip(acces === o.v)}>{o.label}</button>
              ))}
            </div>

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, color: '#9ca3af' }}>Trier par</span>
              <select value={tri} onChange={e => setTri(e.target.value as Tri)} style={champ}>
                <option value="pertinence">Pertinence</option>
                <option value="nom">Nom (A-Z)</option>
                <option value="prix">Prix croissant</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '1.25rem 0' }}>
            <p style={{ fontSize: 14, color: '#374151', fontWeight: 600, margin: 0 }}>
              {loading ? 'Chargement des documents...' : `${resultats.length} document${resultats.length > 1 ? 's' : ''} trouvé${resultats.length > 1 ? 's' : ''}`}
            </p>
            {nbActifs > 0 && !loading && (
              <button type="button" onClick={reset} style={{ background: 'none', border: 'none', color: '#1a4fba', fontSize: 13, fontWeight: 700, cursor: 'pointer', padding: 0 }}>Réinitialiser les filtres</button>
            )}
          </div>

          {loading ? null : resultats.length === 0 ? (
            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2.5rem', textAlign: 'center' }}>
              <FileText size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: 12 }} />
              <p style={{ color: '#374151', fontSize: 15, fontWeight: 700, margin: '0 0 6px' }}>Aucun document ne correspond à votre recherche.</p>
              <p style={{ color: '#6b7280', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 16px', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
                Ce document n&apos;est pas encore en ligne&nbsp;? Sollicitez-le auprès du cabinet, nous vous le transmettons rapidement.
              </p>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0f2d6e', color: 'white', padding: '11px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Solliciter un document <ArrowRight size={15} /></a>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 12 }}>
              {resultats.map(doc => (
                <a key={doc.id} href={doc.slug ? `/catalogue/${doc.slug}` : undefined}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 12, padding: '16px 18px', background: 'white', borderRadius: 12, border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit', cursor: doc.slug ? 'pointer' : 'default' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ width: 38, height: 38, background: doc.type === 'pack' ? '#fff7ed' : '#eff6ff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {doc.type === 'pack' ? <Package size={18} color="#d97706" strokeWidth={1.5} /> : <FileText size={18} color="#1a4fba" strokeWidth={1.5} />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.35 }}>{doc.nom}</p>
                      {doc.description && <p style={{ color: '#6b7280', fontSize: 12.5, lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{doc.description}</p>}
                      <div>{doc.categories?.slice(0, 2).map(c => <span key={c} style={badge}>{c}</span>)}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: 10 }}>
                    <span style={{ color: accesColor(doc), fontSize: 12.5, fontWeight: 700 }}>{accesLabel(doc)}</span>
                    <ArrowRight size={15} color="#9ca3af" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
