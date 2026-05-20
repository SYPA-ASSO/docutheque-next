import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bibliothèque de documents juridiques téléchargeables | Cabinet Cholez-Pagotto",
  description: "Modèles de documents juridiques au format DOCX, téléchargeables et personnalisables. Contrats, baux, statuts, RGPD, courriers. Accès libre ou abonnement Optimal à 14,90 €/mois.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/catalogue',
  },
  openGraph: {
    title: "Bibliothèque de documents juridiques DOCX | Cabinet Cholez-Pagotto",
    description: "60+ modèles de documents téléchargeables et personnalisables. Accès libre ou abonnement Optimal 14,90 €/mois.",
    url: 'https://cholez-pagotto.fr/catalogue',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}