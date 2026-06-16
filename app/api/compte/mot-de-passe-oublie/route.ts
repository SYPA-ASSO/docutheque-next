import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// app/api/compte/mot-de-passe-oublie/route.ts
// Reinitialisation de mot de passe : genere cote serveur un lien de recuperation Supabase
// (admin.generateLink, qui NE declenche PAS l'email integre de Supabase) et l'envoie par Brevo,
// en francais et aux couleurs du cabinet, comme tous les autres emails du site.
// Remplace l'email Supabase par defaut (anglais, expediteur supabase.io).
// Anti-enumeration : la reponse renvoyee est toujours la meme, que le compte existe ou non,
// afin de ne jamais reveler si une adresse est inscrite.
// Regles : zero tiret long dans le contenu visible, Notre juriste singulier.

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const website = typeof body.website === 'string' ? body.website : ''

    // Reponse generique commune : ne revele jamais l'existence d'un compte.
    const reponseGenerique = NextResponse.json({
      success: true,
      message: "Si un compte existe pour cette adresse, un email de réinitialisation vient d'être envoyé.",
    })

    // 1. Honeypot anti-spam
    if (website && website.length > 0) return reponseGenerique

    // 2. Validation du format de l'email (le format invalide ne revele pas l'existence d'un compte)
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!email || email.length > 254 || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    // 3. Cle Brevo (erreur de configuration : independante de l'email, donc pas de fuite d'information)
    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey) {
      console.error('[Mot de passe oublie] BREVO_API_KEY manquante')
      return NextResponse.json({ error: 'Service momentanément indisponible. Veuillez réessayer plus tard.' }, { status: 500 })
    }

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // 4. Generer le lien de recuperation (sans declencher l'email Supabase).
    //    Si le compte n'existe pas, generateLink renvoie une erreur : on repond la reponse generique.
    let actionLink: string | null = null
    try {
      const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink({
        type: 'recovery',
        email,
        options: { redirectTo: `${origin}/nouveau-mot-de-passe` },
      })
      if (error) return reponseGenerique
      actionLink = (linkData && linkData.properties && linkData.properties.action_link) || null
    } catch (e) {
      console.error('[Mot de passe oublie] generateLink recovery a echoue :', e)
      return reponseGenerique
    }

    if (!actionLink) return reponseGenerique

    // 5. Email cabinet, en francais, via Brevo
    const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Réinitialisation de votre mot de passe</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Cabinet CHOLEZ PAGOTTO</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour,</p>
    <p>Vous avez demandé la réinitialisation du mot de passe de votre espace client. Cliquez sur le bouton ci-dessous pour en choisir un nouveau.</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${actionLink}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;">
        Réinitialiser mon mot de passe
      </a>
    </div>
    <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;font-size:13px;color:#1e3a5f;line-height:1.6;">
      Ce lien est valable un temps limité. Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet email : votre mot de passe actuel reste inchangé.
    </p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      <a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
    <p style="color:#9ca3af;font-size:11px;line-height:1.6;">
      Cet email vous est adressé car une réinitialisation de mot de passe a été demandée pour votre espace client sur cholez-pagotto.fr. Si ce n'était pas vous, aucune action n'est requise.
    </p>
  </div>
</body>
</html>`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email }],
        subject: 'Réinitialisation de votre mot de passe',
        htmlContent: html,
      }),
    }).catch(err => console.error('[Mot de passe oublie] Erreur email Brevo :', err))

    return reponseGenerique

  } catch (error) {
    console.error('[Mot de passe oublie] Erreur inattendue :', error)
    return NextResponse.json({ error: 'Une erreur est survenue. Veuillez réessayer.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}