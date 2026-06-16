import type { MetadataRoute } from 'next'

const baseUrl = 'https://cholez-pagotto.fr'

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

const pages: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },

  // Pages de service principales
  { path: '/accompagnement-particuliers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/accompagnement-professionnels', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/accompagnement-associations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/creation-entreprise', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/conseil-assurances', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rgpd-conformite', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/dpo-externalise', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/formalites-juridiques-externalisees', priority: 0.8, changeFrequency: 'monthly' },

  // RGPD : pages produit et cibles
  { path: '/rgpd-conformite/diagnostic-essentiel', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/rgpd-conformite/diagnostic-standard', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/rgpd-conformite/tpe-independant', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/rgpd-conformite/association', priority: 0.7, changeFrequency: 'monthly' },

  // Catalogue, tarifs, contenus
  { path: '/catalogue', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/tarifs', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/information-sur-vos-droits', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/formations', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/juriste-formaliste-ou-avocat', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/vie-des-entreprises', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/audit-express', priority: 0.6, changeFrequency: 'monthly' },

  // Institutionnel
  { path: '/a-propos', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/newsletter', priority: 0.4, changeFrequency: 'yearly' },

  // Blog : listing
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },

  // Blog : articles
  { path: '/blog/lintelligence-artificielle-en-droit-une-fausse-bonne-idee', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/at-mt-3-decisions-cour-cassation-juin-2025', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/conges-paternite-alsace-moselle-maintien-salaire-jurisprudence', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/loi-no-2025-623-du-9-juillet-2025-visant-a-renforcer-la-securite-des-professionnels-de-sante', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/cee-revalorisation-remuneration-decret-4-decembre-2024', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/caution-depot-de-garantie-difference-locataire-proprietaire', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/conges-jurisprudence', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/blog/apprentissage-evolution-plafond-exoneration-cotisations-salariales', priority: 0.6, changeFrequency: 'monthly' },

  // Pages legales
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cgu', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/confidentialite', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return pages.map((p) => ({
    url: p.path === '/' ? baseUrl : `${baseUrl}${p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}