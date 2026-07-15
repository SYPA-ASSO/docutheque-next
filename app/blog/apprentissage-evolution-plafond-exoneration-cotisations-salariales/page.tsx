import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Apprentissage : évolution du plafond d'exonération de cotisations salariales · Blog Cabinet Cholez-Pagotto`,
  description: `Depuis le 1er mars 2025, le plafond d'exonération de cotisations salariales pour les contrats d'apprentissage a été abaissé. Le BOSS a également révisé sa position le 3 juillet 2025.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/apprentissage-evolution-plafond-exoneration-cotisations-salariales',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/apprentissage-exoneration-employeur-scaled.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/apprentissage-exoneration-employeur-scaled.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Apprentissage : évolution du plafond d'exonération de cotisations salariales",
      "description": "Depuis le 1er mars 2025, le plafond d'exonération de cotisations salariales pour les contrats d'apprentissage a été abaissé. Le BOSS a également révisé sa position le 3 juillet 2025.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/apprentissage-exoneration-employeur-scaled.webp",
      "datePublished": "2025-07-03",
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
      "url": "https://cholez-pagotto.fr/blog/apprentissage-evolution-plafond-exoneration-cotisations-salariales",
      "keywords": ["Apprentissage", "Cotisations", "Exonération", "Paie", "BOSS", "SMIC", "CSG-CRDS"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment déterminer si un contrat est soumis à l'ancienne ou à la nouvelle règle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le critère est la date de signature du contrat. Si le contrat a été signé avant le 1er mars 2025, l'exonération reste totale dans la limite de 79 % du SMIC, quelle que soit la date de début d'exécution. Si le contrat a été signé à partir du 1er mars 2025, le nouveau plafond de 50 % du SMIC s'applique."
          }
        },
        {
          "@type": "Question",
          "name": "L'apprenti doit-il payer des cotisations salariales sur la totalité de sa rémunération après mars 2025 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Pour les contrats signés à partir du 1er mars 2025, seule la fraction de rémunération excédant 50 % du SMIC est soumise aux cotisations salariales et à la CSG-CRDS. La fraction inférieure à 50 % du SMIC reste exonérée."
          }
        },
        {
          "@type": "Question",
          "name": "Ces nouvelles règles s'appliquent-elles à l'employeur ou au salarié ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ces règles concernent les cotisations salariales, donc à la charge de l'apprenti (prélevées sur son salaire). Pour l'employeur, des règles spécifiques d'exonération patronale s'appliquent également, mais elles font l'objet d'une réglementation distincte."
          }
        },
        {
          "@type": "Question",
          "name": "Où consulter la version officielle et à jour du BOSS ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le Bulletin Officiel de la Sécurité Sociale est consultable sur boss.gouv.fr. La mise à jour du 3 juillet 2025 sur les contrats d'apprentissage y est publiée et fait foi en cas de contentieux avec l'URSSAF."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Apprentissage : nouveau plafond d'exonération 2025" }
      ]
    }
  ]
}

export default function ArticleApprentissage() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Apprentissage : nouveau plafond d'exonération 2025</span>
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
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Apprentissage : évolution du plafond d'exonération de cotisations salariales</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 3 juillet 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 5 min de lecture
                </span>
              </div>
                            <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/apprentissage-exoneration-employeur-scaled.webp"
                alt="Apprentissage : évolution du plafond d'exonération de cotisations salariales"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#regles" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Avant et après le 1er mars 2025 : règles distinctes</a></li>
                <li><a href="#detail" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Les nouvelles règles en détail</a></li>
                <li><a href="#boss" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Changement de position du BOSS (3 juillet 2025)</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Depuis le 1er mars 2025, le plafond d'exonération des cotisations salariales applicable aux contrats d'apprentissage a été abaissé. Les règles applicables diffèrent désormais selon la date de <strong>signature</strong> du contrat, et non plus seulement selon la date de début d'exécution.</p>
                <p style={{marginBottom: '1rem'}}>Le BOSS (Bulletin Officiel de la Sécurité Sociale) a d'abord adopté une position, puis l'a revue le 3 juillet 2025. Voici ce qu'il faut retenir.</p>
              </section>

              <section id="regles">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Avant et après le 1er mars 2025 : règles distinctes
                </h2>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Contrats signés</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Exonération cotisations salariales</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>CSG-CRDS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{borderBottom: '1px solid #e5e7eb', background: 'white'}}>
                        <td style={{padding: '10px 12px', color: '#374151', fontWeight: '600'}}>Avant le 28 février 2025</td>
                        <td style={{padding: '10px 12px', color: '#374151'}}>Totale dans la limite de <strong>79 % du SMIC</strong></td>
                        <td style={{padding: '10px 12px', color: '#374151'}}>Intégralement exonéré</td>
                      </tr>
                      <tr style={{borderBottom: '1px solid #e5e7eb', background: '#f8fafc'}}>
                        <td style={{padding: '10px 12px', color: '#374151', fontWeight: '600'}}>À partir du 1er mars 2025</td>
                        <td style={{padding: '10px 12px', color: '#374151'}}>Limitée à la fraction ≤ <strong>50 % du SMIC</strong></td>
                        <td style={{padding: '10px 12px', color: '#374151'}}>Applicable au-delà du seuil (abattement 1,75 %)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="detail">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Les nouvelles règles en détail
                </h2>
                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  Contrats signés avant le 28 février 2025
                </h3>
                <p style={{marginBottom: '1rem'}}>L'exonération des cotisations salariales (d'origine légale et conventionnelle) reste <strong>totale</strong>, dans la limite de 79 % du SMIC. Ces rémunérations demeurent également exonérées de CSG-CRDS.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  Contrats signés à partir du 1er mars 2025
                </h3>
                <p style={{marginBottom: '1rem'}}>L'exonération de cotisations salariales est désormais <strong>limitée à la fraction de rémunération n'excédant pas 50 % du SMIC</strong>. Au-delà de ce seuil, le salaire de l'apprenti est soumis à la CSG-CRDS après application d'un abattement de 1,75 % pour frais professionnels.</p>
                <div style={{background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>💡 À noter :</strong> dans les entreprises de plus de 10 salariés, la part de rémunération soumise à la CSG-CRDS est également assujettie à la taxe sur les salaires.
                  </p>
                </div>
              </section>

              <section id="boss">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Changement de position du BOSS (3 juillet 2025)
                </h2>
                <p style={{marginBottom: '1rem'}}>Le 10 avril 2025, le BOSS précisait que seule la rémunération des apprentis ayant <em>commencé</em> leur contrat avant le 1er mars 2025 bénéficiait du plafond d'exonération de 79 % du SMIC. Ainsi, si l'exécution du contrat débutait à compter du 1er mars, le plafond de 50 % devait s'appliquer, même si la signature était antérieure.</p>
                <p style={{marginBottom: '1rem'}}>Cependant, le <strong>3 juillet 2025, cette position a été revue</strong>. Dorénavant, pour tout contrat <strong>signé avant le 1er mars 2025</strong>, la rémunération de l'apprenti reste exonérée de cotisations salariales dans la limite de 79 % du SMIC, même si son premier jour d'exécution intervient à compter de cette date. De plus, sa rémunération reste intégralement exclue de l'assiette CSG-CRDS.</p>
                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Règle clé à retenir</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    Le critère déterminant est la <strong>date de signature du contrat</strong>, non la date de début d'exécution. Un contrat signé avant le 1er mars 2025 mais dont l'exécution commence après reste soumis aux règles anciennes (79 % du SMIC).
                  </p>
                </div>
              </section>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ACCOMPAGNEMENT</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Recruter et gérer en apprentissage</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Contrat d'apprentissage, exonérations, obligations d'employeur : le cabinet vous accompagne pour sécuriser vos recrutements et vos formalités.</p>
                  <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Être accompagné →</a>
                </div>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment déterminer si un contrat est soumis à l'ancienne ou à la nouvelle règle ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le critère est la date de signature du contrat. Si le contrat a été signé avant le 1er mars 2025, l'exonération reste totale dans la limite de 79 % du SMIC, quelle que soit la date de début d'exécution. Si le contrat a été signé à partir du 1er mars 2025, le nouveau plafond de 50 % du SMIC s'applique.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'apprenti doit-il payer des cotisations salariales sur la totalité de sa rémunération après mars 2025 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Pour les contrats signés à partir du 1er mars 2025, seule la fraction de rémunération excédant 50 % du SMIC est soumise aux cotisations salariales et à la CSG-CRDS. La fraction inférieure à 50 % du SMIC reste exonérée.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Ces nouvelles règles s'appliquent-elles à l'employeur ou au salarié ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Ces règles concernent les cotisations salariales, donc à la charge de l'apprenti (prélevées sur son salaire). Pour l'employeur, des règles spécifiques d'exonération patronale s'appliquent également, mais elles font l'objet d'une réglementation distincte.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Où consulter la version officielle et à jour du BOSS ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le Bulletin Officiel de la Sécurité Sociale est consultable sur boss.gouv.fr. La mise à jour du 3 juillet 2025 sur les contrats d'apprentissage y est publiée et fait foi en cas de contentieux avec l'URSSAF.</p>
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
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets. Défend une approche du droit accessible, opérationnelle et orientée impact social ainsi qu'une meilleure maîtrise de leurs droits assurantiels. 
              </p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Expert auprès de collectifs francophones d'orientation juridique.
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
                <a href="/blog?tag=Apprentissage" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Apprentissage</a>
                <a href="/blog?tag=Cotisations" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Cotisations</a>
                <a href="/blog?tag=Exon%C3%A9ration" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Exonération</a>
                <a href="/blog?tag=Paie" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Paie</a>
                <a href="/blog?tag=BOSS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>BOSS</a>
                <a href="/blog?tag=SMIC" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>SMIC</a>
                <a href="/blog?tag=CSG-CRDS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>CSG-CRDS</a>
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