import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { getForfait } from '@/lib/diagnostic-forfaits'
import { findOrCreateDiagnosticUser, createDossierRgpd, dossierExistsForSession, espaceClientEmailBlock } from '@/lib/diagnostic-account'

// app/api/checkout/diagnostic/confirme/route.ts
// Appelee depuis la page de retour Stripe. Verifie le paiement, lit le forfait depuis les metadata,
// rattache la commande a un espace client (cree si besoin), puis envoie a l'acheteur le questionnaire
// de cadrage et notifie le cabinet. Idempotent : un rechargement de la page de retour ne cree ni
// doublon de compte, ni doublon de dossier, ni second email.
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

const QUESTIONNAIRE = [
  'Présentation : votre activité, votre effectif (salariés et bénévoles), l\'adresse de votre site web.',
  'La liste de vos traitements de données (par exemple : clients et prospects, salariés, fournisseurs, newsletter, vidéosurveillance).',
  'Pour chaque traitement : sa finalité, les catégories de données collectées et la base légale présumée.',
  'Les durées de conservation appliquées (ou la mention inconnue si non définies).',
  'Vos destinataires et sous-traitants (CRM, hébergeur, emailing, comptable, banque) et leur localisation (UE ou hors UE).',
  'Traitez-vous des données sensibles (santé, opinions, biométrie, infractions) ?',
  'Les documents déjà en place : registre des traitements, politique de confidentialité, mentions d\'information, contrats de sous-traitance (article 28 RGPD).',
  'Vos mesures de sécurité actuelles : mots de passe, sauvegardes, chiffrement, gestion des accès.',
  'Avez-vous déjà connu une violation de données, une plainte ou un contrôle CNIL ?',
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const sessionId = body.session_id

    if (!sessionId || typeof sessionId !== 'string') {
      return NextResponse.json({ success: false, error: 'Session manquante.' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json({ success: false, status: session.payment_status }, { status: 200 })
    }

    const produit = session.metadata && session.metadata.produit ? session.metadata.produit : ''
    if (produit !== 'diagnostic' && produit !== 'diagnostic_essentiel') {
      return NextResponse.json({ success: false, error: 'Produit non reconnu.' }, { status: 400 })
    }

    const f = getForfait(session.metadata ? session.metadata.forfait : undefined)

    const email = session.customer_details && session.customer_details.email ? session.customer_details.email : null
    const nom = session.customer_details && session.customer_details.name ? session.customer_details.name : 'Client'

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // Idempotence : si une commande existe deja pour cette session, on ne refait rien (ni email).
    let dejaTraite = false
    try {
      dejaTraite = await dossierExistsForSession(session.id)
    } catch (e) {
      console.error('[Diagnostic Confirme] Verification idempotence echouee:', e)
    }
    if (dejaTraite) {
      return NextResponse.json({ success: true, dejaTraite: true })
    }

    // Rattachement espace client + ligne de suivi (best effort : ne bloque jamais la commande payee).
    let accessLink: string | null = null
    if (email) {
      try {
        const compte = await findOrCreateDiagnosticUser({
          email,
          fullName: nom,
          telephone: null,
          structure: null,
          origin,
        })
        if (compte.userId) {
          await createDossierRgpd({
            userId: compte.userId,
            forfaitId: f.id,
            montantEuros: Math.round(f.montantCents / 100),
            mode: 'carte',
            reference: null,
            stripeSessionId: session.id,
            statut: 'en_cours',
          })
        }
        if (compte.created) accessLink = compte.accessLink
      } catch (e) {
        console.error('[Diagnostic Confirme] Rattachement espace client echoue:', e)
      }
    }

    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey || !email) {
      console.error('[Diagnostic Confirme] Cle Brevo ou email acheteur manquant', { hasKey: Boolean(brevoKey), hasEmail: Boolean(email) })
      return NextResponse.json({ success: true, emailEnvoye: false })
    }

    const dateFr = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
    const questionsHtml = QUESTIONNAIRE.map((q, i) => `<li style="margin-bottom:8px;line-height:1.6;">${i + 1}. ${q}</li>`).join('')
    const espaceBloc = espaceClientEmailBlock(accessLink, origin)

    // Email acheteur : confirmation + acces espace client + questionnaire de cadrage
    const htmlAcheteur = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background-color:#0f2d6e;background:linear-gradient(135deg,#0f2d6e 0%,#7c3aed 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">${f.label} : paiement confirmé</h2>
    <p style="color:#e9d5ff;font-size:12px;margin:6px 0 0;">Commande du ${dateFr} &middot; Montant : ${f.prixEmail}</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${nom},</p>
    <p>Merci pour votre commande du ${f.label}. Votre paiement de ${f.prixEmail} a bien été enregistré. Un justificatif de paiement vous parvient séparément.</p>
    ${espaceBloc}
    <p><strong>Pour démarrer</strong>, merci de répondre directement à cet email au questionnaire de cadrage suivant :</p>
    <ol style="padding-left:20px;margin:16px 0;">
      ${questionsHtml}
    </ol>
    <p style="background:#f5f3ff;border:1px solid #e9d5ff;border-radius:8px;padding:12px 14px;font-size:13px;color:#5b21b6;line-height:1.6;">
      Dès réception de vos réponses, notre juriste réalise la cartographie et l'analyse des écarts, puis vous remet votre rapport de conformité priorisé sous <strong>${f.delai}</strong>.
    </p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>François CHOLEZ</strong><br>
      Juriste &middot; Formaliste &middot; Conseil en assurances<br><br>
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      12 rue d'Olima &middot; 88000 Épinal<br>
      <a href="https://cholez-pagotto.fr" style="color:#7c3aed;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
    <p style="margin:14px 0 0;font-size:12px;color:#6b7280;line-height:1.7;">
      Formaliste membre du CRFF (Conseil Représentatif des Formalistes de France)<br>
      Immatriculé à l'ORIAS n&deg;26003943 &middot; <a href="https://www.orias.fr" target="_blank" style="color:#6b7280;">www.orias.fr</a> &middot; Sous contrôle de l'ACPR
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
    <p style="color:#9ca3af;font-size:11px;line-height:1.6;">
      Le ${f.label} constitue une information juridique au sens de la loi n&deg;71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée.
    </p>
  </div>
</body>
</html>`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email, name: nom }],
        subject: `${f.label} : confirmation et questionnaire de cadrage`,
        htmlContent: htmlAcheteur,
      }),
    }).catch(err => console.error('[Diagnostic Confirme] Erreur email acheteur:', err))

    // Notification cabinet
    const htmlCabinet = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:#0f2d6e;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Nouvelle commande payée : ${f.label} (carte)</h2>
  </div>
  <div style="background:#f8fafc;padding:20px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p style="margin:0 0 8px;">Acheteur : <strong>${nom}</strong></p>
    <p style="margin:0 0 8px;">Email : <a href="mailto:${email}" style="color:#7c3aed;">${email}</a></p>
    <p style="margin:0 0 8px;">Montant : ${f.prixEmail} (payé par carte)</p>
    <p style="margin:0 0 8px;">Référence session : ${session.id}</p>
    <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">Le questionnaire de cadrage a été envoyé automatiquement à l'acheteur. La commande est suivie dans l'espace client (statut en cours).</p>
  </div>
</body>
</html>`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' }],
        subject: `[Commande payée] ${f.label} : ${nom}`,
        htmlContent: htmlCabinet,
      }),
    }).catch(err => console.error('[Diagnostic Confirme] Erreur notification cabinet:', err))

    return NextResponse.json({ success: true, emailEnvoye: true })

  } catch (error) {
    console.error('[Diagnostic Confirme] Erreur inattendue:', error)
    return NextResponse.json({ success: false, error: 'Erreur lors de la confirmation.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}