import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, FileText, Scale, Building2, Heart, Shield, Lock, Umbrella, GraduationCap, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Nos services · Cabinet Cholez-Pagotto · Juriste, Formaliste, Conseil en assurances",
  description: "Découvrez l'ensemble des services du Cabinet Cholez-Pagotto : bibliothèque juridique, information sur vos droits, accompagnement création d'entreprise, associations ESS, RGPD, DPO externalisé, conseil en assurances.",
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      "name": "Services du Cabinet Cholez-Pagotto",
      "description": "Ensemble des services proposés par le Cabinet Cholez-Pagotto : information juridique, formalités, RGPD, DPO externalisé, conseil en assurances.",
      "url": "https://cholez-pagotto.fr/services",
      "numberOfItems": 8,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Bibliothèque de documents juridiques", "url": "https://cholez-pagotto.fr/catalogue" },
        { "@type": "ListItem", "position": 2, "name": "Information sur vos droits", "url": "https://cholez-pagotto.fr/information-sur-vos-droits" },
        { "@type": "ListItem", "position": 3, "name": "Accompagnement création d'entreprise", "url": "https://cholez-pagotto.fr/accompagnement-professionnels" },
        { "@type": "ListItem", "position": 4, "name": "Accompagnement associations & ESS", "url": "https://cholez-pagotto.fr/accompagnement-associations" },
        { "@type": "ListItem", "position": 5, "name": "Accompagnement RGPD & conformité", "url": "https://cholez-pagotto.fr/contact" },
        { "@type": "ListItem", "position": 6, "name": "DPO externalisé", "url": "https://cholez-pagotto.fr/contact" },
        { "@type": "ListItem", "position": 7, "name": "Conseil en assurances", "url": "https://cholez-pagotto.fr/conseil-assurances" },
        { "@type": "ListItem", "position": 8, "name": "Formations sur-mesure", "url": "https://cholez-pagotto.fr/contact" },
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Services" }
      ]
    }
  ]
}

const services = [
  {
    id: "bibliotheque",
    badge: "ACCÈS LIBRE & ABONNEMENT",
    icon: <FileText size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Bibliothèque de documents juridiques",
    accroche: "Des modèles de documents rédigés par un juriste, accompagnés de notices explicatives pour les adapter à votre situation.",
    pourQui: "Particuliers, professionnels, associations, dirigeants d'entreprise.",
    description: "La bibliothèque Docuthèque regroupe des modèles de documents juridiques en format DOCX, rédigés par un juriste et accompagnés de notices explicatives. Certains documents sont disponibles en accès libre. L'Abonnement Optimal donne accès à l'intégralité de la bibliothèque, incluant des fiches pédagogiques de vulgarisation juridique et une question mensuelle d'information juridique rédigée par un juriste.",
    comprend: [
      "Documents DOCX téléchargeables en format éditable",
      "Notices explicatives rédigées par un juriste pour les principaux documents",
      "Fiches pédagogiques de vulgarisation juridique (Abonnement Optimal)",
      "Mise à jour des documents en fonction des évolutions législatives et réglementaires",
      "Accès libre (documents sélectionnés) ou accès complet (Abonnement Optimal)",
    ],
    tarif: "Gratuit (accès libre, documents sélectionnés) · 17,90 €/mois ou 149 €/an pour l'accès complet (Abonnement Optimal)",
    lien: "/catalogue",
    disponible: false,
    cta: "Voir la bibliothèque",
  },
  {
    id: "information-droits",
    badge: "SERVICE D'INFORMATION JURIDIQUE",
    icon: <Scale size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Information sur vos droits",
    accroche: "Une question. Un juriste. Une réponse pédagogique par écrit sous 24 à 48h ouvrées.",
    pourQui: "Particuliers, salariés, locataires, consommateurs, dirigeants, associations.",
    description: "Face à une situation juridique, comprendre ses droits est la première étape indispensable. Ce service vous permet de poser votre question en langage courant et de recevoir une réponse rédigée par un juriste, avec les références juridiques applicables à votre situation. Sans abonnement, sans engagement. Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971.",
    comprend: [
      "Réponse rédigée par un juriste, 100% humain, aucune IA",
      "Identification des textes et règles applicables à votre situation",
      "Réponse en langage clair, avec références juridiques précises",
      "Délai indicatif de 24 à 48h ouvrées",
      "Orientation vers le professionnel compétent si nécessaire",
    ],
    tarif: "47 € à l'unité · Abonnés Optimal (dès 17,90 €/mois) : 1 question gratuite/mois, puis 14,90 €",
    lien: "/information-sur-vos-droits",
    disponible: true,
    cta: "En savoir plus",
  },
  {
    id: "creation-entreprise",
    badge: "ACCOMPAGNEMENT FORMALISTE",
    icon: <Building2 size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Accompagnement création d'entreprise",
    accroche: "De l'idée à l'immatriculation, et bien au-delà. La création offerte, hors frais de greffe et de publication légale.",
    pourQui: "Porteurs de projet, créateurs d'entreprise, entrepreneurs.",
    description: "Créer une entreprise implique des choix juridiques structurants : forme juridique, rédaction des statuts, formalités d'immatriculation, conformité initiale. Le cabinet accompagne les porteurs de projet de la phase de réflexion à l'obtention du Kbis, en assurant la rédaction des statuts, la réalisation des formalités d'immatriculation et l'accompagnement RGPD dès le lancement.",
    comprend: [
      "Orientation sur le choix de la forme juridique adaptée à votre projet (SASU, SARL, micro-entreprise...)",
      "Préparation et assistance à la rédaction des statuts et actes constitutifs",
      "Réalisation des formalités d'immatriculation",
      "Accompagnement RGPD de premier niveau dès le lancement (périmètre défini ensemble)",
      "Accès aux modèles de contrats et documents métier à tarifs préférentiels",
      "Orientation en assurances professionnelles (RC Pro, multirisques), service distinct, ORIAS 26003943",
      "Possibilité de prise en charge des modifications statutaires ultérieures (service complémentaire)",
    ],
    tarif: "Création offerte (hors frais de greffe et journal d'annonces légales) · Services complémentaires sur devis",
    lien: "/accompagnement-professionnels",
    disponible: false,
    cta: "Nous contacter",
  },
  {
    id: "associations",
    badge: "ÉCONOMIE SOCIALE ET SOLIDAIRE",
    icon: <Heart size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Accompagnement associations & ESS",
    accroche: "Les acteurs de l'ESS méritent un accompagnement à la hauteur de leurs engagements.",
    pourQui: "Associations loi 1901, fondations, coopératives, mutuelles, structures ESS.",
    description: "Le secteur de l'économie sociale et solidaire obéit à des règles juridiques spécifiques souvent méconnues. Le cabinet accompagne les associations et structures ESS dans leur création, leur gouvernance, leur conformité juridique et réglementaire, et leur développement. Une expertise particulière est apportée sur les questions de bénévolat, de gestion désintéressée, d'agrément et de financement public.",
    comprend: [
      "Constitution et formalités de création d'association loi 1901",
      "Préparation et assistance à la rédaction des statuts associatifs",
      "Accompagnement lors des évolutions statutaires ultérieures (modification d'objet, de gouvernance...)",
      "Information juridique sur la gouvernance et le fonctionnement des instances dirigeantes",
      "Accompagnement RGPD adapté aux structures associatives (service distinct, périmètre défini ensemble)",
      "Information juridique sur le statut des bénévoles et les règles de gestion désintéressée",
      "Accompagnement dans la constitution des dossiers d'agrément et de demandes de subvention",
      "Documents contractuels et réglementaires adaptés aux spécificités de l'ESS",
    ],
    tarif: "Sur devis personnalisé",
    lien: "/accompagnement-associations",
    disponible: false,
    cta: "Nous contacter",
  },
  {
    id: "rgpd",
    badge: "CONFORMITÉ RGPD",
    icon: <Shield size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Accompagnement RGPD & conformité",
    accroche: "La conformité au RGPD n'est pas une option. C'est une obligation légale et un gage de confiance.",
    pourQui: "Entreprises, associations, professions libérales, collectivités.",
    description: "Le Règlement Général sur la Protection des Données (RGPD) impose des obligations concrètes à toute structure qui traite des données personnelles. Le cabinet accompagne les organisations dans la mise en conformité initiale et le maintien de cette conformité dans le temps : audit des traitements, rédaction des documents obligatoires, formation des équipes et mise en place des procédures internes.",
    comprend: [
      "Diagnostic de conformité des traitements de données personnelles (périmètre documentaire et juridique)",
      "Rédaction du registre des activités de traitement (art. 30 RGPD)",
      "Registre des violations et procédures de notification (art. 33-34)",
      "Analyse d'impact relative à la protection des données (AIPD)",
      "Politique de confidentialité et mentions légales conformes",
      "Contrats de sous-traitance (art. 28 RGPD)",
      "Formation des équipes et responsables de traitement",
      "Modèles de réponse aux droits des personnes (art. 15 à 22)",
    ],
    tarif: "Sur devis selon périmètre",
    lien: "/contact",
    disponible: true,
    cta: "Nous contacter",
  },
  {
    id: "dpo",
    badge: "DÉLÉGUÉ À LA PROTECTION DES DONNÉES",
    icon: <Lock size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "DPO externalisé",
    accroche: "Les obligations du DPO sans le coût d'un poste dédié. Une expertise en veille permanente.",
    pourQui: "Organismes publics, structures traitant des données sensibles à grande échelle, TPE, associations.",
    description: "Le Délégué à la Protection des Données (DPO) est obligatoire pour certaines organisations (art. 37 RGPD) et fortement recommandé pour les autres. L'externalisation du DPO permet d'accéder à une expertise juridique et réglementaire en protection des données, en veille permanente sur l'actualité réglementaire et les décisions de la CNIL, sans les contraintes d'un recrutement interne.",
    comprend: [
      "Prise en charge du mandat de DPO au sens de l'art. 37 RGPD",
      "Point de contact désigné auprès de la CNIL",
      "Veille permanente sur l'actualité législative et les délibérations CNIL",
      "Suivi de la conformité et recommandations périodiques (fréquence définie au contrat)",
      "Gestion des demandes d'exercice de droits des personnes",
      "Accompagnement en cas de violation de données",
      "Formation continue des équipes impliquées",
      "Rapport annuel de conformité",
    ],
    tarif: "Sur devis, engagement annuel",
    lien: "/contact",
    disponible: true,
    cta: "Nous contacter",
  },
  {
    id: "formations",
    badge: "FORMATIONS SUR-MESURE",
    icon: <GraduationCap size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Formations sur-mesure",
    accroche: "Des formations adaptées à vos équipes, votre secteur et vos enjeux, en présentiel ou à distance.",
    pourQui: "Entreprises, associations, structures ESS, professions libérales, collectivités.",
    description: "Des sessions de formation conçues sur mesure pour répondre aux besoins réels de vos équipes : droit du travail, RGPD et protection des données, formalités juridiques, gouvernance associative, droit des assurances... Chaque formation est construite en lien avec votre secteur d'activité, votre niveau de connaissance préalable et vos objectifs opérationnels. La formation peut être dispensée en présentiel ou à distance, en session individuelle ou collective.",
    comprend: [
      "Audit préalable des besoins et du niveau des participants",
      "Conception d'un programme adapté à votre secteur et vos enjeux spécifiques",
      "Animation en présentiel ou à distance",
      "Support de formation et ressources documentaires remis aux participants",
      "Évaluation des acquis en fin de formation",
      "Accompagnement post-formation sur demande",
    ],
    tarif: "Sur devis selon périmètre, durée et nombre de participants",
    lien: "/contact",
    disponible: true,
    cta: "Nous contacter",
  },
  {
    id: "assurances",
    badge: "ORIAS N°26003943",
    icon: <Umbrella size={22} color="#1a4fba" strokeWidth={1.5} />,
    titre: "Conseil en assurances",
    accroche: "Un intermédiaire en assurances réglementé pour vous orienter vers les garanties adaptées à votre situation.",
    pourQui: "Particuliers, associations, entreprises, professions libérales, structures ESS.",
    description: "Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA), le conseil est individualisé, documenté et motivé. Un forfait couvre l'analyse des besoins, l'audit des contrats existants et la comparaison des offres du marché. Il est dû avant remise du rapport, indépendamment de toute souscription. En cas de souscription via le cabinet, une commission versée par l'assureur s'y ajoute, séparée du forfait, communiquée avant souscription conformément à l'article L.521-2 du Code des assurances et à la recommandation ACPR 2024-R-01. ORIAS n°26003943, sous contrôle de l'ACPR.",
    comprend: [
      "Recueil des besoins via formulaire en ligne (horodaté, archivé dans l'espace client)",
      "Audit des contrats existants et identification des lacunes ou doublons",
      "Comparaison des offres du marché dans les catégories couvertes (ORIAS n°26003943)",
      "Rapport de conseil écrit, documenté et motivé — conforme à l'article L.521-4 du Code des assurances (DDA)",
      "Archivage du dossier complet dans l'espace client (formulaire + facture + rapport)",
      "Accompagnement en cas de sinistre ou d'insatisfaction vis-à-vis de l'assureur",
      "Suivi annuel pour les contrats actifs",
    ],
    tarif: "Forfait conseil : 90 € (particuliers) · 150 € (professionnels, associations) · Commissions assureurs séparées, communiquées avant souscription (art. L.521-2 Code des assurances)",
    lien: "/conseil-assurances",
    disponible: true,
    cta: "En savoir plus",
  },
]

export default function Services() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        {/* BREADCRUMB */}
        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Services</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.05em'}}>
              NOS SERVICES
            </span>
            <h1 style={{color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px', lineHeight: '1.3', maxWidth: '620px'}}>
              Une offre complète de services juridiques, formalistes et d'assurances.
            </h1>
            <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: '1.8', margin: '0 0 28px', maxWidth: '580px'}}>
              Le Cabinet Cholez-Pagotto accompagne particuliers, professionnels, associations et structures ESS dans la compréhension de leurs droits, la sécurisation de leurs activités et la réalisation de leurs formalités, à distance, avec rigueur et sans jargon.
            </p>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
              {['Juriste', 'Formaliste membre du CRFF', 'ORIAS 26003943 · Conseil en assurances', '100% distanciel'].map((tag, i) => (
                <span key={i} style={{background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px'}}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem'}}>

          {services.map((s, i) => (
            <article key={s.id} id={s.id} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', overflow: 'hidden'}}>

              {/* EN-TÊTE SERVICE */}
              <div style={{background: '#f8fafc', borderBottom: '1px solid #e5e7eb', padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    {s.icon}
                  </div>
                  <div>
                    <span style={{display: 'block', color: '#9ca3af', fontSize: '10px', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '2px'}}>{s.badge}</span>
                    <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: 0}}>{s.titre}</h2>
                  </div>
                </div>
                <a
                  href={s.lien}
                  style={{display: 'flex', alignItems: 'center', gap: '6px', background: '#0f2d6e', color: 'white', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', flexShrink: 0}}
                >
                  {s.cta} <ArrowRight size={13} strokeWidth={2} />
                </a>
              </div>

              {/* CORPS */}
              <div style={{padding: '1.75rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>

                {/* COLONNE GAUCHE */}
                <div>
                  <p style={{color: '#1a4fba', fontSize: '14px', fontWeight: '600', fontStyle: 'italic', margin: '0 0 14px', lineHeight: '1.5'}}>{s.accroche}</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: '0 0 16px'}}>{s.description}</p>
                  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <span style={{color: '#6b7280', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em'}}>Pour qui :</span>
                    <span style={{color: '#374151', fontSize: '12px'}}>{s.pourQui}</span>
                  </div>
                  <div style={{marginTop: '12px', background: '#f8fafc', borderRadius: '8px', padding: '10px 14px', display: 'flex', gap: '8px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
                    <span style={{color: '#6b7280', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0, marginTop: '1px'}}>Tarif :</span>
                    <span style={{color: '#0f2d6e', fontSize: '12px', fontWeight: '600'}}>{s.tarif}</span>
                    {s.id === 'information-droits' && (
                      <a href="/tarifs" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'underline', marginLeft: '4px'}}>Voir les tarifs complets →</a>
                    )}
                  </div>
                </div>

                {/* COLONNE DROITE */}
                <div>
                  <p style={{color: '#6b7280', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 12px'}}>Ce service comprend notamment</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    {s.comprend.map((item, j) => (
                      <div key={j} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                        <div style={{width: '5px', height: '5px', borderRadius: '50%', background: '#1a4fba', flexShrink: 0, marginTop: '6px'}} />
                        <span style={{color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}

          {/* CTA GLOBAL */}
          <div style={{background: '#0f2d6e', borderRadius: '14px', padding: '2.5rem', textAlign: 'center'}}>
            <p style={{color: 'white', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 10px'}}>Vous ne savez pas par où commencer ?</p>
            <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '14px', margin: '0 0 24px', lineHeight: '1.7', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto'}}>
              Décrivez-nous votre situation en quelques lignes. Nous vous orientons vers le service adapté, sans engagement.
            </p>
            <a href="/contact" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '13px 32px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none'}}>
              Nous contacter →
            </a>
          </div>

          {/* NOTE LÉGALE */}
          <p style={{color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', textAlign: 'center', maxWidth: '700px', margin: '0 auto'}}>
            Cabinet Cholez-Pagotto · Juriste-Formaliste · Formaliste membre du CRFF (Conseil Représentatif des Formalistes de France) · Intermédiaire en assurances immatriculé à l'ORIAS n°26003943 · Sous contrôle de l'ACPR · Les services d'information juridique sont proposés au sens de la loi n°71-1130 du 31 décembre 1971 et ne constituent pas des consultations juridiques personnalisées.
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}