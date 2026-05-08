export default function Header() {
  return (
    <>
      {/* BANDEAU SUPÉRIEUR — OFFRE DÉDIÉE */}
      <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', padding: '10px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem'}}>
          <div style={{flexShrink: 0}}>
            <span style={{background: 'white', color: '#b8860b', fontSize: '11px', fontWeight: '800', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.08em'}}>
              OFFRE DÉDIÉE
            </span>
          </div>
          <p style={{color: 'white', fontSize: '11px', lineHeight: '1.6', textAlign: 'center', flex: 1, margin: '0 1rem', fontWeight: '500'}}>
            Création d'entreprise, statuts, contrats, conformité RGPD, recouvrement, assistance... On vous accompagne dans chaque phase de la vie de votre projet et de votre entreprise. Juriste et formaliste dédié, conseil en assurances, tout est mis en œuvre pour être à vos côtés.
          </p>
          <div style={{flexShrink: 0}}>
            <button style={{background: 'transparent', color: 'white', border: '1.5px solid white', borderRadius: '6px', padding: '5px 14px', fontSize: '11px', fontWeight: '600', cursor: 'pointer'}}>
              En savoir plus →
            </button>
          </div>
        </div>
      </div>

      {/* HEADER PRINCIPAL */}
      <nav style={{background: 'white', borderBottom: '2px solid #1a4fba', padding: '10px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

          {/* LOGO */}
          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <div style={{width: '32px', height: '32px', background: '#1a4fba', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{color: 'white', fontSize: '16px'}}>⚖</span>
            </div>
            <div>
              <div style={{fontSize: '15px', fontWeight: '600', color: '#0f2d6e'}}>Docuthèque</div>
              <div style={{fontSize: '10px', color: '#6b7280'}}>Vos documents juridiques en ligne</div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div style={{display: 'flex', gap: '24px', alignItems: 'center'}}>
            <a href="/" style={{fontSize: '13px', fontWeight: '600', color: '#1a4fba', borderBottom: '2px solid #1a4fba', paddingBottom: '2px', textDecoration: 'none'}}>Accueil</a>
            <a href="/catalogue" style={{fontSize: '13px', color: '#374151', textDecoration: 'none'}}>Catalogue</a>
            <a href="/tarifs" style={{fontSize: '13px', color: '#374151', textDecoration: 'none'}}>Tarifs</a>
            <a href="/blog" style={{fontSize: '13px', color: '#374151', textDecoration: 'none'}}>Blog juridique</a>
          </div>

          {/* BOUTON DROITE */}
          <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
            <button style={{background: '#1a4fba', color: 'white', border: 'none', borderRadius: '6px', padding: '7px 16px', fontSize: '12px', fontWeight: '500', cursor: 'pointer'}}>
              Mon espace client / Mon inscription
            </button>
          </div>

        </div>
      </nav>
    </>
  )
}