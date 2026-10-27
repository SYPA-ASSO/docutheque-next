'use client'

// app/conseil-assurances/page.tsx
// Cabinet Cholez-Pagotto - Conseil en assurances
// Règles : ORIAS 26003943, DDA L.521-4, ACPR 2024-R-02, zéro tiret long, cholez-pagotto.fr

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import {
  Shield, CheckCircle, ArrowRight, ChevronDown, ChevronRight,
  AlertCircle, Info, Users, FileText, Clock, Award, Euro
} from 'lucide-react'

// ─── SCHEMA.ORG ───
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/conseil-assurances#service",
      "name": "Conseil en assurances - Cabinet Cholez-Pagotto",
      "description": "Conseil en assurances individualisé, documenté et motivé, conforme à l'article L.521-4 du Code des assurances (devoir de conseil DDA). Particuliers, professionnels et associations. ORIAS n°26003943, sous contrôle ACPR.",
      "provider": {
        "@type": "Organization",
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
      "serviceType": "Courtage et intermédiation en assurances",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Forfait conseil assurances Particulier",
          "price": "90",
          "priceCurrency": "EUR",
          "description": "Conseil individualisé, documenté et motivé (art. L.521-4 Code des assurances). Dû avant remise du rapport, indépendamment de toute souscription."
        },
        {
          "@type": "Offer",
          "name": "Forfait conseil assurances Professionnel / Association",
          "price": "150",
          "priceCurrency": "EUR",
          "description": "Conseil individualisé, documenté et motivé (art. L.521-4 Code des assurances). Dû avant remise du rapport, indépendamment de toute souscription."
        }
      ],
      "url": "https://cholez-pagotto.fr/conseil-assurances"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/conseil-assurances#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Pourquoi un forfait conseil est-il facturé avant toute souscription ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conformément à l'article L.521-4 du Code des assurances (devoir de conseil issu de la Directive sur la Distribution d'Assurances, DDA), avant la conclusion de tout contrat, le distributeur précise par écrit les exigences et les besoins du client, conseille un contrat cohérent avec ceux-ci et précise les raisons de ce conseil. La recommandation ACPR 2024-R-02 invite les distributeurs à exposer par écrit, sur support durable, les raisons du conseil. Le forfait rémunère ce travail de conseil indépendamment de toute souscription. Si vous souscrivez un contrat via le cabinet, celui-ci perçoit en complément une commission versée par l'assureur, séparée du forfait. Le cabinet vous indique son mode de rémunération avant toute souscription (art. L.521-2 du Code des assurances) et s'engage à vous en communiquer le montant."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que l'ORIAS et comment vérifier l'immatriculation du cabinet ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'ORIAS (Organisme pour le Registre des Intermédiaires en Assurance) est le registre national des intermédiaires en assurance, banque et finance. L'immatriculation à l'ORIAS est obligatoire pour exercer l'intermédiation en assurances en France. Le Cabinet Cholez-Pagotto est immatriculé sous le numéro 26003943, catégorie IAS Niveau 1 (Intermédiaire en Assurances). Vous pouvez vérifier cette immatriculation sur www.orias.fr."
          }
        },
        {
          "@type": "Question",
          "name": "Quels types de contrats d'assurances le cabinet peut-il conseiller ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le cabinet intervient sur l'ensemble des assurances de personnes et de biens : responsabilité civile professionnelle (RC Pro), multirisques professionnelle, multirisques habitation, assurance vie, prévoyance (arrêt de travail, invalidité, décès), complémentaire santé, assurance auto, protection juridique, assurance emprunteur et assurance association. Pour les associations et structures ESS, le cabinet propose également le conseil sur les contrats collectifs et les garanties spécifiques au secteur non lucratif."
          }
        },
        {
          "@type": "Question",
          "name": "Le cabinet est-il indépendant des assureurs ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le cabinet intervient en qualité de courtier en assurances (IAS) et n'est soumis à aucune obligation contractuelle de travailler exclusivement avec une ou plusieurs compagnies d'assurance. Il consulte les compagnies et grossistes avec lesquels il a conclu des conventions de partenariat, c'est-à-dire un panel de partenaires et non l'ensemble du marché ; les noms des compagnies avec lesquelles le cabinet travaille vous sont communiqués avant toute souscription. Le rapport de conseil identifie les offres les mieux adaptées à votre situation parmi celles de ces partenaires. En cas de souscription via le cabinet, une commission est versée par l'assureur choisi, séparée du forfait conseil. Le cabinet vous indique son mode de rémunération avant toute souscription (art. L.521-2 du Code des assurances) et s'engage à vous en communiquer le montant."
          }
        },
        {
          "@type": "Question",
          "name": "Que contient le rapport de conseil ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le rapport de conseil est un document écrit, daté et mis à disposition dans votre espace client. Il comprend : la synthèse de votre situation assurantielle actuelle, l'analyse de vos besoins identifiés lors du recueil d'informations, la comparaison des offres des compagnies et grossistes partenaires consultés, adaptées à votre profil, la recommandation motivée avec les raisons du choix proposé, et les modalités de souscription."
          }
        },
        {
          "@type": "Question",
          "name": "Le conseil en assurances couvre-t-il les associations et structures ESS ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le cabinet accompagne les associations loi 1901, les fondations, les coopératives et les structures ESS dans leur stratégie assurantielle. Les besoins des structures associatives sont spécifiques : responsabilité civile des dirigeants, protection des bénévoles, multirisques des locaux, assurance des manifestations et événements, assurance des véhicules associatifs, prévoyance des salariés. Le forfait est de 150 € pour les professionnels et associations."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/conseil-assurances#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://cholez-pagotto.fr/services" },
        { "@type": "ListItem", "position": 3, "name": "Conseil en assurances", "item": "https://cholez-pagotto.fr/conseil-assurances" }
      ]
    }
  ]
}

// ─── DONNÉES ───
const produitsParticuliers = [
  { nom: "Multirisques habitation", desc: "Garanties incendie, dégât des eaux, vol, responsabilité civile. Vérification des niveaux de couverture et des exclusions." },
  { nom: "Assurance auto", desc: "Tiers, tiers étendu, tous risques : comparatif des couvertures, analyse des franchises et des garanties assistance." },
  { nom: "Assurance vie", desc: "Épargne, transmission patrimoniale, désignation de bénéficiaire, fiscalité. Sélection du contrat adapté à vos objectifs." },
  { nom: "Prévoyance individuelle", desc: "Arrêt maladie, invalidité, décès. Analyse des garanties existantes et identification des lacunes de couverture." },
  { nom: "Complémentaire santé", desc: "Remboursements optique, dentaire, hospitalisation. Comparatif des contrats individuels et familiaux." },
  { nom: "Protection juridique", desc: "Couverture des litiges de la vie quotidienne : travail, consommation, logement, famille." },
  { nom: "Assurance emprunteur", desc: "Comparatif des offres alternatives au contrat groupe bancaire. Délégation d'assurance et économies réalisables." },
  { nom: "Responsabilité civile vie privée", desc: "Couverture des dommages causés à des tiers dans le cadre de la vie privée. Vérification des garanties incluses dans vos contrats existants." }
]

const produitsProAssoc = [
  { nom: "Responsabilité civile professionnelle", desc: "RC Pro obligatoire selon votre activité. Analyse des plafonds de garantie, exclusions et extensions nécessaires." },
  { nom: "Multirisques professionnelle", desc: "Locaux, matériel, marchandises, pertes d'exploitation. Adaptation aux spécificités de votre activité." },
  { nom: "Responsabilité civile dirigeants", desc: "Protection personnelle des dirigeants contre les fautes de gestion. Obligatoire pour les associations employeuses." },
  { nom: "Assurance des bénévoles", desc: "Couverture des accidents et responsabilités des bénévoles lors des activités associatives." },
  { nom: "Assurance événements et manifestations", desc: "Responsabilité civile événementielle, annulation, protection des participants." },
  { nom: "Prévoyance collective", desc: "Contrats collectifs obligatoires pour les associations employeuses : arrêt maladie, invalidité, décès, frais de santé." },
  { nom: "Assurance des véhicules professionnels", desc: "Flotte automobile, véhicules utilitaires, engins de chantier. Analyse des niveaux de couverture adaptés à votre activité." },
  { nom: "Protection juridique professionnelle", desc: "Couverture des litiges commerciaux, prud'homaux, fiscaux. Analyse des garanties selon votre secteur d'activité." }
]

const etapes = [
  {
    numero: "01",
    titre: "Recueil de vos besoins",
    description: "Vous décrivez votre situation et vos besoins par le formulaire de contact. Le cabinet recueille ensuite, par écrit, vos exigences et besoins (contrats existants, risques à couvrir, niveau de garanties souhaité) et vous en adresse une reformulation à confirmer. Ce document constitue la base documentaire du conseil conformément à l'art. L.521-4 du Code des assurances.",
    icone: <FileText size={22} strokeWidth={1.5} />
  },
  {
    numero: "02",
    titre: "Règlement du forfait conseil",
    description: "Le forfait conseil (90 € pour les particuliers, 150 € pour les professionnels et associations) est réglé avant la remise du rapport, selon les modalités indiquées par le cabinet à l'ouverture du dossier. Ce paiement rémunère le travail de conseil, indépendamment de toute souscription ultérieure.",
    icone: <Euro size={22} strokeWidth={1.5} />
  },
  {
    numero: "03",
    titre: "Audit et comparaison des offres",
    description: "Notre conseiller analyse vos contrats existants, identifie les lacunes de couverture, consulte les compagnies et grossistes partenaires du cabinet et compare leurs offres adaptées à votre profil. L'analyse porte sur les garanties, les exclusions, les franchises et les tarifs.",
    icone: <Shield size={22} strokeWidth={1.5} />
  },
  {
    numero: "04",
    titre: "Remise du rapport de conseil",
    description: "Vous recevez un rapport de conseil écrit et motivé, mis à disposition dans votre espace client, avec la fiche de vos exigences et besoins et le justificatif de paiement. Il vous est remis avant toute souscription. Le rapport identifie les contrats recommandés et les raisons du choix.",
    icone: <Award size={22} strokeWidth={1.5} />
  },
  {
    numero: "05",
    titre: "Accompagnement à la souscription",
    description: "Si vous décidez de souscrire un contrat via le cabinet, notre conseiller vous accompagne dans les démarches. En cas de souscription, une commission est versée par l'assureur, séparée du forfait. Le cabinet vous indique son mode de rémunération avant toute souscription (art. L.521-2 du Code des assurances) et s'engage à vous en communiquer le montant.",
    icone: <CheckCircle size={22} strokeWidth={1.5} />
  }
]

const faqs = [
  {
    question: "Pourquoi un forfait conseil est-il facturé avant toute souscription ?",
    reponse: "Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA), avant la conclusion de tout contrat, le distributeur précise par écrit les exigences et les besoins du client, conseille un contrat cohérent avec ceux-ci et précise les raisons de ce conseil. La recommandation ACPR 2024-R-02 invite les distributeurs à exposer par écrit, sur support durable, les raisons du conseil. Le forfait rémunère ce travail indépendamment de toute souscription. En cas de souscription via le cabinet, une commission assureur s'ajoute, séparée du forfait. Le cabinet vous indique son mode de rémunération avant toute souscription (art. L.521-2 du Code des assurances) et s'engage à vous en communiquer le montant."
  },
  {
    question: "Qu'est-ce que l'ORIAS et comment vérifier l'immatriculation du cabinet ?",
    reponse: "L'ORIAS est le registre national des intermédiaires en assurance. L'immatriculation est obligatoire pour exercer l'intermédiation en assurances en France. Le cabinet est immatriculé sous le numéro 26003943, catégorie IAS Niveau 1, sous contrôle de l'ACPR. Vérification sur www.orias.fr."
  },
  {
    question: "Quels types de contrats le cabinet peut-il conseiller ?",
    reponse: "Le cabinet intervient sur l'ensemble des assurances de personnes et de biens : RC Pro, multirisques professionnelle, multirisques habitation, assurance vie, prévoyance, complémentaire santé, assurance auto, protection juridique, assurance emprunteur et assurance association. Pour les associations, le cabinet propose également le conseil sur les contrats collectifs et les garanties spécifiques au secteur non lucratif."
  },
  {
    question: "Le cabinet est-il indépendant des assureurs ?",
    reponse: "Le cabinet intervient en qualité de courtier (IAS) et n'est soumis à aucune obligation contractuelle de travailler exclusivement avec une ou plusieurs compagnies d'assurance. Il consulte les compagnies et grossistes avec lesquels il a conclu des conventions de partenariat, c'est-à-dire un panel de partenaires et non l'ensemble du marché ; les noms des compagnies avec lesquelles le cabinet travaille vous sont communiqués avant toute souscription. Le rapport identifie les offres les mieux adaptées parmi celles de ces partenaires. La commission assureur éventuelle est séparée du forfait ; le cabinet vous indique son mode de rémunération avant toute souscription (art. L.521-2 du Code des assurances) et s'engage à vous en communiquer le montant."
  },
  {
    question: "Que contient le rapport de conseil ?",
    reponse: "Le rapport est un document écrit, daté et mis à disposition dans votre espace client. Il comprend : la synthèse de votre situation assurantielle, l'analyse de vos besoins, la comparaison des offres des partenaires consultés, la recommandation motivée et les modalités de souscription."
  },
  {
    question: "Le conseil couvre-t-il les associations et structures ESS ?",
    reponse: "Oui. Le cabinet accompagne les associations loi 1901, fondations, coopératives et structures ESS. Les besoins associatifs sont spécifiques : RC des dirigeants, protection des bénévoles, multirisques des locaux, assurance des manifestations, prévoyance collective. Le forfait est de 150 € pour les professionnels et associations."
  }
]

export default function ConseilAssurancesPage() {
  const [faqOuverte, setFaqOuverte] = useState<number | null>(null)
  const [profil, setProfil] = useState<'particulier' | 'pro'>('particulier')

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
            <span style={{ color: '#374151', fontWeight: 600 }}>Conseil en assurances</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 60%, #047857 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>

            <div style={{ marginBottom: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Conseil en assurances
              </span>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
                ORIAS n°26003943
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Un conseil en assurances<br />
              documenté, motivé et conforme DDA
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Particuliers, professionnels et associations. Audit de vos contrats existants,
              consultation de compagnies et grossistes partenaires, rapport de conseil écrit.
              Forfait conseil 90 € (particuliers) · 150 € (professionnels et associations).
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'white', color: '#065f46', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem'
              }}>
                Demander un conseil <ArrowRight size={18} />
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                <Shield size={16} strokeWidth={1.5} />
                <span>Conseil multimarque · Compagnies et grossistes partenaires</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "Particuliers", label: "Habitation, auto, vie, prévoyance, santé" },
                { valeur: "Professionnels", label: "RC Pro, multirisques, prévoyance collective" },
                { valeur: "Associations", label: "Dirigeants, bénévoles, manifestations" },
                { valeur: "Multimarque", label: "Aucun lien exclusif assureur" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#a7f3d0' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENCART RÉGLEMENTAIRE */}
        <div style={{ background: '#ecfdf5', borderBottom: '1px solid #a7f3d0', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#065f46', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#064e3b', lineHeight: 1.6, margin: 0 }}>
              Le cabinet est enregistré à l'ORIAS sous le numéro <strong>26003943</strong>. Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA) , le conseil est individualisé, documenté et motivé. La recommandation ACPR 2024-R-02 précise les bonnes pratiques de recueil des informations du client. Le forfait est dû avant remise du rapport, indépendamment de toute souscription. En cas de souscription via le cabinet, une commission assureur s'ajoute, séparée du forfait. Le cabinet vous indique avant souscription qu'il est rémunéré sur la base d'honoraires (le forfait conseil) et, en cas de souscription, d'une commission incluse dans la prime (art. L.521-2 du Code des assurances), dont il s'engage à vous communiquer le montant. Le cabinet consulte les compagnies et grossistes partenaires avec lesquels il a conclu des conventions, et non l'ensemble du marché ; les noms des compagnies avec lesquelles il travaille vous sont communiqués avant toute souscription. Retrouvez toutes les <a href="/informations-reglementaires" style={{ color: '#065f46', fontWeight: 600 }}>informations réglementaires du cabinet</a>. Le cabinet fournit un service de recommandation : le rapport explique pourquoi, parmi les offres des partenaires consultés, celles qu'il recommande correspondent le mieux à vos exigences et à vos besoins (art. L.521-4 du Code des assurances).
              Immatriculation vérifiable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#065f46' }}>www.orias.fr</a>.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* TARIFS */}
          <section id="tarifs" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Forfaits conseil
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Deux forfaits selon votre profil. Le forfait est dû avant remise du rapport, indépendamment de toute souscription ultérieure.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  titre: "Particulier",
                  tarif: "90 €",
                  unite: "forfait conseil",
                  cible: "Personnes physiques, usage personnel",
                  couleur: "#065f46",
                  border: "#a7f3d0",
                  inclus: [
                    "Recueil écrit de vos exigences et besoins, confirmé par vos soins",
                    "Audit de vos contrats existants",
                    "Consultation des compagnies et grossistes partenaires, pour votre profil",
                    "Rapport de conseil écrit et motivé",
                    "Remise des documents dans votre espace client",
                    "Accompagnement à la souscription si vous le souhaitez"
                  ]
                },
                {
                  titre: "Professionnel · Association",
                  tarif: "150 €",
                  unite: "forfait conseil",
                  cible: "Entreprises, associations, structures ESS",
                  couleur: "#0f2d6e",
                  border: "#bfdbfe",
                  badge: "Associations et ESS inclus",
                  inclus: [
                    "Recueil écrit de vos exigences et besoins, confirmé par vos soins",
                    "Audit de vos contrats existants (RC Pro, multirisques, prévoyance collective)",
                    "Consultation des compagnies et grossistes partenaires, pour votre activité",
                    "Rapport de conseil écrit et motivé",
                    "Analyse spécifique : obligations légales selon votre secteur",
                    "Remise des documents dans votre espace client"
                  ]
                }
              ].map((offre, i) => (
                <div key={i} style={{ background: 'white', border: `2px solid ${offre.border}`, borderRadius: 12, padding: '1.5rem', position: 'relative' }}>
                  {offre.badge && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: offre.couleur, color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                      {offre.badge}
                    </div>
                  )}
                  <p style={{ color: offre.couleur, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 2px' }}>{offre.titre}</p>
                  <p style={{ color: '#9ca3af', fontSize: 11, margin: '0 0 12px' }}>{offre.cible}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '4px' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 800, color: offre.couleur }}>{offre.tarif}</span>
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{offre.unite}</span>
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: 11, margin: '0 0 1rem' }}>Dû avant remise du rapport</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {offre.inclus.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                        <CheckCircle size={14} strokeWidth={2} style={{ color: offre.couleur, marginTop: 2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: offre.couleur, color: 'white', textDecoration: 'none', padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', width: '100%', boxSizing: 'border-box' as const }}>
                    Demander un conseil <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
            <p style={{ color: '#9ca3af', fontSize: 11, textAlign: 'center', marginTop: '1rem' }}>
              Commission assureur séparée, communiquée avant toute souscription (art. L.521-2 Code des assurances)
            </p>
          </section>

          {/* PRODUITS PAR PROFIL */}
          <section id="produits" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Domaines assurantiels couverts
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Le cabinet intervient sur l'ensemble des assurances de personnes et de biens, sans lien exclusif avec aucun assureur.
            </p>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {[
                { key: 'particulier', label: 'Particuliers' },
                { key: 'pro', label: 'Professionnels · Associations' }
              ].map(p => (
                <button
                  key={p.key}
                  onClick={() => setProfil(p.key as 'particulier' | 'pro')}
                  style={{ padding: '8px 18px', borderRadius: 20, border: profil === p.key ? 'none' : '1px solid #e5e7eb', background: profil === p.key ? '#065f46' : 'white', color: profil === p.key ? 'white' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {(profil === 'particulier' ? produitsParticuliers : produitsProAssoc).map((produit, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', borderLeft: '4px solid #065f46' }}>
                  <p style={{ color: '#0f2d6e', fontSize: '0.875rem', fontWeight: 700, margin: '0 0 6px' }}>{produit.nom}</p>
                  <p style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{produit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESSUS */}
          <section id="processus" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Comment se déroule le conseil ?
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un processus structuré, transparent et conforme aux exigences de la Directive sur la Distribution d'Assurances (DDA).
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.2rem' }}>
              {etapes.map((etape, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: i % 2 === 0 ? '#065f46' : '#047857' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#e5e7eb', lineHeight: 1 }}>{etape.numero}</span>
                    <div style={{ color: '#065f46' }}>{etape.icone}</div>
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>{etape.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{etape.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* POURQUOI UN CONSEIL DOCUMENTÉ */}
          <section style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 12, padding: '1.75rem', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <AlertCircle size={20} strokeWidth={1.5} style={{ color: '#065f46' }} />
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#064e3b', margin: 0 }}>
                Pourquoi le conseil en assurances doit-il être documenté ?
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
              {[
                {
                  titre: "Une obligation légale (art. L.521-4)",
                  texte: "Avant la conclusion de tout contrat, le distributeur précise par écrit vos exigences et vos besoins, conseille un contrat cohérent avec ceux-ci et précise les raisons de ce conseil. Ces précisions sont adaptées à la complexité du contrat. La recommandation ACPR 2024-R-02 invite les distributeurs à exposer par écrit, sur support durable, les raisons du conseil, et à pouvoir justifier de leur remise au client."
                },
                {
                  titre: "Une protection pour le client",
                  texte: "Le rapport écrit vous permet de vérifier que le conseil correspond à vos besoins réels, de comparer les recommandations sur la durée et de disposer d'une preuve en cas de litige."
                },
                {
                  titre: "Une transparence sur la rémunération",
                  texte: "Avant toute souscription, le cabinet vous indique comment il est rémunéré (art. L.521-2 du Code des assurances) : sur la base d'honoraires, c'est-à-dire le forfait conseil que vous payez directement, dont le montant est affiché, et, en cas de souscription, sur la base d'une commission incluse dans la prime. Le forfait est séparé de la commission, dont le cabinet s'engage à vous communiquer le montant."
                },
                {
                  titre: "Une remise dans votre espace client",
                  texte: "La fiche de vos exigences et besoins, le rapport de conseil et le justificatif de paiement sont mis à disposition dans votre espace client. Vous y accédez à tout moment."
                }
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', borderRadius: 8, padding: '1rem', border: '1px solid #a7f3d0' }}>
                  <p style={{ color: '#064e3b', fontSize: '0.8rem', fontWeight: 700, margin: '0 0 6px' }}>{item.titre}</p>
                  <p style={{ color: '#064e3b', fontSize: 12, lineHeight: 1.6, margin: 0 }}>{item.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA INTERMÉDIAIRE */}
          <section style={{ background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)', borderRadius: 16, padding: '2.5rem 2rem', marginBottom: '3.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', color: 'white' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#a7f3d0', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Forfait 90 € · 150 €
              </div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>
                Vous souhaitez un conseil en assurances ?
              </h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Décrivez votre situation. Notre conseiller analyse vos besoins et consulte les compagnies et grossistes partenaires du cabinet.
              </p>
            </div>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#065f46', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
              Contacter le cabinet <ArrowRight size={18} />
            </a>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Questions fréquentes sur le conseil en assurances
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Les réponses aux questions les plus courantes sur ce service réglementé.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setFaqOuverte(faqOuverte === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f2d6e', lineHeight: 1.4 }}>{faq.question}</span>
                    <ChevronDown size={18} strokeWidth={2} style={{ color: '#065f46', flexShrink: 0, transform: faqOuverte === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
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
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <img
              src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=80"
              alt="François Cholez, conseil en assurances ORIAS 26003943"
              style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #ecfdf5', flexShrink: 0 }}
            />
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['ORIAS 26003943', 'IAS Niveau 1', 'Sous contrôle ACPR', 'Adhérent ENDYA'].map((badge, i) => (
                  <span key={i} style={{ background: '#ecfdf5', color: '#065f46', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{badge}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>François CHOLEZ</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 0.4rem', lineHeight: 1.6 }}>
                Intermédiaire en assurances (IAS Niveau 1), immatriculé à l'ORIAS sous le numéro 26003943, sous contrôle de l'ACPR, adhérent ENDYA.
              </p>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Juriste formaliste, membre du CRFF. Accompagnement des particuliers, professionnels et associations depuis plus de 10 ans.
              </p>
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#064e3b', marginBottom: '0.5rem' }}>
              Prêt à obtenir un conseil objectif sur vos assurances ?
            </h2>
            <p style={{ fontSize: 13, color: '#064e3b', marginBottom: '1.5rem', maxWidth: 500, margin: '0.5rem auto 1.5rem' }}>
              Forfait conseil 90 € (particuliers) · 150 € (professionnels et associations).
              Conseil multimarque, rapport écrit et motivé. ORIAS n°26003943.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#065f46', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Demander un conseil <ArrowRight size={18} />
              </a>
              <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#064e3b', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid #065f46' }}>
                Voir tous les services
              </a>
            </div>
          </section>

        </div>

        {/* MAILLAGE INTERNE */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem 2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 14px' }}>Pour aller plus loin</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                { label: 'Juriste ou avocat ?', href: '/juriste-formaliste-ou-avocat' },
                { label: 'Information sur vos droits', href: '/information-sur-vos-droits' },
                { label: 'Demander un modèle', href: '/catalogue' },
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