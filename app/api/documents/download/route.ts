import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const documentId = searchParams.get('id')
    if (!documentId) return NextResponse.json({ error: 'Document non spécifié.' }, { status: 400 })

    const authHeader = request.headers.get('authorization')
    if (!authHeader) return NextResponse.json({ error: 'Non authentifié.' }, { status: 401 })

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
    if (authError || !user) return NextResponse.json({ error: 'Session invalide.' }, { status: 401 })

    const { data: document } = await supabaseAdmin
      .from('documents').select('*').eq('id', documentId).eq('actif', true).single()
    if (!document) return NextResponse.json({ error: 'Document introuvable.' }, { status: 404 })

    const { data: profile } = await supabaseAdmin
      .from('users').select('abonnement_actif, type, prenom, nom, email').eq('id', user.id).single()

    let autorise = false
    if (document.acces_gratuit) autorise = true
    if (!autorise && document.acces_optimal && profile?.abonnement_actif) autorise = true
    if (!autorise && document.acces_payant) {
      const { data: achats } = await supabaseAdmin
        .from('achats_documents').select('id').eq('user_id', user.id).eq('document_id', documentId).eq('statut', 'paye').limit(1)
      autorise = !!(achats && achats.length > 0)
    }

    if (!autorise) return NextResponse.json({ error: 'Accès non autorisé.', code: 'UNAUTHORIZED' }, { status: 403 })

    // Logger le téléchargement
    await supabaseAdmin.from('downloads').insert({
      user_id: user.id,
      document_id: documentId,
      document_nom: document.nom,
    })

    // Notification François si activée
    const [{ data: settingEmail }, { data: settingNotif }] = await Promise.all([
      supabaseAdmin.from('settings').select('valeur').eq('id', 'email_admin').single(),
      supabaseAdmin.from('settings').select('valeur').eq('id', 'notif_download').single(),
    ])

    if (settingNotif?.valeur === 'true') {
      const emailAdmin = settingEmail?.valeur || 'contact@cholez-pagotto.fr'
      await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'api-key': process.env.BREVO_API_KEY! },
        body: JSON.stringify({
          sender: { name: 'Docuthèque', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: emailAdmin, name: 'François Cholez' }],
          subject: `Téléchargement · ${document.nom}`,
          htmlContent: `<p>${profile?.prenom} ${profile?.nom} (${profile?.email}) a téléchargé <strong>${document.nom}</strong>.</p>`,
        }),
      })
    }

    return NextResponse.json({ url: document.blob_url, nom: document.nom })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}