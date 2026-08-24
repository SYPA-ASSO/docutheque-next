// app/api/admin/envoyer-email-client/route.ts
// Envoi d'un message libre a un client precis, depuis le back-office : pour les cas
// ou aucun modele automatique ne convient (suivi de dossier specifique, demande de
// piece complementaire, explication propre a une situation...). Le corps du message
// est ecrit integralement par le cabinet a chaque envoi ; ce n'est pas un modele a
// completer, mais un simple compositeur qui habille le message aux couleurs du site.
// Regles : zero tiret long dans le contenu visible, notre juriste singulier.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { userId, sujet, corps } = await request.json().catch(() => ({}))
  if (!userId || !sujet || !corps) {
    return NextResponse.json({ error: 'Destinataire, objet et message sont obligatoires.' }, { status: 400 })
  }

  const { data: client } = await supabaseAdmin
    .from('users')
    .select('email, prenom, nom')
    .eq('id', userId)
    .maybeSingle()
  if (!client) return NextResponse.json({ error: 'Client introuvable.' }, { status: 404 })

  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json({ error: "L'envoi d'email n'est pas configuré." }, { status: 500 })
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://cholez-pagotto.fr'

  // Echappement HTML minimal du texte libre, avant preservation des sauts de ligne
  // par white-space: pre-line (comme pour les reponses aux questions juridiques).
  const corpsEchappe = String(corps)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  const html = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#eef1f6;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(15,45,110,0.08);">

      <!-- EN-TETE -->
      <tr>
        <td style="background:#ffffff;padding:28px 36px;border-bottom:1px solid #e5e7eb;">
          <img src="https://cholez-pagotto.fr/logo-cholez-pagotto-transparent.svg" alt="Cabinet Cholez-Pagotto" height="38" style="display:block;height:38px;width:auto;margin-bottom:16px;">
          <h1 style="color:#0f2d6e;margin:0;font-size:18px;font-weight:600;line-height:1.4;">${sujet}</h1>
        </td>
      </tr>

      <!-- CORPS -->
      <tr>
        <td style="padding:36px;">
          <p style="color:#374151;font-size:14.5px;line-height:1.8;white-space:pre-line;margin:0;">${corpsEchappe}</p>

          <div style="text-align:center;margin:32px 0 8px;">
            <a href="${site}/espace-client?onglet=echanges" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:13.5px;font-weight:600;padding:13px 30px;border-radius:8px;">
              Accéder à mes documents
            </a>
          </div>
        </td>
      </tr>

      <!-- SIGNATURE -->
      <tr>
        <td style="padding:0 36px 32px;">
          <div style="border-top:1px solid #eef1f6;padding-top:24px;">
            <p style="color:#374151;font-size:13.5px;line-height:1.7;margin:0 0 16px;">Cordialement,</p>
            <img src="https://cholez-pagotto.fr/logo-cholez-pagotto-transparent.svg" alt="Cabinet Cholez-Pagotto" height="30" style="display:block;height:30px;width:auto;margin-bottom:12px;">
            <p style="color:#0f2d6e;font-size:13.5px;font-weight:700;line-height:1.6;margin:0;">François CHOLEZ</p>
            <p style="color:#6b7280;font-size:12px;line-height:1.6;margin:2px 0 14px;">Juriste · Formaliste · Conseil en assurances et réassurances</p>
            <p style="color:#6b7280;font-size:12px;line-height:1.8;margin:0;">
              Tél. (+33) 03 74 47 40 55 &nbsp;·&nbsp; Mobile (+33) 07 55 61 66 88<br>
              <a href="mailto:francois@cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">francois@cholez-pagotto.fr</a><br>
              Nos sites institutionnels :
              <a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a> &nbsp;|&nbsp;
              <a href="https://deviline-courtage.fr" style="color:#1a4fba;text-decoration:none;">deviline-courtage.fr</a> &nbsp;|&nbsp;
              <a href="https://paie-et-dsn.fr" style="color:#1a4fba;text-decoration:none;">paie-et-dsn.fr</a>
            </p>
          </div>
        </td>
      </tr>

      <!-- PIED DE PAGE -->
      <tr>
        <td style="background:#f8fafc;padding:18px 36px;border-top:1px solid #eef1f6;text-align:center;">
          <p style="color:#9ca3af;font-size:11px;line-height:1.7;margin:0;">Ceci est un message automatique d&apos;information.</p>
        </td>
      </tr>

    </table>
  </div>
</body>
</html>`

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { accept: 'application/json', 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
      to: [{ email: client.email, name: `${client.prenom} ${client.nom}` }],
      bcc: [{ email: 'contact@cholez-pagotto.fr' }],
      subject: sujet,
      htmlContent: html,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    console.error('[envoyer-email-client] Echec envoi Brevo:', err)
    return NextResponse.json({ error: "L'envoi de l'email a échoué." }, { status: 502 })
  }

  // Historique : consigne le message envoye, pour retrouver le suivi d'un dossier.
  // Non bloquant pour l'utilisateur : l'email est deja parti, un echec ici ne doit pas
  // le lui faire croire en erreur.
  const { error: historiqueError } = await supabaseAdmin.from('emails_clients').insert({
    user_id: userId,
    sujet,
    corps,
  })
  if (historiqueError) {
    console.error('[envoyer-email-client] Echec enregistrement historique:', historiqueError)
  }

  return NextResponse.json({ success: true })
}
