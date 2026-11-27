import { executer, lignes } from "@/lib/db";
import { lireAbonnement, type AbonnementStripe } from "@/lib/stripe-rest";

// Abonnements récurrents (Optimal et Optimal Plus), enregistrés dans la base commune aux deux sites.
// Source de vérité : Stripe. À chaque événement, l'abonnement est relu chez Stripe puis enregistré tel quel
// (ordre des événements et rejeux sans effet). L'accès est calculé ici, jamais déduit d'un événement isolé.

export type Formule = "optimal" | "optimal_plus";
export type Periodicite = "mensuel" | "annuel";
export type StatutAbonnement = "incomplet" | "actif" | "impaye" | "termine";
export type NiveauAcces = "gratuit" | "base" | "optimal" | "optimal_plus";

export const FORMULES: Record<Formule, { libelle: string }> = {
  optimal: { libelle: "Optimal" },
  optimal_plus: { libelle: "Optimal Plus" },
};

// Les identifiants de prix Stripe viennent de l'environnement : ils ne sont créés qu'à la mise en ligne des nouvelles offres.
const VARIABLES_PRIX: Record<Formule, Record<Periodicite, string>> = {
  optimal: { mensuel: "STRIPE_PRICE_OPTIMAL_MENSUEL", annuel: "STRIPE_PRICE_OPTIMAL_ANNUEL" },
  optimal_plus: { mensuel: "STRIPE_PRICE_OPTIMAL_PLUS_MENSUEL", annuel: "STRIPE_PRICE_OPTIMAL_PLUS_ANNUEL" },
};

export function priceId(formule: Formule, periodicite: Periodicite): string | null {
  return process.env[VARIABLES_PRIX[formule][periodicite]] || null;
}

// Retrouve la formule et la périodicité d'après le prix réellement facturé par Stripe.
export function formuleDuPrix(price: string | undefined): { formule: Formule; periodicite: Periodicite } | null {
  if (!price) return null;
  for (const formule of Object.keys(VARIABLES_PRIX) as Formule[]) {
    for (const periodicite of ["mensuel", "annuel"] as Periodicite[]) {
      if (priceId(formule, periodicite) === price) return { formule, periodicite };
    }
  }
  return null;
}

export function statutDepuisStripe(s: AbonnementStripe["status"]): StatutAbonnement {
  switch (s) {
    case "active":
    case "trialing":
      return "actif";
    case "past_due":
    case "unpaid":
    case "paused":
      return "impaye";
    case "incomplete":
      return "incomplet";
    default:
      return "termine";
  }
}

const enDate = (t: number | undefined): Date | null => (typeof t === "number" ? new Date(t * 1000) : null);

type Ligne = {
  id: number;
  utilisateur_id: number;
  formule: Formule;
  periodicite: Periodicite;
  statut: StatutAbonnement;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  periode_debut: Date | null;
  periode_fin: Date | null;
  resiliation_en_fin_de_periode: number;
};

// Enregistre l'état d'un abonnement relu chez Stripe. Renvoie false si l'abonnement n'est pas rattaché à un compte connu.
export async function synchroniserAbonnement(idAbonnement: string): Promise<boolean> {
  const s = await lireAbonnement(idAbonnement);
  const utilisateurId = Number(s.metadata?.utilisateur_id);
  if (!Number.isInteger(utilisateurId) || utilisateurId <= 0) return false;
  const existe = await lignes<{ id: number }>("SELECT id FROM utilisateurs WHERE id = ?", [utilisateurId]);
  if (existe.length === 0) return false;

  const article = s.items?.data?.[0];
  const prix = article?.price?.id;
  const connu = formuleDuPrix(prix);
  const formule = connu?.formule ?? (s.metadata.formule as Formule | undefined);
  const periodicite = connu?.periodicite ?? (s.metadata.periodicite as Periodicite | undefined);
  if ((formule !== "optimal" && formule !== "optimal_plus") || (periodicite !== "mensuel" && periodicite !== "annuel")) {
    throw new Error("formule_inconnue");
  }
  const debut = enDate(s.current_period_start ?? article?.current_period_start);
  const fin = enDate(s.current_period_end ?? article?.current_period_end);
  const maintenant = new Date();

  await executer(
    `INSERT INTO abonnements
       (utilisateur_id, formule, periodicite, statut, stripe_customer_id, stripe_subscription_id, stripe_price_id,
        periode_debut, periode_fin, resiliation_en_fin_de_periode, cgu_version, cree_le, modifie_le)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       formule = VALUES(formule), periodicite = VALUES(periodicite), statut = VALUES(statut),
       stripe_customer_id = VALUES(stripe_customer_id), stripe_price_id = VALUES(stripe_price_id),
       periode_debut = VALUES(periode_debut), periode_fin = VALUES(periode_fin),
       resiliation_en_fin_de_periode = VALUES(resiliation_en_fin_de_periode), modifie_le = VALUES(modifie_le)`,
    [
      utilisateurId, formule, periodicite, statutDepuisStripe(s.status), s.customer, s.id, prix ?? null,
      debut, fin, s.cancel_at_period_end ? 1 : 0, s.metadata.cgu_version ?? "", maintenant, maintenant,
    ],
  );
  return true;
}

// Identifiant client Stripe déjà connu pour ce compte (évite de créer plusieurs clients Stripe pour la même personne).
export async function clientStripeDe(utilisateurId: number): Promise<string | null> {
  const l = await lignes<{ stripe_customer_id: string }>(
    "SELECT stripe_customer_id FROM abonnements WHERE utilisateur_id = ? ORDER BY modifie_le DESC LIMIT 1",
    [utilisateurId],
  );
  return l[0]?.stripe_customer_id ?? null;
}

export async function abonnementsDe(utilisateurId: number): Promise<Ligne[]> {
  return lignes<Ligne>("SELECT * FROM abonnements WHERE utilisateur_id = ? ORDER BY cree_le DESC", [utilisateurId]);
}

const RANG: Record<NiveauAcces, number> = { gratuit: 0, base: 1, optimal: 2, optimal_plus: 3 };

// Niveau d'accès d'un compte : le plus élevé entre l'abonnement Docuthèque de base (paiement unique de 12 mois, table commandes)
// et les abonnements Optimal / Optimal Plus encore dans leur période payée. Optimal et Optimal Plus incluent la base.
export async function niveauAcces(utilisateurId: number, maintenant: Date = new Date()): Promise<{ niveau: NiveauAcces; jusqua: Date | null }> {
  let niveau: NiveauAcces = "gratuit";
  let jusqua: Date | null = null;
  const retenir = (n: NiveauAcces, fin: Date | null) => {
    if (RANG[n] > RANG[niveau] || (n === niveau && fin && (!jusqua || fin > jusqua))) {
      niveau = n;
      jusqua = fin;
    }
  };
  const base = await lignes<{ acces_fin: Date }>(
    "SELECT acces_fin FROM commandes WHERE utilisateur_id = ? AND produit = 'abonnement' AND statut = 'payee' AND acces_debut <= ? AND acces_fin > ? ORDER BY acces_fin DESC LIMIT 1",
    [utilisateurId, maintenant, maintenant],
  );
  if (base[0]) retenir("base", base[0].acces_fin);
  const abos = await lignes<{ formule: Formule; periode_fin: Date }>(
    "SELECT formule, periode_fin FROM abonnements WHERE utilisateur_id = ? AND statut = 'actif' AND periode_fin > ?",
    [utilisateurId, maintenant],
  );
  for (const a of abos) retenir(a.formule, a.periode_fin);
  return { niveau, jusqua };
}

export const accesAuMoins = (niveau: NiveauAcces, requis: NiveauAcces): boolean => RANG[niveau] >= RANG[requis];
