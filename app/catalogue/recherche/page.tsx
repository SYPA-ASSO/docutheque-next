import type { Metadata } from 'next'
import RechercheClient from './RechercheClient'

export const metadata: Metadata = {
  title: 'Recherche de documents juridiques · Cabinet Cholez-Pagotto',
  description: "Recherchez un modèle de document juridique dans le catalogue du Cabinet Cholez-Pagotto : filtres par catégorie et par niveau d'accès, tri et résultats détaillés.",
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://cholez-pagotto.fr/catalogue' },
}

export default function Page() {
  return <RechercheClient />
}
