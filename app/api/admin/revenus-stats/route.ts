import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { calculeMRR, repartitionAbonnes } from '@/lib/tarifs'

// app/api/admin/revenus-stats/route.ts
// Statistiques de revenus calculables depuis la base :
//   - MRR et ARR a partir des abonnements actifs (tarifs connus)
//   - nombre d'abonnes et repartition par type et periode
//   - ventes de documents a l'unite (statut paye) : CA, nombre, panier moyen
// Le CA tous canaux confondus et le taux de churn ne sont pas reconstituables ici
// (pas de table de transactions ni d'historique des resiliations) : agregation Stripe a prevoir.

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const ilYa30j = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()

  // 1. Abonnes actifs (type + periode pour le MRR et la repartition)
  const { data: abos } = await supabaseAdmin
    .from('users')
    .select('abonnement_type, abonnement_periode')
    .eq('abonnement_actif', true)
  const abonnes = abos || []
  const mrr = calculeMRR(abonnes)
  const arr = Math.round(mrr * 12 * 100) / 100

  // 2. Ventes de documents a l'unite (carte + virements valides), statut paye
  const { data: ventes } = await supabaseAdmin
    .from('achats_documents')
    .select('montant, created_at')
    .eq('statut', 'paye')
  const lignes = ventes || []
  const caDocuments = lignes.reduce((s, v) => s + (Number(v.montant) || 0), 0)
  const nbVentes = lignes.length
  const panierMoyen = nbVentes > 0 ? caDocuments / nbVentes : 0
  const lignes30j = lignes.filter((v) => v.created_at && v.created_at >= ilYa30j)
  const caDocuments30j = lignes30j.reduce((s, v) => s + (Number(v.montant) || 0), 0)

  const arrondi = (n: number) => Math.round(n * 100) / 100

  return NextResponse.json({
    nb_abonnes: abonnes.length,
    repartition: repartitionAbonnes(abonnes),
    mrr,
    arr,
    ca_documents: arrondi(caDocuments),
    ca_documents_30j: arrondi(caDocuments30j),
    nb_ventes: nbVentes,
    nb_ventes_30j: lignes30j.length,
    panier_moyen: arrondi(panierMoyen),
  })
}
