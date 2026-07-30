import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `RGPD et prud'hommes : pourquoi la seule violation ne suffit plus à obtenir réparation (Cass. soc., 24 juin 2026) · Blog Cabinet Cholez-Pagotto`,
  description: `La Cour de cassation juge que la seule violation du RGPD par l'employeur n'ouvre plus automatiquement droit à réparation pour le salarié. Ce que ça change, et pourquoi l'audit RGPD des données RH reste indispensable.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/rgpd-prudhommes-indemnisation-salarie-cour-cassation-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/rgpd-prudhommes-indemnisation-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/rgpd-prudhommes-indemnisation-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "RGPD et prud'hommes : pourquoi la seule violation ne suffit plus à obtenir réparation (Cass. soc., 24 juin 2026)",
      "description": "La Cour de cassation juge que la seule violation du RGPD par l'employeur n'ouvre plus automatiquement droit à réparation pour le salarié. Ce que ça change, et pourquoi l'audit RGPD des données RH reste indispensable.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/rgpd-prudhommes-indemnisation-2026.webp",
      "datePublished": "2026-07-16",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/rgpd-prudhommes-indemnisation-salarie-cour-cassation-2026",
      "keywords": ["RGPD", "Prud'hommes", "Contentieux prud'homal", "Préjudice", "Données RH", "Cour de cassation"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Un salarié peut-il obtenir des dommages-intérêts pour la seule violation du RGPD par son employeur ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, plus depuis l'arrêt du 24 juin 2026. La Cour de cassation exige désormais que le salarié démontre un préjudice réel, matériel ou moral, résultant de cette violation, ainsi qu'un lien de causalité. Le simple constat du manquement ne suffit plus à ouvrir un droit à réparation automatique." }, },
        { "@type": "Question", "name": "Une preuve obtenue en violation du RGPD peut-elle être utilisée devant le conseil de prud'hommes ?", "acceptedAnswer": { "@type": "Answer", "text": "Elle peut l'être, sous conditions. La Cour de cassation admet qu'une preuve déloyale ou illicite soit produite dès lors que sa production est indispensable à l'exercice du droit à la preuve et proportionnée au but poursuivi, ce qui relève d'une appréciation distincte de celle du droit à réparation." } },
        { "@type": "Question", "name": "L'employeur n'a-t-il plus rien à craindre en cas de manquement au RGPD sur les données de ses salariés ?", "acceptedAnswer": { "@type": "Answer", "text": "Si, sur trois plans distincts : une sanction de la CNIL reste possible indépendamment du contentieux prud'homal, une indemnisation du salarié reste due dès qu'un préjudice réel est démontré, même minime, et la preuve obtenue en violation du RGPD peut, selon les cas, être écartée des débats." } },
        { "@type": "Question", "name": "Quelles données RH sont les plus exposées à un contentieux RGPD ?", "acceptedAnswer": { "@type": "Answer", "text": "La géolocalisation des véhicules professionnels, les outils de mesure de l'activité, la vidéosurveillance, et la messagerie professionnelle, dès lors que ces dispositifs n'ont pas fait l'objet d'une information préalable des salariés et d'une consultation du CSE, ou reposent sur une base légale insuffisante." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "RGPD et prud'hommes" }
    ] }
  ]
}

export default function ArticleRgpdPrudhommes2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>RGPD et prud'hommes</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>RGPD & CONFORMITÉ</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>JURISPRUDENCE 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>RGPD et prud'hommes : pourquoi la seule violation ne suffit plus à obtenir réparation</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 16 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 12 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/rgpd-prudhommes-indemnisation-2026.webp" alt="RGPD et prud'hommes : pourquoi la seule violation ne suffit plus à obtenir réparation" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Depuis l'arrêt du 24 juin 2026, un salarié ne peut plus obtenir des dommages-intérêts pour la seule violation du RGPD par son employeur : il doit démontrer un préjudice réel et un lien de causalité.</li>
                <li>Une preuve obtenue en violation du RGPD peut être utilisée devant le conseil de prud'hommes sous conditions, dès lors que sa production est indispensable à l'exercice du droit à la preuve et proportionnée au but poursuivi.</li>
                <li>L'employeur reste exposé sur trois plans : sanction de la CNIL, indemnisation du salarié dès qu'un préjudice réel est démontré, et recevabilité d'une preuve obtenue en violation du RGPD.</li>
                <li>Les données RH les plus exposées à un contentieux RGPD sont la géolocalisation des véhicules professionnels, les outils de mesure de l'activité, la vidéosurveillance et la messagerie professionnelle.</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#affaire" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. L'affaire jugée le 24 juin 2026</a></li>
                <li><a href="#principe" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. Ce que pose la Cour de cassation</a></li>
                <li><a href="#cjue" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. Un alignement sur la CJUE et sur une tendance déjà ancienne</a></li>
                <li><a href="#preuve" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Un autre terrain : la licéité de la preuve</a></li>
                <li><a href="#risques" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Ce que l'employeur risque encore</a></li>
                <li><a href="#angle-mort" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. L'angle mort des données RH internes</a></li>
                <li><a href="#pratique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VII. Ce que ça change concrètement</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le RGPD n'est plus seulement une affaire de conformité ou de contrôle de la CNIL. Il est devenu un terrain de discussion à part entière devant le conseil de prud'hommes, dès qu'un salarié conteste un licenciement, une preuve, ou un dispositif de surveillance. Mais un arrêt du 24 juin 2026 vient poser une limite nette à ce que ce terrain permet réellement d'obtenir, et elle mérite d'être bien comprise avant d'en tirer des conclusions hâtives.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}la Cour de cassation juge que la seule violation du RGPD par l'employeur n'ouvre plus automatiquement droit à réparation pour le salarié, qui doit désormais démontrer un préjudice réel et un lien de causalité, sans que cela ne dispense pour autant l'employeur de sécuriser ses traitements de données RH, qui restent un terrain de contentieux à part entière.
                  </p>
                </div>
              </section>

              <section id="affaire">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. L'affaire jugée le 24 juin 2026</h2>
                <p style={{marginBottom: '1rem'}}>Un salarié, analyste en stratégies algorithmiques, avait été licencié après avoir cliqué à plusieurs reprises sur des liens suspects dans le cadre d'une campagne de simulation d'hameçonnage organisée par son employeur. Les éléments issus de ce test avaient permis son identification et fondé son licenciement.</p>
                <p style={{marginBottom: '1rem'}}>Devant les juges, trois questions distinctes se posaient. Le comportement du salarié justifiait-il une sanction disciplinaire ? La cour d'appel avait répondu par l'affirmative, retenant une cause réelle et sérieuse. Les preuves issues du dispositif étaient-elles licites au regard du RGPD ? La cour d'appel avait répondu par la négative, les données ayant été recueillies auprès d'un tiers sans le consentement du salarié. Ces preuves illicites pouvaient-elles malgré tout être reçues dans le débat prud'homal ? La cour d'appel avait répondu par l'affirmative, au nom du droit à la preuve. Enfin, la cour d'appel avait condamné l'employeur à verser 5 000 euros de dommages-intérêts pour exécution déloyale du contrat de travail, au motif que la violation du RGPD causait nécessairement un préjudice au salarié.</p>
                <p style={{marginBottom: '1rem'}}>C'est cette dernière question, celle de l'indemnisation automatique, que la Cour de cassation censure.</p>
              </section>

              <section id="principe">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. Ce que pose la Cour de cassation</h2>
                <p style={{marginBottom: '1rem'}}>Par un arrêt du 24 juin 2026 (n°&nbsp;24-22.792), rendu en formation de section et publié au Bulletin, ce qui signale une portée doctrinale assumée, la chambre sociale de la Cour de cassation censure le raisonnement de la cour d'appel. Elle rappelle que l'article 82, paragraphe 1, du RGPD, qui consacre le droit à réparation de toute personne ayant subi un dommage matériel ou moral du fait d'une violation du règlement, suppose la démonstration d'un dommage effectif. La seule violation constatée du RGPD, aussi réelle soit-elle, ne suffit donc plus, à elle seule, à ouvrir un droit à réparation : il appartient aux juges du fond d'apprécier si le salarié établit que cette violation lui a causé un dommage matériel ou moral concret.</p>
              </section>

              <section id="cjue">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. Un alignement sur la CJUE et sur une tendance déjà ancienne</h2>
                <p style={{marginBottom: '1rem'}}>Cette solution aligne la chambre sociale sur la Cour de justice de l'Union européenne, qui avait posé, dans son arrêt Österreichische Post du 4 mai 2023 (C-300/21), trois conditions cumulatives au droit à réparation de l'article 82 : une violation du RGPD, un dommage matériel ou moral réel, et un lien de causalité entre les deux. La CJUE précise toutefois qu'il n'existe pas de seuil de gravité : un préjudice même minime doit être réparé, dès lors qu'il est effectivement établi.</p>
                <p style={{marginBottom: '1rem'}}>Cet arrêt n'est pas non plus isolé dans le paysage du droit du travail français. Depuis 2016, la Cour de cassation abandonne progressivement, domaine après domaine, la logique du « préjudice nécessaire », qui présumait qu'un manquement de l'employeur causait automatiquement un dommage : défaut de visite médicale, nullité d'un forfait-jours, empêchement de prendre ses congés payés. Le RGPD vient d'y être ajouté, aux côtés du manquement à l'obligation de formation, dans un arrêt rendu la même semaine, le 17 juin 2026 (n°&nbsp;25-10.517). Le préjudice nécessaire reste en revanche maintenu dans quelques domaines limités, comme les durées maximales de travail ou de repos, ou l'absence d'institutions représentatives du personnel.</p>
              </section>

              <section id="preuve">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Un autre terrain : la licéité de la preuve</h2>
                <p style={{marginBottom: '1rem'}}>Il faut se garder de confondre deux questions différentes que ce dossier permet justement de distinguer clairement. La première est celle de la recevabilité d'une preuve obtenue en violation du RGPD : la Cour de cassation admet qu'une preuve illicite ou déloyale soit reçue dans le débat, dès lors que sa production est indispensable à l'exercice du droit à la preuve et proportionnée au but poursuivi. La seconde est celle de l'indemnisation automatique du salarié du seul fait de cette violation, à laquelle la Cour de cassation répond désormais par la négative. Ces deux logiques obéissent à des conditions propres, et un manquement au RGPD peut ainsi, selon les circonstances, servir à contester une preuve sans pour autant fonder, à lui seul, une demande de dommages-intérêts.</p>
              </section>

              <section id="risques">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Ce que l'employeur risque encore</h2>
                <p style={{marginBottom: '1rem'}}>Cet arrêt ne banalise en rien les manquements au RGPD, il en rationalise simplement le contentieux indemnitaire. Trois risques distincts subsistent pleinement pour un employeur qui traite mal les données de ses salariés :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le risque administratif</strong>, indépendant du contentieux prud'homal : une sanction de la CNIL reste possible (mise en demeure, amende), quelle que soit l'issue d'un litige individuel avec un salarié.</li>
                  <li><strong>Le risque indemnitaire</strong>, désormais conditionné : dès qu'un salarié démontre un préjudice réel, même minime (atteinte à la vie privée, stress, dévalorisation professionnelle), l'indemnisation reste due. La Cour de cassation a d'ailleurs déjà reconnu qu'une atteinte au droit au respect de la vie privée constitue, à elle seule, un préjudice réparable dans d'autres contentieux.</li>
                  <li><strong>Le risque probatoire</strong> : un dispositif de contrôle mal encadré peut voir ses preuves écartées des débats si leur production n'est ni indispensable ni proportionnée, ce qui peut priver l'employeur des éléments mêmes qui fondaient sa décision.</li>
                </ul>
              </section>

              <section id="angle-mort">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. L'angle mort des données RH internes</h2>
                <p style={{marginBottom: '1rem'}}>Dans la plupart des dossiers de sécurisation d'entreprise, l'accent est mis sur la conformité RGPD dite « externe » : site internet, clients, sous-traitants. Les données internes des salariés, elles, sont beaucoup plus rarement auditées sous cet angle : géolocalisation des véhicules professionnels, outils de mesure de l'activité, vidéosurveillance, messagerie professionnelle. Or c'est précisément sur ces dispositifs que se concentre, en pratique, le contentieux RGPD devant le conseil de prud'hommes, qu'il porte sur la licéité d'une preuve ou sur la réparation d'un préjudice.</p>
                <p style={{marginBottom: '1rem'}}>Et lorsque le litige social survient, ce grief RGPD s'ajoute presque toujours au litige principal (licenciement, discrimination, harcèlement), transformant un dossier déjà sensible en dossier à double détente. C'est un point que chaque salarié peut désormais soulever à n'importe quel moment d'un contentieux, dès lors qu'un préjudice, même modeste, peut être documenté.</p>
              </section>

              <section id="pratique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VII. Ce que ça change concrètement</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Pour l'employeur :</strong> information préalable des salariés et consultation du CSE avant tout dispositif de contrôle, tenue à jour du registre des activités de traitement, respect des durées de conservation, et surtout traçabilité de ces démarches : en cas de litige, c'est cette documentation qui permet de démontrer l'absence de manquement, ou à défaut l'absence de préjudice réel.</li>
                  <li><strong>Pour le salarié :</strong> un manquement RGPD reste un argument utile, mais il doit désormais s'accompagner d'éléments concrets sur le préjudice subi pour espérer une indemnisation, une simple invocation du texte ne suffisant plus.</li>
                  <li><strong>Pour les deux :</strong> distinguer clairement, dans la construction d'un dossier, ce qui relève de la contestation d'une preuve, de ce qui relève d'une demande indemnitaire, les deux répondant à des logiques et des preuves différentes.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Auditer vos données RH avant qu'un litige ne les révèle</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Vos dispositifs de contrôle RH sont-ils réellement sécurisés ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet réalise un diagnostic de conformité RGPD ciblé sur les traitements de données internes (géolocalisation, vidéosurveillance, messagerie, outils de mesure de l'activité), ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/rgpd-conformite" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Diagnostic RGPD</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>L'arrêt du 24 juin 2026 ne retire rien à l'importance du RGPD dans le contentieux prud'homal, il en précise simplement les conditions d'usage. Le manquement reste un levier réel, pour contester une preuve ou fonder une indemnisation, mais il ne s'agit plus d'une formule magique : encore faut-il, pour obtenir réparation, démontrer un préjudice concret. C'est un rappel utile autant pour les salariés que pour les employeurs, qui ont tout intérêt à traiter l'audit des données RH avec la même rigueur que leur conformité RGPD tournée vers l'extérieur.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Cour de cassation, chambre sociale, 24 juin 2026, n°&nbsp;24-22.792, FS-B</li>
                  <li>Règlement (UE) 2016/679 du 27 avril 2016 (RGPD), article 82, paragraphe 1</li>
                  <li>Cour de justice de l'Union européenne, 4 mai 2023, Österreichische Post, C-300/21</li>
                  <li>Cour de cassation, chambre sociale, 17 juin 2026, n°&nbsp;25-10.517 (manquement à l'obligation de formation, même abandon du préjudice nécessaire)</li>
                  <li>Cour de cassation, chambre sociale, 12 novembre 2020, n°&nbsp;19-20.583 (atteinte au droit au respect de la vie privée, préjudice réparable)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Un salarié peut-il obtenir des dommages-intérêts pour la seule violation du RGPD par son employeur ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non, plus depuis l'arrêt du 24 juin 2026. La Cour de cassation exige désormais que le salarié démontre un préjudice réel, matériel ou moral, résultant de cette violation, ainsi qu'un lien de causalité. Le simple constat du manquement ne suffit plus à ouvrir un droit à réparation automatique.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Une preuve obtenue en violation du RGPD peut-elle être utilisée devant le conseil de prud'hommes ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Elle peut l'être, sous conditions. La Cour de cassation admet qu'une preuve déloyale ou illicite soit produite dès lors que sa production est indispensable à l'exercice du droit à la preuve et proportionnée au but poursuivi, ce qui relève d'une appréciation distincte de celle du droit à réparation.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>L'employeur n'a-t-il plus rien à craindre en cas de manquement au RGPD sur les données de ses salariés ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Si, sur trois plans distincts : une sanction de la CNIL reste possible indépendamment du contentieux prud'homal, une indemnisation du salarié reste due dès qu'un préjudice réel est démontré, même minime, et la preuve obtenue en violation du RGPD peut, selon les cas, être écartée des débats.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Quelles données RH sont les plus exposées à un contentieux RGPD ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>La géolocalisation des véhicules professionnels, les outils de mesure de l'activité, la vidéosurveillance, et la messagerie professionnelle, dès lors que ces dispositifs n'ont pas fait l'objet d'une information préalable des salariés et d'une consultation du CSE, ou reposent sur une base légale insuffisante.</p>
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
              <a href="/blog/sanctions-cnil-2026-videosurveillance-cookies-obligation-cooperer" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px'}}>Sanctions CNIL 2026 : vidéosurveillance, cookies et obligation de coopérer →</a>
              <a href="/blog/intelligence-artificielle-ai-act-et-rgpd-vos-obligations-en-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=RGPD" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>RGPD</a>
                <a href="/blog?tag=Prud%27hommes" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Prud'hommes</a>
                <a href="/blog?tag=Cour%20de%20cassation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Cour de cassation</a>
                <a href="/blog?tag=Donn%C3%A9es%20RH" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Données RH</a>
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
