import Link from 'next/link'
import Image from 'next/image'

export default function FooterMinimal() {
  return (
    <footer style={{ background: 'white', borderTop: '1px solid #e5e7eb', padding: '1.25rem 2rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>

        {/* SIGNE + TAGLINE */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Image
            src="/logo-cholez-pagotto-signe-seul.svg"
            alt="Cabinet Cholez-Pagotto"
            width={54}
            height={40}
            style={{ height: '32px', width: 'auto' }}
          />
          <div>
            <p style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '700', margin: '0 0 2px', lineHeight: 1 }}>
              Cabinet Cholez-Pagotto
            </p>
            <p style={{ color: '#c8a84b', fontSize: '9px', letterSpacing: '1.2px', fontWeight: '600', margin: 0 }}>
              COMPRENDRE · DÉCIDER · AGIR
            </p>
          </div>
        </div>

        {/* LIENS LÉGAUX */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {[
            { label: 'Mentions légales', href: '/mentions-legales' },
            { label: 'Informations réglementaires', href: '/informations-reglementaires' },
            { label: 'CGU', href: '/cgu' },
            { label: 'Confidentialité', href: '/confidentialite' },
            { label: 'Contact', href: '/contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ color: '#9ca3af', fontSize: '11px', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <span style={{ color: '#d1d5db', fontSize: '11px' }}>·</span>
          <p style={{ color: '#d1d5db', fontSize: '10px', margin: 0 }}>
            © {new Date().getFullYear()} Cabinet Cholez-Pagotto
          </p>
        </div>

      </div>
    </footer>
  )
}