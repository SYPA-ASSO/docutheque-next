import Header from '@/components/Header'
import Footer from '@/components/Footer'
 
export const metadata = {
  title: 'Newsletter juridique gratuite · Actualités et analyses du droit — Docuthèque',
  description: 'Recevez gratuitement les actualités juridiques, analyses de jurisprudence et informations pratiques sur le droit rédigées par un juriste. Newsletter gratuite ou exclusive abonnés.',
}
 
const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Newsletter juridique gratuite — Docuthèque",
  "description": "Newsletter juridique rédigée par un juriste : actualités, jurisprudence, informations pratiques. Version gratuite et version exclusive abonnés Optimal.",
  "url": "https://docutheque.cholez-pagotto.fr/newsletter",
  "publisher": {
    "@type": "Organization",
    "name": "Cabinet Cholez-Pagotto — Docuthèque",
    "url": "https://docutheque.cholez-pagotto.fr"
  }
}
 
export default function Newsletter() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>
 
        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
          <div style={{maxWidth: '760px', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
            <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', marginBottom: '16px', letterSpacing: '0.05em'}}>
              NEWSLETTER JURIDIQUE
            </span>
            <h1 style={{color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 14px', lineHeight: '1.3'}}>
              Le droit expliqué sans jargon,<br />directement dans votre boîte mail.
            </h1>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: '0 0 28px', lineHeight: '1.8', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto'}}>
              Rédigée par un juriste, pas générée par une IA. Actualités, analyses de jurisprudence et informations pratiques pour mieux comprendre vos droits.
            </p>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/connexion" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none'}}>
                S'inscrire gratuitement →
              </a>
              <a href="#premium" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none'}}>
                Voir la version abonnés ↓
              </a>
            </div>
            <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '11px', marginTop: '14px'}}>
              Sans engagement · Désinscription en un clic
            </p>
          </div>
        </section>
 
        <div style={{maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem'}}>
 
          {/* NEWSLETTER GRATUITE */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem'}}>
              <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>GRATUIT</span>
              <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: 0}}>La newsletter juridique gratuite</h2>
            </div>
            <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Accessible à tous, sans abonnement ni carte bancaire. Inscrivez-vous une fois, recevez régulièrement l'essentiel du droit.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '2rem'}}>
              {[
                {
                  titre: 'Actualités juridiques',
                  desc: 'Les évolutions législatives et réglementaires qui vous concernent : nouvelles lois, décrets, ordonnances commentés par un juriste.',
                  icon: '📋'
                },
                {
                  titre: 'Analyses de jurisprudence',
                  desc: 'Les décisions de justice importantes décryptées en langage accessible — ce qu\'elles changent concrètement pour vous.',
                  icon: '⚖️'
                },
                {
                  titre: 'Informations pratiques',
                  desc: 'Fiches pédagogiques, conseils opérationnels et points de vigilance sur le droit du quotidien : travail, consommation, contrats, assurances.',
                  icon: '💡'
                },
                {
                  titre: 'Signalement des ressources',
                  desc: 'Nouveaux documents disponibles en accès libre dans la Docuthèque, guides pratiques et ressources juridiques sélectionnées.',
                  icon: '📂'
                },
              ].map((item, i) => (
                <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                  <p style={{fontSize: '1.3rem', margin: '0 0 8px'}}>{item.icon}</p>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>{item.titre}</p>
                  <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap'}}>
              <div>
                <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Newsletter gratuite — sans engagement</p>
                <p style={{color: '#6b7280', fontSize: '12px', margin: 0}}>Accessible avec un compte gratuit · Désinscription possible à tout moment</p>
              </div>
              <a href="/connexion" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap'}}>
                S'inscrire gratuitement →
              </a>
            </div>
          </section>
 
          {/* SÉPARATEUR */}
          <div style={{display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '3rem'}}>
            <div style={{flex: 1, height: '1px', background: '#e5e7eb'}} />
            <span style={{color: '#9ca3af', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap'}}>ENVIE D'ALLER PLUS LOIN ?</span>
            <div style={{flex: 1, height: '1px', background: '#e5e7eb'}} />
          </div>
 
          {/* NEWSLETTER ABONNÉS */}
          <section id="premium" style={{marginBottom: '3rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem'}}>
              <span style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>ABONNÉS OPTIMAL</span>
              <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: 0}}>La newsletter exclusive abonnés</h2>
            </div>
            <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Réservée aux abonnés Optimal, cette newsletter va plus loin : analyses approfondies, accès prioritaire aux nouveaux documents et contenus exclusifs non disponibles en accès libre.
            </p>
 
            <div style={{background: 'white', border: '2px solid #d4a017', borderRadius: '14px', padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, right: 0, background: 'linear-gradient(135deg, #b8860b, #d4a017)', color: 'white', fontSize: '10px', fontWeight: '700', padding: '4px 14px', borderRadius: '0 0 0 10px', letterSpacing: '0.05em'}}>
                ABONNÉS OPTIMAL
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '1.5rem'}}>
                {[
                  {
                    titre: 'Décryptages approfondis',
                    desc: 'Analyses complètes des textes et décisions qui font l\'actualité du droit, avec mise en perspective pratique et opérationnelle.',
                    icon: '🔍'
                  },
                  {
                    titre: 'Accès prioritaire aux documents',
                    desc: 'Les nouveaux modèles de documents Docuthèque sont signalés aux abonnés en avant-première, avant leur mise en accès libre.',
                    icon: '⭐'
                  },
                  {
                    titre: 'Veille sectorielle ciblée',
                    desc: 'Contenus adaptés à votre profil (employeur, salarié, dirigeant, ESS, collectivité) — moins de bruit, plus de pertinence.',
                    icon: '🎯'
                  },
                  {
                    titre: 'Conseils pratiques exclusifs',
                    desc: 'Points de vigilance, check-lists et fiches opérationnelles réservés aux abonnés pour sécuriser vos démarches au quotidien.',
                    icon: '🛡️'
                  },
                ].map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                    <span style={{fontSize: '1.2rem', flexShrink: 0}}>{item.icon}</span>
                    <div>
                      <p style={{color: '#0f2d6e', fontSize: '12px', fontWeight: '700', margin: '0 0 4px'}}>{item.titre}</p>
                      <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'}}>
                <div>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 2px'}}>Abonnement Optimal — à partir de 12,49 €/mois</p>
                  <p style={{color: '#6b7280', fontSize: '12px', margin: 0}}>Newsletter exclusive incluse · 1 question juriste/mois · Bibliothèque complète</p>
                </div>
                <a href="/tarifs" style={{display: 'inline-block', background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', color: 'white', padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap'}}>
                  Voir l'offre Optimal →
                </a>
              </div>
            </div>
 
            {/* TABLEAU COMPARATIF */}
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '12px'}}>
                <thead>
                  <tr style={{background: '#f8fafc'}}>
                    <th style={{padding: '12px 16px', textAlign: 'left', color: '#6b7280', fontWeight: '600'}}>Contenu</th>
                    <th style={{padding: '12px 16px', textAlign: 'center', color: '#0f2d6e', fontWeight: '700'}}>Gratuit</th>
                    <th style={{padding: '12px 16px', textAlign: 'center', color: '#b8860b', fontWeight: '700'}}>Abonnés Optimal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Actualités juridiques', true, true],
                    ['Analyses de jurisprudence', true, true],
                    ['Informations pratiques', true, true],
                    ['Signalement nouveaux documents', true, true],
                    ['Décryptages approfondis', false, true],
                    ['Accès prioritaire aux documents', false, true],
                    ['Veille sectorielle ciblée', false, true],
                    ['Conseils pratiques exclusifs', false, true],
                  ].map(([label, gratuit, optimal], i) => (
                    <tr key={i} style={{borderTop: '1px solid #f3f4f6', background: i % 2 === 0 ? 'white' : '#fafafa'}}>
                      <td style={{padding: '10px 16px', color: '#374151'}}>{label as string}</td>
                      <td style={{padding: '10px 16px', textAlign: 'center', color: gratuit ? '#16a34a' : '#d1d5db', fontSize: '14px'}}>{gratuit ? '✓' : '✗'}</td>
                      <td style={{padding: '10px 16px', textAlign: 'center', color: optimal ? '#b8860b' : '#d1d5db', fontSize: '14px', fontWeight: optimal ? '700' : '400'}}>{optimal ? '✓' : '✗'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
 
          {/* FAQ */}
          <section style={{marginBottom: '3rem'}}>
            <h2 style={{color: '#0f2d6e', fontSize: '1.2rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Questions fréquentes</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {[
                {
                  q: "À quelle fréquence est envoyée la newsletter ?",
                  r: "La newsletter est envoyée régulièrement en fonction de l'actualité juridique. Nous privilégions la qualité à la quantité : chaque édition apporte une valeur réelle, sans saturer votre boîte mail."
                },
                {
                  q: "L'intelligence artificielle rédige-t-elle la newsletter ?",
                  r: "Non. Chaque édition est rédigée et relue par François CHOLEZ PAGOTTO, juriste et formaliste. Aucune IA n'intervient dans la rédaction — c'est une garantie de fiabilité et de précision juridique."
                },
                {
                  q: "Puis-je me désinscrire à tout moment ?",
                  r: "Oui, à tout moment et en un clic depuis n'importe quelle édition reçue. Aucune condition, aucun délai."
                },
                {
                  q: "Que se passe-t-il si je résilie mon abonnement Optimal ?",
                  r: "Vous continuez à recevoir la newsletter gratuite. Seuls les contenus exclusifs abonnés ne sont plus accessibles."
                },
              ].map((item, i) => (
                <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>{item.q}</p>
                  <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.7', margin: 0}}>{item.r}</p>
                </div>
              ))}
            </div>
          </section>
 
          {/* CTA FINAL */}
          <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center'}}>
            <p style={{color: 'white', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px'}}>Prêt à mieux comprendre vos droits ?</p>
            <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: '0 0 20px', lineHeight: '1.7'}}>
              Rejoignez les abonnés qui reçoivent chaque édition rédigée par un juriste — sans jargon, sans IA.
            </p>
            <div style={{display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href="/connexion" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>
                S'inscrire gratuitement →
              </a>
              <a href="/tarifs" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.5)', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none'}}>
                Voir l'Abonnement Optimal
              </a>
            </div>
          </section>
 
        </div>
      </main>
      <Footer />
    </>
  )
}