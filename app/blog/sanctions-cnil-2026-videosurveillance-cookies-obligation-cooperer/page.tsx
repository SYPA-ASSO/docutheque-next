import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Sanctions CNIL 2026 : vidéosurveillance, cookies et obligation de coopérer, ce que révèlent les 23 dernières décisions · Blog Cabinet Cholez-Pagotto`,
  description: `La CNIL a prononcé 23 sanctions en procédure simplifiée depuis janvier 2026 : vidéosurveillance excessive des salariés, bandeaux cookies non conformes, droits d'accès et d'effacement ignorés. Ce que ça change concrètement pour votre organisme.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/sanctions-cnil-2026-videosurveillance-cookies-obligation-cooperer',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/sanctions-cnil-2026-videosurveillance-cookies.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/sanctions-cnil-2026-videosurveillance-cookies.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Sanctions CNIL 2026 : vidéosurveillance, cookies et obligation de coopérer, ce que révèlent les 23 dernières décisions",
      "description": "La CNIL a prononcé 23 sanctions en procédure simplifiée depuis janvier 2026 : vidéosurveillance excessive des salariés, bandeaux cookies non conformes, droits d'accès et d'effacement ignorés. Ce que ça change concrètement pour votre organisme.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/sanctions-cnil-2026-videosurveillance-cookies.webp",
      "datePublished": "2026-07-10",
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
      "url": "https://cholez-pagotto.fr/blog/sanctions-cnil-2026-videosurveillance-cookies-obligation-cooperer",
      "keywords": ["CNIL", "RGPD", "Sanction CNIL", "Cookies", "Vidéosurveillance travail", "Procédure simplifiée", "Droit d'accès"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que la procédure de sanction simplifiée de la CNIL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mise en place en 2022, c'est une procédure adaptée aux dossiers ne présentant pas de difficulté juridique particulière : le président de la formation restreinte, ou un autre de ses membres, décide seul de la sanction, plafonnée à 20 000 euros, sans publication du nom de l'organisme sanctionné."
          }
        },
        {
          "@type": "Question",
          "name": "Une entreprise peut-elle filmer ses salariés en continu ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, sauf circonstance exceptionnelle le justifiant. Filmer en permanence les postes de travail méconnaît le principe de minimisation des données posé par l'article 5.1.c du RGPD, et l'exploitation d'un dispositif de vidéosurveillance sans autorisation préfectorale viole par ailleurs l'article 5.1.a du même règlement."
          }
        },
        {
          "@type": "Question",
          "name": "Un bandeau cookies qui propose seulement d'accepter est-il conforme ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'article 82 de la loi Informatique et Libertés impose qu'il soit aussi simple de refuser tous les cookies que de les accepter tous. Un bandeau qui permet d'accepter en un clic mais impose de passer par une interface de personnalisation pour refuser n'est pas conforme."
          }
        },
        {
          "@type": "Question",
          "name": "Que risque une entreprise qui ne répond pas à une sollicitation de la CNIL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'absence de coopération avec la CNIL constitue en elle-même un manquement autonome à l'article 18 de la loi Informatique et Libertés, sanctionnable indépendamment du bien-fondé de la plainte initiale, et peut être assortie d'une injonction sous astreinte financière en cas de non-réponse persistante."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Sanctions CNIL 2026" }
      ]
    }
  ]
}

export default function ArticleSanctionsCnil2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Sanctions CNIL 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>RGPD & CONFORMITÉ</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>BILAN CNIL JUILLET 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Sanctions CNIL 2026 : vidéosurveillance, cookies et obligation de coopérer, ce que révèlent les 23 dernières décisions</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 10 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 11 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/sanctions-cnil-2026-videosurveillance-cookies.webp"
                alt="Sanctions CNIL 2026 : vidéosurveillance, cookies et obligation de coopérer"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Mise en place en 2022, c'est une procédure adaptée aux dossiers ne présentant pas de difficulté juridique particulière : le président de la formation restreinte, ou un autre de ses membres…</li>
                <li>Sauf circonstance exceptionnelle le justifiant.</li>
                <li>L'article 82 de la loi Informatique et Libertés impose qu'il soit aussi simple de refuser tous les cookies que de les accepter tous.</li>
                <li>L'absence de coopération avec la CNIL constitue en elle-même un manquement autonome à l'article 18 de la loi Informatique et Libertés, sanctionnable indépendamment du bien-fondé de la plainte…</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#procedure" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. La procédure simplifiée, un outil rapide depuis 2022</a></li>
                <li><a href="#video" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Vidéosurveillance des salariés : ce qui a été sanctionné</a></li>
                <li><a href="#cookies" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Cookies : le piège du bouton "tout accepter" sans équivalent</a></li>
                <li><a href="#droits" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Droits d'accès et d'effacement : quand le silence coûte cher</a></li>
                <li><a href="#cooperation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. L'obligation de coopérer avec la CNIL, un manquement à part entière</a></li>
                <li><a href="#retenir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Ce qu'il faut en retenir pour votre organisme</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>133 750 euros. C'est le montant cumulé des 23 sanctions que la CNIL a prononcées depuis janvier 2026 dans le cadre de sa procédure simplifiée, un bilan qu'elle a rendu public le 6 juillet dernier. Rien à voir avec les amendes record dont la presse se fait parfois l'écho : ici, on parle de dossiers du quotidien, souvent déclenchés par une simple plainte de particulier (19 sur les 23).</p>
                <p style={{marginBottom: '1rem'}}>C'est justement ce qui rend ce bilan intéressant pour la plupart des organismes : ce ne sont pas des manquements exceptionnels ou sophistiqués qui sont sanctionnés, mais des pratiques encore très répandues. Trois sujets reviennent : la vidéosurveillance des salariés, les bandeaux cookies mal conçus, et le silence face à une demande d'exercice de droits.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}filmer en continu ses salariés sans justification, proposer un bouton pour tout accepter les cookies sans équivalent pour tout refuser, ou ignorer une demande de droit d'accès ou d'effacement, sont des manquements qui suffisent à eux seuls à déclencher une sanction de la CNIL, même sans gravité exceptionnelle.
                  </p>
                </div>
              </section>

              <section id="procedure">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. La procédure simplifiée, un outil rapide depuis 2022
                </h2>
                <p style={{marginBottom: '1rem'}}>Depuis 2022, la CNIL dispose d'une procédure adaptée aux dossiers qui ne présentent pas de difficulté juridique particulière. Contrairement à la procédure ordinaire, qui mobilise la formation restreinte au complet lors d'une séance contradictoire, la procédure simplifiée repose sur une décision individuelle : le président de la formation restreinte, ou un autre de ses membres désigné, statue seul après examen du dossier.</p>
                <p style={{marginBottom: '1rem'}}>Deux limites l'encadrent. L'amende ne peut pas dépasser 20 000 euros, et l'identité de l'organisme sanctionné n'est jamais rendue publique. C'est un choix assumé de la CNIL : traiter vite les manquements courants et avérés, sans consacrer à chaque dossier le formalisme d'une procédure ordinaire.</p>
              </section>

              <section id="video">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Vidéosurveillance des salariés : ce qui a été sanctionné
                </h2>
                <p style={{marginBottom: '1rem'}}>Plusieurs sociétés des secteurs de la restauration rapide, du transport urbain et des commerces en gare ferroviaire ont été sanctionnées pour deux motifs distincts. D'abord, l'exploitation d'un dispositif vidéo sans autorisation préfectorale, ce qui viole l'article 5.1.a du RGPD sur la licéité du traitement. Ensuite, le fait de filmer en permanence les postes de travail des salariés, un manquement au principe de minimisation des données posé par l'article 5.1.c du même règlement.</p>
                <p style={{marginBottom: '1rem'}}>La règle que rappelle la CNIL est simple à énoncer, moins simple à appliquer : les caméras ne doivent en aucun cas filmer en continu un salarié, sauf circonstance exceptionnelle qui le justifie précisément. Une caméra de sécurité aux issues d'un magasin, ce n'est pas la même chose qu'une caméra braquée en permanence sur un poste de caisse ou de cuisine.</p>
              </section>

              <section id="cookies">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Cookies : le piège du bouton "tout accepter" sans équivalent
                </h2>
                <p style={{marginBottom: '1rem'}}>Des contrôles en ligne menés notamment auprès de sites de vente de billets et de sociétés de télémarketing ont révélé un défaut récurrent : des bandeaux d'information incomplets sur les finalités des cookies, sur l'identité du responsable de traitement, ou sur la manière de retirer son consentement. Certains organismes déposaient même des cookies soumis à consentement, comme les cookies publicitaires, avant toute action de l'utilisateur.</p>
                <p style={{marginBottom: '1rem'}}>Le motif le plus fréquent tient cependant à l'ergonomie du bandeau lui-même. Un bouton permettait d'accepter tous les cookies en un clic ; pour les refuser, il fallait en revanche passer par « personnaliser », puis activer ou désactiver chaque catégorie une par une. Ce déséquilibre est directement contraire à l'article 82 de la loi Informatique et Libertés, qui pose une règle de symétrie : ce qui est possible en un clic pour accepter doit l'être tout autant pour refuser.</p>
              </section>

              <section id="droits">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Droits d'accès et d'effacement : quand le silence coûte cher
                </h2>
                <p style={{marginBottom: '1rem'}}>Huit des 23 sanctions concernent des organismes qui n'ont pas répondu à une demande de droit d'accès ou d'effacement, ou qui ont mis un délai excessif à le faire, en méconnaissance des articles 12, 15 et 17 du RGPD. Le motif est souvent banal : une demande reçue, jamais traitée, jusqu'à ce que la personne concernée saisisse la CNIL.</p>
              </section>

              <section id="cooperation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. L'obligation de coopérer avec la CNIL, un manquement à part entière
                </h2>
                <p style={{marginBottom: '1rem'}}>Quatre de ces huit sanctions comportaient une dimension supplémentaire, révélatrice d'un piège fréquent : certains organismes, dont des avocats et des médecins, n'avaient tout simplement pas répondu aux sollicitations de la CNIL pendant l'instruction de la plainte. L'article 18 de la loi Informatique et Libertés impose pourtant de coopérer avec l'autorité de contrôle ; ce n'est pas une option laissée à l'appréciation de l'organisme sollicité, c'est une obligation légale autonome, distincte du manquement initial ayant motivé la plainte.</p>
                <p style={{marginBottom: '1rem'}}>Conséquence concrète pour ces dossiers : une amende assortie d'une injonction de répondre à la demande du plaignant, et faute de réaction dans le délai fixé, la liquidation d'une astreinte, c'est-à-dire le paiement effectif d'une somme d'argent supplémentaire pour n'avoir pas obtempéré. Ignorer un courrier de la CNIL peut donc coûter plus cher que le manquement qui l'a déclenché.</p>
              </section>

              <section id="retenir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Ce qu'il faut en retenir pour votre organisme
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Vérifier que tout dispositif de vidéosurveillance sur le lieu de travail dispose bien d'une autorisation préfectorale lorsqu'elle est requise, et qu'aucune caméra ne filme en continu un poste de travail sans justification précise.</li>
                  <li>Tester soi-même son bandeau cookies : le bouton de refus doit être aussi accessible et aussi rapide que le bouton d'acceptation, pas caché derrière un second niveau de menu.</li>
                  <li>Mettre en place une procédure interne claire pour traiter toute demande de droit d'accès ou d'effacement dans le délai légal, avant même qu'elle ne dégénère en plainte.</li>
                  <li>Ne jamais laisser un courrier de la CNIL sans réponse, même si le fond du dossier semble mineur : le silence est lui-même sanctionné, indépendamment de l'issue de la plainte initiale.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Vérifier votre conformité RGPD
                </h2>
                <p style={{marginBottom: '1rem'}}>Ces sanctions ont ceci de rassurant : elles portent sur des points précis et corrigeables, pas sur des défaillances structurelles insurmontables. Un audit ciblé de la vidéosurveillance, du bandeau cookies et du circuit de traitement des demandes de droits suffit, dans la plupart des cas, à sécuriser un organisme.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin de vérifier votre conformité RGPD ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet réalise un diagnostic documentaire de votre conformité (registre des traitements, politique de confidentialité, mentions d'information) ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/rgpd-conformite" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>RGPD & conformité</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Ce bilan de mi-année ne parle pas de piratage massif ni de failles de sécurité spectaculaires. Il parle de caméras qu'on a oublié d'éteindre, de bandeaux cookies mal conçus, et de courriers auxquels on n'a jamais répondu. C'est peut-être ce qui doit le plus alerter : ce sont des manquements simples à corriger, qui ne devraient plus exister huit ans après l'entrée en application du RGPD, et qui continuent pourtant d'être sanctionnés à un rythme soutenu.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>CNIL, communiqué du 6 juillet 2026, "La CNIL a prononcé 23 nouvelles sanctions depuis janvier au titre de la procédure simplifiée"</li>
                  <li>Règlement général sur la protection des données, article 5.1.a (licéité du traitement) et 5.1.c (minimisation des données)</li>
                  <li>Règlement général sur la protection des données, articles 12, 15 et 17 (transparence, droit d'accès, droit à l'effacement)</li>
                  <li>Loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, article 18 (obligation de coopération avec la CNIL)</li>
                  <li>Loi n°78-17 du 6 janvier 1978, article 82 (règles relatives aux cookies et autres traceurs, symétrie de l'acceptation et du refus)</li>
                  <li>Code civil, article 9 (droit au respect de la vie privée)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la procédure de sanction simplifiée de la CNIL ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Mise en place en 2022, c'est une procédure adaptée aux dossiers ne présentant pas de difficulté juridique particulière : le président de la formation restreinte, ou un autre de ses membres, décide seul de la sanction, plafonnée à 20 000 euros, sans publication du nom de l'organisme sanctionné.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Une entreprise peut-elle filmer ses salariés en continu ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, sauf circonstance exceptionnelle le justifiant. Filmer en permanence les postes de travail méconnaît le principe de minimisation des données posé par l'article 5.1.c du RGPD, et l'exploitation d'un dispositif de vidéosurveillance sans autorisation préfectorale viole par ailleurs l'article 5.1.a du même règlement.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un bandeau cookies qui propose seulement d'accepter est-il conforme ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. L'article 82 de la loi Informatique et Libertés impose qu'il soit aussi simple de refuser tous les cookies que de les accepter tous. Un bandeau qui permet d'accepter en un clic mais impose de passer par une interface de personnalisation pour refuser n'est pas conforme.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que risque une entreprise qui ne répond pas à une sollicitation de la CNIL ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'absence de coopération avec la CNIL constitue en elle-même un manquement autonome à l'article 18 de la loi Informatique et Libertés, sanctionnable indépendamment du bien-fondé de la plainte initiale, et peut être assortie d'une injonction sous astreinte financière en cas de non-réponse persistante.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Conformité RGPD</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles et diagnostics de conformité disponibles dans la Docuthèque.</p>
              <a href="/catalogue" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                Voir le catalogue →
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
                <a href="/blog?tag=CNIL" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>CNIL</a>
                <a href="/blog?tag=RGPD" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>RGPD</a>
                <a href="/blog?tag=Cookies" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Cookies</a>
                <a href="/blog?tag=Vid%C3%A9osurveillance" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Vidéosurveillance</a>
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
              { cat: 'INTELLIGENCE ARTIFICIELLE', titre: "Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD", href: '/blog/intelligence-artificielle-ai-act-et-rgpd-vos-obligations-en-2026', date: '20 juin 2026' },
              { cat: 'CONFORMITÉ', titre: "Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ?", href: '/blog/directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee', date: '24 mars 2026' },
              { cat: 'CONSOMMATION', titre: "Bouton de rétractation : l'obligation des sites de vente en ligne depuis le 19 juin 2026", href: '/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026', date: '22 juin 2026' },
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
