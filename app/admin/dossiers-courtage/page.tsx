'use client'

import { useState, useEffect, useCallback } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { Briefcase, CheckCircle, Clock, Mail, Phone, ChevronDown, ChevronUp, Plus, Send, FolderSync, AlertCircle } from 'lucide-react'
import { ETAPES_COURTAGE, PROFILS_COURTAGE, labelEtape, formatDateHeureParis } from '@/lib/courtage'
import { PARTENAIRES_COURTAGE } from '@/lib/courtage-partenaires'

type Evenement = {
  id: string
  dossier_id: string
  type: string
  libelle: string
  detail: string | null
  visible_client: boolean
  created_at: string
}

type Dossier = {
  id: string
  user_id: string
  reference: string
  profil: string
  objet: string
  etape: string
  recueil_besoins: string | null
  recueil_le: string | null
  assureurs_consultes: string | null
  remuneration_note: string | null
  fiche_envoyee_le: string | null
  created_at: string
  users: { prenom: string; nom: string; email: string; telephone: string | null; nom_structure: string | null; rna: string | null } | null
  evenements: Evenement[]
}

type Brouillon = {
  recueil: string
  assureurs: string
  remuneration: string
  noteClient: string
  noteInterne: string
  notifier: boolean
}

type Retour = { type: 'ok' | 'erreur'; texte: string }

const COULEURS_ETAPE: Record<string, { color: string; bg: string }> = {
  demande_recue: { color: '#d97706', bg: '#fef3c7' },
  besoins_recueillis: { color: '#1a4fba', bg: '#eff6ff' },
  consultation: { color: '#1a4fba', bg: '#eff6ff' },
  proposition: { color: '#7c3aed', bg: '#f5f3ff' },
  conclu: { color: '#15803d', bg: '#f0fdf4' },
  sans_suite: { color: '#6b7280', bg: '#f3f4f6' },
}

const champStyle = {
  width: '100%',
  padding: '9px 11px',
  border: '1px solid #d1d5db',
  borderRadius: '8px',
  fontSize: '13px',
  boxSizing: 'border-box' as const,
  outline: 'none',
  fontFamily: 'inherit',
}

const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600' as const, color: '#374151', marginBottom: '5px' }

const boutonPrincipal = (actif: boolean) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  background: actif ? '#0f2d6e' : '#9ca3af',
  color: 'white',
  border: 'none',
  padding: '9px 16px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: '700' as const,
  cursor: actif ? 'pointer' : 'not-allowed',
})

export default function AdminDossiersCourtage() {
  const { password } = useAdmin()
  const [dossiers, setDossiers] = useState<Dossier[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [filtre, setFiltre] = useState<'en_cours' | 'termines' | 'tous'>('en_cours')
  const [brouillons, setBrouillons] = useState<Record<string, Partial<Brouillon>>>({})
  const [occupe, setOccupe] = useState<string | null>(null)
  const [retours, setRetours] = useState<Record<string, Retour | undefined>>({})

  // Formulaire de nouveau dossier
  const [formOuvert, setFormOuvert] = useState(false)
  const [nEmail, setNEmail] = useState('')
  const [nPrenom, setNPrenom] = useState('')
  const [nNom, setNNom] = useState('')
  const [nTel, setNTel] = useState('')
  const [nProfil, setNProfil] = useState<'particulier' | 'professionnel' | 'association'>('particulier')
  const [nStructure, setNStructure] = useState('')
  const [nRna, setNRna] = useState('')
  const [nObjet, setNObjet] = useState('')
  const [nMessage, setNMessage] = useState('')
  const [nOccupe, setNOccupe] = useState(false)
  const [nRetour, setNRetour] = useState<Retour | null>(null)

  const listeVide = PARTENAIRES_COURTAGE.map(s => s.trim()).filter(Boolean).length === 0

  const charger = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/admin/dossiers-courtage-list', { headers: { 'x-admin-password': password } })
    if (res.ok) {
      const d = await res.json()
      setDossiers(d.dossiers || [])
    }
    setLoading(false)
  }, [password])

  useEffect(() => {
    if (!password) return
    charger()
  }, [password, charger])

  const appeler = async (chemin: string, corps: Record<string, unknown>) => {
    const res = await fetch(chemin, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify(corps),
    })
    const data = await res.json().catch(() => ({}))
    return { ok: res.ok && data.success !== false, data }
  }

  const valeur = <K extends keyof Brouillon>(d: Dossier, cle: K): Brouillon[K] => {
    const b = brouillons[d.id]
    if (b && b[cle] !== undefined) return b[cle] as Brouillon[K]
    const defauts: Brouillon = {
      recueil: d.recueil_besoins || '',
      assureurs: d.assureurs_consultes || '',
      remuneration: d.remuneration_note || '',
      noteClient: '',
      noteInterne: '',
      notifier: true,
    }
    return defauts[cle]
  }

  const modifier = <K extends keyof Brouillon>(id: string, cle: K, v: Brouillon[K]) => {
    setBrouillons(b => ({ ...b, [id]: { ...b[id], [cle]: v } }))
  }

  const effacerBrouillon = (id: string, cles: (keyof Brouillon)[]) => {
    setBrouillons(b => {
      const copie = { ...(b[id] || {}) }
      cles.forEach(c => { delete copie[c] })
      return { ...b, [id]: copie }
    })
  }

  const executer = async (
    d: Dossier,
    cle: string,
    chemin: string,
    corps: Record<string, unknown>,
    succes: string,
    aEffacer: (keyof Brouillon)[] = []
  ) => {
    setOccupe(d.id + cle)
    setRetours(r => ({ ...r, [d.id]: undefined }))
    const { ok, data } = await appeler(chemin, corps)
    setOccupe(null)
    if (ok) {
      const suffixe = data.emailEnvoye === true ? ' E-mail envoyé au client.' : data.emailEnvoye === false ? " L'e-mail n'a pas pu être envoyé." : ''
      setRetours(r => ({ ...r, [d.id]: { type: 'ok', texte: succes + suffixe } }))
      effacerBrouillon(d.id, aEffacer)
      await charger()
    } else {
      setRetours(r => ({ ...r, [d.id]: { type: 'erreur', texte: data.error || "L'action a échoué." } }))
    }
  }

  const creerDossier = async () => {
    setNOccupe(true)
    setNRetour(null)
    const { ok, data } = await appeler('/api/admin/dossiers-courtage-create', {
      email: nEmail,
      prenom: nPrenom,
      nom: nNom,
      telephone: nTel,
      profil: nProfil,
      nom_structure: nStructure,
      rna: nRna,
      objet: nObjet,
      message: nMessage,
    })
    setNOccupe(false)
    if (ok) {
      setNRetour({
        type: 'ok',
        texte: `Dossier ${data.reference} créé. ${data.compteCree ? 'Compte client créé. ' : 'Compte client existant rattaché. '}${data.emailEnvoye ? "E-mail d'accès envoyé." : "L'e-mail d'accès n'a pas pu être envoyé : utilisez « Renvoyer l'accès » dans le dossier."}`,
      })
      setNEmail(''); setNPrenom(''); setNNom(''); setNTel(''); setNStructure(''); setNRna(''); setNObjet(''); setNMessage('')
      setFiltre('en_cours')
      await charger()
      if (data.id) setExpanded(data.id)
    } else {
      setNRetour({ type: 'erreur', texte: data.error || 'La création a échoué.' })
    }
  }

  const termine = (d: Dossier) => d.etape === 'conclu' || d.etape === 'sans_suite'
  const dossiersFiltres = dossiers.filter(d => filtre === 'tous' ? true : filtre === 'termines' ? termine(d) : !termine(d))

  if (loading && dossiers.length === 0) return <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement...</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>Dossiers courtage</h1>
          <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>
            {dossiers.filter(d => !termine(d)).length} en cours · {dossiers.length} au total
          </p>
        </div>
        <button onClick={() => { setFormOuvert(o => !o); setNRetour(null) }} style={boutonPrincipal(true)}>
          <Plus size={14} /> Nouveau dossier
        </button>
      </div>

      {listeVide && (
        <div style={{ background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '10px', padding: '12px 14px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <AlertCircle size={16} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
          <p style={{ color: '#92400e', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
            La liste des entreprises d&apos;assurance et des grossistes partenaires est vide (fichier lib/courtage-partenaires.ts). Elle n&apos;empêche pas d&apos;ouvrir un dossier, mais elle est obligatoire avant toute proposition (article L.521-2, II, 1°, b). À défaut, renseignez au moins le champ « assureurs consultés » de chaque dossier.
          </p>
        </div>
      )}

      {formOuvert && (
        <div style={{ background: 'white', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0 }}>Ouvrir un dossier de courtage</p>
          <p style={{ color: '#6b7280', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
            Si l&apos;adresse e-mail correspond déjà à un client, le dossier lui est rattaché. Sinon son espace client est créé et il reçoit un e-mail pour définir son mot de passe.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            <div><label style={labelStyle}>Adresse e-mail *</label><input style={champStyle} type="email" value={nEmail} onChange={e => setNEmail(e.target.value)} /></div>
            <div><label style={labelStyle}>Prénom</label><input style={champStyle} value={nPrenom} onChange={e => setNPrenom(e.target.value)} /></div>
            <div><label style={labelStyle}>Nom</label><input style={champStyle} value={nNom} onChange={e => setNNom(e.target.value)} /></div>
            <div><label style={labelStyle}>Téléphone</label><input style={champStyle} value={nTel} onChange={e => setNTel(e.target.value)} /></div>
            <div>
              <label style={labelStyle}>Profil</label>
              <select style={champStyle} value={nProfil} onChange={e => setNProfil(e.target.value as typeof nProfil)}>
                {PROFILS_COURTAGE.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>
            {nProfil !== 'particulier' && (
              <div><label style={labelStyle}>{nProfil === 'association' ? "Nom de l'association" : 'Raison sociale'}</label><input style={champStyle} value={nStructure} onChange={e => setNStructure(e.target.value)} /></div>
            )}
            {nProfil === 'association' && (
              <div><label style={labelStyle}>Numéro RNA</label><input style={champStyle} value={nRna} onChange={e => setNRna(e.target.value)} /></div>
            )}
          </div>
          <div><label style={labelStyle}>Objet du dossier *</label><input style={champStyle} placeholder="Ex. Responsabilité civile organisateur, bal du 28 novembre 2026" value={nObjet} onChange={e => setNObjet(e.target.value)} /></div>
          <div>
            <label style={labelStyle}>Message d&apos;accompagnement (facultatif, ajouté à l&apos;e-mail d&apos;accès)</label>
            <textarea style={{ ...champStyle, minHeight: '70px', resize: 'vertical' }} value={nMessage} onChange={e => setNMessage(e.target.value)} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={creerDossier} disabled={nOccupe || !nEmail.trim() || !nObjet.trim()} style={boutonPrincipal(!nOccupe && !!nEmail.trim() && !!nObjet.trim())}>
              <Send size={13} /> {nOccupe ? 'Création...' : 'Créer le dossier et envoyer l\'accès'}
            </button>
            {nRetour && <p style={{ color: nRetour.type === 'ok' ? '#15803d' : '#dc2626', fontSize: '12px', margin: 0 }}>{nRetour.texte}</p>}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {([
          { key: 'en_cours', label: 'En cours', count: dossiers.filter(d => !termine(d)).length },
          { key: 'termines', label: 'Terminés', count: dossiers.filter(d => termine(d)).length },
          { key: 'tous', label: 'Tous', count: dossiers.length },
        ] as const).map(f => (
          <button key={f.key} onClick={() => setFiltre(f.key)}
            style={{ padding: '8px 14px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer', background: filtre === f.key ? '#0f2d6e' : 'white', color: filtre === f.key ? 'white' : '#6b7280', border: filtre === f.key ? 'none' : '1px solid #e5e7eb' }}>
            {f.label} ({f.count})
          </button>
        ))}
      </div>

      {dossiersFiltres.length === 0 ? (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <Briefcase size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
          <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Aucun dossier dans cette catégorie.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {dossiersFiltres.map(d => {
            const couleur = COULEURS_ETAPE[d.etape] || COULEURS_ETAPE.demande_recue
            const retour = retours[d.id]
            const ouvert = expanded === d.id
            return (
              <div key={d.id} style={{ background: 'white', border: `1px solid ${d.etape === 'demande_recue' ? '#fcd34d' : '#e5e7eb'}`, borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ padding: '1.25rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }} onClick={() => setExpanded(ouvert ? null : d.id)}>
                  <div style={{ width: '36px', height: '36px', background: couleur.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {d.etape === 'conclu' ? <CheckCircle size={16} color={couleur.color} /> : <Clock size={16} color={couleur.color} />}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                      <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>
                        {d.users ? `${d.users.prenom} ${d.users.nom}` : 'Client'}{d.users && d.users.nom_structure ? ` · ${d.users.nom_structure}` : ''}
                      </p>
                      <span style={{ background: couleur.bg, color: couleur.color, fontSize: '10px', fontWeight: '700', padding: '1px 7px', borderRadius: '4px' }}>{labelEtape(d.etape)}</span>
                      <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '1px 7px', borderRadius: '4px' }}>
                        {(PROFILS_COURTAGE.find(p => p.value === d.profil) || { label: d.profil }).label}
                      </span>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                      {d.reference} · {d.objet} · {new Date(d.created_at).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0, alignItems: 'center' }}>
                    {d.users && d.users.email && (
                      <a href={`mailto:${d.users.email}`} onClick={e => e.stopPropagation()} style={{ background: '#f3f4f6', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Mail size={13} color="#6b7280" />
                      </a>
                    )}
                    {d.users && d.users.telephone && (
                      <a href={`tel:${d.users.telephone}`} onClick={e => e.stopPropagation()} style={{ background: '#f3f4f6', padding: '6px', borderRadius: '6px', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Phone size={13} color="#6b7280" />
                      </a>
                    )}
                    {ouvert ? <ChevronUp size={16} color="#9ca3af" /> : <ChevronDown size={16} color="#9ca3af" />}
                  </div>
                </div>

                {ouvert && (
                  <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid #f3f4f6', display: 'flex', flexDirection: 'column', gap: '18px' }}>

                    {d.users && (
                      <p style={{ color: '#6b7280', fontSize: '12px', margin: '14px 0 0', lineHeight: '1.7' }}>
                        {d.users.email}{d.users.telephone ? ` · ${d.users.telephone}` : ''}{d.users.rna ? ` · RNA ${d.users.rna}` : ''}
                      </p>
                    )}

                    {retour && (
                      <p style={{ color: retour.type === 'ok' ? '#15803d' : '#dc2626', background: retour.type === 'ok' ? '#f0fdf4' : '#fef2f2', border: `1px solid ${retour.type === 'ok' ? '#bbf7d0' : '#fecaca'}`, borderRadius: '8px', padding: '9px 12px', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                        {retour.texte}
                      </p>
                    )}

                    {/* Etape */}
                    <div>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 8px' }}>Étape du dossier</p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {ETAPES_COURTAGE.map(e => {
                          const c = COULEURS_ETAPE[e.value]
                          const actuel = d.etape === e.value
                          return (
                            <button key={e.value} disabled={occupe !== null}
                              onClick={() => { if (!actuel) executer(d, 'etape', '/api/admin/dossiers-courtage-update', { id: d.id, etape: e.value, notifier: valeur(d, 'notifier') }, 'Étape mise à jour.') }}
                              style={{ padding: '7px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: actuel ? 'default' : 'pointer', background: actuel ? c.bg : 'white', color: actuel ? c.color : '#6b7280', border: `1px solid ${actuel ? c.color : '#e5e7eb'}` }}>
                              {e.label}
                            </button>
                          )
                        })}
                      </div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '10px', fontSize: '12px', color: '#374151', cursor: 'pointer' }}>
                        <input type="checkbox" checked={valeur(d, 'notifier')} onChange={e => modifier(d.id, 'notifier', e.target.checked)} />
                        Prévenir le client par e-mail lors d&apos;un changement d&apos;étape ou d&apos;un message
                      </label>
                    </div>

                    {/* Exigences et besoins */}
                    <div>
                      <label style={labelStyle}>
                        Exigences et besoins du client (consignés par écrit, article L.521-4)
                        {d.recueil_le ? ` · dernière version : ${formatDateHeureParis(d.recueil_le)}` : ''}
                      </label>
                      <textarea style={{ ...champStyle, minHeight: '120px', resize: 'vertical' }} value={valeur(d, 'recueil')} onChange={e => modifier(d.id, 'recueil', e.target.value)}
                        placeholder="Nature de l'événement, lieu, horaires, affluence, buvette, matériel, garanties souhaitées, budget, contraintes..." />
                      <div style={{ marginTop: '8px' }}>
                        <button disabled={occupe !== null || !valeur(d, 'recueil').trim() || valeur(d, 'recueil').trim() === (d.recueil_besoins || '')}
                          onClick={() => executer(d, 'recueil', '/api/admin/dossiers-courtage-update', { id: d.id, recueil_besoins: valeur(d, 'recueil') }, 'Exigences et besoins consignés avec la date du jour.', ['recueil'])}
                          style={boutonPrincipal(occupe === null && !!valeur(d, 'recueil').trim() && valeur(d, 'recueil').trim() !== (d.recueil_besoins || ''))}>
                          Consigner cette version
                        </button>
                      </div>
                    </div>

                    {/* Assureurs consultes */}
                    <div>
                      <label style={labelStyle}>Entreprises d&apos;assurance et grossistes consultés pour ce dossier (un par ligne)</label>
                      <textarea style={{ ...champStyle, minHeight: '70px', resize: 'vertical' }} value={valeur(d, 'assureurs')} onChange={e => modifier(d.id, 'assureurs', e.target.value)} />
                      <div style={{ marginTop: '8px' }}>
                        <button disabled={occupe !== null || valeur(d, 'assureurs').trim() === (d.assureurs_consultes || '')}
                          onClick={() => executer(d, 'assureurs', '/api/admin/dossiers-courtage-update', { id: d.id, assureurs_consultes: valeur(d, 'assureurs') }, 'Liste enregistrée.', ['assureurs'])}
                          style={boutonPrincipal(occupe === null && valeur(d, 'assureurs').trim() !== (d.assureurs_consultes || ''))}>
                          Enregistrer
                        </button>
                      </div>
                    </div>

                    {/* Remuneration */}
                    <div>
                      <label style={labelStyle}>Rémunération du cabinet pour ce dossier (affichée au client)</label>
                      <textarea style={{ ...champStyle, minHeight: '60px', resize: 'vertical' }} value={valeur(d, 'remuneration')} onChange={e => modifier(d.id, 'remuneration', e.target.value)}
                        placeholder="Ex. Commission incluse dans la prime, versée par l'assureur. Aucun honoraire n'est facturé pour ce dossier. Le montant de la commission vous sera communiqué avant toute souscription." />
                      <div style={{ marginTop: '8px' }}>
                        <button disabled={occupe !== null || valeur(d, 'remuneration').trim() === (d.remuneration_note || '')}
                          onClick={() => executer(d, 'remuneration', '/api/admin/dossiers-courtage-update', { id: d.id, remuneration_note: valeur(d, 'remuneration') }, 'Information de rémunération enregistrée.', ['remuneration'])}
                          style={boutonPrincipal(occupe === null && valeur(d, 'remuneration').trim() !== (d.remuneration_note || ''))}>
                          Enregistrer
                        </button>
                      </div>
                    </div>

                    {/* Fiche precontractuelle */}
                    <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px 14px' }}>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 6px' }}>Fiche d&apos;information précontractuelle</p>
                      <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 10px', lineHeight: '1.6' }}>
                        {d.fiche_envoyee_le ? `Envoyée le ${formatDateHeureParis(d.fiche_envoyee_le)}.` : "Pas encore envoyée. Elle doit l'être avant toute souscription."}
                        {' '}Elle reprend l&apos;identité du cabinet, son statut, les entreprises d&apos;assurance, la rémunération et la médiation.
                      </p>
                      <button disabled={occupe !== null}
                        onClick={() => executer(d, 'fiche', '/api/admin/dossiers-courtage-fiche', { id: d.id }, d.fiche_envoyee_le ? 'Fiche renvoyée au client.' : 'Fiche envoyée au client.')}
                        style={boutonPrincipal(occupe === null)}>
                        <Send size={13} /> {occupe === d.id + 'fiche' ? 'Envoi...' : d.fiche_envoyee_le ? 'Renvoyer la fiche' : 'Envoyer la fiche par e-mail'}
                      </button>
                    </div>

                    {/* Message et note */}
                    <div>
                      <label style={labelStyle}>Message visible par le client (apparaît dans son suivi)</label>
                      <textarea style={{ ...champStyle, minHeight: '70px', resize: 'vertical' }} value={valeur(d, 'noteClient')} onChange={e => modifier(d.id, 'noteClient', e.target.value)} />
                      <div style={{ marginTop: '8px' }}>
                        <button disabled={occupe !== null || !valeur(d, 'noteClient').trim()}
                          onClick={() => executer(d, 'noteClient', '/api/admin/dossiers-courtage-update', { id: d.id, note_client: valeur(d, 'noteClient'), notifier: valeur(d, 'notifier') }, 'Message publié dans le suivi du client.', ['noteClient'])}
                          style={boutonPrincipal(occupe === null && !!valeur(d, 'noteClient').trim())}>
                          Publier le message
                        </button>
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Note interne (jamais visible par le client)</label>
                      <textarea style={{ ...champStyle, minHeight: '56px', resize: 'vertical' }} value={valeur(d, 'noteInterne')} onChange={e => modifier(d.id, 'noteInterne', e.target.value)} />
                      <div style={{ marginTop: '8px' }}>
                        <button disabled={occupe !== null || !valeur(d, 'noteInterne').trim()}
                          onClick={() => executer(d, 'noteInterne', '/api/admin/dossiers-courtage-update', { id: d.id, note_interne: valeur(d, 'noteInterne') }, 'Note interne enregistrée.', ['noteInterne'])}
                          style={boutonPrincipal(occupe === null && !!valeur(d, 'noteInterne').trim())}>
                          Enregistrer la note
                        </button>
                      </div>
                    </div>

                    {/* Acces et fichiers */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <button disabled={occupe !== null}
                        onClick={() => executer(d, 'acces', '/api/admin/dossiers-courtage-acces', { id: d.id }, "E-mail d'accès renvoyé au client.")}
                        style={{ ...boutonPrincipal(occupe === null), background: occupe === null ? '#1a4fba' : '#9ca3af' }}>
                        <Mail size={13} /> Renvoyer l&apos;accès à l&apos;espace client
                      </button>
                      <a href={`/admin/echanges-fichiers?client=${d.user_id}`}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'white', color: '#0f2d6e', border: '1px solid #bfdbfe', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none' }}>
                        <FolderSync size={13} /> Échanges de fichiers du client
                      </a>
                    </div>

                    {/* Journal */}
                    <div>
                      <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 8px' }}>Journal horodaté</p>
                      {d.evenements.length === 0 ? (
                        <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0 }}>Aucun événement.</p>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {d.evenements.map(e => (
                            <div key={e.id} style={{ background: e.visible_client ? '#f8fafc' : '#fffbeb', border: `1px solid ${e.visible_client ? '#e5e7eb' : '#fde68a'}`, borderRadius: '8px', padding: '8px 11px' }}>
                              <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>
                                {e.libelle}
                                <span style={{ color: e.visible_client ? '#15803d' : '#b45309', fontWeight: '500', marginLeft: '8px', fontSize: '10px' }}>
                                  {e.visible_client ? 'visible par le client' : 'interne'}
                                </span>
                              </p>
                              <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>{formatDateHeureParis(e.created_at)}</p>
                              {e.detail && (
                                <p style={{ color: '#4b5563', fontSize: '12px', margin: '6px 0 0', whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{e.detail}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

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
