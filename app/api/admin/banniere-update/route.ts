import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const body = await request.json()
  const { active, variante, titre, texte, libelle_bouton, lien } = body

  const { error } = await supabaseAdmin
    .from('banniere_catalogue')
    .update({
      active: !!active,
      variante: variante || 'promo',
      titre: titre || null,
      texte: texte || null,
      libelle_bouton: libelle_bouton || null,
      lien: lien || null,
      updated_at: new Date().toISOString(),
    })
    .eq('id', 1)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
