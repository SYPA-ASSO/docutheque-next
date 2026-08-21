// app/api/compte/documents-partages/route.ts
// Echange de fichiers securise entre un client connecte et le cabinet (dans les deux sens).
// GET    : liste les fichiers du dossier du client connecte (les siens + ceux deposes par
//          le cabinet a son intention), avec un lien de telechargement signe (1 heure).
// POST   : confirme un depot deja effectue directement vers Supabase Storage (voir
//          init-upload/route.ts) et enregistre ses metadonnees. Le fichier lui-meme n'a
//          jamais transite par cette route : les fonctions Vercel refusent toute requete
//          de plus de 4,5 Mo, une limite d'infrastructure non contournable en code, d'ou
//          le depot direct navigateur -> Supabase.
// DELETE : suppression d'un fichier depose par le client lui-meme uniquement (jamais un
//          fichier envoye par le cabinet, pour en garder la trace).
// Authentification par jeton Supabase (en-tete Authorization), verifie a chaque appel.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const BUCKET = 'documents-partages'
const DUREE_LIEN_SECONDES = 3600

async function getUserIdFromRequest(request: Request): Promise<string | null> {
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) return null
  const { data, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !data || !data.user) return null
  return data.user.id
}

export async function GET(request: Request) {
  const userId = await getUserIdFromRequest(request)
  if (!userId) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { data: fichiers, error } = await supabaseAdmin
    .from('documents_partages')
    .select('id, nom_fichier, chemin_storage, taille, type_mime, depose_par, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!fichiers || fichiers.length === 0) return NextResponse.json({ fichiers: [] })

  const { data: signes, error: signesError } = await supabaseAdmin.storage
    .from(BUCKET)
    .createSignedUrls(fichiers.map((f) => f.chemin_storage), DUREE_LIEN_SECONDES)
  if (signesError) return NextResponse.json({ error: signesError.message }, { status: 500 })

  const urlParChemin = new Map((signes || []).map((s) => [s.path, s.signedUrl]))
  const resultat = fichiers.map((f) => ({
    id: f.id,
    nom: f.nom_fichier,
    taille: f.taille,
    typeMime: f.type_mime,
    deposePar: f.depose_par,
    creeLe: f.created_at,
    url: urlParChemin.get(f.chemin_storage) || null,
  }))

  return NextResponse.json({ fichiers: resultat })
}

export async function POST(request: Request) {
  const userId = await getUserIdFromRequest(request)
  if (!userId) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { chemin, nomFichier, tailleOctets, typeMime } = await request.json().catch(() => ({}))
  if (!chemin || !nomFichier) return NextResponse.json({ error: 'Informations manquantes.' }, { status: 400 })

  // Le chemin doit obligatoirement se trouver dans le dossier de l'utilisateur authentifie :
  // empeche toute confirmation portant sur le dossier d'un autre client.
  if (!chemin.startsWith(`${userId}/`)) {
    return NextResponse.json({ error: 'Chemin de dépôt invalide.' }, { status: 403 })
  }

  // Verifie que le fichier existe reellement a cet emplacement avant d'enregistrer la ligne
  // (le depot direct cote navigateur a bien pu echouer ou etre interrompu).
  const dossier = chemin.split('/')[0]
  const nomObjet = chemin.split('/').slice(1).join('/')
  const { data: contenu } = await supabaseAdmin.storage.from(BUCKET).list(dossier, { search: nomObjet })
  const existe = (contenu || []).some((o) => o.name === nomObjet)
  if (!existe) return NextResponse.json({ error: "Le dépôt du fichier n'a pas abouti." }, { status: 400 })

  const { error: insertError } = await supabaseAdmin.from('documents_partages').insert({
    user_id: userId,
    nom_fichier: nomFichier,
    chemin_storage: chemin,
    taille: tailleOctets || null,
    type_mime: typeMime || null,
    depose_par: 'client',
  })
  if (insertError) return NextResponse.json({ error: insertError.message }, { status: 500 })

  return NextResponse.json({ success: true })
}

export async function DELETE(request: Request) {
  const userId = await getUserIdFromRequest(request)
  if (!userId) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { id } = await request.json().catch(() => ({ id: null }))
  if (!id) return NextResponse.json({ error: 'Identifiant requis.' }, { status: 400 })

  const { data: fichier, error: lectureError } = await supabaseAdmin
    .from('documents_partages')
    .select('id, chemin_storage, user_id, depose_par')
    .eq('id', id)
    .maybeSingle()
  if (lectureError || !fichier) return NextResponse.json({ error: 'Fichier introuvable.' }, { status: 404 })
  if (fichier.user_id !== userId || fichier.depose_par !== 'client') {
    return NextResponse.json({ error: "Vous ne pouvez supprimer que vos propres dépôts." }, { status: 403 })
  }

  await supabaseAdmin.storage.from(BUCKET).remove([fichier.chemin_storage])
  const { error: deleteError } = await supabaseAdmin.from('documents_partages').delete().eq('id', id)
  if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 })

  return NextResponse.json({ success: true })
}

