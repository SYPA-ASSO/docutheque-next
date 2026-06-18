'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import {
  Scale, Shield, BookOpen, CheckCircle, ArrowRight, ChevronRight, ChevronDown, Info, GraduationCap
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/accompagnement-particuliers#service",
      "name": "Accompagnement particuliers - Cabinet Cholez-Pagotto",
      "description": "Accompagnement juridique des particuliers : information sur vos droits (47 €), bibliothèque de documents (dès 17,90 €/mois), conseil en assurances réglementé ORIAS 26003943. Tous les domaines du droit.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Information juridique, conseil en assurances et formations pour particuliers",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": [
        { "@type": "Offer", "name": "Information sur vos droits", "price": "47", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Abonnement Optimal Particulier", "price": "17.90", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Conseil en assurances", "price": "90", "priceCurrency": "EUR" },
        { "@type": "Offer", "name": "Formations sur-mesure" }
      ],
      "url": "https://cholez-pagotto.fr/accompagnement-particuliers"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/accompagnement-particuliers#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Accompagnement particuliers", "item": "https://cholez-pagotto.fr/accompagnement-particuliers" }
      ]
    }
  ]
}

const domaines = [
  "Droit du travail",
  "Droit immobilier",
  "Droit des contrats",
  "Droit associatif · ESS",
  "Protection sociale · CAF · Sécurité sociale",
  "Retraite · Droits et démarches",
  "Action sociale · Médico-social",
  "RGPD · DPO · Données personnelles",
  "Droit de la famille",
  "Droit des successions",
  "Droit des sociétés",
  "Droit fiscal",
  "Droit administratif",
  "Droit de la santé",
  "Protection des personnes vulnérables",
  "Droit de l'éducation · Formation",
  "Éducation nationale",
  "Droit de la fonction publique",
  "Droit du bénévole",
  "Droit du sport · Licencié · Adhérent",
  "Droit du locataire",
  "Droit du bailleur",
  "Location courte durée · Plateformes",
  "Copropriété",
  "Accession à la propriété",
  "Droit des aidants · Proches aidants",
  "Droit des étrangers · Nationalité",
  "Droit funéraire",
  "Assurance habitation · Sinistres",
  "Assurance auto · Responsabilité",
  "Assurance vie · Prévoyance",
  "Assurance professionnelle · RC Pro",
  "Droit civil",
  "Droit numérique",
  "Droit des collectivités territoriales",
  "Droit du consommateur numérique",
  "Droit pénal",
  "Droit de la vie privée · Image",
  "Droit animal"
]

const faqParticuliers = [
  { q: "Le cabinet peut-il me donner une consultation juridique ?", r: "Notre juriste délivre une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 : il vous explique les règles applicables à votre situation et les démarches possibles, ce qui vous permet de décider en connaissance de cause. Cette information ne constitue pas une consultation juridique personnalisée, laquelle relève de l'avocat. Le cas échéant, vous êtes orienté vers le professionnel du droit compétent." },
  { q: "Quelle différence entre une question juridique et l'abonnement à la bibliothèque ?", r: "La question juridique, facturée 47 €, vous apporte une réponse écrite sur un point de droit précis. L'abonnement Optimal, à 17,90 €/mois, donne accès à l'intégralité de la bibliothèque de modèles de documents, que vous téléchargez et réutilisez librement. Une partie de la bibliothèque reste par ailleurs accessible gratuitement après la simple création d'un compte." },
  { q: "Les modèles de documents sont-ils adaptés à ma situation personnelle ?", r: "Les modèles sont des trames générales conformes au droit en vigueur, conçues pour couvrir les situations courantes. Ils vous font gagner du temps mais ne remplacent pas l'analyse d'une situation particulière. Pour un cas complexe ou un enjeu important, notre juriste vous informe sur les points de vigilance ou vous oriente vers l'avocat compétent." },
  { q: "Le cabinet peut-il rédiger un acte ou me représenter en justice ?", r: "Non. La rédaction d'actes pour le compte d'autrui, la consultation juridique personnalisée et la représentation ou la défense en justice sont des actes réservés à l'avocat. Le cabinet prépare et vous assiste dans la rédaction de vos propres documents et vous accompagne dans vos formalités, dans le respect de la loi du 31 décembre 1971." },
  { q: "Sous quel délai vais-je obtenir une réponse ?", r: "Le délai dépend de la complexité de votre demande. Vous recevez une estimation dès la prise en charge. Notre juriste privilégie une réponse claire et documentée plutôt qu'une réponse rapide et approximative." },
  { q: "Puis-je faire appel au cabinet si j'ai déjà un avocat ?", r: "Oui. Les deux interventions sont complémentaires. Notre juriste peut vous fournir une information juridique, des modèles de documents ou un accompagnement dans vos formalités, pendant que votre avocat traite les actes et la représentation qui lui sont réservés. Le cabinet n'a pas vocation à se substituer à votre conseil habituel." }
]

export default function AccompagnementParticuliersPage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>Particuliers</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              Particuliers
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Comprenez vos droits,<br />
              prenez vos décisions en toute connaissance de cause
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Quatre façons de bénéficier de l'expertise du cabinet : information juridique, bibliothèque de documents, conseil en assurances réglementé et formations sur-mesure.
              Réponse juriste sous 24 à 48h ouvrées. 100% humain, aucune IA.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "39", label: "Domaines du droit couverts" },
                { valeur: "47 €", label: "Information sur vos droits" },
                { valeur: "24-48h", label: "Délai indicatif de réponse" },
                { valeur: "100%", label: "Humain · aucune IA" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#93c5fd' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MENTION LOI 1971 */}
        <div style={{ background: '#eff6ff', borderBottom: '1px solid #bfdbfe', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le service d'information juridique est proposé au sens de la loi n°71-1130 du 31 décembre 1971
              et ne constitue pas une consultation juridique personnalisée. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* ACCES LIBRE BIBLIOTHEQUE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: 14, padding: '1.5rem 1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem', flex: 1, minWidth: '280px' }}>
                <div style={{ width: 46, height: 46, background: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <BookOpen size={22} color="#065f46" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ color: '#065f46', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 4px' }}>Accès libre · Gratuit</p>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.35rem' }}>Une partie de la bibliothèque est gratuite</h3>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                    Créez un compte gratuit et téléchargez immédiatement une sélection de modèles de documents. L'abonnement Optimal débloque ensuite l'intégralité de la bibliothèque.
                  </p>
                </div>
              </div>
              <a href="/catalogue" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#065f46', color: 'white', textDecoration: 'none', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                Parcourir le catalogue gratuitement <ArrowRight size={16} />
              </a>
            </div>
          </section>

          {/* SERVICES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Nos services pour les particuliers
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Choisissez le service adapté à votre besoin. Chaque page détaille le fonctionnement, le tarif et les garanties.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>

              {/* Service 1 — Information sur vos droits */}
              <div style={{ background: 'white', border: '2px solid #bfdbfe', borderRadius: 14, padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, background: '#eff6ff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Scale size={22} color="#1a4fba" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ color: '#1a4fba', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Information juridique</p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Sur vos droits</h3>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
                  Vous posez votre question en langage courant. Un juriste identifie les textes applicables à votre situation
                  et vous apporte une réponse pédagogique et documentée sous 24 à 48h ouvrées. Sans abonnement, sans engagement.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Réponse 100% humaine, aucune IA", "Références juridiques précises", "Orientation vers un avocat si nécessaire", "Confidentialité totale"].map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                      <CheckCircle size={14} strokeWidth={2} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: '#0f2d6e' }}>47 €</span>
                  <span style={{ fontSize: 13, color: '#6b7280', marginLeft: '0.4rem' }}>par question · sans abonnement</span>
                </div>
                <a href="/information-sur-vos-droits" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#0f2d6e', color: 'white', textDecoration: 'none', padding: '12px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                  Poser ma question <ArrowRight size={16} />
                </a>
              </div>

              {/* Service 2 — Abonnement Optimal */}
              <div style={{ background: '#0f2d6e', border: '2px solid #1a4fba', borderRadius: 14, padding: '1.75rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 12, right: 12, background: '#c8a84b', color: 'white', fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: 12, letterSpacing: '0.05em' }}>RECOMMANDÉ</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <BookOpen size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Bibliothèque + questions</p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white', margin: 0 }}>Abonnement Optimal</h3>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
                  Accès complet à la bibliothèque de documents juridiques en DOCX, personnalisables et mis à jour.
                  Une question juriste incluse par mois, questions supplémentaires à tarif préférentiel.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    "Bibliothèque complète de documents DOCX",
                    "1 question juriste / mois incluse",
                    `Questions supplémentaires à 14,90 €`,
                    "Mises à jour législatives incluses"
                  ].map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>
                      <CheckCircle size={14} strokeWidth={2} style={{ color: '#93c5fd', marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '4px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>17,90 €</span>
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', marginLeft: '0.4rem' }}>/ mois · sans engagement</span>
                </div>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', margin: '0 0 1rem' }}>ou 149 € / an · 3 mois offerts</p>
                <a href="/catalogue" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '12px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                  Voir la bibliothèque <ArrowRight size={16} />
                </a>
              </div>

              {/* Service 3 — Conseil en assurances */}
              <div style={{ background: 'white', border: '2px solid #a7f3d0', borderRadius: 14, padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, background: '#ecfdf5', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Shield size={22} color="#065f46" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ color: '#065f46', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>ORIAS 26003943</p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Conseil en assurances</h3>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
                  Intermédiaire en assurances réglementé. Audit de vos contrats existants, comparaison des offres du marché,
                  rapport de conseil écrit et motivé. Aucun lien exclusif avec aucune compagnie.
                  Conforme à l'article L.521-4 du Code des assurances (DDA).
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Conseil multimarque, objectif", "Rapport écrit archivé dans votre espace", "Commission assureur séparée et déclarée", "Habitation, auto, vie, prévoyance, santé"].map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                      <CheckCircle size={14} strokeWidth={2} style={{ color: '#065f46', marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: '#065f46' }}>90 €</span>
                  <span style={{ fontSize: 13, color: '#6b7280', marginLeft: '0.4rem' }}>forfait conseil particulier</span>
                </div>
                <a href="/conseil-assurances" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#065f46', color: 'white', textDecoration: 'none', padding: '12px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                  En savoir plus <ArrowRight size={16} />
                </a>
              </div>

              {/* Service 4 — Formations */}
              <div style={{ background: 'white', border: '2px solid #ddd6fe', borderRadius: 14, padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 44, height: 44, background: '#f5f3ff', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <GraduationCap size={22} color="#7c3aed" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ color: '#7c3aed', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>Sur-mesure</p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Formations</h3>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: '1rem', flex: 1 }}>
                  Sessions individualisées pour comprendre un sujet juridique ou assurantiel qui vous concerne : droit du travail, baux, succession, assurances. En présentiel ou à distance, adaptées à votre niveau.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {["Programme adapté à votre besoin", "En présentiel ou à distance", "Supports pédagogiques fournis", "Animée par notre juriste"].map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 12, color: '#374151' }}>
                      <CheckCircle size={14} strokeWidth={2} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: '#7c3aed' }}>Sur devis</span>
                </div>
                <a href="/formations" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '12px 20px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                  En savoir plus <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </section>

          {/* DOMAINES — grille complète */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Tous les domaines du droit
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Le cabinet couvre l'ensemble des branches du droit. Quelle que soit votre situation, notre juriste identifie les règles applicables et vous apporte une réponse documentée.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {domaines.map((d, i) => (
                <span key={i} style={{
                  display: 'inline-block',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  color: '#374151',
                  fontSize: 12,
                  fontWeight: 500,
                  padding: '5px 12px',
                  borderRadius: 20,
                  lineHeight: 1.4
                }}>
                  {d}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic', margin: 0 }}>
              En cas d'urgence judiciaire imminente (audience, garde à vue, délai de recours imminent), vous serez orienté vers l'avocat compétent.
            </p>
          </section>

          {/* POURQUOI LE CABINET */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '2rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1.5rem' }}>
              Pourquoi choisir le Cabinet Cholez-Pagotto ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem' }}>
              {[
                { titre: "100% humain", desc: "Chaque réponse est rédigée par un juriste. Aucune IA dans la chaîne de production." },
                { titre: "Tarifs fixes et affichés", desc: `47 € la question, 17,90 €/mois l'abonnement. Aucune surprise.` },
                { titre: "Indépendant", desc: "Aucun lien exclusif avec un assureur. Les recommandations reposent sur votre intérêt." },
                { titre: "Réglementé", desc: "Juriste formaliste (CRFF), intermédiaire en assurances (ORIAS 26003943, ACPR)." }
              ].map((item, i) => (
                <div key={i} style={{ borderTop: '3px solid #0f2d6e', paddingTop: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 6px' }}>{item.titre}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ENCART JURISTE OU AVOCAT */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 14, padding: '1.5rem 1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem', flex: 1, minWidth: '280px' }}>
                <div style={{ width: 46, height: 46, background: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Scale size={22} color="#b45309" strokeWidth={1.5} />
                </div>
                <div>
                  <p style={{ color: '#b45309', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 4px' }}>Juriste ou avocat ?</p>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.35rem' }}>Savoir qui consulter selon votre besoin</h3>
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.6, margin: 0 }}>
                    {"L'information juridique, les formalités et le conseil en assurance relèvent du cabinet ; la consultation personnalisée, la rédaction d'actes pour autrui et la représentation en justice relèvent de l'avocat. Notre comparatif détaille ce que fait le cabinet, ce qui revient à l'avocat, et comment les deux interventions se complètent."}
                  </p>
                </div>
              </div>
              <a href="/juriste-formaliste-ou-avocat" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#b45309', color: 'white', textDecoration: 'none', padding: '12px 22px', borderRadius: 8, fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                Comparer juriste et avocat <ArrowRight size={16} />
              </a>
            </div>
          </section>

          {/* AUTEUR */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
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
              <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 0.3rem', lineHeight: 1.6 }}>
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Intermédiaire en assurances immatriculé à l'ORIAS sous le numéro 26003943, sous contrôle de l'ACPR. Adhérent ENDYA.
              </p>
              <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.6 }}>
                Chercheur associé, contributeur aux ouvrages{' '}
                <em>« L'éducation, ça se partage ?»</em> (L'Harmattan, 2021)
                {' '}et <em>« Agir en situation de discrédit »</em> (Le Cavalier Bleu, 2026).
              </p>
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 14, padding: '2.5rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Par où commencer ?</h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '0 0 1.5rem', lineHeight: 1.9 }}>
              Une question précise : <strong>Information sur vos droits</strong> : 47 €.<br />
              Besoin de documents régulièrement : <strong>Abonnement Optimal</strong> : à partir de 17,90 € / mois.<br />
              Vos assurances à revoir : <strong>Conseil en assurances</strong> : forfait 90 €.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/information-sur-vos-droits" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem' }}>
                Poser une question · 47 € <ArrowRight size={16} />
              </a>
              <a href="/catalogue" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                Voir la bibliothèque
              </a>
              <a href="/conseil-assurances" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                Conseil en assurances
              </a>
            </div>
          </section>

        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqParticuliers.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) }) }} />
        {/* FAQ */}
        <section id="faq" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <style dangerouslySetInnerHTML={{ __html: 'details.faq-item summary::-webkit-details-marker{display:none}details.faq-item summary{list-style:none}details.faq-item[open] .faq-chevron{transform:rotate(180deg)}' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus fréquentes sur nos services aux particuliers.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqParticuliers.map((faq, i) => (
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