'use client'

// app/admin/echanges-fichiers/page.tsx
// Back-office : consulter et deposer des fichiers a destination d'un client
// (echange securise dans les deux sens, meme mecanisme que cote espace client).

import { useState, useEffect, useCallback, useRef } from 'react'
import { useAdmin } from '../layout'
import { supabase } from '@/lib/supabase'
import { Users, Search, Upload, Download, Trash2, FileText, User as UserIcon, Building2, Mail } from 'lucide-react'

type Client = {
  id: string
  prenom: string
  nom: string
  email: string
  nom_structure: string | null
}

type FichierPartage = {
  id: string
  nom: string
  taille: number | null
  typeMime: string | null
  deposePar: 'client' | 'cabinet'
  creeLe: string
  url: string | null
}

function formatTaille(octets: number | null): string {
  if (octets == null) return ''
  if (octets < 1024) return `${octets} o`
  if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} Ko`
  return `${(octets / (1024 * 1024)).toFixed(1).replace('.', ',')} Mo`
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return iso
  }
}

export default function AdminEchangesFichiers() {
  const { password, isMobile } = useAdmin()
  const [clients, setClients] = useState<Client[]>([])
  const [loadingClients, setLoadingClients] = useState(true)
  const [recherche, setRecherche] = useState('')
  const [clientSelectionne, setClientSelectionne] = useState<Client | null>(null)

  const [fichiers, setFichiers] = useState<FichierPartage[]>([])
  const [loadingFichiers, setLoadingFichiers] = useState(false)
  const [erreur, setErreur] = useState('')
  const [uploadEnCours, setUploadEnCours] = useState(false)
  const [emailSujet, setEmailSujet] = useState('')
  const [emailCorps, setEmailCorps] = useState('')
  const [emailEnvoiEnCours, setEmailEnvoiEnCours] = useState(false)
  const [emailErreur, setEmailErreur] = useState('')
  const [emailSucces, setEmailSucces] = useState('')
  const [historique, setHistorique] = useState<{ id: string; sujet: string; corps: string; created_at: string }[]>([])
  const [historiqueLoading, setHistoriqueLoading] = useState(false)
  const [historiqueOuvert, setHistoriqueOuvert] = useState<string | null>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!password) return
    fetch('/api/admin/clients-list', { headers: { 'x-admin-password': password } })
      .then((r) => r.json())
      .then((d) => { setClients(d.clients || []); setLoadingClients(false) })
      .catch(() => setLoadingClients(false))
  }, [password])

  // Selection automatique du client vise par un lien de notification (?client=<id>),
  // par exemple depuis l'email d'alerte de depot de document.
  useEffect(() => {
    if (clients.length === 0 || clientSelectionne) return
    const idVise = new URLSearchParams(window.location.search).get('client')
    if (!idVise) return
    const client = clients.find((c) => c.id === idVise)
    if (client) selectionnerClient(client)
  }, [clients]) // eslint-disable-line react-hooks/exhaustive-deps

  const chargerFichiers = useCallback((client: Client) => {
    if (!password) return
    setLoadingFichiers(true)
    setErreur('')
    fetch(`/api/admin/documents-partages-liste?user_id=${client.id}`, { headers: { 'x-admin-password': password } })
      .then((r) => r.json())
      .then((d) => {
        if (d.fichiers) setFichiers(d.fichiers)
        else setErreur(d.error || 'Le chargement a échoué.')
      })
      .catch(() => setErreur('Une erreur est survenue.'))
      .finally(() => setLoadingFichiers(false))
  }, [password])

  const chargerHistorique = useCallback((client: Client) => {
    if (!password) return
    setHistoriqueLoading(true)
    fetch(`/api/admin/emails-clients-liste?user_id=${client.id}`, { headers: { 'x-admin-password': password } })
      .then((r) => r.json())
      .then((d) => setHistorique(d.emails || []))
      .catch(() => {})
      .finally(() => setHistoriqueLoading(false))
  }, [password])

  const selectionnerClient = (client: Client) => {
    setClientSelectionne(client)
    chargerFichiers(client)
    chargerHistorique(client)
    setEmailSujet('')
    setEmailCorps('')
    setEmailErreur('')
    setEmailSucces('')
    setHistoriqueOuvert(null)
  }

  const handleEnvoyerEmail = async () => {
    if (!clientSelectionne || !password) return
    if (!emailSujet.trim() || !emailCorps.trim()) {
      setEmailErreur("L'objet et le message sont obligatoires.")
      return
    }
    setEmailEnvoiEnCours(true)
    setEmailErreur('')
    setEmailSucces('')
    try {
      const res = await fetch('/api/admin/envoyer-email-client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ userId: clientSelectionne.id, sujet: emailSujet, corps: emailCorps }),
      })
      const data = await res.json()
      if (!res.ok) { setEmailErreur(data.error || "L'envoi a échoué."); return }
      setEmailSucces(`Email envoyé à ${clientSelectionne.prenom} ${clientSelectionne.nom}.`)
      setEmailSujet('')
      setEmailCorps('')
      chargerHistorique(clientSelectionne)
    } catch {
      setEmailErreur('Une erreur est survenue.')
    } finally {
      setEmailEnvoiEnCours(false)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !clientSelectionne || !password) return
    setUploadEnCours(true)
    setErreur('')
    try {
      // 1. Demande d'une URL de depot signee (le fichier ne transite pas par cette requete :
      // les fonctions Vercel refusent tout corps de requete de plus de 4,5 Mo).
      const initRes = await fetch('/api/admin/documents-partages-init-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ userId: clientSelectionne.id, nomFichier: file.name, typeMime: file.type, tailleOctets: file.size }),
      })
      const initData = await initRes.json()
      if (!initRes.ok) { setErreur(initData.error || 'Le dépôt a échoué.'); return }

      // 2. Depot direct du navigateur vers Supabase Storage.
      const { error: uploadError } = await supabase.storage
        .from('documents-partages')
        .uploadToSignedUrl(initData.chemin, initData.token, file)
      if (uploadError) { setErreur('Le dépôt du fichier a échoué.'); return }

      // 3. Confirmation aupres du serveur.
      const confirmRes = await fetch('/api/admin/documents-partages-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ userId: clientSelectionne.id, chemin: initData.chemin, nomFichier: file.name, tailleOctets: file.size, typeMime: file.type }),
      })
      const confirmData = await confirmRes.json()
      if (!confirmRes.ok) { setErreur(confirmData.error || "La confirmation du dépôt a échoué."); return }

      chargerFichiers(clientSelectionne)
    } catch {
      setErreur('Une erreur est survenue.')
    } finally {
      setUploadEnCours(false)
      if (inputFileRef.current) inputFileRef.current.value = ''
    }
  }

  const handleSupprimer = async (fichier: FichierPartage) => {
    if (!password || !clientSelectionne) return
    if (!confirm(`Supprimer définitivement "${fichier.nom}" ?`)) return
    try {
      const res = await fetch('/api/admin/documents-partages-delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ id: fichier.id }),
      })
      const data = await res.json()
      if (!res.ok) { setErreur(data.error || 'La suppression a échoué.'); return }
      chargerFichiers(clientSelectionne)
    } catch {
      setErreur('Une erreur est survenue.')
    }
  }

  const clientsFiltres = clients.filter((c) => {
    const q = recherche.toLowerCase()
    return !q || `${c.prenom} ${c.nom} ${c.email} ${c.nom_structure || ''}`.toLowerCase().includes(q)
  })

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '1.5rem', alignItems: isMobile ? 'stretch' : 'flex-start' }}>

      {/* LISTE DES CLIENTS */}
      <div style={{ flex: isMobile ? '1 1 auto' : '0 0 300px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
        <h2 style={{ margin: '0 0 12px', fontSize: '15px', color: '#0f2d6e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Users size={16} /> Clients
        </h2>
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          <input
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            placeholder="Rechercher un client..."
            style={{ width: '100%', padding: '8px 10px 8px 30px', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12.5px', boxSizing: 'border-box' }}
          />
        </div>
        {loadingClients ? (
          <p style={{ color: '#9ca3af', fontSize: '12.5px' }}>Chargement...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '520px', overflowY: 'auto' }}>
            {clientsFiltres.map((c) => (
              <button
                key={c.id}
                onClick={() => selectionnerClient(c)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left',
                  padding: '8px 10px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  background: clientSelectionne?.id === c.id ? '#eff6ff' : 'transparent',
                }}
              >
                {c.nom_structure ? <Building2 size={14} color="#6b7280" /> : <UserIcon size={14} color="#6b7280" />}
                <div style={{ minWidth: 0 }}>
                  <p style={{ margin: 0, fontSize: '12.5px', fontWeight: 600, color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {c.prenom} {c.nom}
                  </p>
                  <p style={{ margin: 0, fontSize: '11px', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.email}</p>
                </div>
              </button>
            ))}
            {clientsFiltres.length === 0 && <p style={{ color: '#9ca3af', fontSize: '12px' }}>Aucun client trouvé.</p>}
          </div>
        )}
      </div>

      {/* FICHIERS DU CLIENT SELECTIONNE */}
      <div style={{ flex: 1, background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', minHeight: '400px' }}>
        {!clientSelectionne ? (
          <p style={{ color: '#9ca3af', fontSize: '13px' }}>Sélectionnez un client pour consulter ou déposer un fichier.</p>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h2 style={{ margin: '0 0 2px', fontSize: '16px', color: '#0f2d6e', fontWeight: 700 }}>{clientSelectionne.prenom} {clientSelectionne.nom}</h2>
                <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af' }}>{clientSelectionne.email}</p>
              </div>
              <div>
                <input ref={inputFileRef} type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.docx" onChange={handleUpload} style={{ display: 'none' }} id="admin-upload-fichier" />
                <label htmlFor="admin-upload-fichier" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0f2d6e', color: 'white', padding: '9px 16px', borderRadius: '8px', fontSize: '12.5px', fontWeight: 700, cursor: uploadEnCours ? 'not-allowed' : 'pointer', opacity: uploadEnCours ? 0.6 : 1 }}>
                  <Upload size={14} /> {uploadEnCours ? 'Envoi...' : 'Déposer un fichier'}
                </label>
              </div>
            </div>

            {erreur && <p style={{ color: '#dc2626', fontSize: '12.5px', marginBottom: '12px' }}>{erreur}</p>}

            {loadingFichiers ? (
              <p style={{ color: '#9ca3af', fontSize: '13px' }}>Chargement des fichiers...</p>
            ) : fichiers.length === 0 ? (
              <p style={{ color: '#9ca3af', fontSize: '13px' }}>Aucun fichier échangé avec ce client pour le moment.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {fichiers.map((f, i) => (
                  <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderTop: i === 0 ? 'none' : '1px solid #f1f3f7' }}>
                    <FileText size={16} color="#6b7280" style={{ flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.nom}</p>
                      <p style={{ margin: 0, fontSize: '11px', color: '#9aa2b1' }}>
                        {f.deposePar === 'cabinet' ? 'Déposé par le cabinet' : 'Déposé par le client'} · {formatTaille(f.taille)} · {formatDate(f.creeLe)}
                      </p>
                    </div>
                    {f.url && (
                      <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: 700, color: '#0f2d6e', border: '1px solid #d7dce5', borderRadius: '6px', padding: '6px 10px', textDecoration: 'none', flexShrink: 0 }}>
                        <Download size={12} /> Télécharger
                      </a>
                    )}
                    <button onClick={() => handleSupprimer(f)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: 700, color: '#dc2626', background: 'white', border: '1px solid #fecaca', borderRadius: '6px', padding: '6px 10px', cursor: 'pointer', flexShrink: 0 }}>
                      <Trash2 size={12} /> Supprimer
                    </button>
                  </div>
                ))}
              </div>
            )}

            <p style={{ margin: '1.25rem 0 0', fontSize: '11px', color: '#9aa2b1' }}>
              Formats acceptés : PDF, image (JPG, PNG, WEBP, HEIC) ou DOCX. Taille maximale : 20 Mo.
            </p>

            {/* COMPOSITEUR D'EMAIL LIBRE */}
            <div style={{ marginTop: '1.75rem', paddingTop: '1.5rem', borderTop: '1px solid #f1f3f7' }}>
              <h2 style={{ margin: '0 0 4px', fontSize: '14px', color: '#0f2d6e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} /> Envoyer un email à ce client
              </h2>
              <p style={{ margin: '0 0 12px', fontSize: '11px', color: '#9aa2b1' }}>
                Message libre, pour un suivi de dossier propre à ce client. Le message est habillé aux couleurs du site et inclut un bouton vers son espace client.
              </p>

              {emailErreur && <p style={{ color: '#dc2626', fontSize: '12px', marginBottom: '8px' }}>{emailErreur}</p>}
              {emailSucces && <p style={{ color: '#15803d', fontSize: '12px', marginBottom: '8px' }}>{emailSucces}</p>}

              <input
                value={emailSujet}
                onChange={(e) => setEmailSujet(e.target.value)}
                placeholder="Objet de l'email"
                style={{ width: '100%', padding: '9px 10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box', marginBottom: '8px' }}
              />
              <textarea
                value={emailCorps}
                onChange={(e) => setEmailCorps(e.target.value)}
                placeholder="Votre message..."
                rows={8}
                style={{ width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box', fontFamily: 'inherit', resize: 'vertical', marginBottom: '10px' }}
              />
              <button
                onClick={handleEnvoyerEmail}
                disabled={emailEnvoiEnCours}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0f2d6e', color: 'white', border: 'none', padding: '9px 18px', borderRadius: '8px', fontSize: '12.5px', fontWeight: 700, cursor: emailEnvoiEnCours ? 'not-allowed' : 'pointer', opacity: emailEnvoiEnCours ? 0.6 : 1 }}
              >
                <Mail size={13} /> {emailEnvoiEnCours ? 'Envoi...' : "Envoyer l'email"}
              </button>
              <p style={{ margin: '8px 0 0', fontSize: '10.5px', color: '#9aa2b1' }}>
                Une copie est automatiquement envoyée en CCI à contact@cholez-pagotto.fr.
              </p>

              {/* HISTORIQUE */}
              <div style={{ marginTop: '1.5rem' }}>
                <p style={{ margin: '0 0 8px', fontSize: '11.5px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Historique des emails envoyés
                </p>
                {historiqueLoading ? (
                  <p style={{ color: '#9ca3af', fontSize: '12px' }}>Chargement...</p>
                ) : historique.length === 0 ? (
                  <p style={{ color: '#9ca3af', fontSize: '12px' }}>Aucun email envoyé à ce client pour le moment.</p>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {historique.map((h, i) => (
                      <div key={h.id} style={{ borderTop: i === 0 ? 'none' : '1px solid #f1f3f7', padding: '10px 0' }}>
                        <button
                          onClick={() => setHistoriqueOuvert(historiqueOuvert === h.id ? null : h.id)}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', gap: '10px' }}
                        >
                          <span style={{ fontSize: '12.5px', fontWeight: 600, color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{h.sujet}</span>
                          <span style={{ fontSize: '11px', color: '#9aa2b1', flexShrink: 0 }}>{formatDate(h.created_at)}</span>
                        </button>
                        {historiqueOuvert === h.id && (
                          <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#374151', lineHeight: 1.7, whiteSpace: 'pre-line', background: '#f8fafc', border: '1px solid #f1f3f7', borderRadius: '8px', padding: '10px 12px' }}>
                            {h.corps}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
