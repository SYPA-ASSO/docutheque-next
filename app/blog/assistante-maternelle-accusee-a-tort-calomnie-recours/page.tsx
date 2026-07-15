import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Assistante maternelle accusée à tort : quels recours face à la calomnie ? · Blog Cabinet Cholez-Pagotto`,
  description: `Signalement infondé, suspension d'agrément, dénonciation calomnieuse : le point sur les mécanismes juridiques et les démarches à la disposition d'une assistante maternelle injustement accusée.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Assistante maternelle accusée à tort : quels recours face à la calomnie ?",
      "description": "Signalement infondé, suspension d'agrément, dénonciation calomnieuse : le point sur les mécanismes juridiques et les démarches à la disposition d'une assistante maternelle injustement accusée.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/assistante-maternelle-calomnie-2026.webp",
      "datePublished": "2025-01-16",
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
      "url": "https://cholez-pagotto.fr/blog/assistante-maternelle-accusee-a-tort-calomnie-recours",
      "keywords": ["Assistante maternelle", "Agrément", "PMI", "CCPD", "Dénonciation calomnieuse", "Diffamation", "Droit du travail", "Code de l'action sociale et des familles"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Un signalement à la PMI entraîne-t-il automatiquement un retrait d'agrément ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Un signalement peut donner lieu à une simple visite ou évaluation, sans suite. Une suspension d'urgence n'intervient que si des éléments suffisamment précis et vraisemblables laissent craindre que les conditions d'accueil ne garantissent plus la sécurité, la santé ou l'épanouissement de l'enfant. Un retrait définitif suppose en principe une enquête plus approfondie et l'avis préalable de la commission consultative paritaire départementale (CCPD)."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la CCPD et à quoi sert-elle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La commission consultative paritaire départementale (CCPD) est une instance composée à parité de représentants du département et de représentants élus des assistantes maternelles. Le président du conseil départemental doit la saisir pour avis avant toute décision de modification, de non-renouvellement ou de retrait d'agrément. L'assistante maternelle est informée au moins quinze jours à l'avance, peut consulter son dossier, présenter des observations écrites ou orales et se faire assister ou représenter."
          }
        },
        {
          "@type": "Question",
          "name": "Comment agir contre un signalement que l'on sait mensonger ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux voies, non exclusives l'une de l'autre, existent : la plainte pénale pour dénonciation calomnieuse (article 226-10 du Code pénal), qui suppose de démontrer que l'auteur savait le fait dénoncé inexact, et l'action civile en responsabilité sur le fondement de l'article 1240 du Code civil pour obtenir réparation du préjudice subi. Si les propos ont été diffusés publiquement au-delà de l'autorité saisie, une action en diffamation peut également être envisagée, sous un délai de prescription de trois mois."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire en premier en cas de suspension d'agrément ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conserver tous les écrits (cahier de liaison, messages, courriers de la PMI), demander la consultation du dossier administratif, se rapprocher rapidement d'un syndicat, d'une association professionnelle ou d'un avocat, et ne pas laisser passer le délai de deux mois pour saisir le tribunal administratif d'un recours contre la décision, assorti au besoin d'un référé-suspension."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Assistante maternelle accusée à tort" }
      ]
    }
  ]
}

export default function ArticleAssmatCalomnie2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Assistante maternelle accusée à tort</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ASSISTANTES MATERNELLES</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT ADMINISTRATIF ET PÉNAL</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Assistante maternelle accusée à tort : quels recours face à la calomnie ?</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 16 janvier 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 17 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/assistante-maternelle-calomnie-2026.webp"
                alt="Assistante maternelle accusée à tort : quels recours face à la calomnie ?"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#agrement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce que risque l'agrément en cas de signalement grave</a></li>
                <li><a href="#contrat" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Effets sur le contrat de travail et les revenus</a></li>
                <li><a href="#ccpd" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La CCPD : le passage obligé avant toute décision</a></li>
                <li><a href="#contester" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Contester une suspension ou un retrait d'agrément</a></li>
                <li><a href="#calomnie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Se défendre contre un signalement mensonger</a></li>
                <li><a href="#prevenir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Prévenir et se préparer</a></li>
                <li><a href="#accompagnement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Ne pas rester seule face à la situation</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Un hématome mal expliqué, un conflit sur une fin de contrat, un soupçon relayé à la hâte : pour une assistante maternelle, une accusation infondée peut faire basculer en quelques heures une situation professionnelle jusque-là tranquille. Au-delà du choc, les conséquences sont très concrètes : suspension d'agrément, rupture de contrats, perte de revenus, procédures administratives et parfois pénales.</p>
                <p style={{marginBottom: '1rem'}}>Notre article du 15 janvier sur <a href="/blog/chantage-en-droit-francais-comprendre-reconnaitre-reagir" style={{color: '#1a4fba', textDecoration: 'underline'}}>le chantage en droit français</a> évoquait déjà la fragilité particulière des professions sous contrôle administratif face à la menace de signalement. Cet article prolonge ce point pour les assistantes maternelles, avec le mécanisme précis de l'agrément, la procédure devant la commission consultative paritaire départementale, et les recours disponibles lorsqu'une accusation se révèle mensongère.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}un signalement grave peut entraîner une suspension d'agrément immédiate, mais toute modification ou tout retrait définitif suppose l'avis préalable d'une commission paritaire, la décision reste contestable devant le tribunal administratif, et un signalement sciemment mensonger expose son auteur à des poursuites pour dénonciation calomnieuse (article 226-10 du Code pénal) ou à une action civile en réparation.
                  </p>
                </div>
              </section>

              <section id="agrement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce que risque l'agrément en cas de signalement grave
                </h2>
                <p style={{marginBottom: '1rem'}}>L'assistante maternelle ne peut exercer qu'avec un agrément délivré par le président du conseil départemental, à condition que l'accueil garantisse la sécurité, la santé et l'épanouissement des enfants confiés (article L.&nbsp;421-3 du Code de l'action sociale et des familles).</p>
                <p style={{marginBottom: '1rem'}}>Lorsque les conditions de l'agrément cessent d'être remplies, le président du conseil départemental peut, après avis de la commission consultative paritaire départementale, en modifier le contenu ou procéder à son retrait. En cas d'urgence, il peut également suspendre l'agrément : tant que la suspension dure, aucun enfant ne peut être confié (article L.&nbsp;421-6 du même code).</p>
                <p style={{marginBottom: '1rem'}}>En pratique, un signalement de faits graves (violences, suspicion de maltraitance, mise en danger manifeste) adressé à la PMI conduit souvent à une suspension immédiate, dans l'attente des vérifications. Cette suspension ne peut excéder quatre mois et ouvre droit, pendant sa durée, à une indemnité compensatrice dont le montant minimal est fixé par décret (article L.&nbsp;423-8 du même code). Le Conseil constitutionnel a jugé que cette mesure conservatoire n'a pas le caractère d'une sanction pénale ou disciplinaire, ce qui explique qu'elle puisse intervenir avant même que les faits soient clairement établis, tout en restant susceptible de recours (décision n°&nbsp;2011-119 QPC du 1er avril 2011, commentée en section&nbsp;IV).</p>
              </section>

              <section id="contrat">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Effets sur le contrat de travail et les revenus
                </h2>
                <p style={{marginBottom: '1rem'}}>Quand l'agrément est suspendu ou retiré, les parents ne peuvent plus légalement confier leur enfant à l'assistante maternelle. En cas de retrait, l'employeur est tenu de procéder au licenciement par lettre recommandée avec demande d'avis de réception (article L.&nbsp;423-8 du Code de l'action sociale et des familles), une lettre qui doit énoncer le ou les motifs de la rupture comme pour tout licenciement (article L.&nbsp;1232-6 du Code du travail).</p>
                <p style={{marginBottom: '1rem'}}>Cette rupture emporte en principe versement du dernier salaire, des indemnités de congés payés, et remise du solde de tout compte et de l'attestation destinée à France Travail. En cas de désaccord (documents non transmis, indemnités contestées), un recours devant le conseil de prud'hommes est envisageable, dans le délai de <strong>douze mois</strong> à compter de la notification de la rupture (article L.&nbsp;1471-1 du Code du travail).</p>
                <p style={{marginBottom: '1rem'}}>Parallèlement, une suspension ou un retrait d'agrément qui se révèle par la suite infondé peut ouvrir un droit à indemnisation contre le département, distinct de l'indemnité compensatrice versée pendant la seule durée de la suspension (voir section&nbsp;IV).</p>
              </section>

              <section id="ccpd">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La CCPD : le passage obligé avant toute décision
                </h2>
                <p style={{marginBottom: '1rem'}}>Avant toute décision de modification, de non-renouvellement ou de retrait d'agrément, le président du conseil départemental doit saisir pour avis la <strong>commission consultative paritaire départementale (CCPD)</strong>, instance créée en 1992 et composée à parité de représentants du département et de représentants élus des assistantes maternelles et familiales.</p>
                <p style={{marginBottom: '1rem'}}>La procédure impose plusieurs garanties, prévues par l'article R.&nbsp;421-23 du Code de l'action sociale et des familles :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Information au moins <strong>quinze jours</strong> avant la réunion, par lettre recommandée précisant les motifs de la décision envisagée ;</li>
                  <li>Droit de consulter son dossier administratif ;</li>
                  <li>Faculté de présenter des observations écrites ou orales devant la commission ;</li>
                  <li>Possibilité de se faire assister ou représenter par une personne de son choix (syndicat, avocat, collègue).</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>La commission délibère hors la présence de l'intéressée et émet un avis à la majorité des membres présents, la voix du président étant prépondérante en cas de partage. Cet avis reste <strong>consultatif</strong> : le président du conseil départemental n'est pas juridiquement lié par lui, mais s'en écarte rarement en pratique. L'absence de saisine régulière de la CCPD, ou le non-respect du délai de quinze jours, constitue un vice de procédure susceptible d'entraîner l'annulation de la décision par le juge administratif.</p>
                <p style={{marginBottom: '1rem'}}>C'est le moment le plus stratégique de toute la procédure : reconstituer les faits (cahier de liaison, messages, attestations), recueillir d'éventuels témoignages de parents et se faire accompagner, si possible par un professionnel, avant l'audience, change souvent l'issue du dossier.</p>
              </section>

              <section id="contester">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Contester une suspension ou un retrait d'agrément
                </h2>
                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Le recours administratif et contentieux</h3>
                <p style={{marginBottom: '1rem'}}>La décision de suspension ou de retrait est une décision administrative qui peut être contestée devant le tribunal administratif par un recours pour excès de pouvoir, dans un délai de <strong>deux mois</strong> à compter de sa notification. Un recours gracieux préalable auprès du président du conseil départemental reste également possible, notamment pour lui soumettre des éléments nouveaux (classement sans suite d'une plainte pénale, attestations complémentaires).</p>
                <p style={{marginBottom: '1rem'}}>Le Conseil constitutionnel a validé ce dispositif : dans sa décision n°&nbsp;2011-119 QPC du 1er avril 2011, il a jugé que les décisions de suspension ou de retrait d'agrément des assistants maternels constituent des décisions administratives susceptibles d'être déférées au juge de l'excès de pouvoir et de faire l'objet d'un <strong>référé-suspension</strong> sur le fondement de l'article L.&nbsp;521-1 du Code de justice administrative, ce qui garantit un droit au recours effectif y compris en urgence.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Obtenir réparation lorsque la décision était infondée</h3>
                <p style={{marginBottom: '1rem'}}>Un cas jugé par la cour administrative d'appel de Nancy illustre bien la mécanique indemnitaire. Une assistante maternelle de la Moselle avait vu son agrément retiré en 2009, puis obtenu gain de cause : la cour a distingué deux préjudices bien différents. D'une part, la <strong>suspension</strong>, décidée en urgence sur la base d'éléments suffisamment précis et vraisemblables au moment des faits, n'était pas en elle-même illégale, mais lorsque la suspicion qui l'avait motivée ne s'est ensuite pas confirmée, l'intéressée, dont le contrat avait nécessairement été rompu sans indemnité par le particulier employeur, a été jugée avoir subi un préjudice anormal et spécial justifiant réparation. D'autre part, le <strong>retrait</strong> d'agrément lui-même, lorsqu'il est illégal, ouvre droit à une indemnisation distincte et plus large, couvrant la perte de revenus consécutive. Dans cette affaire, la cour a porté l'indemnisation totale à plus de 33 000 euros, très au-delà de la somme initialement accordée en première instance (CAA de Nancy, 20 juin 2017, n°&nbsp;16NC00342).</p>
                <p style={{marginBottom: '1rem'}}>Ce précédent illustre un point essentiel : même lorsqu'une suspension d'urgence n'est pas fautive en soi, ses conséquences sur une professionnelle finalement mise hors de cause peuvent justifier une indemnisation. Il ne faut donc jamais renoncer à agir au seul motif que la mesure initiale semblait justifiée sur le moment.</p>
              </section>

              <section id="calomnie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Se défendre contre un signalement mensonger : dénonciation calomnieuse, diffamation, responsabilité civile
                </h2>
                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>La dénonciation calomnieuse</h3>
                <p style={{marginBottom: '1rem'}}>L'article 226-10 du Code pénal punit de 5 ans d'emprisonnement et 45 000 euros d'amende la dénonciation, par tout moyen et dirigée contre une personne déterminée, d'un fait de nature à entraîner des sanctions judiciaires, administratives ou disciplinaires, que l'on sait totalement ou partiellement inexact, lorsqu'elle est adressée à une autorité ayant le pouvoir d'y donner suite. La PMI et le conseil départemental entrent pleinement dans ce périmètre.</p>
                <p style={{marginBottom: '1rem'}}>Deux points de jurisprudence méritent d'être connus. D'abord, la fausseté du fait dénoncé peut résulter d'une décision définitive de relaxe, de non-lieu ou de classement établissant que le fait n'a pas été commis ; à défaut d'une telle décision, il appartient au juge saisi de la plainte pour dénonciation calomnieuse d'apprécier lui-même la pertinence des accusations portées, sans attendre nécessairement l'issue d'une autre procédure parallèle qui pourrait être pendante (Cour de cassation, chambre criminelle, 14 février 2012, n°&nbsp;11-81863). Ensuite, l'élément moral de l'infraction suppose que l'auteur de la dénonciation ait su, au moment des faits, que ce qu'il rapportait était inexact : une simple erreur d'appréciation, une exagération ou une inquiétude sincère mais mal fondée ne suffisent pas à caractériser le délit.</p>
                <p style={{marginBottom: '1rem'}}>La victime dispose de deux options, non exclusives l'une de l'autre : une plainte pénale pour dénonciation calomnieuse, avec constitution de partie civile le cas échéant, et une action civile en responsabilité, indépendante de toute poursuite pénale, sur le fondement de l'article 1240 du Code civil, pour obtenir réparation du préjudice subi (perte de revenus, préjudice moral, atteinte à la réputation professionnelle).</p>
                <p style={{marginBottom: '1rem'}}>Deux affaires jugées par la Cour de cassation illustrent concrètement ce mécanisme appliqué à des professions liées à l'enfance. Dans la première, un particulier en conflit de voisinage avait dénoncé au service de la petite enfance du conseil général l'inaptitude d'une assistante maternelle à exercer sa profession, dans le seul but de se venger d'un différend portant sur une haie non mitoyenne ; la Cour de cassation a confirmé sa condamnation pour dénonciation calomnieuse, relevant qu'il ne pouvait ignorer que cette dénonciation susciterait une enquête administrative sur son aptitude professionnelle (Cour de cassation, chambre criminelle, 13 décembre 2016, n°&nbsp;15-85.140). Dans la seconde, trente-et-un parents d'élèves avaient dénoncé par courrier au ministre de l'Éducation nationale, au recteur et au directeur académique des comportements brutaux et humiliants imputés à un professeur d'éducation physique et sportive ; la procédure ayant été classée sans suite, la Cour de cassation a confirmé leur condamnation, chacun à 1&nbsp;000 euros d'amende avec sursis, au motif qu'ils ne pouvaient ignorer le caractère au moins partiellement inexact des faits dénoncés (Cour de cassation, chambre criminelle, 19 juin 2018, n°&nbsp;17-85.023).</p>
                <p style={{marginBottom: '1rem'}}>Un point de vigilance mérite d'être ajouté : le fait dénoncé doit être précis et réellement susceptible d'entraîner une sanction judiciaire, administrative ou disciplinaire à l'encontre de la personne visée. La Cour de cassation a ainsi cassé une condamnation pour dénonciation calomnieuse faute pour les juges du fond de s'être expliqués sur la nature exacte des sanctions que les propos litigieux étaient susceptibles d'entraîner (Cour de cassation, chambre criminelle, 14 décembre 2016, n°&nbsp;15-85.517, publié au Bulletin).</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>La diffamation, lorsque les propos dépassent l'autorité saisie</h3>
                <p style={{marginBottom: '1rem'}}>Lorsque les parents ne se contentent pas de saisir la PMI mais propagent des accusations auprès d'autres familles, sur les réseaux sociaux ou par courriels diffusés largement, le terrain change : c'est celui de la diffamation, définie par la loi du 29 juillet 1881 comme l'allégation ou l'imputation d'un fait portant atteinte à l'honneur ou à la considération d'une personne. Le délai de prescription est très court, <strong>trois mois</strong> à compter de la publication des propos (article 65 de la loi du 29 juillet 1881), ce qui impose une réaction rapide.</p>

                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le point de vigilance.</strong>{' '}Un classement sans suite ou une relaxe pénale ne suffisent pas toujours, à eux seuls, à établir la mauvaise foi ou la fausseté des accusations sur le plan civil, notamment lorsque les parents pouvaient sincèrement croire, même à tort, à un changement inquiétant du comportement de leur enfant. La difficulté centrale, dans les deux voies, reste la preuve de la mauvaise foi et du caractère objectivement inexact des faits dénoncés.
                  </p>
                </div>
              </section>

              <section id="prevenir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Prévenir et se préparer
                </h2>
                <p style={{marginBottom: '1rem'}}>Une partie de la protection repose sur des réflexes professionnels simples, à adopter avant même qu'un litige survienne :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Ne jamais laisser les enfants accueillis seuls avec un tiers non autorisé par les parents ;</li>
                  <li>Formaliser systématiquement les transmissions (cahier de liaison, messages écrits), en particulier pour tout incident bénin de la vie courante (chute, bleu) ;</li>
                  <li>Signaler soi-même et tôt à la PMI toute tension récurrente avec une famille, plutôt que d'attendre qu'elle soit découverte à l'occasion d'un signalement grave ;</li>
                  <li>Se rapprocher de son syndicat, d'une association professionnelle ou d'un avocat dès les premiers signes de procédure, pour être accompagnée dès l'entretien avec la PMI et lors du passage en CCPD ;</li>
                  <li>Conserver systématiquement tous les courriers (PMI, département, parents) ainsi que toute décision pénale (classement, non-lieu, relaxe), qui pourront servir de fondement à une action en réparation ultérieure.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Enfin, ne pas laisser passer les délais : deux mois pour saisir le tribunal administratif contre une décision d'agrément, trois mois pour agir en diffamation, douze mois pour contester une rupture de contrat de travail devant les prud'hommes.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Ne pas rester seule face à la situation
                </h2>
                <p style={{marginBottom: '1rem'}}>Être accusée à tort est une épreuve professionnelle et humaine, mais le cadre juridique offre des voies réelles de contestation, aussi bien contre la décision administrative que contre l'auteur d'une accusation mensongère. L'enjeu est double : se protéger en amont par des pratiques documentées, puis, si la crise éclate, être rapidement entourée pour faire valoir ses droits dans les délais utiles.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'un courrier ou d'un dossier adapté à votre situation ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet propose des modèles de courriers prêts à personnaliser (observations à adresser à la CCPD, demande de consultation du dossier administratif) ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                    <a href="/catalogue" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Voir les modèles de courriers</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Un signalement grave peut suspendre un agrément du jour au lendemain, mais la loi encadre étroitement ce qui suit : passage devant une commission paritaire avant toute décision définitive, recours devant le tribunal administratif assorti d'un référé-suspension possible, et indemnisation lorsque la mesure se révèle infondée. Face à un signalement que l'on sait mensonger, le droit pénal et le droit civil offrent des voies d'action distinctes et cumulables.</p>
                <p style={{marginBottom: '1rem'}}>Comme pour toute situation de pression ou de menace évoquée dans notre article sur <a href="/blog/chantage-en-droit-francais-comprendre-reconnaitre-reagir" style={{color: '#1a4fba', textDecoration: 'underline'}}>le chantage en droit français</a>, la priorité reste la même : documenter, réagir dans les délais, et ne jamais rester seule face à la procédure.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;421-3 (délivrance de l'agrément d'assistant maternel)</li>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;421-6 (modification, retrait et suspension d'urgence de l'agrément)</li>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;423-8 (indemnité compensatrice pendant la suspension, licenciement en cas de retrait)</li>
                  <li>Code de l'action sociale et des familles, article R.&nbsp;421-23 (procédure devant la commission consultative paritaire départementale)</li>
                  <li>Code du travail, article L.&nbsp;1232-6 (motivation de la lettre de licenciement)</li>
                  <li>Code du travail, article L.&nbsp;1471-1 (délai de douze mois pour contester la rupture du contrat de travail)</li>
                  <li>Code pénal, article 226-10 (dénonciation calomnieuse)</li>
                  <li>Code civil, article 1240 (responsabilité civile délictuelle)</li>
                  <li>Loi du 29 juillet 1881 sur la liberté de la presse, article 65 (prescription de trois mois en matière de diffamation)</li>
                  <li>Conseil constitutionnel, décision n°&nbsp;2011-119 QPC du 1er avril 2011 (constitutionnalité du licenciement consécutif au retrait d'agrément, droit au recours contre les décisions de suspension et de retrait)</li>
                  <li>Cour administrative d'appel de Nancy, 20 juin 2017, n°&nbsp;16NC00342 (indemnisation d'une assistante maternelle à la suite d'une suspension puis d'un retrait d'agrément jugés infondés)</li>
                  <li>Cour de cassation, chambre criminelle, 14 février 2012, n°&nbsp;11-81863 (appréciation de la pertinence des accusations par le juge saisi de poursuites pour dénonciation calomnieuse)</li>
                  <li>Cour de cassation, chambre criminelle, 13 décembre 2016, n°&nbsp;15-85.140 (condamnation pour dénonciation calomnieuse d'un signalement mensonger au service de la petite enfance visant l'aptitude professionnelle d'une assistante maternelle)</li>
                  <li>Cour de cassation, chambre criminelle, 19 juin 2018, n°&nbsp;17-85.023 (condamnation de parents d'élèves pour dénonciation calomnieuse à l'encontre d'un enseignant)</li>
                  <li>Cour de cassation, chambre criminelle, 14 décembre 2016, n°&nbsp;15-85.517, publié au Bulletin (exigence d'un fait dénoncé de nature à entraîner une sanction judiciaire, administrative ou disciplinaire précisément identifiée)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, en particulier devant la CCPD ou pour un dépôt de plainte, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un signalement à la PMI entraîne-t-il automatiquement un retrait d'agrément ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Un signalement peut donner lieu à une simple visite ou évaluation, sans suite. Une suspension d'urgence n'intervient que si des éléments suffisamment précis et vraisemblables laissent craindre que les conditions d'accueil ne garantissent plus la sécurité, la santé ou l'épanouissement de l'enfant. Un retrait définitif suppose en principe une enquête plus approfondie et l'avis préalable de la CCPD.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la CCPD et à quoi sert-elle ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La commission consultative paritaire départementale (CCPD) est une instance composée à parité de représentants du département et de représentants élus des assistantes maternelles. Le président du conseil départemental doit la saisir pour avis avant toute décision de modification, de non-renouvellement ou de retrait d'agrément. L'assistante maternelle est informée au moins quinze jours à l'avance, peut consulter son dossier, présenter des observations écrites ou orales et se faire assister ou représenter.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment agir contre un signalement que l'on sait mensonger ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux voies, non exclusives l'une de l'autre, existent : la plainte pénale pour dénonciation calomnieuse (article 226-10 du Code pénal), qui suppose de démontrer que l'auteur savait le fait dénoncé inexact, et l'action civile en responsabilité sur le fondement de l'article 1240 du Code civil pour obtenir réparation du préjudice subi. Si les propos ont été diffusés publiquement au-delà de l'autorité saisie, une action en diffamation peut également être envisagée, sous un délai de prescription de trois mois.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire en premier en cas de suspension d'agrément ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Conserver tous les écrits (cahier de liaison, messages, courriers de la PMI), demander la consultation du dossier administratif, se rapprocher rapidement d'un syndicat, d'une association professionnelle ou d'un avocat, et ne pas laisser passer le délai de deux mois pour saisir le tribunal administratif d'un recours contre la décision, assorti au besoin d'un référé-suspension.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Se préparer à la CCPD</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles d'observations écrites et de demande de consultation de dossier à télécharger dans la Docuthèque.</p>
              <a href="/catalogue" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                Voir les modèles →
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
                <a href="/blog?tag=Assistante%20maternelle" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Assistante maternelle</a>
                <a href="/blog?tag=Agr%C3%A9ment" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Agrément</a>
                <a href="/blog?tag=CCPD" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>CCPD</a>
                <a href="/blog?tag=D%C3%A9nonciation%20calomnieuse" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Dénonciation calomnieuse</a>
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
              { cat: 'DROIT PÉNAL', titre: "Le chantage en droit français : le comprendre, le reconnaître, réagir", href: '/blog/chantage-en-droit-francais-comprendre-reconnaitre-reagir', date: '15 janvier 2025' },
              { cat: 'DROIT DU TRAVAIL', titre: "Saisie sur salaire : décryptage complet de la procédure et du cadre légal", href: '/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal', date: '16 juillet 2025' },
              { cat: 'ASSOCIATIONS', titre: "Responsabilité des dirigeants bénévoles d'association : civile, pénale, financière", href: '/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere', date: '' },
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
