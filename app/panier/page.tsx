'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Trash2, ShoppingCart, ArrowLeft, Download, CheckCircle, Crown } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/components/CartContext'
import { supabase } from '@/lib/supabase'

const NB = '\u00a0'

function prixFr(n: number) {
  return `${n.toFixed(2).replace('.', ',')}${NB}€`
}

export default function PanierPage() {
  const { items, remove, count, pret } = useCart()
  const [loading, setLoading] = useState(false)
  const [erreur, setErreur] = useState<string | null>(null)

  // Contexte utilisateur : abonnement actif + acces par document.
  // accesParDoc[id] = true signifie que l'utilisateur peut deja telecharger le document
  // (gratuit, inclus dans son abonnement Optimal, ou deja achete) : il ne doit pas le payer.
  const [ctxPret, setCtxPret] = useState(false)
  const [abonne, setAbonne] = useState(false)
  const [accesParDoc, setAccesParDoc] = useState<Record<string, boolean>>({})
  const [dlEnCours, setDlEnCours] = useState<string | null>(null)

  const idsKey = items.map((i) => i.documentId).join(',')

  const evaluerAcces = useCallback(async () => {
    setCtxPret(false)
    const ids = idsKey ? idsKey.split(',') : []
    const { data: sess } = await supabase.auth.getSession()
    const session = sess.session
    if (!session || ids.length === 0) {
      setAbonne(false)
      setAccesParDoc({})
      setCtxPret(true)
      return
    }
    const [{ data: profil }, { data: docs }, { data: achats }] = await Promise.all([
      supabase.from('users').select('abonnement_actif').eq('id', session.user.id).single(),
      supabase.from('documents').select('id, acces_gratuit, acces_optimal, acces_payant').in('id', ids),
      supabase.from('achats_documents').select('document_id, statut').eq('user_id', session.user.id).in('document_id', ids),
    ])
    const estAbonne = !!profil?.abonnement_actif
    const achetes = new Set((achats || []).filter((a) => a.statut === 'paye').map((a) => a.document_id))
    const map: Record<string, boolean> = {}
    for (const d of docs || []) {
      map[d.id] = d.acces_gratuit || (d.acces_optimal && estAbonne) || achetes.has(d.id)
    }
    setAbonne(estAbonne)
    setAccesParDoc(map)
    setCtxPret(true)
  }, [idsKey])

  useEffect(() => { evaluerAcces() }, [evaluerAcces])

  const itemsInclus = items.filter((i) => accesParDoc[i.documentId])
  const itemsAPayer = items.filter((i) => !accesParDoc[i.documentId])
  const totalAPayer = itemsAPayer.reduce((s, i) => s + i.prix, 0)

  async function telecharger(documentId: string, nomDoc: string) {
    setErreur(null)
    setDlEnCours(documentId)
    try {
      const { data } = await supabase.auth.getSession()
      const session = data.session
      if (!session) { window.location.href = '/connexion?next=/panier'; return }
      const res = await fetch(`/api/documents/download?id=${documentId}`, {
        headers: { Authorization: `Bearer ${session.access_token}` },
      })
      if (res.ok) {
        const ext = res.headers.get('x-file-ext') || 'docx'
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${nomDoc}.${ext}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } else {
        setErreur('Le téléchargement a échoué. Veuillez réessayer.')
      }
    } catch {
      setErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setDlEnCours(null)
    }
  }

  async function payer() {
    setErreur(null)
    setLoading(true)
    try {
      const { data } = await supabase.auth.getSession()
      const session = data.session
      if (!session) {
        window.location.href = '/connexion?next=/panier'
        return
      }
      const res = await fetch('/api/panier/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({ documentIds: itemsAPayer.map((i) => i.documentId) }),
      })
      const out = await res.json()
      if (res.ok && out.url) {
        window.location.href = out.url
        return
      }
      setErreur(out.error || "Le paiement n'a pas pu démarrer. Veuillez réessayer.")
    } catch {
      setErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const chargement = !pret || !ctxPret

  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '80vh' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>
          <Link
            href="/catalogue"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#1a4fba', textDecoration: 'none', fontSize: 13, fontWeight: 600, marginBottom: '1.5rem' }}
          >
            <ArrowLeft size={15} /> Continuer mes achats
          </Link>

          <h1 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#0f2d6e', margin: '0 0 1.5rem' }}>Mon panier</h1>

          {chargement ? (
            <p style={{ color: '#9ca3af', fontSize: 14 }}>Chargement...</p>
          ) : count === 0 ? (
            <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '3rem', textAlign: 'center' }}>
              <ShoppingCart size={36} color="#d1d5db" strokeWidth={1} style={{ marginBottom: 12 }} />
              <p style={{ color: '#6b7280', fontSize: 15, margin: '0 0 1.25rem' }}>Votre panier est vide.</p>
              <Link
                href="/catalogue"
                style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '11px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
              >
                Parcourir le catalogue
              </Link>
            </div>
          ) : (
            <>
              {/* Documents deja accessibles (abonne Optimal, deja acquis, ou gratuits) : telechargement direct, hors paiement. */}
              {itemsInclus.length > 0 && (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 14, overflow: 'hidden', marginBottom: '1.25rem' }}>
                  <div style={{ padding: '12px 18px', borderBottom: '1px solid #dcfce7', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle size={16} color="#16a34a" />
                    <p style={{ color: '#15803d', fontSize: 13, fontWeight: 700, margin: 0 }}>
                      Déjà accessibles{abonne ? ' · inclus dans votre abonnement Optimal' : ''}
                    </p>
                  </div>
                  {itemsInclus.map((it, i) => (
                    <div
                      key={it.documentId}
                      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderTop: i === 0 ? 'none' : '1px solid #dcfce7' }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <Link href={`/catalogue/${it.slug}`} style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                          {it.nom}
                        </Link>
                        <p style={{ color: '#15803d', fontSize: 11, margin: '2px 0 0' }}>Inclus · aucun paiement</p>
                      </div>
                      <button
                        onClick={() => telecharger(it.documentId, it.nom)}
                        disabled={dlEnCours === it.documentId}
                        style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '8px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: dlEnCours === it.documentId ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}
                      >
                        {dlEnCours === it.documentId ? '...' : <><Download size={13} /> Télécharger</>}
                      </button>
                      <button
                        onClick={() => remove(it.documentId)}
                        aria-label="Retirer du panier"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', display: 'flex', padding: 4, flexShrink: 0 }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Documents a regler */}
              {itemsAPayer.length > 0 ? (
                <>
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }}>
                    {itemsAPayer.map((it, i) => (
                      <div
                        key={it.documentId}
                        style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', borderTop: i === 0 ? 'none' : '1px solid #f3f4f6' }}
                      >
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <Link href={`/catalogue/${it.slug}`} style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                            {it.nom}
                          </Link>
                        </div>
                        <span style={{ color: '#0f2d6e', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{prixFr(it.prix)}</span>
                        <button
                          onClick={() => remove(it.documentId)}
                          aria-label="Retirer du panier"
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#dc2626', display: 'flex', padding: 4, flexShrink: 0 }}
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1.5rem 0', padding: '0 4px' }}>
                    <span style={{ fontSize: 15, color: '#374151' }}>
                      Total ({itemsAPayer.length} document{itemsAPayer.length > 1 ? 's' : ''})
                    </span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2d6e' }}>{prixFr(totalAPayer)}</span>
                  </div>

                  <button
                    onClick={payer}
                    disabled={loading}
                    style={{ width: '100%', background: '#0f2d6e', color: 'white', border: 'none', borderRadius: 10, padding: '14px', fontSize: 15, fontWeight: 700, cursor: 'pointer', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'Redirection vers le paiement...' : 'Payer par carte'}
                  </button>
                  {erreur ? <p style={{ color: '#dc2626', fontSize: 13, margin: '12px 0 0', textAlign: 'center' }}>{erreur}</p> : null}

                  <p style={{ fontSize: 12, color: '#9ca3af', margin: '14px 0 0', textAlign: 'center', lineHeight: 1.6 }}>
                    Paiement sécurisé par Stripe. Après paiement, vos documents sont disponibles immédiatement dans votre espace client, au format Word et PDF.
                  </p>
                </>
              ) : (
                <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem', textAlign: 'center' }}>
                  <Crown size={28} color="#1a4fba" strokeWidth={1.5} style={{ marginBottom: 10 }} />
                  <p style={{ color: '#374151', fontSize: 14, margin: '0 0 4px', fontWeight: 600 }}>Rien à régler.</p>
                  <p style={{ color: '#6b7280', fontSize: 13, margin: '0 0 16px', lineHeight: 1.6 }}>
                    {abonne
                      ? 'Tous les documents de votre panier sont inclus dans votre abonnement Optimal. Téléchargez-les ci-dessus ou depuis votre espace client.'
                      : 'Tous les documents de votre panier sont déjà accessibles depuis votre espace client.'}
                  </p>
                  <Link
                    href="/espace-client?onglet=documents"
                    style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '11px 22px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}
                  >
                    Aller à mes documents
                  </Link>
                  {erreur ? <p style={{ color: '#dc2626', fontSize: 13, margin: '12px 0 0', textAlign: 'center' }}>{erreur}</p> : null}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
