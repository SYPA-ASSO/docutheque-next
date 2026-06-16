import { NextRequest, NextResponse } from 'next/server'

// app/api/audit-express/route.ts
// Capture Audit RGPD Express. Notifie le cabinet et envoie au prospect un accuse de reception
// avec les cinq questions. Ajout optionnel a une liste Brevo (BREVO_AUDIT_LIST_ID).
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

const SECTEURS_AUTORISES = [
  'Micro-entreprise / freelance',
  'TPE / PME',
  'Profession libérale',
  'Profession de santé ou sociale',
  'Association / ESS',
  'Collectivité / secteur public',
  'Autre',
]

const QUESTIONS = [
  'Quelle est votre activité principale et combien de personnes ou de clients gérez-vous ?',
  'Quels types de données collectez-vous (identité, contact, paiement, santé, autres) ?',
  'Quels outils utilisez-vous (CRM, emailing, hébergement, sous-traitants) ?',
  "Disposez-vous d'un registre des traitements, d'une politique de confidentialité, de mentions d'information ?",
  'Avez-vous déjà eu une violation de données, une plainte, ou un contrôle CNIL ?',
]

function sanitize(str: string): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&/g, '&amp;')
    .trim()
    .slice(0, 500)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nom, structure, email, telephone, secteur, rgpd, website } = body

    // 1. Honeypot : champ invisible rempli par les bots, rejet silencieux
    if (website && website.length > 0) {
      return NextResponse.json({ success: true })
    }

    // 2. Consentement RGPD
    if (!rgpd) {
      return NextResponse.json({ error: 'Vous devez accepter la politique de confidentialité.' }, { status: 400 })
    }

    // 3. Champs obligatoires
    if (!nom || !structure || !email || !telephone || !secteur) {
      return NextResponse.json({ error: 'Tous les champs obligatoires doivent être remplis.' }, { status: 400 })
    }

    // 4. Format email
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    // 5. Secteur (whitelist)
    if (!SECTEURS_AUTORISES.includes(secteur)) {
      return NextResponse.json({ error: 'Secteur invalide.' }, { status: 400 })
    }

    // 6. Longueurs
    if (nom.length > 100 || structure.length > 150 || email.length > 254 || telephone.length > 20) {
      return NextResponse.json({ error: 'Un ou plusieurs champs dépassent la longueur autorisée.' }, { status: 400 })
    }

    // 7. Sanitisation
    const nomSafe = sanitize(nom)
    const structureSafe = sanitize(structure)
    const emailSafe = sanitize(email)
    const telSafe = sanitize(telephone).slice(0, 20)
    const secteurSafe = sanitize(secteur)

    // 8. Cle API
    const brevoKey = process.env.BREVO_API_KEY
    if (!brevoKey) {
      console.error('[AuditExpress] BREVO_API_KEY manquante')
      return NextResponse.json({ error: 'Erreur de configuration serveur. Veuillez réessayer ultérieurement.' }, { status: 500 })
    }

    const dateFr = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })
    const heureFr = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

    // 9. Email de notification au cabinet
    const questionsListHtml = QUESTIONS.map((q, i) => `<li style="margin-bottom:8px;line-height:1.6;">${i + 1}. ${q}</li>`).join('')

    const htmlCabinet = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:#7c3aed;padding:24px 28px;border-radius:8px 8px 0 0;">
    <span style="color:#ffffff;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;opacity:0.8;">Cabinet CHOLEZ PAGOTTO</span>
    <h2 style="color:#ffffff;font-size:17px;font-weight:700;margin:10px 0 6px;">Nouvelle demande d'Audit RGPD Express</h2>
    <p style="color:#e9d5ff;font-size:12px;margin:0;">Reçue le ${dateFr} à ${heureFr}</p>
  </div>
  <div style="background:#f8fafc;padding:24px 28px;border:1px solid #e5e7eb;border-top:none;">
    <table style="width:100%;border-collapse:collapse;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
      <tr><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;width:140px;background:#f8fafc;">Nom</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;"><strong>${nomSafe}</strong></td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Structure</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${structureSafe}</td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Secteur</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;">${secteurSafe}</td></tr>
      <tr><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Email</td><td style="padding:12px 16px;border-bottom:1px solid #f3f4f6;"><a href="mailto:${emailSafe}" style="color:#7c3aed;text-decoration:none;">${emailSafe}</a></td></tr>
      <tr><td style="padding:12px 16px;color:#6b7280;font-size:11px;font-weight:700;text-transform:uppercase;background:#f8fafc;">Téléphone</td><td style="padding:12px 16px;">${telSafe}</td></tr>
    </table>
    <p style="font-size:12px;color:#6b7280;margin:20px 0 8px;">Prochaine étape : transmettre les cinq questions au prospect, analyser ses réponses, puis remettre la note de synthèse sous 72 heures ouvrées.</p>
  </div>
  <div style="background:#ffffff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:14px 28px;text-align:center;">
    <p style="color:#9ca3af;font-size:11px;margin:0;">Cabinet CHOLEZ PAGOTTO &middot; <a href="https://cholez-pagotto.fr" style="color:#9ca3af;text-decoration:none;">cholez-pagotto.fr</a></p>
  </div>
</body>
</html>`

    const resCabinet = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: 'contact@cholez-pagotto.fr', name: 'François CHOLEZ' }],
        replyTo: { email: emailSafe, name: nomSafe },
        subject: `[Audit Express] ${structureSafe} (${secteurSafe})`,
        htmlContent: htmlCabinet,
      }),
    })

    if (!resCabinet.ok) {
      const err = await resCabinet.json().catch(() => ({}))
      console.error('[AuditExpress] Erreur Brevo cabinet:', err)
      return NextResponse.json({ error: "L'envoi a échoué. Veuillez réessayer ou nous contacter directement." }, { status: 500 })
    }

    // 10. Accuse de reception au prospect, avec les cinq questions
    const htmlProspect = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;color:#374151;font-size:14px;max-width:600px;margin:0 auto;">
  <div style="background:linear-gradient(135deg,#5b21b6 0%,#7c3aed 100%);padding:24px;border-radius:8px 8px 0 0;">
    <h2 style="color:#ffffff;margin:0;font-size:16px;">Votre Audit RGPD Express est lancé</h2>
    <p style="color:#e9d5ff;font-size:12px;margin:6px 0 0;">Offert &middot; Valeur 150&nbsp;&euro; &middot; Sans engagement</p>
  </div>
  <div style="background:#f8fafc;padding:24px;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;">
    <p>Bonjour ${nomSafe},</p>
    <p>Merci pour votre demande d'Audit RGPD Express pour <strong>${structureSafe}</strong>. Pour démarrer, merci de répondre directement à cet email aux cinq questions suivantes :</p>
    <ol style="padding-left:20px;margin:16px 0;">
      ${questionsListHtml}
    </ol>
    <p>Dès réception de vos réponses, notre juriste identifie vos trois risques prioritaires et vous adresse une note de synthèse de deux à trois pages sous <strong>72 heures ouvrées</strong>, accompagnée d'une mini-feuille de route. Un échange téléphonique de dix minutes vous est proposé si vous le souhaitez.</p>
    <p style="background:#f5f3ff;border:1px solid #e9d5ff;border-radius:8px;padding:12px 14px;font-size:13px;color:#5b21b6;line-height:1.6;">
      Besoin d'aller plus loin ensuite ? Le Diagnostic RGPD Essentiel (350&nbsp;&euro;, livrable sous 30 jours) approfondit la cartographie de vos traitements et l'analyse des écarts.
    </p>
    <p style="margin-top:24px;">Cordialement,</p>
    <p style="margin:8px 0 0;line-height:1.7;">
      <strong>François CHOLEZ</strong><br>
      Juriste &middot; Formaliste &middot; Conseil en assurances<br><br>
      <strong>Cabinet CHOLEZ PAGOTTO</strong><br>
      12 rue d'Olima &middot; 88000 Épinal<br>
      <a href="https://cholez-pagotto.fr" style="color:#7c3aed;text-decoration:none;">cholez-pagotto.fr</a>
    </p>
    <p style="margin:14px 0 0;font-size:12px;color:#6b7280;line-height:1.7;">
      Formaliste membre du CRFF (Conseil Représentatif des Formalistes de France)<br>
      Courtier en assurances et réassurances<br>
      Immatriculé à l'ORIAS n&deg;26003943 &middot; <a href="https://www.orias.fr" target="_blank" style="color:#6b7280;">www.orias.fr</a><br>
      Sous contrôle de l'ACPR &middot; 4 place de Budapest, 75436 Paris Cedex 09
    </p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
    <p style="color:#9ca3af;font-size:11px;line-height:1.6;">
      L'Audit RGPD Express constitue une information juridique au sens de la loi n&deg;71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée.
    </p>
  </div>
</body>
</html>`

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { name: 'Cabinet CHOLEZ PAGOTTO', email: 'contact@cholez-pagotto.fr' },
        to: [{ email: emailSafe, name: nomSafe }],
        subject: 'Votre Audit RGPD Express : les 5 questions',
        htmlContent: htmlProspect,
      }),
    }).catch(err => console.error('[AuditExpress] Erreur accuse prospect:', err))

    // 11. Ajout optionnel a une liste Brevo
    const listId = parseInt(process.env.BREVO_AUDIT_LIST_ID || '0')
    if (listId) {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { 'accept': 'application/json', 'api-key': brevoKey, 'content-type': 'application/json' },
        body: JSON.stringify({
          email: emailSafe,
          attributes: { NOM: nomSafe, STRUCTURE: structureSafe, SECTEUR: secteurSafe, SMS: telSafe },
          listIds: [listId],
          updateEnabled: true,
        }),
      }).catch(err => console.error('[AuditExpress] Erreur ajout liste:', err))
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('[AuditExpress] Erreur inattendue:', error)
    return NextResponse.json({ error: 'Une erreur inattendue est survenue. Veuillez réessayer.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}