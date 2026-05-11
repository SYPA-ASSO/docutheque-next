import { Scale } from 'lucide-react'
 
export default function FooterMinimal() {
  return (
    <>
      {/* FOOTER */}
      <footer style={{background: '#111827', padding: '2rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <div>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px'}}>
              <div style={{width: '24px', height: '24px', background: '#1a4fba', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Scale size={14} color="white" strokeWidth={1.5} />
              </div>
              <span style={{fontSize: '13px', fontWeight: '600', color: 'white'}}>Docuthèque et assistance par le cabinet Cholez-Pagotto</span>
            </div>
            <p style={{color: '#6b7280', fontSize: '11px', maxWidth: '200px', lineHeight: '1.6'}}>Modèles de documents actualisés régulièrement.</p>
            <p style={{color: '#6b7280', fontSize: '11px', marginTop: '6px', lineHeight: '1.6'}}>Un service de FCFBL ACTIVITIES</p>
          </div>
          <div style={{display: 'flex', gap: '2.5rem'}}>
            <div>
              <p style={{fontSize: '11px', fontWeight: '600', color: 'white', marginBottom: '8px'}}>Navigation</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <a href="/catalogue" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Catalogue</a>
                <a href="/information-sur-vos-droits" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Information sur vos droits</a>
                <a href="/tarifs" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Tarifs</a>
                <a href="/blog" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Blog</a>
              </div>
            </div>
            <div>
              <p style={{fontSize: '11px', fontWeight: '600', color: 'white', marginBottom: '8px'}}>Légal</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <a href="/mentions-legales" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Mentions légales</a>
                <a href="/cgu" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>CGU</a>
                <a href="/confidentialite" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Politique de confidentialité</a>
                <a href="/contact" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>Contact</a>
              </div>
            </div>
            <div>
              <p style={{fontSize: '11px', fontWeight: '600', color: 'white', marginBottom: '8px'}}>Le Cabinet</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                <a href="https://cholez-pagotto.fr" target="_blank" rel="noopener noreferrer" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>cholez-pagotto.fr</a>
                <a href="/a-propos" style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none'}}>À propos</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
 
      {/* NOTE RÉGLEMENTAIRE */}
      <div style={{background: '#0f172a', padding: '12px 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <p style={{color: '#4b5563', fontSize: '10px', lineHeight: '1.7', marginBottom: '6px'}}>
            <sup>(1)</sup> Activité de conseil en assurances et réassurances réglementée, exercée sous le contrôle de l'ACPR (Autorité de Contrôle Prudentiel et de Résolution), déclarée à l'ORIAS sous le numéro 26003943. Membre de l'association d'autorégulation ENDYA. Membre du CRFF (Conseil Représentatif des Formalistes de France).
          </p>
          <p style={{color: '#4b5563', fontSize: '10px', textAlign: 'center'}}>
            © 2026 · Cabinet Cholez-Pagotto, service de FCFBL ACTIVITIES · Les modèles fournis ne constituent pas un conseil juridique personnalisé.
          </p>
        </div>
      </div>
    </>
  )
}