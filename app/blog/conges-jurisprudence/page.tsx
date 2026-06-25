import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Congés payés : obligations de l'employeur et droit du salarié · Blog Cabinet Cholez-Pagotto`,
  description: `L'employeur doit démontrer qu'il a effectivement permis au salarié de prendre ses congés payés. Analyse de l'arrêt de la Cour de cassation du 9 avril 2025.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/conges-jurisprudence',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/Conges-jurisprudence-scaled.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/Conges-jurisprudence-scaled.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Congés payés : obligations de l'employeur et droit du salarié",
      "description": "L'employeur doit démontrer qu'il a effectivement permis au salarié de prendre ses congés payés. Analyse de l'arrêt de la Cour de cassation du 9 avril 2025.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/Conges-jurisprudence-scaled.webp",
      "datePublished": "2025-05-06",
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
      "url": "https://cholez-pagotto.fr/blog/conges-jurisprudence",
      "keywords": ["Congés payés", "Employeur", "Jurisprudence", "Droit du travail", "Charge de la preuve", "Cour de cassation"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Un employeur peut-il imposer la prise de congés à ses salariés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L'organisation des congés relève du pouvoir de direction de l'employeur. Il peut fixer les dates de départ en congés et les modifier, sous réserve de respecter un délai de prévenance d'un mois et de consulter les représentants du personnel. Il peut également imposer la prise de congés pendant une fermeture d'établissement."
          }
        },
        {
          "@type": "Question",
          "name": "Les congés non pris sont-ils perdus à la fin de la période de référence ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En principe oui, sauf si le salarié n'a pas pu les prendre pour des raisons indépendantes de sa volonté (maladie, accident du travail, congé maternité...). Dans ce cas, ils doivent être reportés. Si l'employeur ne prouve pas avoir permis au salarié de prendre ses congés, il ne peut pas les opposer comme perdus."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la prescription applicable aux demandes de paiement de congés non pris ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'action en paiement de congés payés non pris se prescrit par 3 ans à compter du jour où le titulaire du droit a connu ou aurait dû connaître les faits lui permettant de l'exercer. Ce délai peut être suspendu en cas de maladie ou de maternité."
          }
        },
        {
          "@type": "Question",
          "name": "Un salarié peut-il refuser de prendre ses congés aux dates fixées par l'employeur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le salarié ne peut pas refuser de prendre ses congés aux dates fixées par l'employeur si celui-ci a respecté les règles (délai de prévenance d'un mois, consultation des IRP). En revanche, l'employeur ne peut pas modifier les dates de départ moins d'un mois avant la date prévue, sauf circonstances exceptionnelles."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Congés payés et charge de la preuve" }
      ]
    }
  ]
}

export default function ArticleCongesPayes() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Congés payés et charge de la preuve</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Congés payés : obligations de l'employeur et droit du salarié</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 6 mai 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 5 min de lecture
                </span>
              </div>
                            <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/Conges-jurisprudence-scaled.webp"
                alt="Congés payés : obligations de l'employeur et droit du salarié"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#principe" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le principe : la charge de la preuve incombe à l'employeur</a></li>
                <li><a href="#arret" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. L'arrêt du 9 avril 2025</a></li>
                <li><a href="#preuves" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Ce que l'employeur doit pouvoir prouver</a></li>
                <li><a href="#report" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Report des congés dans certaines situations</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <p style={{marginBottom: '1rem'}}>Lorsqu'un litige survient concernant des congés payés non utilisés, <strong>il revient à l'employeur de démontrer qu'il a bien permis au salarié de prendre ces congés.</strong> En effet, l'organisation des congés relève de son pouvoir de direction et il doit veiller au respect du droit au repos des salariés.</p>
              <p style={{marginBottom: '2rem'}}>Les congés payés constituent un droit fondamental, mais également un devoir pour le salarié qui doit les poser. De son côté, l'employeur est tenu de prendre toutes les mesures nécessaires pour garantir l'exercice effectif de ce droit, sous peine d'engager sa responsabilité civile et de s'exposer à des sanctions pénales en cas de manquement.</p>

              <section id="principe">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  I. Le principe : la charge de la preuve incombe à l'employeur
                </h2>
                <p style={{marginBottom: '1rem'}}>Ainsi, il ne suffit pas pour l'employeur de prétendre que le salarié avait la possibilité de poser ses congés. Il doit être en mesure de prouver qu'il a accompli toutes les démarches utiles, telles que :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>L'information des salariés sur leurs droits à congés</li>
                  <li>L'organisation des périodes de congés et l'envoi de rappels</li>
                  <li>La fixation et la communication des dates de prise de congés</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Par principe, les congés payés doivent être pris et ne peuvent être remplacés par une indemnité, sauf en cas de rupture du contrat de travail où l'indemnité compensatrice est due.</p>
              </section>

              <section id="arret">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. L'arrêt du 9 avril 2025 : la Cour de cassation réaffirme le principe
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans un arrêt rendu le 9 avril 2025, la Cour de cassation a annulé une décision de la Cour d'appel de Lyon. Cette dernière avait rejeté la demande d'une salariée qui réclamait le paiement de <strong>13 jours de congés non pris</strong>, estimant qu'elle ne prouvait pas qu'ils n'avaient pas été réglés ou pris avant la fin de son contrat.</p>
                <p style={{marginBottom: '1rem'}}>La Haute juridiction a précisé que la charge de la preuve incombe à l'employeur, en application de la <strong>directive européenne 2003/88/CE du 4 novembre 2003</strong>, qui impose à l'employeur de garantir concrètement l'exercice du droit à congés et de justifier, en cas de contestation, des diligences accomplies à cette fin.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.5rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    Ce principe n'est pas nouveau : la Cour de cassation l'a déjà confirmé à plusieurs reprises, notamment dans des arrêts du <strong>31 mai 2018</strong> et du <strong>6 juillet 2022</strong>. Cette obligation de preuve concerne aussi bien les congés payés légaux que ceux prévus par convention collective.
                  </p>
                </div>
              </section>

              <section id="preuves">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Ce que l'employeur doit pouvoir prouver
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour attester du respect de ses obligations, l'employeur doit notamment pouvoir prouver qu'il a :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Fixé la <strong>période de prise des congés payés</strong> et en a informé les salariés <strong>au moins deux mois avant son ouverture</strong></li>
                  <li>Établi l'<strong>ordre des départs en congés</strong> et en a informé chaque salarié <strong>au moins un mois avant leur départ</strong></li>
                  <li>Envoyé des <strong>rappels</strong> aux salariés n'ayant pas encore posé leurs congés en fin de période</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ces preuves peuvent être apportées par tous moyens : emails, notes de service, affichage, accord de planification, bulletins de salaire mentionnant le solde…</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Note de service : période et ordre des congés payés</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Pour sécuriser vos obligations d'employeur : fixe la période de prise des congés, l'ordre des départs et trace l'information des salariés dans les délais. La preuve qui manque souvent en cas de litige.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-note-service-conges-payes" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/accompagnement-professionnels" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>faites-vous accompagner</a></span>
                  </div>
                </div>
              </section>

              <section id="report">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Report des congés dans certaines circonstances
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans certaines circonstances, les congés payés non pris peuvent être reportés. C'est notamment le cas lorsqu'un salarié n'a pas pu les poser en raison d'une :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Maladie, accident du travail ou maladie professionnelle</li>
                  <li>Congé maternité, parental ou paternité</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Dans ces situations, les congés non utilisés doivent être reportés à la reprise du travail et ne sont donc <strong>pas perdus</strong>. L'employeur doit informer le salarié du nombre de jours de congés restant à prendre dès son retour.</p>
              </section>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un employeur peut-il imposer la prise de congés à ses salariés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. L'organisation des congés relève du pouvoir de direction de l'employeur. Il peut fixer les dates de départ en congés et les modifier, sous réserve de respecter un délai de prévenance d'un mois et de consulter les représentants du personnel. Il peut également imposer la prise de congés pendant une fermeture d'établissement.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les congés non pris sont-ils perdus à la fin de la période de référence ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En principe oui, sauf si le salarié n'a pas pu les prendre pour des raisons indépendantes de sa volonté (maladie, accident du travail, congé maternité...). Dans ce cas, ils doivent être reportés. Si l'employeur ne prouve pas avoir permis au salarié de prendre ses congés, il ne peut pas les opposer comme perdus.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la prescription applicable aux demandes de paiement de congés non pris ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'action en paiement de congés payés non pris se prescrit par 3 ans à compter du jour où le titulaire du droit a connu ou aurait dû connaître les faits lui permettant de l'exercer. Ce délai peut être suspendu en cas de maladie ou de maternité.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un salarié peut-il refuser de prendre ses congés aux dates fixées par l'employeur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le salarié ne peut pas refuser de prendre ses congés aux dates fixées par l'employeur si celui-ci a respecté les règles (délai de prévenance d'un mois, consultation des IRP). En revanche, l'employeur ne peut pas modifier les dates de départ moins d'un mois avant la date prévue, sauf circonstances exceptionnelles.</p>
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
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47 € à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
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
                <span key="Congés payés" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Congés payés</span>
                <span key="Employeur" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Employeur</span>
                <span key="Jurisprudence" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Jurisprudence</span>
                <span key="Droit du travail" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit du travail</span>
                <span key="Charge de la preuve" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Charge de la preuve</span>
                <span key="Cour de cassation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Cour de cassation</span>
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