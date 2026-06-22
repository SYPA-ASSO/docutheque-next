'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
import { supabase } from '@/lib/supabase'
import { useCart } from '@/components/CartContext'

const btnPrimary: CSSProperties = {
  display: 'block',
  width: '100%',
  textAlign: 'center',
  background: '#0f2d6e',
  color: '#ffffff',
  border: 'none',
  borderRadius: 9,
  padding: '12px',
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
  marginBottom: 8,
  textDecoration: 'none',
}
const btnSecondary: CSSProperties = {
  display: 'block',
  width: '100%',
  textAlign: 'center',
  background: '#ffffff',
  color: '#0f2d6e',
  border: '1.5px solid #0f2d6e',
  borderRadius: 9,
  padding: '12px',
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
}
const msgStyle: CSSProperties = { margin: '10px 0 0', fontSize: 12.5, color: '#b45309', lineHeight: 1.5 }

export function BoutonsAchat({
  documentId,
  slug,
  nom,
  accesGratuit,
  accesPayant,
  prixUnitaire,
}: {
  documentId: string
  slug: string
  nom: string
  accesGratuit: boolean
  accesPayant: boolean
  prixUnitaire: number | null
}) {
  const { add, has } = useCart()
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  async function acheter() {
    setMsg(null)
    setLoading(true)
    try {
      const { data } = await supabase.auth.getSession()
      const session = data.session
      if (!session) {
        window.location.href = `/connexion?next=/catalogue/${slug}`
        return
      }
      const res = await fetch('/api/documents/acheter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({ documentId, mode: 'carte' }),
      })
      const out = await res.json()
      if (res.ok && out.url) {
        window.location.href = out.url
        return
      }
      setMsg(out.error || "L'achat n'a pas pu démarrer. Veuillez réessayer.")
    } catch {
      setMsg('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  async function obtenirGratuit() {
    const { data } = await supabase.auth.getSession()
    if (!data.session) {
      window.location.href = `/connexion?next=/catalogue/${slug}`
      return
    }
    window.location.href = '/espace-client?onglet=documents'
  }

  if (accesGratuit) {
    return (
      <div>
        <button onClick={obtenirGratuit} style={btnPrimary}>
          Télécharger gratuitement
        </button>
        {msg ? <p style={msgStyle}>{msg}</p> : null}
      </div>
    )
  }

  if (accesPayant && prixUnitaire != null) {
    const dansPanier = has(documentId)
    return (
      <div>
        <button onClick={acheter} disabled={loading} style={{ ...btnPrimary, opacity: loading ? 0.7 : 1 }}>
          {loading ? 'Redirection en cours...' : 'Acheter et télécharger'}
        </button>
        {dansPanier ? (
          <a href="/panier" style={btnSecondary}>Voir le panier</a>
        ) : (
          <button onClick={() => { add({ documentId, nom, prix: prixUnitaire, slug }); setMsg('ajout') }} style={btnSecondary}>
            Ajouter au panier
          </button>
        )}
        {msg === 'ajout' ? (
          <p style={{ ...msgStyle, color: '#15803d' }}>
            Ajouté au panier. <a href="/panier" style={{ color: '#15803d', fontWeight: 700 }}>Voir le panier ›</a>
          </p>
        ) : msg ? (
          <p style={msgStyle}>{msg}</p>
        ) : null}
      </div>
    )
  }

  return (
    <a href="/tarifs" style={btnPrimary}>
      {"Voir l'abonnement Optimal"}
    </a>
  )
}

export function IntroDeroulante({ texte }: { texte: string }) {
  const [open, setOpen] = useState(false)
  const long = texte.length > 260
  const aff = open || !long ? texte : texte.slice(0, 260).replace(/\s+\S*$/, '') + '…'
  return (
    <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.7, margin: '0 0 0.25rem' }}>
      {aff}
      {long ? (
        <>
          {' '}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: '#1a4fba', fontWeight: 600, fontSize: 14, cursor: 'pointer', padding: 0 }}
          >
            {open ? 'Voir moins' : 'Lire la suite'}
          </button>
        </>
      ) : null}
    </p>
  )
}

export function NewsletterMini() {
  const [email, setEmail] = useState('')
  const [etat, setEtat] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')

  async function envoyer() {
    if (!email.includes('@')) {
      setEtat('err')
      return
    }
    setEtat('loading')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      setEtat(res.ok ? 'ok' : 'err')
    } catch {
      setEtat('err')
    }
  }

  if (etat === 'ok') {
    return (
      <p style={{ fontSize: 13, color: '#15803d', fontWeight: 600, margin: 0 }}>
        Merci. Vérifiez votre boîte mail pour confirmer votre inscription.
      </p>
    )
  }

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse e-mail"
        style={{ width: '100%', boxSizing: 'border-box', border: '1px solid #cbd5e1', borderRadius: 8, padding: '9px 11px', fontSize: 13, marginBottom: 8 }}
      />
      <button
        onClick={envoyer}
        disabled={etat === 'loading'}
        style={{ width: '100%', background: '#0f2d6e', color: '#ffffff', border: 'none', borderRadius: 8, padding: '10px', fontSize: 13, fontWeight: 700, cursor: 'pointer' }}
      >
        {etat === 'loading' ? 'Envoi...' : "S'inscrire"}
      </button>
      {etat === 'err' ? (
        <p style={{ fontSize: 11.5, color: '#b45309', margin: '8px 0 0' }}>Adresse invalide ou erreur. Veuillez réessayer.</p>
      ) : null}
      <p style={{ fontSize: 10.5, color: '#9ca3af', margin: '8px 0 0', textAlign: 'center' }}>
        Désinscription en un clic. Vos données ne sont jamais cédées.
      </p>
    </div>
  )
}
