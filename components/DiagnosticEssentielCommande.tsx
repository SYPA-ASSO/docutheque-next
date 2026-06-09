'use client'

// components/DiagnosticEssentielCommande.tsx
// Commande d'un forfait de diagnostic RGPD (essentiel ou standard) : carte (Stripe Checkout) ou virement.
// Le forfait est passe en prop ; libelle, prix et delai viennent de lib/diagnostic-forfaits.
// Lit les parametres de retour ?paye=1&session_id / ?annule=1 cote client.
// Regles : zero tiret long, NBSP avant euro, Notre juriste singulier.

import { useState, useEffect, useRef } from 'react'
import { CreditCard, Landmark, CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'
import { DIAGNOSTIC_FORFAITS, type ForfaitId } from '@/lib/diagnostic-forfaits'

type Vue = 'choix' | 'virement_form' | 'success_carte' | 'pending_carte' | 'success_virement' | 'annule'

const inputStyle = {
  width: '100%',
  padding: '10px 13px',
  border: '1px solid #d1d5db',
  borderRadius: 8,
  fontSize: 13,
  color: '#374151',
  background: 'white',
  boxSizing: 'border-box' as const,
  outline: 'none',
  fontFamily: 'inherit',
}

export default function DiagnosticEssentielCommande({ forfait = 'essentiel' }: { forfait?: ForfaitId }) {
  const f = DIAGNOSTIC_FORFAITS[forfait]

  const [vue, setVue] = useState<Vue>('choix')
  const [chargeCarte, setChargeCarte] = useState(false)
  const [erreurCarte, setErreurCarte] = useState('')
  const [reference, setReference] = useState('')

  const [form, setForm] = useState({
    nom: '',
    structure: '',
    email: '',
    telephone: '',
    rgpd: false,
    website: '', // honeypot
  })
  const [statutVirement, setStatutVirement] = useState<'idle' | 'loading' | 'error'>('idle')
  const [erreurVirement, setErreurVirement] = useState('')

  const retourTraite = useRef(false)

  useEffect(() => {
    if (retourTraite.current) return
    retourTraite.current = true

    const params = new URLSearchParams(window.location.search)
    const paye = params.get('paye')
    const sessionId = params.get('session_id')
    const annule = params.get('annule')

    if (paye === '1' && sessionId) {
      setVue('pending_carte')
      fetch('/api/checkout/diagnostic/confirme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
      })
        .then(res => res.json())
        .then(() => {
          // Le paiement est valide cote Stripe ; on affiche la confirmation dans tous les cas
          setVue('success_carte')
        })
        .catch(() => setVue('success_carte'))
    } else if (annule === '1') {
      setVue('annule')
    }
  }, [])

  const set = (field: string, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const payerCarte = async () => {
    setChargeCarte(true)
    setErreurCarte('')
    try {
      const res = await fetch('/api/checkout/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ forfait }),
      })
      const data = await res.json()
      if (res.ok && data.url) {
        window.location.href = data.url
      } else {
        setErreurCarte(data.error || 'Le paiement par carte est momentanément indisponible. Vous pouvez régler par virement.')
        setChargeCarte(false)
      }
    } catch {
      setErreurCarte('Erreur réseau. Vous pouvez régler par virement.')
      setChargeCarte(false)
    }
  }

  const soumettreVirement = async () => {
    if (!form.nom.trim()) { setErreurVirement('Veuillez saisir votre nom.'); setStatutVirement('error'); return }
    if (!form.structure.trim()) { setErreurVirement('Veuillez indiquer votre structure.'); setStatutVirement('error'); return }
    if (!form.email.trim()) { setErreurVirement('Veuillez saisir votre adresse email.'); setStatutVirement('error'); return }
    if (!form.telephone.trim()) { setErreurVirement('Veuillez saisir votre téléphone.'); setStatutVirement('error'); return }
    if (!form.rgpd) { setErreurVirement('Veuillez accepter la politique de confidentialité.'); setStatutVirement('error'); return }

    setStatutVirement('loading')
    setErreurVirement('')
    try {
      const res = await fetch('/api/checkout/diagnostic/commande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, forfait }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setReference(data.reference || '')
        setVue('success_virement')
      } else {
        setErreurVirement(data.error || 'Une erreur est survenue. Veuillez réessayer.')
        setStatutVirement('error')
      }
    } catch {
      setErreurVirement('Erreur réseau. Veuillez réessayer.')
      setStatutVirement('error')
    }
  }

  // ETAT : paiement carte en cours de confirmation
  if (vue === 'pending_carte') {
    return (
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '2rem', textAlign: 'center' }}>
        <Loader2 size={28} className="spin" color="#7c3aed" style={{ margin: '0 auto 1rem' }} />
        <p style={{ fontSize: 14, fontWeight: 700, color: '#0f2d6e', margin: '0 0 0.3rem' }}>Confirmation de votre paiement</p>
        <p style={{ fontSize: 12.5, color: '#6b7280', margin: 0 }}>Merci de patienter quelques instants...</p>
      </div>
    )
  }

  // ETAT : succes carte
  if (vue === 'success_carte') {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <CheckCircle size={24} color="#16a34a" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#15803d', margin: 0 }}>Paiement confirmé</h3>
        </div>
        <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
          Merci pour votre commande du {f.label}. Vous allez recevoir par email le questionnaire de cadrage.
          Dès réception de vos réponses, notre juriste vous remet votre rapport de conformité sous {f.delai}.
        </p>
        <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
          Vous n'avez pas reçu l'email sous quelques minutes ? Pensez à vérifier vos courriers indésirables,
          ou écrivez-nous via le <a href="/contact" style={{ color: '#16a34a', textDecoration: 'none', fontWeight: 600 }}>formulaire de contact</a>.
        </p>
      </div>
    )
  }

  // ETAT : succes virement
  if (vue === 'success_virement') {
    return (
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 12, padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <CheckCircle size={24} color="#16a34a" />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#15803d', margin: 0 }}>Commande enregistrée</h3>
        </div>
        <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
          Vous allez recevoir par email nos coordonnées bancaires (RIB) et votre référence de paiement, ainsi que le questionnaire de cadrage.
        </p>
        {reference ? (
          <div style={{ background: 'white', border: '1px solid #bbf7d0', borderRadius: 8, padding: '0.75rem 1rem', margin: '0 0 0.75rem' }}>
            <p style={{ fontSize: 11, color: '#6b7280', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Référence à indiquer sur le virement</p>
            <p style={{ fontSize: 15, fontWeight: 800, color: '#0f2d6e', margin: 0, letterSpacing: '0.03em' }}>{reference}</p>
          </div>
        ) : null}
        <p style={{ fontSize: 12, color: '#6b7280', margin: 0 }}>
          Le délai de livraison de {f.delai} démarre à la réception de votre virement et de vos réponses au questionnaire.
        </p>
      </div>
    )
  }

  // ETAT : formulaire virement
  if (vue === 'virement_form') {
    return (
      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
          <Landmark size={18} strokeWidth={1.75} style={{ color: '#0f2d6e' }} />
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2d6e', margin: 0 }}>Régler par virement</h3>
        </div>
        <p style={{ fontSize: 12, color: '#6b7280', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
          Renseignez vos coordonnées : nous vous envoyons par email le RIB, votre référence de paiement et le questionnaire de cadrage.
        </p>

        <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={e => set('website', e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <input type="text" placeholder="Nom et prénom *" value={form.nom} maxLength={100} autoComplete="name" onChange={e => { set('nom', e.target.value); setErreurVirement('') }} style={inputStyle} />
          <input type="text" placeholder="Nom de votre structure *" value={form.structure} maxLength={150} autoComplete="organization" onChange={e => { set('structure', e.target.value); setErreurVirement('') }} style={inputStyle} />
          <input type="email" placeholder="Adresse email *" value={form.email} maxLength={254} autoComplete="email" onChange={e => { set('email', e.target.value); setErreurVirement('') }} style={inputStyle} />
          <input type="tel" placeholder="Téléphone *" value={form.telephone} maxLength={20} autoComplete="tel" onChange={e => { set('telephone', e.target.value); setErreurVirement('') }} style={inputStyle} />

          <label style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', cursor: 'pointer', margin: '0.2rem 0' }}>
            <input type="checkbox" checked={form.rgpd} onChange={e => { set('rgpd', e.target.checked); setErreurVirement('') }} style={{ marginTop: 2, flexShrink: 0, cursor: 'pointer' }} />
            <span style={{ color: '#6b7280', fontSize: 11.5, lineHeight: 1.55 }}>
              J'accepte que mes données soient utilisées pour traiter ma commande, conformément à la{' '}
              <a href="/confidentialite" style={{ color: '#7c3aed', textDecoration: 'none' }}>politique de confidentialité</a>. *
            </span>
          </label>

          {statutVirement === 'error' && (
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 12px' }}>
              <AlertCircle size={15} color="#dc2626" style={{ flexShrink: 0, marginTop: 1 }} />
              <p style={{ color: '#dc2626', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{erreurVirement}</p>
            </div>
          )}

          <button
            type="button"
            onClick={soumettreVirement}
            disabled={statutVirement === 'loading'}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: statutVirement === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '12px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: statutVirement === 'loading' ? 'not-allowed' : 'pointer', width: '100%' }}
          >
            <Send size={15} />
            {statutVirement === 'loading' ? 'Envoi en cours...' : 'Recevoir le RIB et valider ma commande'}
          </button>

          <button type="button" onClick={() => { setVue('choix'); setStatutVirement('idle'); setErreurVirement('') }} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: 12, cursor: 'pointer', marginTop: '0.25rem' }}>
            Revenir au choix du mode de paiement
          </button>
        </div>
      </div>
    )
  }

  // ETAT : choix du mode de paiement (par defaut)
  return (
    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.5rem' }}>

      {vue === 'annule' && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: 8, padding: '10px 12px', marginBottom: '1.25rem' }}>
          <AlertCircle size={15} color="#d97706" style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: '#92400e', fontSize: 12, margin: 0, lineHeight: 1.5 }}>Paiement annulé. Vous pouvez réessayer ou choisir le virement.</p>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #f3f4f6' }}>
        <span style={{ fontSize: 13, color: '#6b7280' }}>{f.label}</span>
        <span style={{ fontSize: '1.6rem', fontWeight: 800, color: '#7c3aed' }}>{f.prix}</span>
      </div>

      {/* Carte bancaire */}
      <button
        type="button"
        onClick={payerCarte}
        disabled={chargeCarte}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: chargeCarte ? '#a78bda' : '#7c3aed', color: 'white', border: 'none', padding: '13px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: chargeCarte ? 'not-allowed' : 'pointer', width: '100%', marginBottom: '0.75rem' }}
      >
        {chargeCarte ? <Loader2 size={16} className="spin" /> : <CreditCard size={16} />}
        {chargeCarte ? 'Redirection vers le paiement...' : 'Payer par carte bancaire'}
      </button>

      {erreurCarte && (
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '10px 12px', marginBottom: '0.75rem' }}>
          <AlertCircle size={15} color="#dc2626" style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ color: '#dc2626', fontSize: 12, margin: 0, lineHeight: 1.5 }}>{erreurCarte}</p>
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0.5rem 0' }}>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
        <span style={{ fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ou</span>
        <div style={{ flex: 1, height: 1, background: '#e5e7eb' }} />
      </div>

      {/* Virement */}
      <button
        type="button"
        onClick={() => setVue('virement_form')}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'white', color: '#0f2d6e', border: '1px solid #0f2d6e', padding: '13px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', width: '100%' }}
      >
        <Landmark size={16} /> Régler par virement bancaire
      </button>

      <p style={{ fontSize: 11, color: '#9ca3af', textAlign: 'center', lineHeight: 1.6, margin: '1rem 0 0' }}>
        Paiement par carte sécurisé. Livrable sous {f.delai}.
        Le questionnaire de cadrage vous est envoyé dès le paiement.
      </p>

      <style>{`.spin { animation: spin 1s linear infinite; } @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}