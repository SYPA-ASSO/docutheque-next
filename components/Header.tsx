'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  type NavGroup = { label: string; children: { label: string; href: string }[] }
  type NavItem = { label: string; href: string; groups?: NavGroup[] }

  const nav: NavItem[] = [
    { label: 'Accueil', href: '/' },
    {
      label: 'Services',
      href: '#',
      groups: [
        {
          label: 'Par profil',
          children: [
            { label: 'Particuliers', href: '/accompagnement-particuliers' },
            { label: 'Professionnels', href: '/accompagnement-professionnels' },
            { label: 'Associations · ESS', href: '/accompagnement-associations' },
          ],
        },
        {
          label: 'Par services',
          children: [
            { label: 'Information sur vos droits', href: '/information-sur-vos-droits' },
            { label: "Création d'entreprise", href: '/creation-entreprise' },
            { label: 'Conseil en assurances', href: '/conseil-assurances' },
            { label: 'RGPD & conformité', href: '/rgpd-conformite' },
            { label: 'DPO externalisé', href: '/dpo-externalise' },
          ],
        },
      ],
    },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Tarifs', href: '/tarifs' },
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
            alt="Cabinet Cholez-Pagotto · Comprendre. Décider. Agir."
            width={220}
            height={52}
            priority
            style={{ height: '42px', width: 'auto' }}
          />
        </Link>

        {/* NAV DESKTOP */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {nav.map((item) =>
            item.groups ? (
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
                    minWidth: '280px',
                  }}>
                    <div style={{
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '10px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                      padding: '8px 0',
                      overflow: 'hidden',
                    }}>
                      {(item.groups ?? []).map((group, gi) => (
                        <div key={gi}>
                          {gi > 0 && <div style={{ height: '1px', background: '#f3f4f6', margin: '4px 0' }} />}
                          {group.label && (
                            <div style={{
                              padding: '4px 16px 2px',
                              fontSize: '10px',
                              fontWeight: '700',
                              color: '#374151',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}>
                              {group.label}
                            </div>
                          )}
                          {group.children.map((child) => (
                            <Link key={child.href + child.label} href={child.href} style={{
                              display: 'block',
                              padding: '9px 16px',
                              fontSize: '13px',
                              color: '#374151',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
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