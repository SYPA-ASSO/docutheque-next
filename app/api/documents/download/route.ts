import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import JSZip from 'jszip'

// Nettoie un nom de fichier pour une entree de zip (retire les caracteres interdits).
function nomFichierSafe(s: string): string {
  return (s || 'document').replace(/[\/\\:*?"<>|]+/g, ' ').replace(/\s+/g, ' ').trim() || 'document'
}

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
          sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
          to: [{ email: emailAdmin, name: 'François Cholez' }],
          subject: `Téléchargement · ${document.nom}`,
          htmlContent: `<p>${profile?.prenom} ${profile?.nom} (${profile?.email}) a téléchargé <strong>${document.nom}</strong>.</p>`,
        }),
      })
    }

    // Pack : on assemble un zip a la volee a partir des modeles contenus (champ "contient").
    // Aucun fichier n'est stocke pour le pack : le zip reflete toujours les modeles a jour.
    if (document.type === 'pack') {
      const slugs: string[] = Array.isArray(document.contient) ? document.contient.filter(Boolean) : []
      if (slugs.length === 0) return NextResponse.json({ error: 'Ce pack ne contient aucun document.' }, { status: 404 })

      const { data: contenus } = await supabaseAdmin
        .from('documents')
        .select('nom, slug, blob_url')
        .in('slug', slugs)
        .eq('actif', true)

      const zip = new JSZip()
      const utilises = new Set<string>()
      let ajoutes = 0

      for (const d of contenus || []) {
        if (!d.blob_url) continue
        try {
          const r = await fetch(d.blob_url)
          if (!r.ok) continue
          const donnees = await r.arrayBuffer()
          const ext = ((d.blob_url || '').split('?')[0].split('/').pop() || '').split('.').pop()?.toLowerCase() || 'docx'
          let nomEntree = `${nomFichierSafe(d.nom)}.${ext}`
          if (utilises.has(nomEntree)) {
            const pt = nomEntree.lastIndexOf('.')
            const base = nomEntree.slice(0, pt)
            const e = nomEntree.slice(pt)
            let i = 2
            while (utilises.has(`${base} (${i})${e}`)) i++
            nomEntree = `${base} (${i})${e}`
          }
          utilises.add(nomEntree)
          zip.file(nomEntree, donnees)
          ajoutes++
        } catch {
          // on ignore un modele dont le fichier est indisponible
        }
      }

      if (ajoutes === 0) return NextResponse.json({ error: 'Aucun fichier disponible dans ce pack.' }, { status: 404 })

      const contenuZip = await zip.generateAsync({ type: 'arraybuffer' })
      const nomZip = `${document.slug || 'pack'}.zip`
      return new NextResponse(contenuZip, {
        status: 200,
        headers: {
          'Content-Type': 'application/zip',
          'Content-Disposition': `attachment; filename="${nomZip}"`,
          'X-File-Ext': 'zip',
          'Cache-Control': 'private, no-store',
        },
      })
    }

    if (!document.blob_url) return NextResponse.json({ error: 'Aucun fichier associé.' }, { status: 404 })

    // Telechargement prive : on sert le fichier directement, l'URL Blob publique n'est jamais exposee.
    const ext = ((document.blob_url || '').split('?')[0].split('/').pop() || '').split('.').pop()?.toLowerCase() || 'docx'
    const fileRes = await fetch(document.blob_url)
    if (!fileRes.ok || !fileRes.body) return NextResponse.json({ error: 'Fichier introuvable.' }, { status: 404 })
    return new NextResponse(fileRes.body, {
      status: 200,
      headers: {
        'Content-Type': fileRes.headers.get('content-type') || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="document.${ext}"`,
        'X-File-Ext': ext,
        'Cache-Control': 'private, no-store',
      },
    })
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}