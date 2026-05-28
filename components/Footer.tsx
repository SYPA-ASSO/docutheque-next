import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#0f2d6e', color: 'white' }}>

      {/* CORPS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem 2rem' }}>

        {/* LOGO + TAGLINE */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <Image
              src="/logo-cholez-pagotto-fond-marine.svg"
              alt="Cabinet Cholez-Pagotto"
              width={220}
              height={52}
              style={{ height: '44px', width: 'auto', marginBottom: '10px', display: 'block' }}
            />
            <p style={{ color: '#c8a84b', fontSize: '11px', letterSpacing: '1.5px', fontWeight: '600', margin: 0 }}>
              Comprendre. Décider. Agir.
            </p>
          </div>
          <div style={{ maxWidth: '360px' }}>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: '1.8', margin: '0 0 8px' }}>
              Information juridique, conseil en assurances et formalités administratives. Juriste formaliste, membre CRFF.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', margin: 0 }}>
              ORIAS n°26003943 · Sous contrôle ACPR · Adhérent ENDYA
            </p>
          </div>
        </div>

        {/* COLONNES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>

          {/* Services */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 14px' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Information sur vos droits', href: '/information-sur-vos-droits' },
                { label: 'Conseil en assurances', href: '/conseil-assurances' },
                { label: 'RGPD & conformité', href: '/contact' },
                { label: 'DPO externalisé', href: '/contact' },
                { label: 'Formations', href: '/formations' },
                { label: 'Catalogue de documents', href: '/catalogue' },
                { label: 'Tarifs', href: '/tarifs' },
              ].map((l) => (
                <Link key={l.href + l.label} href={l.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Accompagnement */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 14px' }}>Accompagnement</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Particuliers', href: '/accompagnement-particuliers' },
                { label: 'Professionnels', href: '/accompagnement-professionnels' },
                { label: 'Associations · ESS', href: '/accompagnement-associations' },
                { label: 'Espace client', href: '/espace-client' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Ressources */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 14px' }}>Ressources</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Blog juridique', href: '/blog' },
                { label: 'Newsletter', href: '/newsletter' },
                { label: 'À propos', href: '/a-propos' },
                { label: 'Contact', href: '/contact' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Légal */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 14px' }}>Informations légales</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Mentions légales', href: '/mentions-legales' },
                { label: 'CGU', href: '/cgu' },
                { label: 'Politique de confidentialité', href: '/confidentialite' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BARRE BASSE */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '11px', margin: 0 }}>
            © {new Date().getFullYear()} Cabinet Cholez-Pagotto · Tous droits réservés
          </p>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '10px', margin: 0 }}>
            Information juridique au sens de la loi n°71-1130 du 31 décembre 1971 · Pas de consultation juridique personnalisée
          </p>
        </div>
      </div>

    </footer>
  )
}