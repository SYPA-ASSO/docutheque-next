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
    return NextResponse.json({ success: true, facture: data })

  } catch (error) {
    console.error('Facture upload error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}