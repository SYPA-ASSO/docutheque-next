'use client'

// app/formations/page.tsx
// Cabinet Cholez-Pagotto - Formations sur-mesure
// Règles : loi 1971, singulier, zéro tiret long, cholez-pagotto.fr

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  BookOpen, Users, CheckCircle, ArrowRight, ChevronDown,
  ChevronRight, Monitor, MapPin, Clock, Star, Award,
  FileText, Shield, Briefcase, Heart, Info, Calendar
} from 'lucide-react'

// ─── SCHEMA.ORG ───
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/formations#service",
      "name": "Formations sur-mesure - Droit, RGPD, assurances",
      "description": "Formations sur-mesure pour entreprises, associations et structures ESS. Droit du travail, RGPD et protection des données, gouvernance associative, formalités administratives, assurances. Présentiel ou distanciel, individuel ou collectif.",
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
      "serviceType": "Formation professionnelle sur-mesure",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": {
        "@type": "Offer",
        "description": "Sur devis selon la thématique, le format et le nombre de participants",
        "availability": "https://schema.org/InStock"
      },
      "url": "https://cholez-pagotto.fr/formations"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/formations#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Les formations sont-elles disponibles à distance ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Les formations sont disponibles en présentiel (dans vos locaux ou dans un lieu de votre choix) et en distanciel (visioconférence). Le format est défini lors de l'audit des besoins préalable à la proposition commerciale."
          }
        },
        {
          "@type": "Question",
          "name": "Les formations peuvent-elles être financées par l'OPCO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le financement dépend du statut du prestataire de formation et de votre OPCO. Notre juriste vous informe sur les modalités de financement applicables à votre situation lors du premier contact. Pour les associations, des financements spécifiques (FDVA, DREETS) peuvent s'appliquer."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la durée d'une formation type ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La durée est définie sur-mesure selon vos besoins et vos contraintes. Une demi-journée (3h30) convient pour une sensibilisation. Une journée (7h) permet d'aborder un thème en profondeur. Un parcours multi-sessions est recommandé pour une mise en conformité complète (RGPD, par exemple). La durée est proposée après l'audit des besoins."
          }
        },
        {
          "@type": "Question",
          "name": "Quels thèmes peuvent être abordés dans une formation sur-mesure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les thématiques couvertes incluent le droit du travail (droits et obligations de l'employeur, gestion des contrats, rupture), le RGPD et la protection des données personnelles, la gouvernance associative et ESS, les formalités administratives et juridiques, les assurances professionnelles et la prévention des risques. Les programmes sont construits à partir d'un audit préalable de vos besoins spécifiques."
          }
        },
        {
          "@type": "Question",
          "name": "Quel support documentaire est fourni après la formation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chaque formation est accompagnée d'un support documentaire au format numérique (PDF ou DOCX) remis aux participants. Ce support comprend les points clés abordés, les textes de référence, des fiches pratiques et, selon la thématique, des modèles de documents. Un suivi post-formation peut être proposé selon les besoins."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/formations#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Formations", "item": "https://cholez-pagotto.fr/formations" }
      ]
    }
  ]
}

// ─── DONNÉES ───
const thematiques = [
  {
    id: "droit-travail",
    titre: "Droit du travail",
    icone: <Briefcase size={22} strokeWidth={1.5} />,
    couleur: "#0f2d6e",
    fond: "#eff6ff",
    cibles: ["Dirigeants d'entreprise", "Managers RH", "Associations employeuses"],
    modules: [
      "Le contrat de travail : types, clauses essentielles, modifications",
      "Droits et obligations de l'employeur",
      "Gestion des absences : maladie, congés, accidents du travail",
      "Rupture du contrat : licenciement, rupture conventionnelle, démission",
      "Harcèlement moral et sexuel : prévention et obligations légales",
      "Représentation du personnel : CSE, obligations selon effectif"
    ],
    duree: "1 journée à 2 journées selon les modules retenus",
    textes: "Code du travail, jurisprudence Cour de cassation"
  },
  {
    id: "rgpd",
    titre: "RGPD et protection des données",
    icone: <Shield size={22} strokeWidth={1.5} />,
    couleur: "#7c3aed",
    fond: "#f5f3ff",
    cibles: ["Toute structure traitant des données personnelles", "Responsables de traitement", "Equipes opérationnelles"],
    modules: [
      "Fondamentaux du RGPD : principes, bases légales, droits des personnes",
      "Cartographie des traitements et registre des activités",
      "Sécurité des données : obligations et mesures pratiques",
      "Gestion des violations de données (fuite, piratage)",
      "Droits des personnes : accès, rectification, effacement, portabilité",
      "Mise en conformité pas-à-pas : priorités et plan d'action"
    ],
    duree: "Demi-journée (sensibilisation) ou 1 à 2 journées (mise en conformité)",
    textes: "Règlement (UE) 2016/679 (RGPD), loi n°2018-493 du 20 juin 2018, délibérations CNIL"
  },
  {
    id: "gouvernance-asso",
    titre: "Gouvernance associative et ESS",
    icone: <Heart size={22} strokeWidth={1.5} />,
    couleur: "#16a34a",
    fond: "#f0fdf4",
    cibles: ["Administrateurs d'associations", "Dirigeants ESS", "Bénévoles en responsabilité"],
    modules: [
      "Les fondamentaux de la loi 1901 et du droit associatif",
      "Gouvernance : statuts, règlement intérieur, prise de décision",
      "Assemblée générale : organisation, quorum, procès-verbaux",
      "Responsabilité des dirigeants associatifs",
      "Gestion financière et comptable d'une association",
      "Spécificités ESS : loi 2014-856, agrément ESUS, coopératives"
    ],
    duree: "1 journée ou parcours multi-sessions",
    textes: "Loi du 1er juillet 1901, loi n°2014-856 du 31 juillet 2014, Code général des impôts"
  },
  {
    id: "formalites",
    titre: "Formalités administratives et juridiques",
    icone: <FileText size={22} strokeWidth={1.5} />,
    couleur: "#b45309",
    fond: "#fffbeb",
    cibles: ["Porteurs de projet", "Responsables administratifs", "Secrétaires généraux"],
    modules: [
      "Créer son entreprise : formes juridiques, Guichet Unique, étapes",
      "Modifier une société ou une association : démarches et délais",
      "Rédiger des actes : PV d'AG, décisions d'associé unique, procurations",
      "Comprendre les documents officiels : Kbis, extrait SIRENE, statuts",
      "Interactions avec les administrations : greffe, préfecture, INPI",
      "Digitalisation des formalités : outils et bonnes pratiques"
    ],
    duree: "Demi-journée à 1 journée",
    textes: "Code de commerce, loi du 1er juillet 1901, règlements INPI"
  },
  {
    id: "assurances",
    titre: "Assurances professionnelles",
    icone: <Award size={22} strokeWidth={1.5} />,
    couleur: "#0891b2",
    fond: "#ecfeff",
    cibles: ["Dirigeants d'entreprise", "Associations", "Professions libérales"],
    modules: [
      "Les assurances obligatoires et recommandées par activité",
      "RC Pro : garanties, exclusions, déclarations de sinistre",
      "Assurance des locaux et du matériel professionnel",
      "Protection sociale du dirigeant : prévoyance, santé",
      "Lire et comprendre un contrat d'assurance",
      "Gérer un sinistre : démarches, délais, recours"
    ],
    duree: "Demi-journée",
    textes: "Code des assurances, Directive DDA, ORIAS n°26003943"
  }
]

const etapesFormation = [
  {
    num: "01",
    titre: "Audit des besoins",
    desc: "Premier échange (téléphone ou visioconférence) pour comprendre votre structure, vos équipes, vos objectifs et vos contraintes. Gratuit et sans engagement."
  },
  {
    num: "02",
    titre: "Programme sur-mesure",
    desc: "Notre juriste conçoit un programme adapté à vos besoins : thématiques, niveau, durée, format (présentiel ou distanciel), nombre de participants."
  },
  {
    num: "03",
    titre: "Proposition et devis",
    desc: "Vous recevez un programme détaillé et un devis transparent. Aucun frais caché. Le tarif dépend de la durée, du format et du nombre de sessions."
  },
  {
    num: "04",
    titre: "Animation de la formation",
    desc: "Notre juriste anime la formation avec des exemples concrets, des cas pratiques et des échanges adaptés au niveau de votre groupe."
  },
  {
    num: "05",
    titre: "Support documentaire",
    desc: "Chaque participant reçoit un support numérique complet : points clés, textes de référence, fiches pratiques, modèles de documents selon la thématique."
  },
  {
    num: "06",
    titre: "Evaluation et suivi",
    desc: "Un questionnaire d'évaluation mesure la satisfaction et les acquis. Un suivi post-formation peut être proposé pour accompagner la mise en pratique."
  }
]

const faqs = [
  {
    q: "Les formations sont-elles disponibles à distance ?",
    r: "Oui. Les formations sont disponibles en présentiel (dans vos locaux ou dans un lieu de votre choix) et en distanciel (visioconférence). Le format est défini lors de l'audit des besoins préalable à la proposition commerciale."
  },
  {
    q: "Les formations peuvent-elles être financées par l'OPCO ?",
    r: "Le financement dépend du statut du prestataire de formation et de votre OPCO. Notre juriste vous informe sur les modalités applicables à votre situation lors du premier contact. Pour les associations, des financements spécifiques (FDVA, DREETS) peuvent s'appliquer selon votre région."
  },
  {
    q: "Quelle est la durée d'une formation type ?",
    r: "La durée est définie sur-mesure. Une demi-journée (3h30) convient pour une sensibilisation. Une journée (7h) permet d'aborder un thème en profondeur. Un parcours multi-sessions est recommandé pour une mise en conformité complète (RGPD, par exemple). La durée est proposée après l'audit des besoins."
  },
  {
    q: "Quelle est la taille idéale du groupe ?",
    r: "Les formations fonctionnent de 1 à 20 participants selon les thématiques. Au-delà de 15 participants, une animation en sous-groupes peut être proposée pour favoriser les échanges. Les formations individuelles ou en binôme sont également possibles."
  },
  {
    q: "Quel support documentaire est fourni ?",
    r: "Chaque formation est accompagnée d'un support documentaire numérique (PDF ou DOCX) remis aux participants. Ce support comprend les points clés abordés, les textes de référence, des fiches pratiques et, selon la thématique, des modèles de documents. Un suivi post-formation peut être proposé."
  },
  {
    q: "La formation RGPD est-elle applicable aux associations ?",
    r: "Oui. Le RGPD s'applique à toute organisation qui traite des données personnelles, y compris les associations. La formation RGPD est spécifiquement adaptée pour les associations lors de l'audit des besoins : traitements courants (adhérents, bénévoles, donateurs), base légale applicable, et obligations spécifiques au secteur associatif."
  }
]

// ─── COMPOSANT ───
export default function FormationsPage() {
  const [faqOuverte, setFaqOuverte] = useState<number | null>(null)
  const [thematiqueActive, setThematiqueActive] = useState<number>(0)

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
            <span style={{ color: '#374151', fontWeight: 600 }}>Formations</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 70%, #7c3aed 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Sur devis
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Formations sur-mesure<br />
              Droit, RGPD, assurances et formalités
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', maxWidth: 620, marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Programmes construits à partir de vos besoins réels. Présentiel ou distanciel,
              individuel ou collectif. Entreprises, associations, professions libérales,
              structures ESS : notre juriste forme vos équipes aux thématiques juridiques et réglementaires.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#d4a017', color: 'white', textDecoration: 'none',
                padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem'
              }}>
                Demander un devis <ArrowRight size={18} />
              </a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "5", label: "Thématiques disponibles" },
                { valeur: "2", label: "Formats : présentiel et distanciel" },
                { valeur: "Sur devis", label: "Tarification transparente" },
                { valeur: "Support", label: "Documentaire inclus" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c4b5fd' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* THEMATIQUES */}
          <section id="thematiques" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Thématiques de formation
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Chaque programme est construit sur-mesure à partir de vos besoins.
              Les modules ci-dessous sont indicatifs et peuvent être combinés ou adaptés.
            </p>

            {/* Onglets */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {thematiques.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setThematiqueActive(i)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    padding: '8px 16px', borderRadius: 20,
                    border: thematiqueActive === i ? 'none' : '1px solid #e5e7eb',
                    background: thematiqueActive === i ? thematiques[i].couleur : 'white',
                    color: thematiqueActive === i ? 'white' : '#374151',
                    fontSize: 13, fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {t.titre}
                </button>
              ))}
            </div>

            <div style={{
              background: 'white', border: '1px solid #e5e7eb', borderRadius: 12,
              overflow: 'hidden'
            }}>
              <div style={{
                background: thematiques[thematiqueActive].fond,
                borderBottom: `3px solid ${thematiques[thematiqueActive].couleur}`,
                padding: '1.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ color: thematiques[thematiqueActive].couleur }}>
                    {thematiques[thematiqueActive].icone}
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>
                    {thematiques[thematiqueActive].titre}
                  </h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cibles</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.3rem' }}>
                      {thematiques[thematiqueActive].cibles.map((c, i) => (
                        <span key={i} style={{ fontSize: 11, fontWeight: 600, background: 'white', color: thematiques[thematiqueActive].couleur, padding: '2px 10px', borderRadius: 20, border: `1px solid ${thematiques[thematiqueActive].couleur}40` }}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duree indicative</span>
                    <div style={{ fontSize: 12, color: '#374151', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Clock size={13} strokeWidth={1.5} />
                      {thematiques[thematiqueActive].duree}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Textes de reference</span>
                    <div style={{ fontSize: 12, color: '#374151', marginTop: '0.3rem' }}>{thematiques[thematiqueActive].textes}</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  Modules pouvant être abordés (selon audit des besoins)
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.6rem' }}>
                  {thematiques[thematiqueActive].modules.map((m, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 13, color: '#374151' }}>
                      <CheckCircle size={14} strokeWidth={2} style={{ color: thematiques[thematiqueActive].couleur, marginTop: 2, flexShrink: 0 }} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FORMATS */}
          <section id="formats" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              Formats disponibles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              {[
                { icone: <MapPin size={22} strokeWidth={1.5} />, titre: "Présentiel", desc: "Dans vos locaux ou dans un lieu de votre choix. Partout en France. Adapté aux formations en groupe.", couleur: "#0f2d6e" },
                { icone: <Monitor size={22} strokeWidth={1.5} />, titre: "Distanciel", desc: "Via visioconférence (Teams, Zoom, Google Meet). Idéal pour les équipes réparties géographiquement.", couleur: "#1a4fba" },
                { icone: <Users size={22} strokeWidth={1.5} />, titre: "Collectif", desc: "Jusqu'à 20 participants. Animation adaptée au niveau du groupe, cas pratiques et échanges.", couleur: "#7c3aed" },
                { icone: <BookOpen size={22} strokeWidth={1.5} />, titre: "Individuel", desc: "Formation en tête-à-tête ou en binôme. Rythme adapté, programme entièrement personnalisé.", couleur: "#16a34a" }
              ].map((f, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
                  <div style={{ color: f.couleur, marginBottom: '0.75rem' }}>{f.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.4rem' }}>{f.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ETAPES */}
          <section id="processus" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              De l'audit à la formation : comment ça se passe ?
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un processus structuré pour que la formation réponde vraiment à vos besoins.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>
              {etapesFormation.map((e, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: i % 2 === 0 ? '#0f2d6e' : '#7c3aed' }} />
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f3f4f6', marginBottom: '0.5rem' }}>{e.num}</div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.4rem' }}>{e.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{
            background: 'linear-gradient(135deg, #0f2d6e 0%, #7c3aed 100%)',
            borderRadius: 16, padding: '2.5rem 2rem', marginBottom: '3.5rem',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', color: 'white'
          }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#c4b5fd', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sur devis</div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Vous avez un besoin de formation ?</h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Décrivez votre structure, vos besoins et vos contraintes. Notre juriste revient vers vous sous 24 à 48h ouvrées.
              </p>
            </div>
            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#d4a017', color: 'white', textDecoration: 'none',
              padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', whiteSpace: 'nowrap'
            }}>
              Demander un devis <ArrowRight size={18} />
            </a>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Questions fréquentes sur les formations
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus courantes.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                  <button
                    onClick={() => setFaqOuverte(faqOuverte === i ? null : i)}
                    style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '1rem' }}
                  >
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f2d6e', lineHeight: 1.4 }}>{faq.q}</span>
                    <ChevronDown size={18} strokeWidth={2} style={{ color: '#1a4fba', flexShrink: 0, transform: faqOuverte === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                  </button>
                  {faqOuverte === i && (
                    <div style={{ padding: '0 1.5rem 1.1rem', fontSize: 13, color: '#374151', lineHeight: 1.7, borderTop: '1px solid #f3f4f6' }}>
                      <div style={{ paddingTop: '1rem' }}>{faq.r}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* AUTEUR */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=80" alt="François Cholez, juriste formateur" style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #eff6ff', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['Juriste', 'Formaliste CRFF', 'Formateur', 'Chercheur associé'].map((badge, i) => (
                  <span key={i} style={{ background: '#eff6ff', color: '#1a4fba', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{badge}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>François CHOLEZ</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Juriste · Formaliste · Conseil en assurances. Membre du CRFF (Conseil Représentatif des Formalistes de France).
                Chercheur associé, contributeur aux ouvrages{' '}
                <em>«&nbsp;L'éducation, ça se partage&nbsp;?&nbsp;»</em> (L'Harmattan, 2021)
                {' '}et <em>«&nbsp;Agir en situation de discrédit&nbsp;»</em> (Le Cavalier Bleu, 2026).
                Investi dans des instances de gouvernance associative à différents échelons. Co-fondateur et secrétaire national d'un fonds de dotation. Plus de 30 ans d'engagement dans l'ESS.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}