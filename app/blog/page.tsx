import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, Calendar, Clock } from 'lucide-react'
 
export const metadata = {
  title: 'Blog · Actualités, informations et analyses du Cabinet Cholez-Pagotto',
  description: 'Articles juridiques rédigés par un juriste : droit du travail, intelligence artificielle et droit, formalités, recouvrement, RGPD. Informations pédagogiques pour particuliers et professionnels.',
}
 
const articles = [
  {
    slug: 'lintelligence-artificielle-en-droit-une-fausse-bonne-idee',
    titre: "L'Intelligence Artificielle en droit : une fausse bonne idée ?",
    resume: "L'IA est présentée comme une révolution pour le secteur juridique. Mais ses limitations intrinsèques — hallucinations, biais algorithmiques, absence de jugement éthique — en font un outil risqué lorsqu'il est utilisé sans esprit critique. Analyse complète.",
    date: '15 juillet 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Intelligence artificielle',
    tags: ['Droit', 'Intelligence Artificielle'],
    tempsLecture: '15 min',
    image: 'https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/IA-droit-1536x1280.jpg',
  },
]
 
const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Docuthèque — Cabinet Cholez-Pagotto",
  "description": "Articles juridiques rédigés par un juriste pour particuliers et professionnels.",
  "url": "https://docutheque.cholez-pagotto.fr/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Cabinet Cholez-Pagotto — Docuthèque",
    "url": "https://docutheque.cholez-pagotto.fr"
  }
}
 
export default function Blog() {
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
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', margin: 0, maxWidth: '560px', lineHeight: '1.7'}}>
              Des articles rédigés par des juristes, pour mieux comprendre le droit du quotidien — sans jargon, avec rigueur.
            </p>
          </div>
        </section>
 
        {/* ARTICLES */}
        <section style={{padding: '3rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  style={{textDecoration: 'none', display: 'flex', gap: '2rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden', transition: 'box-shadow 0.2s'}}
                >
                  {/* IMAGE */}
                  <div style={{flex: '0 0 280px', overflow: 'hidden'}}>
                    <img
                      src={article.image}
                      alt={article.titre}
                      style={{width: '100%', height: '100%', objectFit: 'cover', minHeight: '200px'}}
                    />
                  </div>
                  {/* CONTENU */}
                  <div style={{flex: 1, padding: '1.75rem 1.75rem 1.75rem 0'}}>
                    <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px'}}>
                      <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>{article.categorie}</span>
                      {article.tags.map(tag => (
                        <span key={tag} style={{background: '#f3f4f6', color: '#6b7280', fontSize: '11px', padding: '2px 10px', borderRadius: '20px'}}>{tag}</span>
                      ))}
                    </div>
                    <h2 style={{color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 10px', lineHeight: '1.4'}}>{article.titre}</h2>
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
                    <span style={{display: 'inline-block', marginTop: '16px', color: '#1a4fba', fontSize: '13px', fontWeight: '600'}}>
                      Lire l'article →
                    </span>
                  </div>
                </a>
              ))}
            </div>
 
            {/* MESSAGE SI PAS D'AUTRES ARTICLES */}
            <div style={{textAlign: 'center', marginTop: '3rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '2rem'}}>
              <p style={{color: '#1e3a5f', fontSize: '14px', fontWeight: '600', margin: '0 0 6px'}}>D'autres articles arrivent prochainement.</p>
              <p style={{color: '#6b7280', fontSize: '12px', margin: '0 0 16px'}}>Notre blog est alimenté régulièrement par le le cabinet. Abonnez-vous à la newsletter pour ne rien manquer.</p>
              <a href="/newsletter" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '10px 24px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>
                S'inscrire à la newsletter →
              </a>
            </div>
          </div>
        </section>
 
      </main>
      <Footer />
    </>
  )
}