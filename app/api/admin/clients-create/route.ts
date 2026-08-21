// app/api/admin/clients-create/route.ts
// Creation manuelle d'un compte client depuis le back-office, pour les cas ou le client
// n'a pas encore fait la demarche d'inscription lui-meme (contact telephonique, email...).
// Meme logique que l'auto-inscription (app/api/inscription), mais initiee par le cabinet :
// le compte est cree sans mot de passe, avec l'email deja confirme (la verification se
// fait de facto en cliquant sur le lien recu), et un lien de definition de mot de passe
// est envoye par Brevo pour que le client active son acces lui-meme.
// Regles : zero tiret long dans le contenu visible, notre juriste singulier.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { email, prenom, nom, type, telephone, ville, nom_structure, siret, rna } = body

    if (!email || !prenom || !nom) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    const typeCompte = type === 'professionnel' ? 'professionnel' : 'particulier'

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // Compte cree directement confirme : la verification se fait par le clic sur le lien
    // envoye ci-dessous, indispensable de toute facon pour definir un mot de passe.
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      email_confirm: true,
    })

    if (authError) {
      if (authError.message.toLowerCase().includes('registered')) {
        return NextResponse.json({ error: 'Cette adresse email est déjà utilisée.' }, { status: 409 })
      }
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    const { error: profileError } = await supabaseAdmin
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        prenom,
        nom,
        type: typeCompte,
        telephone: telephone || null,
        ville: ville || null,
        nom_structure: typeCompte === 'particulier' ? null : (nom_structure || null),
        siret: typeCompte === 'particulier' ? null : (siret || null),
        rna: typeCompte === 'particulier' ? null : (rna || null),
        newsletter: false,
        abonnement_actif: false,
        role: 'user',
      })

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 500 })
    }

    // Lien de definition de mot de passe (recuperation), pour que le client active son acces.
    let actionLink: string | null = null
    try {
      const { data: linkData } = await supabaseAdmin.auth.admin.generateLink({
        type: 'recovery',
        email,
        options: { redirectTo: `${origin}/nouveau-mot-de-passe` },
      })
      actionLink = (linkData && linkData.properties && linkData.properties.action_link) || null
    } catch (linkErr) {
      console.error('[clients-create] generateLink a echoue:', linkErr)
    }

    if (actionLink && process.env.BREVO_API_KEY) {
      const html = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Votre espace client est prêt</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Cabinet CHOLEZ PAGOTTO</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${prenom},</p>
    <p>Un espace client a été créé pour vous par le Cabinet CHOLEZ PAGOTTO. Pour y accéder, définissez votre mot de passe en cliquant sur le bouton ci-dessous.</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${actionLink}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;">
        Définir mon mot de passe
      </a>
    </div>
    <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;font-size:13px;color:#1e3a5f;line-height:1.6;">
      Ce lien est valable un temps limité. S'il a expiré, utilisez la fonction mot de passe oublié depuis la page de connexion.
    </p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      <a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
  </div>
</body>
</html>`

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { accept: 'application/json', 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email, name: `${prenom} ${nom}` }],
          subject: 'Votre espace client est prêt',
          htmlContent: html,
        }),
      }).catch((err) => console.error('[clients-create] Erreur email Brevo:', err))
    } else if (!actionLink) {
      console.error('[clients-create] Lien de definition de mot de passe indisponible, aucun email envoye')
    }

    return NextResponse.json({ success: true, userId: authData.user.id, emailEnvoye: Boolean(actionLink) })
  } catch (error) {
    console.error('[clients-create] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
