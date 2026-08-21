// app/api/admin/documents-partages-liste/route.ts
// Liste, pour un client donne (?user_id=...), l'ensemble des fichiers echanges
// (deposes par le client ou par le cabinet), avec liens de telechargement signes.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const BUCKET = 'documents-partages'
const DUREE_LIEN_SECONDES = 3600

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('user_id')
  if (!userId) return NextResponse.json({ error: 'user_id requis.' }, { status: 400 })

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
