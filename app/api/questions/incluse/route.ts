import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export const runtime = 'nodejs'

// app/api/questions/incluse/route.ts
// Cree la question incluse (gratuite) d'un abonne Optimal : 1 par mois calendaire, non cumulable.
// Verifie cote serveur, a partir du jeton d'authentification, que l'utilisateur est connecte,
// abonne actif, et n'a pas deja utilise sa question incluse du mois en cours. La question est
// creee sans texte ; l'utilisateur le saisit ensuite via la route de soumission habituelle.

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization') || ''
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : ''
    if (!token) {
      return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
    }

    const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token)
    if (userErr || !userData?.user) {
      return NextResponse.json({ error: 'Session invalide.' }, { status: 401 })
    }
    const userId = userData.user.id

    // Verifier l'abonnement actif (la question incluse est reservee aux abonnes Optimal)
    const { data: profil, error: profilErr } = await supabaseAdmin
      .from('users')
      .select('abonnement_actif')
      .eq('id', userId)
      .single()
    if (profilErr || !profil) {
      return NextResponse.json({ error: 'Compte introuvable.' }, { status: 404 })
    }
    if (!profil.abonnement_actif) {
      return NextResponse.json({ error: 'La question incluse est reservee aux abonnes Optimal.' }, { status: 403 })
    }

    // Verifier qu'aucune question incluse n'a deja ete creee durant le mois calendaire en cours
    const maintenant = new Date()
    const debutMois = new Date(Date.UTC(maintenant.getUTCFullYear(), maintenant.getUTCMonth(), 1)).toISOString()
    const debutMoisSuivant = new Date(Date.UTC(maintenant.getUTCFullYear(), maintenant.getUTCMonth() + 1, 1)).toISOString()

    const { data: existantes, error: existErr } = await supabaseAdmin
      .from('questions')
      .select('id')
      .eq('user_id', userId)
      .eq('type', 'incluse')
      .gte('created_at', debutMois)
      .lt('created_at', debutMoisSuivant)

    if (existErr) {
      console.error('[Question incluse] lecture des questions existantes a echoue:', existErr.message)
      return NextResponse.json({ error: 'Une erreur est survenue. Veuillez reessayer.' }, { status: 500 })
    }
    if (existantes && existantes.length > 0) {
      return NextResponse.json({ error: 'Votre question incluse de ce mois a deja ete utilisee.' }, { status: 409 })
    }

    // Creer la question incluse (sans texte ; saisie ensuite par l'utilisateur)
    const { data: nouvelle, error: insertErr } = await supabaseAdmin
      .from('questions')
      .insert({ user_id: userId, question: null, statut: 'en_attente', type: 'incluse' })
      .select('id')
      .single()

    if (insertErr || !nouvelle) {
      console.error('[Question incluse] insertion a echoue:', insertErr?.message)
      return NextResponse.json({ error: 'Une erreur est survenue. Veuillez reessayer.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, questionId: nouvelle.id })
  } catch (error) {
    console.error('[Question incluse] erreur inattendue:', error)
    return NextResponse.json({ error: 'Une erreur est survenue. Veuillez reessayer.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Methode non autorisee.' }, { status: 405 })
}