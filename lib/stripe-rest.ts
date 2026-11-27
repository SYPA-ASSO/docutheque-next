import { createHmac, timingSafeEqual } from "node:crypto";

// Appels à l'API REST de Stripe pour les abonnements (aucune dépendance supplémentaire : même méthode que sur la Docuthèque).
// Variables d'environnement : STRIPE_SECRET_KEY (sk_test_... pour les essais, sk_live_... en production)
// et STRIPE_WEBHOOK_SECRET_ABONNEMENTS (whsec_..., propre au point de terminaison des abonnements).

const API = process.env.STRIPE_API_BASE || "https://api.stripe.com/v1";

export const stripeConfigure = (): boolean => Boolean(process.env.STRIPE_SECRET_KEY);
export const modeTest = (): boolean => (process.env.STRIPE_SECRET_KEY ?? "").includes("_test_");

async function appel<T>(methode: "GET" | "POST", chemin: string, corps?: URLSearchParams, cleIdempotence?: string): Promise<T> {
  const cle = process.env.STRIPE_SECRET_KEY;
  if (!cle) throw new Error("stripe_non_configure");
  const entetes: Record<string, string> = { Authorization: `Bearer ${cle}` };
  if (corps) entetes["Content-Type"] = "application/x-www-form-urlencoded";
  if (cleIdempotence) entetes["Idempotency-Key"] = cleIdempotence;
  const rep = await fetch(`${API}${chemin}`, { method: methode, headers: entetes, body: corps?.toString(), cache: "no-store" });
  const json = (await rep.json().catch(() => ({}))) as { error?: { message?: string; type?: string } } & T;
  if (!rep.ok) throw new Error(`stripe_${rep.status}_${json.error?.type ?? "erreur"}: ${json.error?.message ?? ""}`);
  return json;
}

export type ArticleAbonnement = {
  current_period_start?: number;
  current_period_end?: number;
  price?: { id: string };
};

export type AbonnementStripe = {
  id: string;
  customer: string;
  status: "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | "paused";
  cancel_at_period_end: boolean;
  // Selon la version de l'API Stripe, les dates de période sont sur l'abonnement ou sur ses lignes.
  current_period_start?: number;
  current_period_end?: number;
  items: { data: ArticleAbonnement[] };
  metadata: Record<string, string>;
};

export type SessionAbonnement = {
  id: string;
  url: string | null;
  mode: string;
  status: string | null;
  customer: string | null;
  subscription: string | null;
  client_reference_id: string | null;
  metadata: Record<string, string> | null;
};

const idStripe = (prefixe: string, v: string): string => {
  if (!new RegExp(`^${prefixe}_[A-Za-z0-9_]+$`).test(v)) throw new Error("identifiant_stripe_invalide");
  return v;
};

type CreationAbonnement = {
  utilisateurId: number;
  email: string;
  priceId: string;
  formule: string;
  periodicite: string;
  cguVersion: string;
  clientStripeId: string | null;
  urlSucces: string;
  urlAnnulation: string;
};

// Page de paiement hébergée par Stripe pour un abonnement récurrent. Le lien avec le compte passe par les métadonnées :
// elles sont copiées sur l'abonnement, ce qui permet de le rattacher au compte à chaque événement ultérieur.
export async function creerSessionAbonnement(p: CreationAbonnement): Promise<SessionAbonnement> {
  const f = new URLSearchParams();
  f.set("mode", "subscription");
  f.set("locale", "fr");
  f.set("client_reference_id", String(p.utilisateurId));
  if (p.clientStripeId) f.set("customer", idStripe("cus", p.clientStripeId));
  else f.set("customer_email", p.email);
  f.set("success_url", p.urlSucces);
  f.set("cancel_url", p.urlAnnulation);
  f.set("line_items[0][price]", idStripe("price", p.priceId));
  f.set("line_items[0][quantity]", "1");
  f.set("allow_promotion_codes", "false");
  f.set("metadata[utilisateur_id]", String(p.utilisateurId));
  f.set("subscription_data[metadata][utilisateur_id]", String(p.utilisateurId));
  f.set("subscription_data[metadata][formule]", p.formule);
  f.set("subscription_data[metadata][periodicite]", p.periodicite);
  f.set("subscription_data[metadata][cgu_version]", p.cguVersion);
  return appel<SessionAbonnement>("POST", "/checkout/sessions", f);
}

export async function lireAbonnement(id: string): Promise<AbonnementStripe> {
  return appel<AbonnementStripe>("GET", `/subscriptions/${idStripe("sub", id)}`);
}

// Résiliation à l'échéance de la période payée : l'accès continue jusqu'à la fin de la période.
export async function resilierEnFinDePeriode(id: string): Promise<AbonnementStripe> {
  const f = new URLSearchParams();
  f.set("cancel_at_period_end", "true");
  return appel<AbonnementStripe>("POST", `/subscriptions/${idStripe("sub", id)}`, f);
}

export async function annulerResiliation(id: string): Promise<AbonnementStripe> {
  const f = new URLSearchParams();
  f.set("cancel_at_period_end", "false");
  return appel<AbonnementStripe>("POST", `/subscriptions/${idStripe("sub", id)}`, f);
}

// Portail client Stripe (moyen de paiement, factures) : à activer dans le tableau de bord Stripe, rubrique Portail client.
export async function creerPortail(clientStripeId: string, urlRetour: string): Promise<{ url: string }> {
  const f = new URLSearchParams();
  f.set("customer", idStripe("cus", clientStripeId));
  f.set("return_url", urlRetour);
  f.set("locale", "fr");
  return appel<{ url: string }>("POST", "/billing_portal/sessions", f);
}

// Vérifie la signature d'un webhook Stripe : en-tête « Stripe-Signature: t=horodatage,v1=signature,... »,
// signature = HMAC-SHA256 de « horodatage.corps » avec le secret du webhook. Tolérance de 5 minutes contre le rejeu.
export function signatureValide(corpsBrut: string, entete: string | null, secret: string, maintenantMs: number = Date.now(), toleranceS = 300): boolean {
  if (!entete) return false;
  let t = "";
  const signatures: string[] = [];
  for (const partie of entete.split(",")) {
    const i = partie.indexOf("=");
    if (i < 0) continue;
    const k = partie.slice(0, i).trim();
    const v = partie.slice(i + 1).trim();
    if (k === "t") t = v;
    else if (k === "v1") signatures.push(v);
  }
  if (!/^\d+$/.test(t) || signatures.length === 0) return false;
  if (Math.abs(maintenantMs / 1000 - Number(t)) > toleranceS) return false;
  const attendu = createHmac("sha256", secret).update(`${t}.${corpsBrut}`).digest();
  return signatures.some((s) => {
    if (!/^[0-9a-f]{64}$/i.test(s)) return false;
    return timingSafeEqual(attendu, Buffer.from(s, "hex"));
  });
}
