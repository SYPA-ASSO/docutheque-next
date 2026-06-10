import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// app/api/admin/dossiers-rgpd-list/route.ts
// Liste les commandes de diagnostic RGPD pour le back-office (jointure sur users).

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }
  const { data, error } = await supabaseAdmin
    .from('dossiers_rgpd')
    .select('*, users(prenom, nom, email, telephone)')
    .order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ dossiers: data })
}