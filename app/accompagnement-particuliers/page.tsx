'use client'

// app/accompagnement-particuliers/page.tsx
// Cabinet Cholez-Pagotto - Accompagnement Particuliers
// Règles : loi 1971, singulier, zéro tiret long, cholez-pagotto.fr

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  User, BookOpen, Shield, FileText, CheckCircle, ArrowRight,
  ChevronDown, ChevronRight, Euro, Clock, Star, AlertCircle,
  Info, Briefcase, Heart, Home, Scale, Car
} from 'lucide-react'

// ─── SCHEMA.ORG ───
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/accompagnement-particuliers#service",
      "name": "Accompagnement particuliers - Information juridique et conseil en assurances",
      "description": "Service d'information juridique pour particuliers au sens de la loi n°71-1130 du 31 décembre 1971. Réponse pédagogique sous 24 à 48h ouvrées. Conseil en assurances réglementé ORIAS 26003943. Bibliothèque de documents téléchargeables.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "12 rue d'Olima",
          "addressLocality": "Épinal",
          "postalCode": "88000",
          "addressCountry": "FR"
        }
      },
      "serviceType": "Information juridique et conseil en assurances pour particuliers",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Information sur vos droits",
          "price": "47",
          "priceCurrency": "EUR",
          "description": "Réponse pédagogique à votre question juridique sous 24 à 48h ouvrées"
        },
        {
          "@type": "Offer",
          "name": "Information sur vos droits - Abonnés Optimal",
          "price": "14.90",
          "priceCurrency": "EUR",
          "description": "Question supplémentaire pour les abonnés Optimal"
        },
        {
          "@type": "Offer",
          "name": "Conseil en assurances",
          "price": "90",
          "priceCurrency": "EUR",
          "description": "Forfait conseil 90 €, individualisé, documenté et motivé (art. L.521-4 Code des assurances / DDA). Commission assureur éventuelle séparée, communiquée avant souscription."
        }
      ],
      "url": "https://cholez-pagotto.fr/accompagnement-particuliers"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/accompagnement-particuliers#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le service Information sur vos droits ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le service Information sur vos droits est un service d'information juridique au sens de la loi n°71-1130 du 31 décembre 1971. Vous posez votre question et notre juriste vous apporte une réponse pédagogique sous 24 à 48h ouvrées. Cette réponse vous permet de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Ce service ne constitue pas une consultation juridique personnalisée."
          }
        },
        {
          "@type": "Question",
          "name": "Quels types de questions peuvent être posées ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Notre juriste répond aux questions portant sur le droit du travail (licenciement, rupture conventionnelle, harcèlement, congés), le droit du logement (baux, expulsion, charges, dépôt de garantie), le droit de la consommation (litiges commerciaux, garanties, crédit), le droit de la famille (divorce, succession, autorité parentale), et les assurances. En cas d'urgence judiciaire imminente, vous serez orienté vers l'avocat ou le professionnel du droit compétent."
          }
        },
        {
          "@type": "Question",
          "name": "Comment fonctionne le forfait conseil en assurances ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le cabinet est enregistré à l'ORIAS sous le numéro 26003943. Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA), le conseil est individualisé, documenté et motivé. Un forfait de 90 € est dû avant la remise du rapport, indépendamment de toute souscription. En cas de souscription via le cabinet, une commission versée par l'assureur s'y ajoute, séparée du forfait, communiquée avant souscription (art. L.521-2 Code des assurances)."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que l'abonnement Optimal ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'abonnement Optimal donne accès à la bibliothèque complète de documents téléchargeables au format DOCX, ainsi qu'à un tarif préférentiel pour le service Information sur vos droits (14,90 euros au lieu de 47 euros). L'abonnement Optimal Particulier est disponible en formule mensuelle sans engagement (17,90 euros par mois) ou annuelle (149 euros par an, soit trois mois offerts)."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre information juridique et consultation juridique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'information juridique, au sens de la loi n°71-1130 du 31 décembre 1971, consiste à expliquer les règles de droit générales, à informer sur les droits applicables à un type de situation et à orienter vers le professionnel compétent. La consultation juridique personnalisée, réservée aux avocats et aux autres professionnels du droit habilités par la loi, consiste à analyser en détail une situation précise et à donner un avis juridique engageant la responsabilité de son auteur."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/accompagnement-particuliers#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Accompagnement particuliers", "item": "https://cholez-pagotto.fr/accompagnement-particuliers" }
      ]
    }
  ]
}

// ─── DONNÉES ───
const domainesJuridiques = [
  {
    domaine: "Droit du travail",
    icone: <Briefcase size={22} strokeWidth={1.5} />,
    couleur: "#0f2d6e",
    fond: "#eff6ff",
    exemples: [
      "Licenciement : motif, indemnités, contestation",
      "Rupture conventionnelle : conditions et calcul",
      "Harcèlement moral ou sexuel au travail",
      "Congés payés, RTT, arrêt maladie",
      "Modification du contrat de travail",
      "Heures supplémentaires et repos compensateur"
    ]
  },
  {
    domaine: "Droit du logement",
    icone: <Home size={22} strokeWidth={1.5} />,
    couleur: "#16a34a",
    fond: "#f0fdf4",
    exemples: [
      "Bail d'habitation : droits du locataire et du bailleur",
      "Dépôt de garantie : délais et conditions de restitution",
      "Charges locatives récupérables",
      "Procédure d'expulsion et délais légaux",
      "Travaux et obligations du propriétaire",
      "Préavis de départ selon la zone géographique"
    ]
  },
  {
    domaine: "Droit de la famille",
    icone: <Heart size={22} strokeWidth={1.5} />,
    couleur: "#dc2626",
    fond: "#fef2f2",
    exemples: [
      "Divorce : procédures, pension alimentaire",
      "Autorité parentale et résidence de l'enfant",
      "Succession : héritiers, réserve héréditaire",
      "Donation et transmission du patrimoine",
      "PACS : constitution, droits, dissolution",
      "Adoption et filiation"
    ]
  },
  {
    domaine: "Droit de la consommation",
    icone: <Scale size={22} strokeWidth={1.5} />,
    couleur: "#7c3aed",
    fond: "#f5f3ff",
    exemples: [
      "Garantie légale de conformité (2 ans)",
      "Droit de rétractation (14 jours)",
      "Litige avec un professionnel",
      "Crédit à la consommation et surendettement",
      "Démarchage abusif et pratiques commerciales trompeuses",
      "Médiation de la consommation"
    ]
  },
  {
    domaine: "Assurances",
    icone: <Shield size={22} strokeWidth={1.5} />,
    couleur: "#b45309",
    fond: "#fffbeb",
    exemples: [
      "Assurance habitation : garanties, déclaration de sinistre",
      "Assurance auto : niveaux de couverture, recours",
      "Assurance vie : désignation de bénéficiaire, fiscalité",
      "Prévoyance : arrêt maladie, invalidité, décès",
      "Complémentaire santé : remboursements, résiliation",
      "Responsabilité civile : couverture et limites"
    ]
  },
  {
    domaine: "Droit routier",
    icone: <Car size={22} strokeWidth={1.5} />,
    couleur: "#0891b2",
    fond: "#ecfeff",
    exemples: [
      "Accident de la circulation : droits de la victime",
      "Responsabilité en cas d'accident impliquant un animal",
      "Permis de conduire : suspension, annulation, points",
      "Recours suite à un refus d'indemnisation",
      "Indemnisation corporelle (loi Badinter)",
      "Litige avec l'assureur suite à sinistre"
    ]
  }
]

const offres = [
  {
    titre: "Information sur vos droits",
    tarif: "47 €",
    unite: "par question",
    couleur: "#0f2d6e",
    fond: "#eff6ff",
    border: "#bfdbfe",
    description: "Vous posez une question juridique. Notre juriste vous apporte une réponse pédagogique et documentée sous 24 à 48h ouvrées.",
    inclus: [
      "Identification des règles juridiques applicables",
      "Explication pédagogique de vos droits",
      "Références aux textes et jurisprudences pertinents",
      "Orientation vers le professionnel compétent si nécessaire",
      "Réponse par email sous 24 à 48h ouvrées"
    ],
    cta: "/information-sur-vos-droits",
    ctaLabel: "Poser ma question"
  },
  {
    titre: "Abonnement Optimal",
    tarif: "17,90 €",
    unite: "/mois ou 149 €/an",
    couleur: "#d4a017",
    fond: "#fffbeb",
    border: "#fde68a",
    badge: "Meilleure valeur",
    description: "Accès complet à la bibliothèque de documents et tarif préférentiel pour le service Information sur vos droits.",
    inclus: [
      "Accès à la bibliothèque complète de documents DOCX",
      "Documents téléchargeables et personnalisables",
      "Question supplémentaire au tarif de 14,90 € (au lieu de 47 €)",
      "Mises à jour des documents incluses",
      "Accès à l'espace client"
    ],
    cta: "/catalogue",
    ctaLabel: "Voir l'abonnement"
  },
  {
    titre: "Conseil en assurances",
    tarif: "90 €",
    unite: "forfait conseil",
    couleur: "#16a34a",
    fond: "#f0fdf4",
    border: "#bbf7d0",
    badge: "Conseil documenté ACPR",
    description: "Forfait conseil individualisé, documenté et motivé, conforme à l'article L.521-4 du Code des assurances (devoir de conseil DDA). Dû avant remise du rapport, indépendamment de toute souscription. Commission assureur éventuelle séparée, communiquée avant souscription conformément à l'article L.521-2 Code des assurances et à la recommandation ACPR 2024-R-01.",
    inclus: [
      "Formulaire de recueil en ligne (horodaté, archivé dans votre espace client)",
      "Audit de vos contrats existants",
      "Comparaison des offres du marché adaptées à votre situation",
      "Rapport de conseil écrit et motivé",
      "Archivage complet dans votre espace client (formulaire + facture + rapport)"
    ],
    cta: "/conseil-assurances",
    ctaLabel: "Demander un conseil"
  }
]

const faqs = [
  {
    question: "Qu'est-ce que le service Information sur vos droits ?",
    reponse: "Le service Information sur vos droits est un service d'information juridique au sens de la loi n°71-1130 du 31 décembre 1971. Vous posez votre question et notre juriste vous apporte une réponse pédagogique sous 24 à 48h ouvrées. Cette réponse vous permet de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Ce service ne constitue pas une consultation juridique personnalisée."
  },
  {
    question: "Quels types de questions peuvent être posées ?",
    reponse: "Notre juriste répond aux questions portant sur le droit du travail (licenciement, rupture conventionnelle, harcèlement, congés), le droit du logement (baux, expulsion, charges, dépôt de garantie), le droit de la consommation (litiges, garanties), le droit de la famille (divorce, succession, autorité parentale), le droit routier et les assurances. En cas d'urgence judiciaire imminente, vous serez orienté vers l'avocat ou le professionnel du droit compétent."
  },
  {
    question: "Quelle est la différence entre information juridique et consultation juridique ?",
    reponse: "L'information juridique, au sens de la loi n°71-1130 du 31 décembre 1971, consiste à expliquer les règles de droit générales, à informer sur les droits applicables à un type de situation et à orienter vers le professionnel compétent. La consultation juridique personnalisée, réservée aux professionnels du droit habilités par la loi, consiste à analyser en détail une situation précise et à donner un avis juridique engageant la responsabilité de son auteur. Le cabinet propose de l'information juridique, et oriente vers un avocat si votre situation nécessite une consultation personnalisée."
  },
  {
    question: "Comment fonctionne le forfait conseil en assurances ?",
    reponse: "Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA), notre conseil est individualisé, documenté et motivé. Un forfait de 90 € est dû avant la remise du rapport de conseil, indépendamment de toute souscription. En cas de souscription d'un contrat via le cabinet, celui-ci perçoit en complément une commission versée par l'assureur — séparée du forfait, dont le montant vous est communiqué avant toute souscription conformément à l'article L.521-2 du Code des assurances et à la recommandation ACPR 2024-R-01. Le cabinet est enregistré à l'ORIAS sous le numéro 26003943, catégorie IAS Niveau 1, sous contrôle de l'ACPR."
  },
  {
    question: "Qu'est-ce que l'abonnement Optimal ?",
    reponse: "L'abonnement Optimal donne accès à la bibliothèque complète de documents téléchargeables au format DOCX, ainsi qu'à un tarif préférentiel pour le service Information sur vos droits (14,90 euros par question au lieu de 47 euros). L'abonnement Optimal Particulier est disponible en formule mensuelle sans engagement (17,90 euros par mois) ou annuelle (149 euros par an, soit trois mois offerts)."
  },
  {
    question: "Les documents de la bibliothèque sont-ils conformes à la loi française ?",
    reponse: "Les documents mis à disposition dans la bibliothèque sont préparés par notre juriste sur la base du droit français en vigueur. Ils sont fournis au format DOCX, téléchargeables et personnalisables. Ils constituent des modèles de référence que vous adaptez à votre situation personnelle. En cas de doute sur l'adaptation du document à votre cas précis, le service Information sur vos droits peut vous apporter un éclairage complémentaire."
  }
]

// ─── COMPOSANT ───
export default function AccompagnementParticuliersPage() {
  const [faqOuverte, setFaqOuverte] = useState<number | null>(null)
  const [domaineActif, setDomaineActif] = useState<number>(0)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      {/* Breadcrumb */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0.6rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 13, color: '#6b7280' }}>
            <a href="/" style={{ color: '#1a4fba', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={14} />
            <a href="/services" style={{ color: '#1a4fba', textDecoration: 'none' }}>Services</a>
            <ChevronRight size={14} />
            <span style={{ color: '#374151', fontWeight: 600 }}>Accompagnement particuliers</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Particuliers
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Comprenez vos droits,<br />
              prenez vos décisions en toute connaissance de cause
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', maxWidth: 620, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Information juridique sur vos droits (47 euros), forfait conseil en assurances 90 € (art. L.521-4 Code des assurances),
              bibliothèque de documents téléchargeables. Notre juriste répond sous 24 à 48h ouvrées.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="/information-sur-vos-droits" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#d4a017', color: 'white', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem'
              }}>
                Poser ma question · 47 € <ArrowRight size={18} />
              </a>
              <a href="/catalogue" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                Voir la bibliothèque
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "6", label: "Domaines juridiques couverts" },
                { valeur: "47 €", label: "Information sur vos droits" },
                { valeur: "24-48h", label: "Délai indicatif de réponse" },
                { valeur: "ORIAS", label: "26003943 - IAS Niveau 1" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fbbf24' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mention loi 1971 */}
        <div style={{ background: '#eff6ff', borderBottom: '1px solid #bfdbfe', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971
              et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra
              de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation
              et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté
              vers le professionnel du droit compétent.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* OFFRES */}
          <section id="offres" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Nos services pour les particuliers
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Trois façons de bénéficier de l'expertise du cabinet, selon vos besoins.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {offres.map((offre, i) => (
                <div key={i} style={{
                  background: 'white', border: `2px solid ${offre.border}`,
                  borderRadius: 12, padding: '1.5rem', position: 'relative', display: 'flex', flexDirection: 'column'
                }}>
                  {offre.badge && (
                    <div style={{
                      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                      background: offre.couleur, color: 'white', fontSize: 11,
                      fontWeight: 700, padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap'
                    }}>
                      {offre.badge}
                    </div>
                  )}
                  <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.5rem' }}>{offre.titre}</h3>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                      <span style={{ fontSize: '2rem', fontWeight: 800, color: offre.couleur }}>{offre.tarif}</span>
                      <span style={{ fontSize: 13, color: '#6b7280' }}>{offre.unite}</span>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, marginBottom: '1rem' }}>{offre.description}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                    {offre.inclus.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                        <CheckCircle size={14} strokeWidth={2} style={{ color: offre.couleur, marginTop: 2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={offre.cta} style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    background: offre.couleur, color: 'white', textDecoration: 'none',
                    padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem'
                  }}>
                    {offre.ctaLabel} <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* DOMAINES JURIDIQUES */}
          <section id="domaines" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Domaines juridiques couverts
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Notre juriste répond aux questions sur les principales branches du droit qui concernent
              les particuliers dans leur vie quotidienne. En vigueur au 1er janvier 2026.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {domainesJuridiques.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDomaineActif(i)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '7px 14px', borderRadius: 20,
                    border: domaineActif === i ? 'none' : '1px solid #e5e7eb',
                    background: domaineActif === i ? domainesJuridiques[i].couleur : 'white',
                    color: domaineActif === i ? 'white' : '#374151',
                    fontSize: 12, fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {d.domaine}
                </button>
              ))}
            </div>

            <div style={{
              background: domainesJuridiques[domaineActif].fond,
              border: `1px solid ${domainesJuridiques[domaineActif].couleur}30`,
              borderLeft: `4px solid ${domainesJuridiques[domaineActif].couleur}`,
              borderRadius: 12, padding: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ color: domainesJuridiques[domaineActif].couleur }}>{domainesJuridiques[domaineActif].icone}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>
                  {domainesJuridiques[domaineActif].domaine} : exemples de questions traitées
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.6rem' }}>
                {domainesJuridiques[domaineActif].exemples.map((ex, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 13, color: '#374151' }}>
                    <CheckCircle size={14} strokeWidth={2} style={{ color: domainesJuridiques[domaineActif].couleur, marginTop: 2, flexShrink: 0 }} />
                    {ex}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1rem', fontSize: 12, color: '#6b7280', fontStyle: 'italic' }}>
                Cette liste est indicative et non exhaustive. En cas d'urgence judiciaire imminente (convocation
                au tribunal, délai d'appel imminent), vous serez orienté vers l'avocat compétent.
              </div>
            </div>
          </section>

          {/* COMMENT CA MARCHE */}
          <section id="comment-ca-marche" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Comment fonctionne le service Information sur vos droits ?
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un processus simple, transparent et sécurisé.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  num: "1",
                  titre: "Vous posez votre question",
                  texte: "Via le formulaire dédié, vous décrivez votre situation et formulez votre question. Plus votre description est précise, plus la réponse sera pertinente.",
                  couleur: "#0f2d6e"
                },
                {
                  num: "2",
                  titre: "Vous réglez en ligne",
                  texte: "Le règlement de 47 euros s'effectue en ligne de manière sécurisée. Vous recevez immédiatement un reçu. Pour les abonnés Optimal, le tarif est de 14,90 euros par question supplémentaire.",
                  couleur: "#1a4fba"
                },
                {
                  num: "3",
                  titre: "Notre juriste analyse votre question",
                  texte: "Notre juriste identifie les règles juridiques applicables, consulte les textes de loi et la jurisprudence pertinente, et prépare une réponse pédagogique documentée.",
                  couleur: "#7c3aed"
                },
                {
                  num: "4",
                  titre: "Vous recevez votre réponse sous 24 à 48h ouvrées",
                  texte: "La réponse vous est transmise par email. Elle identifie les règles applicables, cite les textes de référence et, le cas échéant, vous oriente vers le professionnel du droit compétent.",
                  couleur: "#16a34a"
                }
              ].map((etape, i) => (
                <div key={i} style={{
                  background: 'white', border: '1px solid #e5e7eb', borderRadius: 12,
                  padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '1rem'
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: etape.couleur, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: '1.1rem', flexShrink: 0
                  }}>
                    {etape.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>{etape.titre}</h3>
                    <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{etape.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ASSURANCES (ORIAS) */}
          <section id="assurances" style={{
            background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 12,
            padding: '1.5rem', marginBottom: '3.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Shield size={22} strokeWidth={1.5} style={{ color: '#b45309' }} />
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#92400e', margin: 0 }}>
                Conseil en assurances : un service réglementé
              </h2>
            </div>
            <p style={{ fontSize: 13, color: '#78350f', lineHeight: 1.7, marginBottom: '1rem' }}>
              François CHOLEZ exerce le conseil en assurances dans un cadre réglementé : intermédiaire en assurances
              immatriculé à l'ORIAS sous le numéro <strong>26003943</strong>, sous contrôle de l'Autorité de Contrôle
              Prudentiel et de Résolution (<strong>ACPR</strong>). Cette immatriculation garantit le respect d'obligations
              professionnelles strictes : formation continue, capacité professionnelle vérifiée, responsabilité civile
              professionnelle et garantie financière. Membre de l'association d'autorégulation <strong>ENDYA</strong>.
              Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA) et à la recommandation
              ACPR 2024-R-01, le conseil est individualisé, documenté et motivé.
              Le forfait de <strong>90 €</strong> est dû avant remise du rapport, indépendamment de toute souscription.
              En cas de souscription via le cabinet, une commission versée par l'assureur s'y ajoute — séparée du forfait,
              communiquée avant souscription conformément à l'article L.521-2 du Code des assurances.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
              {["RC Pro", "Multirisques habitation", "Assurance vie", "Prévoyance", "Complémentaire santé", "Assurance auto"].map((produit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 13, color: '#78350f' }}>
                  <CheckCircle size={14} strokeWidth={2} style={{ color: '#b45309' }} />
                  {produit}
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#92400e', margin: 0, lineHeight: 1.6 }}>
              Forfait conseil : <strong>90 €</strong>, dû avant remise du rapport, indépendamment de toute souscription. En cas de souscription, commission assureur séparée versée par l'assureur,
              dont vous êtes informé avant toute souscription, conformément à l'article L.521-2
              du Code des assurances et à la Directive sur la Distribution d'Assurances (DDA).
              Enregistrement vérifiable sur{' '}
              <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#b45309' }}>www.orias.fr</a>.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Questions fréquentes
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Les réponses aux questions les plus courantes sur nos services pour particuliers.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setFaqOuverte(faqOuverte === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f2d6e', lineHeight: 1.4 }}>{faq.question}</span>
                    <ChevronDown size={18} strokeWidth={2} style={{ color: '#1a4fba', flexShrink: 0, transform: faqOuverte === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>
                  {faqOuverte === i && (
                    <div style={{ padding: '0 1.5rem 1.1rem', fontSize: 13, color: '#374151', lineHeight: 1.7, borderTop: '1px solid #f3f4f6' }}>
                      <div style={{ paddingTop: '1rem' }}>{faq.reponse}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* AUTEUR */}
          <section style={{
            background: 'white', border: '1px solid #e5e7eb', borderRadius: 12,
            padding: '1.5rem', marginBottom: '3.5rem',
            display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap'
          }}>
            <img
              src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=80"
              alt="François Cholez, juriste formaliste"
              style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #eff6ff', flexShrink: 0 }}
            />
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['Juriste', 'Formaliste CRFF', 'ORIAS 26003943', 'Sous contrôle ACPR'].map((badge, i) => (
                  <span key={i} style={{ background: '#eff6ff', color: '#1a4fba', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{badge}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>François CHOLEZ</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 0.4rem', lineHeight: 1.6 }}>
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Intermédiaire en assurances immatriculé à l'ORIAS sous le numéro 26003943, sous contrôle de l'ACPR. Adhérent ENDYA.
              </p>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Chercheur associé, contributeur aux ouvrages
                {' '}<em>«&nbsp;L'éducation, ça se partage&nbsp;?&nbsp;»</em> (L'Harmattan, 2021)
                {' '}et <em>«&nbsp;Agir en situation de discrédit&nbsp;»</em> (Le Cavalier Bleu, 2026).
              </p>
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Vous avez une question juridique ?
            </h2>
            <p style={{ fontSize: 13, color: '#374151', marginBottom: '1.5rem', maxWidth: 500, margin: '0.5rem auto 1.5rem' }}>
              47 euros pour une réponse pédagogique et documentée sous 24 à 48h ouvrées.
              Abonnés Optimal : 14,90 euros par question supplémentaire. Conseil en assurances : forfait 90 €.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/information-sur-vos-droits" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#0f2d6e', color: 'white', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem'
              }}>
                Poser ma question <ArrowRight size={18} />
              </a>
              <a href="/catalogue" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent', color: '#0f2d6e', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem',
                border: '1px solid #0f2d6e'
              }}>
                Voir l'abonnement Optimal
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}