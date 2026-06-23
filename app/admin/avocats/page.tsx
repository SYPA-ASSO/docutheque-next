'use client'

import { useEffect, useState } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { Scale, Link2, Check, X } from 'lucide-react'
import { nomComplet } from '@/lib/avocats'

type AvocatRow = {
  id: string; slug: string; acces_token: string; civilite?: string; prenom?: string; nom: string
  barreau?: string; ville?: string; region?: string; domaines?: string[]; tarif_montant?: number
  email?: string; telephone?: string; actif: boolean; referencement_actif: boolean; frais_acte?: number
}
type ConsultationRow = {
  id: string; reference: string; client_prenom?: string; client_nom?: string; client_email: string
  avocat_id?: string; domaine?: string; canal?: string; creneau_souhaite?: string
  statut: string; source?: string; frais_acte?: number; frais_statut?: string; created_at: string
}

const STATUTS = ['nouvelle', 'transmise', 'acceptee', 'refusee', 'cloturee']
const FRAIS_STATUTS = ['en_attente', 'du', 'facture', 'paye']

export default function AdminAvocats() {
  const { password, isAuth } = useAdmin()
  const [avocats, setAvocats] = useState<AvocatRow[]>([])
  const [consultations, setConsultations] = useState<ConsultationRow[]>([])
  const [facturable, setFacturable] = useState<Record<string, number>>({})
  const [chargement, setChargement] = useState(true)
  const [onglet, setOnglet] = useState<'avocats' | 'demandes'>('avocats')
  const [copie, setCopie] = useState('')

  const charger = () => {
    if (!password) return
    setChargement(true)
    fetch('/api/admin/avocats-list', { headers: { 'x-admin-password': password } })
      .then((r) => r.json())
      .then((d) => { setAvocats(d.avocats || []); setConsultations(d.consultations || []); setFacturable(d.facturable || {}) })
      .finally(() => setChargement(false))
  }
  useEffect(() => { if (isAuth) charger() }, [isAuth, password])

  async function majAvocat(id: string, patch: Record<string, unknown>) {
    await fetch('/api/admin/avocats-update', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ entity: 'avocat', id, ...patch }),
    })
    charger()
  }
  async function majConsult(id: string, patch: Record<string, unknown>) {
    await fetch('/api/admin/avocats-update', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ entity: 'consultation', id, ...patch }),
    })
    charger()
  }

  function copierLien(token: string, id: string) {
    const url = `${window.location.origin}/espace-avocat?token=${token}`
    navigator.clipboard?.writeText(url)
    setCopie(id); setTimeout(() => setCopie(''), 1500)
  }

  if (!isAuth) return null

  const th: React.CSSProperties = { textAlign: 'left', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.04em', color: '#6b7280', padding: '10px 12px', borderBottom: '1px solid #eaedf3', whiteSpace: 'nowrap' }
  const td: React.CSSProperties = { fontSize: '13px', color: '#374151', padding: '10px 12px', borderBottom: '1px solid #f1f3f7', verticalAlign: 'top' }
  const select: React.CSSProperties = { padding: '5px 8px', borderRadius: '6px', border: '1px solid #d7dce5', fontSize: '12px' }

  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
        <Scale size={22} style={{ color: '#0f2d6e' }} />
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#0f2d6e' }}>Avocats partenaires</h1>
      </div>
      <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 1.25rem' }}>Validez les profils, fixez les frais de mise en relation, suivez les demandes.</p>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem' }}>
        <button onClick={() => setOnglet('avocats')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '13px', background: onglet === 'avocats' ? '#0f2d6e' : '#eef1fa', color: onglet === 'avocats' ? 'white' : '#0f2d6e' }}>Avocats ({avocats.length})</button>
        <button onClick={() => setOnglet('demandes')} style={{ padding: '8px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '13px', background: onglet === 'demandes' ? '#0f2d6e' : '#eef1fa', color: onglet === 'demandes' ? 'white' : '#0f2d6e' }}>Demandes ({consultations.length})</button>
      </div>

      {chargement ? <p style={{ color: '#6b7280' }}>Chargement...</p> : onglet === 'avocats' ? (
        <div style={{ overflowX: 'auto', background: 'white', border: '1px solid #eaedf3', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
            <thead><tr>
              <th style={th}>Avocat</th><th style={th}>Localisation</th><th style={th}>Domaines</th>
              <th style={th}>Tarif</th><th style={th}>Frais / acte</th><th style={th}>À facturer</th>
              <th style={th}>Publié</th><th style={th}>Lien profil</th>
            </tr></thead>
            <tbody>
              {avocats.map((a) => (
                <tr key={a.id}>
                  <td style={td}><strong style={{ color: '#0f2d6e' }}>{nomComplet(a)}</strong><br /><span style={{ fontSize: '11px', color: '#9aa2b1' }}>{a.email || a.telephone || ''}</span></td>
                  <td style={td}>{[a.ville, a.region].filter(Boolean).join(', ') || '-'}</td>
                  <td style={{ ...td, maxWidth: '200px' }}><span style={{ fontSize: '11px', color: '#6b7280' }}>{(a.domaines || []).join(', ') || '-'}</span></td>
                  <td style={td}>{a.tarif_montant != null ? `${a.tarif_montant}\u00a0€` : '-'}</td>
                  <td style={td}>
                    <input type="number" step="0.01" defaultValue={a.frais_acte ?? 15} onBlur={(e) => majAvocat(a.id, { frais_acte: e.target.value })} style={{ ...select, width: '70px' }} />&nbsp;€
                  </td>
                  <td style={td}><strong style={{ color: facturable[a.id] ? '#15803d' : '#9aa2b1' }}>{(facturable[a.id] || 0).toFixed(2)}&nbsp;€</strong></td>
                  <td style={td}>
                    <button onClick={() => majAvocat(a.id, { actif: !a.actif })} style={{ padding: '5px 10px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontSize: '11px', fontWeight: 700, background: a.actif ? '#dcfce7' : '#fef3c7', color: a.actif ? '#15803d' : '#92400e', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      {a.actif ? <><Check size={12} /> Publié</> : <><X size={12} /> En attente</>}
                    </button>
                  </td>
                  <td style={td}>
                    <button onClick={() => copierLien(a.acces_token, a.id)} style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #d7dce5', background: 'white', cursor: 'pointer', fontSize: '11px', color: '#1a4fba', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Link2 size={12} /> {copie === a.id ? 'Copié !' : 'Copier'}
                    </button>
                  </td>
                </tr>
              ))}
              {avocats.length === 0 && <tr><td style={td} colSpan={8}>Aucun avocat. Insérez-en via SQL, puis publiez-les ici.</td></tr>}
            </tbody>
          </table>
        </div>
      ) : (
        <div style={{ overflowX: 'auto', background: 'white', border: '1px solid #eaedf3', borderRadius: '12px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
            <thead><tr>
              <th style={th}>Réf.</th><th style={th}>Client</th><th style={th}>Avocat</th><th style={th}>Domaine</th>
              <th style={th}>Canal</th><th style={th}>Source</th><th style={th}>Statut</th><th style={th}>Frais</th><th style={th}>Facturation</th>
            </tr></thead>
            <tbody>
              {consultations.map((c) => {
                const av = avocats.find((a) => a.id === c.avocat_id)
                return (
                  <tr key={c.id}>
                    <td style={td}><span style={{ fontSize: '11px', fontFamily: 'monospace' }}>{c.reference}</span><br /><span style={{ fontSize: '10px', color: '#9aa2b1' }}>{new Date(c.created_at).toLocaleDateString('fr-FR')}</span></td>
                    <td style={td}>{[c.client_prenom, c.client_nom].filter(Boolean).join(' ')}<br /><span style={{ fontSize: '11px', color: '#9aa2b1' }}>{c.client_email}</span></td>
                    <td style={td}>{av ? nomComplet(av) : '-'}</td>
                    <td style={td}>{c.domaine || '-'}</td>
                    <td style={td}>{c.canal === 'visio' ? 'Visio' : 'Téléphone'}{c.creneau_souhaite ? <><br /><span style={{ fontSize: '10px', color: '#9aa2b1' }}>{c.creneau_souhaite}</span></> : null}</td>
                    <td style={td}><span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '50px', background: c.source === 'optimal' ? '#eef1fa' : '#fdf2e9', color: c.source === 'optimal' ? '#0f2d6e' : '#92400e' }}>{c.source === 'optimal' ? 'Optimal' : 'À l\'unité'}</span></td>
                    <td style={td}><select value={c.statut} onChange={(e) => majConsult(c.id, { statut: e.target.value })} style={select}>{STATUTS.map((s) => <option key={s} value={s}>{s}</option>)}</select></td>
                    <td style={td}>{c.frais_acte != null ? `${c.frais_acte}\u00a0€` : '-'}</td>
                    <td style={td}><select value={c.frais_statut || 'en_attente'} onChange={(e) => majConsult(c.id, { frais_statut: e.target.value })} style={select}>{FRAIS_STATUTS.map((s) => <option key={s} value={s}>{s}</option>)}</select></td>
                  </tr>
                )
              })}
              {consultations.length === 0 && <tr><td style={td} colSpan={9}>Aucune demande pour le moment.</td></tr>}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
