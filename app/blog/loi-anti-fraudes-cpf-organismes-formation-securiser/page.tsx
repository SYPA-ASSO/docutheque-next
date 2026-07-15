import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Loi anti-fraudes CPF : ce que les organismes de formation doivent sécuriser dès maintenant · Blog Cabinet Cholez-Pagotto`,
  description: `Absence à l'examen, transmission des listes de stagiaires, publication des taux de réussite : la loi du 25 juin 2026 impose aux organismes de formation de revoir leurs CGV, leur traçabilité et leur gestion du risque d'impayé.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/loi-anti-fraudes-cpf-organismes-formation-securiser',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-anti-fraudes-organismes-formation-securisation.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-anti-fraudes-organismes-formation-securisation.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Loi anti-fraudes CPF : ce que les organismes de formation doivent sécuriser dès maintenant",
      "description": "Absence à l'examen, transmission des listes de stagiaires, publication des taux de réussite : la loi du 25 juin 2026 impose aux organismes de formation de revoir leurs CGV, leur traçabilité et leur gestion du risque d'impayé.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-anti-fraudes-organismes-formation-securisation.webp",
      "datePublished": "2026-07-15",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/loi-anti-fraudes-cpf-organismes-formation-securiser",
      "keywords": ["Organisme de formation", "CPF", "Qualiopi", "CGV formation", "Risque impayé", "France compétences"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Un organisme de formation doit-il rembourser la Caisse des dépôts si le stagiaire ne se présente pas à l'examen ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. C'est le titulaire du CPF qui doit rembourser la Caisse des dépôts, pas l'organisme de formation. Le risque réel pour l'organisme est un risque d'impayé : le stagiaire ne pouvant plus payer avec son CPF, il doit régler directement l'organisme, qui doit donc sécuriser ce recouvrement." } },
        { "@type": "Question", "name": "Quelles informations un organisme de formation doit-il transmettre aux certificateurs ?", "acceptedAnswer": { "@type": "Answer", "text": "Depuis la loi du 25 juin 2026, les organismes doivent communiquer aux ministères et organismes certificateurs, par voie dématérialisée, la liste des stagiaires ayant débuté une formation ou une VAE menant à une certification, ainsi que la liste de ceux qui l'ont interrompue (article L.6353-11 du Code du travail)." } },
        { "@type": "Question", "name": "Les taux de réussite d'un organisme de formation seront-ils publics ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, à terme. Les organismes devront publier sur leur site internet leurs taux de présence et de réussite aux examens, et les transmettre aux stagiaires avant toute inscription (article L.6353-12 du Code du travail). Cette obligation entre en vigueur à une date fixée par décret, au plus tard le 25 juin 2027." } },
        { "@type": "Question", "name": "Cette réforme a-t-elle un lien avec Qualiopi ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, indirectement mais fortement. La publication des taux de réussite par organisme entre en résonance avec l'indicateur 2 du Référentiel National Qualité (indicateurs de résultats), qu'un auditeur Qualiopi pourra comparer aux données rendues publiques par l'État." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "Loi anti-fraudes : sécurisation des OF" }
    ] }
  ]
}

export default function ArticleLoiAntiFraudesOF() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>
        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Loi anti-fraudes : sécurisation des OF</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ORGANISMES DE FORMATION</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>LOI DU 25 JUIN 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Loi anti-fraudes CPF : ce que les organismes de formation doivent sécuriser dès maintenant</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 15 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 14 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-anti-fraudes-organismes-formation-securisation.webp" alt="Loi anti-fraudes CPF : ce que les organismes de formation doivent sécuriser dès maintenant" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#vrai-risque" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. Le vrai risque : l'impayé, pas le remboursement à la CDC</a></li>
                <li><a href="#transmission" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. La nouvelle obligation de transmission aux certificateurs</a></li>
                <li><a href="#transparence" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. La transparence à venir, et sa tension avec Qualiopi</a></li>
                <li><a href="#cgv" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Revoir ses CGV et son règlement intérieur</a></li>
                <li><a href="#tracabilite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Sécuriser la traçabilité des convocations</a></li>
                <li><a href="#recouvrement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. Adapter le processus de recouvrement</a></li>
                <li><a href="#sous-traitance" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VII. Le devoir de vigilance dans la sous-traitance</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La loi du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales fait passer les organismes de formation d'une logique où l'essentiel se jouait pendant la formation à une logique où la gestion administrative, avant et après la formation, pèse tout autant. Notre article <a href="/blog/cpf-2026-nouvelles-conditions-mobilisation-droits" style={{color: '#1a4fba', textDecoration: 'underline'}}>CPF 2026 : nouvelles conditions de mobilisation des droits</a> détaille ce qui change pour le titulaire du compte ; celui-ci se concentre sur ce que l'organisme de formation doit concrètement sécuriser.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}le vrai risque pour l'organisme de formation n'est pas un remboursement à la Caisse des dépôts, mais un risque d'impayé du stagiaire absent à l'examen ; à cela s'ajoutent de nouvelles obligations de transmission aux certificateurs et, à terme, de publication de vos propres taux de réussite.
                  </p>
                </div>
              </section>

              <section id="vrai-risque">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. Le vrai risque : l'impayé, pas le remboursement à la CDC</h2>
                <p style={{marginBottom: '1rem'}}>Il faut d'abord corriger un point souvent mal présenté : ce n'est pas l'organisme de formation qui doit rembourser la Caisse des dépôts en cas d'absence du stagiaire à l'examen. L'article L.&nbsp;6323-6 modifié du Code du travail désigne le titulaire du compte comme débiteur de ce remboursement. Ce que risque réellement l'organisme, c'est de ne plus être payé du tout : le titulaire absent sans motif légitime ne peut plus régler l'organisme avec son CPF, il doit le faire directement, de sa poche, et rien ne garantit qu'il s'exécute spontanément.</p>
                <p style={{marginBottom: '1rem'}}>Ce déplacement du risque, du financeur public vers une relance client classique, change la nature du problème pour l'organisme : ce n'est plus un contentieux administratif avec la Caisse des dépôts qu'il faut anticiper, c'est un risque de créance impayée qu'il faut gérer comme tel.</p>
              </section>

              <section id="transmission">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. La nouvelle obligation de transmission aux certificateurs</h2>
                <p style={{marginBottom: '1rem'}}>L'article L.&nbsp;6353-11 nouveau du Code du travail impose aux organismes de formation de communiquer, par voie dématérialisée, aux ministères et aux organismes certificateurs la liste des stagiaires ayant débuté une action de formation ou de VAE conduisant à une certification professionnelle, ainsi que la liste de ceux qui l'ont interrompue. Un décret en Conseil d'État doit encore préciser les modalités de collecte, de traitement et d'échange de ces données, y compris celles nécessaires à l'identification des stagiaires.</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, cela suppose de fiabiliser dès maintenant le suivi des entrées et des interruptions de parcours, pour être prêt à transmettre ces listes de façon dématérialisée dès que le décret sera publié.</p>
              </section>

              <section id="transparence">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. La transparence à venir, et sa tension avec Qualiopi</h2>
                <p style={{marginBottom: '1rem'}}>L'article L.&nbsp;6353-12 nouveau impose aux organismes de publier sur leur site internet leurs propres taux de présence et de réussite aux examens, et de les transmettre aux stagiaires avant toute inscription ou tout règlement de frais. Cette obligation, comme celle de publication par l'État (article L.&nbsp;6113-8-1 nouveau), n'entre en vigueur qu'à une date fixée par décret, au plus tard un an après la promulgation de la loi.</p>
                <p style={{marginBottom: '1rem'}}>Cette transparence entre directement en résonance avec l'<strong>indicateur 2 du Référentiel National Qualité</strong> (indicateurs de résultats), déjà exigé dans le cadre de Qualiopi. Un organisme dont les statistiques déclarées lors d'un audit Qualiopi s'écarteraient des données publiées par l'État s'expose à une double difficulté : une non-conformité potentielle côté Qualiopi, et une perte de crédibilité côté marché. Nous détaillons cette articulation dans notre article <a href="/blog/qualiopi-iso-21001-organismes-formation-association-cooperative" style={{color: '#1a4fba', textDecoration: 'underline'}}>Qualiopi et ISO 21001 : comprendre les deux démarches qualité de la formation</a>.</p>
              </section>

              <section id="cgv">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Revoir ses CGV et son règlement intérieur</h2>
                <p style={{marginBottom: '1rem'}}>Vos conditions générales de vente et votre règlement intérieur méritent d'être mis à jour pour intégrer explicitement : l'obligation pour le stagiaire de s'inscrire et de se présenter aux évaluations et épreuves d'examen ; les conséquences d'un défaut de présentation, notamment la facturation directe au stagiaire des frais non pris en charge par le CPF ; et, dans l'attente du décret sur le motif légitime, une clause de bonne foi permettant d'apprécier au cas par cas les situations d'empêchement invoquées.</p>
              </section>

              <section id="tracabilite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Sécuriser la traçabilité des convocations</h2>
                <p style={{marginBottom: '1rem'}}>Une feuille d'émargement approximative ne suffira plus à documenter une situation litigieuse. Il est recommandé de formaliser un processus de convocation aux examens traçable de bout en bout : envoi par un moyen permettant d'attester la réception, relance automatisée à l'approche de la date, et conservation systématique des échanges avec le stagiaire, y compris ceux évoquant un éventuel motif d'absence.</p>
              </section>

              <section id="recouvrement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. Adapter le processus de recouvrement</h2>
                <p style={{marginBottom: '1rem'}}>Puisque le risque pour l'organisme est désormais un risque d'impayé et non une créance administrative, les équipes en charge de la facturation gagnent à réagir rapidement après une absence constatée à l'examen : envoi d'une relance dans les jours qui suivent, demande écrite du motif d'absence, et mise en demeure si le paiement direct n'intervient pas. Plus l'écart entre l'absence et la relance est court, plus le recouvrement amiable a de chances d'aboutir.</p>
              </section>

              <section id="sous-traitance">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VII. Le devoir de vigilance dans la sous-traitance</h2>
                <p style={{marginBottom: '1rem'}}>Dans un tout autre registre, la même loi crée par son article 95 un devoir de vigilance périodique pour tout maître d'ouvrage qui recourt à un sous-traitant, y compris dans le secteur de la formation : la vérification de la conformité du sous-traitant aux formalités anti-travail dissimulé (articles L.&nbsp;8221-3 et L.&nbsp;8221-5 du Code du travail) doit désormais être renouvelée tout au long du contrat, pas seulement à son démarrage. Les organismes qui sous-traitent une partie de leurs prestations doivent revoir leurs procédures de suivi en conséquence.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Sécuriser votre organisme de formation</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin de revoir vos CGV, votre règlement intérieur ou vos procédures ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet accompagne déjà plusieurs organismes de formation sur ce sujet depuis le début d'année, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/formations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Formations sur-mesure</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>La gestion administrative devient, avec cette loi, aussi déterminante que la qualité pédagogique elle-même. Ce n'est pas un remboursement direct à la Caisse des dépôts qui menace l'organisme de formation, mais l'accumulation de petits risques opérationnels : impayés non recouvrés, transmissions de données mal préparées, écarts entre vos statistiques internes et celles bientôt publiées par l'État. Les organismes qui commencent dès maintenant à sécuriser leurs CGV, leur traçabilité et leur recouvrement auront une longueur d'avance quand les décrets d'application viendront préciser le reste.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, articles 59 et 95 (JORF du 26 juin 2026)</li>
                  <li>Code du travail, article L.&nbsp;6323-6 modifié (remboursement à la charge du titulaire, non de l'organisme)</li>
                  <li>Code du travail, article L.&nbsp;6353-11 nouveau (transmission des listes de stagiaires aux certificateurs)</li>
                  <li>Code du travail, article L.&nbsp;6353-12 nouveau (publication des taux par l'organisme, entrée en vigueur différée)</li>
                  <li>Code du travail, article L.&nbsp;6113-8-1 nouveau (publication des taux par l'État)</li>
                  <li>Code du travail, article L.&nbsp;8222-1-1 nouveau, issu de l'article 95 (devoir de vigilance périodique du maître d'ouvrage)</li>
                  <li>Code du travail, articles L.&nbsp;8221-3 et L.&nbsp;8221-5 (formalités anti-travail dissimulé)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Plusieurs modalités pratiques restent subordonnées à des décrets non encore publiés à la date de rédaction.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Un organisme de formation doit-il rembourser la Caisse des dépôts si le stagiaire ne se présente pas à l'examen ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. C'est le titulaire du CPF qui doit rembourser la Caisse des dépôts, pas l'organisme de formation. Le risque réel pour l'organisme est un risque d'impayé : le stagiaire ne pouvant plus payer avec son CPF, il doit régler directement l'organisme, qui doit donc sécuriser ce recouvrement.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Quelles informations un organisme de formation doit-il transmettre aux certificateurs ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Depuis la loi du 25 juin 2026, les organismes doivent communiquer aux ministères et organismes certificateurs, par voie dématérialisée, la liste des stagiaires ayant débuté une formation ou une VAE menant à une certification, ainsi que la liste de ceux qui l'ont interrompue (article L.6353-11 du Code du travail).</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Les taux de réussite d'un organisme de formation seront-ils publics ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, à terme. Les organismes devront publier sur leur site internet leurs taux de présence et de réussite aux examens, et les transmettre aux stagiaires avant toute inscription (article L.6353-12 du Code du travail). Cette obligation entre en vigueur à une date fixée par décret, au plus tard le 25 juin 2027.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Cette réforme a-t-elle un lien avec Qualiopi ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, indirectement mais fortement. La publication des taux de réussite par organisme entre en résonance avec l'indicateur 2 du Référentiel National Qualité (indicateurs de résultats), qu'un auditeur Qualiopi pourra comparer aux données rendues publiques par l'État.</p>
                  </details>
                </div>
              </section>
            </div>
          </article>

          <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>À propos de l'auteur</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                <div><p style={{color: '#374151', fontSize: '12px', fontWeight: '700', margin: '0 0 2px'}}>François CHOLEZ</p><p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p></div>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.</p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>
            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>Poser ma question →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/cpf-2026-nouvelles-conditions-mobilisation-droits" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px'}}>CPF 2026 : nouvelles conditions de mobilisation des droits →</a>
              <a href="/blog/qualiopi-iso-21001-organismes-formation-association-cooperative" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>Qualiopi et ISO 21001 : comprendre les deux démarches qualité →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=Organisme%20de%20formation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Organisme de formation</a>
                <a href="/blog?tag=CPF" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>CPF</a>
                <a href="/blog?tag=Qualiopi" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Qualiopi</a>
                <a href="/blog?tag=Fraudes%20sociales" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Fraudes sociales</a>
              </div>
            </div>
            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>← Retour au blog</a>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
