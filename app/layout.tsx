import type { Metadata } from 'next'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Docuthèque · Cabinet Cholez-Pagotto',
  description: 'Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Comprendre. Décider. Agir. Juriste formaliste, membre CRFF, ORIAS n°26003943.',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://cholez-pagotto.fr',
  },
  openGraph: {
    title: 'Docuthèque · Cabinet Cholez-Pagotto',
    description: 'Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Comprendre. Décider. Agir.',
    url: 'https://cholez-pagotto.fr',
    siteName: 'Docuthèque · Cabinet Cholez-Pagotto',
    images: [
      {
        url: '/logo-social-512x512.png',
        width: 512,
        height: 512,
        alt: 'Cabinet Cholez-Pagotto · Comprendre. Décider. Agir.',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Docuthèque · Cabinet Cholez-Pagotto',
    description: 'Information juridique, documents téléchargeables et personnalisables, conseil en assurances.',
    images: ['/logo-social-512x512.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}