// app/rgpd-conformite/diagnostic-essentiel/page.tsx
// Cabinet Cholez-Pagotto - Page produit Diagnostic RGPD Essentiel (350 euros)
// Server component (export metadata). L'interactivite paiement est dans le composant client enfant.
// Regles : zero tiret long, cholez-pagotto.fr, Notre juriste singulier, NBSP avant euro.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DiagnosticCommande from '@/components/DiagnosticCommande'
import { CheckCircle, X, ChevronRight, Info, Clock, FileText, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: "Diagnostic RGPD Essentiel · 350\u00a0€ · Cabinet Cholez-Pagotto",
  description: "Commandez votre Diagnostic RGPD Essentiel à 350\u00a0€, livrable sous 15 jours. Cartographie simplifiée des traitements, analyse des écarts, rapport de conformité priorisé. Paiement par carte bancaire ou virement.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel#service",
      "name": "Diagnostic RGPD Essentiel",
      "description": "Diagnostic de conformité RGPD pour micro-entreprise, freelance et petite association (moins de 5 traitements). Cartographie simplifiée des traitements, analyse des écarts au regard du RGPD et de la loi Informatique et Libertés, hiérarchisation des actions, rapport écrit synthétique. Livrable sous 15 jours à compter de la réception de vos réponses.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Diagnostic de conformité RGPD",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": {
        "@type": "Offer",
        "name": "Diagnostic RGPD Essentiel",
        "price": "350",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel",
        "description": "Paiement par carte bancaire ou virement. Livrable sous 15 jours."
      },
      "url": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "RGPD & conformité", "item": "https://cholez-pagotto.fr/rgpd-conformite" },
        { "@type": "ListItem", "position": 3, "name": "Diagnostic Essentiel", "item": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-essentiel" }
      ]
    }
  ]
}

const inclus = [
  "Questionnaire de cadrage et échange initial par email",
  "Analyse de vos réponses, de vos outils et de votre site",
  "Cartographie simplifiée des traitements (finalités, bases légales, durées, destinataires)",
  "Analyse des écarts au regard du RGPD et de la loi Informatique et Libertés",
  "Hiérarchisation des actions par niveau de risque",
  "Rapport écrit synthétique avec recommandations priorisées",
  "Restitution commentée par email"
]

const nonInclus = [
  "Entretien visio de cadrage (inclus dans le forfait Standard)",
  "Restitution en visio (incluse dans le forfait Standard)"
]

export default function DiagnosticEssentielPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* Breadcrumb */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0.6rem 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem' }}>
          <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 13, color: '#6b7280', flexWrap: 'wrap' }}>
            <a href="/" style={{ color: '#1a4fba', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={14} />
            <a href="/rgpd-conformite" style={{ color: '#1a4fba', textDecoration: 'none' }}>RGPD & conformité</a>
            <ChevronRight size={14} />
            <span style={{ color: '#374151', fontWeight: 600 }}>Diagnostic Essentiel</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #7c3aed 100%)', padding: '3.5rem 1.5rem 3rem', color: 'white' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Diagnostic RGPD Essentiel
            </span>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Évaluez votre conformité RGPD en 15 jours
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Le forfait pensé pour les micro-entreprises, freelances et petites associations de moins de cinq traitements.
              Vous obtenez une cartographie simplifiée, une analyse des écarts et un rapport priorisé. Réglable par carte bancaire ou virement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'baseline' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 800, color: 'white' }}>350&nbsp;€</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>forfait unique</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                <Clock size={16} strokeWidth={1.5} /> Livrable sous 15 jours
              </div>
            </div>
          </div>
        </section>

        {/* ENCART REGLEMENTAIRE */}
        <div style={{ background: '#f5f3ff', borderBottom: '1px solid #e9d5ff', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le Diagnostic RGPD Essentiel constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971
              et ne constitue pas une consultation juridique personnalisée. Tarif affiché en montant net, le cabinet n'étant pas assujetti à la TVA.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

            {/* COLONNE GAUCHE : CE QUI EST INCLUS */}
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} strokeWidth={1.75} style={{ color: '#7c3aed' }} /> Ce que comprend le forfait
              </h2>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {inclus.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 13, color: '#374151', lineHeight: 1.55 }}>
                      <CheckCircle size={16} strokeWidth={2} style={{ color: '#16a34a', flexShrink: 0, marginTop: 1 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: '1px solid #f3f4f6', marginTop: '1rem', paddingTop: '1rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {nonInclus.map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: 12.5, color: '#9ca3af', lineHeight: 1.55 }}>
                        <X size={15} strokeWidth={2} style={{ color: '#d1d5db', flexShrink: 0, marginTop: 1 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '1.25rem', marginTop: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <FileText size={18} strokeWidth={1.5} style={{ color: '#0f2d6e', flexShrink: 0, marginTop: 1 }} />
                <div>
                  <p style={{ fontSize: 12.5, fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>Comment ça se passe ensuite ?</p>
                  <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                    Dès votre paiement (ou la réception de votre virement), vous recevez par email le questionnaire de cadrage.
                    Notre juriste analyse vos réponses et vous remet le rapport sous 15 jours à compter de la réception de vos réponses. Le rapport est également mis à disposition dans votre espace client.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, marginTop: '1.25rem' }}>
                Votre structure compte plus de cinq traitements ou traite des données sensibles ?
                Le forfait <a href="/rgpd-conformite#tarifs" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Standard ou Approfondi</a> est plus adapté.
              </p>
            </section>

            {/* COLONNE DROITE : COMMANDE */}
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1rem' }}>
                Commander mon Diagnostic
              </h2>
              <DiagnosticCommande forfait="essentiel" />
            </section>

          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}