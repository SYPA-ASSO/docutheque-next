import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Bouton de rétractation : la nouvelle obligation des sites de vente en ligne depuis le 19 juin 2026 · Blog Cabinet Cholez-Pagotto`,
  description: `Depuis le 19 juin 2026, tout professionnel vendant à distance via une interface en ligne doit proposer une fonction de rétractation dédiée. Qui est concerné, à quoi doit ressembler le bouton, quelles sanctions : le guide complet et vérifié.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/bouton-retractation-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/bouton-retractation-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Bouton de rétractation : la nouvelle obligation des sites de vente en ligne depuis le 19 juin 2026",
      "description": "Depuis le 19 juin 2026, tout professionnel vendant à distance via une interface en ligne doit proposer une fonction de rétractation dédiée. Qui est concerné, à quoi doit ressembler le bouton, quelles sanctions : le guide complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/bouton-retractation-2026.webp",
      "datePublished": "2026-06-22",
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
      "url": "https://cholez-pagotto.fr/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026",
      "keywords": ["Bouton de rétractation", "Droit de rétractation", "E-commerce", "Code de la consommation", "L221-21", "Vente en ligne", "CGV", "Conformité"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le bouton de rétractation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est une fonction de rétractation en ligne, obligatoire depuis le 19 juin 2026, qui permet au consommateur d'exercer son droit de rétractation directement depuis l'interface de vente, sans avoir à envoyer un email, télécharger un formulaire ou téléphoner. Le terme bouton vient de la pratique ; le texte parle d'une fonctionnalité. Elle complète les moyens existants sans les remplacer."
          }
        },
        {
          "@type": "Question",
          "name": "Depuis quand le bouton de rétractation est-il obligatoire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depuis le 19 juin 2026. L'obligation résulte de l'ordonnance n° 2026-2 et du décret n° 2026-3 du 5 janvier 2026, qui transposent la directive (UE) 2023/2673 du 22 novembre 2023 et modifient l'article L. 221-21 du Code de la consommation, ses modalités techniques figurant à l'article D. 221-5. Les contrats conclus avant cette date restent régis par les anciennes règles."
          }
        },
        {
          "@type": "Question",
          "name": "Qui est concerné par cette obligation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tout professionnel qui conclut des contrats à distance, au moyen d'une interface en ligne, avec un consommateur. Bien que la directive concerne à l'origine les services financiers, la transposition française a inséré l'obligation dans le régime général : elle est donc horizontale et vise tous les secteurs. Sont hors champ les relations entre professionnels, ainsi que les contrats conclus par téléphone ou en présentiel."
          }
        },
        {
          "@type": "Question",
          "name": "Mon site vend uniquement via une marketplace, suis-je concerné ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sur une marketplace, la plateforme doit s'assurer que la fonctionnalité existe à l'échelle de l'interface. Si vous vendez exclusivement via une plateforme tierce, l'obligation technique repose sur elle. En revanche, dès que vous avez votre propre boutique en ligne, même modeste, ou un espace de vente directe, celui-ci est concerné et doit être mis en conformité."
          }
        },
        {
          "@type": "Question",
          "name": "À quoi doit ressembler le bouton de rétractation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret impose une fonctionnalité identifiée de manière lisible par les mots « renoncer au contrat ici » ou une formule analogue dénuée d'ambiguïté, affichée de façon visible et directement accessible, disponible pendant toute la durée du délai de rétractation. La rétractation se fait en deux temps : ce bouton ouvre une déclaration en ligne, puis un second bouton « confirmer la rétractation » valide la demande, avant un accusé de réception horodaté sur support durable. Les clients sans compte doivent aussi pouvoir l'utiliser."
          }
        },
        {
          "@type": "Question",
          "name": "Le délai de rétractation change-t-il ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le délai de rétractation de 14 jours reste inchangé. La réforme ne crée pas un nouveau droit : elle impose une nouvelle façon de l'exercer, directement en ligne. L'objectif du législateur est de mettre fin aux parcours asymétriques, où l'achat se fait en quelques clics mais la rétractation suppose plusieurs jours de démarches."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sanctions en cas de non-conformité ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'absence de fonctionnalité conforme expose le professionnel à une amende administrative, prononcée par la DGCCRF, pouvant atteindre 15 000 euros pour une personne physique et 75 000 euros pour une personne morale (article L. 242-13). Il faut la distinguer d'un manquement voisin : le défaut d'information du consommateur sur son droit de rétractation, qui, lui, entraîne l'extension du délai de rétractation à douze mois (article L. 221-20). Ces deux manquements vont souvent de pair, mais reposent sur des fondements distincts."
          }
        },
        {
          "@type": "Question",
          "name": "Que dois-je changer dans mes conditions générales de vente ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'ordonnance impose une obligation d'information précontractuelle : vous devez informer vos clients de l'existence de la fonctionnalité et de son emplacement avant qu'ils ne passent commande. Cela implique une mise à jour de vos conditions générales de vente, pour y intégrer les nouvelles modalités d'exercice du droit de rétractation et indiquer où trouver le bouton."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Bouton de rétractation 2026" }
      ]
    }
  ]
}

export default function ArticleBoutonRetractation2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Bouton de rétractation 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VENTE EN LIGNE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONFORMITÉ</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Bouton de rétractation : la nouvelle obligation des sites de vente en ligne depuis le 19 juin 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 22 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 14 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/bouton-retractation-2026.webp"
                alt="Bouton de rétractation : la nouvelle obligation des sites de vente en ligne depuis le 19 juin 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#change" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce qui change depuis le 19 juin 2026</a></li>
                <li><a href="#concerne" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Qui est concerné</a></li>
                <li><a href="#fonctionnalite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. À quoi doit ressembler le bouton</a></li>
                <li><a href="#placer" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Où le placer</a></li>
                <li><a href="#cgv" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. CGV et information précontractuelle</a></li>
                <li><a href="#sanctions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Les sanctions</a></li>
                <li><a href="#agir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Que faire maintenant</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Depuis le <strong>19 juin 2026</strong>, une obligation nouvelle s'impose à tous ceux qui vendent en ligne. Tout professionnel qui conclut des contrats à distance via une interface en ligne doit désormais proposer à ses clients une <strong>fonction de rétractation dédiée</strong>, directement sur son site. Pas un email à envoyer, pas un formulaire à télécharger, pas un numéro à appeler : un dispositif en ligne, accessible et gratuit, communément appelé le <strong>bouton de rétractation</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Ce qui change, ce n'est pas le droit de rétractation lui-même, mais la <strong>manière de l'exercer</strong>, et donc ce que votre site doit comporter pour rester conforme. Cet article fait le point, de façon complète et vérifiée, sur qui est concerné, à quoi doit ressembler la fonctionnalité, et quelles sanctions encourent ceux qui ne s'y conforment pas.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> si vous vendez à des particuliers via un site ou une application, vous devez offrir, depuis votre interface, un moyen <strong>visible et gratuit</strong> de se rétracter, identifié par la mention <strong>« renoncer au contrat ici »</strong>, accessible pendant tout le délai de rétractation.
                  </p>
                </div>
              </section>

              <section id="change">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce qui change depuis le 19 juin 2026
                </h2>
                <p style={{marginBottom: '1rem'}}>L'obligation résulte de l'<strong>ordonnance n° 2026-2</strong> et du <strong>décret n° 2026-3 du 5 janvier 2026</strong>, qui transposent en droit français la <strong>directive (UE) 2023/2673 du 22 novembre 2023</strong>. Concrètement, l'ordonnance complète l'<strong>article L. 221-21 du Code de la consommation</strong>, et le décret en précise les modalités techniques à l'<strong>article D. 221-5</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Jusqu'au 19 juin 2026, proposer un formulaire de rétractation en ligne était une <strong>faculté</strong> : le professionnel pouvait le faire, sans y être tenu. Depuis cette date, la mise à disposition d'une fonctionnalité de rétractation accessible directement via l'interface en ligne devient <strong>obligatoire</strong>. Le bouton ne remplace pas les moyens existants (courrier, email) : il s'y ajoute, mais son absence n'est plus permise.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le droit ne change pas, sa mise en œuvre oui.</strong> Le délai de rétractation de <strong>14 jours</strong> reste identique. L'objectif du législateur est de mettre fin aux parcours <strong>asymétriques</strong> : un achat en quelques clics, mais une rétractation rendue pénible au point d'y renoncer.
                  </p>
                </div>
              </section>

              <section id="concerne">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Qui est concerné
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le point qui mérite le plus d'attention, car la directive et sa transposition ne se recouvrent pas exactement. La directive vise <strong>à l'origine les services financiers à distance</strong>, mais le législateur français a inséré l'obligation dans le <strong>régime général</strong> de la vente à distance (l'article L. 221-21). Résultat : l'obligation est <strong>horizontale et vise tous les secteurs</strong>, dès lors qu'un droit de rétractation existe.</p>
                <p style={{marginBottom: '1rem'}}>L'obligation suppose la réunion de <strong>trois conditions cumulatives</strong> : un contrat conclu <strong>à distance</strong>, au moyen d'une <strong>interface en ligne</strong>, avec un <strong>consommateur</strong>. Le critère décisif n'est pas la taille de l'opérateur, mais la nature du contrat et de son cocontractant.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Sont concernés</strong> les sites e-commerce, les applications mobiles, les espaces clients, les modules d'achat intégrés aux réseaux sociaux et les marketplaces, pour les contrats conclus directement avec le consommateur.</li>
                  <li><strong>Sont hors champ</strong> les relations entre professionnels (B2B), ainsi que les contrats conclus exclusivement par téléphone ou en présentiel.</li>
                  <li><strong>Échappent aussi à l'obligation</strong> les ventes sans droit de rétractation (article L. 221-28 : biens personnalisés ou sur-mesure, denrées périssables, contenu numérique fourni sur support immatériel dont l'exécution a commencé avec l'accord du consommateur, entre autres).</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Deux précisions utiles. Sur une <strong>marketplace</strong>, la plateforme doit garantir l'existence de la fonctionnalité, mais chaque vendeur reste responsable de sa propre conformité pour ses ventes directes. Et un <strong>vendeur étranger</strong> qui cible activement le marché français (site en français, livraison en France, prix en euros) est soumis à l'obligation, y compris en dropshipping.</p>
              </section>

              <section id="fonctionnalite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. À quoi doit ressembler le bouton
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret fixe des exigences précises. La fonctionnalité doit être identifiée, de manière lisible, par les mots <strong>« renoncer au contrat ici »</strong> ou une formule analogue dénuée d'ambiguïté. Elle doit être affichée de manière <strong>visible</strong>, <strong>directement et facilement accessible</strong>, et <strong>disponible pendant toute la durée du délai de rétractation</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Elle doit permettre au consommateur d'<strong>envoyer une déclaration de rétractation en ligne</strong>, conçue pour qu'il puisse fournir ou confirmer facilement son nom, des indications pour identifier le contrat concerné, et le moyen électronique par lequel il souhaite recevoir l'accusé de réception. La rétractation se fait alors en <strong>deux temps</strong> : le bouton « renoncer au contrat ici » ouvre la déclaration, puis un <strong>second bouton « confirmer la rétractation »</strong> (ou une formule analogue dénuée d'ambiguïté) valide la demande. C'est ce second clic qui matérialise juridiquement la volonté du consommateur et protège contre une rétractation accidentelle. Après cette confirmation, le professionnel doit adresser, sans délai, un <strong>accusé de réception horodaté sur support durable</strong>, mentionnant le contenu de la déclaration ainsi que la date et l'heure. Un email automatique convient, à condition d'être systématique et traçable. Point important : les <strong>clients sans compte</strong> doivent eux aussi pouvoir utiliser la fonctionnalité.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Les libellés à proscrire.</strong> Des formulations vagues ou détournées comme « Retourner un article », « Annuler ma commande », « Gérer mes commandes » ou « Contacter le SAV » ne satisfont pas à l'exigence de clarté. Le libellé doit désigner sans ambiguïté la rétractation.
                  </p>
                </div>
              </section>

              <section id="placer">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Où le placer
                </h2>
                <p style={{marginBottom: '1rem'}}>L'emplacement compte autant que le libellé : la fonctionnalité doit être directement accessible, et non enterrée dans une FAQ ou au bas d'une page de conditions générales. Les emplacements les plus pertinents sont les suivants.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>En priorité, dans l'espace client</strong>, au niveau du détail de chaque commande concernée : c'est l'endroit le plus logique et le plus attendu.</li>
                  <li><strong>En complément, dans les emails de confirmation</strong> de commande, avec un lien vers la fonctionnalité.</li>
                  <li><strong>En complément, dans les conditions générales de vente</strong>, en indiquant l'emplacement exact du bouton.</li>
                </ul>
              </section>

              <section id="cgv">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. CGV et information précontractuelle
                </h2>
                <p style={{marginBottom: '1rem'}}>Mettre en place le dispositif technique ne suffit pas. L'ordonnance impose aussi une <strong>obligation d'information précontractuelle</strong> : vous devez informer vos clients de l'<strong>existence de la fonctionnalité et de son emplacement</strong>, avant qu'ils ne passent commande.</p>
                <p style={{marginBottom: '1rem'}}>En pratique, cela implique une <strong>mise à jour de vos conditions générales de vente</strong>, pour y intégrer les nouvelles modalités d'exercice du droit de rétractation et orienter clairement le consommateur vers le bouton. C'est souvent l'occasion de vérifier, plus largement, la cohérence et la conformité de l'ensemble de vos mentions légales et de vos CGV.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Clause de rétractation pour vos CGV</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>La clause à jour au 19 juin 2026 : délai de 14 jours, modalités d'exercice via la fonctionnalité en ligne, exceptions de l'article L. 221-28. À intégrer à vos CGV.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-clause-retractation-cgv-vente-en-ligne" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-vente-en-ligne" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité vente en ligne</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Politique de rétractation et mentions précontractuelles</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>L'information due avant la commande : existence et emplacement du bouton, procédure en deux temps, accusé de réception. Pour remplir votre obligation précontractuelle.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-politique-retractation-mentions-precontractuelles" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-vente-en-ligne" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité vente en ligne</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Formulaire type de rétractation</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le formulaire de l'article R. 221-3 à mettre à disposition en complément du bouton : champs d'identification du contrat et du consommateur.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-formulaire-type-retractation" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-vente-en-ligne" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité vente en ligne</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>CGV de vente en ligne complètes (B2C)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Des conditions générales à jour de bout en bout : identité, prix, livraison, paiement, garanties légales, rétractation, données personnelles, médiation.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-cgv-vente-en-ligne-completes" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-vente-en-ligne" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité vente en ligne</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Conformité vente en ligne</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Tout pour être en règle au 19 juin 2026, réuni et à prix groupé : CGV complètes, clause et politique de rétractation, formulaire type, et check-list d'implémentation du bouton.</p>
                  <a href="/catalogue/pack-conformite-vente-en-ligne" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Conformité vente en ligne →</a>
                </div>
              </section>

              <section id="sanctions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Les sanctions
                </h2>
                <p style={{marginBottom: '1rem'}}>L'absence d'une fonctionnalité conforme expose le professionnel à une <strong>amende administrative</strong>, prononcée par la DGCCRF, dont le montant peut atteindre <strong>15&nbsp;000&nbsp;€ pour une personne physique</strong> et <strong>75&nbsp;000&nbsp;€ pour une personne morale</strong> (article L. 242-13 du Code de la consommation), au titre du manquement aux conditions d'exercice du droit de rétractation.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Une confusion fréquente à éviter.</strong> L'absence de bouton n'allonge pas, à elle seule, le délai de rétractation à douze mois. Cette prolongation (<strong>article L. 221-20</strong> du Code de la consommation) sanctionne un manquement <strong>distinct</strong> : le défaut d'information du consommateur sur son droit de rétractation. Les deux manquements vont souvent de pair, mais reposent sur des fondements différents, qu'il ne faut pas confondre.
                  </p>
                </div>
              </section>

              <section id="agir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Que faire maintenant
                </h2>
                <p style={{marginBottom: '1rem'}}>L'échéance étant passée, l'enjeu est de se mettre en conformité sans tarder. Quelques étapes concrètes.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Vérifier si vous êtes concerné</strong> : vendez-vous à des consommateurs, à distance, via une interface en ligne, pour des contrats ouvrant droit à rétractation ?</li>
                  <li><strong>Intégrer la fonctionnalité</strong> avec votre prestataire technique : bouton clairement identifié, déclaration en ligne, accusé de réception horodaté.</li>
                  <li><strong>Tester le parcours</strong>, y compris pour un client sans compte, et vérifier la traçabilité de l'accusé de réception.</li>
                  <li><strong>Coordonner avec vos prestataires de paiement et de logistique</strong> le traitement des remboursements (au plus tard 14 jours après la rétractation) et des retours.</li>
                  <li><strong>Mettre à jour vos CGV</strong> et l'information précontractuelle, et profiter de l'occasion pour auditer la conformité globale de votre site.</li>
                </ul>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>RC professionnelle et protection juridique e-commerce</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Une activité de vente en ligne expose à des litiges clients et à des contrôles. Une responsabilité civile professionnelle adaptée à l'e-commerce et une protection juridique vous couvrent. En courtier, le cabinet vous oriente vers le contrat adapté.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Mettre votre site en conformité</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Bouton de rétractation, CGV, mentions légales, RGPD : le cabinet vous aide à sécuriser la conformité de votre activité en ligne. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/rgpd-conformite" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Conformité RGPD</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le bouton de rétractation n'est pas une révolution juridique : le droit de se rétracter sous 14 jours existait déjà. C'est une révolution de méthode, qui impose de pouvoir l'exercer en ligne, simplement, depuis l'interface où l'achat a eu lieu. Pour la plupart des sites marchands, la mise en conformité est techniquement simple, mais elle doit être réelle, testée et accompagnée d'une mise à jour des CGV.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de traiter le sujet maintenant, en profitant de l'occasion pour vérifier la conformité d'ensemble de votre site. En cas de doute sur votre situation précise, mieux vaut faire le point avant un contrôle.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Ordonnance n° 2026-2 du 5 janvier 2026 et décret n° 2026-3 du 5 janvier 2026 (transposition), <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>legifrance.gouv.fr</a></li>
                  <li>Code de la consommation, articles L. 221-21 (fonction de rétractation) et D. 221-5 (modalités), ainsi que L. 221-20 (information) et L. 221-28 (exceptions au droit de rétractation)</li>
                  <li>Directive (UE) 2023/2673 du 22 novembre 2023 modifiant la directive 2011/83/UE relative aux contrats de services financiers conclus à distance, <a href="https://eur-lex.europa.eu" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>eur-lex.europa.eu</a></li>
                  <li>Loi n° 2025-391 du 30 avril 2025 (DDADUE), habilitation à transposer</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Il ne se substitue pas à une analyse de votre site et de vos contrats au cas par cas.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le bouton de rétractation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est une fonction de rétractation en ligne, obligatoire depuis le 19 juin 2026, qui permet au consommateur d'exercer son droit de rétractation directement depuis l'interface de vente, sans avoir à envoyer un email, télécharger un formulaire ou téléphoner. Le terme bouton vient de la pratique ; le texte parle d'une fonctionnalité. Elle complète les moyens existants sans les remplacer.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Depuis quand le bouton de rétractation est-il obligatoire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Depuis le 19 juin 2026. L'obligation résulte de l'ordonnance n° 2026-2 et du décret n° 2026-3 du 5 janvier 2026, qui transposent la directive (UE) 2023/2673 du 22 novembre 2023 et modifient l'article L. 221-21 du Code de la consommation, ses modalités techniques figurant à l'article D. 221-5. Les contrats conclus avant cette date restent régis par les anciennes règles.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qui est concerné par cette obligation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Tout professionnel qui conclut des contrats à distance, au moyen d'une interface en ligne, avec un consommateur. Bien que la directive concerne à l'origine les services financiers, la transposition française a inséré l'obligation dans le régime général : elle est donc horizontale et vise tous les secteurs. Sont hors champ les relations entre professionnels, ainsi que les contrats conclus par téléphone ou en présentiel.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mon site vend uniquement via une marketplace, suis-je concerné ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Sur une marketplace, la plateforme doit s'assurer que la fonctionnalité existe à l'échelle de l'interface. Si vous vendez exclusivement via une plateforme tierce, l'obligation technique repose sur elle. En revanche, dès que vous avez votre propre boutique en ligne, même modeste, ou un espace de vente directe, celui-ci est concerné et doit être mis en conformité.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À quoi doit ressembler le bouton de rétractation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret impose une fonctionnalité identifiée de manière lisible par les mots « renoncer au contrat ici » ou une formule analogue dénuée d'ambiguïté, affichée de façon visible et directement accessible, disponible pendant toute la durée du délai de rétractation. La rétractation se fait en deux temps : ce bouton ouvre une déclaration en ligne, puis un second bouton « confirmer la rétractation » valide la demande, avant un accusé de réception horodaté sur support durable. Les clients sans compte doivent aussi pouvoir l'utiliser.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le délai de rétractation change-t-il ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le délai de rétractation de 14 jours reste inchangé. La réforme ne crée pas un nouveau droit : elle impose une nouvelle façon de l'exercer, directement en ligne. L'objectif du législateur est de mettre fin aux parcours asymétriques, où l'achat se fait en quelques clics mais la rétractation suppose plusieurs jours de démarches.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles sanctions en cas de non-conformité ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'absence de fonctionnalité conforme expose le professionnel à une amende administrative, prononcée par la DGCCRF, pouvant atteindre 15&nbsp;000&nbsp;€ pour une personne physique et 75&nbsp;000&nbsp;€ pour une personne morale (article L. 242-13). Il faut la distinguer d'un manquement voisin : le défaut d'information du consommateur sur son droit de rétractation, qui, lui, entraîne l'extension du délai de rétractation à douze mois (article L. 221-20). Ces deux manquements vont souvent de pair, mais reposent sur des fondements distincts.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que dois-je changer dans mes conditions générales de vente ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'ordonnance impose une obligation d'information précontractuelle : vous devez informer vos clients de l'existence de la fonctionnalité et de son emplacement avant qu'ils ne passent commande. Cela implique une mise à jour de vos conditions générales de vente, pour y intégrer les nouvelles modalités d'exercice du droit de rétractation et indiquer où trouver le bouton.</p>
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
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Accompagnement des professionnels</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Conformité de votre site, CGV, mentions légales, RGPD : le cabinet sécurise votre activité en ligne et vos obligations.</p>
              <a href="/accompagnement-professionnels" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Découvrir l'accompagnement →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Directive NIS2 : mon entreprise est-elle concernée ? →
              </a>
              <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Facturation électronique obligatoire 2026 : ce qui change →
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
                <span key="Bouton de rétractation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Bouton de rétractation</span>
                <span key="E-commerce" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>E-commerce</span>
                <span key="Droit de la consommation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit de la consommation</span>
                <span key="CGV" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>CGV</span>
                <span key="Conformité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Conformité</span>
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
