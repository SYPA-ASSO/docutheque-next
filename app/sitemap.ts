import type { MetadataRoute } from 'next'
import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { slugify } from '@/lib/slug'

const baseUrl = 'https://cholez-pagotto.fr'

// Le sitemap est genere a la construction du site (a chaque deploiement).
// Les articles de blog (qui sont ajoutes via le code, donc via un deploiement)
// et les ressources du catalogue sont ainsi captures automatiquement a chaque mise en ligne.

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
  { path: '/paie-externalisee', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/juriste-formaliste-ou-avocat', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/vie-des-entreprises', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/audit-express', priority: 0.6, changeFrequency: 'monthly' },

  // Institutionnel
  { path: '/a-propos', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/newsletter', priority: 0.4, changeFrequency: 'yearly' },

  // Blog : listing
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' },

  // Pages legales
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cgu', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/confidentialite', priority: 0.3, changeFrequency: 'yearly' },
]

// Articles de blog : decouverte automatique des dossiers de app/blog.
// Chaque nouvel article publie (un dossier contenant page.tsx) est inclus
// au prochain deploiement, sans intervention manuelle dans ce fichier.
function getArticlesBlog(): MetadataRoute.Sitemap {
  try {
    const blogDir = join(process.cwd(), 'app', 'blog')
    const lastModified = new Date()
    return readdirSync(blogDir, { withFileTypes: true })
      .filter(
        (e) =>
          e.isDirectory() &&
          !e.name.startsWith('[') &&
          !e.name.startsWith('.') &&
          !e.name.startsWith('_'),
      )
      .filter((e) => existsSync(join(blogDir, e.name, 'page.tsx')))
      .map((e) => ({
        url: `${baseUrl}/blog/${e.name}`,
        lastModified,
        changeFrequency: 'monthly' as Freq,
        priority: 0.6,
      }))
  } catch {
    return []
  }
}

// Pages dediees des ressources du catalogue (documents, packs, guides, livres),
// recuperees depuis Supabase au moment de la construction du site.
async function getRessources(): Promise<MetadataRoute.Sitemap> {
  try {
    const { data } = await supabaseAdmin
      .from('documents')
      .select('slug')
      .eq('actif', true)
      .eq('masque_catalogue', false)
      .not('slug', 'is', null)
    if (!data) return []
    const now = new Date()
    return data
      .filter((d) => d.slug && String(d.slug).trim() !== '')
      .map((d) => ({
        url: `${baseUrl}/catalogue/${d.slug}`,
        lastModified: now,
        changeFrequency: 'weekly' as Freq,
        priority: 0.6,
      }))
  } catch {
    return []
  }
}

async function getCategories(): Promise<MetadataRoute.Sitemap> {
  try {
    const { data } = await supabaseAdmin.from('categories').select('nom')
    if (!data) return []
    const now = new Date()
    const vus = new Set<string>()
    const urls: MetadataRoute.Sitemap = []
    for (const c of data) {
      const nom = c.nom ? String(c.nom).trim() : ''
      if (!nom) continue
      const s = slugify(nom)
      if (!s || vus.has(s)) continue
      vus.add(s)
      urls.push({ url: `${baseUrl}/catalogue/categorie/${s}`, lastModified: now, changeFrequency: 'weekly' as Freq, priority: 0.6 })
    }
    return urls
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const statiques: MetadataRoute.Sitemap = pages.map((p) => ({
    url: p.path === '/' ? baseUrl : `${baseUrl}${p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
  const articles = getArticlesBlog()
  const ressources = await getRessources()
  const categories = await getCategories()
  return [...statiques, ...articles, ...ressources, ...categories]
}
