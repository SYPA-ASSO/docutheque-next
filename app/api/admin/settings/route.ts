import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }
  const { data, error } = await supabaseAdmin.from('settings').select('*')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  // Transformer en objet clé/valeur
  const settings: Record<string, string> = {}
  data?.forEach(s => { settings[s.id] = s.valeur })
  return NextResponse.json({ settings })
}

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }
    const body = await request.json()
    const { id, valeur, confirmation_password } = body

    // Double vérification mot de passe pour changement email admin
    if (id === 'email_admin' && confirmation_password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Confirmation du mot de passe incorrecte.' }, { status: 403 })
    }

    const { error } = await supabaseAdmin
      .from('settings')
      .upsert({ id, valeur, updated_at: new Date().toISOString() })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}