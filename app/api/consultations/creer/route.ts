import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
  }

  const avocatSlug = String(body.avocat_slug || '')
  const clientEmail = String(body.client_email || '').trim()
  const clientNom = String(body.client_nom || '').trim()
  const description = String(body.description || '').trim()

  if (!avocatSlug || !clientEmail || !clientNom || !description) {
    return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clientEmail)) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
  }

  // Resoudre l'avocat (et recuperer ses frais a l'acte)
  const { data: avocat } = await supabaseAdmin
    .from('avocats')
    .select('id, frais_acte, actif')
    .eq('slug', avocatSlug)
    .single()

  if (!avocat || !avocat.actif) {
    return NextResponse.json({ error: 'Avocat introuvable.' }, { status: 404 })
  }

  // L'abonnement Optimal actif rend la mise en relation incluse, sinon source = 'unite'
  let source = 'unite'
  const { data: client } = await supabaseAdmin
    .from('users')
    .select('abonnement_actif')
    .eq('email', clientEmail)
    .maybeSingle()
  if (client && client.abonnement_actif) source = 'optimal'

  const { data, error } = await supabaseAdmin
    .from('consultations')
    .insert({
      client_email: clientEmail,
      client_prenom: String(body.client_prenom || '').trim() || null,
      client_nom: clientNom,
      client_telephone: String(body.client_telephone || '').trim() || null,
      avocat_id: avocat.id,
      domaine: String(body.domaine || '').trim() || null,
      ville: String(body.ville || '').trim() || null,
      description,
      canal: body.canal === 'visio' ? 'visio' : 'telephone',
      creneau_souhaite: String(body.creneau_souhaite || '').trim() || null,
      statut: 'transmise',
      source,
      frais_acte: avocat.frais_acte ?? 15,
    })
    .select('reference')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, reference: data?.reference })
}
