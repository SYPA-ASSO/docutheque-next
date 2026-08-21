// app/api/admin/documents-partages-init-upload/route.ts
// Premiere etape du depot d'un fichier par le cabinet a destination d'un client : genere
// une URL de depot signee, vers laquelle le navigateur admin envoie le fichier DIRECTEMENT.
// Meme raison qu'en front-office : les fonctions Vercel refusent toute requete de plus
// de 4,5 Mo, non contournable en code.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { validerDeclaration, slugifyNomFichier } from '@/lib/documents-partages'

const BUCKET = 'documents-partages'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { userId, nomFichier, typeMime, tailleOctets } = await request.json().catch(() => ({}))
  if (!userId || !nomFichier || !typeMime || !tailleOctets) {
    return NextResponse.json({ error: 'Informations manquantes.' }, { status: 400 })
  }

  const validation = validerDeclaration(typeMime, tailleOctets)
  if (!validation.ok) return NextResponse.json({ error: validation.erreur }, { status: 400 })

  const { data: client } = await supabaseAdmin.from('users').select('id').eq('id', userId).maybeSingle()
  if (!client) return NextResponse.json({ error: 'Client introuvable.' }, { status: 404 })

  const nomStockage = `${Date.now()}-${slugifyNomFichier(nomFichier)}.${validation.extension}`
  const chemin = `${userId}/${nomStockage}`

  const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUploadUrl(chemin)
  if (error || !data) return NextResponse.json({ error: "Impossible de préparer le dépôt." }, { status: 500 })

  return NextResponse.json({ signedUrl: data.signedUrl, token: data.token, chemin })
}
