// lib/courtage.ts
// Outils communs du parcours courtage : etapes, references, e-mails (Brevo).
// Regles : zero tiret long dans le contenu visible, notre juriste singulier,
// "CBT CHOLEZ PAGOTTO" sans trait d'union.

import { PARTENAIRES_COURTAGE } from '@/lib/courtage-partenaires'

export type EtapeCourtage =
  | 'demande_recue'
  | 'besoins_recueillis'
  | 'consultation'
  | 'proposition'
  | 'conclu'
  | 'sans_suite'

export const ETAPES_COURTAGE: { value: EtapeCourtage; label: string; description: string }[] = [
  { value: 'demande_recue', label: 'Demande reçue', description: "Votre demande est enregistrée et le cabinet l'étudie." },
  { value: 'besoins_recueillis', label: 'Besoins recueillis', description: 'Vos exigences et vos besoins sont consignés par écrit.' },
  { value: 'consultation', label: 'Consultation des assureurs', description: "Le cabinet consulte les entreprises d'assurance et les grossistes partenaires." },
  { value: 'proposition', label: 'Proposition transmise', description: 'Une proposition vous a été transmise, avec les raisons du conseil.' },
  { value: 'conclu', label: 'Souscription réalisée', description: 'Le contrat est souscrit. Vos documents sont à votre disposition.' },
  { value: 'sans_suite', label: 'Sans suite', description: 'Le dossier est clos sans souscription.' },
]

// Etapes du parcours normal (la barre de progression). "sans_suite" est une sortie a part.
export const PARCOURS_COURTAGE: EtapeCourtage[] = ['demande_recue', 'besoins_recueillis', 'consultation', 'proposition', 'conclu']

export const PROFILS_COURTAGE: { value: 'particulier' | 'professionnel' | 'association'; label: string }[] = [
  { value: 'particulier', label: 'Particulier' },
  { value: 'professionnel', label: 'Professionnel' },
  { value: 'association', label: 'Association' },
]

export function labelEtape(valeur: string): string {
  const e = ETAPES_COURTAGE.find(x => x.value === valeur)
  return e ? e.label : valeur
}

export function descriptionEtape(valeur: string): string {
  const e = ETAPES_COURTAGE.find(x => x.value === valeur)
  return e ? e.description : ''
}

export function etapeValide(valeur: unknown): valeur is EtapeCourtage {
  return typeof valeur === 'string' && ETAPES_COURTAGE.some(x => x.value === valeur)
}

export function listePartenaires(): string[] {
  return PARTENAIRES_COURTAGE.map(s => String(s).trim()).filter(Boolean)
}

// Transforme un texte libre (un nom par ligne ou separes par des virgules) en liste propre.
export function texteEnListe(texte: string | null | undefined): string[] {
  if (!texte) return []
  return String(texte)
    .split(/[\n;,]+/)
    .map(s => s.trim())
    .filter(Boolean)
}

export function genererReference(): string {
  const annee = new Date().getFullYear()
  const alea = Math.floor(1000 + Math.random() * 9000)
  return `COUR-${annee}-${alea}`
}

export function escapeHtml(texte: string): string {
  return String(texte)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function versHtml(texte: string): string {
  return escapeHtml(texte).replace(/\n/g, '<br>')
}

export function formatDateHeureParis(iso: string | null | undefined): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleString('fr-FR', {
      timeZone: 'Europe/Paris',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return iso
  }
}

export function siteUrl(origin?: string | null): string {
  return origin || process.env.NEXT_PUBLIC_SITE_URL || 'https://cholez-pagotto.fr'
}

// Envoi d'un e-mail transactionnel via Brevo. Retourne true si Brevo a accepte l'envoi.
export async function envoyerEmailBrevo(params: {
  to: { email: string; name?: string }
  subject: string
  html: string
}): Promise<boolean> {
  if (!process.env.BREVO_API_KEY) {
    console.error('[courtage] BREVO_API_KEY absente, e-mail non envoye')
    return false
  }
  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { accept: 'application/json', 'api-key': process.env.BREVO_API_KEY, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [params.to],
        bcc: [{ email: 'contact@cholez-pagotto.fr' }],
        subject: params.subject,
        htmlContent: params.html,
      }),
    })
    if (!res.ok) {
      const err = await res.json().catch(() => ({}))
      console.error('[courtage] Echec envoi Brevo:', err)
      return false
    }
    return true
  } catch (e) {
    console.error('[courtage] Erreur reseau Brevo:', e)
    return false
  }
}

// Habillage commun des e-mails, aux couleurs du site.
function emailShell(opts: { titre: string; corpsHtml: string; ctaUrl?: string; ctaLabel?: string }): string {
  const cta = opts.ctaUrl && opts.ctaLabel
    ? `<div style="text-align:center;margin:28px 0 8px;">
         <a href="${opts.ctaUrl}" style="display:inline-block;background:#0f2d6e;color:#ffffff;text-decoration:none;font-size:13.5px;font-weight:600;padding:13px 30px;border-radius:8px;">${escapeHtml(opts.ctaLabel)}</a>
       </div>`
    : ''
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
        <td style="background:#ffffff;padding:28px 36px;border-bottom:1px solid #e5e7eb;">
          <img src="https://cholez-pagotto.fr/logo-cholez-pagotto-email.png" alt="Cabinet Cholez-Pagotto" height="38" style="display:block;height:38px;width:auto;margin-bottom:16px;">
          <h1 style="color:#0f2d6e;margin:0;font-size:18px;font-weight:600;line-height:1.4;">${escapeHtml(opts.titre)}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:32px 36px;color:#374151;font-size:14.5px;line-height:1.8;">
          ${opts.corpsHtml}
          ${cta}
        </td>
      </tr>
      <tr>
        <td style="padding:0 36px 32px;">
          <div style="border-top:1px solid #eef1f6;padding-top:24px;">
            <p style="color:#374151;font-size:13.5px;line-height:1.7;margin:0 0 12px;">Cordialement,</p>
            <p style="color:#0f2d6e;font-size:13.5px;font-weight:700;line-height:1.6;margin:0;">François CHOLEZ</p>
            <p style="color:#6b7280;font-size:12px;line-height:1.6;margin:2px 0 12px;">Juriste · Formaliste · Conseil et courtage en assurances et réassurances</p>
            <p style="color:#6b7280;font-size:12px;line-height:1.8;margin:0;">
              Tél. (+33) 03 74 47 40 55 &nbsp;·&nbsp; Mobile (+33) 07 55 61 66 88<br>
              <a href="mailto:francois@cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">francois@cholez-pagotto.fr</a><br>
              CBT CHOLEZ PAGOTTO · SIREN 490 889 516 · ORIAS n° 26003943 (orias.fr)<br>
              Sous le contrôle de l&apos;ACPR, 4 place de Budapest, CS 92459, 75436 Paris Cedex 09
            </p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`
}

// E-mail d'acces a l'espace client pour un nouveau dossier de courtage.
// accessLink non nul : le compte vient d'etre cree, le client definit son mot de passe.
// accessLink nul : le client a deja un compte, il se connecte.
export function emailAcces(params: {
  prenom: string
  objet: string
  reference: string
  accessLink: string | null
  origin: string
  message?: string | null
}): { subject: string; html: string } {
  const message = params.message && params.message.trim()
    ? `<p style="margin:16px 0 0;">${versHtml(params.message.trim())}</p>`
    : ''
  const bloc = params.accessLink
    ? `<p style="margin:16px 0 0;">Pour y accéder, définissez d'abord votre mot de passe avec le bouton ci-dessous. Le lien est valable un temps limité : s'il a expiré, utilisez la fonction « mot de passe oublié » depuis la page de connexion.</p>`
    : `<p style="margin:16px 0 0;">Vous disposez déjà d'un espace client : connectez-vous avec votre adresse e-mail habituelle.</p>`
  const corps = `
    <p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>
    <p style="margin:0 0 12px;">Le cabinet a ouvert pour vous un dossier de courtage en assurances (référence <strong>${escapeHtml(params.reference)}</strong>) : ${escapeHtml(params.objet)}.</p>
    <p style="margin:0;">Votre espace client sécurisé, associé à votre seule adresse e-mail, vous permet de suivre l'avancement de votre dossier, de déposer vos pièces, de retrouver vos documents et de consulter les informations que le cabinet doit vous communiquer avant toute souscription.</p>
    ${bloc}
    ${message}`
  return {
    subject: 'Votre espace client est prêt : dossier ' + params.reference,
    html: emailShell({
      titre: 'Votre dossier de courtage est ouvert',
      corpsHtml: corps,
      ctaUrl: params.accessLink || `${params.origin}/connexion`,
      ctaLabel: params.accessLink ? 'Définir mon mot de passe' : 'Accéder à mon espace client',
    }),
  }
}

// E-mail de suivi : changement d'etape et/ou message du cabinet.
export function emailSuivi(params: {
  prenom: string
  reference: string
  etape?: string | null
  message?: string | null
  origin: string
}): { subject: string; html: string } {
  const partieEtape = params.etape
    ? `<p style="margin:0 0 12px;">Votre dossier <strong>${escapeHtml(params.reference)}</strong> est passé à l'étape : <strong>${escapeHtml(labelEtape(params.etape))}</strong>.</p>
       <p style="margin:0 0 12px;">${escapeHtml(descriptionEtape(params.etape))}</p>`
    : `<p style="margin:0 0 12px;">Le cabinet vous a laissé un message sur votre dossier <strong>${escapeHtml(params.reference)}</strong>.</p>`
  const partieMessage = params.message && params.message.trim()
    ? `<p style="margin:12px 0 0;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 14px;">${versHtml(params.message.trim())}</p>`
    : ''
  const corps = `<p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>${partieEtape}${partieMessage}`
  return {
    subject: params.etape
      ? `Votre dossier ${params.reference} : ${labelEtape(params.etape)}`
      : `Message du cabinet sur votre dossier ${params.reference}`,
    html: emailShell({
      titre: params.etape ? 'Votre dossier avance' : 'Message du cabinet',
      corpsHtml: corps,
      ctaUrl: `${params.origin}/espace-client?onglet=courtage`,
      ctaLabel: 'Voir mon dossier',
    }),
  }
}

// Fiche d'information precontractuelle envoyee par e-mail (support durable).
// Meme contenu que la page publique /informations-reglementaires, completee des noms des
// entreprises d'assurance (article L.521-2, II, 1°, b) et de la remuneration du dossier.
export function emailFichePrecontractuelle(params: {
  prenom: string
  reference: string
  objet: string
  partenaires: string[]
  consultes: string[]
  remunerationNote: string
  origin: string
}): { subject: string; html: string } {
  const li = (items: string[]) =>
    items.map(n => `<li style="margin:2px 0;">${escapeHtml(n)}</li>`).join('')
  const blocConsultes = params.consultes.length > 0
    ? `<p style="margin:12px 0 4px;"><strong>Consultés pour votre dossier :</strong></p><ul style="margin:0;padding-left:20px;">${li(params.consultes)}</ul>`
    : ''
  const titre = (t: string) => `<p style="margin:20px 0 6px;color:#0f2d6e;font-weight:700;">${t}</p>`
  const corps = `
    <p style="margin:0 0 12px;">Bonjour ${escapeHtml(params.prenom)},</p>
    <p style="margin:0 0 12px;">Voici la fiche d'information que le cabinet doit vous remettre avant toute souscription, pour votre dossier <strong>${escapeHtml(params.reference)}</strong> (${escapeHtml(params.objet)}). Conservez-la : elle est aussi disponible dans votre espace client.</p>

    ${titre('1. Votre intermédiaire')}
    <p style="margin:0;"><strong>CBT CHOLEZ PAGOTTO</strong>, Cabinet Cholez-Pagotto, entreprise individuelle de François CHOLEZ, 12 rue d'Olima, 88000 Épinal. SIREN 490 889 516. Courtier d'assurance immatriculé à l'ORIAS sous le numéro 26003943 (www.orias.fr). Autorité de contrôle : ACPR, 4 place de Budapest, CS 92459, 75436 Paris Cedex 09.</p>

    ${titre('2. Statut et relations avec les assureurs')}
    <p style="margin:0;">Le cabinet n'est soumis à aucune obligation contractuelle de travailler exclusivement avec une ou plusieurs entreprises d'assurance. Il ne détient aucune participation égale ou supérieure à 10 % des droits de vote ou du capital d'une entreprise d'assurance, et aucune entreprise d'assurance ne détient de participation de cette importance dans le cabinet. Le cabinet n'encaisse aucune prime : elle est réglée directement à l'entreprise d'assurance.</p>

    ${titre('3. Base de l\'analyse')}
    <p style="margin:0;">Le cabinet ne fonde pas son analyse sur l'ensemble des contrats offerts sur le marché et ne se prévaut pas d'une analyse impartiale fondée sur un nombre suffisant de contrats. Il travaille avec les entreprises d'assurance et les grossistes suivants :</p>
    <ul style="margin:8px 0 0;padding-left:20px;">${li(params.partenaires)}</ul>
    ${blocConsultes}
    <p style="margin:12px 0 0;">Le cabinet fournit un service de recommandation : il précise vos exigences et vos besoins par écrit et vous indique les raisons de son conseil (article L.521-4 du Code des assurances).</p>

    ${titre('4. Rémunération du cabinet')}
    <p style="margin:0;">Le cabinet est rémunéré par une commission, incluse dans la prime d'assurance et versée par l'assureur, et, le cas échéant, par des honoraires payés directement par vous. Pour votre dossier : ${versHtml(params.remunerationNote)}</p>

    ${titre('5. Réclamations et médiation')}
    <p style="margin:0;">Vous pouvez adresser une réclamation au cabinet par le formulaire de contact du site ou par courrier. Le cabinet en accuse réception sous dix jours ouvrables et répond dans un délai maximal de deux mois. En cas de désaccord, vous pouvez saisir gratuitement le médiateur de l'assurance : La Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09 (www.mediation-assurance.org). Vous pouvez aussi saisir l'ACPR ou les juridictions compétentes.</p>

    <p style="margin:20px 0 0;">Le détail complet de ces informations est publié sur <a href="${params.origin}/informations-reglementaires" style="color:#1a4fba;">${params.origin.replace('https://', '')}/informations-reglementaires</a>.</p>`
  return {
    subject: `Fiche d'information précontractuelle : dossier ${params.reference}`,
    html: emailShell({
      titre: "Fiche d'information précontractuelle",
      corpsHtml: corps,
      ctaUrl: `${params.origin}/espace-client?onglet=courtage`,
      ctaLabel: 'Voir mon dossier',
    }),
  }
}
