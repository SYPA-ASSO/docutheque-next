import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, AlertCircle, Info } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Confirmation de votre inscription · Cabinet Cholez-Pagotto',
  robots: { index: false, follow: false },
}

const CONTENU: Record<string, { Icon: typeof CheckCircle2; couleur: string; titre: string; texte: string }> = {
  ok: {
    Icon: CheckCircle2,
    couleur: '#15803d',
    titre: 'Inscription confirmée',
    texte: "Votre inscription à la newsletter est confirmée. Vous recevrez nos prochaines actualités juridiques et nos informations utiles. Vous pourrez vous désinscrire à tout moment, en un clic, depuis chaque envoi.",
  },
  deja: {
    Icon: Info,
    couleur: '#1a4fba',
    titre: 'Inscription déjà confirmée',
    texte: "Votre adresse était déjà confirmée : vous êtes bien inscrit à la newsletter du cabinet. Aucune action supplémentaire n'est nécessaire.",
  },
  invalide: {
    Icon: AlertCircle,
    couleur: '#b8860b',
    titre: 'Lien invalide ou expiré',
    texte: "Ce lien de confirmation n'est pas valide. Vous pouvez relancer votre inscription depuis le site, un nouvel email de confirmation vous sera alors envoyé.",
  },
  erreur: {
    Icon: AlertCircle,
    couleur: '#dc2626',
    titre: 'Une erreur est survenue',
    texte: "La confirmation n'a pas pu aboutir. Merci de réessayer dans quelques instants, ou de relancer votre inscription depuis le site.",
  },
}

export default async function Page({ searchParams }: { searchParams: Promise<{ etat?: string }> }) {
  const { etat } = await searchParams
  const c = CONTENU[etat || ''] || CONTENU.invalide
  const Icon = c.Icon

  return (
    <>
      <Header />
      <main style={{ background: '#f7f8fb', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
        <div style={{ background: 'white', border: '1px solid #eaedf3', borderRadius: '16px', padding: '2.5rem', maxWidth: '480px', textAlign: 'center' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
            <Icon size={30} style={{ color: c.couleur }} />
          </div>
          <h1 style={{ margin: '0 0 10px', fontSize: '1.4rem', color: '#0f2d6e' }}>{c.titre}</h1>
          <p style={{ margin: '0 0 24px', fontSize: '14px', color: '#374151', lineHeight: 1.7 }}>{c.texte}</p>
          <Link href="/" style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', fontWeight: 700, fontSize: '14px', padding: '11px 26px', borderRadius: '50px', textDecoration: 'none' }}>
            Retour à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
