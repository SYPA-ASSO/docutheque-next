import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

// Telechargement prive d'une facture.
// Le PDF est recupere cote serveur apres verification de la propriete :
// l'URL Blob publique n'est jamais exposee au navigateur.
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const factureId = searchParams.get('id')
    if (!factureId) return NextResponse.json({ error: 'Facture non spécifiée.' }, { status: 400 })

    const authHeader = request.headers.get('authorization')
    if (!authHeader) return NextResponse.json({ error: 'Non authentifié.' }, { status: 401 })

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
    if (authError || !user) return NextResponse.json({ error: 'Session invalide.' }, { status: 401 })

    const { data: facture } = await supabaseAdmin
      .from('factures')
      .select('user_id, facture_url, created_at')
      .eq('id', factureId)
      .single()
    if (!facture) return NextResponse.json({ error: 'Facture introuvable.' }, { status: 404 })

    // Controle de propriete : seul le titulaire accede a sa facture.
    if (facture.user_id !== user.id) {
      return NextResponse.json({ error: 'Accès non autorisé.' }, { status: 403 })
    }

    const fileRes = await fetch(facture.facture_url)
    if (!fileRes.ok) return NextResponse.json({ error: 'Fichier introuvable.' }, { status: 404 })
    const arrayBuffer = await fileRes.arrayBuffer()

    const dateStr = facture.created_at ? new Date(facture.created_at).toISOString().slice(0, 10) : 'facture'
    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="facture-${dateStr}.pdf"`,
        'Cache-Control': 'private, no-store',
      },
    })
  } catch (error) {
    console.error('Facture download error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
