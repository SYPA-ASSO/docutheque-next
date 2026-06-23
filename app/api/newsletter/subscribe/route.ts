import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const SITE = 'https://cholez-pagotto.fr'

function emailConfirmationHtml(prenom: string, lien: string): string {
  return `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#374151;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#0f2d6e;border-radius:12px 12px 0 0;padding:28px 28px 22px;">
      <p style="margin:0;color:#c8a84b;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Cabinet Cholez-Pagotto</p>
      <h1 style="margin:8px 0 0;color:#ffffff;font-size:19px;">Confirmez votre inscription</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:28px;">
      <p style="margin:0 0 14px;font-size:14px;line-height:1.7;">Bonjour ${prenom},</p>
      <p style="margin:0 0 20px;font-size:14px;line-height:1.7;">Vous venez de demander votre inscription &agrave; la newsletter du cabinet. Pour la valider et confirmer votre consentement, cliquez sur le bouton ci-dessous.</p>
      <div style="text-align:center;margin:26px 0;">
        <a href="${lien}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:13px 30px;border-radius:50px;">Confirmer mon inscription</a>
      </div>
      <p style="margin:0 0 6px;font-size:12px;line-height:1.7;color:#6b7280;">Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur&nbsp;:</p>
      <p style="margin:0 0 20px;font-size:12px;line-height:1.6;word-break:break-all;"><a href="${lien}" style="color:#1a4fba;">${lien}</a></p>
      <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;">Si vous n'&ecirc;tes pas &agrave; l'origine de cette demande, ignorez simplement cet email&nbsp;: aucune inscription ne sera enregistr&eacute;e sans votre confirmation.</p>
    </div>
    <p style="text-align:center;color:#9ca3af;font-size:11px;margin:16px 0 0;">Cabinet Cholez-Pagotto &middot; 12 rue d'Olima &middot; 88000 &Eacute;pinal &middot; cholez-pagotto.fr</p>
  </div>
</body></html>`
}

export async function POST(request: Request) {
  try {
    let body: { email?: string; prenom?: string; nom?: string; source?: string }
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
    }

    const email = String(body.email || '').trim().toLowerCase()
    const prenom = String(body.prenom || '').trim()
    const nom = String(body.nom || '').trim()
    const source = String(body.source || 'site').trim().slice(0, 60)

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }
    if (!prenom) return NextResponse.json({ error: 'Prénom obligatoire.' }, { status: 400 })
    if (!nom) return NextResponse.json({ error: 'Nom obligatoire.' }, { status: 400 })

    // Configuration requise (la cle sert a l'email de confirmation, la liste a l'ajout final)
    const apiKey = process.env.BREVO_API_KEY
    const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '', 10)
    const manquant: string[] = []
    if (!apiKey) manquant.push('BREVO_API_KEY')
    if (!Number.isInteger(listId) || listId <= 0) manquant.push('BREVO_NEWSLETTER_LIST_ID')
    if (manquant.length > 0) {
      console.error(`Newsletter: configuration manquante ou invalide -> ${manquant.join(', ')}`)
      return NextResponse.json({ error: 'La newsletter est momentanément indisponible. Réessayez plus tard.' }, { status: 503 })
    }

    // Deja inscrit et confirme : succes neutre, sans renvoyer d'email
    const { data: existant } = await supabaseAdmin
      .from('newsletter_consentements')
      .select('id, statut')
      .eq('email', email)
      .maybeSingle()

    if (existant && existant.statut === 'confirme') {
      return NextResponse.json({ success: true, deja: true })
    }

    // Creer ou rafraichir la demande en attente avec un nouveau jeton
    const token = crypto.randomUUID()
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null
    const userAgent = request.headers.get('user-agent')?.slice(0, 400) || null

    if (existant) {
      const { error } = await supabaseAdmin
        .from('newsletter_consentements')
        .update({ prenom, nom, source, token, statut: 'en_attente', demande_at: new Date().toISOString(), ip, user_agent: userAgent })
        .eq('id', existant.id)
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    } else {
      const { error } = await supabaseAdmin
        .from('newsletter_consentements')
        .insert({ email, prenom, nom, source, token, ip, user_agent: userAgent })
      if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Envoi de l'email de confirmation (etape 2 du double opt-in)
    const lien = `${SITE}/api/newsletter/confirmer?token=${token}`
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { accept: 'application/json', 'api-key': apiKey as string, 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Cabinet Cholez-Pagotto', email: 'contact@cholez-pagotto.fr' },
          to: [{ email, name: `${prenom} ${nom}` }],
          subject: 'Confirmez votre inscription à la newsletter',
          htmlContent: emailConfirmationHtml(prenom, lien),
        }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        console.error('Newsletter: echec envoi email de confirmation:', err)
        return NextResponse.json({ error: "Envoi de l'email de confirmation impossible. Réessayez plus tard." }, { status: 502 })
      }
    } catch (e) {
      console.error('Newsletter: erreur reseau Brevo (confirmation):', e)
      return NextResponse.json({ error: 'Service indisponible. Réessayez plus tard.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
