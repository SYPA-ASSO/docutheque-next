import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { ChevronRight, ArrowRight, Building2, Calculator, Briefcase, Clock, ShieldCheck, FileCheck2, Layers, Workflow, EyeOff, Lock, ScrollText } from 'lucide-react'

export const metadata = {
  title: "Formalités juridiques externalisées pour avocats, experts-comptables et professionnels · Cabinet Cholez-Pagotto",
  description: "Externalisez vos formalités juridiques auprès d'un formaliste membre du CRFF : immatriculations, modifications, cessations, dépôts de comptes, bénéficiaires effectifs. Guichet unique INPI, sous-traitance RGPD, marque blanche.",
  alternates: { canonical: 'https://cholez-pagotto.fr/formalites-juridiques-externalisees' },
}

const faq = [
  {
    q: "Comment vous transmettre nos dossiers ?",
    a: "Les pièces et l'acte établi par vos soins (statuts, procès-verbal, acte de cession) nous sont transmis via un canal sécurisé. Nous vérifions la complétude administrative du dossier avant tout dépôt et revenons vers vous en cas de pièce manquante.",
  },
  {
    q: "Intervenez-vous en marque blanche ?",
    a: "Oui. Nous intervenons en sous-traitance, invisibles auprès de votre client final. Vous restez son unique interlocuteur et demeurez responsable de la mission vis-à-vis de lui. Si vous préférez que le cabinet soit nommé, c'est également possible.",
  },
  {
    q: "Quels sont les délais de traitement ?",
    a: "Ils dépendent du type de formalité, de la complétude du dossier et des délais propres au guichet unique et aux greffes. Nous nous engageons sur une obligation de moyens, assurons le suivi du dépôt et vous tenons informé à chaque étape.",
  },
  {
    q: "Comment garantissez-vous la confidentialité et la conformité RGPD ?",
    a: "Les dossiers que vous nous confiez sont couverts par un engagement de confidentialité. Lorsqu'ils relèvent du secret professionnel de l'avocat, ce secret est respecté. Pour le traitement des données personnelles effectué pour votre compte, le cabinet agit en qualité de sous-traitant au sens de l'article 28 du RGPD, encadré par un contrat de sous-traitance.",
  },
  {
    q: "Quelles structures et quelles formalités traitez-vous ?",
    a: "L'ensemble des formalités réalisables sur le guichet unique de l'INPI : constitution et immatriculation, modifications statutaires, cessations, dépôt des comptes annuels, registre des bénéficiaires effectifs, pour les sociétés, entreprises individuelles et, selon les cas, associations et structures concernées.",
  },
  {
    q: "Comment êtes-vous rémunéré ?",
    a: "Par une prestation facturée directement au professionnel mandant : à l'acte, en forfait par type de formalité, ou en tarif dégressif au volume. Il n'existe aucune commission, rétrocession ni partage d'honoraires : la relation est une prestation de service entre professionnels.",
  },
  {
    q: "Que se passe-t-il en cas de rejet du greffe ?",
    a: "Nous analysons le motif du rejet, corrigeons la formalité sur le plan administratif et procédons à un nouveau dépôt, à partir de l'acte que vous avez fourni. Notre rôle porte sur l'exécution de la formalité, non sur le contenu juridique de l'acte.",
  },
  {
    q: "Rédigez-vous les actes ?",
    a: "Non. Vous rédigez l'acte (statuts, procès-verbal, acte de cession) dans le cadre de vos prérogatives ; le cabinet exécute la formalité correspondante. La réalisation de formalités est une activité distincte de la rédaction d'actes et de la consultation juridique.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://cholez-pagotto.fr/formalites-juridiques-externalisees#service",
      "name": "Formalités juridiques externalisées",
      "serviceType": "Externalisation de formalités juridiques et d'entreprise",
      "description": "Exécution externalisée des formalités juridiques pour avocats, experts-comptables et professionnels : immatriculations, modifications statutaires, cessations, dépôts de comptes, registre des bénéficiaires effectifs, via le guichet unique de l'INPI.",
      "provider": {
        "@type": "LegalService",
        "@id": "https://cholez-pagotto.fr/#cabinet",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "areaServed": { "@type": "Country", "name": "France" },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Avocats, experts-comptables, directions juridiques et professionnels ayant des formalités à déléguer"
      },
      "url": "https://cholez-pagotto.fr/formalites-juridiques-externalisees"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/formalites-juridiques-externalisees#faq",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Formalités juridiques externalisées", "item": "https://cholez-pagotto.fr/formalites-juridiques-externalisees" }
      ]
    }
  ]
}

const benefices = [
  {
    icon: <Clock size={20} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Du temps rendu à vos équipes",
    texte: "Vos collaborateurs restent concentrés sur les missions à forte valeur ajoutée pendant que le cabinet prend en charge l'exécution administrative des formalités.",
  },
  {
    icon: <FileCheck2 size={20} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Moins de rejets au greffe",
    texte: "Chaque dossier est contrôlé sur sa complétude administrative et sa cohérence formelle (pièces présentes, mentions obligatoires, format attendu) avant dépôt, ce qui limite les rejets et les allers-retours.",
  },
  {
    icon: <Workflow size={20} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Des délais maîtrisés",
    texte: "Suivi des échéances et des dépôts, relances auprès du guichet unique et des greffes, information à chaque étape jusqu'à l'obtention du justificatif.",
  },
  {
    icon: <ShieldCheck size={20} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Une veille réglementaire intégrée",
    texte: "Le cabinet suit en continu les évolutions du guichet unique de l'INPI, des greffes et des obligations déclaratives (bénéficiaires effectifs, dépôts), pour des formalités à jour.",
  },
  {
    icon: <Calculator size={20} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Un coût interne réduit",
    texte: "Externaliser l'exécution des formalités transforme un coût fixe interne en prestation à la demande, calibrée sur votre volume réel.",
  },
]

const pourQui = [
  {
    icon: <Briefcase size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Avocats",
    texte: "Vous rédigez les actes ; le cabinet exécute les formalités qui en découlent. Vos dossiers restent couverts par le secret professionnel, le cabinet intervenant en sous-traitant tenu à la confidentialité.",
  },
  {
    icon: <Calculator size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Experts-comptables",
    texte: "Déléguez les formalités juridiques de vos clients (constitutions, modifications, dépôts des comptes établis par vos soins) et concentrez vos équipes sur la mission comptable.",
  },
  {
    icon: <Building2 size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Directions juridiques et autres professionnels",
    texte: "Directions juridiques, domiciliataires, plateformes : toute structure ayant un volume de formalités à confier à un formaliste dédié, en complément de ses propres activités.",
  },
]

const formalites = [
  { titre: "Constitution et immatriculation", texte: "Immatriculation des sociétés et entreprises individuelles à partir des statuts et actes que vous fournissez." },
  { titre: "Modifications statutaires", texte: "Transfert de siège, changement de dirigeant, modification de l'objet, de la dénomination ou du capital, transformation, à partir du procès-verbal fourni." },
  { titre: "Cessation d'activité", texte: "Dissolution, liquidation, radiation, sur la base des décisions et actes établis par le professionnel mandant." },
  { titre: "Dépôt des comptes annuels", texte: "Dépôt au greffe des comptes établis par l'expert-comptable. Le cabinet n'intervient pas dans leur établissement ni leur appréciation." },
  { titre: "Registre des bénéficiaires effectifs", texte: "Déclaration et mise à jour du registre des bénéficiaires effectifs auprès du guichet compétent." },
  { titre: "Suivi du guichet unique et des greffes", texte: "Dépôt sur le guichet unique de l'INPI, suivi des demandes, réponses aux observations, relations avec les greffes." },
  { titre: "Coordination des annonces légales", texte: "Préparation et coordination de la publication au journal d'annonces légales liée à la formalité." },
]

const etapes = [
  { num: "1", titre: "Transmission", texte: "Vous nous transmettez l'acte que vous avez établi et les pièces, via un canal sécurisé." },
  { num: "2", titre: "Vérification", texte: "Le cabinet contrôle la complétude administrative et la cohérence formelle du dossier avant tout dépôt." },
  { num: "3", titre: "Dépôt et suivi", texte: "Dépôt sur le guichet unique, suivi de la formalité, réponses aux observations éventuelles du greffe." },
  { num: "4", titre: "Restitution", texte: "Remise des justificatifs (Kbis, récépissés) et compte rendu de la formalité réalisée." },
]

export default function FormalitesExternalisees() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: '500' }}>Formalités juridiques externalisées</span>
          </div>
        </div>

        {/* REORIENTATION PARTICULIERS / FUTURS ENTREPRENEURS */}
        <div style={{ background: '#fffbeb', borderBottom: '1px solid #fde68a', padding: '1.5rem' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#b45309', fontSize: '14px', fontWeight: '700', lineHeight: '1.5', margin: '0 0 10px' }}>
              Vous êtes un particulier en réflexion de création d'entreprise ? Futur entrepreneur ayant besoin de sécuriser les démarches de création ?
            </p>
            <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: '0 0 16px' }}>
              Cette page s'adresse aux avocats, experts-comptables et professionnels qui délèguent l'exécution de leurs formalités. Si vous êtes un particulier ou un futur entrepreneur qui souhaite créer son entreprise, direction la bonne page :
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="/creation-entreprise" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#b45309', color: 'white', padding: '12px 26px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
                Créer mon entreprise <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.05em' }}>
              FORMALITÉS EXTERNALISÉES · ENTRE PROFESSIONNELS
            </span>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px', lineHeight: '1.3', maxWidth: '760px' }}>
              Confiez vos formalités juridiques à un formaliste dédié
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.8', margin: '0 0 28px', maxWidth: '720px' }}>
              Le Cabinet Cholez-Pagotto réalise, en sous-traitance, les formalités juridiques des avocats, experts-comptables et professionnels qui souhaitent déléguer leur exécution. Vous apportez l'acte ; le cabinet exécute la formalité, en back-office, avec rigueur et confidentialité.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Demander un devis <ArrowRight size={16} />
              </a>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                Confier une formalité
              </a>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Formaliste membre du CRFF', 'Interlocuteur unique', 'Sous-traitant RGPD (art. 28)', '100% distanciel'].map((tag, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 2rem' }}>

          {/* CADRE / POSITIONNEMENT */}
          <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem 1.75rem', marginBottom: '3.5rem', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <ScrollText size={20} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: '700', margin: '0 0 8px' }}>Une répartition claire des rôles</h2>
              <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.8', margin: 0 }}>
                Le professionnel mandant apporte la substance juridique : il rédige les statuts, le procès-verbal d'assemblée ou l'acte de cession, dans le cadre de ses prérogatives. Le cabinet réalise la formalité administrative qui en découle (dépôt, immatriculation, suivi). La réalisation de formalités est une activité non réglementée, distincte de la consultation juridique et de la rédaction d'actes. Le cabinet n'exerce aucune activité réservée et le professionnel mandant conserve la responsabilité des actes.
              </p>
            </div>
          </section>

          {/* POURQUOI EXTERNALISER */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 8px' }}>Pourquoi externaliser vos formalités</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', margin: '0 0 2rem', maxWidth: '720px' }}>
              Déléguer l'exécution des formalités à un formaliste dédié, c'est libérer du temps interne tout en sécurisant le dépôt des dossiers.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {benefices.map((b, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <div style={{ marginBottom: '12px' }}>{b.icon}</div>
                  <h3 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 8px' }}>{b.titre}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>{b.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* POUR QUI */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 2rem' }}>À qui s'adresse ce service</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {pourQui.map((p, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <div style={{ width: '44px', height: '44px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>{p.icon}</div>
                  <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 8px' }}>{p.titre}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>{p.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FORMALITÉS PRISES EN CHARGE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 8px' }}>Les formalités prises en charge</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', margin: '0 0 2rem', maxWidth: '720px' }}>
              L'ensemble des formalités réalisables sur le guichet unique de l'INPI, à partir des actes que vous fournissez.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px' }}>
              {formalites.map((f, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1.1rem 1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Layers size={16} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <h3 style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>{f.titre}</h3>
                    <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>{f.texte}</p>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: '1.7', margin: '1.25rem 0 0' }}>
              Pour la création d'une entreprise par un entrepreneur (et non pour le compte d'un confrère), le cabinet propose un accompagnement dédié sur la page <a href="/accompagnement-professionnels" style={{ color: '#1a4fba' }}>accompagnement à la création d'entreprise</a>.
            </p>
          </section>

          {/* COMMENT ÇA SE PASSE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 2rem' }}>Comment ça se passe</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
              {etapes.map((e, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', position: 'relative' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#0f2d6e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: '700', marginBottom: '12px' }}>{e.num}</div>
                  <h3 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 6px' }}>{e.titre}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>{e.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* MARQUE BLANCHE */}
          <section style={{ marginBottom: '3.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '14px' }}>
              <EyeOff size={22} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h2 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 6px' }}>Une intervention en marque blanche</h2>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.8', margin: 0 }}>
                  Le cabinet intervient en sous-traitance, invisible auprès de votre client final. Vous restez son unique interlocuteur et demeurez responsable de la mission. Si vous préférez que le cabinet soit nommé, c'est également possible : la formule s'adapte à votre relation client.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '1.25rem' }}>
              {[
                "Vous gardez la relation et la responsabilité vis-à-vis de votre client",
                "Le cabinet n'entre pas en relation contractuelle avec le client final",
                "Engagement de confidentialité et sous-traitance RGPD (art. 28)",
              ].map((t, i) => (
                <div key={i} style={{ background: '#f8fafc', borderRadius: '8px', padding: '12px 14px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <ShieldCheck size={15} color="#16a34a" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#374151', fontSize: '12px', lineHeight: '1.6' }}>{t}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CABINET VS PLATEFORME */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 2rem' }}>Un formaliste dédié plutôt qu'une plateforme automatisée</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'white', border: '2px solid #0f2d6e', borderRadius: '12px', padding: '1.5rem' }}>
                <p style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 14px' }}>Cabinet Cholez-Pagotto</p>
                {['Un interlocuteur unique qui connaît vos dossiers', 'Un accompagnement humain et des échanges directs', 'La maîtrise des dossiers complexes et atypiques', "L'adaptation à vos procédures internes", 'Le suivi personnalisé jusqu\'au justificatif'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span style={{ color: '#16a34a', fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                    <span style={{ color: '#374151', fontSize: '13px', lineHeight: '1.6' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                <p style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 14px' }}>Plateforme automatisée</p>
                {['Un parcours standardisé, peu modulable', 'Un support souvent limité', 'Une faible personnalisation', 'Des dossiers complexes mal pris en charge', 'Peu de suivi en cas de difficulté'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span style={{ color: '#9ca3af', fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>•</span>
                    <span style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GARANTIES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 2rem' }}>Garanties et confiance</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {[
                { icon: <ShieldCheck size={18} color="#1a4fba" strokeWidth={1.5} />, t: "Formaliste membre du CRFF", d: "Le cabinet adhère au Conseil Représentatif des Formalistes de France." },
                { icon: <Lock size={18} color="#1a4fba" strokeWidth={1.5} />, t: "Confidentialité et secret professionnel", d: "Engagement de confidentialité ; lorsque les dossiers relèvent du secret professionnel de l'avocat, ce secret est respecté." },
                { icon: <FileCheck2 size={18} color="#1a4fba" strokeWidth={1.5} />, t: "Sous-traitance RGPD (art. 28)", d: "Le traitement des données pour votre compte est encadré par un contrat de sous-traitance conforme à l'article 28 du RGPD." },
                { icon: <Clock size={18} color="#1a4fba" strokeWidth={1.5} />, t: "Réactivité et suivi", d: "Information à chaque étape, du dépôt jusqu'à la restitution du justificatif." },
              ].map((g, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
                  <div style={{ marginBottom: '10px' }}>{g.icon}</div>
                  <h3 style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px' }}>{g.t}</h3>
                  <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.7', margin: 0 }}>{g.d}</p>
                </div>
              ))}
            </div>
            <p style={{ color: '#9ca3af', fontSize: '12px', lineHeight: '1.7', margin: '1.25rem 0 0' }}>
              La mise en conformité RGPD de votre propre structure peut par ailleurs faire l'objet d'un accompagnement dédié : voir <a href="/rgpd-conformite" style={{ color: '#1a4fba' }}>RGPD et conformité</a> et <a href="/dpo-externalise" style={{ color: '#1a4fba' }}>DPO externalisé</a>.
            </p>
          </section>

          {/* TARIFS */}
          <section style={{ marginBottom: '3.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px' }}>Une offre tarifaire à la carte</h2>
            <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.8', margin: '0 0 1.25rem', maxWidth: '720px' }}>
              Le cabinet construit une offre personnalisée selon vos besoins et votre volume. Plusieurs modalités sont possibles, seules ou combinées :
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                { t: "À l'acte", d: "Une formalité ponctuelle, facturée à l'unité." },
                { t: "Forfait par type de formalité", d: "Un tarif lisible et stable par catégorie de formalité." },
                { t: "Dégressif au volume", d: "Un tarif qui décroît avec le nombre de formalités confiées." },
                { t: "Sur devis", d: "Pour les besoins récurrents ou les dossiers spécifiques." },
              ].map((o, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem' }}>
                  <h3 style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px' }}>{o.t}</h3>
                  <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6', margin: 0 }}>{o.d}</p>
                </div>
              ))}
            </div>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '1.5rem', background: '#0f2d6e', color: 'white', padding: '12px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>
              Demander un devis personnalisé <ArrowRight size={15} />
            </a>
          </section>

          {/* FAQ */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '820px' }}>
              {faq.map((item, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <summary style={{ fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span>{item.q}</span>
                    <span style={{ color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>＋</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 10px' }}>Un volume de formalités à déléguer ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.7', margin: '0 auto 24px', maxWidth: '560px' }}>
              Décrivez-nous votre besoin : type de formalités, volume, et la formule de collaboration souhaitée. Le cabinet revient vers vous avec une proposition adaptée.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Demander un devis <ArrowRight size={16} />
              </a>
              <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                Voir tous les services
              </a>
            </div>
          </section>

          {/* NOTE LÉGALE */}
          <p style={{ color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', textAlign: 'center', maxWidth: '820px', margin: '2.5rem auto 0' }}>
            Le Cabinet Cholez-Pagotto exerce une activité de réalisation de formalités administratives, distincte de la consultation juridique réservée aux avocats (loi n°71-1130 du 31 décembre 1971) et de l'expertise comptable (ordonnance n°45-2138 du 19 septembre 1945). Le cabinet intervient à partir des actes établis par le professionnel mandant, qui conserve la responsabilité de ces actes vis-à-vis de son client. Le cabinet n'accomplit aucun acte réservé, n'emploie aucun titre protégé et ne pratique aucun partage d'honoraires. Formaliste membre du CRFF (Conseil Représentatif des Formalistes de France).
          </p>

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
