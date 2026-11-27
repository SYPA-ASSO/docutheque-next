import { createHash, createHmac, randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { cache } from "react";
import { executer, lignes } from "@/lib/db";

// Comptes communs aux deux sites (même base MySQL que la Docuthèque) : mots de passe (scrypt), sessions, jetons à usage unique, limitation des tentatives.
// Rien de secret n'est stocké en clair : mots de passe, jetons e-mail et identifiants de session sont conservés sous forme d'empreinte.

export type Utilisateur = {
  id: number;
  email: string;
  mot_de_passe_hash: string;
  prenom: string | null;
  nom: string | null;
  type_compte: "particulier" | "professionnel";
  raison_sociale: string | null;
  siret: string | null;
  adresse: string | null;
  code_postal: string | null;
  ville: string | null;
  pays: string | null;
  email_verifie_le: Date | null;
  conditions_acceptees_le: Date;
  conditions_version: string;
  derniere_connexion_le: Date | null;
  cree_le: Date;
};

const HEURE = 3600 * 1000;
const JOUR = 24 * HEURE;
// Cookie de session commun aux deux sites : avec COOKIE_DOMAIN (ex. .cholez-pagotto.fr), il est lu par cholez-pagotto.fr et docutheque.cholez-pagotto.fr.
// Sans COOKIE_DOMAIN (essais, développement), l'ancien cookie propre au site est conservé. SESSION_SECRET doit être identique sur les deux sites.
export const NOM_COOKIE = process.env.COOKIE_DOMAIN ? "cp_session" : "docutheque_session";
const DOMAINE_COOKIE = process.env.COOKIE_DOMAIN || undefined;
const DUREE_SESSION_MS = 7 * JOUR;

// --- Mots de passe -------------------------------------------------------------------------------------------

const scrypt = promisify(scryptCb) as (mdp: string, sel: Buffer, longueur: number, options: { N: number; r: number; p: number }) => Promise<Buffer>;
const N = 16384;
const R = 8;
const P = 1;

export async function hasherMotDePasse(mdp: string): Promise<string> {
  const sel = randomBytes(16);
  const h = await scrypt(mdp.normalize("NFKC"), sel, 64, { N, r: R, p: P });
  return `scrypt$${N}$${R}$${P}$${sel.toString("base64")}$${h.toString("base64")}`;
}

export async function verifierMotDePasse(mdp: string, stocke: string): Promise<boolean> {
  const parts = stocke.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;
  const [, n, r, p, sel, attendu] = parts;
  const reference = Buffer.from(attendu, "base64");
  const calcule = await scrypt(mdp.normalize("NFKC"), Buffer.from(sel, "base64"), reference.length, { N: Number(n), r: Number(r), p: Number(p) });
  return calcule.length === reference.length && timingSafeEqual(calcule, reference);
}

// Hachage factice : permet de prendre le même temps quand l'adresse n'existe pas (pas de fuite par le délai de réponse).
let faux: Promise<string> | null = null;
export async function motDePasseFactice(mdp: string): Promise<void> {
  faux = faux ?? hasherMotDePasse(randomBytes(16).toString("hex"));
  await verifierMotDePasse(mdp, await faux);
}

export function erreurMotDePasse(mdp: string): string | null {
  if (mdp.length < 10) return "Le mot de passe doit comporter au moins 10 caractères.";
  if (mdp.length > 200) return "Le mot de passe est trop long (200 caractères au maximum).";
  return null;
}

export function normaliserEmail(v: unknown): string | null {
  if (typeof v !== "string") return null;
  const e = v.trim().toLowerCase();
  return e.length <= 190 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : null;
}

// --- Jetons et sessions -------------------------------------------------------------------------------------

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("session_secret_manquant");
  return s;
}

const empreinte = (jeton: string) => createHash("sha256").update(jeton).digest("hex");
const idSession = (jeton: string) => createHmac("sha256", secret()).update(jeton).digest("hex");

export type TypeJeton = "verification_email" | "reinitialisation_mot_de_passe";
export const VALIDITE_JETON: Record<TypeJeton, number> = {
  verification_email: JOUR,
  reinitialisation_mot_de_passe: HEURE,
};

// Crée un jeton à usage unique (le précédent du même type est invalidé) et renvoie sa valeur, à envoyer par e-mail.
export async function creerJeton(utilisateurId: number, type: TypeJeton): Promise<string> {
  const maintenant = new Date();
  await executer("UPDATE jetons SET utilise_le = ? WHERE utilisateur_id = ? AND type = ? AND utilise_le IS NULL", [maintenant, utilisateurId, type]);
  const jeton = randomBytes(32).toString("base64url");
  await executer("INSERT INTO jetons (utilisateur_id, type, jeton_hash, expire_le, cree_le) VALUES (?, ?, ?, ?, ?)", [
    utilisateurId,
    type,
    empreinte(jeton),
    new Date(maintenant.getTime() + VALIDITE_JETON[type]),
    maintenant,
  ]);
  return jeton;
}

// Consomme un jeton valable (non utilisé, non expiré) et renvoie l'identifiant de l'utilisateur, sinon null.
export async function consommerJeton(jeton: string, type: TypeJeton): Promise<number | null> {
  const h = empreinte(jeton);
  const res = await executer("UPDATE jetons SET utilise_le = ? WHERE jeton_hash = ? AND type = ? AND utilise_le IS NULL AND expire_le > ?", [new Date(), h, type, new Date()]);
  if (res.affectedRows !== 1) return null;
  const l = await lignes<{ utilisateur_id: number }>("SELECT utilisateur_id FROM jetons WHERE jeton_hash = ?", [h]);
  return l[0]?.utilisateur_id ?? null;
}

export async function ouvrirSession(utilisateurId: number): Promise<void> {
  const jeton = randomBytes(32).toString("base64url");
  const maintenant = new Date();
  await executer("INSERT INTO sessions (id, utilisateur_id, expire_le, cree_le) VALUES (?, ?, ?, ?)", [
    idSession(jeton),
    utilisateurId,
    new Date(maintenant.getTime() + DUREE_SESSION_MS),
    maintenant,
  ]);
  // Cookie de session : disparaît à la fermeture du navigateur, illisible par les scripts de la page.
  (await cookies()).set(NOM_COOKIE, jeton, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", domain: DOMAINE_COOKIE });
}

export async function sessionCourante(): Promise<Utilisateur | null> {
  const jeton = (await cookies()).get(NOM_COOKIE)?.value;
  if (!jeton) return null;
  const l = await lignes<Utilisateur>(
    "SELECT u.* FROM sessions s JOIN utilisateurs u ON u.id = s.utilisateur_id WHERE s.id = ? AND s.expire_le > ?",
    [idSession(jeton), new Date()],
  );
  return l[0] ?? null;
}

// Version à usage dans les pages et mises en page : une seule lecture de la session par requête.
export const sessionCache = cache(sessionCourante);

// Administrateurs : adresses (confirmées) listées dans la variable d'environnement ADMIN_EMAILS, séparées par des virgules.
export function estAdmin(u: Utilisateur | null): boolean {
  if (!u || !u.email_verifie_le) return false;
  const liste = (process.env.ADMIN_EMAILS ?? "").split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
  return liste.includes(u.email.toLowerCase());
}

export function identiteComplete(u: Utilisateur): boolean {
  const base = Boolean(u.prenom && u.nom && u.adresse && u.code_postal && u.ville && u.pays);
  return base && (u.type_compte !== "professionnel" || Boolean(u.raison_sociale && u.siret));
}

// Ferme les sessions de l'utilisateur autres que celle en cours (après un changement de mot de passe).
export async function fermerAutresSessions(utilisateurId: number): Promise<void> {
  const jeton = (await cookies()).get(NOM_COOKIE)?.value;
  if (!jeton) return fermerToutesLesSessions(utilisateurId);
  await executer("DELETE FROM sessions WHERE utilisateur_id = ? AND id <> ?", [utilisateurId, idSession(jeton)]);
}

export async function fermerSession(): Promise<void> {
  const c = await cookies();
  const jeton = c.get(NOM_COOKIE)?.value;
  if (jeton) await executer("DELETE FROM sessions WHERE id = ?", [idSession(jeton)]);
  if (DOMAINE_COOKIE) c.delete({ name: NOM_COOKIE, path: "/", domain: DOMAINE_COOKIE });
  else c.delete(NOM_COOKIE);
}

export async function fermerToutesLesSessions(utilisateurId: number): Promise<void> {
  await executer("DELETE FROM sessions WHERE utilisateur_id = ?", [utilisateurId]);
}

// --- Journal et limitation des tentatives ---------------------------------------------------------------------

export function ipDe(req: Request): string {
  return (req.headers.get("x-forwarded-for") ?? "inconnue").split(",")[0].trim().slice(0, 45) || "inconnue";
}

export async function journaliser(evenement: string, ip: string, utilisateurId: number | null = null): Promise<void> {
  await executer("INSERT INTO journal_connexions (utilisateur_id, evenement, ip, cree_le) VALUES (?, ?, ?, ?)", [utilisateurId, evenement, ip, new Date()]);
}

export async function compter(evenement: string, ip: string, fenetreMs: number): Promise<number> {
  const l = await lignes<{ n: number }>("SELECT COUNT(*) AS n FROM journal_connexions WHERE evenement = ? AND ip = ? AND cree_le > ?", [
    evenement,
    ip,
    new Date(Date.now() - fenetreMs),
  ]);
  return Number(l[0]?.n ?? 0);
}

export async function compterPourUtilisateur(evenement: string, utilisateurId: number, fenetreMs: number): Promise<number> {
  const l = await lignes<{ n: number }>("SELECT COUNT(*) AS n FROM journal_connexions WHERE evenement = ? AND utilisateur_id = ? AND cree_le > ?", [
    evenement,
    utilisateurId,
    new Date(Date.now() - fenetreMs),
  ]);
  return Number(l[0]?.n ?? 0);
}

export const FENETRE_HEURE = HEURE;
export const FENETRE_QUINZE_MIN = 15 * 60 * 1000;

// Ménage côté cholez-pagotto.fr : sessions, jetons et journal expirés. La suppression des comptes (jamais confirmés ou inactifs)
// et des commandes impayées reste faite par la maintenance de la Docuthèque, qui connaît les dossiers à archiver.
export async function nettoyer(): Promise<void> {
  const maintenant = Date.now();
  await executer("DELETE FROM sessions WHERE expire_le < ?", [new Date(maintenant)]);
  await executer("DELETE FROM jetons WHERE expire_le < ?", [new Date(maintenant - 7 * JOUR)]);
  await executer("DELETE FROM journal_connexions WHERE cree_le < ?", [new Date(maintenant - 365 * JOUR)]);
}

export function nettoyerParfois(): void {
  if (Math.random() < 0.05) void nettoyer().catch(() => undefined);
}
