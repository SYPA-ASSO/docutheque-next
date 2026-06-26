import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ChevronDown, ScrollText, FileCheck2, Download, Lock, Package, Lightbulb, Scale, Search, Check, Star, type LucideIcon } from 'lucide-react'
import { supabaseAdmin } from '@/lib/supabase-admin'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { DocItem } from '@/lib/types'
import { AVIS_GOOGLE } from '@/lib/avis-google'
import { BoutonsAchat, IntroDeroulante, NewsletterMini } from './FicheInteractive'

export const revalidate = 300

const SITE = 'https://cholez-pagotto.fr'
const NB = '\u00a0'
const AVATAR = 'https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g'
const BIO =
  "Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits et la sécurisation de leurs activités. Membre du CRFF. Production 100\u00a0% humaine, sans modèle généré automatiquement."

// Avis Google : note reelle maintenue a la main dans lib/avis-google.ts (aucun avis fictif).

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

const TYPE_LABEL: Record<string, string> = {
  document: 'Modèle de document',
  pack: 'Pack de modèles',
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

function cleanLabel(s: string): string {
  const txt = s.replace(/^https?:\/\//, '').replace(/^\//, '').replace(/\/$/, '').replace(/-/g, ' ').trim()
  return txt ? txt.charAt(0).toUpperCase() + txt.slice(1) : s
}

function formatDateFr(d?: string | null): string | null {
  if (!d) return null
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(d)
  if (!m) return null
  const mi = parseInt(m[2], 10) - 1
  if (mi < 0 || mi > 11) return null
  return `${parseInt(m[3], 10)} ${MOIS[mi]} ${m[1]}`
}

function affichages(type: string, contientLen: number): { Icon: LucideIcon; label: string }[] {
  if (type === 'pack') {
    return [
      { Icon: ScrollText, label: 'Rédigé par notre juriste' },
      { Icon: Package, label: contientLen > 0 ? `${contientLen} modèles inclus` : 'Plusieurs modèles inclus' },
      { Icon: Download, label: 'Téléchargement immédiat' },
    ]
  }
  if (type === 'guide') {
    return [
      { Icon: ScrollText, label: 'Rédigé par notre juriste' },
      { Icon: FileCheck2, label: 'À jour de la réglementation' },
      { Icon: Download, label: 'Téléchargement immédiat' },
    ]
  }
  if (type === 'livre') {
    return [
      { Icon: ScrollText, label: 'Rédigé par notre juriste' },
      { Icon: FileCheck2, label: 'Format PDF' },
      { Icon: Download, label: 'Téléchargement immédiat' },
    ]
  }
  return [
    { Icon: ScrollText, label: 'Rédigé par notre juriste' },
    { Icon: FileCheck2, label: "Prêt à l'emploi" },
    { Icon: Download, label: 'Téléchargement immédiat' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const r = await getRessource(slug)
  if (!r) return { title: 'Ressource introuvable' }
  const desc = (r.sous_titre || r.description || '').slice(0, 160)
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
      p.startsWith('**') && p.endsWith('**') ? <strong key={i}>{p.slice(2, -2)}</strong> : <span key={i}>{p}</span>,
    )
  return contenu.split(/\n\s*\n/).map((b, i) => {
    const lines = b.split('\n').filter((l) => l.trim() !== '')
    if (lines.length > 0 && lines.every((l) => l.trim().startsWith('- '))) {
      return (
        <ul key={i} style={{ margin: '0 0 1rem', paddingLeft: '1.25rem', color: '#374151', fontSize: 15, lineHeight: 1.7 }}>
          {lines.map((l, j) => (
            <li key={j} style={{ marginBottom: 4 }}>
              {inline(l.trim().slice(2))}
            </li>
          ))}
        </ul>
      )
    }
    const t = b.trim()
    if (t.startsWith('### ')) return <h3 key={i} style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: '1.5rem 0 0.5rem' }}>{inline(t.slice(4))}</h3>
    if (t.startsWith('## ')) return <h2 key={i} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', margin: '2rem 0 0.75rem' }}>{inline(t.slice(3))}</h2>
    return <p key={i} style={{ margin: '0 0 1rem', color: '#374151', fontSize: 15, lineHeight: 1.7 }}>{inline(t)}</p>
  })
}

function buildFaq(r: DocItem, typeNom: string): { q: string; a: string }[] {
  const faq: { q: string; a: string }[] = []
  if (r.acces_gratuit) {
    faq.push({ q: `Comment obtenir ce ${typeNom} ?`, a: `Ce ${typeNom} est en accès libre : il vous suffit de créer un compte gratuit pour le télécharger immédiatement.` })
  } else if (r.acces_payant) {
    let a = `Vous pouvez l'acheter à l'unité, à partir de 2,99${NB}€, avec téléchargement immédiat après paiement.`
    if (r.acces_optimal) a += ` Il est également inclus dans l'abonnement Optimal.`
    faq.push({ q: `Comment obtenir ce ${typeNom} ?`, a })
  } else {
    faq.push({ q: `Comment obtenir ce ${typeNom} ?`, a: `Ce ${typeNom} est inclus dans l'abonnement Optimal, qui donne accès à toute la bibliothèque dès 17,90${NB}€/mois.` })
  }
  if (r.type !== 'livre') {
    faq.push({ q: `Ce ${typeNom} est-il personnalisable ?`, a: `Oui. Il est fourni au format Word (DOCX) et reste entièrement modifiable pour l'adapter à votre situation.` })
  }
  faq.push({ q: 'Le contenu est-il à jour ?', a: `Nos contenus sont rédigés et vérifiés par notre juriste, puis actualisés selon l'évolution du droit applicable.` })
  if (r.acces_payant && !r.acces_gratuit) {
    faq.push({ q: "Vaut-il mieux l'acheter seul ou prendre l'abonnement ?", a: `Pour un besoin ponctuel, l'achat à l'unité suffit. Si vos besoins sont récurrents, l'abonnement Optimal donne accès à toute la bibliothèque et devient vite plus avantageux.` })
  }
  return faq
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
  const dateMaj = formatDateFr(r.date_maj)
  const tags = Array.isArray(r.categories) ? r.categories.filter(Boolean).slice(0, 6) : []
  const aff = affichages(r.type || 'document', contient.length)
  const definitions = Array.isArray(r.definitions) ? r.definitions.filter((d) => d && d.terme && d.definition) : []
  const faqPerso = Array.isArray(r.faq) ? r.faq.filter((f) => f && f.question && f.reponse) : []
  const faqAll = [...faqPerso.map((f) => ({ q: f.question, a: f.reponse })), ...buildFaq(r, typeNom)]
  const formatLine = r.type === 'guide' || r.type === 'livre' ? 'Format PDF' : 'Format Word (DOCX)'
  const bullets: { Icon: LucideIcon; label: string; lock?: boolean }[] = [
    { Icon: Check, label: 'Rédigé par notre juriste' },
    { Icon: Check, label: formatLine },
    { Icon: Check, label: 'Téléchargement immédiat' },
    { Icon: Lock, label: 'Paiement sécurisé', lock: true },
  ]

  const sommaire: { id: string; label: string }[] = []
  if (r.contenu) sommaire.push({ id: 'en-bref', label: 'En bref' })
  if (r.cadre_legal) sommaire.push({ id: 'cadre-legal', label: 'Ce que dit la loi' })
  if (r.conseil) sommaire.push({ id: 'conseil', label: 'Le conseil de notre juriste' })
  if (AVIS_GOOGLE.note > 0) sommaire.push({ id: 'avis', label: 'Avis Google' })
  if (faqAll.length) sommaire.push({ id: 'faq', label: 'Questions fréquentes' })

  const offers: Record<string, string>[] = []
  if (r.acces_payant && r.prix_unitaire != null) offers.push({ '@type': 'Offer', price: String(r.prix_unitaire), priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/catalogue/${r.slug}` })
  if (r.acces_gratuit) offers.push({ '@type': 'Offer', price: '0', priceCurrency: 'EUR', availability: 'https://schema.org/InStock', url: `${SITE}/catalogue/${r.slug}` })

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': r.type === 'livre' ? 'Book' : 'CreativeWork',
    name: r.nom,
    inLanguage: 'fr-FR',
    url: `${SITE}/catalogue/${r.slug}`,
    author: { '@type': 'Person', name: 'François CHOLEZ', url: `${SITE}/a-propos` },
    publisher: { '@type': 'Organization', name: 'Docuthèque · Cabinet Cholez-Pagotto', url: SITE },
  }
  if (r.sous_titre || r.description) schema.description = r.sous_titre || r.description
  if (r.image_url) schema.image = r.image_url
  if (r.date_maj) schema.dateModified = r.date_maj
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqAll.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  const definitionsSchema = definitions.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        name: `Définitions : ${r.nom}`,
        hasDefinedTerm: definitions.map((d) => ({ '@type': 'DefinedTerm', name: d.terme, description: d.definition })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {faqAll.length > 0 ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}
      {definitionsSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionsSchema) }} /> : null}
      <style dangerouslySetInnerHTML={{ __html: '.faq-d summary::-webkit-details-marker{display:none}.faq-d summary{list-style:none}.faq-d[open] .faq-chev{transform:rotate(180deg)}' }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '2rem 1.5rem 3.5rem' }}>

          <nav style={{ fontSize: 13, color: '#9ca3af', marginBottom: '1.25rem' }}>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Accueil</Link>
            {' › '}
            <Link href="/catalogue" style={{ color: '#9ca3af', textDecoration: 'none' }}>Catalogue</Link>
            {' › '}
            <span style={{ color: '#0f2d6e' }}>{r.nom}</span>
          </nav>

          <div style={{ display: 'flex', gap: 26, alignItems: 'flex-start', flexWrap: 'wrap' }}>

            {/* ===================== COLONNE PRINCIPALE ===================== */}
            <div style={{ flex: '1 1 540px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>

              <div style={card}>
                <span style={badge}>{typeLabel}</span>
                <h1 style={h1Style}>{r.nom}</h1>
                {r.sous_titre ? <p style={subStyle}>{r.sous_titre}</p> : null}
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, margin: '0 0 12px' }}>
                  <img src={AVATAR} alt="François CHOLEZ" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontSize: 13, color: '#374151' }}>
                      <span style={{ color: '#9ca3af', fontWeight: 400 }}>Rédigé par</span> <strong>François CHOLEZ</strong>
                    </div>
                    <div style={metaLine}>Juriste · Formaliste · Conseil en assurances</div>
                    {dateMaj ? <div style={metaLine}>Mis à jour le {dateMaj}</div> : null}
                  </div>
                </div>
                {tags.length > 0 ? (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, margin: '0 0 14px' }}>
                    {tags.map((t) => (
                      <span key={t} style={tagStyle}>{t}</span>
                    ))}
                  </div>
                ) : null}
                {r.description ? <IntroDeroulante texte={r.description} /> : null}
              </div>

              <div style={trustBand}>
                {aff.map((item, i) => {
                  const Ic = item.Icon
                  return (
                    <div key={i} style={trustItem}>
                      <Ic size={20} color="#b8860b" />
                      <span>{item.label}</span>
                    </div>
                  )
                })}
              </div>

              {r.contenu ? (
                <div id="en-bref" style={{ ...card, scrollMarginTop: 80 }}>
                  <div style={secH}>
                    <Search size={22} color="#0f2d6e" />
                    <h2 style={secTitle}>En bref</h2>
                  </div>
                  <div>{renderContenu(r.contenu)}</div>
                </div>
              ) : null}

              {r.cadre_legal ? (
                <div id="cadre-legal" style={{ ...card, scrollMarginTop: 80 }}>
                  <div style={secH}>
                    <Scale size={22} color="#0f2d6e" />
                    <h2 style={secTitle}>Ce que dit la loi</h2>
                  </div>
                  <div style={lawBox}>{r.cadre_legal}</div>
                </div>
              ) : null}

              {r.conseil ? (
                <div id="conseil" style={{ ...card, scrollMarginTop: 80 }}>
                  <div style={secH}>
                    <Lightbulb size={22} color="#0f2d6e" />
                    <h2 style={secTitle}>Le conseil de notre juriste</h2>
                  </div>
                  <div style={tipBox}>{r.conseil}</div>
                </div>
              ) : null}

              {inclusDans.map((p) => (
                <Link key={p.slug} href={`/catalogue/${p.slug}`} style={inclCard}>
                  <Package size={20} color="#1a4fba" style={{ flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 12, color: '#6b7280', marginBottom: 2 }}>{`Ce ${typeNom} fait partie d'un ensemble`}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1a4fba' }}>{`Inclus dans : ${p.nom} ›`}</div>
                  </div>
                </Link>
              ))}

              {contient.length > 0 ? (
                <div style={card}>
                  <h2 style={secTitle}>{r.type === 'pack' ? 'Ce que contient ce pack' : 'Documents inclus'}</h2>
                  <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
                    {contient.map((d) => (
                      <LienRessource key={d.slug} d={d} />
                    ))}
                  </div>
                </div>
              ) : null}

              <div style={bioCard}>
                <img src={AVATAR} alt="François CHOLEZ" style={{ width: 62, height: 62, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', flexShrink: 0 }} />
                <div>
                  <div style={bioHd}>{"À propos de l'auteur"}</div>
                  <div style={{ fontWeight: 800, fontSize: 15 }}>François CHOLEZ</div>
                  <p style={bioP}>{BIO}</p>
                  <Link href="/a-propos" style={bioLink}>Voir le profil ›</Link>
                </div>
              </div>

              {AVIS_GOOGLE.note > 0 ? (
                <div id="avis" style={{ ...card, scrollMarginTop: 80 }}>
                  <h2 style={{ ...secTitle, margin: '0 0 4px' }}>Avis Google</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', margin: '10px 0 6px' }}>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={20} color="#f59e0b" fill={i < Math.round(AVIS_GOOGLE.note) ? '#f59e0b' : 'none'} strokeWidth={1.5} />
                      ))}
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 800, color: '#0f2d6e' }}>
                      {AVIS_GOOGLE.note.toLocaleString('fr-FR')}<span style={{ fontSize: 12, fontWeight: 600, color: '#6b7280' }}> / 5 sur Google</span>
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: '#4b5563', margin: '0 0 12px', lineHeight: 1.6 }}>
                    Ce document vous a été utile ? Votre avis sur Google nous aide à faire connaître le cabinet. Merci par avance.
                  </p>
                  <a href={AVIS_GOOGLE.lien} target="_blank" rel="noopener noreferrer" style={avisBtn}>
                    Laisser un avis sur Google
                  </a>
                </div>
              ) : null}

              {modelesLies.length > 0 ? (
                <div style={card}>
                  <h2 style={secTitle}>Vous pourriez aussi avoir besoin de</h2>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 12 }}>
                    {modelesLies.map((d) => (
                      <RelCard key={d.slug} d={d} />
                    ))}
                  </div>
                </div>
              ) : null}

              {r.services_lies && r.services_lies.length > 0 ? (
                <div style={card}>
                  <h2 style={secTitle}>Services associés</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 12 }}>
                    {r.services_lies.map((s) => (
                      <Link key={s} href={s} style={chip}>{cleanLabel(s)}</Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {r.articles_lies && r.articles_lies.length > 0 ? (
                <div style={card}>
                  <h2 style={secTitle}>Nos articles en lien</h2>
                  <div style={{ marginTop: 4 }}>
                    {r.articles_lies.map((a) => (
                      <Link key={a} href={`/blog/${a}`} style={artRow}>
                        {cleanLabel(a)}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}

              {faqAll.length > 0 ? (
                <div id="faq" style={{ ...card, scrollMarginTop: 80 }}>
                  <h2 style={secTitle}>Questions fréquentes</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
                    {faqAll.map((f, i) => (
                      <details key={i} className="faq-d" style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                        <summary style={{ cursor: 'pointer', padding: '1rem 1.25rem', fontWeight: 700, color: '#0f2d6e', fontSize: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                          <span>{f.q}</span>
                          <ChevronDown className="faq-chev" size={18} color="#6b7280" style={{ flexShrink: 0, transition: 'transform 0.2s' }} />
                        </summary>
                        <div style={{ padding: '0 1.25rem 1.25rem', color: '#374151', fontSize: 14, lineHeight: 1.7 }}>{f.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              ) : null}

            </div>

            {/* ===================== COLONNE ACHAT ===================== */}
            <aside style={{ flex: '0 0 322px', display: 'flex', flexDirection: 'column', gap: 18 }}>

              <div style={card}>
                {r.acces_gratuit ? (
                  <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#15803d', margin: 0 }}>Accès libre, gratuit</p>
                ) : prix ? (
                  <p style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2d6e', margin: 0 }}>
                    {prix} <span style={{ fontSize: 13, fontWeight: 500, color: '#6b7280' }}>{"à l'unité"}</span>
                  </p>
                ) : (
                  <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Sur abonnement</p>
                )}

                <div style={{ marginTop: 14 }}>
                  <BoutonsAchat documentId={r.id} slug={r.slug || ''} accesGratuit={r.acces_gratuit} accesPayant={r.acces_payant} prixUnitaire={r.prix_unitaire} />
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0' }}>
                  {bullets.map((item, i) => {
                    const Ic = item.Icon
                    return (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5, color: '#374151', padding: '5px 0' }}>
                        <Ic size={16} color={item.lock ? '#0f2d6e' : '#15803d'} />
                        <span>{item.label}</span>
                      </li>
                    )
                  })}
                </ul>

                <div style={{ height: 1, background: '#e5e7eb', margin: '16px 0' }} />

                <div style={optBox}>
                  <b style={{ fontSize: 13 }}>Abonnement Optimal</b>
                  <br />
                  Accédez à toute la bibliothèque de modèles. Dès 17,90{NB}€/mois.
                  <br />
                  <Link href="/tarifs" style={optLink}>{"Découvrir l'abonnement ›"}</Link>
                </div>

                <div style={qBox}>
                  <b style={{ fontSize: 13 }}>Une question juridique ?</b>
                  <p style={qP}>{`Notre juriste vous répond par écrit sous 24 à 48${NB}h. 47${NB}€ à l'unité, sans abonnement.`}</p>
                  <Link href="/information-sur-vos-droits" style={qLink}>Poser ma question ›</Link>
                </div>

                <p style={noteStyle}>{`Information juridique au sens de la loi n°${NB}71-1130. Ne constitue pas une consultation.`}</p>
              </div>

              {sommaire.length > 0 ? (
                <div style={card}>
                  <h3 style={sideH}>Sur cette page</h3>
                  <nav style={{ display: 'flex', flexDirection: 'column' }}>
                    {sommaire.map((s) => (
                      <a key={s.id} href={`#${s.id}`} style={tocLink}>{s.label}</a>
                    ))}
                  </nav>
                </div>
              ) : null}

              {definitions.length > 0 ? (
                <div style={card}>
                  <h3 style={sideH}>Définitions utiles</h3>
                  <dl style={{ margin: 0 }}>
                    {definitions.map((d, i) => (
                      <div key={i}>
                        <dt style={{ fontSize: 13, fontWeight: 700, color: '#0f2d6e', marginTop: i === 0 ? 0 : 10 }}>{d.terme}</dt>
                        <dd style={{ fontSize: 12.5, color: '#4b5563', margin: '3px 0 0', lineHeight: 1.55 }}>{d.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}

              <div style={nlBox}>
                <h3 style={{ fontSize: 14, fontWeight: 800, color: '#0f2d6e', margin: '0 0 6px' }}>Recevez nos modèles et conseils</h3>
                <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 12px', lineHeight: 1.5 }}>Un e-mail utile de temps en temps, jamais de spam.</p>
                <NewsletterMini />
              </div>

            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const card: CSSProperties = { background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: 20 }
const badge: CSSProperties = { display: 'inline-block', background: '#eef2ff', color: '#1a4fba', fontSize: 11.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', padding: '4px 10px', borderRadius: 6 }
const h1Style: CSSProperties = { fontSize: '1.9rem', fontWeight: 800, color: '#0f2d6e', lineHeight: 1.18, margin: '12px 0 8px' }
const subStyle: CSSProperties = { fontSize: '1.08rem', color: '#475569', margin: '0 0 14px', lineHeight: 1.5 }
const metaLine: CSSProperties = { fontSize: 11.5, color: '#9ca3af', lineHeight: 1.5 }
const tagStyle: CSSProperties = { background: '#f3f4f6', color: '#4b5563', fontSize: 11.5, padding: '4px 10px', borderRadius: 20 }
const trustBand: CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', background: '#eef3fb', border: '1px solid #d4e0f3', borderRadius: 12, padding: '16px 18px' }
const trustItem: CSSProperties = { display: 'flex', alignItems: 'center', gap: 9, fontSize: 13, fontWeight: 600, color: '#334155' }
const secH: CSSProperties = { display: 'flex', alignItems: 'center', gap: 10, margin: '0 0 12px' }
const secTitle: CSSProperties = { fontSize: '1.15rem', fontWeight: 800, color: '#0f2d6e', margin: 0 }
const lawBox: CSSProperties = { background: '#f8fafc', borderLeft: '3px solid #b8860b', borderRadius: 8, padding: '14px 16px', fontSize: 13.5, color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-line' }
const tipBox: CSSProperties = { background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 10, padding: '14px 16px', fontSize: 13.5, color: '#3f3f46', lineHeight: 1.7, whiteSpace: 'pre-line' }
const inclCard: CSSProperties = { display: 'flex', alignItems: 'center', gap: 14, background: '#eef2ff', border: '1px solid #dbe3ff', borderRadius: 12, padding: '14px 16px', textDecoration: 'none' }
const bioCard: CSSProperties = { background: '#0f2d6e', borderRadius: 12, padding: 20, color: 'white', display: 'flex', gap: 16, alignItems: 'flex-start' }
const bioHd: CSSProperties = { fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#c8a84b', fontWeight: 700, margin: '0 0 6px' }
const bioP: CSSProperties = { color: 'rgba(255,255,255,0.82)', fontSize: 12.5, lineHeight: 1.6, margin: '8px 0 10px' }
const bioLink: CSSProperties = { color: 'white', fontSize: 12.5, fontWeight: 700, textDecoration: 'none' }
const avisBtn: CSSProperties = { display: 'inline-block', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '10px 18px', borderRadius: 8, fontSize: 13, fontWeight: 700 }
const chip: CSSProperties = { display: 'inline-block', background: 'white', border: '1px solid #e5e7eb', color: '#0f2d6e', textDecoration: 'none', padding: '8px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600 }
const artRow: CSSProperties = { display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #e5e7eb', lineHeight: 1.4 }
const optBox: CSSProperties = { background: 'linear-gradient(135deg, #b8860b 0%, #c8a84b 100%)', borderRadius: 10, padding: 14, color: 'white', fontSize: 12.5, lineHeight: 1.5 }
const optLink: CSSProperties = { display: 'inline-block', marginTop: 8, color: 'white', fontWeight: 700, textDecoration: 'underline', fontSize: 12 }
const qBox: CSSProperties = { background: '#0f2d6e', borderRadius: 10, padding: 14, color: 'white', marginTop: 14 }
const qP: CSSProperties = { fontSize: 12, color: 'rgba(255,255,255,0.8)', margin: '6px 0 10px', lineHeight: 1.5 }
const qLink: CSSProperties = { display: 'block', textAlign: 'center', background: 'white', color: '#0f2d6e', padding: 9, borderRadius: 8, fontSize: 12.5, fontWeight: 700, textDecoration: 'none' }
const noteStyle: CSSProperties = { fontSize: 11, color: '#9ca3af', margin: '9px 0 0', textAlign: 'center', lineHeight: 1.5 }
const sideH: CSSProperties = { fontSize: 13, fontWeight: 800, color: '#0f2d6e', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.04em' }
const tocLink: CSSProperties = { fontSize: 13, color: '#475569', textDecoration: 'none', padding: '6px 0 6px 14px', borderLeft: '2px solid #e5e7eb' }
const nlBox: CSSProperties = { background: '#eef3fb', border: '1px solid #d4e0f3', borderRadius: 12, padding: 18 }

function LienRessource({ d }: { d: DocItem }) {
  const prix = d.prix_unitaire != null ? `${String(d.prix_unitaire).replace('.', ',')}${NB}€` : null
  const acces = d.acces_gratuit ? 'Gratuit' : prix ? `${prix} à l'unité` : 'Sur abonnement'
  return (
    <Link href={`/catalogue/${d.slug}`} style={{ display: 'block', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem 1.25rem', textDecoration: 'none' }}>
      <p style={{ margin: '0 0 2px', fontWeight: 700, color: '#0f2d6e', fontSize: 14 }}>{d.nom}</p>
      {d.description ? <p style={{ margin: '0 0 4px', color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{d.description.slice(0, 120)}</p> : null}
      <p style={{ margin: 0, fontSize: 12, color: d.acces_gratuit ? '#15803d' : '#d97706', fontWeight: 600 }}>{acces}</p>
    </Link>
  )
}

function RelCard({ d }: { d: DocItem }) {
  const prix = d.prix_unitaire != null ? `${String(d.prix_unitaire).replace('.', ',')}${NB}€` : null
  const acces = d.acces_gratuit ? 'Gratuit' : prix ? prix : 'Sur abonnement'
  return (
    <Link href={`/catalogue/${d.slug}`} style={{ flex: '1 1 150px', minWidth: 150, border: '1px solid #e5e7eb', borderRadius: 10, padding: 12, textDecoration: 'none' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#0f2d6e', lineHeight: 1.35 }}>{d.nom}</div>
      <div style={{ fontSize: 11.5, color: d.acces_gratuit ? '#15803d' : '#d97706', fontWeight: 600, marginTop: 6 }}>{acces}</div>
    </Link>
  )
}
