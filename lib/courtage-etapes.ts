// lib/courtage-etapes.ts
// Elements du parcours courtage utilisables AUSSI BIEN cote serveur que dans les pages
// affichees dans le navigateur (administration, espace client).
// IMPORTANT : ce fichier ne doit jamais importer lib/courtage-partenaires.ts. Tout ce que
// contiennent les pages affichees dans le navigateur est telechargeable par n'importe qui :
// la liste des entreprises d'assurance ne doit transiter que par une route API authentifiee.
// Regles : zero tiret long dans le contenu visible.

export type EtapeCourtage =
  | 'demande_recue'
  | 'besoins_recueillis'
  | 'consultation'
  | 'proposition'
  | 'conclu'
  | 'sans_suite'

export const ETAPES_COURTAGE: { value: EtapeCourtage; label: string; description: string; suite: string }[] = [
  {
    value: 'demande_recue',
    label: 'Demande reçue',
    description: "Votre demande est enregistrée. Le cabinet analyse les éléments que vous lui avez transmis.",
    suite: 'Le cabinet vous contacte pour préciser vos exigences et vos besoins, puis les consigne par écrit.',
  },
  {
    value: 'besoins_recueillis',
    label: 'Besoins recueillis',
    description: 'Vos exigences et vos besoins sont consignés par écrit dans votre espace.',
    suite: "Le cabinet consulte les entreprises d'assurance et prépare sa recommandation.",
  },
  {
    value: 'consultation',
    label: "Consultation des assureurs",
    description: "Le cabinet consulte les entreprises d'assurance et les grossistes avec lesquels il travaille.",
    suite: 'Vous recevez une proposition accompagnée des raisons du conseil.',
  },
  {
    value: 'proposition',
    label: 'Proposition transmise',
    description: 'Une proposition vous a été transmise, avec les raisons du conseil.',
    suite: "Si elle vous convient, indiquez-le au cabinet. La souscription n'intervient qu'après l'envoi de la fiche d'information précontractuelle.",
  },
  {
    value: 'conclu',
    label: 'Souscription réalisée',
    description: 'Votre contrat est souscrit. Les documents de votre dossier sont à votre disposition.',
    suite: 'Le cabinet reste votre interlocuteur pour toute question relative à votre contrat.',
  },
  {
    value: 'sans_suite',
    label: 'Dossier clos sans suite',
    description: 'Ce dossier est clos sans souscription.',
    suite: '',
  },
]

// Etapes du parcours normal (la barre de progression). "sans_suite" est une sortie a part.
export const PARCOURS_COURTAGE: EtapeCourtage[] = ['demande_recue', 'besoins_recueillis', 'consultation', 'proposition', 'conclu']

export const PROFILS_COURTAGE: { value: 'particulier' | 'professionnel' | 'association'; label: string }[] = [
  { value: 'particulier', label: 'Particulier' },
  { value: 'professionnel', label: 'Professionnel' },
  { value: 'association', label: 'Association' },
]

export function labelEtape(valeur: string): string {
  const e = ETAPES_COURTAGE.find(x => x.value === valeur)
  return e ? e.label : valeur
}

export function descriptionEtape(valeur: string): string {
  const e = ETAPES_COURTAGE.find(x => x.value === valeur)
  return e ? e.description : ''
}

export function suiteEtape(valeur: string): string {
  const e = ETAPES_COURTAGE.find(x => x.value === valeur)
  return e ? e.suite : ''
}

export function etapeValide(valeur: unknown): valeur is EtapeCourtage {
  return typeof valeur === 'string' && ETAPES_COURTAGE.some(x => x.value === valeur)
}

// Transforme un texte libre (un nom par ligne ou separes par des virgules) en liste propre.
export function texteEnListe(texte: string | null | undefined): string[] {
  if (!texte) return []
  return String(texte)
    .split(/[\n;,]+/)
    .map(s => s.trim())
    .filter(Boolean)
}

export function formatDateHeureParis(iso: string | null | undefined): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}
