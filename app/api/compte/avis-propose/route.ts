import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const runtime = 'nodejs'

// app/api/compte/avis-propose/route.ts
// Marque l'utilisateur connecte comme ayant ete invite a laisser un avis Google (invitation in-app unique).
// La meme colonne avis_google_propose empeche ensuite tout email ou rappel : un client n'est sollicite qu'une fois.

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization') || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
    if (!token) {
      return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
    }
    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token)
    if (userErr || !userData?.user) {
      return NextResponse.json({ error: 'Session invalide.' }, { status: 401 })
    }
    await supabaseAdmin
      .from('users')
      .update({ avis_google_propose: true })
      .eq('id', userData.user.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Avis propose] Erreur:', error)
    return NextResponse.json({ error: 'Une erreur est survenue.' }, { status: 500 })
  }
}
