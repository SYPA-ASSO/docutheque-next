// app/rgpd-conformite/page.tsx
// Cabinet Cholez-Pagotto - RGPD & conformite (v2 : tarification visible, achat Essentiel, Audit Express)
// Regles : zero tiret long, cholez-pagotto.fr, Notre juriste singulier, NBSP avant euro

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AuditExpressForm from '@/components/AuditExpressForm'
import { CheckCircle, ArrowRight, ChevronRight, Shield, FileText, Users, Lock, AlertCircle, Info, Gift, Clock, Phone } from 'lucide-react'

export const metadata = {
  title: "RGPD & conformité · Diagnostic à partir de 350\u00a0€ · Cabinet Cholez-Pagotto",
  description: "Diagnostic RGPD à partir de 350\u00a0€, registre des activités de traitement, politique de confidentialité, mentions d'information. Audit RGPD Express offert, restitution sous 72\u00a0h. Entreprises, associations et collectivités.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/rgpd-conformite',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite#service",
      "name": "RGPD et conformité - Cabinet Cholez-Pagotto",
      "description": "Accompagnement à la mise en conformité RGPD : diagnostic documentaire, registre des activités de traitement, politique de confidentialité, mentions d'information, formation des équipes. Diagnostic en trois forfaits et Audit RGPD Express offert.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Conformité RGPD",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": [
        {
          "@type": "Offer",
          "name": "Diagnostic RGPD Essentiel",
          "price": "350",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "url": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel",
          "description": "Diagnostic de conformité pour micro-entreprise, freelance, petite association (moins de 5 traitements). Livrable sous 15 jours à compter de la réception de vos réponses. Paiement par carte bancaire ou virement."
        },
        {
          "@type": "Offer",
          "name": "Diagnostic RGPD Standard",
          "price": "900",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "description": "Diagnostic de conformité pour TPE, association établie, profession libérale (5 à 15 traitements). Entretien visio de cadrage et de restitution inclus. Livrable sous 30 jours à compter de la réception de vos réponses."
        },
        {
          "@type": "Offer",
          "name": "Diagnostic RGPD Approfondi",
          "price": "1400",
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "description": "Diagnostic de conformité pour PME, structure de santé ou sociale, collectivité, GIE, structures de plus de 15 traitements ou traitant des données sensibles. Sur devis, à partir de 1 400 euros."
        }
      ],
      "url": "https://cholez-pagotto.fr/rgpd-conformite"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien coûte un diagnostic RGPD ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le diagnostic RGPD existe en trois forfaits : Essentiel à 350\u00a0€ (micro-entreprise, freelance, petite association de moins de 5 traitements), Standard à 900\u00a0€ (TPE, association établie, profession libérale de 5 à 15 traitements) et Approfondi sur devis à partir de 1\u00a0400\u00a0€ (structures complexes, données sensibles, plus de 15 traitements). Les forfaits Essentiel et Standard sont commandables directement en ligne par carte bancaire ou virement : Essentiel livré sous 15 jours, Standard sous 30 jours, à compter de la réception de vos réponses. L'Approfondi est réalisé sur devis, selon le délai indiqué."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que l'Audit RGPD Express offert ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'Audit RGPD Express est un diagnostic flash offert, d'une valeur de 150\u00a0€, sans engagement. À partir de cinq questions clés, notre juriste identifie vos trois risques prioritaires et vous remet une note de synthèse de deux à trois pages sous 72\u00a0heures ouvrées, avec une mini-feuille de route et une orientation vers le forfait de diagnostic adapté. Un échange téléphonique de dix minutes est proposé si vous le souhaitez."
          }
        },
        {
          "@type": "Question",
          "name": "Le RGPD s'applique-t-il aux petites structures ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le Règlement Général sur la Protection des Données (UE 2016/679) s'applique à toute organisation qui traite des données personnelles de personnes situées dans l'Union Européenne, quelle que soit sa taille. Une TPE, une association de 10 membres ou une micro-entreprise sont soumises aux mêmes obligations que les grandes entreprises, avec certains aménagements pour les organisations de moins de 250 personnes."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'un registre des activités de traitement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le registre des activités de traitement (article 30 du RGPD) est un document interne obligatoire qui recense tous les traitements de données personnelles effectués par votre organisation. Il décrit pour chaque traitement : les finalités, les catégories de données, les destinataires, les durées de conservation et les mesures de sécurité. C'est le document de référence en cas de contrôle CNIL."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sont les sanctions en cas de non-conformité RGPD ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La CNIL peut prononcer des sanctions administratives allant jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial (le montant le plus élevé). Ces plafonds s'appliquent à toutes les organisations, y compris les associations et les collectivités. Au-delà des sanctions financières, la CNIL peut imposer des mesures correctives, des injonctions de mise en conformité et des limitations de traitement."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre le RGPD et la loi Informatique et Libertés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le RGPD est un règlement européen directement applicable dans tous les États membres depuis le 25 mai 2018. La loi Informatique et Libertés (loi n°78-17 du 6 janvier 1978, modifiée par la loi n°2018-493 du 20 juin 2018) est la loi française qui complète le RGPD et précise certaines règles spécifiques au droit français, notamment les dérogations et conditions particulières prévues par le règlement."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://cholez-pagotto.fr/services" },
        { "@type": "ListItem", "position": 3, "name": "RGPD & conformité", "item": "https://cholez-pagotto.fr/rgpd-conformite" }
      ]
    }
  ]
}

const prestations = [
  {
    icone: <Shield size={22} strokeWidth={1.5} />,
    titre: "Diagnostic documentaire RGPD",
    description: "Audit de votre situation actuelle : cartographie des traitements existants, identification des risques, évaluation des lacunes documentaires. Le diagnostic produit un rapport de conformité priorisé.",
    couleur: "#0f2d6e",
    fond: "#eff6ff"
  },
  {
    icone: <FileText size={22} strokeWidth={1.5} />,
    titre: "Registre des activités de traitement",
    description: "Constitution ou mise à jour du registre obligatoire (article 30 RGPD). Description de chaque traitement : finalités, bases légales, catégories de données, durées de conservation, destinataires, mesures de sécurité.",
    couleur: "#7c3aed",
    fond: "#f5f3ff"
  },
  {
    icone: <Lock size={22} strokeWidth={1.5} />,
    titre: "Politique de confidentialité",
    description: "Rédaction ou refonte de votre politique de confidentialité, conforme aux exigences des articles 13 et 14 du RGPD. Adaptée à votre activité, rédigée en langage clair, publiée sur votre site.",
    couleur: "#065f46",
    fond: "#ecfdf5"
  },
  {
    icone: <Users size={22} strokeWidth={1.5} />,
    titre: "Mentions d'information et formulaires",
    description: "Rédaction des mentions d'information pour vos formulaires de collecte (contact, inscription, commande, adhésion). Base légale, finalités, droits des personnes, conservation : chaque mention est précise et conforme.",
    couleur: "#0891b2",
    fond: "#ecfeff"
  },
  {
    icone: <AlertCircle size={22} strokeWidth={1.5} />,
    titre: "Gestion des violations de données",
    description: "Mise en place d'une procédure de détection et de notification des violations de données (article 33 RGPD). Rédaction du registre interne des violations. Accompagnement en cas d'incident.",
    couleur: "#dc2626",
    fond: "#fef2f2"
  },
  {
    icone: <CheckCircle size={22} strokeWidth={1.5} />,
    titre: "Réponses aux droits des personnes",
    description: "Mise en place des procédures de réponse aux demandes d'exercice des droits (accès, rectification, effacement, opposition, portabilité). Rédaction des modèles de réponse. Délais et traçabilité.",
    couleur: "#d97706",
    fond: "#fffbeb"
  }
]

const forfaits = [
  {
    nom: "Essentiel",
    cible: "Micro-entreprise, freelance, petite association (moins de 5 traitements)",
    tarif: "350\u00a0€",
    tarifSub: "",
    delai: "Livrable sous 15 jours",
    note: "Commandable directement en ligne",
    lien: "/rgpd-conformite/diagnostic-essentiel",
    couleur: "#7c3aed",
    fond: "#f5f3ff",
    border: "#c4b5fd",
    achat: true,
    badge: ""
  },
  {
    nom: "Standard",
    cible: "TPE, association établie, profession libérale (5 à 15 traitements)",
    tarif: "900\u00a0€",
    tarifSub: "",
    delai: "Livrable sous 30 jours",
    note: "Entretien visio de cadrage et de restitution inclus",
    lien: "/rgpd-conformite/diagnostic-standard",
    couleur: "#0f2d6e",
    fond: "#eff6ff",
    border: "#93c5fd",
    achat: true,
    badge: "Le plus demandé"
  },
  {
    nom: "Approfondi",
    cible: "PME, structure de santé ou sociale, collectivité, GIE, plus de 15 traitements ou données sensibles",
    tarif: "Sur devis",
    tarifSub: "à partir de 1\u00a0400\u00a0€",
    delai: "Délai précisé au devis",
    note: "Cartographie multi-niveaux et rapport étendu",
    lien: "/contact",
    couleur: "#065f46",
    fond: "#ecfdf5",
    border: "#6ee7b7",
    achat: false,
    badge: ""
  }
]

const phases = [
  { phase: "Questionnaire et échange initial par email", e: "Inclus", s: "Inclus", a: "Inclus" },
  { phase: "Analyse des réponses, des outils et du site", e: "Inclus", s: "Inclus", a: "Inclus" },
  { phase: "Entretien visio de cadrage", e: "Non", s: "Inclus", a: "Inclus" },
  { phase: "Cartographie des traitements (finalités, bases légales, durées, destinataires)", e: "Simplifiée", s: "Complète", a: "Multi-niveaux" },
  { phase: "Analyse des écarts (RGPD et loi Informatique et Libertés)", e: "Inclus", s: "Inclus", a: "Détaillée" },
  { phase: "Hiérarchisation des actions par niveau de risque", e: "Inclus", s: "Inclus", a: "Multi-niveaux" },
  { phase: "Rapport écrit avec recommandations", e: "Synthétique", s: "Rédigé", a: "Étendu" },
  { phase: "Restitution visio (sans caméra cabinet, partage d'écran)", e: "Par email", s: "Inclus", a: "Inclus" }
]

const auditQuestions = [
  "Quelle est votre activité principale et combien de personnes ou de clients gérez-vous ?",
  "Quels types de données collectez-vous (identité, contact, paiement, santé, autres) ?",
  "Quels outils utilisez-vous (CRM, emailing, hébergement, sous-traitants) ?",
  "Disposez-vous d'un registre des traitements, d'une politique de confidentialité, de mentions d'information ?",
  "Avez-vous déjà eu une violation de données, une plainte, ou un contrôle CNIL ?"
]

const basesLegales = [
  { base: "Consentement (art. 6.1.a)", desc: "Accord explicite et libre de la personne. Révocable à tout moment. Souvent requis pour les cookies analytics et le marketing." },
  { base: "Contrat (art. 6.1.b)", desc: "Traitement nécessaire à l'exécution d'un contrat avec la personne. Ex : gestion d'une commande, d'un abonnement." },
  { base: "Obligation légale (art. 6.1.c)", desc: "Traitement requis par une obligation légale applicable. Ex : conservation des bulletins de paie, facturation." },
  { base: "Intérêt légitime (art. 6.1.f)", desc: "Intérêt légitime du responsable, sous réserve qu'il ne prévale pas sur les droits des personnes. Ex : sécurité du SI, prévention de la fraude." }
]

const eligibiliteDPO = [
  "Vous êtes un organisme public ou une autorité publique.",
  "Votre activité de base implique un suivi régulier et systématique des personnes à grande échelle.",
  "Votre activité de base implique le traitement à grande échelle de données sensibles (santé, biométrie, opinions, infractions)."
]

const faqs = [
  {
    q: "Combien coûte un diagnostic RGPD ?",
    r: "Le diagnostic RGPD existe en trois forfaits : Essentiel à 350\u00a0€ (micro-entreprise, freelance, petite association de moins de 5 traitements), Standard à 900\u00a0€ (TPE, association établie, profession libérale de 5 à 15 traitements) et Approfondi sur devis à partir de 1\u00a0400\u00a0€ (structures complexes, données sensibles, plus de 15 traitements). Les forfaits Essentiel et Standard sont commandables directement en ligne par carte bancaire ou virement : Essentiel livré sous 15 jours, Standard sous 30 jours, à compter de la réception de vos réponses. L'Approfondi est réalisé sur devis, selon le délai indiqué."
  },
  {
    q: "Qu'est-ce que l'Audit RGPD Express offert ?",
    r: "C'est un diagnostic flash offert, d'une valeur de 150\u00a0€, sans engagement. À partir de cinq questions clés, notre juriste identifie vos trois risques prioritaires et vous remet une note de synthèse de deux à trois pages sous 72\u00a0heures ouvrées, avec une mini-feuille de route et une orientation vers le forfait de diagnostic adapté. Un échange téléphonique de dix minutes est proposé si vous le souhaitez."
  },
  {
    q: "Le RGPD s'applique-t-il aux petites structures ?",
    r: "Oui. Le RGPD s'applique à toute organisation qui traite des données personnelles, quelle que soit sa taille. Une TPE, une association ou une micro-entreprise sont soumises aux mêmes obligations, avec certains aménagements pour les structures de moins de 250 personnes (notamment une tenue simplifiée du registre pour les traitements non réguliers)."
  },
  {
    q: "Qu'est-ce qu'un registre des activités de traitement ?",
    r: "Le registre (article 30 RGPD) est un document interne obligatoire qui recense tous les traitements de données personnelles. Il décrit pour chaque traitement les finalités, les catégories de données, les destinataires, les durées de conservation et les mesures de sécurité. C'est le document de référence en cas de contrôle CNIL."
  },
  {
    q: "Quelles sont les sanctions en cas de non-conformité ?",
    r: "La CNIL peut prononcer des sanctions jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial. Ces plafonds s'appliquent à toutes les organisations, y compris les associations et les collectivités. La CNIL peut aussi imposer des injonctions de mise en conformité et des limitations de traitement."
  },
  {
    q: "Quelle est la différence entre le RGPD et la loi Informatique et Libertés ?",
    r: "Le RGPD est un règlement européen directement applicable depuis le 25 mai 2018. La loi Informatique et Libertés (loi n°78-17 du 6 janvier 1978, modifiée par la loi n°2018-493 du 20 juin 2018) est la loi française qui complète le RGPD et précise les règles spécifiques au droit français."
  },
  {
    q: "La mise en conformité RGPD est-elle un projet ponctuel ou continu ?",
    r: "C'est un processus continu. Une première mise en conformité produit les documents et procédures nécessaires. Mais le RGPD impose une conformité permanente : le registre doit être mis à jour à chaque nouveau traitement, les mentions d'information doivent refléter la réalité, les incidents doivent être tracés. Notre service de DPO externalisé assure cette conformité dans la durée."
  }
]

export default function RGPDConformitePage() {
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
            <a href="/services" style={{ color: '#1a4fba', textDecoration: 'none' }}>Services</a>
            <ChevronRight size={14} />
            <span style={{ color: '#374151', fontWeight: 600 }}>RGPD & conformité</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #7c3aed 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              RGPD & conformité
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Mise en conformité RGPD<br />
              pour les entreprises, associations et collectivités
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Diagnostic de conformité à partir de 350&nbsp;€, registre des traitements, politique de confidentialité,
              mentions d'information, gestion des violations de données. Et pour commencer sans engagement,
              un Audit RGPD Express offert, restitué sous 72&nbsp;heures.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/rgpd-conformite/diagnostic-essentiel" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#7c3aed', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Commander le Diagnostic Essentiel <ArrowRight size={18} />
              </a>
              <a href="#audit-express" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.4)' }}>
                <Gift size={17} /> Audit Express offert
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "Dès 350\u00a0€", label: "Diagnostic de conformité" },
                { valeur: "Offert", label: "Audit RGPD Express (valeur 150\u00a0€)" },
                { valeur: "72\u00a0h", label: "Restitution de l'Audit Express" },
                { valeur: "CNIL", label: "Référentiel applicable" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#c4b5fd' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENCART REGLEMENTAIRE */}
        <div style={{ background: '#f5f3ff', borderBottom: '1px solid #e9d5ff', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le Règlement Général sur la Protection des Données (UE 2016/679, RGPD) est directement applicable depuis le 25 mai 2018.
              La loi n°2018-493 du 20 juin 2018 adapte le droit français. En France, la CNIL est l'autorité de contrôle compétente.
              L'accompagnement proposé constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* PRESTATIONS */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Prestations proposées
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un accompagnement modulaire, de la première mise en conformité à la gestion continue.
              Le diagnostic de conformité existe en trois forfaits aux tarifs affichés ci-dessous.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {prestations.map((p, i) => (
                <div key={i} style={{
                  background: p.fond, border: `1px solid ${p.couleur}30`,
                  borderRadius: 12, padding: '1.5rem', borderLeft: `4px solid ${p.couleur}`
                }}>
                  <div style={{ color: p.couleur, marginBottom: '0.75rem' }}>{p.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>{p.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TARIFICATION */}
          <section id="tarifs" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Diagnostic de conformité : trois forfaits
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Diagnostic à partir de 350&nbsp;€, abonnement DPO mensuel à partir de 150&nbsp;€/mois selon volumétrie.
              Les forfaits Essentiel et Standard se commandent directement en ligne, le forfait Approfondi sur devis personnalisé.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {forfaits.map((f, i) => (
                <div key={i} style={{ background: f.fond, border: `2px solid ${f.border}`, borderRadius: 12, padding: '1.5rem', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                  {f.badge ? (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: f.couleur, color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                      {f.badge}
                    </div>
                  ) : null}
                  <p style={{ color: f.couleur, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>Forfait {f.nom}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '2px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: f.couleur }}>{f.tarif}</span>
                  </div>
                  {f.tarifSub ? (
                    <p style={{ color: '#6b7280', fontSize: 12, margin: '0 0 4px' }}>{f.tarifSub}</p>
                  ) : null}
                  <p style={{ color: '#9ca3af', fontSize: 12, margin: '0 0 10px' }}>{f.delai}</p>
                  <p style={{ color: '#374151', fontSize: 12.5, lineHeight: 1.6, margin: '0 0 0.5rem', minHeight: 54 }}>{f.cible}</p>
                  <p style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.6, margin: '0 0 1.25rem' }}>{f.note}</p>
                  <div style={{ marginTop: 'auto' }}>
                    {f.achat ? (
                      <a href={f.lien} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: f.couleur, color: 'white', textDecoration: 'none', padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', width: '100%', boxSizing: 'border-box' as const }}>
                        Commander mon Diagnostic <ArrowRight size={16} />
                      </a>
                    ) : (
                      <a href={f.lien} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'white', color: f.couleur, textDecoration: 'none', padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', width: '100%', boxSizing: 'border-box' as const, border: `1px solid ${f.couleur}` }}>
                        Demander un devis <ArrowRight size={16} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* TABLEAU DETAIL DES PHASES */}
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.75rem' }}>
              Le détail de chaque forfait
            </h3>
            <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: 12, background: 'white' }}>
              <table style={{ width: '100%', minWidth: 640, borderCollapse: 'collapse', fontSize: 12.5 }}>
                <thead>
                  <tr style={{ background: '#f5f3ff' }}>
                    <th style={{ textAlign: 'left', padding: '12px 14px', color: '#5b21b6', fontWeight: 700, borderBottom: '1px solid #e9d5ff' }}>Étape</th>
                    <th style={{ textAlign: 'center', padding: '12px 14px', color: '#7c3aed', fontWeight: 700, borderBottom: '1px solid #e9d5ff', whiteSpace: 'nowrap' }}>Essentiel</th>
                    <th style={{ textAlign: 'center', padding: '12px 14px', color: '#0f2d6e', fontWeight: 700, borderBottom: '1px solid #e9d5ff', whiteSpace: 'nowrap' }}>Standard</th>
                    <th style={{ textAlign: 'center', padding: '12px 14px', color: '#065f46', fontWeight: 700, borderBottom: '1px solid #e9d5ff', whiteSpace: 'nowrap' }}>Approfondi</th>
                  </tr>
                </thead>
                <tbody>
                  {phases.map((ph, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                      <td style={{ padding: '11px 14px', color: '#374151', borderBottom: '1px solid #f3f4f6', lineHeight: 1.5 }}>{ph.phase}</td>
                      <td style={{ padding: '11px 14px', color: ph.e === 'Non' ? '#9ca3af' : '#374151', textAlign: 'center', borderBottom: '1px solid #f3f4f6' }}>{ph.e}</td>
                      <td style={{ padding: '11px 14px', color: '#374151', textAlign: 'center', borderBottom: '1px solid #f3f4f6' }}>{ph.s}</td>
                      <td style={{ padding: '11px 14px', color: '#374151', textAlign: 'center', borderBottom: '1px solid #f3f4f6' }}>{ph.a}</td>
                    </tr>
                  ))}
                  <tr style={{ background: '#f8fafc' }}>
                    <td style={{ padding: '11px 14px', fontWeight: 700, color: '#0f2d6e', borderBottom: '1px solid #f3f4f6' }}>Tarif</td>
                    <td style={{ padding: '11px 14px', textAlign: 'center', fontWeight: 800, color: '#7c3aed', borderBottom: '1px solid #f3f4f6' }}>350&nbsp;€</td>
                    <td style={{ padding: '11px 14px', textAlign: 'center', fontWeight: 800, color: '#0f2d6e', borderBottom: '1px solid #f3f4f6' }}>900&nbsp;€</td>
                    <td style={{ padding: '11px 14px', textAlign: 'center', fontWeight: 800, color: '#065f46', borderBottom: '1px solid #f3f4f6' }}>Dès 1&nbsp;400&nbsp;€</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '11px 14px', fontWeight: 700, color: '#0f2d6e' }}>Livrable</td>
                    <td style={{ padding: '11px 14px', textAlign: 'center' }}>15&nbsp;jours</td>
                    <td style={{ padding: '11px 14px', textAlign: 'center' }}>30&nbsp;jours</td>
                    <td style={{ padding: '11px 14px', textAlign: 'center' }}>Au devis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ color: '#9ca3af', fontSize: 11, marginTop: '0.75rem' }}>
              Les délais de livraison courent à compter de la réception de vos réponses complètes au questionnaire de cadrage.
              Les entretiens et restitutions visio se déroulent sans caméra côté cabinet, par partage d'écran avec support commenté.
              Tarifs affichés en montant net. Le cabinet n'est pas assujetti à la TVA.
            </p>
          </section>

          {/* QUI EST CONCERNE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Toutes les organisations sont concernées
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Le RGPD ne fait pas de distinction selon la taille ou le secteur d'activité.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { titre: "TPE · PME", desc: "Tout commerce, artisan, profession libérale ou société qui collecte des données clients, prospects ou salariés.", couleur: "#0f2d6e" },
                { titre: "Associations", desc: "Données des adhérents, bénévoles, donateurs, bénéficiaires. Traitement souvent non évalué mais obligatoire.", couleur: "#16a34a" },
                { titre: "Collectivités", desc: "Communes, intercommunalités, établissements publics. Traitements massifs et catégories sensibles fréquentes.", couleur: "#7c3aed" },
                { titre: "Professions libérales", desc: "Médecins, avocats, comptables, architectes : données clients souvent sensibles, obligations renforcées.", couleur: "#065f46" }
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', borderTop: `4px solid ${item.couleur}` }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: item.couleur, margin: '0 0 6px' }}>{item.titre}</h3>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BASES LEGALES */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Les bases légales du traitement (article 6 RGPD)
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Tout traitement de données personnelles doit reposer sur l'une des six bases légales du règlement.
              Identifier la bonne base est une étape fondamentale de la conformité.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {basesLegales.map((bl, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7c3aed', margin: '0 0 6px' }}>{bl.base}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{bl.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SANCTIONS */}
          <section style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '1.5rem', marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <AlertCircle size={20} strokeWidth={1.5} style={{ color: '#dc2626', marginTop: 2, flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#b91c1c', margin: '0 0 0.5rem' }}>
                Sanctions CNIL : jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires
              </h3>
              <p style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                La CNIL peut prononcer des sanctions administratives, des injonctions de mise en conformité
                et des limitations de traitement. En 2023 et 2024, plusieurs sanctions importantes ont été
                prononcées contre des PME et des associations. L'absence de registre, l'absence de politique
                de confidentialité ou l'absence de consentement pour les cookies sont les manquements les plus fréquents.
              </p>
              <p style={{ fontSize: 12, color: '#9a3412', margin: 0, lineHeight: 1.6 }}>
                Un diagnostic préalable permet d'identifier les risques prioritaires et d'engager les corrections
                avant tout contrôle. Commencez par l'Audit RGPD Express offert ci-dessous.
              </p>
            </div>
          </section>

          {/* AUDIT RGPD EXPRESS OFFERT */}
          <section id="audit-express" style={{ marginBottom: '3.5rem', scrollMarginTop: '90px' }}>
            <div style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #eff6ff 100%)', border: '1px solid #e9d5ff', borderRadius: 16, padding: '2rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '2rem' }}>

                <div style={{ flex: '1 1 320px', minWidth: 0 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#7c3aed', color: 'white', fontSize: 11, fontWeight: 700, padding: '5px 14px', borderRadius: 20, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    <Gift size={14} /> Offert · Valeur 150&nbsp;€
                  </span>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#5b21b6', margin: '0 0 0.5rem' }}>
                    Audit RGPD Express
                  </h2>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
                    Un diagnostic flash sans engagement. Vous répondez à cinq questions clés, notre juriste identifie
                    vos trois risques prioritaires et vous remet une note de synthèse de deux à trois pages.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                    {[
                      { icone: <Clock size={16} strokeWidth={1.75} />, txt: "Restitution sous 72\u00a0heures ouvrées par email" },
                      { icone: <FileText size={16} strokeWidth={1.75} />, txt: "Note PDF de 2 à 3 pages : 3 risques prioritaires et mini-feuille de route" },
                      { icone: <Phone size={16} strokeWidth={1.75} />, txt: "Échange téléphonique de 10 minutes offert si vous le souhaitez" }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 13, color: '#374151' }}>
                        <span style={{ color: '#7c3aed', flexShrink: 0, marginTop: 1 }}>{item.icone}</span>
                        <span>{item.txt}</span>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 12, fontWeight: 700, color: '#5b21b6', margin: '0 0 0.5rem' }}>Les cinq questions de l'audit :</p>
                  <ol style={{ margin: 0, padding: '0 0 0 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {auditQuestions.map((q, i) => (
                      <li key={i} style={{ fontSize: 12.5, color: '#4b5563', lineHeight: 1.55 }}>{q}</li>
                    ))}
                  </ol>
                </div>

                <div style={{ flex: '1 1 320px', minWidth: 0 }}>
                  <div style={{ background: 'white', border: '1px solid #e9d5ff', borderRadius: 12, padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>Demander mon Audit Express</h3>
                    <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
                      Renseignez vos coordonnées : nous vous envoyons le questionnaire et votre restitution sous 72&nbsp;heures ouvrées.
                    </p>
                    <AuditExpressForm />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* DPO RENVOI */}
          <section style={{ background: '#0f2d6e', borderRadius: 12, padding: '2rem', marginBottom: '1.25rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', color: 'white' }}>
            <div>
              <p style={{ color: '#c4b5fd', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.4rem' }}>Conformité dans la durée</p>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.4rem' }}>La conformité RGPD ne s'arrête pas à la première mise en conformité</h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Le service DPO externalisé assure la conformité continue : veille réglementaire, mise à jour
                du registre, gestion des incidents, interlocuteur CNIL désigné. À partir de 150&nbsp;€/mois selon volumétrie.
              </p>
            </div>
            <a href="/dpo-externalise" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
              Découvrir le DPO externalisé <ArrowRight size={16} />
            </a>
          </section>

          {/* MINI-TEST ELIGIBILITE DPO */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.75rem', marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.4rem' }}>
              Suis-je obligé de désigner un DPO ? Auto-évaluation (article 37.1 RGPD)
            </h3>
            <p style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
              La désignation d'un DPO est obligatoire si vous vous reconnaissez dans au moins une des trois situations suivantes :
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
              {eligibiliteDPO.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 8, padding: '0.75rem 1rem' }}>
                  <CheckCircle size={16} strokeWidth={1.75} style={{ color: '#7c3aed', flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.55 }}>{c}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Au moins un critère coché : la désignation est probablement obligatoire. Aucun critère : elle reste
              recommandée si vous traitez des données sensibles. Notre juriste confirme votre situation lors du diagnostic.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus courantes sur le RGPD et nos forfaits.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem 1.5rem' }}>
                  <summary style={{ fontWeight: 600, color: '#0f2d6e', fontSize: '0.9rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span>{faq.q}</span>
                    <span style={{ color: '#7c3aed', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: 13, lineHeight: 1.75, marginTop: '0.75rem', marginBottom: 0 }}>{faq.r}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: '#f5f3ff', border: '1px solid #e9d5ff', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#5b21b6', marginBottom: '0.5rem' }}>
              Prêt à évaluer votre conformité RGPD ?
            </h2>
            <p style={{ fontSize: 13, color: '#374151', margin: '0.5rem auto 1.5rem', maxWidth: 520, lineHeight: 1.7 }}>
              Commencez par l'Audit RGPD Express offert, ou commandez directement votre Diagnostic Essentiel à 350&nbsp;€,
              livrable sous 15 jours, réglable par carte bancaire ou virement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/rgpd-conformite/diagnostic-essentiel" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Commander le Diagnostic Essentiel <ArrowRight size={18} />
              </a>
              <a href="#audit-express" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#5b21b6', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid #7c3aed' }}>
                <Gift size={17} /> Audit RGPD Express offert
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}