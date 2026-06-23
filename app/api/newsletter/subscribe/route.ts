import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    // Lecture defensive du corps de la requete
    let payload: { email?: string; prenom?: string; nom?: string }
    try {
      payload = await request.json()
    } catch {
      return NextResponse.json({ error: 'Requête invalide.' }, { status: 400 })
    }
    const { email, prenom, nom } = payload

    // Validation des champs
    if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }
    if (!prenom?.trim()) {
      return NextResponse.json({ error: 'Prénom obligatoire.' }, { status: 400 })
    }
    if (!nom?.trim()) {
      return NextResponse.json({ error: 'Nom obligatoire.' }, { status: 400 })
    }

    // Verification de la configuration serveur (les deux variables sont requises)
    const apiKey = process.env.BREVO_API_KEY
    const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '', 10)

    const manquant: string[] = []
    if (!apiKey) manquant.push('BREVO_API_KEY')
    if (!Number.isInteger(listId) || listId <= 0) manquant.push('BREVO_NEWSLETTER_LIST_ID')
    if (manquant.length > 0) {
      // Le detail precis va dans les logs serveur (Vercel), pas vers l'utilisateur
      console.error(`Newsletter: configuration manquante ou invalide -> ${manquant.join(', ')}`)
      return NextResponse.json(
        { error: 'La newsletter est momentanément indisponible. Réessayez plus tard.' },
        { status: 503 }
      )
    }

    // Appel Brevo, protege contre les erreurs reseau
    let res: Response
    try {
      res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey as string,
        },
        body: JSON.stringify({
          email: email.trim(),
          attributes: { PRENOM: prenom.trim(), NOM: nom.trim() },
          listIds: [listId],
          updateEnabled: true,
        }),
      })
    } catch (e) {
      console.error('Newsletter: erreur réseau Brevo:', e)
      return NextResponse.json(
        { error: "Service d'inscription indisponible. Réessayez plus tard." },
        { status: 502 }
      )
    }

    // Succes : creation (201) ou mise a jour (204)
    if (res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true })
    }

    // Lecture defensive de la reponse d'erreur (corps possiblement vide ou non JSON)
    let data: { code?: string; message?: string } = {}
    try {
      data = await res.json()
    } catch {
      /* pas de corps exploitable */
    }

    // Contact deja inscrit : on considere l'operation comme reussie
    if (data.code === 'duplicate_parameter') {
      return NextResponse.json({ success: true })
    }

    // Cle API invalide ou non autorisee : probleme de configuration, pas de l'utilisateur
    if (res.status === 401) {
      console.error('Newsletter: clé Brevo invalide ou non autorisée:', data)
      return NextResponse.json(
        { error: 'La newsletter est momentanément indisponible. Réessayez plus tard.' },
        { status: 503 }
      )
    }

    console.error(`Newsletter: erreur Brevo (${res.status}):`, data)
    return NextResponse.json(
      { error: "Erreur lors de l'inscription. Veuillez réessayer." },
      { status: 502 }
    )
  } catch (error) {
    console.error('Newsletter subscribe error:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
