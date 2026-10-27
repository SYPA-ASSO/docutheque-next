import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const runtime = 'nodejs'

// app/api/documents/acheter/route.ts
// Reglement d'un modele de document par un utilisateur connecte (jeton de session).
// Il n'y a plus de vente libre a l'unite : un modele ne peut etre regle que si le cabinet l'a
// attribue au client en reponse a une demande de modele (demande au statut « a_payer »).
// Un modele est reglable des qu'il est acces_payant avec un prix_unitaire > 0.
// Un abonne Optimal n'a pas a payer un modele inclus dans son abonnement (acces_optimal).
// Deux modes : carte (Stripe Checkout, l'acces est accorde par le webhook a la fin du paiement)
// et virement (commande enregistree en attente dans achats_documents + envoi du RIB par email).
// L'acces effectif au telechargement est gere par la route documents/download, qui exige statut = paye.
// Le client doit renoncer expressement a son droit de retractation (contenu numerique mis a
// disposition immediatement) : la case est controlee ici et la mention figure dans l'e-mail du cabinet.
// Le RIB n'est jamais code en dur : CABINET_TITULAIRE / CABINET_IBAN / CABINET_BIC / CABINET_BANQUE.
// Regles : zero tiret long, NBSP avant euro.

export async function POST(request: NextRequest) {
  try {
    // 1. Authentification
    const authHeader = request.headers.get('authorization') || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
    if (!token) {
      return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
    }
    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token)
    if (userErr || !userData?.user) {
      return NextResponse.json({ error: 'Session invalide.' }, { status: 401 })
    }
    const userId = userData.user.id

    // 2. Entree
    const body = await request.json()
    const documentId: string | undefined = body.documentId
    const mode: string = body.mode === 'virement' ? 'virement' : 'carte'
    if (!documentId) {
      return NextResponse.json({ error: 'Document non specifie.' }, { status: 400 })
    }
    if (body.renonciation !== true) {
      return NextResponse.json({ error: 'Pour obtenir le modèle immédiatement, vous devez cocher la case relative au droit de rétractation.' }, { status: 400 })
    }

    // 3. Le cabinet doit avoir attribue ce modele au client en reponse a une demande (statut a_payer)
    const { data: demandeAttribuee } = await supabaseAdmin
      .from('demandes_modeles')
      .select('id')
      .eq('user_id', userId)
      .eq('document_id', documentId)
      .eq('statut', 'a_payer')
      .limit(1)
    if (!demandeAttribuee || demandeAttribuee.length === 0) {
      return NextResponse.json({ error: "Ce modèle ne vous a pas été proposé par le cabinet. Faites une demande de modèle depuis votre espace client." }, { status: 403 })
    }

    // 3 bis. Document : doit exister, etre actif, payant et avoir un prix
    const { data: document } = await supabaseAdmin
      .from('documents')
      .select('id, nom, prix_unitaire, acces_payant, acces_optimal, actif')
      .eq('id', documentId)
      .eq('actif', true)
      .single()
    if (!document) {
      return NextResponse.json({ error: 'Document introuvable.' }, { status: 404 })
    }
    const prix = Number(document.prix_unitaire)
    if (!document.acces_payant || !prix || prix <= 0) {
      return NextResponse.json({ error: "Ce document n'est pas en vente à l'unité." }, { status: 400 })
    }

    // 4. Acheteur (avec statut d'abonnement)
    const { data: profil } = await supabaseAdmin
      .from('users')
      .select('email, prenom, nom, abonnement_actif')
      .eq('id', userId)
      .single()
    if (!profil?.email) {
      return NextResponse.json({ error: 'Compte introuvable.' }, { status: 404 })
    }

    // 4 bis. Un abonne Optimal n'a pas a payer un document inclus dans son abonnement
    if (document.acces_optimal && profil.abonnement_actif) {
      return NextResponse.json(
        { error: 'Ce document est inclus dans votre abonnement Optimal. Vous pouvez le télécharger depuis votre espace client.' },
        { status: 409 },
      )
    }

    // 5. Deja achete ? (acces deja accorde)
    const { data: dejaPaye } = await supabaseAdmin
      .from('achats_documents')
      .select('id')
      .eq('user_id', userId)
      .eq('document_id', documentId)
      .eq('statut', 'paye')
      .limit(1)
    if (dejaPaye && dejaPaye.length > 0) {
      return NextResponse.json({ error: 'Vous avez déjà accès à ce document.' }, { status: 409 })
    }

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // ====================== CARTE ======================
    if (mode === 'carte') {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        customer_email: profil.email,
        line_items: [{
          price_data: {
            currency: 'eur',
            product_data: { name: document.nom },
            unit_amount: Math.round(prix * 100),
          },
          quantity: 1,
        }],
        metadata: {
          produit: 'document',
          documentId: document.id,
          userId,
          renonciation_retractation: 'oui',
        },
        success_url: `${origin}/espace-client?onglet=documents&achat=succes`,
        cancel_url: `${origin}/espace-client?onglet=documents&achat=annule`,
      })
      return NextResponse.json({ url: session.url })
    }

    // ====================== VIREMENT ======================
    // Reference (ou reprise d'une commande deja en attente pour ce document)
    const { data: dejaEnAttente } = await supabaseAdmin
      .from('achats_documents')
      .select('id, reference')
      .eq('user_id', userId)
      .eq('document_id', documentId)
      .eq('statut', 'en_attente')
      .limit(1)

    let reference: string
    if (dejaEnAttente && dejaEnAttente.length > 0 && dejaEnAttente[0].reference) {
      reference = dejaEnAttente[0].reference
    } else {
      reference = `DOC-${Date.now().toString(36).toUpperCase()}`
      const { error: insertErr } = await supabaseAdmin
        .from('achats_documents')
        .insert({
          user_id: userId,
          document_id: documentId,
          montant: prix,
          mode_paiement: 'virement',
          statut: 'en_attente',
          reference,
        })
      if (insertErr) {
        console.error('[Achat document] Insertion commande virement echouee:', insertErr)
        return NextResponse.json({ error: "L'enregistrement de la commande a echoue. Veuillez reessayer." }, { status: 500 })
      }
    }

    // Email RIB a l'acheteur (best effort : la commande est deja enregistree)
    const brevoKey = process.env.BREVO_API_KEY
    if (brevoKey) {
      const prixAff = prix.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      const titulaire = process.env.CABINET_TITULAIRE || '[Titulaire a definir]'
      const iban = process.env.CABINET_IBAN || '[IBAN a definir]'
      const bic = process.env.CABINET_BIC || '[BIC a definir]'
      const banque = process.env.CABINET_BANQUE || ''
      const prenomTxt = profil.prenom ? ' ' + profil.prenom : ''

      const htmlAcheteur = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background-color:#0f2d6e;background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Votre modèle : règlement par virement</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Montant : ${prixAff}&nbsp;&euro;</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour${prenomTxt},</p>
    <p>Merci pour votre commande du modèle <strong>${document.nom}</strong>. Pour finaliser, merci d'effectuer un virement de <strong>${prixAff}&nbsp;&euro;</strong> avec les coordonnees suivantes :</p>
    <table style="width:100%;border-collapse:collapse;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;margin:16px 0;">
      <tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;width:130px;background:#f8fafc;">Titulaire</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;">${titulaire}</td></tr>
      <tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">IBAN</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;font-family:monospace;">${iban}</td></tr>
      <tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">BIC</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;font-family:monospace;">${bic}</td></tr>
      ${banque ? `<tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Banque</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;">${banque}</td></tr>` : ''}
      <tr><td style="padding:11px 16px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Reference</td><td style="padding:11px 16px;"><strong style="color:#0f2d6e;letter-spacing:0.03em;">${reference}</strong></td></tr>
    </table>
    <p style="font-size:13px;color:#374151;">Merci d'indiquer imperativement la reference <strong>${reference}</strong> dans le libelle de votre virement, afin que nous puissions le rapprocher de votre commande.</p>
    <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;font-size:13px;color:#1e3a5f;line-height:1.6;">
      Dès réception et vérification de votre virement, votre modèle devient téléchargeable depuis votre espace client, onglet « Demander un modèle », et un justificatif de paiement vous est adressé.
    </p>
    <p style="font-size:12px;color:#6b7280;line-height:1.6;">Lors de votre commande, vous avez demandé la mise à disposition immédiate du modèle et reconnu perdre votre droit de rétractation dès cette mise à disposition.</p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>CBT CHOLEZ PAGOTTO</strong><br>
      <span style="color:#6b7280;">Votre espace client</span> : <a href="https://cholez-pagotto.fr/connexion" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr/connexion</a><br>
      <span style="color:#6b7280;">Une question ?</span> <a href="mailto:contact@cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">contact@cholez-pagotto.fr</a>
    </p>
  </div>
</body>
</html>`

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'CBT CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: profil.email, name: `${profil.prenom || ''} ${profil.nom || ''}`.trim() || profil.email }],
          subject: `Modèle ${document.nom} : RIB et référence ${reference}`,
          htmlContent: htmlAcheteur,
        }),
      }).catch(err => console.error('[Achat document] Erreur email acheteur:', err))

      // Notification cabinet
      const htmlCabinet = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:#0f2d6e;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Nouvel achat de document a regler (virement)</h2>
  </div>
  <div style="background:#f8fafc;padding:20px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p style="margin:0 0 8px;">Reference : <strong>${reference}</strong></p>
    <p style="margin:0 0 8px;">Document : <strong>${document.nom}</strong></p>
    <p style="margin:0 0 8px;">Acheteur : ${profil.prenom || ''} ${profil.nom || ''}</p>
    <p style="margin:0 0 8px;">Email : <a href="mailto:${profil.email}" style="color:#1a4fba;">${profil.email}</a></p>
    <p style="margin:0 0 8px;">Montant attendu : ${prixAff}&nbsp;&euro; par virement</p>
    <p style="margin:0 0 8px;">Renonciation au droit de retractation (mise a disposition immediate) : acceptee par le client en ligne</p>
    <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">La commande figure dans l'espace client (statut en attente). A valider des reception du virement pour ouvrir le telechargement.</p>
  </div>
</body>
</html>`

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'CBT CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' }],
          replyTo: { email: profil.email, name: `${profil.prenom || ''} ${profil.nom || ''}`.trim() || profil.email },
          subject: `[Achat virement] ${reference} : ${document.nom}`,
          htmlContent: htmlCabinet,
        }),
      }).catch(err => console.error('[Achat document] Erreur notification cabinet:', err))
    }

    return NextResponse.json({ success: true, reference })

  } catch (error) {
    console.error('[Achat document] Erreur inattendue:', error)
    return NextResponse.json({ error: 'Une erreur inattendue est survenue. Veuillez reessayer.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Methode non autorisee.' }, { status: 405 })
}
