// app/api/admin/dossiers-courtage-update/route.ts
// Met a jour un dossier de courtage depuis le back-office : etape, exigences et besoins
// (version datee et consignee au journal), assureurs consultes, note de remuneration,
// messages au client et notes internes. Chaque action est consignee au journal horodate.
//
// Garde-fous de conformite :
//  - passage en "proposition transmise" : exigences et besoins consignes par ecrit
//    (article L.521-4) ET noms des entreprises d'assurance renseignes (article L.521-2, II, 1°, b) ;
//  - passage en "souscription realisee" : fiche d'information precontractuelle deja envoyee.
// Regles : zero tiret long dans le contenu visible.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import {
  emailSuivi,
  envoyerEmailBrevo,
  etapeValide,
  formatDateHeureParis,
  labelEtape,
  listePartenaires,
  siteUrl,
  texteEnListe,
} from '@/lib/courtage'

type Evenement = { type: string; libelle: string; detail?: string | null; visible_client: boolean }

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { id } = body
    if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })

    const { data: dossier } = await supabaseAdmin
      .from('dossiers_courtage')
      .select('*, users(prenom, nom, email)')
      .eq('id', id)
      .maybeSingle()
    if (!dossier) return NextResponse.json({ error: 'Dossier introuvable.' }, { status: 404 })

    const client = Array.isArray(dossier.users) ? dossier.users[0] : dossier.users
    const maj: Record<string, unknown> = { updated_at: new Date().toISOString() }
    const evenements: Evenement[] = []

    // Valeurs resultantes, pour verifier les garde-fous avant d'ecrire quoi que ce soit
    let recueil: string = dossier.recueil_besoins || ''
    let assureurs: string = dossier.assureurs_consultes || ''

    // Exigences et besoins : consignes par ecrit, version datee
    if (typeof body.recueil_besoins === 'string') {
      const texte = body.recueil_besoins.trim()
      if (!texte) {
        return NextResponse.json({ error: 'Le texte des exigences et besoins ne peut pas être vide.' }, { status: 400 })
      }
      if (texte !== recueil) {
        recueil = texte
        const maintenant = new Date().toISOString()
        maj.recueil_besoins = texte
        maj.recueil_le = maintenant
        evenements.push({
          type: 'recueil',
          libelle: `Exigences et besoins consignés par écrit (${formatDateHeureParis(maintenant)})`,
          detail: texte,
          visible_client: true,
        })
      }
    }

    if (typeof body.assureurs_consultes === 'string') {
      const texte = body.assureurs_consultes.trim()
      if (texte !== assureurs) {
        assureurs = texte
        maj.assureurs_consultes = texte || null
        if (texte) {
          evenements.push({
            type: 'assureurs',
            libelle: "Entreprises d'assurance consultées pour votre dossier mises à jour",
            detail: texte,
            visible_client: true,
          })
        }
      }
    }

    if (typeof body.remuneration_note === 'string') {
      const texte = body.remuneration_note.trim()
      if (texte !== (dossier.remuneration_note || '')) {
        maj.remuneration_note = texte || null
        if (texte) {
          evenements.push({
            type: 'remuneration',
            libelle: 'Information sur la rémunération du cabinet pour votre dossier mise à jour',
            detail: texte,
            visible_client: true,
          })
        }
      }
    }

    // Changement d'etape, avec garde-fous
    let nouvelleEtape: string | null = null
    if (body.etape !== undefined && body.etape !== dossier.etape) {
      if (!etapeValide(body.etape)) {
        return NextResponse.json({ error: 'Étape invalide.' }, { status: 400 })
      }
      if (body.etape === 'proposition') {
        if (!recueil) {
          return NextResponse.json({ error: "Consignez par écrit les exigences et les besoins du client avant de transmettre une proposition (article L.521-4)." }, { status: 400 })
        }
        if (listePartenaires().length === 0 && texteEnListe(assureurs).length === 0) {
          return NextResponse.json({ error: "Renseignez les noms des entreprises d'assurance (liste des partenaires dans lib/courtage-partenaires.ts, ou champ « assureurs consultés » du dossier) avant de transmettre une proposition (article L.521-2, II, 1°, b)." }, { status: 400 })
        }
      }
      if (body.etape === 'conclu' && !dossier.fiche_envoyee_le) {
        return NextResponse.json({ error: "Envoyez la fiche d'information précontractuelle avant de passer le dossier en souscription réalisée." }, { status: 400 })
      }
      nouvelleEtape = body.etape
      maj.etape = body.etape
      evenements.push({ type: 'etape', libelle: 'Étape : ' + labelEtape(body.etape), visible_client: true })
    }

    // Message au client (visible) et note interne (jamais visible)
    const noteClient = typeof body.note_client === 'string' ? body.note_client.trim() : ''
    if (noteClient) {
      evenements.push({ type: 'message', libelle: 'Message du cabinet', detail: noteClient, visible_client: true })
    }
    const noteInterne = typeof body.note_interne === 'string' ? body.note_interne.trim() : ''
    if (noteInterne) {
      evenements.push({ type: 'note_interne', libelle: 'Note interne', detail: noteInterne, visible_client: false })
    }

    const { error: updateError } = await supabaseAdmin.from('dossiers_courtage').update(maj).eq('id', id)
    if (updateError) return NextResponse.json({ error: updateError.message }, { status: 500 })

    if (evenements.length > 0) {
      const { error: evtError } = await supabaseAdmin.from('dossiers_courtage_evenements').insert(
        evenements.map(e => ({
          dossier_id: id,
          user_id: dossier.user_id,
          type: e.type,
          libelle: e.libelle,
          detail: e.detail || null,
          visible_client: e.visible_client,
        }))
      )
      if (evtError) console.error('[dossiers-courtage-update] Echec journal:', evtError)
    }

    // Notification e-mail (etape et/ou message) si demandee
    let emailEnvoye: boolean | null = null
    if (body.notifier && client && client.email && (nouvelleEtape || noteClient)) {
      const mail = emailSuivi({
        prenom: client.prenom || 'Madame, Monsieur',
        reference: dossier.reference,
        etape: nouvelleEtape,
        message: noteClient || null,
        origin: siteUrl(request.headers.get('origin')),
      })
      emailEnvoye = await envoyerEmailBrevo({
        to: { email: client.email, name: `${client.prenom} ${client.nom}`.trim() },
        subject: mail.subject,
        html: mail.html,
      })
    }

    return NextResponse.json({ success: true, emailEnvoye })
  } catch (error) {
    console.error('[dossiers-courtage-update] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
