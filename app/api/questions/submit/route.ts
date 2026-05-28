import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const { questionId, userId, texte } = await request.json()

    if (!questionId || !userId || !texte?.trim()) {
      return NextResponse.json({ error: 'Données manquantes.' }, { status: 400 })
    }

    if (texte.trim().length < 10) {
      return NextResponse.json({ error: 'Veuillez développer votre question (10 caractères minimum).' }, { status: 400 })
    }

    // Vérifier que la question appartient bien à cet utilisateur
    const { data: question, error: fetchError } = await supabaseAdmin
      .from('questions')
      .select('id, type, statut')
      .eq('id', questionId)
      .eq('user_id', userId)
      .single()

    if (fetchError || !question) {
      return NextResponse.json({ error: 'Question introuvable.' }, { status: 404 })
    }

    // Mettre à jour la question
    const { error: updateError } = await supabaseAdmin
      .from('questions')
      .update({ question: texte.trim() })
      .eq('id', questionId)
      .eq('user_id', userId)

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 })
    }

    // Récupérer le profil pour la notification
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('prenom, nom, email, type')
      .eq('id', userId)
      .single()

    // Lire les settings de notification
    const { data: notifData } = await supabaseAdmin
      .from('settings')
      .select('valeur')
      .eq('id', 'notif_inscription')
      .single()

    const { data: emailAdminData } = await supabaseAdmin
      .from('settings')
      .select('valeur')
      .eq('id', 'email_admin')
      .single()

    const emailAdmin = emailAdminData?.valeur || 'contact@cholez-pagotto.fr'
    const notifActive = notifData?.valeur === 'true'

    if (notifActive && user) {
      const typeLabel = question.type === 'unitaire' ? '47 €' : question.type === 'abonne' ? '14,90 €' : 'incluse'

      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          sender: { name: "Docutheque · Cabinet Cholez-Pagotto", email: 'contact@cholez-pagotto.fr' },
          to: [{ email: emailAdmin, name: 'François Cholez' }],
          subject: `Nouvelle question juridique — ${user.prenom} ${user.nom}`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #0f2d6e; padding: 20px; text-align: center;">
                <h1 style="color: white; font-size: 16px; margin: 0;">Nouvelle question juridique</h1>
              </div>
              <div style="padding: 20px; background: #f8fafc; border: 1px solid #e5e7eb;">
                <p style="color: #374151; font-size: 14px;"><strong>Client :</strong> ${user.prenom} ${user.nom}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Email :</strong> ${user.email}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Type de compte :</strong> ${user.type || 'particulier'}</p>
                <p style="color: #374151; font-size: 14px;"><strong>Tarif :</strong> Question ${typeLabel}</p>
                <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-top: 16px;">
                  <p style="color: #0f2d6e; font-size: 13px; font-weight: bold; margin: 0 0 10px;">Question :</p>
                  <p style="color: #374151; font-size: 14px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${texte.trim()}</p>
                </div>
                <div style="margin-top: 20px; text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/questions" style="background: #0f2d6e; color: white; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: bold;">
                    Voir dans l'admin et répondre
                  </a>
                </div>
              </div>
              <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 12px;">
                Délai de réponse contractuel : 24 à 48h ouvrées
              </p>
            </div>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Question submit error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}