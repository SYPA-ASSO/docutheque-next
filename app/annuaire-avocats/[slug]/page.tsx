import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { MapPin, Clock, CalendarClock, Scale, Building2, Globe } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { nomComplet, euro, type Avocat } from '@/lib/avocats'
import DemandeConsultation from './DemandeConsultation'

export const revalidate = 120
const SITE = 'https://cholez-pagotto.fr'

async function getAvocat(slug: string): Promise<Avocat | null> {
  const { data } = await supabaseAdmin.from('avocats').select('*').eq('slug', slug).eq('actif', true).single()
  return (data as Avocat) || null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = await getAvocat(slug)
  if (!a) return { title: 'Avocat introuvable · Cabinet Cholez-Pagotto' }
  const nom = nomComplet(a)
  return {
    title: `${nom} · Avocat partenaire · Cabinet Cholez-Pagotto`,
    description: `${nom}${a.barreau ? `, ${a.barreau}` : ''}. Domaines : ${(a.domaines || []).join(', ')}. Demandez une mise en relation.`,
    alternates: { canonical: `${SITE}/annuaire-avocats/${a.slug}` },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = await getAvocat(slug)
  if (!a) notFound()

  const nom = nomComplet(a)
  const ligneCard: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151' }

  return (
    <>
      <Header />
      <main style={{ background: '#f7f8fb', minHeight: '70vh', padding: '2rem 1.5rem 3rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Link href="/annuaire-avocats" style={{ fontSize: '13px', color: '#1a4fba', textDecoration: 'none' }}>&larr; Tous les avocats partenaires</Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '1.25rem', marginTop: '1rem' }}>
            {/* En-tete */}
            <div style={{ background: 'white', border: '1px solid #eaedf3', borderRadius: '16px', padding: '1.75rem' }}>
              <p style={{ color: '#c8a84b', fontSize: '10px', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 6px' }}>Avocat partenaire</p>
              <h1 style={{ margin: '0 0 6px', fontSize: '1.7rem', color: '#0f2d6e' }}>{nom}</h1>
              <p style={{ margin: '0 0 14px', fontSize: '13px', color: '#9aa2b1' }}>{[a.barreau, a.structure].filter(Boolean).join(' · ')}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {(a.domaines || []).map((d) => (
                  <span key={d} style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', padding: '4px 10px', borderRadius: '50px', background: '#eef1fa', color: '#0f2d6e' }}>{d}</span>
                ))}
              </div>

              {a.bio && <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: '0 0 4px' }}>{a.bio}</p>}
            </div>

            {/* Infos pratiques */}
            <div style={{ background: 'white', border: '1px solid #eaedf3', borderRadius: '16px', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {a.tarif_montant != null && (
                <div style={ligneCard}>
                  <Scale size={16} style={{ color: '#15803d' }} />
                  <span><strong style={{ color: '#15803d' }}>{euro(a.tarif_montant)}</strong> {a.tarif_unite || 'la consultation'}</span>
                </div>
              )}
              {a.delai_reponse && (
                <div style={ligneCard}><Clock size={16} style={{ color: '#b8860b' }} /> Réponse {a.delai_reponse}</div>
              )}
              {a.disponibilites && (
                <div style={ligneCard}><CalendarClock size={16} style={{ color: '#1a4fba' }} /> {a.disponibilites}</div>
              )}
              {(a.ville || a.region) && (
                <div style={ligneCard}><MapPin size={16} style={{ color: '#6b7280' }} /> {[a.ville, a.region].filter(Boolean).join(', ')}</div>
              )}
              {a.structure && (
                <div style={ligneCard}><Building2 size={16} style={{ color: '#6b7280' }} /> {a.structure}</div>
              )}
              {a.site_web && (
                <div style={ligneCard}><Globe size={16} style={{ color: '#6b7280' }} /> <a href={a.site_web} target="_blank" rel="noopener noreferrer" style={{ color: '#1a4fba', textDecoration: 'none' }}>Site web</a></div>
              )}
            </div>

            {/* Demande de consultation */}
            <DemandeConsultation avocatSlug={a.slug} avocatNom={nom} domaines={a.domaines || []} ville={a.ville || ''} />

            {/* Mention reglementaire */}
            <p style={{ fontSize: '11px', color: '#9aa2b1', lineHeight: 1.7, margin: 0 }}>
              Le Cabinet Cholez-Pagotto agit comme intermédiaire technique de mise en relation. La consultation est réalisée par
              l&apos;avocat, en toute indépendance, et facturée directement par lui selon ses honoraires. Le cabinet ne délivre pas de
              consultation juridique personnalisée et n&apos;intervient pas dans la relation entre l&apos;avocat et son client.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
