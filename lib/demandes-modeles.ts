// lib/demandes-modeles.ts
// E-mails des demandes de modeles de documents (accuse de reception au client, alerte au cabinet,
// reponse au client). Module SERVEUR uniquement : ne jamais l'importer dans une page affichee
// dans le navigateur (utiliser lib/demandes-modeles-statuts.ts pour cela).
// Regles : zero tiret long dans le contenu visible.

import { envoyerEmailBrevo, escapeHtml, siteUrl } from '@/lib/courtage'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { formatDateFr, type StatutDemandeModele } from '@/lib/demandes-modeles-statuts'

function versHtml(texte: string): string {
  return escapeHtml(texte).replace(/\n/g, '<br>')
}

function habillage(opts: { titre: string; corpsHtml: string; ctaUrl?: string; ctaLabel?: string; signature?: boolean }): string {
  const cta = opts.ctaUrl && opts.ctaLabel
    ? `<div style="text-align:center;margin:28px 0 8px;">
         <a href="${opts.ctaUrl}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:13.5px;font-weight:600;padding:13px 30px;border-radius:8px;">${escapeHtml(opts.ctaLabel)}</a>
       </div>`
    : ''
  const signature = opts.signature === false ? '' : `
      <tr>
        <td style="padding:0 36px 32px;">
          <div style="border-top:1px solid #eef1f6;padding-top:24px;">
            <p style="color:#374151;font-size:13.5px;line-height:1.7;margin:0 0 12px;">Cordialement,</p>
            <p style="color:#0f2d6e;font-size:13.5px;font-weight:700;line-height:1.6;margin:0;">François CHOLEZ</p>
            <p style="color:#0f2d6e;font-size:12.5px;font-weight:600;line-height:1.6;margin:2px 0 0;">CBT CHOLEZ PAGOTTO</p>
            <p style="color:#6b7280;font-size:12px;line-height:1.8;margin:2px 0 0;">cholez-pagotto.fr</p>
          </div>
        </td>
      </tr>`
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#eef1f6;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(15,45,110,0.08);">
      <tr>
        <td style="padding:28px 36px;border-bottom:1px solid #e5e7eb;">
          <h1 style="color:#0f2d6e;margin:0;font-size:18px;font-weight:600;line-height:1.4;">${escapeHtml(opts.titre)}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 36px;color:#374151;font-size:14.5px;line-height:1.8;">
          ${opts.corpsHtml}
          ${cta}
        </td>
      </tr>${signature}
    </table>
  </div>
</body>
</html>`
}

export function emailAccuseDemande(params: { prenom: string; typeDocument: string; origin?: string | null }): { subject: string; html: string } {
  const base = siteUrl(params.origin)
  const corps = `
    <p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>
    <p style="margin:0 0 12px;">Votre demande de modèle a bien été enregistrée : <strong>${escapeHtml(params.typeDocument)}</strong>.</p>
    <p style="margin:0;">Le cabinet vérifie s'il dispose d'un modèle adapté. Selon le modèle, il est gratuit, inclus dans l'abonnement Optimal ou payable à l'unité : le prix vous est indiqué avant tout paiement. Vous recevrez un e-mail dès que la réponse du cabinet sera disponible.</p>`
  return {
    subject: 'Votre demande de modèle a bien été reçue',
    html: habillage({ titre: 'Demande de modèle enregistrée', corpsHtml: corps, ctaUrl: `${base}/espace-client?onglet=documents`, ctaLabel: 'Suivre ma demande' }),
  }
}

export function emailAlerteDemande(params: {
  clientNom: string
  clientEmail: string
  typeDocument: string
  contexte?: string | null
  dateSouhaitee?: string | null
  origin?: string | null
}): { subject: string; html: string } {
  const base = siteUrl(params.origin)
  const contexte = params.contexte && params.contexte.trim()
    ? `<p style="margin:12px 0 0;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;">${versHtml(params.contexte.trim())}</p>`
    : ''
  const date = params.dateSouhaitee ? `<p style="margin:8px 0 0;"><strong>Souhaité pour le :</strong> ${escapeHtml(formatDateFr(params.dateSouhaitee))}</p>` : ''
  const corps = `
    <p style="margin:0 0 8px;"><strong>Client :</strong> ${escapeHtml(params.clientNom)} (${escapeHtml(params.clientEmail)})</p>
    <p style="margin:0;"><strong>Modèle demandé :</strong> ${escapeHtml(params.typeDocument)}</p>
    ${date}
    ${contexte}`
  return {
    subject: `Nouvelle demande de modèle : ${params.typeDocument}`,
    html: habillage({ titre: 'Nouvelle demande de modèle', corpsHtml: corps, ctaUrl: `${base}/admin/demandes-modeles`, ctaLabel: 'Voir la demande', signature: false }),
  }
}

export function emailReponseDemande(params: {
  prenom: string
  typeDocument: string
  statut: StatutDemandeModele
  message?: string | null
  origin?: string | null
  // true si le modele provient de la bibliotheque (telechargeable depuis « Vos documents deja obtenus »)
  avecDocument?: boolean
}): { subject: string; html: string } {
  const base = siteUrl(params.origin)
  const message = params.message && params.message.trim()
    ? `<p style="margin:12px 0 0;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;">${versHtml(params.message.trim())}</p>`
    : ''
  if (params.statut === 'livree') {
    const ou = params.avecDocument
      ? "dans votre espace client, onglet « Demander un modèle », rubrique « Vos documents déjà obtenus »"
      : "dans votre espace client, onglet « Échanges de documents »"
    const corps = `
      <p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>
      <p style="margin:0 0 12px;">Le modèle que vous avez demandé (<strong>${escapeHtml(params.typeDocument)}</strong>) est à votre disposition ${ou}.</p>
      ${message}`
    return {
      subject: 'Votre modèle est disponible',
      html: habillage({
        titre: 'Votre modèle est disponible',
        corpsHtml: corps,
        ctaUrl: params.avecDocument ? `${base}/espace-client?onglet=documents` : `${base}/espace-client?onglet=echanges`,
        ctaLabel: params.avecDocument ? 'Télécharger mon modèle' : 'Ouvrir mes échanges de documents',
      }),
    }
  }
  const corps = `
    <p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>
    <p style="margin:0 0 12px;">Voici la suite donnée à votre demande de modèle (<strong>${escapeHtml(params.typeDocument)}</strong>).</p>
    ${message}`
  return {
    subject: 'Réponse à votre demande de modèle',
    html: habillage({ titre: 'Réponse à votre demande de modèle', corpsHtml: corps, ctaUrl: `${base}/espace-client?onglet=documents`, ctaLabel: 'Voir ma demande' }),
  }
}

// Le cabinet dispose d'un modele payant : le client est invite a le regler depuis son espace.
export function emailModeleAPayer(params: {
  prenom: string
  typeDocument: string
  documentNom: string
  prix: number
  inclusOptimal: boolean
  message?: string | null
  origin?: string | null
}): { subject: string; html: string } {
  const base = siteUrl(params.origin)
  const prix = `${params.prix.toFixed(2).replace('.', ',')}\u00a0€`
  const message = params.message && params.message.trim()
    ? `<p style="margin:12px 0 0;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;">${versHtml(params.message.trim())}</p>`
    : ''
  const optimal = params.inclusOptimal
    ? `<p style="margin:12px 0 0;">Ce modèle est aussi inclus dans l'abonnement Optimal.</p>`
    : ''
  const corps = `
    <p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>
    <p style="margin:0 0 12px;">Le cabinet dispose d'un modèle correspondant à votre demande (<strong>${escapeHtml(params.typeDocument)}</strong>) : <strong>${escapeHtml(params.documentNom)}</strong>.</p>
    <p style="margin:0;">Ce modèle est proposé au prix de <strong>${prix}</strong>. Vous pouvez le régler par carte bancaire ou par virement depuis votre espace client, onglet « Demander un modèle ». Il reste ensuite téléchargeable à tout moment.</p>
    ${optimal}
    ${message}`
  return {
    subject: 'Un modèle est disponible pour votre demande',
    html: habillage({ titre: 'Un modèle est disponible pour votre demande', corpsHtml: corps, ctaUrl: `${base}/espace-client?onglet=documents`, ctaLabel: 'Voir le modèle et le régler' }),
  }
}

// Fait passer en « Modele transmis » les demandes « En attente de paiement » dont le client a
// depuis regle le modele (carte ou virement valide), ou est devenu abonne Optimal alors que le
// modele est inclus. Appele a chaque lecture : evite de modifier le webhook de paiement.
export async function reconcilierDemandesModeles(userId?: string): Promise<void> {
  try {
    let requete = supabaseAdmin
      .from('demandes_modeles')
      .select('id, user_id, document_id')
      .eq('statut', 'a_payer')
      .not('document_id', 'is', null)
    if (userId) requete = requete.eq('user_id', userId)
    const { data: demandes } = await requete
    if (!demandes || demandes.length === 0) return

    const userIds = Array.from(new Set(demandes.map(d => d.user_id as string)))
    const docIds = Array.from(new Set(demandes.map(d => d.document_id as string)))

    const [{ data: achats }, { data: users }, { data: docs }] = await Promise.all([
      supabaseAdmin.from('achats_documents').select('user_id, document_id').eq('statut', 'paye').in('user_id', userIds).in('document_id', docIds),
      supabaseAdmin.from('users').select('id, abonnement_actif').in('id', userIds),
      supabaseAdmin.from('documents').select('id, acces_gratuit, acces_optimal').in('id', docIds),
    ])
    const achetes = new Set((achats || []).map(a => `${a.user_id}|${a.document_id}`))
    const abonnes = new Set((users || []).filter(u => u.abonnement_actif).map(u => u.id as string))
    const inclus = new Set((docs || []).filter(d => d.acces_optimal).map(d => d.id as string))
    const gratuits = new Set((docs || []).filter(d => d.acces_gratuit).map(d => d.id as string))

    const aClore = demandes
      .filter(d => achetes.has(`${d.user_id}|${d.document_id}`) || (abonnes.has(d.user_id) && inclus.has(d.document_id)) || gratuits.has(d.document_id))
      .map(d => d.id as string)
    if (aClore.length === 0) return
    const maintenant = new Date().toISOString()
    await supabaseAdmin
      .from('demandes_modeles')
      .update({ statut: 'livree', livree_le: maintenant, updated_at: maintenant })
      .in('id', aClore)
  } catch (error) {
    console.error('[demandes-modeles] Reconciliation impossible:', error)
  }
}

export { envoyerEmailBrevo }
