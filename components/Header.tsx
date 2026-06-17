'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, User, Building2, Heart, Scale, Briefcase, Shield, ShieldCheck, UserCheck, BookOpen, Layers, LayoutGrid, Menu, X, type LucideIcon } from 'lucide-react'

type NavChild = { label: string; href: string; desc?: string; icon?: LucideIcon }
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
            { label: 'Particuliers', href: '/accompagnement-particuliers', desc: 'Information juridique, bibliothèque de documents, assurances, formations', icon: User },
            { label: 'Professionnels', href: '/accompagnement-professionnels', desc: 'Création et vie des entreprises, formalités, information juridique, bibliothèque de documents, assurances, RGPD et DPO, paie et DSN, formations', icon: Building2 },
            { label: 'Associations · ESS', href: '/accompagnement-associations', desc: 'Création et vie associative, gouvernance, accompagnement de projet, information juridique, bibliothèque de documents, assurances, RGPD et DPO, paie et DSN, formations', icon: Heart },
          ],
        },
        {
          label: 'Par service',
          children: [
            { label: 'Information sur vos droits', href: '/information-sur-vos-droits', desc: 'Une réponse rédigée par notre juriste', icon: Scale },
            { label: "Création d'entreprise", href: '/creation-entreprise', desc: 'Statuts et formalités', icon: Briefcase },
            { label: 'Formalités externalisées', href: '/formalites-juridiques-externalisees', desc: 'Sous-traitance pour avocats et experts-comptables', icon: Layers },
            { label: 'Conseil en assurances', href: '/conseil-assurances', desc: 'Courtage, ORIAS', icon: Shield },
            { label: 'RGPD & conformité', href: '/rgpd-conformite', desc: 'Diagnostic et mise en conformité', icon: ShieldCheck },
            { label: 'DPO externalisé', href: '/dpo-externalise', desc: 'Conformité dans la durée', icon: UserCheck },
            { label: 'Formations', href: '/formations', desc: 'Sur-mesure, présentiel ou distanciel', icon: BookOpen },
            { label: 'Tous nos services', href: '/services', desc: "Vue d'ensemble de l'accompagnement", icon: LayoutGrid },
          ],
        },
      ],
    },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Tarifs', href: '/tarifs' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const allServices = nav.find((i) => i.groups)?.groups?.flatMap((g) => g.children) ?? []

  return (
    <>
      <style>{`
        @keyframes bandeauPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          50% { transform: scale(1.04); box-shadow: 0 0 0 6px rgba(255,255,255,0); }
        }
        .badge-offre { animation: bandeauPulse 3s ease-in-out infinite; }

        @keyframes giftPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }
        .banner-gift { animation: giftPulse 2.5s ease-in-out infinite; }

        .header-burger { display: none; background: none; border: none; cursor: pointer; padding: 6px; color: #0f2d6e; align-items: center; }
        .mobile-menu { display: none; }
        .banner-mobile { display: none; }

        @media (max-width: 900px) {
          .header-nav { display: none !important; }
          .header-cta { display: none !important; }
          .header-burger { display: inline-flex !important; }
          .mobile-menu { display: flex !important; }
          .banner-desktop { display: none !important; }
          .banner-mobile { display: flex !important; }
        }
      `}</style>

      {/* BANDEAU CREATION OFFERTE */}
      <div style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)' }}>
        {/* Desktop : badge anime + phrase + bouton */}
        <div className="banner-desktop" style={{ maxWidth: '1200px', margin: '0 auto', padding: '10px 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
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
        {/* Mobile : ruban compact tactile */}
        <Link href="/creation-entreprise" className="banner-mobile" style={{ alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '11px 1.25rem', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
          <span className="banner-gift" style={{ display: 'inline-block' }}>🎁</span>
          <span>La création est offerte</span>
          <span aria-hidden="true" style={{ fontSize: '15px' }}>→</span>
        </Link>
      </div>

      <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

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
          <nav className="header-nav" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
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
                    }}>
                      <div style={{
                        background: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '12px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                        padding: '8px 0',
                        display: 'flex',
                        alignItems: 'flex-start',
                        maxHeight: 'calc(100vh - 130px)',
                        overflowY: 'auto',
                      }}>
                        {(item.groups ?? []).map((group, gi) => (
                          <div key={gi} style={{ minWidth: '270px', borderLeft: gi > 0 ? '1px solid #f3f4f6' : 'none' }}>
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

          {/* CTA DESKTOP */}
          <div className="header-cta" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
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

          {/* BURGER MOBILE */}
          <button
            className="header-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} strokeWidth={1.75} /> : <Menu size={26} strokeWidth={1.75} />}
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="mobile-menu" style={{ flexDirection: 'column', borderTop: '1px solid #e5e7eb', background: 'white', padding: '8px 1.25rem 16px' }}>
            <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 4px', fontSize: '15px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #f3f4f6' }}>
              Accueil
            </Link>

            <div style={{ padding: '6px 0' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 0 4px' }}>Services</div>
              {allServices.map((c) => (
                <Link key={c.href + c.label} href={c.href} onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 4px', fontSize: '14px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 500 }}>
                  {c.icon ? <span style={{ color: '#7c3aed', display: 'flex', flexShrink: 0 }}><c.icon size={17} strokeWidth={1.75} /></span> : null}
                  {c.label}
                </Link>
              ))}
            </div>

            <Link href="/catalogue" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 4px', fontSize: '15px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 600, borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
              Catalogue
            </Link>
            <Link href="/tarifs" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 4px', fontSize: '15px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #f3f4f6' }}>
              Tarifs
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 4px', fontSize: '15px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #f3f4f6' }}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ display: 'block', padding: '12px 4px', fontSize: '15px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 600, borderBottom: '1px solid #f3f4f6' }}>
              Contact
            </Link>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
              <Link href="/espace-client" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center', padding: '11px 16px', fontSize: '14px', color: '#0f2d6e', textDecoration: 'none', fontWeight: 600, border: '1px solid #0f2d6e', borderRadius: '8px' }}>
                Mon espace
              </Link>
              <Link href="/information-sur-vos-droits" onClick={() => setMenuOpen(false)} style={{ textAlign: 'center', padding: '11px 16px', fontSize: '14px', color: 'white', background: '#0f2d6e', textDecoration: 'none', fontWeight: 600, borderRadius: '8px' }}>
                Poser une question
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}