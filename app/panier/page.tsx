'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Trash2, ShoppingCart, ArrowLeft } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCart } from '@/components/CartContext'
import { supabase } from '@/lib/supabase'

const NB = '\u00a0'

function prixFr(n: number) {
  return `${n.toFixed(2).replace('.', ',')}${NB}€`
}

export default function PanierPage() {
  const { items, remove, total, count, pret } = useCart()
  const [loading, setLoading] = useState(false)
  const [erreur, setErreur] = useState<string | null>(null)

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
        body: JSON.stringify({ documentIds: items.map((i) => i.documentId) }),
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

          {!pret ? (
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
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, overflow: 'hidden' }}>
                {items.map((it, i) => (
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
                  Total ({count} document{count > 1 ? 's' : ''})
                </span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f2d6e' }}>{prixFr(total)}</span>
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
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
