import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Wallet, ShieldCheck, BellRing, ScrollText, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SITE = 'https://cholez-pagotto.fr'
const NB = '\u00a0'

export const metadata: Metadata = {
  title: 'Devenir avocat partenaire · Cabinet Cholez-Pagotto',
  description:
    "Rejoignez l'annuaire d'avocats partenaires du Cabinet Cholez-Pagotto. Recevez des demandes de consultation qualifiées, fixez librement vos honoraires. Facturation à l'acte, sans partage d'honoraires.",
  alternates: { canonical: `${SITE}/referencement-avocats` },
}

const ATOUTS = [
  { Icon: Users, titre: 'Des demandes qualifiées', texte: "Vous recevez des demandes de clients qui ont choisi votre profil pour son domaine et sa localisation, avec un exposé déjà structuré." },
  { Icon: Wallet, titre: 'Vous fixez vos honoraires', texte: "Vous restez maître de votre tarif. Il s'affiche à titre indicatif sur votre fiche, et la consultation est facturée directement par vous, au client." },
  { Icon: ShieldCheck, titre: 'Indépendance totale', texte: "Le cabinet n'est qu'un intermédiaire technique. Vous demeurez seul responsable de la prestation, dans le respect de vos règles déontologiques et du secret professionnel." },
  { Icon: MapPin, titre: 'Visibilité ciblée', texte: 'Votre fiche apparaît dans notre annuaire, filtrable par domaine et par région, et auprès de notre base de clients abonnés.' },
  { Icon: BellRing, titre: 'Vérification des conflits', texte: "La divulgation est graduée : nature du dossier, puis identité pour votre contrôle de conflit d'intérêts, puis dossier complet seulement si vous l'acceptez." },
  { Icon: ScrollText, titre: 'Aucun partage d\'honoraires', texte: "Le cabinet ne prélève jamais de pourcentage sur vos honoraires. Le référencement est facturé à l'acte, à montant fixe, par demande aboutie." },
]

export default function Page() {
  const bloc: React.CSSProperties = { maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }

  return (
    <>
      <Header />
      <main style={{ background: '#f7f8fb' }}>
        {/* Hero */}
        <section style={{ background: '#0f2d6e', color: 'white', padding: '3.5rem 1.5rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ color: '#c8a84b', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 12px' }}>Vous êtes avocat ?</p>
            <h1 style={{ fontSize: '2.2rem', lineHeight: 1.2, margin: '0 0 16px', maxWidth: '720px' }}>Rejoignez notre réseau d&apos;avocats partenaires</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.7, maxWidth: '680px', margin: '0 0 28px' }}>
              Le Cabinet Cholez-Pagotto oriente ses clients, particuliers comme professionnels, vers des avocats partenaires
              selon leur besoin. Inscrivez-vous pour recevoir des demandes de consultation qualifiées, en gardant la pleine
              maîtrise de vos honoraires.
            </p>
            <Link href="/contact?objet=referencement-avocat" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#c8a84b,#b8860b)', color: '#0f2d6e', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(184,134,11,0.3)' }}>
              Demander mon référencement
            </Link>
          </div>
        </section>

        {/* Atouts */}
        <section style={{ ...bloc, padding: '3rem 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {ATOUTS.map(({ Icon, titre, texte }) => (
              <div key={titre} style={{ background: 'white', border: '1px solid #eaedf3', borderRadius: '14px', padding: '1.5rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#eef1fa', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <Icon size={20} style={{ color: '#0f2d6e' }} />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: '15px', color: '#0f2d6e' }}>{titre}</h3>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#374151', lineHeight: 1.65 }}>{texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comment ca marche */}
        <section style={{ background: 'white', borderTop: '1px solid #eaedf3', borderBottom: '1px solid #eaedf3' }}>
          <div style={{ ...bloc, padding: '3rem 1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: '#0f2d6e', margin: '0 0 1.5rem', textAlign: 'center' }}>Comment ça fonctionne</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {[
                ['1', 'Vous vous inscrivez', "Vous nous contactez, nous créons votre fiche et vous recevez un lien privé pour la compléter : domaines, honoraires, disponibilités."],
                ['2', 'Vous êtes publié', 'Après validation, votre fiche apparaît dans notre annuaire, filtrable par domaine et région.'],
                ['3', 'Vous recevez des demandes', "Un client choisit votre profil et décrit sa situation. Vous vérifiez l'absence de conflit, puis vous le recontactez."],
                ['4', 'Vous facturez le client', 'La consultation se déroule par téléphone ou en visio. Vous facturez vos honoraires directement au client.'],
              ].map(([n, t, d]) => (
                <div key={n}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#0f2d6e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', marginBottom: '12px' }}>{n}</div>
                  <h3 style={{ margin: '0 0 6px', fontSize: '14px', color: '#0f2d6e' }}>{t}</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: 1.6 }}>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarification */}
        <section style={{ ...bloc, padding: '3rem 1.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg,#fbf7ee,#f6efdf)', border: '1px solid #e7d9b8', borderRadius: '18px', padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: '#b8860b', fontSize: '11px', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 10px' }}>Une tarification simple et transparente</p>
            <h2 style={{ fontSize: '1.6rem', color: '#0f2d6e', margin: '0 0 12px' }}>Facturation à l&apos;acte</h2>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto 8px' }}>
              Vous ne payez qu&apos;un montant fixe par demande aboutie, c&apos;est-à-dire chaque mise en relation que vous acceptez.
              Aucun abonnement obligatoire, aucun pourcentage sur vos honoraires, aucun engagement de durée.
            </p>
            <p style={{ fontSize: '13px', color: '#9aa2b1', margin: '14px 0 0' }}>
              Le montant exact vous est communiqué lors de votre inscription. Une formule annuelle est possible pour un volume régulier de demandes.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section style={{ ...bloc, padding: '0 1.5rem 4rem' }}>
          <div style={{ textAlign: 'center' }}>
            <Link href="/contact?objet=referencement-avocat" style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', fontWeight: 700, fontSize: '15px', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none' }}>
              Demander mon référencement
            </Link>
            <p style={{ fontSize: '11px', color: '#9aa2b1', lineHeight: 1.7, margin: '1.5rem auto 0', maxWidth: '680px' }}>
              Le Cabinet Cholez-Pagotto agit comme intermédiaire technique de mise en relation et ne partage jamais les honoraires
              des avocats. Chaque avocat intervient en toute indépendance, sous sa seule responsabilité, dans le respect de ses
              règles professionnelles. Information juridique au sens de la loi n{NB}°{NB}71-1130 du 31 décembre 1971.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
