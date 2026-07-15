import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `DUERP : le guide pratique employeur, CSE et salariés · Blog Cabinet Cholez-Pagotto`,
  description: `Format, méthode, sanctions pénales et désormais administratives depuis la loi du 25 juin 2026, rôle du CSE, droits du salarié et valeur juridique en cas d'accident : tout sur le Document Unique d'Évaluation des Risques Professionnels.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/duerp-guide-pratique-employeur-cse-salaries',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/duerp-guide-pratique-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/duerp-guide-pratique-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "DUERP : le guide pratique employeur, CSE et salariés",
      "description": "Format, méthode, sanctions pénales et désormais administratives depuis la loi du 25 juin 2026, rôle du CSE, droits du salarié et valeur juridique en cas d'accident : tout sur le Document Unique d'Évaluation des Risques Professionnels.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/duerp-guide-pratique-2026.webp",
      "datePublished": "2026-07-08",
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
      "url": "https://cholez-pagotto.fr/blog/duerp-guide-pratique-employeur-cse-salaries",
      "keywords": ["DUERP", "Document unique", "Risques professionnels", "CSE", "Faute inexcusable", "Amende administrative", "Droit du travail"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Existe-t-il un format ou un modèle officiel de DUERP ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le Code du travail n'impose aucun format ni modèle officiel : papier, tableur, logiciel dédié, tout support est valable à condition d'être lisible, cohérent et de retracer l'ensemble des risques professionnels par unité de travail. L'INRS et l'Assurance Maladie proposent toutefois un outil gratuit, OiRA, pour les TPE-PME."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sanctions en cas d'absence de DUERP en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux voies coexistent depuis la loi du 25 juin 2026 : la voie pénale classique (contravention de 5e classe, jusqu'à 1 500 euros pour une personne physique et 7 500 euros pour une personne morale, doublés en récidive) et une nouvelle voie administrative, prononcée directement par la DREETS sans juge, pouvant atteindre 4 000 euros par salarié concerné, portés à 8 000 euros en cas de récidive dans les deux ans. Les deux voies ne se cumulent pas pour les mêmes faits."
          }
        },
        {
          "@type": "Question",
          "name": "Le CSE doit-il voter le DUERP ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, le CSE n'a pas à valider ni à voter le DUERP, mais il doit obligatoirement être consulté sur le document et ses mises à jour dans les entreprises de 50 salariés et plus. Dans les entreprises de moins de 50 salariés, l'employeur lui présente la liste des actions de prévention retenues."
          }
        },
        {
          "@type": "Question",
          "name": "Un ancien salarié peut-il consulter le DUERP ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, depuis la loi du 2 août 2021. Le droit de consultation ne s'arrête pas à la rupture du contrat de travail : un ancien salarié peut exiger de consulter les versions du DUERP en vigueur durant sa propre période d'activité, ce qui est particulièrement utile en cas de maladie professionnelle à effet différé."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "DUERP : le guide pratique" }
      ]
    }
  ]
}

export default function ArticleDuerpGuidePratique2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>DUERP : le guide pratique</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ACTUALITÉ JUIN 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>DUERP : le guide pratique employeur, CSE et salariés</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 8 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 16 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/duerp-guide-pratique-2026.webp"
                alt="DUERP : le guide pratique employeur, CSE et salariés"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#employeur" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Côté employeur : format, méthode et accompagnement</a></li>
                <li><a href="#loi-2026" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Nouveau : l'amende administrative de la loi du 25 juin 2026</a></li>
                <li><a href="#depot" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Le dépôt numérique du DUERP, où en est-on ?</a></li>
                <li><a href="#cse" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Côté CSE : quel est le vrai pouvoir ?</a></li>
                <li><a href="#salarie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Côté salarié : accès, droits et anciens salariés</a></li>
                <li><a href="#faute-inexcusable" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>La valeur juridique du DUERP en cas d'accident</a></li>
                <li><a href="#angles-morts" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Focus : les angles morts fréquemment oubliés</a></li>
                <li><a href="#synthese" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Synthèse des points essentiels</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le Document Unique d'Évaluation des Risques Professionnels (DUERP) est bien plus qu'une simple obligation administrative : c'est la clé de voûte de la politique de prévention de l'entreprise et un document dont la portée juridique se révèle pleinement le jour d'un accident. De sa rédaction à sa consultation, chaque acteur de l'entreprise, employeur, CSE, salarié, dispose de prérogatives et d'obligations précises.</p>
                <p style={{marginBottom: '1rem'}}>Ce guide fait le point complet, avec une actualité qui change significativement la donne : depuis le 27 juin 2026, l'absence ou le défaut de mise à jour du DUERP peut désormais être sanctionné par une amende administrative pouvant atteindre 4 000 euros par salarié, en plus de l'amende pénale déjà existante.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}aucun format n'est imposé pour le DUERP, mais son absence expose désormais à deux régimes de sanction distincts (pénal jusqu'à 7 500 €, administratif jusqu'à 4 000 € par salarié depuis la loi du 25 juin 2026), le CSE doit être consulté sans avoir à voter, les salariés et anciens salariés disposent d'un droit de consultation renforcé, et le document devient la pièce centrale en cas de faute inexcusable après un accident.
                  </p>
                </div>
              </section>

              <section id="employeur">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Côté employeur : « Comment je fais et qui décide ? »
                </h2>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Existe-t-il un format obligatoire ou un modèle officiel ?</h3>
                <p style={{marginBottom: '1rem'}}>Non. Le Code du travail n'impose aucun format ni modèle officiel : le document peut être rédigé sur papier, sous forme de fichier tableur, via un logiciel dédié ou tout autre support, à condition qu'il soit lisible, cohérent et permette de retracer l'ensemble des risques professionnels par unité de travail (articles L.&nbsp;4121-3-1 et R.&nbsp;4121-1 du Code du travail).</p>
                <p style={{marginBottom: '1rem'}}>La méthode attendue repose généralement sur le calcul suivant : fréquence d'exposition × gravité du dommage potentiel = niveau de criticité. C'est ce score qui permet de prioriser les actions de prévention.</p>
                <p style={{marginBottom: '1rem'}}>L'employeur n'est pas seul face à cette évaluation. Depuis la loi du 2 août 2021, il est encouragé à solliciter son Service de Prévention et de Santé au Travail (SPST) ou des Intervenants en Prévention des Risques Professionnels (IPRP) pour co-rédiger ou mettre à jour le document. Pour les TPE-PME, l'INRS et l'Assurance Maladie proposent par ailleurs un outil en ligne gratuit, OiRA, qui génère un DUERP adapté au secteur d'activité.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Que se passe-t-il si je ne fais pas de DUERP ? Le régime pénal</h3>
                <p style={{marginBottom: '1rem'}}>Le défaut de transcription ou de mise à jour de l'évaluation des risques constitue une contravention de 5e classe (article R.&nbsp;4741-1 du Code du travail) : jusqu'à 1 500 euros d'amende pour une personne physique, portée par la règle de multiplication par cinq applicable aux personnes morales (article 131-38 du Code pénal) à 7 500 euros pour une société, ces montants étant doublés en cas de récidive dans le délai prévu par les articles 132-11 et 132-15 du Code pénal. Cette amende est prononcée par le juge à la suite d'une procédure pénale classique, généralement réservée aux cas les plus graves ou aux contrôles les plus poussés.</p>
              </section>

              <section id="loi-2026">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Nouveau : l'amende administrative créée par la loi du 25 juin 2026
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le changement le plus important de ces dernières semaines pour toutes les entreprises. La <strong>loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales</strong>, publiée au Journal officiel du 26 juin 2026, modifie par son article 48 l'article L.&nbsp;8115-1 du Code du travail pour y intégrer, pour la première fois, le manquement au DUERP. Ce texte a été validé pour l'essentiel par le Conseil constitutionnel (décision n°&nbsp;2026-904 DC du 18 juin 2026), le volet relatif au DUERP n'ayant d'ailleurs fait l'objet d'aucune contestation devant les juges constitutionnels.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce qui change concrètement, depuis le 27 juin 2026.</strong>{' '}Sur simple rapport de l'agent de contrôle de l'inspection du travail, l'autorité administrative compétente (le directeur de la DREETS) peut désormais, sans passer par un juge, adresser un avertissement ou prononcer directement une amende pouvant atteindre <strong>4 000 euros par salarié concerné</strong> par le manquement, portée à <strong>8 000 euros par salarié en cas de récidive</strong> constatée dans les deux ans. Une entreprise de 25 salariés sans DUERP à jour s'expose ainsi, en théorie, à une amende pouvant atteindre 100 000 euros, très au-delà du plafond de 7 500 euros de l'ancien régime pénal seul.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Deux précisions importantes tempèrent l'ampleur de ce changement à court terme. D'une part, cette amende administrative ne peut être infligée qu'à la condition qu'<strong>aucune poursuite pénale</strong> ne soit engagée pour les mêmes faits : les deux régimes coexistent mais ne se cumulent pas, conformément au principe non bis in idem. D'autre part, un <strong>décret d'application</strong> reste attendu à ce jour pour fixer les modalités précises de la procédure contradictoire (délai de mise en conformité laissé à l'employeur, voies de recours) ; les premières amendes effectivement prononcées sur ce fondement sont annoncées pour l'automne 2026.</p>
                <p style={{marginBottom: '1rem'}}>Ce mécanisme n'est pas une innovation isolée : il reprend un dispositif déjà éprouvé en droit du travail pour d'autres manquements (durées maximales de travail, salaire minimum, travail illégal), pour lesquels l'amende administrative prononcée par la DREETS existe depuis plusieurs années et a déjà été validée dans son principe par le Conseil constitutionnel.</p>
              </section>

              <section id="depot">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Le dépôt numérique du DUERP : où en est-on ?
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi du 2 août 2021 a prévu l'obligation de dépôt dématérialisé du DUERP sur un portail national. Pour les entreprises de 150 salariés et plus, cette obligation devait s'appliquer au 1er juillet 2023 ; pour celles de moins de 150 salariés, au plus tard au 1er juillet 2024 (article L.&nbsp;4121-3-1, V, B du Code du travail). Le portail national n'étant à ce jour toujours pas pleinement opérationnel pour l'ensemble des entreprises, cette obligation de dépôt demeure en pratique inégalement effective selon les secteurs, le ministère du Travail poursuivant le déploiement progressif du dispositif.</p>
              </section>

              <section id="cse">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Côté CSE : « Quel est notre vrai pouvoir ? »
                </h2>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Le CSE doit-il valider ou voter sur le DUERP ?</h3>
                <p style={{marginBottom: '1rem'}}>Non, le CSE n'a pas à valider ni à voter le DUERP, mais il doit obligatoirement être consulté sur le document et ses mises à jour. Dans les entreprises de 50 salariés et plus, le CSE est consulté sur le DUERP et sur le programme annuel de prévention, le PAPRIPACT (articles L.&nbsp;4121-3-1, III, 1° et L.&nbsp;2312-27 du Code du travail). Dans les entreprises de moins de 50 salariés, l'employeur présente au CSE la liste des actions de prévention consignées dans le DUERP (article L.&nbsp;2312-5).</p>
                <p style={{marginBottom: '1rem'}}>Le CSE n'est pas un simple spectateur passif : la loi précise que le CSE et sa commission santé, sécurité et conditions de travail (CSSCT) contribuent activement à l'évaluation des risques (article L.&nbsp;4121-3 du Code du travail). Ils doivent être associés en amont des mises à jour, par exemple lors des inspections de terrain, et pas seulement au moment de rendre l'avis formel final.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Que peut faire le CSE s'il constate qu'un risque a été oublié ?</h3>
                <p style={{marginBottom: '1rem'}}>Le CSE dispose de plusieurs leviers d'action (article L.&nbsp;2312-5 du Code du travail) : émettre un avis défavorable motivé lors de la consultation formelle, inscrire officiellement le sujet à l'ordre du jour d'une réunion ordinaire, déclencher son droit d'alerte en cas de constatation d'un danger grave et imminent, ou saisir l'inspection du travail si l'employeur refuse systématiquement d'intégrer un risque réel.</p>
              </section>

              <section id="salarie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Côté salarié : « À quoi ça me sert et quels sont mes droits ? »
                </h2>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Que puis-je faire si mon employeur refuse de me laisser consulter le DUERP ?</h3>
                <p style={{marginBottom: '1rem'}}>L'employeur doit afficher visiblement les modalités d'accès au DUERP et le tenir en permanence à la disposition des salariés. En cas de refus, le salarié peut s'adresser aux élus du CSE ou, en dernier recours, saisir l'inspection du travail (article L.&nbsp;4121-3-1, V du Code du travail).</p>
                <p style={{marginBottom: '1rem'}}>Le refus d'accès au DUERP constitue une infraction pour l'employeur, et peut se transformer en délit d'entrave si la rétention d'information vise spécifiquement le CSE (article L.&nbsp;2312-5 du Code du travail). L'entrave au fonctionnement du CSE est punie d'une amende de 7 500 euros (article L.&nbsp;2317-1 du Code du travail).</p>
                <p style={{marginBottom: '1rem'}}>Un point mérite d'être souligné : c'est une avancée issue de la loi du 2 août 2021, le droit de consultation ne s'arrête pas à la rupture du contrat de travail. Les <strong>anciens salariés</strong> peuvent exiger de consulter les versions du DUERP qui étaient en vigueur durant leur propre période d'activité dans l'entreprise, un outil indispensable pour faire valoir ses droits en cas de maladie professionnelle à effet différé, exposition à l'amiante ou à des agents chimiques cancérigènes par exemple.</p>
              </section>

              <section id="faute-inexcusable">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  La valeur juridique du DUERP en cas d'accident
                </h2>
                <p style={{marginBottom: '1rem'}}>Si un salarié est victime d'un accident du travail, le DUERP est la pièce centrale de la procédure. La Cour de cassation a précisé, par deux arrêts rendus le même jour et publiés au Bulletin, que le manquement à l'obligation de sécurité a le caractère d'une faute inexcusable lorsque l'employeur avait ou aurait dû avoir conscience du danger auquel était exposé le salarié et qu'il n'a pas pris les mesures nécessaires pour l'en préserver. Dans l'une de ces deux affaires, concernant un conducteur de bus agressé, la Cour a jugé que le risque d'agression physique, précisément répertorié au DUER de l'entreprise, établissait à lui seul que l'employeur avait ou aurait dû avoir conscience de ce danger (Cour de cassation, 2e chambre civile, 8 octobre 2020, n°&nbsp;18-25.021, publié au Bulletin ; voir également, sur l'insuffisance des mesures de protection mises en œuvre, le même jour, n°&nbsp;18-26.677, publié au Bulletin).</p>
                <p style={{marginBottom: '1rem'}}>Autrement dit, si le risque à l'origine de l'accident n'était pas identifié dans le DUERP, ou si l'employeur l'avait bien identifié mais n'avait mis en œuvre aucune action concrète de prévention, le salarié pourra plus aisément faire reconnaître la faute inexcusable de l'employeur.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le piège financier pour l'entreprise.</strong>{' '}En cas de faute inexcusable reconnue, la Caisse Primaire d'Assurance Maladie indemnise le salarié de manière majorée (article L.&nbsp;452-1 du Code de la sécurité sociale), puis se retourne contre l'employeur pour lui réclamer le remboursement intégral des sommes avancées (rentes majorées, préjudices physiques et moraux). Si l'entreprise n'a pas souscrit une assurance spécifique intégrant une extension faute inexcusable, cette action récursoire peut représenter un montant considérable, sans commune mesure avec l'amende pénale ou administrative elle-même.
                  </p>
                </div>
              </section>

              <section id="angles-morts">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Focus : les angles morts fréquemment oubliés lors de la rédaction
                </h2>
                <p style={{marginBottom: '1rem'}}>Lors des contrôles de l'inspection du travail ou des audits, trois thématiques de risques spécifiques sont trop souvent omises par les entreprises :</p>
                <div style={{overflowX: 'auto', margin: '1rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#eff6ff'}}>
                        <th style={{textAlign: 'left', padding: '10px 14px', color: '#0f2d6e', fontWeight: '700', border: '1px solid #bfdbfe'}}>Thématique</th>
                        <th style={{textAlign: 'left', padding: '10px 14px', color: '#0f2d6e', fontWeight: '700', border: '1px solid #bfdbfe'}}>Risques associés à évaluer obligatoirement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', fontWeight: '600', color: '#374151'}}>L'impact du genre</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280'}}>Évaluer l'impact différencié de l'exposition aux risques selon le sexe (ergonomie des postes non adaptée aux morphologies féminines, risques spécifiques pour les femmes enceintes, répartition genrée des tâches physiques).</td>
                      </tr>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', fontWeight: '600', color: '#374151'}}>Les risques psychosociaux (RPS)</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280'}}>Intégrer la charge mentale, le stress lié aux objectifs, le harcèlement, le manque d'autonomie ou les agressions verbales par le public.</td>
                      </tr>
                      <tr>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', fontWeight: '600', color: '#374151'}}>Le télétravail</td>
                        <td style={{padding: '10px 14px', border: '1px solid #e5e7eb', color: '#6b7280'}}>Évaluer les risques professionnels au domicile du salarié (isolement social, hyperconnexion, troubles musculosquelettiques dus à un matériel ergonomique inadapté).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Ne restez pas seul face à cette obligation
                </h2>
                <p style={{marginBottom: '1rem'}}>Avec la création de l'amende administrative de la loi du 25 juin 2026, mettre à jour un DUERP obsolète ou en constituer un s'il n'existe pas encore n'est plus une simple bonne pratique différable : c'est une priorité de conformité à traiter avant l'automne 2026.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'une information adaptée à votre situation ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet propose une information juridique écrite sous 24 à 48h, notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée, ainsi que des formations sur-mesure en droit du travail pour dirigeants, RH et membres du CSE.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                    <a href="/formations" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Voir les formations sur-mesure</a>
                  </div>
                </div>
              </section>

              <section id="synthese">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Synthèse des points essentiels
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Mise à jour</strong> : au moins chaque année dans les entreprises d'au moins 11 salariés, et à chaque décision d'aménagement important modifiant les conditions de travail (article R.&nbsp;4121-2 du Code du travail).</li>
                  <li><strong>Conservation</strong> : le DUERP et ses versions successives doivent être conservés pendant 40 ans pour garantir la traçabilité à long terme des expositions (article L.&nbsp;4121-3-1, V du Code du travail).</li>
                  <li><strong>Sanctions</strong> : l'absence de DUERP expose désormais à une double menace non cumulable, pénale (jusqu'à 7 500 € pour une personne morale, article R.&nbsp;4741-1) ou administrative (jusqu'à 4 000 € par salarié, 8 000 € en récidive, gérée par la DREETS depuis la loi du 25 juin 2026, article L.&nbsp;8115-1).</li>
                </ul>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code du travail, articles L.&nbsp;4121-3 et L.&nbsp;4121-3-1 (obligation d'évaluation des risques, dépôt numérique, conservation 40 ans, droit de consultation des anciens salariés)</li>
                  <li>Code du travail, article R.&nbsp;4121-1 (le DUERP comme support obligatoire de l'évaluation)</li>
                  <li>Code du travail, article R.&nbsp;4121-2 (déclencheurs de mise à jour : annuelle dès 11 salariés, aménagement important, information nouvelle)</li>
                  <li>Code du travail, article R.&nbsp;4741-1 (sanction pénale, contravention de 5e classe)</li>
                  <li>Code du travail, articles L.&nbsp;2312-5 et L.&nbsp;2312-27 (consultation du CSE selon l'effectif, leviers d'action)</li>
                  <li>Code du travail, article L.&nbsp;2317-1 (délit d'entrave au fonctionnement du CSE)</li>
                  <li>Code du travail, article L.&nbsp;8115-1, modifié par l'article 48 de la loi n°&nbsp;2026-534 du 25 juin 2026 (amende administrative applicable au manquement au DUERP)</li>
                  <li>Loi n°&nbsp;2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, JORF du 26 juin 2026</li>
                  <li>Conseil constitutionnel, décision n°&nbsp;2026-904 DC du 18 juin 2026 (validation de la loi du 25 juin 2026)</li>
                  <li>Code de la sécurité sociale, article L.&nbsp;452-1 (indemnisation majorée en cas de faute inexcusable)</li>
                  <li>Cour de cassation, 2e chambre civile, 8 octobre 2020, n°&nbsp;18-25.021, publié au Bulletin (le risque répertorié au DUER établit la conscience du danger de l'employeur)</li>
                  <li>Cour de cassation, 2e chambre civile, 8 octobre 2020, n°&nbsp;18-26.677, publié au Bulletin (insuffisance des mesures de protection mises en œuvre)</li>
                  <li>Loi n°&nbsp;2021-1018 du 2 août 2021 pour renforcer la prévention en santé au travail (accompagnement SPST/IPRP, conservation 40 ans, dépôt numérique, droit des anciens salariés)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Existe-t-il un format ou un modèle officiel de DUERP ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le Code du travail n'impose aucun format ni modèle officiel : papier, tableur, logiciel dédié, tout support est valable à condition d'être lisible, cohérent et de retracer l'ensemble des risques professionnels par unité de travail. L'INRS et l'Assurance Maladie proposent toutefois un outil gratuit, OiRA, pour les TPE-PME.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles sanctions en cas d'absence de DUERP en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux voies coexistent depuis la loi du 25 juin 2026 : la voie pénale classique (contravention de 5e classe, jusqu'à 1 500 euros pour une personne physique et 7 500 euros pour une personne morale, doublés en récidive) et une nouvelle voie administrative, prononcée directement par la DREETS sans juge, pouvant atteindre 4 000 euros par salarié concerné, portés à 8 000 euros en cas de récidive dans les deux ans. Les deux voies ne se cumulent pas pour les mêmes faits.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le CSE doit-il voter le DUERP ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, le CSE n'a pas à valider ni à voter le DUERP, mais il doit obligatoirement être consulté sur le document et ses mises à jour dans les entreprises de 50 salariés et plus. Dans les entreprises de moins de 50 salariés, l'employeur lui présente la liste des actions de prévention retenues.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un ancien salarié peut-il consulter le DUERP ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, depuis la loi du 2 août 2021. Le droit de consultation ne s'arrête pas à la rupture du contrat de travail : un ancien salarié peut exiger de consulter les versions du DUERP en vigueur durant sa propre période d'activité, ce qui est particulièrement utile en cas de maladie professionnelle à effet différé.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Formations sur-mesure</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Une formation DUERP et RPS adaptée à vos équipes RH, dirigeants ou membres du CSE.</p>
              <a href="/formations" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                Voir les formations →
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
                <a href="/blog?tag=DUERP" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>DUERP</a>
                <a href="/blog?tag=CSE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>CSE</a>
                <a href="/blog?tag=Faute%20inexcusable" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Faute inexcusable</a>
                <a href="/blog?tag=Amende%20administrative" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Amende administrative</a>
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
              { cat: 'DROIT DU TRAVAIL', titre: "Saisie sur salaire : décryptage complet de la procédure et du cadre légal", href: '/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal', date: '16 juillet 2025' },
              { cat: 'ASSOCIATIONS', titre: "Responsabilité des dirigeants bénévoles d'association : civile, pénale, financière", href: '/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere', date: '' },
              { cat: 'CONFORMITÉ', titre: "Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ?", href: '/blog/directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee', date: '24 mars 2026' },
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
