// app/rgpd-conformite/association/page.tsx
// Cabinet Cholez-Pagotto - Page d'audience : RGPD pour les associations et l'ESS
// Server component (export metadata). Regles : zero tiret long, cholez-pagotto.fr, Notre juriste singulier, NBSP avant euro.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { CheckCircle, ChevronRight, Info, ArrowRight, Users, FileText, ShieldCheck, Scale } from 'lucide-react'

export const metadata = {
  title: "RGPD pour les associations et l'ESS · Cabinet Cholez-Pagotto",
  description: "Conformité RGPD des associations loi 1901, fondations et structures de l'ESS : registre des traitements, bases légales, données des adhérents et bénéficiaires, DPO. Diagnostic à partir de 350\u00a0€ et Audit RGPD Express offert.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/rgpd-conformite/association',
  },
}

const faq = [
  {
    q: "Une association loi 1901 est-elle concernée par le RGPD ?",
    r: "Oui. Le RGPD s'applique à toute structure qui traite des données personnelles, sans condition de taille, de budget ni de statut fiscal. Une association qui tient un simple fichier d'adhérents est responsable de traitement, qu'elle ait des salariés ou non. Le statut non lucratif ne change rien à cette obligation."
  },
  {
    q: "Faut-il tenir un registre des activités de traitement dans une association ?",
    r: "Oui dans la quasi-totalité des cas. L'article 30 du RGPD impose ce registre à tout organisme. Pour une association, il recense par exemple le fichier des adhérents, la liste de diffusion, la gestion des bénévoles, les dossiers de subvention et les dons. Une dérogation existe pour les structures de moins de 250 salariés, mais elle ne joue que pour les traitements occasionnels, sans données sensibles et sans risque, ce qui ne concerne presque aucune association active."
  },
  {
    q: "Quelle base légale pour une association opératrice d'une politique publique ?",
    r: "La base la plus adaptée est souvent la mission d'intérêt public (article 6.1.e du RGPD), lorsque l'association met en œuvre une mission confiée par une autorité publique. Selon les traitements, d'autres bases s'appliquent : le consentement pour une newsletter ou l'usage de l'image, l'obligation légale pour la comptabilité et les reçus fiscaux, l'intérêt légitime pour la gestion courante de la vie associative."
  },
  {
    q: "Une association peut-elle traiter des données sensibles de ses adhérents ?",
    r: "Oui, mais de façon encadrée. Une association à but politique, philosophique, religieux ou syndical peut traiter certaines données sensibles de ses seuls membres, dans le cadre de son activité, sans les communiquer à des tiers sans le consentement des personnes. En dehors de ce cadre, le traitement de données sensibles suppose en principe le consentement explicite des personnes ou une autre exception prévue à l'article 9 du RGPD."
  },
  {
    q: "Notre association doit-elle désigner un délégué à la protection des données ?",
    r: "Pas dans la plupart des cas. La désignation d'un DPO est obligatoire pour les organismes publics, en cas de suivi régulier et systématique de personnes à grande échelle, ou de traitement à grande échelle de données sensibles. Une association opératrice d'une politique publique qui suit durablement de nombreux bénéficiaires peut se trouver concernée. Même sans obligation, désigner un référent interne est recommandé."
  },
  {
    q: "Quelles obligations pour les données des donateurs et les reçus fiscaux ?",
    r: "Les données des donateurs sont des données personnelles : elles doivent figurer au registre, être conservées le temps nécessaire et sécurisées. L'émission des reçus fiscaux et la comptabilité reposent sur une obligation légale, qui justifie la conservation des informations correspondantes pendant les durées prévues par la réglementation comptable et fiscale."
  },
  {
    q: "Quel forfait de diagnostic choisir pour une association ?",
    r: "Une petite association de moins de cinq traitements peut commencer par le Diagnostic Essentiel. Une association établie, employeuse ou gérant plusieurs fichiers relève plutôt du Diagnostic Standard. Une structure de l'ESS plus complexe, traitant des données sensibles ou opératrice d'une politique publique de grande ampleur, relève du Diagnostic Approfondi, sur devis. L'Audit RGPD Express offert vous aide à situer votre besoin."
  }
]

const obligations = [
  {
    icone: <FileText size={20} strokeWidth={1.5} />,
    titre: "Registre des traitements",
    desc: "Recenser chaque traitement : adhérents, bénévoles, donateurs, bénéficiaires, liste de diffusion, dossiers de subvention. Document obligatoire (article 30 RGPD) et premier attendu en cas de contrôle."
  },
  {
    icone: <Users size={20} strokeWidth={1.5} />,
    titre: "Information des personnes",
    desc: "Mentions d'information sur le bulletin d'adhésion et les formulaires : finalités, base légale, durées de conservation, droits. Recueil du consentement pour la newsletter et l'usage de l'image."
  },
  {
    icone: <ShieldCheck size={20} strokeWidth={1.5} />,
    titre: "Sécurité des fichiers",
    desc: "Accès restreint au fichier des adhérents, mots de passe robustes, pas de tableur partagé en libre accès. Les données sensibles (santé, convictions) appellent des précautions renforcées."
  },
  {
    icone: <Scale size={20} strokeWidth={1.5} />,
    titre: "Bases légales et durées",
    desc: "Identifier la bonne base pour chaque fichier (mission d'intérêt public, consentement, obligation légale, intérêt légitime) et limiter la conservation à la durée nécessaire."
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/association#service",
      "name": "Conformité RGPD pour les associations et l'ESS",
      "description": "Accompagnement à la mise en conformité RGPD des associations loi 1901, fondations et structures de l'économie sociale et solidaire : registre des activités de traitement, bases légales, information des adhérents et bénéficiaires, sécurité des fichiers, désignation d'un DPO le cas échéant.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Conformité RGPD des associations et de l'ESS",
      "areaServed": { "@type": "Country", "name": "France" },
      "url": "https://cholez-pagotto.fr/rgpd-conformite/association"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/association#faq",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.r }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/association#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "RGPD & conformité", "item": "https://cholez-pagotto.fr/rgpd-conformite" },
        { "@type": "ListItem", "position": 3, "name": "Associations & ESS", "item": "https://cholez-pagotto.fr/rgpd-conformite/association" }
      ]
    }
  ]
}

export default function RGPDAssociationPage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>Associations & ESS</span>
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
              RGPD · Associations & ESS
            </span>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Conformité RGPD pour les associations et l'économie sociale et solidaire
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Associations loi 1901, fondations, fonds de dotation, structures de l'ESS : dès que vous gérez des adhérents,
              des bénévoles, des donateurs ou des bénéficiaires, vous traitez des données personnelles et vous êtes soumis au RGPD.
              Voici vos obligations, à votre échelle, et les forfaits adaptés.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <a href="/rgpd-conformite#tarifs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'white', color: '#7c3aed', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Voir les 3 forfaits <ArrowRight size={18} />
              </a>
              <a href="/rgpd-conformite#audit-express" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.4)' }}>
                Audit RGPD Express offert
              </a>
            </div>
          </div>
        </section>

        {/* ENCART REGLEMENTAIRE */}
        <div style={{ background: '#f5f3ff', borderBottom: '1px solid #e9d5ff', padding: '0.75rem 1.5rem' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Info size={15} strokeWidth={1.5} style={{ color: '#7c3aed', marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 12, color: '#374151', lineHeight: 1.6, margin: 0 }}>
              Cette page constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971
              et ne constitue pas une consultation juridique personnalisée. Le RGPD (UE 2016/679) et la loi Informatique et Libertés s'appliquent ;
              la CNIL est l'autorité de contrôle.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem' }}>

          {/* CONCERNEES */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.75rem' }}>
              Oui, votre association est concernée
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 0.75rem' }}>
              Le RGPD ne prévoit aucun seuil d'adhérents, de budget ou de salariés en deçà duquel il ne s'appliquerait pas.
              Une association de quartier qui tient un fichier de dix adhérents dans un tableur est déjà responsable de traitement,
              au même titre qu'une grande structure. Cette règle vaut pour les associations loi 1901, les fondations,
              les fonds de dotation, les associations sportives, culturelles et cultuelles, et les organismes reconnus d'utilité publique.
            </p>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Ce qui déclenche les obligations, c'est le traitement de données personnelles, pas la nature de la structure.
              Les exigences sont toutefois proportionnées : pour une association dont le cœur d'activité n'est pas le traitement de données,
              l'analyse d'impact et la désignation d'un DPO restent rares.
            </p>
          </section>

          {/* OBLIGATIONS */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Vos obligations concrètes
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Quatre piliers à mettre en place, puis à tenir à jour.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.2rem' }}>
              {obligations.map((o, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem', borderLeft: '4px solid #7c3aed' }}>
                  <div style={{ color: '#7c3aed', marginBottom: '0.6rem' }}>{o.icone}</div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.4rem' }}>{o.titre}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>{o.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BASES LEGALES ASSO */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2rem', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Le cas particulier des opérateurs de politiques publiques
            </h2>
            <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75, margin: '0 0 1rem' }}>
              De nombreuses associations et structures de l'ESS mettent en œuvre une mission confiée par une autorité publique
              (action sociale, insertion, hébergement, accompagnement). Pour ces traitements, la base légale adaptée est souvent
              la mission d'intérêt public, prévue à l'article 6.1.e du RGPD. Les autres traitements relèvent du consentement
              (newsletter, image), de l'obligation légale (comptabilité, reçus fiscaux) ou de l'intérêt légitime (gestion courante).
            </p>
            <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Une association à but politique, philosophique, religieux ou syndical peut par ailleurs traiter certaines données sensibles
              de ses seuls membres, dans le cadre de son activité, sans les communiquer à des tiers sans leur consentement.
              Le suivi durable de nombreux bénéficiaires peut, lui, faire entrer la structure dans les cas où un DPO doit être désigné.
            </p>
          </section>

          {/* QUEL FORFAIT */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Quel diagnostic pour votre structure ?
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 1rem' }}>
              Une petite association de moins de cinq traitements peut commencer par le{' '}
              <a href="/rgpd-conformite/diagnostic-essentiel" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Diagnostic Essentiel à 350&nbsp;€</a>.
              Une association établie ou employeuse relève plutôt du{' '}
              <a href="/rgpd-conformite/diagnostic-standard" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Diagnostic Standard à 900&nbsp;€</a>.
              Une structure de l'ESS plus complexe, traitant des données sensibles ou opératrice d'une politique publique de grande ampleur,
              relève du <a href="/rgpd-conformite#tarifs" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Diagnostic Approfondi</a>, sur devis.
            </p>
            <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>
              Vous hésitez ? Commencez par l'<a href="/rgpd-conformite#audit-express" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Audit RGPD Express offert</a>,
              restitué sous 72&nbsp;heures, qui oriente vers le forfait adapté.
            </p>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '1.5rem' }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {faq.map((item, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: '1rem 1.25rem' }}>
                  <summary style={{ fontSize: 14, fontWeight: 600, color: '#0f2d6e', cursor: 'pointer' }}>{item.q}</summary>
                  <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: '0.75rem 0 0' }}>{item.r}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: '#f5f3ff', border: '1px solid #e9d5ff', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#5b21b6', marginBottom: '0.5rem' }}>
              Évaluez la conformité de votre association
            </h2>
            <p style={{ fontSize: 13, color: '#374151', margin: '0.5rem auto 1.5rem', maxWidth: 520, lineHeight: 1.7 }}>
              Commencez par l'Audit RGPD Express offert, ou commandez directement le diagnostic adapté à votre structure.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              <a href="/rgpd-conformite#tarifs" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#7c3aed', color: 'white', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 700, fontSize: '0.95rem' }}>
                Voir les 3 forfaits <ArrowRight size={18} />
              </a>
              <a href="/rgpd-conformite#audit-express" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'transparent', color: '#5b21b6', textDecoration: 'none', padding: '13px 28px', borderRadius: 8, fontWeight: 600, fontSize: '0.95rem', border: '1px solid #7c3aed' }}>
                Audit RGPD Express offert
              </a>
            </div>
          </section>

        </div>

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