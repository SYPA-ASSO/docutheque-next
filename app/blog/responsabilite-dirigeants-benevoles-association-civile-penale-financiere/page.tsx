import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Responsabilité des dirigeants bénévoles d'association : civile, pénale et financière · Blog Cabinet Cholez-Pagotto`,
  description: `Le bénévolat ne met pas à l'abri. Responsabilité civile envers l'association et les tiers, responsabilité pénale, action pour insuffisance d'actif, et comment se protéger : le guide complet et vérifié pour les dirigeants d'association.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-dirigeants-benevoles-association.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-dirigeants-benevoles-association.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Responsabilité des dirigeants bénévoles d'association : civile, pénale et financière",
      "description": "Le bénévolat ne met pas à l'abri. Responsabilité civile envers l'association et les tiers, responsabilité pénale, action pour insuffisance d'actif, et comment se protéger : le guide complet et vérifié pour les dirigeants d'association.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-dirigeants-benevoles-association.webp",
      "datePublished": "2026-05-05",
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
      "url": "https://cholez-pagotto.fr/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere",
      "keywords": ["Association", "Dirigeant bénévole", "Responsabilité civile", "Responsabilité pénale", "Insuffisance d'actif", "Faute de gestion", "Loi 1901", "Gouvernance"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Un dirigeant bénévole d'association peut-il être tenu responsable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le bénévolat n'exonère pas de responsabilité. Un dirigeant d'association peut voir sa responsabilité engagée sur trois plans : civil, envers l'association ou envers les tiers ; pénal, pour les infractions commises dans ses fonctions ; et financier, en cas de liquidation judiciaire faisant apparaître une insuffisance d'actif. Le caractère bénévole est pris en compte par le juge, mais ne supprime pas le risque."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre dirigeant de droit et dirigeant de fait ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le dirigeant de droit est celui qui exerce ses fonctions en vertu d'un titre, par exemple le président élu par l'assemblée générale. Le dirigeant de fait est celui qui, sans titre, exerce en réalité un pouvoir de direction sur l'association. Les deux peuvent voir leur responsabilité engagée, notamment au titre de l'insuffisance d'actif, et peuvent être condamnés solidairement."
          }
        },
        {
          "@type": "Question",
          "name": "Le président est-il responsable des dettes de l'association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En principe non : l'association est une personne morale qui répond elle-même de ses dettes. Mais si l'association exerce une activité économique et est mise en liquidation judiciaire avec une insuffisance d'actif, le tribunal peut, en cas de faute de gestion ayant contribué à cette insuffisance, mettre tout ou partie des dettes à la charge du dirigeant, en application de l'article L. 651-2 du code de commerce."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce qu'une faute de gestion ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est un manquement à la bonne gestion de l'association : une action ou une inaction contraire à son intérêt, qui lui cause un préjudice. En matière d'insuffisance d'actif, la simple négligence n'engage pas la responsabilité du dirigeant : il faut une véritable faute de gestion, et un lien de causalité entre cette faute et l'aggravation de l'insuffisance d'actif."
          }
        },
        {
          "@type": "Question",
          "name": "Un dirigeant d'association peut-il être poursuivi pénalement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le bénévolat ne fait pas obstacle à la responsabilité pénale. Sont notamment en jeu l'abus de confiance, le travail dissimulé, les manquements aux règles de sécurité lors de manifestations, ou les blessures involontaires. L'association, en tant que personne morale, peut elle aussi être pénalement responsable, en application de l'article 121-2 du code pénal, sans que cela exclue la responsabilité des personnes physiques."
          }
        },
        {
          "@type": "Question",
          "name": "Le caractère bénévole est-il pris en compte par le juge ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La loi du 1er juillet 2021 a précisé qu'en cas de liquidation judiciaire d'une association non assujettie à l'impôt sur les sociétés, le tribunal apprécie l'existence d'une faute de gestion au regard de la qualité de bénévole du dirigeant. Les juges peuvent ainsi se montrer plus cléments et moduler à la baisse la condamnation. Mais le bénévolat n'est pas une cause d'exonération automatique."
          }
        },
        {
          "@type": "Question",
          "name": "Comment un dirigeant peut-il se protéger ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En respectant scrupuleusement les statuts et le périmètre de son mandat, en tenant une comptabilité régulière, en documentant les décisions par des procès-verbaux, en déclarant et en agissant dans les délais, et en formalisant par écrit les délégations de pouvoir. La souscription d'une assurance responsabilité civile des dirigeants offre un filet de sécurité complémentaire."
          }
        },
        {
          "@type": "Question",
          "name": "L'assurance couvre-t-elle la responsabilité personnelle du dirigeant ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, une assurance responsabilité civile des dirigeants ou mandataires sociaux d'association peut prendre en charge les frais de défense et les condamnations civiles personnelles du dirigeant. C'est un point d'autant plus important que, dans certaines situations, le liquidateur peut agir directement contre l'assureur du dirigeant. Le contrat mérite d'être adapté à la réalité de l'association."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Responsabilité des dirigeants bénévoles" }
      ]
    }
  ]
}

export default function ArticleResponsabiliteDirigeantsBenevoles() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Responsabilité des dirigeants bénévoles</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIE ASSOCIATIVE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>RESPONSABILITÉ</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Responsabilité des dirigeants bénévoles d'association : civile, pénale et financière</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 5 mai 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 15 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/responsabilite-dirigeants-benevoles-association.webp"
                alt="Responsabilité des dirigeants bénévoles d'association : civile, pénale et financière"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#principe" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le bénévolat ne met pas à l'abri</a></li>
                <li><a href="#civile-asso" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Responsabilité civile envers l'association</a></li>
                <li><a href="#civile-tiers" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Responsabilité civile envers les tiers</a></li>
                <li><a href="#penale" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. La responsabilité pénale</a></li>
                <li><a href="#financiere" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. L'insuffisance d'actif</a></li>
                <li><a href="#proteger" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Se protéger : les bons réflexes</a></li>
                <li><a href="#assurance" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. L'assurance des dirigeants</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Accepter la présidence ou la trésorerie d'une association, c'est rendre un service précieux. C'est aussi, on l'oublie souvent, endosser de véritables responsabilités. Le printemps, saison des assemblées générales et des renouvellements de bureau, est le bon moment pour le rappeler : <strong>le bénévolat ne met pas à l'abri</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point, de façon complète et vérifiée, sur les trois plans de responsabilité d'un dirigeant associatif : la responsabilité <strong>civile</strong>, envers l'association comme envers les tiers ; la responsabilité <strong>pénale</strong> ; et la responsabilité <strong>financière</strong>, en cas de difficultés. Et, surtout, sur la manière de se protéger.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> dans la grande majorité des cas, c'est l'<strong>association</strong>, personne morale, qui répond de ses actes ; le dirigeant n'engage sa responsabilité personnelle qu'en cas de <strong>faute</strong>, et le juge tient compte de son <strong>statut de bénévole</strong>, sans pour autant l'exonérer.
                  </p>
                </div>
              </section>

              <section id="principe">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le bénévolat ne met pas à l'abri
                </h2>
                <p style={{marginBottom: '1rem'}}>Première idée à corriger : un dirigeant n'est pas protégé par le seul fait d'exercer gratuitement. La loi et la jurisprudence retiennent que le <strong>bénévolat n'exonère pas</strong> de responsabilité ; il constitue, tout au plus, une circonstance que le juge prend en compte.</p>
                <p style={{marginBottom: '1rem'}}>Deuxième précision : la responsabilité peut viser le <strong>dirigeant de droit</strong> (celui qui exerce en vertu d'un titre, comme le président élu), mais aussi le <strong>dirigeant de fait</strong>, c'est-à-dire celui qui, sans titre, exerce en réalité un pouvoir de direction. Les deux peuvent être recherchés, parfois solidairement. Enfin, ces responsabilités se déclinent sur trois plans distincts, qu'il faut bien séparer : civil, pénal et financier.</p>
              </section>

              <section id="civile-asso">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Responsabilité civile envers l'association
                </h2>
                <p style={{marginBottom: '1rem'}}>Envers l'association elle-même, le dirigeant agit comme un <strong>mandataire</strong> : il doit exécuter sa mission conformément aux statuts et à l'intérêt de l'association. S'il commet une <strong>faute de gestion</strong> qui lui cause un préjudice, il peut en répondre. L'article 1992 du code civil prévoit d'ailleurs que la responsabilité du mandataire bénévole est appréciée <strong>moins rigoureusement</strong> que celle du mandataire rémunéré, ce qui traduit une certaine indulgence pour l'engagement gratuit.</p>
                <p style={{marginBottom: '1rem'}}>Cette indulgence a toutefois ses limites, et ne joue pas dans tous les domaines, notamment lorsque l'association connaît de graves difficultés financières, comme nous le verrons plus loin.</p>
              </section>

              <section id="civile-tiers">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Responsabilité civile envers les tiers
                </h2>
                <p style={{marginBottom: '1rem'}}>Envers les tiers (adhérents, partenaires, public, fournisseurs), le principe est protecteur pour le dirigeant : c'est <strong>l'association, personne morale, qui répond</strong> en principe des dommages causés par ses dirigeants agissant dans le cadre de leurs fonctions, sur le fondement de la responsabilité civile (article 1240 du code civil).</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'exception à connaître.</strong> Le dirigeant engage sa responsabilité <strong>personnelle</strong> envers les tiers lorsqu'il commet une <strong>faute détachable de ses fonctions</strong>, c'est-à-dire une faute d'une particulière gravité, étrangère à l'exercice normal de son mandat. Dans ce cas, la victime peut agir directement contre lui, sur son patrimoine propre.
                  </p>
                </div>
              </section>

              <section id="penale">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. La responsabilité pénale
                </h2>
                <p style={{marginBottom: '1rem'}}>En matière pénale, le principe est clair : la responsabilité est <strong>personnelle</strong>, et le bénévolat n'y fait pas obstacle. Un dirigeant peut être poursuivi pour des infractions commises dans l'exercice de ses fonctions, parmi lesquelles l'<strong>abus de confiance</strong> (détournement de fonds de l'association), le <strong>travail dissimulé</strong>, les <strong>manquements aux règles de sécurité</strong> lors de manifestations ou dans des locaux recevant du public, ou encore les <strong>blessures involontaires</strong>.</p>
                <p style={{marginBottom: '1rem'}}>À noter : l'association, en tant que <strong>personne morale</strong>, peut elle aussi être pénalement responsable des infractions commises pour son compte par ses organes ou représentants, en application de l'article 121-2 du code pénal, sans que cela exclue la responsabilité des personnes physiques. La <strong>délégation de pouvoir</strong>, confiée par écrit à une personne dotée de la compétence, de l'autorité et des moyens nécessaires, peut par ailleurs transférer une partie de cette responsabilité.</p>
              </section>

              <section id="financiere">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. L'insuffisance d'actif
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le risque financier le plus redouté, mais il faut bien en cerner les contours. Lorsqu'une association exerçant une <strong>activité économique</strong> est mise en <strong>liquidation judiciaire</strong> et que celle-ci fait apparaître une <strong>insuffisance d'actif</strong> (certains créanciers ne sont pas payés), le tribunal peut, en cas de <strong>faute de gestion</strong> ayant contribué à cette insuffisance, en mettre tout ou partie à la charge des dirigeants. C'est l'action en responsabilité pour insuffisance d'actif, prévue à l'<strong>article L. 651-2 du code de commerce</strong>, anciennement appelée action en comblement de passif.</p>
                <p style={{marginBottom: '1rem'}}>Plusieurs garde-fous existent. D'abord, la <strong>simple négligence</strong> du dirigeant ne suffit pas : il faut une véritable faute de gestion, reliée par un lien de causalité à l'insuffisance d'actif. Ensuite, le montant de la condamnation est <strong>plafonné</strong> à l'insuffisance d'actif, et le juge peut le moduler à la baisse.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Une protection spécifique du bénévole.</strong> La <strong>loi du 1er juillet 2021</strong> a complété l'article L. 651-2 : lorsque la liquidation concerne une association non assujettie à l'impôt sur les sociétés, le tribunal <strong>apprécie la faute de gestion au regard de la qualité de bénévole du dirigeant</strong>. Les juges sont ainsi invités à la clémence. Le bénévolat n'efface pas le risque, mais il est désormais expressément pris en compte.
                  </p>
                </div>
              </section>

              <section id="proteger">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Se protéger : les bons réflexes
                </h2>
                <p style={{marginBottom: '1rem'}}>La meilleure protection reste une gestion rigoureuse et documentée. Quelques réflexes simples réduisent considérablement le risque.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Respecter les statuts et son mandat.</strong> Agir dans le périmètre fixé, et faire valider par l'organe compétent (assemblée générale, conseil) les décisions qui le requièrent.</li>
                  <li><strong>Tenir une comptabilité régulière</strong> et suivre la situation financière, pour anticiper toute difficulté plutôt que la subir.</li>
                  <li><strong>Documenter les décisions</strong> par des procès-verbaux datés et signés : ils constituent la preuve d'une gestion diligente.</li>
                  <li><strong>Agir dans les délais</strong>, notamment pour les déclarations et, le cas échéant, en cas de cessation des paiements.</li>
                  <li><strong>Formaliser les délégations de pouvoir</strong> par écrit, en confiant à chacun des moyens à la hauteur de ses responsabilités.</li>
                </ul>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Procès-verbal de conseil d'administration</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Documentez vos décisions : un PV de conseil (ou d'assemblée) daté et signé constitue la preuve d'une gestion diligente, votre meilleure protection.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-proces-verbal-conseil-administration" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-gouvernance-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Gouvernance d'association</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Délégation de pouvoirs</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Pour transférer valablement une partie de la responsabilité, notre modèle précise le périmètre, l'autorité et les moyens confiés au délégataire, conditions de sa validité.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-delegation-de-pouvoirs-association" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-gouvernance-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Gouvernance d'association</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Quitus et décharge des dirigeants</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>À chaque exercice, faites approuver la gestion par l'assemblée : notre modèle de procès-verbal de quitus et de décharge sécurise les dirigeants sortants comme en place.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-pv-quitus-decharge-dirigeants" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-gouvernance-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Gouvernance d'association</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Gouvernance d'association</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Les actes qui sécurisent vos dirigeants, réunis et à prix groupé : procès-verbal de conseil d'administration, procès-verbal d'assemblée générale ordinaire, quitus et décharge, et délégation de pouvoirs.</p>
                  <a href="/catalogue/pack-gouvernance-association" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Gouvernance →</a>
                </div>
              </section>

              <section id="assurance">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. L'assurance des dirigeants
                </h2>
                <p style={{marginBottom: '1rem'}}>Au-delà des bonnes pratiques, l'assurance constitue un filet de sécurité souvent méconnu. Une <strong>assurance responsabilité civile des dirigeants</strong> (ou des mandataires sociaux d'association) peut prendre en charge les <strong>frais de défense</strong> et les <strong>condamnations civiles personnelles</strong> du dirigeant, distinctement de l'assurance responsabilité civile de l'association elle-même.</p>
                <p style={{marginBottom: '1rem'}}>Ce point est d'autant plus important que, dans certaines situations, le liquidateur peut agir <strong>directement contre l'assureur</strong> du dirigeant. Encore faut-il que le contrat soit réellement adapté à la nature de l'association, à ses activités et à ses risques. C'est précisément là qu'un regard de spécialiste, à la fois juridique et assurantiel, fait la différence : bien identifier l'exposition, puis bien couvrir.</p>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Responsabilité civile des dirigeants</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Distincte de la RC de l'association, elle prend en charge les frais de défense et les condamnations civiles personnelles du dirigeant, y compris en cas d'action du liquidateur. En courtier, le cabinet vérifie votre couverture et l'adapte à vos activités et à vos risques.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Sécuriser vos dirigeants et votre association</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Gouvernance, statuts, responsabilités, couverture assurantielle : le cabinet accompagne les associations sous le double angle juridique et assurance. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-associations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des associations</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Diriger une association engage, mais le risque doit être regardé avec mesure : dans l'immense majorité des cas, c'est la personne morale qui répond, et la responsabilité personnelle du dirigeant suppose une faute caractérisée. Le législateur a d'ailleurs renforcé la prise en compte du bénévolat, sans pour autant ouvrir une impunité.</p>
                <p style={{marginBottom: '1rem'}}>Le bon équilibre consiste à s'engager sereinement, tout en adoptant une gestion rigoureuse et documentée, et en se dotant d'une couverture assurantielle adaptée. En cas de doute sur une situation précise, mieux vaut poser la question en amont.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie sur des textes officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code de commerce, article L. 651-2 (responsabilité pour insuffisance d'actif), <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>legifrance.gouv.fr</a></li>
                  <li>Loi n° 2021-874 du 1er juillet 2021 (prise en compte de la qualité de bénévole du dirigeant en cas d'insuffisance d'actif)</li>
                  <li>Code civil, articles 1240 (responsabilité du fait personnel) et 1992 (responsabilité du mandataire, atténuée pour le mandat gratuit)</li>
                  <li>Code pénal, article 121-2 (responsabilité pénale des personnes morales) et portail <a href="https://www.associations.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>associations.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Il présente des principes généraux qui ne dispensent pas d'une analyse au cas par cas.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un dirigeant bénévole d'association peut-il être tenu responsable ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le bénévolat n'exonère pas de responsabilité. Un dirigeant peut voir sa responsabilité engagée sur trois plans : civil, envers l'association ou les tiers ; pénal, pour les infractions commises dans ses fonctions ; et financier, en cas de liquidation judiciaire faisant apparaître une insuffisance d'actif. Le caractère bénévole est pris en compte par le juge, mais ne supprime pas le risque.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la différence entre dirigeant de droit et dirigeant de fait ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le dirigeant de droit exerce ses fonctions en vertu d'un titre, par exemple le président élu par l'assemblée générale. Le dirigeant de fait est celui qui, sans titre, exerce en réalité un pouvoir de direction sur l'association. Les deux peuvent voir leur responsabilité engagée, notamment au titre de l'insuffisance d'actif, et peuvent être condamnés solidairement.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le président est-il responsable des dettes de l'association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En principe non : l'association est une personne morale qui répond elle-même de ses dettes. Mais si l'association exerce une activité économique et est mise en liquidation judiciaire avec une insuffisance d'actif, le tribunal peut, en cas de faute de gestion ayant contribué à cette insuffisance, mettre tout ou partie des dettes à la charge du dirigeant, en application de l'article L. 651-2 du code de commerce.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce qu'une faute de gestion ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est un manquement à la bonne gestion de l'association : une action ou une inaction contraire à son intérêt, qui lui cause un préjudice. En matière d'insuffisance d'actif, la simple négligence n'engage pas la responsabilité du dirigeant : il faut une véritable faute de gestion, et un lien de causalité entre cette faute et l'aggravation de l'insuffisance d'actif.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un dirigeant d'association peut-il être poursuivi pénalement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le bénévolat ne fait pas obstacle à la responsabilité pénale. Sont notamment en jeu l'abus de confiance, le travail dissimulé, les manquements aux règles de sécurité lors de manifestations, ou les blessures involontaires. L'association, en tant que personne morale, peut elle aussi être pénalement responsable, en application de l'article 121-2 du code pénal, sans que cela exclue la responsabilité des personnes physiques.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le caractère bénévole est-il pris en compte par le juge ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La loi du 1er juillet 2021 a précisé qu'en cas de liquidation judiciaire d'une association non assujettie à l'impôt sur les sociétés, le tribunal apprécie l'existence d'une faute de gestion au regard de la qualité de bénévole du dirigeant. Les juges peuvent ainsi se montrer plus cléments et moduler à la baisse la condamnation. Mais le bénévolat n'est pas une cause d'exonération automatique.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment un dirigeant peut-il se protéger ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En respectant scrupuleusement les statuts et le périmètre de son mandat, en tenant une comptabilité régulière, en documentant les décisions par des procès-verbaux, en agissant dans les délais, et en formalisant par écrit les délégations de pouvoir. La souscription d'une assurance responsabilité civile des dirigeants offre un filet de sécurité complémentaire.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'assurance couvre-t-elle la responsabilité personnelle du dirigeant ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, une assurance responsabilité civile des dirigeants ou mandataires sociaux d'association peut prendre en charge les frais de défense et les condamnations civiles personnelles du dirigeant. C'est un point d'autant plus important que, dans certaines situations, le liquidateur peut agir directement contre l'assureur du dirigeant. Le contrat mérite d'être adapté à la réalité de l'association.</p>
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
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Accompagnement des associations</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Gouvernance, responsabilités, statuts, assurance : le cabinet sécurise les dirigeants et leur association, sous l'angle juridique et assurantiel.</p>
              <a href="/accompagnement-associations" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Découvrir l'accompagnement →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/association-imposable-non-lucrativite-franchise-impots-commerciaux-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Votre association est-elle imposable ? Non-lucrativité et franchise 2026 →
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
                <a href="/blog?tag=Association" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Association</a>
                <a href="/blog?tag=Dirigeant%20b%C3%A9n%C3%A9vole" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Dirigeant bénévole</a>
                <a href="/blog?tag=Responsabilit%C3%A9" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Responsabilité</a>
                <a href="/blog?tag=Gouvernance" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Gouvernance</a>
                <a href="/blog?tag=Loi%201901" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Loi 1901</a>
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
