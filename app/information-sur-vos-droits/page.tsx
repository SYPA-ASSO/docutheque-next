import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MessageCircle, Clock, FileText, Shield, Users, Home, Car, Scale, Heart, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Information sur vos droits · Réponse juridique pédagogique par un juriste sous 48h',
  description: 'Posez votre question juridique en langage courant. Un juriste vous répond par écrit sous 24 à 48h : droit du travail, famille, consommation, voisinage, succession. 47 € à l\'unité, sans abonnement.',
}

const situations = [
  {
    icon: <Users size={20} color="#1a4fba" strokeWidth={1.5} />,
    bg: '#eff6ff',
    label: 'Droit du travail',
    exemples: ['Licenciement, rupture conventionnelle', 'Fin de contrat, abandon de poste', 'Congés cumulés suite à maladie', 'Prud\'hommes', 'Fonction publique : contractuel, maladie, congés'],
  },
  {
    icon: <Heart size={20} color="#be185d" strokeWidth={1.5} />,
    bg: '#fdf2f8',
    label: 'Droit de la famille',
    exemples: ['Divorce, garde d\'enfants', 'Parents séparés, compte joint', 'Violence conjugale', 'Propriété d\'un véhicule'],
  },
  {
    icon: <Home size={20} color="#b45309" strokeWidth={1.5} />,
    bg: '#fffbeb',
    label: 'Droit locatif',
    exemples: ['Litiges bailleur / locataire', 'Dépôt de garantie', 'Expulsion, état des lieux', 'Charges locatives'],
  },
  {
    icon: <Car size={20} color="#16a34a" strokeWidth={1.5} />,
    bg: '#f0fdf4',
    label: 'Droit de la consommation',
    exemples: ['Droit de rétractation', 'Achat véhicule d\'occasion', 'Litige commerçant', 'Litige compagnie aérienne'],
  },
  {
    icon: <Scale size={20} color="#7c3aed" strokeWidth={1.5} />,
    bg: '#f5f3ff',
    label: 'Procédures judiciaires',
    exemples: ['Comment saisir un tribunal', 'Aide juridictionnelle', 'Article 700, exécution provisoire', 'Diffamation en ligne'],
  },
  {
    icon: <AlertTriangle size={20} color="#dc2626" strokeWidth={1.5} />,
    bg: '#fef2f2',
    label: 'Accidents & responsabilité civile',
    exemples: ['Accident de la route', 'Responsabilité civile', 'Dommages corporels', 'Recours assurance'],
  },
  {
    icon: <Shield size={20} color="#0891b2" strokeWidth={1.5} />,
    bg: '#ecfeff',
    label: 'Droit pénal & harcèlement',
    exemples: ['Porter plainte', 'Garde à vue', 'Harcèlement moral ou sexuel', 'Diffamation'],
  },
  {
    icon: <FileText size={20} color="#475569" strokeWidth={1.5} />,
    bg: '#f8fafc',
    label: 'Successions & héritage',
    exemples: ['Ouverture de succession', 'Répartition entre héritiers', 'Dettes successorales', 'Testament'],
  },
  {
    icon: <MessageCircle size={20} color="#ea580c" strokeWidth={1.5} />,
    bg: '#fff7ed',
    label: 'Litiges de voisinage',
    exemples: ['Troubles de voisinage', 'Servitudes', 'Haies et clôtures', 'Nuisances sonores'],
  },
]

const faqItems = [
  {
    q: 'Qu\'est-ce que le service "Information sur vos droits" ?',
    a: "C'est un service de réponse pédagogique par écrit, rédigée par un juriste sous 24 à 48h ouvrées. Vous posez votre question en langage courant — pas besoin de maîtriser le droit — et vous recevez une réponse claire qui vous explique le cadre juridique applicable à votre situation, vos droits et les démarches possibles."
  },
  {
    q: "La réponse constitue-t-elle une consultation juridique ?",
    a: "Non. Conformément à la loi du 31 décembre 1971, la consultation juridique est réservée aux avocats et aux professionnels réglementés. Notre service a une vocation informative et pédagogique : il vous aide à mieux comprendre votre situation et à identifier vos options, sans se substituer à un conseil juridique personnalisé ni à une représentation en justice."
  },
  {
    q: "Quels types de questions puis-je poser ?",
    a: "Vous pouvez poser des questions sur l'ensemble des situations juridiques de la vie courante et professionnelle. À titre d'exemples non exhaustifs : droit du travail (licenciement, rupture conventionnelle, prud'hommes, fonction publique), droit de la famille (divorce, garde d'enfants, succession, violence conjugale), droit locatif, droit de la consommation, procédures judiciaires, responsabilité civile, droit pénal, harcèlement moral ou sexuel. Si votre situation n'est pas listée, posez votre question — nous couvrons un spectre très large du droit du quotidien."
  },
  {
    q: "Dans quel délai vais-je recevoir une réponse ?",
    a: "Nous nous engageons à vous apporter une réponse sous 24 à 48h ouvrées à compter de la réception de votre question et de la confirmation de votre paiement. La réponse vous est transmise par écrit, directement depuis votre espace client."
  },
  {
    q: "Quel est le tarif et comment fonctionne le paiement ?",
    a: "Le service est proposé à 47 € par question, sans abonnement ni engagement. Le paiement est sécurisé, par carte bancaire ou virement. Si vous êtes abonné Optimal, une question est incluse chaque mois, non cumulable, et les questions supplémentaires sont à 9,90 € l'unité."
  },
  {
    q: "Puis-je poser une question de suivi après avoir reçu ma réponse ?",
    a: "Oui. Une question de suivi est traitée comme une nouvelle question et facturée en conséquence, à 47 € à l'unité. Si votre situation génère plusieurs questions, l'abonnement Optimal peut être plus adapté : à partir de 14,90 €/mois, il inclut une question par mois et les suivantes à seulement 9,90 € — soit une économie significative dès la deuxième question mensuelle."
  },
]

export default function InformationSurVosDroits() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Information sur vos droits",
    "description": "Service de réponse pédagogique juridique par écrit, rédigée par un juriste sous 24 à 48h ouvrées. 47 € à l'unité, sans abonnement ni engagement.",
    "url": "https://docutheque.cholez-pagotto.fr/information-sur-vos-droits",
    "provider": {
      "@type": "Organization",
      "name": "Docuthèque — Cabinet Cholez-Pagotto",
      "url": "https://docutheque.cholez-pagotto.fr"
    },
    "offers": {
      "@type": "Offer",
      "price": "47",
      "priceCurrency": "EUR",
      "description": "Réponse pédagogique rédigée par un juriste sous 24 à 48h ouvrées, sans abonnement ni engagement."
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '3rem', alignItems: 'center'}}>
            <div style={{flex: 1}}>
              <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', marginBottom: '16px'}}>
                INFORMATION SUR VOS DROITS
              </span>
              <h1 style={{color: 'white', fontSize: '2rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px 0'}}>
                Vous avez une question sur vos droits ?<br />
                <span style={{color: '#93c5fd'}}>Un juriste vous répond sous 24 à 48h.</span>
              </h1>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '520px', marginBottom: '28px'}}>
                Posez votre question en langage courant. Un juriste vous apporte une réponse pédagogique et documentée, par écrit, sans jargon. 47 € à l'unité, sans abonnement, sans engagement.
              </p>
              <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
                <a href="/connexion" style={{background: 'white', color: '#1a4fba', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', display: 'inline-block'}}>
                  Poser ma question →
                </a>
                <a href="/tarifs" style={{background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '12px 24px', borderRadius: '6px', fontSize: '13px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block'}}>
                  Voir les tarifs
                </a>
              </div>
            </div>
            <div style={{flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {[
                { icon: <MessageCircle size={20} color="#93c5fd" strokeWidth={1.5} />, text: 'Posez votre question en langage courant' },
                { icon: <Clock size={20} color="#93c5fd" strokeWidth={1.5} />, text: 'Réponse par écrit sous 24 à 48h ouvrées' },
                { icon: <FileText size={20} color="#93c5fd" strokeWidth={1.5} />, text: 'Rédigée par un juriste, pas une IA' },
                { icon: <Shield size={20} color="#93c5fd" strokeWidth={1.5} />, text: '47 € à l\'unité · sans abonnement' },
              ].map((item, i) => (
                <div key={i} style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', padding: '14px 16px', display: 'flex', gap: '12px', alignItems: 'center'}}>
                  {item.icon}
                  <span style={{color: 'white', fontSize: '13px', fontWeight: '500'}}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUE C'EST / CE QUE CE N'EST PAS */}
        <section style={{background: 'white', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <div style={{display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
              <div style={{flex: 1}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>LE SERVICE</span>
                <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f2d6e', margin: '12px 0 16px', lineHeight: '1.4'}}>
                  Un juriste qui vous explique le droit, pas qui le pratique à votre place.
                </h2>
                <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '16px'}}>
                  Le service <strong>Information sur vos droits</strong> vous permet d'obtenir une réponse pédagogique et documentée à votre question juridique, rédigée par un juriste sous 24 à 48h ouvrées. Vous comprenez le cadre légal applicable à votre situation, vos droits, et les démarches possibles — en clair, sans jargon.
                </p>
                <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '24px'}}>
                  Ce service s'adresse à toute personne qui souhaite mieux comprendre sa situation avant d'agir : avant d'envoyer un courrier, de signer un document, de saisir un tribunal ou simplement de savoir où elle en est juridiquement.
                </p>
                <div style={{background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                  <p style={{color: '#92400e', fontSize: '12px', lineHeight: '1.7', margin: 0}}>
                    <strong>Important :</strong> les réponses fournies ont une vocation informative et pédagogique. Elles ne constituent pas une consultation juridique au sens de la loi du 31 décembre 1971, réservée aux avocats et professionnels réglementés. Pour toute situation nécessitant une représentation ou un acte juridique formel, nous pouvons vous orienter vers nos avocats partenaires.
                  </p>
                </div>
              </div>
              <div style={{flex: '0 0 340px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.25rem'}}>
                  <p style={{color: '#15803d', fontSize: '12px', fontWeight: '700', marginBottom: '10px'}}>✓ Ce que nous faisons</p>
                  {[
                    'Expliquer le cadre juridique applicable à votre situation',
                    'Vous informer sur vos droits et obligations',
                    'Vous indiquer les démarches possibles',
                    'Vous orienter vers les bons interlocuteurs',
                    'Rédiger une réponse claire, sans jargon',
                  ].map((item, i) => (
                    <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px'}}>
                      <span style={{color: '#16a34a', fontSize: '13px', flexShrink: 0}}>✓</span>
                      <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.25rem'}}>
                  <p style={{color: '#dc2626', fontSize: '12px', fontWeight: '700', marginBottom: '10px'}}>✗ Ce que nous ne faisons pas</p>
                  {[
                    'Délivrer une consultation juridique (loi du 31/12/1971)',
                    'Vous représenter en justice',
                    'Rédiger des actes juridiques en votre nom',
                    'Remplacer un avocat pour les actes formels',
                  ].map((item, i) => (
                    <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '6px'}}>
                      <span style={{color: '#dc2626', fontSize: '13px', flexShrink: 0}}>✗</span>
                      <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LES 3 ÉTAPES */}
        <section style={{background: '#f0f4ff', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Comment ça marche ?</h2>
              <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Simple, rapide, sans jargon.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
              {[
                { n: '1', title: 'Posez votre question', text: 'Décrivez votre situation en langage courant depuis votre espace client. Pas besoin de maîtriser le droit — expliquez simplement ce qui se passe, comme vous l\'expliqueriez à un ami.' },
                { n: '2', title: 'Confirmez votre paiement', text: '47 € par question, sans abonnement ni engagement. Paiement sécurisé par carte bancaire ou virement. Abonné Optimal ? Votre première question mensuelle est incluse, les suivantes à 9,90 €.' },
                { n: '3', title: 'Recevez votre réponse sous 24 à 48h', text: 'Un juriste rédige votre réponse personnellement et vous la transmet par écrit depuis votre espace client sous 24 à 48h ouvrées. Aucune IA, aucune réponse automatique.' },
              ].map((s) => (
                <div key={s.n} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                  <div style={{width: '36px', height: '36px', background: '#0f2d6e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '700', marginBottom: '14px'}}>{s.n}</div>
                  <h3 style={{fontWeight: '700', color: '#0f2d6e', fontSize: '0.95rem', marginBottom: '8px'}}>{s.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0}}>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SITUATIONS COUVERTES */}
        <section style={{background: 'white', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Quelles situations sont couvertes ?</h2>
              <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Les domaines et sujets les plus fréquemment traités — cette liste n'est pas exhaustive.</p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
              {situations.map((sit) => (
                <div key={sit.label} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
                    <div style={{width: '36px', height: '36px', background: sit.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                      {sit.icon}
                    </div>
                    <strong style={{color: '#0f2d6e', fontSize: '13px'}}>{sit.label}</strong>
                  </div>
                  <p style={{color: '#9ca3af', fontSize: '10px', fontStyle: 'italic', marginBottom: '8px'}}>Exemples fréquents :</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
                    {sit.exemples.map((ex) => (
                      <span key={ex} style={{color: '#6b7280', fontSize: '11px', display: 'flex', gap: '6px', alignItems: 'flex-start'}}>
                        <span style={{color: '#1a4fba', flexShrink: 0}}>›</span>{ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{textAlign: 'center', marginTop: '1.5rem', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '12px 20px', maxWidth: '600px', margin: '1.5rem auto 0'}}>
              <p style={{color: '#1a4fba', fontSize: '12px', margin: 0}}>
                Votre situation n'est pas listée ? Posez votre question — nous couvrons un spectre très large du droit du quotidien, bien au-delà des exemples présentés ici.
              </p>
            </div>
          </div>
        </section>

        {/* TARIF RAPPEL */}
        <section style={{background: '#f0f4ff', padding: '4rem 0', borderBottom: '1px solid #e5e7eb'}}>
          <div style={{maxWidth: '700px', margin: '0 auto', padding: '0 2rem', textAlign: 'center'}}>
            <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 8px'}}>Un tarif simple et transparent</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '2rem'}}>Sans abonnement, sans engagement, sans surprise.</p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1.5rem'}}>
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem'}}>
                <p style={{fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '0.08em', margin: '0 0 8px'}}>SANS ABONNEMENT</p>
                <div style={{fontSize: '2.5rem', fontWeight: '700', color: '#0f2d6e', marginBottom: '4px'}}>47 €</div>
                <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '16px'}}>par question · paiement unique</p>
                <a href="/connexion" style={{display: 'block', width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: '#1a4fba', color: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
                  Poser ma question
                </a>
              </div>
              <div style={{background: '#0f2d6e', border: '2px solid #1a4fba', borderRadius: '14px', padding: '1.75rem'}}>
                <p style={{fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', margin: '0 0 8px'}}>ABONNÉ OPTIMAL</p>
                <div style={{fontSize: '2.5rem', fontWeight: '700', color: 'white', marginBottom: '4px'}}>9,90 €</div>
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginBottom: '4px'}}>par question supplémentaire</p>
                <p style={{color: '#93c5fd', fontSize: '11px', marginBottom: '16px'}}>1 question incluse par mois</p>
                <a href="/tarifs" style={{display: 'block', width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.4)', background: 'transparent', color: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
                  Voir l'abonnement Optimal
                </a>
              </div>
            </div>
            {/* ENCART PUSH ABONNEMENT OPTIMAL */}
            <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '14px 20px', marginBottom: '1.5rem'}}>
              <p style={{color: '#1e3a5f', fontSize: '12px', lineHeight: '1.7', margin: 0}}>
                <strong>Vous posez régulièrement des questions ?</strong> L'abonnement Optimal inclut 1 question par mois et les suivantes à seulement 9,90 € — soit une économie significative dès la deuxième question mensuelle. À partir de 14,90 €/mois.
              </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
              <span style={{fontSize: '16px'}}>🔒</span>
              <span style={{color: '#6b7280', fontSize: '12px'}}>Paiement sécurisé · Carte bancaire et virement acceptés</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{background: '#f8fafc', padding: '4rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
              <h2 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Questions fréquentes</h2>
              <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Tout ce que vous devez savoir sur le service.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '800px', margin: '0 auto'}}>
              {faqItems.map((faq, i) => (
                <details key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                  <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                    <span>{faq.q}</span>
                    <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                  </summary>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}