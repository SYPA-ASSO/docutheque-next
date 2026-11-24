// app/catalogue/page.tsx
// Modeles de documents : la Docutheque (site distinct) est le point d'entree unique. Aucune liste de
// modeles n'est affichee ici. Regles : zero tiret long dans le contenu visible.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import BanniereALaUne from '@/components/BanniereALaUne'
import LienSortieDocutheque from '@/components/LienSortieDocutheque'
import {
  FileText, ArrowRight, ChevronRight, CheckCircle, Scale, Info, ChevronDown
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/catalogue#service",
      "name": "Modèles de documents juridiques : Docuthèque",
      "description": "Modèles de documents juridiques au format DOCX : modèles gratuits et payants, dossiers et formalités, accessibles depuis la Docuthèque du cabinet.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/catalogue"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/catalogue#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Modèles de documents", "item": "https://cholez-pagotto.fr/catalogue" }
      ]
    }
  ]
}

const offresDocutheque = [
  { prix: 'Gratuit', titre: 'Compte gratuit', texte: "Accès à un choix de modèles courants, à télécharger au format DOCX." },
  { prix: 'Dès 0,99 €', titre: "Documents à l'unité", texte: "Les autres modèles, personnalisés à votre situation, achetés un par un." },
  { prix: 'Dès 19 €', titre: 'Dossiers et formalités', texte: "Dossiers PDF dès 19 € ; formalités dès 29 € (frais officiels en sus)." },
  { prix: '149 € par an', titre: 'Abonnement Docuthèque', texte: "Tous les modèles payants et les packs, les dossiers et les formalités d'entreprise individuelle et de micro-entreprise, et les questions à 19 € au lieu de 47 €." },
]

const avantages = [
  { titre: "Élaborés avec rigueur", texte: "Les modèles sont élaborés sur la base du droit français en vigueur et mis à jour régulièrement.", icone: <Scale size={18} strokeWidth={1.5} /> },
  { titre: "Format DOCX", texte: "Téléchargeables et personnalisables dans Word, LibreOffice ou Google Docs. Vous adaptez chaque document à votre situation.", icone: <FileText size={18} strokeWidth={1.5} /> },
  { titre: "Gratuit ou payant, vous choisissez", texte: "Un compte gratuit pour commencer, des documents dès 0,99 € à l'unité, ou l'abonnement à 149 € par an pour tout avoir.", icone: <CheckCircle size={18} strokeWidth={1.5} /> },
]

const faqCatalogue = [
  { q: "Où trouver les modèles de documents ?", r: "Tous les modèles sont accessibles depuis la Docuthèque (docutheque.cholez-pagotto.fr). Créez un compte gratuit pour accéder aux modèles gratuits ; les autres documents s'achètent à l'unité dès 0,99 €, ou sont inclus dans l'abonnement Docuthèque à 149 € par an." },
  { q: "Que contient l'abonnement de la Docuthèque ?", r: "L'abonnement (149 € par an) donne accès à tous les modèles payants et aux packs, aux dossiers, aux formalités d'entreprise individuelle et de micro-entreprise, et aux questions à un juriste à 19 € au lieu de 47 €. Les statuts d'entrepreneur se vendent séparément." },
  { q: "Le compte de la Docuthèque est-il le même que mon espace client du cabinet ?", r: "Non. La Docuthèque a son propre compte et son propre abonnement, distincts de l'espace client et de l'Abonnement Optimal du cabinet." },
  { q: "Sous quel format les modèles sont-ils fournis ?", r: "Les modèles sont fournis au format DOCX (Word), personnalisables. Les dossiers sont fournis en PDF. Vous adaptez les documents à votre situation depuis votre traitement de texte habituel." },
  { q: "Les modèles remplacent-ils l'avis d'un professionnel ?", r: "Non. Les modèles sont des documents de référence conçus pour couvrir les situations courantes. Ils constituent une information documentaire et ne remplacent pas une consultation adaptée à votre situation, laquelle relève de l'avocat. Pour un cas particulier ou un enjeu important, notre juriste peut vous informer sur les points de vigilance ou vous orienter." },
  { q: "J'ai déjà téléchargé ou acheté des documents au cabinet : où les retrouver ?", r: "Les documents déjà obtenus auprès du cabinet restent disponibles dans votre espace client, onglet « Demander un modèle », rubrique « Vos documents déjà obtenus ». Ceux de la Docuthèque se retrouvent dans votre compte Docuthèque." },
]

const btnBlanc = { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' } as const
const btnContour = { display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' } as const
const btnPlein = { display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0f2d6e', color: 'white', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' } as const

export default function CataloguePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      {/* BREADCRUMB */}
      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0.6rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 13, color: '#6b7280' }}>
            <a href="/" style={{ color: '#1a4fba', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={14} />
            <span style={{ color: '#374151', fontWeight: 600 }}>Modèles de documents</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 1.5rem 3rem', color: 'white', textAlign: 'center' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              MODÈLES DE DOCUMENTS
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
              Modèles de documents juridiques : retrouvez-les dans la Docuthèque
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 auto 1.5rem' }}>
              Contrats, baux, statuts, courriers, documents RGPD : créez un compte gratuit sur notre Docuthèque et accédez aux modèles gratuits, aux documents dès 0,99 €, aux dossiers et aux formalités.
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '0 0 2rem' }}>Note Google : 5,0/5.</p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <LienSortieDocutheque style={btnBlanc}>
                Accéder à la Docuthèque <ArrowRight size={15} />
              </LienSortieDocutheque>
              <a href="#docutheque" style={btnContour}>
                Voir les offres
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: '1.75rem 0 0' }}>
          <BanniereALaUne maxWidth={1100} />
        </section>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* EN RESUME */}
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.6rem' }}>En résumé</h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.8, margin: 0 }}>
              Les modèles gratuits, les documents à l&apos;unité, les dossiers et les formalités se trouvent dans la Docuthèque, qui a son propre compte et son propre abonnement (149 € par an), distincts de ceux du cabinet.
            </p>
          </div>

          {/* OFFRES DOCUTHEQUE */}
          <section id="docutheque" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Les offres de la Docuthèque</h2>
            <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 1.5rem' }}>Un compte gratuit pour commencer, un abonnement si vous avez besoin de tout.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.2rem', marginBottom: '1.5rem' }}>
              {offresDocutheque.map((o, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: '#1a4fba', margin: '0 0 0.3rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{o.prix}</p>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.4rem' }}>{o.titre}</h3>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{o.texte}</p>
                </div>
              ))}
            </div>
            <LienSortieDocutheque style={btnPlein}>
              Découvrir la Docuthèque <ArrowRight size={15} />
            </LienSortieDocutheque>
          </section>

          {/* AVANTAGES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              Des modèles fiables, que vous adaptez à votre situation
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

          {/* MENTION LEGALE */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.75rem 1.25rem', marginBottom: '3rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Les modèles constituent des documents de référence personnalisables au format DOCX.
              Ils ne constituent pas une consultation juridique personnalisée au sens de la loi n°71-1130 du 31 décembre 1971.
              En cas de doute sur l&apos;adaptation d&apos;un document à votre situation, le service{' '}
              <a href="/information-sur-vos-droits" style={{ color: '#1a4fba' }}>Information sur vos droits</a> peut vous apporter un éclairage complémentaire.
            </p>
          </div>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px' }}>
              Un document à vous procurer ?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, margin: '0 0 20px', lineHeight: 1.7 }}>
              Commencez par la Docuthèque : un compte gratuit suffit pour accéder aux modèles gratuits.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <LienSortieDocutheque style={btnBlanc}>
                Accéder à la Docuthèque <ArrowRight size={16} />
              </LienSortieDocutheque>
              <a href="/information-sur-vos-droits" style={btnContour}>
                Poser une question juridique
              </a>
            </div>
          </section>

        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqCatalogue.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) }) }} />

        {/* FAQ */}
        <section id="faq" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <style dangerouslySetInnerHTML={{ __html: 'details.faq-item summary::-webkit-details-marker{display:none}details.faq-item summary{list-style:none}details.faq-item[open] .faq-chevron{transform:rotate(180deg)}' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Docuthèque, abonnements et format des documents.</p>
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
