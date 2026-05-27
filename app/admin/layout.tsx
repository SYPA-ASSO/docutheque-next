'use client'

import { useState, useEffect, createContext, useContext } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import {
  LayoutDashboard, FileText, Receipt, MessageSquare,
  Users, TrendingUp, LogOut, Bell, Shield, Settings
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
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [questionsEnAttente, setQuestionsEnAttente] = useState(0)
  const [migrationEnAttente, setMigrationEnAttente] = useState(0)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const stored = sessionStorage.getItem('admin_pwd')
    if (stored) { setPassword(stored); setIsAuth(true); loadBadges(stored) }
  }, [])

  const loadBadges = async (pwd: string) => {
    try {
      const res = await fetch('/api/admin/stats', { headers: { 'x-admin-password': pwd } })
      if (res.ok) {
        const data = await res.json()
        setQuestionsEnAttente(data.questions_en_attente || 0)
        setMigrationEnAttente(data.migrations_en_attente || 0)
      }
    } catch {}
  }

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputPwd) { setErreur('Mot de passe requis.'); return }
    sessionStorage.setItem('admin_pwd', inputPwd)
    setPassword(inputPwd)
    setIsAuth(true)
    loadBadges(inputPwd)
  }

  const handleDeconnexion = () => {
    sessionStorage.removeItem('admin_pwd')
    setIsAuth(false)
    setPassword('')
    router.push('/admin')
  }

  const navItems = [
    { href: '/admin', label: 'Tableau de bord', icon: <LayoutDashboard size={16} strokeWidth={1.5} /> },
    { href: '/admin/questions', label: 'Questions', icon: <MessageSquare size={16} strokeWidth={1.5} />, badge: questionsEnAttente },
    { href: '/admin/clients', label: 'Clients', icon: <Users size={16} strokeWidth={1.5} /> },
    { href: '/admin/dossiers', label: 'Dossiers assurances', icon: <Shield size={16} strokeWidth={1.5} /> },
    { href: '/admin/documents', label: 'Documents', icon: <FileText size={16} strokeWidth={1.5} /> },
    { href: '/admin/factures', label: 'Factures', icon: <Receipt size={16} strokeWidth={1.5} /> },
    { href: '/admin/revenus', label: 'Revenus', icon: <TrendingUp size={16} strokeWidth={1.5} /> },
    { href: '/admin/parametres', label: 'Paramètres', icon: <Settings size={16} strokeWidth={1.5} /> },
  ]

  if (!isAuth) {
    return (
      <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2.5rem', width: '100%', maxWidth: '400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', borderRadius: '14px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <LayoutDashboard size={26} color="white" strokeWidth={1.5} />
            </div>
            <h1 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 4px' }}>Administration</h1>
            <p style={{ color: '#9ca3af', fontSize: '13px', margin: 0 }}>Cabinet Cholez-Pagotto · Docuthèque</p>
          </div>
          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                Mot de passe
              </label>
              <input type="password" value={inputPwd} onChange={e => setInputPwd(e.target.value)}
                placeholder="••••••••"
                style={{ width: '100%', padding: '11px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none' }}
                autoFocus />
              {erreur && <p style={{ color: '#dc2626', fontSize: '12px', margin: '6px 0 0' }}>{erreur}</p>}
            </div>
            <button type="submit" style={{ background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Accéder à l'administration
            </button>
          </form>
        </div>
      </main>
    )
  }

  return (
    <AdminContext.Provider value={{ password, isAuth }}>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>

        {/* Sidebar */}
        <div style={{ width: '220px', background: '#0f2d6e', flexShrink: 0, display: 'flex', flexDirection: 'column', position: 'fixed', top: 0, left: 0, height: '100vh', zIndex: 10 }}>
          {/* Logo */}
          <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>Administration</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', margin: 0 }}>Cabinet Cholez-Pagotto</p>
          </div>

          {/* Nav */}
          <nav style={{ flex: 1, padding: '1rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navItems.map(item => {
              const isActive = pathname === item.href
              return (
                <a key={item.href} href={item.href}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', background: isActive ? 'rgba(255,255,255,0.15)' : 'transparent', color: isActive ? 'white' : 'rgba(255,255,255,0.65)', fontSize: '13px', fontWeight: isActive ? '700' : '400', textDecoration: 'none', transition: 'all 0.15s', position: 'relative' }}>
                  {item.icon}
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {item.badge ? (
                    <span style={{ background: '#dc2626', color: 'white', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '10px', flexShrink: 0 }}>
                      {item.badge}
                    </span>
                  ) : null}
                </a>
              )
            })}
          </nav>

          {/* Déconnexion */}
          <div style={{ padding: '1rem 0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <button onClick={handleDeconnexion}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.5)', fontSize: '12px', cursor: 'pointer', width: '100%' }}>
              <LogOut size={14} strokeWidth={1.5} /> Se déconnecter
            </button>
          </div>
        </div>

        {/* Contenu */}
        <div style={{ marginLeft: '220px', flex: 1, padding: '2rem' }}>
          {children}
        </div>
      </div>
    </AdminContext.Provider>
  )
}