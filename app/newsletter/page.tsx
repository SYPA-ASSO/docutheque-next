import Header from '@/components/Header'
import Footer from '@/components/FooterMinimal'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: "S'inscrire à la newsletter · Docuthèque · Cabinet Cholez-Pagotto",
  description: 'Restez informé : actualités juridiques, offres sur les documents, services complémentaires et partenaires sélectionnés. Newsletter gratuite ou exclusive abonnés Optimal.',
}

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "S'inscrire à la newsletter — Docuthèque",
  "description": "Newsletter Docuthèque : informations juridiques pratiques, offres sur les documents, services complémentaires et sélections partenaires. Version gratuite et version exclusive abonnés Optimal.",
  "url": "https://cholez-pagotto.fr/newsletter",
  "publisher": {
    "@type": "Organization",
    "name": "Cabinet Cholez-Pagotto — Docuthèque",
    "url": "https://cholez-pagotto.fr"
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
              S'INSCRIRE À LA NEWSLETTER
            </span>
            <h1 style={{color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 14px', lineHeight: '1.3'}}>
              Restez informé, bénéficiez d'offres exclusives<br />et ne manquez aucune nouveauté.
            </h1>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '1rem', margin: '0 0 28px', lineHeight: '1.8', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto'}}>
              Informations juridiques pratiques, nouveaux documents disponibles, offres sur nos services, sélections partenaires et contenus exclusifs abonnés : tout ce qui compte, directement dans votre boîte mail.
            </p>
            <NewsletterForm variant="hero" />
            <div style={{marginTop: '16px'}}>
              <a href="#premium" style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', textDecoration: 'none'}}>
                Voir la version abonnés Optimal ↓
              </a>
            </div>
          </div>
        </section>

        <div style={{maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem'}}>

          {/* NEWSLETTER GRATUITE */}
          <section style={{marginBottom: '3rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem'}}>
              <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>GRATUIT</span>
              <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: 0}}>La newsletter</h2>
            </div>
            <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.8', marginBottom: '1.5rem'}}>
              Accessible à tous. Une newsletter pensée pour être utile : informations juridiques pratiques, alertes sur les nouveaux documents, offres sur nos services et sélections partenaires.
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '2rem'}}>
              {[
                {
                  titre: 'Informations juridiques pratiques',
                  desc: "Actualités législatives, analyses de jurisprudence et informations sur le droit du quotidien, rédigées par un juriste, sans jargon.",
                  icon: '⚖️'
                },
                {
                  titre: 'Nouveaux documents disponibles',
                  desc: "Soyez alerté dès qu'un nouveau modèle de document est ajouté à la Docuthèque : contrats, mises en demeure, RGPD, statuts et plus.",
                  icon: '📂'
                },
                {
                  titre: 'Offres et promotions',
                  desc: "Offres ponctuelles sur les documents à l'unité, sur les abonnements, et réductions négociées auprès de services complémentaires.",
                  icon: '🎁'
                },
                {
                  titre: 'Sélections partenaires',
                  desc: "Services, outils et ressources soigneusement sélectionnés pour accompagner vos démarches administratives, juridiques et entrepreneuriales.",
                  icon: '🤝'
                },
              ].map((item, i) => (
                <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                  <p style={{fontSize: '1.3rem', margin: '0 0 8px'}}>{item.icon}</p>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>{item.titre}</p>
                  <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6', margin: 0}}>{item.desc}</p>
                </div>
              ))}
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
              Réservée aux abonnés Optimal, cette newsletter va plus loin : analyses approfondies, accès prioritaire aux nouveaux documents, offres tarifaires préférentielles et contenus non disponibles en accès libre.
            </p>

            <div style={{background: 'white', border: '2px solid #d4a017', borderRadius: '14px', padding: '2rem', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: 0, right: 0, background: 'linear-gradient(135deg, #b8860b, #d4a017)', color: 'white', fontSize: '10px', fontWeight: '700', padding: '4px 14px', borderRadius: '0 0 0 10px', letterSpacing: '0.05em'}}>
                ABONNÉS OPTIMAL
              </div>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '1.5rem'}}>
                {[
                  {
                    titre: 'Décryptages approfondis',
                    desc: "Analyses complètes des textes et décisions qui font l'actualité du droit, avec mise en perspective pratique et opérationnelle.",
                    icon: '🔍'
                  },
                  {
                    titre: 'Accès prioritaire aux documents',
                    desc: "Les nouveaux modèles Docuthèque sont signalés aux abonnés en avant-première, avant leur mise en accès libre.",
                    icon: '⭐'
                  },
                  {
                    titre: 'Offres tarifaires préférentielles',
                    desc: "Tarifs négociés en exclusivité abonnés sur des services complémentaires et partenaires sélectionnés par le cabinet.",
                    icon: '💎'
                  },
                  {
                    titre: 'Contenus exclusifs',
                    desc: "Fiches pratiques, check-lists et guides opérationnels réservés aux abonnés, non disponibles en accès libre.",
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
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 2px'}}>Abonnement Optimal à partir de 17,90 €/mois</p>
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
                    ['Informations juridiques pratiques', true, true],
                    ['Nouveaux documents disponibles', true, true],
                    ['Offres et promotions', true, true],
                    ['Sélections partenaires', true, true],
                    ['Décryptages approfondis', false, true],
                    ['Accès prioritaire aux documents', false, true],
                    ['Offres tarifaires préférentielles', false, true],
                    ['Contenus exclusifs', false, true],
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
                  r: "La newsletter est envoyée en fonction de l'actualité et des nouveautés disponibles. Nous privilégions la pertinence sur la fréquence : chaque édition apporte une valeur concrète, sans saturer votre boîte mail."
                },
                {
                  q: "Quel type de contenu puis-je recevoir en dehors des informations juridiques ?",
                  r: "La newsletter peut inclure des offres ponctuelles sur les documents ou les abonnements, des promotions négociées auprès de services partenaires sélectionnés (comptabilité, domiciliation, assurances, etc.), ainsi que des ressources pratiques utiles à vos démarches."
                },
                {
                  q: "Les informations juridiques sont-elles rédigées par une IA ?",
                  r: "Non. Les contenus juridiques sont rédigés et relus par François CHOLEZ, juriste et formaliste. Aucune IA n'intervient dans leur rédaction."
                },
                {
                  q: "Puis-je me désinscrire à tout moment ?",
                  r: "Oui, à tout moment et en un clic depuis n'importe quelle édition reçue. La désinscription est immédiate, sans justification requise et sans condition."
                },
                {
                  q: "Que se passe-t-il pour la newsletter si je résilie mon abonnement Optimal ?",
                  r: "L'inscription à la newsletter est indépendante de votre abonnement Optimal et repose sur un consentement distinct. En cas de résiliation de l'abonnement Optimal, vous restez inscrit à la newsletter uniquement si vous y avez consenti séparément. Vous pouvez vous désinscrire à tout moment, indépendamment de votre abonnement."
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
            <p style={{color: 'white', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px'}}>Rejoignez la communauté Docuthèque</p>
            <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: '0 0 20px', lineHeight: '1.7'}}>
              Informations pratiques, offres exclusives et nouveautés directement dans votre boîte mail, sans jargon et sans IA.
            </p>
            <NewsletterForm variant="cta" />
            <div style={{marginTop: '16px'}}>
              <a href="/tarifs" style={{color: 'rgba(255,255,255,0.5)', fontSize: '12px', textDecoration: 'none'}}>
                Voir l'Abonnement Optimal →
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}