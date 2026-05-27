'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from './layout'
import {
  Users, FileText, Receipt, MessageSquare,
  TrendingUp, Clock, CheckCircle, UserPlus,
  Crown, AlertCircle
} from 'lucide-react'

type Stats = {
  nb_clients: number
  nb_documents: number
  nb_factures: number
  questions_en_attente: number
  nb_questions_total: number
  nb_abonnes: number
  nb_inscriptions_30j: number
  migrations_en_attente: number
  dernieres_inscriptions: Array<{ id: string; prenom: string; nom: string; email: string; type: string; abonnement_actif: boolean; created_at: string }>
  dernieres_questions: Array<{ id: string; question: string; statut: string; type: string; created_at: string; users: { prenom: string; nom: string } | null }>
}

export default function AdminDashboard() {
  const { password } = useAdmin()
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!password) return
    fetch('/api/admin/stats', { headers: { 'x-admin-password': password } })
      .then(r => r.json())
      .then(d => { setStats(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [password])

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  const tauxConversion = stats && stats.nb_clients > 0
    ? Math.round((stats.nb_abonnes / stats.nb_clients) * 100)
    : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Tableau de bord</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Vue d'ensemble Cabinet Cholez-Pagotto</p>
      </div>

      {/* Alerte questions en attente */}
      {stats && stats.questions_en_attente > 0 && (
        <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <AlertCircle size={18} color="#d97706" style={{ flexShrink: 0 }} />
          <div>
            <p style={{ color: '#92400e', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>
              {stats.questions_en_attente} question{stats.questions_en_attente > 1 ? 's' : ''} en attente de réponse
            </p>
            <p style={{ color: '#78350f', fontSize: '12px', margin: 0 }}>
              <a href="/admin/questions" style={{ color: '#d97706', fontWeight: '700' }}>Répondre maintenant →</a>
            </p>
          </div>
        </div>
      )}

      {/* Alerte migrations en attente */}
      {stats && stats.migrations_en_attente > 0 && (
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <UserPlus size={18} color="#1a4fba" style={{ flexShrink: 0 }} />
          <p style={{ color: '#1e3a5f', fontSize: '13px', margin: 0 }}>
            <strong>{stats.migrations_en_attente}</strong> demande{stats.migrations_en_attente > 1 ? 's' : ''} de migration Particulier → Pro en attente.{' '}
            <a href="/admin/clients" style={{ color: '#1a4fba', fontWeight: '700' }}>Voir les clients →</a>
          </p>
        </div>
      )}

      {/* Cartes stats principales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px' }}>
        {[
          { label: 'Clients inscrits', value: stats?.nb_clients || 0, sub: `+${stats?.nb_inscriptions_30j || 0} ce mois`, icon: <Users size={20} color="#1a4fba" strokeWidth={1.5} />, bg: '#eff6ff', href: '/admin/clients' },
          { label: 'Abonnés actifs', value: stats?.nb_abonnes || 0, sub: `${tauxConversion}% de conversion`, icon: <Crown size={20} color="#d97706" strokeWidth={1.5} />, bg: '#fff7ed', href: '/admin/clients' },
          { label: 'Documents actifs', value: stats?.nb_documents || 0, sub: 'dans le catalogue', icon: <FileText size={20} color="#15803d" strokeWidth={1.5} />, bg: '#f0fdf4', href: '/admin/documents' },
          { label: 'Questions posées', value: stats?.nb_questions_total || 0, sub: `${stats?.questions_en_attente || 0} en attente`, icon: <MessageSquare size={20} color="#7c3aed" strokeWidth={1.5} />, bg: '#f5f3ff', href: '/admin/questions' },
        ].map((card, i) => (
          <a key={i} href={card.href} style={{ textDecoration: 'none' }}>
            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', transition: 'all 0.15s', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#bfdbfe')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}>
              <div style={{ width: '36px', height: '36px', background: card.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                {card.icon}
              </div>
              <p style={{ color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 4px' }}>{card.value}</p>
              <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>{card.label}</p>
              <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>{card.sub}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Stats secondaires */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <Receipt size={16} color="#6b7280" strokeWidth={1.5} />
            <p style={{ color: '#374151', fontSize: '13px', fontWeight: '600', margin: 0 }}>Factures émises</p>
          </div>
          <p style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>{stats?.nb_factures || 0}</p>
          <a href="/admin/factures" style={{ color: '#1a4fba', fontSize: '12px', textDecoration: 'none' }}>Gérer les factures →</a>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <TrendingUp size={16} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: '600', margin: 0 }}>Revenus Stripe</p>
          </div>
          <p style={{ color: 'white', fontSize: '1rem', fontWeight: '600', margin: '0 0 4px' }}>Disponible après NDD</p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: 0 }}>Activé lors du déploiement cholez-pagotto.fr</p>
        </div>
      </div>

      {/* Dernières activités */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

        {/* Dernières inscriptions */}
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>Dernières inscriptions</p>
            <a href="/admin/clients" style={{ color: '#1a4fba', fontSize: '12px', textDecoration: 'none' }}>Tout voir →</a>
          </div>
          {!stats?.dernieres_inscriptions.length ? (
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Aucun client inscrit.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {stats.dernieres_inscriptions.map(u => (
                <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', background: u.abonnement_actif ? '#eff6ff' : '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {u.abonnement_actif ? <Crown size={14} color="#1a4fba" /> : <Users size={14} color="#9ca3af" />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {u.prenom} {u.nom}
                    </p>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                      {new Date(u.created_at).toLocaleDateString('fr-FR')} · {u.type}
                    </p>
                  </div>
                  {u.abonnement_actif && <span style={{ background: '#eff6ff', color: '#1a4fba', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px', flexShrink: 0 }}>Abonné</span>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dernières questions */}
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>Dernières questions</p>
            <a href="/admin/questions" style={{ color: '#1a4fba', fontSize: '12px', textDecoration: 'none' }}>Tout voir →</a>
          </div>
          {!stats?.dernieres_questions.length ? (
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Aucune question posée.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {stats.dernieres_questions.map(q => (
                <div key={q.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', background: q.statut === 'repondu' ? '#f0fdf4' : '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    {q.statut === 'repondu' ? <CheckCircle size={14} color="#15803d" /> : <Clock size={14} color="#d97706" />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 1px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {q.users ? `${q.users.prenom} ${q.users.nom}` : 'Client'}
                    </p>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {q.question || 'En attente de saisie'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Accès rapides */}
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
        <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 1rem' }}>Accès rapides</p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {[
            { label: '+ Uploader un document', href: '/admin/documents', color: '#0f2d6e' },
            { label: '+ Déposer une facture', href: '/admin/factures', color: '#15803d' },
            { label: 'Répondre aux questions', href: '/admin/questions', color: '#7c3aed' },
            { label: 'Voir tous les clients', href: '/admin/clients', color: '#d97706' },
          ].map((btn, i) => (
            <a key={i} href={btn.href}
              style={{ background: '#f8fafc', color: btn.color, border: `1px solid #e5e7eb`, padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', transition: 'all 0.15s' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = '#eff6ff'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = '#f8fafc'}>
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}