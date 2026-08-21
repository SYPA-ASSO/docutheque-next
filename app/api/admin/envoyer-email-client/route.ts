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
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">${sujet}</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Cabinet CHOLEZ PAGOTTO</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p style="color:#374151;font-size:14px;line-height:1.7;white-space:pre-line;margin:0 0 20px;">${corpsEchappe}</p>
    <div style="text-align:center;margin:20px 0;">
      <a href="${site}/espace-client" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:12px 26px;border-radius:8px;">
        Accéder à mon espace client
      </a>
    </div>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      <a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
  </div>
</body>
</html>`

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { accept: 'application/json', 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
    body: JSON.stringify({
      sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
      to: [{ email: client.email, name: `${client.prenom} ${client.nom}` }],
      subject: sujet,
      htmlContent: html,
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    console.error('[envoyer-email-client] Echec envoi Brevo:', err)
    return NextResponse.json({ error: "L'envoi de l'email a échoué." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
