import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <title>Docutheque et assistance : documents juridiques prets a l'emploi et informations pedagogiques, vos droits expliques sans jargon</title>
        <meta name="description" content="Modeles de documents juridiques et administratifs conformes au droit en vigueur : contrats, mises en demeure, RGPD, RH, recouvrement, statuts de societe. Telechargez en DOCX. Vos droits expliques sans jargon par un juriste dedie." />
        <meta name="keywords" content="modeles de documents, documents pedagogiques, documents juridiques, contrats, mise en demeure, RGPD, documents RH, statuts SASU, statuts SARL, auto-entrepreneur, micro entreprise, juriste en ligne, assistance juridique, formalites, creation d'entreprise, information juridique, droit du travail, protection juridique" />
        <meta property="og:title" content="Docutheque et informations sur vos droits. Juriste et formaliste dedie" />
        <meta property="og:description" content="Modeles de documents, informations administratives et juridiques pedagogiques, juriste formaliste et conseil en assurances dedie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://docutheque.cholez-pagotto.fr" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://docutheque.cholez-pagotto.fr" />
        <meta name="theme-color" content="#0f2d6e" />
      </head>
      <body>{children}</body>
    </html>
  );
}