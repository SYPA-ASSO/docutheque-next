// app/accompagnement-professionnels/page.tsx
// Cabinet Cholez-Pagotto - Hub Professionnels
// Page hub : tous les services disponibles pour les professionnels

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Building2, FileText, Shield, BookOpen, Scale,
  ArrowRight, ChevronRight, CheckCircle, ExternalLink, Info
} from 'lucide-react'

export const metadata = {
  title: "Accompagnement professionnels · Cabinet Cholez-Pagotto",
  description: "Tous les services du Cabinet Cholez-Pagotto pour les professionnels : création d'entreprise (offerte), formalités de modification, information juridique, conseil en assurances, RGPD, DPO externalisé, formations sur-mesure.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/accompagnement-professionnels',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/accompagnement-professionnels#service",
      "name": "Accompagnement professionnels - Cabinet Cholez-Pagotto",
      "description": "Accompagnement des professionnels, entrepreneurs et dirigeants : formalités de création et de modification d'entreprise (CRFF), information juridique, conseil en assurances (ORIAS 26003943), RGPD, DPO externalisé, formations sur-mesure.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Accompagnement professionnel pluridisciplinaire",
      "areaServed": { "@type": "Country", "name": "France" },
      "url": "https://cholez-pagotto.fr/accompagnement-professionnels"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/accompagnement-professionnels#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Professionnels", "item": "https://cholez-pagotto.fr/accompagnement-professionnels" }
      ]
    }
  ]
}

const services = [
  {
    groupe: "Formalités juridiques",
    couleurGroupe: "#0f2d6e",
    items: [
      {
        titre: "Création d'entreprise",
        badge: "Offert",
        badgeColor: "#d4a017",
        href: "/creation-entreprise",
        description: "Préparation et assistance à la rédaction des statuts, constitution du dossier, dépôt au Guichet Unique. SASU, SARL, SAS, EURL, micro-entreprise, SCI. Formalités offertes hors droits de greffe et frais JAL.",
        points: [
          "Préparation et assistance à la rédaction des statuts",
          "Dépôt au Guichet Unique (INPI)",
          "Suivi jusqu'au Kbis",
          "Comparatif des formes juridiques",
        ],
        couleur: "#0f2d6e",
      },
      {
        titre: "Vie des entreprises",
        badge: "Sur devis",
        badgeColor: "#1a4fba",
        href: "/vie-des-entreprises",
        description: "Toutes les formalités après la création : modification des statuts, changement de dirigeant, cession de parts, transfert de siège, augmentation de capital, dissolution et radiation.",
        points: [
          "Modifications statutaires",
          "Changement de gérant / président",
          "Cession de parts ou actions",
          "Dissolution et liquidation",
        ],
        couleur: "#1a4fba",
      },
      {
        titre: "Formalités externalisées",
        badge: "À la carte",
        badgeColor: "#1a4fba",
        href: "/formalites-juridiques-externalisees",
        description: "Pour les avocats, experts-comptables et professionnels qui délèguent l'exécution de leurs formalités. Intervention en marque blanche, à partir des actes que vous fournissez. Le cabinet agit en sous-traitant (RGPD art. 28).",
        points: [
          "Immatriculations, modifications, cessations",
          "Dépôts de comptes et bénéficiaires effectifs",
          "Intervention en marque blanche",
          "Engagement de confidentialité",
        ],
        couleur: "#1a4fba",
      },
    ],
  },
  {
    groupe: "Information juridique",
    couleurGroupe: "#7c3aed",
    items: [
      {
        titre: "Information sur vos droits",
        badge: "47 €",
        badgeColor: "#0f2d6e",
        href: "/information-sur-vos-droits",
        description: "Vous posez votre question juridique. Notre juriste identifie les textes et règles applicables à votre situation et vous apporte une réponse documentée sous 24 à 48h ouvrées.",
        points: [
          "Droit du travail, contrats, sociétés",
          "Droit fiscal, administratif, social",
          "Réponse 100 % humaine, aucune IA",
          "Références aux textes applicables",
        ],
        couleur: "#7c3aed",
      },
      {
        titre: "Bibliothèque de documents",
        badge: "Dès 17,90 €/mois",
        badgeColor: "#7c3aed",
        href: "/catalogue",
        description: "Accès à la bibliothèque de modèles juridiques en DOCX, personnalisables et tenus à jour : statuts, contrats, RGPD, registres, courriers types.",
        points: [
          "Modèles DOCX prêts à personnaliser",
          "Statuts, contrats, RGPD, registres",
          "Mises à jour incluses",
          "Sans engagement",
        ],
        couleur: "#7c3aed",
      },
    ],
  },
  {
    groupe: "Assurances professionnelles",
    couleurGroupe: "#065f46",
    items: [
      {
        titre: "Conseil en assurances",
        badge: "90 € particulier · 150 € pro",
        badgeColor: "#065f46",
        href: "/conseil-assurances",
        description: "Audit de vos contrats existants, comparaison des offres du marché, rapport de conseil écrit et motivé. RC Pro, multirisques professionnelle, prévoyance collective, assurance des dirigeants. ORIAS n°26003943.",
        points: [
          "RC Pro et multirisques professionnelle",
          "Prévoyance : arrêt maladie, invalidité, décès",
          "Conseil multimarque, rapport écrit",
          "Conforme art. L.521-4 Code des assurances",
        ],
        couleur: "#065f46",
      },
    ],
  },
  {
    groupe: "Conformité et données personnelles",
    couleurGroupe: "#7c3aed",
    items: [
      {
        titre: "RGPD & conformité",
        badge: "Sur devis",
        badgeColor: "#7c3aed",
        href: "/rgpd-conformite",
        description: "Diagnostic documentaire, registre des activités de traitement, politique de confidentialité, mentions d'information, gestion des violations de données. Toutes les structures sont concernées.",
        points: [
          "Diagnostic et registre des traitements",
          "Politique de confidentialité",
          "Mentions d'information conformes CNIL",
          "Gestion des violations (art. 33 RGPD)",
        ],
        couleur: "#7c3aed",
      },
      {
        titre: "DPO externalisé",
        badge: "Annuel · sur devis",
        badgeColor: "#4c1d95",
        href: "/dpo-externalise",
        description: "Mission de Délégué à la Protection des Données externalisé (art. 37.6 RGPD). Désignation auprès de la CNIL, veille réglementaire, interlocuteur des personnes concernées, gestion des incidents.",
        points: [
          "Désignation officielle auprès de la CNIL",
          "Veille réglementaire permanente",
          "Gestion des incidents en 72h",
          "Indépendance structurelle garantie",
        ],
        couleur: "#4c1d95",
      },
    ],
  },
  {
    groupe: "Formation",
    couleurGroupe: "#0891b2",
    items: [
      {
        titre: "Formations sur-mesure",
        badge: "Sur devis",
        badgeColor: "#0891b2",
        href: "/formations",
        description: "Programmes construits à partir de vos besoins réels. Droit du travail, RGPD, formalités juridiques, assurances professionnelles. Présentiel ou distanciel, individuel ou collectif.",
        points: [
          "Droit du travail pour dirigeants et RH",
          "RGPD et protection des données",
          "Assurances professionnelles",
          "Audit préalable des besoins inclus",
        ],
        couleur: "#0891b2",
      },
    ],
  },
]

export default function AccompagnementProfessionnelsPage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>Professionnels</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Professionnels
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Accompagnement des professionnels<br />
              de la création à la conformité
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Formalités juridiques (formaliste CRFF), information sur vos droits, conseil en assurances réglementé,
              mise en conformité RGPD, DPO externalisé et formations sur-mesure.
              Un seul interlocuteur pour l'ensemble de vos besoins juridiques et réglementaires.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "9", label: "Services disponibles" },
                { valeur: "CRFF", label: "Formaliste certifié" },
                { valeur: "ORIAS", label: "26003943 · IAS Niveau 1" },
                { valeur: "France", label: "Accompagnement à distance" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#93c5fd' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENCART LOI 1971 */}
        <div style={{ background: '#eff6ff', borderBottom: '1px solid #bfdbfe', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le service d'information juridique est proposé au sens de la loi n°71-1130 du 31 décembre 1971
              et ne constitue pas une consultation juridique personnalisée. Le cas échéant, vous serez orienté
              vers le professionnel du droit compétent.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* SERVICES PAR GROUPE */}
          {services.map((groupe, gi) => (
            <section key={gi} style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: 4, height: 24, background: groupe.couleurGroupe, borderRadius: 2 }} />
                <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>
                  {groupe.groupe}
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
                {groupe.items.map((service, si) => (
                  <div key={si} style={{
                    background: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: 14,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    borderTop: `4px solid ${service.couleur}`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: 0, lineHeight: 1.3 }}>
                        {service.titre}
                      </h3>
                      <span style={{
                        background: service.badgeColor + '18',
                        color: service.badgeColor,
                        fontSize: 10,
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: 12,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        marginLeft: '0.5rem',
                        border: `1px solid ${service.badgeColor}30`
                      }}>
                        {service.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
                      {service.description}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {service.points.map((point, pi) => (
                        <li key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#6b7280' }}>
                          <CheckCircle size={13} strokeWidth={2} style={{ color: service.couleur, marginTop: 2, flexShrink: 0 }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a href={service.href} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: service.couleur, color: 'white', textDecoration: 'none',
                      padding: '10px 18px', borderRadius: 8, fontWeight: 700, fontSize: '0.8rem',
                      alignSelf: 'flex-start'
                    }}>
                      En savoir plus <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* CARTE PAIE ET DSN */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 4, height: 24, background: '#6b7280', borderRadius: 2 }} />
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>
                Paie et DSN
              </h2>
            </div>
            <div style={{
              background: 'white', border: '1px solid #e5e7eb', borderRadius: 14,
              padding: '1.5rem', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap',
              borderTop: '4px solid #6b7280'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Paie et DSN</h3>
                  <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 10, border: '1px solid #e5e7eb' }}>
                    Site dédié
                  </span>
                </div>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0, maxWidth: 600 }}>
                  Externalisation de la paie, établissement des bulletins de salaire et production des Déclarations Sociales Nominatives (DSN).
                  Ce service est disponible sur un site dédié.
                </p>
              </div>
              <a
                href="https://www.paie-et-dsn.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  background: '#f8fafc', color: '#374151', textDecoration: 'none',
                  padding: '10px 18px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem',
                  border: '1px solid #e5e7eb', whiteSpace: 'nowrap', flexShrink: 0
                }}
              >
                paie-et-dsn.fr <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* AUTEUR */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <img
              src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=80"
              alt="François Cholez, juriste formaliste Cabinet Cholez-Pagotto"
              style={{ width: 80, height: 80, borderRadius: '50%', border: '3px solid #eff6ff', flexShrink: 0 }}
            />
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {['Juriste', 'Formaliste CRFF', 'ORIAS 26003943', 'Sous contrôle ACPR'].map((badge, i) => (
                  <span key={i} style={{ background: '#eff6ff', color: '#1a4fba', fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{badge}</span>
                ))}
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>François CHOLEZ</h3>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Juriste formaliste, membre du CRFF. Intermédiaire en assurances immatriculé à l'ORIAS sous le numéro 26003943,
                sous contrôle de l'ACPR, adhérent ENDYA. Accompagnement des professionnels et dirigeants
                dans leurs formalités juridiques, leur conformité réglementaire et leur stratégie assurantielle.
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
                { label: 'Catalogue de documents', href: '/catalogue' },
                { label: "Création d'entreprise", href: '/creation-entreprise' },
                { label: 'RGPD & conformité', href: '/rgpd-conformite' },
                { label: 'Juriste ou avocat ?', href: '/juriste-formaliste-ou-avocat' },
                { label: 'Tous nos services', href: '/services' },
                { label: 'Nous contacter', href: '/contact' },
              ].map((l) => (
                <a key={l.href} href={l.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 999, padding: '8px 16px', fontSize: '13px', color: '#1a4fba', fontWeight: 600, textDecoration: 'none' }}>
                  {l.label}<span aria-hidden="true" style={{ marginLeft: '2px' }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}