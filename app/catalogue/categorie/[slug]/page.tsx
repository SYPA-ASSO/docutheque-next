import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FileText, Package, ArrowRight, ArrowLeft, Scale } from 'lucide-react'
import { supabaseAdmin } from '@/lib/supabase-admin'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { DocItem, Categorie } from '@/lib/types'
import { formatPrix } from '@/lib/format'
import { slugify } from '@/lib/slug'

export const revalidate = 300

const SITE = 'https://cholez-pagotto.fr'
const NB = '\u00a0'

async function getCategories(): Promise<Categorie[]> {
  const { data } = await supabaseAdmin
    .from('categories')
    .select('id, nom, ordre, mots_cles')
    .order('ordre', { ascending: true })
  return (data as Categorie[]) || []
}

async function getDocuments(nom: string): Promise<DocItem[]> {
  const { data } = await supabaseAdmin
    .from('documents')
    .select('*')
    .eq('actif', true)
    .eq('masque_catalogue', false)
    .contains('categories', [nom])
    .order('ordre', { ascending: true })
  const docs = (data as DocItem[]) || []
  return docs.filter((d) => d.type !== 'guide' && d.type !== 'livre')
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cats = await getCategories()
  const cat = cats.find((c) => slugify(c.nom) === slug)
  if (!cat) return { title: 'Catégorie introuvable · Cabinet Cholez-Pagotto' }
  return {
    title: `Modèles ${cat.nom} · Cabinet Cholez-Pagotto`,
    description: `Modèles de documents juridiques dans la catégorie ${cat.nom}, téléchargeables et personnalisables au format DOCX. Accès libre après inscription, à l'unité ou par l'abonnement Optimal.`,
    alternates: { canonical: `${SITE}/catalogue/categorie/${slug}` },
  }
}

const accesLabel = (d: DocItem) => {
  const parts: string[] = []
  if (d.acces_gratuit) parts.push('Gratuit')
  if (d.acces_optimal) parts.push('Optimal')
  if (d.acces_payant) parts.push(formatPrix(d.prix_unitaire) || "À l'unité")
  return parts.join(' · ') || '-'
}
const accesColor = (d: DocItem) => (d.acces_gratuit ? '#15803d' : d.acces_optimal ? '#1a4fba' : '#d97706')

export default async function CategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cats = await getCategories()
  const cat = cats.find((c) => slugify(c.nom) === slug)
  if (!cat) notFound()

  const docs = await getDocuments(cat.nom)
  const autres = cats.filter((c) => c.id !== cat.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Catalogue', item: `${SITE}/catalogue` },
      { '@type': 'ListItem', position: 3, name: cat.nom, item: `${SITE}/catalogue/categorie/${slug}` },
    ],
  }

  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '2.75rem 1.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <nav style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>
              <Link href="/catalogue" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>Catalogue</Link>
              <span style={{ margin: '0 8px' }}>/</span>
              <span>{cat.nom}</span>
            </nav>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.1rem)', fontWeight: 700, margin: '0 0 10px' }}>Modèles {cat.nom}</h1>
            <p style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.6, maxWidth: 720 }}>
              Retrouvez nos modèles de documents dans la catégorie {cat.nom.toLowerCase()}. Chaque modèle est un document de référence, téléchargeable et personnalisable au format DOCX, élaboré sur la base du droit français en vigueur.{docs.length > 0 ? ` ${docs.length} document${docs.length > 1 ? 's' : ''} disponible${docs.length > 1 ? 's' : ''} en accès libre, à l'unité ou via l'abonnement Optimal.` : ''}
            </p>
          </div>
        </section>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          {docs.length === 0 ? (
            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2.5rem', textAlign: 'center' }}>
              <FileText size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: 12 }} />
              <p style={{ color: '#374151', fontSize: 15, fontWeight: 700, margin: '0 0 6px' }}>Plusieurs documents de cette catégorie sont disponibles selon votre besoin.</p>
              <p style={{ color: '#6b7280', fontSize: 13.5, lineHeight: 1.6, margin: '0 0 16px', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
                Besoin d&apos;un document de cette catégorie dès maintenant{NB}? Sollicitez-le auprès du cabinet, nous vous le transmettons rapidement.
              </p>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0f2d6e', color: 'white', padding: '11px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Solliciter un document <ArrowRight size={15} /></Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))', gap: 12 }}>
              {docs.map((doc) => (
                <Link key={doc.id} href={doc.slug ? `/catalogue/${doc.slug}` : '#'}
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 12, padding: '16px 18px', background: 'white', borderRadius: 12, border: '1px solid #e5e7eb', textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div style={{ width: 38, height: 38, background: doc.type === 'pack' ? '#fff7ed' : '#eff6ff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {doc.type === 'pack' ? <Package size={18} color="#d97706" strokeWidth={1.5} /> : <FileText size={18} color="#1a4fba" strokeWidth={1.5} />}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.35 }}>{doc.nom}</p>
                      {doc.description && <p style={{ color: '#6b7280', fontSize: 12.5, lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{doc.description}</p>}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #f3f4f6', paddingTop: 10 }}>
                    <span style={{ color: accesColor(doc), fontSize: 12.5, fontWeight: 700 }}>{accesLabel(doc)}</span>
                    <ArrowRight size={15} color="#9ca3af" />
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.75rem 1.25rem', margin: '2.5rem 0', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Scale size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Les modèles proposés sont des documents de référence téléchargeables et personnalisables. Ils ne constituent pas une consultation juridique personnalisée au sens de la loi n°71-1130 du 31 décembre 1971.
            </p>
          </div>

          {autres.length > 0 && (
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.75rem' }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>Autres catégories</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {autres.map((c) => (
                  <Link key={c.id} href={`/catalogue/categorie/${slugify(c.nom)}`}
                    style={{ display: 'inline-block', padding: '7px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, background: '#eff6ff', color: '#1a4fba', textDecoration: 'none', border: '1px solid #dbeafe' }}>{c.nom}</Link>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <Link href="/catalogue" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#1a4fba', fontSize: 13.5, fontWeight: 700, textDecoration: 'none' }}><ArrowLeft size={15} /> Retour au catalogue complet</Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
