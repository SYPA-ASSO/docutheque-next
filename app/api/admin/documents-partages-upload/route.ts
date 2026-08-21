// app/api/admin/documents-partages-upload/route.ts
// Confirme, cote cabinet, un depot deja effectue directement vers Supabase Storage (voir
// documents-partages-init-upload/route.ts) et enregistre ses metadonnees a destination
// du client concerne. Le fichier lui-meme n'a jamais transite par cette route.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const BUCKET = 'documents-partages'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const { userId, chemin, nomFichier, tailleOctets, typeMime } = await request.json().catch(() => ({}))
  if (!userId || !chemin || !nomFichier) return NextResponse.json({ error: 'Informations manquantes.' }, { status: 400 })

  if (!chemin.startsWith(`${userId}/`)) {
    return NextResponse.json({ error: 'Chemin de dépôt invalide.' }, { status: 403 })
  }

  const dossier = chemin.split('/')[0]
  const nomObjet = chemin.split('/').slice(1).join('/')
  const { data: contenu } = await supabaseAdmin.storage.from(BUCKET).list(dossier, { search: nomObjet })
  const existe = (contenu || []).some((o) => o.name === nomObjet)
  if (!existe) return NextResponse.json({ error: "Le dépôt du fichier n'a pas abouti." }, { status: 400 })

  const { error: insertError } = await supabaseAdmin.from('documents_partages').insert({
    user_id: userId,
    nom_fichier: nomFichier,
    chemin_storage: chemin,
    taille: tailleOctets || null,
    type_mime: typeMime || null,
    depose_par: 'cabinet',
  })
  if (insertError) return NextResponse.json({ error: insertError.message }, { status: 500 })

  return NextResponse.json({ success: true })
}

