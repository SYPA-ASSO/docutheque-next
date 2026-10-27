// app/api/compte/courtage-partenaires/route.ts
// Communique au client connecte la liste des entreprises d'assurance et des grossistes avec
// lesquels le cabinet travaille (article L.521-2, II, 1°, b du Code des assurances).
// La liste n'est jamais incluse dans une page publique ni dans le code envoye au navigateur :
// elle n'est renvoyee qu'a un client authentifie qui a au moins un dossier de courtage.
// Authentification par jeton Supabase (en-tete Authorization), verifie a chaque appel.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { listePartenaires } from '@/lib/courtage'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { data, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !data || !data.user) {
    return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
  }

  const { data: dossiers, error: dossiersError } = await supabaseAdmin
    .from('dossiers_courtage')
    .select('id')
    .eq('user_id', data.user.id)
    .limit(1)
  if (dossiersError) return NextResponse.json({ error: dossiersError.message }, { status: 500 })
  if (!dossiers || dossiers.length === 0) {
    return NextResponse.json({ error: 'Aucun dossier de courtage.' }, { status: 403 })
  }

  return NextResponse.json({ partenaires: listePartenaires() })
}
