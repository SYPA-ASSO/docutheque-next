import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Vacances : sécuriser son logement, son assurance, la garde des enfants et des animaux · Blog Cabinet Cholez-Pagotto`,
  description: `Avant de partir en vacances : clause d'inhabitation de l'assurance habitation, déclaration d'absence, garde d'enfants par une assistante maternelle ou une nounou, garde ou départ avec son animal, et sécurisation des locaux professionnels. Le guide complet et vérifié, pour les particuliers comme pour les professionnels.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/vacances-securiser-logement-assurance-garde-enfants-animaux',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/vacances-securiser-logement-assurance-garde-enfants-animaux-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/vacances-securiser-logement-assurance-garde-enfants-animaux-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Vacances : sécuriser son logement, son assurance habitation, la garde des enfants et des animaux",
      "description": "Clause d'inhabitation, déclaration d'absence à l'assureur, garde d'enfants par une assistante maternelle ou une nounou, pension ou voyage avec son animal, sécurisation des locaux professionnels : le guide complet avant de partir en vacances.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/vacances-securiser-logement-assurance-garde-enfants-animaux-2026.webp",
      "datePublished": "2026-07-20",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/vacances-securiser-logement-assurance-garde-enfants-animaux",
      "keywords": ["Assurance habitation", "Clause d'inhabitation", "Vacances", "Garde d'animaux", "Abandon d'animal", "Particulier employeur", "Local professionnel"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Combien de temps mon assurance habitation me couvre-t-elle si je pars en vacances ?", "acceptedAnswer": { "@type": "Answer", "text": "Cela dépend de la clause d'inhabitation prévue dans votre contrat, si elle existe. Sa durée varie généralement entre 30 et 90 jours selon les assureurs. Au-delà, l'indemnisation en cas de sinistre peut être réduite ou refusée. Cette clause doit être mentionnée en caractères très apparents pour être opposable, en application de l'article L.112-4 du Code des assurances." } },
        { "@type": "Question", "name": "Dois-je prévenir mon assureur avant de partir plusieurs semaines ?", "acceptedAnswer": { "@type": "Answer", "text": "Ce n'est pas une obligation légale générale, mais c'est recommandé dès lors que votre absence risque de dépasser le délai fixé par la clause d'inhabitation de votre contrat. Seule la lecture de vos conditions générales permet de le savoir avec certitude." } },
        { "@type": "Question", "name": "Que risque-t-on en cas d'abandon d'un animal avant de partir en vacances ?", "acceptedAnswer": { "@type": "Answer", "text": "L'abandon d'un animal domestique est puni des mêmes peines que les actes de cruauté, soit jusqu'à trois ans d'emprisonnement et 45 000 € d'amende en application de l'article 521-1 du Code pénal, et jusqu'à cinq ans et 75 000 € si l'abandon entraîne la mort de l'animal." } },
        { "@type": "Question", "name": "Ma nounou ou mon assistante maternelle peut-elle m'accompagner en vacances ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, à condition que cela soit organisé dans le cadre de son contrat de travail de particulier employeur, avec un accord explicite sur les conditions de déplacement, d'hébergement et de rémunération pendant cette période." } },
        { "@type": "Question", "name": "Mon assurance professionnelle me couvre-t-elle si mon local est fermé pour congés ?", "acceptedAnswer": { "@type": "Answer", "text": "Cela dépend de votre contrat multirisque professionnelle : la garantie vol y est souvent conditionnée à la durée d'inoccupation des locaux. La garantie perte d'exploitation, elle, ne se déclenche en principe pas pour une fermeture volontaire. Seule la lecture de vos conditions générales permet de connaître les exigences propres à votre contrat." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "Vacances : sécuriser son logement et son assurance" }
    ] }
  ]
}

export default function ArticleVacancesSecuriserLogement() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Vacances : sécuriser son logement et son assurance</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ASSURANCES</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PARTICULIERS &amp; PROFESSIONNELS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Vacances : sécuriser son logement, son assurance habitation, la garde des enfants et des animaux</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 20 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 17 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/vacances-securiser-logement-assurance-garde-enfants-animaux-2026.webp" alt="Vacances : sécuriser son logement, son assurance habitation, la garde des enfants et des animaux" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#logement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. Sécuriser son logement avant de partir</a></li>
                <li><a href="#inhabitation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. La clause d'inhabitation de l'assurance habitation</a></li>
                <li><a href="#declaration" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. Faut-il déclarer son absence à son assureur ?</a></li>
                <li><a href="#enfants" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Garde des enfants pendant les vacances</a></li>
                <li><a href="#animaux" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Partir avec son animal ou le faire garder</a></li>
                <li><a href="#sinistre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. Un sinistre survient pendant l'absence : que faire ?</a></li>
                <li><a href="#professionnels" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VII. Professionnels : sécuriser ses locaux pendant la fermeture estivale</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Chaque été, le même scénario se répète : on ferme la porte, on prend la route, et on découvre parfois au retour que l&apos;assurance ne couvre pas ce qu&apos;on croyait, que la personne censée passer nourrir le chat n&apos;est finalement pas venue, ou que la nounou n&apos;a jamais signé d&apos;avenant pour le séjour à l&apos;étranger. Aucun de ces points n&apos;est complexe pris séparément. C&apos;est l&apos;accumulation de petites approximations qui coûte cher.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L&apos;essentiel en une phrase :</strong>{' '}la plupart des contrats d&apos;assurance habitation et multirisque professionnelle prévoient une clause d&apos;inhabitation ou d&apos;inoccupation, qui limite la garantie en cas d&apos;absence prolongée (souvent 30 à 90 jours). Au-delà, l&apos;indemnisation peut être réduite ou refusée, en application de l&apos;article&nbsp;L.&nbsp;112-4 du Code des assurances. Quelques vérifications avant le départ, côté logement, animaux, garde d&apos;enfants et locaux professionnels, permettent d&apos;éviter la mauvaise surprise du retour.
                  </p>
                </div>
              </section>

              <section id="logement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. Sécuriser son logement avant de partir</h2>
                <p style={{marginBottom: '1rem'}}>Les vérifications de base restent les plus efficaces. Relever les compteurs d&apos;eau et d&apos;électricité permet de détecter une fuite ou une surconsommation anormale au retour. Couper l&apos;arrivée d&apos;eau générale, quand c&apos;est possible, limite le risque de dégât des eaux, premier motif de sinistre habitation en France pendant les périodes d&apos;absence prolongée.</p>
                <p style={{marginBottom: '1rem'}}>Débrancher les appareils qui ne nécessitent pas d&apos;être en veille, fermer les volets ou activer un système de simulation de présence, et éviter d&apos;annoncer publiquement la date exacte du départ et la durée du séjour sur les réseaux sociaux sont des réflexes simples qui réduisent le risque de cambriolage, sans engager de dépense particulière.</p>
              </section>

              <section id="inhabitation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. La clause d&apos;inhabitation de l&apos;assurance habitation</h2>
                <p style={{marginBottom: '1rem'}}>C&apos;est le point le plus souvent ignoré, et le plus coûteux en cas de sinistre. De nombreux contrats multirisques habitation comportent une clause dite d&apos;inhabitation, ou clause d&apos;inoccupation : elle fixe une durée maximale pendant laquelle le logement peut rester vide sans que cela affecte la garantie, généralement comprise entre 30 et 90 jours selon les assureurs, consécutifs ou cumulés sur l&apos;année.</p>
                <p style={{marginBottom: '1rem'}}>Au-delà de ce délai, l&apos;indemnisation en cas de vol, de dégât des eaux ou d&apos;incendie peut être réduite, voire totalement refusée. Pour être opposable à l&apos;assuré, cette clause doit être mentionnée en caractères très apparents dans le contrat, en application de l&apos;<strong>article&nbsp;L.&nbsp;112-4 du Code des assurances</strong>, qui pose cette exigence pour toute clause de nullité, de déchéance ou d&apos;exclusion de garantie. Une clause noyée dans un paragraphe standard, sans mise en évidence, peut être jugée inopposable par un tribunal.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Point de vigilance :</strong>{' '}toutes les absences ne sont pas concernées de la même façon. La plupart des contrats ne comptabilisent que les absences continues au-delà de 72&nbsp;heures, et neutralisent le décompte si une personne repasse ponctuellement sur place. Le fonctionnement exact dépend toutefois de chaque contrat : seule la lecture des conditions générales et particulières permet de connaître son propre délai et ses propres règles de calcul.
                  </p>
                </div>
              </section>

              <section id="declaration">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. Faut-il déclarer son absence à son assureur ?</h2>
                <p style={{marginBottom: '1rem'}}>Il n&apos;existe pas d&apos;obligation légale générale de prévenir son assureur avant de partir en vacances. La question se pose concrètement dans un seul cas : lorsque le contrat prévoit une clause d&apos;inhabitation et que l&apos;absence prévue risque de dépasser le délai qu&apos;elle fixe.</p>
                <p style={{marginBottom: '1rem'}}>Dans cette situation, deux options existent selon les assureurs : demander la suspension ou l&apos;adaptation temporaire de la clause, ou souscrire une garantie complémentaire couvrant spécifiquement les absences prolongées. Certaines situations, comme une expatriation ou un séjour professionnel de longue durée, justifient souvent la suppression pure et simple de la clause au moment de la souscription.</p>
              </section>

              <section id="enfants">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Garde des enfants pendant les vacances</h2>
                <p style={{marginBottom: '1rem'}}>Quand la garde d&apos;un enfant est assurée par une assistante maternelle ou une salariée à domicile employée à titre personnel, la période estivale pose deux questions distinctes : la poursuite ou la suspension du contrat de travail pendant les congés, et les conditions d&apos;un éventuel accompagnement de la famille en vacances.</p>
                <p style={{marginBottom: '1rem'}}>Un départ en vacances avec sa nounou ou son assistante maternelle est possible, mais suppose un accord explicite entre les parties sur les modalités du séjour : temps de travail effectif, temps de repos, hébergement, prise en charge des frais de déplacement, et rémunération correspondante. Ces éléments gagnent à être formalisés par écrit, en complément du contrat de travail habituel, pour éviter tout désaccord sur ce qui relève du temps de travail et ce qui n&apos;en relève pas.</p>
                <p style={{marginBottom: '1rem'}}>Pour les familles qui recourent ponctuellement à une colonie de vacances, un centre de loisirs ou une garde partagée entre proches, le point de vigilance porte davantage sur l&apos;assurance responsabilité civile de l&apos;organisme d&apos;accueil et, le cas échéant, sur l&apos;extension de la garantie responsabilité civile familiale du contrat multirisque habitation, qui couvre en principe les dommages causés par un enfant mineur y compris hors du domicile.</p>
              </section>

              <section id="animaux">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Partir avec son animal ou le faire garder</h2>
                <p style={{marginBottom: '1rem'}}>Trois options se présentent généralement : emmener l&apos;animal en vacances, le confier à un proche, ou recourir à une pension animalière ou à un service de garde professionnel. Chacune a ses implications.</p>
                <p style={{marginBottom: '1rem'}}>Confier son animal à une pension ou à un particulier contre rémunération relève juridiquement d&apos;un contrat de dépôt : le dépositaire doit apporter à la garde de l&apos;animal les mêmes soins qu&apos;à ses propres biens et en répond en cas de perte ou de dommage résultant de sa négligence. Il est recommandé de formaliser ce contrat par écrit, même sommairement, avec les coordonnées du vétérinaire habituel et les consignes de santé de l&apos;animal.</p>
                <p style={{marginBottom: '1rem'}}>Pour un départ à l&apos;étranger avec son chien ou son chat, le passeport européen pour animal de compagnie et une vaccination antirabique à jour sont exigés dans la plupart des pays de l&apos;Union européenne, avec des délais de validité à vérifier suffisamment en amont du départ.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Nouveauté à retenir :</strong>{' '}laisser un animal sans solution de garde avant de partir constitue un abandon au sens du Code pénal. L&apos;article&nbsp;521-1 punit l&apos;abandon d&apos;un animal domestique, apprivoisé ou tenu en captivité des mêmes peines que les sévices graves ou actes de cruauté, soit jusqu&apos;à trois ans d&apos;emprisonnement et 45&nbsp;000&nbsp;€ d&apos;amende, portés à quatre ans et 60&nbsp;000&nbsp;€ en cas de circonstance aggravante, et jusqu&apos;à cinq ans et 75&nbsp;000&nbsp;€ si l&apos;abandon a entraîné la mort de l&apos;animal. L&apos;identification obligatoire par puce électronique permet en pratique de retrouver rapidement le propriétaire d&apos;un animal abandonné.
                  </p>
                </div>
              </section>

              <section id="sinistre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. Un sinistre survient pendant l&apos;absence : que faire ?</h2>
                <p style={{marginBottom: '1rem'}}>La déclaration de sinistre doit intervenir dans le délai fixé au contrat, qui ne peut être inférieur à cinq jours ouvrés en application de l&apos;article&nbsp;L.&nbsp;113-2 du Code des assurances, sauf circonstances particulières justifiant un délai supérieur. En pratique, désigner avant le départ une personne de confiance disposant d&apos;un double des clés permet de faire constater les dégâts rapidement et de limiter leur aggravation, ce qui reste l&apos;une des obligations de l&apos;assuré en cas de sinistre.</p>
                <p style={{marginBottom: '1rem'}}>Conserver les photos de l&apos;état du logement avant le départ, ainsi que les justificatifs d&apos;achat des biens de valeur, facilite ensuite l&apos;évaluation du préjudice par l&apos;assureur ou l&apos;expert mandaté.</p>
              </section>

              <section id="professionnels">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VII. Professionnels : sécuriser ses locaux pendant la fermeture estivale</h2>
                <p style={{marginBottom: '1rem'}}>Un local professionnel fermé pour congés est un local sans surveillance, une réserve qui se réchauffe, une fuite qui peut couler plusieurs jours sans que personne ne s&apos;en aperçoive. La fermeture estivale ne supprime pas les risques, elle en change simplement la nature. Les mêmes réflexes que pour un logement s&apos;appliquent, avec des enjeux contractuels propres à l&apos;activité.</p>
                <p style={{marginBottom: '1rem'}}>Lorsque le local est loué, une assurance couvrant les risques locatifs (incendie, explosion, dégât des eaux) est exigée par la quasi-totalité des baux commerciaux et professionnels : ce n&apos;est pas une obligation légale au sens strict comme pour l&apos;habitation, mais une obligation contractuelle dont le non-respect peut entraîner la résiliation du bail. Une attestation d&apos;assurance à jour doit pouvoir être présentée au bailleur à tout moment.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Point de vigilance :</strong>{' '}de nombreux contrats multirisque professionnelle encadrent la garantie vol par des conditions liées à la durée d&apos;inoccupation des locaux, sur le même principe que la clause d&apos;inhabitation d&apos;un contrat habitation. Ces conditions varient fortement d&apos;un contrat à l&apos;autre et ne sont pas standardisées comme pour l&apos;habitation : seule la lecture des conditions générales de votre propre contrat permet de savoir ce qui est exigé (télésurveillance, alarme raccordée, déclaration préalable de fermeture, etc.). Par ailleurs, une fermeture volontaire pour congés ne déclenche en principe pas la garantie perte d&apos;exploitation, qui suppose un sinistre garanti à l&apos;origine de l&apos;arrêt d&apos;activité, et non une décision de fermeture.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Avant de fermer : prévenir son assureur si le contrat le demande, vérifier le fonctionnement de l&apos;alarme et de la télésurveillance si le local en est équipé, couper les circuits non essentiels, sécuriser ou mettre en lieu sûr les stocks de valeur, et organiser un passage régulier d&apos;un salarié, d&apos;un voisin professionnel ou d&apos;un prestataire de gardiennage pour repérer rapidement toute anomalie. Anticiper également la gestion des contrats en cours pendant la fermeture (livraisons, prélèvements, échéances contractuelles) évite les mauvaises surprises au retour.</p>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Faire analyser votre contrat avant de partir</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Particulier ou professionnel, un doute sur votre contrat ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>En qualité de courtier, le cabinet peut analyser votre contrat d&apos;assurance habitation ou multirisque professionnelle actuel, vérifier la présence et la portée d&apos;une clause d&apos;inoccupation, et vous orienter vers une couverture adaptée à votre situation, ainsi qu&apos;une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/conseil-assurances" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Faire analyser mon contrat</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>Aucune de ces règles n&apos;est propre aux vacances : elles s&apos;appliquent à toute absence prolongée du domicile ou des locaux professionnels. C&apos;est simplement l&apos;été qui les rend les plus fréquentes. Un contrôle de dix minutes sur son contrat d&apos;assurance avant de partir évite le plus souvent la mauvaise surprise du retour.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code des assurances, article L.&nbsp;112-4 (formalisme des clauses de nullité, déchéance et exclusion de garantie)</li>
                  <li>Code des assurances, article L.&nbsp;113-2 (délai minimal de déclaration de sinistre)</li>
                  <li>Code pénal, article 521-1 (sévices graves, actes de cruauté et abandon d&apos;animal)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d&apos;une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l&apos;analyse d&apos;une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Combien de temps mon assurance habitation me couvre-t-elle si je pars en vacances ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Cela dépend de la clause d&apos;inhabitation prévue dans votre contrat, si elle existe. Sa durée varie généralement entre 30 et 90 jours selon les assureurs. Au-delà, l&apos;indemnisation peut être réduite ou refusée. Cette clause doit être mentionnée en caractères très apparents pour être opposable, en application de l&apos;article L.112-4 du Code des assurances.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Dois-je prévenir mon assureur avant de partir plusieurs semaines ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Ce n&apos;est pas une obligation légale générale, mais c&apos;est recommandé dès lors que votre absence risque de dépasser le délai fixé par la clause d&apos;inhabitation de votre contrat. Seule la lecture de vos conditions générales permet de le savoir avec certitude.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Que risque-t-on en cas d&apos;abandon d&apos;un animal avant de partir en vacances ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>L&apos;abandon d&apos;un animal domestique est puni des mêmes peines que les actes de cruauté, soit jusqu&apos;à trois ans d&apos;emprisonnement et 45&nbsp;000&nbsp;€ d&apos;amende en application de l&apos;article 521-1 du Code pénal, et jusqu&apos;à cinq ans et 75&nbsp;000&nbsp;€ si l&apos;abandon entraîne la mort de l&apos;animal.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Ma nounou ou mon assistante maternelle peut-elle m&apos;accompagner en vacances ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui, à condition que cela soit organisé dans le cadre de son contrat de travail de particulier employeur, avec un accord explicite sur les conditions de déplacement, d&apos;hébergement et de rémunération pendant cette période.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Mon assurance professionnelle me couvre-t-elle si mon local est fermé pour congés ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Cela dépend de votre contrat multirisque professionnelle : la garantie vol y est souvent conditionnée à la durée d&apos;inoccupation des locaux. La garantie perte d&apos;exploitation, elle, ne se déclenche en principe pas pour une fermeture volontaire. Seule la lecture de vos conditions générales permet de connaître les exigences propres à votre contrat.</p>
                  </details>
                </div>
              </section>
            </div>
          </article>

          <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>À propos de l&apos;auteur</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                <div><p style={{color: '#374151', fontSize: '12px', fontWeight: '700', margin: '0 0 2px'}}>François CHOLEZ</p><p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p></div>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>Accompagne particuliers, professionnels, collectivités et acteurs de l&apos;ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.</p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>
            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l&apos;unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d&apos;identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>Poser ma question →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/assurance-habitation-auto-incendie-foret-debroussaillement-franchise" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px'}}>Incendie de forêt ou de végétation : ce que couvre votre assurance habitation et auto →</a>
              <a href="/blog/fin-contrat-salarie-particulier-employeur-licenciement-retrait-enfant" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>Fin de contrat d&apos;un salarié à domicile ou d&apos;une assistante maternelle →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=Assurance%20habitation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Assurance habitation</a>
                <a href="/blog?tag=Vacances" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Vacances</a>
                <a href="/blog?tag=Absence%20prolong%C3%A9e" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Absence prolongée</a>
                <a href="/blog?tag=Garde%20d'animaux" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Garde d&apos;animaux</a>
                <a href="/blog?tag=Particulier%20employeur" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Particulier employeur</a>
                <a href="/blog?tag=Local%20professionnel" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Local professionnel</a>
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
