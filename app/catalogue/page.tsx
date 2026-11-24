'use client'

import { useState, useEffect } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import BanniereALaUne from '@/components/BanniereALaUne'
import { DocumentSearch } from '@/components/DocumentSearch'
import { slugify } from '@/lib/slug'
import { supabase } from '@/lib/supabase'
import type { DocItem, Categorie } from '@/lib/types'
import { formatPrix } from '@/lib/format'
import {
  FileText, Star, ArrowRight, ChevronRight,
  CheckCircle, Scale, Info, Download, ChevronDown, BookOpen
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/catalogue#service",
      "name": "Modèles de documents juridiques : bibliothèque et Docuthèque",
      "description": "Bibliothèque de modèles de documents juridiques au format DOCX, rédigés et relus par un juriste, avec bases légales citées. Accès par abonnement Optimal ou achat à l'unité.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "offers": [
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
    titre: "Rédigés et relus par un juriste",
    texte: "Chaque modèle est élaboré par notre juriste formaliste, puis relu. Il n'est pas produit par un outil automatisé.",
    icone: <Scale size={18} strokeWidth={1.5} />
  },
  {
    titre: "Sources citées et vérifiées",
    texte: "Les bases légales sont vérifiées à la source (Légifrance, codes et textes en vigueur) et mentionnées sur chaque fiche, avec la date de dernière vérification.",
    icone: <CheckCircle size={18} strokeWidth={1.5} />
  },
  {
    titre: "Format DOCX",
    texte: "Téléchargeables et personnalisables directement dans Word, LibreOffice ou Google Docs. Adaptez chaque document à votre situation.",
    icone: <FileText size={18} strokeWidth={1.5} />
  },
  {
    titre: "Mis à jour",
    texte: "Les documents sont actualisés à chaque évolution législative ou réglementaire significative.",
    icone: <Star size={18} strokeWidth={1.5} />
  }
]

const faqCatalogue = [
  { q: "Sous quel format les documents sont-ils livrés ?", r: "Tous les modèles sont fournis au format DOCX (Word), téléchargeables et personnalisables. Vous les complétez et les adaptez librement à votre situation depuis votre traitement de texte habituel." },
  { q: "Quelle différence entre la Docuthèque et la bibliothèque de modèles ?", r: "Ce sont deux espaces distincts, chacun avec son compte et son abonnement : l'abonnement Optimal se souscrit sur ce site, l'abonnement de la Docuthèque (149 € par an) sur docutheque.cholez-pagotto.fr. Optimal inclut des questions au juriste chaque mois ; l'abonnement de la Docuthèque donne accès aux questions à 19 € au lieu de 47 €. Sur la Docuthèque, vous répondez à un questionnaire et le document est construit selon votre situation : des clauses apparaissent ou disparaissent, puis vous le téléchargez en Word. La bibliothèque propose des modèles DOCX prêts à personnaliser vous-même, à l'unité ou par l'abonnement Optimal." },
  { q: "Qui rédige les modèles ?", r: "Les modèles sont élaborés et relus par notre juriste formaliste, sur la base de références juridiques sourcées et vérifiées. Ils ne sont pas produits par un outil automatisé. Chaque fiche indique les textes sur lesquels le modèle repose." },
  { q: "Existe-t-il des modèles gratuits ?", r: "Oui, dans les deux espaces. Sur la Docuthèque, certains modèles sont gratuits avec un compte gratuit. Dans la bibliothèque de cholez-pagotto.fr, les modèles gratuits sont fournis sur demande : indiquez le modèle souhaité au regard de votre besoin depuis la page Contact. S'il n'existe pas de modèle gratuit correspondant, nous vous indiquons le modèle payant adapté, ou le cabinet peut envisager de le créer." },
  { q: "Puis-je acheter un document seul, sans abonnement ?", r: "Oui. Chaque document payant est disponible à l'unité. Le prix est affiché sur la fiche avant tout achat, avec téléchargement immédiat après paiement. Si vos besoins sont récurrents, l'abonnement Optimal donne accès à toute la bibliothèque." },
  { q: "Que comprend l'abonnement Optimal ?", r: "L'abonnement Optimal donne accès à toute la bibliothèque de modèles DOCX, aux notices explicatives et fiches pédagogiques, et inclut une question juriste par mois non cumulable, traitée sous 24 à 48 h. La formule Particulier est à 17,90 €/mois ou 149 €/an, la formule Pro à 27,90 €/mois ou 249 €/an avec deux questions par mois." },
  { q: "Les modèles remplacent-ils l'avis d'un professionnel ?", r: "Non. Les modèles sont des documents de référence à usage général, conçus pour couvrir les situations courantes. Ils constituent une information documentaire et ne remplacent pas une consultation adaptée à votre situation, laquelle relève de l'avocat. Pour un cas particulier ou un enjeu important, notre juriste peut vous informer sur les points de vigilance ou vous orienter." },
  { q: "Puis-je être remboursé après avoir téléchargé un document ?", r: "Pour un contenu numérique, en demandant le téléchargement immédiat vous renoncez expressément à votre droit de rétractation, conformément à l'article L.221-28 13° du Code de la consommation. Un document déjà téléchargé n'est donc pas remboursable. Le droit de rétractation de 14 jours reste applicable tant qu'aucun téléchargement n'a été effectué." }
]

export default function CataloguePage() {
  const [documents, setDocuments] = useState<DocItem[]>([])
  const [categories, setCategories] = useState<Categorie[]>([])
  const [loading, setLoading] = useState(true)
  const [connecte, setConnecte] = useState<boolean | null>(null)
  const [periode, setPeriode] = useState<'monthly' | 'yearly'>('monthly')
  const router = useRouter()
  const [sortie, setSortie] = useState<string | null>(null)

  const ouvrirSortie = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setSortie(e.currentTarget.href)
  }

  useEffect(() => {
    if (!sortie) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSortie(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sortie])

  useEffect(() => {
    const loadData = async () => {
      // Le contenu de la bibliothèque n'est chargé que pour un internaute inscrit et connecté.
      const { data: sessionData } = await supabase.auth.getSession()
      const estConnecte = Boolean(sessionData?.session)
      setConnecte(estConnecte)
      if (!estConnecte) {
        setLoading(false)
        return
      }

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

  const blocAbonnement = (
    <section id="abonnement" style={{ marginBottom: '3.5rem' }}>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
        L'abonnement Optimal
      </h2>
      <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
        Deux formules selon votre profil. Chaque formule est disponible en mensuel sans engagement ou en annuel avec 3 mois offerts. L'abonnement Optimal se souscrit sur ce site et inclut des questions au juriste. L'abonnement de la Docuthèque est distinct : il se souscrit sur docutheque.cholez-pagotto.fr, avec son propre compte.
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
              'Questions supplémentaires à 19 €',
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
              'Questions supplémentaires à 19 €',
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
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />

      {sortie && (
        <div
          onClick={() => setSortie(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.55)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sortie-titre"
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'white', borderRadius: 14, padding: '1.75rem', maxWidth: 440, width: '100%', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
          >
            <h2 id="sortie-titre" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.75rem' }}>
              Vous quittez le site du cabinet
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: '0 0 1.5rem' }}>
              Vous quittez le site principal du cabinet pour rejoindre celui de notre Docuthèque. Merci de votre visite.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setSortie(null)}
                style={{ background: 'transparent', color: '#0f2d6e', border: '1.5px solid #0f2d6e', padding: '10px 18px', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}
              >
                Rester ici
              </button>
              <a
                href={sortie}
                onClick={() => setSortie(null)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '10px 18px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}
              >
                Accéder à la Docuthèque <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}

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
              Modèles de documents juridiques rédigés et relus par un juriste
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 auto 2rem' }}>
              Bail, démission, statuts, association, RGPD, courriers : le bon document, adapté à votre situation. Chaque modèle est élaboré par notre juriste sur des références juridiques sourcées et vérifiées, avec ses bases légales et sa date de vérification.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://docutheque.cholez-pagotto.fr" onClick={ouvrirSortie} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Créer mon document sur la Docuthèque <ArrowRight size={15} />
              </a>
              <a href="#abonnement" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Voir l'abonnement Optimal
              </a>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, marginTop: 14 }}>
              Rédigés et relus par un juriste · Word modifiable · Bases légales citées
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

          {/* EN RÉSUMÉ + DEUX PARCOURS */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderLeft: '4px solid #1a4fba', borderRadius: 10, padding: '1.1rem 1.4rem', marginBottom: '1.75rem' }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: '#1a4fba', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 6px' }}>En résumé</p>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                Le cabinet propose des modèles de documents juridiques, rédigés et relus par un juriste, dans deux espaces distincts. Sur la Docuthèque (docutheque.cholez-pagotto.fr), le document est construit à partir de vos réponses à un questionnaire : certains modèles sont gratuits avec un compte gratuit, les autres sont à partir de 0,99 € ou inclus dans l'abonnement de 149 € par an. Dans la bibliothèque de cholez-pagotto.fr, les modèles DOCX sont à personnaliser vous-même, à l'unité ou par l'abonnement Optimal (dès 17,90 € par mois) ; les modèles gratuits y sont fournis sur demande. Il s'agit d'information juridique, pas d'une consultation.
              </p>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1.25rem' }}>
              Deux façons d'obtenir votre document
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
              <div style={{ background: 'white', border: '2px solid #1a4fba40', borderRadius: 12, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ color: '#1a4fba', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Docuthèque</p>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Un document construit sur votre situation</h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: 13, color: '#374151', lineHeight: 1.7 }}>
                  <li>Un questionnaire : selon vos réponses, des clauses apparaissent ou disparaissent</li>
                  <li>Relecture et correction de vos réponses, puis téléchargement en Word</li>
                  <li>Bases légales et date de vérification sur chaque fiche</li>
                  <li>Formalités d'entreprise à prix fixe, relues par un juriste formaliste</li>
                </ul>
                <a href="https://docutheque.cholez-pagotto.fr" onClick={ouvrirSortie} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '11px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                  Accéder à la Docuthèque <ArrowRight size={16} />
                </a>
              </div>
              <div style={{ background: 'white', border: '2px solid #0f2d6e40', borderRadius: 12, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ color: '#0f2d6e', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Bibliothèque</p>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Des modèles prêts à personnaliser</h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', fontSize: 13, color: '#374151', lineHeight: 1.7 }}>
                  <li>Modèles DOCX à compléter dans Word, LibreOffice ou Google Docs</li>
                  <li>Achat à l'unité, prix affiché avant l'achat</li>
                  <li>Ou abonnement Optimal : toute la bibliothèque et des questions au juriste</li>
                  <li>Modèle gratuit sur demande, selon votre besoin</li>
                </ul>
                <a href="#abonnement" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'transparent', color: '#0f2d6e', border: '1.5px solid #0f2d6e', textDecoration: 'none', padding: '10px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                  Voir les offres <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </section>

          {/* OFFRES DOCUTHEQUE */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Les offres de la Docuthèque
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Documents construits par questionnaire, dossiers juridiques et formalités d'entreprise. La Docuthèque se trouve sur docutheque.cholez-pagotto.fr et fonctionne avec son propre compte.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              <div style={{ background: 'white', border: '2px solid #0f2d6e', borderRadius: 12, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ color: '#1a4fba', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Abonnement Docuthèque</p>
                <p style={{ margin: 0 }}><span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f2d6e' }}>149 €</span> <span style={{ fontSize: 12, color: '#6b7280' }}>par an</span></p>
                <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: '0 0 0.5rem' }}>Tous les modèles payants et packs, les dossiers juridiques en PDF et les formalités d'entreprise individuelle et de micro-entreprise. Questions à un juriste à 19 € au lieu de 47 €. Statuts pour entrepreneurs vendus à part.</p>
                <a href="https://docutheque.cholez-pagotto.fr/tarifs" onClick={ouvrirSortie} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1a4fba', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Voir le détail <ArrowRight size={14} />
                </a>
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ color: '#1a4fba', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Documents à l'unité</p>
                <p style={{ margin: 0 }}><span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f2d6e' }}>dès 0,99 €</span> <span style={{ fontSize: 12, color: '#6b7280' }}>par document</span></p>
                <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: '0 0 0.5rem' }}>Le prix est affiché sur la fiche avant de remplir le document. Certains modèles sont gratuits avec un compte gratuit.</p>
                <a href="https://docutheque.cholez-pagotto.fr/tarifs" onClick={ouvrirSortie} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1a4fba', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Voir le détail <ArrowRight size={14} />
                </a>
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ color: '#1a4fba', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Dossiers juridiques</p>
                <p style={{ margin: 0 }}><span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f2d6e' }}>dès 19 €</span> <span style={{ fontSize: 12, color: '#6b7280' }}>par dossier (PDF)</span></p>
                <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: '0 0 0.5rem' }}>Dossiers thématiques en PDF, sommaire offert. Inclus dans l'abonnement Docuthèque.</p>
                <a href="https://docutheque.cholez-pagotto.fr/tarifs" onClick={ouvrirSortie} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1a4fba', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Voir le détail <ArrowRight size={14} />
                </a>
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <p style={{ color: '#1a4fba', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Formalités d'entreprise</p>
                <p style={{ margin: 0 }}><span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f2d6e' }}>dès 29 €</span> <span style={{ fontSize: 12, color: '#6b7280' }}>prix fixe</span></p>
                <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: '0 0 0.5rem' }}>Création, modification ou fermeture, déposées par un juriste formaliste. Frais officiels (greffe, INPI, annonce légale) en sus.</p>
                <a href="https://docutheque.cholez-pagotto.fr/tarifs" onClick={ouvrirSortie} style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#1a4fba', fontWeight: 700, fontSize: 13, textDecoration: 'none' }}>
                  Voir le détail <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </section>

          {/* VISITEUR : offres payantes en avant, aucun document visible */}
          {connecte !== true && (
            <>
              <section style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
                  Accédez à toute la bibliothèque
                </h2>
                <p style={{ color: '#6b7280', fontSize: 13, margin: 0 }}>
                  Les documents sont accessibles aux membres inscrits. Un modèle gratuit peut être demandé auprès du cabinet depuis la page Contact.
                </p>
              </section>
              {blocAbonnement}
            </>
          )}

          {/* MEMBRE CONNECTÉ : bibliothèque complète */}
          {connecte === true && (
            <>
              {/* RECHERCHE + CATEGORIES */}
              <div style={{ maxWidth: 560, marginBottom: '1.5rem' }}>
                <DocumentSearch
                  documents={documents}
                  onSelect={(doc) => { if (doc.slug) router.push(`/catalogue/${doc.slug}`) }}
                  onSubmit={(query) => router.push(`/catalogue/recherche?q=${encodeURIComponent(query)}`)}
                  placeholder="Rechercher un document par nom, catégorie ou mot-clé..."
                />
              </div>

              {categories.length > 0 && (
                <div style={{ marginBottom: '2rem' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>Parcourir par catégorie</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {categories.map((cat) => (
                      <a key={cat.id} href={`/catalogue/categorie/${slugify(cat.nom)}`} style={{ display: 'inline-block', padding: '7px 14px', borderRadius: 20, fontSize: 13, fontWeight: 600, background: '#eff6ff', color: '#1a4fba', textDecoration: 'none', border: '1px solid #dbeafe' }}>{cat.nom}</a>
                    ))}
                  </div>
                </div>
              )}

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
            </>
          )}

          {/* AVANTAGES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Pourquoi nos modèles inspirent confiance
            </h2>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 1.25rem' }}>
              Note Google : 5,0/5.
            </p>
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

          {connecte === true && blocAbonnement}

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px' }}>
              Prêt à obtenir votre document ?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, margin: '0 0 20px', lineHeight: 1.7 }}>
              Complétez votre document sur la Docuthèque en quelques minutes. Pour un modèle gratuit, indiquez votre besoin : nous vous le transmettons s'il existe, sinon nous vous indiquons le modèle payant correspondant.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="https://docutheque.cholez-pagotto.fr" onClick={ouvrirSortie} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                Créer mon document <ArrowRight size={16} />
              </a>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                Demander un modèle gratuit
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
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Tout savoir sur la bibliothèque de documents, les formats, les modèles gratuits sur demande et l'abonnement.</p>
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