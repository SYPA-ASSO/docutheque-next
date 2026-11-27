import { synchroniserAbonnement } from "@/lib/abonnements";
import { signatureValide } from "@/lib/stripe-rest";

export const dynamic = "force-dynamic";

type Evenement = { type: string; data: { object: Record<string, unknown> } };

const texte = (v: unknown): string | null => (typeof v === "string" && v ? v : null);

// Identifiant de l'abonnement porté par une facture : champ direct (ancienne API) ou bloc « parent » (API récente).
function abonnementDeFacture(o: Record<string, unknown>): string | null {
  const direct = texte(o.subscription);
  if (direct) return direct;
  const parent = o.parent as { subscription_details?: { subscription?: unknown } } | undefined;
  return texte(parent?.subscription_details?.subscription);
}

// Webhook Stripe des abonnements. Authentifié par la signature de Stripe (ni session ni contrôle d'origine).
// Chaque événement déclenche une relecture de l'abonnement chez Stripe : le traitement est idempotent.
// Répond 500 en cas de panne pour que Stripe renvoie l'événement.
export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET_ABONNEMENTS;
  if (!secret) return new Response("Webhook non configuré", { status: 503 });
  const brut = await req.text();
  if (!signatureValide(brut, req.headers.get("stripe-signature"), secret)) return new Response("Signature invalide", { status: 400 });

  let evt: Evenement;
  try {
    evt = JSON.parse(brut) as Evenement;
  } catch {
    return new Response("Corps invalide", { status: 400 });
  }

  try {
    const obj = evt.data?.object ?? {};
    let abonnement: string | null = null;
    switch (evt.type) {
      case "checkout.session.completed":
        if (obj.mode === "subscription") abonnement = texte(obj.subscription);
        break;
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted":
        abonnement = texte(obj.id);
        break;
      case "invoice.paid":
      case "invoice.payment_failed":
        abonnement = abonnementDeFacture(obj);
        break;
    }
    if (abonnement) {
      const rattache = await synchroniserAbonnement(abonnement);
      if (!rattache) console.warn("[webhook abonnements] abonnement sans compte connu :", abonnement);
    }
    return Response.json({ recu: true });
  } catch (e) {
    console.error("[webhook abonnements]", e instanceof Error ? e.message : e);
    return new Response("Erreur de traitement", { status: 500 });
  }
}
