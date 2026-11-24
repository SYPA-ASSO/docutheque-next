export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Cabinet Cholez-Pagotto",
    "alternateName": "CBT CHOLEZ PAGOTTO",
    "description": "Plateforme de modèles de documents juridiques français rédigés par un juriste professionnel. Contrats, mises en demeure, RGPD, documents RH, statuts de société. Information sur vos droits, formations sur-mesure, conseil en assurances, accompagnement à la création d'entreprise et formalités.",
    "url": "https://cholez-pagotto.fr",
    "serviceType": [
      "Document juridique en ligne",
      "Information juridique",
      "Formalités d'entreprise",
      "Accompagnement associations et ESS",
      "Conformité RGPD",
      "DPO externalisé",
      "Conseil en assurances",
      "Formation juridique sur-mesure"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services du Cabinet Cholez-Pagotto",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Accès Gratuit",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Modèles juridiques essentiels en DOCX, téléchargeables et personnalisables"
        },
        {
          "@type": "Offer",
          "name": "Abonnement Optimal",
          "price": "14.90",
          "priceCurrency": "EUR",
          "description": "Bibliothèque complète, notices juridiques, fiches pédagogiques et 1 question d'information juridique par mois sous 24 à 48h"
        },
        {
          "@type": "Offer",
          "name": "Information sur vos droits",
          "price": "47",
          "priceCurrency": "EUR",
          "description": "Information juridique rédigée par un juriste sous 24 à 48h, au sens de la loi n°71-1130 du 31 décembre 1971"
        },
        {
          "@type": "Offer",
          "name": "Formations sur-mesure",
          "price": "0",
          "priceCurrency": "EUR",
          "description": "Formations juridiques sur-mesure pour entreprises, associations et structures ESS. Sur devis selon périmètre et durée."
        }
      ]
    },
    "provider": {
      "@type": "Organization",
      "name": "Cabinet Cholez-Pagotto",
      "url": "https://cholez-pagotto.fr",
      "member": [
        {
          "@type": "Person",
          "name": "François CHOLEZ",
          "jobTitle": "Juriste - Formaliste - Conseil en assurances et réassurance"
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}