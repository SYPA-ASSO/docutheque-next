import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const type = searchParams.get('type')

  if (code) {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    await supabase.auth.exchangeCodeForSession(code)
  }

  // Flux recovery : rediriger vers la page de saisie du nouveau mot de passe
  if (type === 'recovery') {
    return NextResponse.redirect(`${origin}/nouveau-mot-de-passe`)
  }

  // Flux standard (inscription, connexion) : espace client
  return NextResponse.redirect(`${origin}/espace-client`)
}