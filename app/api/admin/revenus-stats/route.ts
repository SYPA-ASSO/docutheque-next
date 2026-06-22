import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { calculeRevenusReels } from '@/lib/revenus-stripe'

// app/api/admin/revenus-stats/route.ts
// Statistiques de revenus FIDELES A LA REALITE :
//   - MRR / ARR : abonnements actifs Stripe, nets de leurs coupons (un abonnement
//     remise a 100 % compte pour zero). La duree du coupon est respectee.
//   - Encaissements cartes : charges Stripe abouties, deduction faite des remboursements.
//   - Churn : abonnements resilies sur 30 jours (Stripe).
//   - Ventes par virement : lues depuis la base (hors Stripe), ajoutees au total reel.
// Stripe est la source de verite des montants ; la base ne sert qu'aux virements
// (qui ne transitent pas par Stripe) et au volume d'activite documents.

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const arrondi = (n: number) => Math.round(n * 100) / 100
  const ilYa30j = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()

  // 1. Montants reels depuis Stripe.
  const reels = await calculeRevenusReels()

  // 2. Ventes de documents reglees par VIREMENT (hors Stripe), statut paye.
  const { data: virements } = await supabaseAdmin
    .from('achats_documents')
    .select('montant, created_at')
    .eq('statut', 'paye')
    .eq('mode_paiement', 'virement')
  const lignesVir = virements || []
  const caVirements = lignesVir.reduce((s, v) => s + (Number(v.montant) || 0), 0)

  // 3. Volume d'activite documents (toutes ventes payees, tous modes) : indicateur non monetaire.
  const { data: ventesDocs } = await supabaseAdmin
    .from('achats_documents')
    .select('created_at')
    .eq('statut', 'paye')
  const lignesDocs = ventesDocs || []
  const nbVentesDocs = lignesDocs.length
  const nbVentesDocs30j = lignesDocs.filter((v) => v.created_at && v.created_at >= ilYa30j).length

  // 4. Total encaisse reel = cartes Stripe (nettes de remboursements) + virements documents.
  //    Aucun double comptage : Stripe couvre toutes les cartes, la base ne fournit que les virements.
  const totalCaReel = arrondi(reels.encaisse_stripe_total + caVirements)

  return NextResponse.json({
    stripeOk: reels.stripeOk,
    erreur: reels.erreur || null,
    // Abonnements (nets de coupons)
    mrr: reels.mrr,
    arr: reels.arr,
    nb_abonnes_actifs: reels.nb_abonnes_actifs,
    repartition: reels.repartition,
    churn_30j: reels.churn_30j,
    // Encaissements
    encaisse_stripe_total: reels.encaisse_stripe_total,
    encaisse_stripe_30j: reels.encaisse_stripe_30j,
    nb_paiements: reels.nb_paiements,
    nb_paiements_30j: reels.nb_paiements_30j,
    ca_virements_documents: arrondi(caVirements),
    nb_virements_documents: lignesVir.length,
    total_ca_reel: totalCaReel,
    // Activite documents (volume)
    nb_ventes_documents: nbVentesDocs,
    nb_ventes_documents_30j: nbVentesDocs30j,
  })
}
