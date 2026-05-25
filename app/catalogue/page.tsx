'use client'

// app/catalogue/page.tsx
// Cabinet Cholez-Pagotto - Catalogue / Bibliothèque de documents
// Page d'attente professionnelle en attendant l'espace client complet

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  FileText, Lock, Star, ArrowRight, ChevronRight,
  CheckCircle, BookOpen, Shield, Briefcase, Heart,
  Home, Scale, Users, Info, Bell
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/catalogue#service",
      "name": "Bibliothèque de documents juridiques téléchargeables",
      "description": "Bibliothèque de modèles de documents juridiques au format DOCX, téléchargeables et personnalisables. Accès libre ou via abonnement Optimal (14,90 €/mois).",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Accès libre",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Documents en accès libre téléchargeables sans inscription"
        },
        {
          "@type": "Offer",
          "name": "Abonnement Optimal",
          "price": "14.90",
          "priceCurrency": "EUR",
          "description": "Accès complet à la bibliothèque, 14,90 €/mois ou 147,97 €/an"
        }
      ],
      "url": "https://cholez-pagotto.fr/catalogue"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/catalogue#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Catalogue", "item": "https://cholez-pagotto.fr/catalogue" }
      ]
    }
  ]
}

const categories = [
  {
    titre: "Droit du travail",
    icone: <Briefcase size={22} strokeWidth={1.5} />,
    couleur: "#0f2d6e",
    fond: "#eff6ff",
    exemples: [
      "Contrat de travail CDI",
      "Contrat de travail CDD",
      "Avenant au contrat de travail",
      "Lettre de rupture conventionnelle",
      "Reçu pour solde de tout compte",
      "Attestation employeur"
    ],
    nb: "12 documents"
  },
  {
    titre: "Droit du logement",
    icone: <Home size={22} strokeWidth={1.5} />,
    couleur: "#16a34a",
    fond: "#f0fdf4",
    exemples: [
      "Bail d'habitation loi Alur",
      "État des lieux d'entrée",
      "État des lieux de sortie",
      "Quittance de loyer",
      "Lettre de préavis locataire",
      "Mise en demeure propriétaire"
    ],
    nb: "9 documents"
  },
  {
    titre: "Vie des sociétés",
    icone: <Scale size={22} strokeWidth={1.5} />,
    couleur: "#7c3aed",
    fond: "#f5f3ff",
    exemples: [
      "Procès-verbal d'assemblée générale",
      "Décision de l'associé unique",
      "Statuts SASU",
      "Statuts SARL",
      "Procuration pour AG",
      "Rapport de gestion simplifié"
    ],
    nb: "11 documents"
  },
  {
    titre: "Associations",
    icone: <Heart size={22} strokeWidth={1.5} />,
    couleur: "#dc2626",
    fond: "#fef2f2",
    exemples: [
      "Statuts association loi 1901",
      "Procès-verbal AG constitutive",
      "Procès-verbal AG ordinaire",
      "Règlement intérieur",
      "Convocation assemblée générale",
      "Feuille de présence AG"
    ],
    nb: "8 documents"
  },
  {
    titre: "RGPD et conformité",
    icone: <Shield size={22} strokeWidth={1.5} />,
    couleur: "#0891b2",
    fond: "#ecfeff",
    exemples: [
      "Registre des activités de traitement",
      "Politique de confidentialité",
      "Mentions d'information formulaire",
      "Modèle de réponse droit d'accès",
      "Registre des violations",
      "Charte informatique"
    ],
    nb: "10 documents"
  },
  {
    titre: "Courriers et mises en demeure",
    icone: <FileText size={22} strokeWidth={1.5} />,
    couleur: "#b45309",
    fond: "#fffbeb",
    exemples: [
      "Mise en demeure de payer",
      "Lettre de réclamation consommateur",
      "Contestation de licenciement",
      "Demande de médiation",
      "Lettre de résiliation contrat",
      "Demande d'exercice de droits RGPD"
    ],
    nb: "14 documents"
  }
]

const avantages = [
  { titre: "Rédigés par un juriste", texte: "Chaque document est préparé par François CHOLEZ, juriste et membre du CRFF, sur la base du droit français en vigueur.", icone: <Scale size={18} strokeWidth={1.5} /> },
  { titre: "Format DOCX", texte: "Téléchargeables et personnalisables directement dans Word, LibreOffice ou Google Docs. Adaptez chaque document à votre situation.", icone: <FileText size={18} strokeWidth={1.5} /> },
  { titre: "Mis à jour régulièrement", texte: "Les documents sont actualisés à chaque évolution législative ou réglementaire significative.", icone: <CheckCircle size={18} strokeWidth={1.5} /> },
  { titre: "Accès immédiat", texte: "Après inscription et souscription, accès instantané à l'ensemble de la bibliothèque depuis votre espace client.", icone: <Star size={18} strokeWidth={1.5} /> }
]

export default function CataloguePage() {
  const [categorieActive, setCategorieActive] = useState<number | null>(null)
  const [emailNotif, setEmailNotif] = useState('')
  const [notifEnvoyee, setNotifEnvoyee] = useState(false)

  const handleNotif = () => {
    if (emailNotif.includes('@')) {
      setNotifEnvoyee(true)
    }
  }

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
            <span style={{ color: '#374151', fontWeight: 600 }}>Catalogue</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 1.5rem 3rem', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', background: '#d4a017', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Bientôt disponible
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Bibliothèque de documents juridiques
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: '2rem' }}>
              Des modèles de documents téléchargeables et personnalisables, préparés par un juriste formaliste CRFF.
              Contrats, baux, statuts, RGPD, courriers : accès libre ou via abonnement Optimal.
            </p>

            {/* Tarifs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 12, padding: '1rem 1.5rem', border: '1px solid rgba(255,255,255,0.3)', minWidth: 160 }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>Gratuit</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>Documents en accès libre</div>
              </div>
              <div style={{ background: '#d4a017', borderRadius: 12, padding: '1rem 1.5rem', minWidth: 160, position: 'relative' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white' }}>14,90 €</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)', marginTop: 4 }}>/mois · Accès complet</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 2 }}>ou 147,97 €/an</div>
              </div>
            </div>

            {/* Notification */}
            {!notifEnvoyee ? (
              <div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: '0.75rem' }}>
                  Soyez informé de l'ouverture de la bibliothèque :
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <input
                    type="email"
                    placeholder="votre@email.fr"
                    value={emailNotif}
                    onChange={e => setEmailNotif(e.target.value)}
                    style={{ padding: '10px 16px', borderRadius: 8, border: 'none', fontSize: 13, minWidth: 220, outline: 'none' }}
                  />
                  <button
                    onClick={handleNotif}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#d4a017', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}
                  >
                    <Bell size={15} /> Me notifier
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: 10, padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: 13 }}>
                <CheckCircle size={16} style={{ color: '#86efac' }} />
                <span>Nous vous contacterons dès l'ouverture.</span>
              </div>
            )}
          </div>
        </section>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* MENTION */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.75rem 1.25rem', marginBottom: '3rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Les modèles fournis constituent des documents de référence téléchargeables et personnalisables au format DOCX.
              Ils ne constituent pas une consultation juridique personnalisée au sens de la loi n°71-1130 du 31 décembre 1971.
              En cas de doute sur l'adaptation d'un document à votre situation, le service{' '}
              <a href="/information-sur-vos-droits" style={{ color: '#1a4fba' }}>Information sur vos droits</a> peut vous apporter un éclairage complémentaire.
            </p>
          </div>

          {/* CATEGORIES */}
          <section id="categories" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Aperçu des catégories disponibles
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Plus de 60 modèles répartis en 6 catégories, préparés par François CHOLEZ, juriste et membre du CRFF.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {categories.map((cat, i) => (
                <div
                  key={i}
                  onClick={() => setCategorieActive(categorieActive === i ? null : i)}
                  style={{
                    background: 'white', border: `1px solid ${categorieActive === i ? cat.couleur : '#e5e7eb'}`,
                    borderRadius: 12, padding: '1.25rem', cursor: 'pointer',
                    borderLeft: `4px solid ${cat.couleur}`, transition: 'border-color 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: categorieActive === i ? '1rem' : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ color: cat.couleur }}>{cat.icone}</div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f2d6e' }}>{cat.titre}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{cat.nb}</div>
                      </div>
                    </div>
                    <Lock size={14} strokeWidth={1.5} style={{ color: '#d1d5db', flexShrink: 0 }} />
                  </div>

                  {categorieActive === i && (
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {cat.exemples.map((ex, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 12, color: '#6b7280' }}>
                          <FileText size={12} strokeWidth={1.5} style={{ color: cat.couleur, flexShrink: 0 }} />
                          {ex}
                        </li>
                      ))}
                      <li style={{ marginTop: '0.5rem' }}>
                        <span style={{ fontSize: 11, color: '#9ca3af', fontStyle: 'italic' }}>
                          + d'autres documents disponibles à l'ouverture
                        </span>
                      </li>
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* AVANTAGES */}
          <section id="avantages" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              Pourquoi utiliser nos modèles de documents ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
              {avantages.map((a, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
                  <div style={{ color: '#1a4fba', marginBottom: '0.6rem' }}>{a.icone}</div>
                  <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.4rem' }}>{a.titre}</h3>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{a.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ABONNEMENT */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              L'abonnement Optimal
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  titre: "Mensuel",
                  prix: "14,90 €",
                  unite: "/mois",
                  inclus: ["Accès complet à la bibliothèque", "Documents téléchargeables et personnalisables", "Mises à jour incluses", "Question juriste à 9,90 € (au lieu de 47 €)", "Accès espace client"],
                  cta: "/connexion",
                  couleur: "#1a4fba"
                },
                {
                  titre: "Annuel",
                  prix: "147,97 €",
                  unite: "/an",
                  badge: "2 mois offerts",
                  inclus: ["Accès complet à la bibliothèque", "Documents téléchargeables et personnalisables", "Mises à jour incluses", "Question juriste à 9,90 € (au lieu de 47 €)", "Accès espace client"],
                  cta: "/connexion",
                  couleur: "#d4a017"
                }
              ].map((offre, i) => (
                <div key={i} style={{ background: 'white', border: `2px solid ${offre.couleur}30`, borderRadius: 12, padding: '1.5rem', position: 'relative' }}>
                  {offre.badge && (
                    <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: offre.couleur, color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 14px', borderRadius: 20, whiteSpace: 'nowrap' }}>
                      {offre.badge}
                    </div>
                  )}
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>{offre.titre}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: offre.couleur }}>{offre.prix}</span>
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{offre.unite}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {offre.inclus.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                        <CheckCircle size={14} strokeWidth={2} style={{ color: offre.couleur, marginTop: 2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={offre.cta} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: offre.couleur, color: 'white', textDecoration: 'none', padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', width: '100%', boxSizing: 'border-box' as const }}>
                    S'inscrire <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Une question avant l'ouverture ?
            </h2>
            <p style={{ fontSize: 13, color: '#374151', marginBottom: '1.5rem' }}>
              Notre juriste est disponible pour répondre à vos questions sur la bibliothèque ou sur le service Information sur vos droits.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                Contacter le cabinet <ArrowRight size={16} />
              </a>
              <a href="/information-sur-vos-droits" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#0f2d6e', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', border: '1px solid #0f2d6e' }}>
                Poser ma question - 47 €
              </a>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}