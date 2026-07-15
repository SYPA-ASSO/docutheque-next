import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Acre 2026 : conditions d'éligibilité, montant de l'exonération et délai de demande à l'Urssaf · Blog Cabinet Cholez-Pagotto`,
  description: `Acre 2026 : qui peut en bénéficier, quel montant d'exonération de cotisations sociales, et sous quel délai déposer sa demande auprès de l'Urssaf depuis la réforme du 1er janvier 2026. Le guide à jour.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Acre 2026 : conditions d'éligibilité, montant de l'exonération et délai de demande à l'Urssaf",
      "description": "Acre 2026 : qui peut en bénéficier, quel montant d'exonération de cotisations sociales, et sous quel délai déposer sa demande auprès de l'Urssaf depuis la réforme du 1er janvier 2026. Le guide à jour.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/acre-2026-createurs-entreprise.webp",
      "datePublished": "2026-07-07",
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
      "url": "https://cholez-pagotto.fr/blog/acre-aide-createurs-repreneurs-entreprise-2026",
      "keywords": ["Acre", "Création d'entreprise", "Urssaf", "Exonération cotisations sociales", "Micro-entreprise", "LFSS 2026"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le délai pour demander l'Acre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depuis le 1er janvier 2026, la demande doit être déposée auprès de l'Urssaf au plus tard le 60e jour suivant la date de début d'activité mentionnée sur le justificatif de création délivré par le guichet unique. Passé ce délai, le bénéfice de l'exonération est définitivement perdu, même si toutes les conditions d'éligibilité sont remplies."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le montant de l'exonération Acre en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'exonération est plafonnée à 25 % des cotisations dues lorsque les revenus sont inférieurs ou égaux à 36 045 euros (75 % du plafond annuel de la Sécurité sociale). Elle devient dégressive entre 36 045 et 48 060 euros, puis nulle au-delà. Pour les micro-entrepreneurs, elle prend la forme d'un taux de cotisation minoré, fixé depuis le 1er juillet 2026 à 75 % du taux de droit commun."
          }
        },
        {
          "@type": "Question",
          "name": "Qui peut bénéficier de l'Acre depuis 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'aide est réservée à des publics définis par la loi : demandeurs d'emploi indemnisés ou inscrits depuis 6 mois, bénéficiaires du RSA ou de l'ASS, personnes de 18 à 26 ans, personnes de moins de 30 ans en situation de handicap, salariés reprenant une entreprise en difficulté, créateurs en quartier prioritaire de la ville ou en zone France ruralités revitalisation, bénéficiaires de la PreParE, entre autres, sous réserve de ne pas avoir bénéficié de l'Acre au cours des 3 années précédentes."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire si l'Urssaf ne répond pas à ma demande d'Acre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'Urssaf dispose d'un délai de 30 jours pour instruire la demande. En l'absence de réponse dans ce délai, le silence de l'administration vaut acceptation tacite de l'Acre."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Acre 2026" }
      ]
    }
  ]
}

export default function ArticleAcre2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Acre 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMALITÉS</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>RÉFORME 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Acre 2026 : conditions d'éligibilité, montant de l'exonération et délai de demande à l'Urssaf</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 7 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 13 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/acre-2026-createurs-entreprise.webp"
                alt="Acre 2026 : conditions d'éligibilité, montant de l'exonération et délai de demande à l'Urssaf"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#nature" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Qu'est-ce que l'Acre ?</a></li>
                <li><a href="#montant" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Durée et montant de l'exonération</a></li>
                <li><a href="#cotisations" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Quelles cotisations sont concernées ?</a></li>
                <li><a href="#eligibilite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Qui peut en bénéficier depuis 2026 ?</a></li>
                <li><a href="#conditions-statut" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Conditions complémentaires selon le statut</a></li>
                <li><a href="#demande" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Déposer sa demande : le délai de 60 jours</a></li>
                <li><a href="#reponse" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Réponse de l'Urssaf, refus et recours</a></li>
                <li><a href="#autres-aides" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. À ne pas confondre : l'Arce et les autres aides</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>L'aide à la création ou à la reprise d'entreprise (Acre, ex-Accre) a longtemps été un réflexe quasi automatique pour tout créateur d'entreprise. Ce n'est plus le cas depuis le 1er janvier 2026 : la loi de financement de la Sécurité sociale pour 2026 a resserré les conditions d'accès, plafonné le montant de l'exonération et surtout supprimé son attribution automatique. Un créateur qui ne fait rien ne bénéficie plus d'aucune exonération, même s'il remplit toutes les conditions.</p>
                <p style={{marginBottom: '1rem'}}>Ce guide fait le point sur le dispositif tel qu'il s'applique aujourd'hui, avec un accent particulier sur le point le plus souvent négligé : le délai de 60 jours pour déposer sa demande.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}depuis le 1er janvier 2026, l'Acre est réservée à des publics définis par la loi, plafonnée à 25 % des cotisations dues (contre une exonération totale ou dégressive auparavant), et doit impérativement faire l'objet d'une demande auprès de l'Urssaf dans les 60 jours suivant le début d'activité, sous peine de perte définitive du bénéfice de l'aide.
                  </p>
                </div>
              </section>

              <section id="nature">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Qu'est-ce que l'Acre ?
                </h2>
                <p style={{marginBottom: '1rem'}}>L'Acre prend la forme d'une exonération personnelle de cotisations sociales pendant le début d'activité du créateur ou du repreneur d'entreprise (article L.&nbsp;131-6-4 du Code de la sécurité sociale). Elle allège les charges sociales dues sur les revenus professionnels au cours de la période de démarrage, moment où la trésorerie est généralement la plus tendue.</p>
                <p style={{marginBottom: '1rem'}}>Elle ne doit pas être confondue avec l'<strong>Arce</strong>, une aide distincte réservée aux demandeurs d'emploi indemnisés qui créent une entreprise, et qui consiste à percevoir une partie de ses allocations chômage sous forme de capital plutôt que de versements mensuels (voir section&nbsp;VIII).</p>
              </section>

              <section id="montant">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Durée et montant de l'exonération
                </h2>
                <p style={{marginBottom: '1rem'}}>La durée d'application diffère selon le régime social choisi à la création. Pour les entrepreneurs individuels au régime réel et les dirigeants de société, l'exonération court pendant <strong>12 mois</strong> à compter de la date de création. Pour les entrepreneurs individuels relevant du régime de la micro-entreprise, elle s'applique jusqu'à la fin du <strong>3e trimestre civil</strong> suivant celui du début d'activité déclarée, ce qui signifie concrètement qu'une création en tout début de trimestre est plus avantageuse qu'une création en fin de trimestre, à date d'expiration égale.</p>
                <p style={{marginBottom: '1rem'}}>Depuis la loi de financement de la Sécurité sociale pour 2026, précisée par le <strong>décret n°&nbsp;2026-69 du 6 février 2026</strong>, le montant de l'exonération a été profondément revu à la baisse. Avant cette réforme, l'exonération était totale pour les revenus inférieurs à 75 % du plafond annuel de la Sécurité sociale (Pass), puis dégressive jusqu'au Pass. Désormais, pour les créations et reprises intervenant à compter du 1er janvier 2026 :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>l'exonération est <strong>plafonnée à 25 %</strong> des cotisations dues, lorsque les revenus n'excèdent pas 36 045 euros en 2026 (75 % du Pass) ;</li>
                  <li>elle devient <strong>dégressive</strong> lorsque les revenus sont compris entre 36 045 et 48 060 euros (75 % à 100 % du Pass), selon une formule fixée par l'article D.&nbsp;131-6-1 du Code de la sécurité sociale ;</li>
                  <li>elle est <strong>nulle</strong> au-delà de 48 060 euros (100 % du Pass).</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour le micro-entrepreneur, l'aide prend la forme d'un <strong>taux de cotisation minoré</strong> plutôt que d'un pourcentage appliqué à des cotisations calculées séparément. Ce taux minoré, fixé à 50 % du taux de droit commun jusqu'au 30 juin 2026, est passé à <strong>75 % du taux de droit commun</strong> depuis le 1er juillet 2026 (soit une exonération ramenée de 50 % à 25 %), en application du même décret du 6 février 2026 :</p>
                <div style={{overflowX: 'auto', margin: '1rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#eff6ff'}}>
                        <th style={{textAlign: 'left', padding: '10px 14px', color: '#0f2d6e', fontWeight: '700', border: '1px solid #bfdbfe'}}>Secteur d'activité</th>
                        <th style={{textAlign: 'left', padding: '10px 14px', color: '#0f2d6e', fontWeight: '700', border: '1px solid #bfdbfe'}}>Taux applicable depuis le 1er juillet 2026</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#374151'}}>Achat/revente de marchandises, vente de denrées à consommer sur place, prestations d'hébergement (BIC)</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280', fontWeight: '600'}}>9,3 %</td>
                      </tr>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#374151'}}>Autres prestations de services commerciales et artisanales (BIC)</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280', fontWeight: '600'}}>15,9 %</td>
                      </tr>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#374151'}}>Autres prestations de services (BNC)</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280', fontWeight: '600'}}>19,2 %</td>
                      </tr>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#374151'}}>Activités libérales réglementées relevant de la Cipav (BNC)</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280', fontWeight: '600'}}>17,4 %</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af'}}>Ces taux s'appliquent jusqu'à la fin du 3e trimestre civil suivant celui de la date d'inscription. Un décalage de quelques jours dans la date de création peut donc changer significativement la durée réelle de l'avantage, selon que la création intervient en début ou en fin de trimestre.</p>
              </section>

              <section id="cotisations">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Quelles cotisations sont concernées ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Sont exonérées les cotisations, patronales et salariales pour les dirigeants assimilés salariés, correspondant à l'assurance maladie, maternité, invalidité et décès, aux prestations familiales, et à l'assurance vieillesse de base.</p>
                <p style={{marginBottom: '1rem'}}>Restent en revanche dues, sans exonération possible : la CSG-CRDS, la retraite complémentaire et la contribution à la formation professionnelle. Les dirigeants assimilés salariés continuent par ailleurs de cotiser intégralement au titre des accidents du travail, du Fonds national d'aide au logement (Fnal), du versement mobilité, de la contribution solidarité autonomie et de la cotisation prévoyance des cadres.</p>
              </section>

              <section id="eligibilite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Qui peut en bénéficier depuis 2026 ?
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le changement le plus structurant de la réforme : l'Acre n'est plus un dispositif quasi général ouvert à tout créateur, mais une aide ciblée sur des publics identifiés par la loi. Depuis le 1er janvier 2026, seuls peuvent en bénéficier :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>les demandeurs d'emploi indemnisés ;</li>
                  <li>les demandeurs d'emploi non indemnisés inscrits à France Travail 6 mois au cours des 18 derniers mois ;</li>
                  <li>les bénéficiaires de l'allocation de solidarité spécifique (ASS) ou du RSA ;</li>
                  <li>les personnes âgées de 18 à moins de 26 ans ;</li>
                  <li>les personnes de moins de 30 ans en situation de handicap, ou qui ne remplissent pas la condition de durée d'activité antérieure pour ouvrir des droits à l'allocation chômage ;</li>
                  <li>les salariés ou personnes licenciées d'une entreprise en sauvegarde, redressement ou liquidation judiciaire qui reprennent tout ou partie de cette entreprise ;</li>
                  <li>les titulaires d'un contrat d'appui au projet d'entreprise (Cape), sous réserve de remplir l'une des conditions précédentes à la date de conclusion du contrat ;</li>
                  <li>les créateurs ou repreneurs implantés dans un quartier prioritaire de la politique de la ville (QPV) ;</li>
                  <li>les bénéficiaires de la prestation partagée d'éducation de l'enfant (PreParE) ;</li>
                  <li>les créateurs ou repreneurs implantés en zone France ruralités revitalisation (ZFRR).</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Un créateur qui ne rentre dans aucune de ces catégories ne peut plus prétendre à l'Acre, quel que soit son projet.</p>
              </section>

              <section id="conditions-statut">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Conditions complémentaires selon le statut
                </h2>
                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Micro-entrepreneurs</h3>
                <p style={{marginBottom: '1rem'}}>Le micro-entrepreneur ne doit pas avoir bénéficié de l'Acre au cours des 3 années précédentes. En cas de cessation puis de reprise d'activité sous le régime micro, l'Urssaf exige en outre le respect d'un délai de carence correspondant à une année civile complète, afin de s'assurer qu'il s'agit bien d'une nouvelle création.</p>
                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Autres travailleurs indépendants</h3>
                <p style={{marginBottom: '1rem'}}>Les autres travailleurs indépendants doivent être en début d'activité et ne pas avoir bénéficié de l'Acre dans les 3 années précédentes. En cas de création ou de reprise sous forme de société, le nouvel entrepreneur doit en outre exercer un contrôle effectif sur celle-ci, selon l'une des trois configurations suivantes : détenir seul ou avec sa famille proche plus de 50 % du capital, dont au moins 35 % à titre personnel ; être dirigeant et détenir au moins 1/3 du capital, dont au moins 25 % à titre personnel, sous réserve qu'aucun associé extérieur à la famille ne détienne plus de la moitié du capital ; ou détenir avec les autres demandeurs de l'aide plus de 50 % du capital, à condition que l'un d'eux soit dirigeant et que chaque demandeur détienne au moins 1/10e de la part du principal actionnaire.</p>
              </section>

              <section id="demande">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Déposer sa demande : le délai de 60 jours à ne pas manquer
                </h2>
                <p style={{marginBottom: '1rem'}}>Depuis le 1er janvier 2026, tous les indépendants souhaitant bénéficier de l'Acre, micro-entrepreneurs compris, doivent impérativement en faire la demande auprès de l'Urssaf. En pratique, la démarche se déroule en quatre étapes : télécharger le justificatif de création d'activité une fois la déclaration finalisée sur le site du guichet unique des formalités d'entreprises ; réunir les pièces justificatives correspondant à sa situation d'éligibilité (par exemple la notification d'ouverture de droits pour un demandeur d'emploi indemnisé) ; télécharger et compléter le formulaire correspondant à son statut (travailleur indépendant, créateur assimilé salarié, ou auto-entrepreneur) sur le site de l'Urssaf ; puis transmettre l'ensemble via la messagerie du site autoentrepreneur.urssaf.fr ou urssaf.fr.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le point à ne surtout pas manquer.</strong>{' '}La demande doit être introduite au plus tard le <strong>60e jour</strong> suivant la date d'ouverture de l'activité telle que mentionnée par le justificatif de création délivré par le guichet unique (article D.&nbsp;131-6-1, IV, alinéa 2 du Code de la sécurité sociale). Passé ce délai, le bénéfice de l'Acre est <strong>définitivement perdu</strong> pour cette création ou reprise, même si toutes les conditions d'éligibilité sont par ailleurs remplies. Contrairement à l'ancien régime où l'aide pouvait s'appliquer automatiquement, l'absence de démarche dans ce délai n'est jamais rattrapable.
                  </p>
                </div>
              </section>

              <section id="reponse">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Réponse de l'Urssaf, refus et recours
                </h2>
                <p style={{marginBottom: '1rem'}}>La demande d'Acre est en principe traitée sous <strong>30 jours</strong>. En cas d'accord, une attestation est délivrée par l'Urssaf, disponible dans l'espace en ligne du créateur (site de l'Urssaf ou site dédié aux auto-entrepreneurs). En l'absence de réponse dans ce délai, le silence de l'Urssaf vaut <strong>acceptation tacite</strong> : c'est une garantie utile pour le créateur qui a respecté le délai de dépôt et transmis un dossier complet.</p>
                <p style={{marginBottom: '1rem'}}>En cas de rejet, l'Urssaf notifie et motive sa décision. Le créateur dispose alors d'un délai pour la contester devant la commission de recours amiable de l'Urssaf, puis, le cas échéant, devant le tribunal judiciaire compétent s'il estime le refus injustifié.</p>
              </section>

              <section id="autres-aides">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. À ne pas confondre : l'Arce et les autres aides
                </h2>
                <p style={{marginBottom: '1rem'}}>De nombreuses aides existent pour les créateurs d'entreprise, selon la situation personnelle, le secteur d'activité et la région. Certaines concernent spécifiquement les créateurs au chômage, comme l'<strong>Arce</strong>, qui permet de percevoir une partie de ses allocations chômage sous forme de capital plutôt qu'en versements mensuels. Le nouvel entrepreneur indemnisé par France Travail doit alors choisir entre solliciter l'Arce ou conserver le versement de tout ou partie de ses allocations chômage pendant la phase de démarrage. D'autres dispositifs s'adressent spécifiquement aux repreneurs d'entreprises. L'Acre et l'Arce ne s'excluent pas nécessairement l'une l'autre selon la situation, mais elles répondent à des logiques différentes : l'une allège les charges sociales, l'autre apporte un capital de départ.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Besoin d'être accompagné dans votre création d'entreprise ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Vérifier son éligibilité à l'Acre avant de créer ou reprendre une entreprise, choisir la bonne forme juridique et anticiper ses charges sociales réelles sont des étapes déterminantes pour la suite du projet.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'un accompagnement pour votre création d'entreprise ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet propose un accompagnement à la création d'entreprise (formalités offertes hors droits de greffe) ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/creation-entreprise" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Créer mon entreprise</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>L'Acre reste un levier réel pour réduire ses charges sociales en début d'activité, mais elle a changé de nature depuis le 1er janvier 2026 : réservée à des publics définis, plafonnée à 25 % des cotisations, et surtout conditionnée à une démarche active du créateur dans un délai de 60 jours. Vérifier son éligibilité avant de créer ou reprendre une entreprise, et ne pas laisser passer ce délai, conditionne désormais l'accès à l'aide bien plus qu'auparavant.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code du travail, articles L.&nbsp;5141-1 et suivants (aide à la création ou à la reprise d'entreprise)</li>
                  <li>Code de la sécurité sociale, article L.&nbsp;131-6-4 (principe de l'exonération de cotisations sociales)</li>
                  <li>Code de la sécurité sociale, article D.&nbsp;131-6-1 (formule de dégressivité, délai de 60 jours pour déposer la demande)</li>
                  <li>Code de la sécurité sociale, article D.&nbsp;131-6-3</li>
                  <li>Loi n°&nbsp;2025-1403 du 30 décembre 2025 de financement de la Sécurité sociale pour 2026, JORF du 31 décembre 2025 (réforme de l'Acre : conditions d'éligibilité resserrées, fin de l'automaticité, plafonnement de l'exonération)</li>
                  <li>Décret n°&nbsp;2026-69 du 6 février 2026 fixant le taux d'exonération prévu à l'article 23 de la loi n°&nbsp;2025-1403 du 30 décembre 2025 et adaptant le taux de cotisations sociales des micro-entrepreneurs</li>
                  <li>Site internet de l'Urssaf (urssaf.fr et autoentrepreneur.urssaf.fr)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit ou un conseiller de l'Urssaf reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le délai pour demander l'Acre ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Depuis le 1er janvier 2026, la demande doit être déposée auprès de l'Urssaf au plus tard le 60e jour suivant la date de début d'activité mentionnée sur le justificatif de création délivré par le guichet unique. Passé ce délai, le bénéfice de l'exonération est définitivement perdu, même si toutes les conditions d'éligibilité sont remplies.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le montant de l'exonération Acre en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'exonération est plafonnée à 25 % des cotisations dues lorsque les revenus sont inférieurs ou égaux à 36 045 euros (75 % du plafond annuel de la Sécurité sociale). Elle devient dégressive entre 36 045 et 48 060 euros, puis nulle au-delà. Pour les micro-entrepreneurs, elle prend la forme d'un taux de cotisation minoré, fixé depuis le 1er juillet 2026 à 75 % du taux de droit commun.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qui peut bénéficier de l'Acre depuis 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'aide est réservée à des publics définis par la loi : demandeurs d'emploi indemnisés ou inscrits depuis 6 mois, bénéficiaires du RSA ou de l'ASS, personnes de 18 à 26 ans, personnes de moins de 30 ans en situation de handicap, salariés reprenant une entreprise en difficulté, créateurs en quartier prioritaire de la ville ou en zone France ruralités revitalisation, bénéficiaires de la PreParE, entre autres, sous réserve de ne pas avoir bénéficié de l'Acre au cours des 3 années précédentes.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire si l'Urssaf ne répond pas à ma demande d'Acre ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'Urssaf dispose d'un délai de 30 jours pour instruire la demande. En l'absence de réponse dans ce délai, le silence de l'administration vaut acceptation tacite de l'Acre.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Créer votre entreprise</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Formalités de création offertes, hors droits de greffe et frais d'annonce légale.</p>
              <a href="/creation-entreprise" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
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
                <a href="/blog?tag=Acre" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Acre</a>
                <a href="/blog?tag=Cr%C3%A9ation%20d'entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Création d'entreprise</a>
                <a href="/blog?tag=Urssaf" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Urssaf</a>
                <a href="/blog?tag=Micro-entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Micro-entreprise</a>
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
              { cat: 'FORMALITÉS', titre: "Créer sa micro-entreprise en 2026 : le guide complet (plafonds, cotisations, démarches)", href: '/blog/creer-sa-micro-entreprise-2026-guide-complet-plafonds-cotisations-demarches', date: '5 janvier 2026' },
              { cat: 'FORMALITÉS', titre: "Micro-entreprise, EURL ou SASU : quel statut choisir en 2026 ?", href: '/blog/micro-entreprise-eurl-sasu-quel-statut-choisir-2026', date: '15 janvier 2026' },
              { cat: 'FORMALITÉS', titre: "Passer de la micro-entreprise à la société en 2026 : quand et comment franchir le cap", href: '/blog/passer-de-la-micro-entreprise-a-la-societe-2026-quand-et-comment', date: '18 mai 2026' },
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
