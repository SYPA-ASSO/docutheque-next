'use client'

import { useState } from 'react'

export default function Tarifs() {
  const [annuel, setAnnuel] = useState(true)

  return (
    <main style={{background: '#f8fafc', minHeight: '100vh', padding: '4rem 0'}}>
      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>

        {/* TITRE */}
        <div style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h1 style={{fontSize: '2rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Nos tarifs</h1>
          <p style={{color: '#6b7280', fontSize: '0.95rem', marginTop: '8px'}}>Des formules simples, transparentes, sans mauvaise surprise.</p>
        </div>

        {/* TOGGLE */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '2.5rem'}}>
          <span style={{fontSize: '13px', fontWeight: annuel ? '400' : '600', color: annuel ? '#6b7280' : '#0f2d6e'}}>Mensuel</span>
          <div
            onClick={() => setAnnuel(!annuel)}
            style={{
              width: '48px', height: '26px', borderRadius: '13px',
              background: '#1a4fba', cursor: 'pointer', position: 'relative',
              transition: 'background 0.2s'
            }}
          >
            <div style={{
              position: 'absolute', top: '3px',
              left: annuel ? '25px' : '3px',
              width: '20px', height: '20px', borderRadius: '50%',
              background: 'white', transition: 'left 0.2s'
            }} />
          </div>
          <span style={{fontSize: '13px', fontWeight: annuel ? '600' : '400', color: annuel ? '#0f2d6e' : '#6b7280'}}>
            Annuel <span style={{background: '#dcfce7', color: '#16a34a', fontSize: '11px', fontWeight: '600', padding: '2px 7px', borderRadius: '10px', marginLeft: '4px'}}>2 mois offerts</span>
          </span>
        </div>

        {/* CARTES */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', alignItems: 'flex-start'}}>

          {/* GRATUIT */}
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '0.08em', margin: 0}}>ACCÈS GRATUIT</p>
            <div style={{margin: '12px 0 4px'}}>
              <span style={{fontSize: '2.2rem', fontWeight: '700', color: '#0f2d6e'}}>0 €</span>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '20px'}}>Sans inscription obligatoire</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px'}}>
              {[
                'Accès à une sélection de modèles de documents en DOCX',
                "Autres documents disponibles à l'unité (prix variable selon le document)",
                'Newsletter juridique gratuite',
              ].map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                  <span style={{color: '#16a34a', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                  <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                </div>
              ))}
            </div>
            <button style={{width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white', color: '#0f2d6e', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>
              Accéder gratuitement
            </button>
          </div>

          {/* ABONNEMENT OPTIMAL */}
          <div style={{background: '#0f2d6e', border: '2px solid #1a4fba', borderRadius: '14px', padding: '1.75rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: '14px', right: '14px', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px', letterSpacing: '0.05em'}}>
              RECOMMANDÉ
            </div>
            <p style={{fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', margin: 0}}>ABONNEMENT OPTIMAL</p>
            <div style={{margin: '12px 0 4px'}}>
              <span style={{fontSize: '2.2rem', fontWeight: '700', color: 'white'}}>
                {annuel ? '12,49 €' : '14,90 €'}
              </span>
              <span style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '4px'}}>/mois</span>
            </div>
            <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginBottom: '20px'}}>
              {annuel ? 'Soit 147,97 €/an — 2 mois offerts' : 'Engagement 12 mois — 178,80 €/an'}
            </p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px'}}>
              {[
                "Accès à toute la bibliothèque de documents en DOCX durant la période d'abonnement",
                'Notices juridiques détaillées et fiches pédagogiques',
                '1 question incluse · réponse sous 24 à 48h',
                '9,90 € par question supplémentaire',
                'Newsletter spéciale abonnés',
                'Support prioritaire par mail',
              ].map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                  <span style={{color: '#93c5fd', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                  <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                </div>
              ))}
            </div>
            <button style={{width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: 'white', color: '#0f2d6e', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>
              S'abonner
            </button>
          </div>

          {/* INFORMATION SUR VOS DROITS */}
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '0.08em', margin: 0}}>INFORMATION SUR VOS DROITS</p>
            <div style={{margin: '12px 0 4px'}}>
              <span style={{fontSize: '2.2rem', fontWeight: '700', color: '#0f2d6e'}}>47 €</span>
            </div>
            <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '20px'}}>À l'unité · sans abonnement · sans engagement</p>
            <div style={{display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '20px'}}>
              {[
                'Vous posez votre question en langage courant',
                'Un juriste vous apporte une réponse pédagogique par écrit sous 24 à 48h',
                'Réponse sur le droit et vos droits applicables à votre situation',
              ].map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                  <span style={{color: '#16a34a', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                  <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', padding: '10px 12px', marginBottom: '20px'}}>
              <p style={{color: '#92400e', fontSize: '11px', lineHeight: '1.6', margin: 0}}>
                Cette réponse a vocation à vous informer et à vous orienter. Elle ne constitue pas une consultation juridique au sens de la loi du 31 décembre 1971, réservée aux avocats.
              </p>
            </div>
            <button style={{width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: '#1a4fba', color: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>
              Poser ma question
            </button>
          </div>

        </div>

        {/* RÉASSURANCE */}
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '2rem'}}>
          <span style={{fontSize: '16px'}}>🔒</span>
          <span style={{color: '#6b7280', fontSize: '12px'}}>Paiement sécurisé</span>
        </div>

        {/* NOTE BAS DE PAGE */}
        <div style={{borderTop: '1px solid #e5e7eb', marginTop: '2.5rem', paddingTop: '1.5rem'}}>
          <p style={{color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
            L'abonnement Optimal est souscrit pour une durée minimale de 12 mois. À l'issue de cette période, il se renouvelle automatiquement sauf résiliation adressée par écrit au moins 30 jours avant l'échéance. Le tarif mensuel affiché en mode annuel est calculé sur la base du paiement annuel de 147,97 €.
          </p>
        </div>

      </div>
    </main>
  )
}