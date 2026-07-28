// app/api/mentorat-qualite/documents/route.ts
// Boite a outils de l'espace mentorat qualité : liste les fichiers du bucket prive
// mentorat-qualite et retourne des liens de telechargement signes (duree limitee).
// Acces reserve aux comptes porteurs du drapeau acces_mentorat_qualite, verifie
// cote serveur a partir du jeton d'authentification Supabase (en-tete Authorization).
// Le bucket est organise en dossiers : chaque dossier de premier niveau devient
// une rubrique, les fichiers a la racine sont regroupes sous une rubrique generale.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const BUCKET = 'mentorat-qualite'
const DUREE_LIEN_SECONDES = 3600

type FichierMentorat = {
  nom: string
  chemin: string
  url: string
  taille: number | null
  maj: string | null
}

type RubriqueMentorat = {
  nom: string
  fichiers: FichierMentorat[]
}

// Nettoie le nom d'un dossier pour l'affichage : retire un prefixe numerique
// de tri (01-, 02_, 3. ...) et remplace tirets et underscores par des espaces.
function nomRubrique(dossier: string): string {
  const sansPrefixe = dossier.replace(/^\d+[\s._-]*/, '')
  const espace = (sansPrefixe || dossier).replace(/[-_]+/g, ' ').trim()
  return espace.charAt(0).toUpperCase() + espace.slice(1)
}

export async function GET(request: Request) {
  // 1. Authentification par jeton
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) {
    return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
  }
  const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token)
  if (userError || !userData || !userData.user) {
    return NextResponse.json({ error: 'Session invalide ou expirée.' }, { status: 401 })
  }

  // 2. Verification du drapeau d'acces
  const { data: profil } = await supabaseAdmin
    .from('users')
    .select('acces_mentorat_qualite')
    .eq('id', userData.user.id)
    .maybeSingle()
  if (!profil || !profil.acces_mentorat_qualite) {
    return NextResponse.json({ error: 'Accès réservé.' }, { status: 403 })
  }

  try {
    // 3. Liste du premier niveau du bucket : dossiers (rubriques) et fichiers a la racine
    const { data: racine, error: racineError } = await supabaseAdmin.storage
      .from(BUCKET)
      .list('', { limit: 200, sortBy: { column: 'name', order: 'asc' } })
    if (racineError) throw racineError

    const rubriques: RubriqueMentorat[] = []
    const cheminsAsigner: { rubrique: RubriqueMentorat; chemin: string; nom: string; taille: number | null; maj: string | null }[] = []

    const fichiersRacine = (racine || []).filter(e => e.id !== null && !e.name.startsWith('.'))
    const dossiers = (racine || []).filter(e => e.id === null && !e.name.startsWith('.'))

    if (fichiersRacine.length > 0) {
      const rubrique: RubriqueMentorat = { nom: 'Documents généraux', fichiers: [] }
      rubriques.push(rubrique)
      for (const f of fichiersRacine) {
        cheminsAsigner.push({
          rubrique,
          chemin: f.name,
          nom: f.name,
          taille: (f.metadata && (f.metadata as { size?: number }).size) ?? null,
          maj: f.updated_at || null,
        })
      }
    }

    for (const d of dossiers) {
      const { data: contenu, error: contenuError } = await supabaseAdmin.storage
        .from(BUCKET)
        .list(d.name, { limit: 200, sortBy: { column: 'name', order: 'asc' } })
      if (contenuError) continue
      const fichiers = (contenu || []).filter(e => e.id !== null && !e.name.startsWith('.'))
      if (fichiers.length === 0) continue
      const rubrique: RubriqueMentorat = { nom: nomRubrique(d.name), fichiers: [] }
      rubriques.push(rubrique)
      for (const f of fichiers) {
        cheminsAsigner.push({
          rubrique,
          chemin: `${d.name}/${f.name}`,
          nom: f.name,
          taille: (f.metadata && (f.metadata as { size?: number }).size) ?? null,
          maj: f.updated_at || null,
        })
      }
    }

    // 4. Liens signes en un seul appel
    if (cheminsAsigner.length > 0) {
      const { data: signes, error: signesError } = await supabaseAdmin.storage
        .from(BUCKET)
        .createSignedUrls(cheminsAsigner.map(c => c.chemin), DUREE_LIEN_SECONDES)
      if (signesError) throw signesError
      const urlParChemin = new Map((signes || []).map(s => [s.path, s.signedUrl]))
      for (const c of cheminsAsigner) {
        const url = urlParChemin.get(c.chemin)
        if (!url) continue
        c.rubrique.fichiers.push({ nom: c.nom, chemin: c.chemin, url, taille: c.taille, maj: c.maj })
      }
    }

    return NextResponse.json({ rubriques: rubriques.filter(r => r.fichiers.length > 0) })
  } catch (e) {
    console.error('[mentorat-qualite/documents] erreur:', e)
    return NextResponse.json({ error: 'Erreur lors du chargement des documents.' }, { status: 500 })
  }
}
