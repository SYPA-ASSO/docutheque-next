import { NextRequest, NextResponse } from 'next/server'
import { SUJETS_AUTORISES } from '@/lib/contact-sujets'


function sanitize(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .trim()
    .slice(0, 2000)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, email, telephone, sujet, message, honeypot, rgpd } = body

    // ─── 1. HONEYPOT ───────────────────────────────────────────────────────────
    // Champ invisible rempli uniquement par les bots → rejet silencieux
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ success: true })
    }

    // ─── 2. VALIDATION RGPD ────────────────────────────────────────────────────
    if (!rgpd) {
      return NextResponse.json(
        { error: 'Vous devez accepter la politique de confidentialité.' },
        { status: 400 }
      )
    }

    // ─── 3. VALIDATION CHAMPS OBLIGATOIRES ─────────────────────────────────────
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    // ─── 4. VALIDATION FORMAT EMAIL ────────────────────────────────────────────
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    // ─── 5. VALIDATION SUJET (whitelist) ───────────────────────────────────────
    if (!SUJETS_AUTORISES.includes(sujet)) {
      return NextResponse.json(
        { error: 'Sujet invalide.' },
        { status: 400 }
      )
    }

    // ─── 6. VALIDATION LONGUEURS ───────────────────────────────────────────────
    if (nom.length > 100 || email.length > 254 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Un ou plusieurs champs dépassent la longueur autorisée.' },
        { status: 400 }
      )
    }

    // ─── 7. SANITISATION ───────────────────────────────────────────────────────
    const nomSafe = sanitize(nom)
    const emailSafe = sanitize(email)
    const sujetSafe = sanitize(sujet)
    const messageSafe = sanitize(message).replace(/\n/g, '<br>')
    const telSafe = telephone ? sanitize(telephone).slice(0, 20) : null

    // ─── 8. VÉRIFICATION CLÉ API ───────────────────────────────────────────────
    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey) {
      console.error('[Contact] BREVO_API_KEY manquante')
      return NextResponse.json(
        { error: 'Erreur de configuration serveur. Veuillez réessayer ultérieurement.' },
        { status: 500 }
      )
    }

    // ─── 9. CONSTRUCTION EMAIL ─────────────────────────────────────────────────
    const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; color: #374151; font-size: 14px; margin: 0; padding: 0; background: #f8fafc; }
  .wrapper { max-width: 600px; margin: 0 auto; }
  .header { background-color: #0f2d6e; padding: 24px 28px; }
  .header-top { margin-bottom: 12px; }
  .logo-text { color: white; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; opacity: 0.75; }
  .header h2 { color: white; font-size: 17px; font-weight: 700; margin: 0 0 6px; }
  .header p { color: #93c5fd; font-size: 12px; margin: 0; }
  .body { background: #f8fafc; padding: 24px 28px; border: 1px solid #e5e7eb; border-top: none; }
  table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb; }
  td { padding: 12px 16px; border-bottom: 1px solid #f3f4f6; vertical-align: top; }
  td:last-child { border-bottom: none; }
  td:first-child { color: #6b7280; font-size: 11px; font-weight: 700; width: 140px; text-transform: uppercase; letter-spacing: 0.06em; background: #f8fafc; }
  .message-label { font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.06em; margin: 20px 0 8px; }
  .message-box { background: white; border-radius: 8px; padding: 16px; border: 1px solid #e5e7eb; line-height: 1.75; }
  .footer { background: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; padding: 14px 28px; text-align: center; }
  .footer p { color: #9ca3af; font-size: 11px; margin: 0; }
</style></head>
<body>
<div class="wrapper">
  <div class="header">
    <div class="header-top">
      <span class="logo-text">Cabinet CHOLEZ PAGOTTO</span>
    </div>
    <h2>Nouveau message depuis le formulaire de contact</h2>
    <p>Reçu le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })} à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</p>
  </div>
  <div class="body">
    <table>
      <tr><td>Nom</td><td><strong>${nomSafe}</strong></td></tr>
      <tr><td>Email</td><td><a href="mailto:${emailSafe}" style="color:#1a4fba;text-decoration:none;">${emailSafe}</a></td></tr>
      ${telSafe ? `<tr><td>Téléphone</td><td>${telSafe}</td></tr>` : ''}
      <tr><td>Sujet</td><td><strong>${sujetSafe}</strong></td></tr>
    </table>
    <p class="message-label">Message</p>
    <div class="message-box">${messageSafe}</div>
  </div>
  <div class="footer">
    <p>Cabinet CHOLEZ PAGOTTO - <a href="https://cholez-pagotto.fr" style="color:#9ca3af;text-decoration:none;">cholez-pagotto.fr</a></p>
  </div>
</div>
</body>
</html>`

    // ─── 10. ENVOI BREVO ───────────────────────────────────────────────────────
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Cabinet CHOLEZ PAGOTTO',
          email: 'contact@cholez-pagotto.fr',
        },
        to: [
          { email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' },
        ],
        replyTo: { email: emailSafe, name: nomSafe },
        subject: `[Cabinet Cholez-Pagotto] ${sujetSafe} · ${nomSafe}`,
        htmlContent,
      }),
    })

    if (!brevoResponse.ok) {
      const err = await brevoResponse.json().catch(() => ({}))
      console.error('[Contact] Erreur Brevo:', err)
      return NextResponse.json(
        { error: 'L\'envoi a échoué. Veuillez réessayer ou nous contacter par email.' },
        { status: 500 }
      )
    }

    // ─── 11. EMAIL DE CONFIRMATION AU CLIENT ───────────────────────────────────
    const confirmHtml = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:#0f2d6e;padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:white;margin:0;font-size:16px;">Votre message a bien été reçu</h2>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${nomSafe},</p>
    <p>Nous avons bien reçu votre message concernant : <strong>${sujetSafe}</strong>.</p>
    <p>Nous vous répondrons dans les meilleurs délais (24 à 48h ouvrées pour les questions juridiques).</p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>François CHOLEZ</strong><br>
      Juriste · Formaliste · Conseil en assurances<br><br>
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      12 rue d'Olima · 88000 Épinal<br>
      <a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
    <p style="margin:14px 0 0;font-size:12px;color:#6b7280;line-height:1.7;">
      Formaliste membre du CRFF (Conseil Représentatif des Formalistes de France)<br>
      Courtier en assurances et réassurances<br>
      Immatriculé à l'ORIAS n°26003943 · <a href="https://www.orias.fr" target="_blank" style="color:#6b7280;">www.orias.fr</a><br>
      Sous contrôle de l'ACPR · 4 place de Budapest, 75436 Paris Cedex 09
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
    <p style="color:#9ca3af;font-size:11px;line-height:1.6;">
      Les informations échangées dans le cadre de cette correspondance sont confidentielles et destinées exclusivement à leur destinataire.<br>
      Cet email est automatique. Pour toute nouvelle demande, utilisez le <a href="https://cholez-pagotto.fr/contact" style="color:#9ca3af;">formulaire de contact</a>.
    </p>
  </div>
</body>
</html>`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: {
          name: 'Cabinet CHOLEZ PAGOTTO',
          email: 'contact@cholez-pagotto.fr',
        },
        to: [{ email: emailSafe, name: nomSafe }],
        subject: 'Votre message a bien été reçu · Cabinet Cholez-Pagotto',
        htmlContent: confirmHtml,
      }),
    }).catch(err => console.error('[Contact] Erreur confirmation:', err))

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('[Contact] Erreur inattendue:', error)
    return NextResponse.json(
      { error: 'Une erreur inattendue est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}

// Bloquer toutes les autres méthodes HTTP
export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}