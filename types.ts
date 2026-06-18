// lib/types.ts — Types partagés du projet

export type RessourceType = 'document' | 'pack' | 'guide' | 'livre'

export type DocItem = {
  id: string
  nom: string
  description: string
  blob_url: string | null
  categories: string[]
  profils_autorises: string[]
  acces_gratuit: boolean
  acces_optimal: boolean
  acces_payant: boolean
  prix_unitaire: number | null
  actif: boolean
  ordre: number
  // Page dédiée et maillage (catalogue/[slug])
  type?: RessourceType
  slug?: string | null
  sous_titre?: string | null
  contenu?: string | null
  image_url?: string | null
  modeles_lies?: string[]
  articles_lies?: string[]
  services_lies?: string[]
  inclus_dans?: string[]
  contient?: string[]
}

export type Categorie = {
  id: string
  nom: string
  ordre: number
  mots_cles?: string[]
}
