import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// app/api/inscription/route.ts
// Option A (confirmation d'email obligatoire) : le compte est cree NON confirme (email_confirm: false),
// puis un lien d'activation (lien magique) est genere cote serveur et envoye par Brevo, en francais,
// aux couleurs du cabinet. Cliquer sur le lien confirme l'email et connecte l'utilisateur.
// La connexion par mot de passe reste impossible tant que l'email n'est pas confirme
// (reglage Confirm email active dans Supabase).
// Regles : zero tiret long dans le contenu visible, Notre juriste singulier.

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, prenom, nom, type, telephone, rue, code_postal, ville, nom_structure, siret, rna, newsletter } = body

    if (!email || !password || !prenom || !nom) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://cholez-pagotto.fr'

    // Créer l'utilisateur Supabase Auth, NON confirmé (la confirmation se fait via le lien d'activation)
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: false,
    })

    if (authError) {
      if (authError.message.includes('already registered')) {
        return NextResponse.json({ error: 'Cette adresse email est déjà utilisée.' }, { status: 409 })
      }
      return NextResponse.json({ error: authError.message }, { status: 400 })
    }

    // Créer le profil dans la table users
    const { error: profileError } = await supabaseAdmin
      .from('users')
      .insert({
        id: authData.user.id,
        email,
        prenom,
        nom,
        type: type || 'particulier',
        telephone: telephone || null,
        rue: rue || null,
        code_postal: code_postal || null,
        ville: ville || null,
        // Filet de securite : un compte Particulier ne doit jamais porter de SIRET/RNA,
        // meme si le client envoie une valeur residuelle (bug de formulaire, appel API direct...).
        nom_structure: type === 'particulier' ? null : (nom_structure || null),
        siret: type === 'particulier' ? null : (siret || null),
        rna: type === 'particulier' ? null : (rna || null),
        newsletter: newsletter || false,
        abonnement_actif: false,
        role: 'user',
      })

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 500 })
    }

    // Lien d'activation (lien magique) genere cote serveur, sans declencher l'email Supabase.
    // Cliquer dessus confirme l'email et ouvre l'espace client.
    let actionLink: string | null = null
    try {
      const { data: linkData } = await supabaseAdmin.auth.admin.generateLink({
        type: 'magiclink',
        email,
        options: { redirectTo: `${origin}/espace-client` },
      })
      actionLink = (linkData && linkData.properties && linkData.properties.action_link) || null
    } catch (linkErr) {
      console.error('[Inscription] generateLink activation a echoue:', linkErr)
    }

    // Envoi de l'email d'activation par Brevo (best effort : ne bloque pas la creation du compte).
    // En cas d'echec, l'utilisateur peut activer son compte via la fonction mot de passe oublie.
    if (actionLink && process.env.BREVO_API_KEY) {
      const htmlActivation = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background-color:#0f2d6e;background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Activez votre compte</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Cabinet CHOLEZ PAGOTTO</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${prenom},</p>
    <p>Merci de votre inscription à l'espace client du Cabinet CHOLEZ PAGOTTO. Pour activer votre compte et accéder à votre espace, cliquez sur le bouton ci-dessous.</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${actionLink}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;">
        Activer mon compte
      </a>
    </div>
    <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;font-size:13px;color:#1e3a5f;line-height:1.6;">
      Ce lien est valable un temps limité. Tant que votre compte n'est pas activé, la connexion par mot de passe reste impossible. Si vous n'êtes pas à l'origine de cette inscription, ignorez cet email.
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
        headers: { 'accept': 'application/json', 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
        body: JSON.stringify({
          sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email, name: `${prenom} ${nom}` }],
          subject: 'Activez votre espace client',
          htmlContent: htmlActivation,
        }),
      }).catch(err => console.error('[Inscription] Erreur email activation Brevo:', err))
    } else if (!actionLink) {
      console.error('[Inscription] Lien d activation indisponible, aucun email envoye')
    }

    // Ajout Brevo si consentement newsletter
    if (newsletter) {
      const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '0')
      if (listId) {
        try {
          await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'api-key': process.env.BREVO_API_KEY!,
            },
            body: JSON.stringify({
              email,
              attributes: { PRENOM: prenom, NOM: nom },
              listIds: [listId],
              updateEnabled: true,
            }),
          })
        } catch (brevoError) {
          // Non bloquant : l'inscription utilisateur est déjà faite
          console.error('Brevo inscription error:', brevoError)
        }
      }
    }

    // Notification à François si activée
    const { data: settingData } = await supabaseAdmin
      .from('settings')
      .select('valeur')
      .eq('id', 'email_admin')
      .single()

    const { data: notifData } = await supabaseAdmin
      .from('settings')
      .select('valeur')
      .eq('id', 'notif_inscription')
      .single()

    const emailAdmin = settingData?.valeur || 'contact@cholez-pagotto.fr'
    const notifActive = notifData?.valeur === 'true'

    if (notifActive) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          sender: { name: "Cabinet CHOLEZ PAGOTTO", email: 'contact@cholez-pagotto.fr' },
          to: [{ email: emailAdmin, name: 'François Cholez' }],
          subject: `Nouvelle inscription : ${prenom} ${nom}`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #0f2d6e; padding: 20px; text-align: center;">
                <h1 style="color: white; font-size: 16px; margin: 0;">Nouvelle inscription</h1>
              </div>
              <div style="padding: 20px; background: #f8fafc; border: 1px solid #e5e7eb;">
                <p style="color: #374151; font-size: 14px;"><strong>Nom :</strong> ${prenom} ${nom}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Email :</strong> ${email}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Type :</strong> ${type || 'particulier'}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Ville :</strong> ${ville || '-'}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Newsletter :</strong> ${newsletter ? 'Oui' : 'Non'}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Statut :</strong> en attente d'activation de l'email</p>
                ${nom_structure ? `<p style="color: #374151; font-size: 14px;"><strong>Structure :</strong> ${nom_structure}</p>` : ''}
                <div style="margin-top: 16px; text-align: center;">
                  <a href="${process.env.SITE_URL}/admin/clients" style="background: #0f2d6e; color: white; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold;">
                    Voir dans l'admin →
                  </a>
                </div>
              </div>
            </div>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true, userId: authData.user.id, confirmationRequise: true })
  } catch (error) {
    console.error('Inscription error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}