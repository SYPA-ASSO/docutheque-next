import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Accompagnement particuliers - Information juridique | Cabinet Cholez-Pagotto",
  description: "Information juridique sur vos droits (47€), conseil en assurances sans honoraires directs, bibliothèque de documents. Réponse sous 24 à 48h ouvrées.",
  alternates: { canonical: 'https://cholez-pagotto.fr/accompagnement-particuliers' },
  openGraph: {
    title: "Information juridique pour particuliers | Cabinet Cholez-Pagotto",
    description: "Information juridique 47€, conseil assurances gratuit, bibliothèque DOCX.",
    url: 'https://cholez-pagotto.fr/accompagnement-particuliers',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}