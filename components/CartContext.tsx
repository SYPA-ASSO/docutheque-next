'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type CartItem = {
  documentId: string
  nom: string
  prix: number
  slug: string
}

type CartContextValue = {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (documentId: string) => void
  clear: () => void
  has: (documentId: string) => boolean
  count: number
  total: number
  pret: boolean
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'dch_panier_v1'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [pret, setPret] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) setItems(parsed)
      }
    } catch {
      // panier illisible : on repart d'un panier vide
    }
    setPret(true)
  }, [])

  useEffect(() => {
    if (!pret) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // quota indisponible : on ignore
    }
  }, [items, pret])

  const add = (item: CartItem) =>
    setItems((prev) => (prev.some((i) => i.documentId === item.documentId) ? prev : [...prev, item]))
  const remove = (documentId: string) =>
    setItems((prev) => prev.filter((i) => i.documentId !== documentId))
  const clear = () => setItems([])
  const has = (documentId: string) => items.some((i) => i.documentId === documentId)
  const count = items.length
  const total = items.reduce((sum, i) => sum + (Number(i.prix) || 0), 0)

  return (
    <CartContext.Provider value={{ items, add, remove, clear, has, count, total, pret }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart doit etre utilise a l interieur de CartProvider')
  return ctx
}
