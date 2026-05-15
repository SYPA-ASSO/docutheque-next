'use client'

// app/accompagnement-associations/page.tsx
// Cabinet Cholez-Pagotto - Accompagnement Associations & ESS
// Règles : loi 1971, singulier, zéro tiret long, cholez-pagotto.fr

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Heart, CheckCircle, Users, FileText, Shield, Award,
  ArrowRight, ChevronDown, ChevronRight, BookOpen,
  Building2, Globe, Lock, AlertCircle, Info, Star
} from 'lucide-react'

// ─── SCHEMA.ORG ───
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/accompagnement-associations#service",
      "name": "Accompagnement associations et structures ESS",
      "alternateName": "Formalités et information juridique pour associations loi 1901",
      "description": "Accompagnement des associations loi 1901, fondations, coopératives, mutuelles et structures de l'économie sociale et solidaire (ESS). Préparation et assistance à la rédaction des statuts, formalités de déclaration, conformité RGPD associative.",
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
      "serviceType": "Formalités et information juridique pour associations et structures ESS",
      "areaServed": {
        "@type": "Country",
        "name": "France"
      },
      "offers": {
        "@type": "Offer",
        "description": "Sur devis selon la complexité du projet et les prestations requises",
        "availability": "https://schema.org/InStock"
      },
      "url": "https://cholez-pagotto.fr/accompagnement-associations"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/accompagnement-associations#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment créer une association loi 1901 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La création d'une association loi 1901 nécessite a minima deux membres fondateurs, la rédaction des statuts (nom, objet, siège, règles de fonctionnement), la tenue d'une assemblée constitutive et la déclaration en préfecture (ou sous-préfecture). La publication au Journal Officiel des Associations (JOAFE) est obligatoire pour l'acquisition de la personnalité morale. Le Cabinet Cholez-Pagotto accompagne l'ensemble de ces étapes."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre une association et une fondation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'association loi 1901 regroupe des personnes autour d'un projet commun, sans but lucratif. La fondation est constituée par l'affectation irrévocable de biens, droits ou ressources à la réalisation d'une oeuvre d'intérêt général. La fondation nécessite une dotation importante et une reconnaissance d'utilité publique ou un statut particulier (fondation abritée, fondation d'entreprise). Ces deux structures obéissent à des règles juridiques distinctes."
          }
        },
        {
          "@type": "Question",
          "name": "Le RGPD s'applique-t-il aux associations ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le Règlement Général sur la Protection des Données (RGPD) s'applique à toute organisation qui traite des données personnelles de personnes situées dans l'Union Européenne, y compris les associations. Les associations traitent généralement des données de leurs adhérents, bénévoles, donateurs et bénéficiaires. Elles sont soumises aux obligations du RGPD : registre des traitements, information des personnes, sécurité des données, respect des droits des personnes concernées."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que l'économie sociale et solidaire (ESS) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'économie sociale et solidaire (ESS) est un mode d'entreprendre fondé sur des principes de gouvernance démocratique, de lucrativité limitée et d'utilité sociale ou environnementale. Les structures de l'ESS comprennent les associations, les coopératives (SCOP, SCIC), les mutuelles et les fondations. La loi n°2014-856 du 31 juillet 2014 relative à l'ESS encadre ce secteur et permet également à certaines sociétés commerciales d'obtenir la qualité d'entreprise de l'ESS."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on modifier les statuts d'une association après sa création ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Les statuts d'une association peuvent être modifiés par décision de l'assemblée générale (selon les règles prévues dans les statuts eux-mêmes). Toute modification doit faire l'objet d'une déclaration en préfecture dans un délai de trois mois (article 5 de la loi du 1er juillet 1901). Le Cabinet Cholez-Pagotto accompagne la préparation des actes de modification et leur déclaration."
          }
        },
        {
          "@type": "Question",
          "name": "Une association peut-elle exercer une activité économique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, sous conditions. Une association loi 1901 peut exercer des activités économiques à condition que celles-ci restent au service de son objet non lucratif et que les bénéfices ne soient pas distribués aux membres. En cas d'activités économiques significatives, une sectorisation ou une fiscalisation partielle peut s'appliquer. Notre juriste vous fournit une information sur les règles fiscales et juridiques applicables à votre situation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/accompagnement-associations#breadcrumb",
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
          "name": "Accompagnement associations",
          "item": "https://cholez-pagotto.fr/accompagnement-associations"
        }
      ]
    }
  ]
}

// ─── DONNÉES ───
const structuresAccompagnees = [
  {
    titre: "Associations loi 1901",
    description: "Création, modification statutaire, dissolution, changement de siège, déclaration en préfecture, publication JOAFE.",
    icone: <Heart size={22} strokeWidth={1.5} />,
    couleur: "#dc2626",
    fond: "#fef2f2"
  },
  {
    titre: "Associations reconnues d'utilité publique",
    description: "Accompagnement des démarches de demande de reconnaissance d'utilité publique (RUP) et de renouvellement.",
    icone: <Award size={22} strokeWidth={1.5} />,
    couleur: "#b45309",
    fond: "#fffbeb"
  },
  {
    titre: "Coopératives (SCOP, SCIC)",
    description: "Sociétés Coopératives et Participatives (SCOP) et Sociétés Coopératives d'Intérêt Collectif (SCIC) : statuts, formalités d'immatriculation.",
    icone: <Users size={22} strokeWidth={1.5} />,
    couleur: "#16a34a",
    fond: "#f0fdf4"
  },
  {
    titre: "Mutuelles",
    description: "Accompagnement des mutuelles relevant du Code de la mutualité dans leurs formalités statutaires et déclaratives.",
    icone: <Shield size={22} strokeWidth={1.5} />,
    couleur: "#0891b2",
    fond: "#ecfeff"
  },
  {
    titre: "Fondations",
    description: "Fondations abritées, fondations d'entreprise : préparation des actes constitutifs et accompagnement des démarches de reconnaissance.",
    icone: <Building2 size={22} strokeWidth={1.5} />,
    couleur: "#7c3aed",
    fond: "#f5f3ff"
  },
  {
    titre: "Structures ESS agréées",
    description: "Structures souhaitant obtenir l'agrément Entreprise Solidaire d'Utilité Sociale (ESUS) ou l'agrément ESUS Jeunesse et Éducation Populaire.",
    icone: <Globe size={22} strokeWidth={1.5} />,
    couleur: "#0f2d6e",
    fond: "#eff6ff"
  }
]

const prestations = [
  {
    categorie: "Création",
    items: [
      "Préparation et assistance à la rédaction des statuts et actes constitutifs",
      "Rédaction du procès-verbal de l'assemblée constitutive",
      "Préparation du dossier de déclaration en préfecture",
      "Suivi de la publication au Journal Officiel des Associations (JOAFE)",
      "Information sur le régime juridique et fiscal applicable"
    ]
  },
  {
    categorie: "Vie de l'association",
    items: [
      "Modification des statuts (objet, siège, dénomination, gouvernance)",
      "Changement de dirigeants et déclaration en préfecture",
      "Rédaction des procès-verbaux d'assemblée générale",
      "Préparation des actes de dissolution",
      "Transfert de siège social"
    ]
  },
  {
    categorie: "Conformité RGPD",
    items: [
      "Diagnostic documentaire et juridique de la conformité RGPD",
      "Mise en place du registre des activités de traitement",
      "Rédaction de la politique de confidentialité",
      "Rédaction des mentions d'information pour les formulaires",
      "Formation des équipes aux obligations RGPD (voir service Formations)"
    ]
  },
  {
    categorie: "DPO externalisé",
    items: [
      "Mission de Délégué à la Protection des Données (DPO) externalisé",
      "Engagement annuel - sur devis selon la taille et les activités",
      "Interlocuteur CNIL désigné",
      "Veille réglementaire et mise à jour documentaire"
    ]
  }
]

const rgpdPoints = [
  {
    titre: "Données des adhérents",
    texte: "Nom, prénom, adresse, date de naissance, coordonnées bancaires pour les cotisations. Base légale : exécution du contrat d'adhésion (art. 6.1.b RGPD).",
    icone: <Users size={18} strokeWidth={1.5} />
  },
  {
    titre: "Données des bénévoles",
    texte: "Identité, disponibilités, habilitations, formations. Base légale : intérêt légitime ou contrat de bénévolat selon la structure.",
    icone: <Heart size={18} strokeWidth={1.5} />
  },
  {
    titre: "Données des donateurs",
    texte: "Si l'association peut émettre des reçus fiscaux (article 200 CGI), les données des donateurs sont traitées à des fins fiscales. Conservation : 6 ans minimum.",
    icone: <FileText size={18} strokeWidth={1.5} />
  },
  {
    titre: "Données sensibles",
    texte: "Certaines associations traitent des données de santé, des données relatives à des convictions religieuses ou politiques. Ces données nécessitent une protection renforcée et une base légale explicite.",
    icone: <Lock size={18} strokeWidth={1.5} />
  }
]

const faqs = [
  {
    question: "Comment créer une association loi 1901 ?",
    reponse: "La création d'une association loi 1901 nécessite a minima deux membres fondateurs, la rédaction des statuts (nom, objet, siège, règles de fonctionnement), la tenue d'une assemblée constitutive et la déclaration en préfecture (ou sous-préfecture). La publication au Journal Officiel des Associations (JOAFE) est obligatoire pour l'acquisition de la personnalité morale et la capacité à ester en justice, recevoir des dons, ouvrir un compte bancaire. Le Cabinet Cholez-Pagotto prépare et accompagne la rédaction de vos statuts et l'ensemble des démarches déclaratives."
  },
  {
    question: "Quelle est la différence entre une association et une fondation ?",
    reponse: "L'association loi 1901 regroupe des personnes autour d'un projet commun, sans but lucratif. La fondation est constituée par l'affectation irrévocable de biens, droits ou ressources à la réalisation d'une oeuvre d'intérêt général. La fondation nécessite une dotation importante et une reconnaissance d'utilité publique ou un statut particulier. Notre juriste vous informe sur les caractéristiques de chaque structure pour vous permettre de choisir la forme adaptée à votre projet."
  },
  {
    question: "Le RGPD s'applique-t-il aux associations ?",
    reponse: "Oui. Le RGPD s'applique à toute organisation qui traite des données personnelles, y compris les associations. Les associations traitent généralement des données de leurs adhérents, bénévoles, donateurs et bénéficiaires. Elles sont soumises aux mêmes obligations que les entreprises : registre des traitements, information des personnes, respect des droits d'accès et de rectification, sécurité des données. Notre juriste propose un diagnostic documentaire et juridique de votre conformité RGPD."
  },
  {
    question: "Qu'est-ce que l'ESS et quelles structures en relèvent ?",
    reponse: "L'économie sociale et solidaire (ESS) est un mode d'entreprendre fondé sur des principes de gouvernance démocratique, de lucrativité limitée et d'utilité sociale ou environnementale. Les structures de l'ESS comprennent les associations, les coopératives (SCOP, SCIC), les mutuelles et les fondations. La loi n°2014-856 du 31 juillet 2014 encadre ce secteur. Notre juriste accompagne les structures ESS dans leurs formalités et leur conformité."
  },
  {
    question: "Une association peut-elle modifier ses statuts après sa création ?",
    reponse: "Oui. Les statuts peuvent être modifiés par décision de l'assemblée générale, selon les règles prévues dans les statuts eux-mêmes (quorum, majorité requise). Toute modification substantielle (dénomination, objet, siège, dissolution) doit faire l'objet d'une déclaration en préfecture dans un délai de trois mois (article 5 de la loi du 1er juillet 1901). Le Cabinet Cholez-Pagotto prépare les actes de modification et accompagne leur déclaration."
  },
  {
    question: "Une association peut-elle exercer une activité économique ?",
    reponse: "Oui, sous conditions. Une association loi 1901 peut exercer des activités économiques à condition que celles-ci restent au service de son objet non lucratif et que les bénéfices ne soient pas distribués aux membres. En cas d'activités économiques significatives, la 'sectorisation' ou une fiscalisation partielle (TVA, IS, CET) peut s'appliquer selon les règles établies par la doctrine fiscale (instruction du 18 décembre 2006). Notre juriste vous fournit une information sur les règles applicables à votre situation."
  },
  {
    question: "L'accompagnement du cabinet constitue-t-il une consultation juridique ?",
    reponse: "Non. Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent."
  }
]

// ─── COMPOSANT ───
export default function AccompagnementAssociationsPage() {
  const [faqOuverte, setFaqOuverte] = useState<number | null>(null)
  const [prestationActive, setPrestationActive] = useState<number>(0)

  return (
    <>
      {/* Schema.org */}
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
            <span style={{ color: '#374151', fontWeight: 600 }}>Accompagnement associations</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* ─── HERO ─── */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1e40af 60%, #16a34a 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{
                display: 'inline-block',
                background: '#16a34a',
                color: 'white',
                fontSize: 12,
                fontWeight: 700,
                padding: '5px 18px',
                borderRadius: 20,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginRight: '0.5rem'
              }}>
                Associations
              </span>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: 12,
                fontWeight: 700,
                padding: '5px 18px',
                borderRadius: 20,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                ESS
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Accompagnement des associations,<br />
              fondations et structures ESS
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', maxWidth: 620, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Préparation et assistance à la rédaction des statuts, formalités déclaratives,
              conformité RGPD, DPO externalisé. Notre juriste accompagne les associations
              loi 1901, coopératives, mutuelles et fondations depuis plus de 10 ans.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#16a34a', color: 'white', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem'
              }}>
                Contacter le cabinet <ArrowRight size={18} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                <Star size={16} strokeWidth={1.5} />
                <span>10 ans d'expérience terrain dans le secteur associatif</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "6", label: "Types de structures accompagnées" },
                { valeur: "10+", label: "Ans d'expérience ESS" },
                { valeur: "4", label: "Domaines de prestations" },
                { valeur: "Sur devis", label: "Tarification transparente" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#86efac' }}>{s.valeur}</div>
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

          {/* ─── STRUCTURES ACCOMPAGNEES ─── */}
          <section id="structures" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Structures accompagnées
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Le Cabinet Cholez-Pagotto accompagne l'ensemble des structures du secteur non lucratif
              et de l'économie sociale et solidaire.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              {structuresAccompagnees.map((structure, i) => (
                <div key={i} style={{
                  background: structure.fond,
                  border: `1px solid ${structure.couleur}30`,
                  borderRadius: 12,
                  padding: '1.5rem',
                  borderLeft: `4px solid ${structure.couleur}`
                }}>
                  <div style={{ color: structure.couleur, marginBottom: '0.75rem' }}>{structure.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
                    {structure.titre}
                  </h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                    {structure.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ─── PRESTATIONS ─── */}
          <section id="prestations" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Prestations proposées
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un accompagnement global, de la création à la conformité réglementaire.
            </p>

            {/* Onglets */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {prestations.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setPrestationActive(i)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 20,
                    border: prestationActive === i ? 'none' : '1px solid #e5e7eb',
                    background: prestationActive === i ? '#0f2d6e' : 'white',
                    color: prestationActive === i ? 'white' : '#374151',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {p.categorie}
                </button>
              ))}
            </div>

            <div style={{
              background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1rem' }}>
                {prestations[prestationActive].categorie}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {prestations[prestationActive].items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: 13, color: '#374151' }}>
                    <CheckCircle size={16} strokeWidth={2} style={{ color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {prestationActive >= 2 && (
                <div style={{
                  marginTop: '1rem', padding: '0.75rem', background: '#eff6ff',
                  borderRadius: 8, fontSize: 12, color: '#1e40af',
                  display: 'flex', alignItems: 'flex-start', gap: '0.5rem'
                }}>
                  <Info size={14} style={{ marginTop: 1, flexShrink: 0 }} />
                  <span>Tarif sur devis selon la taille de la structure, le volume des traitements et les prestations requises. Contactez le cabinet pour un diagnostic préalable.</span>
                </div>
              )}
            </div>
          </section>

          {/* ─── RGPD ASSOCIATIF ─── */}
          <section id="rgpd-associations" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              RGPD et associations : ce que la loi impose
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Le Règlement Général sur la Protection des Données s'applique à toutes les associations,
              quelle que soit leur taille ou leur secteur d'activité. En vigueur depuis le 25 mai 2018,
              applicable en France par la loi n°2018-493 du 20 juin 2018.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
              {rgpdPoints.map((point, i) => (
                <div key={i} style={{
                  background: 'white', border: '1px solid #e5e7eb', borderRadius: 12,
                  padding: '1.25rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ color: '#1a4fba' }}>{point.icone}</div>
                    <h3 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>{point.titre}</h3>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{point.texte}</p>
                </div>
              ))}
            </div>

            <div style={{
              background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 12,
              padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem'
            }}>
              <AlertCircle size={18} strokeWidth={1.5} style={{ color: '#c2410c', flexShrink: 0, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: 13, color: '#7c2d12', fontWeight: 600, margin: '0 0 0.3rem' }}>
                  Sanctions CNIL en cas de non-conformité
                </p>
                <p style={{ fontSize: 13, color: '#9a3412', margin: 0, lineHeight: 1.6 }}>
                  La CNIL peut prononcer des sanctions allant jusqu'à 20 millions d'euros ou 4% du chiffre
                  d'affaires annuel mondial. Ces plafonds s'appliquent également aux associations.
                  Le diagnostic documentaire proposé par le cabinet permet d'identifier les risques
                  et d'engager les actions correctives prioritaires.
                </p>
              </div>
            </div>
          </section>

          {/* ─── CTA ─── */}
          <section style={{
            background: 'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
            borderRadius: 16, padding: '2.5rem 2rem', marginBottom: '3.5rem',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', gap: '1.5rem', color: 'white'
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#86efac', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Sur devis
              </div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                Votre association a un projet ou un besoin de conformité ?
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Décrivez votre structure et vos besoins. Notre juriste vous répond sous 24 à 48h ouvrées.
              </p>
            </div>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'white', color: '#16a34a', textDecoration: 'none',
              padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem',
              whiteSpace: 'nowrap'
            }}>
              Prendre contact <ArrowRight size={18} />
            </a>
          </section>

          {/* ─── FAQ ─── */}
          <section id="faq" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Questions fréquentes sur les associations et l'ESS
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Les réponses aux questions les plus courantes dans le secteur associatif.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{
                  background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden'
                }}>
                  <button
                    onClick={() => setFaqOuverte(faqOuverte === i ? null : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', padding: '1.1rem 1.5rem', background: 'none',
                      border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem'
                    }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f2d6e', lineHeight: 1.4 }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      style={{
                        color: '#1a4fba', flexShrink: 0,
                        transform: faqOuverte === i ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}
                    />
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

          {/* ─── AUTEUR ─── */}
          <section style={{
            background: 'white', border: '1px solid #e5e7eb', borderRadius: 12,
            padding: '1.5rem', marginBottom: '3.5rem',
            display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap'
          }}>
            <img
              src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=80"
              alt="François Cholez, juriste formaliste"
              style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #f0fdf4', flexShrink: 0 }}
            />
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['Juriste', 'Formaliste CRFF', '10 ans dans le secteur ESS'].map((badge, i) => (
                  <span key={i} style={{
                    background: '#f0fdf4', color: '#16a34a', fontSize: 11,
                    fontWeight: 600, padding: '3px 10px', borderRadius: 20
                  }}>{badge}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>François CHOLEZ</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Juriste - Formaliste - Conseil en assurances. Membre du CRFF. Plus de 10 ans d'expérience
                terrain dans le secteur associatif et ESS. Chercheur associé, co-auteur de "L'éducation,
                ça se partage ?" (L'Harmattan, 2021) et contributeur de "Agir en situation de discrédit"
                (Le Cavalier Bleu, 2026).
              </p>
            </div>
          </section>

          {/* ─── CTA FINAL ─── */}
          <section style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#14532d', marginBottom: '0.5rem' }}>
              Un projet associatif ou une question de conformité ?
            </h2>
            <p style={{ fontSize: 13, color: '#374151', marginBottom: '1.5rem', maxWidth: 500, margin: '0.5rem auto 1.5rem' }}>
              Notre juriste accompagne associations, coopératives, mutuelles et fondations
              sur l'ensemble du territoire français. Tarification sur devis.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#16a34a', color: 'white', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem'
              }}>
                Décrire mon projet <ArrowRight size={18} />
              </a>
              <a href="/services" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'transparent', color: '#14532d', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem',
                border: '1px solid #16a34a'
              }}>
                Voir tous les services
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}