'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, Mail, Clock, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const SUJETS = [
  'Question générale',
  'Demande de devis — Accompagnement créateurs',
  'Mon abonnement Optimal',
  'Problème technique',
  'Exercice de mes droits (RGPD)',
  'Partenariat / Presse',
  'Autre',
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    rgpd: false,
    honeypot: '', // champ invisible — ne jamais afficher
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field: string, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async () => {
    // Validation côté client
    if (!form.nom.trim() || !form.email.trim() || !form.sujet || !form.message.trim()) {
      setErrorMsg('Veuillez remplir tous les champs obligatoires.')
      setStatus('error')
      return
    }
    if (!form.rgpd) {
      setErrorMsg('Vous devez accepter la politique de confidentialité pour envoyer votre message.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
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

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    background: 'white',
    boxSizing: 'border-box' as const,
    outline: 'none',
    fontFamily: 'inherit',
  }
  const labelStyle = {
    display: 'block' as const,
    fontSize: '13px',
    fontWeight: '600' as const,
    color: '#374151',
    marginBottom: '6px',
  }

  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: '500' }}>Contact</span>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>

          {/* FORMULAIRE */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ marginBottom: '2rem' }}>
              <span style={{ display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px' }}>CONTACT</span>
              <h1 style={{ color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px' }}>Nous contacter</h1>
              <p style={{ color: '#6b7280', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                Une question, une demande de devis ou un renseignement ? Utilisez le formulaire ci-dessous. Nous vous répondons dans les meilleurs délais.
              </p>
            </div>

            {/* SUCCÈS */}
            {status === 'success' ? (
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                <div style={{ width: '64px', height: '64px', background: '#f0fdf4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle size={32} color="#16a34a" strokeWidth={1.5} />
                </div>
                <h2 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 10px' }}>Message envoyé</h2>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', margin: '0 0 8px' }}>
                  Votre message a bien été transmis. Un email de confirmation vous a été adressé.
                </p>
                <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 24px' }}>
                  Nous vous répondrons dans les meilleurs délais (24 à 48h ouvrées pour les questions juridiques).
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ nom: '', email: '', telephone: '', sujet: '', message: '', rgpd: false, honeypot: '' }) }}
                  style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>

                {/* HONEYPOT — invisible, ne jamais afficher ni rendre visible */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={e => set('honeypot', e.target.value)}
                  />
                </div>

                {/* LIGNE 1 : Nom + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Nom et prénom *</label>
                    <input
                      type="text"
                      placeholder="Marie Dupont"
                      value={form.nom}
                      onChange={e => set('nom', e.target.value)}
                      maxLength={100}
                      autoComplete="name"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Adresse email *</label>
                    <input
                      type="email"
                      placeholder="marie.dupont@email.fr"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      maxLength={254}
                      autoComplete="email"
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* LIGNE 2 : Téléphone + Sujet */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Téléphone <span style={{ color: '#9ca3af', fontWeight: '400' }}>(facultatif)</span></label>
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={form.telephone}
                      onChange={e => set('telephone', e.target.value)}
                      maxLength={20}
                      autoComplete="tel"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Objet de votre demande *</label>
                    <select
                      value={form.sujet}
                      onChange={e => set('sujet', e.target.value)}
                      style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer' }}
                    >
                      <option value="">— Sélectionner —</option>
                      {SUJETS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                {/* LIGNE 3 : Message */}
                <div>
                  <label style={labelStyle}>
                    Votre message *
                    <span style={{ color: '#9ca3af', fontWeight: '400', marginLeft: '8px' }}>{form.message.length}/5000</span>
                  </label>
                  <textarea
                    placeholder="Décrivez votre demande avec le plus de précisions possible..."
                    value={form.message}
                    onChange={e => set('message', e.target.value)}
                    maxLength={5000}
                    rows={6}
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                  />
                </div>

                {/* RGPD */}
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <input
                    type="checkbox"
                    id="rgpd"
                    checked={form.rgpd}
                    onChange={e => set('rgpd', e.target.checked)}
                    style={{ marginTop: '2px', flexShrink: 0, cursor: 'pointer' }}
                  />
                  <label htmlFor="rgpd" style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6', cursor: 'pointer' }}>
                    J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la{' '}
                    <a href="/confidentialite" style={{ color: '#1a4fba', textDecoration: 'none' }}>Politique de confidentialité</a>{' '}
                    de FCFBL ACTIVITIES. *
                  </label>
                </div>

                {/* MESSAGE D'ERREUR */}
                {status === 'error' && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px 14px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <AlertCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ color: '#dc2626', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{errorMsg}</p>
                  </div>
                )}

                {/* BOUTON ENVOI */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>* Champs obligatoires</p>
                  <button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      background: status === 'loading' ? '#6b7280' : '#0f2d6e',
                      color: 'white', border: 'none',
                      padding: '12px 28px', borderRadius: '8px',
                      fontSize: '14px', fontWeight: '700', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      transition: 'background 0.2s',
                    }}
                  >
                    <Send size={15} strokeWidth={2} />
                    {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>

                <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0, lineHeight: '1.6' }}>
                  Ce formulaire est protégé contre le spam. Vos données ne sont ni revendues ni utilisées à des fins commerciales tierces.
                </p>

              </div>
            )}
          </div>

          {/* SIDEBAR INFOS */}
          <aside style={{ flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'sticky', top: '80px' }}>

            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 14px' }}>Informations de contact</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Mail size={15} color="#1a4fba" style={{ flexShrink: 0, marginTop: '2px' }} strokeWidth={1.5} />
                  <div>
                    <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>Email</p>
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Via le formulaire ci-contre</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <Clock size={15} color="#1a4fba" style={{ flexShrink: 0, marginTop: '2px' }} strokeWidth={1.5} />
                  <div>
                    <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>Délai de réponse</p>
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>24 à 48h ouvrées</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <MapPin size={15} color="#1a4fba" style={{ flexShrink: 0, marginTop: '2px' }} strokeWidth={1.5} />
                  <div>
                    <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>Siège social</p>
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>12 rue d'Olima<br />88000 Épinal</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem' }}>
              <p style={{ color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px' }}>Question juridique ?</p>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px' }}>
                Pour une réponse rédigée par un juriste sous 24 à 48h, utilisez notre service dédié.
              </p>
              <a href="/information-sur-vos-droits" style={{ display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center' }}>
                Poser ma question →
              </a>
            </div>

            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <p style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '700', margin: '0 0 8px' }}>Droits RGPD</p>
              <p style={{ color: '#6b7280', fontSize: '11px', lineHeight: '1.6', margin: '0 0 8px' }}>
                Pour exercer vos droits d'accès, rectification, effacement ou opposition, sélectionnez « Exercice de mes droits (RGPD) » dans le formulaire.
              </p>
              <a href="/confidentialite" style={{ color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600' }}>
                Politique de confidentialité →
              </a>
            </div>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}