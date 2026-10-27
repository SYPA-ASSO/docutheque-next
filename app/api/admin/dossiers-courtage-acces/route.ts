// app/api/admin/dossiers-courtage-acces/route.ts
// Renvoie au client l'e-mail d'acces a son espace client (nouveau lien de definition de mot
// de passe), par exemple si le premier lien a expire ou n'est pas arrive.
// Regles : zero tiret long dans le contenu visible.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { emailAcces, envoyerEmailBrevo, siteUrl } from '@/lib/courtage'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const { id } = await request.json().catch(() => ({ id: null }))
    if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })

    const { data: dossier } = await supabaseAdmin
      .from('dossiers_courtage')
      .select('*, users(prenom, nom, email)')
      .eq('id', id)
      .maybeSingle()
    if (!dossier) return NextResponse.json({ error: 'Dossier introuvable.' }, { status: 404 })

    const client = Array.isArray(dossier.users) ? dossier.users[0] : dossier.users
    if (!client || !client.email) return NextResponse.json({ error: 'Client introuvable.' }, { status: 404 })

    const origin = siteUrl(request.headers.get('origin'))
    let accessLink: string | null = null
    try {
      const { data: linkData } = await supabaseAdmin.auth.admin.generateLink({
        type: 'recovery',
        email: client.email,
        options: { redirectTo: `${origin}/nouveau-mot-de-passe` },
      })
      accessLink = (linkData && linkData.properties && linkData.properties.action_link) || null
    } catch (e) {
      console.error('[dossiers-courtage-acces] generateLink a echoue:', e)
    }
    if (!accessLink) {
      return NextResponse.json({ error: 'Le lien de définition du mot de passe n’a pas pu être généré.' }, { status: 500 })
    }

    const mail = emailAcces({
      prenom: client.prenom || 'Madame, Monsieur',
      objet: dossier.objet,
      reference: dossier.reference,
      accessLink,
      origin,
    })
    const envoye = await envoyerEmailBrevo({
      to: { email: client.email, name: `${client.prenom} ${client.nom}`.trim() },
      subject: mail.subject,
      html: mail.html,
    })
    if (!envoye) return NextResponse.json({ error: "L'envoi de l'e-mail a échoué." }, { status: 502 })

    await supabaseAdmin.from('dossiers_courtage_evenements').insert({
      dossier_id: id,
      user_id: dossier.user_id,
      type: 'acces',
      libelle: "E-mail d'accès à l'espace client renvoyé",
      visible_client: false,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[dossiers-courtage-acces] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
