import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Création d'entreprise accompagnée | Cabinet Cholez-Pagotto",
  description: "Formalités de création offertes hors greffe et journal d'annonces légales. SASU, SARL, SAS, EURL, micro-entreprise. Juriste formaliste CRFF.",
  alternates: { canonical: 'https://cholez-pagotto.fr/accompagnement-professionnels' },
  openGraph: {
    title: "Création d'entreprise avec un formaliste CRFF | Cabinet Cholez-Pagotto",
    description: "Formalités offertes. SASU, SARL, SAS, EURL, micro-entreprise.",
    url: 'https://cholez-pagotto.fr/accompagnement-professionnels',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}