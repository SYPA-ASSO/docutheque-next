'use client'

import { useState, useEffect } from 'react'
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
  const [dl, setDl] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  // Contexte utilisateur charge au montage :
  // - optimal : le document est-il propose dans l'abonnement Optimal (champ non transmis par la page)
  // - abonne : l'utilisateur connecte a-t-il un abonnement actif
  // - achete : l'utilisateur a-t-il deja achete ce document a l'unite
  const [ctx, setCtx] = useState<{ checked: boolean; connecte: boolean; abonne: boolean; optimal: boolean; achete: boolean }>({
    checked: false, connecte: false, abonne: false, optimal: false, achete: false,
  })

  useEffect(() => {
    let actif = true
    ;(async () => {
      const { data: docRow } = await supabase
        .from('documents')
        .select('acces_optimal')
        .eq('id', documentId)
        .single()
      const optimal = !!docRow?.acces_optimal

      const { data: sess } = await supabase.auth.getSession()
      const session = sess.session
      if (!session) {
        if (actif) setCtx({ checked: true, connecte: false, abonne: false, optimal, achete: false })
        return
      }
      const [{ data: profil }, { data: achats }] = await Promise.all([
        supabase.from('users').select('abonnement_actif').eq('id', session.user.id).single(),
        supabase.from('achats_documents').select('id').eq('user_id', session.user.id).eq('document_id', documentId).eq('statut', 'paye').limit(1),
      ])
      if (actif) setCtx({
        checked: true,
        connecte: true,
        abonne: !!profil?.abonnement_actif,
        optimal,
        achete: !!(achats && achats.length > 0),
      })
    })()
    return () => { actif = false }
  }, [documentId])

  // L'utilisateur a-t-il deja acces a ce document ?
  const peutTelecharger =
    ctx.connecte && (accesGratuit || (ctx.optimal && ctx.abonne) || (accesPayant && ctx.achete))

  async function telecharger() {
    setMsg(null)
    const { data } = await supabase.auth.getSession()
    const session = data.session
    if (!session) {
      window.location.href = `/connexion?next=/catalogue/${slug}`
      return
    }
    setDl(true)
    try {
      const res = await fetch(`/api/documents/download?id=${documentId}`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      })
      if (res.ok) {
        const ext = res.headers.get('x-file-ext') || 'docx'
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${nom}.${ext}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } else if (res.status === 403) {
        setMsg("Vous n'avez pas encore accès à ce document.")
      } else {
        setMsg('Le téléchargement a échoué. Veuillez réessayer.')
      }
    } catch {
      setMsg('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setDl(false)
    }
  }

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

  // Verification du contexte en cours : bouton neutre pour ne pas afficher une action erronee.
  if (!ctx.checked) {
    return (
      <div>
        <button disabled style={{ ...btnPrimary, opacity: 0.6, cursor: 'default' }}>Chargement...</button>
      </div>
    )
  }

  // 1. Acces deja acquis (gratuit, abonne sur un document Optimal, ou achat effectue) : telechargement direct.
  if (peutTelecharger) {
    return (
      <div>
        <button onClick={telecharger} disabled={dl} style={{ ...btnPrimary, opacity: dl ? 0.7 : 1 }}>
          {dl ? 'Téléchargement...' : 'Télécharger gratuitement'}
        </button>
        {msg ? <p style={msgStyle}>{msg}</p> : null}
      </div>
    )
  }

  // 2. Document gratuit, visiteur non connecte : inviter a se connecter pour telecharger.
  if (accesGratuit) {
    return (
      <div>
        <button onClick={telecharger} style={btnPrimary}>Télécharger gratuitement</button>
        {msg ? <p style={msgStyle}>{msg}</p> : null}
      </div>
    )
  }

  // 3. Document payant a l'unite (non abonne, ou document hors abonnement) : achat + panier.
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
        {ctx.optimal ? (
          <p style={{ ...msgStyle, color: '#1e3a5f' }}>
            Inclus gratuitement avec l&rsquo;
            <a href="/tarifs" style={{ color: '#1a4fba', fontWeight: 700 }}>Abonnement Optimal</a>.
          </p>
        ) : null}
        {msg === 'ajout' ? (
          <p style={{ ...msgStyle, color: '#15803d' }}>
            Ajouté au panier. <a href="/panier" style={{ color: '#15803d', fontWeight: 700 }}>Voir le panier ›</a>
          </p>
        ) : msg && msg !== 'ajout' ? (
          <p style={msgStyle}>{msg}</p>
        ) : null}
      </div>
    )
  }

  // 4. Document Optimal seul, visiteur non abonne : orienter vers l'abonnement.
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
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [etat, setEtat] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')
  const [erreur, setErreur] = useState('')

  async function envoyer() {
    if (!prenom.trim()) { setErreur('Veuillez saisir votre prénom.'); setEtat('err'); return }
    if (!nom.trim()) { setErreur('Veuillez saisir votre nom.'); setEtat('err'); return }
    if (!email.includes('@')) { setErreur('Adresse email invalide.'); setEtat('err'); return }
    setEtat('loading')
    setErreur('')
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), prenom: prenom.trim(), nom: nom.trim() }),
      })
      if (res.ok) { setEtat('ok'); return }
      const data = await res.json().catch(() => ({}))
      setErreur(data.error || 'Erreur. Veuillez réessayer.')
      setEtat('err')
    } catch {
      setErreur('Erreur réseau. Veuillez réessayer.')
      setEtat('err')
    }
  }

  if (etat === 'ok') {
    return (
      <p style={{ fontSize: 13, color: '#15803d', fontWeight: 600, margin: 0 }}>
        Merci. Un email de confirmation vous a été envoyé. Cliquez sur le lien qu'il contient pour valider votre inscription.
      </p>
    )
  }

  const champ: CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    border: '1px solid #cbd5e1',
    borderRadius: 8,
    padding: '9px 11px',
    fontSize: 13,
    marginBottom: 8,
  }

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <input
          type="text"
          value={prenom}
          onChange={(e) => { setPrenom(e.target.value); setEtat('idle') }}
          placeholder="Prénom *"
          style={champ}
        />
        <input
          type="text"
          value={nom}
          onChange={(e) => { setNom(e.target.value); setEtat('idle') }}
          placeholder="Nom *"
          style={champ}
        />
      </div>
      <input
        type="email"
        value={email}
        onChange={(e) => { setEmail(e.target.value); setEtat('idle') }}
        placeholder="Votre adresse e-mail *"
        style={champ}
      />
      <button
        onClick={envoyer}
        disabled={etat === 'loading'}
        style={{ width: '100%', background: '#0f2d6e', color: '#ffffff', border: 'none', borderRadius: 8, padding: '10px', fontSize: 13, fontWeight: 700, cursor: etat === 'loading' ? 'not-allowed' : 'pointer', opacity: etat === 'loading' ? 0.7 : 1 }}
      >
        {etat === 'loading' ? 'Envoi...' : "S'inscrire"}
      </button>
      {etat === 'err' ? (
        <p style={{ fontSize: 11.5, color: '#b45309', margin: '8px 0 0' }}>{erreur || 'Adresse invalide ou erreur. Veuillez réessayer.'}</p>
      ) : null}
      <p style={{ fontSize: 10.5, color: '#9ca3af', margin: '8px 0 0', textAlign: 'center' }}>
        Tous les champs sont obligatoires · Désinscription en un clic · Vos données ne sont jamais cédées.
      </p>
    </div>
  )
}
