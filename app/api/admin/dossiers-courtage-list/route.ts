// app/api/admin/dossiers-courtage-list/route.ts
// Liste les dossiers de courtage pour le back-office, avec le client et le journal complet.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { listePartenaires } from '@/lib/courtage'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { data: dossiers, error } = await supabaseAdmin
    .from('dossiers_courtage')
    .select('*, users(prenom, nom, email, telephone, nom_structure, rna)')
    .order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const ids = (dossiers || []).map((d: { id: string }) => d.id)
  let evenements: { dossier_id: string }[] = []
  if (ids.length > 0) {
    const { data: evts, error: evtError } = await supabaseAdmin
      .from('dossiers_courtage_evenements')
      .select('*')
      .in('dossier_id', ids)
      .order('created_at', { ascending: false })
    if (evtError) return NextResponse.json({ error: evtError.message }, { status: 500 })
    evenements = evts || []
  }

  const resultat = (dossiers || []).map((d: { id: string }) => ({
    ...d,
    evenements: evenements.filter(e => e.dossier_id === d.id),
  }))
  return NextResponse.json({ dossiers: resultat, partenairesRenseignes: listePartenaires().length > 0 })
}
