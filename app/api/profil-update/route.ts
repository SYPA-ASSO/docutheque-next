import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const { userId, rue, code_postal, ville, telephone } = await request.json()

    if (!userId) {
      return NextResponse.json({ error: 'Utilisateur non identifié.' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from('users')
      .update({ rue, code_postal, ville, telephone })
      .eq('id', userId)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Profil update error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}