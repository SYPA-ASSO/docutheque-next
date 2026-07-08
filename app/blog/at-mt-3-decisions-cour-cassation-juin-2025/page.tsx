import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "AT/MP : trois décisions récentes de la Cour de cassation à retenir · Blog Cabinet Cholez-Pagotto",
  description: "Découvrez l'essentiel de trois arrêts rendus le 26 juin 2025 par la Cour de cassation en matière d'accidents du travail et maladies professionnelles.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/at-mt-3-decisions-cour-cassation-juin-2025',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/AT-MT-cours-de-cassation-scaled.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/AT-MT-cours-de-cassation-scaled.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "AT/MP : trois décisions récentes de la Cour de cassation à retenir",
      "description": "Découvrez l'essentiel de trois arrêts rendus le 26 juin 2025 par la Cour de cassation en matière d'accidents du travail et maladies professionnelles.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/AT-MT-cours-de-cassation-scaled.webp",
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
      "url": "https://cholez-pagotto.fr/blog/at-mt-3-decisions-cour-cassation-juin-2025",
      "keywords": ["AT/MP", "Cour de cassation", "Droit du travail", "Jurisprudence", "Faute inexcusable", "Maladie professionnelle"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Une décision rejetant le caractère professionnel bloque-t-elle l'action récursoire de la caisse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La Cour de cassation a précisé (arrêt du 26 juin 2025, n°23-16.183) qu'une décision ayant écarté le caractère professionnel d'un accident ou d'une maladie ne fait pas obstacle à l'action récursoire de la caisse contre l'employeur en cas de faute inexcusable."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle date retenir pour apprécier la durée d'exposition au risque d'une maladie professionnelle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La durée d'exposition au risque doit être appréciée à la date de la déclaration de maladie professionnelle accompagnée du certificat médical initial, et non à la date de première constatation médicale (Cass., 26 juin 2025, n°23-15.112)."
          }
        },
        {
          "@type": "Question",
          "name": "L'action en faute inexcusable interrompt-elle la prescription des actions connexes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L'action engagée pour faire reconnaître la faute inexcusable de l'employeur interrompt la prescription de toute autre action fondée sur le même fait dommageable, conformément aux articles 2241 du Code civil et L.431-2 du CSS (Cass., 26 juin 2025, n°23-13.295)."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "AT/MP : trois décisions de la Cour de cassation" }
      ]
    }
  ]
}

export default function ArticleATMP() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>AT/MP · Cour de cassation juin 2025</span>
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
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>AT/MP : trois décisions récentes de la Cour de cassation à retenir</h1>
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
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/AT-MT-cours-de-cassation-scaled.webp"
                alt="AT/MP : trois décisions de la Cour de cassation juin 2025"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5'}}>Introduction</a></li>
                <li><a href="#action-recursoire" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5'}}>I. Action récursoire de la caisse : l'inopposabilité ne fait pas obstacle</a></li>
                <li><a href="#date-exposition" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5'}}>II. Maladie professionnelle : la date de première constatation ne suffit pas</a></li>
                <li><a href="#prescription" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5'}}>III. Faute inexcusable : l'action interrompt la prescription des actions connexes</a></li>
                <li><a href="#faq" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5'}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le 26 juin 2025, la Cour de cassation a rendu plusieurs décisions significatives en matière d'accidents du travail et de maladies professionnelles (AT/MP). Ces arrêts clarifient trois points importants du contentieux AT/MP : l'étendue de l'action récursoire de la caisse, la date de référence pour apprécier la durée d'exposition au risque, et l'effet interruptif de l'action en faute inexcusable sur la prescription.</p>
              </section>

              <section id="action-recursoire">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Action récursoire de la caisse : l'inopposabilité du caractère professionnel n'est pas un obstacle
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans un arrêt du 26 juin 2025 (n°23-16.183), la Cour de cassation a précisé qu'une décision judiciaire ayant écarté le caractère professionnel d'un accident ou d'une maladie ne bloque pas la caisse dans l'exercice de son action récursoire contre l'employeur.</p>
                <p style={{marginBottom: '0.75rem'}}>Elle rappelle que :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Selon les articles <strong>L.452-2, L.452-3 et D.452-1 du CSS</strong>, en cas de faute inexcusable, la majoration de rente versée à la victime est avancée par la caisse, qui peut en récupérer le montant auprès de l'employeur.</li>
                  <li>La jurisprudence distingue les rapports caisse/victime et caisse/employeur : la victime peut faire reconnaître la faute inexcusable même si la caisse et l'employeur contestent le caractère professionnel, et inversement.</li>
                  <li>La <strong>loi du 17 décembre 2012</strong> a confirmé que la reconnaissance de la faute inexcusable emporte pour l'employeur l'obligation de rembourser la caisse, indépendamment des conditions d'information pendant l'instruction.</li>
                </ul>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.5rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Point clé :</strong> Dans l'affaire jugée, la Cour a cassé l'arrêt d'appel qui avait rejeté la demande de remboursement de la caisse au motif que la maladie n'était pas reconnue comme professionnelle.
                  </p>
                </div>
              </section>

              <section id="date-exposition">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Maladie professionnelle : la date de première constatation médicale ne suffit pas
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans une autre décision du 26 juin 2025 (n°23-15.112), la Cour a rappelé une distinction essentielle entre deux dates :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>La <strong>date de première constatation médicale</strong> sert à vérifier le délai de prise en charge : c'est la date à laquelle le médecin a pour la première fois constaté les symptômes liés à la maladie professionnelle.</li>
                  <li>La <strong>durée d'exposition au risque</strong>, en revanche, doit être appréciée à la date de la <em>déclaration de maladie professionnelle accompagnée du certificat médical initial</em>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Cette distinction a des conséquences pratiques importantes, notamment pour les maladies à tableau avec conditions d'exposition (durée minimale d'exposition requise) : confondre ces deux dates peut conduire à un refus de reconnaissance erroné.</p>
              </section>

              <section id="prescription">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Faute inexcusable : l'action interrompt la prescription des actions connexes
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans un arrêt du 26 juin 2025 (n°23-13.295), la Cour a jugé que l'action engagée pour faire reconnaître la <strong>faute inexcusable de l'employeur interrompt la prescription</strong> de toute autre action fondée sur le même fait dommageable.</p>
                <p style={{marginBottom: '1rem'}}>Ce principe est fondé sur les articles <strong>2241 du Code civil</strong> et <strong>L.431-2 du CSS</strong>. Concrètement :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>La CPAM reste seule redevable des indemnités versées à la victime ou à ses ayants droit.</li>
                  <li>Son recours ne peut viser que l'employeur, et non un tiers.</li>
                  <li>L'interruption de prescription bénéficie également aux actions dérivées du même fait.</li>
                </ul>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.5rem 0', fontSize: '12px', color: '#1e3a5f'}}>
                  <strong>Références</strong> : Cass. 2e civ., 26 juin 2025, n°23-16.183 ; n°23-15.112 ; n°23-13.295.
                </div>
              </section>

                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Prévoyance et accidents du travail</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Un accident du travail ou une maladie professionnelle peut entraîner une perte de revenu durable. Une prévoyance adaptée complète les indemnités. En courtier, le cabinet fait le point sur votre couverture.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  {[
                    {
                      q: "Une décision rejetant le caractère professionnel bloque-t-elle l'action récursoire de la caisse ?",
                      a: "Non. La Cour de cassation a précisé qu'une décision ayant écarté le caractère professionnel d'un accident ou d'une maladie ne fait pas obstacle à l'action récursoire de la caisse contre l'employeur en cas de faute inexcusable (Cass., 26 juin 2025, n°23-16.183)."
                    },
                    {
                      q: "Quelle date retenir pour apprécier la durée d'exposition au risque d'une maladie professionnelle ?",
                      a: "La durée d'exposition au risque doit être appréciée à la date de la déclaration de maladie professionnelle accompagnée du certificat médical initial, et non à la date de première constatation médicale (Cass., 26 juin 2025, n°23-15.112)."
                    },
                    {
                      q: "L'action en faute inexcusable interrompt-elle la prescription des actions connexes ?",
                      a: "Oui. L'action engagée pour faire reconnaître la faute inexcusable de l'employeur interrompt la prescription de toute autre action fondée sur le même fait dommageable, conformément aux articles 2241 du Code civil et L.431-2 du CSS (Cass., 26 juin 2025, n°23-13.295)."
                    },
                    {
                      q: "Qu'est-ce que la faute inexcusable de l'employeur en AT/MP ?",
                      a: "La faute inexcusable est définie comme un manquement à l'obligation de sécurité de résultat de l'employeur, qui avait ou aurait dû avoir conscience du danger auquel était exposé le salarié et n'a pas pris les mesures nécessaires pour l'en préserver. Elle ouvre droit à une majoration de rente et à une réparation complémentaire pour le salarié."
                    },
                  ].map((faq, i) => (
                    <details key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                      <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                        <span>{faq.q}</span>
                        <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                      </summary>
                      <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>{faq.a}</p>
                    </details>
                  ))}
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
                Membre du CRFF. Expert auprès de collectifs francophones d'orientation juridique.
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
                {['AT/MP', 'Jurisprudence', 'Cour de cassation', 'Faute inexcusable', 'Droit du travail'].map(tag => (
                  <span key={tag} style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>{tag}</span>
                ))}
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