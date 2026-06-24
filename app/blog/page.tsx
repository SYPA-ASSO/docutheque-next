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
    slug: 'bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026',
    titre: "Bouton de rétractation : la nouvelle obligation des sites de vente en ligne depuis le 19 juin 2026",
    resume: "Depuis le 19 juin 2026, tout professionnel vendant à distance via une interface en ligne doit proposer une fonction de rétractation dédiée. Qui est concerné, à quoi ça ressemble, quelles sanctions.",
    date: '22 juin 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Conformité',
    tags: ['E-commerce', 'Droit de la consommation'],
    tempsLecture: '14 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/bouton-retractation-2026.webp',
  },
  {
    slug: 'intelligence-artificielle-ai-act-et-rgpd-vos-obligations-en-2026',
    titre: "Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD",
    resume: "Deux textes encadrent désormais l'IA : l'AI Act et le RGPD. Calendrier échelonné, report du haut risque par le Digital Omnibus, doctrine de la CNIL : le point pour les entreprises.",
    date: '20 juin 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Intelligence artificielle',
    tags: ['Intelligence artificielle', 'AI Act', 'RGPD'],
    tempsLecture: '15 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/intelligence-artificielle-ai-act-rgpd-2026.webp',
  },
  {
    slug: 'arnaques-aux-entreprises-nouvellement-creees-2026-les-reconnaitre-et-s-en-proteger',
    titre: "Arnaques aux entreprises nouvellement créées : les reconnaître et s'en protéger en 2026",
    resume: "Faux registres, faux Kbis, phishing aux organismes : dès votre immatriculation, vos données deviennent publiques et les fraudeurs frappent. Comment les reconnaître et réagir.",
    date: '10 juin 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Formalités',
    tags: ['Arnaques', 'Entreprises'],
    tempsLecture: '14 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaques-nouvelles-entreprises-2026.webp',
  },
  {
    slug: 'guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter',
    titre: "Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter",
    resume: "Depuis 2023, toutes les formalités d'entreprise passent par le guichet unique de l'INPI. Fonctionnement, procédure de secours, causes de rejet et nouveautés du décret du 30 avril 2026.",
    date: '20 mai 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Formalités',
    tags: ['Guichet unique', 'INPI'],
    tempsLecture: '14 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/guichet-unique-inpi-2026.webp',
  },
  {
    slug: 'responsabilite-dirigeants-benevoles-association-civile-penale-financiere',
    titre: "Responsabilité des dirigeants bénévoles d'association : civile, pénale et financière",
    resume: "Le bénévolat ne met pas à l'abri. Responsabilité civile, pénale, action pour insuffisance d'actif, et comment se protéger : le guide complet et vérifié pour les dirigeants.",
    date: '5 mai 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Vie associative',
    tags: ['Association', 'Responsabilité'],
    tempsLecture: '15 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-dirigeants-benevoles-association.webp',
  },
  {
    slug: 'association-imposable-non-lucrativite-franchise-impots-commerciaux-2026',
    titre: "Votre association est-elle imposable ? Non-lucrativité, franchise et obligations en 2026",
    resume: "Une association loi 1901 n'est pas automatiquement exonérée d'impôts. Règle des 4P, franchise portée à 81 051 € en 2026, six manifestations exonérées, rémunération des dirigeants.",
    date: '20 avril 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Vie associative',
    tags: ['Association', 'Non-lucrativité'],
    tempsLecture: '15 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/association-fiscalite-non-lucrativite-2026.webp',
  },
  {
    slug: 'directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee',
    titre: "Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ?",
    resume: "Près de 15 000 entités concernées en France, deux catégories, des obligations strictes et de lourdes sanctions : le point sur NIS2 et l'état de sa transposition par la loi Résilience.",
    date: '24 mars 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Conformité',
    tags: ['NIS2', 'Cybersécurité'],
    tempsLecture: '14 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/directive-nis2-cybersecurite-2026.webp',
  },
  {
    slug: 'loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants',
    titre: "Loi de finances 2026 : ce qui change pour les TPE et les indépendants",
    resume: "Promulguée le 19 février 2026 au terme d'un parcours hors normes, la loi de finances 2026 écarte plusieurs mesures redoutées, dont le seuil unique de TVA et le gel du barème, et n'apporte que des ajustements ciblés.",
    date: '24 février 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Fiscalité',
    tags: ['Loi de finances 2026', 'TPE & indépendants'],
    tempsLecture: '13 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-de-finances-2026-tpe.webp',
  },
  {
    slug: 'facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises',
    titre: "Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises",
    resume: "Réception dès le 1er septembre 2026 pour toutes les entreprises, émission en 2026 puis 2027, fin du portail public gratuit et passage obligatoire par une plateforme agréée : le point complet et vérifié.",
    date: '20 janvier 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Fiscalité',
    tags: ['Facturation électronique', 'Entreprises'],
    tempsLecture: '12 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-2026.webp',
  },
  {
    slug: 'facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique',
    titre: "Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME",
    resume: "Quelles dates s'appliquent à mon statut, le piège de la franchise de TVA, comment choisir sa plateforme agréée et quelles mentions ajouter : le guide d'action concret.",
    date: '27 janvier 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Fiscalité',
    tags: ['Micro-entreprise', 'TPE & PME'],
    tempsLecture: '11 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-guide-pratique.webp',
  },
  {
    slug: 'micro-entreprise-eurl-sasu-quel-statut-choisir-2026',
    titre: "Micro-entreprise, EURL ou SASU : quel statut choisir en 2026 ?",
    resume: "Régime social du dirigeant, fiscalité, dividendes, chômage, simplicité : le comparatif complet et vérifié des trois statuts pour entreprendre seul.",
    date: '15 janvier 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Formalités',
    tags: ['Micro-entreprise', 'EURL'],
    tempsLecture: '15 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/micro-eurl-sasu-quel-statut-2026.webp',
  },
  {
    slug: 'creer-sa-micro-entreprise-2026-guide-complet-plafonds-cotisations-demarches',
    titre: "Créer sa micro-entreprise en 2026 : le guide complet (plafonds, cotisations, démarches)",
    resume: "Plafonds revalorisés à 203 100 € et 83 600 €, taux de cotisations 2026, création gratuite via le guichet unique, versement libératoire, franchise de TVA, baisse de l'ACRE au 1er juillet 2026.",
    date: '5 janvier 2026',
    auteur: 'François CHOLEZ',
    categorie: 'Formalités',
    tags: ['Micro-entreprise', 'Auto-entrepreneur'],
    tempsLecture: '16 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-micro-entreprise-2026.webp',
  },
  {
    slug: 'franchise-en-base-de-tva-2026-seuils-applicables-et-abandon-du-seuil-unique',
    titre: "Franchise en base de TVA : le seuil unique à 25 000 € abandonné, les seuils applicables en 2026",
    resume: "Le seuil unique de TVA à 25 000 € a été définitivement abandonné par la loi du 3 novembre 2025. Quels seuils s'appliquent en 2026, que se passe-t-il en cas de dépassement et quelle mention porter sur vos factures.",
    date: '20 novembre 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Fiscalité',
    tags: ['Franchise de TVA', 'Micro-entreprise'],
    tempsLecture: '14 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/franchise-en-base-tva-2026.webp',
  },
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
    date: '3 février 2025',
    auteur: 'François CHOLEZ',
    categorie: 'Droit immobilier',
    tags: ['Caution', 'Bail'],
    tempsLecture: '10 min',
    image: 'https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/caution-depot-de-garantie.webp',
  },
]

const moisFr: Record<string, number> = { janvier: 1, février: 2, mars: 3, avril: 4, mai: 5, juin: 6, juillet: 7, août: 8, septembre: 9, octobre: 10, novembre: 11, décembre: 12 }

function valeurDate(d: string): number {
  const m = d.toLowerCase().match(/(\d{1,2})(?:er)?\s+([a-zà-ÿ]+)\s+(\d{4})/)
  if (m) {
    return parseInt(m[3], 10) * 10000 + (moisFr[m[2]] || 0) * 100 + parseInt(m[1], 10)
  }
  const an = d.match(/(\d{4})/)
  return an ? parseInt(an[1], 10) * 10000 : 0
}

const articlesTries = [...articles].sort((a, b) => valeurDate(b.date) - valeurDate(a.date))

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
              {articlesTries.map((article) => (
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