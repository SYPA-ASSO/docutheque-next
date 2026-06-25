import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Passer de la micro-entreprise à la société en 2026 : quand et comment franchir le cap · Blog Cabinet Cholez-Pagotto`,
  description: `Plafonds atteints, charges élevées, besoin de s'associer : quand quitter la micro-entreprise pour une EURL ou une SASU, et comment le faire en pratique (création, transfert du fonds, fermeture). Le guide complet et vérifié 2026.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/passer-de-la-micro-entreprise-a-la-societe-2026-quand-et-comment',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/passer-micro-societe-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/passer-micro-societe-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Passer de la micro-entreprise à la société en 2026 : quand et comment franchir le cap",
      "description": "Plafonds atteints, charges élevées, besoin de s'associer : quand quitter la micro-entreprise pour une EURL ou une SASU, et comment le faire en pratique (création, transfert du fonds, fermeture). Le guide complet et vérifié 2026.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/passer-micro-societe-2026.webp",
      "datePublished": "2026-05-18",
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
      "url": "https://cholez-pagotto.fr/blog/passer-de-la-micro-entreprise-a-la-societe-2026-quand-et-comment",
      "keywords": ["Micro-entreprise", "Passer en société", "EURL", "SASU", "Apport de fonds de commerce", "Cessation d'activité", "Plafonds 2026", "Création d'entreprise"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Peut-on transformer directement une micro-entreprise en société ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La micro-entreprise n'est pas une société : c'est une entreprise individuelle placée sous un régime simplifié. Il n'existe donc pas de transformation directe. Passer en société suppose de créer une société nouvelle (EURL, SASU, SARL, SAS), de lui transférer l'activité, puis de fermer la micro-entreprise. La société dispose d'un nouveau numéro SIREN, distinct de celui de la micro."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les plafonds de la micro-entreprise en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour la période 2026-2028, les plafonds sont de 203\u00a0100\u00a0€ de chiffre d'affaires annuel pour les activités de vente et d'hébergement, et de 83\u00a0600\u00a0€ pour les prestations de services et les activités libérales. Un dépassement pendant deux années civiles consécutives entraîne la sortie du régime micro au 1er janvier suivant. Ces seuils ne doivent pas être confondus avec les seuils de franchise de TVA (85\u00a0000\u00a0€ et 37\u00a0500\u00a0€)."
          }
        },
        {
          "@type": "Question",
          "name": "Quand faut-il passer en société ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plusieurs signaux invitent à franchir le cap : un chiffre d'affaires qui approche ou dépasse les plafonds, des charges réelles supérieures à l'abattement forfaitaire de la micro, le besoin de s'associer ou de lever des fonds, la volonté de séparer nettement les patrimoines, ou l'intérêt de récupérer la TVA. La règle d'or : basculer quand les chiffres le justifient, après simulation, pas seulement pour l'image."
          }
        },
        {
          "@type": "Question",
          "name": "Comment transférer l'activité à la société ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux voies existent : l'apport du fonds de commerce en nature (vous apportez la clientèle et le matériel en échange de parts ou d'actions) ou la cession du fonds (la société achète le fonds à la micro après sa création). Pour la plupart des micro-entrepreneurs, dont le fonds se résume à une clientèle et quelques équipements, l'apport en nature est la solution la plus simple. Un commissaire aux apports n'est pas toujours nécessaire."
          }
        },
        {
          "@type": "Question",
          "name": "Comment fermer sa micro-entreprise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La fermeture s'effectue par une déclaration de cessation d'activité sur le guichet unique de l'INPI, en ligne et gratuitement. Elle intervient après le transfert de l'activité à la société. Vous pouvez programmer la clôture à une date précise, par exemple la veille du démarrage de la société. Vous effectuez ensuite une dernière déclaration de chiffre d'affaires et, dans un délai de 60 jours, une déclaration fiscale de fin d'activité."
          }
        },
        {
          "@type": "Question",
          "name": "Garde-t-on le même numéro SIRET ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La société est une personne morale nouvelle, dotée de son propre numéro SIREN et SIRET. Le numéro de la micro-entreprise disparaît avec sa cessation. Il faut donc mettre à jour l'ensemble de vos supports : devis, factures, conditions générales, mentions légales, site internet, avec les nouvelles informations (raison sociale, SIREN, capital social, régime de TVA)."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le bon moment dans l'année pour basculer ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le 1er janvier est souvent le moment idéal, car l'exercice social coïncide alors avec l'année civile. Pour cela, mieux vaut lancer les démarches dès le mois de novembre précédent. À défaut, le début d'un mois ou d'un trimestre facilite la gestion comptable et la TVA. Le calendrier doit aussi tenir compte de vos contrats en cours, dont certains devront être re-signés au nom de la société."
          }
        },
        {
          "@type": "Question",
          "name": "La fermeture de la micro-entreprise donne-t-elle droit au chômage ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La cessation volontaire d'une micro-entreprise n'ouvre aucun droit à l'assurance chômage. Le micro-entrepreneur, comme tout travailleur indépendant, n'est pas couvert par France Travail. Une allocation des travailleurs indépendants existe, mais elle est réservée aux cas de liquidation judiciaire, sous conditions strictes de revenus et de durée d'activité."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Passer de la micro à la société" }
      ]
    }
  ]
}

export default function ArticlePasserMicroSociete2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Passer de la micro à la société</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ENTREPRENEURS</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DÉVELOPPEMENT</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Passer de la micro-entreprise à la société en 2026 : quand et comment franchir le cap</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 18 mai 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 17 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/passer-micro-societe-2026.webp"
                alt="Passer de la micro-entreprise à la société en 2026 : quand et comment franchir le cap"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#regime" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Un régime, pas une société</a></li>
                <li><a href="#signaux" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Les signaux qui doivent vous alerter</a></li>
                <li><a href="#forme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Choisir la bonne forme</a></li>
                <li><a href="#creer" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Étape 1 : créer la société</a></li>
                <li><a href="#transferer" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Étape 2 : transférer l'activité</a></li>
                <li><a href="#fermer" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Étape 3 : fermer la micro-entreprise</a></li>
                <li><a href="#calendrier" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Calendrier, conséquences et pièges</a></li>
                <li><a href="#accompagnement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Se faire accompagner</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La micro-entreprise est idéale pour démarrer : simple, souple, peu coûteuse. Mais elle a des limites structurelles, et il arrive un moment où elle freine plus qu'elle ne sert. Plafonds atteints, charges réelles trop lourdes, envie de s'associer : c'est le signe qu'il faut envisager de <strong>passer en société</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Encore faut-il savoir <strong>quand</strong> franchir le cap, et surtout <strong>comment</strong>. Car contrairement à une idée répandue, on ne « transforme » pas une micro en société : on crée une société et on ferme la micro. Cet article fait le point, de façon complète et vérifiée, sur les signaux à surveiller, le choix de la forme, et la procédure de bascule en 2026.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> passer en société, c'est <strong>créer une société</strong> (le plus souvent une EURL ou une SASU), lui <strong>transférer l'activité</strong> (apport ou cession du fonds), puis <strong>fermer la micro-entreprise</strong> via le guichet unique. Une décision stratégique, à prendre après simulation, pas seulement pour « faire pro ».
                  </p>
                </div>
              </section>

              <section id="regime">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Un régime, pas une société
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le point de départ, et la source de la plupart des malentendus. La micro-entreprise <strong>n'est pas une structure juridique</strong> : c'est une <strong>entreprise individuelle</strong> (vous exercez en nom propre) placée sous un <strong>régime fiscal et social simplifié</strong>. Une EURL ou une SASU, à l'inverse, sont des sociétés, des personnes morales distinctes de leur fondateur.</p>
                <p style={{marginBottom: '1rem'}}>Conséquence directe : il n'existe <strong>aucune transformation automatique</strong> de la micro vers la société. La bascule suppose trois opérations distinctes, que nous détaillons plus loin : <strong>créer la société</strong>, lui <strong>transférer l'activité</strong>, et <strong>fermer la micro-entreprise</strong>. La société reçoit un <strong>nouveau numéro SIREN</strong> : vous ne conservez pas celui de la micro.</p>
              </section>

              <section id="signaux">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Les signaux qui doivent vous alerter
                </h2>
                <p style={{marginBottom: '1rem'}}>Cinq signaux, souvent combinés, indiquent qu'il est temps de structurer l'activité.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le chiffre d'affaires approche ou dépasse les plafonds.</strong> En 2026, ils sont de <strong>203&nbsp;100&nbsp;€</strong> pour la vente et l'hébergement, et de <strong>83&nbsp;600&nbsp;€</strong> pour les services et les activités libérales. Un dépassement pendant <strong>deux années consécutives</strong> entraîne la sortie automatique du régime micro au 1er janvier suivant. Mieux vaut anticiper que subir.</li>
                  <li><strong>Vos charges réelles dépassent l'abattement.</strong> La micro applique un abattement forfaitaire (71&nbsp;% pour la vente, 50&nbsp;% pour les services, 34&nbsp;% pour le libéral) censé représenter vos charges. Si vos dépenses réelles le dépassent, vous payez des cotisations et de l'impôt sur un bénéfice surévalué : la société permet de déduire chaque euro dépensé.</li>
                  <li><strong>Vous voulez vous associer ou lever des fonds.</strong> La micro est, par nature, une activité solo. Accueillir un associé, émettre des parts ou des actions, lever des fonds : tout cela impose une société.</li>
                  <li><strong>Vous voulez mieux séparer les patrimoines.</strong> Depuis la loi du 14 février 2022, l'entrepreneur individuel bénéficie d'une protection automatique de son patrimoine personnel, mais la société offre une séparation plus nette grâce à la personnalité morale et à la responsabilité limitée aux apports.</li>
                  <li><strong>La TVA et la crédibilité.</strong> En société, vous facturez la TVA mais vous la récupérez sur vos achats, ce qui est un avantage si vous investissez beaucoup. Une société rassure aussi certains partenaires et clients.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Important : les plafonds du régime micro ne se confondent pas avec les <strong>seuils de franchise de TVA</strong> (85&nbsp;000&nbsp;€ pour la vente, 37&nbsp;500&nbsp;€ pour les services). On peut rester micro-entrepreneur tout en devenant redevable de la TVA.</p>
              </section>

              <section id="forme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Choisir la bonne forme
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour un entrepreneur seul, le choix se joue le plus souvent entre l'<strong>EURL</strong> et la <strong>SASU</strong>. Schématiquement, l'EURL place le gérant sous le régime des travailleurs non salariés (cotisations plus faibles) et relève par défaut de l'impôt sur le revenu, tandis que la SASU place le président sous le régime assimilé salarié (protection sociale plus complète mais cotisations plus élevées) et relève par défaut de l'impôt sur les sociétés. Chacune peut opter pour l'autre régime fiscal, sous conditions.</p>
                <p style={{marginBottom: '1rem'}}>Le bon choix dépend de votre rémunération cible, de votre besoin de protection sociale et de votre stratégie de distribution. Il mérite une <strong>simulation chiffrée</strong>. Nous détaillons cette comparaison dans notre article dédié au choix du statut.</p>
              </section>

              <section id="creer">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Étape 1 : créer la société
                </h2>
                <p style={{marginBottom: '1rem'}}>La première étape consiste à donner naissance à la société. Elle se déroule ainsi :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Rédiger les statuts</strong>, seul ou avec l'aide d'un professionnel. C'est le document fondateur de la société.</li>
                  <li><strong>Déposer le capital social</strong> sur un compte bloqué. Le minimum est de 1&nbsp;€, mais un montant plus conséquent renforce la crédibilité.</li>
                  <li><strong>Publier un avis de constitution</strong> dans un journal d'annonces légales. Le tarif est forfaitaire : environ <strong>142&nbsp;€</strong> hors taxes pour une SASU en métropole en 2026.</li>
                  <li><strong>Immatriculer la société</strong> via le guichet unique de l'INPI, en joignant les statuts, l'attestation de dépôt de capital, la justification de l'annonce légale, une pièce d'identité et un justificatif de domicile du siège.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>À l'issue de ces formalités, la société existe officiellement et reçoit son extrait d'immatriculation (Kbis) ainsi que son nouveau numéro SIREN.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Statuts d'EURL</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le document fondateur côté EURL : objet, capital, gérance, décisions de l'associé unique, exercice social. Notre modèle, à personnaliser, sécurise votre constitution.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-statuts-eurl" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Statuts de SASU</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le document fondateur côté SASU : objet, capital, présidence, décisions de l'associé unique, clauses de cession. Notre modèle, à personnaliser, sécurise votre constitution.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-statuts-sasu" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Décision de l'associé unique</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Pour acter les décisions de votre société unipersonnelle (nomination, approbation des comptes, transfert de siège) dans les formes requises.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-decision-associe-unique" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>État des actes accomplis</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>À annexer aux statuts : l'état des actes accomplis pour le compte de la société en formation fait reprendre par la société les engagements pris avant l'immatriculation.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-etat-des-actes-accomplis" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Création de société (EURL ou SASU)</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Tout pour constituer votre société, réuni et à prix groupé : statuts (EURL ou SASU au choix), décision de l'associé unique, acte d'apport du fonds, état des actes, et check-list guichet unique.</p>
                  <a href="/catalogue/pack-creation-societe" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Création de société →</a>
                </div>
              </section>

              <section id="transferer">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Étape 2 : transférer l'activité
                </h2>
                <p style={{marginBottom: '1rem'}}>Une fois la société créée, il faut lui transférer l'activité (clientèle, matériel, contrats, nom). Deux voies sont possibles.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>L'apport du fonds de commerce en nature.</strong> Vous apportez le fonds à la société en échange de parts ou d'actions. Un commissaire aux apports peut être requis, sauf dispense (aucun apport en nature supérieur à 30&nbsp;000&nbsp;€ et total des apports en nature inférieur à la moitié du capital) ; pour une entreprise individuelle qui devient EURL, il n'est souvent pas obligatoire. L'opération suppose un acte d'apport et une publicité. Les droits d'enregistrement sont nuls si le fonds vaut moins de 23&nbsp;000&nbsp;€.</li>
                  <li><strong>La cession du fonds de commerce.</strong> La société achète le fonds à la micro après sa constitution. Cela suppose un acte de cession, son enregistrement, des droits d'enregistrement et des publicités, et peut générer une imposition de la plus-value éventuelle.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour la plupart des micro-entrepreneurs, dont le fonds se résume à une clientèle et quelques équipements, l'<strong>apport en nature est la solution la plus simple et la plus courante</strong>. Une fois le transfert formalisé, vous pouvez facturer au nom de la société.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Acte d'apport de fonds de commerce</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Pour transférer votre activité à la société en échange de parts ou d'actions : désignation du fonds, évaluation, rémunération de l'apport, et mention de la dispense éventuelle de commissaire aux apports.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-acte-apport-fonds-de-commerce" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
              </section>

              <section id="fermer">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Étape 3 : fermer la micro-entreprise
                </h2>
                <p style={{marginBottom: '1rem'}}>Dernière étape : la fermeture de la micro-entreprise, par une <strong>déclaration de cessation d'activité</strong> sur le <strong>guichet unique de l'INPI</strong>, en ligne et gratuitement. L'ordre des opérations est important : la cessation intervient <strong>après</strong> le transfert de l'activité à la société, idéalement programmée la veille du démarrage de celle-ci.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Deux points à retenir.</strong> Vous devez effectuer une dernière déclaration de chiffre d'affaires, puis une <strong>déclaration fiscale de fin d'activité dans un délai de 60 jours</strong>. Et attention : la cessation volontaire d'une micro-entreprise <strong>n'ouvre aucun droit au chômage</strong>, l'allocation des travailleurs indépendants étant réservée aux liquidations judiciaires.
                  </p>
                </div>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>LE CABINET S'EN CHARGE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Transition et fermeture : on coordonne tout</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Création de la société, transfert du fonds, cessation de la micro au guichet unique : ces formalités gratuites mais sensibles doivent s'enchaîner dans le bon ordre. Le cabinet pilote l'opération et la coordonne avec votre expert-comptable.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Être accompagné →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/formalites-juridiques-externalisees" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>confier mes formalités</a></span>
                  </div>
                </div>
              </section>

              <section id="calendrier">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Calendrier, conséquences et pièges
                </h2>
                <p style={{marginBottom: '1rem'}}>Quelques repères pour réussir la transition.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Le calendrier.</strong> Le 1er janvier est souvent le moment idéal, l'exercice social coïncidant avec l'année civile. Lancez alors les démarches dès <strong>novembre</strong>. À défaut, privilégiez un début de mois ou de trimestre.</li>
                  <li><strong>Les nouvelles obligations.</strong> La société implique une comptabilité complète, des comptes annuels et leur dépôt : l'accompagnement d'un expert-comptable devient quasi indispensable.</li>
                  <li><strong>Le changement de régime.</strong> Votre régime social et fiscal change (travailleur non salarié ou assimilé salarié, impôt sur le revenu ou sur les sociétés) : d'où l'importance des simulations en amont.</li>
                  <li><strong>Les pièges.</strong> Ne basculez pas uniquement pour « faire pro ». Pensez à re-signer les contrats importants au nom de la société, à informer vos clients et fournisseurs, et à mettre à jour tous vos supports (devis, factures, conditions générales, mentions légales).</li>
                </ul>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Adapter ses assurances au changement de statut</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le passage en société modifie votre protection sociale (travailleur non salarié ou assimilé salarié) et vos risques. C'est le moment de revoir votre responsabilité civile professionnelle, votre prévoyance et votre complémentaire santé. En courtier, le cabinet fait le point et ajuste vos contrats.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Se faire accompagner
                </h2>
                <p style={{marginBottom: '1rem'}}>Passer en société est un tournant qui mêle des dimensions juridiques, fiscales, sociales et comptables. Un mauvais choix de forme ou un transfert mal formalisé peut coûter cher. C'est pourquoi un accompagnement, en amont de la décision puis dans les formalités, sécurise réellement l'opération.</p>
                <p style={{marginBottom: '1rem'}}>Le cabinet accompagne les entrepreneurs dans cette transition : aide au choix de la forme, rédaction des statuts et des actes, sécurisation du transfert d'activité et de la fermeture de la micro, et coordination avec votre expert-comptable.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Franchir le cap sereinement</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Choix de la forme, statuts, transfert du fonds, fermeture de la micro, modèles de documents : le cabinet accompagne votre passage en société. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/catalogue" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Modèles de documents</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Passer de la micro à la société est avant tout une décision stratégique, qui se prend quand les chiffres le justifient : plafonds approchés, charges réelles élevées, projet d'association, besoin de récupérer la TVA. Une fois la décision mûrie, la procédure tient en trois temps : créer la société, transférer l'activité, fermer la micro-entreprise.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de simuler les scénarios avant de trancher, d'anticiper le calendrier, et de ne pas négliger les formalités de transfert et de mise à jour. Bien préparée, la bascule ouvre une nouvelle étape de développement, au-delà des limites de la micro.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Plafonds de la micro-entreprise 2026-2028 (arrêté du 27 janvier 2026) et seuils de franchise de TVA, <a href="https://entreprendre.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>entreprendre.service-public.gouv.fr</a> et <a href="https://www.economie.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a></li>
                  <li>Loi n° 2022-172 du 14 février 2022 en faveur de l'activité professionnelle indépendante (statut de l'entrepreneur individuel, article L. 526-22 du code de commerce)</li>
                  <li>Cessation d'activité et formalités sur le guichet unique de l'INPI, <a href="https://procedures.inpi.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>procedures.inpi.fr</a></li>
                  <li>Code de commerce (apport et cession de fonds de commerce, commissaire aux apports)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Il ne se substitue pas à une analyse de votre situation et à des simulations au cas par cas.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on transformer directement une micro-entreprise en société ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La micro-entreprise n'est pas une société : c'est une entreprise individuelle placée sous un régime simplifié. Il n'existe donc pas de transformation directe. Passer en société suppose de créer une société nouvelle (EURL, SASU, SARL, SAS), de lui transférer l'activité, puis de fermer la micro-entreprise. La société dispose d'un nouveau numéro SIREN, distinct de celui de la micro.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels sont les plafonds de la micro-entreprise en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour la période 2026-2028, les plafonds sont de 203&nbsp;100&nbsp;€ de chiffre d'affaires annuel pour les activités de vente et d'hébergement, et de 83&nbsp;600&nbsp;€ pour les prestations de services et les activités libérales. Un dépassement pendant deux années civiles consécutives entraîne la sortie du régime micro au 1er janvier suivant. Ces seuils ne doivent pas être confondus avec les seuils de franchise de TVA (85&nbsp;000&nbsp;€ et 37&nbsp;500&nbsp;€).</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand faut-il passer en société ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Plusieurs signaux invitent à franchir le cap : un chiffre d'affaires qui approche ou dépasse les plafonds, des charges réelles supérieures à l'abattement forfaitaire de la micro, le besoin de s'associer ou de lever des fonds, la volonté de séparer nettement les patrimoines, ou l'intérêt de récupérer la TVA. La règle d'or : basculer quand les chiffres le justifient, après simulation, pas seulement pour l'image.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment transférer l'activité à la société ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux voies existent : l'apport du fonds de commerce en nature (vous apportez la clientèle et le matériel en échange de parts ou d'actions) ou la cession du fonds (la société achète le fonds à la micro après sa création). Pour la plupart des micro-entrepreneurs, dont le fonds se résume à une clientèle et quelques équipements, l'apport en nature est la solution la plus simple. Un commissaire aux apports n'est pas toujours nécessaire.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment fermer sa micro-entreprise ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La fermeture s'effectue par une déclaration de cessation d'activité sur le guichet unique de l'INPI, en ligne et gratuitement. Elle intervient après le transfert de l'activité à la société. Vous pouvez programmer la clôture à une date précise, par exemple la veille du démarrage de la société. Vous effectuez ensuite une dernière déclaration de chiffre d'affaires et, dans un délai de 60 jours, une déclaration fiscale de fin d'activité.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Garde-t-on le même numéro SIRET ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La société est une personne morale nouvelle, dotée de son propre numéro SIREN et SIRET. Le numéro de la micro-entreprise disparaît avec sa cessation. Il faut donc mettre à jour l'ensemble de vos supports : devis, factures, conditions générales, mentions légales, site internet, avec les nouvelles informations (raison sociale, SIREN, capital social, régime de TVA).</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le bon moment dans l'année pour basculer ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le 1er janvier est souvent le moment idéal, car l'exercice social coïncide alors avec l'année civile. Pour cela, mieux vaut lancer les démarches dès le mois de novembre précédent. À défaut, le début d'un mois ou d'un trimestre facilite la gestion comptable et la TVA. Le calendrier doit aussi tenir compte de vos contrats en cours, dont certains devront être re-signés au nom de la société.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La fermeture de la micro-entreprise donne-t-elle droit au chômage ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La cessation volontaire d'une micro-entreprise n'ouvre aucun droit à l'assurance chômage. Le micro-entrepreneur, comme tout travailleur indépendant, n'est pas couvert par France Travail. Une allocation des travailleurs indépendants existe, mais elle est réservée aux cas de liquidation judiciaire, sous conditions strictes de revenus et de durée d'activité.</p>
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
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Modèles de documents</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Statuts d'EURL ou de SASU, actes liés au fonds de commerce, décisions de l'associé unique : des modèles à personnaliser.</p>
              <a href="/catalogue" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Voir le catalogue →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/micro-entreprise-eurl-sasu-quel-statut-choisir-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Micro, EURL ou SASU : quel statut choisir en 2026 ? →
              </a>
              <a href="/blog/creer-sa-micro-entreprise-2026-guide-complet-plafonds-cotisations-demarches" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Créer sa micro-entreprise en 2026 : le guide complet →
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
                <span key="EURL" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>EURL</span>
                <span key="SASU" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>SASU</span>
                <span key="Création" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Création d'entreprise</span>
                <span key="Développement" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Développement</span>
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
