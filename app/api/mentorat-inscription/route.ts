import { NextRequest, NextResponse } from 'next/server'
import { PROCHAINE_SESSION, PRIX_NET, ELEMENTS_ENVOYES, STATUTS, PROFILS, DEMARRAGES } from '@/lib/mentorat-session'

// app/api/mentorat-inscription/route.ts
// Pre-inscription au mentorat consultant Qualiopi : aucun paiement en ligne.
// Envoie (1) un accuse de reception au candidat, (2) le dossier complet au cabinet.
// La facture et les elements utiles sont adresses ensuite par le cabinet.
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

function esc(str: unknown, max = 2000): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim()
    .slice(0, max)
}

export async function POST(request: NextRequest) {
  try {
    const b = await request.json()

    // Honeypot : rejet silencieux
    if (b.honeypot && String(b.honeypot).length > 0) {
      return NextResponse.json({ success: true })
    }

    if (!b.rgpd || !b.comprend) {
      return NextResponse.json({ success: false, error: 'Merci de cocher les deux cases de confirmation.' }, { status: 400 })
    }

    const prenom = esc(b.prenom, 80)
    const nom = esc(b.nom, 80)
    const email = esc(b.email, 254)
    const telephone = esc(b.telephone, 20)
    const statut = String(b.statut || '')
    const structure = esc(b.structure, 150)
    const siret = esc(b.siret, 20)
    const adresse = esc(b.adresse, 300)
    const profil = String(b.profil || '')
    const demarrage = String(b.demarrage || '')
    const projet = esc(b.projet, 3000).replace(/\n/g, '<br>')

    if (!prenom || !nom || !email || !adresse || !statut || !profil || !demarrage) {
      return NextResponse.json({ success: false, error: 'Tous les champs obligatoires doivent être remplis.' }, { status: 400 })
    }
    if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(String(b.email || '').trim())) {
      return NextResponse.json({ success: false, error: 'Adresse email invalide.' }, { status: 400 })
    }
    if (!(STATUTS as readonly string[]).includes(statut) || !(PROFILS as readonly string[]).includes(profil) || !(DEMARRAGES as readonly string[]).includes(demarrage)) {
      return NextResponse.json({ success: false, error: 'Valeur de formulaire invalide.' }, { status: 400 })
    }

    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey) {
      console.error('[Mentorat inscription] BREVO_API_KEY manquante')
      return NextResponse.json({ success: false, error: 'Erreur de configuration serveur. Veuillez réessayer ultérieurement.' }, { status: 500 })
    }

    const dateFr = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
    const nomComplet = `${prenom} ${nom}`

    const elementsHtml = ELEMENTS_ENVOYES.map(e =>
      `<li style="margin-bottom:8px;line-height:1.6;"><strong>${e.titre}</strong> : ${e.detail}</li>`
    ).join('')

    // 1. Accuse de reception au candidat
    const htmlCandidat = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background-color:#0f2d6e;padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Votre inscription au mentorat consultant Qualiopi</h2>
    <p style="color:#93c5fd;font-size:12px;margin:6px 0 0;">Reçue le ${dateFr} &middot; Démarrage prévu le ${PROCHAINE_SESSION}</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${prenom},</p>
    <p>Merci pour votre inscription. Elle est bien enregistrée et aucun règlement n'est demandé à ce stade.</p>
    <p><strong>La suite, en trois temps :</strong></p>
    <ol style="padding-left:20px;margin:12px 0;line-height:1.7;">
      <li><strong>Prise de contact</strong> : notre juriste revient vers vous par email sous 48 heures ouvrées pour échanger sur votre projet et votre profil de départ.</li>
      <li><strong>Envoi de la facture</strong> d'un montant de ${PRIX_NET}&nbsp;€ net, accompagnée des éléments utiles ci-dessous.</li>
      <li><strong>Démarrage</strong> de votre accompagnement à partir du ${PROCHAINE_SESSION}.</li>
    </ol>
    <p><strong>Ce que vous recevrez avec votre facture :</strong></p>
    <ul style="padding-left:20px;margin:12px 0;">
      ${elementsHtml}
    </ul>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>François CHOLEZ</strong><br>
      Juriste &middot; Formaliste &middot; Conseil en assurances<br><br>
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      12 rue d'Olima &middot; 88000 Épinal<br>
      <a href="https://cholez-pagotto.fr" style="color:#1a4fba;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
    <p style="color:#9ca3af;font-size:11px;line-height:1.6;">
      Cet accompagnement relève du transfert de savoir-faire métier, du mentoring d'affaires et de la licence d'outils. Il ne constitue pas une action de formation professionnelle.
    </p>
  </div>
</body>
</html>`

    // 2. Dossier complet pour le cabinet
    const ligne = (k: string, v: string) => `<tr><td style="padding:10px 14px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;width:150px;vertical-align:top;border-bottom:1px solid #f3f4f6;">${k}</td><td style="padding:10px 14px;border-bottom:1px solid #f3f4f6;">${v || '-'}</td></tr>`
    const htmlCabinet = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:640px;margin:0 auto;">
  <div style="background-color:#0f2d6e;padding:20px 24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Nouvelle inscription : mentorat consultant Qualiopi</h2>
    <p style="color:#93c5fd;font-size:12px;margin:6px 0 0;">Reçue le ${dateFr} &middot; Session du ${PROCHAINE_SESSION}</p>
  </div>
  <div style="background:#f8fafc;padding:20px 24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <table style="width:100%;border-collapse:collapse;background:white;border:1px solid #e5e7eb;">
      ${ligne('Nom', `<strong>${nomComplet}</strong>`)}
      ${ligne('Email', `<a href="mailto:${email}" style="color:#1a4fba;">${email}</a>`)}
      ${ligne('Téléphone', telephone)}
      ${ligne('Statut', esc(statut))}
      ${ligne('Structure', structure)}
      ${ligne('SIRET', siret)}
      ${ligne('Adresse facturation', adresse)}
      ${ligne('Profil de départ', esc(profil))}
      ${ligne('Démarrage', esc(demarrage))}
    </table>
    <p style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;margin:18px 0 8px;">Projet</p>
    <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:14px;line-height:1.7;">${projet || '-'}</div>
    <p style="margin:16px 0 0;font-size:12px;color:#6b7280;">À faire : prise de contact sous 48 h ouvrées, puis facture de ${PRIX_NET}&nbsp;€ net et éléments d'accompagnement.</p>
  </div>
</body>
</html>`

    const envoyer = (payload: Record<string, unknown>) =>
      fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: { accept: 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
        body: JSON.stringify({ sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' }, ...payload }),
      })

    // Le dossier du cabinet est l'envoi qui compte : s'il echoue, on le signale au candidat.
    const resCabinet = await envoyer({
      to: [{ email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' }],
      replyTo: { email: String(b.email).trim(), name: nomComplet },
      subject: `[Inscription mentorat] ${nomComplet}`,
      htmlContent: htmlCabinet,
    })
    if (!resCabinet.ok) {
      console.error('[Mentorat inscription] Echec envoi cabinet', resCabinet.status)
      return NextResponse.json({ success: false, error: "Votre inscription n'a pas pu être transmise. Veuillez réessayer ou nous écrire via la page contact." }, { status: 502 })
    }

    await envoyer({
      to: [{ email: String(b.email).trim(), name: nomComplet }],
      subject: 'Votre inscription au mentorat consultant Qualiopi',
      htmlContent: htmlCandidat,
    }).catch(err => console.error('[Mentorat inscription] Erreur accuse candidat:', err))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Mentorat inscription] Erreur inattendue:', error)
    return NextResponse.json({ success: false, error: "Erreur lors de l'inscription." }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}
