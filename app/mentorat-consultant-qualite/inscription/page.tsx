// app/mentorat-consultant-qualite/inscription/page.tsx
// Page d'inscription au mentorat consultant Qualiopi (server component : metadata).
// Pre-inscription sans paiement en ligne : prise de contact, puis facture et elements utiles.
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MentoratInscriptionForm from '@/components/MentoratInscriptionForm'
import { ChevronRight, Calendar, Phone, FileText, Rocket } from 'lucide-react'
import { PROCHAINE_SESSION, PLACES_RESTANTES, PRIX_NET, ELEMENTS_ENVOYES } from '@/lib/mentorat-session'

export const metadata = {
  title: 'Inscription au mentorat consultant Qualiopi · Cabinet Cholez-Pagotto',
  description: `Inscrivez-vous au mentorat individuel pour devenir consultant en démarche qualité. Démarrage le ${PROCHAINE_SESSION}. Prise de contact, puis facture et éléments de démarrage.`,
  alternates: { canonical: 'https://cholez-pagotto.fr/mentorat-consultant-qualite/inscription' },
}

const ETAPES = [
  { icone: <FileText size={18} strokeWidth={1.5} />, titre: 'Vous vous inscrivez', texte: 'Le formulaire prend quelques minutes. Aucun règlement n\'est demandé à cette étape.' },
  { icone: <Phone size={18} strokeWidth={1.5} />, titre: 'Notre juriste vous contacte', texte: 'Sous 48 heures ouvrées, par email, pour échanger sur votre projet et votre profil de départ.' },
  { icone: <FileText size={18} strokeWidth={1.5} />, titre: 'Vous recevez votre facture', texte: 'Avec tous les éléments utiles pour vous projeter dans votre accompagnement.' },
  { icone: <Rocket size={18} strokeWidth={1.5} />, titre: 'Vous démarrez', texte: `Votre accompagnement commence à partir du ${PROCHAINE_SESSION}.` },
]

export default function InscriptionMentoratPage() {
  return (
    <>
      <Header />

      <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0.6rem 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem' }}>
          <nav aria-label="Fil d'Ariane" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: 13, color: '#6b7280', flexWrap: 'wrap' }}>
            <a href="/" style={{ color: '#1a4fba', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={14} />
            <a href="/mentorat-consultant-qualite" style={{ color: '#1a4fba', textDecoration: 'none' }}>Mentorat consultant Qualiopi</a>
            <ChevronRight size={14} />
            <span style={{ color: '#374151', fontWeight: 600 }}>Inscription</span>
          </nav>
        </div>
      </div>

      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '3rem 1.5rem 2.5rem', color: 'white' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 20, letterSpacing: '0.08em', marginBottom: '1rem' }}>
              INSCRIPTION
            </span>
            <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 700, margin: '0 0 0.75rem', lineHeight: 1.2 }}>
              Je m&apos;inscris au mentorat consultant Qualiopi
            </h1>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, margin: '0 0 1.25rem', maxWidth: 720 }}>
              Accompagnement individuel et sur mesure pour devenir consultant en démarche qualité. Votre inscription ne vous engage pas à payer : nous échangeons d&apos;abord sur votre projet.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', fontSize: 13 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Calendar size={15} /> Démarrage le {PROCHAINE_SESSION}</span>
              <span style={{ background: '#b8860b', fontSize: 11, fontWeight: 700, padding: '3px 12px', borderRadius: 12 }}>{PLACES_RESTANTES} places restantes</span>
              <span style={{ fontWeight: 700 }}>{PRIX_NET}&nbsp;€ net</span>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2.5rem 1.5rem 3.5rem' }}>

          {/* ETAPES */}
          <section style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 1rem' }}>Comment ça se passe</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '12px' }}>
              {ETAPES.map((e, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#1a4fba', marginBottom: 8 }}>
                    {e.icone}
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em' }}>ÉTAPE {i + 1}</span>
                  </div>
                  <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 700, color: '#0f2d6e' }}>{e.titre}</p>
                  <p style={{ margin: 0, fontSize: 12.5, color: '#6b7280', lineHeight: 1.6 }}>{e.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FORMULAIRE */}
          <section style={{ marginBottom: '2.5rem' }}>
            <MentoratInscriptionForm />
          </section>

          {/* ELEMENTS RECUS */}
          <section>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 0.5rem' }}>Ce que vous recevez avec votre facture</h2>
            <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.7, margin: '0 0 1rem' }}>
              Pour que vous puissiez vous projeter, dès réception, dans un démarrage le {PROCHAINE_SESSION}.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '12px' }}>
              {ELEMENTS_ENVOYES.map((e) => (
                <div key={e.titre} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
                  <p style={{ margin: '0 0 4px', fontSize: 14, fontWeight: 700, color: '#0f2d6e' }}>{e.titre}</p>
                  <p style={{ margin: 0, fontSize: 12.5, color: '#374151', lineHeight: 1.65 }}>{e.detail}</p>
                </div>
              ))}
            </div>
            <p style={{ color: '#9ca3af', fontSize: 11.5, lineHeight: 1.7, margin: '1.25rem 0 0' }}>
              Cet accompagnement relève du transfert de savoir-faire métier, du mentoring d&apos;affaires et de la licence d&apos;outils. Il ne constitue pas une action de formation professionnelle. Tarif affiché en montant net, le cabinet n&apos;étant pas assujetti à la TVA.
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
