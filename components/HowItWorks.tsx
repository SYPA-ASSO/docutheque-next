import { ClipboardList, GraduationCap, Handshake } from 'lucide-react'

export default function HowItWorks() {
  return (
    <>
      {/* SECTION 1 — DOCUMENTS */}
      <section style={{background: '#f0f4ff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '4rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e'}}>Pour les documents, comment ça marche ?</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Simple, rapide, sans jargon.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
            {[
              { n: '1', title: 'Choisissez votre profil', text: "Employeur, salarié, consommateur, dirigeant, entrepreneur, bénévole ou DPO, quel que soit votre profil, chacun dispose de ses propres modèles de documents, adaptés à sa situation." },
              { n: '2', title: 'Sélectionnez votre document', text: "Une bibliothèque de modèles en constante expansion, classés par catégorie et cas d'usage, couvrant l'ensemble des situations juridiques du quotidien, tant pour particuliers que professionnels ou acteurs associatifs." },
              { n: '3', title: 'Téléchargez et personnalisez', text: "Format DOCX universel, compatible Word et toutes suites bureautiques. Chaque modèle est fourni au format DOCX, entièrement modifiable et personnalisable à volonté, sans logiciel spécifique, sans abonnement supplémentaire, sans restriction. Le document final vous appartient intégralement." },
            ].map((s) => (
              <div key={s.n} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{width: '28px', height: '28px', background: '#1a4fba', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>{s.n}</div>
                <div>
                  <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>{s.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 - INFORMATION SUR VOS DROITS */}
      <section style={{background: '#f0f4ff', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
            <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e'}}>Le droit et vos droits expliqués, par un juriste dédié</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Une question sur vos droits ? Le cabinet vous aide à mieux les comprendre. Obtenez des explications sur le droit applicable à votre situation, en clair, sans jargon, sous 24 à 48h.</p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
            {[
              { n: '1', title: 'Vous avez une question sur vos droits', text: "Relations difficiles avec votre employeur ou votre bailleur, licenciement, litige consommateur, clause contractuelle, obligation légale, droit du voisinage, relations entre professionnels... Posez votre question en langage courant, pas besoin de maîtriser le droit." },
              { n: '2', title: 'Choisissez votre formule', text: "Abonné Optimal ? Une question est incluse chaque mois, non cumulable, les suivantes à 19 €. Sans abonnement ? Accédez directement à l'offre unitaire Information sur vos droits à 47 €, sans abonnement ni engagement." },
              { n: '3', title: 'Recevez une réponse claire sous 24 à 48h', text: "Un juriste vous apporte une réponse pédagogique par écrit, sous 24 à 48h. Cette réponse constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée." },
            ].map((s) => (
              <div key={s.n} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{width: '28px', height: '28px', background: '#0f2d6e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>{s.n}</div>
                <div>
                  <h3 style={{fontWeight: '600', color: '#0f2d6e', fontSize: '0.875rem'}}>{s.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '0.75rem', marginTop: '4px', lineHeight: '1.6'}}>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.5rem', marginTop: '2rem'}}>
            <p style={{color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', margin: 0}}>
              <strong style={{color: '#6b7280'}}>Information importante :</strong> les réponses fournies sont à vocation informative et pédagogique. Elles ne constituent pas une consultation juridique au sens de la loi n°71-1130 du 31 décembre 1971. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - INFORMATION JURIDIQUE */}
      <section style={{background: 'white', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-start'}}>
            <div>
              <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>INFORMATION JURIDIQUE</span>
              <h2 style={{fontSize: '1.3rem', fontWeight: '700', color: '#0f2d6e', margin: '12px 0 16px 0', lineHeight: '1.4'}}>L'information juridique, qu'est-ce que c'est ?</h2>
              <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px'}}>
                L'information juridique désigne toute forme d'aide apportée à une personne pour mieux comprendre ses droits, s'informer sur le cadre légal applicable à sa situation et accéder aux documents dont elle a besoin pour agir.
              </p>
              <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px'}}>
                Notre offre s'inscrit dans une démarche d'information et de mise à disposition documentaire, au sens de la loi n°71-1130 du 31 décembre 1971. Nous ne délivrons pas de consultation juridique personnalisée, réservée aux professionnels du droit habilités par la loi, à l'exception de l'activité réglementée que nous menons sur le droit assurantiel<sup>(1)</sup>. Nous disposons d'un réseau d'avocats partenaires vers lesquels nous pouvons vous orienter, sans obligation de votre part, le choix d'un professionnel vous étant libre. L'avocat fixe librement ses honoraires, qui lui sont réglés directement, et le cabinet ne perçoit aucune commission. Nous mettons à votre disposition des ressources pédagogiques et des modèles de documents pour vous permettre de mieux appréhender votre situation et d'agir avec les bons outils.
              </p>
              <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8'}}>
                Deux formes d'accompagnement complémentaires : une bibliothèque de modèles de documents téléchargeables et personnalisables, et un service de réponse pédagogique pour éclairer vos droits avant d'agir.
              </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                  <ClipboardList size={22} color="#1a4fba" strokeWidth={1.5} />
                  <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Prévenir plutôt que guérir</strong>
                </div>
                <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
                  Un document juridique bien rédigé en amont est souvent la meilleure façon d'éviter un litige. Nos modèles vous permettent d'anticiper les situations à risque et de vous protéger efficacement.
                </p>
              </div>
              <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                  <GraduationCap size={22} color="#1a4fba" strokeWidth={1.5} />
                  <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Comprendre pour mieux agir</strong>
                </div>
                <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
                  Avant d'envoyer un courrier, de signer un contrat ou d'engager une procédure, il est essentiel de comprendre ce que vous faites et pourquoi. Notre service d'information vous apporte cette clarté.
                </p>
              </div>
              <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                  <Handshake size={22} color="#1a4fba" strokeWidth={1.5} />
                  <strong style={{color: '#0f2d6e', fontSize: '13px'}}>Un relais vers les avocats partenaires</strong>
                </div>
                <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
                  Lorsque votre situation nécessite une représentation ou un acte juridique formel, nous pouvons vous orienter vers des avocats partenaires compétents, sans engagement de votre part.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}