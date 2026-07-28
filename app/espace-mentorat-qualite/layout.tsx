// app/espace-mentorat-qualite/layout.tsx
// Espace prive : exclu de l'indexation (noindex) en complement du blocage robots.txt,
// et absent du sitemap. La page elle-meme est un composant client protege par session.

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Espace mentorat consultant qualité · Cabinet Cholez-Pagotto',
  robots: { index: false, follow: false },
}

export default function EspaceMentoratQualiteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
