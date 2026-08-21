'use client'

import { useState, useEffect } from 'react'
import { useAdmin } from '../layout'
import { Users, Crown, Search, Mail, Phone, Download, UserPlus, X, Star } from 'lucide-react'

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
  avis_google_propose: boolean | null
}

export default function AdminClients() {
  const { password } = useAdmin()
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filtre, setFiltre] = useState<'tous' | 'abonnes' | 'gratuits' | 'migration'>('tous')
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [modalOuverte, setModalOuverte] = useState(false)
  const [creationEnCours, setCreationEnCours] = useState(false)
  const [creationErreur, setCreationErreur] = useState('')
  const [creationSucces, setCreationSucces] = useState('')
  const [formulaire, setFormulaire] = useState({
    prenom: '', nom: '', email: '', type: 'particulier' as 'particulier' | 'professionnel',
    telephone: '', ville: '', nom_structure: '', siret: '', rna: '',
  })
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

  const reinitialiserFormulaire = () => {
    setFormulaire({ prenom: '', nom: '', email: '', type: 'particulier', telephone: '', ville: '', nom_structure: '', siret: '', rna: '' })
    setCreationErreur('')
    setCreationSucces('')
  }

  const fermerModal = () => {
    setModalOuverte(false)
    reinitialiserFormulaire()
  }

  const handleCreerClient = async () => {
    if (!formulaire.prenom || !formulaire.nom || !formulaire.email) {
      setCreationErreur('Prénom, nom et email sont obligatoires.')
      return
    }
    setCreationEnCours(true)
    setCreationErreur('')
    setCreationSucces('')
    try {
      const res = await fetch('/api/admin/clients-create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password || '' },
        body: JSON.stringify(formulaire),
      })
      const data = await res.json()
      if (!res.ok) { setCreationErreur(data.error || 'La création a échoué.'); return }
      setCreationSucces(data.emailEnvoye
        ? `Compte créé pour ${formulaire.prenom} ${formulaire.nom}. Un email lui a été envoyé pour définir son mot de passe.`
        : `Compte créé pour ${formulaire.prenom} ${formulaire.nom}, mais l'envoi de l'email a échoué : pensez à utiliser "mot de passe oublié" pour lui donner accès.`)
      fetch('/api/admin/clients-list', { headers: { 'x-admin-password': password || '' } })
        .then(r => r.json()).then(d => setClients(d.clients || []))
    } catch {
      setCreationErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setCreationEnCours(false)
    }
  }

  const basculerAvisGoogle = async (client: Client, avisLaisse: boolean) => {
    await fetch('/api/admin/clients-avis-google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password || '' },
      body: JSON.stringify({ userId: client.id, avisLaisse }),
    })
    setClients((prev) => prev.map((c) => (c.id === client.id ? { ...c, avis_google_propose: avisLaisse } : c)))
    setSelectedClient((prev) => (prev && prev.id === client.id ? { ...prev, avis_google_propose: avisLaisse } : prev))
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
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setModalOuverte(true)}
            style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <UserPlus size={14} /> Nouveau client
          </button>
          <button onClick={exportCSV}
            style={{ background: 'white', color: '#0f2d6e', border: '1px solid #e5e7eb', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Download size={14} /> Exporter CSV
          </button>
        </div>
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

          <div style={{ background: selectedClient.avis_google_propose ? '#f0fdf4' : '#fffbeb', border: `1px solid ${selectedClient.avis_google_propose ? '#bbf7d0' : '#fcd34d'}`, borderRadius: '8px', padding: '12px 14px', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Star size={15} color={selectedClient.avis_google_propose ? '#15803d' : '#d97706'} fill={selectedClient.avis_google_propose ? '#15803d' : 'none'} />
              <p style={{ margin: 0, fontSize: '12.5px', fontWeight: '700', color: selectedClient.avis_google_propose ? '#15803d' : '#92400e' }}>
                {selectedClient.avis_google_propose ? 'Avis Google laissé' : 'Bannière avis Google visible pour ce client'}
              </p>
            </div>
            <button
              onClick={() => basculerAvisGoogle(selectedClient, !selectedClient.avis_google_propose)}
              style={{ background: selectedClient.avis_google_propose ? 'white' : '#0f2d6e', color: selectedClient.avis_google_propose ? '#374151' : 'white', border: selectedClient.avis_google_propose ? '1px solid #e5e7eb' : 'none', padding: '7px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}
            >
              {selectedClient.avis_google_propose ? 'Réafficher la bannière' : 'Marquer avis laissé'}
            </button>
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

      {/* Modale de création de client */}
      {modalOuverte && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,45,110,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1.5rem' }} onClick={fermerModal}>
          <div style={{ background: 'white', borderRadius: '14px', padding: '1.75rem', maxWidth: '480px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: 0 }}>Nouveau client</h2>
              <button onClick={fermerModal} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={18} /></button>
            </div>

            {creationSucces ? (
              <div>
                <p style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 14px', color: '#15803d', fontSize: '13px', margin: '0 0 1rem', lineHeight: '1.6' }}>{creationSucces}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={reinitialiserFormulaire} style={{ flex: 1, background: 'white', color: '#0f2d6e', border: '1px solid #e5e7eb', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>Créer un autre client</button>
                  <button onClick={fermerModal} style={{ flex: 1, background: '#0f2d6e', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>Fermer</button>
                </div>
              </div>
            ) : (
              <>
                {creationErreur && (
                  <p style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 14px', color: '#dc2626', fontSize: '12.5px', margin: '0 0 1rem' }}>{creationErreur}</p>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Prénom *</label>
                    <input value={formulaire.prenom} onChange={(e) => setFormulaire({ ...formulaire, prenom: e.target.value })}
                      style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Nom *</label>
                    <input value={formulaire.nom} onChange={(e) => setFormulaire({ ...formulaire, nom: e.target.value })}
                      style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Email *</label>
                  <input type="email" value={formulaire.email} onChange={(e) => setFormulaire({ ...formulaire, email: e.target.value })}
                    style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Type de compte</label>
                    <select value={formulaire.type} onChange={(e) => setFormulaire({ ...formulaire, type: e.target.value as 'particulier' | 'professionnel' })}
                      style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box', background: 'white' }}>
                      <option value="particulier">Particulier</option>
                      <option value="professionnel">Professionnel</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Téléphone</label>
                    <input value={formulaire.telephone} onChange={(e) => setFormulaire({ ...formulaire, telephone: e.target.value })}
                      style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ marginBottom: '10px' }}>
                  <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Ville</label>
                  <input value={formulaire.ville} onChange={(e) => setFormulaire({ ...formulaire, ville: e.target.value })}
                    style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                </div>

                {formulaire.type === 'professionnel' && (
                  <>
                    <div style={{ marginBottom: '10px' }}>
                      <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>Structure</label>
                      <input value={formulaire.nom_structure} onChange={(e) => setFormulaire({ ...formulaire, nom_structure: e.target.value })}
                        style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                      <div>
                        <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>SIRET</label>
                        <input value={formulaire.siret} onChange={(e) => setFormulaire({ ...formulaire, siret: e.target.value })}
                          style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', color: '#6b7280', fontSize: '11px', fontWeight: '600', marginBottom: '4px' }}>RNA (association)</label>
                        <input value={formulaire.rna} onChange={(e) => setFormulaire({ ...formulaire, rna: e.target.value })}
                          style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' }} />
                      </div>
                    </div>
                  </>
                )}

                <p style={{ color: '#9ca3af', fontSize: '11px', margin: '4px 0 16px', lineHeight: '1.6' }}>
                  Le compte est créé sans mot de passe. Un email est envoyé au client pour qu&apos;il définisse le sien et accède à son espace.
                </p>

                <button onClick={handleCreerClient} disabled={creationEnCours}
                  style={{ width: '100%', background: '#0f2d6e', color: 'white', border: 'none', padding: '11px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: creationEnCours ? 'not-allowed' : 'pointer', opacity: creationEnCours ? 0.6 : 1 }}>
                  {creationEnCours ? 'Création...' : 'Créer le compte'}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}