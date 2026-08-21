// app/api/compte/documents-partages/init-upload/route.ts
// Premiere etape du depot d'un fichier par le client : genere une URL de depot signee,
// a usage unique, vers laquelle le navigateur envoie le fichier DIRECTEMENT (le fichier
// ne transite jamais par cette route ni par aucune fonction Vercel).
// Necessaire car les fonctions serverless Vercel refusent toute requete de plus de 4,5 Mo,
// une limite d'infrastructure non contournable en code : un depot classique (fichier dans
// le corps de la requete) echouerait donc au-dela de 4,5 Mo, bien avant la limite metier
// de 20 Mo. Le bucket Supabase applique lui-meme une limite de taille et de type en filet
// de securite supplementaire (voir migration-echanges-documents.sql).

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { validerDeclaration, slugifyNomFichier } from '@/lib/documents-partages'

const BUCKET = 'documents-partages'

async function getUserIdFromRequest(request: Request): Promise<string | null> {
  const authHeader = request.headers.get('authorization') || ''
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
  if (!token) return null
  const { data, error } = await supabaseAdmin.auth.getUser(token)
  if (error || !data || !data.user) return null
  return data.user.id
}

export async function POST(request: Request) {
  const userId = await getUserIdFromRequest(request)
  if (!userId) return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })

  const { nomFichier, typeMime, tailleOctets } = await request.json().catch(() => ({}))
  if (!nomFichier || !typeMime || !tailleOctets) {
    return NextResponse.json({ error: 'Informations de fichier manquantes.' }, { status: 400 })
  }

  const validation = validerDeclaration(typeMime, tailleOctets)
  if (!validation.ok) return NextResponse.json({ error: validation.erreur }, { status: 400 })

  const nomStockage = `${Date.now()}-${slugifyNomFichier(nomFichier)}.${validation.extension}`
  const chemin = `${userId}/${nomStockage}`

  const { data, error } = await supabaseAdmin.storage.from(BUCKET).createSignedUploadUrl(chemin)
  if (error || !data) return NextResponse.json({ error: "Impossible de préparer le dépôt." }, { status: 500 })

  return NextResponse.json({ signedUrl: data.signedUrl, token: data.token, chemin })
}
