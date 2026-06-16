import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// app/api/admin/achats-list/route.ts
// Liste les achats de documents a l'unite pour le back-office.
// Enrichit chaque ligne avec l'acheteur et le nom du document, sans dependre de cles etrangeres declarees.

const UUID_VIDE = '00000000-0000-0000-0000-000000000000'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { data: achats, error } = await supabaseAdmin
    .from('achats_documents')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const lignes = achats || []
  const userIds = Array.from(new Set(lignes.map(a => a.user_id).filter(Boolean)))
  const docIds = Array.from(new Set(lignes.map(a => a.document_id).filter(Boolean)))

  const [{ data: users }, { data: docs }] = await Promise.all([
    supabaseAdmin.from('users').select('id, prenom, nom, email').in('id', userIds.length ? userIds : [UUID_VIDE]),
    supabaseAdmin.from('documents').select('id, nom').in('id', docIds.length ? docIds : [UUID_VIDE]),
  ])

  const userMap = new Map((users || []).map(u => [u.id, u]))
  const docMap = new Map((docs || []).map(d => [d.id, d.nom]))

  const achatsEnrichis = lignes.map(a => ({
    ...a,
    user: userMap.get(a.user_id) || null,
    document_nom: docMap.get(a.document_id) || null,
  }))

  return NextResponse.json({ achats: achatsEnrichis })
}