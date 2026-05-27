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
    const nom = formData.get('nom') as string
    const description = formData.get('description') as string
    const categories = JSON.parse(formData.get('categories') as string || '[]')
    const profils = JSON.parse(formData.get('profils') as string || '[]')
    const acces_gratuit = formData.get('acces_gratuit') === 'true'
    const acces_optimal = formData.get('acces_optimal') === 'true'
    const acces_payant = formData.get('acces_payant') === 'true'
    const prix = formData.get('prix') ? parseFloat(formData.get('prix') as string) : null
    const ordre = formData.get('ordre') ? parseInt(formData.get('ordre') as string) : 0

    if (!file || !nom) {
      return NextResponse.json({ error: 'Fichier et nom requis.' }, { status: 400 })
    }

    // Upload sur Vercel Blob
    const blob = await put(`documents/${Date.now()}-${file.name}`, file, {
      access: 'public',
      contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    })

    // Enregistrer dans Supabase
    const { data, error } = await supabaseAdmin
      .from('documents')
      .insert({
        nom, description, blob_url: blob.url,
        categories, profils_autorises: profils,
        acces_gratuit, acces_optimal, acces_payant,
        prix_unitaire: prix, ordre, actif: true,
      })
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true, document: data })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}