import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { put } from '@vercel/blob'

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const userId = formData.get('userId') as string
    const montant = formData.get('montant') ? parseFloat(formData.get('montant') as string) : null
    const type = formData.get('type') as string || null

    if (!file || !userId) {
      return NextResponse.json({ error: 'Fichier et userId requis.' }, { status: 400 })
    }

    // Upload PDF sur Vercel Blob
    const blob = await put(`factures/${userId}/${Date.now()}-${file.name}`, file, {
      access: 'public',
      contentType: 'application/pdf',
    })

    // Enregistrer dans Supabase
    const { data, error } = await supabaseAdmin
      .from('factures')
      .insert({ user_id: userId, facture_url: blob.url, montant, type })
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })

    // Notifier le client par email qu'une facture est disponible (best effort).
    try {
      const { data: u } = await supabaseAdmin.from('users').select('email, prenom').eq('id', userId).single()
      if (u?.email && process.env.BREVO_API_KEY) {
        const site = process.env.SITE_URL || 'https://cholez-pagotto.fr'
        const prenom = u.prenom || ''
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'api-key': process.env.BREVO_API_KEY },
          body: JSON.stringify({
            sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
            to: [{ email: u.email, name: prenom }],
            subject: 'Une facture est disponible dans votre espace client',
            htmlContent: `<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#0f2d6e 0%,#1a4fba 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Nouvelle facture disponible</h2>
    <p style="color:#bfdbfe;font-size:12px;margin:6px 0 0;">Cabinet CHOLEZ PAGOTTO</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${prenom},</p>
    <p>Une nouvelle facture vient d'être déposée dans votre espace client. Vous pouvez la consulter et la télécharger à tout moment depuis la rubrique Factures.</p>
    <div style="text-align:center;margin:24px 0;">
      <a href="${site}/espace-client" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 28px;border-radius:8px;">Accéder à mes factures</a>
    </div>
    <p style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px 14px;font-size:13px;color:#1e3a5f;line-height:1.6;">Vos factures restent disponibles dans votre espace client, accessible avec vos identifiants. Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet email.</p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">Cabinet CHOLEZ PAGOTTO<br><a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a></p>
  </div>
</body>`,
          }),
        })
      }
    } catch (e) {
      console.error('Facture email error:', e)
    }

    return NextResponse.json({ success: true, facture: data })

  } catch (error) {
    console.error('Facture upload error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}