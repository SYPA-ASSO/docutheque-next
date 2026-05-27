import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      userId, email, prenom, nom,
      nom_structure, siret, rue_pro, cp_pro, ville_pro, email_pro,
    } = body

    if (!userId || !nom_structure || !siret) {
      return NextResponse.json({ error: 'Données manquantes.' }, { status: 400 })
    }

    // Stocker les infos pro dans Supabase (champs existants)
    await supabaseAdmin
      .from('users')
      .update({
        nom_structure,
        siret,
        rue: rue_pro || undefined,
        code_postal: cp_pro || undefined,
        ville: ville_pro || undefined,
      })
      .eq('id', userId)

    // Envoyer email de notification à François via Brevo
    const lienValidation = `${process.env.NEXT_PUBLIC_SITE_URL}/api/migration-valider?userId=${userId}`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' }],
        subject: `Demande de migration compte Pro — ${prenom} ${nom}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #0f2d6e; padding: 24px; text-align: center;">
              <h1 style="color: white; font-size: 18px; margin: 0;">Demande de migration compte</h1>
            </div>
            <div style="padding: 24px; background: #f8fafc; border: 1px solid #e5e7eb;">
              <p style="color: #374151; font-size: 14px;"><strong>Client :</strong> ${prenom} ${nom}</p>
              <p style="color: #374151; font-size: 14px;"><strong>Email :</strong> ${email}</p>
              <p style="color: #374151; font-size: 14px;"><strong>Email pro :</strong> ${email_pro || 'Non renseigné'}</p>
              <p style="color: #374151; font-size: 14px;"><strong>Structure :</strong> ${nom_structure}</p>
              <p style="color: #374151; font-size: 14px;"><strong>SIRET :</strong> ${siret}</p>
              <p style="color: #374151; font-size: 14px;"><strong>Adresse pro :</strong> ${rue_pro || ''} ${cp_pro || ''} ${ville_pro || ''}</p>
              <div style="margin: 24px 0; text-align: center;">
                <a href="${lienValidation}" style="background: #0f2d6e; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                  ✓ Valider la migration en un clic
                </a>
              </div>
              <p style="color: #9ca3af; font-size: 12px; text-align: center;">
                Ce lien valide le passage du compte en type "professionnel" dans Supabase.
              </p>
            </div>
          </div>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Migration error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}