import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const CHAMPS_AVOCAT = ['actif', 'referencement_actif', 'frais_acte'] as const
const CHAMPS_CONSULTATION = ['statut', 'frais_statut', 'conflit_verifie'] as const

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const entity = String(body.entity || 'avocat')
  const id = String(body.id || '')
  if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })

  const table = entity === 'consultation' ? 'consultations' : 'avocats'
  const champs = entity === 'consultation' ? CHAMPS_CONSULTATION : CHAMPS_AVOCAT

  const maj: Record<string, unknown> = {}
  for (const c of champs) if (c in body) maj[c] = body[c]
  if ('frais_acte' in maj) {
    const v = parseFloat(String(maj.frais_acte))
    maj.frais_acte = Number.isFinite(v) ? v : 15
  }
  if (Object.keys(maj).length === 0) {
    return NextResponse.json({ error: 'Aucune donnée à mettre à jour.' }, { status: 400 })
  }

  const { error } = await supabaseAdmin.from(table).update(maj).eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
