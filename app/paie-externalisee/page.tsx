import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight, CheckCircle2, FileText, Send, CalendarCheck, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Paie externalisée : bulletins et DSN pris en charge par le cabinet · Cabinet Cholez-Pagotto',
  description: "Externalisation de la paie pour TPE, associations employeuses, professions libérales et particuliers employeurs : vous transmettez vos variables du mois, le cabinet établit les bulletins selon votre convention collective et transmet vos DSN. Service opéré sur le site dédié paie-et-dsn.fr.",
  alternates: { canonical: 'https://cholez-pagotto.fr/paie-externalisee' },
  openGraph: {
    type: 'website',
    url: 'https://cholez-pagotto.fr/paie-externalisee',
    siteName: 'Cabinet Cholez-Pagotto',
    title: 'Paie externalisée : bulletins et DSN pris en charge par le cabinet',
    description: "Vous transmettez vos variables du mois, nous établissons les bulletins et transmettons vos DSN. Un service du Cabinet Cholez-Pagotto, opéré sur son site dédié paie-et-dsn.fr.",
    locale: 'fr_FR',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Paie externalisée : bulletins et DSN',
      serviceType: "Externalisation de la paie et des déclarations sociales nominatives (DSN)",
      description: "Établissement des bulletins de salaire selon la convention collective applicable, transmission des DSN mensuelles et événementielles, gestion des entrées et sorties, veille légale et conventionnelle incluse. Vous transmettez vos variables du mois, le cabinet prend en charge le reste.",
      provider: { '@type': 'Organization', name: 'Cabinet Cholez-Pagotto', url: 'https://cholez-pagotto.fr' },
      areaServed: 'FR',
      audience: { '@type': 'Audience', audienceType: 'TPE, associations employeuses, professions libérales, particuliers employeurs, dirigeants assimilés salariés' },
      url: 'https://cholez-pagotto.fr/paie-externalisee',
      sameAs: ['https://paie-et-dsn.fr'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://cholez-pagotto.fr' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://cholez-pagotto.fr/services' },
        { '@type': 'ListItem', position: 3, name: 'Paie externalisée', item: 'https://cholez-pagotto.fr/paie-externalisee' },
      ],
    },
  ],
}

const PUBLICS = [
  { titre: 'TPE', txt: "Jusqu'à quelques salariés, tous secteurs et toutes conventions collectives." },
  { titre: 'Associations employeuses', txt: 'Association loi 1901 avec un ou plusieurs salariés, y compris premiers recrutements.' },
  { titre: 'Professions libérales', txt: 'Cabinets et praticiens employant secrétariat, assistants ou collaborateurs salariés.' },
  { titre: 'Particuliers employeurs', txt: "Emploi à domicile hors dispositifs simplifiés, lorsqu'un bulletin complet s'impose." },
  { titre: 'Dirigeants assimilés salariés', txt: 'Présidents de SAS et SASU, gérants minoritaires : bulletin et déclarations du mandataire.' },
]

const INCLUS = [
  { titre: 'Bulletins conformes à votre convention collective', txt: 'Établissement des bulletins de salaire selon la convention applicable à votre activité, avec les particularités de votre branche.' },
  { titre: 'DSN mensuelles et événementielles', txt: "Transmission des déclarations sociales nominatives chaque mois, et lors des événements : arrêts de travail, fins de contrat, signalements." },
  { titre: 'Entrées et sorties', txt: 'Déclaration préalable à l\'embauche, documents de fin de contrat, solde de tout compte : les moments clés sont pris en charge.' },
  { titre: 'Veille incluse', txt: 'Veille légale et conventionnelle intégrée au service : vos bulletins suivent les évolutions du droit sans démarche de votre part.' },
]

const ETAPES = [
  { icone: Send, titre: '1. Vous transmettez vos variables', txt: "Chaque mois, vous nous communiquez les éléments variables : heures, absences, primes, entrées et sorties." },
  { icone: FileText, titre: '2. Nous établissons les bulletins', txt: 'Les bulletins sont préparés selon votre convention collective et vous sont soumis pour validation.' },
  { icone: CalendarCheck, titre: '3. Nous transmettons vos DSN', txt: 'Après validation, les DSN mensuelles et événementielles sont transmises aux organismes dans les délais.' },
]

export default function PaieExternalisee() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <a href="/services" style={{ color: '#6b7280', textDecoration: 'none' }}>Services</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: 500 }}>Paie externalisée</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <p style={{ color: '#c8a84b', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 12px' }}>Service social du cabinet</p>
            <h1 style={{ color: 'white', fontSize: 'clamp(1.7rem, 4vw, 2.2rem)', fontWeight: 700, margin: '0 0 14px', lineHeight: 1.3 }}>
              Paie externalisée : bulletins et DSN pris en charge par le cabinet
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 640, margin: '0 auto 24px' }}>
              Vous transmettez vos variables du mois, nous établissons les bulletins et transmettons vos DSN.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Découvrir paie-et-dsn.fr <ArrowRight size={16} />
              </a>
              <a href="https://paie-et-dsn.fr/#tarifs" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                Obtenir un devis
              </a>
            </div>
          </div>
        </section>

        {/* FILIATION */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 2rem 0' }}>
          <div style={{ background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <ShieldCheck size={20} color="#b8860b" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ color: '#5c5238', fontSize: '13.5px', lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: '#0f2d6e' }}>Un service du Cabinet Cholez-Pagotto, opéré sur son site dédié.</strong> La présentation détaillée, les tarifs, le simulateur et la souscription se trouvent sur <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{ color: '#b8860b', fontWeight: 700 }}>paie-et-dsn.fr</a>, qui fait référence. Vous y retrouvez le même interlocuteur et la même exigence que sur le présent site.
            </p>
          </div>
        </section>

        {/* PUBLICS */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 2rem 0' }}>
          <h2 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 6px' }}>Pour qui ?</h2>
          <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 1.5rem', maxWidth: 640, lineHeight: 1.7 }}>
            Le service s'adresse aux employeurs qui veulent une paie fiable sans s'équiper d'un logiciel ni suivre eux-mêmes les évolutions sociales.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {PUBLICS.map((p) => (
              <div key={p.titre} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.1rem 1.25rem' }}>
                <p style={{ color: '#0f2d6e', fontSize: '13.5px', fontWeight: 700, margin: '0 0 4px' }}>{p.titre}</p>
                <p style={{ color: '#6b7280', fontSize: '12.5px', lineHeight: 1.6, margin: 0 }}>{p.txt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CE QUI EST INCLUS */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 2rem 0' }}>
          <h2 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 1.5rem' }}>Ce qui est pris en charge</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {INCLUS.map((item) => (
              <div key={item.titre} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} color="#15803d" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ color: '#0f2d6e', fontSize: '13.5px', fontWeight: 700, margin: '0 0 4px' }}>{item.titre}</p>
                  <p style={{ color: '#6b7280', fontSize: '12.5px', lineHeight: 1.65, margin: 0 }}>{item.txt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 2rem 0' }}>
          <h2 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 1.5rem' }}>Comment ça marche</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {ETAPES.map((e) => (
              <div key={e.titre} style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem' }}>
                <e.icone size={22} color="#1a4fba" strokeWidth={1.5} style={{ marginBottom: 10 }} />
                <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: 700, margin: '0 0 6px' }}>{e.titre}</p>
                <p style={{ color: '#374151', fontSize: '12.5px', lineHeight: 1.65, margin: 0 }}>{e.txt}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem 3.5rem' }}>
          <div style={{ background: '#0f2d6e', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700, margin: '0 0 8px' }}>Confiez votre paie, gardez la maîtrise</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 20px' }}>
              Présentation complète, tarifs transparents, simulateur et souscription en ligne : tout se passe sur le site dédié du cabinet.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '12px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Découvrir paie-et-dsn.fr <ArrowRight size={16} />
              </a>
              <a href="https://paie-et-dsn.fr/#tarifs" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.5)', padding: '12px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                Obtenir un devis
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
