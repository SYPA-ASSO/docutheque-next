import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ background: '#0f2d6e', color: 'white' }}>

      {/* CORPS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>

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
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: '1.8', margin: 0 }}>
              Information juridique, conseil en assurances et formalités administratives, pour les particuliers,
              les professionnels, les associations et les collectivités.
            </p>
          </div>
        </div>

        {/* COLONNES */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem 1.5rem', marginBottom: '2.5rem' }}>

          {/* Services */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', margin: '0 0 14px' }}>Services</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { label: 'Information sur vos droits', href: '/information-sur-vos-droits' },
                { label: "Création d'entreprise", href: '/creation-entreprise' },
                { label: 'Formalités externalisées', href: '/formalites-juridiques-externalisees' },
                { label: 'Conseil en assurances', href: '/conseil-assurances' },
                { label: 'RGPD & conformité', href: '/rgpd-conformite' },
                { label: 'DPO externalisé', href: '/dpo-externalise' },
                { label: 'Formations', href: '/formations' },
                { label: 'Certification Qualiopi', href: '/accompagnement-organismes-formation' },
                { label: 'Paie et DSN externalisées', href: 'https://paie-et-dsn.fr' },
                { label: 'Tous nos services', href: '/services' },
                { label: 'Modèles de documents', href: '/catalogue' },
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
                { label: 'OF / Formateurs', href: '/accompagnement-organismes-formation' },
                { label: 'Mentorat Consultant Qualiopi', href: '/mentorat-consultant-qualite' },
                { label: 'Vie des entreprises', href: '/vie-des-entreprises' },
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
                { label: 'Juriste ou avocat ?', href: '/juriste-formaliste-ou-avocat' },
                { label: 'Avocats : nous rejoindre', href: '/referencement-avocats' },
                { label: 'Newsletter', href: '/newsletter' },
                { label: 'À propos', href: '/a-propos' },
                { label: 'Prozowo.fr, plateforme de mise en relation', href: '/prozowo' },
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
                { label: 'Informations réglementaires', href: '/informations-reglementaires' },
                { label: 'CGU', href: '/cgu' },
                { label: 'Politique de confidentialité', href: '/confidentialite' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', textDecoration: 'none', lineHeight: '1.5' }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Badge partenaire */}
          <div>
            <a
              href="https://www.prozowo.fr/prestataires/46be05a9-3430-4029-bbcb-91b20fa43f6c"
              target="_blank"
              rel="noopener sponsored"
              aria-label="Prozowo, Prestataire vérifié + : voir le profil de CBT CHOLEZ PAGOTTO"
            >
              <img
                src="https://www.prozowo.fr/api/badge/46be05a9-3430-4029-bbcb-91b20fa43f6c?theme=sombre"
                alt="Prozowo, Prestataire vérifié + : CBT CHOLEZ PAGOTTO"
                width={224}
                height={48}
                style={{ width: '100%', maxWidth: '224px', height: 'auto', display: 'block' }}
                loading="lazy"
              />
            </a>
          </div>

        </div>

        {/* MENTION REGLEMENTAIRE */}
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', lineHeight: '1.7', margin: 0, paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          Activité de conseil en assurances et réassurances réglementée, exercée sous le contrôle de l'ACPR
          (Autorité de Contrôle Prudentiel et de Résolution), déclarée à l'ORIAS sous le numéro 26003943.
          Membre de l'association d'autorégulation ENDYA. Membre du CRFF (Conseil Représentatif des Formalistes de France).
        </p>

      </div>

      {/* BARRE BASSE */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: '1rem 1.5rem' }}>
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