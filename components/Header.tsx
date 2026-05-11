import { Scale } from 'lucide-react'

export default function Header() {
  return (
    <>
      {/* BANDEAU OFFRE DÉDIÉE */}
      <div style={{background: '#0f2d6e', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '8px 0', textAlign: 'center'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
          <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.5'}}>
            <strong style={{color: 'white'}}>OFFRE DÉDIÉE</strong> · Création d'entreprise, statuts, contrats, conformité RGPD, recouvrement, assistance... On vous accompagne dans chaque phase de la vie de votre projet et de votre entreprise. Juriste et formaliste dédié, conseil en assurances, tout est mis en œuvre pour être à vos côtés.
          </span>
          <a href="/accompagnement" style={{color: '#93c5fd', fontSize: '12px', fontWeight: '600', textDecoration: 'none', whiteSpace: 'nowrap'}}>En savoir plus →</a>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <header style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '0', position: 'sticky', top: 0, zIndex: 100}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '56px'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <div style={{width: '28px', height: '28px', background: '#1a4fba', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Scale size={16} color="white" strokeWidth={1.5} />
            </div>
            <div>
              <span style={{fontSize: '14px', fontWeight: '700', color: '#0f2d6e'}}>Docuthèque</span>
              <span style={{fontSize: '11px', color: '#6b7280', marginLeft: '6px'}}>Vos documents juridiques en ligne</span>
            </div>
          </div>
          <nav style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <a href="/" style={{color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500'}}>Accueil</a>
            <a href="/catalogue" style={{color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500'}}>Catalogue</a>
            <a href="/tarifs" style={{color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500'}}>Tarifs</a>
            <a href="/blog" style={{color: '#374151', fontSize: '13px', textDecoration: 'none', fontWeight: '500'}}>Blog juridique</a>
            <a href="/connexion" style={{color: '#1a4fba', fontSize: '13px', textDecoration: 'none', fontWeight: '600'}}>Mon espace client / Mon inscription</a>
          </nav>
        </div>
      </header>
    </>
  )
}