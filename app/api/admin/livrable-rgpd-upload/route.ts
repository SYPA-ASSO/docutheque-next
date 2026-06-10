import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { put } from '@vercel/blob'

// app/api/admin/livrable-rgpd-upload/route.ts
// Depose le rapport de diagnostic RGPD (PDF) sur Vercel Blob, l'attache au dossier et passe le statut a livre.
// Meme pattern que factures-upload. Le client retrouve le rapport dans son espace client.

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const dossierId = formData.get('dossierId') as string
    const userId = formData.get('userId') as string

    if (!file || !dossierId || !userId) {
      return NextResponse.json({ error: 'Fichier, dossierId et userId requis.' }, { status: 400 })
    }

    // Upload PDF sur Vercel Blob
    const blob = await put(`livrables-rgpd/${userId}/${Date.now()}-${file.name}`, file, {
      access: 'public',
      contentType: file.type || 'application/pdf',
    })

    // Attache le livrable et passe le dossier en livre
    const { data, error } = await supabaseAdmin
      .from('dossiers_rgpd')
      .update({ livrable_url: blob.url, statut: 'livre' })
      .eq('id', dossierId)
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true, url: blob.url, dossier: data })

  } catch (error) {
    console.error('[Admin livrable-rgpd-upload] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}