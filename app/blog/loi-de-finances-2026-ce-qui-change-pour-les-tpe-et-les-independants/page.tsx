import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Loi de finances 2026 : ce qui change pour les TPE et les indépendants · Blog Cabinet Cholez-Pagotto`,
  description: `Promulguée le 19 février 2026 au terme d'un parcours budgétaire hors normes, la loi de finances 2026 écarte plusieurs mesures redoutées et en confirme d'autres. Le point complet et vérifié pour les TPE, les micro-entrepreneurs et les indépendants.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-de-finances-2026-tpe.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-de-finances-2026-tpe.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Loi de finances 2026 : ce qui change pour les TPE et les indépendants",
      "description": "Promulguée le 19 février 2026 au terme d'un parcours budgétaire hors normes, la loi de finances 2026 écarte plusieurs mesures redoutées et en confirme d'autres. Le point complet et vérifié pour les TPE, les micro-entrepreneurs et les indépendants.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-de-finances-2026-tpe.webp",
      "datePublished": "2026-02-24",
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
      "url": "https://cholez-pagotto.fr/blog/loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants",
      "keywords": ["Loi de finances 2026", "Budget 2026", "TPE", "Indépendants", "Micro-entreprise", "Barème impôt sur le revenu", "CVAE", "Article 49.3"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "La loi de finances 2026 a-t-elle été adoptée, et quand ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Au terme d'un parcours atypique, marqué par l'absence d'accord fin 2025, une loi spéciale de continuité en décembre 2025 puis plusieurs recours à l'article 49.3, la loi de finances pour 2026 a été définitivement adoptée le 2 février 2026, validée par le Conseil constitutionnel et promulguée le 19 février 2026 (loi n° 2026-103), pour une publication au Journal officiel le 20 février 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Le barème de l'impôt sur le revenu a-t-il été gelé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le gel du barème, un temps envisagé, a été abandonné. Le barème de l'impôt sur le revenu est revalorisé de 0,9 %, soit le niveau de l'inflation, afin de neutraliser son effet sur l'imposition. Les seuils, limites, plafonds et abattements suivent la même revalorisation."
          }
        },
        {
          "@type": "Question",
          "name": "Le seuil unique de TVA à 25 000 € figure-t-il dans la loi de finances 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La tentative d'instaurer un nouveau seuil unique de franchise en base de TVA a été écartée. Les seuils antérieurs, qui distinguent les ventes des prestations de services, restent applicables en 2026. Ce point avait déjà été tranché par une loi spécifique du 3 novembre 2025."
          }
        },
        {
          "@type": "Question",
          "name": "Ma TPE est-elle concernée par la surtaxe sur les grandes entreprises ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La surtaxe exceptionnelle sur l'impôt sur les sociétés vise les grandes entreprises, dont le chiffre d'affaires est très élevé. Elle ne concerne pas les TPE ni les micro-entreprises. De même, la CVAE, maintenue pour 2026, ne s'applique qu'aux entreprises dont le chiffre d'affaires dépasse 500 000 €."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la nouvelle taxe sur les petits colis ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La loi de finances 2026 crée une taxe nationale sur les colis de faible valeur, inférieurs à 150 €, faisant l'objet d'une déclaration simplifiée en douane et provenant de pays non européens. Elle concerne notamment les professionnels qui importent ou revendent de petits colis depuis l'étranger."
          }
        },
        {
          "@type": "Question",
          "name": "Les sanctions de la facturation électronique ont-elles changé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, elles ont été renforcées dans le cadre du budget. Le sujet de la facturation électronique, dont la première échéance est fixée au 1er septembre 2026, est traité en détail dans nos articles dédiés. La logique reste une amende par facture non conforme, plafonnée par année civile."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'une loi spéciale et pourquoi a-t-elle été nécessaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lorsque la loi de finances n'est pas adoptée avant le 1er janvier, l'État ne peut rester sans budget. Sur le fondement de l'article 47 de la Constitution, une loi spéciale autorise alors la perception des impôts existants et l'ouverture des crédits nécessaires à la continuité des services publics. Ce n'est pas le budget de l'année, mais un outil transitoire, qui a été utilisé fin décembre 2025."
          }
        },
        {
          "@type": "Question",
          "name": "Le plafond d'épargne retraite non utilisé peut-il encore être reporté ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, et le report est même allongé. Le solde non utilisé du plafond de déduction des versements sur un plan d'épargne retraite peut désormais être reporté sur les cinq années suivantes, contre trois auparavant. C'est un point utile pour les indépendants qui lissent leur effort d'épargne et leur avantage fiscal."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Loi de finances 2026 pour les TPE" }
      ]
    }
  ]
}

export default function ArticleLoiFinances2026TPE() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Loi de finances 2026 pour les TPE</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FISCALITÉ</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>TPE &amp; INDÉPENDANTS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Loi de finances 2026 : ce qui change pour les TPE et les indépendants</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 24 février 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 13 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-de-finances-2026-tpe.webp"
                alt="Loi de finances 2026 : ce qui change pour les TPE et les indépendants"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#parcours" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Un budget adopté tard, par un chemin hors normes</a></li>
                <li><a href="#bareme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le barème de l'impôt revalorisé, le gel écarté</a></li>
                <li><a href="#ecartees" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Les mesures redoutées qui ont été écartées</a></li>
                <li><a href="#gestion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Trésorerie et gestion : ce qu'il faut savoir</a></li>
                <li><a href="#sectorielles" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Véhicules, colis, formation</a></li>
                <li><a href="#epargne" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Épargne retraite : un report allongé</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Trois cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le budget de l'État pour 2026 a connu un parcours inhabituel, au point d'arriver bien après le début de l'année. La <strong>loi de finances pour 2026</strong> a finalement été promulguée le <strong>19 février 2026</strong>. Pour les TPE, les micro-entrepreneurs et les indépendants, la bonne nouvelle est que l'essentiel des mesures les plus redoutées au fil des débats a été écarté.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point, de façon complète et vérifiée, sur ce que le texte change réellement pour les petites structures : le calendrier hors normes qui explique ce retard, la revalorisation du barème de l'impôt, les réformes abandonnées, et les quelques ajustements concrets à connaître pour votre gestion.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> pour les TPE et les indépendants, la loi de finances 2026 <strong>écarte le gros des mesures redoutées</strong> (seuil unique de TVA, gel du barème, suppression de l'abattement des retraités), <strong>revalorise le barème de l'impôt de 0,9 %</strong>, et n'apporte que des ajustements ciblés sur les véhicules, les petits colis, la formation et l'épargne retraite.
                  </p>
                </div>
              </section>

              <section id="parcours">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Un budget adopté tard, par un chemin hors normes
                </h2>
                <p style={{marginBottom: '1rem'}}>Comprendre ce calendrier aide à saisir pourquoi certaines aides ont été suspendues en début d'année. Le projet de loi de finances a été déposé le 14 octobre 2025. Rejeté en première lecture à l'Assemblée nationale, il a été adopté au Sénat le 24 novembre 2025, mais la commission mixte paritaire a échoué à dégager un compromis le 15 décembre 2025.</p>
                <p style={{marginBottom: '1rem'}}>Faute de budget voté avant le 1er janvier, une <strong>loi spéciale</strong> a été adoptée fin décembre 2025 pour assurer la continuité de l'État, c'est-à-dire autoriser la perception des impôts existants et l'ouverture des crédits indispensables. Les débats ont repris en janvier, et le gouvernement a engagé sa responsabilité au moyen de l'<strong>article 49.3 de la Constitution</strong>, d'abord sur les recettes le 20 janvier, puis sur les dépenses. Le texte a été définitivement adopté le <strong>2 février 2026</strong>, validé pour l'essentiel par le Conseil constitutionnel, puis <strong>promulgué le 19 février 2026</strong> (loi n° 2026-103) et publié au Journal officiel le 20 février 2026.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Pourquoi cela vous concerne.</strong> C'est la deuxième année consécutive qu'une loi spéciale précède la loi de finances. Ce décalage a entraîné, en début d'année, la fermeture temporaire de certains guichets d'aides, rouverts une fois le budget adopté. Pour vos décisions liées à des dispositifs publics, le calendrier d'adoption compte autant que le contenu.
                  </p>
                </div>
              </section>

              <section id="bareme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le barème de l'impôt revalorisé, le gel écarté
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est la mesure qui touche le plus directement les indépendants, dont les bénéfices sont en général imposés au barème de l'impôt sur le revenu, qu'ils relèvent du régime micro ou du réel. Un temps évoqué, le <strong>gel du barème</strong> a été abandonné. Les limites des tranches sont <strong>revalorisées de 0,9 %</strong>, soit le niveau de l'inflation constatée, ce qui neutralise l'effet de la hausse des prix sur votre imposition.</p>
                <p style={{marginBottom: '1rem'}}>Cette revalorisation s'applique aussi aux différents seuils, limites, plafonds et abattements indexés sur le barème. Le taux retenu reste nettement inférieur à celui des années précédentes, en cohérence avec une inflation qui a ralenti. Pour connaître les montants exacts de chaque tranche, reportez-vous au barème officiel publié par l'administration.</p>
              </section>

              <section id="ecartees">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Les mesures redoutées qui ont été écartées
                </h2>
                <p style={{marginBottom: '1rem'}}>Plusieurs dispositions, débattues et parfois très commentées, n'ont finalement pas été retenues. Pour les petites structures, c'est un soulagement collectif.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Le <strong>seuil unique de franchise en base de TVA</strong> à 25&nbsp;000&nbsp;€ n'a pas été instauré. Les seuils antérieurs, distinguant les ventes des services, restent applicables. Nous détaillons cet épisode dans notre article dédié, <a href="/blog/franchise-en-base-de-tva-2026-seuils-applicables-et-abandon-du-seuil-unique" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>franchise en base de TVA, les seuils applicables en 2026</a>.</li>
                  <li>Le <strong>gel du barème de l'impôt sur le revenu</strong> a été abandonné au profit d'une revalorisation classique.</li>
                  <li>La <strong>suppression de l'abattement de 10 % sur les pensions de retraite</strong> a été écartée : cet avantage est conservé.</li>
                  <li>La <strong>réforme de l'impôt sur la fortune immobilière</strong> et la remise en cause du régime d'exonération de certaines <strong>plus-values immobilières</strong> n'ont pas été retenues.</li>
                </ul>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>À retenir.</strong> Le climat des débats a inquiété beaucoup d'indépendants, mais la version définitive du texte est nettement plus mesurée que certaines propositions intermédiaires. Pour la grande majorité des micro-entrepreneurs et des TPE, le régime fiscal reste, pour l'essentiel, celui de 2025.
                  </p>
                </div>
              </section>

              <section id="gestion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Trésorerie et gestion : ce qu'il faut savoir
                </h2>
                <p style={{marginBottom: '1rem'}}>Quelques mesures touchent la fiscalité des entreprises, mais il faut bien distinguer ce qui vise les grands groupes de ce qui concerne réellement les petites structures.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>La <strong>surtaxe exceptionnelle sur l'impôt sur les sociétés</strong> est reconduite, mais elle vise les <strong>grandes entreprises</strong> au chiffre d'affaires très élevé. Les TPE et les micro-entreprises ne sont pas concernées.</li>
                  <li>La <strong>CVAE</strong> est maintenue à son niveau pour 2026, la baisse qui était prévue ayant été annulée. Elle ne concerne que les entreprises dont le chiffre d'affaires dépasse <strong>500&nbsp;000&nbsp;€</strong>. Sa suppression complète, plusieurs fois différée, reste annoncée pour les années suivantes.</li>
                  <li>Les <strong>sanctions de la facturation électronique</strong> ont été renforcées dans le cadre du budget. La première échéance arrive au 1er septembre 2026 : voyez nos articles sur <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>ce qui change pour toutes les entreprises</a> et le <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>guide pratique pour les micro, TPE et PME</a>.</li>
                </ul>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Une mesure vous concerne-t-elle vraiment ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Barème, seuils, véhicules, formation : notre juriste vous aide à faire le tri entre ce qui touche votre structure et ce qui ne la concerne pas, et à sécuriser vos décisions.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                  </div>
                </div>
              </section>

              <section id="sectorielles">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Véhicules, colis, formation
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est ici que se trouvent les ajustements les plus susceptibles de concerner une TPE au quotidien.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>Véhicules professionnels.</strong> Le malus au poids est durci pour certains véhicules lourds, y compris des électriques et hybrides rechargeables, et la taxe sur les émissions de polluants atmosphériques applicable aux véhicules affectés à une activité économique est relevée. Des mesures visent aussi les faux utilitaires. Si vous disposez d'un véhicule professionnel, vérifiez si votre modèle est concerné.</li>
                  <li><strong>Petits colis importés.</strong> Une taxe nationale est créée sur les colis de faible valeur, inférieurs à 150&nbsp;€, en provenance de pays hors Union européenne. Elle vise les flux de petits colis et concerne donc les professionnels qui importent ou revendent ce type de produits.</li>
                  <li><strong>Formation.</strong> L'usage du compte personnel de formation évolue, avec un plafonnement des prises en charge pour certaines formations et un reste à charge obligatoire de l'ordre de 103&nbsp;€, hors profils exonérés. Le financement du permis de conduire est par ailleurs recentré. Un point à anticiper si vous comptiez financer une formation par ce biais.</li>
                </ul>
              </section>

              <section id="epargne">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Épargne retraite : un report allongé
                </h2>
                <p style={{marginBottom: '1rem'}}>Voici une mesure plutôt favorable aux indépendants. Le solde non utilisé du plafond de déduction des versements sur un <strong>plan d'épargne retraite</strong> peut désormais être reporté sur les <strong>cinq années suivantes</strong>, contre trois auparavant. Concrètement, si vous n'avez pas saturé votre plafond de déduction une année, vous disposez de plus de temps pour utiliser ce reliquat et optimiser votre avantage fiscal, ce qui est précieux quand les revenus varient d'une année sur l'autre.</p>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Trois cas concrets
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>La rédactrice en micro-entreprise.</strong> Imposée au barème, elle bénéficie de la revalorisation de 0,9 % et n'est pas touchée par le seuil unique de TVA, finalement abandonné. Pour elle, l'essentiel ne change pas, et elle peut se concentrer sur sa préparation à la facturation électronique.</li>
                  <li><strong>L'artisan qui roule beaucoup.</strong> Il vérifie si le durcissement des taxes sur les véhicules concerne son utilitaire. Dans la plupart des cas, les modèles légers ne sont pas visés par le malus au poids renforcé, mais il fait le point avant tout renouvellement de véhicule.</li>
                  <li><strong>Le revendeur en ligne.</strong> Une partie de son approvisionnement vient de petits colis hors Union européenne. Il intègre la nouvelle taxe sur les colis de faible valeur dans ses calculs de marge et ajuste ses prix en conséquence.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Arrivée tard et au prix d'un parcours inhabituel, la loi de finances 2026 se révèle, pour les TPE et les indépendants, plus rassurante que ne le laissaient craindre certains débats. Les mesures les plus lourdes ont été écartées, le barème de l'impôt est revalorisé, et les changements concrets se concentrent sur les véhicules, les petits colis importés, la formation et l'épargne retraite.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de vérifier, mesure par mesure, ce qui concerne réellement votre activité, plutôt que de réagir aux annonces. Et, le contexte budgétaire restant tendu, de rester attentif aux prochaines lois de finances, qui pourraient rouvrir certains de ces débats.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n° 2026-103 du 19 février 2026 de finances pour 2026 (Journal officiel du 20 février 2026)</li>
                  <li>Décision du Conseil constitutionnel du 19 février 2026 sur la loi de finances pour 2026</li>
                  <li>Loi spéciale de fin décembre 2025 assurant la continuité budgétaire (fondement : article 47 de la Constitution)</li>
                  <li>Dossier législatif de la loi de finances pour 2026 (Légifrance) et travaux du Sénat sur le projet de loi de finances</li>
                  <li>Portail officiel : <a href="https://www.economie.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a> (présentation des mesures de la loi de finances 2026) et <a href="https://entreprendre.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>entreprendre.service-public.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; les mesures fiscales peuvent évoluer.</p>
              </section>

                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ACCOMPAGNEMENT</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Anticiper les évolutions fiscales et sociales</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Loi de finances, seuils, dispositifs : le cabinet aide les TPE et les indépendants à anticiper les changements et à sécuriser leurs choix, en lien avec votre expert-comptable.</p>
                  <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Être accompagné →</a>
                </div>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La loi de finances 2026 a-t-elle été adoptée, et quand ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Après une absence d'accord fin 2025, une loi spéciale de continuité en décembre 2025 et plusieurs recours à l'article 49.3, la loi de finances pour 2026 a été définitivement adoptée le 2 février 2026, validée par le Conseil constitutionnel et promulguée le 19 février 2026 (loi n° 2026-103), publiée au Journal officiel le 20 février 2026.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le barème de l'impôt sur le revenu a-t-il été gelé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le gel du barème, un temps envisagé, a été abandonné. Le barème est revalorisé de 0,9 %, soit le niveau de l'inflation, ce qui neutralise son effet sur l'imposition. Les seuils, limites, plafonds et abattements suivent la même revalorisation.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le seuil unique de TVA à 25 000 € figure-t-il dans la loi de finances 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La tentative d'un nouveau seuil unique de franchise en base de TVA a été écartée. Les seuils antérieurs, qui distinguent les ventes des prestations de services, restent applicables en 2026, un point déjà tranché par une loi spécifique du 3 novembre 2025.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Ma TPE est-elle concernée par la surtaxe sur les grandes entreprises ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La surtaxe exceptionnelle sur l'impôt sur les sociétés vise les grandes entreprises au chiffre d'affaires très élevé. Elle ne concerne pas les TPE ni les micro-entreprises. La CVAE, maintenue pour 2026, ne s'applique qu'aux entreprises dont le chiffre d'affaires dépasse 500&nbsp;000&nbsp;€.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la nouvelle taxe sur les petits colis ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La loi crée une taxe nationale sur les colis de faible valeur, inférieurs à 150&nbsp;€, faisant l'objet d'une déclaration simplifiée en douane et provenant de pays non européens. Elle concerne notamment les professionnels qui importent ou revendent de petits colis depuis l'étranger.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les sanctions de la facturation électronique ont-elles changé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, elles ont été renforcées dans le cadre du budget. La logique reste une amende par facture non conforme, plafonnée par année civile. La première échéance de la réforme est fixée au 1er septembre 2026, et le sujet est détaillé dans nos articles dédiés à la facturation électronique.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce qu'une loi spéciale et pourquoi a-t-elle été nécessaire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Quand la loi de finances n'est pas adoptée avant le 1er janvier, l'État ne peut rester sans budget. Sur le fondement de l'article 47 de la Constitution, une loi spéciale autorise la perception des impôts existants et l'ouverture des crédits nécessaires à la continuité des services publics. Ce n'est pas le budget de l'année, mais un outil transitoire, utilisé fin décembre 2025.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le plafond d'épargne retraite non utilisé peut-il encore être reporté ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, et le report est allongé. Le solde non utilisé du plafond de déduction des versements sur un plan d'épargne retraite peut désormais être reporté sur les cinq années suivantes, contre trois auparavant. C'est un point utile pour les indépendants qui lissent leur effort d'épargne et leur avantage fiscal.</p>
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
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets. Défend une approche du droit accessible, opérationnelle et orientée impact social ainsi qu'une meilleure maîtrise de leurs droits assurantiels. Membre du CRFF (Conseil Représentatif des Formalistes de France). Administrateur expert au collectif DAVO (Des Avocats Vous Orientent).
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/franchise-en-base-de-tva-2026-seuils-applicables-et-abandon-du-seuil-unique" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Franchise en base de TVA : les seuils applicables en 2026 →
              </a>
              <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Facturation électronique 2026 : le guide pratique micro, TPE et PME →
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
                <span key="Loi de finances 2026" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Loi de finances 2026</span>
                <span key="TPE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>TPE</span>
                <span key="Indépendants" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Indépendants</span>
                <span key="Fiscalité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Fiscalité</span>
                <span key="Impôt sur le revenu" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Impôt sur le revenu</span>
                <span key="Budget" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Budget</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              ← Retour au blog
            </a>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}
