// lib/types.ts — Types partagés du projet

export type DocItem = {
  id: string
  nom: string
  description: string
  blob_url: string
  categories: string[]
  profils_autorises: string[]
  acces_gratuit: boolean
  acces_optimal: boolean
  acces_payant: boolean
  prix_unitaire: number | null
  actif: boolean
  ordre: number
}

export type Categorie = {
  id: string
  nom: string
  ordre: number
  mots_cles?: string[]
}