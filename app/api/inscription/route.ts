import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, prenom, nom, type, telephone, rue, code_postal, ville, nom_structure, siret, rna, newsletter } = body

    if (!email || !password || !prenom || !nom) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }

    // Créer l'utilisateur Supabase Auth
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
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
        nom_structure: nom_structure || null,
        siret: siret || null,
        rna: rna || null,
        newsletter: newsletter || false,
        abonnement_actif: false,
      })

    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 500 })
    }

    // Récupérer l'email admin depuis les settings
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

    // Notification à François si activée
    if (notifActive) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          sender: { name: 'Docuthèque · Cabinet Cholez-Pagotto', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: emailAdmin, name: 'François Cholez' }],
          subject: `Nouvelle inscription — ${prenom} ${nom}`,
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
                ${nom_structure ? `<p style="color: #374151; font-size: 14px;"><strong>Structure :</strong> ${nom_structure}</p>` : ''}
                <div style="margin-top: 16px; text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/clients" style="background: #0f2d6e; color: white; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold;">
                    Voir dans l'admin →
                  </a>
                </div>
              </div>
            </div>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true, userId: authData.user.id })
  } catch (error) {
    console.error('Inscription error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}