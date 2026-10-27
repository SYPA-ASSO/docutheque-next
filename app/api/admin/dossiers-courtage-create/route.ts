// app/api/admin/dossiers-courtage-create/route.ts
// Ouvre un dossier de courtage depuis le back-office.
// - Si le client a deja un compte (meme adresse e-mail) : le dossier lui est rattache.
// - Sinon : le compte est cree (sans mot de passe, e-mail confirme) et un lien de definition
//   de mot de passe est envoye avec l'acces au dossier.
// Un evenement "dossier ouvert" est consigne au journal.
// Regles : zero tiret long dans le contenu visible.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { emailAcces, envoyerEmailBrevo, genererReference, siteUrl } from '@/lib/courtage'

const PROFILS = ['particulier', 'professionnel', 'association']

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const email = String(body.email || '').trim().toLowerCase()
    const prenom = String(body.prenom || '').trim()
    const nom = String(body.nom || '').trim()
    const objet = String(body.objet || '').trim()
    const profil = PROFILS.includes(body.profil) ? body.profil : 'particulier'
    const telephone = body.telephone ? String(body.telephone).trim() : null
    const nomStructure = body.nom_structure ? String(body.nom_structure).trim() : null
    const rna = body.rna ? String(body.rna).trim() : null
    const message = body.message ? String(body.message) : null

    if (!email || !objet) {
      return NextResponse.json({ error: "L'adresse e-mail et l'objet du dossier sont obligatoires." }, { status: 400 })
    }

    const origin = siteUrl(request.headers.get('origin'))

    // 1. Compte client : existant ou a creer
    let userId: string
    let prenomClient = prenom
    let nomClient = nom
    let compteCree = false
    let accessLink: string | null = null

    const { data: existant } = await supabaseAdmin
      .from('users')
      .select('id, prenom, nom')
      .eq('email', email)
      .maybeSingle()

    if (existant && existant.id) {
      userId = existant.id
      prenomClient = existant.prenom || prenom || 'Madame, Monsieur'
      nomClient = existant.nom || nom
    } else {
      if (!prenom || !nom) {
        return NextResponse.json({ error: 'Le prénom et le nom sont obligatoires pour créer le compte du client.' }, { status: 400 })
      }
      const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        email_confirm: true,
      })
      if (authError || !authData || !authData.user) {
        const msg = authError ? authError.message : 'Création du compte impossible.'
        if (msg.toLowerCase().includes('registered')) {
          return NextResponse.json({ error: "Cette adresse existe déjà dans l'authentification sans profil client. Vérifiez la liste des clients avant de continuer." }, { status: 409 })
        }
        return NextResponse.json({ error: msg }, { status: 400 })
      }
      userId = authData.user.id
      compteCree = true

      const typeCompte = profil === 'particulier' ? 'particulier' : 'professionnel'
      const { error: profileError } = await supabaseAdmin.from('users').insert({
        id: userId,
        email,
        prenom,
        nom,
        type: typeCompte,
        telephone,
        nom_structure: typeCompte === 'particulier' ? null : nomStructure,
        rna: typeCompte === 'particulier' ? null : rna,
        newsletter: false,
        abonnement_actif: false,
        role: 'user',
      })
      if (profileError) {
        await supabaseAdmin.auth.admin.deleteUser(userId).catch(() => null)
        return NextResponse.json({ error: profileError.message }, { status: 500 })
      }

      try {
        const { data: linkData } = await supabaseAdmin.auth.admin.generateLink({
          type: 'recovery',
          email,
          options: { redirectTo: `${origin}/nouveau-mot-de-passe` },
        })
        accessLink = (linkData && linkData.properties && linkData.properties.action_link) || null
      } catch (linkErr) {
        console.error('[dossiers-courtage-create] generateLink a echoue:', linkErr)
      }
    }

    // 2. Dossier (reference unique, quelques essais en cas de collision)
    let dossier: { id: string; reference: string } | null = null
    let derniereErreur = ''
    for (let essai = 0; essai < 5 && !dossier; essai++) {
      const { data, error } = await supabaseAdmin
        .from('dossiers_courtage')
        .insert({ user_id: userId, reference: genererReference(), profil, objet, etape: 'demande_recue' })
        .select('id, reference')
        .single()
      if (!error && data) {
        dossier = data
      } else {
        derniereErreur = error ? error.message : 'Erreur inconnue.'
        if (!error || (error as { code?: string }).code !== '23505') break
      }
    }
    if (!dossier) {
      return NextResponse.json({ error: derniereErreur || 'Création du dossier impossible.' }, { status: 500 })
    }

    // 3. Journal
    await supabaseAdmin.from('dossiers_courtage_evenements').insert({
      dossier_id: dossier.id,
      user_id: userId,
      type: 'ouverture',
      libelle: 'Dossier ouvert : ' + objet,
      visible_client: true,
    })

    // 4. E-mail d'acces
    const mail = emailAcces({ prenom: prenomClient, objet, reference: dossier.reference, accessLink, origin, message })
    const emailEnvoye = await envoyerEmailBrevo({
      to: { email, name: `${prenomClient} ${nomClient}`.trim() },
      subject: mail.subject,
      html: mail.html,
    })

    await supabaseAdmin.from('dossiers_courtage_evenements').insert({
      dossier_id: dossier.id,
      user_id: userId,
      type: 'acces',
      libelle: emailEnvoye ? "E-mail d'accès à l'espace client envoyé" : "E-mail d'accès non envoyé (à renvoyer)",
      visible_client: false,
    })

    return NextResponse.json({ success: true, id: dossier.id, reference: dossier.reference, compteCree, emailEnvoye })
  } catch (error) {
    console.error('[dossiers-courtage-create] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
