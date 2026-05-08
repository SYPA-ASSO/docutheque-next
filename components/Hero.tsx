import { FileText, Scale, UserCheck, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '2rem', alignItems: 'stretch'}}>
        
        {/* COLONNE GAUCHE */}
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', marginBottom: '16px', alignSelf: 'flex-start'}}>
            Un juriste dédié, des documents rédigés et mis à jour régulièrement. Aucune IA.
          </span>
          <h1 style={{color: 'white', fontSize: '2.2rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px 0'}}>
            Vos documents prêts à l'emploi.<br />
            <span style={{color: '#93c5fd'}}>Vos droits expliqués, sans jargon.</span>
          </h1>
          <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '480px', margin: '0 0 24px 0'}}>
            Modèles de documents conformes au droit français, téléchargeables en DOCX, prêts à l'emploi et personnalisables. Et si vous avez une question sur vos droits, un juriste vous répond sous 24 à 48h, en clair, sans jargon.
          </p>
          <div style={{display: 'flex', gap: '12px', marginBottom: '20px'}}>
            <button style={{background: 'white', color: '#1a4fba', border: 'none', padding: '11px 22px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>
              Trouver mon document →
            </button>
            <button style={{background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '11px 22px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer'}}>
              Voir les tarifs
            </button>
          </div>
          <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', rowGap: '8px'}}>
            {[
              'Documents DOCX personnalisables',
              'Bibliothèque alimentée très régulièrement',
              'Mises à jour régulières',
              'Un juriste dédié, votre interlocuteur unique',
              'Une réponse rédigée par un juriste, pas générée par une IA',
              'Accompagnement possible vers un avocat partenaire',
            ].map((badge) => (
              <span key={badge} style={{color: 'rgba(255,255,255,0.75)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px'}}>
                <span style={{color: '#4ade80', fontWeight: '700'}}>✓</span> {badge}
              </span>
            ))}
          </div>
        </div>

        {/* COLONNE DROITE — STATS */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '14px', minWidth: '400px', maxWidth: '400px', alignSelf: 'stretch'}}>
          {[
            { icon: <FileText size={32} color="#93c5fd" strokeWidth={1.5} />, text: 'Des milliers de situations juridiques couvertes' },
            { icon: <Scale size={32} color="#93c5fd" strokeWidth={1.5} />, text: 'À jour des jurisprudences' },
            { icon: <UserCheck size={32} color="#93c5fd" strokeWidth={1.5} />, text: '100% humain, 0% IA' },
            { icon: <Clock size={32} color="#93c5fd" strokeWidth={1.5} />, text: 'Réponse sous 24 à 48h' },
          ].map((stat, i) => (
            <div key={i} style={{background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '12px'}}>
              {stat.icon}
              <div style={{color: 'white', fontWeight: '600', fontSize: '12px', lineHeight: '1.5'}}>{stat.text}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}