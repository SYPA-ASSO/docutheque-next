import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `CPF 2026 : nouvelles conditions de mobilisation des droits (présence à l'examen, certification déjà obtenue) · Blog Cabinet Cholez-Pagotto`,
  description: `Depuis le 27 juin 2026, mobiliser son CPF suppose de se présenter à l'examen et de ne pas déjà détenir la certification visée. Ce que risque le titulaire, et non l'organisme de formation, en cas d'absence non justifiée.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/cpf-2026-nouvelles-conditions-mobilisation-droits',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-2026-nouvelles-conditions-mobilisation.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-2026-nouvelles-conditions-mobilisation.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "CPF 2026 : nouvelles conditions de mobilisation des droits (présence à l'examen, certification déjà obtenue)",
      "description": "Depuis le 27 juin 2026, mobiliser son CPF suppose de se présenter à l'examen et de ne pas déjà détenir la certification visée. Ce que risque le titulaire, et non l'organisme de formation, en cas d'absence non justifiée.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-2026-nouvelles-conditions-mobilisation.webp",
      "datePublished": "2026-07-15",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/cpf-2026-nouvelles-conditions-mobilisation-droits",
      "keywords": ["CPF", "Compte personnel de formation", "Caisse des dépôts", "Organisme de formation", "Loi fraudes sociales", "Certification"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Qui doit rembourser en cas d'absence à l'examen : le titulaire ou l'organisme de formation ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est le titulaire du CPF, pas l'organisme de formation. La loi désigne expressément le titulaire du compte comme débiteur : la Caisse des dépôts lui demande le remboursement des sommes déjà utilisées. L'organisme de formation, lui, ne peut plus être payé par le CPF et doit se faire régler directement par le titulaire." } },
        { "@type": "Question", "name": "Peut-on encore utiliser son CPF pour une certification déjà obtenue ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, sauf pour les formations linguistiques. Depuis le 27 juin 2026, l'article L.6323-6 du Code du travail interdit de mobiliser ses droits CPF pour financer une formation sanctionnée par une certification ou un bloc de compétences déjà obtenu." } },
        { "@type": "Question", "name": "Qu'est-ce qu'un motif légitime d'absence à l'examen ?", "acceptedAnswer": { "@type": "Answer", "text": "La loi ne le définit pas elle-même : un décret doit encore en préciser les modalités d'appréciation. En pratique, les hypothèses les plus probables sont la maladie, l'accident ou un cas de force majeure, mais aucune liste officielle n'existe à ce jour." } },
        { "@type": "Question", "name": "Les taux de réussite par organisme de formation seront-ils bientôt publics ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, mais pas immédiatement. Les articles L.6113-8-1 et L.6353-12 du Code du travail, qui organisent cette publication, entrent en vigueur à une date fixée par décret, au plus tard un an après la promulgation de la loi, donc au plus tard le 25 juin 2027." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "CPF 2026 : nouvelles conditions de mobilisation" }
    ] }
  ]
}

export default function ArticleCpf2026Conditions() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>CPF 2026 : nouvelles conditions de mobilisation</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMATION</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>LOI DU 25 JUIN 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>CPF 2026 : nouvelles conditions de mobilisation des droits</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 15 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 12 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/cpf-2026-nouvelles-conditions-mobilisation.webp" alt="CPF 2026 : nouvelles conditions de mobilisation des droits" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>C'est le titulaire du CPF, pas l'organisme de formation.</li>
                <li>Sauf pour les formations linguistiques. Depuis le 27 juin 2026, l'article L.6323-6 du Code du travail interdit de mobiliser ses droits CPF pour financer une formation sanctionnée par une…</li>
                <li>La loi ne le définit pas elle-même : un décret doit encore en préciser les modalités d'appréciation.</li>
                <li>Mais pas immédiatement. Les articles L.6113-8-1 et L.6353-12 du Code du travail, qui organisent cette publication, entrent en vigueur à une date fixée par décret, au plus tard un an après la…</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#deux-conditions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. Deux conditions nouvelles pour mobiliser son CPF</a></li>
                <li><a href="#qui-rembourse" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. En cas d'absence : qui paie, et qui rembourse qui ?</a></li>
                <li><a href="#majoration" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. Les majorations en cas de retard ou de fraude</a></li>
                <li><a href="#motif-legitime" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Le motif légitime, encore à préciser</a></li>
                <li><a href="#transparence" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. La transparence à venir : taux de présence et de réussite publiés</a></li>
                <li><a href="#pratique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. Ce que ça change concrètement</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Depuis le 27 juin 2026, mobiliser son compte personnel de formation (CPF) ne suffit plus à garantir la prise en charge de bout en bout d'une formation certifiante. La loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales impose deux conditions nouvelles, directement inscrites à l'article L.&nbsp;6323-6 du Code du travail, qui concernent au premier chef les titulaires du compte, mais dont les organismes de formation doivent aussi comprendre précisément la portée.</p>
                <p style={{marginBottom: '1rem'}}>Beaucoup de synthèses publiées ces derniers jours attribuent, à tort, la charge du remboursement à l'organisme de formation. Ce n'est pas ce que dit le texte. Cet article rétablit la mécanique exacte, telle qu'elle ressort de l'article L.&nbsp;6323-6 modifié.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}depuis le 27 juin 2026, le CPF ne peut plus financer une certification déjà obtenue (sauf langues) ni une formation dont le titulaire ne se présente pas aux examens sans motif légitime ; dans ce dernier cas, c'est le titulaire, pas l'organisme de formation, que la Caisse des dépôts appelle en remboursement, avec une majoration pouvant atteindre 50&nbsp;% en cas de fraude.
                  </p>
                </div>
              </section>

              <section id="deux-conditions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. Deux conditions nouvelles pour mobiliser son CPF</h2>
                <p style={{marginBottom: '1rem'}}>La première condition concerne l'éligibilité même de la formation. Les droits inscrits sur le compte ne peuvent plus financer une action sanctionnée par une certification, ou la validation d'un ou plusieurs blocs de compétences, déjà obtenue par le titulaire, à l'exception des certifications linguistiques, qui restent finançables même en cas de renouvellement (une certification de langue a en effet souvent une durée de validité limitée, ce qui justifie l'exception).</p>
                <p style={{marginBottom: '1rem'}}>La seconde condition concerne l'assiduité. Le titulaire d'un CPF mobilisé pour une formation certifiante doit désormais s'inscrire et se présenter aux évaluations et épreuves prévues par le ministère ou l'organisme certificateur. Ce n'est plus une simple recommandation de bon sens : c'est une condition légale de la prise en charge elle-même.</p>
              </section>

              <section id="qui-rembourse">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. En cas d'absence : qui paie, et qui rembourse qui ?</h2>
                <p style={{marginBottom: '1rem'}}>C'est le point le plus mal compris de cette réforme, y compris dans certaines analyses déjà publiées. Le texte de l'article L.&nbsp;6323-6, dans sa rédaction issue de l'article 59 de la loi, est pourtant sans ambiguïté : <em>« La Caisse des dépôts et consignations demande au titulaire le remboursement des sommes déjà utilisées »</em>. Le débiteur désigné par la loi est le titulaire du compte, c'est-à-dire le salarié ou le demandeur d'emploi, pas l'organisme de formation.</p>
                <p style={{marginBottom: '1rem'}}>Ce que risque en réalité l'organisme de formation est différent, et déjà présent dans les analyses professionnelles publiées sur le sujet : en cas d'absence non justifiée à l'examen, le titulaire ne peut plus régler l'organisme avec ses droits CPF, il doit donc le payer directement, de sa poche. Le risque pour l'organisme n'est donc pas un remboursement à la Caisse des dépôts, mais un <strong>risque d'impayé</strong> si le titulaire ne s'exécute pas spontanément.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>À corriger si vous l'avez lu ailleurs.</strong>{' '}Non, la loi ne prévoit pas que l'organisme de formation rembourse la Caisse des dépôts en cas d'absence du candidat à l'examen. C'est le titulaire du compte qui doit rembourser la Caisse, et l'organisme qui doit se faire payer directement par le titulaire pour la partie non couverte par le CPF.
                  </p>
                </div>
              </section>

              <section id="majoration">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. Les majorations en cas de retard ou de fraude</h2>
                <p style={{marginBottom: '1rem'}}>Le remboursement demandé au titulaire suit les modalités de recouvrement prévues aux articles L.&nbsp;6323-45 à L.&nbsp;6323-45-2 du Code du travail. En cas de retard de remboursement, une majoration de 10&nbsp;% peut être appliquée. En cas de manœuvres frauduleuses, cette majoration peut atteindre 50&nbsp;% des sommes versées ou utilisées (article L.&nbsp;6323-45-1 nouveau), avec une possibilité de remise gracieuse.</p>
                <p style={{marginBottom: '1rem'}}>Les pouvoirs de recouvrement de la Caisse des dépôts sont par ailleurs renforcés dans leur ensemble par les articles 44, 60, 61 et 62 de la loi, avec notamment la possibilité de recourir à une identité d'emprunt pour les contrôles liés au CPF (article L.&nbsp;6333-7-3 nouveau) et l'accès à des données du répertoire de gestion des carrières unique pour mieux apprécier l'éligibilité des titulaires en fin de carrière.</p>
              </section>

              <section id="motif-legitime">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Le motif légitime, encore à préciser</h2>
                <p style={{marginBottom: '1rem'}}>La loi prévoit une exception : le titulaire absent pour un motif légitime n'encourt pas les conséquences décrites plus haut. Mais elle ne définit pas elle-même ce qu'est un motif légitime, elle renvoie ce soin à un décret, qui n'est pas encore paru à la date de cet article. Les hypothèses les plus probables, par analogie avec d'autres dispositifs (maladie, accident, cas de force majeure), ne sont donc pour l'instant que des hypothèses, pas des certitudes juridiques.</p>
              </section>

              <section id="transparence">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. La transparence à venir : taux de présence et de réussite publiés</h2>
                <p style={{marginBottom: '1rem'}}>La loi organise, par ailleurs, la publication par les services de l'État du nombre de candidats inscrits et présents aux sessions d'examen, ainsi que du taux de réussite, pour chaque certification (article L.&nbsp;6113-8-1 nouveau). Les organismes de formation devront eux-mêmes publier sur leur site internet ces données les concernant, et les transmettre aux apprenants avant toute inscription ou tout règlement de frais (article L.&nbsp;6353-12 nouveau).</p>
                <p style={{marginBottom: '1rem'}}>Contrairement au reste de la loi, ces deux articles n'entrent pas en vigueur immédiatement : leur application est renvoyée à une date fixée par décret, au plus tard un an après la promulgation, soit au plus tard le 25 juin 2027.</p>
              </section>

              <section id="pratique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. Ce que ça change concrètement</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Pour le titulaire :</strong> vérifier, avant de s'inscrire, qu'il ne détient pas déjà la certification visée, et s'assurer qu'il pourra réellement se libérer pour l'examen final avant de mobiliser ses droits.</li>
                  <li><strong>Pour l'organisme de formation :</strong> le sujet n'est plus seulement pédagogique, il devient aussi contractuel et administratif. Nous détaillons les mesures à prendre dans un article dédié, <a href="/blog/loi-anti-fraudes-cpf-organismes-formation-securiser" style={{color: '#1a4fba', textDecoration: 'underline'}}>Loi anti-fraudes CPF : ce que les organismes de formation doivent sécuriser dès maintenant</a>.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Besoin d'y voir clair sur votre situation ?</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Titulaire ou organisme de formation, une question sur le CPF ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet accompagne les organismes de formation dans leur mise en conformité, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/formations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Formations sur-mesure</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>Le CPF reste un droit du titulaire, mais son usage est désormais assorti d'une responsabilité personnelle claire : se présenter à l'examen, et ne pas chercher à refinancer une certification déjà acquise. Le risque financier reste, juridiquement, sur les épaules du titulaire, pas de l'organisme de formation, même si ce dernier doit composer avec un risque d'impayé bien réel. Cette distinction n'est pas un détail technique, elle conditionne la façon dont chacun doit se préparer à ces nouvelles règles.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, article 59 (JORF du 26 juin 2026)</li>
                  <li>Code du travail, article L.&nbsp;6323-6 modifié (conditions de mobilisation du CPF, obligation de présentation aux examens, remboursement par le titulaire)</li>
                  <li>Code du travail, articles L.&nbsp;6323-45 à L.&nbsp;6323-45-2 (modalités de recouvrement, majorations de 10 % et 50 %)</li>
                  <li>Code du travail, article L.&nbsp;6113-8-1 nouveau (publication des taux de présence et de réussite)</li>
                  <li>Code du travail, article L.&nbsp;6353-12 nouveau (publication par l'organisme de formation, entrée en vigueur différée)</li>
                  <li>Conseil constitutionnel, décision n°&nbsp;2026-904 DC du 18 juin 2026</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Plusieurs modalités pratiques restent subordonnées à un décret non encore publié à la date de rédaction.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Qui doit rembourser en cas d'absence à l'examen : le titulaire ou l'organisme de formation ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>C'est le titulaire du CPF, pas l'organisme de formation. La loi désigne expressément le titulaire du compte comme débiteur : la Caisse des dépôts lui demande le remboursement des sommes déjà utilisées. L'organisme de formation, lui, ne peut plus être payé par le CPF et doit se faire régler directement par le titulaire.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Peut-on encore utiliser son CPF pour une certification déjà obtenue ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non, sauf pour les formations linguistiques. Depuis le 27 juin 2026, l'article L.6323-6 du Code du travail interdit de mobiliser ses droits CPF pour financer une formation sanctionnée par une certification ou un bloc de compétences déjà obtenu.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Qu'est-ce qu'un motif légitime d'absence à l'examen ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>La loi ne le définit pas elle-même : un décret doit encore en préciser les modalités d'appréciation. En pratique, les hypothèses les plus probables sont la maladie, l'accident ou un cas de force majeure, mais aucune liste officielle n'existe à ce jour.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Les taux de réussite par organisme de formation seront-ils bientôt publics ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, mais pas immédiatement. Les articles L.6113-8-1 et L.6353-12 du Code du travail, qui organisent cette publication, entrent en vigueur à une date fixée par décret, au plus tard un an après la promulgation de la loi, donc au plus tard le 25 juin 2027.</p>
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
              <a href="/blog/loi-fraudes-sociales-fiscales-2026-mesures-rh-paie" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px'}}>Loi de lutte contre les fraudes sociales et fiscales : toutes les mesures RH et paie →</a>
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
                <a href="/blog?tag=Organisme%20de%20formation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Organisme de formation</a>
                <a href="/blog?tag=Caisse%20des%20d%C3%A9p%C3%B4ts" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Caisse des dépôts</a>
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
