import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return new Response('Paramètre manquant.', { status: 400 })
    }

    // Récupérer les infos du client
    const { data: user } = await supabaseAdmin
      .from('users')
      .select('email, prenom, nom')
      .eq('id', userId)
      .single()

    // Valider la migration : passer le type en "professionnel"
    const { error } = await supabaseAdmin
      .from('users')
      .update({ type: 'professionnel' })
      .eq('id', userId)

    if (error) {
      return new Response('Erreur lors de la validation.', { status: 500 })
    }

    // Envoyer email de confirmation au client
    if (user?.email) {
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify({
          sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: user.email, name: `${user.prenom} ${user.nom}` }],
          subject: 'Votre compte Docuthèque a été mis à jour',
          htmlContent: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #0f2d6e; padding: 24px; text-align: center;">
                <h1 style="color: white; font-size: 18px; margin: 0;">Compte mis à jour</h1>
              </div>
              <div style="padding: 24px; background: #f8fafc; border: 1px solid #e5e7eb;">
                <p style="color: #374151; font-size: 14px;">Bonjour ${user.prenom},</p>
                <p style="color: #374151; font-size: 14px;">
                  Votre compte Docuthèque a bien été migré vers un profil <strong>Professionnel</strong>.
                  Vous pouvez désormais souscrire à l'Abonnement Optimal Pro depuis votre espace client.
                </p>
                <div style="margin: 24px 0; text-align: center;">
                  <a href="${process.env.NEXT_PUBLIC_SITE_URL}/espace-client" style="background: #0f2d6e; color: white; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">
                    Accéder à mon espace client
                  </a>
                </div>
                <p style="color: #6b7280; font-size: 12px;">Cabinet Cholez-Pagotto · cholez-pagotto.fr</p>
              </div>
            </div>
          `,
        }),
      })
    }

    // Rediriger vers une page de confirmation
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SITE_URL}/espace-client?migration=success`
    )
  } catch (error) {
    console.error('Migration validation error:', error)
    return new Response('Erreur serveur.', { status: 500 })
  }
}