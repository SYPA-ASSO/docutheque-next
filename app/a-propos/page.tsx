import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'À propos · François CHOLEZ · Cabinet Cholez-Pagotto',
  description: "François CHOLEZ, juriste et formaliste, fondateur du Cabinet Cholez-Pagotto à Épinal. Membre du CRFF, intermédiaire en assurances immatriculé à l'ORIAS n°26003943. Comprendre. Décider. Agir.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/a-propos',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "À propos du Cabinet Cholez-Pagotto",
  "description": "François CHOLEZ, juriste et formaliste, fondateur du Cabinet Cholez-Pagotto à Épinal. Membre du CRFF, intermédiaire en assurances immatriculé à l'ORIAS n°26003943.",
  "url": "https://cholez-pagotto.fr/a-propos",
  "publisher": {
    "@type": "Organization",
    "name": "Docuthèque · Cabinet Cholez-Pagotto",
    "url": "https://cholez-pagotto.fr"
  },
  "mainEntity": {
    "@type": "Person",
    "name": "François CHOLEZ",
    "jobTitle": "Juriste · Formaliste · Conseil en assurances",
    "affiliation": {
      "@type": "Organization",
      "name": "Cabinet Cholez-Pagotto"
    },
    "image": "https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200",
    "description": "Juriste - Formaliste - Conseil en assurances réglementé. Membre du CRFF. Intermédiaire en assurances immatriculé à l'ORIAS n°26003943. Cabinet Cholez-Pagotto."
  }
}

export default function APropos() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: '500' }}>À propos</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', marginBottom: '16px', letterSpacing: '0.05em' }}>
              LE CABINET
            </span>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 12px', lineHeight: '1.3' }}>
              Cabinet Cholez-Pagotto
            </h1>
            <p style={{ color: '#c8a84b', fontSize: '1.1rem', fontWeight: '600', margin: '0 0 16px', letterSpacing: '0.03em' }}>
              Comprendre. Décider. Agir.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.8', margin: '0 auto' }}>
              Information juridique, formalités administratives et conseil en assurances. Un juriste, une équipe humaine, zéro intelligence artificielle.
            </p>
          </div>
        </section>

        <div style={{ margin: '0 auto', padding: '3rem 2rem' }}>

          {/* PROFIL */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '16px', padding: '2.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flexShrink: 0 }}>
                <Image
                  src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200"
                  alt="François CHOLEZ, juriste et formaliste, Cabinet Cholez-Pagotto"
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%', border: '3px solid #e5e7eb' }}
                  unoptimized
                />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 4px' }}>François CHOLEZ</p>
                <p style={{ color: '#c8a84b', fontSize: '13px', fontWeight: '600', margin: '0 0 16px' }}>
                  Juriste · Formaliste · Conseil en assurances
                </p>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8', margin: '0 0 14px' }}>
                  Fondateur du Cabinet Cholez-Pagotto, François CHOLEZ accompagne les particuliers, professionnels et associations dans leurs démarches juridiques et administratives. Membre adhérent du Conseil Représentatif des Formalistes de France (CRFF).
                </p>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
                  François CHOLEZ exerce le conseil en assurances dans un cadre réglementé : intermédiaire en assurances immatriculé à l'ORIAS sous le numéro <strong>26003943</strong>, sous contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR). Cette immatriculation garantit le respect d'obligations professionnelles strictes : formation continue, capacité professionnelle vérifiée, responsabilité civile professionnelle et garantie financière. Membre de l'association d'autorégulation <strong>ENDYA</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* VALEURS ET PHILOSOPHIE */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem' }}>Notre philosophie</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                {
                  titre: 'Le droit, simplement expliqué',
                  desc: "Le droit régit chaque aspect de la vie des personnes et des organisations. Pourtant, il reste largement inaccessible à ceux qui en ont le plus besoin. Notre conviction : l'information juridique de qualité ne devrait pas être réservée à ceux qui peuvent s'offrir un avocat. Elle est un outil d'émancipation.",
                  couleur: '#0f2d6e',
                },
                {
                  titre: 'Humain par choix, pas par défaut',
                  desc: "À une époque où l'intelligence artificielle s'infiltre dans tous les secteurs, nous faisons un choix assumé : chaque réponse, chaque document, chaque conseil est produit par un être humain qualifié. Pas parce que nous ne connaissons pas l'IA, mais parce que la responsabilité que nous engageons ne peut pas être déléguée à un algorithme.",
                  couleur: '#0f2d6e',
                },
                {
                  titre: 'Transparent sur tout',
                  desc: "Les prix sont affichés avant toute démarche. Les commissions perçues en cas de souscription d'assurance sont communiquées avant souscription. Le périmètre de ce que nous faisons et de ce que nous ne faisons pas est clairement délimité. La confiance se construit sur la clarté, pas sur le vague.",
                  couleur: '#0f2d6e',
                },
                {
                  titre: 'Indépendant dans nos recommandations',
                  desc: "Aucun lien exclusif avec un assureur, aucune affiliation à un réseau qui orienterait nos conseils. Les recommandations que nous formulons reposent exclusivement sur l'analyse des besoins du client et la comparaison objective des offres disponibles sur le marché.",
                  couleur: '#0f2d6e',
                },
                {
                  titre: 'Rigoureux dans les fondamentaux',
                  desc: "Information juridique fondée sur les textes en vigueur. Documents mis à jour à chaque évolution législative. Conseil en assurances conforme à la Directive sur la Distribution d'Assurances. Formalités réalisées selon les exigences des organismes compétents. La rigueur n'est pas une option.",
                  couleur: '#0f2d6e',
                },
                {
                  titre: "Engagé dans l'économie sociale et solidaire",
                  desc: "Plus de 30 ans d'engagement aux côtés des acteurs associatifs, coopératifs et mutualistes. Le secteur ESS a des besoins juridiques et assurantiels spécifiques, souvent mal servis. Le cabinet en a fait un axe majeur de son activité, pas un marché de niche.",
                  couleur: '#0f2d6e',
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', borderTop: `3px solid ${item.couleur}` }}>
                  <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px' }}>{item.titre}</p>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ACCRÉDITATIONS */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem' }}>Accréditations et enregistrements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                {
                  titre: 'Membre CRFF',
                  desc: 'Conseil Représentatif des Formalistes de France. Organisation représentative des juristes et formalistes en France, garante d\'un exercice déontologique de l\'activité formaliste.',
                  badge: 'CRFF'
                },
                {
                  titre: 'ORIAS n°26003943',
                  desc: "Immatriculation obligatoire au registre des intermédiaires en assurance, banque et finance. Atteste de la capacité professionnelle vérifiée et du respect des obligations légales d'exercice. Vérifiable sur orias.fr.",
                  badge: 'IAS Niv. 1'
                },
                {
                  titre: 'Contrôle ACPR',
                  desc: "Activité de conseil en assurances exercée sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution, autorité de supervision des secteurs de la banque et de l'assurance en France.",
                  badge: 'ACPR'
                },
                {
                  titre: 'Membre ENDYA',
                  desc: "Adhérent de l'association professionnelle d'autorégulation des intermédiaires en assurance, engagée pour des pratiques de distribution conformes aux exigences de la Directive sur la Distribution d'Assurances (DDA).",
                  badge: 'ENDYA'
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>{item.titre}</p>
                    <span style={{ background: '#eff6ff', color: '#1a4fba', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px', whiteSpace: 'nowrap', marginLeft: '8px' }}>{item.badge}</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CE QUE LE CABINET PROPOSE */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem' }}>Ce que le cabinet propose</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {[
                { label: "Bibliothèque de documents juridiques téléchargeables et personnalisables", lien: "/catalogue" },
                { label: "Information sur vos droits par un juriste sous 24 à 48h ouvrées", lien: "/information-sur-vos-droits" },
                { label: "Accompagnement à la création d'entreprise — formalités offertes", lien: "/accompagnement-professionnels" },
                { label: "Accompagnement des associations et structures ESS", lien: "/accompagnement-associations" },
                { label: "Accompagnement RGPD et conformité", lien: "/contact" },
                { label: "Conseil en assurances réglementé — forfait conseil 90 € / 150 €", lien: "/conseil-assurances" },
                { label: "DPO externalisé", lien: "/contact" },
                { label: "Formations sur-mesure", lien: "/formations" },
              ].map((service, i) => (
                <a key={i} href={service.lien} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '0.875rem 1rem', display: 'flex', gap: '10px', alignItems: 'flex-start', textDecoration: 'none' }}>
                  <span style={{ color: '#1a4fba', fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>{service.label}</p>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 8px' }}>Une question ? Un projet ?</p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: '0 0 20px', lineHeight: '1.7' }}>
              Prenez contact avec notre juriste. Réponse sous 24 à 48 heures ouvrées.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
                Nous contacter →
              </a>
              <a href="/services" style={{ display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.5)', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>
                Voir nos services
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}