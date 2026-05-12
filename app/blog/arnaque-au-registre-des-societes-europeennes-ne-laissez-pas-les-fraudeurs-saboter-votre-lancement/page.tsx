import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Arnaque au « Registre des Sociétés Européennes » : ne laissez pas les fraudeurs saboter votre lancement · Blog Docuthèque`,
  description: `La création d'une entreprise vous expose aux fraudes. Découvrez comment l'arnaque au Registre des Sociétés Européennes fonctionne et comment vous protéger efficacement.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Arnaque au « Registre des Sociétés Européennes » : ne laissez pas les fraudeurs saboter votre lancement",
      "description": "La création d'une entreprise vous expose aux fraudes. Découvrez comment l'arnaque au Registre des Sociétés Européennes fonctionne et comment vous protéger efficacement.",
      "image": "https://www.cholez-pagotto.fr/wp-content/uploads/2025/11/arnaque-registre-des-societes-europeennes.jpg",
      "datePublished": "7 novembre 2025",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Docuthèque — Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement",
      "keywords": ["Arnaque", "Registre européen", "Entrepreneurs", "Guichet unique", "INPI", "BRIS"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le BRIS et pourquoi est-il gratuit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le BRIS (Business Registers Interconnection System) est le système officiel d'interconnexion des registres du commerce européens. L'inscription de votre société y est automatique dès votre immatriculation au RCS en France. Aucune démarche ni paiement supplémentaire n'est requis."
          }
        },
        {
          "@type": "Question",
          "name": "Comment distinguer un courrier officiel d'une arnaque ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un courrier officiel (INPI, greffe, URSSAF) ne demande jamais de paiement par courrier postal pour un registre européen. Tout document mentionnant des Conditions Générales de Vente, une offre commerciale ou des frais d'inscription à un registre privé est suspect. En cas de doute, contactez directement l'organisme officiel concerné."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire si j'ai déjà signé et payé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si le paiement a été effectué par prélèvement SEPA autorisé, vous disposez de 8 semaines pour le contester auprès de votre banque ; 13 mois s'il était non autorisé. Pour un virement bancaire, contactez immédiatement votre banque pour tenter un rappel — il n'existe pas de droit légal au remboursement mais la banque peut intervenir. Signalez également la fraude sur signal.conso.gouv.fr et déposez plainte."
          }
        },
        {
          "@type": "Question",
          "name": "Ces arnaques sont-elles poursuivies pénalement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Ces pratiques peuvent être qualifiées de pratiques commerciales trompeuses (art. L.121-2 du Code de la consommation), passibles de 2 ans d'emprisonnement et 300 000 € d'amende. Plusieurs structures frauduleuses ont fait l'objet de poursuites en France et en Europe."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Arnaque au Registre des Sociétés Européennes" }
      ]
    }
  ]
}

export default function ArticleArnaqueRSE() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Arnaque au Registre des Sociétés Européennes</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMALITÉS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Arnaque au « Registre des Sociétés Européennes » : ne laissez pas les fraudeurs saboter votre lancement</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 7 novembre 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 5 min de lecture
                </span>
              </div>
                            <img
                src="https://www.cholez-pagotto.fr/wp-content/uploads/2025/11/arnaque-registre-des-societes-europeennes.jpg"
                alt="Arnaque au « Registre des Sociétés Européennes » : ne laissez pas les fraudeurs saboter votre lancement"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#anatomie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. L'anatomie d'une tromperie sophistiquée</a></li>
                <li><a href="#vrai-faux" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le vrai vs le faux</a></li>
                <li><a href="#reaction" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Comment réagir si vous avez un doute</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La création d'une entreprise est une étape exaltante, mais elle vous place sous les radars de réseaux de fraude bien organisés. Au sein du cabinet, nous accompagnons quotidiennement les entrepreneurs dans leurs démarches administratives et constatons une recrudescence de courriers trompeurs visant les nouveaux dirigeants.</p>
                <p style={{marginBottom: '1rem'}}>L'arnaque au <strong>« Registre des Sociétés Européennes »</strong> est l'une des plus courantes. Voici comment protéger votre structure grâce aux bons réflexes.</p>
              </section>

              <section id="anatomie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. L'anatomie d'une tromperie sophistiquée
                </h2>
                <p style={{marginBottom: '1rem'}}>Peu après la validation de vos formalités sur le <strong>Guichet Unique (INPI)</strong>, vous recevez un document à l'allure officielle. Drapeau étoilé, jargon administratif, mentions de « mise en conformité », de « Notification discrétionnaire » ou de « publication obligatoire »… Tout est fait pour simuler une démarche d'État.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le piège :</strong> les fraudeurs récupèrent vos données publiques (SIREN, adresse, nom commercial) pour pré-remplir le formulaire et gagner votre confiance.</li>
                  <li><strong>La réalité :</strong> en signant, vous ne remplissez pas une obligation légale. Vous souscrivez à un <strong>service de publicité privée</strong> totalement inutile, facturé entre 600 € et 1 000 €.</li>
                </ul>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.5rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: '0 0 6px', fontWeight: '700'}}>Signes d'alerte à identifier</p>
                  <ul style={{paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px'}}>
                    <li>Document demandant un paiement pour un « registre » ou une « cotisation »</li>
                    <li>Mentions de « Conditions Générales de Vente » ou « Offre commerciale »</li>
                    <li>Délais de réponse courts créant une urgence artificielle</li>
                    <li>Références à des organismes officiels aux noms similaires mais distincts (BRIS, RCS, INPI…)</li>
                  </ul>
                </div>
              </section>

              <section id="vrai-faux">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le vrai vs le faux : rétablir la vérité
                </h2>
                <p style={{marginBottom: '1rem'}}>En tant que spécialistes de la documentation juridique, nous rétablissons la vérité sur les registres officiels.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li>
                    <strong>Le service officiel (BRIS) :</strong> il existe bien un système d'interconnexion des registres au niveau européen (le Business Registers Interconnection System), mais son accès est <strong>gratuit</strong>. L'inscription de votre société y est automatique dès qu'elle est enregistrée au RCS en France. Aucune démarche supplémentaire n'est requise.
                  </li>
                  <li>
                    <strong>Zéro sollicitation postale :</strong> les organismes officiels (INPI, Greffe, URSSAF) ne vous demanderont jamais de payer une « cotisation » ou des « frais d'inscription » par courrier postal pour un registre européen.
                  </li>
                  <li>
                    <strong>La règle de vigilance :</strong> tout document mentionnant des « Conditions Générales de Vente » ou une « Offre commerciale » est par définition un acte commercial privé — non une démarche d'État.
                  </li>
                </ul>
              </section>

              <section id="reaction">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Comment réagir si vous avez un doute ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Si vous recevez un courrier réclamant un paiement pour un registre dont vous n'avez jamais entendu parler :</p>
                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#15803d', fontSize: '14px', fontWeight: '700', margin: '0 0 8px'}}>✅ À faire</p>
                  <ul style={{paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                    <li>Ne signez rien et ne payez rien</li>
                    <li>Vérifiez l'identité de l'expéditeur en cherchant son nom sur un moteur de recherche</li>
                    <li>Signalez le courrier sur <a href="https://www.signal.conso.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#15803d'}}>signal.conso.gouv.fr</a></li>
                    <li>Consultez notre cabinet pour validation de vos démarches</li>
                  </ul>
                </div>
                <p style={{marginBottom: '1rem', marginTop: '1rem'}}>Pourquoi prendre le risque d'une erreur coûteuse ? Le cabinet Cholez-Pagotto met son expertise à votre service pour simplifier et sécuriser votre vie d'entrepreneur.</p>
                <p><a href="/contact" style={{color: '#1a4fba', fontWeight: '600', textDecoration: 'none'}}>Nous contacter pour valider vos démarches →</a></p>
              </section>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le BRIS et pourquoi est-il gratuit ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le BRIS (Business Registers Interconnection System) est le système officiel d'interconnexion des registres du commerce européens. L'inscription de votre société y est automatique dès votre immatriculation au RCS en France. Aucune démarche ni paiement supplémentaire n'est requis.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment distinguer un courrier officiel d'une arnaque ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Un courrier officiel (INPI, greffe, URSSAF) ne demande jamais de paiement par courrier postal pour un registre européen. Tout document mentionnant des Conditions Générales de Vente, une offre commerciale ou des frais d'inscription à un registre privé est suspect. En cas de doute, contactez directement l'organisme officiel concerné.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire si j'ai déjà signé et payé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si le paiement a été effectué par prélèvement SEPA autorisé, vous disposez de 8 semaines pour le contester auprès de votre banque ; 13 mois s'il était non autorisé. Pour un virement bancaire, contactez immédiatement votre banque pour tenter un rappel — il n'existe pas de droit légal au remboursement mais la banque peut intervenir. Signalez également la fraude sur signal.conso.gouv.fr et déposez plainte.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Ces arnaques sont-elles poursuivies pénalement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Ces pratiques peuvent être qualifiées de pratiques commerciales trompeuses (art. L.121-2 du Code de la consommation), passibles de 2 ans d'emprisonnement et 300 000 € d'amende. Plusieurs structures frauduleuses ont fait l'objet de poursuites en France et en Europe.</p>
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
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto — FCFBL ACTIVITIES</p>
            </div>

            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47 € à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée.</p>
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
                <span key="Arnaque" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Arnaque</span>
                <span key="Registre européen" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Registre européen</span>
                <span key="Entrepreneurs" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Entrepreneurs</span>
                <span key="Guichet unique" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Guichet unique</span>
                <span key="INPI" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>INPI</span>
                <span key="BRIS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>BRIS</span>
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