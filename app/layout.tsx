import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Docuthèque et assistance : documents juridiques prêts à l'emploi et informations pédagogiques, vos droits expliqués sans jargon",
  description: "Modèles de documents juridiques et administratifs conformes au droit en vigueur : contrats, mises en demeure, RGPD, RH, recouvrement, statuts de société. Téléchargez en DOCX. Vos droits expliqués sans jargon par un juriste dédié.",
  keywords: "modèles de documents, documents pédagogiques, documents juridiques, contrats, mise en demeure, RGPD, documents RH, statuts SASU, statuts SARL, auto-entrepreneur, micro entreprise, juriste en ligne, assistance juridique, formalités, création d'entreprise, information juridique, droit du travail, protection juridique",
  openGraph: {
    title: "Docuthèque et informations sur vos droits. Juriste et formaliste dédié",
    description: "Modèles de documents, informations administratives et juridiques pédagogiques, juriste formaliste et conseil en assurances dédié.",
    type: "website",
    url: "https://docutheque.cholez-pagotto.fr",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://docutheque.cholez-pagotto.fr",
  },
  themeColor: "#0f2d6e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}