// app/vie-des-entreprises/page.tsx
// Cabinet Cholez-Pagotto - Vie des entreprises
// Modifications, cessions, dissolution, radiation

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, ChevronRight, FileText, Building2, Info, AlertCircle } from 'lucide-react'

export const metadata = {
  title: "Vie des entreprises · Modifications, cessions, dissolution · Cabinet Cholez-Pagotto",
  description: "Formalités de modification d'entreprise : changement de dénomination, objet, siège, dirigeants, cession de parts, augmentation de capital, dissolution, radiation. Juriste formaliste CRFF. Partout en France.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/vie-des-entreprises',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/vie-des-entreprises#service",
      "name": "Vie des entreprises - Modifications et formalités juridiques",
      "description": "Formalités de modification pour toutes formes d'entreprises : changement de dénomination, objet social, siège, gérant ou président, cession de parts ou actions, augmentation ou réduction de capital, transformation, dissolution, liquidation, radiation. Juriste formaliste CRFF, partout en France.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Formalités juridiques - vie des entreprises",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": {
        "@type": "Offer",
        "description": "Sur devis selon la nature et la complexité de la formalité",
        "availability": "https://schema.org/InStock"
      },
      "url": "https://cholez-pagotto.fr/vie-des-entreprises"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/vie-des-entreprises#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelles formalités sont obligatoires lors d'un changement de gérant de SARL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le changement de gérant d'une SARL nécessite une décision collective des associés (ordinaire ou extraordinaire selon les statuts), la mise à jour des statuts si le gérant y est nommé, et une déclaration de modification auprès du Guichet Unique (INPI) dans un délai d'un mois. La publication au journal d'annonces légales est obligatoire. Le Cabinet Cholez-Pagotto prépare l'ensemble des actes et réalise les formalités déclaratives."
          }
        },
        {
          "@type": "Question",
          "name": "Comment transférer le siège social d'une société ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le transfert de siège social d'une société nécessite une décision des organes compétents (gérant, associés ou CA selon la forme juridique et les statuts), la mise à jour des statuts, et une déclaration de modification auprès du Guichet Unique. Si le transfert se fait dans un autre département, deux publications au journal d'annonces légales sont nécessaires (département d'origine et département d'accueil). Notre juriste prépare les actes et réalise l'ensemble des formalités."
          }
        },
        {
          "@type": "Question",
          "name": "Comment céder des parts sociales d'une SARL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La cession de parts sociales d'une SARL nécessite l'agrément des associés (selon les règles statutaires), la rédaction d'un acte de cession, sa signification à la société ou son acceptation par acte notarié (article 1690 du Code civil), la mise à jour des statuts si nécessaire, l'enregistrement auprès des impôts (droits de cession de 3%), et la déclaration de modification auprès du Guichet Unique. Notre juriste accompagne l'ensemble de ces démarches."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre dissolution et liquidation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La dissolution est la décision de mettre fin à la société. La liquidation est le processus qui suit : réalisation des actifs, remboursement des dettes, partage du boni de liquidation entre associés. Une société dissoute reste en existence pour les besoins de la liquidation jusqu'à la clôture de celle-ci. La radiation du registre national des entreprises intervient après la clôture de la liquidation. Notre juriste accompagne les deux étapes et réalise les formalités auprès du Guichet Unique."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/vie-des-entreprises#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Professionnels", "item": "https://cholez-pagotto.fr/accompagnement-professionnels" },
        { "@type": "ListItem", "position": 3, "name": "Vie des entreprises", "item": "https://cholez-pagotto.fr/vie-des-entreprises" }
      ]
    }
  ]
}

const categories = [
  {
    titre: "Modifications statutaires",
    couleur: "#0f2d6e",
    fond: "#eff6ff",
    formalites: [
      { acte: "Changement de dénomination sociale", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Modification de l'objet social", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Transfert du siège social (même département)", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Transfert du siège social (autre département)", jal: "2 publications", guichet: "Oui", delai: "1 mois" },
      { acte: "Modification de la durée de la société", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Transformation de forme juridique", jal: "Oui", guichet: "Oui", delai: "1 mois" },
    ]
  },
  {
    titre: "Dirigeants et actionnariat",
    couleur: "#7c3aed",
    fond: "#f5f3ff",
    formalites: [
      { acte: "Changement de gérant / président / directeur général", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Nomination d'un commissaire aux comptes", jal: "Non", guichet: "Oui", delai: "1 mois" },
      { acte: "Cession de parts sociales (SARL, SCI)", jal: "Non", guichet: "Oui", delai: "1 mois" },
      { acte: "Cession d'actions (SAS, SA)", jal: "Non", guichet: "Selon statuts", delai: "1 mois" },
      { acte: "Mise à jour des bénéficiaires effectifs (DBE)", jal: "Non", guichet: "Oui", delai: "30 jours" },
    ]
  },
  {
    titre: "Capital social",
    couleur: "#065f46",
    fond: "#ecfdf5",
    formalites: [
      { acte: "Augmentation de capital par apports en numéraire", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Augmentation de capital par incorporation de réserves", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Réduction de capital (non motivée par des pertes)", jal: "Oui", guichet: "Oui", delai: "Après opposition créanciers" },
      { acte: "Réduction de capital (motivée par des pertes)", jal: "Oui", guichet: "Oui", delai: "1 mois" },
    ]
  },
  {
    titre: "Dissolution et cessation",
    couleur: "#dc2626",
    fond: "#fef2f2",
    formalites: [
      { acte: "Dissolution amiable (volontaire)", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Dissolution pour arrivée du terme", jal: "Oui", guichet: "Oui", delai: "1 mois" },
      { acte: "Clôture de liquidation", jal: "Oui", guichet: "Oui", delai: "Après approbation comptes" },
      { acte: "Radiation du registre national des entreprises", jal: "Non", guichet: "Oui", delai: "Après clôture liquidation" },
      { acte: "Dépôt des comptes annuels", jal: "Non", guichet: "Oui", delai: "7 mois après clôture" },
    ]
  },
]

const faqs = [
  {
    q: "Quelles formalités sont obligatoires lors d'un changement de gérant de SARL ?",
    r: "Le changement de gérant nécessite une décision collective des associés, la mise à jour des statuts si le gérant y est nommé, et une déclaration auprès du Guichet Unique dans un délai d'un mois. La publication au journal d'annonces légales est obligatoire. Notre juriste prépare l'ensemble des actes et réalise les formalités déclaratives."
  },
  {
    q: "Comment transférer le siège social d'une société ?",
    r: "Le transfert nécessite une décision des organes compétents, la mise à jour des statuts et une déclaration auprès du Guichet Unique. Si le transfert se fait dans un autre département, deux publications au JAL sont nécessaires (département d'origine et département d'accueil)."
  },
  {
    q: "Comment céder des parts sociales d'une SARL ?",
    r: "La cession nécessite l'agrément des associés (selon statuts), la rédaction d'un acte de cession, sa signification à la société, l'enregistrement aux impôts (droits de 3%) et la déclaration auprès du Guichet Unique. Notre juriste accompagne l'ensemble de ces démarches."
  },
  {
    q: "Quelle est la différence entre dissolution et liquidation ?",
    r: "La dissolution est la décision de mettre fin à la société. La liquidation est le processus qui suit : réalisation des actifs, remboursement des dettes, partage du boni. La radiation intervient après clôture de la liquidation. Notre juriste accompagne les deux étapes."
  },
  {
    q: "Le dépôt des comptes annuels est-il obligatoire pour toutes les sociétés ?",
    r: "Le dépôt des comptes annuels est obligatoire pour toutes les sociétés commerciales (SARL, SAS, SA, SCI si elle entre dans les critères). Les micro-entreprises individuelles n'y sont pas soumises. Le délai est de 7 mois après la clôture de l'exercice. Notre juriste effectue le dépôt via le Guichet Unique."
  },
]

export default function VieDesEntreprisesPage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>Vie des entreprises</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2d6e 50%, #1a4fba 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Formaliste CRFF
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Vie des entreprises<br />
              Modifications, cessions et cessation d'activité
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Toutes les formalités liées à la vie de votre entreprise, après sa création.
              Changement de dirigeant, modification des statuts, transfert de siège, cession de parts,
              augmentation de capital, dissolution et radiation. Partout en France, à distance.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Demander une formalité <ArrowRight size={18} />
              </a>
              <a href="/creation-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.4)' }}>
                Créer une entreprise
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "4", label: "Catégories de formalités" },
                { valeur: "18+", label: "Types d'actes traités" },
                { valeur: "CRFF", label: "Membre formalistes de France" },
                { valeur: "France", label: "Accompagnement à distance" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#93c5fd' }}>{s.valeur}</div>
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
              Les formalités de modification, de cession et de cessation d'activité sont réalisées par notre juriste formaliste,
              membre du CRFF, conformément aux dispositions du Code de commerce, du Code civil et des textes applicables à chaque forme juridique.
              Les actes préparés constituent des documents juridiques ; en cas de complexité nécessitant l'intervention d'un avocat,
              vous serez orienté vers le professionnel compétent.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* TABLEAU PAR CATÉGORIE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Formalités traitées par le cabinet
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Pour chaque acte : indication de la nécessité d'une publication au journal d'annonces légales (JAL),
              d'un dépôt au Guichet Unique et du délai légal de déclaration. Sur devis selon la nature et la complexité.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {categories.map((cat, ci) => (
                <div key={ci} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                  <div style={{ background: cat.fond, borderBottom: `3px solid ${cat.couleur}`, padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: cat.couleur, margin: 0 }}>{cat.titre}</h3>
                  </div>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          <th style={{ padding: '0.6rem 1rem', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Formalité</th>
                          <th style={{ padding: '0.6rem 1rem', textAlign: 'center', fontWeight: 600, color: '#6b7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>JAL</th>
                          <th style={{ padding: '0.6rem 1rem', textAlign: 'center', fontWeight: 600, color: '#6b7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Guichet Unique</th>
                          <th style={{ padding: '0.6rem 1rem', textAlign: 'left', fontWeight: 600, color: '#6b7280', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>Délai légal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.formalites.map((f, fi) => (
                          <tr key={fi} style={{ borderTop: '1px solid #f3f4f6' }}>
                            <td style={{ padding: '0.75rem 1rem', color: '#374151' }}>{f.acte}</td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                              <span style={{ fontSize: 11, fontWeight: 600, background: f.jal === 'Non' ? '#f3f4f6' : '#eff6ff', color: f.jal === 'Non' ? '#9ca3af' : '#1a4fba', padding: '2px 8px', borderRadius: 10 }}>
                                {f.jal}
                              </span>
                            </td>
                            <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
                              <span style={{ fontSize: 11, fontWeight: 600, background: '#f0fdf4', color: '#16a34a', padding: '2px 8px', borderRadius: 10 }}>
                                {f.guichet}
                              </span>
                            </td>
                            <td style={{ padding: '0.75rem 1rem', color: '#6b7280', fontSize: 12 }}>{f.delai}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: '#9ca3af', marginTop: '0.75rem' }}>
              JAL = Journal d'annonces légales. Les délais indiqués sont des délais légaux maximum ; le cabinet traite les dossiers dans les meilleurs délais après réception des pièces complètes.
              Tarification sur devis selon la nature et la complexité de la formalité.
            </p>
          </section>

          {/* POURQUOI FORMALISTE */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '2rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1.5rem' }}>
              Pourquoi confier vos formalités à un juriste formaliste CRFF ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
              {[
                { titre: "Maîtrise des exigences", desc: "Le Guichet Unique rejette les dossiers incomplets. Un formaliste connaît les pièces exactement requises pour chaque type de formalité et chaque forme juridique." },
                { titre: "Préparation des actes", desc: "Notre juriste prépare les procès-verbaux, décisions, actes de cession et tous documents nécessaires, conformes aux exigences légales et statutaires." },
                { titre: "Suivi jusqu'à validation", desc: "Le dossier est suivi jusqu'à l'obtention de l'extrait Kbis modifié ou de l'attestation de dépôt. Notre juriste gère les demandes de compléments de l'administration." },
                { titre: "À distance, partout en France", desc: "Tous les échanges se font par email et les dépôts via le Guichet Unique dématérialisé. Aucun déplacement requis, quelle que soit la localisation de votre entreprise." }
              ].map((item, i) => (
                <div key={i} style={{ borderTop: '3px solid #0f2d6e', paddingTop: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 6px' }}>{item.titre}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 14, padding: '2.5rem', marginBottom: '3.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', color: 'white' }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#93c5fd', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Sur devis</div>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Une formalité à réaliser ?</h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Décrivez votre besoin. Notre juriste vous indique les actes nécessaires et vous transmet un devis.
              </p>
            </div>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
              Demander un devis <ArrowRight size={18} />
            </a>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus courantes sur les formalités de modification.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem 1.5rem' }}>
                  <summary style={{ fontWeight: 600, color: '#0f2d6e', fontSize: '0.9rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span>{faq.q}</span>
                    <span style={{ color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: 13, lineHeight: 1.75, marginTop: '0.75rem', marginBottom: 0 }}>{faq.r}</p>
                </details>
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
                Accompagnement des entreprises dans toutes leurs formalités de modification, cession et cessation, à distance, partout en France.
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}