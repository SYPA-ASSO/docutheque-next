import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight, ShieldCheck, Lock, Euro, FileText, UserCheck, Search } from 'lucide-react'

export const metadata = {
  title: "Prozowo.fr : la plateforme de mise en relation avec des prestataires vérifiés · Cabinet Cholez-Pagotto",
  description: "Prozowo.fr est une plateforme gratuite pour les clients, sans commission sur les prestations, qui met en relation particuliers, associations et professionnels avec des prestataires dont le dossier est vérifié. Un service édité par CBT CHOLEZ PAGOTTO.",
  alternates: { canonical: 'https://cholez-pagotto.fr/prozowo' },
}

const faq = [
  {
    q: "Prozowo.fr est-il gratuit pour les clients ?",
    a: "Oui. Déposer un besoin et recevoir des réponses est gratuit pour les clients. La plateforme ne prélève aucune commission sur les prestations : le tarif convenu avec le prestataire est le tarif payé.",
  },
  {
    q: "Comment les prestataires sont-ils vérifiés ?",
    a: "Chaque prestataire constitue un dossier (identité, justificatifs d'activité et pièces propres à son domaine), examiné par l'équipe de Prozowo avant l'accès aux annonces. Un niveau supérieur repose sur un entretien complémentaire portant sur l'activité, l'expérience et les modalités d'intervention.",
  },
  {
    q: "Mes coordonnées sont-elles transmises aux prestataires ?",
    a: "Non. Vos coordonnées restent protégées tant que vous n'avez pas choisi un prestataire. Vous voyez d'abord les réponses et la fiche du prestataire, sans son nom, puis vous décidez.",
  },
  {
    q: "Quel est le lien entre Prozowo.fr et le Cabinet Cholez-Pagotto ?",
    a: "Prozowo.fr est un service distinct, édité par CBT CHOLEZ PAGOTTO, qui exerce aussi sous le nom de Cabinet Cholez-Pagotto. Il s'adresse aux besoins qui ne relèvent pas des activités du cabinet. Pour l'information juridique, les formalités, le RGPD, le conseil en assurances ou la paie, le cabinet reste votre interlocuteur direct.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://cholez-pagotto.fr/prozowo#page",
      "name": "Prozowo.fr, plateforme de mise en relation avec des prestataires vérifiés",
      "description": "Présentation de Prozowo.fr, plateforme éditée par CBT CHOLEZ PAGOTTO : dépôt gratuit d'un besoin, prestataires vérifiés, absence de commission.",
      "url": "https://cholez-pagotto.fr/prozowo",
      "datePublished": "2026-11-18",
      "dateModified": "2026-11-18",
      "about": { "@type": "WebSite", "name": "Prozowo.fr", "url": "https://www.prozowo.fr" },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/prozowo#faq",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Prozowo.fr", "item": "https://cholez-pagotto.fr/prozowo" }
      ]
    }
  ]
}

const points = [
  { icon: Euro, titre: "Gratuit pour les clients, sans commission", txt: "Déposer un besoin ne coûte rien. La plateforme ne prélève aucune commission sur les prestations : le tarif convenu avec le prestataire est le tarif payé." },
  { icon: ShieldCheck, titre: "Des prestataires vérifiés", txt: "Chaque prestataire constitue un dossier examiné avant d'accéder aux annonces. Plusieurs niveaux de vérification existent, jusqu'à un entretien complémentaire sur l'activité et l'expérience." },
  { icon: Lock, titre: "Vos coordonnées restent protégées", txt: "Tant que vous n'avez pas choisi un prestataire, il ne reçoit ni votre nom ni vos coordonnées. De votre côté, vous consultez d'abord sa fiche, sans son nom." },
  { icon: UserCheck, titre: "Le choix vous appartient", txt: "Vous comparez les réponses reçues et vous décidez. Les réponses sont examinées avant de vous être transmises." },
]

const etapes = [
  { n: "1", titre: "Décrivez votre besoin", txt: "Quelques lignes suffisent : la nature de la prestation, le lieu, le délai souhaité." },
  { n: "2", titre: "Recevez des réponses", txt: "Les prestataires vérifiés du domaine concerné vous répondent avec leur proposition." },
  { n: "3", titre: "Choisissez", txt: "Vous retenez le prestataire qui vous convient, au tarif convenu avec lui." },
]

export default function PageProzowo() {
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
            <span style={{ color: '#0f2d6e', fontWeight: '500' }}>Prozowo.fr</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.05em' }}>
              UN SERVICE DE L&apos;ÉDITEUR
            </span>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px', lineHeight: '1.3', maxWidth: '780px' }}>
              Prozowo.fr : trouvez un prestataire vérifié, gratuitement
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.8', margin: '0 0 24px', maxWidth: '740px' }}>
              Prozowo.fr met en relation les particuliers, les associations et les professionnels avec des prestataires dont le dossier a été vérifié. Vous décrivez votre besoin, vous recevez des réponses, vous choisissez. Pas de commission sur les prestations.
            </p>
            <a href="https://www.prozowo.fr/publier" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
              Déposer gratuitement mon besoin <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>

          {/* POURQUOI */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1rem' }}>Pourquoi Prozowo.fr</h2>
            <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.85', margin: '0 0 20px', maxWidth: '780px' }}>
              Trouver un prestataire fiable demande du temps, et la fiabilité se juge rarement sur une annonce. Prozowo.fr part d&apos;un principe simple : vérifier les prestataires avant qu&apos;ils puissent répondre, et laisser le client choisir en connaissance de cause.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {points.map((p) => {
                const Icone = p.icon
                return (
                  <div key={p.titre} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Icone size={20} color="#1a4fba" strokeWidth={1.5} />
                      <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: 0 }}>{p.titre}</h3>
                    </div>
                    <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.75', margin: 0 }}>{p.txt}</p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ETAPES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Comment ça marche</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              {etapes.map((e) => (
                <div key={e.n} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#eff6ff', color: '#1a4fba', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', marginBottom: '12px' }}>{e.n}</div>
                  <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 6px' }}>{e.titre}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.75', margin: 0 }}>{e.txt}</p>
                </div>
              ))}
            </div>
          </section>

          {/* LIEN AVEC LE CABINET */}
          <section style={{ marginBottom: '3.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <FileText size={22} color="#1a4fba" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ color: '#0f2d6e', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 10px' }}>Prozowo.fr et le Cabinet Cholez-Pagotto</h2>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.85', margin: '0 0 12px' }}>
                  Prozowo.fr est un service distinct du cabinet, édité par CBT CHOLEZ PAGOTTO. Il s&apos;adresse aux besoins qui ne relèvent pas des activités du cabinet.
                </p>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.85', margin: 0 }}>
                  Pour l&apos;information juridique, les formalités, le RGPD, le conseil en assurances ou la paie, le cabinet reste votre interlocuteur direct :{' '}
                  <a href="/services" style={{ color: '#1a4fba', fontWeight: 600 }}>voir les services du cabinet</a>. Le cabinet est par ailleurs référencé sur Prozowo.fr comme prestataire vérifié.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Questions fréquentes</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              {faq.map((f) => (
                <div key={f.q} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 8px' }}>{f.q}</h3>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.8', margin: 0 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 8px' }}>Vous recherchez un prestataire ?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: '0 0 20px', lineHeight: '1.7' }}>
              Déposez gratuitement votre besoin sur Prozowo.fr et recevez les réponses de prestataires vérifiés.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.prozowo.fr/publier" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
                <Search size={15} /> Déposer mon besoin
              </a>
              <a href="https://www.prozowo.fr" style={{ display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.5)', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                Découvrir Prozowo.fr
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
