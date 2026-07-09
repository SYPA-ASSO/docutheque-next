'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '../layout'
import { Users, Crown, Search, Mail, Phone, Download } from 'lucide-react'

type Client = {
  id: string
  prenom: string
  nom: string
  email: string
  type: string
  telephone: string | null
  ville: string | null
  abonnement_actif: boolean
  abonnement_type: string | null
  abonnement_periode: string | null
  date_expiration: string | null
  created_at: string
  siret: string | null
  nom_structure: string | null
}

export default function AdminClients() {
  const { password } = useAdmin()
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filtre, setFiltre] = useState<'tous' | 'abonnes' | 'gratuits' | 'migration'>('tous')
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [inclusesMois, setInclusesMois] = useState<Set<string>>(new Set())

  // Preselectionne l'onglet "Migration en attente" si on arrive via le lien du tableau de bord
  // (ex. /admin/clients?filtre=migration), sans utiliser useSearchParams pour eviter la contrainte
  // de Suspense sur une page purement client, comme ailleurs dans ce depot.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('filtre') === 'migration') setFiltre('migration')
  }, [])

  useEffect(() => {
    if (!password) return
    fetch('/api/admin/clients-list', { headers: { 'x-admin-password': password } })
      .then(r => r.json())
      .then(d => { setClients(d.clients || []); setLoading(false) })
      .catch(() => setLoading(false))
    // Questions incluses du mois en cours, pour badger les abonnes (mois civil, comme partout)
    fetch('/api/admin/questions-list', { headers: { 'x-admin-password': password } })
      .then(r => r.ok ? r.json() : { questions: [] })
      .then(d => {
        const now = new Date()
        const ids = (d.questions || [])
          .filter((q: { type: string; created_at: string }) =>
            q.type === 'incluse' &&
            new Date(q.created_at).getFullYear() === now.getFullYear() &&
            new Date(q.created_at).getMonth() === now.getMonth())
          .map((q: { user_id: string }) => q.user_id)
        setInclusesMois(new Set<string>(ids))
      })
      .catch(() => {})
  }, [password])

  const clientsFiltres = clients.filter(c => {
    const matchSearch = search.trim() === '' || `${c.prenom} ${c.nom} ${c.email} ${c.nom_structure || ''}`.toLowerCase().includes(search.toLowerCase())
    const matchFiltre =
      filtre === 'tous' ? true :
      filtre === 'abonnes' ? c.abonnement_actif :
      filtre === 'gratuits' ? !c.abonnement_actif :
      filtre === 'migration' ? (c.type === 'particulier' && !!c.siret) : true
    return matchSearch && matchFiltre
  })

  const exportCSV = () => {
    const headers = ['Prénom', 'Nom', 'Email', 'Type', 'Abonné', 'Abonnement', 'Ville', 'Inscrit le']
    const rows = clientsFiltres.map(c => [
      c.prenom, c.nom, c.email, c.type,
      c.abonnement_actif ? 'Oui' : 'Non',
      c.abonnement_type || '-',
      c.ville || '-',
      new Date(c.created_at).toLocaleDateString('fr-FR')
    ])
    const csv = [headers, ...rows].map(r => r.join(';')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'clients.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  const abonnementLabel = (c: Client) => {
    if (!c.abonnement_actif) return null
    const type = c.abonnement_type === 'optimal_pro' ? 'Pro' : 'Particulier'
    const periode = c.abonnement_periode === 'yearly' ? 'annuel' : 'mensuel'
    return `Optimal ${type} · ${periode}`
  }

  // 1er du mois prochain : date de reinitialisation de la question incluse
  const dateReinitIncluse = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
    .toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })

  if (loading) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Clients</h1>
          <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>
            {clients.length} inscrits · {clients.filter(c => c.abonnement_actif).length} abonnés actifs
          </p>
        </div>
        <button onClick={exportCSV}
          style={{ background: 'white', color: '#0f2d6e', border: '1px solid #e5e7eb', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Download size={14} /> Exporter CSV
        </button>
      </div>

      {/* Recherche + filtres */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: 1, minWidth: '200px' }}>
          <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }}>🔍</span>
          <input type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Rechercher par nom, email, structure..."
            style={{ width: '100%', padding: '10px 12px 10px 32px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' as const }} />
        </div>
        {[
          { key: 'tous', label: `Tous (${clients.length})` },
          { key: 'abonnes', label: `Abonnés (${clients.filter(c => c.abonnement_actif).length})` },
          { key: 'gratuits', label: `Gratuits (${clients.filter(c => !c.abonnement_actif).length})` },
          { key: 'migration', label: `Migration en attente (${clients.filter(c => c.type === 'particulier' && !!c.siret).length})` },
        ].map(f => (
          <button key={f.key} onClick={() => setFiltre(f.key as typeof filtre)}
            style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: filtre === f.key ? '#0f2d6e' : 'white', color: filtre === f.key ? 'white' : '#6b7280', border: filtre === f.key ? 'none' : '1px solid #e5e7eb' } as React.CSSProperties}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Liste clients */}
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
        {clientsFiltres.length === 0 ? (
          <p style={{ color: '#9ca3af', fontSize: '13px', padding: '2rem', textAlign: 'center', margin: 0 }}>Aucun client trouvé.</p>
        ) : (
          clientsFiltres.map((client, i) => (
            <div key={client.id}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '1rem 1.25rem', borderBottom: i < clientsFiltres.length - 1 ? '1px solid #f3f4f6' : 'none', cursor: 'pointer', background: selectedClient?.id === client.id ? '#f8fafc' : 'white' }}
              onClick={() => setSelectedClient(selectedClient?.id === client.id ? null : client)}>
              <div style={{ width: '36px', height: '36px', background: client.abonnement_actif ? 'linear-gradient(135deg, #0f2d6e, #1a4fba)' : '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {client.abonnement_actif ? <Crown size={16} color="white" strokeWidth={1.5} /> : <Users size={16} color="#9ca3af" strokeWidth={1.5} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>{client.prenom} {client.nom}</p>
                  {client.nom_structure && <span style={{ color: '#6b7280', fontSize: '12px' }}>· {client.nom_structure}</span>}
                  {abonnementLabel(client) && (
                    <span style={{ background: '#eff6ff', color: '#1a4fba', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px' }}>
                      {abonnementLabel(client)}
                    </span>
                  )}
                  {client.abonnement_actif && (
                    inclusesMois.has(client.id)
                      ? <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px' }}>Incluse consommée</span>
                      : <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px' }}>Incluse disponible</span>
                  )}
                  {client.type === 'particulier' && client.siret && (
                    <span style={{ background: '#fef3c7', color: '#d97706', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '4px' }}>
                      Migration Pro en attente
                    </span>
                  )}
                </div>
                <p style={{ color: '#9ca3af', fontSize: '11px', margin: '2px 0 0' }}>
                  {client.email} · {client.type} · Inscrit le {new Date(client.created_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <a href={`mailto:${client.email}`} onClick={e => e.stopPropagation()}
                  style={{ background: '#f3f4f6', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                  <Mail size={13} color="#6b7280" />
                </a>
                {client.telephone && (
                  <a href={`tel:${client.telephone}`} onClick={e => e.stopPropagation()}
                    style={{ background: '#f3f4f6', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <Phone size={13} color="#6b7280" />
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Détail client sélectionné */}
      {selectedClient && (
        <div style={{ background: 'white', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0 }}>
              {selectedClient.prenom} {selectedClient.nom}
            </p>
            <button onClick={() => setSelectedClient(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '18px', padding: 0, lineHeight: 1 }}>×</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Email', value: selectedClient.email },
              { label: 'Téléphone', value: selectedClient.telephone || '-' },
              { label: 'Ville', value: selectedClient.ville || '-' },
              { label: 'Type de compte', value: selectedClient.type },
              { label: 'Abonnement', value: abonnementLabel(selectedClient) || 'Accès gratuit' },
              { label: 'Expiration', value: selectedClient.date_expiration ? new Date(selectedClient.date_expiration).toLocaleDateString('fr-FR') : '-' },
              { label: 'Question incluse (ce mois)', value: !selectedClient.abonnement_actif ? 'Non applicable' : inclusesMois.has(selectedClient.id) ? `Consommée (réinit. le ${dateReinitIncluse})` : 'Disponible' },
              { label: 'Structure', value: selectedClient.nom_structure || '-' },
              { label: 'SIRET', value: selectedClient.siret || '-' },
              { label: 'Inscrit le', value: new Date(selectedClient.created_at).toLocaleDateString('fr-FR') },
            ].map((f, i) => (
              <div key={i}>
                <p style={{ color: '#9ca3af', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 2px' }}>{f.label}</p>
                <p style={{ color: '#374151', fontSize: '13px', margin: 0, wordBreak: 'break-all' }}>{f.value}</p>
              </div>
            ))}
          </div>
          {selectedClient.siret && selectedClient.type === 'particulier' && (
            <div style={{ background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '8px', padding: '12px 14px', marginTop: '1rem' }}>
              <p style={{ color: '#92400e', fontSize: '12px', fontWeight: '700', margin: '0 0 4px' }}>Demande de migration Pro en attente</p>
              <p style={{ color: '#78350f', fontSize: '12px', margin: '0 0 10px' }}>
                SIRET : {selectedClient.siret} · Structure : {selectedClient.nom_structure}
              </p>
              <button
                onClick={async () => {
                  await fetch(`/api/migration-valider?userId=${selectedClient.id}`)
                  setSelectedClient(null)
                  fetch('/api/admin/clients-list', { headers: { 'x-admin-password': password } })
                    .then(r => r.json()).then(d => setClients(d.clients || []))
                }}
                style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                Valider la migration → Compte Pro
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}