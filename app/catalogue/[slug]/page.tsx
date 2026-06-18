import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { supabaseAdmin } from '@/lib/supabase-admin'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { DocItem } from '@/lib/types'

export const revalidate = 300

const SITE = 'https://cholez-pagotto.fr'
const NB = '\u00a0'

const TYPE_LABEL: Record<string, string> = {
  document: 'Modele de document',
  pack: 'Pack de modeles',
  guide: 'Guide pratique',
  livre: 'Livre',
}
const TYPE_NOM: Record<string, string> = { document: 'document', pack: 'pack', guide: 'guide', livre: 'livre' }

async function getRessource(slug: string): Promise<DocItem | null> {
  const { data } = await supabaseAdmin.from('documents').select('*').eq('slug', slug).eq('actif', true).single()
  return (data as DocItem) || null
}

async function getLiees(slugs: string[] | undefined): Promise<DocItem[]> {
  if (!slugs || slugs.length === 0) return []
  const { data } = await supabaseAdmin
    .from('documents')
    .select('nom, slug, type, description, prix_unitaire, acces_gratuit, acces_optimal, acces_payant')
    .in('slug', slugs)
    .eq('actif', true)
  return (data as DocItem[]) || []
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = await getRessource(slug)
  if (!r) return { title: 'Ressource introuvable' }
  const desc = (r.description || '').slice(0, 160)
  return {
    title: `${r.nom} · Cabinet Cholez-Pagotto`,
    description: desc,
    alternates: { canonical: `${SITE}/catalogue/${r.slug}` },
    openGraph: {
      title: r.nom,
      description: desc,
      url: `${SITE}/catalogue/${r.slug}`,
      images: r.image_url ? [r.image_url] : undefined,
    },
  }
}

function renderContenu(contenu: string) {
  const inline = (s: string) =>
    s.split(/(\*\*[^*]+\*\*)/g).map((p, i) =>
      p.startsWith('**') && p.endsWith('**')
        ? <strong key={i}>{p.slice(2, -2)}</strong>
        : <span key={i}>{p}</span>
    )
  return contenu.split(/\n\s*\n/).map((b, i) => {
    const lines = b.split('\n').filter((l) => l.trim() !== '')
    if (lines.length > 0 && lines.every((l) => l.trim().startsWith('- '))) {
      return (
        <ul key={i} style={{ margin: '0 0 1rem', paddingLeft: '1.25rem', color: '#374151', fontSize: 15, lineHeight: 1.7 }}>
          {lines.map((l, j) => <li key={j} style={{ marginBottom: 4 }}>{inline(l.trim().slice(2))}</li>)}
        </ul>
      )
    }
    const t = b.trim()
    if (t.startsWith('### ')) return <h3 key={i} style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: '1.5rem 0 0.5rem' }}>{inline(t.slice(4))}</h3>
    if (t.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', margin: '2rem 0 0.75rem' }}>{inline(t.slice(3))}</h2>
    return <p key={i} style={{ margin: '0 0 1rem', color: '#374151', fontSize: 15, lineHeight: 1.7 }}>{inline(t)}</p>
  })
}

export default async function RessourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = await getRessource(slug)
  if (!r) notFound()

  const [modelesLies, contient, inclusDans] = await Promise.all([
    getLiees(r.modeles_lies),
    getLiees(r.contient),
    getLiees(r.inclus_dans),
  ])

  const prix = r.prix_unitaire != null ? `${String(r.prix_unitaire).replace('.', ',')}${NB}€` : null
  const typeLabel = TYPE_LABEL[r.type || 'document'] || 'Ressource'
  const typeNom = TYPE_NOM[r.type || 'document'] || 'document'

  const offers: Record<string, string>[] = []
  if (r.acces_payant && r.prix_unitaire != null) offers.push({ '@type': 'Offer', price: String(r.prix_unitaire), priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/catalogue/${r.slug}` })
  if (r.acces_gratuit) offers.push({ '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/catalogue/${r.slug}` })

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': r.type === 'livre' ? 'Book' : 'CreativeWork',
    name: r.nom,
    inLanguage: 'fr-FR',
    url: `${SITE}/catalogue/${r.slug}`,
    publisher: { '@type': 'Organization', name: 'Docutheque · Cabinet Cholez-Pagotto', url: SITE },
  }
  if (r.description) schema.description = r.description
  if (r.image_url) schema.image = r.image_url
  if (offers.length) schema.offers = offers.length === 1 ? offers[0] : offers
  if (inclusDans.length) schema.isPartOf = inclusDans.map((p) => ({ '@type': 'CreativeWork', name: p.nom, url: `${SITE}/catalogue/${p.slug}` }))

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Catalogue', item: `${SITE}/catalogue` },
      { '@type': 'ListItem', position: 3, name: r.nom, item: `${SITE}/catalogue/${r.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem 1.5rem 3.5rem' }}>

          <nav style={{ fontSize: 13, color: '#6b7280', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</Link>
            {' / '}
            <Link href="/catalogue" style={{ color: '#6b7280', textDecoration: 'none' }}>Catalogue</Link>
            {' / '}
            <span style={{ color: '#0f2d6e' }}>{r.nom}</span>
          </nav>

          <p style={{ display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '4px 10px', borderRadius: 6, margin: '0 0 0.75rem' }}>{typeLabel}</p>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2d6e', lineHeight: 1.2, margin: '0 0 0.5rem' }}>{r.nom}</h1>
          {r.sous_titre ? <p style={{ fontSize: '1.1rem', color: '#475569', margin: '0 0 1.5rem', lineHeight: 1.5 }}>{r.sous_titre}</p> : null}

          {r.image_url ? <img src={r.image_url} alt={r.nom} style={{ width: '100%', borderRadius: 14, margin: '0 0 1.5rem', border: '1px solid #e5e7eb' }} /> : null}

          {r.description ? <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 1.5rem' }}>{r.description}</p> : null}

          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem', margin: '0 0 2.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                {r.acces_gratuit ? (
                  <p style={{ margin: 0, fontWeight: 700, color: '#15803d', fontSize: '1.05rem' }}>Acces libre, gratuit</p>
                ) : prix ? (
                  <p style={{ margin: 0, fontWeight: 700, color: '#0f2d6e', fontSize: '1.25rem' }}>{prix} <span style={{ fontSize: 13, fontWeight: 500, color: '#6b7280' }}>{"à l'unité"}</span></p>
                ) : null}
                {r.acces_optimal ? <p style={{ margin: '4px 0 0', fontSize: 13, color: '#6b7280' }}>{"Inclus dans l'abonnement Optimal"}</p> : null}
                {r.type === 'document' ? <p style={{ margin: '4px 0 0', fontSize: 13, color: '#6b7280' }}>Format Word (DOCX) personnalisable</p> : null}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {r.acces_gratuit ? (
                  <Link href="/connexion" style={btnPrimary}>Creer un compte et telecharger</Link>
                ) : (
                  <Link href="/catalogue" style={btnPrimary}>Obtenir ce {typeNom}</Link>
                )}
                <Link href="/tarifs" style={btnSecondary}>{"Voir l'abonnement Optimal"}</Link>
              </div>
            </div>
          </div>

          {r.contenu ? <div style={{ margin: '0 0 2.5rem' }}>{renderContenu(r.contenu)}</div> : null}

          {contient.length > 0 ? (
            <section style={{ margin: '0 0 2.5rem' }}>
              <h2 style={sectionTitle}>{r.type === 'pack' ? 'Modeles inclus dans ce pack' : 'Documents inclus'}</h2>
              <div style={{ display: 'grid', gap: 10 }}>{contient.map((d) => <LienRessource key={d.slug} d={d} />)}</div>
            </section>
          ) : null}

          {modelesLies.length > 0 ? (
            <section style={{ margin: '0 0 2.5rem' }}>
              <h2 style={sectionTitle}>Modeles associes</h2>
              <div style={{ display: 'grid', gap: 10 }}>{modelesLies.map((d) => <LienRessource key={d.slug} d={d} />)}</div>
            </section>
          ) : null}

          {inclusDans.length > 0 ? (
            <section style={{ margin: '0 0 2.5rem' }}>
              <h2 style={sectionTitle}>Disponible aussi en pack</h2>
              <div style={{ display: 'grid', gap: 10 }}>{inclusDans.map((d) => <LienRessource key={d.slug} d={d} />)}</div>
            </section>
          ) : null}

          {r.services_lies && r.services_lies.length > 0 ? (
            <section style={{ margin: '0 0 2.5rem' }}>
              <h2 style={sectionTitle}>Services associes</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {r.services_lies.map((s) => <Link key={s} href={s} style={chip}>{s.replace(/^\//, '').replace(/-/g, ' ')}</Link>)}
              </div>
            </section>
          ) : null}

          {r.articles_lies && r.articles_lies.length > 0 ? (
            <section style={{ margin: '0 0 1rem' }}>
              <h2 style={sectionTitle}>A lire sur le blog</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {r.articles_lies.map((a) => <Link key={a} href={`/blog/${a}`} style={chip}>{a.replace(/-/g, ' ')}</Link>)}
              </div>
            </section>
          ) : null}

        </div>
      </main>
      <Footer />
    </>
  )
}

const btnPrimary: CSSProperties = { display: 'inline-block', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, textAlign: 'center' }
const btnSecondary: CSSProperties = { display: 'inline-block', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, border: '1px solid #0f2d6e', textAlign: 'center' }
const chip: CSSProperties = { display: 'inline-block', background: 'white', border: '1px solid #e5e7eb', color: '#0f2d6e', textDecoration: 'none', padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600, textTransform: 'capitalize' }
const sectionTitle: CSSProperties = { fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 1rem' }

function LienRessource({ d }: { d: DocItem }) {
  const prix = d.prix_unitaire != null ? `${String(d.prix_unitaire).replace('.', ',')}${NB}€` : null
  const acces = d.acces_gratuit ? 'Gratuit' : prix ? `${prix} ${"à l'unité"}` : 'Sur abonnement'
  return (
    <Link href={`/catalogue/${d.slug}`} style={{ display: 'block', background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem 1.25rem', textDecoration: 'none' }}>
      <p style={{ margin: '0 0 2px', fontWeight: 700, color: '#0f2d6e', fontSize: 14 }}>{d.nom}</p>
      {d.description ? <p style={{ margin: '0 0 4px', color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{d.description.slice(0, 120)}</p> : null}
      <p style={{ margin: 0, fontSize: 12, color: d.acces_gratuit ? '#15803d' : '#d97706', fontWeight: 600 }}>{acces}</p>
    </Link>
  )
}
