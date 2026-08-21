// app/api/admin/documents-partages-delete/route.ts
// Suppression d'un fichier echange, cote ou depose (le cabinet peut supprimer
// aussi bien ses propres depots que ceux d'un client, a des fins de moderation
// ou de purge apres traitement du dossier).

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const BUCKET = 'documents-partages'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { id } = await request.json().catch(() => ({ id: null }))
  if (!id) return NextResponse.json({ error: 'Identifiant requis.' }, { status: 400 })

  const { data: fichier, error: lectureError } = await supabaseAdmin
    .from('documents_partages')
    .select('id, chemin_storage')
    .eq('id', id)
    .maybeSingle()
  if (lectureError || !fichier) return NextResponse.json({ error: 'Fichier introuvable.' }, { status: 404 })

  await supabaseAdmin.storage.from(BUCKET).remove([fichier.chemin_storage])
  const { error: deleteError } = await supabaseAdmin.from('documents_partages').delete().eq('id', id)
  if (deleteError) return NextResponse.json({ error: deleteError.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
