import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabaseAdmin } from '@/lib/supabase-admin'
import type { Avocat } from '@/lib/avocats'
import AnnuaireClient from './AnnuaireClient'

export const revalidate = 120
const SITE = 'https://cholez-pagotto.fr'

export const metadata: Metadata = {
  title: 'Annuaire des avocats partenaires · Cabinet Cholez-Pagotto',
  description:
    "Trouvez un avocat partenaire par domaine de droit et par région. La mise en relation est incluse dans l'abonnement Optimal. Chaque avocat fixe librement ses honoraires.",
  alternates: { canonical: `${SITE}/annuaire-avocats` },
}

async function getAvocats(): Promise<Avocat[]> {
  const { data } = await supabaseAdmin
    .from('avocats')
    .select(
      'id, slug, civilite, prenom, nom, barreau, structure, ville, departement, region, domaines, photo_url, tarif_montant, tarif_unite, delai_reponse'
    )
    .eq('actif', true)
    .order('nom', { ascending: true })
  return (data as Avocat[]) || []
}

export default async function Page() {
  const avocats = await getAvocats()

  return (
    <>
      <Header />
      <main style={{ background: '#f7f8fb', minHeight: '70vh' }}>
        <section style={{ background: '#0f2d6e', color: 'white', padding: '3rem 1.5rem 2.5rem' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <p style={{ color: '#c8a84b', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 10px' }}>
              Réseau d&apos;avocats partenaires
            </p>
            <h1 style={{ fontSize: '2rem', margin: '0 0 12px', lineHeight: 1.2 }}>Trouvez l&apos;avocat qu&apos;il vous faut</h1>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '15px', maxWidth: '660px', lineHeight: 1.7, margin: 0 }}>
              Sélectionnez un domaine et une région, choisissez votre avocat, puis demandez une mise en relation.
              La mise en relation est incluse dans l&apos;abonnement Optimal. Chaque avocat demeure indépendant et fixe librement ses honoraires.
            </p>
          </div>
        </section>

        <AnnuaireClient avocats={avocats} />
      </main>
      <Footer />
    </>
  )
}
