import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'
import { calculeMRR } from '@/lib/tarifs'

export async function GET(request: Request) {
  const adminPassword = request.headers.get('x-admin-password')
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Non autorisé.' }, { status: 401 })
  }

  const [
    { count: nb_clients },
    { count: nb_documents },
    { count: nb_factures },
    { count: questions_en_attente },
    { count: nb_questions_total },
    { count: nb_abonnes },
    { count: nb_inscriptions_30j },
    { count: migrations_en_attente },
  ] = await Promise.all([
    supabaseAdmin.from('users').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('documents').select('*', { count: 'exact', head: true }).eq('actif', true),
    supabaseAdmin.from('factures').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('questions').select('*', { count: 'exact', head: true }).neq('statut', 'repondu'),
    supabaseAdmin.from('questions').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('users').select('*', { count: 'exact', head: true }).eq('abonnement_actif', true),
    supabaseAdmin.from('users').select('*', { count: 'exact', head: true }).gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()),
    supabaseAdmin.from('users').select('*', { count: 'exact', head: true }).eq('type', 'particulier').not('siret', 'is', null),
  ])

  // Dernières inscriptions
  const { data: dernieres_inscriptions } = await supabaseAdmin
    .from('users')
    .select('id, prenom, nom, email, type, abonnement_actif, created_at')
    .order('created_at', { ascending: false })
    .limit(5)

  // Dernières questions
  const { data: dernieres_questions } = await supabaseAdmin
    .from('questions')
    .select('id, question, statut, type, created_at, users(prenom, nom)')
    .order('created_at', { ascending: false })
    .limit(5)

  // MRR : revenu mensuel recurrent des abonnements actifs
  const { data: abos } = await supabaseAdmin
    .from('users')
    .select('abonnement_type, abonnement_periode')
    .eq('abonnement_actif', true)
  const mrr = calculeMRR(abos || [])

  return NextResponse.json({
    nb_clients: nb_clients || 0,
    nb_documents: nb_documents || 0,
    nb_factures: nb_factures || 0,
    questions_en_attente: questions_en_attente || 0,
    nb_questions_total: nb_questions_total || 0,
    nb_abonnes: nb_abonnes || 0,
    mrr,
    nb_inscriptions_30j: nb_inscriptions_30j || 0,
    migrations_en_attente: migrations_en_attente || 0,
    dernieres_inscriptions: dernieres_inscriptions || [],
    dernieres_questions: dernieres_questions || [],
  })
}