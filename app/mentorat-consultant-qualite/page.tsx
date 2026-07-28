// app/mentorat-consultant-qualite/page.tsx
// Cabinet Cholez-Pagotto - Mentorat consultant qualite
// Page publique de presentation de l'offre de mentorat individuel, a la carte,
// pour devenir consultant en demarche qualite (montage de dossiers Qualiopi).
// Positionnement strict : transfert de savoir-faire metier, mentoring d'affaires,
// licence d'outils. N'est pas une action de formation professionnelle (le cabinet
// n'est titulaire ni d'un numero de formateur ni de la certification Qualiopi).

import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import {
  ChevronRight, ArrowRight, Compass, FolderOpen, Users, RefreshCw,
  ShieldCheck, Calendar, Sparkles, ScrollText, FileCheck2, Scale,
  CheckCircle, XCircle
} from 'lucide-react'

// Date de la prochaine session de demarrage, places restantes et prix affiche,
// mis a jour manuellement d'une session a l'autre.
const PROCHAINE_SESSION = '21 septembre 2026'
const PLACES_RESTANTES = 3
const PRIX_NET = '1 990,00'

export const metadata = {
  title: 'Mentorat consultant Qualiopi · Cabinet Cholez-Pagotto',
  description: `Un accompagnement individuel et à la carte pour devenir consultant en démarche qualité : transfert de méthodologie, boîte à outils sous licence, montage encadré d'un dossier Qualiopi fictif. Prochaine session : ${PROCHAINE_SESSION}.`,
  alternates: { canonical: 'https://cholez-pagotto.fr/mentorat-consultant-qualite' },
}

const PROFILS_TYPES = [
  'Juriste ou consultant en reconversion',
  'Ancien auditeur ou évaluateur qualité',
  'Organisme de formation cherchant à diversifier son offre',
  'Indépendant du conseil RH ou qualité',
  'Consultant indépendant',
  'Cabinet de gestion administrative',
  "Formateur métier de l'animation",
  'Secrétaire administrative',
  "Agent d'accueil",
  'Traductrice',
]

const VOLETS = [
  {
    icone: Compass,
    couleur: '#0f2d6e',
    titre: 'Décryptage et posture',
    sousTitre: 'Le transfert de méthodologie',
    texte: "Des sessions de travail conjointes pour décortiquer les 32 indicateurs du Référentiel National Qualité, non pas côté apprenant mais côté évaluateur : il s'agit d'apprendre à apprécier la conformité d'un processus, pas à le suivre. Vous travaillez la lecture croisée des exigences légales et des attentes concrètes des auditeurs, la vérification des prérequis administratifs indispensables en amont (contrôle du numéro de déclaration d'activité NDA, conformité du Bilan Pédagogique et Financier BPF), la posture du consultant qui mène un audit diagnostic chez son futur client, et l'identification des non-conformités. L'analyse couvre aussi les pièges juridiques et administratifs les plus fréquents rencontrés par les centres de formation.",
    livrable: "Votre manuel opératoire du consultant : une feuille de route d'intervention prête à l'emploi.",
  },
  {
    icone: FolderOpen,
    couleur: '#1a4fba',
    titre: 'La boîte à outils du consultant',
    sousTitre: "L'ingénierie documentaire",
    texte: "Mise à disposition d'une architecture documentaire complète et paramétrable, sous licence d'utilisation : règlements intérieurs, conventions, grilles d'évaluation, formulaires de recueil des besoins, registres de sous-traitance, documents de conformité RGPD adaptés à l'activité de formation. L'ensemble est déposé dans un espace privé dédié, organisé par rubriques, que vous pouvez cloner et adapter comme base pour vos propres clients.",
    livrable: null,
  },
  {
    icone: Users,
    couleur: '#7c3aed',
    titre: 'Le co-pilotage de votre première mission',
    sousTitre: 'La supervision en back-office',
    texte: "Vous signez avec votre premier centre de formation ; nous n'intervenons jamais face à votre client final, vous restez son unique interlocuteur. Des points de supervision sont prévus à chaque étape clé : après votre diagnostic, lors de la rédaction des preuves, avant l'audit blanc, mais aussi sur la posture à adopter le jour de l'audit officiel (rôle du consultant pendant l'évaluation) et sur la gestion de l'après-visite (analyse du rapport de l'auditeur certificateur, rédaction du plan d'actions correctives et levée des non-conformités mineures ou majeures dans les délais impartis). Vous apprenez par la pratique, sur un dossier réel, sécurisé par un contrôle d'expertise en arrière-plan.",
    livrable: null,
  },
  {
    icone: RefreshCw,
    couleur: '#065f46',
    titre: 'Veille et maintien des outils',
    sousTitre: 'Le support juridique et qualité',
    texte: "Le cadre de la formation professionnelle évolue en continu. Vous bénéficiez d'une mise à jour des trames documentaires au fil des évolutions légales, de la jurisprudence et des nouvelles exigences de France Compétences, ainsi que d'un crédit d'heures mensuel pour vos questions complexes sur des cas clients spécifiques.",
    livrable: null,
    option: true,
  },
]

const HORS_PERIMETRE = [
  {
    q: 'Cet accompagnement couvre-t-il le marketing et le développement commercial de mon activité ?',
    a: "Non. L'offre encadre la création technique d'une offre de services, mais n'inclut pas la stratégie d'acquisition. Vous ne repartirez pas avec une méthode pour prospecter des centres de formation, structurer votre modèle tarifaire, construire votre image de marque ou élaborer votre argumentaire commercial.",
  },
  {
    q: "Vais-je apprendre l'ingénierie pédagogique ou les techniques d'animation ?",
    a: "Non. Le transfert de méthodologie décortique les indicateurs du Référentiel National Qualité strictement côté évaluateur : apprécier la conformité d'un processus. Vous n'y apprendrez ni les sciences de l'éducation, ni la construction de scénarios pédagogiques, ni les techniques d'animation. Le prisme reste fixé sur le contrôle de la preuve légale et la rigueur documentaire : ce qui compte pour l'obtention de Qualiopi, les points de vigilance et les erreurs à éviter, non le métier de formateur en lui-même.",
  },
  {
    q: 'Apprend-on à structurer juridiquement, administrativement et financièrement mon propre cabinet ?',
    a: "Non. Le mentoring d'affaires porte sur le métier de consultant Qualiopi, pas sur la gestion d'entreprise classique. Le choix de votre statut juridique, la tenue de votre comptabilité ou votre immatriculation ne font pas partie de cet accompagnement. Ces démarches relèvent de l'offre dédiée du cabinet : création d'entreprise et accompagnement des professionnels.",
  },
  {
    q: "L'accompagnement inclut-il le déploiement d'outils informatiques (logiciel de gestion, plateforme e-learning) ?",
    a: "Non. Vous disposez d'une architecture documentaire complète et paramétrable, mais cet accompagnement ne porte pas sur l'installation ou le paramétrage d'un logiciel de gestion de la formation ni d'une plateforme e-learning chez vos futurs clients. Il s'arrête à la logique de la donnée documentaire et à sa mise en conformité.",
  },
  {
    q: 'Cela me qualifie-t-il comme auditeur certificateur officiel ?',
    a: "Non. Le transfert de méthodologie vous apprend à mener un audit diagnostic pour préparer un client. Cela ne vous qualifie en aucun cas pour agir en tant qu'auditeur officiel mandaté par un organisme certificateur : vous conservez une stricte posture de consultant-préparateur.",
  },
  {
    q: "L'accompagnement couvre-t-il la gestion des non-conformités après l'audit officiel ?",
    a: "Oui, via le volet de supervision en back-office (volet 3). Vous apprenez à analyser le rapport d'audit de votre client et à structurer le plan de correction pour lever les éventuelles non-conformités, mais vous restez seul maître de la relation avec votre client lors de cette phase finale.",
  },
]

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://cholez-pagotto.fr/mentorat-consultant-qualite#service',
      name: 'Mentorat consultant Qualiopi - Cabinet Cholez-Pagotto',
      description: "Accompagnement individuel et à la carte pour devenir consultant en démarche qualité : transfert de méthodologie sur le Référentiel National Qualité, boîte à outils documentaire sous licence, co-pilotage du montage d'un dossier Qualiopi réel.",
      provider: {
        '@type': 'LegalService',
        '@id': 'https://cholez-pagotto.fr/#cabinet',
        name: 'Cabinet Cholez-Pagotto',
        url: 'https://cholez-pagotto.fr',
      },
      serviceType: "Mentoring d'affaires et transfert de savoir-faire métier",
      areaServed: { '@type': 'Country', name: 'France' },
      url: 'https://cholez-pagotto.fr/mentorat-consultant-qualite',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://cholez-pagotto.fr/mentorat-consultant-qualite#faq',
      mainEntity: HORS_PERIMETRE.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://cholez-pagotto.fr/mentorat-consultant-qualite#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://cholez-pagotto.fr' },
        { '@type': 'ListItem', position: 2, name: 'Mentorat consultant Qualiopi', item: 'https://cholez-pagotto.fr/mentorat-consultant-qualite' },
      ],
    },
  ],
}

export default function MentoratConsultantQualite() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: 500 }}>Mentorat consultant Qualiopi</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>
              ACCOMPAGNEMENT INDIVIDUEL · À LA CARTE
            </span>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 700, margin: '0 0 16px', lineHeight: 1.3, maxWidth: '760px' }}>
              Mentorat consultant Qualiopi
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: 1.8, margin: '0 0 28px', maxWidth: '720px' }}>
              Devenez consultant en démarche qualité, spécialisé Qualiopi, BPF (Bilans Pédagogiques et Financiers), NDA, auprès de vos futurs clients (organismes de formation, formateurs indépendants, CFA...) : un transfert de savoir-faire métier, un mentoring d&apos;affaires et une boîte à outils sous licence, construits selon votre profil, votre parcours et votre expérience du secteur. Aucun programme standardisé : le contenu et le rythme s&apos;ajustent à vous.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Échanger sur mon projet <ArrowRight size={16} />
              </a>
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Transfert de savoir-faire métier', "Mentoring d'affaires", "Licence d'outils", 'Convention de mentorat'].map((tag) => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3.5rem 2rem' }}>

          {/* PRIX EN EVIDENCE */}
          <section style={{ background: 'white', border: '2px solid #d4a017', borderRadius: '14px', padding: '1.75rem', marginBottom: '2rem', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <p style={{ margin: '0 0 6px', fontSize: '11px', fontWeight: 700, color: '#b8860b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Votre investissement</p>
              <p style={{ margin: 0, fontSize: '2rem', fontWeight: 700, color: '#0f2d6e', lineHeight: 1 }}>
                {PRIX_NET}&nbsp;€ <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#6b7280' }}>net</span>
              </p>
              <p style={{ margin: '8px 0 0', fontSize: '12.5px', color: '#6b7280', lineHeight: 1.6 }}>
                Pour les volets 1 à 3 du programme. Le volet 4 (veille et maintien des outils) est proposé en option, sur devis.
              </p>
            </div>
            <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#0f2d6e', color: 'white', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', flexShrink: 0 }}>
              Échanger sur mon projet <ArrowRight size={16} />
            </a>
          </section>

          {/* PROCHAINE SESSION */}
          <section style={{ background: '#fdf6e3', border: '1px solid #e9d28a', borderRadius: '12px', padding: '1.5rem 1.75rem', marginBottom: '2rem', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <Calendar size={20} color="#b8860b" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <p style={{ color: '#6b4f14', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>
              <strong>Prochaine session d&apos;accompagnement : démarrage le {PROCHAINE_SESSION}</strong>{' '}
              <span style={{ display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '11px', fontWeight: 700, padding: '2px 10px', borderRadius: '10px', marginLeft: '4px' }}>
                {PLACES_RESTANTES} places restantes
              </span>
              <br />
              L&apos;accompagnement restant individuel, le rythme des séances qui suivent ce démarrage se cale ensuite sur votre disponibilité et votre progression.
            </p>
          </section>

          {/* CADRE DE L'INTERVENTION */}
          <section style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem 1.75rem', marginBottom: '3.5rem', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <ShieldCheck size={20} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: 700, margin: '0 0 8px' }}>Le cadre de l&apos;intervention</h2>
              <p style={{ color: '#374151', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>
                Cet accompagnement relève du transfert de savoir-faire métier, du mentoring d&apos;affaires et de la licence d&apos;outils, au service du développement organisationnel de votre activité de conseil. Il ne constitue pas une action de formation professionnelle. Vous restez seul responsable, vis-à-vis de vos propres clients, de l&apos;obtention de leur certification.
              </p>
            </div>
          </section>

          {/* PROFILS ACCOMPAGNES */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={18} color="#c8a84b" strokeWidth={1.5} />
              <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Un parcours construit avec vous</h2>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: '0 0 1.5rem', maxWidth: '760px' }}>
              Il n&apos;existe pas de programme standardisé : le contenu, le rythme et les priorités de chaque volet sont ajustés à votre profil de départ, votre parcours professionnel et votre expérience éventuelle du secteur de la formation. Lors du premier échange à l&apos;occasion de l&apos;étude de votre dossier, avant démarrage de l&apos;accompagnement, un parcours est conçu sur la base de votre pratique actuelle, de vos expériences, de vos connaissances du domaine de la formation, que le cabinet analyse. Le démarrage à proprement parler peut donc débuter de suite ou attendre des ajustements de notre part pour que cet accompagnement soit adapté, sur mesure. Il n&apos;y a pas de minima de compétences à avoir, le mentorat servira aussi à lever les incompréhensions éventuelles. Les profils suivants illustrent par l&apos;exemple la diversité des points de départ déjà accompagnés.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PROFILS_TYPES.map((p) => (
                <span key={p} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '4px 12px', fontSize: '12px', color: '#374151', fontWeight: 500 }}>
                  <CheckCircle size={12} color="#16a34a" /> {p}
                </span>
              ))}
            </div>
            <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: 700, lineHeight: 1.7, margin: '1.25rem 0 0' }}>
              Et, vous, serez-vous l&apos;un des prochains profils en reconversion ou d&apos;entrepreneurs agrandissant leurs offres ?
            </p>
          </section>

          {/* POURQUOI CET ACCOMPAGNEMENT */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px' }}>Pourquoi cet accompagnement ? Qu&apos;apporte-t-il ?</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: '0 0 2rem', maxWidth: '760px' }}>
              Cet accompagnement vous fait acquérir des compétences spécifiques, centrées sur l&apos;ingénierie de la conformité, l&apos;audit et la structuration documentaire.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem' }}>
                <h3 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: 700, margin: '0 0 12px' }}>1. Une maîtrise de Qualiopi et des audits, côté évaluateur</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Vision inversée du Référentiel National Qualité (RNQ).</strong> Vous ne vous contentez pas de restituer la théorie : vous savez décortiquer les 32 indicateurs du RNQ en adoptant la posture exacte d&apos;un auditeur certificateur. Vous savez ce qui est attendu, pourquoi, et comment évaluer la conformité d&apos;un processus.
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Réalisation d&apos;audits diagnostics.</strong> Vous êtes en mesure de réaliser un état des lieux initial rigoureux d&apos;une structure (indépendant, OF ou CFA) pour identifier précisément les écarts, les risques et les non-conformités par rapport au référentiel.
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Préparation aux audits, y compris l&apos;audit blanc.</strong> Vous structurez la démarche de préparation pour mettre en conditions réelles d&apos;évaluation, sécurisant ainsi la présentation des preuves le jour J.
                  </p>
                </div>
              </div>

              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem' }}>
                <h3 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: 700, margin: '0 0 12px' }}>2. Une ingénierie documentaire et conformité</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Une architecture documentaire prête à l&apos;emploi.</strong> Vous déployez une boîte à outils rigoureuse et paramétrée pour la structure accompagnée (indépendant, OF, CFA) : règlements intérieurs et conventions de formation, grilles d&apos;évaluation et formulaires de recueil des besoins, registres obligatoires (notamment de sous-traitance), documents de conformité liés au RGPD adaptés à l&apos;activité de formation.
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Construction de dossiers.</strong> Vous savez monter pas à pas un dossier Qualiopi, en évitant les erreurs méthodologiques et en corrigeant les fragilités documentaires au fur et à mesure de l&apos;avancement.
                  </p>
                </div>
              </div>

              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem' }}>
                <h3 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: 700, margin: '0 0 12px' }}>3. Une approche de la sécurisation juridique et administrative</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Maîtrise des pièges réglementaires.</strong> Grâce au transfert de méthodologie, vous identifiez et prévenez les pièges juridiques et administratifs les plus fréquents auxquels sont confrontés les centres de formation et les formateurs indépendants.
                  </p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>
                    <strong>Veille et actualisation.</strong> Vous vous appuyez sur des outils et des méthodes mis à jour en continu face aux évolutions légales, à la jurisprudence et aux exigences de France Compétences, pour garantir la pérennité de la conformité de vos clients.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* PROGRAMME COMPLET */}
          <section style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px' }}>L&apos;accompagnement et le mentorat</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: '0 0 2rem', maxWidth: '720px' }}>
              Quatre volets structurent l&apos;accompagnement, dans un ordre et à un rythme adaptés à votre situation.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {VOLETS.map((v, i) => {
                const Icone = v.icone
                return (
                  <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem', borderTop: `4px solid ${v.couleur}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 10, background: v.couleur + '18', color: v.couleur, flexShrink: 0 }}>
                          <Icone size={19} />
                        </span>
                        <div>
                          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: v.couleur, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Volet {i + 1} · {v.sousTitre}</p>
                          <h3 style={{ margin: '2px 0 0', fontSize: '1.05rem', color: '#0f2d6e', fontWeight: 700 }}>{v.titre}</h3>
                        </div>
                      </div>
                      {v.option && (
                        <span style={{ background: '#f3f4f6', color: '#374151', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 12, border: '1px solid #d1d5db', whiteSpace: 'nowrap', flexShrink: 0 }}>
                          Option · sur devis
                        </span>
                      )}
                    </div>
                    <p style={{ margin: 0, fontSize: '13px', color: '#374151', lineHeight: 1.8 }}>{v.texte}</p>
                    {v.livrable && (
                      <p style={{ margin: '14px 0 0', fontSize: '12.5px', color: '#1e3a5f', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '10px 14px', lineHeight: 1.6 }}>
                        <strong>Livrable :</strong> {v.livrable}
                      </p>
                    )}
                    {v.option && (
                      <p style={{ margin: '10px 0 0', fontSize: '11.5px', color: '#6b7280', fontStyle: 'italic' }}>
                        Ce volet n&apos;est pas inclus dans le prix de base : il est proposé en complément, sur devis, selon vos besoins de suivi dans la durée.
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          {/* EXERCICE PRATIQUE CENTRAL */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.75rem', marginBottom: '2rem', display: 'flex', gap: '16px', alignItems: 'flex-start', borderLeft: '4px solid #7c3aed' }}>
            <FileCheck2 size={26} color="#7c3aed" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 10px' }}>Le cœur de l&apos;accompagnement : un dossier Qualiopi</h2>
              <p style={{ color: '#374151', fontSize: '13.5px', lineHeight: 1.8, margin: 0 }}>
                Le montage d&apos;un dossier Qualiopi, pour un centre de formation en cours de création ou existant mais n&apos;ayant pas encore Qualiopi, ou un formateur indépendant montant son propre OF (Organisme de Formation), un CFA (Centre de Formation des Apprentis) nouvellement créé ou ayant perdu sa certification, un indépendant qui se lance dans les Bilans de compétences, un professionnel de l&apos;accompagnement souhaitant devenir Architecte Accompagnateur de Parcours (AAP) pour les VAE (Validation des acquis de l&apos;expérience)... Autant de situations, autant d&apos;approches. Le montage d&apos;un dossier Qualiopi fictif constitue la plus grande part du temps consacré à votre accompagnement. Ce n&apos;est pas un exercice théorique : chaque étape (diagnostic initial, constitution des preuves, préparation de l&apos;audit blanc) est suivie individuellement, et toute erreur d&apos;apprentissage est corrigée avec vous avant de poursuivre, plutôt que de vous laisser avancer seul sur une base fragile.
              </p>
            </div>
          </section>

          {/* AU-DELA DE LA CERTIFICATION INITIALE */}
          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.75rem', marginBottom: '3.5rem', display: 'flex', gap: '16px', alignItems: 'flex-start', borderLeft: '4px solid #065f46' }}>
            <ScrollText size={26} color="#065f46" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ color: '#0f2d6e', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 10px' }}>Un socle complet, au-delà de la seule certification</h2>
              <p style={{ color: '#374151', fontSize: '13.5px', lineHeight: 1.8, margin: 0 }}>
                L&apos;accompagnement traite aussi les Bilans Pédagogiques et Financiers (BPF), les démarches d&apos;obtention d&apos;un numéro de déclaration d&apos;activité (NDA), et les différents types d&apos;audits (audit initial, audit de surveillance, audit de renouvellement). L&apos;objectif est de vous outiller pour être en capacité d&apos;accompagner vos cibles finales sur l&apos;ensemble de ces sujets, et pas seulement sur l&apos;obtention initiale de Qualiopi : vous pourrez ainsi exercer comme prestataire de gestion Qualiopi, notamment sur les BPF, ou sur toute autre mission d&apos;accompagnement ou de gestion administrative liée à la formation.
              </p>
            </div>
          </section>

          {/* CONVENTION DE MENTORAT */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <ScrollText size={18} color="#1a4fba" strokeWidth={1.5} />
              <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Le cadre contractuel : votre convention de mentorat</h2>
            </div>
            <p style={{ color: '#374151', fontSize: '13.5px', lineHeight: 1.8, margin: '0 0 1rem', maxWidth: '760px' }}>
              Votre accompagnement est encadré par une convention de mentorat, parfois intitulée contrat de prestation de conseil et d&apos;assistance à la création d&apos;une offre de services, ou contrat de mentoring et de licence d&apos;outils. Elle précise :
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {[
                { t: "L'objet de la mission", d: "Transfert de savoir-faire métier, mentoring d'affaires, licence d'utilisation des outils fournis." },
                { t: 'Le rythme et la durée', d: 'Calés sur votre profil et votre progression, sans programme standardisé imposé.' },
                { t: 'La confidentialité', d: 'Un engagement réciproque sur les informations échangées pendant l\u2019accompagnement.' },
                { t: 'Le partage des responsabilités', d: 'Vous restez seul responsable, vis-à-vis de vos propres clients, de l\u2019obtention de leur certification Qualiopi.' },
              ].map((item) => (
                <div key={item.t} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 10, padding: '1.1rem 1.25rem' }}>
                  <h3 style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: 700, margin: '0 0 4px' }}>{item.t}</h3>
                  <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: 1.6, margin: 0 }}>{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ACCES A L'OFFRE JURIDIQUE DU CABINET */}
          <section style={{ background: '#eef1fa', border: '1px solid #d3daf0', borderRadius: '12px', padding: '1.5rem 1.75rem', marginBottom: '3.5rem', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <Scale size={20} color="#0f2d6e" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ color: '#0f2d6e', fontSize: '1rem', fontWeight: 700, margin: '0 0 8px' }}>Un accès qui dépasse la durée de l&apos;accompagnement</h2>
              <p style={{ color: '#374151', fontSize: '13px', lineHeight: 1.8, margin: 0 }}>
                Pendant toute la durée de votre mentorat, et bien au-delà, vous bénéficiez de l&apos;accès à l&apos;offre juridique du cabinet : <a href="/catalogue" style={{ color: '#1a4fba', fontWeight: 600 }}>bibliothèque de documents</a>, service <a href="/information-sur-vos-droits" style={{ color: '#1a4fba', fontWeight: 600 }}>information sur vos droits</a>, veille réglementaire. Cet accès continue de vous accompagner lorsque vous lancerez votre activité de consultant et monterez vous-même des dossiers Qualiopi pour vos clients, centres de formation et formateurs indépendants.
              </p>
            </div>
          </section>

          {/* HORS PERIMETRE */}
          <section style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <XCircle size={18} color="#9ca3af" strokeWidth={1.5} />
              <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>Ce que cet accompagnement ne couvre pas</h2>
            </div>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.7, margin: '0 0 1.5rem', maxWidth: '760px' }}>
              Un positionnement clair suppose des limites claires. Voici ce qui reste hors du périmètre de cette offre.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '860px' }}>
              {HORS_PERIMETRE.map((item, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <summary style={{ fontWeight: 600, color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span>{item.q}</span>
                    <span style={{ color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>＋</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: 1.75, marginTop: '12px', marginBottom: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA FINAL */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, margin: '0 0 10px' }}>Un projet de reconversion vers le conseil qualité ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: 1.7, margin: '0 auto 24px', maxWidth: '560px' }}>
              Décrivez-nous votre profil, votre parcours et vos objectifs. Le cabinet revient vers vous pour construire, avec vous, l&apos;accompagnement adapté à votre situation.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>
                Échanger sur mon projet <ArrowRight size={16} />
              </a>
              <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                Voir tous les services
              </a>
            </div>
          </section>

        </div>
      </main>
      <FooterMinimal />
    </>
  )
}
