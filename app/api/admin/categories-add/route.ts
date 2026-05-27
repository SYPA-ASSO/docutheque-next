import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }

    const { nom } = await request.json()
    if (!nom?.trim()) {
      return NextResponse.json({ error: 'Nom requis.' }, { status: 400 })
    }

    // Récupérer le max ordre actuel sans .single() pour éviter les erreurs
    const { data: existing } = await supabaseAdmin
      .from('categories')
      .select('ordre')
      .order('ordre', { ascending: false })
      .limit(1)

    const nouvelOrdre = existing && existing.length > 0 ? (existing[0].ordre || 0) + 1 : 1

    const { error } = await supabaseAdmin
      .from('categories')
      .insert({ nom: nom.trim(), ordre: nouvelOrdre })

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ error: 'Cette catégorie existe déjà.' }, { status: 409 })
      }
      console.error('Supabase error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('categories-add error:', err)
    return NextResponse.json({ error: 'Erreur serveur inattendue.' }, { status: 500 })
  }
}