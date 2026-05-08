import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Docutheque et assistance : documents juridiques prets a l'emploi et informations pedagogiques, vos droits expliques sans jargon",
  description: "Modeles de documents juridiques et administratifs conformes au droit en vigueur : contrats, mises en demeure, RGPD, RH, recouvrement, statuts de societe. Telechargez en DOCX. Vos droits expliques sans jargon par un juriste dedie.",
  keywords: "modeles de documents, documents pedagogiques, documents juridiques, contrats, mise en demeure, RGPD, documents RH, statuts SASU, statuts SARL, auto-entrepreneur, micro entreprise, juriste en ligne, assistance juridique, formalites, creation d'entreprise, information juridique, droit du travail, protection juridique",
  openGraph: {
    title: "Docutheque et informations sur vos droits. Juriste et formaliste dedie",
    description: "Modeles de documents, informations administratives et juridiques pedagogiques, juriste formaliste et conseil en assurances dedie.",
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