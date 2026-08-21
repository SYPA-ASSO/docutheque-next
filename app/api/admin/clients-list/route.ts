import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from('users')
    .select('id, prenom, nom, email, type, telephone, ville, abonnement_actif, abonnement_type, abonnement_periode, date_expiration, created_at, siret, nom_structure, avis_google_propose')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ clients: data })
}