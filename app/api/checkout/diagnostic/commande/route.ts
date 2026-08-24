import { NextRequest, NextResponse } from 'next/server'
import { getForfait } from '@/lib/diagnostic-forfaits'
import { findOrCreateDiagnosticUser, createDossierRgpd, espaceClientEmailBlock } from '@/lib/diagnostic-account'

// app/api/checkout/diagnostic/commande/route.ts
// Commande d'un forfait de diagnostic par virement. Genere une reference, rattache la commande a un
// espace client (cree si besoin, statut en attente), envoie a l'acheteur le RIB (depuis les variables
// d'environnement) + l'acces espace client + le questionnaire, et notifie le cabinet.
// Le RIB n'est jamais code en dur : CABINET_TITULAIRE / CABINET_IBAN / CABINET_BIC / CABINET_BANQUE.
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

function sanitize(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .trim()
    .slice(0, 500)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, structure, email, telephone, rgpd, website } = body
    const f = getForfait(body.forfait)

    // 1. Honeypot
    if (website && website.length > 0) {
      return NextResponse.json({ success: true, reference: '' })
    }

    // 2. Consentement RGPD
    if (!rgpd) {
      return NextResponse.json({ error: 'Vous devez accepter la politique de confidentialité.' }, { status: 400 })
    }

    // 3. Champs obligatoires
    if (!nom || !structure || !email || !telephone) {
      return NextResponse.json({ error: 'Tous les champs obligatoires doivent être remplis.' }, { status: 400 })
    }

    // 4. Format email
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    // 5. Longueurs
    if (nom.length > 100 || structure.length > 150 || email.length > 254 || telephone.length > 20) {
      return NextResponse.json({ error: 'Un ou plusieurs champs dépassent la longueur autorisée.' }, { status: 400 })
    }

    const nomSafe = sanitize(nom)
    const structureSafe = sanitize(structure)
    const emailSafe = sanitize(email)
    const telSafe = sanitize(telephone).slice(0, 20)

    // 6. Reference de paiement (prefixe selon le forfait)
    const codeForfait = f.id === 'standard' ? 'STD' : 'ESS'
    const reference = `DIAG-${codeForfait}-${Date.now().toString(36).toUpperCase()}`

    // 7. Cle API
    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey) {
      console.error('[Diagnostic Commande] BREVO_API_KEY manquante')
      return NextResponse.json({ error: 'Erreur de configuration serveur. Veuillez réessayer ultérieurement.' }, { status: 500 })
    }

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // 8. Rattachement espace client + ligne de suivi (best effort : ne bloque pas la commande).
    let accessLink: string | null = null
    try {
      const compte = await findOrCreateDiagnosticUser({
        email: emailSafe,
        fullName: nomSafe,
        telephone: telSafe,
        structure: structureSafe,
        origin,
      })
      if (compte.userId) {
        await createDossierRgpd({
          userId: compte.userId,
          forfaitId: f.id,
          montantEuros: Math.round(f.montantCents / 100),
          mode: 'virement',
          reference,
          stripeSessionId: null,
          statut: 'en_attente',
        })
      }
      if (compte.created) accessLink = compte.accessLink
    } catch (e) {
      const err = e as { name?: string; message?: string; status?: number; code?: string; details?: string; hint?: string }
      console.error('[Diagnostic Commande] Rattachement espace client echoue:', JSON.stringify({
        name: err?.name ?? null,
        message: err?.message ?? null,
        status: err?.status ?? null,
        code: err?.code ?? null,
        details: err?.details ?? null,
        hint: err?.hint ?? null,
      }))
    }

    // 9. Coordonnees bancaires depuis l'environnement (jamais codees en dur)
    const titulaire = process.env.CABINET_TITULAIRE
    const iban = process.env.CABINET_IBAN
    const bic = process.env.CABINET_BIC
    const banque = process.env.CABINET_BANQUE
    if (!iban || !bic || !titulaire) {
      console.warn('[Diagnostic Commande] Coordonnees bancaires incompletes : definir CABINET_TITULAIRE, CABINET_IBAN, CABINET_BIC, CABINET_BANQUE')
    }
    const titulaireAff = titulaire || '[Titulaire a definir]'
    const ibanAff = iban || '[IBAN a definir]'
    const bicAff = bic || '[BIC a definir]'
    const banqueAff = banque || ''

    const questionsHtml = QUESTIONNAIRE.map((q, i) => `<li style="margin-bottom:8px;line-height:1.6;">${i + 1}. ${q}</li>`).join('')
    const espaceBloc = espaceClientEmailBlock(accessLink, origin)

    // 10. Email acheteur : RIB + reference + acces espace client + questionnaire
    const htmlAcheteur = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background-color:#0f2d6e;background:linear-gradient(135deg,#0f2d6e 0%,#7c3aed 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">${f.label} : règlement par virement</h2>
    <p style="color:#e9d5ff;font-size:12px;margin:6px 0 0;">Montant : ${f.prixEmail}</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${nomSafe},</p>
    <p>Merci pour votre commande du ${f.label} pour <strong>${structureSafe}</strong>. Pour finaliser, merci d'effectuer un virement de <strong>${f.prixEmail}</strong> avec les coordonnées suivantes :</p>
    <table style="width:100%;border-collapse:collapse;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;margin:16px 0;">
      <tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;width:130px;background:#f8fafc;">Titulaire</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;">${titulaireAff}</td></tr>
      <tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">IBAN</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;font-family:monospace;">${ibanAff}</td></tr>
      <tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">BIC</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;font-family:monospace;">${bicAff}</td></tr>
      ${banqueAff ? `<tr><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Banque</td><td style="padding:11px 16px;border-bottom:1px solid #f3f4f6;">${banqueAff}</td></tr>` : ''}
      <tr><td style="padding:11px 16px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Référence</td><td style="padding:11px 16px;"><strong style="color:#0f2d6e;letter-spacing:0.03em;">${reference}</strong></td></tr>
    </table>
    <p style="font-size:13px;color:#374151;">Merci d'indiquer impérativement la référence <strong>${reference}</strong> dans le libellé de votre virement, afin que nous puissions le rapprocher de votre commande.</p>
    ${espaceBloc}
    <p><strong>Vous pouvez déjà préparer vos réponses</strong> au questionnaire de cadrage ci-dessous (à nous renvoyer par retour d'email) :</p>
    <ol style="padding-left:20px;margin:16px 0;">
      ${questionsHtml}
    </ol>
    <p style="background:#f5f3ff;border:1px solid #e9d5ff;border-radius:8px;padding:12px 14px;font-size:13px;color:#5b21b6;line-height:1.6;">
      Le délai de livraison de <strong>${f.delai}</strong> démarre à la réception de votre virement et de vos réponses au questionnaire. Un justificatif de paiement vous sera adressé après encaissement.
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
      Immatriculé à l'ORIAS n&deg;26003943 &middot; <a href="https://www.orias.fr" target="_blank" style="color:#6b7280;">www.orias.fr</a> &middot; Sous contrôle de l'ACPR
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
    <p style="color:#9ca3af;font-size:11px;line-height:1.6;">
      Le ${f.label} constitue une information juridique au sens de la loi n&deg;71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée.
    </p>
  </div>
</body>
</html>`

    const resAcheteur = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: emailSafe, name: nomSafe }],
        subject: `${f.label} : RIB et référence ${reference}`,
        htmlContent: htmlAcheteur,
      }),
    })

    if (!resAcheteur.ok) {
      const err = await resAcheteur.json().catch(() => ({}))
      console.error('[Diagnostic Commande] Erreur email acheteur:', err)
      return NextResponse.json({ error: "L'envoi a échoué. Veuillez réessayer ou nous contacter directement." }, { status: 500 })
    }

    // 11. Notification cabinet
    const htmlCabinet = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:#0f2d6e;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Nouvelle commande à régler : ${f.label} (virement)</h2>
  </div>
  <div style="background:#f8fafc;padding:20px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p style="margin:0 0 8px;">Référence : <strong>${reference}</strong></p>
    <p style="margin:0 0 8px;">Acheteur : <strong>${nomSafe}</strong></p>
    <p style="margin:0 0 8px;">Structure : ${structureSafe}</p>
    <p style="margin:0 0 8px;">Email : <a href="mailto:${emailSafe}" style="color:#7c3aed;">${emailSafe}</a></p>
    <p style="margin:0 0 8px;">Téléphone : ${telSafe}</p>
    <p style="margin:0 0 8px;">Montant attendu : ${f.prixEmail} par virement</p>
    <p style="margin:12px 0 0;font-size:12px;color:#6b7280;">Le RIB et le questionnaire ont été envoyés à l'acheteur. La commande figure dans l'espace client (statut en attente). À passer en cours dès réception du virement, livrable ${f.delai} à compter de l'encaissement et des réponses.</p>
  </div>
</body>
</html>`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' }],
        replyTo: { email: emailSafe, name: nomSafe },
        subject: `[Commande virement] ${reference} : ${nomSafe}`,
        htmlContent: htmlCabinet,
      }),
    }).catch(err => console.error('[Diagnostic Commande] Erreur notification cabinet:', err))

    return NextResponse.json({ success: true, reference })

  } catch (error) {
    console.error('[Diagnostic Commande] Erreur inattendue:', error)
    return NextResponse.json({ error: 'Une erreur inattendue est survenue. Veuillez réessayer.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}