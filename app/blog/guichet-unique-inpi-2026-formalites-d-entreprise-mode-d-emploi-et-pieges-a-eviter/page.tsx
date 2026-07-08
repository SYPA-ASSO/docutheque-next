import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter · Blog Cabinet Cholez-Pagotto`,
  description: `Depuis 2023, toutes les formalités d'entreprise passent par le guichet unique de l'INPI. Fonctionnement, procédure de secours, causes de rejet et nouveautés du décret du 30 avril 2026 : le guide complet et vérifié.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/guichet-unique-inpi-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/guichet-unique-inpi-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter",
      "description": "Depuis 2023, toutes les formalités d'entreprise passent par le guichet unique de l'INPI. Fonctionnement, procédure de secours, causes de rejet et nouveautés du décret du 30 avril 2026 : le guide complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/guichet-unique-inpi-2026.webp",
      "datePublished": "2026-05-20",
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
      "url": "https://cholez-pagotto.fr/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter",
      "keywords": ["Guichet unique", "INPI", "RNE", "Formalités d'entreprise", "Création d'entreprise", "Décret 2026-340", "Registre national des entreprises"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le guichet unique de l'INPI ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le guichet unique est la plateforme numérique unique, opérée par l'INPI et accessible sur procedures.inpi.fr, par laquelle passent depuis le 1er janvier 2023 toutes les formalités d'entreprise : création, modification, cessation et dépôt des comptes. Issu de la loi PACTE, il a remplacé les six réseaux de centres de formalités des entreprises (CFE) et alimente le Registre national des entreprises (RNE)."
          }
        },
        {
          "@type": "Question",
          "name": "Toutes les entreprises sont-elles concernées ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, sans exception. Que vous créiez une micro-entreprise, une entreprise individuelle, une SARL, une SAS, une SCI ou une société civile, la déclaration passe par le guichet unique. Il en va de même pour modifier une information, comme un changement de siège, d'objet social ou de dirigeant, ou pour cesser une activité."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on encore passer par Infogreffe ou par le papier ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, plus de façon générale. La procédure dérogatoire qui permettait, en 2023 et 2024, de déposer certaines formalités via Infogreffe ou en papier a pris fin le 31 décembre 2024. Depuis 2025, toutes les démarches passent par le guichet unique. Seule subsiste une procédure de secours en cas de blocage technique grave de la plateforme."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire si le guichet unique plante au moment du dépôt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La procédure de secours, toujours d'actualité en 2026, permet de sécuriser la date de dépôt. En cas de difficulté grave empêchant réellement le dépôt, vous obtenez un récépissé daté auprès de l'INPI. Une fois la difficulté résolue, vous finalisez la formalité dans le délai prévu en joignant ce récépissé, dont la date est alors retenue comme date de dépôt."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi mon dossier est-il rejeté ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En 2026, la plateforme est stabilisée mais les rejets restent fréquents, souvent pour des raisons évitables : pièces manquantes, incohérences entre le formulaire et les justificatifs, erreurs sur la déclaration des bénéficiaires effectifs ou sur le code d'activité. Les contrôles sont stricts. Bien préparer le dossier et vérifier la cohérence de chaque donnée évite la quasi-totalité des blocages."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps prend une formalité ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour une micro-entreprise ou une entreprise individuelle, le traitement est généralement rapide. Pour une société, comptez plutôt deux à quatre semaines, le temps de l'inscription au greffe. En cas de pièce manquante, l'INPI envoie une demande de complément par e-mail et le délai repart."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que change le décret du 30 avril 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret n° 2026-340 du 30 avril 2026, entré en vigueur le 6 mai 2026, ajuste plusieurs formalités. Il permet notamment, dans certaines situations, de déposer un extrait d'un document plutôt que le document complet, afin de limiter la diffusion de données personnelles, et impose des informations supplémentaires à certaines entreprises soumises à la certification de leurs informations de durabilité."
          }
        },
        {
          "@type": "Question",
          "name": "Le dépôt des comptes passe-t-il aussi par le guichet unique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le dépôt dématérialisé des comptes annuels fait partie du périmètre du guichet unique, au même titre que le dépôt d'actes. En revanche, certaines démarches restent en dehors, comme la déclaration sociale nominative (DSN), qui continue de s'effectuer via net-entreprises."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Guichet unique INPI 2026" }
      ]
    }
  ]
}

export default function ArticleGuichetUniqueINPI2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Guichet unique INPI 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMALITÉS</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CRÉATION D'ENTREPRISE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 20 mai 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 14 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/guichet-unique-inpi-2026.webp"
                alt="Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#quoi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le guichet unique et le RNE</a></li>
                <li><a href="#perimetre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Ce qui passe (et ne passe pas) par le guichet</a></li>
                <li><a href="#parcours" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le parcours en pratique</a></li>
                <li><a href="#rejets" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Rejets et procédure de secours</a></li>
                <li><a href="#decret" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Ce que change le décret du 30 avril 2026</a></li>
                <li><a href="#securiser" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Sécuriser ses formalités</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Trois cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Depuis le 1er janvier 2023, créer, modifier ou fermer une entreprise en France passe par un seul portail : le <strong>guichet unique des formalités d'entreprises</strong>, opéré par l'INPI. Né de la loi PACTE, ce dispositif a remplacé les anciens centres de formalités des entreprises. Après des débuts difficiles, la plateforme s'est stabilisée, mais les rejets de dossiers restent fréquents, souvent pour des raisons évitables.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point, de façon complète et vérifiée, sur le fonctionnement du guichet unique, sur ce qui passe ou non par lui, sur les causes de rejet et la procédure de secours, et sur les nouveautés apportées par le décret du 30 avril 2026. L'objectif est simple : vous éviter les allers-retours et sécuriser vos démarches.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> toutes les formalités passent désormais par <strong>procedures.inpi.fr</strong>, la procédure dérogatoire via Infogreffe a pris fin le 31 décembre 2024, une <strong>procédure de secours</strong> par récépissé subsiste en cas de blocage grave, et la plupart des rejets viennent d'un dossier mal préparé.
                  </p>
                </div>
              </section>

              <section id="quoi">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le guichet unique et le RNE
                </h2>
                <p style={{marginBottom: '1rem'}}>Le <strong>guichet unique</strong> est la plateforme numérique qui centralise les formalités d'entreprise en un seul point d'entrée, accessible gratuitement sur <strong>procedures.inpi.fr</strong>. Il sert d'interface entre le déclarant et les organismes compétents, qui instruisent, valident ou demandent des compléments. Il a remplacé les six réseaux de centres de formalités des entreprises (CFE) qui dépendaient des chambres de commerce, des chambres de métiers, des URSSAF et des greffes.</p>
                <p style={{marginBottom: '1rem'}}>Toutes les démarches alimentent directement le <strong>Registre national des entreprises (RNE)</strong>, le registre légal unique qui a fusionné le registre national du commerce et des sociétés, le répertoire des métiers et le registre des actifs agricoles. Le RNE regroupe désormais l'intégralité des entreprises, qu'elles soient commerciales, artisanales, agricoles ou libérales, et il est consultable gratuitement. Le numéro SIREN, lui, ne change pas.</p>
              </section>

              <section id="perimetre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Ce qui passe (et ne passe pas) par le guichet
                </h2>
                <p style={{marginBottom: '1rem'}}>Le périmètre est large. Passent par le guichet unique :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>La <strong>création</strong> (immatriculation), pour toutes les formes : micro-entreprise, entreprise individuelle, SARL, SAS, SCI, société civile, etc.</li>
                  <li>Les <strong>modifications</strong> : changement de siège, d'objet social, de dirigeant, modification statutaire, cession de parts, changement d'activité.</li>
                  <li>La <strong>cessation</strong> d'activité.</li>
                  <li>Le <strong>dépôt dématérialisé des comptes annuels</strong> et, plus largement, le <strong>dépôt d'actes</strong>.</li>
                  <li>La mise à jour des informations au RNE, dont la déclaration des <strong>bénéficiaires effectifs</strong>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>En revanche, certaines démarches restent en dehors. C'est le cas de la <strong>déclaration sociale nominative (DSN)</strong>, qui continue de s'effectuer via net-entreprises. À noter aussi : il est désormais possible d'obtenir une <strong>attestation d'immatriculation au RNE</strong>, qui constitue un autre document de preuve que l'extrait Kbis.</p>
              </section>

              <section id="parcours">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le parcours en pratique
                </h2>
                <p style={{marginBottom: '1rem'}}>La création d'un compte se fait sur le portail de l'INPI. En 2026, deux modes d'authentification coexistent : <strong>INPIConnect</strong>, un accès classique par adresse e-mail et mot de passe, et <strong>FranceConnect+</strong>. Lors de la première connexion via FranceConnect+, le portail peut demander de relier ce compte à un compte INPIConnect, une fusion présentée comme irréversible.</p>
                <p style={{marginBottom: '1rem'}}>Une fois l'espace opérationnel, vous démarrez une formalité, déposez vos pièces, suivez l'avancement dans votre tableau de bord, puis <strong>signez et payez</strong> lorsque le parcours le demande. La finalisation suppose une <strong>signature électronique</strong> des documents de synthèse, via un certificat, un organisme agréé par l'INPI ou FranceConnect+. Attention : les clés utilisées sur les plateformes des greffes, comme Certigreffe ou la clé Avocat, ne sont pas directement utilisables ici, et cette signature avancée est exigée pour le dépôt de la formalité, non pour les actes signés par les parties.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Quels délais ?</strong> Pour une micro-entreprise ou une entreprise individuelle, le traitement est généralement rapide. Pour une société, comptez plutôt <strong>deux à quatre semaines</strong>, le temps de l'inscription au greffe. En cas de pièce manquante, l'INPI envoie une demande de complément par e-mail, et le délai repart.
                  </p>
                </div>
              </section>

              <section id="rejets">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Rejets et procédure de secours
                </h2>
                <p style={{marginBottom: '1rem'}}>La plateforme s'est stabilisée, mais ses contrôles automatiques sont stricts, et les rejets restent fréquents. La grande majorité d'entre eux vient de causes évitables : pièces manquantes, incohérences entre le formulaire et les justificatifs, erreurs sur la déclaration des bénéficiaires effectifs, ou code d'activité mal renseigné. Quelques réflexes simples limitent fortement le risque.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Vérifier la <strong>cohérence</strong> entre statuts, procès-verbal, annonce légale, formulaire et pièces jointes.</li>
                  <li>Contrôler les <strong>données d'identité</strong> de l'entreprise (dénomination, SIREN, siège, forme, dirigeant, activité), car une erreur de base contamine toute la formalité.</li>
                  <li>Enregistrer régulièrement son <strong>brouillon</strong>, soigner la qualité des pièces téléversées, et conserver l'<strong>accusé de dépôt</strong> ainsi que les éventuels messages de rejet.</li>
                  <li>Éviter les <strong>dépôts successifs contradictoires</strong> lorsque le refus porte sur une vraie question juridique.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>La procédure de secours.</strong> Depuis 2025, la procédure dérogatoire via Infogreffe ou papier a disparu, ce qui rend les déclarants dépendants du bon fonctionnement de la plateforme. Toutefois, une <strong>procédure de secours</strong> reste d'actualité en 2026 : en cas de blocage technique grave empêchant réellement le dépôt, vous obtenez un <strong>récépissé daté</strong> auprès de l'INPI, puis finalisez la formalité dans le délai prévu en joignant ce récépissé, dont la date est retenue comme date de dépôt. Conserver les preuves est ici essentiel.
                  </p>
                </div>
              </section>

              <section id="decret">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Ce que change le décret du 30 avril 2026
                </h2>
                <p style={{marginBottom: '1rem'}}>Le <strong>décret n° 2026-340 du 30 avril 2026</strong>, publié au Journal officiel du 5 mai et entré en vigueur le 6 mai 2026, ne remplace pas le guichet unique : il corrige et précise plusieurs formalités. Deux évolutions méritent l'attention.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le dépôt d'un extrait plutôt que du document complet.</strong> Les personnes morales dont le siège est en France peuvent, dans certaines situations, déposer un extrait d'un document au lieu du document intégral, afin de limiter la diffusion inutile de données personnelles ou sensibles.</li>
                  <li><strong>Des informations supplémentaires en matière de durabilité.</strong> Certaines entreprises soumises à la certification de leurs informations de durabilité doivent désormais déclarer des informations complémentaires, notamment sur l'organisme tiers indépendant.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Le décret ajuste également les règles relatives à la justification de l'origine d'un fonds transmis, à la cession de parts de société civile et à l'encadrement du dépôt d'actes contenant des données personnelles de dirigeants. Il appelle un équilibre : ne pas déposer un acte entier truffé de données inutiles, mais ne pas trop l'expurger non plus, au point de le rendre inexploitable pour le greffe. Ces évolutions ne changent pas le parcours d'une création simple, mais elles comptent pour les opérations sur une société existante.</p>
              </section>

              <section id="securiser">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Sécuriser ses formalités
                </h2>
                <p style={{marginBottom: '1rem'}}>Un piège revient souvent : croire que la formalité est faite parce qu'un dossier a été déposé. La vraie question est ailleurs. La formalité est-elle <strong>complète, validée, publiée et opposable</strong> ? Si la réponse est non, l'entreprise peut se retrouver dans une situation juridique différente de celle qu'affichent ses documents internes, avec des conséquences concrètes : un Kbis bloqué, une cession retardée, une banque qui attend des statuts à jour, un associé qui conteste la régularité d'une opération.</p>
                <p style={{marginBottom: '1rem'}}>Avant de déposer, il faut contrôler son dossier comme un dossier de preuve : la nature exacte de la démarche, les actes sociaux, la cohérence documentaire, la mise à jour des bénéficiaires effectifs. C'est précisément là que l'accompagnement d'un professionnel des formalités prend tout son sens, en amont pour sécuriser les actes et le dépôt, ou en aval lorsqu'un dossier est bloqué, contesté ou urgent.</p>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>LE CABINET S'EN CHARGE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Vos formalités, préparées, déposées et suivies</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Les formalités du guichet unique sont gratuites, mais leur préparation (actes, pièces, bénéficiaires effectifs) conditionne leur validation. Le cabinet prépare, dépose et suit vos formalités jusqu'à l'opposabilité, et débloque les dossiers refusés.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/formalites-juridiques-externalisees" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Confier mes formalités →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou pour une création, <a href="/creation-entreprise" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>créer mon entreprise</a></span>
                  </div>
                </div>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Une formalité à sécuriser ou un dossier bloqué ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Création, modification, transfert de siège, cession de parts, dépôt de comptes : le cabinet vous accompagne dans la préparation de vos formalités et le déblocage des dossiers refusés. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Trois cas concrets
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>La création d'une micro-entreprise.</strong> Pour un projet simple, la déclaration sur le guichet unique est accessible en autonomie. Le créateur veille surtout à bien renseigner son activité, à choisir le bon code et à conserver son accusé de dépôt.</li>
                  <li><strong>Le transfert de siège d'une SCI.</strong> Une modification statutaire suppose un procès-verbal, des statuts à jour, une annonce légale et un formulaire cohérents entre eux. La moindre discordance entraîne un rejet, et le décret du 30 avril 2026 invite à la vigilance sur les données personnelles déposées.</li>
                  <li><strong>La cession de parts.</strong> Le guichet unique ne remplace pas l'acte de cession, qui se signe entre les parties et suit ses propres formalités. Il sert ensuite à mettre à jour le registre. Préparer la formalité avant la signature définitive évite que la banque, l'acquéreur ou un associé ne se heurte à une information non encore à jour.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le guichet unique a tenu sa promesse d'un point d'entrée unique, et la plateforme fonctionne désormais correctement. Mais l'unification n'a pas fait disparaître la technicité des formalités : les contrôles sont stricts, les rejets fréquents, et le décret du 30 avril 2026 ajoute quelques précisions à connaître. Pour une création simple, la démarche est à la portée de chacun ; pour une opération sur une société, la préparation fait toute la différence.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de traiter chaque formalité comme un dossier de preuve, de vérifier la cohérence de l'ensemble avant le dépôt, et de conserver soigneusement ses récépissés. En cas de doute ou de blocage, un accompagnement ciblé évite de perdre un temps précieux.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n° 2019-486 du 22 mai 2019 (loi PACTE), à l'origine du guichet unique et du Registre national des entreprises</li>
                  <li>Décret n° 2026-340 du 30 avril 2026 relatif aux formalités des entreprises (Journal officiel du 5 mai 2026, entrée en vigueur le 6 mai 2026)</li>
                  <li>Code de commerce, dispositions relatives à la tenue du Registre national des entreprises</li>
                  <li>INPI : portail des formalités d'entreprises, <a href="https://procedures.inpi.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>procedures.inpi.fr</a> et <a href="https://www.inpi.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>inpi.fr</a></li>
                  <li>Portail officiel : <a href="https://entreprendre.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>entreprendre.service-public.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; les règles et le fonctionnement du guichet unique peuvent évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le guichet unique de l'INPI ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est la plateforme numérique unique, opérée par l'INPI sur procedures.inpi.fr, par laquelle passent depuis le 1er janvier 2023 toutes les formalités d'entreprise : création, modification, cessation et dépôt des comptes. Issu de la loi PACTE, il a remplacé les six réseaux de centres de formalités des entreprises et alimente le Registre national des entreprises (RNE).</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Toutes les entreprises sont-elles concernées ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, sans exception. Que vous créiez une micro-entreprise, une entreprise individuelle, une SARL, une SAS, une SCI ou une société civile, la déclaration passe par le guichet unique. Il en va de même pour modifier une information, comme un changement de siège, d'objet social ou de dirigeant, ou pour cesser une activité.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on encore passer par Infogreffe ou par le papier ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, plus de façon générale. La procédure dérogatoire qui permettait, en 2023 et 2024, de déposer certaines formalités via Infogreffe ou en papier a pris fin le 31 décembre 2024. Depuis 2025, toutes les démarches passent par le guichet unique. Seule subsiste une procédure de secours en cas de blocage technique grave.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire si le guichet unique plante au moment du dépôt ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La procédure de secours, toujours d'actualité en 2026, permet de sécuriser la date de dépôt. En cas de difficulté grave empêchant réellement le dépôt, vous obtenez un récépissé daté auprès de l'INPI. Une fois la difficulté résolue, vous finalisez la formalité dans le délai prévu en joignant ce récépissé, dont la date est alors retenue comme date de dépôt.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Pourquoi mon dossier est-il rejeté ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En 2026, la plateforme est stabilisée mais les rejets restent fréquents, souvent pour des raisons évitables : pièces manquantes, incohérences entre le formulaire et les justificatifs, erreurs sur les bénéficiaires effectifs ou sur le code d'activité. Les contrôles sont stricts. Bien préparer le dossier et vérifier la cohérence de chaque donnée évite la quasi-totalité des blocages.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Combien de temps prend une formalité ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour une micro-entreprise ou une entreprise individuelle, le traitement est généralement rapide. Pour une société, comptez plutôt deux à quatre semaines, le temps de l'inscription au greffe. En cas de pièce manquante, l'INPI envoie une demande de complément par e-mail et le délai repart.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que change le décret du 30 avril 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret n° 2026-340 du 30 avril 2026, entré en vigueur le 6 mai 2026, ajuste plusieurs formalités. Il permet notamment, dans certaines situations, de déposer un extrait d'un document plutôt que le document complet, afin de limiter la diffusion de données personnelles, et impose des informations supplémentaires à certaines entreprises soumises à la certification de leurs informations de durabilité.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le dépôt des comptes passe-t-il aussi par le guichet unique ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le dépôt dématérialisé des comptes annuels fait partie du périmètre du guichet unique, au même titre que le dépôt d'actes. En revanche, certaines démarches restent en dehors, comme la déclaration sociale nominative (DSN), qui continue de s'effectuer via net-entreprises.</p>
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
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Création, modification, dépôt de comptes, dossier bloqué : le cabinet sécurise vos formalités en amont et en aval.</p>
              <a href="/accompagnement-professionnels" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Découvrir l'accompagnement →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Arnaque au registre des sociétés : ne laissez pas les fraudeurs saboter votre lancement →
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
                <span key="Guichet unique" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Guichet unique</span>
                <span key="INPI" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>INPI</span>
                <span key="RNE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>RNE</span>
                <span key="Formalités" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Formalités</span>
                <span key="Création d'entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Création d'entreprise</span>
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
