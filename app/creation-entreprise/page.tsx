'use client'

// app/creation-entreprise/page.tsx
// Cabinet Cholez-Pagotto - Création d'entreprise
// Formalités offertes hors droits de greffe et frais JAL

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import {
  Building2, CheckCircle, Euro, Clock, FileText,
  ArrowRight, ChevronDown, ChevronRight, Users, Shield,
  Award, Briefcase, Star, AlertCircle, Info
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/creation-entreprise#service",
      "name": "Création d'entreprise accompagnée par un juriste formaliste CRFF",
      "alternateName": "Formalités de création d'entreprise offertes",
      "description": "Préparation et assistance à la rédaction des statuts, préparation du dossier d'immatriculation, dépôt au Guichet Unique. Formalités offertes hors droits de greffe et frais de journal d'annonces légales. SASU, SARL, SAS, EURL, micro-entreprise, SCI.",
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
      "serviceType": "Formalités de création d'entreprise",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "Formalités offertes hors droits de greffe et frais de journal d'annonces légales"
      },
      "url": "https://cholez-pagotto.fr/creation-entreprise"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/creation-entreprise#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce qui est inclus dans la création d'entreprise offerte ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La préparation et l'assistance à la rédaction des statuts, la préparation du dossier complet d'immatriculation, la vérification de conformité et le dépôt du dossier auprès du Guichet Unique sont offerts. Restent à votre charge les droits de greffe (gratuits pour la micro-entreprise, entre 55 et 80 euros pour les sociétés, DBE incluse) et les frais de journal d'annonces légales (entre 130 et 250 euros HT selon la forme juridique et le département)."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle forme juridique choisir pour créer son entreprise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le choix dépend de votre situation personnelle, de votre activité et de vos objectifs. La micro-entreprise est adaptée aux débuts en solo avec peu de charges. La SASU et l'EURL conviennent à l'associé unique souhaitant protéger son patrimoine. La SARL et la SAS sont adaptées aux projets à plusieurs associés. Notre juriste vous fournit une information complète sur les règles applicables à chaque forme, vous permettant de prendre votre décision en connaissance de cause."
          }
        },
        {
          "@type": "Question",
          "name": "Combien coûtent les droits de greffe en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En 2026, l'immatriculation d'une micro-entreprise est gratuite. Pour les sociétés (SASU, SARL, SAS, EURL, SCI), les droits de greffe (immatriculation + déclaration des bénéficiaires effectifs obligatoire) varient entre 55 et 80 euros selon la forme juridique. Les frais de publication au journal d'annonces légales varient entre 130 et 250 euros HT selon la forme et le département."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'un formaliste et quel est son rôle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un formaliste est un professionnel spécialisé dans les procédures administratives et juridiques liées à la vie des entreprises et des associations : création, modification, cessation. Son rôle est de préparer et accompagner la rédaction des actes, de constituer les dossiers et de les déposer auprès des autorités compétentes. Le Cabinet Cholez-Pagotto est membre du Conseil Représentatif des Formalistes de France (CRFF)."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on créer une entreprise depuis toute la France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le Cabinet Cholez-Pagotto accompagne les porteurs de projet sur l'ensemble du territoire français. Les échanges se font à distance (email, téléphone, visioconférence) et le dépôt du dossier s'effectue via le Guichet Unique dématérialisé."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le délai pour créer son entreprise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le délai varie selon la forme juridique et la complétude du dossier. Une micro-entreprise peut être immatriculée en 24 à 48 heures. Pour une société (SASU, SARL, SAS), le délai est généralement de 3 à 10 jours ouvrés à compter de la réception du dossier complet. Notre juriste vous indique un délai indicatif en fonction de votre situation."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/creation-entreprise#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Professionnels", "item": "https://cholez-pagotto.fr/accompagnement-professionnels" },
        { "@type": "ListItem", "position": 3, "name": "Création d'entreprise", "item": "https://cholez-pagotto.fr/creation-entreprise" }
      ]
    }
  ]
}

const formesJuridiques = [
  { nom: "Micro-entreprise", associes: "1", capital: "Aucun minimum", responsabilite: "Illimitée (sur patrimoine perso)", greffe2026: "Gratuit", jal: "Non requis", ideal: "Démarrage en solo, activité complémentaire", couleur: "#16a34a" },
  { nom: "EURL", associes: "1", capital: "À partir de 1\u00a0€", responsabilite: "Limitée aux apports", greffe2026: "55 à 80\u00a0€", jal: "130 à 180\u00a0€ HT", ideal: "Associé unique, protection du patrimoine", couleur: "#1a4fba" },
  { nom: "SASU", associes: "1", capital: "À partir de 1\u00a0€", responsabilite: "Limitée aux apports", greffe2026: "55 à 80\u00a0€", jal: "130 à 180\u00a0€ HT", ideal: "Président salarié, levée de fonds future", couleur: "#0f2d6e" },
  { nom: "SARL", associes: "2 à 100", capital: "À partir de 1\u00a0€", responsabilite: "Limitée aux apports", greffe2026: "55 à 80\u00a0€", jal: "150 à 250\u00a0€ HT", ideal: "Projet à plusieurs, structure familiale", couleur: "#7c3aed" },
  { nom: "SAS", associes: "2 et plus", capital: "À partir de 1\u00a0€", responsabilite: "Limitée aux apports", greffe2026: "55 à 80\u00a0€", jal: "150 à 250\u00a0€ HT", ideal: "Flexibilité statutaire, investisseurs", couleur: "#0891b2" },
  { nom: "SCI", associes: "2 et plus", capital: "À partir de 1\u00a0€", responsabilite: "Illimitée mais subsidiaire", greffe2026: "55 à 80\u00a0€", jal: "130 à 200\u00a0€ HT", ideal: "Gestion et transmission de patrimoine immobilier", couleur: "#b45309" },
]

const etapes = [
  { numero: "01", titre: "Premier contact", description: "Vous décrivez votre projet. Notre juriste prend connaissance de votre situation et vous apporte une première information sur les règles applicables.", icone: <Users size={22} strokeWidth={1.5} /> },
  { numero: "02", titre: "Choix de la forme juridique", description: "Notre juriste vous fournit une information complète et pédagogique sur les formes juridiques adaptées à votre projet. Vous prenez votre décision en toute connaissance de cause.", icone: <FileText size={22} strokeWidth={1.5} /> },
  { numero: "03", titre: "Préparation des statuts", description: "Préparation et assistance à la rédaction des statuts et actes constitutifs, conformément à la forme juridique choisie. Soumis à votre validation avant toute démarche.", icone: <CheckCircle size={22} strokeWidth={1.5} /> },
  { numero: "04", titre: "Constitution du dossier", description: "Préparation du dossier complet d'immatriculation : pièces justificatives, déclarations obligatoires, formulaires Cerfa, attestation de dépôt des fonds si capital social.", icone: <Briefcase size={22} strokeWidth={1.5} /> },
  { numero: "05", titre: "Dépôt au Guichet Unique", description: "Dépôt du dossier complet auprès du Guichet Unique de l'INPI (guichet-entreprises.fr) et suivi jusqu'à l'obtention du Kbis ou de l'extrait SIRENE.", icone: <Building2 size={22} strokeWidth={1.5} /> },
  { numero: "06", titre: "Remise des documents", description: "Vous recevez l'ensemble de vos documents constitutifs : statuts signés, Kbis ou extrait SIRENE, attestations. Notre juriste reste disponible pour les questions post-immatriculation.", icone: <Award size={22} strokeWidth={1.5} /> },
]

const inclus = [
  "Préparation et assistance à la rédaction des statuts et actes constitutifs",
  "Rédaction du procès-verbal de nomination des dirigeants",
  "Préparation du dossier complet d'immatriculation",
  "Vérification de conformité de toutes les pièces",
  "Dépôt du dossier au Guichet Unique dématérialisé (INPI)",
  "Suivi du dossier jusqu'à l'obtention du Kbis ou extrait SIRENE",
  "Information juridique sur la forme choisie (loi 1971)",
  "Relecture et correction du dossier si retour de l'administration",
]

const nonInclus = [
  "Droits de greffe (gratuits micro-entreprise / 55 à 80\u00a0€ pour les sociétés, DBE incluse)",
  "Frais de publication au journal d'annonces légales (130 à 250\u00a0€ HT selon forme et département)",
  "Frais de dépôt du capital social (selon votre banque, certaines sont gratuites)",
  "Honoraires du comptable (non compris mais recommandé dès la création)",
]

const faqs = [
  {
    question: "Qu'est-ce qui est inclus dans la création d'entreprise offerte ?",
    reponse: "La préparation et l'assistance à la rédaction des statuts, la constitution du dossier complet et le dépôt au Guichet Unique sont offerts. Restent à votre charge les droits de greffe (gratuits pour la micro-entreprise, entre 55 et 80\u00a0€ pour les sociétés, DBE incluse) et les frais de publication au journal d'annonces légales (130 à 250\u00a0€ HT selon la forme juridique et le département)."
  },
  {
    question: "Quelle forme juridique choisir pour créer son entreprise ?",
    reponse: "Le choix dépend de votre situation personnelle, de votre activité et de vos objectifs. La micro-entreprise est adaptée aux démarrages en solo avec peu de charges. La SASU et l'EURL conviennent à l'associé unique souhaitant protéger son patrimoine. La SARL et la SAS sont adaptées aux projets à plusieurs associés. Notre juriste vous fournit une information complète pour prendre votre décision en connaissance de cause."
  },
  {
    question: "Combien coûtent les droits de greffe et le journal d'annonces légales en 2026 ?",
    reponse: "En 2026, l'immatriculation d'une micro-entreprise est gratuite. Pour les sociétés (SASU, SARL, SAS, EURL, SCI), les droits de greffe (immatriculation + déclaration des bénéficiaires effectifs obligatoire) varient entre 55 et 80\u00a0€ selon la forme juridique. Les frais de publication au journal d'annonces légales varient entre 130 et 250\u00a0€ HT selon la forme et le département d'immatriculation."
  },
  {
    question: "Qu'est-ce qu'un formaliste CRFF et quel est son rôle ?",
    reponse: "Un formaliste est un professionnel spécialisé dans les procédures administratives liées à la vie des entreprises et des associations : création, modification de statuts, cessation d'activité. Le Cabinet Cholez-Pagotto est membre du Conseil Représentatif des Formalistes de France (CRFF), qui garantit le respect de règles déontologiques et de qualité. Notre juriste intervient en préparation et assistance, dans le cadre de l'article 60 de la loi n°71-1130 du 31 décembre 1971."
  },
  {
    question: "Peut-on créer une entreprise depuis n'importe où en France ?",
    reponse: "Oui. Le Cabinet Cholez-Pagotto accompagne les porteurs de projet sur l'ensemble du territoire français. Les échanges se font à distance (email, téléphone, visioconférence) et le dépôt du dossier s'effectue via le Guichet Unique dématérialisé de l'INPI."
  },
  {
    question: "Quel délai pour créer son entreprise avec le cabinet ?",
    reponse: "Une micro-entreprise peut être immatriculée en 24 à 48 heures. Pour une société (SASU, SARL, SAS), le délai est généralement de 3 à 10 jours ouvrés à compter de la réception du dossier complet par le Guichet Unique. Notre juriste vous indique un délai indicatif adapté à votre situation."
  },
  {
    question: "L'information fournie par le cabinet est-elle une consultation juridique ?",
    reponse: "Non. Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent."
  },
]

export default function CreationEntreprisePage() {
  const [faqOuverte, setFaqOuverte] = useState<number | null>(null)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Breadcrumb */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0.6rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 13, color: '#6b7280' }}>
            <a href="/" style={{ color: '#1a4fba', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={14} />
            <a href="/accompagnement-professionnels" style={{ color: '#1a4fba', textDecoration: 'none' }}>Professionnels</a>
            <ChevronRight size={14} />
            <span style={{ color: '#374151', fontWeight: 600 }}>Création d'entreprise</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{ display: 'inline-block', background: '#d4a017', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Création offerte
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Création d'entreprise accompagnée<br />
              par un juriste formaliste CRFF
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Formalités offertes hors droits de greffe et frais de journal d'annonces légales.
              SASU, SARL, SAS, EURL, micro-entreprise, SCI : notre juriste prépare et vous assiste dans
              la rédaction de vos statuts et le dépôt de votre dossier d'immatriculation.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#d4a017', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Démarrer ma création <ArrowRight size={18} />
              </a>
              <a href="/vie-des-entreprises" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.4)' }}>
                Modifier une entreprise existante
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "6", label: "Formes juridiques accompagnées" },
                { valeur: "10+", label: "Ans d'expérience formaliste" },
                { valeur: "0\u00a0€", label: "Honoraires formalités" },
                { valeur: "24-72h", label: "Délai indicatif traitement" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#d4a017' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTION LOI 1971 */}
        <div style={{ background: '#eff6ff', borderBottom: '1px solid #bfdbfe', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971
              et ne constitue pas une consultation juridique personnalisée. Le cas échéant, vous serez orienté
              vers le professionnel du droit compétent.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* OFFERT / À VOTRE CHARGE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Ce qui est offert, ce qui reste à votre charge
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Transparence totale sur les coûts avant tout engagement.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'white', border: '1px solid #bbf7d0', borderRadius: 12, padding: '1.5rem', borderTop: '4px solid #16a34a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  <CheckCircle size={20} strokeWidth={1.5} style={{ color: '#16a34a' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#15803d', margin: 0 }}>Offert par le cabinet</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {inclus.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 13, color: '#374151' }}>
                      <CheckCircle size={14} strokeWidth={2} style={{ color: '#16a34a', marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'white', border: '1px solid #fecaca', borderRadius: 12, padding: '1.5rem', borderTop: '4px solid #dc2626' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  <AlertCircle size={20} strokeWidth={1.5} style={{ color: '#dc2626' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#b91c1c', margin: 0 }}>À votre charge (tiers)</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                  {nonInclus.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 13, color: '#374151' }}>
                      <Euro size={14} strokeWidth={2} style={{ color: '#dc2626', marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#fef2f2', borderRadius: 8, fontSize: 12, color: '#7f1d1d' }}>
                  Ces frais sont versés directement aux organismes concernés (INPI, journal d'annonces légales). Le cabinet ne perçoit aucune commission sur ces montants.
                </div>
              </div>
            </div>
          </section>

          {/* ÉTAPES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Les étapes de votre création d'entreprise
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un processus structuré, de la première prise de contact à la réception de votre Kbis.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              {etapes.map((etape, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: i % 2 === 0 ? '#0f2d6e' : '#1a4fba' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e5e7eb', lineHeight: 1 }}>{etape.numero}</span>
                    <div style={{ color: '#1a4fba' }}>{etape.icone}</div>
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>{etape.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{etape.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COMPARATIF */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Comparatif des formes juridiques en 2026
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Informations en vigueur au 1er janvier 2026. Ces éléments constituent une information juridique générale
              au sens de la loi n°71-1130 du 31 décembre 1971 et non une recommandation personnalisée.
            </p>
            <div style={{ overflowX: 'auto', borderRadius: 12, border: '1px solid #e5e7eb' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#0f2d6e', color: 'white' }}>
                    {['Forme', 'Associés', 'Capital', 'Responsabilité', 'Greffe 2026', 'JAL 2026 (HT)', 'Idéal pour'].map((col, i) => (
                      <th key={i} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 600, fontSize: 12, whiteSpace: 'nowrap' }}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {formesJuridiques.map((forme, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f3f4f6', background: i % 2 === 0 ? 'white' : '#f8fafc' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: forme.couleur }}>{forme.nom}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#374151' }}>{forme.associes}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#374151' }}>{forme.capital}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#374151', fontSize: 12 }}>{forme.responsabilite}</td>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: forme.greffe2026 === 'Gratuit' ? '#16a34a' : '#374151' }}>{forme.greffe2026}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#374151' }}>{forme.jal}</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#6b7280', fontSize: 12 }}>{forme.ideal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 11, color: '#9ca3af', marginTop: '0.5rem' }}>
              Tarifs indicatifs 2026. Les frais de JAL varient selon le département d'immatriculation.
              Les droits de greffe incluent l'immatriculation et la déclaration des bénéficiaires effectifs (DBE), obligatoire pour toutes les sociétés.
            </p>
          </section>

          {/* CTA intermédiaire */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 16, padding: '2.5rem 2rem', marginBottom: '3.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', color: 'white' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#d4a017', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Création offerte</div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Prêt à créer votre entreprise ?</h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>Décrivez votre projet. Notre juriste vous répond sous 24 à 48h ouvrées.</p>
            </div>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#d4a017', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
              Contacter le cabinet <ArrowRight size={18} />
            </a>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus courantes sur la création d'entreprise.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                  <button onClick={() => setFaqOuverte(faqOuverte === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}>
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
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=80" alt="François Cholez, juriste formaliste CRFF" style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #eff6ff', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['Juriste', 'Formaliste CRFF', 'ORIAS 26003943'].map((badge, i) => (
                  <span key={i} style={{ background: '#eff6ff', color: '#1a4fba', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{badge}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>François CHOLEZ</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Juriste formaliste, membre du CRFF (Conseil Représentatif des Formalistes de France).
                Plus de 10 ans d'expérience dans l'accompagnement des créateurs d'entreprise, à distance, partout en France.
              </p>
            </div>
          </section>

        </div>

        {/* MAILLAGE INTERNE */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem 2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 14px' }}>Pour aller plus loin</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { label: 'Formalités externalisées', href: '/formalites-juridiques-externalisees' },
                { label: 'Juriste ou avocat ?', href: '/juriste-formaliste-ou-avocat' },
                { label: 'Vie des entreprises', href: '/vie-des-entreprises' },
                { label: 'Tous nos services', href: '/services' },
              ].map((l) => (
                <a key={l.href} href={l.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 999, padding: '8px 16px', fontSize: '13px', color: '#1a4fba', fontWeight: 600, textDecoration: 'none' }}>
                  {l.label}<span aria-hidden="true" style={{ marginLeft: '2px' }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </section>


        {/* NEWSLETTER */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 16, padding: '2.5rem 1.75rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(15,45,110,0.25)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', margin: '0 0 0.5rem' }}>Restez informé</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              Recevez nos analyses juridiques, les évolutions réglementaires et nos actualités. Une lettre claire, sans spam, désinscription en un clic.
            </p>
            <NewsletterForm variant="hero" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}