import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "INPI : ce que change le décret du 30 juin 2026 pour vos marques, brevets et formalités · Blog Cabinet Cholez-Pagotto",
  description: "Le décret n° 2026-576 du 30 juin 2026 harmonise, simplifie et modernise les procédures de l'INPI. Oppositions de marques, délais, notifications, brevets, protection des données personnelles : ce qui change concrètement pour les entreprises dès le 2 juillet 2026.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/inpi-decret-30-juin-2026-marques-brevets-procedures-ce-qui-change',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/inpi-decret-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/inpi-decret-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "INPI : ce que change le décret du 30 juin 2026 pour vos marques, brevets et formalités",
      "description": "Le décret n° 2026-576 du 30 juin 2026 harmonise, simplifie et modernise les procédures de l'INPI. Oppositions de marques, délais, notifications, brevets, protection des données personnelles : ce qui change concrètement pour les entreprises dès le 2 juillet 2026.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/inpi-decret-2026.webp",
      "datePublished": "2026-07-02",
      "dateModified": "2026-07-02",
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
      "url": "https://cholez-pagotto.fr/blog/inpi-decret-30-juin-2026-marques-brevets-procedures-ce-qui-change",
      "keywords": [
        "INPI",
        "décret 2026-576",
        "marques",
        "brevets",
        "opposition de marque",
        "propriété industrielle",
        "formalités d'entreprise",
        "données personnelles",
        "TPE"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le décret s'applique-t-il aux procédures déjà en cours ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, en principe. Le décret entre en vigueur le 2 juillet 2026 et s'applique aux procédures en cours à cette date, sauf pour les dispositions de ses articles 11 et 32 à 36, réservées aux demandes formulées à compter de son entrée en vigueur."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qui change pour les oppositions de marques ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux choses principalement : le délai imparti à l'INPI pour statuer sur les oppositions et demandes en annulation de marques passe de trois à quatre mois, aligné sur les oppositions brevets, et une opposition frappée d'irrecevabilité peut désormais être régularisée, ce qui n'était pas possible auparavant."
          }
        },
        {
          "@type": "Question",
          "name": "Mes coordonnées personnelles resteront-elles publiées si je dépose une marque en mon nom propre ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret limite les informations publiées permettant d'identifier un déposant personne physique à ses nom, prénoms, commune et pays de résidence, pour plusieurs procédures dont les marques et les brevets. L'adresse complète du domicile n'a plus vocation à être publiée dans ces cas."
          }
        },
        {
          "@type": "Question",
          "name": "Ce décret modifie-t-il aussi le guichet unique des formalités d'entreprise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le décret couvre à la fois les procédures de propriété industrielle et les formalités administratives des entreprises gérées par l'INPI. Pour le fonctionnement pratique du guichet unique (immatriculations, modifications, cessations), notre guide dédié reste la bonne porte d'entrée ; le présent article se concentre sur le volet propriété industrielle et procédural."
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
          "name": "INPI : le décret du 30 juin 2026"
        }
      ]
    }
  ]
}

export default function ArticleInpiDecret2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>INPI : le décret du 30 juin 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PROPRIÉTÉ INDUSTRIELLE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMALITÉS</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ENTREPRISES</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>INPI : ce que change le décret du 30 juin 2026 pour vos marques, brevets et formalités</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 2 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 11 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/inpi-decret-2026.webp"
                alt="INPI : ce que change le décret du 30 juin 2026 pour vos marques, brevets et formalités"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#portee" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Un texte large, qui dépasse les seules formalités d'entreprise</a></li>
                <li><a href="#pratique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Ce qui change le plus en pratique</a></li>
                <li><a href="#donnees" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Une évolution importante pour les données personnelles</a></li>
                <li><a href="#petites" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Pourquoi ce texte mérite d'être lu même par une « petite » structure</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>L'INPI ne gère pas seulement les formalités d'entreprise du guichet unique. L'Institut national de la propriété industrielle est aussi au cœur de la vie des <strong>marques</strong>, des <strong>brevets</strong>, des <strong>dessins et modèles</strong>, et de nombreuses démarches stratégiques pour les entreprises. Or le <strong>décret n°&nbsp;2026-576 du 30 juin 2026</strong>, publié au Journal officiel du 1er juillet 2026, vient harmoniser, simplifier et moderniser plusieurs pans de ses procédures.</p>
                <p style={{marginBottom: '1rem'}}>Cet article complète notre guide consacré au <a href="/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter" style={{color: '#1a4fba', fontWeight: 600}}>guichet unique INPI 2026</a> : là où ce premier article explique comment déposer une formalité d'entreprise, celui-ci répond à une autre question, très pratique : <strong>qu'est-ce qui change dans les procédures gérées par l'INPI lui-même</strong>, pour vos marques, vos brevets et vos dossiers en cours ?</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> le décret n°&nbsp;2026-576 du 30 juin 2026, publié au Journal officiel du 1er juillet, entre en vigueur le <strong>2 juillet 2026</strong>, s'applique en principe <strong>aux procédures en cours</strong>, et modifie à la fois les <strong>délais</strong> (quatre mois pour les décisions d'opposition et d'annulation de marques), les <strong>notifications</strong>, plusieurs règles relatives aux <strong>brevets</strong> et la <strong>publication des données personnelles</strong> des personnes physiques.
                  </p>
                </div>
              </section>

              <section id="portee">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Un texte large, qui dépasse les seules formalités d'entreprise
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret vise expressément à <strong>harmoniser, simplifier et moderniser</strong> les procédures de l'INPI dans les domaines de la propriété industrielle et des formalités administratives des entreprises. Il entre en vigueur le <strong>lendemain de sa publication</strong>, soit le 2 juillet 2026, et ses dispositions sont, sauf exceptions, <strong>applicables aux procédures en cours</strong> à cette date.</p>
                <p style={{marginBottom: '1rem'}}>Ce n'est donc pas un texte purement technique réservé aux spécialistes du Code de la propriété intellectuelle : il peut concerner directement une TPE qui dépose une marque, un indépendant qui défend son nom commercial, ou une société qui suit une procédure d'opposition devant l'INPI. Les exceptions à l'application immédiate sont limitées : les dispositions des articles 11 et 32 à 36 du décret ne s'appliquent qu'aux demandes formulées à compter de son entrée en vigueur.</p>
              </section>

              <section id="pratique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Ce qui change le plus en pratique
                </h2>
                <p style={{marginBottom: '1rem'}}>Parmi les évolutions concrètes mises en avant par l'INPI, cinq retiennent particulièrement l'attention des entreprises :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Délai de décision porté à quatre mois pour les oppositions et annulations de marques.</strong> Ce délai, jusqu'ici de trois mois, est aligné sur celui des oppositions en matière de brevets. L'application est immédiate, y compris pour les dossiers en cours au 2 juillet 2026.</li>
                  <li><strong>Régularisation possible des oppositions de marques irrecevables.</strong> Une opposition entachée d'une irrecevabilité pourra désormais être régularisée, alors que ce n'était pas possible auparavant : c'est une seconde chance procédurale bienvenue pour les titulaires de droits.</li>
                  <li><strong>Suppression des enveloppes de déclaration d'invention de salariés</strong>, un dispositif devenu obsolète.</li>
                  <li><strong>Allègements en matière de brevets</strong> : le déposant d'une demande de brevet est dispensé de fournir une copie de certains dépôts antérieurs en cas de priorité interne, et le délai des observations de tiers pour les certificats d'utilité est fixé à trois mois.</li>
                  <li><strong>Fin de l'impression des fascicules de brevets</strong> : le décret supprime de nombreuses références réglementaires à l'impression du fascicule, consacrant la dématérialisation complète.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Si vous avez un dossier en cours à l'INPI</strong>, opposition, annulation, demande de brevet ou de certificat d'utilité, vérifiez dès maintenant si les nouveaux délais et modalités vous sont applicables : l'application aux procédures en cours signifie que vos échéances ont pu changer au 2 juillet 2026.
                  </p>
                </div>
              </section>

              <section id="donnees">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Une évolution importante pour les données personnelles
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret comporte aussi un volet discret mais important de <strong>protection des données personnelles</strong>. Pour plusieurs procédures, lorsque le déposant ou le demandeur est une <strong>personne physique</strong>, les informations publiées permettant de l'identifier sont désormais limitées à ses <strong>nom, prénoms, commune et pays de résidence</strong>. Cette logique s'applique pour les marques, les brevets et d'autres titres.</p>
                <p style={{marginBottom: '1rem'}}>Pour les entrepreneurs individuels, inventeurs et déposants personnes physiques, c'est une évolution utile : elle préserve la lisibilité publique des registres, qui reste indispensable à la sécurité juridique des tiers, tout en réduisant l'exposition de données personnelles inutiles, comme l'adresse complète du domicile. Elle s'inscrit dans le mouvement plus général de conciliation entre publicité légale et protection de la vie privée.</p>
              </section>

              <section id="petites">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Pourquoi ce texte mérite d'être lu même par une « petite » structure
                </h2>
                <p style={{marginBottom: '1rem'}}>Beaucoup de petites entreprises pensent que les changements procéduraux de l'INPI concernent surtout les grands groupes ou les conseils en propriété industrielle. C'est une erreur. Une <strong>marque mal déposée</strong>, une <strong>opposition mal suivie</strong> ou une <strong>notification mal reçue</strong> peut bloquer un lancement commercial, retarder une levée de fonds ou fragiliser une identité de marque construite pendant des années.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est simple : si vous avez un dossier en cours ou si vous envisagez un dépôt de marque ou de brevet, vérifiez si la nouvelle procédure vous est applicable, notez les nouveaux délais dans votre calendrier, et relisez aussi notre article sur le guichet unique INPI 2026 pour la partie formalités d'entreprise.</p>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ACCOMPAGNEMENT</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Vos formalités d'entreprise, suivies par le cabinet</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Immatriculations, modifications, dépôts au guichet unique : le cabinet prend en charge vos formalités d'entreprise de bout en bout et sécurise vos échéances, en toute conformité avec la loi du 31 décembre 1971.</p>
                  <a href="/formalites-juridiques-externalisees" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le service &rarr;</a>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret du 30 juin 2026 n'est pas un texte « de plus » sur l'INPI. Il modifie plusieurs points concrets de procédure, avec un impact immédiat sur les pratiques de dépôt, d'opposition, de notification et de publication. Pour les entreprises, et surtout pour les petites structures, cela signifie une chose : <strong>les règles de forme changent, donc les réflexes doivent changer aussi</strong>. Un délai porté de trois à quatre mois, une régularisation devenue possible, une publication de données réduite : autant de détails qui, dans un dossier réel, font la différence.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur le décret n°&nbsp;2026-576 du 30 juin 2026 portant diverses mesures d'harmonisation, de simplification et de modernisation des procédures de l'Institut national de la propriété industrielle, publié au <a href="https://www.legifrance.gouv.fr/jorf/jo/2026/07/01/0152" style={{color: '#1a4fba', fontWeight: 600}}>Journal officiel du 1er juillet 2026</a>, ainsi que sur la communication officielle de l'INPI présentant les principales mesures du texte.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le décret s'applique-t-il aux procédures déjà en cours ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, en principe. Le décret entre en vigueur le 2 juillet 2026 et s'applique aux procédures en cours à cette date, sauf pour les dispositions de ses articles 11 et 32 à 36, réservées aux demandes formulées à compter de son entrée en vigueur.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce qui change pour les oppositions de marques ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux choses principalement : le délai imparti à l'INPI pour statuer sur les oppositions et demandes en annulation de marques passe de trois à quatre mois, aligné sur les oppositions brevets, et une opposition frappée d'irrecevabilité peut désormais être régularisée, ce qui n'était pas possible auparavant.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mes coordonnées personnelles resteront-elles publiées si je dépose une marque en mon nom propre ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret limite les informations publiées permettant d'identifier un déposant personne physique à ses nom, prénoms, commune et pays de résidence, pour plusieurs procédures dont les marques et les brevets. L'adresse complète du domicile n'a plus vocation à être publiée dans ces cas.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Ce décret modifie-t-il aussi le guichet unique des formalités d'entreprise ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le décret couvre à la fois les procédures de propriété industrielle et les formalités administratives des entreprises gérées par l'INPI. Pour le fonctionnement pratique du guichet unique (immatriculations, modifications, cessations), notre guide dédié reste la bonne porte d'entrée ; le présent article se concentre sur le volet propriété industrielle et procédural.</p>
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
              <a href="/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter &rarr;
              </a>
              <a href="/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Arnaque au registre des sociétés européennes : ne laissez pas les fraudeurs saboter votre lancement &rarr;
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
                <a href="/blog?tag=Propri%C3%A9t%C3%A9%20industrielle" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Propriété industrielle</a>
                <a href="/blog?tag=Formalit%C3%A9s" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Formalités</a>
                <a href="/blog?tag=Marques" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Marques</a>
                <a href="/blog?tag=Entreprises" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Entreprises</a>
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
