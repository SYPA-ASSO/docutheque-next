import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, prenom } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '0')
    if (!listId) {
      console.error('BREVO_NEWSLETTER_LIST_ID non défini')
      return NextResponse.json({ error: 'Configuration newsletter manquante.' }, { status: 500 })
    }

    const body: Record<string, unknown> = {
      email,
      listIds: [listId],
      updateEnabled: true,
    }

    if (prenom) {
      body.attributes = { PRENOM: prenom }
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify(body),
    })

    // 201 = créé, 204 = déjà existant mis à jour — les deux sont des succès
    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true })
    }

    const data = await res.json()

    // Code 300 Brevo = contact déjà dans la liste — traiter comme succès
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true })
    }

    console.error('Brevo error:', data)
    return NextResponse.json({ error: 'Erreur lors de l\'inscription. Veuillez réessayer.' }, { status: 500 })

  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}