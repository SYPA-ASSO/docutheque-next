import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'À propos · François CHOLEZ · Cabinet Cholez-Pagotto',
  description: "François CHOLEZ, juriste et formaliste, fondateur du Cabinet Cholez-Pagotto à Épinal. Membre du CRFF, courtier en assurances ORIAS n°26003943. Comprendre. Décider. Agir.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr/a-propos',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "À propos du Cabinet Cholez-Pagotto",
  "description": "François CHOLEZ, juriste et formaliste, fondateur du Cabinet Cholez-Pagotto à Épinal. Membre du CRFF, courtier en assurances ORIAS n°26003943.",
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
    "description": "Juriste - Formaliste - Conseil en assurances. Membre du CRFF. Cabinet Cholez-Pagotto."
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
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.8', maxWidth: '620px', margin: '0 auto' }}>
              Information juridique, formalités administratives et conseil en assurances. Un juriste, une équipe humaine, zéro intelligence artificielle.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>

          {/* PROFIL JURISTE */}
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
                <p style={{ color: '#c8a84b', fontSize: '13px', fontWeight: '600', margin: '0 0 12px' }}>
                  Juriste · Formaliste · Conseil en assurances
                </p>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8', margin: '0 0 12px' }}>
                  Fondateur du Cabinet Cholez-Pagotto, François CHOLEZ accompagne les particuliers, professionnels et associations dans leurs démarches juridiques et administratives depuis de nombreuses années. Membre adhérent du Conseil Représentatif des Formalistes de France (CRFF).
                </p>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
                  Courtier en assurances et réassurances de niveau IAS 1, immatriculé à l'ORIAS sous le numéro <strong>26003943</strong>, sous contrôle de l'ACPR. Membre de l'association d'autorégulation <strong>ENDYA</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* ACCRÉDITATIONS */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem' }}>Accréditations et enregistrements</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                {
                  titre: 'Membre CRFF',
                  desc: 'Conseil Représentatif des Formalistes de France. Organisation représentative des juristes et formalistes en France.',
                  badge: 'CRFF'
                },
                {
                  titre: 'ORIAS n°26003943',
                  desc: "Immatriculation au registre des intermédiaires en assurance. Vérifiable sur orias.fr.",
                  badge: 'IAS Niv. 1'
                },
                {
                  titre: 'Contrôle ACPR',
                  desc: "Activité de courtage exercée sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution.",
                  badge: 'ACPR'
                },
                {
                  titre: 'Membre ENDYA',
                  desc: "Adhérent de l'association d'autorégulation des intermédiaires en assurance.",
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

          {/* PUBLICATIONS */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem' }}>Publications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  annee: '2026',
                  editeur: 'Le Cavalier Bleu',
                  desc: "Publication aux Éditions Le Cavalier Bleu.",
                },
                {
                  annee: '2021',
                  editeur: "L'Harmattan",
                  desc: "Publication aux Éditions L'Harmattan.",
                },
              ].map((pub, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ background: '#0f2d6e', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '6px', flexShrink: 0 }}>{pub.annee}</span>
                  <div>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '600', margin: '0 0 2px' }}>{pub.editeur}</p>
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>{pub.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem' }}>Ce que nous proposons</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              {[
                "Bibliothèque de documents juridiques téléchargeables et personnalisables",
                "Information sur vos droits par un juriste sous 24 à 48h",
                "Accompagnement à la création d'entreprise",
                "Accompagnement des associations · ESS",
                "Accompagnement RGPD et conformité",
                "Conseil en assurances, sans honoraires directs",
                "DPO externalisé",
                "Formations sur-mesure",
              ].map((service, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '0.875rem 1rem', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#1a4fba', fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>{service}</p>
                </div>
              ))}
            </div>
          </section>

          {/* INFOS LÉGALES */}
          <section style={{ background: '#0f2d6e', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
            <p style={{ color: 'white', fontSize: '1rem', fontWeight: '700', margin: '0 0 16px' }}>Informations légales</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', fontSize: '12px' }}>
              {[
                ['Dénomination', 'Cabinet Cholez-Pagotto'],
                ['Forme juridique', 'Entreprise individuelle (E.I.)'],
                ['SIRET', '490 889 516 00053'],
                ['Siège social', "12 rue d'Olima, 88000 Épinal"],
                ['ORIAS', "n°26003943 · IAS Niveau 1"],
                ['Franchise TVA', 'Art. 293 B CGI · TVA non applicable'],
              ].map(([label, value], i) => (
                <div key={i}>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontWeight: '600', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '12px', margin: 0 }}>{value}</p>
                </div>
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