import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }
  const { data, error } = await supabaseAdmin
    .from('downloads')
    .select('document_nom, document_id')
    .not('document_nom', 'is', null)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Agréger par document
  const compteurs: Record<string, { nom: string; count: number }> = {}
  data?.forEach(d => {
    const key = d.document_id || d.document_nom
    if (!compteurs[key]) compteurs[key] = { nom: d.document_nom, count: 0 }
    compteurs[key].count++
  })

  const stats = Object.values(compteurs)
    .sort((a, b) => b.count - a.count)
    .slice(0, 20)

  return NextResponse.json({ stats })
}