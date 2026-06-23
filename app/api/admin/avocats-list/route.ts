import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { data: avocats, error: e1 } = await supabaseAdmin
    .from('avocats')
    .select('id, slug, acces_token, civilite, prenom, nom, barreau, ville, region, domaines, tarif_montant, delai_reponse, email, telephone, actif, referencement_actif, frais_acte, date_adhesion, created_at')
    .order('created_at', { ascending: false })
  if (e1) return NextResponse.json({ error: e1.message }, { status: 500 })

  const { data: consultations, error: e2 } = await supabaseAdmin
    .from('consultations')
    .select('id, reference, client_prenom, client_nom, client_email, avocat_id, domaine, canal, creneau_souhaite, statut, source, frais_acte, frais_statut, created_at')
    .order('created_at', { ascending: false })
    .limit(200)
  if (e2) return NextResponse.json({ error: e2.message }, { status: 500 })

  // Total facturable par avocat : demandes abouties (acceptee/cloturee) non encore payees
  const facturable: Record<string, number> = {}
  for (const c of consultations || []) {
    if ((c.statut === 'acceptee' || c.statut === 'cloturee') && c.frais_statut !== 'paye' && c.avocat_id) {
      facturable[c.avocat_id] = (facturable[c.avocat_id] || 0) + Number(c.frais_acte || 0)
    }
  }

  return NextResponse.json({ avocats, consultations, facturable })
}
