'use client'

import { useState } from 'react'
import { Building2, PenLine, Monitor, Shield, FileText, Lock, RefreshCw } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TarifsClient() {
  const [annuel, setAnnuel] = useState(true)

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tarifs Docuthèque",
    "description": "Offres et tarifs de la plateforme Docuthèque : modèles de documents juridiques, abonnement Optimal, information sur vos droits, accompagnement création d'entreprise.",
    "url": "https://docutheque.fr/tarifs",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "Offer", "name": "Accès Gratuit", "price": "0", "priceCurrency": "EUR", "description": "Accès gratuit à tous les documents disponibles en accès libre, en format DOCX." },
        { "@type": "Offer", "name": "Abonnement Optimal", "price": "14.90", "priceCurrency": "EUR", "description": "Accès à toute la bibliothèque de documents juridiques en DOCX, notices explicatives, fiches pédagogiques, 1 question juriste incluse par mois non cumulable sous 24 à 48h, support prioritaire." },
        { "@type": "Offer", "name": "Information sur vos droits", "price": "47", "priceCurrency": "EUR", "description": "Réponse pédagogique rédigée par un juriste sous 24 à 48h ouvrées, sans abonnement ni engagement." },
        { "@type": "Offer", "name": "Accompagnement Créateurs", "price": "0", "priceCurrency": "EUR", "description": "Création d'entreprise offerte (hors frais de greffe et JAL). Statuts, formalités, accompagnement juriste formaliste inclus. Sur devis personnalisé." }
      ]
    }
  }

  const faqItems = [
    { q: "Puis-je résilier mon abonnement à tout moment ?", a: "L'abonnement Optimal est souscrit pour une durée minimale de 12 mois. La résiliation est possible à tout moment, mais prend effet à l'échéance annuelle, sous réserve d'en faire la demande par écrit au moins 30 jours avant cette date." },
    { q: "Quels moyens de paiement acceptez-vous ?", a: "Nous acceptons le paiement par carte bancaire et par virement bancaire. Le paiement est sécurisé. Aucune information bancaire n'est conservée sur nos serveurs." },
    { q: "L'abonnement se renouvelle-t-il automatiquement ?", a: "Oui. À l'issue de la période initiale de 12 mois, l'abonnement se renouvelle automatiquement pour une nouvelle année, sauf résiliation adressée par écrit au moins 30 jours avant l'échéance." },
    { q: 'La réponse "Information sur vos droits" est-elle garantie sous 48h ?', a: "Oui. Nous nous engageons à vous apporter une réponse rédigée par un juriste dans un délai de 24 à 48h ouvrées suivant la réception de votre question et la confirmation de votre paiement." },
    { q: "Puis-je cumuler les questions incluses dans mon abonnement Optimal ?", a: "Non. La question mensuelle incluse dans l'abonnement Optimal n'est pas cumulable d'un mois sur l'autre. Si vous avez besoin de poser des questions supplémentaires dans le même mois, elles sont disponibles à 9,90 € l'unité. Sans abonnement, chaque question est à 47 € — si vous posez régulièrement des questions, l'abonnement Optimal devient plus économique dès la deuxième question mensuelle." },
  ]

  const createurItems = [
    { icon: <Building2 size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Création de société (SASU, SAS, SARL, EURL), micro-entreprise, entreprise individuelle" },
    { icon: <PenLine size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Rédaction des statuts et actes constitutifs" },
    { icon: <Monitor size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Formalités d'immatriculation via le guichet unique INPI" },
    { icon: <Shield size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Accompagnement RGPD et conformité" },
    { icon: <FileText size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Contrats et documents métier à tarifs préférentiels" },
    { icon: <Lock size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Conseil en assurances professionnelles (RC Pro, multirisques)" },
    { icon: <RefreshCw size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Modifications statutaires, transfert de siège, dissolution" },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh', padding: '4rem 0'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>

          {/* TITRE + INTRO */}
          <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem'}}>
            <h1 style={{fontSize: '2rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Nos tarifs</h1>
            <p style={{color: '#6b7280', fontSize: '0.95rem', marginTop: '8px', marginBottom: '16px'}}>Des formules simples, transparentes, sans mauvaise surprise.</p>
            <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8'}}>
              Que vous ayez besoin d'un document ponctuel, d'un accès complet à notre bibliothèque juridique ou d'un accompagnement personnalisé pour créer votre entreprise, Docuthèque propose une offre adaptée à chaque situation. Tous nos documents sont rédigés par un juriste, jamais générés par une IA, et mis à jour dès que la législation évolue.
            </p>
          </div>

          {/* TOGGLE */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '2.5rem'}}>
            <span style={{fontSize: '13px', fontWeight: annuel ? '400' : '600', color: annuel ? '#6b7280' : '#0f2d6e'}}>Mensuel</span>
            <div onClick={() => setAnnuel(!annuel)} style={{width: '48px', height: '26px', borderRadius: '13px', background: '#1a4fba', cursor: 'pointer', position: 'relative', transition: 'background 0.2s'}}>
              <div style={{position: 'absolute', top: '3px', left: annuel ? '25px' : '3px', width: '20px', height: '20px', borderRadius: '50%', background: 'white', transition: 'left 0.2s'}} />
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
              <div style={{margin: '12px 0 4px'}}><span style={{fontSize: '2.2rem', fontWeight: '700', color: '#0f2d6e'}}>0 €</span></div>
              <p style={{color: '#6b7280', fontSize: '12px', marginBottom: '20px'}}>Sans inscription obligatoire</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px'}}>
                {[
                  'Accès gratuit à tous les documents disponibles en accès libre, en format DOCX',
                  "Documents supplémentaires disponibles à l'unité (prix variable selon le document)",
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
              <div style={{position: 'absolute', top: '14px', right: '14px', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '10px', letterSpacing: '0.05em'}}>RECOMMANDÉ</div>
              <p style={{fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', margin: 0}}>ABONNEMENT OPTIMAL</p>
              <div style={{margin: '12px 0 4px'}}>
                <span style={{fontSize: '2.2rem', fontWeight: '700', color: 'white'}}>{annuel ? '12,49 €' : '14,90 €'}</span>
                <span style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '4px'}}>/mois</span>
              </div>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginBottom: '20px'}}>
                {annuel ? '147,97 €/an, 2 mois offerts' : 'Engagement 12 mois, 178,80 €/an'}
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px'}}>
                {[
                  "Accès à toute la bibliothèque de documents en DOCX durant la période d'abonnement",
                  'Notices explicatives des documents et fiches pédagogiques de vulgarisation juridique',
                  '1 question incluse par mois · réponse sous 24 à 48h · non cumulable',
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
              <button style={{width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: 'white', color: '#0f2d6e', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>S'abonner</button>
            </div>

            {/* INFORMATION SUR VOS DROITS */}
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', display: 'flex', flexDirection: 'column'}}>
              <p style={{fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '0.08em', margin: 0}}>INFORMATION SUR VOS DROITS</p>
              <div style={{margin: '12px 0 4px'}}><span style={{fontSize: '2.2rem', fontWeight: '700', color: '#0f2d6e'}}>47 €</span></div>
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
              <div style={{background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', padding: '10px 12px', marginBottom: '12px'}}>
                <p style={{color: '#92400e', fontSize: '11px', lineHeight: '1.6', margin: 0}}>
                  Cette réponse a vocation à vous informer et à vous orienter. Elle ne constitue pas une consultation juridique au sens de la loi du 31 décembre 1971, réservée aux avocats.
                </p>
              </div>
              <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '10px 12px', marginBottom: '20px'}}>
                <p style={{color: '#1e3a5f', fontSize: '11px', lineHeight: '1.6', margin: 0}}>
                  Vous posez régulièrement des questions ? L'abonnement Optimal est plus économique dès la deuxième question mensuelle.
                </p>
              </div>
              <button style={{width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: '#1a4fba', color: 'white', fontSize: '13px', fontWeight: '600', cursor: 'pointer'}}>Poser ma question</button>
            </div>

          </div>

          {/* RÉASSURANCE */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '2rem'}}>
            <span style={{fontSize: '16px'}}>🔒</span>
            <span style={{color: '#6b7280', fontSize: '12px'}}>Paiement sécurisé · Carte bancaire et virement bancaire acceptés</span>
          </div>

          {/* SECTION ACCOMPAGNEMENT CRÉATEURS */}
          <div style={{marginTop: '4rem', background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
            <div style={{flex: '0 0 55%'}}>
              <span style={{background: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', letterSpacing: '0.05em'}}>ACCOMPAGNEMENT CRÉATEURS</span>
              <h2 style={{color: 'white', fontSize: '1.5rem', fontWeight: '700', margin: '14px 0 10px', lineHeight: '1.4'}}>Créez votre entreprise accompagné d'un juriste formaliste dédié.</h2>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '16px'}}>De l'idée à l'immatriculation, et bien au-delà.</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', lineHeight: '1.8', marginBottom: '20px'}}>
                La création de votre structure est offerte. Vous ne payez que les frais imposés par les organismes tiers : greffe et publication au journal d'annonces légales. Statuts, formalités et accompagnement juriste sont inclus. En complément, nos packs de documents métier (contrats, CGV, RGPD, documents RH...) sont disponibles à tarifs préférentiels pour vous équiper dès le lancement de votre activité. Sur devis personnalisé, sans engagement.
              </p>
              <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 16px', marginBottom: '24px'}}>
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.7', margin: 0}}>
                  Frais indépendants de nos services, réglés directement auprès des organismes concernés : greffe (50 à 250 € selon la forme juridique) et journal d'annonces légales (150 à 200 €).
                </p>
              </div>
              <button style={{padding: '12px 28px', borderRadius: '8px', border: '2px solid white', background: 'white', color: '#0f2d6e', fontSize: '13px', fontWeight: '700', cursor: 'pointer'}}>Nous contacter</button>
            </div>
            <div style={{flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {createurItems.map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                  <div style={{flexShrink: 0, marginTop: '1px'}}>{item.icon}</div>
                  <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.5'}}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ TARIFS */}
          <div style={{marginTop: '4rem'}}>
            <h2 style={{fontSize: '1.4rem', fontWeight: '700', color: '#0f2d6e', textAlign: 'center', marginBottom: '1.5rem'}}>Questions fréquentes sur nos tarifs</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '760px', margin: '0 auto'}}>
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

          {/* NOTE BAS DE PAGE */}
          <div style={{borderTop: '1px solid #e5e7eb', marginTop: '3rem', paddingTop: '1.5rem'}}>
            <p style={{color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
              L'abonnement Optimal est souscrit pour une durée minimale de 12 mois. À l'issue de cette période, il se renouvelle automatiquement sauf résiliation adressée par écrit au moins 30 jours avant l'échéance. Le tarif mensuel affiché en mode annuel est calculé sur la base du paiement annuel de 147,97 €. La question mensuelle incluse est non cumulable d'un mois sur l'autre.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}