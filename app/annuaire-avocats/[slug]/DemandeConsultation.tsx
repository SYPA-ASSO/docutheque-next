'use client'

import { useState } from 'react'
import { Phone, Video, CheckCircle2 } from 'lucide-react'

export default function DemandeConsultation({
  avocatSlug, avocatNom, domaines, ville,
}: { avocatSlug: string; avocatNom: string; domaines: string[]; ville: string }) {
  const [ouvert, setOuvert] = useState(false)
  const [envoye, setEnvoye] = useState(false)
  const [chargement, setChargement] = useState(false)
  const [erreur, setErreur] = useState('')
  const [form, setForm] = useState({
    client_prenom: '', client_nom: '', client_email: '', client_telephone: '',
    domaine: domaines[0] || '', canal: 'telephone', creneau_souhaite: '', description: '',
  })

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const champ: React.CSSProperties = {
    width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d7dce5',
    fontSize: '13px', color: '#1f2937', background: 'white', boxSizing: 'border-box', fontFamily: 'inherit',
  }
  const label: React.CSSProperties = { fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }

  async function envoyer() {
    setErreur('')
    if (!form.client_email || !form.client_nom || !form.description) {
      setErreur('Merci de renseigner votre nom, votre email et votre situation.')
      return
    }
    setChargement(true)
    try {
      const res = await fetch('/api/consultations/creer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, avocat_slug: avocatSlug, ville: ville || form.domaine }),
      })
      const data = await res.json()
      if (!res.ok) { setErreur(data.error || 'Une erreur est survenue.'); setChargement(false); return }
      setEnvoye(true)
    } catch {
      setErreur('Une erreur réseau est survenue. Réessayez.')
    }
    setChargement(false)
  }

  if (envoye) {
    return (
      <div style={{ background: 'linear-gradient(135deg,#f3f8f4,#eaf4ec)', border: '1px solid #cfe6d6', borderRadius: '16px', padding: '1.75rem', textAlign: 'center' }}>
        <CheckCircle2 size={32} style={{ color: '#15803d', marginBottom: '8px' }} />
        <h3 style={{ margin: '0 0 8px', color: '#0f2d6e' }}>Demande transmise</h3>
        <p style={{ margin: 0, fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>
          Votre demande de mise en relation avec {avocatNom} a bien été enregistrée. Après vérification d&apos;absence de
          conflit d&apos;intérêts, l&apos;avocat vous recontactera directement au créneau souhaité.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: '#0f2d6e', borderRadius: '16px', padding: '1.75rem', color: 'white' }}>
      <h3 style={{ margin: '0 0 6px', fontSize: '1.15rem' }}>Demander une consultation</h3>
      <p style={{ margin: '0 0 16px', fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
        Incluse dans l&apos;abonnement Optimal, ou à l&apos;unité. Vous décrivez votre situation, l&apos;avocat vérifie l&apos;absence de
        conflit d&apos;intérêts, puis vous recontacte.
      </p>

      {!ouvert ? (
        <button onClick={() => setOuvert(true)} style={{ background: 'linear-gradient(135deg,#c8a84b,#b8860b)', color: '#0f2d6e', fontWeight: 700, fontSize: '14px', padding: '12px 26px', borderRadius: '50px', border: 'none', cursor: 'pointer' }}>
          Demander une mise en relation
        </button>
      ) : (
        <div style={{ display: 'grid', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            <div><label style={label}>Prénom</label><input style={champ} value={form.client_prenom} onChange={(e) => set('client_prenom', e.target.value)} /></div>
            <div><label style={label}>Nom *</label><input style={champ} value={form.client_nom} onChange={(e) => set('client_nom', e.target.value)} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            <div><label style={label}>Email *</label><input type="email" style={champ} value={form.client_email} onChange={(e) => set('client_email', e.target.value)} /></div>
            <div><label style={label}>Téléphone</label><input style={champ} value={form.client_telephone} onChange={(e) => set('client_telephone', e.target.value)} /></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
            <div>
              <label style={label}>Domaine</label>
              <select style={champ} value={form.domaine} onChange={(e) => set('domaine', e.target.value)}>
                {(domaines.length ? domaines : ['Autre']).map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div><label style={label}>Créneau souhaité</label><input style={champ} placeholder="Ex : jeudi après-midi" value={form.creneau_souhaite} onChange={(e) => set('creneau_souhaite', e.target.value)} /></div>
          </div>
          <div>
            <label style={label}>Canal</label>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[{ v: 'telephone', l: 'Téléphone', I: Phone }, { v: 'visio', l: 'Visioconférence', I: Video }].map(({ v, l, I }) => (
                <button key={v} onClick={() => set('canal', v)} style={{ flex: 1, padding: '10px', borderRadius: '8px', border: form.canal === v ? '2px solid #c8a84b' : '1px solid rgba(255,255,255,0.25)', background: form.canal === v ? 'rgba(200,168,75,0.15)' : 'transparent', color: 'white', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <I size={14} /> {l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label style={label}>Votre situation, en quelques lignes *</label>
            <textarea style={{ ...champ, minHeight: '90px', resize: 'vertical' }} value={form.description} onChange={(e) => set('description', e.target.value)} />
          </div>

          {erreur && <p style={{ color: '#fecaca', fontSize: '12px', margin: 0 }}>{erreur}</p>}

          <button onClick={envoyer} disabled={chargement} style={{ background: 'linear-gradient(135deg,#c8a84b,#b8860b)', color: '#0f2d6e', fontWeight: 700, fontSize: '14px', padding: '12px', borderRadius: '50px', border: 'none', cursor: chargement ? 'wait' : 'pointer', opacity: chargement ? 0.7 : 1 }}>
            {chargement ? 'Envoi...' : 'Envoyer ma demande'}
          </button>
          <p style={{ fontSize: '10.5px', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>
            En envoyant, vous acceptez que ces informations soient transmises au seul avocat choisi, pour le traitement de votre demande.
          </p>
        </div>
      )}
    </div>
  )
}
