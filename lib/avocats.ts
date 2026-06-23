// lib/avocats.ts
// Types et constantes partages pour l'annuaire d'avocats partenaires.

export const NB = '\u00a0'

export type Avocat = {
  id: string
  slug: string
  acces_token?: string | null
  civilite?: string | null
  prenom?: string | null
  nom: string
  barreau?: string | null
  structure?: string | null
  ville?: string | null
  code_postal?: string | null
  departement?: string | null
  region?: string | null
  domaines?: string[] | null
  bio?: string | null
  photo_url?: string | null
  tarif_montant?: number | null
  tarif_unite?: string | null
  delai_reponse?: string | null
  disponibilites?: string | null
  telephone?: string | null
  email?: string | null
  site_web?: string | null
  actif?: boolean
  referencement_actif?: boolean
  frais_acte?: number | null
  date_adhesion?: string | null
}

export const REGIONS = [
  'Auvergne-Rhône-Alpes', 'Bourgogne-Franche-Comté', 'Bretagne', 'Centre-Val de Loire',
  'Corse', 'Grand Est', 'Hauts-de-France', 'Île-de-France', 'Normandie', 'Nouvelle-Aquitaine',
  'Occitanie', 'Pays de la Loire', "Provence-Alpes-Côte d'Azur",
]

export const DOMAINES = [
  'Droit du travail', 'Droit des affaires', 'Droit des sociétés', 'Droit fiscal', 'Droit immobilier',
  'Droit de la famille', 'Droit des successions', 'Droit pénal', 'Droit des étrangers', 'Droit commercial',
  'Droit de la consommation', 'Droit public', 'Propriété intellectuelle', 'Droit des contrats',
  'Droit de la sécurité sociale', 'Baux commerciaux', 'Droit du sport',
]

export function nomComplet(a: { civilite?: string | null; prenom?: string | null; nom: string }): string {
  return [a.civilite || 'Maître', a.prenom, a.nom].filter(Boolean).join(' ')
}

export function euro(n?: number | null): string | null {
  if (n == null) return null
  const entier = Number.isInteger(Number(n))
  const s = Number(n).toLocaleString('fr-FR', {
    minimumFractionDigits: entier ? 0 : 2,
    maximumFractionDigits: 2,
  })
  return s + NB + '€'
}

export function slugifyAvocat(prenom: string | null | undefined, nom: string): string {
  return [prenom, nom].filter(Boolean).join('-')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
