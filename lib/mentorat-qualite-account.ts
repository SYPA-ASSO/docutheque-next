// lib/mentorat-qualite-account.ts
// Rattache une commande de mentorat consultant qualite a un espace dedie.
// Au paiement : on retrouve le compte par users.email (source de verite), sinon on le cree
// (sans mot de passe) et on prepare un lien de definition de mot de passe (recuperation Supabase)
// a envoyer par email. On active le drapeau acces_mentorat_qualite et on enregistre la commande
// dans la table dossiers_mentorat_qualite.
// Le compte est cloisonne : il donne acces au seul espace /espace-mentorat-qualite,
// jamais a l'espace client classique (redirections croisees cote pages).
// Tout passe par le client service-role (supabaseAdmin), qui contourne la RLS.
// Regles : zero tiret long dans le contenu visible, NBSP avant euro, notre juriste singulier.

import { supabaseAdmin } from '@/lib/supabase-admin'
import { splitFullName } from '@/lib/diagnostic-account'

export type CompteMentorat = {
  userId: string | null
  created: boolean
  accessLink: string | null
}

// Recherche l'identifiant Supabase Auth d'un utilisateur par email (parcours pagine, defensif).
// Utilise seulement dans le cas limite ou un compte Auth existe sans ligne users correspondante.
async function findAuthUserIdByEmail(email: string): Promise<string | null> {
  const cible = email.toLowerCase()
  for (let page = 1; page <= 5; page++) {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({ page, perPage: 200 })
    if (error || !data || !data.users || data.users.length === 0) return null
    const trouve = data.users.find(u => (u.email || '').toLowerCase() === cible)
    if (trouve) return trouve.id
    if (data.users.length < 200) return null
  }
  return null
}

// Retrouve un compte par email, sinon le cree, puis active l'acces mentorat qualite.
// Retourne l'identifiant, l'etat de creation et, si le compte vient d'etre cree,
// un lien de definition de mot de passe a envoyer par email.
export async function findOrCreateMentoratUser(params: {
  email: string
  fullName: string
  structure?: string | null
  origin: string
}): Promise<CompteMentorat> {
  const email = (params.email || '').trim().toLowerCase()
  if (!email) return { userId: null, created: false, accessLink: null }

  // 1. Compte deja existant ? (la table users est alimentee a chaque inscription)
  let userId: string | null = null
  let created = false
  const { data: existant } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('email', email)
    .maybeSingle()
  if (existant && existant.id) {
    userId = existant.id
  } else {
    // 2. Creation du compte Auth (sans mot de passe : defini ensuite via le lien de recuperation)
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      email_confirm: true,
    })
    if (authError) {
      // Cas limite : compte Auth existant sans ligne users. On recupere son id et on le
      // traite comme un compte existant (aucun lien de mot de passe envoye).
      if ((authError.message || '').toLowerCase().includes('registered')) {
        userId = await findAuthUserIdByEmail(email)
        if (!userId) throw new Error('Compte Auth existant introuvable : ' + authError.message)
      } else {
        throw authError
      }
    } else {
      userId = authData.user.id
      created = true
    }
  }

  // 3. Profil dans la table users : upsert avec activation du drapeau mentorat qualite.
  // Pour un compte existant, on n'ecrase pas ses informations : on active seulement le drapeau.
  if (created) {
    const { prenom, nom } = splitFullName(params.fullName)
    const { error: profilError } = await supabaseAdmin
      .from('users')
      .upsert(
        {
          id: userId,
          email,
          prenom,
          nom,
          type: 'professionnel',
          nom_structure: params.structure || null,
          newsletter: false,
          abonnement_actif: false,
          role: 'user',
          acces_mentorat_qualite: true,
        },
        { onConflict: 'id' }
      )
    if (profilError) throw profilError
  } else {
    const { error: flagError } = await supabaseAdmin
      .from('users')
      .update({ acces_mentorat_qualite: true })
      .eq('id', userId)
    if (flagError) throw flagError
  }

  // 4. Lien de definition de mot de passe (recuperation) vers la page /nouveau-mot-de-passe
  let accessLink: string | null = null
  if (created) {
    try {
      const { data: linkData } = await supabaseAdmin.auth.admin.generateLink({
        type: 'recovery',
        email,
        options: { redirectTo: `${params.origin}/nouveau-mot-de-passe` },
      })
      accessLink = (linkData && linkData.properties && linkData.properties.action_link) || null
    } catch (e) {
      console.error('[mentorat-qualite-account] generateLink recovery a echoue :', e)
    }
  }

  return { userId, created, accessLink }
}

// Verifie si une commande carte a deja ete enregistree (idempotence cote serveur).
export async function dossierMentoratExistsForSession(stripeSessionId: string): Promise<boolean> {
  const { data } = await supabaseAdmin
    .from('dossiers_mentorat_qualite')
    .select('id')
    .eq('stripe_session_id', stripeSessionId)
    .maybeSingle()
  return Boolean(data && data.id)
}

// Cree la ligne de commande dans dossiers_mentorat_qualite.
export async function createDossierMentorat(params: {
  userId: string
  montantEuros: number | null
  mode: 'carte' | 'virement'
  stripeSessionId?: string | null
  statut: 'en_attente' | 'en_cours' | 'termine'
}): Promise<void> {
  const { error } = await supabaseAdmin.from('dossiers_mentorat_qualite').insert({
    user_id: params.userId,
    montant: params.montantEuros,
    mode_paiement: params.mode,
    stripe_session_id: params.stripeSessionId || null,
    statut: params.statut,
  })
  if (error) throw error
}

// Email de bienvenue dans l'espace mentorat qualité, aux couleurs du cabinet.
// accessLink non nul : compte cree, invitation a definir le mot de passe.
// accessLink nul : compte deja existant, lien vers la connexion.
export async function envoyerBienvenueMentorat(
  email: string,
  prenom: string,
  accessLink: string | null,
  origin: string,
  montant: string
): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) { console.error('[mentorat-qualite-account] BREVO_API_KEY manquante, email de bienvenue non envoye'); return }
  const salutation = prenom ? `Bonjour ${prenom},` : 'Bonjour,'
  const boutonAcces = accessLink
    ? `
      <p style="margin:0 0 12px;font-size:13px;color:#374151;line-height:1.6;">
        Votre espace dédié a été créé. Définissez votre mot de passe pour y accéder et retrouver le programme de votre accompagnement ainsi que votre boîte à outils documentaire.
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${accessLink}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:13px 30px;border-radius:50px;">Définir mon mot de passe</a>
      </div>
      <p style="margin:0 0 18px;font-size:11px;color:#6b7280;line-height:1.6;">
        Lien valable un temps limité. S'il a expiré, utilisez la fonction mot de passe oublié depuis la page de connexion.
      </p>`
    : `
      <div style="text-align:center;margin:24px 0;">
        <a href="${origin}/connexion" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:13px 30px;border-radius:50px;">Accéder à mon espace</a>
      </div>`
  const ligneMontant = montant
    ? `<table style="width:100%;border-top:1px solid #f1f3f7;border-bottom:1px solid #f1f3f7;margin:0 0 22px;"><tr><td style="padding:8px 0;color:#6b7280;font-size:13px;">Montant réglé</td><td style="padding:8px 0;text-align:right;font-weight:700;color:#0f2d6e;font-size:13px;">${montant}</td></tr></table>`
    : ''
  const html = `<!DOCTYPE html>
<html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#374151;">
  <div style="max-width:560px;margin:0 auto;padding:24px;">
    <div style="background:#0f2d6e;border-radius:12px 12px 0 0;padding:28px;">
      <p style="margin:0;color:#c8a84b;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">Cabinet Cholez-Pagotto</p>
      <h1 style="margin:8px 0 0;color:#ffffff;font-size:19px;">Bienvenue dans votre accompagnement</h1>
    </div>
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 12px 12px;padding:28px;">
      <p style="margin:0 0 14px;font-size:14px;line-height:1.7;">${salutation}</p>
      <p style="margin:0 0 18px;font-size:14px;line-height:1.7;">Votre paiement a bien été reçu. Votre accompagnement au développement de votre offre de conseil en démarche qualité démarre dès maintenant.</p>
      ${ligneMontant}
      ${boutonAcces}
      <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;">Ce message vous confirme votre commande. Pour toute question, répondez simplement à cet email ou utilisez le formulaire de contact du site.</p>
    </div>
    <p style="text-align:center;color:#9ca3af;font-size:11px;margin:16px 0 0;">Cabinet Cholez-Pagotto &middot; 12 rue d'Olima &middot; 88000 &Eacute;pinal &middot; cholez-pagotto.fr</p>
  </div>
</body></html>`
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { accept: 'application/json', 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet Cholez-Pagotto', email: 'contact@cholez-pagotto.fr' },
        to: [{ email, name: prenom || email }],
        subject: 'Votre mentorat consultant qualité est actif',
        htmlContent: html,
      }),
    })
    if (!res.ok) { const err = await res.json().catch(() => ({})); console.error('[mentorat-qualite-account] echec email de bienvenue:', err) }
  } catch (e) {
    console.error('[mentorat-qualite-account] erreur reseau email de bienvenue:', e)
  }
}
