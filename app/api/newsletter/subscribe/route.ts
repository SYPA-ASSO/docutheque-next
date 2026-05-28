import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, prenom, nom } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }
    if (!prenom?.trim()) {
      return NextResponse.json({ error: 'Prénom obligatoire.' }, { status: 400 })
    }
    if (!nom?.trim()) {
      return NextResponse.json({ error: 'Nom obligatoire.' }, { status: 400 })
    }

    const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '0')
    if (!listId) {
      console.error('BREVO_NEWSLETTER_LIST_ID non défini')
      return NextResponse.json({ error: 'Configuration newsletter manquante.' }, { status: 500 })
    }

    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: prenom.trim(), NOM: nom.trim() },
        listIds: [listId],
        updateEnabled: true,
      }),
    })

    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true })
    }

    const data = await res.json()

    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true })
    }

    console.error('Brevo error:', data)
    return NextResponse.json({ error: "Erreur lors de l'inscription. Veuillez réessayer." }, { status: 500 })

  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}