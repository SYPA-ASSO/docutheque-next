import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Champs que l'avocat est autorise a modifier lui-meme.
// La validation (actif) et les frais a l'acte restent reserves a l'admin.
const CHAMPS_EDITABLES = [
  'civilite', 'prenom', 'nom', 'barreau', 'structure', 'ville', 'code_postal',
  'departement', 'region', 'domaines', 'bio', 'photo_url', 'tarif_montant',
  'tarif_unite', 'delai_reponse', 'disponibilites', 'telephone', 'email', 'site_web',
] as const

function tokenDepuis(request: Request, body?: Record<string, unknown>): string {
  const url = new URL(request.url)
  return String(url.searchParams.get('token') || body?.token || '')
}

export async function GET(request: Request) {
  const token = tokenDepuis(request)
  if (!token) return NextResponse.json({ error: 'Lien invalide.' }, { status: 401 })

  const { data, error } = await supabaseAdmin
    .from('avocats')
    .select('id, slug, civilite, prenom, nom, barreau, structure, ville, code_postal, departement, region, domaines, bio, photo_url, tarif_montant, tarif_unite, delai_reponse, disponibilites, telephone, email, site_web, actif, referencement_actif, frais_acte')
    .eq('acces_token', token)
    .single()

  if (error || !data) return NextResponse.json({ error: 'Profil introuvable.' }, { status: 404 })
  return NextResponse.json({ avocat: data })
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const token = tokenDepuis(request, body)
  if (!token) return NextResponse.json({ error: 'Lien invalide.' }, { status: 401 })

  const { data: avocat } = await supabaseAdmin.from('avocats').select('id').eq('acces_token', token).single()
  if (!avocat) return NextResponse.json({ error: 'Profil introuvable.' }, { status: 404 })

  const maj: Record<string, unknown> = {}
  for (const champ of CHAMPS_EDITABLES) {
    if (champ in body) maj[champ] = body[champ]
  }
  if (Array.isArray(maj.domaines)) {
    maj.domaines = (maj.domaines as unknown[]).map(String).filter(Boolean)
  }
  if ('tarif_montant' in maj) {
    const v = parseFloat(String(maj.tarif_montant))
    maj.tarif_montant = Number.isFinite(v) ? v : null
  }
  if (Object.keys(maj).length === 0) {
    return NextResponse.json({ error: 'Aucune donnée à mettre à jour.' }, { status: 400 })
  }

  const { error } = await supabaseAdmin.from('avocats').update(maj).eq('id', avocat.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
