// lib/diagnostic-forfaits.ts
// Source unique de verite pour les forfaits de diagnostic RGPD commandables en ligne.
// Importe par le composant de commande (client) et par les routes API (serveur).
// Regles : NBSP avant euro (\u00a0), zero tiret long.

export type ForfaitId = 'essentiel' | 'standard'

export const DIAGNOSTIC_FORFAITS = {
  essentiel: {
    id: 'essentiel' as const,
    label: 'Diagnostic RGPD Essentiel',
    montantCents: 35000,
    prix: '350\u00a0€',
    prixEmail: '350,00\u00a0€',
    delai: '15 jours',
    retour: '/rgpd-conformite/diagnostic-essentiel',
  },
  standard: {
    id: 'standard' as const,
    label: 'Diagnostic RGPD Standard',
    montantCents: 90000,
    prix: '900\u00a0€',
    prixEmail: '900,00\u00a0€',
    delai: '30 jours',
    retour: '/rgpd-conformite/diagnostic-standard',
  },
}

// Resout un identifiant de forfait (corps de requete ou metadata Stripe) vers sa config.
// Valeur par defaut : essentiel (securite ascendante si l'identifiant est absent ou inconnu).
export function getForfait(id: string | null | undefined) {
  if (id === 'standard') return DIAGNOSTIC_FORFAITS.standard
  return DIAGNOSTIC_FORFAITS.essentiel
}