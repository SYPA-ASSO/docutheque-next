// app/api/admin/demandes-modeles-list/route.ts
// Liste les demandes de modeles de documents pour le back-office, avec le client.
// Au passage, les demandes « En attente de paiement » dont le modele a ete regle passent en « Modele transmis ».

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { reconcilierDemandesModeles } from '@/lib/demandes-modeles'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }
  await reconcilierDemandesModeles()
  const { data, error } = await supabaseAdmin
    .from('demandes_modeles')
    .select('*, users(prenom, nom, email, telephone)')
    .order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ demandes: data || [] })
}
