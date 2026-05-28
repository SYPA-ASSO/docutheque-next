import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Docuthèque · Cabinet Cholez-Pagotto · Comprendre. Décider. Agir.',
  description: "Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Juriste formaliste, membre CRFF, ORIAS n°26003943. Épinal · Grand Est · France.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Docuthèque · Cabinet Cholez-Pagotto",
  "url": "https://cholez-pagotto.fr",
  "description": "Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Comprendre. Décider. Agir.",
  "publisher": {
    "@type": "Organization",
    "name": "Docuthèque · Cabinet Cholez-Pagotto",
    "url": "https://cholez-pagotto.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cholez-pagotto.fr/logo-cholez-pagotto-transparent.svg"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 rue d'Olima",
      "postalCode": "88000",
      "addressLocality": "Épinal",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@cholez-pagotto.fr"
    }
  }
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h1 style={{ color: 'white', fontSize: '2.2rem', fontWeight: '700', margin: '0 0 12px', lineHeight: '1.3' }}>
              Votre droit, simplement expliqué.<br />Vos démarches, professionnellement accompagnées.
            </h1>
            <p style={{ color: '#c8a84b', fontSize: '1.1rem', fontWeight: '600', margin: '0 0 16px', letterSpacing: '0.03em' }}>
              Comprendre. Décider. Agir.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.8', margin: '0 auto 24px' }}>
              Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Pour les particuliers, les professionnels et les associations. Un juriste humain, zéro intelligence artificielle, réponse sous 24 à 48 heures ouvrées.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/catalogue" style={{ display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Accéder aux documents →
              </a>
              <a href="/information-sur-vos-droits" style={{ display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                Poser une question à un juriste
              </a>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '16px auto 0', maxWidth: '560px', lineHeight: '1.7' }}>
              47 € la question · Abonnement Optimal dès 17,90 €/mois · Forfait conseil assurances dès 90 €
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ background: '#f8fafc', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px', letterSpacing: '0.05em' }}>NOS SERVICES</span>
              <h2 style={{ color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 8px' }}>Ce que nous proposons</h2>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto' }}>
                Des services concrets, accessibles, fondés sur l'information juridique et non sur la consultation.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                {
                  titre: "Bibliothèque de documents",
                  desc: "Modèles DOCX téléchargeables et personnalisables : contrats, mises en demeure, statuts, RGPD. Accès libre ou abonnement Optimal.",
                  lien: '/catalogue',
                  cta: 'Voir le catalogue',
                  badge: 'Docuthèque',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "Information sur vos droits",
                  desc: "Posez votre question à notre juriste. Réponse rédigée sous 24 à 48 heures ouvrées. 47 € à l'unité, inclus dans l'abonnement Optimal.",
                  lien: '/information-sur-vos-droits',
                  cta: 'Poser une question',
                  badge: '24 à 48h',
                  badgeColor: '#f0fdf4',
                  badgeText: '#16a34a',
                },
                {
                  titre: "Conseil en assurances",
                  desc: "Analyse de vos besoins, audit des contrats existants, comparaison des offres. Forfait conseil 90 € HT (particuliers) · 150 € HT (professionnels). Commission assureur séparée, communiquée avant souscription.",
                  lien: '/conseil-assurances',
                  cta: 'En savoir plus',
                  badge: 'ORIAS 26003943',
                  badgeColor: '#fef3c7',
                  badgeText: '#92400e',
                },
                {
                  titre: "Création d'entreprise",
                  desc: "Accompagnement complet à la création de votre société : choix de la forme juridique, rédaction des statuts, dépôt au greffe. Création offerte hors frais de greffe et journal d'annonces légales.",
                  lien: '/accompagnement-professionnels',
                  cta: 'Accompagnement pro',
                  badge: 'Offert',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "Associations · ESS",
                  desc: "Création, modification des statuts, AGO/AGE, obligations comptables, RGPD pour les associations loi 1901 et structures de l'économie sociale et solidaire.",
                  lien: '/accompagnement-associations',
                  cta: 'Accompagnement associations',
                  badge: 'Sur devis',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "Formations sur-mesure",
                  desc: "Formations en droit du travail, RGPD, droit des associations, formalités juridiques. Intra ou inter-entreprises, adaptées à vos équipes.",
                  lien: '/formations',
                  cta: 'Voir les formations',
                  badge: 'Sur devis',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
              ].map((service, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: 0, lineHeight: '1.3', flex: 1 }}>{service.titre}</p>
                    <span style={{ background: service.badgeColor, color: service.badgeText, fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px', marginLeft: '8px', whiteSpace: 'nowrap', flexShrink: 0 }}>{service.badge}</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0, flex: 1 }}>{service.desc}</p>
                  <a href={service.lien} style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '700', textDecoration: 'none', alignSelf: 'flex-start' }}>
                    {service.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABONNEMENT OPTIMAL */}
        <section style={{ background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 14px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '0.05em' }}>
                ABONNEMENT OPTIMAL
              </span>
              <h2 style={{ color: 'white', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 12px' }}>
                Accès illimité à toute la bibliothèque + questions juriste incluses
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.8', margin: '0 0 24px', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}>
                Documents téléchargeables et personnalisables, question juriste mensuelle non cumulable, newsletter exclusive abonnés, tarif préférentiel sur les questions supplémentaires.
              </p>
              <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>Particulier</p>
                  <p style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>à partir de 17,90 €</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>par mois · ou 149 €/an</p>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>Pro · Association</p>
                  <p style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>à partir de 27,90 €</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>par mois · ou 249 €/an</p>
                </div>
              </div>
              <a href="/tarifs" style={{ display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Voir les offres en détail →
              </a>
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section style={{ background: '#f8fafc', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 8px' }}>Pourquoi choisir le Cabinet Cholez-Pagotto ?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                {
                  titre: '100% humain',
                  desc: "Notre juriste rédige toutes les réponses. Aucune intelligence artificielle n'intervient dans la production de contenu.",
                },
                {
                  titre: 'Information juridique conforme',
                  desc: "Notre activité est exercée dans le cadre de la loi n°71-1130 du 31 décembre 1971. Nous ne sommes pas un cabinet d'avocats.",
                },
                {
                  titre: 'Réponse sous 24 à 48h ouvrées',
                  desc: "Une obligation de moyen : nous mettons tout en oeuvre pour répondre dans ce délai, et vous prévenons en cas de dépassement.",
                },
                {
                  titre: 'Garanties professionnelles',
                  desc: "Membre CRFF, ORIAS n°26003943, sous contrôle ACPR, membre ENDYA. Des accréditations vérifiables.",
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 8px' }}>{item.titre}</p>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px' }}>Prêt à commencer ?</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8', margin: '0 0 28px' }}>
              Créez votre compte gratuit, accédez aux documents disponibles en accès libre, et découvrez nos offres.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/connexion" style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Créer mon compte gratuit →
              </a>
              <a href="/blog" style={{ display: 'inline-block', background: 'white', color: '#0f2d6e', border: '1px solid #e5e7eb', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                Lire nos articles
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}