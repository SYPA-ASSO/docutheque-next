import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { FileText, Calendar, Clock } from 'lucide-react'

export const metadata = {
  title: 'Blog · Actualités, informations et analyses du Cabinet Cholez-Pagotto',
  description: 'Articles juridiques rédigés par un juriste : droit du travail, droit social, droit immobilier, formalités, intelligence artificielle et droit. Informations pédagogiques pour particuliers et professionnels.',
}

const articles = [
  {
    slug: 'arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement',
    titre: "Arnaque au « Registre des Sociétés Européennes » : ne laissez pas les fraudeurs saboter votre lancement",
    resume: "La création d'une entreprise vous place sous les radars de réseaux de fraude bien organisés. Découvrez comment l'arnaque au Registre des Sociétés Européennes fonctionne et comment vous en protéger.",
    date: '7 novembre 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Formalités',
    tags: ['Arnaque', 'Entrepreneurs'],
    tempsLecture: '5 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaque-registre-des-societes-europeennes.webp',
  },
  {
    slug: 'reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes',
    titre: "Réforme des ESAT : nouveaux droits pour les travailleurs handicapés",
    resume: "Trois textes réglementaires publiés au JO du 25 août 2025 concrétisent la réforme ESAT et étendent les droits des travailleurs en situation de handicap.",
    date: '1er septembre 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit social',
    tags: ['ESAT', 'Handicap'],
    tempsLecture: '6 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/travailleurs-handicapes-heureux.webp',
  },
  {
    slug: 'saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal',
    titre: "Saisie sur salaire : décryptage complet de la nouvelle procédure et du cadre légal",
    resume: "La saisie des rémunérations a été profondément modernisée en 2025. Découvrez le nouveau cadre légal, le barème 2025 et les obligations de l'employeur.",
    date: '16 juillet 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit du travail',
    tags: ['Saisie sur salaire', 'Procédure'],
    tempsLecture: '8 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/saisie-sur-salaire.webp',
  },
  {
    slug: 'lintelligence-artificielle-en-droit-une-fausse-bonne-idee',
    titre: "L'Intelligence Artificielle en droit : une fausse bonne idée ?",
    resume: "L'IA est présentée comme une révolution pour le secteur juridique. Mais ses limitations intrinsèques (hallucinations, biais algorithmiques, absence de jugement éthique) en font un outil risqué lorsqu'il est utilisé sans esprit critique.",
    date: '15 juillet 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Intelligence artificielle',
    tags: ['Droit', 'Intelligence Artificielle'],
    tempsLecture: '15 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/IA-droit-1536x1280.webp',
  },
  {
    slug: 'loi-no-2025-623-du-9-juillet-2025-visant-a-renforcer-la-securite-des-professionnels-de-sante',
    titre: "Loi visant à renforcer la sécurité des professionnels de santé",
    resume: "La loi n°2025-623 du 9 juillet 2025 renforce la protection des soignants face aux agressions. Peines aggravées, aide au dépôt de plainte, rapport annuel obligatoire.",
    date: '10 juillet 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit de la santé',
    tags: ['Santé', 'Loi 2025'],
    tempsLecture: '6 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-2025-623-9-juillet-2025-renforcant-securite-professionnels-sante.webp',
  },
  {
    slug: 'at-mt-3-decisions-cour-cassation-juin-2025',
    titre: "AT/MP : trois décisions récentes de la Cour de cassation à retenir",
    resume: "Découvrez l'essentiel de trois arrêts rendus le 26 juin 2025 par la Cour de cassation en matière d'accidents du travail et maladies professionnelles.",
    date: '3 juillet 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit du travail',
    tags: ['AT/MP', 'Jurisprudence'],
    tempsLecture: '5 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/AT-MT-cours-de-cassation-scaled.webp',
  },
  {
    slug: 'apprentissage-evolution-plafond-exoneration-cotisations-salariales',
    titre: "Apprentissage : évolution du plafond d'exonération de cotisations salariales",
    resume: "Depuis le 1er mars 2025, le plafond d'exonération de cotisations salariales pour les contrats d'apprentissage a changé. Analyse du nouveau dispositif et du changement de position du BOSS.",
    date: '3 juillet 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit du travail',
    tags: ['Apprentissage', 'Paie'],
    tempsLecture: '5 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/apprentissage-exoneration-employeur-scaled.webp',
  },
  {
    slug: 'conges-paternite-alsace-moselle-maintien-salaire-jurisprudence',
    titre: "Congés de paternité en Alsace-Moselle : droit à un maintien de salaire",
    resume: "La Cour de cassation rappelle qu'en Alsace-Moselle, les salariés en congé de paternité ont droit au maintien de leur salaire en application du droit local.",
    date: '11 juin 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit du travail',
    tags: ['Congés paternité', 'Alsace-Moselle'],
    tempsLecture: '3 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.webp',
  },
  {
    slug: 'conges-jurisprudence',
    titre: "Congés payés : obligations de l'employeur et droit du salarié",
    resume: "L'employeur doit démontrer qu'il a permis au salarié de prendre ses congés payés. Analyse de l'arrêt de la Cour de cassation du 9 avril 2025.",
    date: '6 mai 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit du travail',
    tags: ['Congés payés', 'Jurisprudence'],
    tempsLecture: '5 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/Conges-jurisprudence-scaled.webp',
  },
  {
    slug: 'cee-revalorisation-remuneration-decret-4-decembre-2024',
    titre: "Contrat d'engagement éducatif (CEE) : le seuil minimum de la rémunération a été revalorisé",
    resume: "Le décret du 4 décembre 2024 augmente le seuil minimum de rémunération du CEE à 51,08 € bruts/jour à partir du 1er mai 2025.",
    date: '30 janvier 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit du travail',
    tags: ['CEE', 'Animation'],
    tempsLecture: '8 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/CEE-revalorisation-scaled.webp',
  },
  {
    slug: 'caution-depot-de-garantie-difference-locataire-proprietaire',
    titre: "Caution et dépôt de garantie : deux notions souvent confondues, pourtant très différentes",
    resume: "Dans le droit de la location, caution et dépôt de garantie sont deux mécanismes juridiquement distincts. Comprendre la différence évite des erreurs fréquentes et parfois coûteuses.",
    date: '2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit immobilier',
    tags: ['Caution', 'Bail'],
    tempsLecture: '10 min',
    image: '',
  },
]

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
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', margin: 0, lineHeight: '1.7'}}>
              Des articles rédigés par un juriste, pour mieux comprendre le droit du quotidien, sans jargon, avec rigueur.
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
                  {article.image ? (
                    <div style={{flex: '0 0 280px', overflow: 'hidden'}}>
                      <img
                        src={article.image}
                        alt={article.titre}
                        style={{width: '100%', height: '100%', objectFit: 'cover', minHeight: '200px'}}
                      />
                    </div>
                  ) : (
                    <div style={{flex: '0 0 280px', background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px'}}>
                      <FileText size={48} color="rgba(255,255,255,0.3)" strokeWidth={1} />
                    </div>
                  )}

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

            {/* CTA NEWSLETTER */}
            <div style={{textAlign: 'center', marginTop: '3rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '2rem'}}>
              <p style={{color: '#1e3a5f', fontSize: '14px', fontWeight: '600', margin: '0 0 6px'}}>Le blog est mis à jour régulièrement.</p>
              <p style={{color: '#6b7280', fontSize: '12px', margin: '0 0 16px'}}>Abonnez-vous à la newsletter pour être informé des nouvelles publications.</p>
              <a href="/newsletter" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '10px 24px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>
                S'inscrire à la newsletter →
              </a>
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