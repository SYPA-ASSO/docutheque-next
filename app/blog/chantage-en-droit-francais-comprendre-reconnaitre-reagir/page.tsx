import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Le chantage en droit français : le comprendre, le reconnaître, réagir · Blog Cabinet Cholez-Pagotto`,
  description: `Le chantage au sens du Code pénal (article 312-10) suppose une menace précise pour obtenir un engagement, une renonciation ou une somme. Définition, distinction avec l'extorsion, chantage au travail, sextorsion, et démarches à suivre pour réagir.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Le chantage en droit français : le comprendre, le reconnaître, réagir",
      "description": "Le chantage au sens du Code pénal suppose une menace précise pour obtenir un engagement, une renonciation ou une somme. Définition, distinction avec l'extorsion, chantage au travail, sextorsion, et démarches à suivre.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/chantage-droit-penal-2026.webp",
      "datePublished": "2025-01-15",
      "dateModified": "2025-01-16",
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
      "url": "https://cholez-pagotto.fr/blog/chantage-en-droit-francais-comprendre-reconnaitre-reagir",
      "keywords": ["Chantage", "Article 312-10", "Extorsion", "Droit pénal", "Harcèlement moral", "Sextorsion", "Assistante maternelle", "Droit du travail", "Dénonciation calomnieuse"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Menacer quelqu'un de porter plainte constitue-t-il du chantage ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, en principe. Menacer d'user de voies de droit légitimes (porter plainte, saisir un juge, prévenir une autorité compétente) pour faire valoir un droit réel n'est pas du chantage. Cela peut le devenir si la menace s'accompagne de faits inventés ou gravement déformés dans le but d'obtenir une renonciation."
          }
        },
        {
          "@type": "Question",
          "name": "Le chantage affectif est-il puni par la loi ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas nécessairement. Des pressions comme « si tu pars, je me fais du mal » relèvent de la pression psychologique et peuvent, selon les cas, constituer du harcèlement moral ou des violences psychologiques, mais elles n'entrent dans le champ pénal du chantage au sens strict que si elles comportent une menace de révéler un fait portant atteinte à l'honneur ou à la considération."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la peine encourue pour chantage ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'article 312-10 du Code pénal punit le chantage de 5 ans d'emprisonnement et 75 000 euros d'amende. La peine est portée à 7 ans et 100 000 euros lorsque l'auteur a mis sa menace à exécution, ou depuis la loi du 21 mai 2024, lorsque le chantage est exercé en ligne au moyen d'images ou de vidéos à caractère sexuel."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire en premier face à un chantage ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conserver toutes les preuves sans rien supprimer (messages, captures d'écran horodatées, témoignages), répondre calmement par écrit pour figer la chronologie sans s'accuser soi-même, puis déposer plainte auprès de la police, de la gendarmerie, ou par courrier au procureur de la République."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Le chantage en droit français" }
      ]
    }
  ]
}

export default function ArticleChantage2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Le chantage en droit français</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT PÉNAL</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PARTICULIERS ET PROFESSIONNELS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Le chantage en droit français : le comprendre, le reconnaître, réagir</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 15 janvier 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 18 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/chantage-droit-penal-2026.webp"
                alt="Le chantage en droit français : le comprendre, le reconnaître, réagir"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#definition" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce que le droit pénal appelle « chantage »</a></li>
                <li><a href="#distinction" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Chantage, extorsion et menace légitime : ne pas confondre</a></li>
                <li><a href="#hors-champ" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Ce que le droit ne qualifie pas forcément de chantage</a></li>
                <li><a href="#travail" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Le chantage dans la vie professionnelle</a></li>
                <li><a href="#numerique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Chantage numérique et sextorsion : l'aggravation de 2024</a></li>
                <li><a href="#controle" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Le cas des professions sous contrôle administratif</a></li>
                <li><a href="#reagir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Comment réagir : preuves, courriers, démarches</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le mot « chantage » est utilisé au quotidien pour désigner à peu près toute forme de pression : chantage affectif, chantage au silence, chantage aux sentiments. Mais le droit pénal français en donne une définition précise, avec des conséquences lourdes pour son auteur, et des moyens d'action réels pour la victime.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point sur la définition juridique du chantage et de ses proches cousins, sur ses formes les plus fréquentes (au travail, dans la famille, en ligne, dans le cadre associatif), et sur les réactions à adopter pour se protéger et faire valoir ses droits.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}le chantage, défini par l'article 312-10 du Code pénal, suppose une menace de révéler ou d'imputer des faits portant atteinte à l'honneur ou à la considération d'une personne, dans le but d'obtenir une signature, un engagement, une renonciation, un secret ou une somme d'argent ; il est puni de 5 ans d'emprisonnement et 75 000 euros d'amende, porté à 7 ans et 100 000 euros en cas d'exécution de la menace ou de sextorsion en ligne.
                  </p>
                </div>
              </section>

              <section id="definition">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce que le droit pénal appelle « chantage »
                </h2>
                <p style={{marginBottom: '1rem'}}>L'article 312-10 du Code pénal définit le chantage comme <strong>« le fait d'obtenir, en menaçant de révéler ou d'imputer des faits de nature à porter atteinte à l'honneur ou à la considération, soit une signature, un engagement ou une renonciation, soit la révélation d'un secret, soit la remise de fonds, de valeurs ou d'un bien quelconque »</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, quatre éléments doivent être réunis :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Une <strong>menace</strong> de révéler ou d'accuser quelqu'un de faits précis, vrais ou faux ;</li>
                  <li>Des faits <strong>de nature à porter atteinte à l'honneur ou à la considération</strong> de la personne visée (une infidélité, une orientation sexuelle, un passé judiciaire, une accusation de maltraitance...) ;</li>
                  <li>L'<strong>intention d'obtenir</strong> quelque chose : de l'argent, un engagement, une renonciation à un droit, un secret ;</li>
                  <li>Un <strong>lien direct</strong> entre la menace et la contrepartie exigée : « si tu ne fais pas X, je révèle Y ».</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>La Cour de cassation a précisé que l'appréciation de l'atteinte à l'honneur ou à la considération se fait <strong>au regard de la situation concrète de la victime</strong>, et non de manière abstraite : un même fait révélé peut être gravement préjudiciable pour l'une, insignifiant pour l'autre.</p>
                <p style={{marginBottom: '1rem'}}>Le chantage est un délit puni de <strong>5 ans d'emprisonnement et 75 000 euros d'amende</strong>. La peine est portée à 7 ans d'emprisonnement et 100 000 euros d'amende lorsque l'auteur a mis sa menace à exécution.</p>
              </section>

              <section id="distinction">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Chantage, extorsion et menace légitime : ne pas confondre
                </h2>
                <p style={{marginBottom: '1rem'}}>Le chantage se distingue de l'<strong>extorsion</strong>, définie par l'article 312-1 du Code pénal : celle-ci consiste à obtenir quelque chose par la violence, la menace de violences ou la contrainte, sans nécessairement s'appuyer sur la menace de révéler un fait portant atteinte à l'honneur. Le chantage, lui, repose sur un levier différent : la menace de divulgation.</p>
                <p style={{marginBottom: '1rem'}}>Il se distingue également des <strong>menaces simples</strong> (menace de mort, de crime ou de délit contre les personnes), qui relèvent d'autres articles du Code pénal, indépendants de toute logique de contrepartie.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le point souvent mal compris.</strong>{' '}Menacer d'user de voies de droit légitimes, porter plainte, saisir un juge, prévenir une autorité compétente, pour faire valoir ce que l'on estime être un droit réel, n'est pas en soi du chantage. Cela peut le devenir si la menace s'accompagne de mensonges graves, de faits inventés susceptibles de ruiner la réputation de la personne visée, ou d'une instrumentalisation manifeste des institutions dans le seul but d'obtenir une renonciation à ses droits.
                  </p>
                </div>
              </section>

              <section id="hors-champ">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Ce que le droit ne qualifie pas forcément de chantage
                </h2>
                <p style={{marginBottom: '1rem'}}>Beaucoup de situations vécues comme un « chantage affectif » n'entrent pas dans le champ pénal strict, faute de menace portant sur un fait attentatoire à l'honneur. Des phrases comme <em>« si tu pars, je me fais du mal »</em>, <em>« si tu n'acceptes pas ce compromis, je ne te parlerai plus »</em> ou <em>« si tu ne viens pas, notre amitié est finie »</em> relèvent d'une pression psychologique, qui peut selon les cas constituer un harcèlement moral ou des violences psychologiques, mais qui ne satisfait pas nécessairement les éléments constitutifs du délit de chantage au sens de l'article 312-10.</p>
                <p style={{marginBottom: '1rem'}}>Cette distinction n'est pas qu'un exercice de qualification : elle conditionne la voie de droit à emprunter. Une pression purement affective se traitera davantage sur le terrain du harcèlement moral ou, dans le couple, des violences psychologiques, tandis qu'une menace de révélation attentatoire à l'honneur relève du chantage proprement dit.</p>
              </section>

              <section id="travail">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Le chantage dans la vie professionnelle
                </h2>
                <p style={{marginBottom: '1rem'}}>Le monde du travail n'est pas épargné, y compris de la part de l'employeur lui-même. Un employeur qui menace de salir la réputation d'un salarié pour l'amener à renoncer à des congés payés ou à des heures supplémentaires, à signer une rupture conventionnelle, ou à accepter une baisse de rémunération, peut entrer dans le champ du chantage dès lors que la menace porte sur des faits attentatoires à l'honneur.</p>
                <p style={{marginBottom: '1rem'}}>Ces situations ouvrent souvent <strong>deux volets complémentaires</strong>, qu'il ne faut pas hésiter à mener de front :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Le <strong>volet pénal</strong> : dépôt de plainte pour chantage si les éléments constitutifs sont réunis ;</li>
                  <li>Le <strong>volet droit du travail</strong> : mise en demeure de régulariser les sommes dues (salaire, congés, indemnités de rupture), saisine de l'inspection du travail, et saisine du conseil de prud'hommes pour obtenir le paiement des sommes dues ainsi que des dommages-intérêts au titre d'une exécution déloyale du contrat de travail.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Les pressions et menaces subies font partie intégrante du dossier présenté au conseil de prud'hommes : elles viennent étayer le caractère déloyal de l'exécution du contrat par l'employeur, indépendamment de la suite donnée sur le plan pénal.</p>
              </section>

              <section id="numerique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Chantage numérique et sextorsion : l'aggravation de 2024
                </h2>
                <p style={{marginBottom: '1rem'}}>Le chantage exercé en ligne, en particulier la <strong>sextorsion</strong>, menace de diffuser des images ou vidéos intimes pour obtenir de l'argent, des relations sexuelles ou le silence, connaît une progression préoccupante. Le législateur en a tiré les conséquences.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce qui a changé en 2024.</strong>{' '}La loi n°&nbsp;2024-449 du 21 mai 2024, dite loi SREN, a complété l'article 312-10 du Code pénal : la peine est désormais portée à <strong>7 ans d'emprisonnement et 100 000 euros d'amende</strong> lorsque le chantage est exercé par un service de communication au public en ligne, soit au moyen d'images ou de vidéos à caractère sexuel, soit en vue d'en obtenir. Cette aggravation s'applique indépendamment du fait que la menace ait été mise à exécution.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Cette évolution législative reconnaît que la menace de diffusion de contenus intimes constitue une contrainte psychologique particulièrement lourde, distincte par sa gravité du chantage ordinaire. Elle s'accompagne d'une consigne de politique pénale invitant les parquets à traiter ces dossiers avec une attention particulière, notamment lorsque la victime est mineure ou vulnérable.</p>
                <p style={{marginBottom: '1rem'}}>Sur le plan de la preuve, les mêmes réflexes que pour tout chantage s'appliquent, renforcés : conserver l'intégralité des échanges sans rien supprimer, éviter tout paiement ou toute nouvelle image envoyée sous la pression (qui n'arrête jamais la menace et l'aggrave le plus souvent), et signaler rapidement les faits aux autorités compétentes.</p>
              </section>

              <section id="controle">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Le cas des professions sous contrôle administratif
                </h2>
                <p style={{marginBottom: '1rem'}}>Dans certains métiers soumis à agrément, à carte professionnelle ou à un ordre disciplinaire, la menace de « signalement » ou de « plainte » à l'autorité de contrôle est une figure récurrente de pression. Trois exemples courants illustrent des logiques voisines, avec chacune leurs particularités.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Les assistantes maternelles : deux autorités, deux registres bien distincts</h3>
                <p style={{marginBottom: '1rem'}}>L'agrément des assistants maternels est délivré par le président du conseil départemental, dans les conditions des articles L.&nbsp;421-1 et suivants du Code de l'action sociale et des familles, et le service de protection maternelle et infantile (PMI) y joue un rôle central, notamment au titre de l'article R.&nbsp;421-1 du même code. Mais son champ de compétence est précis : il porte sur l'agrément et sur les <strong>conditions d'accueil de l'enfant</strong> (sécurité du logement, hygiène, santé), pas sur les relations contractuelles entre l'assistante maternelle et le parent employeur.</p>
                <p style={{marginBottom: '1rem'}}>Un différend portant sur le salaire, les congés payés ou les cotisations relève d'une tout autre autorité : <strong>Pajemploi</strong>, adossé au réseau des Urssaf, qui gère la déclaration et le paiement des cotisations sociales des particuliers employeurs d'assistants maternels. C'est vers cette structure, et non vers la PMI, qu'un parent en désaccord sur une déclaration ou des cotisations pourrait légitimement se tourner.</p>
                <p style={{marginBottom: '1rem'}}>C'est précisément ce qui rend suspecte la menace parfois entendue de « signalement à la PMI » lorsqu'elle vise en réalité à faire pression sur un différend de paie : elle instrumentalise une autorité dont le champ de compétence, la qualité de l'accueil de l'enfant, n'a rien à voir avec la créance salariale invoquée. C'est exactement la configuration décrite en section&nbsp;II, celle d'une menace qui déborde le cadre d'une voie de droit légitime.</p>
                <p style={{marginBottom: '1rem'}}>Lorsque la menace se concrétise par un signalement effectivement transmis à la PMI, une garantie procédurale protège l'assistante maternelle : avant toute décision de suspension, de modification ou de retrait de l'agrément, le président du conseil départemental doit obligatoirement saisir pour avis la <strong>commission consultative paritaire départementale (CCPD)</strong>, composée à parité de représentants du département et de représentants élus des assistantes maternelles. L'intéressée est informée de son passage devant cette commission au moins <strong>quinze jours</strong> avant la réunion, par lettre recommandée précisant les motifs envisagés, et dispose du droit de consulter son dossier administratif, de présenter des observations écrites ou orales, et de se faire assister ou représenter (article R.&nbsp;421-23 du Code de l'action sociale et des familles). Le Conseil constitutionnel a confirmé que ce mécanisme respecte le droit au recours, la décision de suspension ou de retrait restant une décision administrative pouvant être déférée au tribunal administratif, y compris par la voie du référé-suspension (décision n°&nbsp;2011-119 QPC du 1er avril 2011).</p>
                <p style={{marginBottom: '1rem'}}>Face à une menace de ce type, la posture la plus efficace n'est généralement pas l'évitement, mais l'<strong>anticipation transparente</strong> auprès de l'autorité réellement concernée : écrire soi-même à la PMI si la menace porte sur les conditions d'accueil, ou constituer son dossier de paie (bulletins, calculs, échanges écrits) si le désaccord est d'ordre salarial, quitte à en informer Pajemploi de sa propre initiative en cas de doute sur une déclaration. Et si le signalement se révèle ensuite inexact, que son auteur savait pertinemment qu'il l'était, une voie de droit existe contre lui : la <strong>dénonciation calomnieuse</strong>, prévue par l'article 226-10 du Code pénal (voir section&nbsp;VII). Ce sujet, suffisamment dense pour les assistantes maternelles pour mériter un traitement à part entière, fait l'objet d'un article dédié.</p>

                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#166534', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Edit du 16 janvier 2025.</strong>{' '}L'article dédié est en ligne : il détaille la procédure devant la CCPD, les recours contre une suspension ou un retrait d'agrément, et les démarches disponibles contre un signalement calomnieux.{' '}
                    <a href="/blog/assistante-maternelle-accusee-a-tort-calomnie-recours" style={{color: '#166534', fontWeight: '700', textDecoration: 'underline'}}>Assistante maternelle accusée à tort : quels recours face à la calomnie ?</a>
                  </p>
                </div>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Les chauffeurs de taxi, face à la préfecture</h3>
                <p style={{marginBottom: '1rem'}}>L'exercice de la profession de conducteur de taxi est subordonné à la délivrance d'une carte professionnelle par l'autorité administrative, conformément à l'article L.&nbsp;3121-10 du Code des transports. Cette carte peut faire l'objet d'un retrait temporaire ou définitif par le préfet, après avis de la commission locale des transports publics particuliers de personnes réunie en formation disciplinaire, notamment sur le fondement de l'article L.&nbsp;3124-11 du même code.</p>
                <p style={{marginBottom: '1rem'}}>Ce mécanisme expose les chauffeurs à une pression spécifique : un client, une plateforme partenaire ou un confrère en conflit peut menacer de saisir la préfecture d'une dénonciation, réelle ou exagérée, pour obtenir un avantage ou faire cesser un différend. Comme pour les assistantes maternelles, la meilleure réponse consiste à documenter les faits et, si nécessaire, à informer soi-même l'autorité compétente plutôt que d'attendre une convocation en formation disciplinaire.</p>
                <p style={{marginBottom: '1rem'}}>Deux logiques bien distinctes coexistent d'ailleurs pour cette profession, qu'il convient de ne pas confondre. D'une part, la <strong>sanction disciplinaire</strong> proprement dite, décidée par le préfet après avis de la commission réunie en formation disciplinaire, qui laisse au chauffeur la possibilité de présenter ses observations avant toute décision. D'autre part, le retrait quasi automatique qui découle d'une <strong>condamnation pénale routière</strong> figurant au bulletin n°&nbsp;2 du casier judiciaire pour les infractions énumérées à l'article R.&nbsp;3120-8 du Code des transports (délit de fuite, conduite sous l'empire d'un état alcoolique, usage de stupéfiants...), qui s'impose à la préfecture sans nécessiter de nouvelle délibération de la commission. La menace peut donc viser deux registres très différents selon les faits invoqués, et il convient de bien identifier lequel est en jeu avant d'y répondre.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Les infirmiers libéraux, face à l'Ordre</h3>
                <p style={{marginBottom: '1rem'}}>Les infirmiers relèvent de l'Ordre National des Infirmiers, créé par la loi n°&nbsp;2006-1668 du 21 décembre 2006, dont les chambres disciplinaires peuvent prononcer des sanctions allant de l'avertissement à l'interdiction d'exercer, sur le fondement de l'article L.&nbsp;4124-6 du Code de la santé publique, rendu applicable aux infirmiers par l'article L.&nbsp;4312-5, IV, du même code. Toute plainte transite d'abord par une conciliation obligatoire devant le conseil départemental ou interdépartemental de l'Ordre, conformément à l'article R.&nbsp;4126-1 du Code de la santé publique.</p>
                <p style={{marginBottom: '1rem'}}>La menace d'une « plainte à l'Ordre », parfois brandie par un patient, un confrère ou un employeur, dans le seul but d'obtenir un avantage étranger à une véritable faute déontologique, peut, selon les cas, constituer elle-même un chantage. L'existence d'une conciliation préalable obligatoire offre ici un espace de dialogue avant toute sanction, que l'infirmier visé a tout intérêt à documenter avec la même rigueur que les autres professionnels sous contrôle.</p>
                <p style={{marginBottom: '1rem'}}>Un second acteur, totalement distinct de l'Ordre, doit être mentionné : la <strong>Caisse Primaire d'Assurance Maladie (CPAM)</strong>, qui peut prononcer, indépendamment de toute procédure disciplinaire, un déconventionnement (mise hors convention) fondé sur l'article L.&nbsp;162-15-1 du Code de la sécurité sociale, pour un manquement aux règles de facturation. Le Tribunal des Conflits a précisé, le 9 février 2026, que cette décision relève de la compétence du juge administratif, tandis que le contentieux ordinaire des indus relève du pôle social du tribunal judiciaire. Les deux procédures, CPAM et Ordre, sont cumulables et parfaitement indépendantes l'une de l'autre : un même différend de facturation peut donner lieu à une notification d'indu, à une procédure disciplinaire ordinale, et le cas échéant à une plainte pénale, sans qu'aucune de ces voies n'attende l'issue des autres.</p>

                <p style={{marginBottom: '1rem'}}>Dans les trois cas, le principe reste identique : l'<strong>anticipation transparente</strong> auprès de l'autorité de contrôle, loin d'aggraver la situation, est généralement perçue favorablement, ces professions valorisant précisément la capacité du professionnel à coopérer avec elles. Et dans les trois cas également, un signalement sciemment mensonger n'engage pas seulement la réputation de son auteur : il l'expose, sous certaines conditions, aux poursuites pour dénonciation calomnieuse détaillées en section&nbsp;VII.</p>
              </section>

              <section id="reagir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Comment réagir : preuves, courriers, démarches
                </h2>
                <p style={{marginBottom: '1rem'}}>Avant même d'envisager une plainte, tout repose sur la <strong>constitution de la preuve</strong>.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Ne supprimez <strong>aucun message</strong> : SMS, courriels, messages vocaux, messageries instantanées ;</li>
                  <li>Faites des <strong>captures d'écran horodatées</strong>, en veillant à ce que l'identité de l'expéditeur, la date et l'heure restent visibles ;</li>
                  <li>Sauvegardez ces éléments sur un support externe, distinct de l'appareil menacé de suppression ou de piratage ;</li>
                  <li>En cas de situation grave ou répétée, envisagez un <strong>constat d'huissier</strong> sur les messages, ou des <strong>attestations écrites</strong> de témoins directs des faits.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Il peut être utile de répondre calmement à l'auteur des faits, par écrit, pour figer la chronologie sans s'accuser soi-même : rappeler la date et le contenu du message reçu, indiquer que ces propos sont inacceptables et peuvent constituer une infraction pénale, sans jamais répondre par des menaces en retour, des insultes ou des aveux inutiles.</p>
                <p style={{marginBottom: '1rem'}}>Lorsque la menace se concrétise par un signalement effectivement transmis à une autorité, PMI, préfecture, Ordre professionnel, et que ce signalement s'avère faux ou gravement déformé, une voie de droit spécifique existe contre son auteur : la <strong>dénonciation calomnieuse</strong>, définie par l'article 226-10 du Code pénal, qui punit de 5 ans d'emprisonnement et 45 000 euros d'amende la dénonciation, adressée à une autorité ayant le pouvoir d'y donner suite, d'un fait que l'on sait totalement ou partiellement inexact. La fausseté du fait dénoncé peut résulter d'une décision définitive de classement ou de relaxe ; à défaut, il appartient au juge saisi de la plainte pour dénonciation calomnieuse d'apprécier lui-même la pertinence des accusations initiales.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'erreur à éviter.</strong>{' '}Céder au chantage, payer ou envoyer ce qui est demandé, n'arrête presque jamais la pression : dans l'immense majorité des cas documentés, la demande se répète et s'aggrave. La priorité reste la preuve et le signalement, pas la négociation avec l'auteur des faits.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Sur le plan des démarches, plusieurs voies sont ouvertes et peuvent se cumuler selon le contexte : dépôt de plainte auprès d'un commissariat ou d'une brigade de gendarmerie, courrier au procureur de la République du tribunal judiciaire compétent, ou, en cas d'hésitation, dépôt d'une main courante qui laisse à tout le moins une trace datée des faits. En cas de danger immédiat, le 17 ou le 112 restent la réponse appropriée.</p>
              </section>

              <section id="contrats">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Ne restez pas seul face à la situation
                </h2>
                <p style={{marginBottom: '1rem'}}>Face à un chantage, au sens strict du terme ou plus largement face à une pression abusive, plusieurs relais existent : une assurance de protection juridique, un syndicat si la situation est professionnelle, une association d'aide aux victimes, ou un avocat, y compris pour une simple consultation d'orientation.</p>
                <p style={{marginBottom: '1rem'}}>C'est aussi le terrain sur lequel le cabinet peut vous être utile, au-delà de ce seul article : relecture d'un courrier avant envoi, mise en demeure adaptée à votre situation (salariale, contractuelle, familiale), ou orientation vers un avocat pénaliste lorsque le dépôt de plainte s'impose.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'un courrier adapté à votre situation ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet propose des modèles de courriers prêts à personnaliser (réponse à un chantage, mise en demeure) ainsi qu'une information juridique écrite sous 24 à 48h pour les situations qui appellent une analyse individualisée.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                    <a href="/catalogue" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Voir les modèles de courriers</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Le chantage, au sens du Code pénal, suppose une menace précise, portant sur des faits attentatoires à l'honneur ou à la considération, dans le but d'obtenir un engagement, une renonciation, un secret ou une somme. Il peut survenir partout : au travail, y compris de la part d'un employeur, dans la famille, entre amis, en ligne, ou dans le cadre associatif.</p>
                <p style={{marginBottom: '1rem'}}>La priorité, en toutes circonstances, reste la même : constituer la preuve, ne pas céder dans la précipitation, et formaliser sa position par des courriers clairs. Selon le contexte, une action peut être menée à la fois sur le plan pénal et sur le plan civil, social ou administratif, sans qu'il faille choisir entre ces voies plutôt que de les combiner.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code pénal, article 312-10 (définition et peines du chantage)</li>
                  <li>Code pénal, article 312-1 (définition de l'extorsion)</li>
                  <li>Code pénal, article 226-10 (dénonciation calomnieuse)</li>
                  <li>Code civil, article 9 (droit au respect de la vie privée)</li>
                  <li>Code de l'action sociale et des familles, articles L.&nbsp;421-1 et suivants (agrément des assistants maternels)</li>
                  <li>Code de l'action sociale et des familles, article R.&nbsp;421-1 (rôle d'information de la PMI)</li>
                  <li>Code de l'action sociale et des familles, article R.&nbsp;421-23 (procédure devant la commission consultative paritaire départementale)</li>
                  <li>Conseil constitutionnel, décision n°&nbsp;2011-119 QPC du 1er avril 2011 (recours contre une suspension ou un retrait d'agrément d'assistant maternel)</li>
                  <li>Pajemploi (réseau des Urssaf) : déclaration et paiement des cotisations sociales des particuliers employeurs d'assistants maternels</li>
                  <li>Code des transports, articles L.&nbsp;3121-10 et L.&nbsp;3124-11 (carte professionnelle de conducteur de taxi et retrait disciplinaire)</li>
                  <li>Code des transports, article R.&nbsp;3120-8 (incompatibilités pénales avec l'exercice de la profession de taxi ou de VTC)</li>
                  <li>Code de la santé publique, articles L.&nbsp;4124-6, L.&nbsp;4312-5 et R.&nbsp;4126-1 (procédure disciplinaire devant l'Ordre National des Infirmiers)</li>
                  <li>Code de la sécurité sociale, article L.&nbsp;162-15-1 (déconventionnement par la Caisse Primaire d'Assurance Maladie)</li>
                  <li>Tribunal des Conflits, décision du 9 février 2026 (répartition de compétence entre juge administratif et juge judiciaire, déconventionnement CPAM et contentieux ordinal des infirmiers)</li>
                  <li>Cour de cassation, chambre criminelle, 13 janvier 2016, n°&nbsp;14-85.905, publié au Bulletin (la menace de révéler l'orientation sexuelle d'une personne peut constituer un chantage, appréciée au regard de sa situation concrète)</li>
                  <li>Loi n°&nbsp;2024-449 du 21 mai 2024 relative à la sécurisation et à la régulation de l'espace numérique (loi SREN), article 17, modifiant l'article 312-10 du Code pénal (circonstance aggravante du chantage exercé en ligne au moyen d'images ou de vidéos à caractère sexuel)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, en particulier lorsqu'un dépôt de plainte est envisagé, un avocat pénaliste reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Menacer quelqu'un de porter plainte constitue-t-il du chantage ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, en principe. Menacer d'user de voies de droit légitimes (porter plainte, saisir un juge, prévenir une autorité compétente) pour faire valoir un droit réel n'est pas du chantage. Cela peut le devenir si la menace s'accompagne de faits inventés ou gravement déformés dans le but d'obtenir une renonciation.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le chantage affectif est-il puni par la loi ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pas nécessairement. Des pressions comme « si tu pars, je me fais du mal » relèvent de la pression psychologique et peuvent, selon les cas, constituer du harcèlement moral ou des violences psychologiques, mais elles n'entrent dans le champ pénal du chantage au sens strict que si elles comportent une menace de révéler un fait portant atteinte à l'honneur ou à la considération.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la peine encourue pour chantage ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'article 312-10 du Code pénal punit le chantage de 5 ans d'emprisonnement et 75 000 euros d'amende. La peine est portée à 7 ans et 100 000 euros lorsque l'auteur a mis sa menace à exécution, ou depuis la loi du 21 mai 2024, lorsque le chantage est exercé en ligne au moyen d'images ou de vidéos à caractère sexuel.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire en premier face à un chantage ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Conserver toutes les preuves sans rien supprimer (messages, captures d'écran horodatées, témoignages), répondre calmement par écrit pour figer la chronologie sans s'accuser soi-même, puis déposer plainte auprès de la police, de la gendarmerie, ou par courrier au procureur de la République.</p>
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
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Se défendre par écrit</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles de courriers de réponse et de mise en demeure à télécharger dans la Docuthèque.</p>
              <a href="/catalogue" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                Voir les modèles →
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
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Chantage</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit pénal</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit du travail</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Sextorsion</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>2026</span>
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
              { cat: 'ASSISTANTES MATERNELLES', titre: "Assistante maternelle accusée à tort : quels recours face à la calomnie ?", href: '/blog/assistante-maternelle-accusee-a-tort-calomnie-recours', date: '16 janvier 2025' },
              { cat: 'DROIT DU TRAVAIL', titre: "Saisie sur salaire : décryptage complet de la procédure et du cadre légal", href: '/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal', date: '16 juillet 2025' },
              { cat: 'FAMILLE', titre: "Article 371-4 : les droits de contact des grands-parents", href: '/blog', date: '' },
              { cat: 'ASSOCIATIONS', titre: "Responsabilité des dirigeants bénévoles d'association : civile, pénale, financière", href: '/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere', date: '' },
              { cat: 'CONSOMMATION', titre: "Bouton de rétractation : l'obligation des sites de vente en ligne depuis le 19 juin 2026", href: '/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026', date: '22 juin 2026' },
            ].filter(a => a.href !== '/blog').map((a) => (
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
