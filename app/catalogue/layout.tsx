import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bibliothèque de documents juridiques téléchargeables | Cabinet Cholez-Pagotto",
  description: "Modèles de documents juridiques au format DOCX, téléchargeables et personnalisables. Contrats, baux, statuts, RGPD, courriers. Modèles gratuits accessibles depuis la Docuthèque, autres modèles sur demande ou avec l'abonnement Optimal dès 17,90 €/mois.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/catalogue',
  },
  openGraph: {
    title: "Bibliothèque de documents juridiques DOCX | Cabinet Cholez-Pagotto",
    description: "Modèles de documents juridiques personnalisables : gratuits depuis la Docuthèque, sur demande avec l'abonnement Optimal dès 17,90 €/mois.",
    url: 'https://cholez-pagotto.fr/catalogue',
    siteName: 'Cabinet Cholez-Pagotto',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}