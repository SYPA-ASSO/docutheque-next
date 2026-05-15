import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Accompagnement associations et ESS | Cabinet Cholez-Pagotto",
  description: "Accompagnement des associations loi 1901, coopératives, mutuelles et structures ESS. Statuts, formalités, conformité RGPD, DPO externalisé.",
  alternates: { canonical: 'https://cholez-pagotto.fr/accompagnement-associations' },
  openGraph: {
    title: "Accompagnement associations et ESS | Cabinet Cholez-Pagotto",
    description: "Statuts, formalités, RGPD, DPO externalisé pour associations et structures ESS.",
    url: 'https://cholez-pagotto.fr/accompagnement-associations',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}