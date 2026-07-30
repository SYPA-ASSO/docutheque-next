import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Loi de lutte contre les fraudes sociales et fiscales : toutes les mesures RH et paie à connaître · Blog Cabinet Cholez-Pagotto`,
  description: `IJSS, contre-visite médicale, CPF, C2P, flagrance sociale, DUERP : la loi du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales bouleverse les obligations des employeurs. Décryptage complet, article par article.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/loi-fraudes-sociales-fiscales-2026-mesures-rh-paie',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-fraudes-sociales-fiscales-2026-rh-paie.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-fraudes-sociales-fiscales-2026-rh-paie.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Loi de lutte contre les fraudes sociales et fiscales : toutes les mesures RH et paie à connaître",
      "description": "IJSS, contre-visite médicale, CPF, C2P, flagrance sociale, DUERP : la loi du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales bouleverse les obligations des employeurs. Décryptage complet, article par article.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-fraudes-sociales-fiscales-2026-rh-paie.webp",
      "datePublished": "2026-07-13",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/loi-fraudes-sociales-fiscales-2026-mesures-rh-paie",
      "keywords": ["Loi fraudes sociales fiscales", "IJSS", "Flagrance sociale", "DUERP", "CPF", "C2P", "Travail dissimulé", "Paie"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Un employeur doit-il maintenir le salaire d'un salarié dont la fraude aux IJSS est avérée ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Depuis le 27 juin 2026, lorsque la caisse primaire d'assurance maladie informe l'employeur qu'une fraude aux indemnités journalières est avérée, celui-ci est dispensé de son obligation de maintien de salaire, que l'arrêt relève de la maladie ou d'un accident du travail ou d'une maladie professionnelle."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la procédure de flagrance sociale ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est une nouvelle procédure, issue de l'article 93 de la loi du 25 juin 2026, qui permet à l'Urssaf, lorsqu'un procès-verbal de travail dissimulé fait craindre un risque pour le recouvrement, de prendre des mesures conservatoires exécutoires sans passer par un juge. Elle entrera en vigueur au plus tard le 1er janvier 2027."
          }
        },
        {
          "@type": "Question",
          "name": "Le DUERP est-il désormais sanctionné plus lourdement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La loi introduit une amende administrative spécifique, prononcée directement par la DREETS, pouvant atteindre 4 000 euros par salarié concerné, en plus de l'amende pénale déjà existante, en cas d'absence ou de défaut de mise à jour du document unique d'évaluation des risques professionnels."
          }
        },
        {
          "@type": "Question",
          "name": "Un salarié en arrêt de travail doit-il signaler un changement d'adresse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La loi impose désormais au salarié qui perçoit des indemnités journalières d'informer sans délai l'Assurance maladie de toute adresse différente de celle figurant sur son arrêt de travail, afin de permettre la réalisation des contrôles."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Loi fraudes sociales et fiscales" }
      ]
    }
  ]
}

export default function ArticleLoiFraudesSocialesFiscales2026() {
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
            <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Loi fraudes sociales et fiscales</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT SOCIAL</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>LOI DU 25 JUIN 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Loi de lutte contre les fraudes sociales et fiscales : toutes les mesures RH et paie à connaître</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 13 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 17 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-fraudes-sociales-fiscales-2026-rh-paie.webp"
                alt="Loi de lutte contre les fraudes sociales et fiscales : toutes les mesures RH et paie à connaître"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Depuis le 27 juin 2026, lorsque la caisse primaire d'assurance maladie informe l'employeur qu'une fraude aux indemnités journalières est avérée, celui-ci est dispensé de son obligation de…</li>
                <li>La procédure de flagrance sociale, issue de l'article 93 de la loi du 25 juin 2026, permet à l'Urssaf de prendre des mesures conservatoires exécutoires sans juge lorsqu'un procès-verbal de travail dissimulé fait craindre un risque pour le recouvrement.</li>
                <li>La loi introduit une amende administrative spécifique, prononcée directement par la DREETS, pouvant atteindre 4 000 euros par salarié concerné, en plus de l'amende pénale déjà existante, en cas…</li>
                <li>La loi impose désormais au salarié qui perçoit des indemnités journalières d'informer sans délai l'Assurance maladie de toute adresse différente de celle figurant sur son arrêt de travail, afin…</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#ijss" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Fraude aux IJSS : transmission d'informations et dispense de maintien de salaire</a></li>
                <li><a href="#controles-medicaux" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Contrôles médicaux : ce qui change</a></li>
                <li><a href="#cpf" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. CPF et formation professionnelle : de nouveaux garde-fous</a></li>
                <li><a href="#organismes-formation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Des contrôles accrus des organismes de formation</a></li>
                <li><a href="#c2p" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Compte professionnel de prévention : des sanctions renforcées</a></li>
                <li><a href="#travail-dissimule" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Travail dissimulé : la flagrance sociale</a></li>
                <li><a href="#duerp" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Le DUERP désormais sanctionné par une amende administrative</a></li>
                <li><a href="#diverses" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Mesures diverses : sous-traitance et VTC</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Publiée au Journal officiel du 26 juin 2026, la loi n°&nbsp;2026-534 relative à la lutte contre les fraudes sociales et fiscales a été validée pour l'essentiel par le Conseil constitutionnel (décision n°&nbsp;2026-904 DC du 18 juin 2026). Sauf dispositions renvoyées à un décret ou assorties d'une entrée en vigueur différée, ses mesures s'appliquent depuis le 27 juin 2026.</p>
                <p style={{marginBottom: '1rem'}}>Pour les employeurs et les services RH, ce texte ne se limite pas à un simple renforcement des contrôles administratifs : il touche directement la paie (maintien de salaire, IJSS), la formation professionnelle, la prévention des risques et la sous-traitance. Voici, mesure par mesure, ce qu'il faut retenir.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}en cas de fraude avérée aux IJSS, l'employeur est dispensé du maintien de salaire ; le CPF ne peut plus financer une certification déjà obtenue ; une procédure de flagrance sociale accélère le recouvrement en cas de travail dissimulé ; et l'absence de DUERP expose désormais à une amende administrative pouvant atteindre 4 000 euros par salarié.
                  </p>
                </div>
              </section>

              <section id="ijss">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Fraude aux IJSS : transmission d'informations et dispense de maintien de salaire
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi facilite désormais la circulation de certaines informations entre la Sécurité sociale et l'employeur en cas de fraude aux indemnités journalières (articles 17, 20 et 21). Lorsqu'une fraude aux IJSS maladie ou aux IJSS accident du travail/maladie professionnelle est établie, la caisse primaire d'assurance maladie peut transmettre à l'employeur les éléments strictement nécessaires pour la caractériser, par un moyen permettant de s'assurer de leur bonne réception, à l'exclusion de l'intégralité du dossier médical du salarié. Cette transmission reste toutefois subordonnée à un décret d'application non encore paru à ce jour.</p>
                <p style={{marginBottom: '1rem'}}>Conséquence directe pour la paie : en cas de fraude avérée et une fois l'employeur informé, celui-ci est dispensé de son obligation de maintien de salaire prévue par le Code du travail, que l'arrêt relève de la maladie de droit commun ou d'un accident du travail. L'employeur devra ensuite communiquer ces mêmes informations aux organismes de prévoyance complémentaire concernés, afin d'éviter la poursuite d'un versement de prestations complémentaires devenu injustifié.</p>
                <p style={{marginBottom: '1rem'}}>La loi traite également le cas, différent, où les IJSS maladie sont suspendues parce que l'arrêt n'est plus médicalement justifié : si la CPAM en informe l'employeur, celui-ci devra à son tour avertir l'organisme de prévoyance, pour la même raison de cohérence entre les prestations versées.</p>
                <p style={{marginBottom: '1rem'}}>Autre nouveauté à noter côté salarié : celui qui perçoit des IJSS et ne réside pas à l'adresse figurant sur son arrêt de travail doit désormais en informer sans délai l'Assurance maladie, afin de permettre la réalisation des contrôles à l'adresse effective.</p>
                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#166534', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Impact direct sur votre paie.</strong>{' '}Ces nouvelles règles imposent de revoir, à chaque signalement de la CPAM, le calcul du maintien de salaire et la coordination avec l'organisme de prévoyance : un mauvais paramétrage expose à un trop-versé difficile à récupérer, ou à l'inverse à un manquement à l'obligation de transmission à la prévoyance. Le site dédié{' '}
                    <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{color: '#166534', fontWeight: '700', textDecoration: 'underline'}}>paie-et-dsn.fr</a>{' '}
                    du cabinet externalise l'établissement des bulletins de salaire et le suivi de ces situations de suspension ou de fraude, pour sécuriser ce point précis de votre paie.
                  </p>
                </div>
              </section>

              <section id="controles-medicaux">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Contrôles médicaux : ce qui change
                </h2>
                <p style={{marginBottom: '1rem'}}>Plusieurs précisions concernent les contrôles médicaux des arrêts de travail. En Alsace-Moselle, où le droit local impose un maintien de salaire distinct du régime général, l'employeur pourra désormais interrompre ce maintien lorsque la contre-visite médicale qu'il a diligentée conclut à l'absence de justification de l'arrêt, ou lorsque le contrôle est rendu impossible du fait du salarié (absence au domicile sans motif, refus de recevoir le médecin contrôleur).</p>
                <p style={{marginBottom: '1rem'}}>Un rééquilibrage est également introduit en faveur de l'employeur : lorsque le service du contrôle médical de la caisse ne suit pas les conclusions du médecin qu'il a mandaté pour la contre-visite, il devra désormais motiver sa décision par écrit, ce qui offre une base plus solide pour contester, le cas échéant, une suspension de contrôle jugée insuffisamment justifiée.</p>
                <p style={{marginBottom: '1rem'}}>Enfin, les arrêts prescrits par télémédecine sont davantage encadrés : sauf exceptions à préciser, un arrêt de travail ne pourra désormais être renouvelé qu'une seule fois à distance, ce qui limite les prolongations en cascade sans consultation physique.</p>
              </section>

              <section id="cpf">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. CPF et formation professionnelle : de nouveaux garde-fous
                </h2>
                <p style={{marginBottom: '1rem'}}>Le compte personnel de formation fait l'objet de deux restrictions nouvelles, destinées à éviter des financements sans réelle valeur ajoutée. D'une part, un titulaire ne pourra plus mobiliser ses droits pour financer une certification ou un bloc de compétences qu'il a déjà obtenu. D'autre part, lorsqu'une formation certifiante a été engagée, le CPF ne pourra pas être sollicité si le bénéficiaire ne se présente pas aux épreuves d'évaluation ou d'examen, sauf motif légitime, dont le contenu précis reste renvoyé à un décret.</p>
                <p style={{marginBottom: '1rem'}}>La Caisse des dépôts et consignations, gestionnaire du CPF, voit par ailleurs ses prérogatives de contrôle renforcées afin de mieux détecter et sanctionner les pratiques frauduleuses, dans un contexte où la fraude à la formation professionnelle reste un sujet de préoccupation récurrent pour les pouvoirs publics.</p>
              </section>

              <section id="organismes-formation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Des contrôles accrus des organismes de formation
                </h2>
                <p style={{marginBottom: '1rem'}}>Les acteurs qui financent ou accompagnent la formation professionnelle (OPCO, Caisse des dépôts, conseils départementaux, organismes de conseil en évolution professionnelle) pourront désormais partager davantage d'informations relatives aux fraudes détectées, selon des modalités renvoyées à un décret.</p>
                <p style={{marginBottom: '1rem'}}>Une mesure notable, et qui devrait faire parler d'elle une fois ses modalités précisées : les agents chargés des contrôles pourront utiliser une identité d'emprunt pour réaliser des vérifications sur les formations à distance ou accessibles en ligne, un dispositif étendu aux agents de la Caisse des dépôts dans le cadre du contrôle du CPF. Un décret doit encore préciser les conditions de ces contrôles sous identité d'emprunt.</p>
                <p style={{marginBottom: '1rem'}}>Les OPCO voient leur rôle renforcé : ils devront s'assurer non seulement de la réalisation effective des actions de formation, mais aussi de leur qualité et de leur adéquation financière, ce qui suppose un contrôle plus substantiel qu'une simple vérification de présence. France compétences bénéficie, de son côté, de nouveaux pouvoirs de contrôle sur pièces et peut, elle aussi, recourir à des identités d'emprunt.</p>
              </section>

              <section id="c2p">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Compte professionnel de prévention : des sanctions renforcées
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour lutter contre les déclarations frauduleuses relatives au compte professionnel de prévention (C2P), la loi durcit le régime des sanctions applicables aux entreprises : des pénalités financières nouvelles s'appliquent en cas d'agissements frauduleux, et les sanctions existantes pour déclarations inexactes sont renforcées, un décret devant venir en fixer les montants précis. Les agents de contrôle disposent en parallèle d'un droit de communication élargi pour faciliter leurs investigations.</p>
              </section>

              <section id="travail-dissimule">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Travail dissimulé : la flagrance sociale
                </h2>
                <p style={{marginBottom: '1rem'}}>La mesure la plus structurante de la loi en matière de travail dissimulé est la création d'une procédure de <strong>flagrance sociale</strong> (article 93), qui remplace l'actuel dispositif de mesures conservatoires. Lorsqu'un procès-verbal de travail dissimulé est établi et que la situation fait craindre un risque pour le recouvrement des sommes dues, l'agent de contrôle peut dresser un procès-verbal de flagrance sociale, qui évalue le montant des cotisations non payées, les majorations et pénalités applicables, ainsi que les réductions ou exonérations de cotisations remises en cause.</p>
                <p style={{marginBottom: '1rem'}}>Une fois ce procès-verbal notifié, l'Urssaf peut mettre en œuvre une mesure conservatoire immédiatement exécutoire, sans autorisation préalable du juge, et la loi supprime la possibilité, pour la personne contrôlée, de présenter des garanties suffisantes pour éviter cette mesure en amont. Elle conserve en revanche la faculté de solliciter une mainlevée auprès du directeur de l'organisme de recouvrement, en apportant des garanties de paiement, ou de saisir le juge, sans que cette contestation ne suspende automatiquement les mesures prises. Ce dispositif entrera en vigueur au plus tard le 1er janvier 2027.</p>
                <p style={{marginBottom: '1rem'}}>Dans le même esprit d'accélération, certaines contraintes délivrées à la suite d'infractions graves (travail dissimulé, marchandage, prêt illicite de main-d'œuvre, emploi d'un étranger non autorisé à travailler) deviennent immédiatement exécutoires à titre provisoire, sauf décision contraire du président du tribunal judiciaire.</p>
                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#166534', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le lien avec la fiabilité de la DSN.</strong>{' '}La flagrance sociale part toujours d'un contrôle qui révèle un écart entre l'activité réelle et ce qui a été déclaré : salarié non déclaré, heures travaillées non reportées sur le bulletin de paie, cotisations non versées. Une Déclaration Sociale Nominative exacte et à jour reste la meilleure protection contre ce type de procédure accélérée. Le site{' '}
                    <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{color: '#166534', fontWeight: '700', textDecoration: 'underline'}}>paie-et-dsn.fr</a>{' '}
                    du cabinet prend en charge l'établissement des bulletins de salaire et la production des DSN, pour limiter ce risque à la source.
                  </p>
                </div>
              </section>

              <section id="duerp">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Le DUERP désormais sanctionné par une amende administrative
                </h2>
                <p style={{marginBottom: '1rem'}}>L'article 48 de la loi modifie l'article L.&nbsp;8115-1 du Code du travail pour y intégrer, pour la première fois, le manquement au document unique d'évaluation des risques professionnels (DUERP). Concrètement, l'absence de DUERP ou le défaut de mise à jour peut désormais faire l'objet d'une amende administrative prononcée directement par la DREETS, sans passer par un juge, pouvant atteindre 4 000 euros par salarié concerné, portée à 8 000 euros par salarié en cas de récidive dans les deux ans. Cette amende administrative s'ajoute, sans s'y substituer, à l'amende pénale déjà existante (jusqu'à 7 500 euros pour une personne morale), les deux voies ne pouvant se cumuler pour les mêmes faits.</p>
                <p style={{marginBottom: '1rem'}}>Nous avons consacré à ce sujet un article dédié, qui détaille l'ensemble du régime applicable au DUERP (format, méthode, rôle du CSE, droits des salariés et valeur juridique en cas d'accident) : <a href="/blog/duerp-guide-pratique-employeur-cse-salaries" style={{color: '#1a4fba', textDecoration: 'underline'}}>DUERP, le guide pratique employeur, CSE et salariés</a>.</p>
              </section>

              <section id="diverses">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Mesures diverses : sous-traitance et VTC
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi renforce également les obligations de vigilance des maîtres d'ouvrage dans les chaînes de sous-traitance, afin de lutter contre le travail dissimulé qui s'y dissimule parfois derrière plusieurs niveaux de prestataires. Le secteur des véhicules de transport avec chauffeur (VTC) fait par ailleurs l'objet de dispositions spécifiques destinées à lutter contre certaines fraudes propres à ce secteur, dont le détail opérationnel reste, pour partie, renvoyé à des textes d'application.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sécuriser votre paie et vos DSN face à ces nouvelles obligations
                </h2>
                <p style={{marginBottom: '1rem'}}>Entre la dispense de maintien de salaire en cas de fraude IJSS, la fiabilité renforcée attendue de la DSN, et l'amende administrative désormais associée au DUERP, cette loi multiplie les points de vigilance concrets pour les services paie et RH.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin de sécuriser votre paie et vos déclarations sociales ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le site dédié du cabinet, paie-et-dsn.fr, externalise l'établissement de vos bulletins de salaire et la production de vos DSN, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>paie-et-dsn.fr</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Cette loi ne se contente pas d'ajouter des sanctions : elle redistribue certaines responsabilités entre organismes sociaux et employeurs, notamment sur la paie (maintien de salaire, transmission d'informations à la prévoyance) et sur la prévention (DUERP). Plusieurs mesures restent suspendues à des décrets d'application, en particulier sur le travail dissimulé et les contrôles sous identité d'emprunt : une vigilance sur les textes à paraître dans les prochains mois reste nécessaire pour en mesurer toute la portée pratique.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, JORF du 26 juin 2026</li>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026, articles 17, 20 et 21 (fraude aux IJSS, transmission d'informations, dispense de maintien de salaire)</li>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026, article 48 (amende administrative DUERP, modifiant l'article L.&nbsp;8115-1 du Code du travail)</li>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026, article 93 (procédure de flagrance sociale en matière de travail dissimulé)</li>
                  <li>Conseil constitutionnel, décision n°&nbsp;2026-904 DC du 18 juin 2026 (validation de la loi du 25 juin 2026)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Plusieurs dispositions de cette loi restent subordonnées à des décrets d'application non encore publiés à la date de rédaction ; pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un employeur doit-il maintenir le salaire d'un salarié dont la fraude aux IJSS est avérée ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Depuis le 27 juin 2026, lorsque la caisse primaire d'assurance maladie informe l'employeur qu'une fraude aux indemnités journalières est avérée, celui-ci est dispensé de son obligation de maintien de salaire, que l'arrêt relève de la maladie ou d'un accident du travail ou d'une maladie professionnelle.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la procédure de flagrance sociale ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est une nouvelle procédure, issue de l'article 93 de la loi du 25 juin 2026, qui permet à l'Urssaf, lorsqu'un procès-verbal de travail dissimulé fait craindre un risque pour le recouvrement, de prendre des mesures conservatoires exécutoires sans passer par un juge. Elle entrera en vigueur au plus tard le 1er janvier 2027.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le DUERP est-il désormais sanctionné plus lourdement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La loi introduit une amende administrative spécifique, prononcée directement par la DREETS, pouvant atteindre 4 000 euros par salarié concerné, en plus de l'amende pénale déjà existante, en cas d'absence ou de défaut de mise à jour du document unique d'évaluation des risques professionnels.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un salarié en arrêt de travail doit-il signaler un changement d'adresse ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La loi impose désormais au salarié qui perçoit des indemnités journalières d'informer sans délai l'Assurance maladie de toute adresse différente de celle figurant sur son arrêt de travail, afin de permettre la réalisation des contrôles.</p>
                  </details>
                </div>
              </section>
            </div>

          </article>

          {/* SIDEBAR */}
          <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px'}}>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>À propos de l'auteur</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                <div>
                  <p style={{color: '#374151', fontSize: '12px', fontWeight: '700', margin: '0 0 2px'}}>François CHOLEZ</p>
                  <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p>
                </div>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.
              </p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Expert auprès de collectifs francophones d'orientation juridique.
              </p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>

            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Paie et DSN</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Externalisation de la paie et des DSN sur notre site dédié.</p>
              <a href="https://paie-et-dsn.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                paie-et-dsn.fr →
              </a>
            </div>

            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                En savoir plus →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=Fraudes%20sociales" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Fraudes sociales</a>
                <a href="/blog?tag=IJSS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>IJSS</a>
                <a href="/blog?tag=Flagrance%20sociale" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Flagrance sociale</a>
                <a href="/blog?tag=DUERP" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>DUERP</a>
                <a href="/blog?tag=2026" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>2026</a>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              ← Retour au blog
            </a>

          </aside>

        </div>

        {/* CES ARTICLES PEUVENT AUSSI VOUS INTERESSER */}
        <section style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 3.5rem'}}>
          <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Ces articles peuvent aussi vous intéresser</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px'}}>
            {[
              { cat: 'DROIT DU TRAVAIL', titre: "DUERP : le guide pratique employeur, CSE et salariés", href: '/blog/duerp-guide-pratique-employeur-cse-salaries', date: '8 juillet 2026' },
              { cat: 'FORMALITÉS', titre: "Acre 2026 : conditions d'éligibilité, montant de l'exonération et délai de demande à l'Urssaf", href: '/blog/acre-aide-createurs-repreneurs-entreprise-2026', date: '7 juillet 2026' },
              { cat: 'DROIT DU TRAVAIL', titre: "Fin de contrat d'un salarié à domicile ou d'une assistante maternelle : licenciement, retrait d'enfant, les bonnes règles", href: '/blog/fin-contrat-salarie-particulier-employeur-licenciement-retrait-enfant', date: '30 décembre 2025' },
            ].map((a) => (
              <a key={a.href} href={a.href} style={{display: 'flex', flexDirection: 'column', gap: '8px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.1rem 1.25rem', textDecoration: 'none'}}>
                <span style={{alignSelf: 'flex-start', background: '#eff6ff', color: '#1a4fba', fontSize: '10px', fontWeight: '700', padding: '2px 9px', borderRadius: '20px'}}>{a.cat}</span>
                <span style={{color: '#0f2d6e', fontSize: '13.5px', fontWeight: '700', lineHeight: '1.4'}}>{a.titre}</span>
                {a.date && <span style={{color: '#9ca3af', fontSize: '11px'}}>{a.date}</span>}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
