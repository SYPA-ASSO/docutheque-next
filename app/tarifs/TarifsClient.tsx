'use client'

import GoogleAvis from '@/components/GoogleAvis'

import { useState } from 'react'
import { Building2, PenLine, Monitor, Shield, FileText, Lock, RefreshCw } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import BanniereALaUne from '@/components/BanniereALaUne'

export default function TarifsClient() {
  const [annuel, setAnnuel] = useState(false)

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Tarifs Cabinet Cholez-Pagotto",
    "description": "Offres et tarifs du cabinet : modèles de documents juridiques, abonnements Optimal, information sur vos droits, accompagnement création d'entreprise.",
    "url": "https://cholez-pagotto.fr/tarifs",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "Offer", "name": "Accès Gratuit", "price": "0", "priceCurrency": "EUR", "description": "Compte gratuit : demande de modèles de documents en DOCX (modèles gratuits remis aussitôt, autres modèles payables à l'unité), newsletter gratuite." },
        { "@type": "Offer", "name": "Abonnement Optimal Particulier", "price": "17.90", "priceCurrency": "EUR", "description": "Tous les modèles de documents demandés au cabinet inclus (DOCX), notices explicatives, fiches pédagogiques, 1 question juriste incluse par mois non cumulable sous 24 à 48h, support prioritaire. Sans engagement mensuel ou 149 €/an." },
        { "@type": "Offer", "name": "Abonnement Optimal Pro", "price": "27.90", "priceCurrency": "EUR", "description": "Tous les modèles de documents inclus, 2 questions juriste incluses par mois, alertes légales événementielles, support prioritaire. Sans engagement mensuel ou 249 €/an." },
        { "@type": "Offer", "name": "Information sur vos droits", "price": "47", "priceCurrency": "EUR", "description": "Réponse pédagogique rédigée par un juriste sous 24 à 48h ouvrées, sans abonnement ni engagement." },
        { "@type": "Offer", "name": "Accompagnement Créateurs", "price": "0", "priceCurrency": "EUR", "description": "Création d'entreprise offerte (hors frais de greffe et JAL). Statuts, formalités, accompagnement juriste formaliste inclus. Sur devis personnalisé." }
      ]
    }
  }

  const faqItems = [
    {
      q: "Quelle est la différence entre l'Abonnement Optimal Particulier et l'Abonnement Optimal Pro ?",
      a: "L'Abonnement Optimal Particulier inclut 1 question juriste par mois et tous les modèles de documents demandés au cabinet. L'Abonnement Optimal Pro inclut 2 questions par mois, les mêmes modèles inclus, ainsi que les alertes légales événementielles publiées par le cabinet selon l'actualité. Le Pro est conçu pour les professionnels, associations et structures qui ont des besoins juridiques récurrents."
    },
    {
      q: "L'abonnement mensuel est-il sans engagement ?",
      a: "Oui. L'abonnement mensuel (Particulier ou Pro) est sans engagement de durée. Vous pouvez résilier à tout moment, avec un préavis de 30 jours. L'abonnement annuel bénéficie d'un tarif préférentiel (3 mois offerts) en contrepartie d'un engagement de 12 mois."
    },
    {
      q: "Puis-je résilier mon abonnement annuel avant son terme ?",
      a: "L'abonnement annuel est souscrit pour une durée ferme de 12 mois. La résiliation est possible à tout moment, mais prend effet à l'échéance annuelle, sous réserve d'en faire la demande par écrit au moins 30 jours avant cette date. Aucun remboursement au prorata n'est effectué."
    },
    {
      q: "Quels moyens de paiement acceptez-vous ?",
      a: "Nous acceptons le paiement par carte bancaire et par virement bancaire. Le paiement est sécurisé. Aucune information bancaire n'est conservée sur nos serveurs."
    },
    {
      q: "L'abonnement annuel se renouvelle-t-il automatiquement ?",
      a: "Oui. À l'issue de la période initiale de 12 mois, l'abonnement annuel se renouvelle automatiquement pour une nouvelle année, sauf résiliation adressée par écrit au moins 30 jours avant l'échéance. Vous serez informé par email entre 1 et 3 mois avant la date de renouvellement."
    },
    {
      q: 'La réponse "Information sur vos droits" est-elle garantie sous 48h ?',
      a: "Dans le cadre d'une obligation de moyen, nous mettons tout en œuvre pour vous apporter une réponse rédigée par un juriste sous 24 à 48h ouvrées suivant la réception de votre question et la confirmation du paiement."
    },
    {
      q: "Puis-je cumuler les questions incluses dans mon abonnement Optimal ?",
      a: "Non. Les questions mensuelles incluses dans l'abonnement Optimal ne sont pas cumulables d'un mois sur l'autre. Si vous avez besoin de poser des questions supplémentaires dans le même mois, elles sont disponibles à 14,90 € l'unité pour les abonnés. Sans abonnement, chaque question est à 47 €. Si vous posez régulièrement des questions, l'abonnement Optimal devient plus économique dès la deuxième question mensuelle."
    },
  ]

  const createurItems = [
    { icon: <Building2 size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Création de société (SASU, SAS, SARL, EURL), micro-entreprise, entreprise individuelle" },
    { icon: <PenLine size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Assistance à la constitution : statuts et actes constitutifs" },
    { icon: <Monitor size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Réalisation des formalités d'immatriculation (guichet unique INPI)" },
    { icon: <Shield size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Accompagnement RGPD et conformité" },
    { icon: <FileText size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Contrats et documents métier à tarifs préférentiels" },
    { icon: <Lock size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Conseil en assurances professionnelles (RC Pro, multirisques)" },
    { icon: <RefreshCw size={18} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />, label: "Prise en charge des modifications statutaires, transferts de siège, dissolution" },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh', padding: '4rem 0'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>

          {/* TITRE + INTRO */}
          <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem'}}>
            <h1 style={{fontSize: '2rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Nos tarifs</h1>
            <p style={{color: '#6b7280', fontSize: '0.95rem', marginTop: '8px', marginBottom: '16px'}}>Des formules simples, transparentes, sans mauvaise surprise.</p>
            <p style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.8'}}>
              Que vous ayez besoin d'un document ponctuel, de tous nos modèles de documents inclus dans un abonnement ou d'un accompagnement personnalisé pour créer votre entreprise, le cabinet propose une offre adaptée à chaque situation. Tous nos documents sont rédigés par un juriste, jamais générés par une IA, et mis à jour dès que la législation évolue.
            </p>
          </div>

          {/* A LA UNE (pilotable en back-office, /admin/banniere) */}
          <div style={{ marginBottom: '2.5rem' }}>
            <BanniereALaUne maxWidth={860} outerPadding="0" />
          </div>

          {/* COMMENT FONCTIONNE L ACCES */}
          <div style={{ maxWidth: '860px', margin: '0 auto 2.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 4px', textAlign: 'center' }}>Comment obtenir un modèle de document&nbsp;?</h2>
            <p style={{ color: '#6b7280', fontSize: '13px', textAlign: 'center', margin: '0 0 18px' }}>Trois manières d'obtenir nos modèles, selon vos besoins.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ borderLeft: '3px solid #16a34a', background: '#f0fdf4', borderRadius: '8px', padding: '12px 14px' }}>
                <p style={{ margin: '0 0 2px', fontWeight: '700', color: '#15803d', fontSize: '13px' }}>Modèles gratuits</p>
                <p style={{ margin: 0, color: '#374151', fontSize: '13px', lineHeight: '1.6' }}>La création de compte est gratuite. Depuis votre espace client, vous décrivez le document dont vous avez besoin : si le cabinet dispose d'un modèle gratuit, il vous est remis aussitôt.</p>
              </div>
              <div style={{ borderLeft: '3px solid #d97706', background: '#fffbeb', borderRadius: '8px', padding: '12px 14px' }}>
                <p style={{ margin: '0 0 2px', fontWeight: '700', color: '#b45309', fontSize: '13px' }}>Modèles à l'unité</p>
                <p style={{ margin: 0, color: '#374151', fontSize: '13px', lineHeight: '1.6' }}>Certains modèles sont payants. Le cabinet vous indique le prix avant tout paiement, par carte bancaire ou par virement, sans abonnement. Une fois réglé, le modèle reste accessible dans votre espace client.</p>
              </div>
              <div style={{ borderLeft: '3px solid #1a4fba', background: '#eff6ff', borderRadius: '8px', padding: '12px 14px' }}>
                <p style={{ margin: '0 0 2px', fontWeight: '700', color: '#1a4fba', fontSize: '13px' }}>Abonnement Optimal</p>
                <p style={{ margin: 0, color: '#374151', fontSize: '13px', lineHeight: '1.6' }}>L'abonnement Optimal inclut tous les modèles de documents que vous demandez au cabinet, sans coût supplémentaire, ainsi qu'une question à notre juriste chaque mois. Au choix&nbsp;: paiement mensuel sans engagement de durée, ou paiement annuel avec trois mois offerts.</p>
              </div>
            </div>
          </div>

          {/* TOGGLE */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '2.5rem'}}>
            <span style={{fontSize: '13px', fontWeight: annuel ? '400' : '600', color: annuel ? '#6b7280' : '#0f2d6e'}}>Mensuel · sans engagement</span>
            <div onClick={() => setAnnuel(!annuel)} style={{width: '48px', height: '26px', borderRadius: '13px', background: '#1a4fba', cursor: 'pointer', position: 'relative', transition: 'background 0.2s'}}>
              <div style={{position: 'absolute', top: '3px', left: annuel ? '25px' : '3px', width: '20px', height: '20px', borderRadius: '50%', background: 'white', transition: 'left 0.2s'}} />
            </div>
            <span style={{fontSize: '13px', fontWeight: annuel ? '600' : '400', color: annuel ? '#0f2d6e' : '#6b7280'}}>
              Annuel <span style={{background: '#dcfce7', color: '#16a34a', fontSize: '11px', fontWeight: '600', padding: '2px 7px', borderRadius: '10px', marginLeft: '4px'}}>3 mois offerts</span>
            </span>
          </div>

          {/* CARTES — 4 colonnes */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', alignItems: 'flex-start'}}>

            {/* GRATUIT */}
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column'}}>
              <p style={{fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '0.08em', margin: 0}}>ACCÈS GRATUIT</p>
              <div style={{margin: '10px 0 4px'}}><span style={{fontSize: '2rem', fontWeight: '700', color: '#0f2d6e'}}>0 €</span></div>
              <p style={{color: '#6b7280', fontSize: '11px', marginBottom: '16px'}}>Inscription gratuite requise</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1}}>
                {[
                  'Demande de modèles de documents, format DOCX',
                  "Modèles gratuits remis aussitôt, autres modèles à l'unité",
                  'Newsletter gratuite',
                ].map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                    <span style={{color: '#16a34a', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                    <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/connexion" style={{display: 'block', width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e5e7eb', background: 'white', color: '#0f2d6e', fontSize: '12px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>
                S'inscrire gratuitement
              </a>
            </div>

            {/* OPTIMAL PARTICULIER */}
            <div style={{background: '#0f2d6e', border: '2px solid #1a4fba', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '12px', right: '12px', background: '#1a4fba', color: 'white', fontSize: '9px', fontWeight: '700', padding: '3px 8px', borderRadius: '10px', letterSpacing: '0.05em'}}>RECOMMANDÉ</div>
              <p style={{fontSize: '11px', fontWeight: '600', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', margin: 0}}>OPTIMAL PARTICULIER</p>
              <div style={{margin: '10px 0 4px'}}>
                <span style={{fontSize: '2rem', fontWeight: '700', color: 'white'}}>{annuel ? '12,42 €' : '17,90 €'}</span>
                <span style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginLeft: '4px'}}>/mois</span>
              </div>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', marginBottom: '16px'}}>
                {annuel ? '149 €/an · 3 mois offerts' : 'Sans engagement · résiliation 30 j'}
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1}}>
                {[
                  "Tous les modèles de documents inclus (DOCX)",
                  'Notices et fiches pédagogiques',
                  '1 question juriste/mois · non cumulable',
                  '14,90 € par question supplémentaire',
                  'Newsletter abonnés',
                  'Orientation vers un avocat ou notaire partenaire *',
                  'Support prioritaire par mail',
                ].map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                    <span style={{color: '#93c5fd', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                    <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/connexion" style={{display: 'block', width: '100%', padding: '10px', borderRadius: '8px', border: 'none', background: 'white', color: '#0f2d6e', fontSize: '12px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>S'abonner</a>
            </div>

            {/* OPTIMAL PRO */}
            <div style={{background: 'white', border: '2px solid #0f2d6e', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', top: '12px', right: '12px', background: '#b8860b', color: 'white', fontSize: '9px', fontWeight: '700', padding: '3px 8px', borderRadius: '10px', letterSpacing: '0.05em'}}>PRO</div>
              <p style={{fontSize: '11px', fontWeight: '600', color: '#0f2d6e', letterSpacing: '0.08em', margin: 0}}>OPTIMAL PRO</p>
              <div style={{margin: '10px 0 4px'}}>
                <span style={{fontSize: '2rem', fontWeight: '700', color: '#0f2d6e'}}>{annuel ? '20,75 €' : '27,90 €'}</span>
                <span style={{color: '#6b7280', fontSize: '12px', marginLeft: '4px'}}>/mois</span>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', marginBottom: '16px'}}>
                {annuel ? '249 €/an · 3 mois offerts' : 'Sans engagement · résiliation 30 j'}
              </p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px', flex: 1}}>
                {[
                  "Tous les modèles de documents inclus (DOCX)",
                  'Notices et fiches pédagogiques',
                  '2 questions juriste/mois · non cumulables',
                  '14,90 € par question supplémentaire',
                  'Alertes légales événementielles',
                  'Orientation vers un avocat ou notaire partenaire *',
                  'Support prioritaire par mail',
                ].map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                    <span style={{color: '#b8860b', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                    <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                  </div>
                ))}
              </div>
              <a href="/connexion" style={{display: 'block', width: '100%', padding: '10px', borderRadius: '8px', border: '2px solid #0f2d6e', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>S'abonner</a>
            </div>

            {/* INFORMATION SUR VOS DROITS */}
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column'}}>
              <p style={{fontSize: '11px', fontWeight: '600', color: '#6b7280', letterSpacing: '0.08em', margin: 0}}>INFORMATION SUR VOS DROITS</p>
              <div style={{margin: '10px 0 4px'}}><span style={{fontSize: '2rem', fontWeight: '700', color: '#0f2d6e'}}>47 €</span></div>
              <p style={{color: '#6b7280', fontSize: '11px', marginBottom: '8px'}}>À l'unité · sans abonnement</p>
              <p style={{color: '#9ca3af', fontSize: '10px', marginBottom: '16px', lineHeight: '1.6', fontStyle: 'italic'}}>Information juridique au sens de la loi n°71-1130 du 31 décembre 1971. Ne constitue pas une consultation juridique personnalisée.</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px', flex: 1}}>
                {[
                  'Vous posez votre question en langage courant',
                  'Réponse pédagogique par un juriste sous 24 à 48h',
                  'Références juridiques précises',
                ].map((item, i) => (
                  <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                    <span style={{color: '#16a34a', fontSize: '13px', flexShrink: 0, marginTop: '1px'}}>✓</span>
                    <span style={{color: '#374151', fontSize: '12px', lineHeight: '1.5'}}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '8px 10px', marginBottom: '16px'}}>
                <p style={{color: '#1e3a5f', fontSize: '10px', lineHeight: '1.6', margin: 0}}>
                  Abonnés Optimal : 14,90 € par question supplémentaire (au lieu de 47 €).
                </p>
              </div>
              <a href="/information-sur-vos-droits" style={{display: 'block', width: '100%', padding: '10px', borderRadius: '8px', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '600', cursor: 'pointer', textDecoration: 'none', textAlign: 'center', boxSizing: 'border-box'}}>Poser ma question</a>
            </div>

          </div>

          {/* NOTE MISE EN RELATION AVOCAT */}
          <p style={{color: '#9ca3af', fontSize: '11px', lineHeight: '1.6', margin: '1.75rem auto 0', maxWidth: '780px', textAlign: 'center'}}>
            * L'orientation vers un avocat ou notaire partenaire intervient à votre initiative et sans engagement. Le cabinet demeure indépendant du professionnel désigné. Les honoraires de la consultation sont fixés librement par ce professionnel et lui sont réglés directement. Le cabinet ne perçoit aucune commission sur ces honoraires.
          </p>

          {/* COMPARATEUR BIEN CHOISIR */}
          <div style={{marginTop: '3rem'}}>
            <h2 style={{color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', textAlign: 'center', margin: '0 0 6px'}}>Bien choisir, en un coup d'œil</h2>
            <p style={{color: '#6b7280', fontSize: '13px', textAlign: 'center', margin: '0 0 20px'}}>Les mêmes offres que ci-dessus, lues autrement : par besoin.</p>
            <div style={{overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '12px', background: 'white'}}>
              <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '12.5px', minWidth: 760}}>
                <thead>
                  <tr>
                    {['', 'Accès gratuit', 'Optimal Particulier', 'Optimal Pro', "Question à l'unité"].map((h, i) => (
                      <th key={i} style={{padding: '12px 14px', textAlign: i === 0 ? 'left' : 'center', background: i === 2 ? '#0f2d6e' : '#f8fafc', color: i === 2 ? 'white' : '#0f2d6e', fontSize: '12px', fontWeight: 700, borderBottom: '1px solid #e5e7eb', whiteSpace: 'nowrap'}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Usage type', 'Demander un modèle, gratuit ou payant à l\'unité', 'Particulier qui veut tous les modèles inclus et un fil direct avec le juriste', 'Professionnel, association ou collectivité', "Besoin ponctuel d'éclairage, sans abonnement"],
                    ['Modèles gratuits sur demande (DOCX)', '✓', '✓', '✓', '-'],
                    ['Modèles payants, notices et fiches', "À l'unité, prix indiqué avant paiement", '✓ inclus', '✓ inclus', '-'],
                    ['Question à un juriste', '47 € la question', '1 incluse par mois (non cumulable)', '2 incluses par mois (non cumulables)', '47 € la question'],
                    ['Question supplémentaire', '47 €', '14,90 €', '14,90 €', '47 €'],
                    ['Alertes légales événementielles', '-', '-', '✓', '-'],
                    ['Orientation avocat ou notaire partenaire *', '-', '✓', '✓', '-'],
                    ['Support prioritaire par mail', '-', '✓', '✓', '-'],
                    ['Engagement', 'Aucun', 'Sans engagement · ou 149 €/an', 'Sans engagement · ou 249 €/an', 'Aucun'],
                    ['Tarif', '0 €', '17,90 €/mois', '27,90 €/mois', '47 €/question'],
                  ].map((ligne, i) => (
                    <tr key={i} style={{borderBottom: '1px solid #f3f4f6'}}>
                      {ligne.map((cell, j) => (
                        <td key={j} style={{padding: '10px 14px', textAlign: j === 0 ? 'left' : 'center', color: j === 0 ? '#0f2d6e' : '#374151', fontWeight: j === 0 ? 600 : 400, background: j === 2 ? '#eff6ff' : 'white', lineHeight: 1.5}}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td style={{padding: '12px 14px', background: 'white'}}></td>
                    {[
                      { label: "S'inscrire", href: '/connexion', plein: false },
                      { label: "S'abonner", href: '/connexion', plein: true },
                      { label: "S'abonner", href: '/connexion', plein: true },
                      { label: 'Poser ma question', href: '/information-sur-vos-droits', plein: false },
                    ].map((b, j) => (
                      <td key={j} style={{padding: '12px 14px', textAlign: 'center', background: j === 1 ? '#eff6ff' : 'white'}}>
                        <a href={b.href} style={{display: 'inline-block', padding: '8px 14px', borderRadius: '8px', fontSize: '11.5px', fontWeight: 700, textDecoration: 'none', background: b.plein ? '#0f2d6e' : 'white', color: b.plein ? 'white' : '#0f2d6e', border: '1px solid #0f2d6e', whiteSpace: 'nowrap'}}>{b.label}</a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderRadius: '10px', padding: '0.9rem 1.25rem', marginTop: '14px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px'}}>
              <p style={{color: '#6b5b1e', fontSize: '13px', lineHeight: 1.6, margin: 0, flex: '1 1 380px'}}><strong style={{color: '#0f2d6e'}}>Et si votre besoin dépasse le document ?</strong> Création d'entreprise, formalités externalisées, RGPD et DPO, conseil en assurances : le cabinet vous accompagne de bout en bout.</p>
              <a href="/services" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap'}}>Découvrir les accompagnements &rarr;</a>
            </div>
          </div>

          {/* RÉASSURANCE */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '2rem'}}>
            <span style={{fontSize: '16px'}}>🔒</span>
            <span style={{color: '#6b7280', fontSize: '12px'}}>Paiement sécurisé · Carte bancaire et virement bancaire acceptés</span>
            <span style={{color: '#d1d5db', fontSize: '12px'}}>·</span>
            <GoogleAvis variant="inline" />
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
              <div style={{display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', flexWrap: 'wrap'}}>
                <div style={{flex: 1, background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 16px'}}>
                  <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.7', margin: 0}}>
                    Frais indépendants de nos services, réglés directement auprès des organismes concernés : greffe (gratuit pour la micro-entreprise, entre 55 et 80 € pour les sociétés) et journal d'annonces légales (entre 130 et 250 € HT selon la forme juridique et le département), tarifs 2026.
                  </p>
                  <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.7', margin: '8px 0 0'}}>
                    Conseil en assurances professionnelles (RC Pro, multirisques) : forfait conseil 150 € : individualisé, documenté et motivé (art. L.521-4 Code des assurances / DDA). Commission assureur séparée, communiquée avant souscription.
                  </p>
                </div>
              </div>
            </div>
            <div style={{flex: '0 0 40%', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'space-between'}}>
              {createurItems.map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                  <div style={{flexShrink: 0, marginTop: '1px'}}>{item.icon}</div>
                  <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.5'}}>{item.label}</span>
                </div>
              ))}
              <div style={{display: 'flex', justifyContent: 'center', paddingTop: '8px'}}>
                <a href="/contact" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '12px 32px', borderRadius: '8px', border: '2px solid white', fontSize: '13px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                  Nous contacter
                </a>
              </div>
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
              L'abonnement mensuel (Particulier ou Pro) est sans engagement de durée, résiliable avec 30 jours de préavis. L'abonnement annuel est souscrit pour 12 mois fermes et se renouvelle automatiquement sauf résiliation adressée par écrit au moins 30 jours avant l'échéance. Le tarif mensuel affiché en mode annuel est calculé sur la base du paiement annuel (149 € pour le Particulier, 249 € pour le Pro). Les questions mensuelles incluses sont non cumulables d'un mois sur l'autre.
            </p>
          </div>

        </div>

        {/* NEWSLETTER */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 16, padding: '2.5rem 1.75rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(15,45,110,0.25)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', margin: '0 0 0.5rem' }}>Restez informé</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              Recevez nos analyses juridiques, les évolutions réglementaires et nos actualités. Une lettre claire, sans spam, désinscription en un clic.
            </p>
            <NewsletterForm variant="hero" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}