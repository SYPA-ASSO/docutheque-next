'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '../layout'
import { MessageSquare, CheckCircle, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react'

type Question = {
  id: string
  question: string
  reponse: string | null
  statut: string
  type: string
  created_at: string
  repondu_at: string | null
  user_id: string
  users: { prenom: string; nom: string; email: string } | null
}

export default function AdminQuestions() {
  const { password } = useAdmin()
  const [questions, setQuestions] = useState<Question[]>([])
  const [loading, setLoading] = useState(true)
  const [filtre, setFiltre] = useState<'toutes' | 'en_attente' | 'repondu'>('en_attente')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [reponses, setReponses] = useState<Record<string, string>>({})
  const [envoiStatut, setEnvoiStatut] = useState<Record<string, 'idle' | 'loading' | 'success' | 'error'>>({})
  const [filtreType, setFiltreType] = useState<'tous' | 'incluse' | 'payante'>('tous')

  useEffect(() => {
    if (!password) return
    loadQuestions()
  }, [password])

  const loadQuestions = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/questions-list', { headers: { 'x-admin-password': password } })
    if (res.ok) { const d = await res.json(); setQuestions(d.questions || []) }
    setLoading(false)
  }

  const handleRepondre = async (questionId: string, userId: string, email: string) => {
    const reponse = reponses[questionId]?.trim()
    if (!reponse) return
    setEnvoiStatut(s => ({ ...s, [questionId]: 'loading' }))
    try {
      const res = await fetch('/api/admin/questions-repondre', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ questionId, reponse, userId, email }),
      })
      if (res.ok) {
        setEnvoiStatut(s => ({ ...s, [questionId]: 'success' }))
        setReponses(r => ({ ...r, [questionId]: '' }))
        setExpanded(null)
        loadQuestions()
      } else {
        setEnvoiStatut(s => ({ ...s, [questionId]: 'error' }))
      }
    } catch {
      setEnvoiStatut(s => ({ ...s, [questionId]: 'error' }))
    }
  }

  const questionsFiltrees = questions.filter(q => {
    const okStatut = filtre === 'en_attente' ? q.statut !== 'repondu' : filtre === 'repondu' ? q.statut === 'repondu' : true
    const okType = filtreType === 'incluse' ? q.type === 'incluse' : filtreType === 'payante' ? (q.type === 'unitaire' || q.type === 'abonne') : true
    return okStatut && okType
  })

  const typeBadge = (type: string) => {
    const conf = type === 'incluse'
      ? { label: 'Incluse', bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' }
      : type === 'abonne'
        ? { label: '14,90\u00a0€', bg: '#eff6ff', color: '#1a4fba', border: '#bfdbfe' }
        : { label: '47\u00a0€', bg: '#fff7ed', color: '#d97706', border: '#fed7aa' }
    return (
      <span style={{ background: conf.bg, color: conf.color, border: `1px solid ${conf.border}`, fontSize: '10px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px' }}>
        {conf.label}
      </span>
    )
  }

  // Decompte du mois calendaire en cours : incluses (gratuites) vs payantes, et encaisse
  const maintenant = new Date()
  const questionsDuMois = questions.filter(q => {
    const d = new Date(q.created_at)
    return d.getFullYear() === maintenant.getFullYear() && d.getMonth() === maintenant.getMonth()
  })
  const inclusesDuMois = questionsDuMois.filter(q => q.type === 'incluse')
  const payantesDuMois = questionsDuMois.filter(q => q.type === 'unitaire' || q.type === 'abonne')
  const abonnesIncluseDuMois = new Set(inclusesDuMois.map(q => q.user_id)).size
  // Calcul en centimes pour eviter les erreurs de virgule flottante
  const encaisseCentimesMois = questionsDuMois.reduce((acc, q) => acc + (q.type === 'unitaire' ? 4700 : q.type === 'abonne' ? 1490 : 0), 0)
  const encaisseMois = (encaisseCentimesMois / 100).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  const moisLabel = maintenant.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

  // Comptes par type, tous mois confondus, pour les filtres
  const totalIncluses = questions.filter(q => q.type === 'incluse').length
  const totalPayantes = questions.filter(q => q.type === 'unitaire' || q.type === 'abonne').length

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Questions juridiques</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>{questions.filter(q => q.statut !== 'repondu').length} en attente · {questions.length} au total</p>
      </div>

      {/* Decompte du mois en cours */}
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
        <p style={{ color: '#6b7280', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 12px' }}>Ce mois · {moisLabel}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }}>
          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 2px' }}>{questionsDuMois.length}</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Questions</p>
          </div>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ color: '#15803d', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 2px' }}>{inclusesDuMois.length}</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Incluses · {abonnesIncluseDuMois} abonné{abonnesIncluseDuMois > 1 ? 's' : ''}</p>
          </div>
          <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ color: '#d97706', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 2px' }}>{payantesDuMois.length}</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Payantes</p>
          </div>
          <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '12px 14px' }}>
            <p style={{ color: '#1a4fba', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 2px' }}>{encaisseMois}&nbsp;€</p>
            <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Encaissé</p>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { key: 'en_attente', label: 'En attente', count: questions.filter(q => q.statut !== 'repondu').length },
            { key: 'repondu', label: 'Répondues', count: questions.filter(q => q.statut === 'repondu').length },
            { key: 'toutes', label: 'Toutes', count: questions.length },
          ].map(f => (
            <button key={f.key} onClick={() => setFiltre(f.key as typeof filtre)}
              style={{ padding: '8px 16px', borderRadius: '8px', border: filtre === f.key ? 'none' : '1px solid #e5e7eb', background: filtre === f.key ? '#0f2d6e' : 'white', color: filtre === f.key ? 'white' : '#6b7280', fontSize: '12px', fontWeight: '600', cursor: 'pointer' } as React.CSSProperties}>
              {f.label} ({f.count})
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {[
            { key: 'tous', label: 'Tous types', count: questions.length },
            { key: 'incluse', label: 'Incluses', count: totalIncluses },
            { key: 'payante', label: 'Payantes', count: totalPayantes },
          ].map(f => (
            <button key={f.key} onClick={() => setFiltreType(f.key as typeof filtreType)}
              style={{ padding: '7px 14px', borderRadius: '8px', border: filtreType === f.key ? '1px solid #1a4fba' : '1px solid #e5e7eb', background: filtreType === f.key ? '#eff6ff' : 'white', color: filtreType === f.key ? '#1a4fba' : '#9ca3af', fontSize: '12px', fontWeight: '600', cursor: 'pointer' } as React.CSSProperties}>
              {f.label} ({f.count})
            </button>
          ))}
        </div>
      </div>

      {questionsFiltrees.length === 0 ? (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <MessageSquare size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>
            {filtre === 'en_attente' ? 'Aucune question en attente.' : 'Aucune question.'}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {questionsFiltrees.map(q => (
            <div key={q.id} style={{ background: 'white', border: `1px solid ${q.statut !== 'repondu' ? '#fcd34d' : '#e5e7eb'}`, borderRadius: '12px', overflow: 'hidden' }}>
              {/* Header */}
              <div style={{ padding: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                onClick={() => setExpanded(expanded === q.id ? null : q.id)}>
                <div style={{ width: '36px', height: '36px', background: q.statut === 'repondu' ? '#f0fdf4' : '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {q.statut === 'repondu' ? <CheckCircle size={16} color="#15803d" /> : <Clock size={16} color="#d97706" />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>
                      {q.users ? `${q.users.prenom} ${q.users.nom}` : 'Client'}
                    </p>
                    <span style={{ color: '#9ca3af', fontSize: '11px' }}>{q.users?.email}</span>
                    {typeBadge(q.type)}
                    <span style={{ color: '#9ca3af', fontSize: '11px' }}>{new Date(q.created_at).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <p style={{ color: '#374151', fontSize: '13px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: expanded === q.id ? 'normal' : 'nowrap' }}>
                    {q.question || <em style={{ color: '#9ca3af' }}>En attente de saisie par le client</em>}
                  </p>
                </div>
                {expanded === q.id ? <ChevronUp size={16} color="#9ca3af" style={{ flexShrink: 0 }} /> : <ChevronDown size={16} color="#9ca3af" style={{ flexShrink: 0 }} />}
              </div>

              {/* Corps étendu */}
              {expanded === q.id && (
                <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid #f3f4f6' }}>

                  {/* Réponse existante */}
                  {q.reponse && (
                    <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1rem', margin: '1rem 0' }}>
                      <p style={{ color: '#15803d', fontSize: '12px', fontWeight: '700', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={13} /> Réponse envoyée le {q.repondu_at ? new Date(q.repondu_at).toLocaleDateString('fr-FR') : '-'}
                      </p>
                      <p style={{ color: '#374151', fontSize: '13px', margin: 0, lineHeight: '1.7', whiteSpace: 'pre-line' }}>{q.reponse}</p>
                    </div>
                  )}

                  {/* Formulaire réponse */}
                  {q.statut !== 'repondu' && q.question && (
                    <div style={{ marginTop: '1rem' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px' }}>
                        Rédiger la réponse
                      </label>
                      <textarea
                        value={reponses[q.id] || ''}
                        onChange={e => setReponses(r => ({ ...r, [q.id]: e.target.value }))}
                        placeholder="Rédigez votre réponse ici. Elle sera envoyée par email au client et visible dans son espace."
                        rows={6}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none', resize: 'vertical' as const, lineHeight: '1.6' }}
                      />
                      {envoiStatut[q.id] === 'error' && (
                        <p style={{ color: '#dc2626', fontSize: '12px', margin: '6px 0 0' }}>Erreur lors de l'envoi. Veuillez réessayer.</p>
                      )}
                      <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleRepondre(q.id, q.user_id, q.users?.email || '')}
                          disabled={!reponses[q.id]?.trim() || envoiStatut[q.id] === 'loading'}
                          style={{ background: envoiStatut[q.id] === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: !reponses[q.id]?.trim() ? 'not-allowed' : 'pointer', opacity: !reponses[q.id]?.trim() ? 0.6 : 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Send size={14} /> {envoiStatut[q.id] === 'loading' ? 'Envoi...' : 'Envoyer la réponse'}
                        </button>
                        <button onClick={() => setExpanded(null)}
                          style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                          Fermer
                        </button>
                      </div>
                    </div>
                  )}

                  {q.statut !== 'repondu' && !q.question && (
                    <p style={{ color: '#9ca3af', fontSize: '12px', margin: '1rem 0 0', fontStyle: 'italic' }}>
                      Le client n'a pas encore saisi sa question (paiement en attente de complétion).
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}