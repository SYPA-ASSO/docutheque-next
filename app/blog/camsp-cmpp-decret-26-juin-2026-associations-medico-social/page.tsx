import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Associations du médico-social : ce qu'il faut retenir du décret sur les CAMSP et les CMPP · Blog Cabinet Cholez-Pagotto",
  description: "Le décret n° 2026-580 du 26 juin 2026 refonde les missions, l'organisation et le fonctionnement des CAMSP et des CMPP : deux cahiers des charges remplacent des annexes de 1946 et 1956, les recommandations de la HAS deviennent opposables. Analyse pour les associations gestionnaires.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/camsp-cmpp-decret-26-juin-2026-associations-medico-social',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/camsp-cmpp-decret-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/camsp-cmpp-decret-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Associations du médico-social : ce qu'il faut retenir du décret sur les CAMSP et les CMPP",
      "description": "Le décret n° 2026-580 du 26 juin 2026 refonde les missions, l'organisation et le fonctionnement des CAMSP et des CMPP : deux cahiers des charges remplacent des annexes de 1946 et 1956, les recommandations de la HAS deviennent opposables. Analyse pour les associations gestionnaires.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/camsp-cmpp-decret-2026.webp",
      "datePublished": "2026-07-05",
      "dateModified": "2026-07-05",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": {
          "@type": "Organization",
          "name": "Cabinet Cholez-Pagotto"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/camsp-cmpp-decret-26-juin-2026-associations-medico-social",
      "keywords": [
        "CAMSP",
        "CMPP",
        "décret 2026-580",
        "cahier des charges",
        "recommandations HAS opposables",
        "médico-social",
        "associations gestionnaires",
        "handicap",
        "intervention précoce",
        "ARS"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quand le décret CAMSP et CMPP entre-t-il en vigueur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret n° 2026-580 du 26 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et est entré en vigueur le lendemain de sa publication, soit le 2 juillet 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Que remplace exactement ce décret ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il abroge les annexes 32 et 32 bis du décret n° 46-1834 du 20 août 1946, complétées en 1956 puis 1976, qui régissaient jusqu'ici les CMPP et les CAMSP, et les remplace par deux cahiers des charges insérés en annexes du Code de l'action sociale et des familles."
          }
        },
        {
          "@type": "Question",
          "name": "Que signifie l'opposabilité des recommandations de la HAS ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les recommandations de bonnes pratiques professionnelles de la Haute Autorité de santé deviennent un référentiel juridiquement opposable aux CAMSP et CMPP : les pratiques des centres peuvent être appréciées à leur aune, notamment lors des contrôles et évaluations conduits sous l'égide des autorités compétentes."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il une orientation de la MDPH pour s'adresser à un CAMSP ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'accès direct est consacré : les familles peuvent s'adresser à un CAMSP sans orientation préalable de la MDPH ou de la CDAPH, ce qui favorise la précocité du repérage et des interventions chez les enfants de la naissance à six ans."
          }
        },
        {
          "@type": "Question",
          "name": "Que doivent faire en priorité les associations gestionnaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Confronter leur projet d'établissement aux nouveaux cahiers des charges, cartographier les recommandations HAS applicables et former les équipes, mettre à jour leurs documents institutionnels et leur conformité RGPD, et préparer le dialogue avec l'ARS sur la base du nouveau référentiel."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://cholez-pagotto.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://cholez-pagotto.fr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CAMSP et CMPP : le décret du 26 juin 2026"
        }
      ]
    }
  ]
}

export default function ArticleCamspCmppDecret2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>CAMSP et CMPP : le décret du 26 juin 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>MÉDICO-SOCIAL</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ASSOCIATIONS</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>HANDICAP</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Associations du médico-social : ce qu'il faut retenir du décret sur les CAMSP et les CMPP</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 5 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 12 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/camsp-cmpp-decret-2026.webp"
                alt="Associations du médico-social : ce qu'il faut retenir du décret sur les CAMSP et les CMPP"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#refonte" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Une refonte : deux cahiers des charges remplacent des annexes de 1946 et 1956</a></li>
                <li><a href="#has" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le changement majeur : les recommandations de la HAS deviennent opposables</a></li>
                <li><a href="#missions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Missions redéfinies : accès direct, spécialisation, prévention</a></li>
                <li><a href="#si" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Données, systèmes d'information et pilotage</a></li>
                <li><a href="#agenda" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. L'agenda de mise en conformité des gestionnaires</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>C'est un texte que le secteur attendait, et qui remplace des dispositions vieilles, pour certaines, de <strong>quatre-vingts ans</strong>. Le <strong>décret n°&nbsp;2026-580 du 26 juin 2026</strong>, publié au Journal officiel du 1er juillet 2026, redéfinit les missions, l'organisation et le fonctionnement de deux catégories d'établissements essentielles du repérage et de l'accompagnement précoces : les <strong>centres d'action médico-sociale précoce (CAMSP)</strong>, qui accueillent les enfants de la naissance à six ans, et les <strong>centres médico-psycho-pédagogiques (CMPP)</strong>, qui accompagnent enfants et adolescents.</p>
                <p style={{marginBottom: '1rem'}}>La très grande majorité de ces centres est gérée par des <strong>associations</strong>. Pour elles, ce décret n'est pas une actualité parmi d'autres : il rebat le référentiel au regard duquel leurs autorisations, leurs projets d'établissement, leurs évaluations et leurs relations avec les agences régionales de santé (ARS) et les départements vont désormais être appréciés. Voici ce qu'il faut en retenir, et ce qu'il faut anticiper.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> le décret n°&nbsp;2026-580 du 26 juin 2026, publié au Journal officiel du 1er juillet et en vigueur depuis le <strong>2 juillet 2026</strong>, remplace les annexes réglementaires de 1946 et 1956 par <strong>deux cahiers des charges</strong> définissant les missions, l'organisation et le fonctionnement des <strong>CAMSP</strong> et des <strong>CMPP</strong>, rend <strong>opposables les recommandations de bonnes pratiques de la Haute Autorité de santé</strong>, consacre l'<strong>accès direct</strong> aux CAMSP sans orientation préalable de la MDPH et organise la transmission des données d'activité.
                  </p>
                </div>
              </section>

              <section id="refonte">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Une refonte : deux cahiers des charges remplacent des annexes de 1946 et 1956
                </h2>
                <p style={{marginBottom: '1rem'}}>Jusqu'ici, les CAMSP et les CMPP fonctionnaient sur la base des <strong>annexes 32 et 32 bis</strong> du décret n°&nbsp;46-1834 du 20 août 1946, complétées en 1956 puis en 1976 : des textes conçus dans un autre siècle, pour un autre paysage sanitaire et social, antérieurs aux lois de 2002 sur le médico-social et de 2005 sur le handicap.</p>
                <p style={{marginBottom: '1rem'}}>Le décret du 26 juin 2026 abroge ces annexes et les remplace par <strong>deux cahiers des charges</strong>, insérés en annexes du Code de l'action sociale et des familles : l'un pour les CAMSP, l'autre pour les CMPP. Chaque cahier des charges définit les <strong>missions</strong>, les <strong>publics</strong>, l'<strong>organisation</strong> et le <strong>fonctionnement</strong> attendus de ces structures. Le Conseil national consultatif des personnes handicapées (CNCPH) a été consulté sur le projet, par un avis du 16 avril 2026.</p>
                <p style={{marginBottom: '1rem'}}>Le texte est entré en vigueur le <strong>lendemain de sa publication</strong>, soit le 2 juillet 2026. Les gestionnaires doivent donc désormais lire leurs obligations à la lumière de ce nouveau référentiel.</p>
              </section>

              <section id="has">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le changement majeur : les recommandations de la HAS deviennent opposables
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le point le plus structurant du décret : les cahiers des charges se réfèrent aux <strong>recommandations de bonnes pratiques professionnelles de la Haute Autorité de santé</strong>, qui deviennent ainsi <strong>opposables</strong> aux CAMSP et aux CMPP. Concrètement, ces recommandations cessent d'être de simples références scientifiques pour devenir un standard au regard duquel les pratiques des centres peuvent être appréciées, notamment par les autorités de tarification et de contrôle.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Pour les ARS</strong>, c'est un levier renforcé : inspections, évaluations et dialogues de gestion pourront s'appuyer explicitement sur la conformité des pratiques aux recommandations.</li>
                  <li><strong>Pour les gestionnaires</strong>, c'est une exigence de mise à niveau : formations des équipes, protocoles internes, choix des méthodes d'intervention doivent pouvoir être justifiés au regard des recommandations en vigueur.</li>
                  <li><strong>Pour les familles</strong>, c'est une garantie de qualité et d'homogénéité des pratiques sur le territoire.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Point de vigilance pour les associations gestionnaires.</strong> L'opposabilité des recommandations suppose une veille active : les recommandations de la HAS évoluent, et c'est leur version en vigueur qui fait référence. Intégrer cette veille dans le projet d'établissement, les plans de formation et la préparation des évaluations n'est plus une option.
                  </p>
                </div>
              </section>

              <section id="missions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Missions redéfinies : accès direct, spécialisation, prévention
                </h2>
                <p style={{marginBottom: '1rem'}}>Sur le fond des missions, plusieurs clarifications importantes :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Accès direct aux CAMSP.</strong> Les centres restent accessibles <strong>sans orientation préalable de la MDPH ou de la CDAPH</strong> : les familles peuvent s'y adresser directement, ce qui est déterminant pour la précocité du repérage et des interventions.</li>
                  <li><strong>Repérage, diagnostic et intervention précoce.</strong> Les cahiers des charges structurent les missions autour du dépistage, de l'évaluation, du diagnostic et de l'accompagnement précoces, en associant les familles.</li>
                  <li><strong>Spécialisation possible.</strong> Les CAMSP peuvent être polyvalents ou spécialisés dans l'accompagnement de certains types de troubles ou de handicaps.</li>
                  <li><strong>Prévention élargie.</strong> La mission de prévention couvre la survenue des troubles mais aussi leur <strong>aggravation</strong>, ce qui légitime les interventions en amont et dans la durée.</li>
                </ul>
              </section>

              <section id="si">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Données, systèmes d'information et pilotage
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret organise aussi la dimension numérique et statistique de l'activité des centres : transmission de <strong>données d'activité</strong> aux autorités, et inscription des structures dans les <strong>systèmes d'information</strong> du secteur, y compris l'interfaçage avec les outils numériques en santé. Là encore, l'enjeu pour les gestionnaires est très concret : fiabilité des données saisies, conformité RGPD des traitements, information des familles, et charge de travail administrative à anticiper dans les organisations.</p>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ACCOMPAGNEMENT ASSOCIATIONS</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Votre association gestionnaire face au nouveau cadre</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Mise à jour du projet d'établissement, gouvernance, conformité RGPD des traitements de données, documentation des pratiques : le cabinet accompagne les associations du médico-social dans la sécurisation de leur fonctionnement.</p>
                  <a href="/accompagnement-associations" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir l'accompagnement &rarr;</a>
                </div>
              </section>

              <section id="agenda">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. L'agenda de mise en conformité des gestionnaires
                </h2>
                <p style={{marginBottom: '1rem'}}>Sans attendre d'éventuelles instructions complémentaires, les associations gestionnaires peuvent dès maintenant dérouler une feuille de route simple :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Lire les deux cahiers des charges</strong> et les confronter au projet d'établissement ou de service existant : écarts, points forts, points à documenter.</li>
                  <li><strong>Cartographier les recommandations HAS applicables</strong> à leurs publics et pratiques, et vérifier la formation des équipes à ces référentiels.</li>
                  <li><strong>Mettre à jour les documents institutionnels</strong> : projet d'établissement, livret d'accueil, protocoles d'admission (notamment l'accès direct), conventions de partenariat.</li>
                  <li><strong>Préparer le volet données</strong> : registres de traitement, mentions d'information, sécurisation des transmissions d'activité.</li>
                  <li><strong>Anticiper le dialogue avec l'ARS et le département</strong> : le nouveau référentiel servira de base aux prochaines évaluations et négociations budgétaires.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret du 26 juin 2026 fait entrer les CAMSP et les CMPP dans un cadre contemporain, aligné sur les exigences de qualité du secteur médico-social. Pour les associations gestionnaires, le message est double : d'un côté, une <strong>reconnaissance</strong> de leurs missions, avec un accès direct préservé et une prévention élargie ; de l'autre, une <strong>exigence accrue</strong>, avec des recommandations HAS désormais opposables et un pilotage par les données renforcé. Les structures qui prendront l'initiative de la mise en conformité aborderont les prochaines évaluations en position de force.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur le <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054361532" style={{color: '#1a4fba', fontWeight: 600}}>décret n° 2026-580 du 26 juin 2026</a> relatif aux missions, à l'organisation et au fonctionnement des centres d'action médico-sociale précoce (CAMSP) et des centres médico-psycho-pédagogiques (CMPP), publié au <a href="https://www.legifrance.gouv.fr/jorf/jo/2026/07/01/0152" style={{color: '#1a4fba', fontWeight: 600}}>Journal officiel du 1er juillet 2026</a>, ainsi que sur l'avis du CNCPH du 16 avril 2026 rendu sur le projet de texte.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand le décret CAMSP et CMPP entre-t-il en vigueur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret n° 2026-580 du 26 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et est entré en vigueur le lendemain de sa publication, soit le 2 juillet 2026.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que remplace exactement ce décret ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Il abroge les annexes 32 et 32 bis du décret n° 46-1834 du 20 août 1946, complétées en 1956 puis 1976, qui régissaient jusqu'ici les CMPP et les CAMSP, et les remplace par deux cahiers des charges insérés en annexes du Code de l'action sociale et des familles.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que signifie l'opposabilité des recommandations de la HAS ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les recommandations de bonnes pratiques professionnelles de la Haute Autorité de santé deviennent un référentiel juridiquement opposable aux CAMSP et CMPP : les pratiques des centres peuvent être appréciées à leur aune, notamment lors des contrôles et évaluations conduits sous l'égide des autorités compétentes.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Faut-il une orientation de la MDPH pour s'adresser à un CAMSP ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. L'accès direct est consacré : les familles peuvent s'adresser à un CAMSP sans orientation préalable de la MDPH ou de la CDAPH, ce qui favorise la précocité du repérage et des interventions chez les enfants de la naissance à six ans.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que doivent faire en priorité les associations gestionnaires ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Confronter leur projet d'établissement aux nouveaux cahiers des charges, cartographier les recommandations HAS applicables et former les équipes, mettre à jour leurs documents institutionnels et leur conformité RGPD, et préparer le dialogue avec l'ARS sur la base du nouveau référentiel.</p>
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
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets. Défend une approche du droit accessible, opérationnelle et orientée impact social ainsi qu'une meilleure maîtrise de leurs droits assurantiels. Membre du CRFF (Conseil Représentatif des Formalistes de France). Administrateur expert au collectif DAVO (Des Avocats Vous Orientent).
              </p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>

            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Réforme des ESAT : les nouveaux droits pour les travailleurs handicapés &rarr;
              </a>
              <a href="/blog/mayotte-protection-universelle-maladie-1er-juillet-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026 &rarr;
              </a>
            </div>

            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                En savoir plus &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <span key="Vie associative" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Vie associative</span>
                <span key="Médico-social" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Médico-social</span>
                <span key="Handicap" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Handicap</span>
                <span key="Petite enfance" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Petite enfance</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              &larr; Retour au blog
            </a>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}
