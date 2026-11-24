'use client'
import { useState } from 'react'

export default function Tarifs() {
  const [annuel, setAnnuel] = useState(false)

  return (
    <section style={{background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#0f2d6e'}}>Une offre simple et transparente</h2>
          <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '0.25rem'}}>Des modèles juridiques accessibles à tous, et vos droits expliqués sans jargon.</p>
        </div>

        {/* TOGGLE MENSUEL / ANNUEL */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '2rem'}}>
          <div style={{background: '#e5e7eb', borderRadius: '20px', padding: '3px', display: 'flex', gap: '2px'}}>
            <span
              onClick={() => setAnnuel(false)}
              style={{background: !annuel ? '#1a4fba' : 'transparent', color: !annuel ? 'white' : '#6b7280', fontSize: '11px', padding: '4px 14px', borderRadius: '16px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s'}}>
              Mensuel · sans engagement
            </span>
            <span
              onClick={() => setAnnuel(true)}
              style={{background: annuel ? '#1a4fba' : 'transparent', color: annuel ? 'white' : '#6b7280', fontSize: '11px', padding: '4px 14px', borderRadius: '16px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s'}}>
              Annuel
            </span>
          </div>
          <span style={{background: '#dcfce7', color: '#16a34a', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600'}}>3 mois offerts sur l'offre annuelle</span>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', maxWidth: '1100px', margin: '0 auto'}}>

          {/* GRATUIT */}
          <div style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: '#0f2d6e', fontSize: '13px'}}>Compte gratuit</p>
              <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>Inscription gratuite</span>
            </div>
            <p style={{fontSize: '26px', fontWeight: '600', color: '#0f2d6e'}}>0 €</p>
            <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '12px'}}>pour toujours</p>
            <div style={{borderTop: '1px solid #f3f4f6', margin: '0 0 12px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px', flex: 1}}>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Modèles gratuits fournis sur demande, format DOCX</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Documents supplémentaires à l'unité</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Newsletter juridique gratuite</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Bibliothèque complète</span></p>
              <p style={{fontSize: '12px'}}><span style={{color: '#d1d5db', marginRight: '5px'}}>✗</span><span style={{color: '#9ca3af'}}>Question juriste incluse</span></p>
            </div>
            <a href="/connexion" style={{display: 'block', width: '100%', marginTop: '14px', background: 'white', color: '#1a4fba', border: '1.5px solid #1a4fba', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
              Créer mon compte gratuit
            </a>
          </div>

          {/* OPTIMAL PARTICULIER */}
          <div style={{border: '2px solid #1a4fba', borderRadius: '12px', padding: '1.5rem', position: 'relative', background: '#0f2d6e', display: 'flex', flexDirection: 'column'}}>
            <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#1a4fba', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>Recommandé</span>
            <div style={{marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.08em', margin: '0 0 4px'}}>OPTIMAL PARTICULIER</p>
            </div>
            {annuel ? (
              <>
                <p style={{fontSize: '26px', fontWeight: '600', color: 'white'}}>149 €<span style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '400'}}> /an</span></p>
                <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '4px'}}>soit <strong style={{color: '#4ade80'}}>12,42 €/mois</strong>, 3 mois offerts</p>
              </>
            ) : (
              <>
                <p style={{fontSize: '26px', fontWeight: '600', color: 'white'}}>17,90 €<span style={{fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '400'}}> /mois</span></p>
                <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '4px'}}>Sans engagement · résiliation 30 j</p>
              </>
            )}
            <div style={{borderTop: '1px solid rgba(255,255,255,0.15)', margin: '12px 0'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px', flex: 1}}>
              <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.85)'}}><span style={{color: '#93c5fd', marginRight: '5px'}}>✓</span>Bibliothèque complète DOCX</p>
              <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.85)'}}><span style={{color: '#93c5fd', marginRight: '5px'}}>✓</span>Notices et fiches pédagogiques</p>
              <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.85)'}}><span style={{color: '#93c5fd', marginRight: '5px'}}>✓</span>1 question juriste/mois · non cumulable</p>
              <p style={{fontSize: '11px', color: 'rgba(255,255,255,0.55)', paddingLeft: '16px'}}>puis 19 € par question supplémentaire</p>
              <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.85)'}}><span style={{color: '#93c5fd', marginRight: '5px'}}>✓</span>Newsletter abonnés</p>
              <p style={{fontSize: '12px', color: 'rgba(255,255,255,0.85)'}}><span style={{color: '#93c5fd', marginRight: '5px'}}>✓</span>Support prioritaire</p>
            </div>
            <a href="/connexion" style={{display: 'block', width: '100%', marginTop: '14px', background: 'white', color: '#0f2d6e', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
              {annuel ? "S'abonner · offre annuelle" : "S'abonner"}
            </a>
          </div>

          {/* OPTIMAL PRO */}
          <div style={{border: '2px solid #0f2d6e', borderRadius: '12px', padding: '1.5rem', position: 'relative', display: 'flex', flexDirection: 'column'}}>
            <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#b8860b', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>Pro</span>
            <div style={{marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: '#0f2d6e', fontSize: '10px', letterSpacing: '0.08em', margin: '0 0 4px'}}>OPTIMAL PRO</p>
            </div>
            {annuel ? (
              <>
                <p style={{fontSize: '26px', fontWeight: '600', color: '#0f2d6e'}}>249 €<span style={{fontSize: '13px', color: '#6b7280', fontWeight: '400'}}> /an</span></p>
                <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '4px'}}>soit <strong style={{color: '#16a34a'}}>20,75 €/mois</strong>, 3 mois offerts</p>
              </>
            ) : (
              <>
                <p style={{fontSize: '26px', fontWeight: '600', color: '#0f2d6e'}}>27,90 €<span style={{fontSize: '13px', color: '#6b7280', fontWeight: '400'}}> /mois</span></p>
                <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '4px'}}>Sans engagement · résiliation 30 j</p>
              </>
            )}
            <div style={{borderTop: '1px solid #f3f4f6', margin: '12px 0'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px', flex: 1}}>
              <p style={{fontSize: '12px'}}><span style={{color: '#b8860b', marginRight: '5px'}}>✓</span>Bibliothèque complète DOCX</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#b8860b', marginRight: '5px'}}>✓</span>Notices et fiches pédagogiques</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#b8860b', marginRight: '5px'}}>✓</span>2 questions juriste/mois · non cumulables</p>
              <p style={{fontSize: '11px', color: '#9ca3af', paddingLeft: '16px'}}>puis 19 € par question supplémentaire</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#b8860b', marginRight: '5px'}}>✓</span>Alertes légales événementielles</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#b8860b', marginRight: '5px'}}>✓</span>Support prioritaire</p>
            </div>
            <a href="/connexion" style={{display: 'block', width: '100%', marginTop: '14px', background: '#0f2d6e', color: 'white', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
              {annuel ? "S'abonner · offre annuelle" : "S'abonner"}
            </a>
          </div>

          {/* INFORMATION SUR VOS DROITS */}
          <div style={{border: '1px solid #d4af37', borderRadius: '12px', padding: '1.5rem', position: 'relative', display: 'flex', flexDirection: 'column'}}>
            <span style={{position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', background: '#b8860b', color: 'white', fontSize: '10px', padding: '4px 14px', borderRadius: '20px', whiteSpace: 'nowrap', fontWeight: '500'}}>Sans abonnement</span>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
              <p style={{fontWeight: '600', color: '#0f2d6e', lineHeight: '1.3', fontSize: '13px'}}>Information<br />sur vos droits</p>
              <span style={{background: '#fefce8', color: '#b8860b', fontSize: '10px', padding: '2px 8px', borderRadius: '20px'}}>À l'unité</span>
            </div>
            <p style={{fontSize: '26px', fontWeight: '600', color: '#b8860b'}}>47 €</p>
            <p style={{color: '#6b7280', fontSize: '12px'}}>par question · paiement unique</p>
            <p style={{color: '#16a34a', fontSize: '11px', marginTop: '3px', marginBottom: '12px'}}>Réponse sous 24 à 48h ouvrées</p>
            <div style={{borderTop: '1px solid #f3f4f6', margin: '0 0 12px'}}></div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '7px', flex: 1}}>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Question en langage courant</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Réponse rédigée par un juriste</p>
              <p style={{fontSize: '12px'}}><span style={{color: '#16a34a', marginRight: '5px'}}>✓</span>Sans abonnement ni engagement</p>
            </div>
            <div style={{background: '#f0f4ff', borderRadius: '8px', padding: '8px 10px', marginTop: '10px', border: '1px solid #bfdbfe'}}>
              <p style={{fontSize: '10px', color: '#1e3a5f', lineHeight: '1.6'}}>Information juridique au sens de la loi n°71-1130 du 31 décembre 1971. Ne constitue pas une consultation juridique personnalisée.</p>
            </div>
            <a href="/information-sur-vos-droits" style={{display: 'block', width: '100%', marginTop: '14px', background: '#b8860b', color: 'white', border: 'none', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
              Poser ma question
            </a>
          </div>

        </div>

        {/* NOTE */}
        <div style={{maxWidth: '1100px', margin: '1.5rem auto 0', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '0.875rem 1.25rem'}}>
          <p style={{color: '#92400e', fontSize: '11px', lineHeight: '1.7', margin: 0}}>
            <strong>Information importante :</strong> L'abonnement mensuel (Particulier ou Pro) est sans engagement de durée, résiliable avec 30 jours de préavis. L'abonnement annuel bénéficie de 3 mois offerts en contrepartie d'un engagement de 12 mois, renouvelable automatiquement sauf résiliation adressée par écrit au moins 30 jours avant l'échéance. Les questions mensuelles incluses sont non cumulables d'un mois sur l'autre. Questions supplémentaires : 19 € pour les abonnés, 47 € sans abonnement. <a href="/tarifs" style={{color: '#92400e', fontWeight: '600'}}>Voir les tarifs complets →</a>
          </p>
        </div>

      </div>
    </section>
  )
}