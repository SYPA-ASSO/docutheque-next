// app/api/compte/demandes-modeles/route.ts
// Liste (GET) et enregistre (POST) les demandes de modele de document d'un client connecte
// (jeton Supabase en en-tete Authorization). A l'enregistrement, un accuse de reception part
// vers le client et une alerte vers le cabinet.
// Le client ne voit jamais la liste des modeles disponibles : seul le cabinet la consulte.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { envoyerEmailBrevo, emailAccuseDemande, emailAlerteDemande, reconcilierDemandesModeles } from '@/lib/demandes-modeles'
import { DEMANDE_CONTEXTE_MAX, DEMANDE_TYPE_MAX, DEMANDES_OUVERTES_MAX } from '@/lib/demandes-modeles-statuts'

// Liste des demandes du client connecte (apres mise a jour des demandes dont le modele a ete regle).
export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { data: auth, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !auth || !auth.user) {
    return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
  }

  try {
    await reconcilierDemandesModeles(auth.user.id)
    const { data, error } = await supabaseAdmin
      .from('demandes_modeles')
      .select('*')
      .eq('user_id', auth.user.id)
      .order('created_at', { ascending: false })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ demandes: data || [] })
  } catch (error) {
    console.error('[demandes-modeles] Lecture impossible:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { data: auth, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !auth || !auth.user) {
    return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
  }
  const userId = auth.user.id

  try {
    const body = await request.json().catch(() => ({}))
    const typeDocument = String(body.type_document || '').trim()
    const contexte = String(body.contexte || '').trim()
    const dateSouhaitee = String(body.date_souhaitee || '').trim()

    if (typeDocument.length < 3) {
      return NextResponse.json({ error: 'Indiquez le type de document souhaité.' }, { status: 400 })
    }
    if (typeDocument.length > DEMANDE_TYPE_MAX) {
      return NextResponse.json({ error: `Le type de document est limité à ${DEMANDE_TYPE_MAX} caractères.` }, { status: 400 })
    }
    if (contexte.length > DEMANDE_CONTEXTE_MAX) {
      return NextResponse.json({ error: `La description est limitée à ${DEMANDE_CONTEXTE_MAX} caractères.` }, { status: 400 })
    }
    if (dateSouhaitee && (!/^\d{4}-\d{2}-\d{2}$/.test(dateSouhaitee) || Number.isNaN(new Date(dateSouhaitee + 'T12:00:00').getTime()))) {
      return NextResponse.json({ error: 'La date souhaitée est invalide.' }, { status: 400 })
    }

    const { count, error: countError } = await supabaseAdmin
      .from('demandes_modeles')
      .select('id', { count: 'exact', head: true })
      .eq('user_id', userId)
      .in('statut', ['recue', 'en_preparation'])
    if (countError) return NextResponse.json({ error: countError.message }, { status: 500 })
    if ((count || 0) >= DEMANDES_OUVERTES_MAX) {
      return NextResponse.json({ error: `Vous avez déjà ${DEMANDES_OUVERTES_MAX} demandes en cours. Merci d'attendre la réponse du cabinet avant d'en envoyer une nouvelle.` }, { status: 429 })
    }

    const { data: demande, error: insertError } = await supabaseAdmin
      .from('demandes_modeles')
      .insert({
        user_id: userId,
        type_document: typeDocument,
        contexte: contexte || null,
        date_souhaitee: dateSouhaitee || null,
      })
      .select('*')
      .single()
    if (insertError || !demande) {
      return NextResponse.json({ error: insertError ? insertError.message : 'Enregistrement impossible.' }, { status: 500 })
    }

    const { data: user } = await supabaseAdmin.from('users').select('prenom, nom, email').eq('id', userId).single()
    const origin = request.headers.get('origin')
    if (user && user.email) {
      const accuse = emailAccuseDemande({ prenom: user.prenom || '', typeDocument, origin })
      await envoyerEmailBrevo({ to: { email: user.email, name: `${user.prenom || ''} ${user.nom || ''}`.trim() }, subject: accuse.subject, html: accuse.html, sansCopie: true })

      const { data: emailAdminData } = await supabaseAdmin.from('settings').select('valeur').eq('id', 'email_admin').single()
      const emailAdmin = (emailAdminData && emailAdminData.valeur) || 'contact@cholez-pagotto.fr'
      const alerte = emailAlerteDemande({
        clientNom: `${user.prenom || ''} ${user.nom || ''}`.trim() || 'Client',
        clientEmail: user.email,
        typeDocument,
        contexte,
        dateSouhaitee: dateSouhaitee || null,
        origin,
      })
      await envoyerEmailBrevo({ to: { email: emailAdmin, name: 'François Cholez' }, subject: alerte.subject, html: alerte.html, sansCopie: true })
    }

    return NextResponse.json({ success: true, demande })
  } catch (error) {
    console.error('[demandes-modeles] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
