// app/rgpd-conformite/page.tsx
// Cabinet Cholez-Pagotto - RGPD & conformité
// Règles : zéro tiret long, cholez-pagotto.fr, Notre juriste singulier

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, ArrowRight, ChevronRight, Shield, FileText, Users, Lock, AlertCircle, Info } from 'lucide-react'

export const metadata = {
  title: "RGPD & conformité · Mise en conformité pour entreprises et associations · Cabinet Cholez-Pagotto",
  description: "Diagnostic RGPD, registre des activités de traitement, politique de confidentialité, mentions d'information. Accompagnement des entreprises, associations et collectivités dans leur mise en conformité.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/rgpd-conformite',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite#service",
      "name": "RGPD et conformité - Cabinet Cholez-Pagotto",
      "description": "Accompagnement à la mise en conformité RGPD : diagnostic documentaire, registre des activités de traitement, politique de confidentialité, mentions d'information, formation des équipes.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Conformité RGPD",
      "areaServed": { "@type": "Country", "name": "France" },
      "offers": {
        "@type": "Offer",
        "description": "Sur devis selon la taille de la structure et le périmètre de la mission",
        "availability": "https://schema.org/InStock"
      },
      "url": "https://cholez-pagotto.fr/rgpd-conformite"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le RGPD s'applique-t-il aux petites structures ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le Règlement Général sur la Protection des Données (UE 2016/679) s'applique à toute organisation qui traite des données personnelles de personnes situées dans l'Union Européenne, quelle que soit sa taille. Une TPE, une association de 10 membres ou une micro-entreprise sont soumises aux mêmes obligations que les grandes entreprises, avec certains aménagements pour les organisations de moins de 250 personnes."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'un registre des activités de traitement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le registre des activités de traitement (article 30 du RGPD) est un document interne obligatoire qui recense tous les traitements de données personnelles effectués par votre organisation. Il décrit pour chaque traitement : les finalités, les catégories de données, les destinataires, les durées de conservation et les mesures de sécurité. C'est le document de référence en cas de contrôle CNIL."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sont les sanctions en cas de non-conformité RGPD ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La CNIL peut prononcer des sanctions administratives allant jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial (le montant le plus élevé). Ces plafonds s'appliquent à toutes les organisations, y compris les associations et les collectivités. Au-delà des sanctions financières, la CNIL peut imposer des mesures correctives, des injonctions de mise en conformité et des limitations de traitement."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre le RGPD et la loi Informatique et Libertés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le RGPD est un règlement européen directement applicable dans tous les États membres depuis le 25 mai 2018. La loi Informatique et Libertés (loi n°78-17 du 6 janvier 1978, modifiée par la loi n°2018-493 du 20 juin 2018) est la loi française qui complète le RGPD et précise certaines règles spécifiques au droit français, notamment les dérogations et conditions particulières prévues par le règlement."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://cholez-pagotto.fr/services" },
        { "@type": "ListItem", "position": 3, "name": "RGPD & conformité", "item": "https://cholez-pagotto.fr/rgpd-conformite" }
      ]
    }
  ]
}

const prestations = [
  {
    icone: <Shield size={22} strokeWidth={1.5} />,
    titre: "Diagnostic documentaire RGPD",
    description: "Audit de votre situation actuelle : cartographie des traitements existants, identification des risques, évaluation des lacunes documentaires. Le diagnostic produit un rapport de conformité priorisé.",
    couleur: "#0f2d6e",
    fond: "#eff6ff"
  },
  {
    icone: <FileText size={22} strokeWidth={1.5} />,
    titre: "Registre des activités de traitement",
    description: "Constitution ou mise à jour du registre obligatoire (article 30 RGPD). Description de chaque traitement : finalités, bases légales, catégories de données, durées de conservation, destinataires, mesures de sécurité.",
    couleur: "#7c3aed",
    fond: "#f5f3ff"
  },
  {
    icone: <Lock size={22} strokeWidth={1.5} />,
    titre: "Politique de confidentialité",
    description: "Rédaction ou refonte de votre politique de confidentialité, conforme aux exigences des articles 13 et 14 du RGPD. Adaptée à votre activité, rédigée en langage clair, publiée sur votre site.",
    couleur: "#065f46",
    fond: "#ecfdf5"
  },
  {
    icone: <Users size={22} strokeWidth={1.5} />,
    titre: "Mentions d'information et formulaires",
    description: "Rédaction des mentions d'information pour vos formulaires de collecte (contact, inscription, commande, adhésion). Base légale, finalités, droits des personnes, conservation : chaque mention est précise et conforme.",
    couleur: "#0891b2",
    fond: "#ecfeff"
  },
  {
    icone: <AlertCircle size={22} strokeWidth={1.5} />,
    titre: "Gestion des violations de données",
    description: "Mise en place d'une procédure de détection et de notification des violations de données (article 33 RGPD). Rédaction du registre interne des violations. Accompagnement en cas d'incident.",
    couleur: "#dc2626",
    fond: "#fef2f2"
  },
  {
    icone: <CheckCircle size={22} strokeWidth={1.5} />,
    titre: "Réponses aux droits des personnes",
    description: "Mise en place des procédures de réponse aux demandes d'exercice des droits (accès, rectification, effacement, opposition, portabilité). Rédaction des modèles de réponse. Délais et traçabilité.",
    couleur: "#d97706",
    fond: "#fffbeb"
  }
]

const basesLegales = [
  { base: "Consentement (art. 6.1.a)", desc: "Accord explicite et libre de la personne. Révocable à tout moment. Souvent requis pour les cookies analytics et le marketing." },
  { base: "Contrat (art. 6.1.b)", desc: "Traitement nécessaire à l'exécution d'un contrat avec la personne. Ex : gestion d'une commande, d'un abonnement." },
  { base: "Obligation légale (art. 6.1.c)", desc: "Traitement requis par une obligation légale applicable. Ex : conservation des bulletins de paie, facturation." },
  { base: "Intérêt légitime (art. 6.1.f)", desc: "Intérêt légitime du responsable, sous réserve qu'il ne prévale pas sur les droits des personnes. Ex : sécurité du SI, prévention de la fraude." },
]

const faqs = [
  {
    q: "Le RGPD s'applique-t-il aux petites structures ?",
    r: "Oui. Le RGPD s'applique à toute organisation qui traite des données personnelles, quelle que soit sa taille. Une TPE, une association ou une micro-entreprise sont soumises aux mêmes obligations, avec certains aménagements pour les structures de moins de 250 personnes (notamment une tenue simplifiée du registre pour les traitements non réguliers)."
  },
  {
    q: "Qu'est-ce qu'un registre des activités de traitement ?",
    r: "Le registre (article 30 RGPD) est un document interne obligatoire qui recense tous les traitements de données personnelles. Il décrit pour chaque traitement les finalités, les catégories de données, les destinataires, les durées de conservation et les mesures de sécurité. C'est le document de référence en cas de contrôle CNIL."
  },
  {
    q: "Quelles sont les sanctions en cas de non-conformité ?",
    r: "La CNIL peut prononcer des sanctions jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel mondial. Ces plafonds s'appliquent à toutes les organisations, y compris les associations et les collectivités. La CNIL peut aussi imposer des injonctions de mise en conformité et des limitations de traitement."
  },
  {
    q: "Quelle est la différence entre le RGPD et la loi Informatique et Libertés ?",
    r: "Le RGPD est un règlement européen directement applicable depuis le 25 mai 2018. La loi Informatique et Libertés (loi n°78-17 du 6 janvier 1978, modifiée par la loi n°2018-493 du 20 juin 2018) est la loi française qui complète le RGPD et précise les règles spécifiques au droit français."
  },
  {
    q: "La mise en conformité RGPD est-elle un projet ponctuel ou continu ?",
    r: "C'est un processus continu. Une première mise en conformité produit les documents et procédures nécessaires. Mais le RGPD impose une conformité permanente : le registre doit être mis à jour à chaque nouveau traitement, les mentions d'information doivent refléter la réalité, les incidents doivent être tracés. Notre service de DPO externalisé assure cette conformité dans la durée."
  }
]

export default function RGPDConformitePage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>RGPD & conformité</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #7c3aed 100%)', padding: '4rem 1.5rem 3.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', color: 'white', fontSize: 12, fontWeight: 700, padding: '5px 18px', borderRadius: 20, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.2rem' }}>
              RGPD & conformité
            </span>
            <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Mise en conformité RGPD<br />
              pour les entreprises, associations et collectivités
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Diagnostic documentaire, registre des traitements, politique de confidentialité, mentions d'information,
              gestion des violations de données, réponses aux droits des personnes.
              Accompagnement sur-mesure selon la taille et l'activité de votre structure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#7c3aed', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Demander un diagnostic <ArrowRight size={18} />
              </a>
              <a href="/dpo-externalise" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.4)' }}>
                DPO externalisé
              </a>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { valeur: "6", label: "Prestations RGPD disponibles" },
                { valeur: "25 mai 2018", label: "Date d'entrée en vigueur" },
                { valeur: "Sur devis", label: "Tarification transparente" },
                { valeur: "CNIL", label: "Référentiel applicable" }
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#c4b5fd' }}>{s.valeur}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ENCART RÉGLEMENTAIRE */}
        <div style={{ background: '#f5f3ff', borderBottom: '1px solid #e9d5ff', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Le Règlement Général sur la Protection des Données (UE 2016/679, RGPD) est directement applicable depuis le 25 mai 2018.
              La loi n°2018-493 du 20 juin 2018 adapte le droit français. En France, la CNIL est l'autorité de contrôle compétente.
              L'accompagnement proposé constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* PRESTATIONS */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Prestations proposées
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Un accompagnement modulaire, de la première mise en conformité à la gestion continue.
              Chaque prestation est sur devis selon le périmètre défini lors du premier contact.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {prestations.map((p, i) => (
                <div key={i} style={{
                  background: p.fond, border: `1px solid ${p.couleur}30`,
                  borderRadius: 12, padding: '1.5rem', borderLeft: `4px solid ${p.couleur}`
                }}>
                  <div style={{ color: p.couleur, marginBottom: '0.75rem' }}>{p.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>{p.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* QUI EST CONCERNÉ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Toutes les organisations sont concernées
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>
              Le RGPD ne fait pas de distinction selon la taille ou le secteur d'activité.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { titre: "TPE · PME", desc: "Tout commerce, artisan, profession libérale ou société qui collecte des données clients, prospects ou salariés.", couleur: "#0f2d6e" },
                { titre: "Associations", desc: "Données des adhérents, bénévoles, donateurs, bénéficiaires. Traitement souvent non évalué mais obligatoire.", couleur: "#16a34a" },
                { titre: "Collectivités", desc: "Communes, intercommunalités, établissements publics. Traitements massifs et catégories sensibles fréquentes.", couleur: "#7c3aed" },
                { titre: "Professions libérales", desc: "Médecins, avocats, comptables, architectes : données clients souvent sensibles, obligations renforcées.", couleur: "#065f46" }
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem', borderTop: `4px solid ${item.couleur}` }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: item.couleur, margin: '0 0 6px' }}>{item.titre}</h3>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BASES LÉGALES */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2rem', marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Les bases légales du traitement (article 6 RGPD)
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Tout traitement de données personnelles doit reposer sur l'une des six bases légales du règlement.
              Identifier la bonne base est une étape fondamentale de la conformité.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {basesLegales.map((bl, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 8, padding: '1rem' }}>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: '#7c3aed', margin: '0 0 6px' }}>{bl.base}</p>
                  <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{bl.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SANCTIONS */}
          <section style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '1.5rem', marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <AlertCircle size={20} strokeWidth={1.5} style={{ color: '#dc2626', marginTop: 2, flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#b91c1c', margin: '0 0 0.5rem' }}>
                Sanctions CNIL : jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires
              </h3>
              <p style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
                La CNIL peut prononcer des sanctions administratives, des injonctions de mise en conformité
                et des limitations de traitement. En 2023 et 2024, plusieurs sanctions importantes ont été
                prononcées contre des PME et des associations. L'absence de registre, l'absence de politique
                de confidentialité ou l'absence de consentement pour les cookies sont les manquements les plus fréquents.
              </p>
              <p style={{ fontSize: 12, color: '#9a3412', margin: 0, lineHeight: 1.6 }}>
                Un diagnostic préalable permet d'identifier les risques prioritaires et d'engager les corrections
                avant tout contrôle. Contactez le cabinet pour un premier échange.
              </p>
            </div>
          </section>

          {/* DPO RENVOI */}
          <section style={{ background: '#0f2d6e', borderRadius: 12, padding: '2rem', marginBottom: '3.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', color: 'white' }}>
            <div>
              <p style={{ color: '#c4b5fd', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 0.4rem' }}>Conformité dans la durée</p>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 700, margin: '0 0 0.4rem' }}>La conformité RGPD ne s'arrête pas à la première mise en conformité</h2>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                Le service DPO externalisé assure la conformité continue : veille réglementaire, mise à jour
                du registre, gestion des incidents, interlocuteur CNIL désigné.
              </p>
            </div>
            <a href="/dpo-externalise" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: '0.875rem', whiteSpace: 'nowrap' }}>
              Découvrir le DPO externalisé <ArrowRight size={16} />
            </a>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus courantes sur le RGPD.</p>
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
          <section style={{ background: '#f5f3ff', border: '1px solid #e9d5ff', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#5b21b6', marginBottom: '0.5rem' }}>
              Votre structure est-elle en conformité RGPD ?
            </h2>
            <p style={{ fontSize: 13, color: '#374151', margin: '0.5rem auto 1.5rem', maxWidth: 500, lineHeight: 1.7 }}>
              Un diagnostic préalable permet d'évaluer votre situation et de prioriser les actions correctives.
              Tarification sur devis selon la taille et l'activité de votre structure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Demander un diagnostic <ArrowRight size={18} />
              </a>
              <a href="/dpo-externalise" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#5b21b6', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid #7c3aed' }}>
                DPO externalisé
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}