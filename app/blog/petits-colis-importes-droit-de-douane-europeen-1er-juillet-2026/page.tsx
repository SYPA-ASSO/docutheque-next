import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Petits colis importés : ce qui change depuis le 1er juillet 2026 pour les vendeurs et importateurs · Blog Cabinet Cholez-Pagotto",
  description: "Depuis le 1er juillet 2026, un droit de douane forfaitaire européen de 3 € par article remplace la taxe française de 2 € sur les envois de faible valeur. Le décret n° 2026-589 du 3 juillet 2026 acte la bascule. Ce que doivent vérifier e-commerçants, importateurs et TPE.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/petits-colis-importes-droit-de-douane-europeen-1er-juillet-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/petits-colis-douane-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/petits-colis-douane-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Petits colis importés : ce qui change depuis le 1er juillet 2026 pour les vendeurs et importateurs",
      "description": "Depuis le 1er juillet 2026, un droit de douane forfaitaire européen de 3 € par article remplace la taxe française de 2 € sur les envois de faible valeur. Le décret n° 2026-589 du 3 juillet 2026 acte la bascule. Ce que doivent vérifier e-commerçants, importateurs et TPE.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/petits-colis-douane-2026.webp",
      "datePublished": "2026-07-05",
      "dateModified": "2026-07-05",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": {
          "@type": "Organization",
          "name": "Cabinet Cholez-Pagotto"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/petits-colis-importes-droit-de-douane-europeen-1er-juillet-2026",
      "keywords": [
        "petits colis",
        "envois de faible valeur",
        "droit de douane européen",
        "décret 2026-589",
        "taxe petits colis",
        "franchise de minimis",
        "e-commerce",
        "importation",
        "article 82 loi de finances 2026",
        "douane"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le changement date-t-il du 1er, du 3 ou du 4 juillet 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret n° 2026-589 est daté du 3 juillet et publié au Journal officiel du 4 juillet 2026, mais il constate que le mécanisme européen est entré en vigueur le 1er juillet 2026. C'est donc bien le 1er juillet qui constitue la date de bascule entre la taxe française et le droit de douane européen."
          }
        },
        {
          "@type": "Question",
          "name": "La taxe française de 2 € sur les petits colis est-elle suspendue ou abrogée ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Elle a cessé de s'appliquer au 1er juillet 2026. La presse a parlé d'une taxe « suspendue », en écho à l'annonce gouvernementale du 30 juin 2026 ; juridiquement, le XIII de l'article 82 de la loi de finances pour 2026 prévoyait son abrogation à compter de l'entrée en vigueur du mécanisme européen. Cette entrée en vigueur ayant été constatée au 1er juillet 2026 par le décret n° 2026-589, la taxe française a donc pris fin à cette date, après quatre mois d'application (1er mars au 30 juin 2026)."
          }
        },
        {
          "@type": "Question",
          "name": "Quels envois sont concernés par le droit de douane forfaitaire de 3 € ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les marchandises de faible valeur, c'est-à-dire d'une valeur inférieure ou égale à 150 €, importées de pays tiers dans l'Union européenne, avec un ciblage prioritaire des flux du commerce électronique à destination des consommateurs (opérateurs IOSS et envois postaux). Le régime forfaitaire est transitoire, du 1er juillet 2026 au 1er juillet 2028."
          }
        },
        {
          "@type": "Question",
          "name": "Le droit de 3 € remplace-t-il la TVA à l'importation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La TVA à l'importation reste due dans les conditions habituelles depuis la suppression de la franchise de TVA en 2021. Le droit de douane forfaitaire de 3 € par article s'y ajoute."
          }
        },
        {
          "@type": "Question",
          "name": "D'autres coûts sont-ils à prévoir sur les petits colis ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, probablement. Une redevance européenne pour frais de gestion, de l'ordre de 2 € par colis, destinée à financer les contrôles douaniers, est annoncée pour l'automne 2026. Les opérateurs ont intérêt à l'intégrer dès maintenant dans leurs prévisions de coûts."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://cholez-pagotto.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://cholez-pagotto.fr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Petits colis importés : la bascule du 1er juillet 2026"
        }
      ]
    }
  ]
}

export default function ArticlePetitsColis2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Petits colis importés : la bascule du 1er juillet 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>E-COMMERCE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DOUANE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>TPE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Petits colis importés : ce qui change depuis le 1er juillet 2026 pour les vendeurs et importateurs</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 5 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 12 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/petits-colis-douane-2026.webp"
                alt="Petits colis importés : ce qui change depuis le 1er juillet 2026 pour les vendeurs et importateurs"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#avant" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce qui s'est appliqué du 1er mars au 30 juin 2026 : la taxe française de 2 €</a></li>
                <li><a href="#depuis" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Ce qui s'applique depuis le 1er juillet 2026 : le droit de douane européen de 3 €</a></li>
                <li><a href="#decret" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le rôle exact du décret n° 2026-589 : le déclencheur temporel</a></li>
                <li><a href="#suite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Et ensuite : la redevance de gestion attendue à l'automne</a></li>
                <li><a href="#checklist" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. La check-list des e-commerçants, importateurs et TPE</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Pour les vendeurs en ligne, importateurs, représentants en douane et petites entreprises qui vivent des <strong>petits envois importés</strong>, le cadre de référence a changé au <strong>1er juillet 2026</strong>. Cette bascule était attendue : elle fait passer le sujet des petits colis, ces centaines de millions d'envois annuels venus principalement des grandes plateformes asiatiques, d'un mécanisme fiscal national provisoire à un mécanisme douanier européen.</p>
                <p style={{marginBottom: '1rem'}}>Le <strong>décret n°&nbsp;2026-589 du 3 juillet 2026</strong>, publié au Journal officiel du 4 juillet 2026, vient officialiser cette bascule côté français. Mais pour comprendre ce qui s'applique réellement à vos flux, il faut reconstituer la chronologie complète : la taxe française de mars, le droit de douane européen de juillet, et la redevance de gestion attendue à l'automne. C'est l'objet de cet article.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> depuis le <strong>1er juillet 2026</strong>, les envois importés de pays tiers d'une valeur inférieure ou égale à 150&nbsp;€ supportent un <strong>droit de douane forfaitaire européen de 3&nbsp;€ par article</strong>, qui met fin à la franchise douanière ; à la même date, la <strong>taxe française de 2&nbsp;€ par article</strong>, appliquée depuis le 1er mars 2026, est <strong>abrogée</strong>, comme le constate le décret n°&nbsp;2026-589 du 3 juillet 2026, publié au Journal officiel du 4 juillet.
                  </p>
                </div>
              </section>

              <section id="avant">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce qui s'est appliqué du 1er mars au 30 juin 2026 : la taxe française de 2 €
                </h2>
                <p style={{marginBottom: '1rem'}}>Premier étage de la fusée : l'<strong>article 82 de la loi de finances pour 2026</strong> (loi n°&nbsp;2026-103 du 19 février 2026) a créé une <strong>taxe nationale de 2&nbsp;€ par article</strong> contenu dans les envois dits de faible valeur, c'est-à-dire d'une valeur intrinsèque <strong>inférieure ou égale à 150&nbsp;€</strong>, importés de pays tiers à l'Union européenne.</p>
                <p style={{marginBottom: '1rem'}}>Cette taxe, applicable à compter du <strong>1er mars 2026</strong>, avait un caractère assumé de mesure d'attente : combler, au niveau national, l'absence de droits de douane sur ces envois (la fameuse franchise « de minimis ») en attendant la réponse européenne. Elle visait à rétablir une concurrence plus équitable entre les plateformes expédiant depuis l'étranger et les commerçants établis en France, soumis, eux, à l'ensemble des charges et obligations nationales.</p>
                <p style={{marginBottom: '1rem'}}>Son bilan aura toutefois été très en deçà des attentes. Mesure nationale au sein d'un marché unique, la taxe a été <strong>massivement contournée</strong> : une large partie des flux a été déroutée par avion vers les pays voisins, Belgique et Pays-Bas notamment, avant d'être réacheminée par la route vers la France. Les professionnels du secteur évoquent jusqu'à 90&nbsp;% des volumes déroutés, et la presse a relayé un rendement de quelques millions d'euros seulement, très loin des recettes attendues. Ce constat a pesé dans la décision de ne pas cumuler la taxe nationale avec le droit européen, comme cela avait un temps été envisagé, mais de l'éteindre dès la bascule du 1er juillet.</p>
              </section>

              <section id="depuis">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Ce qui s'applique depuis le 1er juillet 2026 : le droit de douane européen de 3 €
                </h2>
                <p style={{marginBottom: '1rem'}}>Deuxième étage : l'Union européenne a décidé de <strong>supprimer la franchise douanière</strong> dont bénéficiaient les envois de moins de 150&nbsp;€. À titre transitoire, du <strong>1er juillet 2026 au 1er juillet 2028</strong>, le temps que l'infrastructure douanière centralisée soit opérationnelle, un <strong>droit de douane forfaitaire de 3&nbsp;€ par article</strong> s'applique aux marchandises de faible valeur importées dans l'Union.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Qui est redevable :</strong> le mécanisme cible en priorité les flux du commerce électronique à destination des consommateurs, via les opérateurs enregistrés au guichet IOSS et les envois postaux.</li>
                  <li><strong>Qui perçoit :</strong> le droit est perçu au profit de l'Union européenne ; un quart des sommes est reversé à l'État membre où le dédouanement est réalisé, en couverture des coûts de collecte.</li>
                  <li><strong>Ce qui ne change pas :</strong> la TVA à l'importation reste due dans les conditions habituelles ; le droit forfaitaire s'y ajoute, il ne s'y substitue pas.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>L'objectif européen est le même que celui de la taxe française, à plus grande échelle : mettre fin à un avantage concurrentiel devenu massif, et financer le contrôle de flux dont une part significative s'est révélée non conforme aux normes européennes de sécurité des produits.</p>
              </section>

              <section id="decret">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le rôle exact du décret n° 2026-589 : le déclencheur temporel
                </h2>
                <p style={{marginBottom: '1rem'}}>Troisième étage, plus juridique : le <strong>décret n°&nbsp;2026-589 du 3 juillet 2026</strong> ne crée pas lui-même le prélèvement européen. Son article 1er <strong>constate la date d'entrée en vigueur</strong>, fixée au <strong>1er juillet 2026</strong>, des dispositions du droit de l'Union mentionnées au XIII de l'article 82 de la loi de finances pour 2026, issues du règlement (UE) 2026/382 du Conseil du 11 février 2026.</p>
                <p style={{marginBottom: '1rem'}}>Or ce XIII de l'article 82 prévoyait précisément que la <strong>taxe française</strong> sur les envois de faible valeur serait <strong>abrogée</strong> à compter de l'entrée en vigueur du mécanisme européen. Le décret joue donc un rôle de <strong>déclencheur temporel</strong> : en constatant la date du 1er juillet 2026, il emporte la fin de la taxe nationale à cette même date. Il n'y a donc <strong>pas de cumul</strong> entre la taxe française de 2&nbsp;€ et le droit européen de 3&nbsp;€ : l'une s'éteint quand l'autre commence.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Attention aux dates.</strong> Le décret est daté du 3 juillet et publié le 4 juillet, mais la date juridiquement pertinente qu'il fixe est le 1er juillet 2026. Pour vos flux, la ligne de partage est donc : envois pris en charge jusqu'au 30 juin 2026, régime de la taxe française ; à compter du 1er juillet 2026, régime du droit de douane européen.
                  </p>
                </div>
              </section>

              <section id="suite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Et ensuite : la redevance de gestion attendue à l'automne
                </h2>
                <p style={{marginBottom: '1rem'}}>Le paysage n'est pas encore complet. L'Union européenne a également prévu une <strong>redevance pour frais de gestion</strong> (parfois appelée « handling fee ») de l'ordre de 2&nbsp;€ par colis, destinée à financer les contrôles douaniers, dont l'application est annoncée pour <strong>l'automne 2026</strong>. Les opérateurs du e-commerce transfrontalier doivent donc intégrer dès maintenant, dans leurs prévisions de coûts, l'hypothèse d'un renchérissement supplémentaire des petits envois avant la fin de l'année.</p>
                <p style={{marginBottom: '1rem'}}>À plus long terme, la réforme douanière européenne prévoit la disparition du régime forfaitaire transitoire au profit du régime définitif, au plus tard au 1er juillet 2028, avec l'entrée en service de la plateforme douanière centralisée.</p>
              </section>

              <section id="checklist">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. La check-list des e-commerçants, importateurs et TPE
                </h2>
                <p style={{marginBottom: '1rem'}}>Concrètement, si votre activité dépend des petits envois importés, voici ce qu'il faut vérifier depuis le 1er juillet 2026 :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Paramétrages douaniers et logistiques.</strong> Vérifiez avec votre représentant en douane, votre transporteur ou votre plateforme logistique que les déclarations intègrent bien le droit forfaitaire de 3&nbsp;€ par article et n'appliquent plus la taxe française.</li>
                  <li><strong>Prix de vente et marges.</strong> Recalculez vos coûts de revient à l'importation : sur des produits à faible valeur unitaire, 3&nbsp;€ par article peuvent absorber toute la marge.</li>
                  <li><strong>Information des clients.</strong> Si vos clients supportent des frais à la livraison, vos conditions générales de vente et vos pages d'information doivent décrire correctement les frais applicables : une information inexacte sur le prix total est un terrain classique de litige consommation.</li>
                  <li><strong>Documentation des opérations.</strong> Conservez la trace des dédouanements et des paiements : en période de bascule, les erreurs de régime (taxe appliquée à tort après le 30 juin, droit oublié) se corrigent d'autant mieux qu'elles sont documentées.</li>
                  <li><strong>Veille sur la redevance de gestion.</strong> Intégrez l'échéance de l'automne 2026 dans vos prévisions tarifaires.</li>
                </ul>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Pack Conformité vente en ligne</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>CGV e-commerce, mentions obligatoires, information précontractuelle, rétractation : le pack du cabinet réunit les documents pour sécuriser votre boutique en ligne, à personnaliser selon votre activité.</p>
                  <a href="/catalogue/pack-conformite-vente-en-ligne" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack &rarr;</a>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret du 3 juillet 2026 est court, mais son effet est net : il fixe au 1er juillet 2026 la bascule entre un mécanisme national et un mécanisme européen pour les petits envois importés. La taxe française de 2&nbsp;€ s'efface derrière le droit de douane forfaitaire de 3&nbsp;€, dans l'attente d'une redevance de gestion supplémentaire à l'automne. Pour les entreprises concernées, surtout les plus petites, la conclusion tient en une phrase : <strong>si votre activité dépend des petits envois importés, votre cadre de référence a changé</strong>, et c'est le moment de vérifier vos paramétrages, vos prix et vos documents contractuels.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur le <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054386802" style={{color: '#1a4fba', fontWeight: 600}}>décret n° 2026-589 du 3 juillet 2026</a>, publié au Journal officiel du 4 juillet 2026, sur l'article 82 de la loi n°&nbsp;2026-103 du 19 février 2026 de finances pour 2026, sur le règlement (UE) 2026/382 du Conseil du 11 février 2026 qu'il vise, ainsi que sur les informations publiées par la direction générale des douanes et droits indirects et par service-public.gouv.fr.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le changement date-t-il du 1er, du 3 ou du 4 juillet 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret n° 2026-589 est daté du 3 juillet et publié au Journal officiel du 4 juillet 2026, mais il constate que le mécanisme européen est entré en vigueur le 1er juillet 2026. C'est donc bien le 1er juillet qui constitue la date de bascule entre la taxe française et le droit de douane européen.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La taxe française de 2 € sur les petits colis est-elle suspendue ou abrogée ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Elle a cessé de s'appliquer au 1er juillet 2026. La presse a parlé d'une taxe « suspendue », en écho à l'annonce gouvernementale du 30 juin 2026 ; juridiquement, le XIII de l'article 82 de la loi de finances pour 2026 prévoyait son abrogation à compter de l'entrée en vigueur du mécanisme européen. Cette entrée en vigueur ayant été constatée au 1er juillet 2026 par le décret n° 2026-589, la taxe française a donc pris fin à cette date, après quatre mois d'application (1er mars au 30 juin 2026).</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels envois sont concernés par le droit de douane forfaitaire de 3 € ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les marchandises de faible valeur, c'est-à-dire d'une valeur inférieure ou égale à 150 €, importées de pays tiers dans l'Union européenne, avec un ciblage prioritaire des flux du commerce électronique à destination des consommateurs (opérateurs IOSS et envois postaux). Le régime forfaitaire est transitoire, du 1er juillet 2026 au 1er juillet 2028.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le droit de 3 € remplace-t-il la TVA à l'importation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La TVA à l'importation reste due dans les conditions habituelles depuis la suppression de la franchise de TVA en 2021. Le droit de douane forfaitaire de 3 € par article s'y ajoute.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>D'autres coûts sont-ils à prévoir sur les petits colis ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, probablement. Une redevance européenne pour frais de gestion, de l'ordre de 2 € par colis, destinée à financer les contrôles douaniers, est annoncée pour l'automne 2026. Les opérateurs ont intérêt à l'intégrer dès maintenant dans leurs prévisions de coûts.</p>
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
                Poser ma question &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Bouton de rétractation : la nouvelle obligation des sites de vente en ligne depuis le 19 juin 2026 &rarr;
              </a>
              <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME &rarr;
              </a>
            </div>

            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                En savoir plus &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <span key="E-commerce" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>E-commerce</span>
                <span key="Douane" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Douane</span>
                <span key="Fiscalité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Fiscalité</span>
                <span key="TPE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>TPE</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              &larr; Retour au blog
            </a>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}
