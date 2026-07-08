import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Arnaques aux entreprises nouvellement créées : les reconnaître et s'en protéger en 2026 · Blog Cabinet Cholez-Pagotto`,
  description: `Faux registres, faux Kbis, phishing aux organismes, faux fournisseurs : dès votre immatriculation, vos données deviennent publiques et les fraudeurs frappent. Comment reconnaître ces arnaques et réagir, avec les bons réflexes de signalement.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/arnaques-aux-entreprises-nouvellement-creees-2026-les-reconnaitre-et-s-en-proteger',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaques-nouvelles-entreprises-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaques-nouvelles-entreprises-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Arnaques aux entreprises nouvellement créées : les reconnaître et s'en protéger en 2026",
      "description": "Faux registres, faux Kbis, phishing aux organismes, faux fournisseurs : dès votre immatriculation, vos données deviennent publiques et les fraudeurs frappent. Comment reconnaître ces arnaques et réagir, avec les bons réflexes de signalement.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaques-nouvelles-entreprises-2026.webp",
      "datePublished": "2026-06-10",
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
      "url": "https://cholez-pagotto.fr/blog/arnaques-aux-entreprises-nouvellement-creees-2026-les-reconnaitre-et-s-en-proteger",
      "keywords": ["Arnaques", "Faux Kbis", "Faux registre", "Création d'entreprise", "DGCCRF", "Phishing", "SignalConso", "RNE"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Pourquoi je reçois ces courriers juste après ma création ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parce que vos données sont publiques. Dès votre immatriculation, vos informations (dénomination, SIREN, adresse, dirigeant, code d'activité) sont accessibles gratuitement, en quelques jours, sur data.inpi.fr et l'annuaire public des entreprises. Les fraudeurs récupèrent ces données fraîches de façon automatisée et envoient leurs courriers au bon moment, lorsque vous attendez justement des documents officiels."
          }
        },
        {
          "@type": "Question",
          "name": "Dois-je payer pour être inscrit à un registre après ma création ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Votre immatriculation se fait en une seule fois, via le guichet unique de l'INPI, et pour une micro-entreprise elle est gratuite. Aucun second paiement n'arrive après coup pour finaliser ou publier votre inscription : votre entreprise figure déjà au Registre national des entreprises. Toute sollicitation payante présentée comme une formalité obligatoire après création doit être considérée avec la plus grande méfiance."
          }
        },
        {
          "@type": "Question",
          "name": "Comment reconnaître un faux courrier en quelques secondes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cinq signaux d'alerte : l'absence de mention claire d'offre commerciale alors qu'un paiement est demandé ; un logo qui imite un cachet officiel (drapeau européen, Marianne) ; un numéro de référence avec un délai court et une menace de pénalités ; un IBAN qui n'est pas celui de l'administration, souvent un compte étranger ; et une adresse de site qui n'est pas en .gouv.fr."
          }
        },
        {
          "@type": "Question",
          "name": "Le Registre des sociétés européennes ou des indépendants existe-t-il ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. En France, il n'existe qu'un seul registre officiel des entreprises : le Registre national des entreprises (RNE), géré par l'INPI depuis 2023, qui a fusionné les anciens registres. Les noms comme Registre des sociétés européennes, Registre des sociétés et des indépendants ou les fausses chambres et agences du registre du commerce sont inventés pour faire croire à l'existence d'un organisme officiel."
          }
        },
        {
          "@type": "Question",
          "name": "Comment obtenir un justificatif d'immatriculation officiel ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gratuitement, sur data.inpi.fr. L'attestation d'immatriculation au RNE constitue désormais un justificatif officiel, à côté de l'extrait Kbis délivré par le greffe pour les sociétés commerciales. Méfiez-vous des sites privés qui proposent de vous vendre ce document : les seuls émetteurs légitimes sont l'INPI, l'annuaire des entreprises et le greffe officiel."
          }
        },
        {
          "@type": "Question",
          "name": "Où signaler une arnaque ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur plusieurs plateformes officielles : SignalConso (signal.conso.gouv.fr) pour les pratiques commerciales trompeuses, PHAROS (internet-signalement.gouv.fr) pour les contenus et envois frauduleux, et cybermalveillance.gouv.fr pour les arnaques en ligne. Infogreffe tient par ailleurs un répertoire des arnaques au Kbis. Plus il y a de signalements, plus les autorités peuvent agir."
          }
        },
        {
          "@type": "Question",
          "name": "J'ai déjà payé, que faire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agissez vite. Contactez immédiatement votre banque pour tenter de faire opposition ou contester le prélèvement ; pour un paiement par carte, le délai légal de contestation est de treize mois à compter du débit. Conservez le courrier, portez plainte pour pratique commerciale trompeuse, envoyez un courrier recommandé de demande de remboursement, et modifiez vos identifiants si vous les avez communiqués."
          }
        },
        {
          "@type": "Question",
          "name": "La déclaration des bénéficiaires effectifs est-elle une arnaque ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, c'est une vraie obligation, qu'il ne faut pas confondre avec les fausses sollicitations. La déclaration des bénéficiaires effectifs se fait gratuitement auprès de l'INPI, en principe dans les trente jours de l'immatriculation, et son absence est sanctionnée. Mais elle s'effectue sur le guichet unique, sans courrier payant ni IBAN étranger."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Arnaques aux nouvelles entreprises" }
      ]
    }
  ]
}

export default function ArticleArnaquesNouvellesEntreprises2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Arnaques aux nouvelles entreprises</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIGILANCE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CRÉATION D'ENTREPRISE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Arnaques aux entreprises nouvellement créées : les reconnaître et s'en protéger en 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 10 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 14 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaques-nouvelles-entreprises-2026.webp"
                alt="Arnaques aux entreprises nouvellement créées : les reconnaître et s'en protéger en 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#cible" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Pourquoi vous êtes une cible</a></li>
                <li><a href="#familles" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Les grandes familles d'arnaques</a></li>
                <li><a href="#reconnaitre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Reconnaître un faux courrier</a></li>
                <li><a href="#vraies-regles" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Les vraies règles à connaître</a></li>
                <li><a href="#reagir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Que faire face à une sollicitation suspecte</a></li>
                <li><a href="#proteger" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Protéger ses données et son lancement</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>À peine votre entreprise immatriculée, votre boîte aux lettres et votre messagerie se remplissent de courriers et d'e-mails à l'allure officielle, réclamant un paiement pour une formalité prétendument obligatoire. Ce n'est pas une coïncidence : les <strong>entreprises nouvellement créées</strong> sont une cible privilégiée des fraudeurs, qui exploitent la publicité de vos données et votre méconnaissance des démarches réelles.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point, de façon complète et vérifiée, sur les grandes familles d'arnaques qui visent les nouveaux entrepreneurs, sur les moyens de les reconnaître en quelques secondes, sur les vraies règles à connaître, et sur les bons réflexes de signalement. L'objectif : vous éviter de payer pour rien et protéger votre lancement.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>La règle d'or :</strong> votre immatriculation se fait <strong>en une seule fois</strong> via le guichet unique de l'INPI. Aucun organisme officiel ne vous réclamera, après coup, un paiement par courrier pour finaliser ou publier votre inscription, encore moins via un QR code ou un IBAN étranger.
                  </p>
                </div>
              </section>

              <section id="cible">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Pourquoi vous êtes une cible
                </h2>
                <p style={{marginBottom: '1rem'}}>La raison est simple : <strong>vos données sont publiques</strong>. Depuis 2023, le Registre national des entreprises (RNE), géré par l'INPI, rend accessibles gratuitement les informations de toutes les entreprises françaises sur <strong>data.inpi.fr</strong>, ainsi que sur l'annuaire public des entreprises. Dès votre immatriculation, votre dénomination, votre numéro SIREN, votre adresse, le nom du dirigeant, la date de création et le code d'activité deviennent consultables, généralement en quelques jours.</p>
                <p style={{marginBottom: '1rem'}}>Les fraudeurs récupèrent ces données fraîches de façon automatisée et déclenchent l'envoi de leurs courriers dans les jours ou les semaines qui suivent. C'est précisément ce qui rend l'arnaque efficace : le courrier arrive <strong>au bon moment</strong>, avec les <strong>bonnes informations</strong>, dans une période où vous attendez justement des documents officiels de l'administration. Les cibles les plus exposées sont les auto-entrepreneurs, les micro-entreprises et les sociétés récemment créées.</p>
              </section>

              <section id="familles">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Les grandes familles d'arnaques
                </h2>
                <p style={{marginBottom: '1rem'}}>Les montages varient sans cesse, mais ils se rattachent à quelques grandes familles.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>Les faux registres et faux courriers d'immatriculation.</strong> Des sociétés privées aux noms inventés mais à consonance officielle (registre des sociétés européennes, registre des sociétés et des indépendants, fausses chambres ou agences du registre du commerce) réclament un paiement pour vous inscrire à un registre qui, en réalité, est gratuit et automatique. Les montants observés vont d'environ 89 à près de 990&nbsp;€, pour un préjudice individuel moyen de l'ordre de 350 à 450&nbsp;€.</li>
                  <li><strong>Les faux Kbis et faux justificatifs.</strong> Fabrication d'un faux extrait, ou site privé qui vend un document pourtant gratuit. Les seuls émetteurs légitimes sont l'INPI, l'annuaire des entreprises et le greffe officiel. Un document administratif authentique n'exige jamais un virement, un QR code ou un paiement urgent.</li>
                  <li><strong>Le phishing aux faux organismes.</strong> E-mails, SMS ou appels imitant l'URSSAF, les impôts, l'INSEE ou l'INPI, pour vous soutirer un paiement ou vos identifiants. Les vrais organismes utilisent des en-têtes officiels et ne demandent jamais de paiement par QR code privé ou IBAN étranger.</li>
                  <li><strong>Les noms de domaine et le faux référencement.</strong> Sollicitations pour réserver en urgence un nom de domaine soi-disant menacé, ou pour un référencement miracle sur les moteurs de recherche.</li>
                  <li><strong>La fraude au faux fournisseur et au faux dirigeant.</strong> Faux ordres de virement, fausses coordonnées bancaires d'un fournisseur, parfois avec une voix de dirigeant ou de conseiller imitée pour valider un paiement frauduleux.</li>
                </ul>
              </section>

              <section id="reconnaitre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Reconnaître un faux courrier en quelques secondes
                </h2>
                <p style={{marginBottom: '1rem'}}>Quelques signaux suffisent à démasquer la plupart des faux courriers.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Signal d'alerte</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Ce qu'il révèle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Pas de mention claire d'offre commerciale", "Un paiement est demandé sans dire qu'il s'agit d'une publicité (souvent caché en petits caractères)"],
                        ["Logo imitant un cachet officiel", "Drapeau européen, Marianne ou couleurs gouvernementales pour tromper"],
                        ["Délai court et menace de pénalités", "Numéro de référence d'urgence, échéance de 7, 15 ou 30 jours"],
                        ["IBAN suspect", "Compte au nom d'une société étrangère, jamais celui de l'administration"],
                        ["URL hors .gouv.fr", "Adresse imitant un site officiel sans en être un"],
                      ].map(([s, r], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{s}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Le réflexe à retenir : <strong>lisez tout le document</strong>, y compris le bas de page et le verso. La présence d'une mention d'offre commerciale en tout petit suffit souvent à confirmer qu'il s'agit d'une démarche facultative et non d'une obligation.</p>
              </section>

              <section id="vraies-regles">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Les vraies règles à connaître
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour ne pas se faire piéger, le plus efficace est de connaître les véritables démarches et les seuls interlocuteurs légitimes.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Une seule plateforme officielle de formalités</strong> : le guichet unique de l'INPI. L'immatriculation d'une micro-entreprise y est gratuite, et il n'existe aucun second prélèvement après création pour finaliser ou publier l'inscription.</li>
                  <li><strong>Un justificatif gratuit</strong> : l'attestation d'immatriculation au RNE, à télécharger sur data.inpi.fr, vaut justificatif officiel, à côté de l'extrait Kbis délivré par le greffe pour les sociétés commerciales.</li>
                  <li><strong>Des interlocuteurs identifiés</strong> : selon votre statut, l'INPI, l'INSEE (code d'activité et inscription au répertoire SIRENE, gratuites), le greffe pour les sociétés, l'URSSAF pour les cotisations, et la DGFiP pour la fiscalité.</li>
                  <li><strong>Une vraie obligation à ne pas confondre</strong> : la déclaration des bénéficiaires effectifs, gratuite auprès de l'INPI, en principe dans les trente jours de l'immatriculation, et dont l'absence est sanctionnée. Elle se fait sur le guichet unique, jamais par un courrier payant.</li>
                </ul>
              </section>

              <section id="reagir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Que faire face à une sollicitation suspecte
                </h2>
                <p style={{marginBottom: '1rem'}}>Si vous recevez un courrier ou un message douteux, la marche à suivre est claire.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Ne payez pas, ne scannez pas le QR code, ne communiquez aucun identifiant.</strong></li>
                  <li><strong>Conservez le document.</strong> Il servira de preuve en cas de signalement ou de plainte.</li>
                  <li><strong>Signalez l'arnaque</strong> sur SignalConso (signal.conso.gouv.fr) pour les pratiques commerciales trompeuses, sur PHAROS (internet-signalement.gouv.fr) pour les envois frauduleux, et sur cybermalveillance.gouv.fr pour les arnaques en ligne.</li>
                  <li><strong>Prévenez votre entourage entrepreneurial.</strong> Ces arnaques fonctionnent par effet de série : ceux qui se sont immatriculés en même temps que vous risquent de recevoir la même chose.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Vous avez déjà payé ?</strong> Agissez vite. Contactez immédiatement votre banque pour faire opposition ou contester le prélèvement : pour un paiement par carte, le délai légal de contestation est de <strong>treize mois</strong> à compter du débit. Portez plainte pour pratique commerciale trompeuse, envoyez un courrier recommandé de demande de remboursement, et modifiez vos identifiants si vous les avez communiqués.
                  </p>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Contestation d'une facture ou sollicitation frauduleuse</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Un courrier ferme pour refuser une facture non due : absence de commande, mise en garde, demande de cessation et réserve de signalement. À envoyer en recommandé.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-lettre-contestation-facture-frauduleuse" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/accompagnement-professionnels" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>faites-vous accompagner</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Demande de remboursement après paiement frauduleux</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Vous avez payé par erreur ? Notre modèle réclame le remboursement, invoque la pratique commerciale trompeuse et accompagne votre démarche bancaire et votre plainte.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-lettre-demande-remboursement-paiement-frauduleux" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/accompagnement-professionnels" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>faites-vous accompagner</a></span>
                  </div>
                </div>
              </section>

              <section id="proteger">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Protéger ses données et son lancement
                </h2>
                <p style={{marginBottom: '1rem'}}>La publicité des données d'entreprise est la règle, mais vous disposez tout de même de marges de manœuvre pour <strong>limiter la diffusion de certaines informations personnelles</strong> au registre, notamment lorsque votre adresse professionnelle est aussi votre domicile. C'est un point de vigilance utile, à l'intersection de vos formalités et de la protection de vos données.</p>
                <p style={{marginBottom: '1rem'}}>Plus largement, la meilleure protection reste de <strong>connaître ses droits et ses obligations réelles</strong>. Un entrepreneur informé distingue immédiatement une vraie démarche d'une arnaque, et ne paie pas sous le coup de l'urgence. C'est précisément l'objet de l'accompagnement du cabinet : sécuriser votre lancement, clarifier vos obligations, et vous aider à réagir face à une sollicitation douteuse.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Un doute sur un courrier ou une démarche ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet vous aide à distinguer vos obligations réelles des fausses sollicitations et à sécuriser votre lancement. Une question précise sur un courrier reçu ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Les arnaques visant les nouvelles entreprises sont rentables parce qu'elles jouent sur l'urgence et l'inexpérience, au moment précis où l'entrepreneur attend des documents officiels. Mais elles reposent sur un bluff : aucune administration ne réclame de paiement après coup pour une inscription déjà acquise, et un simple coup d'œil aux signaux d'alerte suffit le plus souvent à les démasquer.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe tient en trois temps : ne pas payer, vérifier auprès des seuls sites officiels, et signaler. En cas de doute, mieux vaut poser une question que régler une facture fantaisiste. La connaissance de vos vraies démarches est votre meilleure protection.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie sur des sources et plateformes officielles, vérifiées à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Direction générale de la concurrence, de la consommation et de la répression des fraudes (DGCCRF) et plateforme <a href="https://signal.conso.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>SignalConso</a></li>
                  <li>PHAROS, plateforme de signalement du ministère de l'Intérieur (<a href="https://www.internet-signalement.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>internet-signalement.gouv.fr</a>) et <a href="https://www.cybermalveillance.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>cybermalveillance.gouv.fr</a></li>
                  <li>INPI : guichet unique des formalités et annuaire des données d'entreprises, <a href="https://data.inpi.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>data.inpi.fr</a></li>
                  <li>Infogreffe : répertoire des arnaques au Kbis</li>
                  <li>Code de la consommation, article L. 121-2 (pratiques commerciales trompeuses)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; les pratiques frauduleuses évoluent constamment.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Pourquoi je reçois ces courriers juste après ma création ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Parce que vos données sont publiques. Dès votre immatriculation, vos informations (dénomination, SIREN, adresse, dirigeant, code d'activité) sont accessibles gratuitement, en quelques jours, sur data.inpi.fr et l'annuaire public des entreprises. Les fraudeurs récupèrent ces données fraîches de façon automatisée et envoient leurs courriers au bon moment, lorsque vous attendez justement des documents officiels.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Dois-je payer pour être inscrit à un registre après ma création ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Votre immatriculation se fait en une seule fois, via le guichet unique de l'INPI, et pour une micro-entreprise elle est gratuite. Aucun second paiement n'arrive après coup pour finaliser ou publier votre inscription : votre entreprise figure déjà au Registre national des entreprises. Toute sollicitation payante présentée comme obligatoire après création doit être considérée avec méfiance.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment reconnaître un faux courrier en quelques secondes ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Cinq signaux d'alerte : l'absence de mention claire d'offre commerciale alors qu'un paiement est demandé ; un logo qui imite un cachet officiel ; un numéro de référence avec un délai court et une menace de pénalités ; un IBAN qui n'est pas celui de l'administration, souvent un compte étranger ; et une adresse de site qui n'est pas en .gouv.fr.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le Registre des sociétés européennes ou des indépendants existe-t-il ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. En France, il n'existe qu'un seul registre officiel des entreprises : le Registre national des entreprises (RNE), géré par l'INPI depuis 2023, qui a fusionné les anciens registres. Les noms comme registre des sociétés européennes, registre des sociétés et des indépendants ou les fausses chambres et agences du registre du commerce sont inventés pour faire croire à l'existence d'un organisme officiel.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment obtenir un justificatif d'immatriculation officiel ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Gratuitement, sur data.inpi.fr. L'attestation d'immatriculation au RNE constitue désormais un justificatif officiel, à côté de l'extrait Kbis délivré par le greffe pour les sociétés commerciales. Méfiez-vous des sites privés qui proposent de vous vendre ce document : les seuls émetteurs légitimes sont l'INPI, l'annuaire des entreprises et le greffe officiel.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Où signaler une arnaque ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Sur plusieurs plateformes officielles : SignalConso (signal.conso.gouv.fr) pour les pratiques commerciales trompeuses, PHAROS (internet-signalement.gouv.fr) pour les contenus et envois frauduleux, et cybermalveillance.gouv.fr pour les arnaques en ligne. Infogreffe tient par ailleurs un répertoire des arnaques au Kbis. Plus il y a de signalements, plus les autorités peuvent agir.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>J'ai déjà payé, que faire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Agissez vite. Contactez immédiatement votre banque pour tenter de faire opposition ou contester le prélèvement ; pour un paiement par carte, le délai légal de contestation est de treize mois à compter du débit. Conservez le courrier, portez plainte pour pratique commerciale trompeuse, envoyez un courrier recommandé de demande de remboursement, et modifiez vos identifiants si vous les avez communiqués.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La déclaration des bénéficiaires effectifs est-elle une arnaque ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, c'est une vraie obligation, qu'il ne faut pas confondre avec les fausses sollicitations. La déclaration des bénéficiaires effectifs se fait gratuitement auprès de l'INPI, en principe dans les trente jours de l'immatriculation, et son absence est sanctionnée. Mais elle s'effectue sur le guichet unique, sans courrier payant ni IBAN étranger.</p>
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
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Expert auprès de collectifs d'orientation juridiques francophones.
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Arnaque au registre des sociétés : ne laissez pas les fraudeurs saboter votre lancement →
              </a>
              <a href="/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Guichet unique INPI 2026 : mode d'emploi et pièges à éviter →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Protéger vos données</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Vos données d'entreprise sont publiques. Le cabinet vous aide à limiter ce qui peut l'être et à sécuriser votre conformité.</p>
              <a href="/rgpd-conformite" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Conformité RGPD →
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
                <span key="Arnaques" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Arnaques</span>
                <span key="Faux Kbis" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Faux Kbis</span>
                <span key="Création d'entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Création d'entreprise</span>
                <span key="DGCCRF" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>DGCCRF</span>
                <span key="Vigilance" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Vigilance</span>
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
