// lib/contact-sujets.ts
// Source unique des objets du formulaire de contact.
// Importee a la fois par le formulaire (app/contact/page.tsx) et par la validation
// serveur (app/api/contact/route.ts), pour que la liste affichee et la whitelist
// ne puissent jamais diverger. Pour ajouter ou modifier un sujet, editer ICI uniquement.

export const SUJETS: string[] = [
  // Services
  'Information sur mes droits (question juridique)',
  'Conseil en assurances',
  // Devis accompagnement
  'Devis : Accompagnement professionnels',
  'Devis : Accompagnement associations · ESS',
  'Devis : Formation sur mesure',
  'Devis : Mission RGPD · DPO externalisé',
  // Compte et abonnement
  'Mon abonnement Optimal',
  'Résiliation abonnement',
  'Problème technique · Espace client',
  // Autres
  'Exercice de mes droits (RGPD)',
  'Partenariat · Presse',
  'Autre demande',
]