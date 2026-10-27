// app/api/admin/demandes-modeles-update/route.ts
// Met a jour une demande de modele : statut, message visible par le client, et attribution
// d'un modele de la bibliotheque.
//
// Attribution d'un modele (document_id) : le statut est alors determine automatiquement.
//  - modele gratuit, ou inclus dans l'abonnement Optimal et client abonne : « Modele transmis »
//    (le client le telecharge depuis « Vos documents deja obtenus »),
//  - modele vendu a l'unite : « En attente de paiement » (le client le regle depuis son espace),
//  - sinon : refus avec explication (modele reserve aux abonnes ou non vendu).
// Sans modele de la bibliotheque, le cabinet depose le fichier via « Echanges de fichiers ».
// Si « notifier » est vrai, le client recoit un e-mail pour les statuts transmis, a payer, sans suite.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { envoyerEmailBrevo, emailReponseDemande, emailModeleAPayer } from '@/lib/demandes-modeles'
import { statutDemandeValide } from '@/lib/demandes-modeles-statuts'

type DocumentBibliotheque = {
  id: string
  nom: string
  acces_gratuit: boolean
  acces_optimal: boolean
  acces_payant: boolean
  prix_unitaire: number | string | null
}

// Statut qui decoule du modele attribue, pour ce client.
function statutPourModele(doc: DocumentBibliotheque, abonne: boolean, aPaye: boolean):
  { statut: 'livree' | 'a_payer'; prix: number | null } | { erreur: string } {
  if (doc.acces_gratuit || (doc.acces_optimal && abonne) || aPaye) return { statut: 'livree', prix: null }
  const prix = Number(doc.prix_unitaire)
  if (doc.acces_payant && prix > 0) return { statut: 'a_payer', prix }
  if (doc.acces_optimal) {
    return { erreur: "Ce modèle est réservé aux abonnés Optimal et ce client ne l'est pas. Activez « Achat à l'unité » avec un prix dans Documents pour le lui proposer, ou répondez autrement." }
  }
  return { erreur: "Ce modèle n'est ni gratuit, ni inclus dans l'abonnement, ni vendu à l'unité avec un prix. Vérifiez ses accès dans Documents." }
}

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const body = await request.json().catch(() => ({}))
    const { id, statut, reponse_client, notifier } = body
    const documentIdDemande: string = body.document_id ? String(body.document_id) : ''
    if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })
    if (statut !== undefined && !statutDemandeValide(statut)) {
      return NextResponse.json({ error: 'Statut invalide.' }, { status: 400 })
    }

    const { data: demande } = await supabaseAdmin
      .from('demandes_modeles')
      .select('*, users(prenom, nom, email, abonnement_actif)')
      .eq('id', id)
      .single()
    if (!demande) return NextResponse.json({ error: 'Demande introuvable.' }, { status: 404 })
    const user = demande.users as { prenom: string | null; nom: string | null; email: string | null; abonnement_actif: boolean | null } | null

    const miseAJour: Record<string, unknown> = { updated_at: new Date().toISOString() }
    let statutFinal = (statut !== undefined ? statut : demande.statut) as string
    let documentNom: string | null = demande.document_nom || null
    let prixAPayer: number | null = demande.document_prix != null ? Number(demande.document_prix) : null
    let inclusOptimal: boolean = !!demande.document_inclus_optimal

    // Modele de la bibliotheque : nouveau choix, ou modele deja attribue que l'on souhaite faire passer en « transmis »
    const documentId = documentIdDemande || (statut === 'livree' && demande.document_id ? String(demande.document_id) : '')
    if (documentId) {
      const { data: doc } = await supabaseAdmin
        .from('documents')
        .select('id, nom, acces_gratuit, acces_optimal, acces_payant, prix_unitaire')
        .eq('id', documentId)
        .eq('actif', true)
        .single()
      if (!doc) return NextResponse.json({ error: 'Modèle introuvable ou inactif dans Documents.' }, { status: 404 })

      const { data: achats } = await supabaseAdmin
        .from('achats_documents')
        .select('id')
        .eq('user_id', demande.user_id)
        .eq('document_id', documentId)
        .eq('statut', 'paye')
        .limit(1)
      const resultat = statutPourModele(doc as DocumentBibliotheque, !!(user && user.abonnement_actif), !!(achats && achats.length > 0))
      if ('erreur' in resultat) {
        return NextResponse.json({ error: resultat.erreur }, { status: 400 })
      }
      if (statut === 'livree' && !documentIdDemande && resultat.statut === 'a_payer') {
        return NextResponse.json({ error: "Le client n'a pas encore réglé ce modèle : la demande passera en « Modèle transmis » dès le paiement." }, { status: 400 })
      }
      statutFinal = resultat.statut
      miseAJour.document_id = doc.id
      miseAJour.document_nom = doc.nom
      miseAJour.document_prix = resultat.prix
      miseAJour.document_inclus_optimal = !!doc.acces_optimal
      documentNom = doc.nom
      prixAPayer = resultat.prix
      inclusOptimal = !!doc.acces_optimal
    } else if (statut === 'a_payer') {
      return NextResponse.json({ error: "Le statut « En attente de paiement » résulte de l'attribution d'un modèle payant de la bibliothèque." }, { status: 400 })
    }

    miseAJour.statut = statutFinal
    miseAJour.livree_le = statutFinal === 'livree' ? new Date().toISOString() : null
    if (reponse_client !== undefined) {
      const texte = String(reponse_client || '').trim()
      miseAJour.reponse_client = texte || null
    }

    const { error } = await supabaseAdmin.from('demandes_modeles').update(miseAJour).eq('id', id)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    let emailEnvoye: boolean | null = null
    if (notifier && ['livree', 'a_payer', 'sans_suite'].includes(statutFinal) && user && user.email) {
      const messageFinal = reponse_client !== undefined ? String(reponse_client || '') : (demande.reponse_client || '')
      const origin = request.headers.get('origin')
      const destinataire = { email: user.email, name: `${user.prenom || ''} ${user.nom || ''}`.trim() }
      const mail = statutFinal === 'a_payer' && documentNom && prixAPayer
        ? emailModeleAPayer({ prenom: user.prenom || '', typeDocument: demande.type_document, documentNom, prix: prixAPayer, inclusOptimal, message: messageFinal, origin })
        : emailReponseDemande({
            prenom: user.prenom || '',
            typeDocument: demande.type_document,
            statut: statutFinal as 'livree' | 'sans_suite',
            message: messageFinal,
            origin,
            avecDocument: !!documentNom && statutFinal === 'livree',
          })
      emailEnvoye = await envoyerEmailBrevo({ to: destinataire, subject: mail.subject, html: mail.html, sansCopie: true })
    }

    return NextResponse.json({ success: true, emailEnvoye, statut: statutFinal })
  } catch (error) {
    console.error('[demandes-modeles-update] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
