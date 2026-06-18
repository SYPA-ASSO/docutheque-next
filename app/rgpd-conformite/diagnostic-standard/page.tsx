// app/rgpd-conformite/diagnostic-standard/page.tsx
// Cabinet Cholez-Pagotto - Page produit Diagnostic RGPD Standard (900 euros)
// Server component (export metadata). L'interactivite paiement est dans le composant client enfant.
// Regles : zero tiret long, cholez-pagotto.fr, Notre juriste singulier, NBSP avant euro.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import DiagnosticCommande from '@/components/DiagnosticCommande'
import { CheckCircle, X, ChevronRight, Info, Clock, FileText, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: "Diagnostic RGPD Standard · 900\u00a0€ · Cabinet Cholez-Pagotto",
  description: "Commandez votre Diagnostic RGPD Standard à 900\u00a0€, livrable sous 30 jours. Entretien visio de cadrage, cartographie complète des traitements, analyse des écarts, rapport rédigé, restitution en visio. Paiement par carte bancaire ou virement.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard',
  },
}

const faq = [
  {
    q: "À qui s'adresse le Diagnostic RGPD Standard ?",
    r: "Il s'adresse aux TPE, aux associations établies et aux professions libérales qui mettent en œuvre cinq à quinze traitements de données : clients, fournisseurs, salariés ou bénévoles, prospection, site web. En deçà, l'Essentiel suffit ; au-delà, l'Approfondi est plus adapté."
  },
  {
    q: "L'entretien de cadrage et la restitution sont-ils inclus en visio ?",
    r: "Oui, et c'est la principale différence avec l'Essentiel. Le Standard comprend un entretien de cadrage en visio en début de mission et une restitution commentée en visio à la remise du rapport, pour échanger directement sur les constats et les priorités."
  },
  {
    q: "Sous combien de temps je reçois mon rapport ?",
    r: "Le rapport vous est remis sous trente jours à compter de la réception de vos réponses au questionnaire et de l'entretien de cadrage. Le délai court à partir de ces éléments, afin que l'analyse soit menée sur une base complète."
  },
  {
    q: "Comment se déroule la démarche après la commande ?",
    r: "Après votre paiement ou votre virement, vous recevez le questionnaire de cadrage et nous planifions l'entretien visio. Notre juriste analyse vos traitements, vos outils et votre site, rédige le rapport, puis vous le restitue en visio. Le rapport est également déposé dans votre espace client."
  },
  {
    q: "Quelle différence avec l'Essentiel et l'Approfondi ?",
    r: "L'Essentiel est une version simplifiée, par email, pour les très petites structures de moins de cinq traitements. L'Approfondi, sur devis, vise les organisations plus complexes ou à risque, avec une cartographie multi-niveaux et un rapport étendu. Le Standard se situe entre les deux."
  },
  {
    q: "Suis-je obligé de désigner un DPO ?",
    r: "Rarement. La désignation d'un délégué à la protection des données n'est obligatoire que dans trois cas : les autorités et organismes publics, le suivi régulier et systématique des personnes à grande échelle, et le traitement à grande échelle de données sensibles. La plupart des TPE et associations n'y sont donc pas tenues, même si un référent interne reste recommandé."
  },
  {
    q: "Quelles sanctions en cas de non-conformité ?",
    r: "Les sanctions peuvent atteindre vingt millions d'euros ou quatre pour cent du chiffre d'affaires annuel mondial. En pratique, pour une petite structure, les sanctions de la CNIL sont proportionnées, mais l'absence de registre ou le défaut de notification d'une violation aggravent sensiblement la situation."
  },
  {
    q: "Puis-je régler par virement ?",
    r: "Oui. À la commande, vous choisissez entre la carte bancaire et le virement. Pour un virement, vous recevez par email nos coordonnées et une référence à indiquer dans le libellé ; le délai démarre à la réception du virement et de vos réponses."
  },
  {
    q: "Le rapport est-il accessible dans mon espace client ?",
    r: "Oui. Un espace client est créé à votre nom lors de la commande. Vous y suivez l'avancement de la mission et vous y téléchargez le rapport une fois déposé, en complément de son envoi par email."
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard#service",
      "name": "Diagnostic RGPD Standard",
      "description": "Diagnostic de conformité RGPD pour TPE, association établie et profession libérale (5 à 15 traitements). Entretien visio de cadrage, cartographie complète des traitements, analyse des écarts au regard du RGPD et de la loi Informatique et Libertés, hiérarchisation des actions, rapport de conformité rédigé, restitution en visio. Livrable sous 30 jours à compter de la réception de vos réponses.",
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
        "name": "Diagnostic RGPD Standard",
        "price": "900",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard",
        "description": "Paiement par carte bancaire ou virement. Livrable sous 30 jours."
      },
      "url": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "RGPD & conformité", "item": "https://cholez-pagotto.fr/rgpd-conformite" },
        { "@type": "ListItem", "position": 3, "name": "Diagnostic Standard", "item": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/diagnostic-standard#faq",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.r }
      }))
    }
  ]
}

const inclus = [
  "Questionnaire de cadrage et entretien visio de cadrage",
  "Analyse de vos réponses, de vos outils et de votre site",
  "Cartographie complète des traitements (finalités, bases légales, durées, destinataires)",
  "Analyse des écarts au regard du RGPD et de la loi Informatique et Libertés",
  "Hiérarchisation des actions par niveau de risque",
  "Rapport de conformité rédigé avec recommandations priorisées",
  "Restitution commentée en visio"
]

const nonInclus = [
  "Cartographie multi-niveaux et rapport étendu (forfait Approfondi)"
]

export default function DiagnosticStandardPage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>Diagnostic Standard</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #7c3aed 100%)', padding: '3.5rem 1.5rem 3rem', color: 'white' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ marginBottom: '1.1rem' }}>
              <a href="/rgpd-conformite#tarifs" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 13, fontWeight: 600 }}>← Voir toutes les formules</a>
            </div>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Diagnostic RGPD Standard
            </span>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Un diagnostic RGPD complet, restitution en visio incluse
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Le forfait pensé pour les TPE, associations établies et professions libérales de cinq à quinze traitements.
              Entretien de cadrage et restitution en visio, cartographie complète, rapport rédigé. Réglable par carte bancaire ou virement.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'baseline' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                <span style={{ fontSize: '2.6rem', fontWeight: 800, color: 'white' }}>900&nbsp;€</span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>forfait unique</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
                <Clock size={16} strokeWidth={1.5} /> Livrable sous 30 jours
              </div>
            </div>
          </div>
        </section>

        {/* ENCART REGLEMENTAIRE */}
        <div style={{ background: '#f5f3ff', borderBottom: '1px solid #e9d5ff', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le Diagnostic RGPD Standard constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971
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
                    Après l'entretien visio et l'analyse de vos réponses, notre juriste vous remet le rapport sous 30 jours à compter de la réception de vos réponses. Le rapport est également mis à disposition dans votre espace client.
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, marginTop: '1.25rem' }}>
                Moins de cinq traitements ? Le forfait <a href="/rgpd-conformite/diagnostic-essentiel" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Essentiel à 350&nbsp;€</a> suffit.
                Plus de quinze traitements ou données sensibles ? Le forfait <a href="/rgpd-conformite#tarifs" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Approfondi</a> est plus adapté.
              </p>
            </section>

            {/* COLONNE DROITE : COMMANDE */}
            <section>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1rem' }}>
                Commander mon Diagnostic
              </h2>
              <DiagnosticCommande forfait="standard" />
            </section>

          </div>

        </div>

        {/* FAQ */}
        <section style={{ background: 'white', borderTop: '1px solid #e5e7eb', padding: '3rem 1.5rem' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1.5rem' }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faq.map((item, i) => (
                <details key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 10, padding: '1rem 1.25rem' }}>
                  <summary style={{ fontSize: 14, fontWeight: 600, color: '#0f2d6e', cursor: 'pointer' }}>{item.q}</summary>
                  <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: '0.75rem 0 0' }}>{item.r}</p>
                </details>
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