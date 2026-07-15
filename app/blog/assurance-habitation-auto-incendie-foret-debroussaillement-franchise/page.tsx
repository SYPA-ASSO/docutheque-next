import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Incendie de forêt ou de végétation : ce que couvre votre assurance habitation et auto · Blog Cabinet Cholez-Pagotto`,
  description: `Maison, dépendances, véhicule : en cas d'incendie de forêt ou de végétation, l'assurance ne couvre pas tout ni automatiquement. Garantie incendie, franchise débroussaillement de 5 000 €, assurance auto, délai de déclaration.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/assurance-habitation-auto-incendie-foret-debroussaillement-franchise',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/assurance-incendie-foret-vegetation-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/assurance-incendie-foret-vegetation-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Incendie de forêt ou de végétation : ce que couvre votre assurance habitation et auto",
      "description": "Maison, dépendances, véhicule : en cas d'incendie de forêt ou de végétation, l'assurance ne couvre pas tout ni automatiquement. Garantie incendie, franchise débroussaillement de 5 000 €, assurance auto, délai de déclaration.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/assurance-incendie-foret-vegetation-2026.webp",
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
      "url": "https://cholez-pagotto.fr/blog/assurance-habitation-auto-incendie-foret-debroussaillement-franchise",
      "keywords": ["Assurance habitation", "Incendie de forêt", "Débroussaillement", "Franchise assurance", "Code des assurances", "Assurance auto"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "L'assurance habitation couvre-t-elle automatiquement les dégâts d'un incendie de forêt ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La garantie incendie fait partie des garanties de base de la quasi-totalité des contrats multirisques habitation, mais les dépendances extérieures comme la piscine, l'abri de jardin ou la clôture sont souvent en option. Il faut vérifier son propre contrat pour savoir ce qui est réellement couvert au-delà de l'habitation elle-même."
          }
        },
        {
          "@type": "Question",
          "name": "Que risque-t-on si l'on n'a pas respecté l'obligation de débroussaillement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si les dommages résultent d'un incendie de forêt et que l'assuré ne s'est pas conformé à son obligation légale de débroussaillement, l'assureur peut appliquer une franchise supplémentaire pouvant atteindre 5 000 euros, en plus de la franchise contractuelle habituelle, en application de l'article L.122-8 du Code des assurances. Des sanctions pénales et administratives distinctes, prévues par le Code forestier, peuvent également s'ajouter."
          }
        },
        {
          "@type": "Question",
          "name": "Une négligence peut-elle faire perdre toute indemnisation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Seule une faute intentionnelle, c'est-à-dire la volonté de causer le dommage tel qu'il est survenu, prive totalement l'assuré de la garantie de l'assureur (article L.113-1 du Code des assurances). Une simple négligence, même fautive, ouvre droit à indemnisation, éventuellement réduite par la franchise supplémentaire de l'article L.122-8, mais jamais supprimée dans son principe."
          }
        },
        {
          "@type": "Question",
          "name": "L'assurance auto au tiers couvre-t-elle un véhicule détruit par un incendie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. L'assurance au tiers, qui ne couvre que la responsabilité civile obligatoire, ne protège pas le véhicule de son propriétaire contre l'incendie. Il faut avoir souscrit une formule intermédiaire ou tous risques incluant la garantie incendie pour être indemnisé."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Incendie de forêt et assurances" }
      ]
    }
  ]
}

export default function ArticleAssuranceIncendieForet2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Incendie de forêt et assurances</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ASSURANCES</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>RISQUES NATURELS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.7rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Incendie de forêt ou de végétation : ce que couvre votre assurance habitation et auto</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 13 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 12 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/assurance-incendie-foret-vegetation-2026.webp"
                alt="Incendie de forêt ou de végétation : ce que couvre votre assurance habitation et auto"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#garantie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce que couvre (vraiment) la garantie incendie</a></li>
                <li><a href="#debroussaillement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le débroussaillement obligatoire et la franchise de 5 000 €</a></li>
                <li><a href="#negligence" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Négligence et faute intentionnelle : une différence capitale</a></li>
                <li><a href="#auto" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Assurance auto : le tiers ne suffit pas</a></li>
                <li><a href="#declaration" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Le délai de déclaration, un piège fréquent</a></li>
                <li><a href="#reflexes" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Que faire concrètement</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Chaque été, des incendies de forêt ou de végétation menacent des habitations situées en lisière de massifs boisés, de landes ou de garrigues. Une maison touchée, un véhicule garé à proximité détruit, un abri de jardin ou une piscine endommagés : au-delà du choc, la question de l'assurance se pose presque toujours dans l'urgence, alors qu'elle mériterait d'être tranchée bien avant que les flammes n'approchent.</p>
                <p style={{marginBottom: '1rem'}}>Car dans les contrats, l'indemnisation contre les risques d'incendie n'est ni totale ni automatique. La garantie incendie n'est pas automatique dans son étendue, et surtout, elle peut être amputée d'une franchise supplémentaire pour un motif précis, souvent ignoré, le défaut de débroussaillement.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}la garantie incendie est presque toujours incluse dans un contrat multirisques habitation, mais les dépendances extérieures sont souvent en option, une franchise supplémentaire de 5 000 euros peut s'appliquer en cas de non-respect de l'obligation de débroussaillement, et la déclaration du sinistre doit intervenir dans un délai de 5 jours ouvrés.
                  </p>
                </div>
              </section>

              <section id="garantie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce que couvre (vraiment) la garantie incendie
                </h2>
                <p style={{marginBottom: '1rem'}}>La quasi-totalité des contrats multirisques habitation intègrent une garantie incendie, qui indemnise, dans les limites et plafonds prévus au contrat, les dommages causés au bâtiment principal. Ce qui l'est beaucoup moins systématiquement, en revanche, ce sont les dépendances : piscine, abri de jardin, clôture, ou dépendances non attenantes figurent fréquemment parmi les options, pas dans le socle de base.</p>
                <p style={{marginBottom: '1rem'}}>La seule façon de savoir précisément ce qui sera indemnisé en cas de sinistre est de relire ses conditions particulières, et pas seulement les conditions générales : c'est là que sont listées les garanties effectivement souscrites, avec leurs plafonds et leurs exclusions propres.</p>
              </section>

              <section id="debroussaillement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le débroussaillement obligatoire et la franchise de 5 000 €
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans les zones exposées, situées à moins de 200 mètres d'un massif forestier, d'une lande, d'un maquis ou d'une garrigue classés à risque, le Code forestier impose une obligation légale de débroussaillement (articles L.&nbsp;131-10 à L.&nbsp;131-16) : sur une profondeur de 50 mètres autour des habitations et installations, portée le cas échéant à 100 mètres par le maire ou le préfet (article L.&nbsp;134-6). Le maire est chargé du contrôle de cette obligation (article L.&nbsp;134-7), le propriétaire en restant seul responsable (article L.&nbsp;134-8).</p>
                <p style={{marginBottom: '1rem'}}>Dans les communes qui l'imposent, le non-respect de cette obligation peut avoir des conséquences directes sur l'indemnisation. Le texte qui le prévoit est précis : l'article L.&nbsp;122-8 du Code des assurances autorise l'assureur, s'il établit que l'assuré ne s'est pas conformé à ses obligations de débroussaillement, à appliquer une franchise supplémentaire pouvant atteindre 5 000 euros, en plus de la franchise contractuelle habituelle.</p>
                <p style={{marginBottom: '1rem'}}>Cette franchise s'ajoute, sans s'y substituer, aux sanctions propres au Code forestier : une amende pénale pouvant atteindre 50 euros par mètre carré non débroussaillé en cas de mise en demeure du maire restée sans effet (article L.&nbsp;163-5), et une amende administrative de même montant maximal (article L.&nbsp;135-2). Trois logiques différentes, trois textes différents, un même fait générateur.</p>
              </section>

              <section id="negligence">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Négligence et faute intentionnelle : une différence capitale
                </h2>
                <p style={{marginBottom: '1rem'}}>Un point mérite d'être clarifié, car la confusion est fréquente : ne pas avoir débroussaillé son terrain, même par négligence caractérisée, ne fait jamais perdre le bénéfice de la garantie incendie dans son principe. Le droit français réserve la privation totale de garantie à un cas bien plus restrictif, la faute intentionnelle ou dolosive, définie par l'article L.&nbsp;113-1 du Code des assurances.</p>
                <p style={{marginBottom: '1rem'}}>La Cour de cassation a une position constante et exigeante sur ce point : la faute intentionnelle qui prive l'assuré de sa garantie suppose la volonté de créer le dommage tel qu'il est survenu, pas seulement la conscience qu'un risque existe. Dans une affaire jugée le 16 janvier 2020, un jeune homme avait volontairement mis le feu à des chaises en plastique sur la terrasse d'un salon de thé ; l'incendie s'était propagé et avait causé d'importants dégâts. La cour d'appel avait estimé que la condamnation pénale pour incendie volontaire suffisait à exclure la garantie de l'assureur de responsabilité civile. La Cour de cassation a censuré ce raisonnement : la condamnation pour avoir volontairement allumé un feu n'implique pas, en elle-même, que son auteur ait voulu l'ampleur exacte des destructions constatées (Cour de cassation, 2e chambre civile, 16 janvier 2020, n°&nbsp;18-18.909, publié au Bulletin).</p>
                <p style={{marginBottom: '1rem'}}>Cette jurisprudence éclaire, par contraste, la logique du dispositif applicable au débroussaillement : puisque la simple négligence ne peut juridiquement pas priver un assuré de sa garantie, le législateur a créé, à l'article L.&nbsp;122-8, un mécanisme spécifique et plafonné (la franchise supplémentaire de 5 000 euros), précisément parce que l'exclusion totale de garantie pour négligence n'est pas une option ouverte par le droit commun des assurances.</p>
              </section>

              <section id="auto">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Assurance auto : le tiers ne suffit pas
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les véhicules, la vigilance doit être la même. L'assurance au tiers, qui ne couvre que la responsabilité civile obligatoire envers les tiers, ne protège en rien le véhicule de son propriétaire contre un incendie. Seules les formules intermédiaires ou tous risques, plus onéreuses, incluent la garantie incendie du véhicule assuré lui-même. Un propriétaire dont le véhicule serait détruit par un feu de forêt sans avoir souscrit l'une de ces formules ne percevra donc aucune indemnisation de son propre assureur pour ce dommage.</p>
              </section>

              <section id="declaration">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Le délai de déclaration, un piège fréquent
                </h2>
                <p style={{marginBottom: '1rem'}}>En cas de sinistre, la réactivité compte autant que la couverture elle-même. L'article L.&nbsp;113-2 du Code des assurances impose à l'assuré de déclarer le sinistre à son assureur dans un délai fixé par le contrat, qui ne peut être inférieur à 5 jours ouvrés pour un incendie (ce délai est réduit à 2 jours ouvrés en cas de vol, et porté à 10 jours en cas de catastrophe naturelle reconnue par arrêté). Passé ce délai sans motif légitime, l'assureur peut opposer une déchéance de garantie s'il démontre avoir subi un préjudice du fait du retard.</p>
                <p style={{marginBottom: '1rem'}}>En pratique, cela signifie qu'il faut prendre des photos des dommages dès que la sécurité le permet, conserver tout justificatif utile (factures d'achat, devis de réparation), et adresser sa déclaration sans attendre d'avoir une vision complète et définitive de l'étendue des dégâts, quitte à la compléter ultérieurement.</p>
              </section>

              <section id="reflexes">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Que faire concrètement
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Vérifier dans ses conditions particulières si les dépendances extérieures (piscine, abri, clôture) sont couvertes, et pas seulement l'habitation principale.</li>
                  <li>Se renseigner en mairie pour savoir si son terrain est soumis à l'obligation légale de débroussaillement, et si la commune applique la franchise supplémentaire prévue par le Code des assurances.</li>
                  <li>Vérifier la formule souscrite pour chaque véhicule : le tiers seul ne couvre jamais l'incendie du véhicule assuré.</li>
                  <li>En cas de sinistre, déclarer sans attendre, photos à l'appui, sans dépasser le délai contractuel (5 jours ouvrés au minimum pour un incendie).</li>
                  <li>Conserver toute preuve utile à l'indemnisation : factures, photographies antérieures au sinistre, devis de reconstruction.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Vérifier l'étendue réelle de vos garanties
                </h2>
                <p style={{marginBottom: '1rem'}}>Un contrat multirisques habitation qui semble complet peut, à la lecture précise des conditions particulières, réserver de mauvaises surprises sur les dépendances, les plafonds d'indemnisation ou les franchises spécifiques. Un audit ciblé permet de le savoir avant qu'un sinistre ne le révèle.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin de vérifier l'étendue de vos garanties habitation ou auto ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet réalise un audit de vos contrats existants et une comparaison des offres du marché, avec un rapport de conseil écrit et motivé, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/conseil-assurances" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Conseil en assurances</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Un incendie de forêt ou de végétation rappelle chaque fois la même réalité : l'assurance habitation n'est jamais une protection à taille unique. Entre les dépendances parfois exclues, la franchise supplémentaire liée au débroussaillement, et le délai de déclaration à ne pas manquer, la différence entre une indemnisation pleine et une indemnisation amputée se joue souvent avant même que le sinistre ne survienne, dans la lecture attentive de son contrat.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code des assurances, article L.&nbsp;113-1 (exclusion légale de garantie pour faute intentionnelle ou dolosive)</li>
                  <li>Code des assurances, article L.&nbsp;113-2 (obligations de l'assuré, délai de déclaration du sinistre)</li>
                  <li>Code des assurances, article L.&nbsp;122-8 (franchise supplémentaire en cas de non-respect de l'obligation de débroussaillement)</li>
                  <li>Code forestier, articles L.&nbsp;131-10 à L.&nbsp;131-16 (obligation légale de débroussaillement)</li>
                  <li>Code forestier, article L.&nbsp;134-6 (zone d'application, extension à 100 mètres)</li>
                  <li>Code forestier, article L.&nbsp;134-7 (contrôle par le maire)</li>
                  <li>Code forestier, article L.&nbsp;134-8 (responsabilité du propriétaire)</li>
                  <li>Code forestier, articles L.&nbsp;135-2 et L.&nbsp;163-5 (sanctions administratives et pénales)</li>
                  <li>Cour de cassation, 2e chambre civile, 16 janvier 2020, n°&nbsp;18-18.909, publié au Bulletin (définition de la faute intentionnelle excluant la garantie)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit ou de l'assurance compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'assurance habitation couvre-t-elle automatiquement les dégâts d'un incendie de forêt ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La garantie incendie fait partie des garanties de base de la quasi-totalité des contrats multirisques habitation, mais les dépendances extérieures comme la piscine, l'abri de jardin ou la clôture sont souvent en option. Il faut vérifier son propre contrat pour savoir ce qui est réellement couvert au-delà de l'habitation elle-même.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que risque-t-on si l'on n'a pas respecté l'obligation de débroussaillement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si les dommages résultent d'un incendie de forêt et que l'assuré ne s'est pas conformé à son obligation légale de débroussaillement, l'assureur peut appliquer une franchise supplémentaire pouvant atteindre 5 000 euros, en plus de la franchise contractuelle habituelle, en application de l'article L.122-8 du Code des assurances. Des sanctions pénales et administratives distinctes, prévues par le Code forestier, peuvent également s'ajouter.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Une négligence peut-elle faire perdre toute indemnisation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Seule une faute intentionnelle, c'est-à-dire la volonté de causer le dommage tel qu'il est survenu, prive totalement l'assuré de la garantie de l'assureur (article L.113-1 du Code des assurances). Une simple négligence, même fautive, ouvre droit à indemnisation, éventuellement réduite par la franchise supplémentaire de l'article L.122-8, mais jamais supprimée dans son principe.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'assurance auto au tiers couvre-t-elle un véhicule détruit par un incendie ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. L'assurance au tiers, qui ne couvre que la responsabilité civile obligatoire, ne protège pas le véhicule de son propriétaire contre l'incendie. Il faut avoir souscrit une formule intermédiaire ou tous risques incluant la garantie incendie pour être indemnisé.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Conseil en assurances</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Audit de vos contrats existants et comparaison des offres du marché.</p>
              <a href="/conseil-assurances" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                En savoir plus →
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
                <a href="/blog?tag=Assurance%20habitation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Assurance habitation</a>
                <a href="/blog?tag=Incendie%20de%20for%C3%AAt" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Incendie de forêt</a>
                <a href="/blog?tag=D%C3%A9broussaillement" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Débroussaillement</a>
                <a href="/blog?tag=Franchise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Franchise</a>
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
              { cat: 'CONSOMMATION', titre: "Garantie légale de conformité : vos droits face à un produit défectueux en 2026", href: '/blog/garantie-legale-de-conformite-vos-droits-produit-defectueux-2026', date: '2 juin 2026' },
              { cat: 'CONSOMMATION', titre: "Vendre son véhicule d'occasion à un particulier ou un professionnel : la procédure complète", href: '/blog/vente-voiture-occasion-particulier-ou-professionnel-formalites-ants', date: '9 juillet 2026' },
              { cat: 'DROIT IMMOBILIER', titre: "Locataire : vos droits sur le dépôt de garantie, l'état des lieux, le congé et les impayés en 2026", href: '/blog/locataire-droits-depot-garantie-etat-des-lieux-conge-impayes-2026', date: '8 juin 2026' },
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
