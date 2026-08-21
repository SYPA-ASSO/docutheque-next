// lib/documents-partages.ts
// Regles communes de validation pour l'echange de fichiers securise entre l'espace
// client et le cabinet (PDF, images, DOCX). Utilisee par les routes d'upload cote
// client (app/api/compte/documents-partages) et cote admin (app/api/admin/documents-partages-upload).

export const TAILLE_MAX_OCTETS = 20 * 1024 * 1024 // 20 Mo

export const TYPES_AUTORISES: Record<string, string> = {
  'application/pdf': 'pdf',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/heic': 'heic',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
}

export type ValidationFichier =
  | { ok: true; extension: string }
  | { ok: false; erreur: string }

// Valide un fichier deja recu cote serveur (objet File complet).
export function validerFichier(file: File): ValidationFichier {
  return validerDeclaration(file.type, file.size)
}

// Valide une simple declaration (type MIME + taille), avant que le fichier ne soit
// envoye : utilise pour preparer une URL de depot signee, avant que l'octet ne transite
// nulle part. La verification definitive reste de toute facon appliquee par Supabase
// lui-meme au niveau du bucket (file_size_limit / allowed_mime_types).
export function validerDeclaration(typeMime: string, tailleOctets: number): ValidationFichier {
  if (tailleOctets > TAILLE_MAX_OCTETS) {
    return { ok: false, erreur: 'Le fichier dépasse la taille maximale autorisée (20 Mo).' }
  }
  const extension = TYPES_AUTORISES[typeMime]
  if (!extension) {
    return { ok: false, erreur: 'Format non autorisé. Formats acceptés : PDF, image (JPG, PNG, WEBP, HEIC) ou DOCX.' }
  }
  return { ok: true, extension }
}

// Nettoie le nom d'origine pour construire un chemin de stockage sur : lettres, chiffres,
// points et tirets uniquement, sans accents.
export function slugifyNomFichier(nom: string): string {
  const sansExtension = nom.replace(/\.[^.]+$/, '')
  const propre = sansExtension
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 60)
  return propre || 'fichier'
}
