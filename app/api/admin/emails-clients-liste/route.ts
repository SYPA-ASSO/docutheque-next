// app/api/admin/emails-clients-liste/route.ts
// Historique des emails libres envoyes a un client donne (?user_id=...), depuis le
// compositeur de la page /admin/echanges-fichiers.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('user_id')
  if (!userId) return NextResponse.json({ error: 'user_id requis.' }, { status: 400 })

  const { data, error } = await supabaseAdmin
    .from('emails_clients')
    .select('id, sujet, corps, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ emails: data || [] })
}
