// app/api/compte/documents-obtenus/route.ts
// Renvoie au client connecte (jeton Supabase) la liste des documents qu'il a DEJA obtenus :
// ceux qu'il a telecharges et ceux qu'il a achetes (paiement confirme), tant qu'il y a encore
// droit. La bibliotheque complete n'est jamais renvoyee : le client ne voit pas les autres modeles.
// Les droits d'acces sont ceux de la route de telechargement (gratuit, Optimal actif, achat paye).

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { data: auth, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !auth || !auth.user) {
    return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
  }
  const userId = auth.user.id

  try {
    const [{ data: profil }, { data: telechargements }, { data: achats }] = await Promise.all([
      supabaseAdmin.from('users').select('abonnement_actif').eq('id', userId).single(),
      supabaseAdmin.from('downloads').select('document_id').eq('user_id', userId),
      supabaseAdmin.from('achats_documents').select('document_id').eq('user_id', userId).eq('statut', 'paye'),
    ])

    const achetes = new Set<string>((achats || []).map((a: { document_id: string | null }) => a.document_id).filter(Boolean) as string[])
    const ids = Array.from(new Set<string>([
      ...((telechargements || []).map((t: { document_id: string | null }) => t.document_id).filter(Boolean) as string[]),
      ...Array.from(achetes),
    ]))
    if (ids.length === 0) return NextResponse.json({ documents: [] })

    const { data: documents, error } = await supabaseAdmin
      .from('documents')
      .select('id, nom, type, acces_gratuit, acces_optimal, acces_payant')
      .in('id', ids)
      .eq('actif', true)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const abonne = !!(profil && profil.abonnement_actif)
    const liste = (documents || [])
      .filter((d: { id: string; acces_gratuit: boolean; acces_optimal: boolean; acces_payant: boolean }) =>
        d.acces_gratuit || (d.acces_optimal && abonne) || (d.acces_payant && achetes.has(d.id)))
      .map((d: { id: string; nom: string; type: string | null; acces_gratuit: boolean; acces_optimal: boolean; acces_payant: boolean }) => ({
        id: d.id,
        nom: d.nom,
        type: d.type,
        origine: achetes.has(d.id) ? 'achat' : d.acces_gratuit ? 'gratuit' : 'abonnement',
      }))
      .sort((a: { nom: string }, b: { nom: string }) => a.nom.localeCompare(b.nom, 'fr'))

    return NextResponse.json({ documents: liste })
  } catch (error) {
    console.error('[documents-obtenus] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
