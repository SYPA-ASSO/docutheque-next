// app/accompagnement-organismes-formation/page.tsx
// Cabinet Cholez-Pagotto - Accompagnement Qualiopi des organismes de formation
// Page publique de presentation de l'offre d'accompagnement a la certification Qualiopi,
// destinee aux organismes de formation, formateurs independants et CFA qui souhaitent
// obtenir ou conserver leur propre certification (a distinguer du mentorat consultant
// Qualiopi, qui s'adresse a ceux qui veulent devenir consultants pour accompagner
// d'autres organismes).

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  ChevronRight, ArrowRight, ShieldCheck,
  Building2, UserCheck, Layers, ScrollText, CheckCircle, Clock, FileCheck2
} from 'lucide-react'

export const metadata = {
  title: 'Accompagnement Qualiopi pour organismes de formation · Cabinet Cholez-Pagotto',
  description: "Accompagnement à la certification Qualiopi pour organismes de formation, formateurs indépendants et CFA : diagnostic, structuration documentaire, NDA, BPF, préparation aux audits et suivi dans la durée.",
  alternates: { canonical: 'https://cholez-pagotto.fr/accompagnement-organismes-formation' },
}

const BENEFICES = [
  {
    icone: Clock,
    titre: 'Du temps gagné',
    texte: "Vous restez concentré sur vos formations pendant que le cabinet structure le dossier de conformité au Référentiel National Qualité (RNQ).",
  },
  {
    icone: ShieldCheck,
    titre: 'Moins de risques de non-conformité',
    texte: "Chaque indicateur est vérifié avant l'audit, avec les preuves attendues, pour limiter les écarts constatés le jour J.",
  },
  {
    icone: Layers,
    titre: 'Une méthode structurée',
    texte: "Un diagnostic initial, un plan d'action priorisé, puis un accompagnement à chaque étape, plutôt qu'une préparation dans l'urgence.",
  },
  {
    icone: FileCheck2,
    titre: 'Une sécurisation administrative complète',
    texte: "Numéro de déclaration d'activité (NDA) et Bilan Pédagogique et Financier (BPF) traités en parallèle de la certification, pas seulement les 32 indicateurs.",
  },
]

const INCLUS = [
  { titre: 'Diagnostic initial', texte: "État des lieux de votre organisme au regard des 7 critères et 32 indicateurs du RNQ, et identification des écarts à traiter en priorité." },
  { titre: 'Structuration documentaire', texte: "Constitution ou mise à niveau des preuves attendues par indicateur : règlement intérieur, conventions, grilles d'évaluation, enquêtes de satisfaction, registres." },
  { titre: "Numéro de déclaration d'activité (NDA)", texte: "Accompagnement à la déclaration auprès de la DREETS si votre structure n'est pas encore enregistrée comme organisme de formation." },
  { titre: 'Bilan Pédagogique et Financier (BPF)', texte: "Vérification ou production du BPF annuel, obligatoire pour tout organisme de formation déclaré." },
  { titre: "Préparation à l'audit initial", texte: "Relecture critique du dossier, audit blanc, mise en situation avant le passage de l'auditeur certificateur." },
  { titre: 'Audits de surveillance et de renouvellement', texte: "Suivi dans la durée pour maintenir la conformité entre deux audits, et préparation du renouvellement à l'échéance des trois ans." },
]

const ETAPES = [
  { num: '1', titre: 'Diagnostic', texte: "Un échange sur votre activité, votre structure et votre niveau de préparation actuel face au RNQ." },
  { num: '2', titre: 'Structuration du dossier', texte: "Constitution des preuves, indicateur par indicateur, avec les modèles adaptés à votre situation." },
  { num: '3', titre: "Préparation et passage de l'audit", texte: "Relecture, audit blanc si besoin, puis accompagnement jusqu'à l'audit officiel." },
  { num: '4', titre: 'Suivi dans la durée', texte: "Maintien de la conformité, veille réglementaire, préparation des audits de surveillance et de renouvellement." },
]

const POUR_QUI = [
  { icon: Building2, titre: 'Organismes de formation', texte: "Structures existantes non encore certifiées, ou en cours de mise en conformité avant un premier audit." },
  { icon: UserCheck, titre: 'Formateurs indépendants', texte: "Professionnels créant leur propre organisme de formation à partir de leur expertise métier." },
  { icon: Layers, titre: 'CFA', texte: "Centres de Formation des Apprentis nouvellement créés, ou ayant perdu leur certification et devant la reconquérir." },
]

const FAQ = [
  {
    q: "Qu'est-ce que la certification Qualiopi et pourquoi est-elle obligatoire ?",
    a: "Qualiopi est la certification qualité exigée depuis 2022 pour tout prestataire d'actions de formation, de bilan de compétences, de VAE ou d'apprentissage souhaitant accéder aux financements publics et mutualisés (CPF, OPCO, France Travail). Sans elle, ces financements ne sont pas mobilisables pour vos clients.",
  },
  {
    q: "Dois-je avoir un numéro de déclaration d'activité (NDA) avant de viser Qualiopi ?",
    a: "Oui. Le NDA, délivré par la DREETS, est un prérequis administratif à la certification Qualiopi. Si vous ne l'avez pas encore, le cabinet vous accompagne sur cette démarche avant d'engager le reste du dossier.",
  },
  {
    q: "Qu'est-ce que le Bilan Pédagogique et Financier (BPF) et devez-vous m'aider à le produire ?",
    a: "Le BPF est une déclaration annuelle obligatoire pour tout organisme de formation déclaré, indépendante de Qualiopi mais souvent liée dans le suivi de conformité. Le cabinet vérifie sa cohérence avec votre dossier Qualiopi et peut vous accompagner dans sa production.",
  },
  {
    q: "Combien de temps prend un accompagnement à la certification Qualiopi ?",
    a: "Cela dépend de votre niveau de préparation initial, du nombre de catégories d'actions visées et de votre disponibilité. Un premier échange permet d'estimer un calendrier réaliste, adapté à votre situation.",
  },
  {
    q: "Travaillez-vous avec les indépendants et auto-entrepreneurs ?",
    a: "Oui. Le statut ne change pas les exigences du référentiel : un formateur indépendant qui souhaite déclarer son activité et viser Qualiopi est accompagné selon la même méthode qu'un organisme constitué en société.",
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://cholez-pagotto.fr/accompagnement-organismes-formation#service',
      name: 'Accompagnement Qualiopi pour organismes de formation - Cabinet Cholez-Pagotto',
      description: "Accompagnement à la certification Qualiopi pour organismes de formation, formateurs indépendants et CFA : diagnostic, structuration documentaire, NDA, BPF, préparation aux audits et suivi dans la durée.",
      provider: {
        '@type': 'LegalService',
        '@id': 'https://cholez-pagotto.fr/#cabinet',
        name: 'Cabinet Cholez-Pagotto',
        url: 'https://cholez-pagotto.fr',
      },
      serviceType: 'Accompagnement à la certification Qualiopi',
      areaServed: { '@type': 'Country', name: 'France' },
      url: 'https://cholez-pagotto.fr/accompagnement-organismes-formation',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://cholez-pagotto.fr/accompagnement-organismes-formation#faq',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://cholez-pagotto.fr/accompagnement-organismes-formation#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://cholez-pagotto.fr' },
        { '@type': 'ListItem', position: 2, name: 'Organismes de formation', item: 'https://cholez-pagotto.fr/accompagnement-organismes-formation' },
      ],
    },
  ],
}

export default function AccompagnementOrganismesFormation() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: 500 }}>Organismes de formation</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>
              ORGANISMES DE FORMATION · FORMATEURS INDÉPENDANTS · CFA
            </span>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.3, maxWidth: '760px' }}>
              Obtenez et conservez votre certification Qualiopi
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 28px', maxWidth: '720px' }}>
              Un accompagnement structuré, du diagnostic initial jusqu&apos;au passage de l&apos;audit, pour les organismes de formation, les formateurs indépendants et les CFA qui souhaitent obtenir ou conserver leur certification Qualiopi, leur numéro de déclaration d&apos;activité et la conformité de leur Bilan Pédagogique et Financier.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a href="/contact?objet=accompagnement-of" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Demander un accompagnement <ArrowRight size={16} />
              </a>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Diagnostic initial', 'Structuration du dossier', 'NDA et BPF', 'Préparation aux audits'].map((tag) => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 2rem' }}>

          {/* CADRE / POSITIONNEMENT */}
          <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem 1.75rem', marginBottom: '3.5rem', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <ScrollText size={20} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: 700, margin: '0 0 8px' }}>Un accompagnement pour votre propre structure</h2>
              <p style={{ color: '#374151', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>
                Cette offre s&apos;adresse à ceux qui souhaitent obtenir ou conserver la certification Qualiopi pour leur propre organisme de formation. Vous cherchez plutôt à devenir vous-même consultant en démarche qualité, pour accompagner d&apos;autres organismes ? Découvrez notre <a href="/mentorat-consultant-qualite" style={{ color: '#1a4fba', fontWeight: 600 }}>mentorat consultant Qualiopi</a>.
              </p>
            </div>
          </section>

          {/* POURQUOI SE FAIRE ACCOMPAGNER */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px' }}>Pourquoi se faire accompagner</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: '0 0 2rem', maxWidth: '720px' }}>
              Un dossier Qualiopi se prépare avec méthode. Voici ce que change un accompagnement structuré.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {BENEFICES.map((b, i) => {
                const Icone = b.icone
                return (
                  <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ marginBottom: '12px' }}><Icone size={20} color="#1a4fba" strokeWidth={1.5} /></div>
                    <h3 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: 700, margin: '0 0 8px' }}>{b.titre}</h3>
                    <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{b.texte}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* CE QUE COUVRE L'ACCOMPAGNEMENT */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px' }}>Ce que couvre l&apos;accompagnement</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: '0 0 2rem', maxWidth: '720px' }}>
              Au-delà des 32 indicateurs du référentiel, l&apos;ensemble des démarches administratives liées à votre activité de formation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px' }}>
              {INCLUS.map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1.1rem 1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h3 style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: 700, margin: '0 0 4px' }}>{item.titre}</h3>
                    <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: 1.6, margin: 0 }}>{item.texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* COMMENT CA SE PASSE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 2rem' }}>Comment se déroule l&apos;accompagnement</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {ETAPES.map((e) => (
                <div key={e.num} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', background: '#0f2d6e', color: 'white', fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                    {e.num}
                  </div>
                  <h3 style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, margin: '0 0 6px' }}>{e.titre}</h3>
                  <p style={{ color: '#6b7280', fontSize: 12.5, lineHeight: 1.7, margin: 0 }}>{e.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* A QUI S'ADRESSE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 2rem' }}>À qui s&apos;adresse cet accompagnement</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {POUR_QUI.map((p, i) => {
                const Icone = p.icon
                return (
                  <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ width: '44px', height: '44px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                      <Icone size={20} color="#1a4fba" strokeWidth={1.5} />
                    </div>
                    <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: 700, margin: '0 0 8px' }}>{p.titre}</h3>
                    <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>{p.texte}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 1.5rem' }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '820px' }}>
              {FAQ.map((item, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <summary style={{ fontWeight: 600, color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span>{item.q}</span>
                    <span style={{ color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>＋</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: 1.75, marginTop: '12px', marginBottom: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 10px' }}>Prêt à structurer votre dossier Qualiopi ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.7, margin: '0 auto 24px', maxWidth: '560px' }}>
              Décrivez-nous votre situation : type de structure, activités visées, niveau de préparation actuel. Le cabinet revient vers vous avec une proposition adaptée.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact?objet=accompagnement-of" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Demander un accompagnement <ArrowRight size={16} />
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
