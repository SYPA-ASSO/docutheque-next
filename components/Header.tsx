'use client'

import { useState } from 'react'
import { Scale, ChevronDown, Building2, Heart, User, BookOpen } from 'lucide-react'

const accompagnementLinks = [
  { href: '/accompagnement-professionnels', label: 'Professionnels', desc: 'Création d\'entreprise offerte', icone: <Building2 size={15} strokeWidth={1.5} /> },
  { href: '/accompagnement-associations', label: 'Associations · ESS', desc: 'Statuts, RGPD, formalités', icone: <Heart size={15} strokeWidth={1.5} /> },
  { href: '/accompagnement-particuliers', label: 'Particuliers', desc: 'Information sur vos droits', icone: <User size={15} strokeWidth={1.5} /> },
  { href: '/formations', label: 'Formations', desc: 'Sur-mesure, présentiel ou distanciel', icone: <BookOpen size={15} strokeWidth={1.5} /> },
]

export default function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false)

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

      {/* BANDEAU OFFRE DÉDIÉE */}
      <div style={{ background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', padding: '10px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
          <span className="badge-offre" style={{ background: 'white', color: '#b8860b', fontSize: '11px', fontWeight: '800', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.08em', whiteSpace: 'nowrap', flexShrink: 0, display: 'inline-block' }}>
            🎁 ACTUELLEMENT : LA CRÉATION EST OFFERTE
          </span>
          <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: '12px', lineHeight: '1.5', textAlign: 'center', flex: 1 }}>
            Création d'entreprise, statuts, contrats, conformité RGPD, formations... Juriste et formaliste dédié, conseil en assurances, à vos côtés à chaque étape.
          </span>
          <a href="/services" style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.8)', borderRadius: '6px', padding: '4px 12px', color: 'white', fontSize: '12px', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
            En savoir plus
          </a>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '56px' }}>

          {/* LOGO */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{ width: '28px', height: '28px', background: '#1a4fba', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={16} color="white" strokeWidth={1.5} />
            </div>
            <div>
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f2d6e' }}>Docuthèque</span>
              <span style={{ fontSize: '11px', color: '#6b7280', marginLeft: '6px' }}>Vos documents juridiques en ligne</span>
            </div>
          </a>

          {/* NAVIGATION */}
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <a href="/" style={{ color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>Accueil</a>

            {/* MENU DÉROULANT ACCOMPAGNEMENT */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setMenuOuvert(true)}
              onMouseLeave={() => setMenuOuvert(false)}
            >
              <button
                onClick={() => setMenuOuvert(!menuOuvert)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '4px',
                  color: '#374151', fontSize: '13px', fontWeight: '500',
                  background: 'none', border: 'none', cursor: 'pointer', padding: '0'
                }}
              >
                Accompagnement
                <ChevronDown
                  size={14}
                  strokeWidth={2}
                  style={{ transition: 'transform 0.2s', transform: menuOuvert ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </button>

              {menuOuvert && (
                <div style={{
                  position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
                  paddingTop: '8px', zIndex: 200, width: '280px'
                }}>
                <div style={{
                  background: 'white', border: '1px solid #e5e7eb',
                  borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  padding: '0.5rem'
                }}>
                  {accompagnementLinks.map((lien, i) => (
                    <a
                      key={i}
                      href={lien.href}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.75rem',
                        padding: '0.6rem 0.75rem', borderRadius: '8px',
                        textDecoration: 'none', color: '#374151',
                        transition: 'background 0.15s'
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#f8fafc')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                    >
                      <div style={{ color: '#1a4fba', flexShrink: 0 }}>{lien.icone}</div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f2d6e' }}>{lien.label}</div>
                        <div style={{ fontSize: '11px', color: '#6b7280' }}>{lien.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
                </div>
              )}
            </div>

            <a href="/services" style={{ color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>Services</a>
            <a href="/tarifs" style={{ color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>Tarifs</a>
            <a href="/blog" style={{ color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>Blog</a>
            <a href="/contact" style={{ color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500' }}>Contact</a>

            <a href="/connexion" style={{ background: '#1a4fba', color: 'white', border: 'none', borderRadius: '6px', padding: '7px 16px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
              Mon espace client / Mon inscription
            </a>
          </nav>

        </div>
      </header>
    </>
  )
}