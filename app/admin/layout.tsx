'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  LayoutDashboard, FileText, Receipt, MessageSquare,
  Users, TrendingUp, LogOut, Shield, ShieldCheck, Settings, AlertCircle, ShoppingBag, Scale
} from 'lucide-react'

type AdminContextType = {
  password: string
  isAuth: boolean
}

const AdminContext = createContext<AdminContextType>({ password: '', isAuth: false })
export const useAdmin = () => useContext(AdminContext)

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState('')
  const [inputPwd, setInputPwd] = useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [erreur, setErreur] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [questionsEnAttente, setQuestionsEnAttente] = useState(0)
  const [migrationEnAttente, setMigrationEnAttente] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const stored = sessionStorage.getItem('admin_pwd')
    if (stored) {
      // Revalider le mot de passe stocké avant d'accorder l'accès
      fetch('/api/admin/stats', { headers: { 'x-admin-password': stored } })
        .then(r => {
          if (r.ok) {
            return r.json().then(data => {
              setPassword(stored)
              setIsAuth(true)
              setQuestionsEnAttente(data.questions_en_attente || 0)
              setMigrationEnAttente(data.migrations_en_attente || 0)
            })
          } else {
            // Mot de passe stocké invalide, nettoyer
            sessionStorage.removeItem('admin_pwd')
          }
        })
        .catch(() => sessionStorage.removeItem('admin_pwd'))
    }
  }, [])

  // Detection de la largeur d'ecran cote client uniquement (le layout connecte
  // ne s'affiche jamais cote serveur, donc aucun scintillement au chargement)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputPwd) { setErreur('Mot de passe requis.'); return }

    setAuthLoading(true)
    setErreur('')

    try {
      const res = await fetch('/api/admin/stats', {
        headers: { 'x-admin-password': inputPwd },
      })

      if (!res.ok) {
        setErreur('Mot de passe incorrect.')
        setAuthLoading(false)
        return
      }

      const data = await res.json()
      sessionStorage.setItem('admin_pwd', inputPwd)
      setPassword(inputPwd)
      setIsAuth(true)
      setQuestionsEnAttente(data.questions_en_attente || 0)
      setMigrationEnAttente(data.migrations_en_attente || 0)
    } catch {
      setErreur('Erreur réseau. Veuillez réessayer.')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleDeconnexion = () => {
    sessionStorage.removeItem('admin_pwd')
    setIsAuth(false)
    setPassword('')
    setInputPwd('')
  }

  const navItems = [
    { href: '/admin', label: 'Tableau de bord', icon: <LayoutDashboard size={16} strokeWidth={1.5} /> },
    { href: '/admin/questions', label: 'Questions', icon: <MessageSquare size={16} strokeWidth={1.5} />, badge: questionsEnAttente },
    { href: '/admin/clients', label: 'Clients', icon: <Users size={16} strokeWidth={1.5} />, badge: migrationEnAttente },
    { href: '/admin/dossiers', label: 'Dossiers assurances', icon: <Shield size={16} strokeWidth={1.5} /> },
    { href: '/admin/dossiers-rgpd', label: 'Diagnostics RGPD', icon: <ShieldCheck size={16} strokeWidth={1.5} /> },
    { href: '/admin/avocats', label: 'Avocats', icon: <Scale size={16} strokeWidth={1.5} /> },
    { href: '/admin/documents', label: 'Documents', icon: <FileText size={16} strokeWidth={1.5} /> },
    { href: '/admin/achats', label: 'Achats documents', icon: <ShoppingBag size={16} strokeWidth={1.5} /> },
    { href: '/admin/factures', label: 'Factures', icon: <Receipt size={16} strokeWidth={1.5} /> },
    { href: '/admin/revenus', label: 'Revenus', icon: <TrendingUp size={16} strokeWidth={1.5} /> },
    { href: '/admin/parametres', label: 'Paramètres', icon: <Settings size={16} strokeWidth={1.5} /> },
  ]

  if (!isAuth) {
    return (
      <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2.5rem', width: '100%', maxWidth: '400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <LayoutDashboard size={26} color="white" strokeWidth={1.5} />
            </div>
            <h1 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 4px' }}>Administration</h1>
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Cabinet Cholez-Pagotto</p>
          </div>
          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                Mot de passe
              </label>
              <input
                type="password"
                value={inputPwd}
                onChange={e => { setInputPwd(e.target.value); setErreur('') }}
                placeholder="••••••••"
                disabled={authLoading}
                style={{ width: '100%', padding: '11px 12px', border: `1px solid ${erreur ? '#fecaca' : '#d1d5db'}`, borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none', background: authLoading ? '#f9fafb' : 'white' }}
                autoFocus
              />
              {erreur && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                  <AlertCircle size={13} color="#dc2626" style={{ flexShrink: 0 }} />
                  <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{erreur}</p>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={authLoading}
              style={{ background: authLoading ? '#6b7280' : 'linear-gradient(135deg, #0f2d6e, #1a4fba)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: authLoading ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}
            >
              {authLoading ? 'Vérification...' : "Accéder à l'administration"}
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <AdminContext.Provider value={{ password, isAuth }}>
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', minHeight: '100vh', background: '#f8fafc' }}>

        {/* Sidebar : barre laterale figee sur ordinateur, bandeau haut sur mobile */}
        <div style={{ width: isMobile ? '100%' : '220px', background: '#0f2d6e', flexShrink: 0, display: 'flex', flexDirection: 'column', position: isMobile ? 'static' : 'fixed', top: 0, left: 0, height: isMobile ? 'auto' : '100vh', zIndex: 10 }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>Administration</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: 0 }}>Cabinet Cholez-Pagotto</p>
          </div>

          <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: isMobile ? 'row' : 'column', flexWrap: isMobile ? 'wrap' : 'nowrap', gap: isMobile ? '6px' : '4px' }}>
            {navItems.map(item => {
              const isActive = pathname === item.href
              return (
                <a key={item.href} href={item.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent', color: isActive ? 'white' : 'rgba(255,255,255,0.65)', fontSize: '13px', fontWeight: isActive ? '700' : '400', textDecoration: 'none', transition: 'all 0.15s', position: 'relative' }}>
                  {item.icon}
                  <span style={{ flex: isMobile ? 'none' : 1 }}>{item.label}</span>
                  {item.badge ? (
                    <span style={{ background: '#dc2626', color: 'white', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '10px', flexShrink: 0 }}>
                      {item.badge}
                    </span>
                  ) : null}
                </a>
              )
            })}
          </nav>

          <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button onClick={handleDeconnexion}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: '12px', cursor: 'pointer', width: '100%' }}>
              <LogOut size={14} strokeWidth={1.5} /> Se déconnecter
            </button>
          </div>
        </div>

        <div style={{ marginLeft: isMobile ? 0 : '220px', flex: 1, padding: isMobile ? '1.25rem' : '2rem' }}>
          {children}
        </div>
      </div>
    </AdminContext.Provider>
  )
}