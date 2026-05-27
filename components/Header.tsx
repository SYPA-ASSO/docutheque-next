'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const nav = [
    { label: 'Accueil', href: '/' },
    {
      label: 'Services',
      href: '#',
      children: [
        { label: 'Information sur vos droits', href: '/information-sur-vos-droits' },
        { label: 'Conseil en assurances', href: '/conseil-assurances' },
        { label: 'Accompagnement professionnels', href: '/accompagnement-professionnels' },
        { label: 'Accompagnement associations · ESS', href: '/accompagnement-associations' },
        { label: 'Formations', href: '/formations' },
      ],
    },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header style={{
      background: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>

        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <Image
            src="/logo-cholez-pagotto-transparent.svg"
            alt="Cabinet Cholez-Pagotto — Comprendre. Décider. Agir."
            width={220}
            height={52}
            priority
            style={{ height: '42px', width: 'auto' }}
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button style={{
                  background: 'none',
                  border: 'none',
                  padding: '8px 12px',
                  fontSize: '14px',
                  color: '#374151',
                  cursor: 'pointer',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 4l4 4 4-4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {dropdownOpen === item.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    paddingTop: '8px',
                    zIndex: 100,
                    minWidth: '260px',
                  }}>
                    <div style={{
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '10px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                      padding: '6px 0',
                      overflow: 'hidden',
                    }}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} style={{
                          display: 'block',
                          padding: '10px 16px',
                          fontSize: '13px',
                          color: '#374151',
                          textDecoration: 'none',
                          transition: 'background 0.1s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href} style={{
                padding: '8px 12px',
                fontSize: '14px',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                borderRadius: '6px',
              }}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA ESPACE CLIENT */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <Link href="/espace-client" style={{
            padding: '8px 16px',
            fontSize: '13px',
            color: '#0f2d6e',
            textDecoration: 'none',
            fontWeight: '600',
            border: '1px solid #0f2d6e',
            borderRadius: '8px',
          }}>
            Mon espace
          </Link>
          <Link href="/information-sur-vos-droits" style={{
            padding: '8px 16px',
            fontSize: '13px',
            color: 'white',
            background: '#0f2d6e',
            textDecoration: 'none',
            fontWeight: '600',
            borderRadius: '8px',
          }}>
            Poser une question
          </Link>
        </div>

      </div>
    </header>
  )
}