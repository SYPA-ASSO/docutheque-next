'use client'

// app/admin/demandes-modeles/page.tsx
// Demandes de modeles de documents faites par les clients depuis leur espace.
// Le client ne voit jamais la liste des modeles : c'est ici, avec « Documents », que le cabinet
// regarde ce qui existe, puis depose le fichier dans « Echanges de fichiers ».
// Regles : zero tiret long dans le contenu visible.

import { useState, useEffect } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { FilePlus, ChevronDown, ChevronUp, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react'
import { STATUTS_DEMANDE_MODELE, statutDemandeModele, formatDateFr, type StatutDemandeModele } from '@/lib/demandes-modeles-statuts'

type Demande = {
  id: string
  user_id: string
  type_document: string
  contexte: string | null
  date_souhaitee: string | null
  statut: StatutDemandeModele
  reponse_client: string | null
  livree_le: string | null
  created_at: string
  users: { prenom: string | null; nom: string | null; email: string | null; telephone: string | null } | null
}

type Brouillon = { statut: StatutDemandeModele; message: string; notifier: boolean }

const champ = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none', resize: 'vertical' as const }

export default function AdminDemandesModeles() {
  const { password } = useAdmin()
  const [demandes, setDemandes] = useState<Demande[]>([])
  const [loading, setLoading] = useState(true)
  const [ouverte, setOuverte] = useState<string | null>(null)
  const [filtre, setFiltre] = useState<'a_traiter' | 'terminees' | 'toutes'>('a_traiter')
  const [brouillons, setBrouillons] = useState<Record<string, Partial<Brouillon>>>({})
  const [occupe, setOccupe] = useState<string | null>(null)
  const [retour, setRetour] = useState<Record<string, { ok: boolean; texte: string }>>({})

  useEffect(() => {
    if (!password) return
    charger()
  }, [password])

  const charger = async () => {
    setLoading(true)
    const res = await fetch('/api/admin/demandes-modeles-list', { headers: { 'x-admin-password': password } })
    if (res.ok) { const d = await res.json(); setDemandes(d.demandes || []) }
    setLoading(false)
  }

  const valeur = (d: Demande): Brouillon => ({
    statut: brouillons[d.id]?.statut ?? d.statut,
    message: brouillons[d.id]?.message ?? (d.reponse_client || ''),
    notifier: brouillons[d.id]?.notifier ?? true,
  })
  const modifier = (id: string, patch: Partial<Brouillon>) => setBrouillons(b => ({ ...b, [id]: { ...b[id], ...patch } }))

  const enregistrer = async (d: Demande) => {
    const v = valeur(d)
    setOccupe(d.id)
    setRetour(r => ({ ...r, [d.id]: { ok: true, texte: '' } }))
    try {
      const res = await fetch('/api/admin/demandes-modeles-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ id: d.id, statut: v.statut, reponse_client: v.message, notifier: v.notifier }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        let texte = 'Demande mise à jour.'
        if (data.emailEnvoye === true) texte += " E-mail envoyé au client."
        if (data.emailEnvoye === false) texte += " L'e-mail n'a pas pu être envoyé : prévenez le client directement."
        setRetour(r => ({ ...r, [d.id]: { ok: data.emailEnvoye !== false, texte } }))
        setBrouillons(b => { const c = { ...b }; delete c[d.id]; return c })
        await charger()
      } else {
        setRetour(r => ({ ...r, [d.id]: { ok: false, texte: data.error || 'Mise à jour impossible.' } }))
      }
    } finally {
      setOccupe(null)
    }
  }

  const termine = (d: Demande) => d.statut === 'livree' || d.statut === 'sans_suite'
  const filtrees = demandes.filter(d => filtre === 'toutes' ? true : filtre === 'terminees' ? termine(d) : !termine(d))

  if (loading && demandes.length === 0) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Demandes de modèles</h1>
        <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>
          {demandes.filter(d => !termine(d)).length} à traiter · {demandes.length} au total
        </p>
      </div>

      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '12px 16px', fontSize: '12.5px', color: '#1e3a5f', lineHeight: '1.7' }}>
        Pour répondre : regardez si un modèle existe dans <a href="/admin/documents" style={{ color: '#1a4fba', fontWeight: '600' }}>Documents</a>,
        déposez le fichier au client dans <a href="/admin/echanges-fichiers" style={{ color: '#1a4fba', fontWeight: '600' }}>Échanges de fichiers</a>,
        puis passez la demande en « Modèle transmis » ici (le client est prévenu par e-mail).
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { key: 'a_traiter', label: 'À traiter', count: demandes.filter(d => !termine(d)).length },
          { key: 'terminees', label: 'Terminées', count: demandes.filter(d => termine(d)).length },
          { key: 'toutes', label: 'Toutes', count: demandes.length },
        ].map(f => (
          <button key={f.key} onClick={() => setFiltre(f.key as typeof filtre)}
            style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: filtre === f.key ? '#0f2d6e' : 'white', color: filtre === f.key ? 'white' : '#6b7280', border: filtre === f.key ? 'none' : '1px solid #e5e7eb' } as React.CSSProperties}>
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {filtrees.length === 0 ? (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <FilePlus size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Aucune demande dans cette catégorie.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtrees.map(d => {
            const s = statutDemandeModele(d.statut)
            const v = valeur(d)
            const nom = d.users ? `${d.users.prenom || ''} ${d.users.nom || ''}`.trim() || 'Client' : 'Client'
            const r = retour[d.id]
            return (
              <div key={d.id} style={{ background: 'white', border: `1px solid ${d.statut === 'recue' ? '#fcd34d' : '#e5e7eb'}`, borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ padding: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }} onClick={() => setOuverte(ouverte === d.id ? null : d.id)}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>{d.type_document}</p>
                      <span style={{ background: s.bg, color: s.color, fontSize: '10px', fontWeight: '700', padding: '1px 7px', borderRadius: '4px' }}>{s.label}</span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                      {nom}{d.users?.email ? ` · ${d.users.email}` : ''} · {new Date(d.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0, alignItems: 'center' }}>
                    {d.users?.email && (
                      <a href={`mailto:${d.users.email}`} onClick={e => e.stopPropagation()} style={{ background: '#f3f4f6', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Mail size={13} color="#6b7280" />
                      </a>
                    )}
                    {d.users?.telephone && (
                      <a href={`tel:${d.users.telephone}`} onClick={e => e.stopPropagation()} style={{ background: '#f3f4f6', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Phone size={13} color="#6b7280" />
                      </a>
                    )}
                    {ouverte === d.id ? <ChevronUp size={16} color="#9ca3af" /> : <ChevronDown size={16} color="#9ca3af" />}
                  </div>
                </div>

                {ouverte === d.id && (
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ paddingTop: '14px' }}>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 6px' }}>Situation décrite par le client</p>
                      <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-wrap', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 12px' }}>
                        {d.contexte || 'Aucune précision.'}
                      </p>
                      {d.date_souhaitee && (
                        <p style={{ color: '#6b7280', fontSize: '12px', margin: '8px 0 0' }}>Souhaité pour le {formatDateFr(d.date_souhaitee)}.</p>
                      )}
                    </div>

                    <div>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 8px' }}>Statut</p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {STATUTS_DEMANDE_MODELE.map(o => (
                          <button key={o.value} onClick={() => modifier(d.id, { statut: o.value })}
                            style={{ padding: '7px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: v.statut === o.value ? o.bg : 'white', color: v.statut === o.value ? o.color : '#6b7280', border: `1px solid ${v.statut === o.value ? o.color : '#e5e7eb'}` }}>
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>Message visible par le client (facultatif)</label>
                      <textarea rows={3} style={champ} value={v.message} onChange={e => modifier(d.id, { message: e.target.value })}
                        placeholder="Ex. Le modèle est joint. Pensez à compléter les rubriques surlignées." />
                    </div>

                    {(v.statut === 'livree' || v.statut === 'sans_suite') && (
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#374151', cursor: 'pointer' }}>
                        <input type="checkbox" checked={v.notifier} onChange={e => modifier(d.id, { notifier: e.target.checked })} />
                        Prévenir le client par e-mail
                      </label>
                    )}

                    {r && r.texte && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {r.ok ? <CheckCircle size={14} color="#16a34a" /> : <AlertCircle size={14} color="#dc2626" />}
                        <p style={{ color: r.ok ? '#15803d' : '#dc2626', fontSize: '12px', margin: 0 }}>{r.texte}</p>
                      </div>
                    )}

                    <button onClick={() => enregistrer(d)} disabled={occupe === d.id}
                      style={{ background: occupe === d.id ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: occupe === d.id ? 'not-allowed' : 'pointer', alignSelf: 'flex-start' }}>
                      {occupe === d.id ? 'Enregistrement...' : 'Enregistrer'}
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
