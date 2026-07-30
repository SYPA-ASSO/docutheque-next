import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Arrêt maladie en téléconsultation 2026 : le plafond de 3 jours et les nouveaux verrous anti-fraude · Blog Cabinet Cholez-Pagotto`,
  description: `Le plafond de 3 jours pour un arrêt prescrit en téléconsultation existe depuis 2024. Ce qui change au 27 juin 2026 : un seul renouvellement possible, échange oral obligatoire, contre-visite patronale étendue.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/arret-maladie-teleconsultation-2026-plafond-verrous-fraude',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arret-maladie-teleconsultation-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arret-maladie-teleconsultation-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Arrêt maladie en téléconsultation 2026 : le plafond de 3 jours et les nouveaux verrous anti-fraude",
      "description": "Le plafond de 3 jours pour un arrêt prescrit en téléconsultation existe depuis 2024. Ce qui change au 27 juin 2026 : un seul renouvellement possible, échange oral obligatoire, contre-visite patronale étendue.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arret-maladie-teleconsultation-2026.webp",
      "datePublished": "2026-07-15",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/arret-maladie-teleconsultation-2026-plafond-verrous-fraude",
      "keywords": ["Arrêt maladie", "Téléconsultation", "Télémédecine", "Contre-visite patronale", "IJSS", "Loi fraudes sociales"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Le plafond de 3 jours pour un arrêt en téléconsultation est-il une nouveauté de la loi du 25 juin 2026 ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Ce plafond existe depuis le 1er janvier 2024. Ce qui est nouveau au 27 juin 2026, c'est le verrouillage des contournements : un seul renouvellement possible par télémédecine, interdiction pour un médecin exerçant principalement à l'étranger, obligation d'un échange oral sur les plateformes en ligne, et extension de la contre-visite patronale." } },
        { "@type": "Question", "name": "Un arrêt prescrit par le médecin traitant en téléconsultation est-il concerné par le plafond de 3 jours ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Le médecin traitant et la sage-femme référente peuvent prescrire un arrêt plus long en téléconsultation, de même qu'en cas d'impossibilité justifiée de consulter en présentiel." } },
        { "@type": "Question", "name": "L'employeur peut-il faire procéder à une contre-visite en cas d'arrêt prescrit par télémédecine ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, depuis le 27 juin 2026, dans les mêmes conditions que pour un arrêt classique. Si la contre-visite conclut que l'arrêt est injustifié, ou si elle est rendue impossible du fait du salarié, l'employeur peut interrompre le maintien de salaire. Cette faculté ne concerne pas le maintien de salaire spécifique aux salariés d'Alsace-Moselle." } },
        { "@type": "Question", "name": "Les arrêts maladie seront-ils bientôt plafonnés en durée pour tout le monde, pas seulement en téléconsultation ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, à compter du 1er septembre 2026, en application du décret n°2026-498 du 12 juin 2026 pris pour la loi de financement de la Sécurité sociale pour 2026 : une première prescription ne pourra pas dépasser 31 jours, et chaque prolongation 62 jours, sauf dérogation médicale justifiée sur l'ordonnance." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "Arrêt maladie en téléconsultation 2026" }
    ] }
  ]
}

export default function ArticleArretMaladieTeleconsultation2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>
        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Arrêt maladie en téléconsultation 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>LOI DU 25 JUIN 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Arrêt maladie en téléconsultation 2026 : le plafond de 3 jours et les nouveaux verrous anti-fraude</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 15 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 13 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arret-maladie-teleconsultation-2026.webp" alt="Arrêt maladie en téléconsultation 2026 : le plafond de 3 jours et les nouveaux verrous anti-fraude" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Le plafond de 3 jours pour un arrêt en téléconsultation existe depuis le 1er janvier 2024 ; la loi du 25 juin 2026 verrouille surtout les contournements possibles.</li>
                <li>Un arrêt prescrit par le médecin traitant ou la sage-femme référente n'est pas soumis au plafond de 3 jours, y compris en téléconsultation.</li>
                <li>Depuis le 27 juin 2026, l'employeur peut faire procéder à une contre-visite même pour un arrêt prescrit par télémédecine, dans les mêmes conditions qu'un arrêt classique.</li>
                <li>À compter du 1er septembre 2026, tous les arrêts maladie seront plafonnés en durée : 31 jours pour une première prescription, 62 jours par prolongation.</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#pas-nouveau" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. Le plafond de 3 jours n'est pas une nouveauté</a></li>
                <li><a href="#vraie-nouveaute" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. Ce qui change vraiment depuis le 27 juin 2026</a></li>
                <li><a href="#contre-visite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. La contre-visite patronale étendue à la télémédecine</a></li>
                <li><a href="#plfss" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Le contexte plus large : le plafonnement général dès le 1er septembre</a></li>
                <li><a href="#regles-classiques" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Les règles classiques qui restent</a></li>
                <li><a href="#pratique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. Ce que ça change concrètement</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Beaucoup d'articles publiés ces derniers jours présentent le plafond de 3 jours pour un arrêt maladie prescrit en téléconsultation comme une mesure inédite de la loi du 25 juin 2026. Ce n'est qu'à moitié vrai : ce plafond existe en réalité depuis le 1er janvier 2024. Ce que la loi du 25 juin 2026 change réellement, c'est le verrouillage de plusieurs contournements qui permettaient jusqu'ici de neutraliser en pratique cette limite.</p>
                <p style={{marginBottom: '1rem'}}>Cet article distingue ce qui existait déjà de ce qui est vraiment nouveau, et replace le tout dans un contexte plus large : celui d'une réforme d'ensemble des arrêts de travail, qui touche aussi bien la télémédecine que leur durée générale.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}le plafond de 3 jours pour un arrêt en téléconsultation existe depuis 2024, mais depuis le 27 juin 2026, il ne peut plus être renouvelé qu'une seule fois par télémédecine, un médecin exerçant principalement à l'étranger ne peut plus le prescrire, les plateformes en ligne doivent proposer un échange oral, et l'employeur peut désormais demander une contre-visite sur un arrêt prescrit par télémédecine.
                  </p>
                </div>
              </section>

              <section id="pas-nouveau">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. Le plafond de 3 jours n'est pas une nouveauté</h2>
                <p style={{marginBottom: '1rem'}}>Depuis le 1er janvier 2024 déjà, un arrêt de travail prescrit ou renouvelé par télémédecine ne peut, en principe, ni dépasser 3 jours, ni porter la durée totale de l'arrêt au-delà de ce seuil, lorsque le professionnel de santé consulté n'est pas le médecin traitant du patient. Cette règle a été reconduite et rappelée par la loi du 25 juin 2026, mais elle existait avant elle.</p>
                <p style={{marginBottom: '1rem'}}>Deux exceptions restent constantes : le médecin traitant ou la sage-femme référente de l'assuré peuvent prescrire un arrêt plus long même par télémédecine, et un patient dans l'impossibilité justifiée de consulter un professionnel en présentiel n'est pas non plus soumis à cette limite.</p>
              </section>

              <section id="vraie-nouveaute">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. Ce qui change vraiment depuis le 27 juin 2026</h2>
                <p style={{marginBottom: '1rem'}}>La loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, en particulier ses articles 49, 50, 52 et 53, ne se contente pas de reconduire le plafond de 3 jours : elle ferme trois portes qui permettaient jusqu'ici de le contourner en pratique.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Un seul renouvellement possible par télémédecine.</strong> Un arrêt de travail ne peut désormais être renouvelé qu'une seule fois par cette voie. Tout renouvellement ultérieur doit passer par une consultation en présentiel, sauf si l'on entre dans l'un des cas dérogatoires (médecin traitant, sage-femme référente, impossibilité de consulter en présentiel).</li>
                  <li><strong>Fin des prescripteurs basés à l'étranger.</strong> Un arrêt de travail ne peut plus être prescrit via un acte de télémédecine réalisé par un professionnel de santé qui exerce son activité à titre principal à l'étranger, une pratique qui s'était développée sur certaines plateformes.</li>
                  <li><strong>Un échange oral devient obligatoire.</strong> Les plateformes en ligne directement accessibles aux assurés ne peuvent plus délivrer un arrêt de travail sur la seule base d'un formulaire ou d'un échange écrit : un échange oral avec le professionnel de santé est désormais requis.</li>
                </ul>
              </section>

              <section id="contre-visite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. La contre-visite patronale étendue à la télémédecine</h2>
                <p style={{marginBottom: '1rem'}}>Autre nouveauté, plus technique mais concrète pour les employeurs : jusqu'ici, la contre-visite médicale patronale, qui permet à l'employeur tenu au maintien de salaire de faire vérifier le bien-fondé d'un arrêt, s'appliquait mal aux arrêts prescrits par télémédecine. Depuis le 27 juin 2026, l'employeur peut désormais faire procéder à cette contre-visite dans les mêmes conditions que pour un arrêt classique, y compris lorsque l'arrêt a été prescrit ou renouvelé par télémédecine.</p>
                <p style={{marginBottom: '1rem'}}>Si la contre-visite conclut que l'arrêt n'est pas justifié, ou si elle est rendue impossible du fait du salarié (absence au domicile sans motif, refus de recevoir le médecin contrôleur), l'employeur peut interrompre le maintien de salaire. Un rapport est par ailleurs transmis au service du contrôle médical de la caisse, qui peut lui-même décider de suspendre les indemnités journalières ou de réexaminer la situation.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Exception à retenir.</strong>{' '}Cette nouvelle possibilité d'interrompre le maintien de salaire après contre-visite ne s'applique pas à l'obligation de maintien de salaire propre aux salariés relevant du droit local d'Alsace-Moselle, qui reste régie par ses propres règles.
                  </p>
                </div>
              </section>

              <section id="plfss">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Le contexte plus large : le plafonnement général dès le 1er septembre</h2>
                <p style={{marginBottom: '1rem'}}>Ce resserrement de la télémédecine s'inscrit dans un mouvement plus large de maîtrise des arrêts de travail, porté cette fois par un texte différent : la loi de financement de la Sécurité sociale pour 2026 (loi n°&nbsp;2025-1403 du 30 décembre 2025, article 81), précisée par le décret n°&nbsp;2026-498 du 12 juin 2026, qui crée l'article R.&nbsp;162-1-7-1 du Code de la sécurité sociale.</p>
                <p style={{marginBottom: '1rem'}}>À compter du 1er septembre 2026, tout arrêt de travail prescrit par un médecin, une sage-femme ou un chirurgien-dentiste, en ville comme à l'hôpital, sera plafonné à <strong>31 jours pour une première prescription</strong> et <strong>62 jours par prolongation</strong>. Ce plafond n'est pas absolu : le professionnel de santé peut prescrire une durée supérieure s'il la justifie au regard de l'état du patient, en s'appuyant le cas échéant sur les recommandations de la Haute Autorité de santé. Ces plafonds ne remettent pas en cause le plafond global de versement des indemnités journalières à 360 jours sur trois ans, ni ne s'appliquent à Mayotte.</p>
              </section>

              <section id="regles-classiques">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Les règles classiques qui restent</h2>
                <p style={{marginBottom: '1rem'}}>Pour un arrêt de 3 jours prescrit en téléconsultation comme pour tout autre arrêt, les règles habituelles de transmission demeurent : le salarié doit transmettre son avis d'arrêt à sa caisse d'assurance maladie et à son employeur dans un délai de 48 heures. Le contrôle ne s'arrête pas non plus à l'écran : un patient en arrêt peut faire l'objet d'une vérification à domicile, notamment pour s'assurer de sa présence aux horaires de sortie autorisés. S'il séjourne ailleurs qu'à son adresse habituelle pendant son arrêt, par exemple chez un proche, il doit désormais en informer sa caisse d'assurance maladie.</p>
              </section>

              <section id="pratique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. Ce que ça change concrètement</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Pour le salarié :</strong> un arrêt de plus de 3 jours obtenu hors médecin traitant nécessite désormais une vraie consultation en présentiel dès le premier renouvellement ; penser à informer la CPAM en cas de séjour ailleurs qu'à son domicile pendant l'arrêt.</li>
                  <li><strong>Pour l'employeur :</strong> la contre-visite devient un outil mobilisable même face à un arrêt prescrit par télémédecine, avec un vrai effet sur le maintien de salaire, hors salariés d'Alsace-Moselle.</li>
                  <li><strong>Pour les deux :</strong> anticiper, dès maintenant, le plafonnement général à 31 puis 62 jours qui s'appliquera à tous les arrêts à compter du 1er septembre 2026, indépendamment du mode de prescription.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Une question sur le maintien de salaire ou la prévoyance ?</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Vérifier votre couverture prévoyance face à ces évolutions</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet réalise un audit de vos contrats de prévoyance existants, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/conseil-assurances" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Conseil en assurances</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>Le plafond de 3 jours pour un arrêt en téléconsultation n'est pas né le 27 juin 2026, il existait déjà. Ce que cette date change réellement, c'est la fermeture de plusieurs failles qui permettaient d'en atténuer la portée : renouvellements multiples, prescripteurs installés à l'étranger, échanges purement écrits. À cela s'ajoute, sur un tout autre texte, un chantier bien plus large qui touchera tous les arrêts de travail à compter du 1er septembre 2026, quel que soit leur mode de prescription. Distinguer ces deux réformes, portées par deux lois différentes, évite bien des confusions.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, articles 49, 50, 52 et 53 (JORF du 26 juin 2026)</li>
                  <li>Conseil constitutionnel, décision n°&nbsp;2026-904 DC du 18 juin 2026</li>
                  <li>Loi n°&nbsp;2025-1403 du 30 décembre 2025 de financement de la Sécurité sociale pour 2026, article 81</li>
                  <li>Décret n°&nbsp;2026-498 du 12 juin 2026, créant l'article R.&nbsp;162-1-7-1 du Code de la sécurité sociale (plafonnement à 31 et 62 jours, à compter du 1er septembre 2026)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit ou un médecin-conseil reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Le plafond de 3 jours pour un arrêt en téléconsultation est-il une nouveauté de la loi du 25 juin 2026 ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. Ce plafond existe depuis le 1er janvier 2024. Ce qui est nouveau au 27 juin 2026, c'est le verrouillage des contournements : un seul renouvellement possible par télémédecine, interdiction pour un médecin exerçant principalement à l'étranger, obligation d'un échange oral sur les plateformes en ligne, et extension de la contre-visite patronale.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Un arrêt prescrit par le médecin traitant en téléconsultation est-il concerné par le plafond de 3 jours ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. Le médecin traitant et la sage-femme référente peuvent prescrire un arrêt plus long en téléconsultation, de même qu'en cas d'impossibilité justifiée de consulter en présentiel.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>L'employeur peut-il faire procéder à une contre-visite en cas d'arrêt prescrit par télémédecine ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, depuis le 27 juin 2026, dans les mêmes conditions que pour un arrêt classique. Si la contre-visite conclut que l'arrêt est injustifié, ou si elle est rendue impossible du fait du salarié, l'employeur peut interrompre le maintien de salaire. Cette faculté ne concerne pas le maintien de salaire spécifique aux salariés d'Alsace-Moselle.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Les arrêts maladie seront-ils bientôt plafonnés en durée pour tout le monde, pas seulement en téléconsultation ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, à compter du 1er septembre 2026, en application du décret n°2026-498 du 12 juin 2026 pris pour la loi de financement de la Sécurité sociale pour 2026 : une première prescription ne pourra pas dépasser 31 jours, et chaque prolongation 62 jours, sauf dérogation médicale justifiée sur l'ordonnance.</p>
                  </details>
                </div>
              </section>
            </div>
          </article>

          <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>À propos de l'auteur</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                <div><p style={{color: '#374151', fontSize: '12px', fontWeight: '700', margin: '0 0 2px'}}>François CHOLEZ</p><p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p></div>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.</p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>
            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>Poser ma question →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=Arr%C3%AAt%20maladie" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Arrêt maladie</a>
                <a href="/blog?tag=T%C3%A9l%C3%A9consultation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Téléconsultation</a>
                <a href="/blog?tag=Contre-visite%20patronale" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Contre-visite patronale</a>
                <a href="/blog?tag=Fraudes%20sociales" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Fraudes sociales</a>
              </div>
            </div>
            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>← Retour au blog</a>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
