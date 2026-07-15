import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Congé supplémentaire de naissance 2026 : le guide complet pour les parents et les employeurs · Blog Cabinet Cholez-Pagotto`,
  description: `À compter du 1er juillet 2026, chaque parent peut bénéficier d'un congé supplémentaire de naissance d'un ou deux mois indemnisés. Durée, bénéficiaires, indemnisation, délais, protections, démarches et obligations de l'employeur : le point complet et vérifié, sources officielles à l'appui.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/conge-supplementaire-de-naissance-2026-guide-complet-parents-employeurs',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conge-supplementaire-naissance-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conge-supplementaire-naissance-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Congé supplémentaire de naissance 2026 : le guide complet pour les parents et les employeurs",
      "description": "À compter du 1er juillet 2026, chaque parent peut bénéficier d'un congé supplémentaire de naissance d'un ou deux mois indemnisés. Durée, bénéficiaires, indemnisation, délais, protections, démarches et obligations de l'employeur : le point complet et vérifié, sources officielles à l'appui.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conge-supplementaire-naissance-2026.webp",
      "datePublished": "2026-06-22",
      "dateModified": "2026-06-22",
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
      "url": "https://cholez-pagotto.fr/blog/conge-supplementaire-de-naissance-2026-guide-complet-parents-employeurs",
      "keywords": ["Congé supplémentaire de naissance", "LFSS 2026", "Congé de naissance", "Parentalité", "Droit du travail", "Indemnités journalières de naissance", "Congé paternité", "Congé maternité"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "À partir de quand peut-on prendre le congé supplémentaire de naissance ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le dispositif entre en vigueur le 1er juillet 2026, après publication des décrets d'application parus au Journal officiel le 31 mai 2026. Il bénéficie aux parents d'un enfant né ou adopté à compter du 1er janvier 2026, ou né avant cette date mais dont la naissance était prévue à compter du 1er janvier 2026. Le congé doit débuter dans un délai de neuf mois, et après épuisement des congés de maternité, de paternité et d'accueil de l'enfant ou d'adoption."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la durée du congé et peut-on le fractionner ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Chaque parent dispose d'un droit individuel et personnel, non transférable, d'un ou deux mois. Le congé peut être pris en une seule fois, sur un mois ou deux mois, ou fractionné en deux périodes d'un mois non consécutives. Les deux parents peuvent le prendre simultanément ou en alternance."
          }
        },
        {
          "@type": "Question",
          "name": "Le congé est-il rémunéré, et à quelle hauteur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il est indemnisé par l'Assurance maladie sous forme d'indemnités journalières de naissance, et non par l'employeur. Pour les salariés, l'indemnisation est dégressive : 70 % du salaire net le premier mois, puis 60 % le second mois, dans la limite du plafond de la Sécurité sociale (4 005 euros au 1er janvier 2026), sur la base des trois derniers mois de salaire. Aucun maintien de salaire n'est imposé à l'employeur, sauf disposition conventionnelle plus favorable."
          }
        },
        {
          "@type": "Question",
          "name": "Mon enfant est né au premier semestre 2026, ai-je droit au congé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Pour un enfant né ou arrivé au foyer entre le 1er janvier et le 30 juin 2026, le délai de neuf mois est décompté à partir du 1er juillet 2026. Le congé peut donc être pris jusqu'au 31 mars 2027. Ce régime transitoire vaut aussi pour les enfants nés prématurément dont la naissance était prévue à compter du 1er janvier 2026."
          }
        },
        {
          "@type": "Question",
          "name": "L'employeur peut-il refuser ou reporter le congé supplémentaire de naissance ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Comme pour le congé de paternité et d'accueil de l'enfant, l'employeur ne peut ni refuser ni reporter ce congé, et son accord préalable n'est pas requis. Le salarié doit toutefois respecter un délai de prévenance compris entre quinze jours et un mois, en précisant la date de début, la durée et la répartition éventuelle en deux périodes."
          }
        },
        {
          "@type": "Question",
          "name": "Le congé compte-t-il pour l'ancienneté et pour les congés payés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La durée du congé est assimilée à une période de travail effectif pour la détermination des droits liés à l'ancienneté et le salarié conserve tous les avantages acquis avant le début du congé (article L. 1225-46-3 du Code du travail). En revanche, ce congé n'est pas assimilé à du travail effectif pour l'acquisition des congés payés. À l'issue, le salarié retrouve son emploi ou un emploi similaire à rémunération au moins équivalente."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on cumuler ce congé avec le complément de mode de garde (CMG) ou la PreParE ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, pas pour une même période. L'indemnité de naissance n'est pas cumulable avec la prestation partagée d'éducation de l'enfant (PreParE), ni avec le complément de libre choix du mode de garde (CMG) au titre du même enfant, ni avec l'allocation journalière de présence parentale, l'allocation journalière du proche aidant, les indemnités journalières de maladie ou d'accident du travail, ou les allocations chômage. Une dérogation exceptionnelle au cumul avec le CMG existe pour les enfants nés ou adoptés au premier semestre 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Les indépendants et les demandeurs d'emploi y ont-ils droit ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le congé est ouvert à tous les parents en activité remplissant les conditions d'ouverture de droit : salariés, agents publics des trois versants, travailleurs indépendants, conjoints collaborateurs, professions libérales, praticiens et auxiliaires médicaux conventionnés, artistes-auteurs, employés rémunérés par CESU Pajemploi, non-salariés agricoles et assurés des régimes spéciaux. Les demandeurs d'emploi peuvent en bénéficier en informant France Travail, et chacun transmet sa demande via le téléservice dédié."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Congé supplémentaire de naissance 2026" }
      ]
    }
  ]
}

export default function ArticleCongeSupplementaireNaissance2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Congé supplémentaire de naissance 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PARENTALITÉ</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Congé supplémentaire de naissance 2026 : le guide complet pour les parents et les employeurs</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 22 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 17 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conge-supplementaire-naissance-2026.webp"
                alt="Congé supplémentaire de naissance 2026 : le guide complet pour les parents et les employeurs"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#definition" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Qu'est-ce que le congé supplémentaire de naissance ?</a></li>
                <li><a href="#beneficiaires" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Qui peut en bénéficier ?</a></li>
                <li><a href="#duree" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Durée, fractionnement et articulation avec les autres congés</a></li>
                <li><a href="#delai" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Dans quel délai le prendre ?</a></li>
                <li><a href="#indemnisation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Quelle indemnisation ?</a></li>
                <li><a href="#contrat" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Effets sur le contrat de travail et protections</a></li>
                <li><a href="#demarches" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Les démarches, étape par étape</a></li>
                <li><a href="#employeur" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Côté employeur : obligations et bonnes pratiques</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IX. Quatre cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>À compter du <strong>1er juillet 2026</strong>, un nouveau droit entre dans le paysage des congés familiaux : le <strong>congé supplémentaire de naissance</strong>. Créé par la loi de financement de la Sécurité sociale pour 2026, il permet à <strong>chaque parent</strong> de prendre <strong>un ou deux mois de congé indemnisé</strong>, qui s'ajoutent aux congés de maternité, de paternité et d'accueil de l'enfant ou d'adoption déjà existants. Il ne les remplace pas, et ne remplace pas davantage le congé parental.</p>
                <p style={{marginBottom: '1rem'}}>Pour les parents, c'est du temps supplémentaire auprès de l'enfant pendant ses premiers mois. Pour les employeurs, c'est une nouvelle absence à anticiper, encadrée par des règles précises de délai, de protection et de réintégration. Cet article fait le point, de façon complète et vérifiée, sur ce que prévoit réellement le texte : qui est concerné, combien de temps, dans quel délai, comment c'est indemnisé, quelles protections pour le salarié, quelles obligations pour l'entreprise, et quelles démarches accomplir, modèles de courriers à l'appui.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> à partir du 1er juillet 2026, chaque parent d'un enfant né ou adopté depuis le 1er janvier 2026 peut prendre <strong>un ou deux mois</strong> de congé supplémentaire de naissance, <strong>indemnisé à 70&nbsp;% puis 60&nbsp;%</strong> du salaire net par l'Assurance maladie, à poser <strong>dans les neuf mois</strong> et après épuisement des congés de maternité, de paternité ou d'adoption.
                  </p>
                </div>
              </section>

              <section id="definition">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Qu'est-ce que le congé supplémentaire de naissance ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Le congé supplémentaire de naissance est un <strong>congé indemnisé autonome</strong>, créé par la <strong>loi n°&nbsp;2025-1403 du 30 décembre 2025 de financement de la Sécurité sociale pour 2026</strong> (article 99). Il est codifié aux <strong>articles L.&nbsp;1225-46-2 à L.&nbsp;1225-46-7 du Code du travail</strong>, dans une nouvelle section 3 bis. Ses modalités pratiques ont été précisées par trois décrets d'application, les décrets n°&nbsp;2026-419, n°&nbsp;2026-425 et n°&nbsp;2026-426 du 30 mai 2026, publiés au Journal officiel le 31 mai 2026.</p>
                <p style={{marginBottom: '1rem'}}>Son objectif est triple : donner aux familles davantage de temps pendant les premiers mois de l'enfant, dans le cadre de la politique des « mille premiers jours » ; favoriser le bon développement de l'enfant ; et renforcer l'égalité entre les femmes et les hommes à l'arrivée d'un enfant, dans un contexte de baisse de la natalité.</p>
                <p style={{marginBottom: '1rem'}}><strong>Attention à ne pas le confondre</strong> avec les autres congés liés à la naissance. Pour bien situer ce nouveau droit :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Ce <strong>n'est pas</strong> le <strong>congé de naissance de trois jours</strong> (article L.&nbsp;3142-4 du Code du travail), qui est un congé pour événement familial, à la charge de l'employeur, pris au moment de la naissance.</li>
                  <li>Ce <strong>n'est pas</strong> le <strong>congé de paternité et d'accueil de l'enfant</strong> (articles L.&nbsp;1225-35 et suivants), d'une durée de 25 jours calendaires pour une naissance simple, 32 jours en cas de naissances multiples, indemnisé par la Sécurité sociale.</li>
                  <li>Ce <strong>n'est pas</strong> le <strong>congé parental d'éducation</strong>, plus long et faiblement indemnisé via la prestation partagée d'éducation de l'enfant (PreParE), qui reste accessible séparément.</li>
                  <li>Le congé supplémentaire de naissance <strong>s'ajoute</strong> à ces droits et constitue un <strong>droit propre</strong>, qui se prend après les congés de maternité, de paternité ou d'adoption.</li>
                </ul>
              </section>

              <section id="beneficiaires">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Qui peut en bénéficier ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Le congé est ouvert à <strong>tous les parents en activité</strong> qui remplissent les conditions d'ouverture de droit applicables aux congés de maternité et de paternité (activité, durée d'affiliation, etc.). Point essentiel : il s'agit d'un <strong>droit individuel et personnel, non transférable d'un parent à l'autre</strong>. Chacun dispose de son propre droit.</p>
                <p style={{marginBottom: '1rem'}}>Sont concernés :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>les <strong>salariés du secteur privé</strong>, sous réserve de remplir les conditions d'ouverture des droits aux indemnités journalières de la Sécurité sociale ;</li>
                  <li>les <strong>agents publics</strong> des trois versants de la fonction publique, y compris les militaires et les personnels médicaux, sous réserve des conditions statutaires applicables ;</li>
                  <li>les <strong>travailleurs indépendants</strong>, les <strong>conjoints collaborateurs</strong>, les <strong>professions libérales</strong>, les <strong>praticiens et auxiliaires médicaux conventionnés</strong>, les <strong>artistes-auteurs</strong> et les personnes <strong>rémunérées par CESU ou Pajemploi</strong> ;</li>
                  <li>les <strong>non-salariés agricoles</strong> et les assurés des <strong>régimes spéciaux</strong> ;</li>
                  <li>les <strong>demandeurs d'emploi</strong>, sous réserve d'informer France Travail.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Comme pour le congé de paternité et d'accueil de l'enfant, le bénéficiaire peut être le second parent au sens large : le <strong>conjoint, le partenaire de PACS ou le concubin</strong> de la mère, quel que soit son genre, dès lors qu'il remplit les conditions d'ouverture de droit.</p>
              </section>

              <section id="duree">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Durée, fractionnement et articulation avec les autres congés
                </h2>
                <p style={{marginBottom: '1rem'}}>La durée du congé est, <strong>au choix du salarié, d'un mois ou de deux mois</strong>. Le congé peut être <strong>fractionné en deux périodes d'un mois</strong> chacune, non consécutives. Lorsque les deux parents y ont droit, ils peuvent le prendre <strong>simultanément ou en alternance</strong>, ce qui permet de couvrir une période plus longue auprès de l'enfant.</p>
                <p style={{marginBottom: '1rem'}}>Une règle d'ordre est posée par l'article L.&nbsp;1225-46-2 du Code du travail : le congé supplémentaire de naissance <strong>ne peut débuter qu'après épuisement</strong> des congés de maternité, de paternité et d'accueil de l'enfant ou d'adoption auxquels le parent a droit. Autrement dit, il vient se placer <strong>à la suite</strong> de ces congés, et non en remplacement.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Une exception utile.</strong> La condition d'avoir épuisé son droit à congé <strong>ne s'applique pas</strong> au parent qui n'a pas pu exercer tout ou partie de ce droit faute de pouvoir bénéficier des indemnités et allocations correspondantes. Cette nuance protège les parents qui, pour des raisons tenant à leur situation, n'ont pas pu prendre leur congé principal indemnisé.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Pour les travailleurs indépendants, les <strong>durées minimales</strong> de congé de maternité, de paternité ou d'adoption doivent avoir été prises pour pouvoir bénéficier du congé supplémentaire de naissance.</p>
              </section>

              <section id="delai">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Dans quel délai le prendre ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Le congé doit impérativement <strong>débuter dans les neuf mois</strong> suivant la naissance ou l'arrivée de l'enfant au foyer. Le point de départ de ce délai dépend toutefois de la date de naissance, en raison du calendrier de mise en œuvre du dispositif.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Enfant né ou arrivé au foyer entre le 1er janvier et le 30 juin 2026</strong> (ou né prématurément mais dont la naissance était prévue à compter du 1er janvier 2026) : le délai de neuf mois est décompté <strong>à partir du 1er juillet 2026</strong>. Le congé peut donc être pris <strong>jusqu'au 31 mars 2027</strong>.</li>
                  <li><strong>Enfant né ou arrivé au foyer à partir du 1er juillet 2026</strong> : le délai de neuf mois court <strong>à compter de la naissance ou de l'arrivée</strong> de l'enfant.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ce délai de neuf mois est <strong>prolongé</strong> lorsque les congés de maternité, de paternité et d'accueil de l'enfant ou d'adoption sont eux-mêmes allongés, par exemple en cas de naissances multiples, ou en application de dispositions conventionnelles plus favorables.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>À surveiller pour les naissances du premier semestre 2026.</strong> Si votre enfant est né entre janvier et juin 2026, vous disposez d'une fenêtre qui se referme le 31 mars 2027. Mieux vaut anticiper la demande, d'autant que la montée en charge d'un dispositif nouveau peut allonger les délais d'instruction et d'indemnisation.
                  </p>
                </div>
              </section>

              <section id="indemnisation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Quelle indemnisation ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Le congé est <strong>pris en charge par la Sécurité sociale</strong>, sous forme d'<strong>indemnités journalières de naissance</strong> versées par l'Assurance maladie. Il n'emporte <strong>aucun maintien de salaire à la charge de l'employeur</strong>, sauf disposition conventionnelle plus favorable.</p>
                <p style={{marginBottom: '1rem'}}>Pour les <strong>salariés</strong>, l'indemnisation est <strong>dégressive</strong> et calculée à partir des trois derniers mois de salaire précédant l'interruption d'activité :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>70&nbsp;% du salaire net le premier mois</strong>, dans la limite du plafond de la Sécurité sociale (4&nbsp;005&nbsp;€ au 1er janvier 2026) ;</li>
                  <li><strong>60&nbsp;% du salaire net le second mois</strong>, dans la même limite.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour les <strong>travailleurs indépendants</strong>, l'indemnité journalière est <strong>forfaitaire et dégressive</strong>, à hauteur de 70&nbsp;% le premier mois et 60&nbsp;% le second. Pour les <strong>non-salariés agricoles</strong>, l'allocation de remplacement est maintenue au niveau existant pour la maternité, la paternité et l'adoption. Le versement est assuré par les caisses d'assurance maladie, selon des modalités adaptées à chaque statut.</p>
                <p style={{marginBottom: '1rem'}}>Des <strong>règles de non-cumul</strong> encadrent l'indemnité de naissance. Elle ne peut pas être versée pour une même période avec :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>la <strong>prestation partagée d'éducation de l'enfant</strong> (PreParE) ;</li>
                  <li>le <strong>complément de libre choix du mode de garde</strong> (CMG) au titre du même enfant, sauf dérogation exceptionnelle prévue pour les enfants nés ou adoptés entre le 1er janvier et le 30 juin 2026 ;</li>
                  <li>l'<strong>allocation journalière de présence parentale</strong> et l'<strong>allocation journalière du proche aidant</strong> ;</li>
                  <li>les <strong>indemnités journalières de maladie</strong> ou d'accident du travail, et les <strong>allocations chômage</strong>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ces dispositifs ne sont pas cumulables sur une même période, mais ils peuvent <strong>se succéder dans le temps</strong> : il est par exemple possible d'enchaîner le congé supplémentaire de naissance puis un congé parental.</p>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Prévoyance et maintien de salaire</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>L'indemnisation à 70&nbsp;% puis 60&nbsp;% laisse un reste à charge, et l'employeur n'est pas tenu de compléter. Un contrat de prévoyance ou un accord de maintien de salaire peut préserver votre rémunération pendant le congé. En courtier, le cabinet compare les garanties et vous oriente.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              </section>

              <section id="contrat">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Effets sur le contrat de travail et protections du salarié
                </h2>
                <p style={{marginBottom: '1rem'}}>Le congé supplémentaire de naissance <strong>suspend le contrat de travail</strong> pendant toute sa durée : le salarié n'exécute plus sa prestation et l'employeur n'est plus tenu de verser une rémunération, sauf disposition conventionnelle plus favorable. Le salarié reste néanmoins lié à l'entreprise et conserve sa place dans les effectifs. Pendant le congé, il lui est <strong>interdit d'exercer toute autre activité professionnelle</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Plusieurs protections accompagnent ce congé :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Ancienneté et avantages acquis.</strong> La durée du congé est <strong>assimilée à une période de travail effectif</strong> pour la détermination des droits liés à l'ancienneté, et le salarié <strong>conserve tous les avantages</strong> qu'il avait acquis avant le début du congé (article L.&nbsp;1225-46-3 du Code du travail). Elle est également prise en compte pour l'acquisition des droits au compte personnel de formation.</li>
                  <li><strong>Point de vigilance sur les congés payés.</strong> À la différence du congé de maternité, ce congé <strong>n'est pas assimilé à du travail effectif pour l'acquisition des congés payés</strong>. La période ne génère donc pas de jours de congés payés supplémentaires, sauf stipulation conventionnelle plus favorable.</li>
                  <li><strong>Protection contre la rupture.</strong> Pendant le congé, le contrat ne peut être rompu, <strong>sauf faute grave</strong> de l'intéressé ou <strong>impossibilité de maintenir le contrat</strong> pour un motif étranger au congé.</li>
                  <li><strong>Retour à l'emploi.</strong> À l'issue du congé, le salarié <strong>retrouve son précédent emploi ou un emploi similaire</strong>, assorti d'une rémunération <strong>au moins équivalente</strong> (article L.&nbsp;1225-46-6 du Code du travail).</li>
                  <li><strong>Entretien professionnel.</strong> Un entretien professionnel doit être organisé au retour, sauf s'il a déjà été réalisé après un congé de maternité ou d'adoption (article L.&nbsp;1225-46-7 du Code du travail).</li>
                </ul>
              </section>

              <section id="demarches">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Les démarches, étape par étape
                </h2>

                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  A. Vous êtes salarié
                </h3>
                <p style={{marginBottom: '1rem'}}>Vous devez <strong>informer votre employeur au moins un mois avant</strong> le début du congé, en précisant la <strong>date de début</strong>, la <strong>durée</strong> (un ou deux mois) et la <strong>répartition éventuelle</strong> en deux périodes d'un mois. Le délai de prévenance est <strong>réduit à quinze jours</strong> lorsque le congé suit immédiatement le congé de paternité et d'accueil de l'enfant ou le congé d'adoption et qu'il n'est pas possible de respecter le délai d'un mois. Votre employeur transmet ensuite les éléments nécessaires à l'organisme d'assurance maladie.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Demande de congé supplémentaire de naissance (salarié)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le courrier à adresser à votre employeur dans les délais : date de début, durée d'un ou deux mois, fractionnement éventuel, et rappel du cadre légal. Prêt à personnaliser.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-lettre-demande-conge-supplementaire-naissance-salarie" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conge-supplementaire-naissance" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Congé supplémentaire de naissance</a></span>
                  </div>
                </div>

                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  B. Vous êtes travailleur indépendant ou assimilé
                </h3>
                <p style={{marginBottom: '1rem'}}>Les travailleurs indépendants, conjoints collaborateurs, professions libérales, praticiens et auxiliaires médicaux conventionnés, artistes-auteurs et personnes rémunérées par CESU ou Pajemploi transmettent leur demande <strong>jusqu'à la veille du début du congé</strong>, via le <strong>téléservice dédié sur demarche.numerique.gouv.fr</strong>, accessible à compter du 1er juillet 2026. L'indemnité est versée par la caisse d'assurance maladie de résidence. Pour les non-salariés agricoles, la demande s'effectue auprès de la MSA, le téléservice étant ouvert dès le 1er juin 2026.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Demande d'indemnité de naissance (travailleur indépendant)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Un courrier d'accompagnement de votre demande à la caisse d'assurance maladie, pour tracer vos dates, votre durée et votre situation. Utile en complément du téléservice.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-lettre-demande-conge-supplementaire-naissance-independant" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conge-supplementaire-naissance" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Congé supplémentaire de naissance</a></span>
                  </div>
                </div>

                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  C. Vous êtes demandeur d'emploi
                </h3>
                <p style={{marginBottom: '1rem'}}>Vous devez <strong>prévenir France Travail</strong>, via votre compte personnel en ligne ou auprès de votre conseiller, <strong>au moins un mois avant</strong> le début du congé, ce délai étant ramené à <strong>quinze jours</strong> lorsque le congé suit un congé de paternité. Vous transmettez par ailleurs votre demande, jusqu'à la veille du début du congé, via le téléservice dédié.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Information à France Travail (demandeur d'emploi)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le courrier pour informer France Travail de votre congé supplémentaire de naissance dans les délais, et préserver vos droits.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-lettre-information-france-travail-conge-supplementaire-naissance" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/information-sur-vos-droits" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>faites le point sur vos droits</a></span>
                  </div>
                </div>
              </section>

              <section id="employeur">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Côté employeur : obligations et bonnes pratiques
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les entreprises, ce nouveau droit a un impact direct sur l'organisation du travail et la gestion des effectifs. Quelques règles à intégrer :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Vous ne pouvez pas refuser le congé.</strong> Comme pour le congé de paternité, votre accord préalable n'est pas requis et vous ne pouvez ni refuser ni reporter le congé. Le salarié reste libre de l'accepter ou d'y renoncer volontairement.</li>
                  <li><strong>Vous devez respecter le délai de prévenance.</strong> La demande doit vous parvenir un mois avant, ou quinze jours si le congé suit immédiatement le congé de paternité ou d'adoption.</li>
                  <li><strong>Pas de maintien de salaire imposé.</strong> Le salarié perçoit des indemnités journalières de la Sécurité sociale. Aucun maintien de salaire n'est à votre charge, sauf accord collectif ou usage plus favorable.</li>
                  <li><strong>Gestion de la paie et des déclarations.</strong> La suspension du contrat et l'attestation de salaire pour le calcul des indemnités journalières se traitent dans le cadre habituel de la déclaration sociale nominative.</li>
                  <li><strong>Réintégration et entretien.</strong> Au retour, vous devez réintégrer le salarié à son poste ou à un emploi équivalent à rémunération au moins identique, et organiser l'entretien professionnel si nécessaire.</li>
                </ul>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Confirmation employeur des dates de congé</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Le courrier de réponse au salarié : accusé de réception de la demande, confirmation des dates et de la durée, rappel des modalités de reprise. Pour sécuriser la traçabilité.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-courrier-employeur-confirmation-conge-supplementaire-naissance" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conge-supplementaire-naissance" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Congé supplémentaire de naissance</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Note de service : information du personnel</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Une note interne pour informer vos équipes du nouveau droit, des modalités de demande et des délais de prévenance. L'occasion d'une communication claire sur les congés familiaux.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-note-service-conge-supplementaire-naissance" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conge-supplementaire-naissance" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Congé supplémentaire de naissance</a></span>
                  </div>
                </div>
                <p style={{marginBottom: '1rem'}}>Au-delà des courriers, ce nouveau droit peut nourrir votre <strong>politique de qualité de vie et des conditions de travail</strong> et vos négociations sur l'<strong>égalité professionnelle</strong>. C'est aussi l'occasion d'un audit général des congés familiaux au regard de votre convention collective, qui peut prévoir des dispositions plus favorables.</p>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Congé supplémentaire de naissance</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Tous les courriers réunis et à prix groupé : demande du salarié, demande de l'indépendant, information à France Travail, confirmation employeur et note de service, avec un mémo des délais et de l'indemnisation.</p>
                  <a href="/catalogue/pack-conge-supplementaire-naissance" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Congé supplémentaire de naissance →</a>
                </div>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ACCOMPAGNEMENT</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Intégrer le nouveau congé dans vos pratiques RH</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Procédures internes, articulation avec votre convention collective, gestion des absences et des délais : le cabinet accompagne les employeurs pour sécuriser la mise en œuvre de ce nouveau droit.</p>
                  <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Être accompagné →</a>
                </div>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IX. Quatre cas concrets
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour rendre les règles plus parlantes, voici quatre situations types.</p>
                <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Cas 1 · Salarié, enfant né en mars 2026</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0}}>Le père prend d'abord son congé de paternité. Il peut ensuite poser un congé supplémentaire de naissance de deux mois, à condition de le débuter avant le 31 mars 2027 (délai de neuf mois décompté à partir du 1er juillet 2026). Il informe son employeur un mois avant, ou quinze jours s'il enchaîne directement après la paternité.</p>
                </div>
                <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Cas 2 · Salariée, enfant né en septembre 2026</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0}}>Après son congé de maternité, la mère choisit de fractionner son congé supplémentaire en deux périodes d'un mois, prises à des moments différents dans les neuf mois suivant la naissance. Elle est indemnisée à 70&nbsp;% sur la première période, puis 60&nbsp;% sur la seconde.</p>
                </div>
                <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Cas 3 · Deux parents salariés</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0}}>Chaque parent dispose de son propre droit de deux mois. En les prenant en alternance plutôt que simultanément, le couple peut couvrir jusqu'à quatre mois de présence continue auprès de l'enfant, chacun étant indemnisé sur ses deux mois.</p>
                </div>
                <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Cas 4 · Travailleur indépendant</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.7', margin: 0}}>Après avoir pris les durées minimales de son congé de maternité, de paternité ou d'adoption, l'indépendant dépose sa demande via le téléservice dédié, jusqu'à la veille du début du congé. Il perçoit une indemnité journalière forfaitaire, dégressive de 70&nbsp;% à 60&nbsp;%.</p>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le congé supplémentaire de naissance est une avancée concrète pour les familles : un ou deux mois de plus auprès de l'enfant, pour chaque parent, indemnisés par la Sécurité sociale. Pour en profiter, deux réflexes : <strong>respecter le délai de neuf mois</strong> (qui se referme au 31 mars 2027 pour les naissances du premier semestre 2026) et <strong>prévenir dans les temps</strong>, employeur ou organisme selon votre statut.</p>
                <p style={{marginBottom: '1rem'}}>Pour les employeurs, l'enjeu est d'<strong>anticiper</strong> ces absences, de sécuriser la procédure et de soigner le retour du salarié. Que vous soyez parent ou employeur, le cabinet peut vous fournir les courriers adaptés et vous accompagner dans la mise en œuvre de ce nouveau droit.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n°&nbsp;2025-1403 du 30 décembre 2025 de financement de la Sécurité sociale pour 2026, article 99</li>
                  <li>Code du travail, articles L.&nbsp;1225-46-2 à L.&nbsp;1225-46-7 (section 3 bis, congé supplémentaire de naissance)</li>
                  <li>Décrets n°&nbsp;2026-419, n°&nbsp;2026-425 et n°&nbsp;2026-426 du 30 mai 2026 relatifs au congé supplémentaire de naissance (Journal officiel du 31 mai 2026)</li>
                  <li>Service Public : <a href="https://www.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>service-public.gouv.fr</a> (création et modalités pratiques du congé supplémentaire de naissance)</li>
                  <li>Ministère du Travail et des Solidarités : <a href="https://solidarites.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>solidarites.gouv.fr</a>, et Code du travail numérique : <a href="https://code.travail.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>code.travail.gouv.fr</a></li>
                  <li>Assurance maladie, CAF et MSA : pages officielles d'information sur l'indemnisation et les démarches</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; un dispositif récent peut faire l'objet de précisions réglementaires ou administratives ultérieures.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À partir de quand peut-on prendre le congé supplémentaire de naissance ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le dispositif entre en vigueur le 1er juillet 2026, après publication des décrets d'application parus au Journal officiel le 31 mai 2026. Il bénéficie aux parents d'un enfant né ou adopté à compter du 1er janvier 2026, ou né avant cette date mais dont la naissance était prévue à compter du 1er janvier 2026. Le congé doit débuter dans un délai de neuf mois, et après épuisement des congés de maternité, de paternité et d'accueil de l'enfant ou d'adoption.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la durée du congé et peut-on le fractionner ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Chaque parent dispose d'un droit individuel et personnel, non transférable, d'un ou deux mois. Le congé peut être pris en une seule fois, sur un mois ou deux mois, ou fractionné en deux périodes d'un mois non consécutives. Les deux parents peuvent le prendre simultanément ou en alternance.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le congé est-il rémunéré, et à quelle hauteur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Il est indemnisé par l'Assurance maladie sous forme d'indemnités journalières de naissance, et non par l'employeur. Pour les salariés, l'indemnisation est dégressive : 70&nbsp;% du salaire net le premier mois, puis 60&nbsp;% le second mois, dans la limite du plafond de la Sécurité sociale (4&nbsp;005&nbsp;€ au 1er janvier 2026), sur la base des trois derniers mois de salaire. Aucun maintien de salaire n'est imposé à l'employeur, sauf disposition conventionnelle plus favorable.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mon enfant est né au premier semestre 2026, ai-je droit au congé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Pour un enfant né ou arrivé au foyer entre le 1er janvier et le 30 juin 2026, le délai de neuf mois est décompté à partir du 1er juillet 2026. Le congé peut donc être pris jusqu'au 31 mars 2027. Ce régime transitoire vaut aussi pour les enfants nés prématurément dont la naissance était prévue à compter du 1er janvier 2026.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'employeur peut-il refuser ou reporter le congé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Comme pour le congé de paternité et d'accueil de l'enfant, l'employeur ne peut ni refuser ni reporter ce congé, et son accord préalable n'est pas requis. Le salarié doit toutefois respecter un délai de prévenance compris entre quinze jours et un mois, en précisant la date de début, la durée et la répartition éventuelle en deux périodes.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le congé compte-t-il pour l'ancienneté et pour les congés payés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La durée du congé est assimilée à une période de travail effectif pour la détermination des droits liés à l'ancienneté, et le salarié conserve tous les avantages acquis avant le début du congé (article L.&nbsp;1225-46-3 du Code du travail). En revanche, ce congé n'est pas assimilé à du travail effectif pour l'acquisition des congés payés. À l'issue, le salarié retrouve son emploi ou un emploi similaire à rémunération au moins équivalente.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on cumuler ce congé avec le CMG ou la PreParE ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, pas pour une même période. L'indemnité de naissance n'est pas cumulable avec la prestation partagée d'éducation de l'enfant (PreParE), ni avec le complément de libre choix du mode de garde (CMG) au titre du même enfant, ni avec l'allocation journalière de présence parentale, l'allocation journalière du proche aidant, les indemnités journalières de maladie ou d'accident du travail, ou les allocations chômage. Une dérogation exceptionnelle au cumul avec le CMG existe pour les enfants nés ou adoptés au premier semestre 2026.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les indépendants et les demandeurs d'emploi y ont-ils droit ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le congé est ouvert à tous les parents en activité remplissant les conditions d'ouverture de droit : salariés, agents publics des trois versants, travailleurs indépendants, conjoints collaborateurs, professions libérales, praticiens et auxiliaires médicaux conventionnés, artistes-auteurs, employés rémunérés par CESU Pajemploi, non-salariés agricoles et assurés des régimes spéciaux. Les demandeurs d'emploi peuvent en bénéficier en informant France Travail, et chacun transmet sa demande via le téléservice dédié.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/conges-paternite-alsace-moselle-maintien-salaire-jurisprudence" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Congés de paternité en Alsace-Moselle : le maintien de salaire →
              </a>
              <a href="/blog/conges-jurisprudence" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Congés payés : obligations de l'employeur et droit du salarié →
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
                <a href="/blog?tag=Cong%C3%A9%20de%20naissance" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Congé de naissance</a>
                <a href="/blog?tag=Parentalit%C3%A9" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Parentalité</a>
                <a href="/blog?tag=Droit%20du%20travail" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Droit du travail</a>
                <a href="/blog?tag=Droit%20social" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Droit social</a>
                <a href="/blog?tag=LFSS%202026" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>LFSS 2026</a>
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
