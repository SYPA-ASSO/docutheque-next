// lib/demandes-modeles-statuts.ts
// Elements des demandes de modeles utilisables AUSSI BIEN cote serveur que dans les pages
// affichees dans le navigateur (espace client, administration).
// Ne pas importer ici de module serveur (lib/courtage.ts, lib/courtage-partenaires.ts...).
// Regles : zero tiret long dans le contenu visible.

export type StatutDemandeModele = 'recue' | 'en_preparation' | 'a_payer' | 'livree' | 'sans_suite'

export const STATUTS_DEMANDE_MODELE: { value: StatutDemandeModele; label: string; color: string; bg: string }[] = [
  { value: 'recue', label: 'Demande reçue', color: '#d97706', bg: '#fef3c7' },
  { value: 'en_preparation', label: 'En préparation', color: '#1a4fba', bg: '#eff6ff' },
  { value: 'a_payer', label: 'En attente de paiement', color: '#b45309', bg: '#fff7ed' },
  { value: 'livree', label: 'Modèle transmis', color: '#15803d', bg: '#f0fdf4' },
  { value: 'sans_suite', label: 'Sans modèle disponible', color: '#6b7280', bg: '#f3f4f6' },
]

// Le statut « En attente de paiement » n'est pas choisi à la main : il résulte de l'attribution
// d'un modèle payant de la bibliothèque (voir app/api/admin/demandes-modeles-update).
export const STATUTS_DEMANDE_MODELE_MANUELS = STATUTS_DEMANDE_MODELE.filter(s => s.value !== 'a_payer')

export const DEMANDE_TYPE_MAX = 150
export const DEMANDE_CONTEXTE_MAX = 2000
export const DEMANDES_OUVERTES_MAX = 5

export function statutDemandeModele(valeur: string) {
  return STATUTS_DEMANDE_MODELE.find(s => s.value === valeur) || STATUTS_DEMANDE_MODELE[0]
}

export function statutDemandeValide(valeur: unknown): valeur is StatutDemandeModele {
  return typeof valeur === 'string' && STATUTS_DEMANDE_MODELE.some(s => s.value === valeur)
}

export function formatDateFr(valeur: string | null | undefined): string {
  if (!valeur) return ''
  try {
    const d = /^\d{4}-\d{2}-\d{2}$/.test(valeur) ? new Date(valeur + 'T12:00:00') : new Date(valeur)
    return d.toLocaleDateString('fr-FR', { timeZone: 'Europe/Paris', day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return valeur
  }
}
