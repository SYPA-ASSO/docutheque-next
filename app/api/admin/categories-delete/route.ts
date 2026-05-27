import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  try {
    const adminPassword = request.headers.get('x-admin-password')
    if (adminPassword !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
    }

    const { id, nom } = await request.json()
    if (!id || !nom) {
      return NextResponse.json({ error: 'ID et nom requis.' }, { status: 400 })
    }

    // Retirer la catégorie de tous les documents qui l'utilisent
    const { data: docsAvecCat } = await supabaseAdmin
      .from('documents')
      .select('id, categories')
      .contains('categories', [nom])

    if (docsAvecCat && docsAvecCat.length > 0) {
      for (const doc of docsAvecCat) {
        const nouvellesCategories = (doc.categories || []).filter((c: string) => c !== nom)
        await supabaseAdmin
          .from('documents')
          .update({ categories: nouvellesCategories })
          .eq('id', doc.id)
      }
    }

    // Supprimer la catégorie
    const { error } = await supabaseAdmin
      .from('categories')
      .delete()
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, docsModifies: docsAvecCat?.length || 0 })

  } catch (err) {
    console.error('categories-delete error:', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}