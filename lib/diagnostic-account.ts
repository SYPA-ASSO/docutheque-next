// lib/diagnostic-account.ts
// Rattache une commande de diagnostic RGPD a un espace client.
// A la commande : on retrouve le compte par users.email (source de verite), sinon on le cree
// (sans mot de passe) et on prepare un lien de definition de mot de passe (recuperation Supabase)
// a envoyer par email. On enregistre ensuite la commande dans la table dossiers_rgpd.
// Tout passe par le client service-role (supabaseAdmin), qui contourne la RLS.
// Regles : zero tiret long dans le contenu visible, NBSP avant euro, Notre juriste singulier.

import { supabaseAdmin } from '@/lib/supabase-admin'

export type CompteDiagnostic = {
  userId: string | null
  created: boolean
  accessLink: string | null
}

// Separe un nom complet en prenom + nom (premier mot = prenom, reste = nom).
export function splitFullName(fullName: string): { prenom: string; nom: string } {
  const propre = (fullName || '').trim().replace(/\s+/g, ' ')
  if (!propre) return { prenom: 'Client', nom: '' }
  const parts = propre.split(' ')
  if (parts.length === 1) return { prenom: parts[0], nom: '' }
  return { prenom: parts[0], nom: parts.slice(1).join(' ') }
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

// Retrouve un compte par email, sinon le cree. Retourne l'identifiant, l'etat de creation
// et, si le compte vient d'etre cree, un lien de definition de mot de passe a envoyer par email.
export async function findOrCreateDiagnosticUser(params: {
  email: string
  fullName: string
  telephone?: string | null
  structure?: string | null
  origin: string
}): Promise<CompteDiagnostic> {
  const email = (params.email || '').trim().toLowerCase()
  if (!email) return { userId: null, created: false, accessLink: null }

  // 1. Compte deja existant ? (la table users est alimentee a chaque inscription)
  const { data: existant } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('email', email)
    .maybeSingle()
  if (existant && existant.id) {
    return { userId: existant.id, created: false, accessLink: null }
  }

  // 2. Creation du compte Auth (sans mot de passe : defini ensuite via le lien de recuperation)
  let userId: string | null = null
  let created = false
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
      created = false
    } else {
      throw authError
    }
  } else {
    userId = authData.user.id
    created = true
  }

  // 3. Profil dans la table users (upsert pour couvrir le cas limite ci-dessus)
  const { prenom, nom } = splitFullName(params.fullName)
  const { error: profilError } = await supabaseAdmin
    .from('users')
    .upsert(
      {
        id: userId,
        email,
        prenom,
        nom,
        type: 'pro',
        telephone: params.telephone || null,
        nom_structure: params.structure || null,
        newsletter: false,
        abonnement_actif: false,
        role: 'user',
      },
      { onConflict: 'id' }
    )
  if (profilError) throw profilError

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
      console.error('[diagnostic-account] generateLink recovery a echoue :', e)
    }
  }

  return { userId, created, accessLink }
}

// Verifie si une commande carte a deja ete enregistree (idempotence cote serveur).
export async function dossierExistsForSession(stripeSessionId: string): Promise<boolean> {
  const { data } = await supabaseAdmin
    .from('dossiers_rgpd')
    .select('id')
    .eq('stripe_session_id', stripeSessionId)
    .maybeSingle()
  return Boolean(data && data.id)
}

// Cree la ligne de commande dans dossiers_rgpd.
export async function createDossierRgpd(params: {
  userId: string
  forfaitId: 'essentiel' | 'standard'
  montantEuros: number
  mode: 'carte' | 'virement'
  reference?: string | null
  stripeSessionId?: string | null
  statut: 'en_attente' | 'en_cours' | 'livre'
}): Promise<void> {
  const { error } = await supabaseAdmin.from('dossiers_rgpd').insert({
    user_id: params.userId,
    forfait: params.forfaitId,
    montant: params.montantEuros,
    mode_paiement: params.mode,
    reference: params.reference || null,
    stripe_session_id: params.stripeSessionId || null,
    statut: params.statut,
  })
  if (error) throw error
}

// Bloc HTML d'acces a l'espace client, insere dans l'email acheteur.
// accessLink non nul : compte cree, invitation a definir le mot de passe.
// accessLink nul : compte deja existant (ou rattachement non realise), lien vers la connexion.
export function espaceClientEmailBlock(accessLink: string | null, origin: string): string {
  if (accessLink) {
    return `
    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:14px 16px;margin:18px 0;">
      <p style="margin:0 0 8px;font-size:13px;color:#1e3a5f;font-weight:700;">Votre espace client a ete cree</p>
      <p style="margin:0 0 12px;font-size:13px;color:#374151;line-height:1.6;">
        Definissez votre mot de passe pour suivre l'avancement de votre commande et telecharger votre rapport des qu'il sera disponible.
      </p>
      <a href="${accessLink}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;padding:10px 20px;border-radius:7px;">
        Definir mon mot de passe
      </a>
      <p style="margin:10px 0 0;font-size:11px;color:#6b7280;line-height:1.6;">
        Lien valable un temps limite. S'il a expire, utilisez la fonction mot de passe oublie depuis la page de connexion.
      </p>
    </div>`
  }
  return `
    <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:14px 16px;margin:18px 0;">
      <p style="margin:0;font-size:13px;color:#374151;line-height:1.6;">
        Retrouvez le suivi de votre commande dans votre
        <a href="${origin}/connexion" style="color:#1a4fba;text-decoration:none;font-weight:600;">espace client</a>.
      </p>
    </div>`
}