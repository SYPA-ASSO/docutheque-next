import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `CPF : le tribunal administratif de Rouen limite le pouvoir de sanction de l'État · Blog Cabinet Cholez-Pagotto`,
  description: `Deux jugements du 12 mars 2026 annulent des sanctions de plus de 860 000 € : l'administration ne peut pas sanctionner l'inéligibilité CPF via le contrôle de la réalité des actions, et la Caisse des dépôts n'est pas le cocontractant de l'organisme de formation.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/cpf-tribunal-administratif-rouen-pouvoir-sanction-etat',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-tribunal-administratif-rouen-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-tribunal-administratif-rouen-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "CPF : le tribunal administratif de Rouen limite le pouvoir de sanction de l'État",
      "description": "Deux jugements du 12 mars 2026 annulent des sanctions de plus de 860 000 € : l'administration ne peut pas sanctionner l'inéligibilité CPF via le contrôle de la réalité des actions, et la Caisse des dépôts n'est pas le cocontractant de l'organisme de formation.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-tribunal-administratif-rouen-2026.webp",
      "datePublished": "2026-03-16",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/cpf-tribunal-administratif-rouen-pouvoir-sanction-etat",
      "keywords": ["CPF", "Tribunal administratif", "Organisme de formation", "Caisse des dépôts", "Contentieux CPF", "Contrôle administratif"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "L'administration peut-elle sanctionner un organisme de formation pour inéligibilité CPF via l'article L.6362-6 ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, selon le tribunal administratif de Rouen. Le contrôle prévu par l'article L.6362-6 du Code du travail porte uniquement sur la réalité des actions et les moyens mobilisés, pas sur leur éligibilité au CPF. Une sanction fondée sur la seule inéligibilité, sans contester la réalité des formations, méconnaît le champ d'application de ce texte." } },
        { "@type": "Question", "name": "La Caisse des dépôts est-elle le cocontractant de l'organisme de formation ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Le tribunal rappelle, en s'appuyant sur les conditions générales d'utilisation de Mon compte formation, que la Caisse des dépôts est un tiers à la relation contractuelle entre le titulaire du CPF et l'organisme de formation. Elle n'intervient que dans l'usage de la plateforme, pas dans le contrat lui-même." } },
        { "@type": "Question", "name": "Qui peut demander le remboursement de fonds CPF indûment mobilisés ?", "acceptedAnswer": { "@type": "Answer", "text": "La Caisse des dépôts peut le demander, mais sur le fondement de l'article L.6323-44 du Code du travail, pas sur celui de l'article L.6362-6 utilisé par l'administration dans les deux affaires jugées à Rouen. Cette distinction de fondement juridique est au cœur de la décision du tribunal." } },
        { "@type": "Question", "name": "Le rejet de dépenses non justifiées reste-t-il possible ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, cette sanction reste pleinement valable. Le tribunal a confirmé le rejet de dépenses versées au conjoint d'un entrepreneur individuel sans justification suffisante, sur le fondement des articles L.6362-5 et L.6362-7 du Code du travail, qui imposent de justifier l'origine, la nature et le rattachement de chaque dépense à l'activité de formation." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "CPF : jurisprudence TA de Rouen" }
    ] }
  ]
}

export default function ArticleCpfTaRouen() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>CPF : jurisprudence TA de Rouen</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ORGANISMES DE FORMATION</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>JURISPRUDENCE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>CPF : le tribunal administratif de Rouen limite le pouvoir de sanction de l'État</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 16 mars 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 11 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-tribunal-administratif-rouen-2026.webp" alt="CPF : le tribunal administratif de Rouen limite le pouvoir de sanction de l'État" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Selon le tribunal administratif de Rouen, l'administration ne peut pas sanctionner un organisme de formation pour inéligibilité au CPF sur le fondement de l'article L.6362-6 du Code du travail.</li>
                <li>La Caisse des dépôts n'est pas le cocontractant de l'organisme de formation : elle reste un tiers à la relation contractuelle entre le titulaire du CPF et l'organisme de formation.</li>
                <li>Le remboursement de fonds CPF indûment mobilisés peut être demandé par la Caisse des dépôts, sur le fondement de l'article L.6323-44 du Code du travail, distinct de l'article L.6362-6.</li>
                <li>Le rejet de dépenses CPF non justifiées reste pleinement valable : le tribunal a confirmé le rejet de dépenses versées au conjoint d'un entrepreneur individuel sans justification suffisante.</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#perimetre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. Le périmètre du contrôle administratif et financier</a></li>
                <li><a href="#eligibilite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. L'éligibilité CPF, hors du champ du contrôle de l'article L.6362-6</a></li>
                <li><a href="#cdc-tiers" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. La Caisse des dépôts, un tiers à la relation contractuelle</a></li>
                <li><a href="#qui-demande" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Qui peut demander le remboursement des fonds CPF ?</a></li>
                <li><a href="#rejet-depenses" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Le rejet de dépenses, une sanction confirmée</a></li>
                <li><a href="#portee" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. Ce que ces décisions changent pour les organismes de formation</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Deux jugements rendus le 12 mars 2026 par le tribunal administratif de Rouen apportent un éclairage important sur le régime juridique du contrôle des organismes de formation financés par le compte personnel de formation (CPF). Dans les deux affaires, l'administration avait prononcé des sanctions financières lourdes, plus de 860 000 euros dans un cas, plus de 250 000 euros dans l'autre, en se fondant sur l'inéligibilité des actions au CPF. Le tribunal a annulé ces décisions.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}le contrôle prévu par l'article L.&nbsp;6362-6 du Code du travail porte sur la réalité des actions de formation, pas sur leur éligibilité au CPF, et la Caisse des dépôts n'est pas le cocontractant de l'organisme de formation : deux précisions qui limitent le pouvoir de sanction de l'administration et redessinent les équilibres du contentieux CPF.
                  </p>
                </div>
              </section>

              <section id="perimetre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. Le périmètre du contrôle administratif et financier</h2>
                <p style={{marginBottom: '1rem'}}>Le cadre juridique applicable au contrôle des organismes financés par le CPF repose principalement sur trois groupes d'articles : les articles L.&nbsp;6313-1 et L.&nbsp;6313-2 du Code du travail, qui définissent les actions de formation ; l'article L.&nbsp;6323-6, relatif aux actions éligibles au CPF ; et les articles L.&nbsp;6362-6 et L.&nbsp;6362-7-1, relatifs au contrôle de la réalité des actions et au mécanisme de remboursement en cas d'inexécution.</p>
                <p style={{marginBottom: '1rem'}}>Le tribunal rappelle un point structurant : le contrôle prévu par l'article L.&nbsp;6362-6 porte uniquement sur la réalité des actions et les moyens mobilisés pour les dispenser, pas sur leur éligibilité au CPF. Une sanction fondée sur ces dispositions ne peut donc légalement reposer sur la seule inéligibilité des formations en cause.</p>
              </section>

              <section id="eligibilite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. L'éligibilité CPF, hors du champ du contrôle de l'article L.6362-6</h2>
                <p style={{marginBottom: '1rem'}}>Dans les deux affaires, l'administration n'avait pas contesté la réalité des formations dispensées : elle s'était fondée uniquement sur leur non-éligibilité au CPF pour prononcer des sanctions financières de plus de 860 000 euros dans un cas, et plus de 250 000 euros dans l'autre. Le tribunal de Rouen censure cette approche, jugeant que l'éligibilité CPF ne relève pas du contrôle exercé sur le fondement de l'article L.&nbsp;6362-6, et en déduit une méconnaissance du champ d'application de la loi, entraînant l'annulation des décisions préfectorales.</p>
              </section>

              <section id="cdc-tiers">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. La Caisse des dépôts, un tiers à la relation contractuelle</h2>
                <p style={{marginBottom: '1rem'}}>Autre apport majeur de ces jugements : la qualification exacte des relations juridiques impliquant la Caisse des dépôts et consignations (CDC). L'article L.&nbsp;6323-9 du Code du travail précise que les conditions générales d'utilisation de la plateforme Mon compte formation énoncent les engagements souscrits par les titulaires de compte et les prestataires référencés, et l'article D.&nbsp;6353-1 prévoit que ces conditions générales d'utilisation tiennent lieu de convention entre le prestataire et le titulaire du compte lorsque les actions sont financées par la CDC et mises en œuvre dans le cadre du CPF.</p>
                <p style={{marginBottom: '1rem'}}>En s'appuyant explicitement sur l'article 2 des conditions générales d'utilisation de Mon compte formation, le tribunal rappelle que la Caisse des dépôts est un tiers à la relation contractuelle entre le titulaire du CPF et l'organisme de formation : elle n'intervient que dans l'usage de la plateforme, pas dans la relation contractuelle elle-même. En conséquence, la CDC ne peut être regardée comme le « cocontractant » au sens de l'article L.&nbsp;6362-6 du Code du travail, ce qui prive l'administration de la possibilité d'imposer, sur ce fondement, un remboursement à son profit.</p>
              </section>

              <section id="qui-demande">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Qui peut demander le remboursement des fonds CPF ?</h2>
                <p style={{marginBottom: '1rem'}}>Le tribunal opère ici une clarification importante, qui distingue deux régimes bien séparés. La Caisse des dépôts peut demander le remboursement des sommes indûment versées, mais sur le fondement de l'article L.&nbsp;6323-44 du Code du travail, pas sur celui de l'article L.&nbsp;6362-6 utilisé par l'administration dans les deux affaires jugées. L'administration, elle, ne peut pas détourner les mécanismes de contrôle de l'article L.&nbsp;6362-6 pour sanctionner une simple inéligibilité au CPF. Cette distinction met en lumière la pluralité des régimes juridiques applicables au CPF, chacun avec son propre fondement et sa propre autorité compétente.</p>
              </section>

              <section id="rejet-depenses">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Le rejet de dépenses, une sanction confirmée</h2>
                <p style={{marginBottom: '1rem'}}>Dans la seconde affaire, le tribunal valide en revanche une autre sanction : le rejet de dépenses non justifiées. L'article L.&nbsp;6362-5 du Code du travail impose de justifier l'origine, la nature et le rattachement des dépenses engagées par l'organisme ; à défaut, l'administration peut prononcer une sanction sur le fondement de l'article L.&nbsp;6362-7. En l'espèce, des sommes versées au conjoint de l'entrepreneur individuel, sans justification suffisante, ont été considérées comme des dépenses non rattachées à l'activité de formation, ce qui justifiait la sanction administrative prononcée sur ce point précis.</p>
              </section>

              <section id="portee">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. Ce que ces décisions changent pour les organismes de formation</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Une limite claire au pouvoir de sanction de l'État :</strong> l'administration ne peut pas utiliser le contrôle de la réalité des actions pour sanctionner indirectement leur éligibilité CPF.</li>
                  <li><strong>Un argument de défense solide :</strong> les organismes visés par une sanction fondée sur l'inéligibilité CPF, via l'article L.6362-6, disposent désormais d'un argument juridique éprouvé pour la contester.</li>
                  <li><strong>Une vigilance sur la qualification des relations contractuelles :</strong> les flux financiers CPF ne doivent pas être analysés comme une relation contractuelle directe avec la Caisse des dépôts, qui reste un tiers technique à la relation entre le titulaire et l'organisme.</li>
                  <li><strong>Une exigence de justification des dépenses maintenue :</strong> le contrôle financier reste pleinement opérant sur ce terrain, indépendamment de la question de l'éligibilité.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ces jugements pourraient ouvrir la voie à d'autres contentieux, notamment sur la base légale exacte des sanctions prononcées, la répartition des compétences entre l'administration et la Caisse des dépôts, et la qualification précise des relations issues de la plateforme CPF.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Faire valoir vos droits face à une sanction administrative</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Faites-vous une sanction administrative fondée sur l'inéligibilité CPF ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet accompagne les organismes de formation dans l'analyse de leurs procédures de contrôle, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/formations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Formations sur-mesure</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>Le tribunal administratif de Rouen trace une ligne claire : on ne peut pas sanctionner l'inéligibilité CPF via le contrôle de la réalité des actions de formation, et la Caisse des dépôts n'est pas le cocontractant de l'organisme de formation. Cette double clarification redessine les équilibres du contrôle du CPF et impose aux acteurs publics de revoir leurs pratiques, dans un contexte où le contentieux administratif autour du CPF ne cesse de se densifier.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Tribunal administratif de Rouen, 12 mars 2026, n°&nbsp;2305049</li>
                  <li>Tribunal administratif de Rouen, 12 mars 2026, n°&nbsp;2305058</li>
                  <li>Code du travail, articles L.&nbsp;6313-1 et L.&nbsp;6313-2 (définition des actions de formation)</li>
                  <li>Code du travail, article L.&nbsp;6323-6 (actions éligibles au CPF)</li>
                  <li>Code du travail, article L.&nbsp;6323-9 (conditions générales d'utilisation de Mon compte formation)</li>
                  <li>Code du travail, article L.&nbsp;6323-44 (remboursement des sommes indûment versées à la Caisse des dépôts)</li>
                  <li>Code du travail, articles L.&nbsp;6362-5, L.&nbsp;6362-6 et L.&nbsp;6362-7 (justification des dépenses, contrôle de la réalité des actions, sanctions)</li>
                  <li>Code du travail, article L.&nbsp;6362-7-1 (mécanisme de remboursement en cas d'inexécution)</li>
                  <li>Code du travail, article D.&nbsp;6353-1 (les CGU tenant lieu de convention entre prestataire et titulaire)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, notamment en cas de sanction administrative, un avocat compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>L'administration peut-elle sanctionner un organisme de formation pour inéligibilité CPF via l'article L.6362-6 ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non, selon le tribunal administratif de Rouen. Le contrôle prévu par l'article L.6362-6 du Code du travail porte uniquement sur la réalité des actions et les moyens mobilisés, pas sur leur éligibilité au CPF. Une sanction fondée sur la seule inéligibilité, sans contester la réalité des formations, méconnaît le champ d'application de ce texte.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>La Caisse des dépôts est-elle le cocontractant de l'organisme de formation ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. Le tribunal rappelle, en s'appuyant sur les conditions générales d'utilisation de Mon compte formation, que la Caisse des dépôts est un tiers à la relation contractuelle entre le titulaire du CPF et l'organisme de formation. Elle n'intervient que dans l'usage de la plateforme, pas dans le contrat lui-même.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Qui peut demander le remboursement de fonds CPF indûment mobilisés ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>La Caisse des dépôts peut le demander, mais sur le fondement de l'article L.6323-44 du Code du travail, pas sur celui de l'article L.6362-6 utilisé par l'administration dans les deux affaires jugées à Rouen. Cette distinction de fondement juridique est au cœur de la décision du tribunal.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Le rejet de dépenses non justifiées reste-t-il possible ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, cette sanction reste pleinement valable. Le tribunal a confirmé le rejet de dépenses versées au conjoint d'un entrepreneur individuel sans justification suffisante, sur le fondement des articles L.6362-5 et L.6362-7 du Code du travail, qui imposent de justifier l'origine, la nature et le rattachement de chaque dépense à l'activité de formation.</p>
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
              <a href="/blog/loi-anti-fraudes-cpf-organismes-formation-securiser" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>Ce que les organismes de formation doivent sécuriser dès maintenant →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=CPF" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>CPF</a>
                <a href="/blog?tag=Tribunal%20administratif" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Tribunal administratif</a>
                <a href="/blog?tag=Organisme%20de%20formation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Organisme de formation</a>
                <a href="/blog?tag=Caisse%20des%20d%C3%A9p%C3%B4ts" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Caisse des dépôts</a>
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
