import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Responsabilité financière du président d'association devant la Cour des comptes : ce que change la réforme de 2023 · Blog Cabinet Cholez-Pagotto`,
  description: `Une présidente d'association condamnée à 4 000 € d'amende par la Cour des comptes : le seuil des 1 500 € de subventions publiques qui déclenche le contrôle, et le nouveau régime de responsabilité financière des gestionnaires publics en vigueur depuis 2023.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Responsabilité financière du président d'association devant la Cour des comptes : ce que change la réforme de 2023",
      "description": "Une présidente d'association condamnée à 4 000 € d'amende par la Cour des comptes : le seuil des 1 500 € de subventions publiques qui déclenche le contrôle, et le nouveau régime de responsabilité financière des gestionnaires publics en vigueur depuis 2023.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-financiere-president-association-cour-comptes-2026.webp",
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
      "url": "https://cholez-pagotto.fr/blog/responsabilite-financiere-president-association-cour-des-comptes",
      "keywords": ["Association", "Cour des comptes", "Responsabilité financière", "Subvention publique", "Chambre régionale des comptes", "Dirigeant bénévole"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "À partir de quel montant de subvention une association peut-elle être contrôlée par la Cour des comptes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dès qu'une collectivité territoriale lui apporte un concours financier supérieur à 1 500 euros par an, une association peut faire l'objet d'un contrôle facultatif de la chambre régionale des comptes, quel que soit son statut juridique (article L.211-8 du Code des juridictions financières)."
          }
        },
        {
          "@type": "Question",
          "name": "Un président d'association bénévole peut-il être condamné à une amende par la Cour des comptes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Depuis le 1er janvier 2023, le régime de responsabilité financière des gestionnaires publics s'applique à toute personne qui représente, administre ou agit pour le compte d'un organisme soumis au contrôle de la Cour des comptes ou d'une chambre régionale des comptes, y compris un dirigeant associatif bénévole, dès lors qu'une faute grave a causé un préjudice financier significatif à l'association."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que le régime de responsabilité financière des gestionnaires publics ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est le régime issu de l'ordonnance n°2022-408 du 23 mars 2022, en vigueur depuis le 1er janvier 2023, qui a unifié les anciens régimes distincts de responsabilité des comptables publics et des ordonnateurs devant une chambre du contentieux unique de la Cour des comptes, avec une Cour d'appel financière en second ressort."
          }
        },
        {
          "@type": "Question",
          "name": "Comment le montant de l'amende est-il fixé par la Cour des comptes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les magistrats tiennent compte de circonstances aggravantes (connaissance de la portée de ses actes, expérience du dirigeant, alertes ignorées, durée du manquement) et atténuantes (absence d'avantage personnel tiré de la situation), le caractère significatif du préjudice s'appréciant au regard du budget de l'association concernée."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Responsabilité financière président association" }
      ]
    }
  ]
}

export default function ArticleResponsabiliteFinanciereAssociation2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Responsabilité financière président association</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIE ASSOCIATIVE</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>JURISPRUDENCE MAI 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Responsabilité financière du président d'association devant la Cour des comptes : ce que change la réforme de 2023</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 7 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 12 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-financiere-president-association-cour-comptes-2026.webp"
                alt="Responsabilité financière du président d'association devant la Cour des comptes"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. L'affaire jugée le 22 mai 2026</a></li>
                <li><a href="#seuil" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Pourquoi une association peut être contrôlée par la Cour des comptes</a></li>
                <li><a href="#reforme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le nouveau régime de responsabilité financière, en vigueur depuis 2023</a></li>
                <li><a href="#faits" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Ce qui a été reproché à la présidente</a></li>
                <li><a href="#amende" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Comment le montant de l'amende est fixé</a></li>
                <li><a href="#reflexes" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Les bons réflexes pour un dirigeant associatif</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Une amende de 4 000 euros, un préjudice évalué à plus de 500 000 euros, et une présidente bénévole qui n'en a tiré aucun avantage personnel. L'affaire jugée le 22 mai 2026 par la Cour des comptes rappelle une réalité que beaucoup de dirigeants associatifs ignorent encore : recevoir des subventions publiques, même modestes, expose à un contrôle et à une responsabilité personnelle qui n'ont plus grand-chose à voir avec ce qu'on imagine spontanément.</p>
                <p style={{marginBottom: '1rem'}}>Cet article revient sur cette décision, sur le mécanisme qui la rend possible, et sur la réforme de 2023 qui a changé la donne pour tous les dirigeants d'organismes financés sur fonds publics.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}dès 1 500 euros de subventions publiques annuelles, une association peut être contrôlée par la chambre régionale des comptes, et depuis le 1er janvier 2023, ses dirigeants, y compris bénévoles, sont personnellement justiciables devant la chambre du contentieux de la Cour des comptes en cas de faute grave ayant causé un préjudice financier significatif.
                  </p>
                </div>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. L'affaire jugée le 22 mai 2026
                </h2>
                <p style={{marginBottom: '1rem'}}>La présidente d'une association a été condamnée à une amende de 4 000 euros pour ne pas avoir respecté les statuts, ni veillé à la continuité de l'objet social, à la sauvegarde des intérêts matériels et au bon fonctionnement des instances de l'association (Cour des comptes, 22 mai 2026, n° S-2026-0591).</p>
              </section>

              <section id="seuil">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Pourquoi une association peut être contrôlée par la Cour des comptes
                </h2>
                <p style={{marginBottom: '1rem'}}>Le déclencheur est presque toujours le même : le financement public. Dès qu'une collectivité territoriale (région, département, commune) apporte à une association un concours financier supérieur à <strong>1 500 euros par an</strong>, celle-ci peut faire l'objet d'un contrôle facultatif de la chambre régionale des comptes, quel que soit son statut juridique (article L.&nbsp;211-8 du Code des juridictions financières). Ce seuil est volontairement bas : il couvre l'immense majorité des associations subventionnées, bien au-delà des seules grandes structures.</p>
                <p style={{marginBottom: '1rem'}}>Ce contrôle n'est pas systématique, il reste une possibilité laissée à l'appréciation de la chambre, mais son existence même change la nature du risque : une association qui reçoit une subvention municipale de 2 000 euros pour une manifestation locale entre, juridiquement, dans le même périmètre de contrôle qu'un grand établissement public.</p>
              </section>

              <section id="reforme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le nouveau régime de responsabilité financière, en vigueur depuis 2023
                </h2>
                <p style={{marginBottom: '1rem'}}>Ce qui rend l'affaire de mai 2026 particulièrement instructive, c'est qu'elle s'inscrit dans un cadre juridique récent, encore mal connu du monde associatif. Jusqu'en 2022, deux régimes distincts coexistaient : la responsabilité personnelle et pécuniaire des comptables publics d'un côté, la Cour de discipline budgétaire et financière pour les ordonnateurs de l'autre. L'<strong>ordonnance n°&nbsp;2022-408 du 23 mars 2022</strong>, entrée en vigueur le <strong>1er janvier 2023</strong>, a mis fin à cette dualité en créant un régime unifié de responsabilité financière des gestionnaires publics, jugé en première instance par une chambre du contentieux unique de la Cour des comptes, composée à la fois de membres de la Cour et de magistrats des chambres régionales des comptes.</p>
                <p style={{marginBottom: '1rem'}}>L'article L.&nbsp;131-1 du Code des juridictions financières définit largement les personnes justiciables de ce régime : y figurent notamment tout représentant, administrateur ou agent des organismes soumis au contrôle de la Cour des comptes ou d'une chambre régionale des comptes, ainsi que toute personne qui exerce en fait les fonctions correspondantes. Un président d'association bénévole entre pleinement dans ce périmètre dès lors que son association est elle-même contrôlable au titre du seuil de 1 500 euros évoqué plus haut.</p>
                <p style={{marginBottom: '1rem'}}>La faute poursuivie doit être grave et avoir causé un préjudice financier significatif à l'organisme, ce caractère significatif s'appréciant au regard du budget de l'entité concernée (article L.&nbsp;131-9 du même code) : une chose est un préjudice de quelques centaines d'euros pour une petite association de quartier, une autre est une perte de plusieurs centaines de milliers d'euros pour une structure au budget conséquent. En cas de désaccord, un appel reste possible devant la Cour d'appel financière, installée en juillet 2023, avant un pourvoi devant le Conseil d'État.</p>
              </section>

              <section id="faits">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Ce qui a été reproché à la présidente
                </h2>
                <p style={{marginBottom: '1rem'}}>Les magistrats ont d'abord relevé que, selon les statuts de l'association, la présidente ne pouvait engager de dépenses en son nom qu'à condition d'y avoir été mandatée par le conseil d'administration. Or, sans ce mandat, elle avait octroyé une indemnité de départ à la retraite de 60 000 euros au directeur général salarié, qui était par ailleurs le fondateur et le dirigeant de fait de l'association, avant de conclure avec ce même directeur un nouveau contrat de travail. Elle avait également signé un avenant au bail des locaux, augmentant le loyer annuel de plus de 2 000 euros, le bailleur étant une SCI détenue par ce même dirigeant de fait.</p>
                <p style={{marginBottom: '1rem'}}>Le préjudice financier retenu par la Cour des comptes a dépassé 500 000 euros : l'indemnité de départ, alors que son bénéficiaire n'avait nullement l'intention de rompre ses liens professionnels avec l'association, a coûté 90 000 euros (indemnité et cotisations sociales), et des rémunérations indûment versées pour 380 000 euros ont conduit l'administration fiscale à considérer que l'association ne présentait plus une gestion désintéressée, l'assujettissant à l'impôt sur les sociétés pour plus de 30 000 euros.</p>
                <p style={{marginBottom: '1rem'}}>Un point mérite d'être relevé : la direction de fait exercée par le directeur général salarié n'a pas exonéré la présidente de sa propre responsabilité. La Cour des comptes a retenu sa participation aux agissements litigieux et son abstention prolongée à faire cesser les désordres internes de l'association.</p>
              </section>

              <section id="amende">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Comment le montant de l'amende est fixé
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour fixer le montant de la sanction, la Cour des comptes a retenu plusieurs circonstances aggravantes : la pleine connaissance par la présidente de la portée de ses actes, son expérience en tant que dirigeante associative et élue locale, l'absence de prise en compte des alertes du cabinet comptable sur les problèmes de gouvernance, et le caractère prolongé, sur plusieurs années, de son abstention. Une circonstance atténuante a toutefois été retenue : elle n'avait tiré aucun avantage personnel de la situation.</p>
              </section>

              <section id="reflexes">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Les bons réflexes pour un dirigeant associatif
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Vérifier systématiquement les statuts avant d'engager une dépense significative : qui a le pouvoir d'engager l'association, et sous quelle forme de mandat ?</li>
                  <li>Faire tracer par écrit (procès-verbal du conseil d'administration) toute autorisation de dépense sortant du cadre courant.</li>
                  <li>Prendre au sérieux les alertes du cabinet comptable ou du commissaire aux comptes sur la gouvernance : leur ignorance répétée est explicitement retenue comme circonstance aggravante.</li>
                  <li>Se méfier des situations de conflit d'intérêts, notamment lorsqu'un même dirigeant de fait se retrouve des deux côtés d'un contrat (bail, contrat de travail).</li>
                  <li>Ne jamais laisser perdurer un désordre de gouvernance identifié : l'abstention prolongée est elle-même une faute distincte du fait générateur initial.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sécuriser la gouvernance de votre association
                </h2>
                <p style={{marginBottom: '1rem'}}>Cette affaire illustre un point que notre article sur <a href="/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere" style={{color: '#1a4fba', textDecoration: 'underline'}}>la responsabilité civile, pénale et financière des dirigeants bénévoles</a> évoquait déjà de manière plus générale : le bénévolat ne met pas à l'abri. Le volet Cour des comptes, spécifique aux associations subventionnées sur fonds publics, mérite une vigilance à part entière.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin de sécuriser la gouvernance de votre association ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet accompagne les associations et acteurs de l'ESS sur la conformité statutaire et la gouvernance, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-associations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement associations</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Recevoir 1 500 euros de subvention publique par an suffit à placer une association dans le champ de contrôle de la chambre régionale des comptes. Et depuis le 1er janvier 2023, le dirigeant, bénévole ou non, répond personnellement de ses fautes de gestion devant la chambre du contentieux de la Cour des comptes, sans que l'absence d'avantage personnel ne l'exonère : elle atténue la sanction, elle ne l'écarte pas.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Cour des comptes, 22 mai 2026, n°&nbsp;S-2026-0591 (condamnation de la présidente d'une association)</li>
                  <li>Code des juridictions financières, article L.&nbsp;211-8 (compétence de contrôle facultatif de la chambre régionale des comptes, seuil de 1 500 € de concours financier)</li>
                  <li>Code des juridictions financières, article L.&nbsp;131-1 (personnes justiciables du régime de responsabilité financière des gestionnaires publics)</li>
                  <li>Code des juridictions financières, article L.&nbsp;131-9 (caractère significatif du préjudice financier apprécié au regard du budget de l'entité)</li>
                  <li>Ordonnance n°&nbsp;2022-408 du 23 mars 2022 relative au régime de responsabilité financière des gestionnaires publics, JORF du 24 mars 2022, en vigueur depuis le 1er janvier 2023</li>
                  <li>Article 168 de la loi n°&nbsp;2021-1900 du 30 décembre 2021 de finances pour 2022 (habilitation à légiférer par ordonnance sur ce régime)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À partir de quel montant de subvention une association peut-elle être contrôlée par la Cour des comptes ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Dès qu'une collectivité territoriale lui apporte un concours financier supérieur à 1 500 euros par an, une association peut faire l'objet d'un contrôle facultatif de la chambre régionale des comptes, quel que soit son statut juridique (article L.211-8 du Code des juridictions financières).</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un président d'association bénévole peut-il être condamné à une amende par la Cour des comptes ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Depuis le 1er janvier 2023, le régime de responsabilité financière des gestionnaires publics s'applique à toute personne qui représente, administre ou agit pour le compte d'un organisme soumis au contrôle de la Cour des comptes ou d'une chambre régionale des comptes, y compris un dirigeant associatif bénévole, dès lors qu'une faute grave a causé un préjudice financier significatif à l'association.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le régime de responsabilité financière des gestionnaires publics ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est le régime issu de l'ordonnance n°2022-408 du 23 mars 2022, en vigueur depuis le 1er janvier 2023, qui a unifié les anciens régimes distincts de responsabilité des comptables publics et des ordonnateurs devant une chambre du contentieux unique de la Cour des comptes, avec une Cour d'appel financière en second ressort.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment le montant de l'amende est-il fixé par la Cour des comptes ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les magistrats tiennent compte de circonstances aggravantes (connaissance de la portée de ses actes, expérience du dirigeant, alertes ignorées, durée du manquement) et atténuantes (absence d'avantage personnel tiré de la situation), le caractère significatif du préjudice s'appréciant au regard du budget de l'association concernée.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Gouvernance associative</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Le cabinet accompagne les associations sur la conformité statutaire et la gouvernance.</p>
              <a href="/accompagnement-associations" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                Voir l'accompagnement →
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
                <a href="/blog?tag=Association" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Association</a>
                <a href="/blog?tag=Cour%20des%20comptes" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Cour des comptes</a>
                <a href="/blog?tag=Responsabilit%C3%A9%20financi%C3%A8re" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Responsabilité financière</a>
                <a href="/blog?tag=Subvention%20publique" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Subvention publique</a>
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
              { cat: 'VIE ASSOCIATIVE', titre: "Responsabilité des dirigeants bénévoles d'association : civile, pénale et financière", href: '/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere', date: '5 mai 2026' },
              { cat: 'VIE ASSOCIATIVE', titre: "Créer une association loi 1901 en 2026 : le guide complet, étape par étape", href: '/blog/creer-une-association-loi-1901-2026-guide-complet-etapes', date: '12 mai 2026' },
              { cat: 'VIE ASSOCIATIVE', titre: "Votre association est-elle imposable ? Non-lucrativité, franchise et obligations en 2026", href: '/blog/association-imposable-non-lucrativite-franchise-impots-commerciaux-2026', date: '20 avril 2026' },
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
