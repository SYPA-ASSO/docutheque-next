import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Formations sur-mesure Droit, RGPD, Assurances | Cabinet Cholez-Pagotto",
  description: "Formations sur-mesure pour entreprises, associations et structures ESS. Droit du travail, RGPD, gouvernance associative, formalités, assurances. Présentiel ou distanciel.",
  alternates: { canonical: 'https://cholez-pagotto.fr/formations' },
  openGraph: {
    title: "Formations juridiques sur-mesure | Cabinet Cholez-Pagotto",
    description: "Droit du travail, RGPD, assurances, formalités. Présentiel ou distanciel. Sur devis.",
    url: 'https://cholez-pagotto.fr/formations',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}