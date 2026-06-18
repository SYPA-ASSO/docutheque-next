// app/rgpd-conformite/tpe-independant/page.tsx
// Cabinet Cholez-Pagotto - Page d'audience : RGPD pour les TPE, independants et micro-entrepreneurs
// Server component (export metadata). Regles : zero tiret long, cholez-pagotto.fr, Notre juriste singulier, NBSP avant euro.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { CheckCircle, ChevronRight, Info, ArrowRight, FileText, Mail, Lock, Clock, AlertCircle } from 'lucide-react'

export const metadata = {
  title: "RGPD pour les TPE, indépendants et micro-entrepreneurs · Cabinet Cholez-Pagotto",
  description: "Conformité RGPD des TPE, indépendants et micro-entrepreneurs : registre des traitements, prospection B2B, consentement, sécurité, durées de conservation, DPO. Diagnostic à partir de 350\u00a0€ et Audit RGPD Express offert.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/rgpd-conformite/tpe-independant',
  },
}

const faq = [
  {
    q: "Suis-je concerné par le RGPD en tant qu'auto-entrepreneur ou TPE ?",
    r: "Oui. Le RGPD s'applique dès que vous traitez des données personnelles, c'est-à-dire dès le premier fichier de clients ou de prospects contenant un nom, un email ou un téléphone. Il n'existe pas de seuil de taille ou de chiffre d'affaires qui exonérerait une petite structure. Les obligations sont simplement proportionnées à votre activité."
  },
  {
    q: "Faut-il un registre des traitements pour une TPE ou un indépendant ?",
    r: "Oui dans la quasi-totalité des cas. L'article 30 du RGPD impose un registre des activités de traitement à tout organisme. Pour un indépendant, il reste court : fichier clients, prospection, comptabilité, éventuellement gestion d'un site et de cookies. Une dérogation existe pour les structures de moins de 250 salariés, mais elle ne joue que pour les traitements occasionnels, sans données sensibles et sans risque."
  },
  {
    q: "Puis-je prospecter par email en B2B sans consentement préalable ?",
    r: "En B2B, la règle française est plus souple. L'article L.34-5 du Code des postes et des communications électroniques dispense du consentement préalable lorsque le message est adressé à une adresse professionnelle et que son objet est en rapport avec la fonction de la personne. Vous devez toutefois informer la personne et lui permettre de s'opposer facilement. En B2C, le consentement préalable reste la règle."
  },
  {
    q: "Une TPE ou un micro-entrepreneur doit-il désigner un DPO ?",
    r: "Le plus souvent non. La désignation d'un délégué à la protection des données n'est obligatoire que pour les organismes publics, en cas de suivi régulier et systématique de personnes à grande échelle, ou de traitement à grande échelle de données sensibles. La majorité des TPE et des indépendants ne sont donc pas concernés, même si désigner un référent interne reste une bonne pratique."
  },
  {
    q: "Quels risques concrets pour un indépendant en cas de non-conformité ?",
    r: "Au-delà des sanctions administratives de la CNIL, certains manquements sont des délits pénaux (articles 226-16 et suivants du Code pénal). Pour un entrepreneur individuel ou un micro-entrepreneur, qui est lui-même responsable de traitement, cette responsabilité peut être engagée à titre personnel : la structure ne fait pas toujours écran. S'ajoute un enjeu commercial, car de plus en plus de clients et de donneurs d'ordre exigent une preuve de conformité avant de contracter."
  },
  {
    q: "Combien de temps conserver les données de mes clients et prospects ?",
    r: "Une donnée ne se conserve que le temps nécessaire à la finalité pour laquelle elle a été collectée. La CNIL publie des durées de référence : par exemple trois ans à compter du dernier contact pour un prospect, et la durée de la relation commerciale pour un client, avant un archivage limité aux obligations légales. Au-delà, les données doivent être supprimées ou anonymisées."
  },
  {
    q: "Quel forfait de diagnostic pour une TPE ou un indépendant ?",
    r: "Un indépendant ou une micro-entreprise de moins de cinq traitements peut commencer par le Diagnostic Essentiel. Une TPE employeuse ou gérant plusieurs fichiers relève plutôt du Diagnostic Standard. Si vous traitez des données sensibles ou un volume important, le Diagnostic Approfondi, sur devis, est plus adapté. L'Audit RGPD Express offert vous aide à situer votre besoin."
  }
]

const obligations = [
  {
    icone: <FileText size={20} strokeWidth={1.5} />,
    titre: "Registre des traitements",
    desc: "Même court, le registre est obligatoire (article 30 RGPD). Pour un indépendant : fichier clients, prospection, comptabilité, site et cookies. C'est le premier document attendu en cas de contrôle."
  },
  {
    icone: <Mail size={20} strokeWidth={1.5} />,
    titre: "Information et consentement",
    desc: "Mentions d'information sur vos formulaires, devis et site. Consentement pour la prospection B2C et les cookies non essentiels. En B2B, information et droit d'opposition suffisent dans les conditions prévues par la loi."
  },
  {
    icone: <Lock size={20} strokeWidth={1.5} />,
    titre: "Sécurité des données",
    desc: "Mots de passe robustes, sauvegardes, accès limité, prudence avec les outils et sous-traitants (CRM, emailing, hébergement). Une violation de données doit être notifiée à la CNIL sous 72\u00a0heures."
  },
  {
    icone: <Clock size={20} strokeWidth={1.5} />,
    titre: "Durées de conservation",
    desc: "Limiter la conservation à la durée nécessaire. La CNIL publie des durées de référence, par exemple trois ans après le dernier contact pour un prospect. Au-delà, supprimer ou anonymiser."
  }
]

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/tpe-independant#service",
      "name": "Conformité RGPD pour les TPE, indépendants et micro-entrepreneurs",
      "description": "Accompagnement à la mise en conformité RGPD des TPE, indépendants et micro-entrepreneurs : registre des activités de traitement, règles de prospection B2B et B2C, consentement et cookies, sécurité des données, durées de conservation, désignation d'un DPO le cas échéant.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "serviceType": "Conformité RGPD des TPE et indépendants",
      "areaServed": { "@type": "Country", "name": "France" },
      "url": "https://cholez-pagotto.fr/rgpd-conformite/tpe-independant"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/tpe-independant#faq",
      "mainEntity": faq.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.r }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://cholez-pagotto.fr/rgpd-conformite/tpe-independant#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "RGPD & conformité", "item": "https://cholez-pagotto.fr/rgpd-conformite" },
        { "@type": "ListItem", "position": 3, "name": "TPE & indépendants", "item": "https://cholez-pagotto.fr/rgpd-conformite/tpe-independant" }
      ]
    }
  ]
}

export default function RGPDTpeIndependantPage() {
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
            <span style={{ color: '#374151', fontWeight: 600 }}>TPE & indépendants</span>
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
              RGPD · TPE & indépendants
            </span>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              Conformité RGPD pour les TPE, indépendants et micro-entrepreneurs
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.88)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Le RGPD s'applique dès votre premier fichier client. Contrairement à une idée répandue,
              il n'existe pas de seuil qui exonérerait une petite structure. Voici vos obligations, à votre échelle,
              et le diagnostic pensé pour les petites structures.
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

          {/* CONCERNE */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.75rem' }}>
              Petite structure ne veut pas dire hors du RGPD
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 0.75rem' }}>
              Dès que vous enregistrez le nom, l'email ou le téléphone d'un client ou d'un prospect, vous traitez des données personnelles.
              Le RGPD ne prévoit aucun seuil de taille ou de chiffre d'affaires en deçà duquel il ne s'appliquerait pas.
              Un consultant, un artisan, un commerçant ou un micro-entrepreneur sont donc soumis aux mêmes principes que les grandes entreprises.
            </p>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              La bonne nouvelle : pour une activité dont le cœur de métier n'est pas le traitement de données, les obligations sont allégées.
              L'analyse d'impact et la désignation d'un DPO restent rares, et une politique de confidentialité courte mais fidèle à votre réalité
              vaut mieux qu'un document générique copié ailleurs.
            </p>
          </section>

          {/* OBLIGATIONS */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Vos obligations concrètes
            </h2>
            <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '1.5rem' }}>
              Quatre piliers, à votre échelle, puis à tenir à jour.
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

          {/* RESPONSABILITE PERSONNELLE */}
          <section style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12, padding: '1.5rem', marginBottom: '3rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <AlertCircle size={20} strokeWidth={1.5} style={{ color: '#dc2626', marginTop: 2, flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#b91c1c', margin: '0 0 0.5rem' }}>
                Entrepreneur individuel : une responsabilité à titre personnel
              </h3>
              <p style={{ fontSize: 13, color: '#7f1d1d', lineHeight: 1.7, margin: 0 }}>
                Au-delà des sanctions administratives de la CNIL, certains manquements sont des délits pénaux (articles 226-16 et suivants du Code pénal).
                Pour un entrepreneur individuel ou un micro-entrepreneur, qui est lui-même responsable de traitement, cette responsabilité
                peut être engagée à titre personnel : la structure ne fait pas toujours écran. Un diagnostic préalable permet d'identifier
                et de corriger les risques avant tout contrôle.
              </p>
            </div>
          </section>

          {/* QUEL FORFAIT */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>
              Quel diagnostic pour votre activité ?
            </h2>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: '0 0 1rem' }}>
              Un indépendant ou une micro-entreprise de moins de cinq traitements peut commencer par le{' '}
              <a href="/rgpd-conformite/diagnostic-essentiel" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Diagnostic Essentiel à 350&nbsp;€</a>,
              pensé pour les petites structures. Une TPE employeuse ou gérant plusieurs fichiers relève plutôt du{' '}
              <a href="/rgpd-conformite/diagnostic-standard" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Diagnostic Standard à 900&nbsp;€</a>.
              Pour un volume important ou des données sensibles, le{' '}
              <a href="/rgpd-conformite#tarifs" style={{ color: '#7c3aed', textDecoration: 'none', fontWeight: 600 }}>Diagnostic Approfondi</a> est sur devis.
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
              Mettez votre activité en conformité
            </h2>
            <p style={{ fontSize: 13, color: '#374151', margin: '0.5rem auto 1.5rem', maxWidth: 520, lineHeight: 1.7 }}>
              Commencez par l'Audit RGPD Express offert, ou commandez directement le diagnostic adapté à votre activité.
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