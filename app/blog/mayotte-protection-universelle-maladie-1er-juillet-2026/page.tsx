import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026 · Blog Cabinet Cholez-Pagotto",
  description: "Le décret n° 2026-581 du 30 juin 2026 précise les modalités d'application de la protection universelle maladie à Mayotte, en vigueur depuis le 1er juillet 2026. Condition de résidence, rôle de la caisse de sécurité sociale de Mayotte, délais : le point complet, angle accès aux droits.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/mayotte-protection-universelle-maladie-1er-juillet-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/mayotte-puma-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/mayotte-puma-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026",
      "description": "Le décret n° 2026-581 du 30 juin 2026 précise les modalités d'application de la protection universelle maladie à Mayotte, en vigueur depuis le 1er juillet 2026. Condition de résidence, rôle de la caisse de sécurité sociale de Mayotte, délais : le point complet, angle accès aux droits.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/mayotte-puma-2026.webp",
      "datePublished": "2026-07-04",
      "dateModified": "2026-07-04",
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
      "url": "https://cholez-pagotto.fr/blog/mayotte-protection-universelle-maladie-1er-juillet-2026",
      "keywords": [
        "Mayotte",
        "protection universelle maladie",
        "PUMa",
        "décret 2026-581",
        "loi 2025-797",
        "refondation Mayotte",
        "caisse de sécurité sociale de Mayotte",
        "accès aux droits",
        "assurance maladie"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Depuis quand le décret s'applique-t-il ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depuis le 1er juillet 2026. Le décret n° 2026-581 du 30 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et son entrée en vigueur est fixée à cette même date."
          }
        },
        {
          "@type": "Question",
          "name": "À qui s'adresse ce décret ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aux assurés mahorais et à la caisse de sécurité sociale de Mayotte, qui gère localement les prestations. Il intéresse aussi, en pratique, les professionnels de santé, les travailleurs sociaux, les associations d'accompagnement et les collectivités qui aident les usagers dans leurs démarches."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la condition de résidence pour bénéficier de la protection universelle maladie à Mayotte ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une personne est réputée avoir son lieu de séjour principal à Mayotte si, sous réserve de ne pas avoir transféré sa résidence hors du territoire, elle y séjourne personnellement et effectivement pendant plus de six mois au cours de l'année civile de versement des prestations."
          }
        },
        {
          "@type": "Question",
          "name": "Quels délais s'appliquent quand la caisse demande des justificatifs ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret adapte plusieurs procédures de contrôle et de demande de pièces : dans plusieurs cas, la référence à un délai d'un mois est remplacée par un délai de trois mois, l'organisme compétent étant la caisse de sécurité sociale de Mayotte."
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
          "name": "Mayotte : la protection universelle maladie"
        }
      ]
    }
  ]
}

export default function ArticleMayottePuma2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Mayotte : la protection universelle maladie</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PROTECTION SOCIALE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>OUTRE-MER</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ACCÈS AUX DROITS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 4 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 10 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/mayotte-puma-2026.webp"
                alt="Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Depuis le 1er juillet 2026. Le décret n° 2026-581 du 30 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et son entrée en vigueur est fixée à cette même date.</li>
                <li>Aux assurés mahorais et à la caisse de sécurité sociale de Mayotte, qui gère localement les prestations.</li>
                <li>Une personne est réputée avoir son lieu de séjour principal à Mayotte si, sous réserve de ne pas avoir transféré sa résidence hors du territoire, elle y séjourne personnellement et effectivement…</li>
                <li>Le décret adapte plusieurs procédures de contrôle et de demande de pièces : dans plusieurs cas, la référence à un délai d'un mois est remplacée par un délai de trois mois, l'organisme compétent…</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#application" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Un texte d'application, pas une simple annonce</a></li>
                <li><a href="#adaptations" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Ce que le décret adapte concrètement</a></li>
                <li><a href="#accesdroits" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. L'angle « accès aux droits » : ce que les accompagnants doivent retenir</a></li>
                <li><a href="#audeladom" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Pourquoi ce sujet dépasse Mayotte</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le Journal officiel du <strong>1er juillet 2026</strong> a publié le <strong>décret n°&nbsp;2026-581 du 30 juin 2026</strong> relatif à la protection universelle maladie à Mayotte. Derrière ce titre technique, une étape importante : l'alignement progressif de la protection sociale mahoraise sur le droit commun, prévu par la loi de programmation pour la refondation de Mayotte, se concrétise sur le terrain de l'assurance maladie.</p>
                <p style={{marginBottom: '1rem'}}>C'est une actualité qui concerne d'abord les <strong>assurés mahorais</strong>, mais aussi tous ceux qui les accompagnent : professionnels de santé, travailleurs sociaux, <strong>associations d'accompagnement</strong>, établissements et collectivités. Cet article présente ce que prévoit exactement le décret, avec un angle volontairement pratique : l'<strong>accès effectif aux droits</strong>.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> le décret n°&nbsp;2026-581 du 30 juin 2026, publié au Journal officiel du 1er juillet et <strong>entré en vigueur le 1er juillet 2026</strong>, fixe les modalités d'application de la <strong>protection universelle maladie à Mayotte</strong> : il rend applicables les dispositions du Code de la sécurité sociale avec des adaptations locales, pose une <strong>condition de séjour principal de plus de six mois</strong> sur le territoire et confie les vérifications à la <strong>caisse de sécurité sociale de Mayotte</strong>, avec des délais portés d'un à trois mois dans plusieurs procédures.
                  </p>
                </div>
              </section>

              <section id="application">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Un texte d'application, pas une simple annonce
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret précise lui-même qu'il est pris pour l'application de l'<strong>article 24 de la loi n°&nbsp;2025-797 du 11 août 2025</strong> de programmation pour la refondation de Mayotte. Les publics visés sont explicitement les <strong>assurés mahorais</strong> et la <strong>caisse de sécurité sociale de Mayotte</strong>, l'organisme unique qui gère localement les prestations.</p>
                <p style={{marginBottom: '1rem'}}>Autrement dit, on n'est plus dans l'intention politique générale : on est dans la <strong>traduction réglementaire</strong> de la réforme. Le principe de la protection universelle maladie, qui garantit dans l'Hexagone la prise en charge des frais de santé à toute personne travaillant ou résidant en France de manière stable et régulière, reçoit à Mayotte un cadre d'application précis, avec ses conditions, ses procédures et ses délais.</p>
              </section>

              <section id="adaptations">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Ce que le décret adapte concrètement
                </h2>
                <p style={{marginBottom: '1rem'}}>Le texte rend applicables à Mayotte plusieurs dispositions du Code de la sécurité sociale, moyennant des <strong>adaptations locales</strong>. Trois points méritent particulièrement l'attention :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>La condition de résidence.</strong> Une personne est réputée avoir son lieu de séjour principal à Mayotte si, sous réserve de ne pas avoir transféré sa résidence hors du territoire, elle y séjourne <strong>personnellement et effectivement pendant plus de six mois</strong> au cours de l'année civile de versement des prestations. C'est le critère central d'ouverture et de maintien des droits.</li>
                  <li><strong>Les vérifications par la caisse.</strong> Le décret organise la façon dont la <strong>caisse de sécurité sociale de Mayotte</strong> procède aux contrôles : vérification de la stabilité de la résidence, demandes de pièces justificatives, échanges avec l'assuré.</li>
                  <li><strong>Des délais adaptés.</strong> Dans plusieurs procédures de contrôle et de demande de pièces, la référence à un délai d'<strong>un mois</strong> est remplacée par un délai de <strong>trois mois</strong>, pour tenir compte des réalités locales : éloignement, difficultés matérielles d'obtention des justificatifs, situation particulière du territoire.</li>
                </ul>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Pourquoi ces délais comptent.</strong> Dans les dispositifs de protection sociale, la plupart des ruptures de droits ne viennent pas d'une inéligibilité de fond mais d'un justificatif manquant ou tardif. Porter certains délais de réponse d'un à trois mois, c'est réduire mécaniquement le risque de fermeture de droits pour des personnes éligibles. Les accompagnants ont tout intérêt à connaître ces délais avec précision.
                  </p>
                </div>
              </section>

              <section id="accesdroits">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. L'angle « accès aux droits » : ce que les accompagnants doivent retenir
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les associations, les travailleurs sociaux, les professionnels de santé et les services des collectivités qui accompagnent des démarches d'ouverture ou de maintien de droits, quelques réflexes concrets découlent du nouveau cadre :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Documenter la résidence.</strong> Le critère des six mois de séjour effectif au cours de l'année civile suppose de pouvoir en justifier : attestations, quittances, certificats de scolarité des enfants, documents administratifs. Constituer ce dossier en amont évite les blocages.</li>
                  <li><strong>Identifier l'interlocuteur.</strong> L'organisme compétent est la caisse de sécurité sociale de Mayotte : c'est vers elle que convergent demandes, justificatifs et recours gracieux.</li>
                  <li><strong>Suivre les délais de réponse.</strong> Lorsque la caisse demande des pièces, le délai applicable est dans plusieurs cas de trois mois : ne pas laisser passer l'échéance, et conserver la preuve des envois.</li>
                  <li><strong>Ne pas confondre les dispositifs.</strong> La protection universelle maladie couvre la prise en charge des frais de santé ; les autres prestations (famille, vieillesse, minima) suivent leurs propres calendriers d'alignement prévus par la loi de refondation.</li>
                </ul>
              </section>

              <section id="audeladom">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Pourquoi ce sujet dépasse Mayotte
                </h2>
                <p style={{marginBottom: '1rem'}}>Ce texte intéresse d'abord les personnes et structures présentes à Mayotte. Mais il a une portée plus large : il illustre la méthode de <strong>convergence progressive</strong> des droits sociaux outre-mer, faite de textes d'application successifs, chacun avec ses conditions et ses adaptations. Pour les têtes de réseau associatives, les fédérations et les collectivités partenaires, suivre ces textes est le seul moyen d'accompagner correctement les publics concernés, y compris depuis l'Hexagone lorsque des familles circulent entre les territoires.</p>
                <p style={{marginBottom: '1rem'}}>Il rappelle enfin une constante du droit de la protection sociale : un droit proclamé ne devient effectif que lorsque ses <strong>modalités pratiques</strong>, résidence, justificatifs, délais, organisme compétent, sont maîtrisées par les intéressés et par ceux qui les accompagnent.</p>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret du 30 juin 2026 marque l'entrée en vigueur, au 1er juillet 2026, du cadre réglementaire de la <strong>protection universelle maladie à Mayotte</strong>. Pour les usagers, la clé est simple : les droits existent dans un cadre désormais précisé, mais leur mise en œuvre suppose une attention concrète aux <strong>critères de résidence</strong>, aux <strong>justificatifs</strong> et aux <strong>échanges avec la caisse compétente</strong>. Pour les accompagnants, c'est le moment de mettre à jour les fiches pratiques et les procédures internes.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur le décret n°&nbsp;2026-581 du 30 juin 2026 relatif à la protection universelle maladie à Mayotte, publié au <a href="https://www.legifrance.gouv.fr/jorf/jo/2026/07/01/0152" style={{color: '#1a4fba', fontWeight: 600}}>Journal officiel du 1er juillet 2026</a>, pris pour l'application de l'article 24 de la loi n°&nbsp;2025-797 du 11 août 2025 de programmation pour la refondation de Mayotte.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Depuis quand le décret s'applique-t-il ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Depuis le 1er juillet 2026. Le décret n° 2026-581 du 30 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et son entrée en vigueur est fixée à cette même date.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À qui s'adresse ce décret ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Aux assurés mahorais et à la caisse de sécurité sociale de Mayotte, qui gère localement les prestations. Il intéresse aussi, en pratique, les professionnels de santé, les travailleurs sociaux, les associations d'accompagnement et les collectivités qui aident les usagers dans leurs démarches.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la condition de résidence pour bénéficier de la protection universelle maladie à Mayotte ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Une personne est réputée avoir son lieu de séjour principal à Mayotte si, sous réserve de ne pas avoir transféré sa résidence hors du territoire, elle y séjourne personnellement et effectivement pendant plus de six mois au cours de l'année civile de versement des prestations.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels délais s'appliquent quand la caisse demande des justificatifs ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret adapte plusieurs procédures de contrôle et de demande de pièces : dans plusieurs cas, la référence à un délai d'un mois est remplacée par un délai de trois mois, l'organisme compétent étant la caisse de sécurité sociale de Mayotte.</p>
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
                Poser ma question &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/camsp-cmpp-decret-26-juin-2026-associations-medico-social" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Associations du médico-social : ce qu'il faut retenir du décret sur les CAMSP et les CMPP &rarr;
              </a>
              <a href="/blog/martinique-loi-30-juin-2026-energie-eau-assainissement-habilitation" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Martinique : ce que permet la loi du 30 juin 2026 sur l'énergie, l'eau et l'assainissement &rarr;
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
                <a href="/blog?tag=Protection%20sociale" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Protection sociale</a>
                <a href="/blog?tag=Outre-mer" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Outre-mer</a>
                <a href="/blog?tag=Acc%C3%A8s%20aux%20droits" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Accès aux droits</a>
                <a href="/blog?tag=Sant%C3%A9" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Santé</a>
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
