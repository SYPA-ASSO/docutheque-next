import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const SITE = 'https://cholez-pagotto.fr'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const token = url.searchParams.get('token') || ''
  const page = (etat: string) => NextResponse.redirect(new URL(`/newsletter/confirmee?etat=${etat}`, SITE))

  if (!token) return page('invalide')

  const { data: row } = await supabaseAdmin
    .from('newsletter_consentements')
    .select('id, email, prenom, nom, statut')
    .eq('token', token)
    .maybeSingle()

  if (!row) return page('invalide')
  if (row.statut === 'confirme') return page('deja')

  const apiKey = process.env.BREVO_API_KEY
  const listId = parseInt(process.env.BREVO_NEWSLETTER_LIST_ID || '', 10)
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    console.error('Newsletter confirmer: configuration Brevo manquante')
    return page('erreur')
  }

  // Ajout effectif a la liste Brevo, uniquement apres confirmation
  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        email: row.email,
        attributes: { PRENOM: row.prenom, NOM: row.nom },
        listIds: [listId],
        updateEnabled: true,
      }),
    })
    if (!(res.status === 201 || res.status === 204)) {
      const data = await res.json().catch(() => ({}))
      if (data.code !== 'duplicate_parameter') {
        console.error('Newsletter confirmer: echec ajout Brevo:', data)
        return page('erreur')
      }
    }
  } catch (e) {
    console.error('Newsletter confirmer: erreur reseau Brevo:', e)
    return page('erreur')
  }

  // Horodatage de la confirmation dans le registre (preuve de consentement)
  await supabaseAdmin
    .from('newsletter_consentements')
    .update({ statut: 'confirme', confirme_at: new Date().toISOString() })
    .eq('id', row.id)

  return page('ok')
}
