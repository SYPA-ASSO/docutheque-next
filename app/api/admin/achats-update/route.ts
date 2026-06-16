import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// app/api/admin/achats-update/route.ts
// Met a jour le statut d'un achat de document (en_attente, paye, annule).
// Sert surtout a valider un paiement par virement recu : en_attente -> paye ouvre le telechargement.

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

    const valides = ['en_attente', 'paye', 'annule']
    if (!statut || !valides.includes(statut)) {
      return NextResponse.json({ error: 'Statut invalide.' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from('achats_documents')
      .update({ statut })
      .eq('id', id)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Admin achats-update] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}