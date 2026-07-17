import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Tarifs de crèche 2026 : l'État automatise le calcul, ce que ça change pour les gestionnaires et les familles · Blog Cabinet Cholez-Pagotto`,
  description: `Depuis le 10 juillet 2026, les 12 422 crèches en PSU peuvent récupérer automatiquement les revenus des familles auprès de la CNAF et de la MSA. Fondement juridique du « Dites-le-nous une fois », calcul du tarif, points de vigilance RGPD.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/tarifs-creche-2026-calcul-automatise-dites-le-nous-une-fois',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/tarifs-creche-calcul-automatise-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/tarifs-creche-calcul-automatise-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Tarifs de crèche 2026 : l'État automatise le calcul, ce que ça change pour les gestionnaires et les familles",
      "description": "Depuis le 10 juillet 2026, les 12 422 crèches en PSU peuvent récupérer automatiquement les revenus des familles auprès de la CNAF et de la MSA. Fondement juridique du « Dites-le-nous une fois », calcul du tarif, points de vigilance RGPD.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/tarifs-creche-calcul-automatise-2026.webp",
      "datePublished": "2026-07-17",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/tarifs-creche-2026-calcul-automatise-dites-le-nous-une-fois",
      "keywords": ["Crèche", "EAJE", "PSU", "Tarifs crèche", "RGPD", "Dites-le-nous une fois", "CNAF"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Toutes les crèches sont-elles concernées par le calcul automatique des tarifs ?", "acceptedAnswer": { "@type": "Answer", "text": "Seuls les établissements d'accueil du jeune enfant bénéficiant de la Prestation de Service Unique (PSU) sont concernés, soit 12 422 établissements. Une crèche qui ne bénéficie pas de la PSU n'est pas tenue d'utiliser ce service, bien que rien ne l'empêche d'appliquer volontairement le même barème." }, },
        { "@type": "Question", "name": "Les familles non allocataires de la CAF ou de la MSA sont-elles concernées ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, pas directement par l'API. Ces familles continuent de transmettre leurs justificatifs de revenus par un autre circuit, une interface de téléversement de documents distincte, mise à disposition par l'administration." } },
        { "@type": "Question", "name": "Quel est le fondement juridique du principe « Dites-le-nous une fois » ?", "acceptedAnswer": { "@type": "Answer", "text": "Il est aujourd'hui codifié à l'article L.113-12 du Code des relations entre le public et l'administration, qui dispense l'usager de produire une information déjà détenue par une administration participant au système d'échange prévu à l'article L.114-8 du même code." } },
        { "@type": "Question", "name": "Ce nouveau service est-il conforme au RGPD ?", "acceptedAnswer": { "@type": "Answer", "text": "Le gouvernement présente ce dispositif comme respectueux du RGPD, la donnée circulant entre administrations sans transiter par la famille ni par la crèche sous une forme brute. Le gestionnaire de la crèche reste néanmoins responsable de traitement pour l'usage qu'il fait de ces données une fois reçues, et doit adapter son registre des activités de traitement et l'information donnée aux familles en conséquence." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "Tarifs de crèche 2026" }
    ] }
  ]
}

export default function ArticleTarifsCreche2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Tarifs de crèche 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIE ASSOCIATIVE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PETITE ENFANCE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Tarifs de crèche 2026 : l'État automatise le calcul, ce que ça change pour les gestionnaires et les familles</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 17 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 13 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/tarifs-creche-calcul-automatise-2026.webp" alt="Tarifs de crèche 2026 : l'État automatise le calcul, ce que ça change pour les gestionnaires et les familles" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#fonctionnement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. Comment fonctionne le nouveau service</a></li>
                <li><a href="#fondement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. Le fondement juridique : le principe « Dites-le-nous une fois »</a></li>
                <li><a href="#calcul" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. Rappel : comment se calcule le tarif d'une place en crèche</a></li>
                <li><a href="#gestionnaires" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Ce que ça change pour les gestionnaires</a></li>
                <li><a href="#familles" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Ce que ça change pour les familles</a></li>
                <li><a href="#rgpd" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. RGPD : une automatisation encadrée, pas une dérogation</a></li>
                <li><a href="#vigilance" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VII. Points de vigilance pour les gestionnaires</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Chaque rentrée de septembre, le même rituel administratif se répète dans les crèches françaises : les familles ressortent leur avis d'imposition et leurs attestations CAF, les équipes ressaisissent ces données une par une, avec leur lot habituel de pièces manquantes, de relances et de fautes de frappe. Ce rituel vient de connaître un vrai coup d'accélérateur.</p>
                <p style={{marginBottom: '1rem'}}>Le 10 juillet 2026, le gouvernement a annoncé l'ouverture d'un nouveau service permettant aux établissements d'accueil du jeune enfant (EAJE) de récupérer automatiquement, auprès de la CNAF et de la MSA, les données nécessaires au calcul du tarif des familles, sans leur demander de justificatif. Voici ce que ce dispositif change concrètement, et sur quel fondement juridique il repose.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}depuis le 10 juillet 2026, les 12 422 établissements d'accueil du jeune enfant bénéficiant de la Prestation de Service Unique peuvent obtenir directement, via une API développée par la DINUM, les revenus des familles allocataires de la CNAF ou de la MSA, en application du principe « Dites-le-nous une fois » codifié à l'article L.&nbsp;113-12 du Code des relations entre le public et l'administration, ce qui allège les démarches des familles et fiabilise le calcul du tarif pour les gestionnaires.
                  </p>
                </div>
              </section>

              <section id="fonctionnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. Comment fonctionne le nouveau service</h2>
                <p style={{marginBottom: '1rem'}}>Le dispositif repose sur une interface de programmation (API) développée par la direction interministérielle du numérique (DINUM), qui permet à la crèche d'obtenir directement et de façon sécurisée les données de revenus des familles auprès de la Caisse nationale des allocations familiales (CNAF) et de la Mutualité sociale agricole (MSA). Le pilotage de ce chantier de simplification revient à la direction interministérielle de la transformation publique (DITP), dans le cadre plus large de la politique de simplification des grands moments de vie des Français, ici l'arrivée d'un enfant.</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, le calcul du tarif intervient généralement en septembre, au moment où les tarifs sont recalculés pour l'année. Une première évaluation gouvernementale chiffre le gain de temps à environ 5 minutes par dossier pour les équipes des crèches, ce qui, rapporté aux quelque 495&nbsp;600 dossiers traités chaque année sur l'ensemble du territoire, représente un volume de temps administratif loin d'être anecdotique pour des structures aux effectifs souvent restreints. Le déploiement a déjà commencé dans une trentaine de communes avant sa généralisation.</p>
              </section>

              <section id="fondement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. Le fondement juridique : le principe « Dites-le-nous une fois »</h2>
                <p style={{marginBottom: '1rem'}}>Ce service ne sort pas de nulle part sur le plan juridique. Il s'inscrit dans un principe déjà ancien du droit administratif français, communément appelé « Dites-le-nous une fois » : un usager ne doit pas avoir à fournir à une administration une information que celle-ci détient déjà, ou qu'elle peut obtenir directement auprès d'une autre administration.</p>
                <p style={{marginBottom: '1rem'}}>Ce principe trouve son origine dans le décret n°&nbsp;2001-452 du 25 mai 2001 relatif à la simplification des démarches et formulaires administratifs, avant d'être renforcé par plusieurs textes successifs : la loi n°&nbsp;2011-525 du 17 mai 2011 de simplification et d'amélioration de la qualité du droit, la loi n°&nbsp;2016-1321 du 7 octobre 2016 pour une République numérique, puis l'article 40 de la loi n°&nbsp;2018-727 du 10 août 2018 pour un État au service d'une société de confiance (dite loi ESSOC), qui a organisé une première expérimentation dans trois régions. Il est aujourd'hui codifié à l'<strong>article L.&nbsp;113-12 du Code des relations entre le public et l'administration</strong>, qui dispense l'usager de produire une information déjà détenue par une administration participant au système d'échange de données prévu à l'article L.&nbsp;114-8 du même code. La loi n°&nbsp;2022-217 du 21 février 2022, dite loi 3DS, puis les décrets n°&nbsp;2023-361 et n°&nbsp;2023-362 du 11 mai 2023 relatifs aux échanges d'informations et de données entre administrations, ont donné une nouvelle dynamique à ces échanges, généralisant les interfaces sécurisées entre systèmes d'information au détriment des échanges de pièces papier.</p>
                <p style={{marginBottom: '1rem'}}>C'est précisément ce cadre que mobilise le nouveau service destiné aux crèches : les revenus des familles sont déjà connus de la CNAF ou de la MSA, il n'y a donc plus lieu de les redemander aux parents à l'appui de leur dossier de crèche.</p>
              </section>

              <section id="calcul">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. Rappel : comment se calcule le tarif d'une place en crèche</h2>
                <p style={{marginBottom: '1rem'}}>Pour bien mesurer ce que cette automatisation simplifie, un rappel du mécanisme sous-jacent s'impose. Les établissements d'accueil du jeune enfant, définis à l'article L.&nbsp;2324-1 du Code de la santé publique, qui choisissent le mode de financement de la Prestation de Service Unique (PSU), créée en 2002 et généralisée à l'ensemble du territoire, s'engagent contractuellement, via la convention signée avec la CAF, à appliquer le <strong>barème national des participations familiales</strong> établi par la CNAF, en vigueur depuis 1983 dans une logique d'accessibilité financière de l'accueil pour toutes les familles, quels que soient leurs revenus.</p>
                <p style={{marginBottom: '1rem'}}>Ce barème est proportionnel aux ressources de la famille et tient compte du nombre d'enfants à charge, dans la limite d'un plancher et d'un plafond de ressources mensuelles définis chaque année par la CNAF. Le calcul est horaire : le taux d'effort applicable est multiplié par les ressources mensuelles de la famille, puis par le nombre d'heures de présence prévues au contrat d'accueil, pour aboutir à la participation mensuelle due. C'est cette donnée de ressources, jusqu'ici transmise par les familles elles-mêmes sous forme de justificatifs, que le nouveau service permet désormais d'obtenir directement auprès des organismes qui la détiennent déjà.</p>
              </section>

              <section id="gestionnaires">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Ce que ça change pour les gestionnaires</h2>
                <p style={{marginBottom: '1rem'}}>Pour les directions de crèche et les gestionnaires, souvent des associations ou des structures de l'économie sociale et solidaire aux moyens administratifs limités, l'intérêt est concret : moins de relances auprès des familles pour obtenir les pièces manquantes, moins de saisies manuelles de données de revenus (une opération particulièrement exposée aux erreurs de frappe), et donc des tarifs appliqués plus fiables. Le temps ainsi libéré peut être redirigé vers l'accueil des enfants et l'accompagnement des familles, plutôt que vers la paperasse de rentrée.</p>
              </section>

              <section id="familles">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Ce que ça change pour les familles</h2>
                <p style={{marginBottom: '1rem'}}>Pour les familles allocataires de la CNAF ou de la MSA, c'est une démarche administrative de moins à accomplir chaque année : plus besoin de rassembler avis d'imposition et attestations, ni de les transmettre à la crèche. Les familles qui ne sont pas allocataires de ces deux organismes restent en revanche concernées par un circuit différent : elles continuent de transmettre leurs justificatifs via une interface de téléversement de documents, distincte de l'API automatisée.</p>
              </section>

              <section id="rgpd">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. RGPD : une automatisation encadrée, pas une dérogation</h2>
                <p style={{marginBottom: '1rem'}}>Le gouvernement présente ce service comme respectueux du règlement général sur la protection des données, ce qui mérite d'être nuancé plutôt que pris pour acquis. Le principe « Dites-le-nous une fois » ne dispense en rien du respect des principes du RGPD : il organise seulement une circulation de la donnée entre administrations, sur un fondement légal précis, plutôt que par la remise de pièces papier au gestionnaire de la crèche. La minimisation des données, la limitation des finalités et la traçabilité des échanges (dont le décret de 2019 relatif au dispositif impose la conservation pendant 36 mois) restent des exigences pleinement applicables.</p>
                <p style={{marginBottom: '1rem'}}>Pour le gestionnaire de crèche, ce service ne le dispense pas non plus de sa propre qualité de responsable de traitement pour l'usage qu'il fait, une fois reçues, de ces données de revenus : conservation limitée dans le temps, accès restreint au personnel habilité à établir la facturation, information des familles sur cette nouvelle source de collecte des données.</p>
              </section>

              <section id="vigilance">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VII. Points de vigilance pour les gestionnaires</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Mettre à jour le registre des activités de traitement</strong> de la structure pour intégrer cette nouvelle source de collecte des données de revenus, distincte de la remise directe de justificatifs par les familles.</li>
                  <li><strong>Adapter l'information donnée aux familles</strong>, notamment dans le règlement de fonctionnement de l'établissement, sur l'origine des données utilisées pour le calcul du tarif.</li>
                  <li><strong>Prévoir le cas des familles non allocataires</strong>, qui resteront soumises à la transmission classique de justificatifs, pour éviter toute rupture d'égalité de traitement dans le processus interne de la crèche.</li>
                  <li><strong>Conserver une procédure de secours</strong> en cas d'indisponibilité de l'API, pour ne pas bloquer le calcul des tarifs en période de rentrée.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Sécuriser la conformité RGPD de votre structure petite enfance</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Association ou structure ESS gestionnaire d'un EAJE ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet accompagne les associations et structures de l'ESS sur la gouvernance et la conformité RGPD, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-associations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement associations</a>
                    <a href="/rgpd-conformite" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>RGPD & conformité</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>Le calcul automatisé des tarifs de crèche illustre bien ce que peut apporter, concrètement, un principe juridique déjà ancien mais encore trop peu connu des usagers comme de certains gestionnaires : le « Dites-le-nous une fois ». Pour les familles, c'est une démarche en moins chaque rentrée. Pour les crèches, souvent gérées par des associations aux moyens administratifs comptés, c'est un temps précieux rendu à l'accueil des enfants. Reste aux gestionnaires à documenter correctement ce nouveau flux de données dans leur conformité RGPD, plutôt que de la considérer acquise du seul fait qu'elle vient de l'État.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Direction interministérielle du numérique (numerique.gouv.fr), communiqué du 10 juillet 2026, « Crèches : l'État ouvre le calcul automatique des tarifs pour simplifier la vie des parents et des professionnels de la petite enfance »</li>
                  <li>Code des relations entre le public et l'administration, article L.&nbsp;113-12 (principe « Dites-le-nous une fois »)</li>
                  <li>Code des relations entre le public et l'administration, article L.&nbsp;114-8 (système d'échange de données entre administrations)</li>
                  <li>Loi n°&nbsp;2018-727 du 10 août 2018 pour un État au service d'une société de confiance, article 40</li>
                  <li>Loi n°&nbsp;2022-217 du 21 février 2022 relative à la différenciation, la décentralisation, la déconcentration et portant diverses mesures de simplification de l'action publique locale (loi 3DS), article 162</li>
                  <li>Décrets n°&nbsp;2023-361 et n°&nbsp;2023-362 du 11 mai 2023 relatifs aux échanges d'informations et de données entre administrations</li>
                  <li>Code de la santé publique, article L.&nbsp;2324-1 (définition des établissements d'accueil du jeune enfant)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Toutes les crèches sont-elles concernées par le calcul automatique des tarifs ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Seuls les établissements d'accueil du jeune enfant bénéficiant de la Prestation de Service Unique (PSU) sont concernés, soit 12 422 établissements. Une crèche qui ne bénéficie pas de la PSU n'est pas tenue d'utiliser ce service, bien que rien ne l'empêche d'appliquer volontairement le même barème.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Les familles non allocataires de la CAF ou de la MSA sont-elles concernées ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non, pas directement par l'API. Ces familles continuent de transmettre leurs justificatifs de revenus par un autre circuit, une interface de téléversement de documents distincte, mise à disposition par l'administration.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Quel est le fondement juridique du principe « Dites-le-nous une fois » ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Il est aujourd'hui codifié à l'article L.113-12 du Code des relations entre le public et l'administration, qui dispense l'usager de produire une information déjà détenue par une administration participant au système d'échange prévu à l'article L.114-8 du même code.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Ce nouveau service est-il conforme au RGPD ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Le gouvernement présente ce dispositif comme respectueux du RGPD, la donnée circulant entre administrations sans transiter par la famille ni par la crèche sous une forme brute. Le gestionnaire de la crèche reste néanmoins responsable de traitement pour l'usage qu'il fait de ces données une fois reçues, et doit adapter son registre des activités de traitement et l'information donnée aux familles en conséquence.</p>
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
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/camsp-cmpp-decret-26-juin-2026-associations-medico-social" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px'}}>Associations du médico-social : le décret sur les CAMSP et les CMPP →</a>
              <a href="/blog/sanctions-cnil-2026-videosurveillance-cookies-obligation-cooperer" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>Sanctions CNIL 2026 : vidéosurveillance, cookies et obligation de coopérer →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=Cr%C3%A8che" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Crèche</a>
                <a href="/blog?tag=Petite%20enfance" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Petite enfance</a>
                <a href="/blog?tag=RGPD" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>RGPD</a>
                <a href="/blog?tag=Simplification%20administrative" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Simplification administrative</a>
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
