import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Créer sa micro-entreprise en 2026 : le guide complet (plafonds, cotisations, démarches) · Blog Cabinet Cholez-Pagotto`,
  description: `Plafonds revalorisés à 203\u00a0100\u00a0€ et 83\u00a0600\u00a0€, taux de cotisations 2026, création gratuite via le guichet unique, versement libératoire, franchise de TVA, baisse de l'ACRE au 1er juillet 2026 : le guide complet et vérifié.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/creer-sa-micro-entreprise-2026-guide-complet-plafonds-cotisations-demarches',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-micro-entreprise-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-micro-entreprise-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Créer sa micro-entreprise en 2026 : le guide complet (plafonds, cotisations, démarches)",
      "description": "Plafonds revalorisés à 203 100 euros et 83 600 euros, taux de cotisations 2026, création gratuite via le guichet unique, versement libératoire, franchise de TVA, baisse de l'ACRE au 1er juillet 2026 : le guide complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-micro-entreprise-2026.webp",
      "datePublished": "2026-01-05",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/creer-sa-micro-entreprise-2026-guide-complet-plafonds-cotisations-demarches",
      "keywords": ["Micro-entreprise", "Auto-entrepreneur", "Création d'entreprise", "Cotisations sociales", "ACRE", "Versement libératoire", "Plafonds 2026", "URSSAF"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que la micro-entreprise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La micro-entreprise n'est pas une forme juridique à part : c'est une entreprise individuelle qui bénéficie de régimes simplifiés, le régime micro-fiscal pour l'impôt et le régime micro-social pour les cotisations. Les cotisations et l'impôt sont calculés en pourcentage du chiffre d'affaires encaissé. Les termes auto-entrepreneur et micro-entrepreneur désignent la même chose."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les plafonds de chiffre d'affaires en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour 2026, les seuils ont été revalorisés : 203 100 euros pour les activités de vente de marchandises et d'hébergement, et 83 600 euros pour les prestations de services et les professions libérales. En cas d'activité mixte, le chiffre d'affaires total ne peut dépasser 203 100 euros, avec un maximum de 83 600 euros pour la partie services."
          }
        },
        {
          "@type": "Question",
          "name": "Comment créer sa micro-entreprise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La création se fait en ligne, gratuitement, sur le guichet unique de l'INPI (procedures.inpi.fr), seule plateforme officielle depuis 2023. Vous y déclarez votre activité, transmettez vos pièces et obtenez votre numéro SIREN. Aucun paiement n'est demandé après coup pour finaliser l'inscription : toute sollicitation de ce type est une arnaque."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les taux de cotisations sociales en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En 2026, en métropole, les taux sont de 12,3 % pour la vente de marchandises, 21,2 % pour les prestations de services commerciales et artisanales, 25,6 % pour les professions libérales non réglementées (en hausse) et 23,2 % pour les professions relevant de la CIPAV. Ils s'appliquent sur le chiffre d'affaires encaissé, sans déduction de charges."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que le versement libératoire de l'impôt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est une option qui permet de payer l'impôt sur le revenu en même temps que les cotisations sociales, à un taux fixe sur le chiffre d'affaires : 1 % pour les ventes, 1,7 % pour les services BIC et 2,2 % pour les activités libérales. Elle est réservée aux foyers dont le revenu fiscal de référence ne dépasse pas un plafond, et reste réversible chaque année."
          }
        },
        {
          "@type": "Question",
          "name": "Une micro-entreprise paie-t-elle la TVA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas tant qu'elle reste sous les seuils de la franchise en base de TVA, soit en 2026 environ 85 000 euros pour les ventes et 37 500 euros pour les services. Attention : ces seuils sont inférieurs aux plafonds du régime micro. Une micro-entreprise peut donc devenir redevable de la TVA tout en restant en micro-entreprise, ce qui change la facturation."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que l'ACRE et qu'est-ce qui change en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'ACRE est une exonération partielle de cotisations sociales la première année d'activité, accordée sous conditions et sur demande. Un changement important intervient : à partir du 1er juillet 2026, le taux d'exonération passe de 50 % à 25 %. Les nouveaux créateurs ne seront donc plus exonérés que d'un quart de leurs cotisations la première année."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il déclarer même sans chiffre d'affaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La déclaration de chiffre d'affaires auprès de l'URSSAF, mensuelle ou trimestrielle selon l'option choisie, est obligatoire même lorsque le chiffre d'affaires est nul. Une déclaration à zéro n'entraîne aucune cotisation, mais son absence est sanctionnée par une pénalité. Pas de chiffre d'affaires signifie pas de cotisation, mais jamais pas de déclaration."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Créer sa micro-entreprise 2026" }
      ]
    }
  ]
}

export default function ArticleCreerMicroEntreprise2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        {/* BREADCRUMB */}
        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Créer sa micro-entreprise 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>MICRO-ENTREPRISE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CRÉATION D'ENTREPRISE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Créer sa micro-entreprise en 2026 : le guide complet (plafonds, cotisations, démarches)</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 5 janvier 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 16 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-micro-entreprise-2026.webp"
                alt="Créer sa micro-entreprise en 2026 : le guide complet"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#quoi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Qu'est-ce que la micro-entreprise</a></li>
                <li><a href="#plafonds" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Les plafonds 2026</a></li>
                <li><a href="#creation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La création, étape par étape</a></li>
                <li><a href="#cotisations" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Les cotisations sociales</a></li>
                <li><a href="#impot" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. L'impôt et la TVA</a></li>
                <li><a href="#acre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. L'ACRE et les aides</a></li>
                <li><a href="#pieges" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Pièges et bons réflexes</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La micro-entreprise reste la voie la plus simple et la plus rapide pour se lancer : création gratuite, comptabilité allégée, cotisations calculées sur le chiffre d'affaires. C'est aussi le régime le plus choisi en France, avec près de deux millions de micro-entrepreneurs actifs. Mais 2026 apporte deux changements importants : des <strong>plafonds de chiffre d'affaires revalorisés</strong> et une <strong>baisse de l'ACRE</strong> au 1er juillet.</p>
                <p style={{marginBottom: '1rem'}}>Ce guide complet et vérifié vous accompagne de A à Z : ce qu'est vraiment la micro-entreprise, les nouveaux plafonds, la création étape par étape, le calcul des cotisations et de l'impôt, la TVA, l'ACRE, et les pièges à éviter. L'objectif : vous permettre de démarrer en confiance, avec les bons chiffres.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> on crée sa micro-entreprise <strong>gratuitement</strong> sur le guichet unique de l'INPI, on cotise <strong>en pourcentage du chiffre d'affaires encaissé</strong>, et en 2026 on peut facturer jusqu'à <strong>203&nbsp;100&nbsp;€</strong> (vente) ou <strong>83&nbsp;600&nbsp;€</strong> (services) tout en restant au régime micro.
                  </p>
                </div>
              </section>

              <section id="quoi">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Qu'est-ce que la micro-entreprise
                </h2>
                <p style={{marginBottom: '1rem'}}>Premier point à clarifier : la micro-entreprise <strong>n'est pas une forme juridique distincte</strong>. C'est une <strong>entreprise individuelle</strong> qui bénéficie de deux régimes simplifiés : le <strong>régime micro-fiscal</strong> pour l'impôt et le <strong>régime micro-social</strong> pour les cotisations. Les termes « auto-entrepreneur » et « micro-entrepreneur » désignent exactement la même chose depuis la fusion des deux statuts.</p>
                <p style={{marginBottom: '1rem'}}>L'idée centrale du régime : au lieu d'une comptabilité d'engagement et de charges patronales complexes, vous payez vos cotisations et, en option, votre impôt en <strong>pourcentage du chiffre d'affaires réellement encaissé</strong>. Pas de chiffre d'affaires, pas de cotisation. En contrepartie de cette simplicité, vous ne pouvez pas déduire vos charges réelles : c'est un point décisif pour les activités à frais élevés.</p>
              </section>

              <section id="plafonds">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Les plafonds 2026
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour rester au régime micro, votre chiffre d'affaires ne doit pas dépasser un plafond, <strong>revalorisé pour 2026</strong>.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Type d'activité</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Plafond de chiffre d'affaires 2026</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Vente de marchandises, hébergement", "203\u00a0100\u00a0€"],
                        ["Prestations de services, professions libérales", "83\u00a0600\u00a0€"],
                        ["Activité mixte", "203\u00a0100\u00a0€ au total, dont 83\u00a0600\u00a0€ maximum pour les services"],
                      ].map(([a, p], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{a}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Si vous dépassez ces plafonds <strong>deux années civiles de suite</strong>, vous sortez du régime micro au 1er janvier de l'année suivante. Un dépassement ponctuel une seule année ne fait pas perdre le régime. À noter : ces plafonds de régime micro sont distincts, et plus élevés, que les seuils de la franchise de TVA, sur lesquels nous revenons plus loin.</p>
              </section>

              <section id="creation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La création, étape par étape
                </h2>
                <p style={{marginBottom: '1rem'}}>Depuis 2023, la création passe par une seule plateforme : le <strong>guichet unique de l'INPI</strong>, sur procedures.inpi.fr. Pour une micro-entreprise, elle est <strong>gratuite</strong>. Le parcours est simple.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Créer un compte et s'authentifier, puis démarrer la formalité de création d'entreprise.</li>
                  <li>Déclarer son activité (avec le bon code), son adresse et ses informations personnelles, et joindre les pièces demandées.</li>
                  <li>Le cas échéant, demander l'<strong>ACRE</strong> au moment de la création (voir plus bas).</li>
                  <li>Valider : vous recevrez ensuite votre numéro <strong>SIREN</strong>, votre code d'activité, et votre attestation d'immatriculation au Registre national des entreprises.</li>
                </ul>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Attention aux arnaques.</strong> La création est gratuite et aucun organisme officiel ne vous réclamera un paiement après coup pour « finaliser » ou « publier » votre inscription. Dès votre immatriculation, vos données deviennent publiques, et de faux courriers d'immatriculation circulent. Ne payez jamais sur la base d'un courrier non sollicité.
                  </p>
                </div>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>LE CABINET S'EN CHARGE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>La création, on peut s'en occuper pour vous</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>La déclaration au guichet unique est gratuite, mais le bon code d'activité et un dossier complet conditionnent la suite. Le cabinet déclare votre activité, vous oriente sur le régime et les options, et suit la formalité jusqu'au SIREN.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/creation-entreprise" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Créer mon entreprise →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/formalites-juridiques-externalisees" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>confier mes formalités</a></span>
                  </div>
                </div>
              </section>

              <section id="cotisations">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Les cotisations sociales
                </h2>
                <p style={{marginBottom: '1rem'}}>Le régime micro-social applique un pourcentage unique au chiffre d'affaires encaissé, qui couvre l'ensemble des cotisations (maladie, retraite de base et complémentaire, allocations familiales, CSG-CRDS). Voici les <strong>taux 2026</strong>, en métropole.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Activité</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Taux 2026</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Vente de marchandises (BIC)", "12,3\u00a0%"],
                        ["Prestations de services commerciales et artisanales (BIC)", "21,2\u00a0%"],
                        ["Professions libérales non réglementées (BNC)", "25,6\u00a0%"],
                        ["Professions libérales relevant de la CIPAV", "23,2\u00a0%"],
                      ].map(([a, t], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{a}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{t}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Le taux des professions libérales non réglementées a augmenté progressivement depuis 2024, jusqu'à <strong>25,6&nbsp;%</strong> en 2026, en contrepartie de droits renforcés à la retraite complémentaire. À ces cotisations s'ajoute la <strong>contribution à la formation professionnelle</strong> (CFP), comprise entre 0,1&nbsp;% et 0,3&nbsp;% selon l'activité. La déclaration de chiffre d'affaires se fait chaque mois ou chaque trimestre sur le site de l'URSSAF, et reste <strong>obligatoire même à zéro</strong>, sous peine de pénalité. Enfin, ces cotisations ouvrent des droits sociaux réels, mais le régime ne couvre pas le chômage.</p>
              </section>

              <section id="impot">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. L'impôt et la TVA
                </h2>
                <p style={{marginBottom: '1rem'}}>Côté impôt, deux régimes sont possibles. Par défaut, le <strong>régime micro-fiscal</strong> applique un abattement forfaitaire sur le chiffre d'affaires (<strong>71&nbsp;%</strong> pour la vente, <strong>50&nbsp;%</strong> pour les services BIC, <strong>34&nbsp;%</strong> pour les BNC), et le résultat est intégré aux revenus du foyer et soumis au barème. Sur option, le <strong>versement libératoire</strong> permet de payer l'impôt en même temps que les cotisations, à un taux fixe de <strong>1&nbsp;%</strong> (vente), <strong>1,7&nbsp;%</strong> (services BIC) ou <strong>2,2&nbsp;%</strong> (BNC). Cette option n'est ouverte qu'aux foyers dont le revenu fiscal de référence ne dépasse pas un plafond, et n'est avantageuse que si vous êtes effectivement imposable.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>La TVA, le piège classique.</strong> Être en micro-entreprise ne dispense pas automatiquement de TVA. Vous en êtes exonéré tant que vous restez sous les seuils de la <strong>franchise en base</strong> (en 2026, de l'ordre de 85&nbsp;000&nbsp;€ pour la vente et 37&nbsp;500&nbsp;€ pour les services). Comme ces seuils sont <strong>inférieurs</strong> aux plafonds du régime micro, vous pouvez devenir redevable de la TVA tout en restant micro-entrepreneur, et devrez alors la facturer.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Enfin, la <strong>cotisation foncière des entreprises</strong> (CFE) est due par les micro-entreprises (sauf exonération la première année et pour les très faibles chiffres d'affaires). Son montant varie selon la commune et se règle en fin d'année sur impots.gouv.fr.</p>
              </section>

              <section id="acre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. L'ACRE et les aides
                </h2>
                <p style={{marginBottom: '1rem'}}>L'<strong>ACRE</strong> (aide à la création ou à la reprise d'entreprise) allège vos cotisations sociales la première année d'activité. Elle est accordée <strong>sous conditions</strong> (demandeurs d'emploi, bénéficiaires de certains minima sociaux, jeunes de moins de 26 ans, certains repreneurs, entre autres) et nécessite une <strong>demande auprès de l'URSSAF</strong>, à formuler au moment de la création.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le changement de 2026.</strong> Jusqu'à présent, l'ACRE réduit les cotisations de <strong>50&nbsp;%</strong> la première année. À compter du <strong>1er juillet 2026</strong>, cette exonération est ramenée à <strong>25&nbsp;%</strong> : les nouveaux créateurs s'acquitteront donc de 75&nbsp;% de leurs cotisations, contre la moitié auparavant. Un paramètre à intégrer dans votre prévisionnel si vous lancez votre activité dans le courant de l'année.
                  </p>
                </div>
              </section>

              <section id="pieges">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Pièges et bons réflexes
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Ne pas confondre chiffre d'affaires et revenu.</strong> Vos cotisations, votre impôt et vos charges réelles non déductibles se prélèvent sur le chiffre d'affaires : le revenu net réellement disponible est sensiblement inférieur.</li>
                  <li><strong>Provisionner ses charges.</strong> Mettez de côté le pourcentage de cotisations dès l'encaissement, voire 25 à 30&nbsp;% en intégrant l'impôt, pour éviter tout découvert au moment de la déclaration.</li>
                  <li><strong>Déclarer même à zéro.</strong> L'absence de déclaration est sanctionnée, alors qu'une déclaration à zéro ne coûte rien.</li>
                  <li><strong>Savoir quand changer de régime.</strong> Si vos charges réelles sont élevées, ou si vos cotisations dépassent durablement l'intérêt du régime, le passage en société (EURL, SASU) peut devenir pertinent.</li>
                  <li><strong>Rester vigilant après la création.</strong> Vos données devenant publiques, vous serez la cible de sollicitations frauduleuses : ne payez jamais un courrier non sollicité.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Dès vos premières prestations, quelques documents vous protègent et donnent une image professionnelle. Les voici, prêts à l'emploi.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Conditions générales de vente (prestation de services)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le cadre qui protège chaque mission : prix, délais, paiement, rétractation pour les particuliers, responsabilité, litiges. À joindre à vos devis.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-cgv-prestation-de-services" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-lancement-micro" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Lancement micro-entreprise</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Facture conforme (micro-entreprise)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Toutes les mentions obligatoires et la mention « TVA non applicable, art. 293 B du CGI » tant que vous êtes en franchise. Numérotée, sans faute, prête à dupliquer.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-facture-conforme-micro-entreprise" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-lancement-micro" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Lancement micro-entreprise</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Devis de prestation</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Cadrez la mission avant de commencer : désignation, prix, durée de validité, conditions. Un devis daté et accepté vaut engagement des deux parties.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-devis-prestation" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-lancement-micro" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Lancement micro-entreprise</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Mentions légales de site</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Obligatoires dès que vous avez un site ou une page professionnelle : éditeur, hébergeur, contact, médiateur de la consommation. Conformes à la LCEN.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-mentions-legales-site-professionnel" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-lancement-micro" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Lancement micro-entreprise</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Lancement micro-entreprise</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>De quoi facturer en règle dès le premier jour, réuni et à prix groupé : conditions générales de vente, facture conforme, devis, et mentions légales de site.</p>
                  <a href="/catalogue/pack-lancement-micro" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Lancement →</a>
                </div>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Responsabilité civile professionnelle</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Vivement recommandée dès la première mission, et obligatoire pour de nombreuses activités (bâtiment, santé, conseil réglementé), elle couvre les dommages causés à vos clients et aux tiers. En courtier, le cabinet vous propose une couverture adaptée à votre métier.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La micro-entreprise tient sa promesse de simplicité, et reste un excellent moyen de tester une activité ou de se lancer sans lourdeur. En 2026, les plafonds revalorisés à 203&nbsp;100&nbsp;€ et 83&nbsp;600&nbsp;€ offrent un peu plus de marge, tandis que la baisse de l'ACRE au 1er juillet invite à bien chiffrer son démarrage.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de raisonner en revenu net plutôt qu'en chiffre d'affaires, de provisionner ses charges, et de surveiller à la fois les plafonds du régime micro et les seuils de TVA. En cas de doute sur votre situation ou sur le choix du régime, mieux vaut poser la question avant de vous lancer.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des sources officielles, vérifiées à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>URSSAF : régime micro-social, taux de cotisations et déclaration, <a href="https://www.autoentrepreneur.urssaf.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>autoentrepreneur.urssaf.fr</a></li>
                  <li>Service Public Entreprendre : régime fiscal et social de la micro-entreprise (fiches vérifiées au 1er janvier 2026), <a href="https://entreprendre.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>entreprendre.service-public.gouv.fr</a></li>
                  <li>Ministère de l'Économie : seuils 2026 de la micro-entreprise et évolution de l'ACRE, <a href="https://www.economie.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a></li>
                  <li>INPI : création via le guichet unique des formalités d'entreprises, <a href="https://procedures.inpi.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>procedures.inpi.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les seuils et taux sont donnés à jour à la date de publication et sont susceptibles d'évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la micro-entreprise ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La micro-entreprise n'est pas une forme juridique à part : c'est une entreprise individuelle qui bénéficie de régimes simplifiés, le régime micro-fiscal pour l'impôt et le régime micro-social pour les cotisations. Les cotisations et l'impôt sont calculés en pourcentage du chiffre d'affaires encaissé. Auto-entrepreneur et micro-entrepreneur désignent la même chose.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels sont les plafonds de chiffre d'affaires en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour 2026, les seuils ont été revalorisés : 203&nbsp;100&nbsp;€ pour les activités de vente de marchandises et d'hébergement, et 83&nbsp;600&nbsp;€ pour les prestations de services et les professions libérales. En cas d'activité mixte, le chiffre d'affaires total ne peut dépasser 203&nbsp;100&nbsp;€, avec un maximum de 83&nbsp;600&nbsp;€ pour la partie services.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment créer sa micro-entreprise ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La création se fait en ligne, gratuitement, sur le guichet unique de l'INPI (procedures.inpi.fr), seule plateforme officielle depuis 2023. Vous y déclarez votre activité, transmettez vos pièces et obtenez votre numéro SIREN. Aucun paiement n'est demandé après coup pour finaliser l'inscription : toute sollicitation de ce type est une arnaque.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels sont les taux de cotisations sociales en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En 2026, en métropole, les taux sont de 12,3&nbsp;% pour la vente de marchandises, 21,2&nbsp;% pour les prestations de services commerciales et artisanales, 25,6&nbsp;% pour les professions libérales non réglementées (en hausse) et 23,2&nbsp;% pour les professions relevant de la CIPAV. Ils s'appliquent sur le chiffre d'affaires encaissé, sans déduction de charges.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le versement libératoire de l'impôt ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est une option qui permet de payer l'impôt sur le revenu en même temps que les cotisations sociales, à un taux fixe sur le chiffre d'affaires : 1&nbsp;% pour les ventes, 1,7&nbsp;% pour les services BIC et 2,2&nbsp;% pour les activités libérales. Elle est réservée aux foyers dont le revenu fiscal de référence ne dépasse pas un plafond, et reste réversible chaque année.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Une micro-entreprise paie-t-elle la TVA ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pas tant qu'elle reste sous les seuils de la franchise en base de TVA, soit en 2026 de l'ordre de 85&nbsp;000&nbsp;€ pour les ventes et 37&nbsp;500&nbsp;€ pour les services. Attention : ces seuils sont inférieurs aux plafonds du régime micro. Une micro-entreprise peut donc devenir redevable de la TVA tout en restant en micro-entreprise, ce qui change la facturation.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que l'ACRE et qu'est-ce qui change en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'ACRE est une exonération partielle de cotisations sociales la première année d'activité, accordée sous conditions et sur demande. Un changement important intervient : à partir du 1er juillet 2026, le taux d'exonération passe de 50&nbsp;% à 25&nbsp;%. Les nouveaux créateurs ne seront donc plus exonérés que d'un quart de leurs cotisations la première année.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Faut-il déclarer même sans chiffre d'affaires ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La déclaration de chiffre d'affaires auprès de l'URSSAF, mensuelle ou trimestrielle selon l'option choisie, est obligatoire même lorsque le chiffre d'affaires est nul. Une déclaration à zéro n'entraîne aucune cotisation, mais son absence est sanctionnée par une pénalité. Pas de chiffre d'affaires signifie pas de cotisation, mais jamais pas de déclaration.</p>
                  </details>
                </div>
              </section>
            </div>

          </article>

          {/* SIDEBAR */}
          <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px'}}>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>À propos de l'auteur</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                <div>
                  <p style={{color: '#374151', fontSize: '12px', fontWeight: '700', margin: '0 0 2px'}}>François CHOLEZ</p>
                  <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p>
                </div>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets. Défend une approche du droit accessible, opérationnelle et orientée impact social ainsi qu'une meilleure maîtrise de leurs droits assurantiels. 
              </p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Expert auprès de collectifs francophones d'orientation juridique.
              </p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>

            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Accompagnement des professionnels</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Création, choix du régime, formalités : le cabinet sécurise votre lancement et vous aide à faire les bons choix.</p>
              <a href="/accompagnement-professionnels" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Découvrir l'accompagnement →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Guichet unique INPI 2026 : mode d'emploi et pièges à éviter →
              </a>
              <a href="/blog/franchise-en-base-de-tva-2026-seuils-applicables-et-abandon-du-seuil-unique" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Franchise en base de TVA : les seuils applicables en 2026 →
              </a>
            </div>

            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                En savoir plus →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <span key="Micro-entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Micro-entreprise</span>
                <span key="Auto-entrepreneur" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Auto-entrepreneur</span>
                <span key="Création d'entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Création d'entreprise</span>
                <span key="Cotisations" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Cotisations</span>
                <span key="URSSAF" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>URSSAF</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              ← Retour au blog
            </a>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}
