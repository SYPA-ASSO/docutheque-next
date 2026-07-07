import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonique : redirection de l'ancien sous-domaine www vers l'apex
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.cholez-pagotto.fr' }],
        destination: 'https://cholez-pagotto.fr/:path*',
        permanent: true,
      },
      // Annuaire d'avocats depublie temporairement (redirection non permanente)
      {
        source: '/annuaire-avocats',
        destination: '/juriste-formaliste-ou-avocat',
        permanent: false,
      },
      {
        source: '/annuaire-avocats/:slug*',
        destination: '/juriste-formaliste-ou-avocat',
        permanent: false,
      },
      // Pages de services
      {
        source: '/juriste-formaliste-vos-formalites',
        destination: '/formalites-juridiques-externalisees',
        permanent: true,
      },
      {
        source: '/gestion-paie-externalise',
        destination: '/accompagnement-professionnels',
        permanent: true,
      },
      {
        source: '/securite-sociale',
        destination: '/information-sur-vos-droits',
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
        source: '/declaration-accessibilite',
        destination: '/mentions-legales',
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
      {
        source: '/uncategorized',
        destination: '/blog',
        permanent: true,
      },

      // Tags → Blog
      {
        source: '/tag/:tag',
        destination: '/blog',
        permanent: true,
      },

      // Articles — slugs conservés (301 → même slug sous /blog/)
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
        source: '/caution-depot-de-garantie-difference-locataire-proprietaire',
        destination: '/blog/caution-depot-de-garantie-difference-locataire-proprietaire',
        permanent: true,
      },
      {
        source: '/reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes',
        destination: '/blog/reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes',
        permanent: true,
      },
      {
        source: '/conges-jurisprudence',
        destination: '/blog/conges-jurisprudence',
        permanent: true,
      },
      // Contenu démo WordPress résiduel → homepage
      {
        source: '/luctus-non-massa-fusce-ac-turpis',
        destination: '/blog/apprentissage-evolution-plafond-exoneration-cotisations-salariales',
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
  async headers() {
    return [
      {
        // Revalidation systematique : le navigateur verifie toujours la fraicheur
        // avant de reutiliser une page ou un fichier du dossier public.
        // Les fichiers versionnes de /_next/static restent immuables (Next les protege).
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;