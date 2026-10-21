// lib/mentorat-session.ts
// Source unique des informations de la prochaine session du mentorat consultant Qualiopi.
// Importee par la page publique, l'espace prive, la page d'inscription et l'API d'inscription.
// A mettre a jour ICI uniquement, d'une session a l'autre.

export const PROCHAINE_SESSION = '16 novembre 2026'
export const PLACES_RESTANTES = 5
export const PRIX_NET = '1 990,00'

// Ce que le candidat recoit apres son inscription (page de confirmation et email).
// Modifier cette liste met a jour la page ET l'email en une fois.
export const ELEMENTS_ENVOYES: { titre: string; detail: string }[] = [
  {
    titre: 'Votre facture',
    detail: 'Établie à votre nom ou à celui de votre structure, avec les modalités de règlement. Le cabinet n\'étant pas assujetti à la TVA, le montant est net.',
  },
  {
    titre: 'Votre convention de mentorat',
    detail: 'Le contrat à relire et à signer : périmètre des volets 1 à 3, durée, licence d\'utilisation de la boîte à outils, engagements de chacun.',
  },
  {
    titre: 'Votre feuille de route de démarrage',
    detail: 'Le déroulé de vos premières semaines, adapté à votre profil de départ, avec les rendez-vous proposés à partir du démarrage.',
  },
  {
    titre: 'Un questionnaire de positionnement',
    detail: 'Quelques questions sur votre parcours et votre connaissance du secteur, pour construire votre parcours sur mesure avant la première séance.',
  },
  {
    titre: 'Le sommaire de la boîte à outils',
    detail: 'La liste des documents types auxquels vous aurez accès, pour vous projeter dans votre première mission.',
  },
  {
    titre: 'Votre accès à l\'espace privé',
    detail: 'Votre espace mentorat est ouvert dès réception du règlement, pour retrouver vos documents et le suivi de votre accompagnement.',
  },
]

// Listes de choix du formulaire d'inscription, partagees avec la validation serveur.
export const STATUTS = ['Particulier', 'Micro-entrepreneur', 'Société ou autre structure', 'Association'] as const
export const PROFILS = [
  'Juriste ou consultant en reconversion',
  'Ancien auditeur ou évaluateur qualité',
  'Organisme de formation cherchant à diversifier son offre',
  'Indépendant du conseil RH ou qualité',
  'Consultant indépendant',
  'Cabinet de gestion administrative',
  "Formateur métier de l'animation",
  'Secrétaire administrative',
  "Agent d'accueil",
  'Traductrice',
  'Autre profil',
] as const
export const DEMARRAGES = ['À la prochaine session', 'Plus tard, à discuter'] as const
