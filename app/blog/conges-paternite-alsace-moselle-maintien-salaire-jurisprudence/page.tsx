import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Congés de paternité en Alsace-Moselle : droit à un maintien de salaire · Blog Cabinet Cholez-Pagotto`,
  description: `La Cour de cassation rappelle qu'en Alsace-Moselle, les salariés en congé de paternité ont droit au maintien de leur salaire en application du droit local alsacien-mosellan.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/conges-paternite-alsace-moselle-maintien-salaire-jurisprudence',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Congés de paternité en Alsace-Moselle : droit à un maintien de salaire",
      "description": "La Cour de cassation rappelle qu'en Alsace-Moselle, les salariés en congé de paternité ont droit au maintien de leur salaire en application du droit local alsacien-mosellan.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.webp",
      "datePublished": "2025-06-11",
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
      "url": "https://cholez-pagotto.fr/blog/conges-paternite-alsace-moselle-maintien-salaire-jurisprudence",
      "keywords": ["Congés paternité", "Alsace-Moselle", "Jurisprudence", "Droit local", "Maintien de salaire", "Cour de cassation"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le maintien de salaire s'applique-t-il aussi au congé maternité en Alsace-Moselle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le droit local alsacien-mosellan prévoit le maintien de salaire pour toute suspension du contrat de travail pour un motif personnel indépendant de la volonté du salarié et pour une durée relativement courte. Cela couvre notamment le congé maternité et les arrêts maladie de courte durée."
          }
        },
        {
          "@type": "Question",
          "name": "L'employeur peut-il déduire les IJSS du maintien de salaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L'employeur peut déduire de la rémunération maintenue le montant des indemnités journalières de sécurité sociale (IJSS) versées au salarié. Le maintien de salaire se fait donc en complément des IJSS, et non en sus."
          }
        },
        {
          "@type": "Question",
          "name": "Cette jurisprudence s'applique-t-elle dans toute la France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Cette obligation de maintien de salaire est spécifique au droit local alsacien-mosellan, applicable uniquement dans le Bas-Rhin, le Haut-Rhin et la Moselle. Dans le reste de la France, les salariés en congé de paternité ne bénéficient que des IJSS, sauf accord d'entreprise ou convention collective plus favorable."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Congés paternité Alsace-Moselle" }
      ]
    }
  ]
}

export default function ArticleCongesPaternite() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Congés paternité Alsace-Moselle</span>
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
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Congés de paternité en Alsace-Moselle : droit à un maintien de salaire</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 11 juin 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 3 min de lecture
                </span>
              </div>
                            <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.webp"
                alt="Congés de paternité en Alsace-Moselle : droit à un maintien de salaire"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#cadre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Le congé de paternité : cadre général</a></li>
                <li><a href="#arret" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>L'arrêt du 27 mai 2025</a></li>
                <li><a href="#portee" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Portée et note pratique</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="cadre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Le congé de paternité : cadre général
                </h2>
                <p style={{marginBottom: '1rem'}}>Tout salarié peut prendre un congé de paternité et d'accueil de l'enfant de <strong>25 jours calendaires</strong>, ou <strong>32 jours en cas de naissances multiples</strong>. Pendant ce congé, il perçoit des indemnités journalières de la sécurité sociale, sous réserve de remplir les conditions requises.</p>
                <p style={{marginBottom: '1rem'}}>La <a href="https://www.courdecassation.fr/decision/68355bf4eba840c5361d72aa" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba'}}>Cour de cassation</a> a récemment rappelé qu'en Alsace-Moselle (Bas-Rhin, Haut-Rhin, Moselle), les salariés en congé de paternité doivent bénéficier du <strong>maintien de leur salaire</strong>.</p>
              </section>

              <section id="arret">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  L'arrêt du 27 mai 2025 : rejet de l'argument de l'employeur
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans un arrêt rendu le 27 mai 2025, la Cour de cassation s'est prononcée sur la situation d'un salarié soumis au droit local alsacien-mosellan, qui n'avait pas perçu sa rémunération pendant son congé paternité.</p>
                <p style={{marginBottom: '1rem'}}>L'employeur justifiait cette absence de maintien salarial en expliquant que ce congé était un <em>choix personnel</em> et non une obligation légale, ce qui, selon lui, excluait tout maintien de rémunération.</p>
                <p style={{marginBottom: '1rem'}}>Les magistrats ont <strong>rejeté cet argument</strong>, se fondant sur le droit local qui prévoit, via l'article <strong>L.1226-23 du Code du travail</strong>, que tout salarié dont le contrat est suspendu pour un motif personnel indépendant de sa volonté et pour une durée relativement courte conserve son droit à rémunération.</p>
                <p style={{marginBottom: '1rem'}}>La Haute juridiction a ainsi estimé que le congé paternité, qui est une absence justifiée sans comportement fautif, entre dans ce cadre et ouvre donc droit au maintien du salaire.</p>
              </section>

              <section id="portee">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Portée et note pratique pour les employeurs
                </h2>
                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Note pour les employeurs alsaciens-mosellans</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    Dans les trois départements du Bas-Rhin, du Haut-Rhin et de la Moselle, l'employeur doit <strong>maintenir la rémunération</strong> du salarié en congé de paternité, en déduisant le montant des indemnités journalières versées par la sécurité sociale. Cette décision ne concerne <strong>que les salariés couverts par le droit local d'Alsace-Moselle</strong>.
                  </p>
                </div>
                <p style={{marginBottom: '1rem', marginTop: '1rem'}}>Vous êtes employeur, membre de CSE ou salarié ? Des questions sur vos droits en matière de congés ? <a href="/information-sur-vos-droits" style={{color: '#1a4fba', fontWeight: '600', textDecoration: 'none'}}>Sollicitez nos services d'information →</a></p>
              </section>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Prévoyance et maintien de salaire</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Au-delà du congé paternité, une prévoyance et un contrat de maintien de salaire protègent votre rémunération en cas d'arrêt. En courtier, le cabinet compare et vous oriente.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le maintien de salaire s'applique-t-il aussi au congé maternité en Alsace-Moselle ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le droit local alsacien-mosellan prévoit le maintien de salaire pour toute suspension du contrat de travail pour un motif personnel indépendant de la volonté du salarié et pour une durée relativement courte. Cela couvre notamment le congé maternité et les arrêts maladie de courte durée.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'employeur peut-il déduire les IJSS du maintien de salaire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. L'employeur peut déduire de la rémunération maintenue le montant des indemnités journalières de sécurité sociale (IJSS) versées au salarié. Le maintien de salaire se fait donc en complément des IJSS, et non en sus.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Cette jurisprudence s'applique-t-elle dans toute la France ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Cette obligation de maintien de salaire est spécifique au droit local alsacien-mosellan, applicable uniquement dans le Bas-Rhin, le Haut-Rhin et la Moselle. Dans le reste de la France, les salariés en congé de paternité ne bénéficient que des IJSS, sauf accord d'entreprise ou convention collective plus favorable.</p>
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
                <span key="Congés paternité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Congés paternité</span>
                <span key="Alsace-Moselle" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Alsace-Moselle</span>
                <span key="Jurisprudence" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Jurisprudence</span>
                <span key="Droit local" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit local</span>
                <span key="Maintien de salaire" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Maintien de salaire</span>
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