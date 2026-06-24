import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Garantie légale de conformité : vos droits face à un produit défectueux en 2026 · Blog Cabinet Cholez-Pagotto`,
  description: `Gratuite, automatique, valable 2 ans : la garantie légale de conformité est votre meilleure arme face à un produit défectueux. Durée, présomption, réparation, remplacement, recours : le guide complet et vérifié.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/garantie-legale-de-conformite-vos-droits-produit-defectueux-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/garantie-legale-conformite-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/garantie-legale-conformite-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Garantie légale de conformité : vos droits face à un produit défectueux en 2026",
      "description": "Gratuite, automatique, valable 2 ans : la garantie légale de conformité est votre meilleure arme face à un produit défectueux. Durée, présomption, réparation, remplacement, recours : le guide complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/garantie-legale-conformite-2026.webp",
      "datePublished": "2026-06-02",
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
      "url": "https://cholez-pagotto.fr/blog/garantie-legale-de-conformite-vos-droits-produit-defectueux-2026",
      "keywords": ["Garantie légale de conformité", "Droit de la consommation", "Produit défectueux", "Vices cachés", "Garantie commerciale", "L217-3", "Remboursement", "Consommateur"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que la garantie légale de conformité ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est l'obligation, imposée par le Code de la consommation, pour tout vendeur professionnel de livrer à un consommateur un bien conforme au contrat. Elle est automatique, gratuite et d'ordre public : le vendeur ne peut ni l'exclure ni la limiter, et toute clause contraire est réputée non écrite. Elle couvre une très large gamme de biens, y compris ceux comportant des éléments numériques."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps dure la garantie légale de conformité ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux ans à compter de la délivrance du bien, que celui-ci soit neuf ou d'occasion. Cette durée s'applique à tous les achats auprès d'un professionnel, y compris en ligne, en solde ou en promotion. Pour les achats en ligne, le délai court à compter de la réception effective du produit."
          }
        },
        {
          "@type": "Question",
          "name": "Que signifie la présomption d'antériorité du défaut ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pendant une certaine durée, tout défaut qui apparaît est présumé avoir existé dès la délivrance : c'est donc au vendeur de prouver le contraire, pas à vous. Cette présomption dure 24 mois pour un bien neuf et 12 mois pour un bien d'occasion. Au-delà, et jusqu'à la fin des 2 ans, c'est au consommateur de prouver l'antériorité du défaut."
          }
        },
        {
          "@type": "Question",
          "name": "La garantie s'applique-t-elle aux achats en ligne et à l'occasion ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, pleinement, dès lors que le vendeur est un professionnel. Elle s'applique aux achats sur internet comme en magasin, aux produits neufs comme d'occasion, et même aux produits soldés ou en promotion. En revanche, entre particuliers, la garantie légale de conformité ne s'applique pas : seule joue la garantie des vices cachés."
          }
        },
        {
          "@type": "Question",
          "name": "Réparation ou remplacement : qui choisit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En principe le consommateur, entre la réparation et le remplacement, sans aucun frais. Le vendeur ne peut refuser que si le choix est impossible ou d'un coût manifestement disproportionné. La mise en conformité doit intervenir dans un délai de trente jours. À défaut, ou en cas de défaut grave, vous pouvez demander une réduction du prix ou la résolution du contrat avec remboursement."
          }
        },
        {
          "@type": "Question",
          "name": "Que gagne-t-on après une réparation ou un remplacement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si vous faites réparer le bien au titre de la garantie légale de conformité, celle-ci est prolongée de six mois : elle passe ainsi de 24 à 30 mois. Si le bien est remplacé, un nouveau délai de garantie légale de deux ans démarre pour le bien de remplacement. Ce sont des règles très protectrices, souvent ignorées."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle différence avec la garantie des vices cachés et la garantie commerciale ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La garantie légale de conformité est imposée par la loi, gratuite, valable 2 ans, et due par le vendeur professionnel. La garantie des vices cachés (article 1641 du code civil) vise les défauts cachés rendant le bien impropre à son usage, s'applique à tous les vendeurs (particuliers compris) et se prescrit par 2 ans à compter de la découverte du vice. La garantie commerciale est facultative, souvent payante, et s'ajoute aux deux autres sans jamais les remplacer."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire si le vendeur refuse d'appliquer la garantie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adressez-vous au vendeur, et non au fabricant : la garantie est due par le vendeur. Envoyez une mise en demeure par lettre recommandée avec accusé de réception, en citant les articles L. 217-3 et suivants du Code de la consommation. En cas d'échec, saisissez gratuitement le médiateur de la consommation, signalez la situation sur SignalConso, puis, en dernier recours, le tribunal judiciaire. Votre protection juridique peut prendre en charge certains frais."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Garantie légale de conformité 2026" }
      ]
    }
  ]
}

export default function ArticleGarantieLegaleConformite2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Garantie légale de conformité 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONSOMMATION</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VOS DROITS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Garantie légale de conformité : vos droits face à un produit défectueux en 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 2 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 15 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/garantie-legale-conformite-2026.webp"
                alt="Garantie légale de conformité : vos droits face à un produit défectueux en 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#quoi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Qu'est-ce que la garantie légale de conformité</a></li>
                <li><a href="#duree" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Combien de temps êtes-vous protégé</a></li>
                <li><a href="#recours" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Vos recours en cas de défaut</a></li>
                <li><a href="#apres" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Ce que vous gagnez après réparation</a></li>
                <li><a href="#trois" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Les trois garanties à ne pas confondre</a></li>
                <li><a href="#refus" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Que faire si le vendeur refuse</a></li>
                <li><a href="#assurance" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Le réflexe protection juridique</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Un appareil tombe en panne quelques mois après l'achat. Le vendeur vous renvoie vers le fabricant, ou affirme que « la garantie est terminée ». Dans la plupart des cas, c'est inexact : vous disposez d'une <strong>garantie légale de conformité</strong>, automatique, gratuite et valable <strong>deux ans</strong>, qui s'impose au vendeur quoi qu'il en dise.</p>
                <p style={{marginBottom: '1rem'}}>C'est l'outil le plus puissant du consommateur, et l'un des plus mal connus. Cet article fait le point, de façon complète et vérifiée, sur sa durée, la fameuse présomption qui joue en votre faveur, vos recours concrets, et la différence avec les autres garanties. L'objectif : vous permettre de faire valoir vos droits sans vous laisser décourager.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> pendant <strong>2 ans</strong> après l'achat auprès d'un professionnel, un produit défectueux doit être <strong>réparé ou remplacé gratuitement</strong>, et pendant les <strong>24 premiers mois</strong> (12 pour l'occasion), c'est au <strong>vendeur</strong> de prouver que le défaut n'existait pas, pas à vous.
                  </p>
                </div>
              </section>

              <section id="quoi">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Qu'est-ce que la garantie légale de conformité
                </h2>
                <p style={{marginBottom: '1rem'}}>Prévue par les articles <strong>L. 217-3 et suivants du Code de la consommation</strong>, elle impose à tout <strong>vendeur professionnel</strong> de livrer à un <strong>consommateur</strong> un bien conforme au contrat. Profondément renforcée par la réforme du 1er janvier 2022 (transposant les directives européennes 2019/770 et 2019/771), elle est <strong>d'ordre public</strong> : le vendeur ne peut ni l'exclure ni la limiter, et toute clause contraire est <strong>réputée non écrite</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Un bien est non conforme s'il ne correspond pas à la description, s'il ne fonctionne pas normalement, s'il n'est pas adapté à l'usage attendu ou ne tient pas ses promesses. La garantie couvre une très large gamme de produits, y compris les <strong>biens comportant des éléments numériques</strong> et, depuis 2022, les <strong>contenus et services numériques</strong> (logiciels, applications, abonnements). Elle est <strong>gratuite</strong> : aucun frais de pièces, de main-d'œuvre ou de transport ne peut vous être imposé.</p>
              </section>

              <section id="duree">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Combien de temps êtes-vous protégé
                </h2>
                <p style={{marginBottom: '1rem'}}>La garantie s'applique pendant <strong>deux ans à compter de la délivrance</strong> du bien, qu'il soit <strong>neuf ou d'occasion</strong>. C'est l'un des points les plus mal compris : non, la garantie n'est pas réduite à un an pour l'occasion.</p>
                <p style={{marginBottom: '1rem'}}>Le mécanisme décisif est la <strong>présomption d'antériorité du défaut</strong>. Pendant cette période, tout défaut qui apparaît est présumé avoir existé dès la délivrance : c'est donc au <strong>vendeur</strong> de prouver le contraire, et non à vous de démontrer l'origine du problème.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Type de bien</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Durée de la garantie</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Présomption en votre faveur</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Bien neuf", "2 ans", "24 mois"],
                        ["Bien d'occasion (vendeur professionnel)", "2 ans", "12 mois"],
                      ].map(([a, d, p], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{a}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{d}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Au-delà de la période de présomption, et jusqu'à la fin des deux ans, la garantie continue de s'appliquer, mais c'est alors à vous de prouver que le défaut existait à la livraison. À noter : la garantie s'applique <strong>pleinement aux achats en ligne</strong> (le délai court à la réception du colis), ainsi qu'aux <strong>produits soldés ou en promotion</strong>.</p>
              </section>

              <section id="recours">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Vos recours en cas de défaut
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi organise une hiérarchie des solutions, à votre avantage.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>En premier lieu, la réparation ou le remplacement.</strong> Le choix vous appartient, <strong>sans frais</strong>. Le vendeur ne peut s'y opposer que si votre choix est impossible ou d'un coût manifestement disproportionné. La mise en conformité doit intervenir dans un délai maximal de <strong>30 jours</strong>.</li>
                  <li><strong>À défaut, la réduction du prix ou la résolution du contrat</strong> (remboursement). Vous y avez droit notamment si le vendeur refuse, si la mise en conformité dépasse 30 jours ou vous cause un inconvénient majeur, ou si le défaut persiste.</li>
                  <li><strong>Le remboursement immédiat</strong> est possible, sans passer par la réparation, lorsque le défaut est suffisamment <strong>grave</strong> pour le justifier.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Seuls d'éventuels frais d'envoi postal peuvent rester à votre charge au départ, mais ils doivent vous être remboursés dans un délai de 14 jours.</p>
              </section>

              <section id="apres">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Ce que vous gagnez après réparation
                </h2>
                <p style={{marginBottom: '1rem'}}>Deux règles très protectrices, souvent ignorées des vendeurs comme des acheteurs, méritent d'être connues.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Réparation : six mois de plus.</strong> Si vous faites réparer le bien au titre de la garantie légale de conformité, celle-ci est prolongée de <strong>six mois</strong>. Elle passe ainsi de 24 à <strong>30 mois</strong>.</li>
                  <li><strong>Remplacement : une nouvelle garantie complète.</strong> Si le bien est remplacé, un <strong>nouveau délai de garantie légale de deux ans</strong> démarre pour le bien de remplacement.</li>
                </ul>
              </section>

              <section id="trois">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Les trois garanties à ne pas confondre
                </h2>
                <p style={{marginBottom: '1rem'}}>On confond souvent trois protections distinctes, qui se cumulent et ne se remplacent pas.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Garantie</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Caractéristiques</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Garantie légale de conformité", "Imposée par la loi, gratuite, 2 ans, due par le vendeur professionnel (articles L. 217-3 et suivants du Code de la consommation)"],
                        ["Garantie des vices cachés", "Défauts cachés rendant le bien impropre à l'usage ; tous les vendeurs, y compris particuliers ; action dans les 2 ans à compter de la découverte du vice (article 1641 du code civil)"],
                        ["Garantie commerciale", "Facultative et souvent payante (garantie constructeur, extension) ; s'ajoute aux deux autres sans jamais les remplacer"],
                      ].map(([g, c], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{g}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{c}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>À retenir : la mention <strong>« vendu en l'état »</strong> ne libère jamais un vendeur de la garantie des vices cachés. Et entre particuliers, la garantie légale de conformité ne joue pas : seule la garantie des vices cachés est mobilisable.</p>
              </section>

              <section id="refus">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Que faire si le vendeur refuse
                </h2>
                <p style={{marginBottom: '1rem'}}>Si le vendeur fait la sourde oreille, voici la marche à suivre, par étapes.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Adressez-vous au vendeur, pas au fabricant.</strong> La garantie légale de conformité est due par le vendeur. Conservez la facture, photographiez le défaut, notez sa date d'apparition.</li>
                  <li><strong>Envoyez une mise en demeure</strong> par lettre recommandée avec accusé de réception, en citant les articles <strong>L. 217-3 et suivants</strong> du Code de la consommation, et en fixant un délai raisonnable.</li>
                  <li><strong>Saisissez le médiateur de la consommation</strong>, gratuitement : tout professionnel doit en désigner un depuis 2016.</li>
                  <li><strong>Signalez la situation sur SignalConso</strong> (signal.conso.gouv.fr), le service public de signalement des litiges de consommation.</li>
                  <li><strong>En dernier recours, saisissez le tribunal judiciaire.</strong> L'avocat n'est pas obligatoire pour les litiges inférieurs à 10&nbsp;000&nbsp;€.</li>
                </ul>
              </section>

              <section id="assurance">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Le réflexe protection juridique
                </h2>
                <p style={{marginBottom: '1rem'}}>Un point trop souvent négligé : au-delà de la période de présomption, démontrer l'antériorité d'un défaut suppose parfois une <strong>expertise technique</strong>, qui a un coût. Or beaucoup de contrats d'assurance comportent une garantie de <strong>protection juridique</strong> qui peut prendre en charge ces frais, voire l'accompagnement de la procédure.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est donc de vérifier vos contrats (assurance habitation, carte bancaire, contrat dédié) avant d'engager des frais : vous y êtes peut-être déjà couvert. C'est l'un des intérêts d'un regard combinant le juridique et l'assurantiel.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Un litige avec un vendeur ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Un produit défectueux, un vendeur qui refuse d'appliquer la garantie ? Notre juriste vous répond par écrit, identifie vos droits et la marche à suivre, sous 24 à 48h.
                  </p>
                  <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La garantie légale de conformité est une protection puissante et gratuite, qui couvre tout achat auprès d'un professionnel pendant deux ans, et fait peser sur le vendeur la charge de la preuve durant les premiers mois. Encore faut-il la connaître pour la faire valoir, plutôt que d'accepter un renvoi vers le fabricant ou un refus injustifié.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de conserver vos preuves, de formaliser votre demande par écrit en citant les bons textes, et de mobiliser le médiateur ou votre protection juridique si nécessaire. En cas de doute sur votre situation, mieux vaut faire le point avant de renoncer.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code de la consommation, articles L. 217-3 et suivants (garantie légale de conformité), <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>legifrance.gouv.fr</a></li>
                  <li>Ordonnance n° 2021-1247 du 29 septembre 2021 (transposition des directives (UE) 2019/770 et 2019/771), applicable aux contrats conclus à compter du 1er janvier 2022</li>
                  <li>Code civil, articles 1641 et 1648 (garantie des vices cachés)</li>
                  <li>Ministère de l'Économie et SignalConso, <a href="https://www.economie.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a> et <a href="https://signal.conso.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>signal.conso.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Il ne se substitue pas à une analyse de votre situation au cas par cas.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la garantie légale de conformité ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est l'obligation, imposée par le Code de la consommation, pour tout vendeur professionnel de livrer à un consommateur un bien conforme au contrat. Elle est automatique, gratuite et d'ordre public : le vendeur ne peut ni l'exclure ni la limiter, et toute clause contraire est réputée non écrite. Elle couvre une très large gamme de biens, y compris ceux comportant des éléments numériques.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Combien de temps dure la garantie légale de conformité ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux ans à compter de la délivrance du bien, que celui-ci soit neuf ou d'occasion. Cette durée s'applique à tous les achats auprès d'un professionnel, y compris en ligne, en solde ou en promotion. Pour les achats en ligne, le délai court à compter de la réception effective du produit.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que signifie la présomption d'antériorité du défaut ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pendant une certaine durée, tout défaut qui apparaît est présumé avoir existé dès la délivrance : c'est donc au vendeur de prouver le contraire, pas à vous. Cette présomption dure 24 mois pour un bien neuf et 12 mois pour un bien d'occasion. Au-delà, et jusqu'à la fin des 2 ans, c'est au consommateur de prouver l'antériorité du défaut.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La garantie s'applique-t-elle aux achats en ligne et à l'occasion ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, pleinement, dès lors que le vendeur est un professionnel. Elle s'applique aux achats sur internet comme en magasin, aux produits neufs comme d'occasion, et même aux produits soldés ou en promotion. En revanche, entre particuliers, la garantie légale de conformité ne s'applique pas : seule joue la garantie des vices cachés.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Réparation ou remplacement : qui choisit ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En principe le consommateur, entre la réparation et le remplacement, sans aucun frais. Le vendeur ne peut refuser que si le choix est impossible ou d'un coût manifestement disproportionné. La mise en conformité doit intervenir dans un délai de trente jours. À défaut, ou en cas de défaut grave, vous pouvez demander une réduction du prix ou la résolution du contrat avec remboursement.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que gagne-t-on après une réparation ou un remplacement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si vous faites réparer le bien au titre de la garantie légale de conformité, celle-ci est prolongée de six mois : elle passe ainsi de 24 à 30 mois. Si le bien est remplacé, un nouveau délai de garantie légale de deux ans démarre pour le bien de remplacement. Ce sont des règles très protectrices, souvent ignorées.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle différence avec la garantie des vices cachés et la garantie commerciale ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La garantie légale de conformité est imposée par la loi, gratuite, valable 2 ans, et due par le vendeur professionnel. La garantie des vices cachés (article 1641 du code civil) vise les défauts cachés rendant le bien impropre à son usage, s'applique à tous les vendeurs (particuliers compris) et se prescrit par 2 ans à compter de la découverte du vice. La garantie commerciale est facultative, souvent payante, et s'ajoute aux deux autres sans jamais les remplacer.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire si le vendeur refuse d'appliquer la garantie ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Adressez-vous au vendeur, et non au fabricant : la garantie est due par le vendeur. Envoyez une mise en demeure par lettre recommandée avec accusé de réception, en citant les articles L. 217-3 et suivants du Code de la consommation. En cas d'échec, saisissez gratuitement le médiateur de la consommation, signalez la situation sur SignalConso, puis, en dernier recours, le tribunal judiciaire. Votre protection juridique peut prendre en charge certains frais.</p>
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
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Bouton de rétractation : la nouvelle obligation des sites de vente en ligne →
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
                <span key="Garantie légale" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Garantie légale</span>
                <span key="Consommation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Consommation</span>
                <span key="Produit défectueux" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Produit défectueux</span>
                <span key="Vices cachés" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Vices cachés</span>
                <span key="Vos droits" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Vos droits</span>
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
