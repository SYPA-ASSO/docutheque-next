// app/catalogue/page.tsx
// Modeles de documents sur demande : plus aucune liste de modeles n'est affichee, meme aux clients
// connectes. Le client decrit son besoin depuis son espace client ; seul le cabinet voit les
// modeles disponibles (administration) et transmet le fichier par « Echanges de documents ».
// Regles : zero tiret long dans le contenu visible.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import BanniereALaUne from '@/components/BanniereALaUne'
import {
  FileText, ArrowRight, ChevronRight, CheckCircle, Scale, Info, ChevronDown, UserPlus, Send, FolderSync
} from 'lucide-react'

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/catalogue#service",
      "name": "Modèles de documents juridiques sur demande",
      "description": "Le client décrit le document dont il a besoin ; le cabinet lui transmet le modèle correspondant, s'il en existe un, au format DOCX.",
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

const etapes = [
  { icone: <UserPlus size={20} strokeWidth={1.5} />, titre: '1. Créez votre compte gratuit', texte: "L'inscription est gratuite et vous donne accès à votre espace client." },
  { icone: <Send size={20} strokeWidth={1.5} />, titre: '2. Décrivez votre besoin', texte: "Dans l'onglet « Demander un modèle », indiquez le document souhaité et, si vous le pouvez, votre situation." },
  { icone: <FolderSync size={20} strokeWidth={1.5} />, titre: '3. Recevez le modèle', texte: "Le cabinet vous transmet le modèle dans « Échanges de documents » et vous prévient par e-mail." },
]

const avantages = [
  {
    titre: "Élaborés avec rigueur",
    texte: "Les modèles sont élaborés sur la base du droit français en vigueur et mis à jour régulièrement.",
    icone: <Scale size={18} strokeWidth={1.5} />
  },
  {
    titre: "Format DOCX",
    texte: "Téléchargeables et personnalisables dans Word, LibreOffice ou Google Docs. Vous adaptez chaque document à votre situation.",
    icone: <FileText size={18} strokeWidth={1.5} />
  },
  {
    titre: "Sur demande",
    texte: "Vous décrivez votre besoin et le cabinet vous répond avec le modèle correspondant, ou vous indique qu'il n'en existe pas.",
    icone: <CheckCircle size={18} strokeWidth={1.5} />
  },
]

const faqCatalogue = [
  { q: "Comment demander un modèle de document ?", r: "Créez un compte gratuit, puis ouvrez l'onglet « Demander un modèle » de votre espace client. Indiquez le document souhaité et, facultativement, votre situation et la date pour laquelle vous en avez besoin. Vous recevez un e-mail de confirmation, puis un second e-mail lorsque le cabinet a donné suite à votre demande." },
  { q: "Sous quel format les modèles sont-ils transmis ?", r: "Les modèles sont fournis au format DOCX (Word), personnalisables. Vous les complétez et les adaptez librement à votre situation depuis votre traitement de texte habituel." },
  { q: "Que se passe-t-il si aucun modèle ne correspond à ma demande ?", r: "Le cabinet vous l'indique dans sa réponse. Votre demande est alors clôturée sans suite, et vous pouvez en formuler une nouvelle en précisant votre besoin." },
  { q: "Les modèles remplacent-ils l'avis d'un professionnel ?", r: "Non. Les modèles sont des documents de référence à usage général, conçus pour couvrir les situations courantes. Ils constituent une information documentaire et ne remplacent pas une consultation adaptée à votre situation, laquelle relève de l'avocat. Pour un cas particulier ou un enjeu important, notre juriste peut vous informer sur les points de vigilance ou vous orienter." },
  { q: "J'ai déjà téléchargé ou acheté des documents : où les retrouver ?", r: "Les documents que vous avez déjà obtenus restent disponibles dans votre espace client, onglet « Demander un modèle », rubrique « Vos documents déjà obtenus »." },
]

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
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
              MODÈLES DE DOCUMENTS
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight: 700, margin: '0 0 1rem', lineHeight: 1.2 }}>
              Demandez le modèle de document dont vous avez besoin
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, margin: '0 auto 2rem' }}>
              Contrats, statuts, courriers, mises en demeure, documents RGPD : décrivez votre besoin. Le cabinet vous transmet le modèle correspondant, s&apos;il en existe un, au format DOCX.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/espace-client?onglet=documents" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
                Demander un modèle <ArrowRight size={15} />
              </a>
              <a href="/connexion" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, textDecoration: 'none' }}>
                Créer un compte gratuit
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: '1.75rem 0 0' }}>
          <BanniereALaUne maxWidth={1100} />
        </section>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* MENTION LEGALE */}
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '0.75rem 1.25rem', marginBottom: '3rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={16} strokeWidth={1.5} style={{ color: '#1a4fba', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Les modèles fournis constituent des documents de référence personnalisables au format DOCX.
              Ils ne constituent pas une consultation juridique personnalisée au sens de la loi n°71-1130 du 31 décembre 1971.
              En cas de doute sur l&apos;adaptation d&apos;un document à votre situation, le service{' '}
              <a href="/information-sur-vos-droits" style={{ color: '#1a4fba' }}>Information sur vos droits</a> peut vous apporter un éclairage complémentaire.
            </p>
          </div>

          {/* COMMENT CA MARCHE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              Comment obtenir un modèle ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.2rem' }}>
              {etapes.map((e, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
                  <div style={{ color: '#1a4fba', marginBottom: '0.75rem' }}>{e.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.4rem' }}>{e.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{e.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AVANTAGES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '2rem' }}>
              Pourquoi demander un modèle au cabinet ?
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

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 14, padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 8px' }}>
              Un document à vous procurer ?
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, margin: '0 0 20px', lineHeight: 1.7 }}>
              Créez un compte gratuit, décrivez votre besoin et recevez le modèle correspondant dans votre espace client.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/espace-client?onglet=documents" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14 }}>
                Demander un modèle <ArrowRight size={16} />
              </a>
              <a href="/information-sur-vos-droits" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 600, fontSize: 14, border: '1px solid rgba(255,255,255,0.6)' }}>
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
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Tout savoir sur la demande de modèle, le format et la suite donnée à votre demande.</p>
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
