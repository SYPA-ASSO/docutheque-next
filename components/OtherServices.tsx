import { Building2, Heart, Shield, Lock, Umbrella, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: <Building2 size={24} color="white" strokeWidth={1.5} />,
    titre: "Création et formalités d'entreprise",
    desc: "Statuts, immatriculation, modifications statutaires, dissolution. De l'idée au Kbis, le cabinet prend en charge l'ensemble des formalités.",
    highlight: "La création est offerte, hors frais de greffe et de publication légale.",
    cible: "Entrepreneurs, créateurs de société, porteurs de projet",
    lien: "/accompagnement-professionnels",
    featured: true,
  },
  {
    icon: <Heart size={24} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Associations et structures ESS",
    desc: "Création, statuts, gouvernance, conformité juridique et réglementaire. Une expertise construite sur plus de trente ans d'engagement dans le secteur associatif et l'économie sociale et solidaire.",
    cible: "Associations loi 1901, fondations, coopératives, mutuelles",
    lien: "/accompagnement-associations",
    featured: false,
  },
  {
    icon: <Shield size={24} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Accompagnement RGPD",
    desc: "Diagnostic documentaire, registres, politique de confidentialité, contrats de sous-traitance, réponses aux droits des personnes, formation des équipes. Une mise en conformité structurée, de A à Z.",
    cible: "Entreprises, associations, professions libérales, collectivités",
    lien: "/services#rgpd",
    featured: false,
  },
  {
    icon: <Lock size={24} color="#1a4fba" strokeWidth={1.5} />,
    titre: "DPO externalisé",
    desc: "Prise en charge du mandat de Délégué à la Protection des Données. Veille permanente sur l'actualité réglementaire et les décisions de la CNIL, suivi de conformité, point de contact désigné auprès de l'autorité de contrôle.",
    cible: "Organismes publics, structures traitant des données sensibles, TPE, associations",
    lien: "/services#dpo",
    featured: false,
  },
  {
    icon: <Umbrella size={24} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Conseil en assurances",
    desc: "Forfait conseil individualisé, documenté et motivé : art. L.521-4 Code des assurances (DDA). Analyse des besoins, audit des contrats existants, comparaison des offres, rapport écrit archivé. 90 € HT (particuliers) · 150 € HT (professionnels, associations). Commission assureur séparée, communiquée avant souscription.",
    cible: "Particuliers, professionnels, associations, créateurs d'entreprise",
    lien: "/services#assurances",
    featured: false,
  },
  {
    icon: <GraduationCap size={24} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Formations sur-mesure",
    desc: "Sessions de formation conçues en fonction de vos équipes, votre secteur et vos enjeux : droit du travail, RGPD, gouvernance associative, formalités juridiques... Présentiel ou distanciel, avec support documentaire remis aux participants.",
    cible: "Entreprises, associations, structures ESS, professions libérales",
    lien: "/services#formations",
    featured: false,
  },
]

export default function OtherServices() {
  return (
    <>
    <style>{`
      @keyframes offrePulse {
        0%, 60%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        }
        30% {
          transform: scale(1.04);
          box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.25);
        }
      }
      .offre-animee {
        animation: offrePulse 3s ease-in-out infinite;
        transform-origin: center;
      }
    `}</style>
    <section style={{background: '#f8fafc', padding: '4rem 0', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>

        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
          <span style={{display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em', marginBottom: '12px'}}>
            UN INTERLOCUTEUR UNIQUE
          </span>
          <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 8px'}}>
            Le cabinet vous accompagne aussi dans vos démarches, projets et décisions
          </h2>
          <p style={{color: '#6b7280', fontSize: '0.875rem', margin: '0 auto', maxWidth: '560px', lineHeight: '1.7'}}>
            Au-delà des documents et de l'information sur vos droits, le Cabinet Cholez-Pagotto propose des services spécialisés pour sécuriser chaque étape de votre projet.
          </p>
        </div>

        {/* LIGNE 1 : carte bleue creation + 2 cartes blanches */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '16px'}}>

          <a href="/accompagnement-professionnels" style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '12px', padding: '1.75rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px', gridColumn: '1'}}>
            <div style={{width: '44px', height: '44px', background: 'rgba(255,255,255,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
              <Building2 size={24} color="white" strokeWidth={1.5} />
            </div>
            <p style={{color: 'white', fontSize: '14px', fontWeight: '700', margin: 0, lineHeight: '1.4'}}>Création et formalités d'entreprise</p>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.7', margin: 0}}>Statuts, immatriculation, modifications statutaires, dissolution. De l'idée au Kbis, le cabinet prend en charge l'ensemble des formalités.</p>
            <div className="offre-animee" style={{background: 'white', borderRadius: '8px', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '10px'}}>
              <span style={{fontSize: '20px', flexShrink: 0}}>🎁</span>
              <div>
                <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '800', margin: '0 0 2px', letterSpacing: '-0.01em'}}>La création est offerte</p>
                <p style={{color: '#6b7280', fontSize: '11px', margin: 0}}>hors frais de greffe et de publication légale</p>
              </div>
            </div>
            <p style={{color: 'rgba(255,255,255,0.55)', fontSize: '11px', margin: 0, fontStyle: 'italic'}}>Entrepreneurs, créateurs de société, porteurs de projet</p>
            <span style={{color: '#93c5fd', fontSize: '12px', fontWeight: '600'}}>En savoir plus →</span>
          </a>

          {services.slice(1, 3).map((s, i) => (
            <a key={i} href={s.lien} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <div style={{width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                {s.icon}
              </div>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0, lineHeight: '1.4'}}>{s.titre}</p>
              <p style={{color: '#374151', fontSize: '12px', lineHeight: '1.7', margin: 0, flex: 1}}>{s.desc}</p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0, fontStyle: 'italic'}}>{s.cible}</p>
              <span style={{color: '#1a4fba', fontSize: '12px', fontWeight: '600'}}>En savoir plus →</span>
            </a>
          ))}
        </div>

        {/* LIGNE 2 : 3 cartes */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '0 0 2.5rem'}}>
          {services.slice(3).map((s, i) => (
            <a key={i} href={s.lien} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <div style={{width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                {s.icon}
              </div>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0, lineHeight: '1.4'}}>{s.titre}</p>
              <p style={{color: '#374151', fontSize: '12px', lineHeight: '1.7', margin: 0, flex: 1}}>{s.desc}</p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0, fontStyle: 'italic'}}>{s.cible}</p>
              <span style={{color: '#1a4fba', fontSize: '12px', fontWeight: '600'}}>En savoir plus →</span>
            </a>
          ))}
        </div>

        <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap'}}>
          <div>
            <p style={{color: 'white', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Une question sur le bon service pour votre situation ?</p>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', margin: 0}}>Le cabinet vous oriente sans engagement. <a href="/services" style={{color: '#93c5fd', textDecoration: 'none', fontWeight: '500'}}>Voir tous nos services →</a></p>
          </div>
          <a href="/contact" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '12px 28px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', flexShrink: 0}}>
            Nous contacter
          </a>
        </div>

      </div>
    </section>
    </>
  )
}