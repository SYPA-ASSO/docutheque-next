import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }

    const { questionId, reponse, userId, email } = await request.json()
    if (!questionId || !reponse) {
      return NextResponse.json({ error: 'Données manquantes.' }, { status: 400 })
    }

    const { error } = await supabaseAdmin
      .from('questions')
      .update({ reponse, statut: 'repondu', repondu_at: new Date().toISOString() })
      .eq('id', questionId)

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    const { data: user } = await supabaseAdmin
      .from('users').select('prenom, nom').eq('id', userId).single()

    // Récupérer l'email admin depuis settings
    const { data: settingEmail } = await supabaseAdmin
      .from('settings').select('valeur').eq('id', 'email_admin').single()
    const emailAdmin = settingEmail?.valeur || 'contact@cholez-pagotto.fr'

    if (email) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': process.env.BREVO_API_KEY! },
        body: JSON.stringify({
          sender: { name: 'Cabinet Cholez-Pagotto', email: emailAdmin },
          to: [{ email, name: user ? `${user.prenom} ${user.nom}` : 'Client' }],
          subject: 'Votre question juridique a reçu une réponse',
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #0f2d6e; padding: 24px; text-align: center;">
                <h1 style="color: white; font-size: 18px; margin: 0;">Réponse à votre question</h1>
              </div>
              <div style="padding: 24px; background: #f8fafc; border: 1px solid #e5e7eb;">
                <p style="color: #374151; font-size: 14px;">Bonjour${user ? ` ${user.prenom}` : ''},</p>
                <p style="color: #374151; font-size: 14px;">Notre juriste a répondu à votre question juridique.</p>
                <div style="background: white; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; margin: 16px 0;">
                  <p style="color: #15803d; font-size: 12px; font-weight: bold; margin: 0 0 8px;">Réponse du juriste</p>
                  <p style="color: #374151; font-size: 14px; margin: 0; line-height: 1.7; white-space: pre-line;">${reponse}</p>
                </div>
                <div style="text-align: center; margin: 24px 0;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL}/espace-client" style="background: #0f2d6e; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                    Consulter mon espace client
                  </a>
                </div>
                <p style="color: #6b7280; font-size: 12px; text-align: center;">Cabinet Cholez-Pagotto · Juriste formaliste · Conseil en assurances</p>
              </div>
            </div>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('questions-repondre error:', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}