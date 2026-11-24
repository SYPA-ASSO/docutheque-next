import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bibliothèque de documents juridiques téléchargeables | Cabinet Cholez-Pagotto",
  description: "Modèles de documents juridiques au format DOCX, téléchargeables et personnalisables. Contrats, baux, statuts, RGPD, courriers. Achat à l'unité ou abonnement Optimal dès 17,90 €/mois. Rédigés et relus par un juriste.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/catalogue',
  },
  openGraph: {
    title: "Bibliothèque de documents juridiques DOCX | Cabinet Cholez-Pagotto",
    description: "60+ modèles de documents téléchargeables et personnalisables. Achat à l'unité ou abonnement Optimal dès 17,90 €/mois. Rédigés et relus par un juriste.",
    url: 'https://cholez-pagotto.fr/catalogue',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}