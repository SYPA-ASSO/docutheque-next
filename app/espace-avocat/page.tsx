'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Save, CheckCircle2, AlertCircle } from 'lucide-react'
import { REGIONS, DOMAINES, type Avocat } from '@/lib/avocats'

function Editeur() {
  const params = useSearchParams()
  const token = params.get('token') || ''
  const [a, setA] = useState<Avocat | null>(null)
  const [chargement, setChargement] = useState(true)
  const [sauvegarde, setSauvegarde] = useState(false)
  const [ok, setOk] = useState(false)
  const [erreur, setErreur] = useState('')

  useEffect(() => {
    if (!token) { setErreur('Lien d\'accès manquant.'); setChargement(false); return }
    fetch(`/api/avocat/profil?token=${encodeURIComponent(token)}`)
      .then((r) => r.json())
      .then((d) => { if (d.avocat) setA(d.avocat); else setErreur(d.error || 'Profil introuvable.') })
      .catch(() => setErreur('Erreur de chargement.'))
      .finally(() => setChargement(false))
  }, [token])

  const set = (k: keyof Avocat, v: unknown) => setA((p) => (p ? { ...p, [k]: v } as Avocat : p))
  const toggleDomaine = (d: string) => {
    if (!a) return
    const cur = a.domaines || []
    set('domaines', cur.includes(d) ? cur.filter((x) => x !== d) : [...cur, d])
  }

  async function enregistrer() {
    if (!a) return
    setSauvegarde(true); setOk(false); setErreur('')
    try {
      const res = await fetch('/api/avocat/profil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, ...a }),
      })
      const d = await res.json()
      if (!res.ok) setErreur(d.error || 'Erreur lors de l\'enregistrement.')
      else { setOk(true); setTimeout(() => setOk(false), 3000) }
    } catch {
      setErreur('Erreur réseau.')
    }
    setSauvegarde(false)
  }

  const champ: React.CSSProperties = { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d7dce5', fontSize: '13px', color: '#1f2937', boxSizing: 'border-box', fontFamily: 'inherit', background: 'white' }
  const label: React.CSSProperties = { fontSize: '11px', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }
  const bloc: React.CSSProperties = { background: 'white', border: '1px solid #eaedf3', borderRadius: '14px', padding: '1.5rem', marginBottom: '1.25rem' }

  if (chargement) return <p style={{ textAlign: 'center', color: '#6b7280', padding: '4rem' }}>Chargement...</p>
  if (erreur && !a) return (
    <div style={{ maxWidth: '500px', margin: '4rem auto', textAlign: 'center', color: '#6b7280' }}>
      <AlertCircle size={28} style={{ color: '#dc2626', marginBottom: '8px' }} />
      <p>{erreur}</p>
    </div>
  )
  if (!a) return null

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>
      <p style={{ color: '#c8a84b', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', margin: '0 0 6px' }}>Espace avocat partenaire</p>
      <h1 style={{ margin: '0 0 6px', color: '#0f2d6e', fontSize: '1.6rem' }}>Mon profil</h1>
      <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#6b7280' }}>
        Statut : {a.actif ? <strong style={{ color: '#15803d' }}>publié dans l&apos;annuaire</strong> : <strong style={{ color: '#b8860b' }}>en attente de validation</strong>}
        {a.frais_acte != null && <> · Frais de mise en relation : {a.frais_acte}&nbsp;€ par demande aboutie</>}
      </p>

      <div style={bloc}>
        <h2 style={{ fontSize: '14px', color: '#0f2d6e', margin: '0 0 14px' }}>Identité</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          <div><label style={label}>Civilité</label><input style={champ} value={a.civilite || ''} onChange={(e) => set('civilite', e.target.value)} /></div>
          <div><label style={label}>Prénom</label><input style={champ} value={a.prenom || ''} onChange={(e) => set('prenom', e.target.value)} /></div>
          <div><label style={label}>Nom</label><input style={champ} value={a.nom || ''} onChange={(e) => set('nom', e.target.value)} /></div>
          <div><label style={label}>Barreau</label><input style={champ} value={a.barreau || ''} onChange={(e) => set('barreau', e.target.value)} /></div>
          <div><label style={label}>Structure / cabinet</label><input style={champ} value={a.structure || ''} onChange={(e) => set('structure', e.target.value)} /></div>
        </div>
      </div>

      <div style={bloc}>
        <h2 style={{ fontSize: '14px', color: '#0f2d6e', margin: '0 0 14px' }}>Localisation</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          <div><label style={label}>Ville</label><input style={champ} value={a.ville || ''} onChange={(e) => set('ville', e.target.value)} /></div>
          <div><label style={label}>Code postal</label><input style={champ} value={a.code_postal || ''} onChange={(e) => set('code_postal', e.target.value)} /></div>
          <div><label style={label}>Département</label><input style={champ} value={a.departement || ''} onChange={(e) => set('departement', e.target.value)} /></div>
          <div>
            <label style={label}>Région</label>
            <select style={champ} value={a.region || ''} onChange={(e) => set('region', e.target.value)}>
              <option value="">À sélectionner</option>
              {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div style={bloc}>
        <h2 style={{ fontSize: '14px', color: '#0f2d6e', margin: '0 0 6px' }}>Domaines de compétence</h2>
        <p style={{ fontSize: '12px', color: '#9aa2b1', margin: '0 0 12px' }}>Sélectionnez tous les domaines que vous traitez.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {DOMAINES.map((d) => {
            const actif = (a.domaines || []).includes(d)
            return (
              <button key={d} onClick={() => toggleDomaine(d)} style={{ fontSize: '12px', fontWeight: 600, padding: '7px 12px', borderRadius: '50px', cursor: 'pointer', border: actif ? '1.5px solid #0f2d6e' : '1px solid #d7dce5', background: actif ? '#eef1fa' : 'white', color: actif ? '#0f2d6e' : '#6b7280' }}>
                {d}
              </button>
            )
          })}
        </div>
      </div>

      <div style={bloc}>
        <h2 style={{ fontSize: '14px', color: '#0f2d6e', margin: '0 0 14px' }}>Honoraires et disponibilités</h2>
        <p style={{ fontSize: '12px', color: '#9aa2b1', margin: '0 0 12px' }}>Vous fixez librement votre tarif. Il est affiché à titre indicatif sur votre fiche.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          <div><label style={label}>Tarif indicatif (€)</label><input type="number" step="0.01" style={champ} value={a.tarif_montant ?? ''} onChange={(e) => set('tarif_montant', e.target.value)} /></div>
          <div><label style={label}>Unité</label><input style={champ} placeholder="la consultation de 30 min" value={a.tarif_unite || ''} onChange={(e) => set('tarif_unite', e.target.value)} /></div>
          <div><label style={label}>Délai de réponse</label><input style={champ} placeholder="sous 48 h" value={a.delai_reponse || ''} onChange={(e) => set('delai_reponse', e.target.value)} /></div>
        </div>
        <div style={{ marginTop: '12px' }}>
          <label style={label}>Disponibilités</label>
          <input style={champ} placeholder="Lun-Ven 9h-18h, visio ou téléphone" value={a.disponibilites || ''} onChange={(e) => set('disponibilites', e.target.value)} />
        </div>
      </div>

      <div style={bloc}>
        <h2 style={{ fontSize: '14px', color: '#0f2d6e', margin: '0 0 14px' }}>Présentation et contact</h2>
        <label style={label}>Biographie</label>
        <textarea style={{ ...champ, minHeight: '90px', resize: 'vertical', marginBottom: '12px' }} value={a.bio || ''} onChange={(e) => set('bio', e.target.value)} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          <div><label style={label}>Téléphone</label><input style={champ} value={a.telephone || ''} onChange={(e) => set('telephone', e.target.value)} /></div>
          <div><label style={label}>Email</label><input type="email" style={champ} value={a.email || ''} onChange={(e) => set('email', e.target.value)} /></div>
          <div><label style={label}>Site web</label><input style={champ} value={a.site_web || ''} onChange={(e) => set('site_web', e.target.value)} /></div>
        </div>
      </div>

      {erreur && <p style={{ color: '#dc2626', fontSize: '13px' }}>{erreur}</p>}

      <div style={{ position: 'sticky', bottom: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '10px', alignItems: 'center' }}>
        {ok && <span style={{ color: '#15803d', fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}><CheckCircle2 size={16} /> Enregistré</span>}
        <button onClick={enregistrer} disabled={sauvegarde} style={{ background: '#0f2d6e', color: 'white', fontWeight: 700, fontSize: '14px', padding: '12px 28px', borderRadius: '50px', border: 'none', cursor: sauvegarde ? 'wait' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 18px rgba(15,45,110,0.25)' }}>
          <Save size={16} /> {sauvegarde ? 'Enregistrement...' : 'Enregistrer'}
        </button>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <main style={{ background: '#f7f8fb', minHeight: '100vh' }}>
      <Suspense fallback={<p style={{ textAlign: 'center', padding: '4rem', color: '#6b7280' }}>Chargement...</p>}>
        <Editeur />
      </Suspense>
    </main>
  )
}
