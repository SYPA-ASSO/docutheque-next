import { lignes } from "@/lib/db";

export const dynamic = "force-dynamic";

// Contrôle de branchement à la base commune (aucune donnée n'est renvoyée).
export async function GET() {
  try {
    await lignes("SELECT COUNT(*) AS n FROM abonnements");
    return Response.json({ base: "ok" });
  } catch (e) {
    console.error("[sante abonnements]", e instanceof Error ? e.message : e);
    return Response.json({ base: "indisponible" }, { status: 503 });
  }
}
