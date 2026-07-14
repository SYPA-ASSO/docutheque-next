import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Fin de contrat d'un salarié à domicile ou d'une assistante maternelle : licenciement, retrait d'enfant, les bonnes règles · Blog Cabinet Cholez-Pagotto`,
  description: `Employé de maison, garde d'enfants, assistante maternelle : la rupture du contrat par un particulier employeur obéit à des règles très différentes selon le statut du salarié. Procédure, préavis, indemnités, cas de l'emploi 24h/24.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Fin de contrat d'un salarié à domicile ou d'une assistante maternelle : licenciement, retrait d'enfant, les bonnes règles",
      "description": "Employé de maison, garde d'enfants, assistante maternelle : la rupture du contrat par un particulier employeur obéit à des règles très différentes selon le statut du salarié. Procédure, préavis, indemnités, cas de l'emploi 24h/24.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/fin-contrat-particulier-employeur-2026.webp",
      "datePublished": "2025-12-30",
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
      "url": "https://cholez-pagotto.fr/blog/fin-contrat-salarie-particulier-employeur-licenciement-retrait-enfant",
      "keywords": ["Particulier employeur", "Licenciement", "Assistante maternelle", "Retrait d'enfant", "Salarié à domicile", "Convention collective", "Droit du travail"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Peut-on licencier une assistante maternelle comme un autre salarié ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La rupture du contrat d'une assistante maternelle par le parent employeur ne s'analyse pas en licenciement au sens du Code du travail, mais en « retrait d'enfant », un mécanisme autonome organisé par le Code de l'action sociale et des familles. Il obéit à ses propres règles de préavis et d'indemnisation, distinctes du droit commun du licenciement."
          }
        },
        {
          "@type": "Question",
          "name": "Quel préavis pour un retrait d'enfant chez une assistante maternelle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le préavis dépend de l'ancienneté de l'enfant chez l'assistante maternelle : 8 jours si l'accueil dure depuis moins de 3 mois, 15 jours entre 3 mois et 1 an, et 1 mois à partir d'un an d'ancienneté. L'inobservation du préavis donne lieu à une indemnité compensatrice équivalente au salaire qu'aurait perçu l'assistante maternelle pendant cette période."
          }
        },
        {
          "@type": "Question",
          "name": "Un licenciement verbal d'un employé de maison est-il valable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le retrait des clés, l'arrêt des plannings ou la remise d'un solde de tout compte sans lettre recommandée constituent un licenciement irrégulier, systématiquement requalifié par les juges en licenciement sans cause réelle et sérieuse, avec condamnation de l'employeur à indemniser le salarié."
          }
        },
        {
          "@type": "Question",
          "name": "Comment sont rémunérées les heures de présence de nuit d'un salarié logé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depuis la convention collective du 15 mars 2021, la présence de nuit est rémunérée par une indemnité forfaitaire au moins égale à un quart du salaire contractuel pour une durée de travail effectif équivalente, portée à un tiers si le salarié intervient au moins deux fois dans la nuit, et à l'intégralité du salaire s'il intervient au moins quatre fois."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Fin de contrat d'un salarié du particulier employeur" }
      ]
    }
  ]
}

export default function ArticleFinContratParticulierEmployeur2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Fin de contrat d'un salarié du particulier employeur</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PARTICULIER EMPLOYEUR</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Fin de contrat d'un salarié à domicile ou d'une assistante maternelle : licenciement, retrait d'enfant, les bonnes règles</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 30 décembre 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 21 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/fin-contrat-particulier-employeur-2026.webp"
                alt="Fin de contrat d'un salarié à domicile ou d'une assistante maternelle : licenciement, retrait d'enfant, les bonnes règles"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#deux-regimes" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Deux régimes selon le statut du salarié</a></li>
                <li><a href="#licenciement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le licenciement d'un salarié à domicile : cause réelle et sérieuse</a></li>
                <li><a href="#procedure" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La procédure à respecter</a></li>
                <li><a href="#indemnites-domicile" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Préavis, indemnités et documents de fin de contrat</a></li>
                <li><a href="#cas-particuliers" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Cas particuliers : inaptitude, décès, CDD, rupture conventionnelle</a></li>
                <li><a href="#retrait-enfant" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Assistante maternelle : le retrait d'enfant</a></li>
                <li><a href="#pas-rupture-conventionnelle" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5", paddingLeft: "12px"}}>→ Absence de rupture conventionnelle</a></li>
                <li><a href="#indemnites-assmat" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Préavis et indemnités du retrait d'enfant</a></li>
                <li><a href="#24h24" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Emplois 24h/24 : présence responsable et présence de nuit</a></li>
                <li><a href="#risques" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IX. Risques contentieux et bonnes pratiques</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Se séparer d'un employé de maison, d'une garde d'enfants à domicile ou d'une assistante maternelle ne suit pas les mêmes règles que dans une entreprise classique. Le particulier employeur n'est pas un employeur comme les autres : il agit dans le cadre de sa vie privée, à son domicile, et le droit lui a construit un cadre spécifique, largement conventionnel plutôt que fondé sur le droit commun du licenciement.</p>
                <p style={{marginBottom: '1rem'}}>Ce cadre change radicalement selon le statut exact du salarié : un employé de maison ou une garde d'enfants au domicile des parents se licencie, une assistante maternelle qui accueille l'enfant à son propre domicile fait l'objet d'un « retrait d'enfant », mécanisme entièrement différent. Cet article distingue ces deux régimes, détaille la procédure et les indemnités applicables à chacun, et traite spécifiquement le cas des emplois en présence continue (24h/24).</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}pour un employé de maison ou une garde d'enfants au domicile des parents, c'est un licenciement conventionnel avec cause réelle et sérieuse, procédure stricte et indemnités à partir de 8 mois d'ancienneté ; pour une assistante maternelle, c'est un retrait d'enfant encadré par le Code de l'action sociale et des familles, avec un préavis de 8 jours à 1 mois selon l'ancienneté et une indemnité de rupture spécifique dès 9 mois d'ancienneté.
                  </p>
                </div>
              </section>

              <section id="deux-regimes">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Deux régimes selon le statut du salarié
                </h2>
                <p style={{marginBottom: '1rem'}}>Les salariés du particulier employeur (employé de maison, garde d'enfants à domicile, auxiliaire de vie) relèvent du titre du Code du travail consacré aux salariés du particulier employeur, qui ne rend applicable qu'un nombre limité de dispositions générales (non-discrimination, harcèlement, congés payés) et renvoie l'essentiel à une convention collective dédiée : la <strong>convention collective nationale des particuliers employeurs et de l'emploi à domicile du 15 mars 2021</strong> (IDCC 3239), entrée en vigueur le 1er janvier 2022, qui a fusionné les anciennes conventions des salariés du particulier employeur (1999) et des assistants maternels du particulier employeur (2004).</p>
                <p style={{marginBottom: '1rem'}}>Les assistantes maternelles employées par des particuliers relèvent, elles, d'un régime distinct fixé par le <strong>Code de l'action sociale et des familles (CASF)</strong>, complété par le socle spécifique « assistants maternels » de la même convention collective de 2021. Le CASF dresse la liste limitative des dispositions du Code du travail qui leur sont applicables ; les règles de licenciement du Code du travail n'en font pas partie.</p>
                <p style={{marginBottom: '1rem'}}>Cette distinction n'est pas un détail technique : pour un salarié à domicile classique, on parle de <strong>licenciement</strong>, soumis à une procédure conventionnelle stricte ; pour une assistante maternelle, la rupture par le parent employeur prend la forme d'un <strong>retrait d'enfant</strong>, qui ne s'analyse pas en licenciement au sens du Code du travail, même s'il produit des effets voisins (préavis, indemnités, dommages-intérêts en cas d'abus).</p>
              </section>

              <section id="licenciement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le licenciement d'un salarié à domicile : cause réelle et sérieuse
                </h2>
                <p style={{marginBottom: '1rem'}}>La convention collective de 2021 prévoit que le contrat à durée indéterminée peut être rompu par l'employeur pour tout motif constituant une <strong>cause réelle et sérieuse</strong>. Constituent notamment une cause réelle et sérieuse : un changement de situation de la famille rendant le poste inutile (déménagement, scolarisation de l'enfant, modification du mode de garde, perte d'emploi du parent, difficultés financières), une mésentente grave ou une perte de confiance dès lors que les faits sont matériellement établis et détaillés dans la lettre, ou des fautes disciplinaires pouvant aller jusqu'à la faute grave.</p>
                <p style={{marginBottom: '1rem'}}>À l'inverse, l'absence de motif précis dans la lettre, ou des motifs vagues et invérifiables, entraînent la qualification de licenciement sans cause réelle et sérieuse. Les motifs discriminatoires (grossesse, état de santé, origine, activités syndicales) restent prohibés par les dispositions générales de non-discrimination, applicables à tous les salariés quel que soit leur statut.</p>
              </section>

              <section id="procedure">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La procédure à respecter
                </h2>
                <p style={{marginBottom: '1rem'}}>La convention collective de 2021 impose, quel que soit le motif du licenciement (hors décès de l'employeur), une procédure précise que les cours d'appel sanctionnent sévèrement en cas de manquement :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Convocation à un entretien préalable</strong>, par lettre recommandée ou remise en main propre contre décharge, indiquant l'objet, la date, l'heure et le lieu de l'entretien ; les règles de droit commun sur l'assistance du salarié par un conseiller ne s'appliquent pas, le domicile du particulier n'étant pas une entreprise ;</li>
                  <li><strong>Entretien préalable</strong>, qui peut se tenir à partir du 4e jour ouvrable suivant la remise ou la première présentation de la convocation, au cours duquel l'employeur expose les motifs envisagés et recueille les explications du salarié ;</li>
                  <li><strong>Notification du licenciement</strong> par lettre recommandée avec avis de réception, adressée au plus tôt le 4e jour ouvrable et au plus tard le 30e jour ouvrable à minuit suivant l'entretien (ou la date à laquelle il aurait dû se tenir) ; la lettre doit préciser le motif du licenciement et reposer sur des éléments matériellement vérifiables. La date de première présentation fixe le point de départ du préavis.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Tout manquement à cette procédure (absence d'entretien, lettre trop précoce ou tardive, motif insuffisamment précisé) constitue une irrégularité de procédure ouvrant droit à une indemnité autonome, plafonnée à un mois de salaire en application de l'article L.&nbsp;1235-2 du Code du travail, sans préjudice des dommages-intérêts si la rupture est en plus dépourvue de cause réelle et sérieuse.</p>
              </section>

              <section id="indemnites-domicile">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Préavis, indemnités et documents de fin de contrat
                </h2>
                <p style={{marginBottom: '1rem'}}>La durée du <strong>préavis</strong> est fixée par la convention collective selon l'ancienneté du salarié. En cas de faute grave, aucun préavis n'est dû ; en cas de dispense de préavis à l'initiative de l'employeur, une indemnité compensatrice de préavis est due (article L.&nbsp;1234-5 du Code du travail).</p>
                <p style={{marginBottom: '1rem'}}>L'<strong>indemnité de licenciement</strong>, prévue par l'article L.&nbsp;1234-9 du Code du travail et reprise par la convention collective de 2021, est due sauf faute grave dès <strong>8 mois d'ancienneté continue</strong> au service du même employeur. Elle se calcule à raison d'un quart de mois de salaire mensuel brut moyen par année d'ancienneté pour les 10 premières années, puis d'un tiers de mois par année au-delà de 10 ans.</p>
                <p style={{marginBottom: '1rem'}}>Le salarié a par ailleurs droit à 2,5 jours ouvrables de congés payés par mois de travail effectif ; si la rupture intervient avant la prise de tous les congés acquis, une <strong>indemnité compensatrice de congés payés</strong> est due.</p>
                <p style={{marginBottom: '1rem'}}>Au terme du contrat, le particulier employeur doit remettre un certificat de travail, une attestation destinée à France Travail, et un reçu pour solde de tout compte détaillant les sommes versées. Le défaut ou le retard de remise de ces documents peut, en cas de contentieux, justifier une condamnation à dommages-intérêts distincte.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'erreur la plus fréquente.</strong>{' '}Le licenciement verbal, retrait des clés, arrêt des plannings, solde de tout compte remis sans lettre, est systématiquement requalifié par les juges en licenciement sans cause réelle et sérieuse, avec condamnation de l'employeur à l'ensemble des indemnités (préavis, licenciement, dommages-intérêts).
                  </p>
                </div>
              </section>

              <section id="cas-particuliers">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Cas particuliers : inaptitude, décès, CDD, rupture conventionnelle
                </h2>
                <p style={{marginBottom: '1rem'}}><strong>Inaptitude médicale</strong> : l'obligation de reclassement, et à défaut le licenciement pour inaptitude, suivent les principes du droit commun, avec reprise du versement du salaire si, un mois après la visite de reprise, le salarié n'est ni reclassé ni licencié.</p>
                <p style={{marginBottom: '1rem'}}><strong>Décès du particulier employeur</strong> : le contrat à durée indéterminée prend fin de plein droit à la date du décès. Les héritiers ou le conjoint survivant doivent notifier la rupture ; les indemnités de préavis, de licenciement et de congés payés restent dues selon l'ancienneté du salarié.</p>
                <p style={{marginBottom: '1rem'}}><strong>Contrat à durée déterminée</strong> : la rupture anticipée par l'employeur n'est possible qu'en cas de faute grave, force majeure ou inaptitude constatée ; à défaut, le salarié peut réclamer l'intégralité des rémunérations restant dues jusqu'au terme du contrat, en application de l'article L.&nbsp;1243-4 du Code du travail.</p>
                <p style={{marginBottom: '1rem'}}><strong>Rupture conventionnelle</strong> : elle reste ouverte aux salariés du particulier employeur en CDI, sous réserve du respect des formes de droit commun (entretiens, convention signée, délai de rétractation, homologation par l'administration). La convention collective de 2021 précise désormais que l'indemnité de rupture conventionnelle ne peut être inférieure à l'indemnité légale de licenciement.</p>
              </section>

              <section id="retrait-enfant">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Assistante maternelle : le retrait d'enfant, un mécanisme autonome
                </h2>
                <p style={{marginBottom: '1rem'}}>Le CASF organise, pour les assistantes maternelles employées par des particuliers, un régime de rupture entièrement distinct du licenciement de droit commun. Le parent employeur qui décide de ne plus confier l'enfant, dès lors qu'il l'employait depuis au moins 3 mois, doit notifier sa décision par <strong>lettre recommandée avec demande d'avis de réception</strong> (article L.&nbsp;423-24 du CASF). La date de présentation de cette lettre fixe le point de départ du préavis éventuellement dû.</p>
                <p style={{marginBottom: '1rem'}}>Point essentiel confirmé de façon constante par la Cour de cassation : le retrait d'enfant <strong>n'a pas à être motivé</strong>. Le parent peut, en principe, retirer son enfant pour tout motif (changement de mode de garde, déménagement, difficultés financières, préférence pour une garde par un parent), à condition de respecter le préavis et les indemnités, et à condition que le motif ne soit pas lui-même illicite.</p>
                <p style={{marginBottom: '1rem'}}>Même si le retrait d'enfant ne s'analyse pas en licenciement, il peut être jugé abusif ou fondé sur un motif illicite. Un retrait pendant la grossesse sans justification d'un motif étranger à la maternité est nul, la protection de la maternité (article L.&nbsp;1225-4 du Code du travail) s'imposant au droit de retrait ; un retrait reposant sur un motif discriminatoire relève du régime général de la non-discrimination. À l'inverse, la faute grave de l'assistante maternelle (violences, négligences graves) justifie la suppression immédiate de la garde, sans préavis ni indemnités, à charge pour l'employeur d'en rapporter la preuve.</p>

                <h3 id="pas-rupture-conventionnelle" style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Absence de rupture conventionnelle pour les assistantes maternelles</h3>
                <p style={{marginBottom: '1rem'}}>Un point mérite d'être souligné tant la confusion est fréquente : la <strong>rupture conventionnelle</strong>, telle qu'organisée par les articles L.&nbsp;1237-11 et suivants du Code du travail, n'existe pas pour une assistante maternelle employée par un particulier. L'article L.&nbsp;423-2 du CASF énumère limitativement les dispositions du Code du travail applicables aux assistants maternels employés par des personnes de droit privé (discriminations, harcèlement, égalité professionnelle, protection de la maternité), et les règles relatives à la rupture du contrat de travail, y compris la rupture conventionnelle, n'y figurent pas. La Cour de cassation l'a rappelé explicitement : les règles du Code du travail relatives à la rupture du contrat ne sont pas de celles que l'article L.&nbsp;423-2 du CASF rend applicables aux assistants maternels employés par des particuliers (Cour de cassation, chambre sociale, 31 mai 2012, n°&nbsp;10-24.497, publié au Bulletin).</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, aucun formulaire de rupture conventionnelle (TéléRC ou Cerfa) ne peut être valablement utilisé pour mettre fin au CDI d'une assistante maternelle. Une convention qualifiée de « rupture conventionnelle » signée entre un parent employeur et une assistante maternelle sera, en pratique, requalifiée selon son contenu réel en retrait d'enfant ou en démission, avec les conséquences propres à chacun de ces mécanismes en matière de préavis, d'indemnités et de droits à l'assurance chômage.</p>
                <p style={{marginBottom: '1rem'}}>Les modes de rupture ouverts pour une assistante maternelle employée par un particulier restent ainsi limités à ceux prévus par le CASF et la convention collective :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>à l'initiative du parent employeur : le <strong>retrait d'enfant</strong>, notifié par lettre recommandée, avec préavis et indemnité de rupture sauf faute grave, ou la rupture consécutive à la suspension ou au retrait de l'agrément ;</li>
                  <li>à l'initiative de l'assistante maternelle : la <strong>démission</strong>, c'est-à-dire la décision de ne plus garder l'enfant, avec respect d'un préavis identique dans ses paliers à celui du retrait d'enfant ;</li>
                  <li>de façon automatique ou pour cause extérieure : l'arrivée du terme d'un CDD, ou le décès de l'enfant confié ;</li>
                  <li>par voie judiciaire, à l'initiative de l'assistante maternelle : la prise d'acte ou la résiliation judiciaire devant le conseil de prud'hommes en cas de manquement grave de l'employeur (non-paiement du salaire, absence répétée de travail fourni), le juge appréciant alors les torts respectifs des parties.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour une assistante maternelle du particulier employeur, la fin de contrat doit donc impérativement s'analyser au regard des seuls mécanismes prévus par le Code de l'action sociale et des familles et par la convention collective de la branche, sous le contrôle du juge prud'homal en cas d'abus ou de motif illicite, à l'exclusion de toute rupture conventionnelle au sens du Code du travail.</p>
              </section>

              <section id="indemnites-assmat">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Préavis et indemnités du retrait d'enfant
                </h2>
                <p style={{marginBottom: '1rem'}}>Le préavis applicable au retrait d'enfant se calcule en trois paliers selon l'ancienneté de l'accueil, sauf clause plus favorable du contrat ou faute grave :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>8 jours</strong> si l'enfant est accueilli depuis moins de 3 mois ;</li>
                  <li><strong>15 jours</strong> entre 3 mois et 1 an d'ancienneté ;</li>
                  <li><strong>1 mois</strong> à partir d'un an d'ancienneté.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>L'inobservation de ce préavis donne lieu au versement d'une <strong>indemnité compensatrice</strong> équivalente au salaire qu'aurait perçu l'assistante maternelle pendant cette période.</p>
                <p style={{marginBottom: '1rem'}}>Sauf faute grave ou lourde, une <strong>indemnité de rupture</strong> est due à l'assistante maternelle justifiant d'au moins <strong>9 mois d'ancienneté</strong> avec ce même employeur. Son montant est égal à <strong>1/80e du total des salaires bruts perçus</strong> pendant toute la durée du contrat. Ce mécanisme, propre aux assistantes maternelles employées directement par un particulier, ne doit pas être confondu avec l'indemnité légale de licenciement prévue par l'article L.&nbsp;423-10 du CASF (calculée sur la moyenne des 6 meilleurs mois de salaire, exigible à partir de 2 ans d'ancienneté), qui s'applique uniquement lorsque l'assistante maternelle est employée par une <strong>personne morale de droit privé</strong> (crèche familiale, association gestionnaire), et non par un particulier.</p>
                <p style={{marginBottom: '1rem'}}>L'assistante maternelle a également droit, comme tout salarié, à une indemnité compensatrice de congés payés pour les congés acquis non pris. Enfin, lorsque la rupture résulte d'une suspension ou d'un retrait de l'agrément de l'assistante maternelle, aucun préavis n'est dû, la situation échappant à la seule volonté du parent employeur.</p>
              </section>

              <section id="24h24">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Emplois 24h/24 : présence responsable et présence de nuit
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les auxiliaires de vie ou gardes d'enfants en présence quasi continue au domicile, la convention collective distingue trois régimes qu'il est indispensable de préciser au contrat :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Travail effectif</strong> : le salarié est à la disposition de l'employeur, suit ses directives, ne peut vaquer à des occupations personnelles ;</li>
                  <li><strong>Présence responsable</strong> : le salarié peut utiliser son temps pour lui-même mais doit rester vigilant et prêt à intervenir ; une heure de présence responsable équivaut conventionnellement à <strong>2/3 d'une heure de travail effectif</strong> ;</li>
                  <li><strong>Présence de nuit</strong> : obligation de dormir sur place dans une pièce séparée, sans travail habituel, la plage horaire de référence étant comprise entre 20h et 6h30, dans la limite de 12 heures consécutives et, en principe, de 5 nuits consécutives.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>La présence de nuit est rémunérée par une <strong>indemnité forfaitaire</strong> dont le montant, sous l'empire de la convention collective de 2021 actuellement en vigueur, ne peut être inférieur à <strong>1/4 du salaire contractuel</strong> pour une durée de travail effectif équivalente. Cette indemnité est portée à 1/3 si le salarié est appelé à intervenir au moins 2 fois dans la nuit, et à l'intégralité du salaire contractuel si les interventions atteignent au moins 4 fois ; dans ce dernier cas, les heures de présence de nuit sont d'ailleurs requalifiées en heures de travail effectif et le contrat doit être révisé en conséquence.</p>
                <p style={{marginBottom: '1rem'}}>Au moment de la rupture du contrat, ces qualifications ont un impact direct : le salaire de référence servant au calcul de l'indemnité de licenciement et de préavis doit intégrer la rémunération des heures supplémentaires, des présences responsables et des nuits. Les juridictions prud'homales sanctionnent fréquemment les particuliers employeurs pour sous-déclaration du temps de travail effectif ou mauvaise qualification des heures de nuit, avec condamnation à des rappels de salaire et, parfois, résiliation judiciaire du contrat aux torts de l'employeur.</p>
              </section>

              <section id="risques">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IX. Risques contentieux et bonnes pratiques
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour un salarié à domicile classique, les principaux risques contentieux tiennent au licenciement verbal, au manque de précision de la lettre de licenciement, au non-respect de la procédure conventionnelle, ou à la sous-déclaration des heures de présence responsable et de nuit. Pour une assistante maternelle, les risques portent sur l'absence de lettre recommandée de retrait d'enfant, le retrait verbal, ou un retrait fondé sur un motif illicite.</p>
                <p style={{marginBottom: '1rem'}}>Quelques bonnes pratiques limitent ces risques : identifier précisément le bon statut avant toute démarche (salarié du particulier employeur ou assistante maternelle agréée), se référer systématiquement à la version de la convention collective en vigueur à la date de la rupture, documenter les motifs par écrit avant toute décision, respecter scrupuleusement les étapes propres à chaque statut, et déclarer avec exactitude les heures de travail effectif, de présence responsable et de nuit tout au long du contrat.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Ne restez pas seul face à la procédure
                </h2>
                <p style={{marginBottom: '1rem'}}>Qualifier correctement le statut du salarié, choisir la bonne procédure et calculer les indemnités dues sont des étapes déterminantes pour sécuriser une fin de contrat, qu'on soit particulier employeur ou salarié.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'un courrier ou d'un calcul adapté à votre situation ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet propose des modèles de courriers prêts à personnaliser (convocation à entretien préalable, lettre de licenciement, lettre de retrait d'enfant) ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
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
                <p style={{marginBottom: '1rem'}}>Se séparer d'un salarié du particulier employeur impose de raisonner d'abord par statut : licenciement conventionnel, avec cause réelle et sérieuse et procédure stricte, pour les employés de maison, gardes d'enfants à domicile et auxiliaires de vie ; retrait d'enfant encadré par le CASF, avec préavis et indemnités propres, pour les assistantes maternelles. Un emploi en présence 24h/24 appelle, dans les deux cas, une vigilance accrue sur la qualification du temps de travail, car elle pèse lourdement sur le calcul des droits à la rupture et sur l'issue d'un éventuel contentieux.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Convention collective nationale des particuliers employeurs et de l'emploi à domicile du 15 mars 2021 (IDCC 3239), étendue par arrêté du 6 octobre 2021, en vigueur depuis le 1er janvier 2022</li>
                  <li>Code du travail, article L.&nbsp;1234-9 (indemnité légale de licenciement, seuil de 8 mois d'ancienneté)</li>
                  <li>Code du travail, article L.&nbsp;1234-5 (indemnité compensatrice de préavis)</li>
                  <li>Code du travail, article L.&nbsp;1235-2 (indemnité pour irrégularité de procédure)</li>
                  <li>Code du travail, article L.&nbsp;1243-4 (rupture anticipée du CDD à l'initiative de l'employeur)</li>
                  <li>Code du travail, article L.&nbsp;1225-4 (protection de la salariée enceinte)</li>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;423-2 (dispositions du Code du travail applicables aux assistants maternels)</li>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;423-24 (notification du retrait d'enfant par lettre recommandée)</li>
                  <li>Code de l'action sociale et des familles, articles L.&nbsp;423-25 à L.&nbsp;423-27 (préavis et indemnité compensatrice)</li>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;423-10 (indemnité légale de licenciement, applicable aux seuls assistants maternels employés par une personne morale de droit privé)</li>
                  <li>Code de l'action sociale et des familles, article L.&nbsp;423-2 (liste limitative des dispositions du Code du travail applicables aux assistants maternels employés par des personnes de droit privé)</li>
                  <li>Code du travail, articles L.&nbsp;1237-11 et suivants (rupture conventionnelle homologuée, régime inapplicable aux assistantes maternelles)</li>
                  <li>Cour de cassation, chambre sociale, 31 mai 2012, n°&nbsp;10-24.497, publié au Bulletin (les règles de rupture du contrat de travail, dont la rupture conventionnelle, ne figurent pas parmi les dispositions du Code du travail applicables aux assistants maternels employés par des particuliers)</li>
                  <li>Convention collective nationale des particuliers employeurs et de l'emploi à domicile du 15 mars 2021, article 121-1 (indemnité de rupture des assistants maternels, 1/80e des salaires bruts, dès 9 mois d'ancienneté)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on licencier une assistante maternelle comme un autre salarié ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La rupture du contrat d'une assistante maternelle par le parent employeur ne s'analyse pas en licenciement au sens du Code du travail, mais en « retrait d'enfant », un mécanisme autonome organisé par le Code de l'action sociale et des familles. Il obéit à ses propres règles de préavis et d'indemnisation, distinctes du droit commun du licenciement.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel préavis pour un retrait d'enfant chez une assistante maternelle ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le préavis dépend de l'ancienneté de l'enfant chez l'assistante maternelle : 8 jours si l'accueil dure depuis moins de 3 mois, 15 jours entre 3 mois et 1 an, et 1 mois à partir d'un an d'ancienneté. L'inobservation du préavis donne lieu à une indemnité compensatrice équivalente au salaire qu'aurait perçu l'assistante maternelle pendant cette période.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un licenciement verbal d'un employé de maison est-il valable ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le retrait des clés, l'arrêt des plannings ou la remise d'un solde de tout compte sans lettre recommandée constituent un licenciement irrégulier, systématiquement requalifié par les juges en licenciement sans cause réelle et sérieuse, avec condamnation de l'employeur à indemniser le salarié.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment sont rémunérées les heures de présence de nuit d'un salarié logé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Depuis la convention collective du 15 mars 2021, la présence de nuit est rémunérée par une indemnité forfaitaire au moins égale à un quart du salaire contractuel pour une durée de travail effectif équivalente, portée à un tiers si le salarié intervient au moins deux fois dans la nuit, et à l'intégralité du salaire s'il intervient au moins quatre fois.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Se séparer d'un salarié</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles de convocation, de lettre de licenciement et de retrait d'enfant à télécharger dans la Docuthèque.</p>
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
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Particulier employeur</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Licenciement</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Assistante maternelle</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Retrait d'enfant</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>2026</span>
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
              { cat: 'ASSISTANTES MATERNELLES', titre: "Assistante maternelle accusée à tort : quels recours face à la calomnie ?", href: '/blog/assistante-maternelle-accusee-a-tort-calomnie-recours', date: '16 janvier 2025' },
              { cat: 'DROIT PÉNAL', titre: "Le chantage en droit français : le comprendre, le reconnaître, réagir", href: '/blog/chantage-en-droit-francais-comprendre-reconnaitre-reagir', date: '15 janvier 2025' },
              { cat: 'DROIT DU TRAVAIL', titre: "Saisie sur salaire : décryptage complet de la procédure et du cadre légal", href: '/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal', date: '16 juillet 2025' },
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
