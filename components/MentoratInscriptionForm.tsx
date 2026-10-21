'use client'

// components/MentoratInscriptionForm.tsx
// Formulaire de pre-inscription au mentorat consultant Qualiopi.
// Envoie vers /api/mentorat-inscription. Aucun paiement en ligne.
// Regles : zero tiret long, NBSP avant euro.

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { PROCHAINE_SESSION, STATUTS, PROFILS, DEMARRAGES } from '@/lib/mentorat-session'

type Status = 'idle' | 'loading' | 'success' | 'error'

const VIDE = {
  prenom: '', nom: '', email: '', telephone: '',
  statut: '', structure: '', siret: '', adresse: '',
  profil: '', demarrage: DEMARRAGES[0] as string, projet: '',
  comprend: false, rgpd: false,
  honeypot: '',
}

const inputStyle = {
  width: '100%', padding: '11px 14px', border: '1px solid #d1d5db', borderRadius: '8px',
  fontSize: '14px', color: '#374151', background: 'white', boxSizing: 'border-box' as const,
  outline: 'none', fontFamily: 'inherit',
}
const labelStyle = { display: 'block' as const, fontSize: '13px', fontWeight: 600 as const, color: '#374151', marginBottom: '6px' }

export default function MentoratInscriptionForm() {
  const [form, setForm] = useState(VIDE)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field: string, value: string | boolean) => setForm(prev => ({ ...prev, [field]: value }))
  const estStructure = form.statut === 'Société ou autre structure' || form.statut === 'Association'

  const handleSubmit = async () => {
    if (!form.prenom.trim() || !form.nom.trim() || !form.email.trim() || !form.adresse.trim() || !form.statut || !form.profil) {
      setErrorMsg('Veuillez remplir tous les champs obligatoires.')
      setStatus('error')
      return
    }
    if (estStructure && !form.structure.trim()) {
      setErrorMsg('Veuillez indiquer le nom de la structure à facturer.')
      setStatus('error')
      return
    }
    if (!form.comprend || !form.rgpd) {
      setErrorMsg('Veuillez cocher les deux cases de confirmation.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/mentorat-inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        setErrorMsg(data.error || 'Une erreur est survenue. Veuillez réessayer.')
        setStatus('error')
      } else {
        setStatus('success')
      }
    } catch {
      setErrorMsg('Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '3rem 2rem', textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <CheckCircle size={32} color="#16a34a" strokeWidth={1.5} />
        </div>
        <h2 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: 700, margin: '0 0 10px' }}>Inscription enregistrée</h2>
        <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, margin: '0 auto 8px', maxWidth: 560 }}>
          Un email de confirmation vous a été adressé. Notre juriste vous contacte sous 48 heures ouvrées pour échanger sur votre projet, puis vous recevez votre facture avec les éléments utiles à votre démarrage.
        </p>
        <p style={{ color: '#6b7280', fontSize: 13, margin: 0 }}>Démarrage prévu à partir du {PROCHAINE_SESSION}. Pensez à vérifier vos courriers indésirables.</p>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2rem' }}>
      <style dangerouslySetInnerHTML={{ __html: '@media (max-width: 640px){.mi-row{grid-template-columns:1fr !important}}' }} />
      <h2 style={{ color: '#0f2d6e', fontSize: '1.25rem', fontWeight: 700, margin: '0 0 1.25rem' }}>Votre inscription</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

        {/* Honeypot : ne jamais afficher */}
        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={e => set('honeypot', e.target.value)} />
        </div>

        <div className="mi-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle}>Prénom *</label>
            <input type="text" value={form.prenom} onChange={e => set('prenom', e.target.value)} maxLength={80} autoComplete="given-name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Nom *</label>
            <input type="text" value={form.nom} onChange={e => set('nom', e.target.value)} maxLength={80} autoComplete="family-name" style={inputStyle} />
          </div>
        </div>

        <div className="mi-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle}>Adresse email *</label>
            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} maxLength={254} autoComplete="email" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Téléphone <span style={{ color: '#9ca3af', fontWeight: 400 }}>(facultatif)</span></label>
            <input type="tel" value={form.telephone} onChange={e => set('telephone', e.target.value)} maxLength={20} autoComplete="tel" style={inputStyle} />
          </div>
        </div>

        <div className="mi-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle}>Vous vous inscrivez en tant que *</label>
            <select value={form.statut} onChange={e => set('statut', e.target.value)} style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer' }}>
              <option value="">Sélectionner une option</option>
              {STATUTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Votre profil de départ *</label>
            <select value={form.profil} onChange={e => set('profil', e.target.value)} style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer' }}>
              <option value="">Sélectionner une option</option>
              {PROFILS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        <div className="mi-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <label style={labelStyle}>Nom de la structure {estStructure ? '*' : <span style={{ color: '#9ca3af', fontWeight: 400 }}>(si facturation à une structure)</span>}</label>
            <input type="text" value={form.structure} onChange={e => set('structure', e.target.value)} maxLength={150} autoComplete="organization" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>SIRET <span style={{ color: '#9ca3af', fontWeight: 400 }}>(facultatif)</span></label>
            <input type="text" value={form.siret} onChange={e => set('siret', e.target.value)} maxLength={20} inputMode="numeric" style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Adresse de facturation *</label>
          <input type="text" placeholder="Numéro, rue, code postal, ville" value={form.adresse} onChange={e => set('adresse', e.target.value)} maxLength={300} autoComplete="street-address" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Démarrage souhaité *</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DEMARRAGES.map(d => (
              <label key={d} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 13, color: '#374151', cursor: 'pointer' }}>
                <input type="radio" name="demarrage" checked={form.demarrage === d} onChange={() => set('demarrage', d)} />
                {d === DEMARRAGES[0] ? `${d} (${PROCHAINE_SESSION})` : d}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label style={labelStyle}>
            Votre projet <span style={{ color: '#9ca3af', fontWeight: 400 }}>(facultatif · {form.projet.length}/3000)</span>
          </label>
          <textarea
            placeholder="Votre parcours, ce que vous souhaitez construire avec ce mentorat, vos questions..."
            value={form.projet} onChange={e => set('projet', e.target.value)} maxLength={3000} rows={5}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
          />
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <input type="checkbox" id="comprend" checked={form.comprend} onChange={e => set('comprend', e.target.checked)} style={{ marginTop: 2, flexShrink: 0, cursor: 'pointer' }} />
          <label htmlFor="comprend" style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.6, cursor: 'pointer' }}>
            Je comprends que cette inscription n&apos;implique aucun règlement immédiat, que ma facture et la convention de mentorat me seront adressées après un premier échange, et que cet accompagnement ne constitue pas une action de formation professionnelle. *
          </label>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <input type="checkbox" id="rgpd" checked={form.rgpd} onChange={e => set('rgpd', e.target.checked)} style={{ marginTop: 2, flexShrink: 0, cursor: 'pointer' }} />
          <label htmlFor="rgpd" style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.6, cursor: 'pointer' }}>
            J&apos;accepte que mes données soient utilisées pour traiter mon inscription, conformément à la{' '}
            <a href="/confidentialite" style={{ color: '#1a4fba', textDecoration: 'none' }}>Politique de confidentialité</a>{' '}
            du Cabinet Cholez-Pagotto. *
          </label>
        </div>

        {status === 'error' && (
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <AlertCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: 1 }} />
            <p style={{ color: '#dc2626', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{errorMsg}</p>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: '#9ca3af', fontSize: 11, margin: 0 }}>* Champs obligatoires</p>
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            style={{ display: 'flex', alignItems: 'center', gap: 8, background: status === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
          >
            <Send size={15} strokeWidth={2} />
            {status === 'loading' ? 'Envoi en cours...' : "Valider mon inscription"}
          </button>
        </div>
      </div>
    </div>
  )
}
