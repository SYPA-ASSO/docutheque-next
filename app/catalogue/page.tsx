'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import BanniereALaUne from '@/components/BanniereALaUne'
import { supabase } from '@/lib/supabase'
import type { DocItem, Categorie } from '@/lib/types'
import { formatPrix } from '@/lib/format'
import {
  FileText, Package, Star, ArrowRight, ChevronRight,
  CheckCircle, Scale, Info, Download, Crown, ChevronDown, BookOpen
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/catalogue#service",
      "name": "Bibliothèque de documents juridiques téléchargeables",
      "description": "Bibliothèque de modèles de documents juridiques au format DOCX, téléchargeables et personnalisables. Accès libre ou via abonnement Optimal.",
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
          "description": "Documents en accès libre téléchargeables après création d'un compte gratuit"
        },
        {
          "@type": "Offer",
          "name": "Abonnement Optimal Particulier",
          "price": "17.90",
          "priceCurrency": "EUR",
          "description": "Accès complet à la bibliothèque, 17,90 €/mois ou 149 €/an"
        },
        {
          "@type": "Offer",
          "name": "Abonnement Optimal Pro",
          "price": "27.90",
          "priceCurrency": "EUR",
          "description": "Accès complet à la bibliothèque, 2 questions juriste/mois, 27,90 €/mois ou 249 €/an"
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

const avantages = [
  {
    titre: "Élaborés avec rigueur",
    texte: "Nos documents sont élaborés sur la base du droit français en vigueur et mis à jour régulièrement.",
    icone: <Scale size={18} strokeWidth={1.5} />
  },
  {
    titre: "Format DOCX",
    texte: "Téléchargeables et personnalisables directement dans Word, LibreOffice ou Google Docs. Adaptez chaque document à votre situation.",
    icone: <FileText size={18} strokeWidth={1.5} />
  },
  {
    titre: "Mis à jour régulièrement",
    texte: "Les documents sont actualisés à chaque évolution législative ou réglementaire significative.",
    icone: <CheckCircle size={18} strokeWidth={1.5} />
  },
  {
    titre: "Accès immédiat",
    texte: "Après inscription, accès instantané aux documents en accès libre. L'abonnement Optimal débloque l'intégralité de la bibliothèque.",
    icone: <Star size={18} strokeWidth={1.5} />
  }
]

const faqCatalogue = [
  { q: "Sous quel format les documents sont-ils livrés ?", r: "Tous les modèles sont fournis au format DOCX (Word), téléchargeables et personnalisables. Vous les complétez et les adaptez librement à votre situation depuis votre traitement de texte habituel." },
  { q: "Une partie de la bibliothèque est-elle gratuite ?", r: "Oui. Une sélection de modèles est en accès libre, téléchargeable au format DOCX après la création d'un compte gratuit. Le reste de la bibliothèque est accessible via l'abonnement Optimal ou à l'achat à l'unité." },
  { q: "Puis-je acheter un document seul, sans abonnement ?", r: "Oui. Chaque document payant est disponible à l'unité, à partir de 2,99 € selon sa complexité, avec téléchargement immédiat après paiement. Si vos besoins sont récurrents, l'abonnement Optimal donne accès à toute la bibliothèque et devient vite plus avantageux." },
  { q: "Que comprend l'abonnement Optimal ?", r: "L'abonnement Optimal donne accès à toute la bibliothèque de modèles DOCX, aux notices explicatives et fiches pédagogiques, et inclut une question juriste par mois non cumulable, traitée sous 24 à 48h. La formule Particulier est à 17,90 €/mois ou 149 €/an, la formule Pro à 27,90 €/mois ou 249 €/an avec deux questions par mois." },
  { q: "Les modèles remplacent-ils l'avis d'un professionnel ?", r: "Non. Les modèles sont des documents de référence à usage général, conçus pour couvrir les situations courantes. Ils constituent une information documentaire et ne remplacent pas une consultation adaptée à votre situation, laquelle relève de l'avocat. Pour un cas particulier ou un enjeu important, notre juriste peut vous informer sur les points de vigilance ou vous orienter." },
  { q: "Puis-je être remboursé après avoir téléchargé un document ?", r: "Pour un contenu numérique, en demandant le téléchargement immédiat vous renoncez expressément à votre droit de rétractation, conformément à l'article L.221-28 13° du Code de la consommation. Un document déjà téléchargé n'est donc pas remboursable. Le droit de rétractation de 14 jours reste applicable tant qu'aucun téléchargement n'a été effectué." }
]

export default function CataloguePage() {
  const [documents, setDocuments] = useState<DocItem[]>([])
  const [categories, setCategories] = useState<Categorie[]>([])
  const [categorieActive, setCategorieActive] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [periode, setPeriode] = useState<'monthly' | 'yearly'>('monthly')

  useEffect(() => {
    const loadData = async () => {
      const { data: docs } = await supabase
        .from('documents')
        .select('id, nom, slug, description, blob_url, categories, profils_autorises, acces_gratuit, acces_optimal, acces_payant, prix_unitaire, actif, ordre, type, masque_catalogue')
        .eq('actif', true)
        .eq('masque_catalogue', false)
        .order('ordre', { ascending: true })

      const { data: cats } = await supabase
        .from('categories')
        .select('id, nom, ordre, mots_cles')
        .order('ordre', { ascending: true })


      if (docs) setDocuments(docs)
      if (cats) setCategories(cats)
      setLoading(false)
    }
    loadData()
  }, [])

  const docsParCategorie = (nomCategorie: string) =>
    documents.filter(doc => doc.categories?.includes(nomCategorie) && doc.type !== 'guide' && doc.type !== 'livre')

  const guides = documents.filter(d => d.type === 'guide')
  const livres = documents.filter(d => d.type === 'livre')

  const accesLabel = (doc: DocItem) => {
    if (doc.acces_gratuit) return { label: 'Gratuit', color: '#15803d', bg: '#f0fdf4' }
    if (doc.acces_optimal) return { label: 'Optimal', color: '#1a4fba', bg: '#eff6ff' }
    if (doc.acces_payant) return { label: formatPrix(doc.prix_unitaire) || '?\u00a0€', color: '#d97706', bg: '#fff7ed' }
    return { label: '-', color: '#9ca3af', bg: '#f3f4f6' }
  }

  const carteRessource = (d: DocItem) => {
    const acces = accesLabel(d)
    return (
      <a key={d.id} href={d.slug ? `/catalogue/${d.slug}` : undefined} style={{ display: 'block', background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit', cursor: d.slug ? 'pointer' : 'default' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
          <BookOpen size={20} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <span style={{ background: acces.bg, color: acces.color, fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 5, flexShrink: 0 }}>{acces.label}</span>
        </div>
        <p style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.35 }}>{d.nom}</p>
        {d.description ? <p style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5, margin: 0 }}>{d.description.slice(0, 110)}</p> : null}
      </a>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />

      {/* BREADCRUMB */}
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
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.08em', marginBottom: '1rem' }}>
              BIBLIOTHÈQUE DE DOCUMENTS
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Documents juridiques téléchargeables et personnalisables
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '2rem', margin: '0 auto 2rem' }}>
              Modèles au format DOCX élaborés sur la base du droit français en vigueur. Contrats, baux, statuts, RGPD, courriers. Accès libre ou abonnement Optimal. Packs, guides et ouvrages également disponibles, gratuits ou payants selon les cas.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/tarifs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                <Download size={15} /> Accéder aux documents
              </a>
              <a href="/connexion" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Créer un compte gratuit
              </a>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, marginTop: 14 }}>
              Compte gratuit · Accès libre immédiat · Abonnement Optimal dès 17,90 €/mois
            </p>
          </div>
        </section>

        <section style={{ padding: '1.75rem 0 0' }}>
          <BanniereALaUne maxWidth={1100} />
        </section>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* MENTION LÉGALE */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.75rem 1.25rem', marginBottom: '3rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Les modèles fournis constituent des documents de référence téléchargeables et personnalisables au format DOCX.
              Ils ne constituent pas une consultation juridique personnalisée au sens de la loi n°71-1130 du 31 décembre 1971.
              En cas de doute sur l'adaptation d'un document à votre situation, le service{' '}
              <a href="/information-sur-vos-droits" style={{ color: '#1a4fba' }}>Information sur vos droits</a> peut vous apporter un éclairage complémentaire.
            </p>
          </div>

          {/* CATALOGUE PAR CATÉGORIES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Documents disponibles
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Cliquez sur une catégorie pour voir les documents disponibles. Les documents en accès libre sont téléchargeables immédiatement après inscription gratuite.
            </p>

            {loading ? (
              <p style={{ color: '#9ca3af', fontSize: 14 }}>Chargement des documents...</p>
            ) : categories.length === 0 ? (
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '3rem', textAlign: 'center' }}>
                <FileText size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: 12 }} />
                <p style={{ color: '#6b7280', fontSize: 14, margin: 0 }}>La bibliothèque sera disponible prochainement.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {categories.map((cat) => {
                  const docs = docsParCategorie(cat.nom)
                  if (docs.length === 0) return null
                  const isOpen = categorieActive === cat.id
                  const nbGrat = docs.filter(d => d.acces_gratuit).length

                  return (
                    <div
                      key={cat.id}
                      style={{ background: 'white', border: `1px solid ${isOpen ? '#1a4fba' : '#e5e7eb'}`, borderRadius: 12, overflow: 'hidden', transition: 'border-color 0.2s' }}
                    >
                      <button
                        onClick={() => setCategorieActive(isOpen ? null : cat.id)}
                        style={{ width: '100%', background: 'none', border: 'none', padding: '1rem 1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', textAlign: 'left' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <FileText size={18} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                          <div>
                            <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: 700, margin: 0 }}>{cat.nom}</p>
                            <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>
                              {docs.length} document{docs.length > 1 ? 's' : ''}
                              {nbGrat > 0 && ` · ${nbGrat} gratuit${nbGrat > 1 ? 's' : ''}`}
                            </p>
                          </div>
                        </div>
                        <ChevronRight size={16} color="#9ca3af" style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }} />
                      </button>

                      {isOpen && (
                        <div style={{ borderTop: '1px solid #f3f4f6', padding: '1rem 1.25rem' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '8px' }}>
                            {docs.map(doc => {
                              const acces = accesLabel(doc)
                              return (
                                <a key={doc.id} href={doc.slug ? `/catalogue/${doc.slug}` : undefined} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: doc.acces_gratuit ? '#f0fdf4' : '#ffffff', borderRadius: 8, border: `1px solid ${doc.acces_gratuit ? '#bbf7d0' : '#e5e7eb'}`, textDecoration: 'none', color: 'inherit', cursor: doc.slug ? 'pointer' : 'default' }}>
                                  {doc.type === 'pack'
                                    ? <Package size={15} color={acces.color} style={{ flexShrink: 0 }} />
                                    : <FileText size={14} color={acces.color} style={{ flexShrink: 0 }} />
                                  }
                                  <p style={{ color: '#374151', fontSize: 12, fontWeight: 600, margin: 0, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {doc.nom}
                                  </p>
                                  <span style={{ background: acces.bg, color: acces.color, fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4, flexShrink: 0 }}>
                                    {acces.label}
                                  </span>
                                </a>
                              )
                            })}
                          </div>
                          {docs.some(d => !d.acces_gratuit) && (
                            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', background: '#eff6ff', borderRadius: 8 }}>
                              <Crown size={14} color="#1a4fba" style={{ flexShrink: 0 }} />
                              <p style={{ color: '#1e3a5f', fontSize: 12, margin: 0 }}>
                                Les documents Optimal sont accessibles à prix unitaires ou gratuitement en illimité avec l'
                                <a href="/tarifs" style={{ color: '#1a4fba', fontWeight: 700 }}>Abonnement Optimal</a>
                                {' '}dès 17,90 €/mois.
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </section>

          {/* GUIDES */}
          {!loading && guides.length > 0 && (
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
                Guides disponibles
              </h2>
              <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
                Guides pratiques pour comprendre et agir, gratuits ou payants selon les cas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
                {guides.map(carteRessource)}
              </div>
            </section>
          )}

          {/* OUVRAGES */}
          {!loading && livres.length > 0 && (
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
                Ouvrages disponibles
              </h2>
              <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
                Ouvrages de fond à télécharger, gratuits ou payants selon les cas.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
                {livres.map(carteRessource)}
              </div>
            </section>
          )}

          {/* AVANTAGES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              Pourquoi utiliser nos modèles ?
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
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              L'abonnement Optimal
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Deux formules selon votre profil. Chaque formule est disponible en mensuel sans engagement ou en annuel avec 3 mois offerts.
            </p>

            {/* TOGGLE MENSUEL / ANNUEL */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ background: '#f3f4f6', borderRadius: 10, padding: '4px', display: 'inline-flex', gap: '4px' }}>
                {(['monthly', 'yearly'] as const).map(p => (
                  <button key={p}
                    onClick={() => setPeriode(p)}
                    style={{ padding: '8px 20px', borderRadius: 8, border: 'none', background: periode === p ? 'white' : 'transparent', color: periode === p ? '#0f2d6e' : '#6b7280', fontSize: 13, fontWeight: periode === p ? 700 : 500, cursor: 'pointer', boxShadow: periode === p ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.15s' }}>
                    {p === 'monthly' ? 'Mensuel' : 'Annuel'}
                    {p === 'yearly' && <span style={{ marginLeft: 6, background: '#0f2d6e', color: 'white', fontSize: 9, fontWeight: 700, padding: '1px 6px', borderRadius: 10 }}>3 mois offerts</span>}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {[
                {
                  profil: 'Optimal Particulier',
                  cible: 'Particulier · Usage personnel',
                  prix: periode === 'yearly' ? '12,42 €' : '17,90 €',
                  detail: periode === 'yearly' ? '149 € / an' : 'Sans engagement',
                  inclus: [
                    'Accès complet à la bibliothèque',
                    'Documents téléchargeables et personnalisables',
                    'Mises à jour incluses',
                    '1 question juriste incluse par mois (non cumulable)',
                    'Questions supplémentaires à 14,90 €',
                    'Accès espace client',
                  ],
                  couleur: '#1a4fba',
                },
                {
                  profil: 'Optimal Pro',
                  cible: 'Professionnel · Association · Collectivité',
                  prix: periode === 'yearly' ? '20,75 €' : '27,90 €',
                  detail: periode === 'yearly' ? '249 € / an' : 'Sans engagement',
                  inclus: [
                    'Accès complet à la bibliothèque',
                    'Documents téléchargeables et personnalisables',
                    'Mises à jour incluses',
                    '2 questions juriste incluses par mois (non cumulables)',
                    'Questions supplémentaires à 14,90 €',
                    'Alertes légales événementielles',
                    'Accès espace client',
                  ],
                  couleur: '#0f2d6e',
                },
              ].map((offre, i) => (
                <div key={i} style={{ background: 'white', border: `2px solid ${offre.couleur}40`, borderRadius: 12, padding: '1.5rem' }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <p style={{ color: offre.couleur, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 2px' }}>{offre.profil}</p>
                    <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>{offre.cible}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '4px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: offre.couleur }}>{offre.prix}</span>
                    <span style={{ fontSize: 13, color: '#6b7280' }}>/mois</span>
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: 11, margin: '0 0 1rem' }}>{offre.detail}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {offre.inclus.map((item, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                        <CheckCircle size={14} strokeWidth={2} style={{ color: offre.couleur, marginTop: 2, flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/connexion" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: offre.couleur, color: 'white', textDecoration: 'none', padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', width: '100%', boxSizing: 'border-box' as const }}>
                    S'inscrire <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
            <p style={{ color: '#9ca3af', fontSize: 11, textAlign: 'center', marginTop: '1rem' }}>
              Sans engagement pour les formules mensuelles · Engagement 12 mois pour les formules annuelles · Paiement sécurisé
            </p>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px' }}>
              Prêt à accéder à la bibliothèque ?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, margin: '0 0 20px', lineHeight: 1.7 }}>
              Créez un compte gratuit et téléchargez immédiatement les documents en accès libre. L'Abonnement Optimal débloque l'intégralité de la bibliothèque.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/connexion" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                Créer mon compte gratuit <ArrowRight size={16} />
              </a>
              <a href="/information-sur-vos-droits" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                Poser une question juridique · 47 €
              </a>
            </div>
          </section>

        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqCatalogue.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) }) }} />
        {/* FAQ */}
        <section id="faq" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <style dangerouslySetInnerHTML={{ __html: 'details.faq-item summary::-webkit-details-marker{display:none}details.faq-item summary{list-style:none}details.faq-item[open] .faq-chevron{transform:rotate(180deg)}' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Tout savoir sur la bibliothèque de documents, les formats, l'accès libre et l'abonnement.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqCatalogue.map((faq, i) => (
              <details key={i} className="faq-item" style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', cursor: 'pointer', gap: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f2d6e', lineHeight: 1.4 }}>{faq.q}</span>
                  <ChevronDown className="faq-chevron" size={18} strokeWidth={2} style={{ color: '#1a4fba', flexShrink: 0, transition: 'transform 0.2s' }} />
                </summary>
                <div style={{ padding: '0 1.5rem 1.1rem', fontSize: 13, color: '#374151', lineHeight: 1.7, borderTop: '1px solid #f3f4f6' }}>
                  <div style={{ paddingTop: '1rem' }}>{faq.r}</div>
                </div>
              </details>
            ))}
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