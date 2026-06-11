'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, User, Building2, Heart, Scale, Briefcase, Shield, ShieldCheck, UserCheck, BookOpen, type LucideIcon } from 'lucide-react'

type NavChild = { label: string; href: string; desc?: string; icon?: React.ComponentType<{ size?: number; strokeWidth?: number }> }
type NavGroup = { label: string; children: NavChild[] }
type NavItem = { label: string; href: string; groups?: NavGroup[] }

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)

  const nav: NavItem[] = [
    { label: 'Accueil', href: '/' },
    {
      label: 'Services',
      href: '#',
      groups: [
        {
          label: 'Par profil',
          children: [
            { label: 'Particuliers', href: '/accompagnement-particuliers', desc: 'Information sur vos droits', icon: User },
            { label: 'Professionnels', href: '/accompagnement-professionnels', desc: "Création d'entreprise, formalités", icon: Building2 },
            { label: 'Associations · ESS', href: '/accompagnement-associations', desc: 'Statuts, RGPD, formalités', icon: Heart },
          ],
        },
        {
          label: 'Par service',
          children: [
            { label: 'Information sur vos droits', href: '/information-sur-vos-droits', desc: 'Une réponse rédigée par notre juriste', icon: Scale },
            { label: "Création d'entreprise", href: '/creation-entreprise', desc: 'Statuts et formalités', icon: Briefcase },
            { label: 'Conseil en assurances', href: '/conseil-assurances', desc: 'Courtage, ORIAS', icon: Shield },
            { label: 'RGPD & conformité', href: '/rgpd-conformite', desc: 'Diagnostic et mise en conformité', icon: ShieldCheck },
            { label: 'DPO externalisé', href: '/dpo-externalise', desc: 'Conformité dans la durée', icon: UserCheck },
            { label: 'Formations', href: '/formations', desc: 'Sur-mesure, présentiel ou distanciel', icon: BookOpen },
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
    <>
      {/* ANIMATION BANDEAU */}
      <style>{`
        @keyframes bandeauPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          50% { transform: scale(1.04); box-shadow: 0 0 0 6px rgba(255,255,255,0); }
        }
        .badge-offre {
          animation: bandeauPulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* BANDEAU CREATION OFFERTE */}
      <div style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', padding: '10px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <span className="badge-offre" style={{ background: 'white', color: '#b8860b', fontSize: '11px', fontWeight: 800, padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.05em', whiteSpace: 'nowrap', flexShrink: 0, display: 'inline-block' }}>
            🎁 ACTUELLEMENT : LA CRÉATION EST OFFERTE
          </span>
          <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: '12px', lineHeight: 1.5, textAlign: 'center', flex: 1 }}>
            Création d'entreprise, statuts, contrats, conformité RGPD, formations... Juriste et formaliste dédié, conseil en assurances, à vos côtés à chaque étape.
          </span>
          <Link href="/creation-entreprise" style={{ border: '1px solid rgba(255,255,255,0.7)', color: 'white', fontSize: '12px', fontWeight: 600, padding: '6px 16px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            En savoir plus
          </Link>
        </div>
      </div>

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
                  <ChevronDown size={14} strokeWidth={2} color="#9ca3af" />
                </button>
                {dropdownOpen === item.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    paddingTop: '8px',
                    zIndex: 100,
                    minWidth: '320px',
                  }}>
                    <div style={{
                      background: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                      padding: '8px 0',
                      overflow: 'hidden',
                    }}>
                      {(item.groups ?? []).map((group, gi) => (
                        <div key={gi}>
                          {gi > 0 && <div style={{ height: '1px', background: '#f3f4f6', margin: '6px 0' }} />}
                          {group.label && (
                            <div style={{
                              padding: '6px 16px 4px',
                              fontSize: '10px',
                              fontWeight: '700',
                              color: '#9ca3af',
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}>
                              {group.label}
                            </div>
                          )}
                          {group.children.map((child) => (
                            <Link key={child.href + child.label} href={child.href} style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '9px 16px',
                              textDecoration: 'none',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#f8fafc')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                              {child.icon ? (
                                <span style={{ color: '#7c3aed', flexShrink: 0, marginTop: '2px', display: 'flex' }}>
                                  <child.icon size={17} strokeWidth={1.75} />
                                </span>
                              ) : null}
                              <span style={{ minWidth: 0 }}>
                                <span style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0f2d6e' }}>{child.label}</span>
                                {child.desc ? (
                                  <span style={{ display: 'block', fontSize: '11px', color: '#6b7280', marginTop: '1px', lineHeight: 1.4 }}>{child.desc}</span>
                                ) : null}
                              </span>
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
    </>
  )
}