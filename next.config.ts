import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Pages de services → Tarifs
      {
        source: '/juriste-formaliste-vos-formalites',
        destination: '/tarifs',
        permanent: true,
      },
      {
        source: '/gestion-paie-externalise',
        destination: '/tarifs',
        permanent: true,
      },
      {
        source: '/securite-sociale',
        destination: '/tarifs',
        permanent: true,
      },
      {
        source: '/assistance-juridique',
        destination: '/information-sur-vos-droits',
        permanent: true,
      },
      {
        source: '/demande-information-juridique',
        destination: '/information-sur-vos-droits',
        permanent: true,
      },
      {
        source: '/professionnels',
        destination: '/tarifs',
        permanent: true,
      },

      // Pages légales
      {
        source: '/confidentialite-rgpd',
        destination: '/confidentialite',
        permanent: true,
      },
      {
        source: '/conditions-generales-utilisation',
        destination: '/cgu',
        permanent: true,
      },
      {
        source: '/mentions-legales',
        destination: '/mentions-legales',
        permanent: true,
      },
      {
        source: '/declaration-accessibilite',
        destination: '/mentions-legales',
        permanent: true,
      },

      // À propos
      {
        source: '/a-propos',
        destination: '/a-propos',
        permanent: true,
      },

      // Blog — listing
      {
        source: '/blog-informations-juridiques-actualites-mieux-comprendre-droit',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog-informations-juridiques-actualites-mieux-comprendre-droit/page/:page',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog-actualites-informations-agence-cholez-pagotto-fcfbl-activities',
        destination: '/blog',
        permanent: true,
      },

      // Tags → Blog
      {
        source: '/tag/:tag',
        destination: '/blog',
        permanent: true,
      },

      // Articles de blog — slugs conservés
      {
        source: '/lintelligence-artificielle-en-droit-une-fausse-bonne-idee',
        destination: '/blog/lintelligence-artificielle-en-droit-une-fausse-bonne-idee',
        permanent: true,
      },
      {
        source: '/at-mt-3-decisions-cour-cassation-juin-2025',
        destination: '/blog/at-mt-3-decisions-cour-cassation-juin-2025',
        permanent: true,
      },
      {
        source: '/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement',
        destination: '/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement',
        permanent: true,
      },
      {
        source: '/conges-paternite-alsace-moselle-maintien-salaire-jurisprudence',
        destination: '/blog/conges-paternite-alsace-moselle-maintien-salaire-jurisprudence',
        permanent: true,
      },
      {
        source: '/loi-no-2025-623-du-9-juillet-2025-visant-a-renforcer-la-securite-des-professionnels-de-sante',
        destination: '/blog/loi-no-2025-623-du-9-juillet-2025-visant-a-renforcer-la-securite-des-professionnels-de-sante',
        permanent: true,
      },
      {
        source: '/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal',
        destination: '/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal',
        permanent: true,
      },
      {
        source: '/cee-revalorisation-remuneration-decret-4-decembre-2024',
        destination: '/blog/cee-revalorisation-remuneration-decret-4-decembre-2024',
        permanent: true,
      },
      {
        source: '/luctus-non-massa-fusce-ac-turpis',
        destination: '/blog',
        permanent: true,
      },

      // Kit juridique
      {
        source: '/kit-juridique-gratuit-consommateur-averti-edition-1',
        destination: '/catalogue',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;