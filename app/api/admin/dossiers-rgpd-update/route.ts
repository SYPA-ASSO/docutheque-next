import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// app/api/admin/dossiers-rgpd-update/route.ts
// Met a jour le statut d'une commande de diagnostic RGPD (en_attente, en_cours, livre).

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }
  try {
    const body = await request.json()
    const { id, statut } = body

    if (!id) {
      return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })
    }

    const valides = ['en_attente', 'en_cours', 'livre']
    if (!statut || !valides.includes(statut)) {
      return NextResponse.json({ error: 'Statut invalide.' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from('dossiers_rgpd')
      .update({ statut })
      .eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Admin dossiers-rgpd-update] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}