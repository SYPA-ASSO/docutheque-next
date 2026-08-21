// app/api/admin/clients-avis-google/route.ts
// Bascule manuelle, depuis l'admin, du statut "avis Google laisse" d'un client.
// Reutilise la colonne existante users.avis_google_propose : desormais, seul le cabinet
// la fait passer a vrai (en ayant constate l'avis directement sur la fiche Google), plus
// jamais le client lui-meme. C'est ce qui fait disparaitre la banniere d'invitation dans
// son espace client. Peut aussi etre repassee a faux, en cas d'erreur de saisie.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { userId, avisLaisse } = await request.json().catch(() => ({}))
  if (!userId || typeof avisLaisse !== 'boolean') {
    return NextResponse.json({ error: 'Informations manquantes.' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('users')
    .update({ avis_google_propose: avisLaisse })
    .eq('id', userId)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
