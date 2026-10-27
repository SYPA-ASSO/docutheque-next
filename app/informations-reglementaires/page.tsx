// app/informations-reglementaires/page.tsx
// Cabinet Cholez-Pagotto - Informations réglementaires du courtage en assurances
// Base : Code des assurances L.521-1, L.521-2, L.521-4 ; R.521-1 ; recommandation ACPR 2024-R-02.
// Règles : ORIAS 26003943, zéro tiret long, NBSP avant euro, cholez-pagotto.fr, aucune adresse email affichée.

import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Informations réglementaires · Courtage en assurances · Cabinet Cholez-Pagotto',
  description: "Informations réglementaires du courtage en assurances du Cabinet Cholez-Pagotto : immatriculation ORIAS, statut, rémunération, réclamations et médiation de l'assurance.",
  alternates: { canonical: 'https://cholez-pagotto.fr/informations-reglementaires' },
}

const sections = [
  { id: 'identite', label: '1. Identité et immatriculation' },
  { id: 'statut', label: '2. Statut et relations avec les assureurs' },
  { id: 'analyse', label: '3. Base de l\'analyse et recommandation' },
  { id: 'remuneration', label: '4. Rémunération' },
  { id: 'conseil', label: '5. Exigences, besoins et conseil' },
  { id: 'rc', label: '6. Responsabilité civile professionnelle' },
  { id: 'reclamations', label: '7. Réclamations' },
  { id: 'mediation', label: '8. Médiation de l\'assurance' },
]

const cardstyle = { background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem' }
const h2style = { color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700' as const, margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }
const pstyle = { fontSize: '14px', color: '#374151', lineHeight: '1.85' as const, margin: '0 0 10px' }
const plastyle = { fontSize: '14px', color: '#374151', lineHeight: '1.85' as const, margin: 0 }
const linkstyle = { color: '#1a4fba', textDecoration: 'none' as const }
const labelstyle = { color: '#6b7280', fontSize: '13px' }

export default function InformationsReglementaires() {
  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <a href="/conseil-assurances" style={{ color: '#6b7280', textDecoration: 'none' }}>Conseil en assurances</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: '500' }}>Informations réglementaires</span>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: '1fr 240px', gap: '3rem', alignItems: 'start' }}>

          {/* COLONNE PRINCIPALE */}
          <div style={{ flex: 1, minWidth: 0 }}>

            <div style={{ marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px' }}>COURTAGE EN ASSURANCES</span>
              <h1 style={{ color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px' }}>Informations réglementaires</h1>
              <p style={{ color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6' }}>
                Informations communiquées avant la conclusion de tout contrat d&apos;assurance, conformément aux articles L.521-2 et R.521-1 du Code des assurances. Dernière mise à jour : 27 octobre 2026.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              <section id="identite" style={cardstyle}>
                <h2 style={h2style}>1. Identité et immatriculation</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '8px 16px', fontSize: '14px', color: '#374151', lineHeight: '1.7' }}>
                  <span style={labelstyle}>Intermédiaire</span>
                  <span><strong>CBT CHOLEZ PAGOTTO</strong>, Cabinet Cholez-Pagotto, entreprise individuelle de François CHOLEZ</span>
                  <span style={labelstyle}>Adresse</span>
                  <span>12 rue d&apos;Olima, 88000 Épinal</span>
                  <span style={labelstyle}>SIREN</span>
                  <span>490 889 516</span>
                  <span style={labelstyle}>Immatriculation</span>
                  <span>Courtier d&apos;assurance immatriculé à l&apos;ORIAS sous le numéro <strong>26003943</strong>, consultable sur <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" style={linkstyle}>www.orias.fr</a></span>
                  <span style={labelstyle}>Autorité de contrôle</span>
                  <span>Autorité de contrôle prudentiel et de résolution (ACPR), 4 place de Budapest, CS 92459, 75436 Paris Cedex 09</span>
                  <span style={labelstyle}>Association professionnelle</span>
                  <span>Membre de l&apos;association d&apos;autorégulation ENDYA</span>
                  <span style={labelstyle}>Contact</span>
                  <span>via le <a href="/contact" style={{ ...linkstyle, fontWeight: '600' }}>formulaire de contact →</a></span>
                </div>
              </section>

              <section id="statut" style={cardstyle}>
                <h2 style={h2style}>2. Statut et relations avec les assureurs</h2>
                <p style={pstyle}>
                  Le cabinet n&apos;est soumis à aucune obligation contractuelle de travailler exclusivement avec une ou plusieurs entreprises d&apos;assurance.
                </p>
                <p style={pstyle}>
                  Le cabinet ne détient aucune participation, directe ou indirecte, égale ou supérieure à 10&nbsp;% des droits de vote ou du capital d&apos;une entreprise d&apos;assurance. Aucune entreprise d&apos;assurance, ni l&apos;entreprise mère d&apos;une entreprise d&apos;assurance, ne détient de participation supérieure à 10&nbsp;% des droits de vote ou du capital du cabinet.
                </p>
                <p style={plastyle}>
                  Le cabinet n&apos;encaisse aucune prime d&apos;assurance : les primes sont réglées directement à l&apos;entreprise d&apos;assurance.
                </p>
              </section>

              <section id="analyse" style={cardstyle}>
                <h2 style={h2style}>3. Base de l&apos;analyse et recommandation</h2>
                <p style={pstyle}>
                  Le cabinet ne fonde pas son analyse sur l&apos;ensemble des contrats offerts sur le marché. Il travaille avec des compagnies d&apos;assurance et des grossistes avec lesquels il a conclu des conventions de partenariat, et il ne se prévaut pas d&apos;une analyse impartiale fondée sur un nombre suffisant de contrats offerts sur le marché.
                </p>
                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '12px 14px', margin: '12px 0', fontSize: '13px', color: '#1e3a5f', lineHeight: '1.7' }}>
                  <strong>Le nom des compagnies et des grossistes avec lesquels le cabinet travaille</strong> vous est communiqué avant toute souscription, dans votre espace client et dans la fiche remise avant la souscription.
                </div>
                <p style={plastyle}>
                  Le cabinet fournit un service de recommandation : le rapport de conseil explique pourquoi, parmi les offres des partenaires consultés, celles qu&apos;il recommande correspondent le mieux à vos exigences et à vos besoins (article L.521-4 du Code des assurances).
                </p>
              </section>

              <section id="remuneration" style={cardstyle}>
                <h2 style={h2style}>4. Rémunération</h2>
                <p style={pstyle}>
                  Le cabinet est rémunéré sur la base d&apos;une combinaison de deux modes de rémunération :
                </p>
                <ul style={{ paddingLeft: '1.5rem', margin: '8px 0', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px', color: '#374151', lineHeight: '1.8' }}>
                  <li><strong>Honoraires</strong>, c&apos;est-à-dire une rémunération payée directement par le client : le forfait conseil, de 90&nbsp;€ pour un particulier et de 150&nbsp;€ pour un professionnel ou une association (sur devis pour une structure complexe). Il est dû avant la remise du rapport, indépendamment de toute souscription.</li>
                  <li><strong>Commission</strong>, c&apos;est-à-dire une rémunération incluse dans la prime d&apos;assurance et versée par l&apos;assureur, en cas de souscription d&apos;un contrat via le cabinet. Elle est distincte du forfait.</li>
                </ul>
                <p style={plastyle}>
                  Le cabinet s&apos;engage à vous communiquer le montant de la commission avant toute souscription.
                </p>
              </section>

              <section id="conseil" style={cardstyle}>
                <h2 style={h2style}>5. Exigences, besoins et conseil</h2>
                <p style={pstyle}>
                  Avant la conclusion de tout contrat d&apos;assurance, le cabinet précise par écrit vos exigences et vos besoins, sur la base des informations que vous lui communiquez, et vous fournit des informations objectives sur le produit proposé sous une forme compréhensible, exacte et non trompeuse (article L.521-4 du Code des assurances).
                </p>
                <p style={pstyle}>
                  Il conseille un contrat cohérent avec vos exigences et vos besoins et précise les raisons de ce conseil. Ces précisions sont adaptées à la complexité du contrat proposé.
                </p>
                <p style={plastyle}>
                  Le recueil de vos besoins, le rapport de conseil et le justificatif de paiement sont conservés et mis à votre disposition dans votre espace client. Ils sont conservés pendant la durée du contrat, puis jusqu&apos;à l&apos;expiration des délais de prescription applicables.
                </p>
              </section>

              <section id="rc" style={cardstyle}>
                <h2 style={h2style}>6. Responsabilité civile professionnelle</h2>
                <p style={plastyle}>
                  Le cabinet a souscrit une assurance de responsabilité civile professionnelle auprès de <strong>MARKEL INSURANCE SE</strong> (Neuilly-sur-Seine), police n°&nbsp;RK0002849, couvrant son activité de courtage sans encaissement de primes.
                </p>
              </section>

              <section id="reclamations" style={cardstyle}>
                <h2 style={h2style}>7. Réclamations</h2>
                <p style={pstyle}>
                  Toute réclamation relative à l&apos;activité de courtage en assurances peut être adressée au cabinet par le <a href="/contact" style={{ ...linkstyle, fontWeight: '600' }}>formulaire de contact</a> ou par courrier à l&apos;adresse indiquée en haut de cette page.
                </p>
                <p style={plastyle}>
                  Le cabinet en accuse réception sous dix jours ouvrables et apporte une réponse dans un délai maximal de deux mois à compter de la réception de la réclamation.
                </p>
              </section>

              <section id="mediation" style={cardstyle}>
                <h2 style={h2style}>8. Médiation de l&apos;assurance</h2>
                <p style={pstyle}>
                  Si la réponse du cabinet ne vous satisfait pas, ou en l&apos;absence de réponse, vous pouvez saisir gratuitement le médiateur de l&apos;assurance :
                </p>
                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '12px 14px', margin: '12px 0', fontSize: '13px', color: '#1e3a5f', lineHeight: '1.7' }}>
                  <strong>La Médiation de l&apos;Assurance</strong><br />
                  Monsieur le Médiateur de l&apos;Assurance, TSA 50110, 75441 Paris Cedex 09<br />
                  <a href="https://www.mediation-assurance.org" target="_blank" rel="noopener noreferrer" style={linkstyle}>www.mediation-assurance.org</a>
                </div>
                <p style={plastyle}>
                  Cette médiation concerne l&apos;activité de courtage en assurances. Pour les autres services du cabinet, voir l&apos;article 19 des <a href="/cgu" style={linkstyle}>conditions générales d&apos;utilisation et de vente</a>. Le recours à la médiation est sans préjudice du droit de saisir les juridictions compétentes, ni de celui de saisir l&apos;ACPR.
                </p>
              </section>

            </div>
          </div>

          {/* SIDEBAR NAVIGATION */}
          <aside style={{ flex: '0 0 240px', position: 'sticky', top: '80px' }}>
            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <p style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '700', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sommaire</p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} style={{ color: '#6b7280', fontSize: '12px', textDecoration: 'none', padding: '6px 8px', borderRadius: '6px', lineHeight: '1.4', display: 'block' }}>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

        </div>
      </main>
      <FooterMinimal />
    </>
  )
}
