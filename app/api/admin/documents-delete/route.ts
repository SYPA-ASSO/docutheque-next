import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { del } from '@vercel/blob'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const body = await request.json()
  const { id } = body
  if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })

  // On recupere l'URL du fichier avant suppression pour nettoyer le Blob.
  const { data: doc } = await supabaseAdmin
    .from('documents')
    .select('blob_url')
    .eq('id', id)
    .single()

  // Suppression de la ligne en base (action principale).
  const { error } = await supabaseAdmin.from('documents').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Suppression du fichier Blob associe (best effort : n'echoue pas la suppression).
  if (doc?.blob_url) {
    try { await del(doc.blob_url) } catch (e) { console.error('Blob delete error:', e) }
  }

  return NextResponse.json({ success: true })
}
