import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { put } from '@vercel/blob'

function slugify(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80)
}

function arr(fd: FormData, key: string): string[] {
  const v = fd.get(key)
  if (!v) return []
  const s = String(v).trim()
  if (!s) return []
  try {
    const parsed = JSON.parse(s)
    if (Array.isArray(parsed)) return parsed.map((x) => String(x).trim()).filter(Boolean)
  } catch {
    // pas du JSON : liste séparée par des virgules
  }
  return s.split(',').map((x) => x.trim()).filter(Boolean)
}

function jsonArr(fd: FormData, key: string): Record<string, string>[] {
  const v = fd.get(key)
  if (!v) return []
  try {
    const parsed = JSON.parse(String(v))
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File | null
    const replaceId = formData.get('replace_id') as string | null

    // Remplacement du fichier d'une ressource existante : on upload et on renvoie l'URL.
    if (replaceId) {
      if (!file) return NextResponse.json({ error: 'Fichier requis.' }, { status: 400 })
      const blob = await put(`documents/${Date.now()}-${file.name}`, file, {
        access: 'public',
        contentType: file.type || 'application/octet-stream',
      })
      return NextResponse.json({ success: true, document: { blob_url: blob.url } })
    }

    const nom = formData.get('nom') as string
    const type = (formData.get('type') as string) || 'document'
    if (!nom) return NextResponse.json({ error: 'Nom requis.' }, { status: 400 })
    if (type === 'document' && !file) {
      return NextResponse.json({ error: 'Fichier DOCX requis pour un document.' }, { status: 400 })
    }

    let blob_url: string | null = null
    if (file) {
      const blob = await put(`documents/${Date.now()}-${file.name}`, file, {
        access: 'public',
        contentType: file.type || 'application/octet-stream',
      })
      blob_url = blob.url
    }

    const slugInput = ((formData.get('slug') as string) || '').trim()
    const slug = slugInput ? slugify(slugInput) : slugify(nom)

    const insert = {
      nom,
      type,
      slug,
      description: (formData.get('description') as string) || '',
      sous_titre: (formData.get('sous_titre') as string) || null,
      contenu: (formData.get('contenu') as string) || null,
      image_url: (formData.get('image_url') as string) || null,
      blob_url,
      categories: arr(formData, 'categories'),
      profils_autorises: arr(formData, 'profils'),
      acces_gratuit: formData.get('acces_gratuit') === 'true',
      acces_optimal: formData.get('acces_optimal') === 'true',
      acces_payant: formData.get('acces_payant') === 'true',
      masque_catalogue: formData.get('masque_catalogue') === 'true',
      prix_unitaire: formData.get('prix') ? parseFloat(formData.get('prix') as string) : null,
      ordre: formData.get('ordre') ? parseInt(formData.get('ordre') as string) : 0,
      modeles_lies: arr(formData, 'modeles_lies'),
      articles_lies: arr(formData, 'articles_lies'),
      services_lies: arr(formData, 'services_lies'),
      inclus_dans: arr(formData, 'inclus_dans'),
      contient: arr(formData, 'contient'),
      cadre_legal: (formData.get('cadre_legal') as string) || null,
      conseil: (formData.get('conseil') as string) || null,
      date_maj: (formData.get('date_maj') as string) || null,
      definitions: jsonArr(formData, 'definitions'),
      faq: jsonArr(formData, 'faq'),
      actif: true,
    }

    const { data, error } = await supabaseAdmin.from('documents').insert(insert).select().single()
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ success: true, document: data })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
