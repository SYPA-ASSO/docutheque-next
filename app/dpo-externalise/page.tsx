// app/dpo-externalise/page.tsx
// Cabinet Cholez-Pagotto - DPO externalisé
// Règles : zéro tiret long, cholez-pagotto.fr, Notre juriste singulier

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, ChevronRight, Shield, FileText, Users, Lock, Info, Clock, Award } from 'lucide-react'

export const metadata = {
  title: "DPO externalisé · Délégué à la Protection des Données · Cabinet Cholez-Pagotto",
  description: "Mission de DPO externalisé (Délégué à la Protection des Données) pour les organismes publics, les associations et les structures privées. Interlocuteur CNIL désigné, veille réglementaire, gestion des incidents.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/dpo-externalise',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/dpo-externalise#service",
      "name": "DPO externalisé - Cabinet Cholez-Pagotto",
      "description": "Mission de Délégué à la Protection des Données (DPO) externalisé. Désignation auprès de la CNIL, veille réglementaire, gestion des incidents, registre des traitements, interlocuteur des personnes concernées.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "DPO externalisé",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": {
        "@type": "Offer",
        "description": "Sur devis annuel selon la taille de la structure et le volume des traitements",
        "availability": "https://schema.org/InStock"
      },
      "url": "https://cholez-pagotto.fr/dpo-externalise"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/dpo-externalise#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelles organisations sont obligées de désigner un DPO ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La désignation d'un DPO est obligatoire pour : les organismes publics et les autorités publiques (quelle que soit la nature du traitement) ; les organismes dont les activités de base consistent en des traitements à grande échelle de données sensibles (santé, données biométriques, infractions pénales...) ; les organismes dont les activités de base consistent en un suivi régulier et systématique à grande échelle des personnes. La désignation est fortement recommandée pour les associations de taille significative, les établissements médico-sociaux et les entreprises traitant des données sensibles."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'un DPO externalisé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un DPO externalisé est un Délégué à la Protection des Données qui intervient auprès d'une organisation sans en être salarié, sur la base d'un contrat de prestation. L'article 37.6 du RGPD autorise expressément cette modalité. Le DPO externalisé dispose de la même indépendance et des mêmes missions qu'un DPO interne, mais ses compétences sont mutualisées entre plusieurs structures ce qui réduit le coût pour chaque client."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre un DPO et un responsable de traitement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le responsable de traitement est l'organisation (ou son représentant légal) qui détermine les finalités et les moyens du traitement. Il porte la responsabilité juridique de la conformité RGPD. Le DPO est un conseiller indépendant qui informe, conseille et contrôle la conformité au sein de cette organisation. Il rapporte directement au niveau le plus élevé de la direction et ne peut pas recevoir d'instructions sur l'exercice de ses missions."
          }
        },
        {
          "@type": "Question",
          "name": "Comment se déroule la désignation du DPO auprès de la CNIL ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La désignation s'effectue via l'espace professionnel de la CNIL (notifications.cnil.fr). Les informations requises incluent l'identité du DPO, ses coordonnées professionnelles et les organisations pour lesquelles il exerce. La désignation prend effet immédiatement. Le DPO externalisé s'occupe de la procédure de désignation pour le compte de ses clients."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/dpo-externalise#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://cholez-pagotto.fr/services" },
        { "@type": "ListItem", "position": 3, "name": "DPO externalisé", "item": "https://cholez-pagotto.fr/dpo-externalise" }
      ]
    }
  ]
}

const missions = [
  {
    icone: <Shield size={22} strokeWidth={1.5} />,
    titre: "Information et conseil",
    description: "Informer et conseiller le responsable de traitement, les sous-traitants et les employés sur leurs obligations RGPD. Veille permanente sur l'évolution du cadre réglementaire et des décisions CNIL.",
    couleur: "#7c3aed"
  },
  {
    icone: <FileText size={22} strokeWidth={1.5} />,
    titre: "Contrôle de la conformité",
    description: "Contrôler le respect du RGPD et des politiques internes de protection des données. Audit documentaire régulier, vérification des registres, des contrats sous-traitants et des mesures de sécurité.",
    couleur: "#0f2d6e"
  },
  {
    icone: <Users size={22} strokeWidth={1.5} />,
    titre: "Interlocuteur des personnes concernées",
    description: "Point de contact désigné pour les personnes souhaitant exercer leurs droits (accès, rectification, effacement, opposition, portabilité). Traitement des demandes dans les délais réglementaires.",
    couleur: "#065f46"
  },
  {
    icone: <Award size={22} strokeWidth={1.5} />,
    titre: "Interlocuteur de la CNIL",
    description: "Point de contact officiel désigné auprès de la CNIL. Gestion des échanges avec l'autorité de contrôle, des demandes d'information et des procédures de contrôle.",
    couleur: "#dc2626"
  },
  {
    icone: <Lock size={22} strokeWidth={1.5} />,
    titre: "Analyse d'impact (AIPD)",
    description: "Conseil sur la nécessité et la réalisation des analyses d'impact (AIPD, article 35 RGPD) pour les traitements susceptibles d'engendrer un risque élevé pour les droits et libertés des personnes.",
    couleur: "#0891b2"
  },
  {
    icone: <Clock size={22} strokeWidth={1.5} />,
    titre: "Gestion des violations",
    description: "Accompagnement en cas de violation de données personnelles : évaluation des risques, notification à la CNIL dans les 72 heures, communication aux personnes concernées si nécessaire, mise à jour du registre.",
    couleur: "#d97706"
  }
]

const obligatoirePour = [
  {
    categorie: "Organismes publics",
    desc: "Toutes les autorités publiques et tous les organismes publics, quelle que soit la nature de leurs traitements. Communes, établissements publics, CCAS, EHPAD publics.",
    obligatoire: true
  },
  {
    categorie: "Traitements de données sensibles à grande échelle",
    desc: "Organismes dont l'activité principale implique le traitement de données de santé, données génétiques, biométriques, religieuses, politiques, syndicales, ou relatives aux infractions pénales.",
    obligatoire: true
  },
  {
    categorie: "Suivi régulier et systématique à grande échelle",
    desc: "Organismes dont l'activité principale consiste à surveiller les personnes de façon régulière : profilage, géolocalisation, suivi comportemental.",
    obligatoire: true
  },
  {
    categorie: "Associations et structures ESS",
    desc: "Non obligatoire mais fortement recommandé pour les associations employeuses, les structures médico-sociales et les organismes traitant des données sensibles (santé, convictions, vulnérabilité).",
    obligatoire: false
  },
  {
    categorie: "PME traitant des données sensibles",
    desc: "Non obligatoire en général mais recommandé pour les professions de santé, les cabinets RH, les organismes de formation et toute structure traitant régulièrement des catégories sensibles.",
    obligatoire: false
  }
]

const faqs = [
  {
    q: "Quelles organisations sont obligées de désigner un DPO ?",
    r: "La désignation est obligatoire pour : les organismes publics (toutes tailles) ; les organismes dont les activités de base consistent en des traitements à grande échelle de données sensibles (santé, biométrie, religion...) ; les organismes procédant à un suivi régulier et systématique à grande échelle des personnes. Elle est fortement recommandée pour les associations significatives, les structures médico-sociales et les entreprises traitant des données sensibles."
  },
  {
    q: "Qu'est-ce qu'un DPO externalisé ?",
    r: "Un DPO externalisé intervient auprès de votre organisation sur la base d'un contrat de prestation, sans en être salarié. L'article 37.6 du RGPD autorise expressément cette modalité. Il dispose de la même indépendance et des mêmes missions qu'un DPO interne, mais ses compétences sont mutualisées entre plusieurs structures, ce qui réduit le coût pour chaque client."
  },
  {
    q: "Quelle est la différence entre un DPO et un responsable de traitement ?",
    r: "Le responsable de traitement est l'organisation (ou son représentant légal) qui détermine les finalités et les moyens du traitement et porte la responsabilité juridique de la conformité. Le DPO est un conseiller indépendant qui informe, conseille et contrôle la conformité. Il rapporte directement à la direction et ne peut pas recevoir d'instructions sur l'exercice de ses missions."
  },
  {
    q: "Comment se déroule la désignation auprès de la CNIL ?",
    r: "La désignation s'effectue via l'espace professionnel de la CNIL (notifications.cnil.fr). Elle prend effet immédiatement après notification. En tant que DPO externalisé, le cabinet s'occupe de la procédure de désignation pour le compte de ses clients."
  },
  {
    q: "Faut-il désigner un DPO si on fait déjà appel à la RGPD & conformité ?",
    r: "Ce sont deux missions distinctes. La mission RGPD & conformité produit les documents et procédures nécessaires (registre, politique de confidentialité, mentions). La mission DPO externalisé assure la conformité dans la durée : veille, contrôle, interlocution CNIL, gestion des incidents. Les deux sont complémentaires : une première mise en conformité est souvent le préalable à la désignation d'un DPO."
  }
]

export default function DPOExternalisePage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>DPO externalisé</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 60%, #7c3aed 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                DPO externalisé
              </span>
              <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.3)' }}>
                Art. 37.6 RGPD
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Délégué à la Protection des Données externalisé
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Mission de DPO externalisé pour les organismes soumis à l'obligation légale de désignation
              et les structures souhaitant assurer leur conformité RGPD dans la durée.
              Désignation auprès de la CNIL, veille réglementaire, gestion des incidents, interlocuteur des personnes concernées.
              Engagement annuel, sur devis.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#4c1d95', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Demander un devis <ArrowRight size={18} />
              </a>
              <a href="/rgpd-conformite" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.4)' }}>
                Mise en conformité RGPD
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "Art. 37", label: "Base légale RGPD" },
                { valeur: "6", label: "Missions du DPO" },
                { valeur: "72h", label: "Délai notification violation" },
                { valeur: "Sur devis", label: "Engagement annuel" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#c4b5fd' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENCART */}
        <div style={{ background: '#f5f3ff', borderBottom: '1px solid #e9d5ff', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le DPO externalisé (Délégué à la Protection des Données) est expressément autorisé par l'article 37.6 du RGPD.
              Sa désignation est notifiée à la CNIL. Il est soumis aux mêmes obligations d'indépendance qu'un DPO interne (article 38 RGPD).
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* MISSIONS */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Les missions du DPO (article 39 RGPD)
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Les missions du DPO sont définies par le règlement et ne peuvent être limitées contractuellement.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {missions.map((m, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', borderLeft: `4px solid ${m.couleur}` }}>
                  <div style={{ color: m.couleur, marginBottom: '0.75rem' }}>{m.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>{m.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{m.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* QUI EST OBLIGÉ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Qui doit désigner un DPO ?
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              L'article 37 du RGPD distingue les cas d'obligation légale et les cas de recommandation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {obligatoirePour.map((item, i) => (
                <div key={i} style={{
                  background: 'white',
                  border: `1px solid ${item.obligatoire ? '#fecaca' : '#e5e7eb'}`,
                  borderRadius: 12, padding: '1.25rem',
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  borderLeft: `4px solid ${item.obligatoire ? '#dc2626' : '#16a34a'}`
                }}>
                  <span style={{
                    background: item.obligatoire ? '#fef2f2' : '#f0fdf4',
                    color: item.obligatoire ? '#dc2626' : '#16a34a',
                    fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 12,
                    whiteSpace: 'nowrap', flexShrink: 0, marginTop: 2
                  }}>
                    {item.obligatoire ? 'OBLIGATOIRE' : 'RECOMMANDÉ'}
                  </span>
                  <div>
                    <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 4px' }}>{item.categorie}</p>
                    <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AVANTAGES EXTERNALISATION */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '2rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1.5rem' }}>
              Pourquoi externaliser la mission DPO ?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
              {[
                { titre: "Indépendance garantie", desc: "Le DPO externalisé n'est pas soumis à la hiérarchie interne. Son indépendance est structurelle, non déclarative." },
                { titre: "Expertise mutualisée", desc: "Les compétences RGPD sont permanentes et à jour. Pas de formation initiale ni de veille réglementaire à assurer en interne." },
                { titre: "Coût maîtrisé", desc: "Un engagement annuel sur devis, sans les charges d'un salarié dédié. Adapté aux structures qui n'ont pas besoin d'un DPO à temps plein." },
                { titre: "Disponibilité immédiate", desc: "Désignation auprès de la CNIL réalisée dès la prise en charge. Aucun délai de recrutement ni de formation." }
              ].map((item, i) => (
                <div key={i} style={{ borderTop: '3px solid #7c3aed', paddingTop: '0.75rem' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 6px' }}>{item.titre}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* RENVOI RGPD */}
          <section style={{ background: '#f5f3ff', border: '1px solid #e9d5ff', borderRadius: 12, padding: '2rem', marginBottom: '3.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <div>
              <p style={{ color: '#7c3aed', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.4rem' }}>Prérequis recommandé</p>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e1b4b', margin: '0 0 0.4rem' }}>Vous n'avez pas encore de registre ni de politique de confidentialité ?</h2>
              <p style={{ fontSize: 13, color: '#374151', margin: 0 }}>
                La mission RGPD & conformité produit les documents fondamentaux avant la prise de fonction du DPO.
              </p>
            </div>
            <a href="/rgpd-conformite" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
              RGPD & conformité <ArrowRight size={16} />
            </a>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus courantes sur le DPO externalisé.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faqs.map((faq, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1rem 1.5rem' }}>
                  <summary style={{ fontWeight: 600, color: '#0f2d6e', fontSize: '0.9rem', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                    <span>{faq.q}</span>
                    <span style={{ color: '#7c3aed', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>+</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: 13, lineHeight: 1.75, marginTop: '0.75rem', marginBottom: 0 }}>{faq.r}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)', borderRadius: 14, padding: '2.5rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Votre structure a-t-elle l'obligation de désigner un DPO ?</h2>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: '0.5rem auto 1.5rem', maxWidth: 500, lineHeight: 1.7 }}>
              Décrivez votre structure et son activité. Notre juriste détermine si la désignation est obligatoire
              ou recommandée et vous propose un devis annuel adapté.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#4c1d95', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Demander un devis <ArrowRight size={18} />
              </a>
              <a href="/rgpd-conformite" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                RGPD & conformité
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}