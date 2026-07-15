import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { FileText, Calendar, Clock, X } from 'lucide-react'
import { ARTICLES_BLOG as articles } from '@/lib/articles-blog'

export const metadata = {
  title: 'Blog · Actualités, informations et analyses du Cabinet Cholez-Pagotto',
  description: 'Articles juridiques rédigés par un juriste : droit du travail, droit social, droit immobilier, formalités, intelligence artificielle et droit. Informations pédagogiques pour particuliers et professionnels.',
}

const moisFr: Record<string, number> = { janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12 }

function valeurDate(d: string): number {
  const m = d.toLowerCase().match(/(\d{1,2})(?:er)?\s+([a-zà-ÿ]+)\s+(\d{4})/)
  if (m) {
    return parseInt(m[3], 10) * 10000 + (moisFr[m[2]] || 0) * 100 + parseInt(m[1], 10)
  }
  const an = d.match(/(\d{4})/)
  return an ? parseInt(an[1], 10) * 10000 : 0
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Cabinet Cholez-Pagotto",
  "description": "Articles juridiques rédigés par un juriste pour particuliers et professionnels.",
  "url": "https://cholez-pagotto.fr/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Cabinet Cholez-Pagotto",
    "url": "https://cholez-pagotto.fr"
  }
}

export default function Blog({ searchParams }: { searchParams?: { tag?: string } }) {
  const tagFiltre = searchParams?.tag ? decodeURIComponent(searchParams.tag) : null

  const articlesFiltres = tagFiltre
    ? articles.filter((a) => a.tags.some((t) => t.toLowerCase() === tagFiltre.toLowerCase()))
    : articles

  const articlesTries = [...articlesFiltres].sort((a, b) => valeurDate(b.date) - valeurDate(a.date))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '3rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', marginBottom: '14px'}}>
              BLOG
            </span>
            <h1 style={{color: 'white', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 10px', lineHeight: '1.3'}}>
              Actualités, analyses et informations juridiques
            </h1>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', margin: 0, lineHeight: '1.7'}}>
              Des articles rédigés par un juriste, pour mieux comprendre le droit du quotidien, sans jargon, avec rigueur.
            </p>
          </div>
        </section>

        {/* ARTICLES */}
        <section style={{padding: '3rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>

            {tagFiltre && (
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem', flexWrap: 'wrap'}}>
                <span style={{color: '#6b7280', fontSize: '13px'}}>Articles filtrés par tag :</span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '600', padding: '5px 8px 5px 14px', borderRadius: '20px'}}>
                  {tagFiltre}
                  <a href="/blog" style={{display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none'}} aria-label="Retirer le filtre">
                    <X size={13} strokeWidth={2.5} />
                  </a>
                </span>
                <span style={{color: '#9ca3af', fontSize: '12px'}}>({articlesTries.length} article{articlesTries.length > 1 ? 's' : ''})</span>
              </div>
            )}

            {articlesTries.length === 0 && (
              <p style={{color: '#6b7280', fontSize: '14px', marginBottom: '2rem'}}>Aucun article ne correspond à ce tag pour le moment. <a href="/blog" style={{color: '#1a4fba', fontWeight: 600}}>Voir tous les articles →</a></p>
            )}

            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              {articlesTries.map((article) => (
                <div
                  key={article.slug}
                  style={{display: 'flex', gap: '2rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden'}}
                >
                  {/* IMAGE */}
                  <a href={`/blog/${article.slug}`} style={{textDecoration: 'none'}}>
                    {article.image ? (
                      <div style={{flex: '0 0 280px', overflow: 'hidden'}}>
                        <img
                          src={article.image}
                          alt={article.titre}
                          style={{width: '280px', height: '100%', objectFit: 'cover', minHeight: '200px'}}
                        />
                      </div>
                    ) : (
                      <div style={{flex: '0 0 280px', width: '280px', background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px'}}>
                        <FileText size={48} color="rgba(255,255,255,0.3)" strokeWidth={1} />
                      </div>
                    )}
                  </a>

                  {/* CONTENU */}
                  <div style={{flex: 1, padding: '1.75rem 1.75rem 1.75rem 0'}}>
                    <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px'}}>
                      <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>{article.categorie}</span>
                      {article.tags.map(tag => (
                        <a
                          key={tag}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                          style={{background: tagFiltre && tagFiltre.toLowerCase() === tag.toLowerCase() ? '#0f2d6e' : '#f3f4f6', color: tagFiltre && tagFiltre.toLowerCase() === tag.toLowerCase() ? 'white' : '#6b7280', fontSize: '11px', padding: '2px 10px', borderRadius: '20px', textDecoration: 'none', cursor: 'pointer'}}
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                    <a href={`/blog/${article.slug}`} style={{textDecoration: 'none'}}>
                      <h2 style={{color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 10px', lineHeight: '1.4'}}>{article.titre}</h2>
                    </a>
                    <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: '0 0 16px'}}>{article.resume}</p>
                    <div style={{display: 'flex', gap: '16px', alignItems: 'center'}}>
                      <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#9ca3af', fontSize: '11px'}}>
                        <Calendar size={13} strokeWidth={1.5} /> {article.date}
                      </span>
                      <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#9ca3af', fontSize: '11px'}}>
                        <Clock size={13} strokeWidth={1.5} /> {article.tempsLecture} de lecture
                      </span>
                      <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#9ca3af', fontSize: '11px'}}>
                        <FileText size={13} strokeWidth={1.5} /> {article.auteur}
                      </span>
                    </div>
                    <a href={`/blog/${article.slug}`} style={{display: 'inline-block', marginTop: '16px', color: '#1a4fba', fontSize: '13px', fontWeight: '600', textDecoration: 'none'}}>
                      Lire l'article →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* NEWSLETTER */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 16, padding: '2.5rem 1.75rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(15,45,110,0.25)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', margin: '0 0 0.5rem' }}>Restez informé</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              Recevez nos analyses juridiques, les évolutions réglementaires et nos actualités. Une lettre claire, sans spam, désinscription en un clic.
            </p>
            <NewsletterForm variant="hero" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
