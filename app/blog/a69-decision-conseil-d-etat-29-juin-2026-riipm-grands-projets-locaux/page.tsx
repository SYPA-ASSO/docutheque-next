import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "A69 : ce que la décision du Conseil d'État du 29 juin 2026 change pour les grands projets locaux · Blog Cabinet Cholez-Pagotto",
  description: "Le 29 juin 2026, le Conseil d'État a confirmé la reprise du projet autoroutier A69. Raison impérative d'intérêt public majeur, solutions alternatives, dérogation espèces protégées : analyse complète pour les collectivités, aménageurs et associations.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/a69-decision-conseil-d-etat-29-juin-2026-riipm-grands-projets-locaux',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/a69-conseil-d-etat-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/a69-conseil-d-etat-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "A69 : ce que la décision du Conseil d'État du 29 juin 2026 change pour les grands projets locaux",
      "description": "Le 29 juin 2026, le Conseil d'État a confirmé la reprise du projet autoroutier A69. Raison impérative d'intérêt public majeur, solutions alternatives, dérogation espèces protégées : analyse complète pour les collectivités, aménageurs et associations.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/a69-conseil-d-etat-2026.webp",
      "datePublished": "2026-06-30",
      "dateModified": "2026-06-30",
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
      "url": "https://cholez-pagotto.fr/blog/a69-decision-conseil-d-etat-29-juin-2026-riipm-grands-projets-locaux",
      "keywords": [
        "A69",
        "Conseil d'État",
        "RIIPM",
        "raison impérative d'intérêt public majeur",
        "espèces protégées",
        "autorisation environnementale",
        "contentieux environnemental",
        "aménagement",
        "collectivités"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le Conseil d'État a-t-il « autorisé » l'A69 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas exactement. Le Conseil d'État a rejeté les pourvois en cassation formés contre l'arrêt de la cour administrative d'appel de Toulouse, ce qui rend définitives les autorisations environnementales des 1er et 2 mars 2023. Il valide la méthode de raisonnement de la cour, il ne se prononce pas sur l'opportunité du projet."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la raison impérative d'intérêt public majeur (RIIPM) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est l'une des trois conditions cumulatives permettant de déroger à l'interdiction de porter atteinte aux espèces protégées : le projet doit présenter un intérêt public à la fois majeur et impératif. La décision du 29 juin 2026 confirme qu'elle peut résulter d'un faisceau d'objectifs suffisamment importants, sans qu'une situation critique d'enclavement soit exigée."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi cette décision est-elle importante au-delà de l'A69 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parce qu'elle éclaire la manière dont le juge administratif apprécie la RIIPM et l'absence de solution alternative satisfaisante pour l'ensemble des grands projets : infrastructures de transport, projets énergétiques, aménagements urbains. Elle fixe une grille de lecture utile aux porteurs de projets comme aux opposants."
          }
        },
        {
          "@type": "Question",
          "name": "Une alternative moins dommageable pour l'environnement suffit-elle à bloquer un projet ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le juge vérifie si l'alternative permet d'atteindre les objectifs du projet de manière aussi efficace. Une solution moins dommageable mais nettement moins efficace au regard des objectifs poursuivis n'est pas une solution alternative satisfaisante au sens du Code de l'environnement."
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
          "name": "A69 : décision du Conseil d'État"
        }
      ]
    }
  ]
}

export default function ArticleA69ConseilDEtat2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>A69 : décision du Conseil d'État</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT PUBLIC</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ENVIRONNEMENT</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>COLLECTIVITÉS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>A69 : ce que la décision du Conseil d'État du 29 juin 2026 change pour les grands projets locaux</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 30 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 11 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/a69-conseil-d-etat-2026.webp"
                alt="A69 : ce que la décision du Conseil d'État du 29 juin 2026 change pour les grands projets locaux"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#cadre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le cadre : la dérogation « espèces protégées » et ses trois conditions</a></li>
                <li><a href="#riipm" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Pourquoi le Conseil d'État valide la raison impérative d'intérêt public majeur</a></li>
                <li><a href="#alternatives" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Les solutions alternatives écartées</a></li>
                <li><a href="#portee" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Une décision qui rend les autorisations définitives</a></li>
                <li><a href="#enseignements" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Ce que les collectivités et porteurs de projets doivent retenir</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le <strong>29 juin 2026</strong>, le Conseil d'État a rejeté les pourvois formés contre l'arrêt de la cour administrative d'appel de Toulouse qui avait autorisé la reprise du chantier de l'<strong>autoroute A69</strong> entre Castres et Toulouse. Au-delà du feuilleton médiatique, cette décision intéresse toutes les collectivités, tous les aménageurs et toutes les associations qui suivent ou contestent de grands projets d'infrastructure : elle précise la manière dont le juge administratif apprécie la <strong>raison impérative d'intérêt public majeur</strong> (RIIPM) et l'<strong>absence de solution alternative satisfaisante</strong>, deux conditions au cœur du contentieux environnemental.</p>
                <p style={{marginBottom: '1rem'}}>Cet article décrypte le raisonnement du Conseil d'État, replace la décision dans le cadre juridique de la dérogation « espèces protégées », et en tire des enseignements concrets pour les porteurs de projets comme pour leurs opposants.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> le Conseil d'État juge que la cour administrative d'appel de Toulouse n'a pas commis d'erreur en retenant que le projet A69 répond à une <strong>raison impérative d'intérêt public majeur</strong> et qu'aucune <strong>solution alternative satisfaisante</strong> ne permettait d'atteindre aussi efficacement les objectifs poursuivis : les autorisations environnementales des 1er et 2 mars 2023 sont désormais <strong>définitives</strong>.
                  </p>
                </div>
              </section>

              <section id="cadre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le cadre : la dérogation « espèces protégées » et ses trois conditions
                </h2>
                <p style={{marginBottom: '1rem'}}>Le projet A69 avait obtenu, les <strong>1er et 2 mars 2023</strong>, deux <strong>autorisations environnementales</strong>. Celles-ci comportaient notamment une <strong>dérogation à l'interdiction de détruire des espèces protégées</strong> et leurs habitats, prévue par le Code de l'environnement. Cette interdiction de principe n'admet de dérogation que dans des cas strictement encadrés.</p>
                <p style={{marginBottom: '1rem'}}>Trois conditions doivent être <strong>cumulativement</strong> réunies pour qu'une telle dérogation soit légale :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>le projet doit répondre à une <strong>raison impérative d'intérêt public majeur</strong> (RIIPM) ;</li>
                  <li>il ne doit exister <strong>aucune solution alternative satisfaisante</strong> permettant d'atteindre les mêmes objectifs ;</li>
                  <li>la dérogation ne doit pas nuire au <strong>maintien des espèces concernées dans un état de conservation favorable</strong>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>C'est sur les deux premières conditions que se concentrait le débat devant le Conseil d'État. En première instance, le tribunal administratif de Toulouse avait annulé les autorisations en février 2025, jugeant la RIIPM non établie, ce qui avait suspendu le chantier. La cour administrative d'appel avait ensuite infirmé ce jugement et permis la reprise des travaux. Restait à savoir si sa lecture serait validée en cassation.</p>
              </section>

              <section id="riipm">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Pourquoi le Conseil d'État valide la raison impérative d'intérêt public majeur
                </h2>
                <p style={{marginBottom: '1rem'}}>Le Conseil d'État retient que le projet répond à <strong>quatre objectifs distincts</strong> : la réduction du temps de trajet entre Castres et Toulouse, l'amélioration du cadre de vie des riverains des axes actuels, un gain de sécurité routière, et la contribution au développement économique et démographique de l'agglomération castraise.</p>
                <p style={{marginBottom: '1rem'}}>Point décisif du raisonnement : la cour pouvait considérer la condition de RIIPM comme remplie <strong>sans avoir à caractériser une situation critique</strong> d'enclavement ou de décrochage démographique et économique du territoire. Autrement dit, la RIIPM n'est pas réservée aux hypothèses extrêmes où un territoire serait en perdition : elle peut résulter d'un <strong>faisceau d'objectifs suffisamment importants</strong>, appréciés globalement et concrètement.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce que cela signifie en pratique.</strong> Un porteur de projet n'a pas à démontrer que son territoire est en situation de crise pour invoquer une RIIPM. Il doit en revanche identifier précisément les objectifs poursuivis, les documenter sérieusement, et démontrer leur importance cumulée. C'est la qualité de cette démonstration, plus que la gravité de la situation initiale, qui fait la différence devant le juge.
                  </p>
                </div>
              </section>

              <section id="alternatives">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Les solutions alternatives écartées
                </h2>
                <p style={{marginBottom: '1rem'}}>Deuxième terrain de contrôle : l'absence de solution alternative satisfaisante. Les requérants avançaient plusieurs pistes : l'aménagement du réseau routier existant, la mise à deux fois deux voies de l'actuelle RN126, ou encore l'amélioration de la liaison ferroviaire entre Castres et Toulouse.</p>
                <p style={{marginBottom: '1rem'}}>Le Conseil d'État juge qu'aucune de ces pistes ne constitue une <strong>solution alternative satisfaisante</strong>, car aucune ne répondait de manière <strong>aussi efficace</strong> à l'ensemble des quatre objectifs poursuivis par le projet. Le critère n'est donc pas l'existence d'une solution simplement envisageable ou moins dommageable pour l'environnement : c'est sa capacité à atteindre les objectifs du projet avec une efficacité comparable.</p>
                <p style={{marginBottom: '1rem'}}>Pour les opposants à un projet, l'enseignement est symétrique : proposer des alternatives ne suffit pas, il faut démontrer qu'elles atteignent les mêmes objectifs de façon comparable. Pour les porteurs de projets, l'examen sérieux et documenté des alternatives en amont, dans l'étude d'impact et le dossier de demande, est une condition de solidité du dossier contentieux.</p>
              </section>

              <section id="portee">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Une décision qui rend les autorisations définitives
                </h2>
                <p style={{marginBottom: '1rem'}}>En rejetant les pourvois en cassation, le Conseil d'État met un point final au contentieux principal : les autorisations environnementales des 1er et 2 mars 2023 sont <strong>désormais définitives</strong>. Le chantier, repris après l'arrêt d'appel, peut se poursuivre sur une base juridique consolidée.</p>
                <p style={{marginBottom: '1rem'}}>Il faut toutefois garder la mesure de cette décision. Le Conseil d'État ne « valide » pas politiquement l'A69 : il exerce son contrôle de juge de cassation sur l'arrêt de la cour, en vérifiant que celle-ci n'a ni commis d'erreur de droit ni dénaturé les pièces du dossier. C'est la méthode d'appréciation de la RIIPM et des alternatives qui est consacrée, pas une préférence pour les projets autoroutiers.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Attention à la généralisation hâtive.</strong> Cette décision ne signifie pas que tout projet d'infrastructure pourra désormais invoquer facilement une RIIPM. Chaque dossier reste apprécié au cas par cas, au vu de ses objectifs propres, de la qualité de son étude d'impact et du sérieux de l'examen des alternatives. Un dossier mal construit reste un dossier fragile.
                  </p>
                </div>
              </section>

              <section id="enseignements">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Ce que les collectivités et porteurs de projets doivent retenir
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les acteurs publics locaux et les maîtres d'ouvrage, la décision du 29 juin 2026 livre une méthode :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Identifier et hiérarchiser les objectifs du projet</strong> dès l'amont : temps de parcours, sécurité, cadre de vie, développement économique, chaque objectif doit être étayé par des données vérifiables.</li>
                  <li><strong>Documenter l'examen des alternatives</strong> : chaque piste écartée doit l'être pour des motifs précis, rapportés aux objectifs du projet, et non par simple affirmation.</li>
                  <li><strong>Soigner le volet espèces protégées</strong> : la troisième condition, le maintien des espèces dans un état de conservation favorable, suppose des mesures d'évitement, de réduction et de compensation sérieusement dimensionnées.</li>
                  <li><strong>Anticiper le contentieux</strong> : le dossier administratif se construit comme un futur dossier contentieux ; c'est au moment de la demande, pas au moment du recours, que se joue l'essentiel.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour les associations et les riverains, la décision rappelle que le terrain utile de la contestation est technique : c'est sur la réalité des objectifs invoqués, sur la crédibilité des données et sur la comparaison rigoureuse des alternatives que le juge se prononce.</p>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La décision A69 du 29 juin 2026 confirme deux choses. D'abord, le <strong>contentieux environnemental reste central</strong> dans les grands projets : la dérogation « espèces protégées » demeure un point de passage obligé et un point de fragilité potentiel. Ensuite, l'issue d'un dossier dépend surtout de la capacité du porteur de projet à démontrer, de façon étayée, la <strong>cohérence des objectifs poursuivis</strong> et la <strong>faiblesse relative des alternatives</strong>. En l'espèce, cette démonstration a convaincu le Conseil d'État, et les autorisations sont désormais définitives.</p>
                <p style={{marginBottom: '1rem'}}>Le cabinet suit ces évolutions pour ses lecteurs collectivités, associations et porteurs de projets, et reste disponible pour toute demande d'information sur le cadre applicable à votre situation.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur la décision du Conseil d'État du 29 juin 2026 relative au projet A69 et sur le communiqué officiel associé, disponibles sur <a href="https://www.conseil-etat.fr" style={{color: '#1a4fba', fontWeight: 600}}>conseil-etat.fr</a>, ainsi que sur les autorisations environnementales des 1er et 2 mars 2023 et l'arrêt de la cour administrative d'appel de Toulouse qu'elle confirme.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le Conseil d'État a-t-il « autorisé » l'A69 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pas exactement. Le Conseil d'État a rejeté les pourvois en cassation formés contre l'arrêt de la cour administrative d'appel de Toulouse, ce qui rend définitives les autorisations environnementales des 1er et 2 mars 2023. Il valide la méthode de raisonnement de la cour, il ne se prononce pas sur l'opportunité du projet.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la raison impérative d'intérêt public majeur (RIIPM) ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est l'une des trois conditions cumulatives permettant de déroger à l'interdiction de porter atteinte aux espèces protégées : le projet doit présenter un intérêt public à la fois majeur et impératif. La décision du 29 juin 2026 confirme qu'elle peut résulter d'un faisceau d'objectifs suffisamment importants, sans qu'une situation critique d'enclavement soit exigée.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Pourquoi cette décision est-elle importante au-delà de l'A69 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Parce qu'elle éclaire la manière dont le juge administratif apprécie la RIIPM et l'absence de solution alternative satisfaisante pour l'ensemble des grands projets : infrastructures de transport, projets énergétiques, aménagements urbains. Elle fixe une grille de lecture utile aux porteurs de projets comme aux opposants.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Une alternative moins dommageable pour l'environnement suffit-elle à bloquer un projet ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le juge vérifie si l'alternative permet d'atteindre les objectifs du projet de manière aussi efficace. Une solution moins dommageable mais nettement moins efficace au regard des objectifs poursuivis n'est pas une solution alternative satisfaisante au sens du Code de l'environnement.</p>
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
                Poser ma question &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/hydroelectricite-loi-du-29-juin-2026-concessions-autorisation-territoires" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Hydroélectricité : ce que change la loi du 29 juin 2026 pour les concessions et les territoires &rarr;
              </a>
              <a href="/blog/martinique-loi-30-juin-2026-energie-eau-assainissement-habilitation" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Martinique : ce que permet la loi du 30 juin 2026 sur l'énergie, l'eau et l'assainissement &rarr;
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
                <span key="Droit public" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit public</span>
                <span key="Environnement" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Environnement</span>
                <span key="Aménagement" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Aménagement</span>
                <span key="Collectivités" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Collectivités</span>
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
