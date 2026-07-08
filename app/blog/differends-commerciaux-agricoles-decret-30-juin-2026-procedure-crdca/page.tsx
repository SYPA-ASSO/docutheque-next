import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Agriculture : un nouveau décret précise le règlement des différends commerciaux agricoles · Blog Cabinet Cholez-Pagotto",
  description: "Le décret n° 2026-578 du 30 juin 2026 précise la procédure devant le comité de règlement des différends commerciaux agricoles (CRDCA) : saisine après échec de la médiation, délais, instruction, secret des affaires, astreintes. Ce que producteurs et acheteurs doivent savoir.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/differends-commerciaux-agricoles-decret-30-juin-2026-procedure-crdca',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/differends-agricoles-crdca-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/differends-agricoles-crdca-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Agriculture : un nouveau décret précise le règlement des différends commerciaux agricoles",
      "description": "Le décret n° 2026-578 du 30 juin 2026 précise la procédure devant le comité de règlement des différends commerciaux agricoles (CRDCA) : saisine après échec de la médiation, délais, instruction, secret des affaires, astreintes. Ce que producteurs et acheteurs doivent savoir.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/differends-agricoles-crdca-2026.webp",
      "datePublished": "2026-07-06",
      "dateModified": "2026-07-06",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": {
          "@type": "Organization",
          "name": "Cabinet Cholez-Pagotto"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/differends-commerciaux-agricoles-decret-30-juin-2026-procedure-crdca",
      "keywords": [
        "différends commerciaux agricoles",
        "décret 2026-578",
        "CRDCA",
        "médiateur des relations commerciales agricoles",
        "Égalim",
        "L. 631-28",
        "contrats agricoles",
        "producteurs",
        "négociations commerciales"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que le comité de règlement des différends commerciaux agricoles (CRDCA) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est un organe spécialisé créé par la loi Égalim 2 (loi n° 2021-1357 du 18 octobre 2021) et prévu à l'article L. 631-28-1 du Code rural et de la pêche maritime. Il peut être saisi des litiges relatifs aux contrats de vente de produits agricoles après échec de la médiation obligatoire, et dispose de pouvoirs d'injonction, de mesures conservatoires et d'astreinte."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on saisir directement le comité sans passer par la médiation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La médiation devant le médiateur des relations commerciales agricoles reste le passage obligé prévu par l'article L. 631-28 du Code rural. C'est seulement après le constat d'échec de cette médiation que le comité peut être saisi."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le délai pour saisir le comité après l'échec de la médiation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La partie la plus diligente dispose d'un délai d'un mois à compter de la notification du constat d'échec de la médiation pour saisir le comité. Passé ce délai, la saisine est irrecevable et il faut se tourner vers les juridictions."
          }
        },
        {
          "@type": "Question",
          "name": "Les informations sensibles produites devant le comité sont-elles protégées ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le décret du 30 juin 2026 organise la protection du secret des affaires dans le cadre de la procédure, point essentiel dans des litiges portant sur les prix, les marges et les clauses contractuelles."
          }
        },
        {
          "@type": "Question",
          "name": "Depuis quand ces règles s'appliquent-elles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret n° 2026-578 du 30 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et est entré en vigueur le lendemain de sa publication, soit le 2 juillet 2026."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://cholez-pagotto.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://cholez-pagotto.fr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Différends commerciaux agricoles : le décret du 30 juin 2026"
        }
      ]
    }
  ]
}

export default function ArticleDifferendsAgricoles2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Différends commerciaux agricoles : le décret du 30 juin 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>AGRICULTURE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONTRATS</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ENTREPRISES</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Agriculture : un nouveau décret précise le règlement des différends commerciaux agricoles</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 6 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 11 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/differends-agricoles-crdca-2026.webp"
                alt="Agriculture : un nouveau décret précise le règlement des différends commerciaux agricoles"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#cadre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le cadre : médiation obligatoire, puis comité, issus des lois Égalim</a></li>
                <li><a href="#decret" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Ce que précise le décret n° 2026-578</a></li>
                <li><a href="#pourquoi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Pourquoi ce décret compte pour la filière</a></li>
                <li><a href="#conseils" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Les bons réflexes contractuels en amont</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Dans les relations entre <strong>producteurs agricoles</strong> et leurs <strong>acheteurs</strong> (industriels, coopératives, distributeurs), les litiges sur les contrats, les prix et leurs révisions suivent depuis les lois Égalim un chemin très balisé : d'abord la <strong>médiation obligatoire</strong> devant le médiateur des relations commerciales agricoles, puis, en cas d'échec, la possibilité de saisir un organe encore jeune et méconnu, le <strong>comité de règlement des différends commerciaux agricoles</strong> (CRDCA).</p>
                <p style={{marginBottom: '1rem'}}>Le <strong>décret n°&nbsp;2026-578 du 30 juin 2026</strong>, publié au Journal officiel du 1er juillet 2026, vient précisément préciser la procédure applicable devant ce comité. Pour le monde agricole et para-agricole, c'est un texte de nature à rendre le dispositif réellement praticable. Voici ce qu'il faut en retenir, que vous soyez producteur, organisation de producteurs, coopérative ou acheteur.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> le décret n°&nbsp;2026-578 du 30 juin 2026, publié au Journal officiel du 1er juillet et en vigueur depuis le <strong>2 juillet 2026</strong>, précise la procédure devant le <strong>comité de règlement des différends commerciaux agricoles</strong> (CRDCA) créé par la loi Égalim 2 : après l'échec de la <strong>médiation obligatoire</strong>, la partie la plus diligente dispose d'<strong>un mois pour saisir le comité</strong>, selon une procédure dématérialisée, contradictoire et protectrice du <strong>secret des affaires</strong>, le décret organisant aussi la <strong>liquidation des astreintes</strong> prononcées par le comité.
                  </p>
                </div>
              </section>

              <section id="cadre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le cadre : médiation obligatoire, puis comité, issus des lois Égalim
                </h2>
                <p style={{marginBottom: '1rem'}}>Depuis la loi Égalim, l'article <strong>L.&nbsp;631-28 du Code rural et de la pêche maritime</strong> impose, pour les litiges relatifs à la conclusion ou à l'exécution des contrats de vente de produits agricoles et alimentaires, une <strong>médiation préalable obligatoire</strong> devant le médiateur des relations commerciales agricoles, avant toute saisine du juge, sauf exceptions (recours à l'arbitrage, notamment).</p>
                <p style={{marginBottom: '1rem'}}>La loi Égalim 2 (loi n°&nbsp;2021-1357 du 18 octobre 2021) a ajouté un étage au dispositif : le <strong>comité de règlement des différends commerciaux agricoles</strong>, prévu à l'article L.&nbsp;631-28-1 du même code. Ce comité, autorité spécialisée, peut être saisi lorsque la médiation a échoué, et dispose de pouvoirs réels : il peut notamment ordonner des <strong>mesures conservatoires</strong> et prononcer des <strong>injonctions</strong>, le cas échéant sous <strong>astreinte</strong>, pour régler le différend dans le respect des règles de contractualisation.</p>
                <p style={{marginBottom: '1rem'}}>Restait à rendre ce parcours parfaitement praticable : c'est l'objet du décret du 30 juin 2026, qui en précise les rouages procéduraux.</p>
              </section>

              <section id="decret">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Ce que précise le décret n° 2026-578
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret, en vigueur depuis le <strong>2 juillet 2026</strong>, organise le passage de la médiation au comité et le déroulement de l'instance :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Constat d'échec de la médiation.</strong> L'échec de la médiation est formalisé et notifié aux parties : c'est ce constat qui ouvre la voie du comité.</li>
                  <li><strong>Délai de saisine.</strong> La partie la plus diligente dispose d'un <strong>délai d'un mois</strong> à compter de la notification du constat d'échec pour saisir le comité ; passé ce délai, la saisine est irrecevable. Le respect de cette échéance devient donc un point de vigilance majeur.</li>
                  <li><strong>Procédure dématérialisée et contradictoire.</strong> Les échanges avec le comité sont organisés par voie électronique, chaque partie étant mise en mesure de discuter les pièces et arguments de l'autre.</li>
                  <li><strong>Protection du secret des affaires.</strong> Le décret organise la protection des informations sensibles produites devant le comité, point crucial dans des litiges où prix, marges, coûts de production et clauses contractuelles sont au cœur du débat.</li>
                  <li><strong>Liquidation des astreintes et suites.</strong> Le texte précise les modalités de liquidation des astreintes prononcées par le comité et les suites attachées au non-respect de ses mesures.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le réflexe à retenir : un mois, pas plus.</strong> Après la notification du constat d'échec de la médiation, le compteur tourne. Une partie qui laisse passer le délai de saisine du comité perd cette voie et se retrouve renvoyée vers les juridictions, avec le coût et les délais que cela suppose. Inscrivez cette échéance dans le suivi de vos dossiers dès la fin de la médiation.
                  </p>
                </div>
              </section>

              <section id="pourquoi">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Pourquoi ce décret compte pour la filière
                </h2>
                <p style={{marginBottom: '1rem'}}>Le CRDCA est resté, depuis sa création, un outil relativement peu mobilisé : les acteurs hésitaient à s'engager dans une procédure dont les contours pratiques restaient flous. En fixant noir sur blanc les délais, la forme de la saisine, le déroulement de l'instruction et la protection des données sensibles, le décret <strong>sécurise le parcours</strong> et devrait faciliter le recours au comité.</p>
                <p style={{marginBottom: '1rem'}}>Pour les <strong>producteurs et leurs organisations</strong>, c'est une alternative crédible au contentieux judiciaire, plus rapide et plus spécialisée, dans des litiges où le rapport de force économique est souvent défavorable. Pour les <strong>acheteurs</strong>, c'est une procédure encadrée, contradictoire et confidentielle, préférable à l'enlisement d'un différend. Pour tous, la médiation reste le passage obligé : le comité n'est jamais le premier réflexe, mais le second étage d'un parcours amiable structuré.</p>
              </section>

              <section id="conseils">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Les bons réflexes contractuels en amont
                </h2>
                <p style={{marginBottom: '1rem'}}>La meilleure façon d'aborder ce dispositif reste de ne pas en avoir besoin, ou de l'aborder en position solide. Quelques réflexes de fond :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Des contrats écrits et complets.</strong> La contractualisation écrite prévue par le Code rural (article L.&nbsp;631-24 notamment), avec des clauses de prix, d'indicateurs et de révision claires, est la matière première de tout différend bien défendu.</li>
                  <li><strong>La traçabilité des échanges.</strong> Propositions, refus, relances, éléments de coûts : conservez et datez tout ce qui documente la négociation et l'exécution du contrat.</li>
                  <li><strong>La médiation préparée.</strong> La médiation obligatoire n'est pas une formalité : un dossier structuré (contrat, historique, chiffrage du préjudice) augmente les chances d'accord et, à défaut, prépare la saisine du comité.</li>
                  <li><strong>Les délais sous contrôle.</strong> De la naissance du litige à la liquidation d'une éventuelle astreinte, chaque étape a désormais son échéance : tenez un calendrier de procédure dès le premier incident.</li>
                </ul>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>INFORMATION JURIDIQUE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Une question sur vos contrats ou votre différend ?</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Notre juriste vous apporte une information claire sur le cadre applicable à votre situation : contractualisation, médiation, saisine du comité, délais. Réponse écrite sous 24 à 48h.</p>
                  <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Poser ma question &rarr;</a>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Avec le décret du 30 juin 2026, le règlement des différends commerciaux agricoles dispose enfin d'un mode d'emploi complet : médiation obligatoire, constat d'échec, saisine du comité dans le mois, instruction contradictoire et dématérialisée, secret des affaires protégé, astreintes liquidables. Pour les producteurs comme pour les acheteurs, le dispositif issu d'Égalim 2 devient un outil praticable, à condition d'en maîtriser les délais et de soigner, très en amont, la qualité de ses contrats et de ses preuves.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur le décret n°&nbsp;2026-578 du 30 juin 2026 relatif au règlement des différends commerciaux agricoles, publié au <a href="https://www.legifrance.gouv.fr/jorf/jo/2026/07/01/0152" style={{color: '#1a4fba', fontWeight: 600}}>Journal officiel du 1er juillet 2026</a>, sur les articles L.&nbsp;631-28 et L.&nbsp;631-28-1 du Code rural et de la pêche maritime issus des lois Égalim, ainsi que sur la documentation du ministère de l'agriculture consacrée au comité de règlement des différends commerciaux agricoles.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le comité de règlement des différends commerciaux agricoles (CRDCA) ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est un organe spécialisé créé par la loi Égalim 2 (loi n° 2021-1357 du 18 octobre 2021) et prévu à l'article L. 631-28-1 du Code rural et de la pêche maritime. Il peut être saisi des litiges relatifs aux contrats de vente de produits agricoles après échec de la médiation obligatoire, et dispose de pouvoirs d'injonction, de mesures conservatoires et d'astreinte.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on saisir directement le comité sans passer par la médiation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La médiation devant le médiateur des relations commerciales agricoles reste le passage obligé prévu par l'article L. 631-28 du Code rural. C'est seulement après le constat d'échec de cette médiation que le comité peut être saisi.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le délai pour saisir le comité après l'échec de la médiation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La partie la plus diligente dispose d'un délai d'un mois à compter de la notification du constat d'échec de la médiation pour saisir le comité. Passé ce délai, la saisine est irrecevable et il faut se tourner vers les juridictions.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les informations sensibles produites devant le comité sont-elles protégées ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le décret du 30 juin 2026 organise la protection du secret des affaires dans le cadre de la procédure, point essentiel dans des litiges portant sur les prix, les marges et les clauses contractuelles.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Depuis quand ces règles s'appliquent-elles ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret n° 2026-578 du 30 juin 2026 a été publié au Journal officiel du 1er juillet 2026 et est entré en vigueur le lendemain de sa publication, soit le 2 juillet 2026.</p>
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
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets. Défend une approche du droit accessible, opérationnelle et orientée impact social ainsi qu'une meilleure maîtrise de leurs droits assurantiels. 
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
                Poser ma question &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Loi de finances 2026 : ce qui change pour les TPE et les indépendants &rarr;
              </a>
              <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises &rarr;
              </a>
            </div>

            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                En savoir plus &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <span key="Agriculture" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Agriculture</span>
                <span key="Contrats" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Contrats</span>
                <span key="Égalim" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Égalim</span>
                <span key="Médiation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Médiation</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              &larr; Retour au blog
            </a>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}
