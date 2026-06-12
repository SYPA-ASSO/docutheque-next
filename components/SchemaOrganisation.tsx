export default function SchemaOrganisation() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://cholez-pagotto.fr/#cabinet',
    name: 'Cabinet Cholez-Pagotto',
    alternateName: 'CBT CHOLEZ PAGOTTO',
    url: 'https://cholez-pagotto.fr',
    logo: 'https://cholez-pagotto.fr/logo-social-512x512.png',
    image: 'https://cholez-pagotto.fr/logo-social-512x512.png',
    description:
      'Information juridique, documents téléchargeables et personnalisables, conformité RGPD et conseil en assurances. Le cabinet intervient à distance et se déplace auprès de ses clients.',
    telephone: '+33 3 74 47 40 55',
    email: 'contact@cholez-pagotto.fr',
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    availableLanguage: 'fr',
    knowsAbout: [
      'Information juridique',
      'Droit des associations',
      'Conformité RGPD',
      'DPO externalisé',
      'Courtage en assurances',
      "Création d'entreprise",
      'Formalités juridiques',
    ],
    founder: {
      '@type': 'Person',
      name: 'François Cholez',
      jobTitle: 'Juriste formaliste',
    },
    identifier: {
      '@type': 'PropertyValue',
      name: 'ORIAS',
      value: '26003943',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}