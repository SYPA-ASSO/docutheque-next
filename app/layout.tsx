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
        <title>Docuthèque : documents juridiques prêts à l'emploi et informations pédagogiques, vos droits expliqués sans jargon</title>
        <meta name="description" content="Modèles de documents juridiques et administratifs conformes au droit en vigueur : contrats, mises en demeure, RGPD, RH, recouvrement, statuts de société. Téléchargez en DOCX. Vos droits expliqués sans jargon par un juriste dédié." />
        <meta name="keywords" content="modèles de documents, documents pédagogiques, documents juridiques, contrats, mise en demeure, RGPD, documents RH, statuts SASU, statuts SARL, auto-entrepreneur, micro-entreprise, juriste en ligne, assistance juridique, formalités, création d'entreprise, information juridique, droit du travail, protection juridique" />
        <meta property="og:title" content="Docuthèque : documents juridiques et informations sur vos droits. Juriste et formaliste dédié" />
        <meta property="og:description" content="Modèles de documents, informations administratives et juridiques pédagogiques, juriste formaliste et conseil en assurances dédié." />
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