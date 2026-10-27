// app/api/admin/demandes-modeles-update/route.ts
// Met a jour une demande de modele : statut et message visible par le client.
// Si "notifier" est vrai et que le statut est « Modele transmis » ou « Sans modele disponible »,
// le client recoit un e-mail. Le fichier lui-meme est depose par « Echanges de fichiers ».

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { envoyerEmailBrevo, emailReponseDemande } from '@/lib/demandes-modeles'
import { statutDemandeValide } from '@/lib/demandes-modeles-statuts'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { id, statut, reponse_client, notifier } = body
    if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })
    if (statut !== undefined && !statutDemandeValide(statut)) {
      return NextResponse.json({ error: 'Statut invalide.' }, { status: 400 })
    }

    const { data: demande } = await supabaseAdmin
      .from('demandes_modeles')
      .select('*, users(prenom, nom, email)')
      .eq('id', id)
      .single()
    if (!demande) return NextResponse.json({ error: 'Demande introuvable.' }, { status: 404 })

    const miseAJour: Record<string, unknown> = { updated_at: new Date().toISOString() }
    if (statut !== undefined) {
      miseAJour.statut = statut
      miseAJour.livree_le = statut === 'livree' ? new Date().toISOString() : null
    }
    if (reponse_client !== undefined) {
      const texte = String(reponse_client || '').trim()
      miseAJour.reponse_client = texte || null
    }

    const { error } = await supabaseAdmin.from('demandes_modeles').update(miseAJour).eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    let emailEnvoye: boolean | null = null
    const statutFinal = (statut !== undefined ? statut : demande.statut) as string
    const user = demande.users as { prenom: string | null; nom: string | null; email: string | null } | null
    if (notifier && (statutFinal === 'livree' || statutFinal === 'sans_suite') && user && user.email) {
      const messageFinal = reponse_client !== undefined ? String(reponse_client || '') : (demande.reponse_client || '')
      const mail = emailReponseDemande({
        prenom: user.prenom || '',
        typeDocument: demande.type_document,
        statut: statutFinal as 'livree' | 'sans_suite',
        message: messageFinal,
        origin: request.headers.get('origin'),
      })
      emailEnvoye = await envoyerEmailBrevo({
        to: { email: user.email, name: `${user.prenom || ''} ${user.nom || ''}`.trim() },
        subject: mail.subject,
        html: mail.html,
        sansCopie: true,
      })
    }

    return NextResponse.json({ success: true, emailEnvoye })
  } catch (error) {
    console.error('[demandes-modeles-update] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
