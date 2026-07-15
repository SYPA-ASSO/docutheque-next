import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Qualiopi et ISO 21001 : comprendre les deux démarches qualité de la formation · Blog Cabinet Cholez-Pagotto`,
  description: `Qualiopi, obligatoire pour accéder aux fonds publics et mutualisés, et ISO 21001, norme internationale de management de la qualité éducative : le guide complet pour les organismes de formation, associations, coopératives et le grand public.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Qualiopi et ISO 21001 : comprendre les deux démarches qualité de la formation",
      "description": "Qualiopi, obligatoire pour accéder aux fonds publics et mutualisés, et ISO 21001, norme internationale de management de la qualité éducative : le guide complet pour les organismes de formation, associations, coopératives et le grand public.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/qualiopi-iso-21001-organismes-formation-2026.webp",
      "datePublished": "2026-07-13",
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
      "url": "https://cholez-pagotto.fr/blog/qualiopi-iso-21001-organismes-formation-association-cooperative",
      "keywords": ["Qualiopi", "ISO 21001", "Organisme de formation", "RNQ", "Audit Qualiopi", "Association", "ESS", "Coopérative"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qualiopi est-elle obligatoire pour toutes les structures qui font de la formation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Qualiopi est obligatoire depuis le 1er janvier 2022 pour tout organisme, quel que soit son statut (société, association, coopérative), qui souhaite accéder à des fonds publics ou mutualisés (CPF, OPCO, France Travail, Région, État, Agefiph) pour ses actions de formation, bilans de compétences, VAE ou apprentissage. Un organisme qui ne sollicite aucun financement public ou mutualisé n'y est pas juridiquement tenu, mais s'en prive alors l'accès."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence essentielle entre Qualiopi et ISO 21001 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Qualiopi est une certification nationale et obligatoire, propriété du ministère du Travail, conditionnant l'accès aux fonds publics et mutualisés. L'ISO 21001 est une norme internationale volontaire, reconnue dans plus de 50 pays, qui va au-delà de la conformité réglementaire pour couvrir la gouvernance, la gestion des risques et la stratégie éducative de l'organisme."
          }
        },
        {
          "@type": "Question",
          "name": "Une association ou une coopérative peut-elle obtenir Qualiopi ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La certification Qualiopi est rattachée au numéro de déclaration d'activité de l'organisme, quel que soit son statut juridique. Une association loi 1901, une coopérative ou toute autre structure de l'économie sociale et solidaire peut donc être certifiée dès lors qu'elle dispose de ce numéro et respecte le référentiel national qualité."
          }
        },
        {
          "@type": "Question",
          "name": "Comment un particulier peut-il vérifier qu'un organisme de formation est bien certifié Qualiopi ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'organisme certifié doit afficher son certificat dans ses locaux et sur son site internet, ou le communiquer sur demande. La liste des organismes certifiés est également accessible publiquement, ce qui permet aux financeurs comme aux particuliers de vérifier la validité de la certification avant de s'engager."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Qualiopi et ISO 21001" }
      ]
    }
  ]
}

export default function ArticleQualiopiIso210012026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Qualiopi et ISO 21001</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMATION</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIE ASSOCIATIVE ET ESS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Qualiopi et ISO 21001 : comprendre les deux démarches qualité de la formation</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 13 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 19 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/qualiopi-iso-21001-organismes-formation-2026.webp"
                alt="Qualiopi et ISO 21001 : comprendre les deux démarches qualité de la formation"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#qualiopi-fondamentaux" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Qualiopi : les fondamentaux</a></li>
                <li><a href="#rnq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le Référentiel National Qualité : 7 critères, 32 indicateurs</a></li>
                <li><a href="#cycle-audit" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le cycle de certification et l'audit de surveillance</a></li>
                <li><a href="#rnq-v10" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Vers Qualiopi 2027 : ce qui pourrait changer</a></li>
                <li><a href="#iso21001" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. L'ISO 21001, une norme internationale de management de la qualité éducative</a></li>
                <li><a href="#comparaison" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Qualiopi et ISO 21001 : ce qui se recoupe, ce qui diverge</a></li>
                <li><a href="#ess" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Associations, coopératives : un enjeu de gouvernance autant que de conformité</a></li>
                <li><a href="#grand-public" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Ce que le grand public doit savoir avant de choisir une formation</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le cabinet a récemment participé à un webinaire consacré à la comparaison entre Qualiopi et l'ISO 21001, deux démarches qualité qui structurent aujourd'hui le secteur de la formation. Fort de son expérience auprès de structures certifiées Qualiopi, notamment des associations et des structures de l'économie sociale et solidaire, et de ses partenariats dans les champs de la formation et des démarches qualité, le cabinet a considéré utile de reprendre ce sujet et de l'approfondir dans un article dédié, destiné à l'ensemble de ses clients et des internautes qui s'y intéressent.</p>
                <p style={{marginBottom: '1rem'}}>Cet article s'adresse à trois publics : les organismes de formation, qu'il s'agisse de sociétés, d'associations ou de coopératives, déjà certifiés Qualiopi ou en réflexion sur une démarche ISO 21001 ; les structures de l'ESS qui cumulent souvent enjeux de gouvernance et obligations qualité ; et le grand public, qui gagne à comprendre ce que Qualiopi garantit réellement avant de choisir une formation.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}Qualiopi est une certification nationale obligatoire pour accéder aux fonds publics et mutualisés, fondée sur 7 critères et 32 indicateurs contrôlés par un organisme accrédité par le COFRAC, tandis que l'ISO 21001 est une norme internationale volontaire qui va plus loin sur la gouvernance et la stratégie de l'organisme, sans se substituer à l'obligation Qualiopi.
                  </p>
                </div>
              </section>

              <section id="qualiopi-fondamentaux">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Qualiopi : les fondamentaux
                </h2>
                <p style={{marginBottom: '1rem'}}>Qualiopi est la marque de certification qualité instituée par l'article 6 de la loi n°&nbsp;2018-771 du 5 septembre 2018 pour la liberté de choisir son avenir professionnel, et précisée par les décrets n°&nbsp;2019-564 et n°&nbsp;2019-565 du 6 juin 2019. Elle est codifiée aux articles L.&nbsp;6316-1 à L.&nbsp;6316-5 du Code du travail. Devenue obligatoire au 1er janvier 2022, elle conditionne l'accès aux fonds publics et mutualisés (CPF, OPCO, France Travail, Région, État, Agefiph) pour quatre catégories d'actions : les actions de formation, les bilans de compétences, les actions de validation des acquis de l'expérience, et les actions de formation par apprentissage.</p>
                <p style={{marginBottom: '1rem'}}>Cette certification est rattachée au numéro de déclaration d'activité de l'organisme (article L.&nbsp;6351-1 du Code du travail), quel que soit son statut juridique : société commerciale, association loi 1901, coopérative ou toute autre structure. Elle est délivrée pour une durée de trois ans par un organisme certificateur accrédité par le Comité français d'accréditation (COFRAC), selon la norme ISO/CEI 17065 relative à la certification des produits, procédés et services, ou par une instance de labellisation reconnue par France Compétences.</p>
                <p style={{marginBottom: '1rem'}}>L'organisme certifié doit afficher son certificat dans ses locaux et sur son site internet, ou le communiquer sur demande à tout candidat, stagiaire, apprenti ou financeur. Le non-respect de cette obligation d'affichage constitue lui-même une non-conformité majeure lors d'un audit.</p>
              </section>

              <section id="rnq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le Référentiel National Qualité : 7 critères, 32 indicateurs
                </h2>
                <p style={{marginBottom: '1rem'}}>L'évaluation Qualiopi repose sur le Référentiel National Qualité (RNQ), annexé au décret n°&nbsp;2019-565, qui structure la démarche autour de 7 critères couvrant l'ensemble du cycle d'une prestation :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Critère 1</strong> : information du public sur les prestations, conditions d'accès, prérequis, tarifs, délais et résultats obtenus ;</li>
                  <li><strong>Critère 2</strong> : identification des objectifs et adaptation des prestations aux publics accueillis ;</li>
                  <li><strong>Critère 3</strong> : accueil, accompagnement, suivi et évaluation des bénéficiaires ;</li>
                  <li><strong>Critère 4</strong> : adéquation des moyens pédagogiques, techniques et d'encadrement ;</li>
                  <li><strong>Critère 5</strong> : qualification et développement des compétences des personnels ;</li>
                  <li><strong>Critère 6</strong> : inscription de l'organisme dans son environnement professionnel, incluant les indicateurs spécifiques à l'apprentissage et à la sous-traitance ;</li>
                  <li><strong>Critère 7</strong> : recueil des appréciations, traitement des réclamations et amélioration continue.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ces 7 critères se déclinent en 32 indicateurs au total, dont le nombre réellement applicable à un organisme dépend de ses catégories d'action (formation, bilan, VAE, apprentissage) et de son recours ou non à la sous-traitance. Lors d'un audit initial, l'auditeur vérifie l'ensemble des indicateurs applicables ; lors de l'audit de surveillance, seul un sous-ensemble est revérifié, mais une non-conformité majeure peut suffire à entraîner une suspension.</p>
              </section>

              <section id="cycle-audit">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le cycle de certification et l'audit de surveillance
                </h2>
                <p style={{marginBottom: '1rem'}}>La certification s'inscrit dans un cycle de trois ans : un audit initial, un audit de surveillance intermédiaire réalisé entre le 14e et le 22e mois, puis un audit de renouvellement plus complet en fin de cycle. L'audit de surveillance ne revient pas sur l'ensemble du dossier : il vérifie que l'organisme a réellement fait vivre sa démarche qualité depuis la certification initiale, à travers des preuves datées (indicateurs de satisfaction, registre des réclamations tenu à jour même en l'absence d'incident, veille réglementaire et handicap, bilan pédagogique et financier actualisé).</p>
                <p style={{marginBottom: '1rem'}}>À l'issue de l'audit, les écarts constatés sont classés en non-conformités mineures (fonctionnement globalement conforme, amélioration attendue) ou majeures (indicateur non satisfait ou preuve absente). Chaque écart doit être levé dans un délai fixé par l'organisme certificateur : pour une non-conformité majeure, ce délai est plus court, et son non-respect peut conduire à la suspension, voire au retrait de la certification, avec pour conséquence directe la perte d'accès aux financements publics et mutualisés.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'erreur la plus fréquente.</strong>{' '}Traiter l'audit de surveillance comme une simple formalité administrative. Ce n'est pas un dossier figé qui est audité, mais la preuve d'un fonctionnement continu : indicateurs actualisés, réclamations enregistrées, veille réglementaire tracée. Une préparation qui commence la semaine précédant l'audit arrive presque toujours trop tard pour reconstituer des preuves datées sur toute la période écoulée.
                  </p>
                </div>
              </section>

              <section id="rnq-v10">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Vers Qualiopi 2027 : ce qui pourrait changer
                </h2>
                <p style={{marginBottom: '1rem'}}>Le RNQ n'est pas figé : il évolue par versions successives du Guide de lecture publié par le ministère du Travail, en concertation avec France Compétences. À ce jour, aucun arrêté n'a officiellement publié de nouvelle version du référentiel pour 2027 : les axes évoqués dans la profession, sans valeur opposable tant qu'ils ne sont pas publiés, portent sur un renforcement de la lutte contre la fraude (dans la continuité de la loi du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, qui a notamment renforcé les contrôles du CPF), un encadrement accru de la sous-traitance, et une meilleure prise en compte de l'accessibilité numérique et des publics en situation de handicap.</p>
                <p style={{marginBottom: '1rem'}}>Dans l'attente d'un texte officiel, la seule attitude prudente pour un organisme de formation reste de suivre les publications de France Compétences et du Journal officiel, et de se référer systématiquement à la dernière version publiée du Guide de lecture pour identifier les exigences réellement opposables.</p>
              </section>

              <section id="iso21001">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. L'ISO 21001, une norme internationale de management de la qualité éducative
                </h2>
                <p style={{marginBottom: '1rem'}}>L'ISO 21001 est une norme internationale de management de la qualité, spécifiquement adaptée au secteur de l'enseignement et de la formation, publiée en 2018 et mise à jour en 2025. Elle s'appuie sur la structure de haut niveau (High Level Structure) commune à l'ensemble des normes ISO récentes, organisée en dix chapitres, et elle est reconnue dans plus de cinquante pays.</p>
                <p style={{marginBottom: '1rem'}}>Contrairement à des normes comme l'ISO 9001, l'ISO 21001 n'est aujourd'hui pas accréditée par le COFRAC en France, ce qui ne change rien à la rigueur de la démarche d'audit ni aux exigences de qualification des auditeurs, mais qui la distingue structurellement de Qualiopi sur le plan de la reconnaissance officielle française. C'est une démarche volontaire, non obligatoire, que l'organisme choisit d'engager en plus de, ou indépendamment de, sa certification Qualiopi.</p>
              </section>

              <section id="comparaison">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Qualiopi et ISO 21001 : ce qui se recoupe, ce qui diverge
                </h2>
                <p style={{marginBottom: '1rem'}}>Les deux démarches partagent un socle commun assez large : une logique d'amélioration continue (audits réguliers, traitement des non-conformités, gestion documentaire et traçabilité des preuves), un pilotage par les résultats (mesure de la satisfaction, suivi d'indicateurs, objectifs qualité formalisés), une exigence de qualité pédagogique (qualification des intervenants, accessibilité des ressources), et une orientation apprenant plaçant le bénéficiaire au centre de la démarche.</p>
                <p style={{marginBottom: '1rem'}}>Sur les 7 critères Qualiopi, 5 trouvent une correspondance forte dans l'ISO 21001. Deux correspondances restent partielles : les ressources et l'ingénierie pédagogique d'une part, la sous-traitance d'autre part, l'ISO 21001 exigeant un niveau de formalisation plus poussé que Qualiopi sur le pilotage des prestataires externes et la conception des parcours.</p>
                <p style={{marginBottom: '1rem'}}>La différence la plus structurante ne se situe cependant pas dans ces correspondances, mais dans ce que l'ISO 21001 exige et que le RNQ n'exige pas :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Contexte et gouvernance</strong> (clauses 4 et 5 de la norme) : analyse formalisée des enjeux internes et externes de l'organisme, cadre de gouvernance écrit ;</li>
                  <li><strong>Planification des risques</strong> (clause 6) : identification des risques et des opportunités propres à l'activité, anticipation des évolutions du secteur ;</li>
                  <li><strong>Politique éducative formalisée</strong> (clause 5.2) : engagement stratégique écrit, porté par la direction, sur la vision pédagogique de l'organisme.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ce sont précisément ces trois dimensions, absentes ou peu exigées par le RNQ, qui font de l'ISO 21001 une démarche de management global de l'organisme, et non une simple extension technique de la conformité Qualiopi. Un organisme certifié Qualiopi dispose déjà d'une base solide pour envisager l'ISO 21001, mais devra construire, souvent de toutes pièces, ce volet stratégique et de gouvernance.</p>
              </section>

              <section id="ess">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Associations, coopératives : un enjeu de gouvernance autant que de conformité
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour une association ou une coopérative qui dispense de la formation, financée par l'apprentissage, le CPF, un OPCO ou une collectivité, Qualiopi n'est pas une option : c'est la condition d'accès à ces financements, au même titre que pour une société commerciale. La certification s'attache au numéro de déclaration d'activité, indépendamment du statut juridique ou du caractère lucratif ou non lucratif de la structure.</p>
                <p style={{marginBottom: '1rem'}}>C'est précisément sur ce terrain que l'ISO 21001 peut présenter un intérêt particulier pour ces structures. Les exigences de gouvernance formalisée, de planification des risques et de politique éducative écrite recoupent des enjeux que les associations et coopératives rencontrent déjà par ailleurs, du fait de leur gouvernance collégiale (conseil d'administration, assemblée générale, sociétariat). Construire une politique éducative formalisée ou un cadre de gouvernance écrit dans le cadre d'une démarche ISO 21001 peut ainsi consolider, plutôt que dupliquer, des pratiques de gouvernance associative ou coopérative déjà partiellement engagées.</p>
              </section>

              <section id="grand-public">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Ce que le grand public doit savoir avant de choisir une formation
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour un particulier qui recherche une formation, la présence du logo Qualiopi est un repère utile, mais il mérite d'être vérifié plutôt que présumé. Un organisme réellement certifié doit pouvoir présenter son certificat, l'afficher sur son site internet ou le communiquer sur simple demande. La liste des organismes certifiés reste par ailleurs consultable publiquement, ce qui permet de vérifier la validité et la date de la certification avant de s'engager, en particulier si un financement CPF ou OPCO est envisagé.</p>
                <p style={{marginBottom: '1rem'}}>Qualiopi ne garantit toutefois pas la qualité pédagogique intrinsèque d'une formation au sens absolu : elle atteste que l'organisme suit un processus structuré (information claire, adaptation aux publics, suivi, qualification des intervenants, traitement des réclamations). C'est un gage de sérieux organisationnel, pas une notation du contenu pédagogique lui-même. Un organisme qui affiche en plus une démarche ISO 21001 signale, au-delà de cette conformité, une structuration stratégique et une gouvernance formalisée de son projet éducatif.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Faire le point sur votre démarche qualité
                </h2>
                <p style={{marginBottom: '1rem'}}>Que vous soyez en préparation d'un premier audit Qualiopi, en anticipation d'un audit de surveillance, ou en réflexion sur une démarche ISO 21001 complémentaire, la structuration documentaire et la gouvernance associée restent les points qui font le plus souvent la différence.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'un accompagnement pour votre organisme de formation ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet propose des formations sur-mesure et un accompagnement dédié aux organismes de formation, associations et structures de l'ESS, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/formations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Formations sur-mesure</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Qualiopi et ISO 21001 ne sont pas concurrentes : elles répondent à des logiques différentes, l'une conditionnant l'accès aux financements publics et mutualisés sur un socle national commun, l'autre proposant une démarche de management global, volontaire et internationale, qui va au-delà de la conformité réglementaire pour toucher à la gouvernance et à la stratégie éducative de l'organisme. Pour une association, une coopérative ou une société de formation déjà certifiée Qualiopi, l'ISO 21001 n'est pas un doublon, c'est un approfondissement qui suppose de construire ce qui n'était pas exigé jusque-là : une gouvernance formalisée, une gestion des risques structurée, et une politique éducative écrite et portée par la direction.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n°&nbsp;2018-771 du 5 septembre 2018 pour la liberté de choisir son avenir professionnel, article 6</li>
                  <li>Décret n°&nbsp;2019-564 du 6 juin 2019 relatif à la qualité des actions de la formation professionnelle</li>
                  <li>Décret n°&nbsp;2019-565 du 6 juin 2019 relatif au référentiel national sur la qualité des actions concourant au développement des compétences</li>
                  <li>Code du travail, articles L.&nbsp;6316-1 à L.&nbsp;6316-5 (obligation de certification, accréditation, contrôle)</li>
                  <li>Code du travail, article L.&nbsp;6351-1 (numéro de déclaration d'activité des organismes de formation)</li>
                  <li>Arrêté du 6 juin 2019 relatif aux modalités d'audit associées au référentiel national mentionné à l'article D.&nbsp;6316-1-1 du Code du travail, modifié par l'arrêté du 31 mai 2023</li>
                  <li>Norme ISO 21001:2018, systèmes de management des organismes éducatifs</li>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales (renforcement des contrôles CPF, contexte des évolutions attendues du RNQ)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les évolutions du RNQ évoquées à l'horizon 2027 restent, à la date de rédaction, prospectives et non opposables tant qu'aucun texte officiel ne les a publiées. Pour l'analyse d'une situation individuelle, un professionnel du droit ou un organisme certificateur compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qualiopi est-elle obligatoire pour toutes les structures qui font de la formation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Qualiopi est obligatoire depuis le 1er janvier 2022 pour tout organisme, quel que soit son statut (société, association, coopérative), qui souhaite accéder à des fonds publics ou mutualisés (CPF, OPCO, France Travail, Région, État, Agefiph) pour ses actions de formation, bilans de compétences, VAE ou apprentissage. Un organisme qui ne sollicite aucun financement public ou mutualisé n'y est pas juridiquement tenu, mais s'en prive alors l'accès.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la différence essentielle entre Qualiopi et ISO 21001 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Qualiopi est une certification nationale et obligatoire, propriété du ministère du Travail, conditionnant l'accès aux fonds publics et mutualisés. L'ISO 21001 est une norme internationale volontaire, reconnue dans plus de 50 pays, qui va au-delà de la conformité réglementaire pour couvrir la gouvernance, la gestion des risques et la stratégie éducative de l'organisme.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Une association ou une coopérative peut-elle obtenir Qualiopi ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La certification Qualiopi est rattachée au numéro de déclaration d'activité de l'organisme, quel que soit son statut juridique. Une association loi 1901, une coopérative ou toute autre structure de l'économie sociale et solidaire peut donc être certifiée dès lors qu'elle dispose de ce numéro et respecte le référentiel national qualité.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment un particulier peut-il vérifier qu'un organisme de formation est bien certifié Qualiopi ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'organisme certifié doit afficher son certificat dans ses locaux et sur son site internet, ou le communiquer sur demande. La liste des organismes certifiés est également accessible publiquement, ce qui permet aux financeurs comme aux particuliers de vérifier la validité de la certification avant de s'engager.</p>
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
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Formations sur-mesure</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Accompagnement dédié aux organismes de formation et structures de l'ESS.</p>
              <a href="/formations" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                En savoir plus →
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
                <a href="/blog?tag=Qualiopi" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Qualiopi</a>
                <a href="/blog?tag=ISO%2021001" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>ISO 21001</a>
                <a href="/blog?tag=Organisme%20de%20formation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Organisme de formation</a>
                <a href="/blog?tag=ESS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>ESS</a>
                <a href="/blog?tag=2026" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>2026</a>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              ← Retour au blog
            </a>

          </aside>

        </div>

        {/* CES ARTICLES PEUVENT AUSSI VOUS INTERESSER */}
        <section style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 3.5rem'}}>
          <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Ces articles peuvent aussi vous intéresser</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px'}}>
            {[
              { cat: 'VIE ASSOCIATIVE', titre: "Créer une association loi 1901 en 2026 : le guide complet, étape par étape", href: '/blog/creer-une-association-loi-1901-2026-guide-complet-etapes', date: '12 mai 2026' },
              { cat: 'DROIT SOCIAL', titre: "Loi de lutte contre les fraudes sociales et fiscales : toutes les mesures RH et paie à connaître", href: '/blog/loi-fraudes-sociales-fiscales-2026-mesures-rh-paie', date: '13 juillet 2026' },
              { cat: 'VIE ASSOCIATIVE', titre: "Responsabilité financière du président d'association devant la Cour des comptes : ce que change la réforme de 2023", href: '/blog/responsabilite-financiere-president-association-cour-des-comptes', date: '7 juillet 2026' },
            ].map((a) => (
              <a key={a.href} href={a.href} style={{display: 'flex', flexDirection: 'column', gap: '8px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.1rem 1.25rem', textDecoration: 'none'}}>
                <span style={{alignSelf: 'flex-start', background: '#eff6ff', color: '#1a4fba', fontSize: '10px', fontWeight: '700', padding: '2px 9px', borderRadius: '20px'}}>{a.cat}</span>
                <span style={{color: '#0f2d6e', fontSize: '13.5px', fontWeight: '700', lineHeight: '1.4'}}>{a.titre}</span>
                {a.date && <span style={{color: '#9ca3af', fontSize: '11px'}}>{a.date}</span>}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
