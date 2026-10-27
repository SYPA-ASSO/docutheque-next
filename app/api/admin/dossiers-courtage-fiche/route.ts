// app/api/admin/dossiers-courtage-fiche/route.ts
// Envoie au client la fiche d'information precontractuelle par e-mail (support durable)
// et consigne la date d'envoi au journal.
// Prealables : noms des entreprises d'assurance renseignes (article L.521-2, II, 1°, b)
// et information sur la remuneration du dossier renseignee.
// Regles : zero tiret long dans le contenu visible.

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import {
  emailFichePrecontractuelle,
  envoyerEmailBrevo,
  listePartenaires,
  siteUrl,
  texteEnListe,
} from '@/lib/courtage'

export async function POST(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  try {
    const { id } = await request.json().catch(() => ({ id: null }))
    if (!id) return NextResponse.json({ error: 'Identifiant manquant.' }, { status: 400 })

    const { data: dossier } = await supabaseAdmin
      .from('dossiers_courtage')
      .select('*, users(prenom, nom, email)')
      .eq('id', id)
      .maybeSingle()
    if (!dossier) return NextResponse.json({ error: 'Dossier introuvable.' }, { status: 404 })

    const client = Array.isArray(dossier.users) ? dossier.users[0] : dossier.users
    if (!client || !client.email) return NextResponse.json({ error: 'Client introuvable.' }, { status: 404 })

    const partenaires = listePartenaires()
    const consultes = texteEnListe(dossier.assureurs_consultes)
    // Liste affichee : les partenaires du cabinet, sinon a defaut les assureurs consultes
    const listeAffichee = partenaires.length > 0 ? partenaires : consultes
    if (listeAffichee.length === 0) {
      return NextResponse.json({ error: "Renseignez les noms des entreprises d'assurance (lib/courtage-partenaires.ts ou champ « assureurs consultés ») avant d'envoyer la fiche." }, { status: 400 })
    }
    const remuneration = (dossier.remuneration_note || '').trim()
    if (!remuneration) {
      return NextResponse.json({ error: 'Renseignez la note de rémunération du dossier avant d’envoyer la fiche.' }, { status: 400 })
    }

    const mail = emailFichePrecontractuelle({
      prenom: client.prenom || 'Madame, Monsieur',
      reference: dossier.reference,
      objet: dossier.objet,
      partenaires: listeAffichee,
      consultes: partenaires.length > 0 ? consultes : [],
      remunerationNote: remuneration,
      origin: siteUrl(request.headers.get('origin')),
    })

    const envoye = await envoyerEmailBrevo({
      to: { email: client.email, name: `${client.prenom} ${client.nom}`.trim() },
      subject: mail.subject,
      html: mail.html,
    })
    if (!envoye) return NextResponse.json({ error: "L'envoi de l'e-mail a échoué." }, { status: 502 })

    const maintenant = new Date().toISOString()
    await supabaseAdmin
      .from('dossiers_courtage')
      .update({ fiche_envoyee_le: maintenant, updated_at: maintenant })
      .eq('id', id)

    await supabaseAdmin.from('dossiers_courtage_evenements').insert({
      dossier_id: id,
      user_id: dossier.user_id,
      type: 'fiche',
      libelle: "Fiche d'information précontractuelle envoyée par e-mail",
      visible_client: true,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[dossiers-courtage-fiche] Erreur:', error)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
