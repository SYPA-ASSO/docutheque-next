import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Votre association est-elle imposable ? Non-lucrativité, franchise et obligations en 2026 · Blog Cabinet Cholez-Pagotto`,
  description: `Une association loi 1901 n'est pas automatiquement exonérée d'impôts. Règle des 4P, franchise des impôts commerciaux portée à 81\u00a0051\u00a0€ en 2026, six manifestations exonérées, rémunération des dirigeants : le guide complet et vérifié.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Votre association est-elle imposable ? Non-lucrativité, franchise et obligations en 2026",
      "description": "Une association loi 1901 n'est pas automatiquement exonérée d'impôts. Règle des 4P, franchise des impôts commerciaux portée à 81 051 euros en 2026, six manifestations exonérées, rémunération des dirigeants : le guide complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/association-fiscalite-non-lucrativite-2026.webp",
      "datePublished": "2026-04-20",
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
      "url": "https://cholez-pagotto.fr/blog/association-imposable-non-lucrativite-franchise-impots-commerciaux-2026",
      "keywords": ["Association", "Non-lucrativité", "Franchise des impôts commerciaux", "Règle des 4P", "Gestion désintéressée", "Loi 1901", "ESS", "Fiscalité"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Une association loi 1901 paie-t-elle des impôts ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas automatiquement. Une association loi 1901 n'est pas exonérée par principe : son régime fiscal dépend de la nature de ses activités. Si sa gestion est désintéressée et qu'elle n'exerce pas d'activité lucrative au sens fiscal, elle échappe aux impôts commerciaux. Dès lors qu'elle exerce une activité lucrative, elle peut y être soumise, selon la règle dite des 4P."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la règle des 4P ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est la méthode de l'administration fiscale pour apprécier le caractère lucratif d'une activité. Une activité est lucrative si la gestion n'est pas désintéressée, si elle concurrence le secteur commercial, et si elle est exercée dans des conditions similaires à celles des entreprises, appréciées selon quatre critères : le Produit proposé, le Public visé, le Prix pratiqué et la Publicité utilisée."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le seuil de la franchise des impôts commerciaux en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour 2026, le seuil de recettes lucratives accessoires en dessous duquel une association à gestion désintéressée échappe aux impôts commerciaux s'établit à 81 051 euros (contre 80 011 euros en 2025). Ce seuil est revalorisé chaque année en fonction de l'inflation. La franchise est commune à la TVA, à l'impôt sur les sociétés et à la contribution économique territoriale, et elle s'applique de plein droit."
          }
        },
        {
          "@type": "Question",
          "name": "Les six manifestations de bienfaisance comptent-elles dans le seuil ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Les recettes des six manifestations annuelles de bienfaisance ou de soutien sont exonérées de TVA et d'impôt sur les sociétés, et ne sont pas comptabilisées dans le seuil de la franchise. Aucune limite de recettes ne s'applique à ces manifestations : c'est un outil de financement très utilisé par les associations sportives, culturelles et caritatives."
          }
        },
        {
          "@type": "Question",
          "name": "Quand mon association devient-elle imposable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dans deux cas. Si la gestion n'est plus désintéressée ou si l'activité lucrative devient prépondérante, l'association est imposable sur l'ensemble de ses activités. Si l'activité lucrative reste accessoire mais que ses recettes dépassent le seuil de franchise, l'association peut isoler ces activités dans un secteur distinct, qui sera seul imposé."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on rémunérer un dirigeant d'association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, sous conditions, sans remettre en cause la non-lucrativité. Un premier mécanisme, ouvert à toutes les associations, permet de verser à chaque dirigeant une rémunération qui ne dépasse pas les trois quarts du SMIC, de l'ordre de 1 367 euros brut par mois en 2026. Un second mécanisme, plus encadré, est réservé aux associations dont les ressources annuelles dépassent 200 000 euros."
          }
        },
        {
          "@type": "Question",
          "name": "Mon association est-elle concernée par la facturation électronique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si elle est fiscalisée, oui. À compter du 1er septembre 2026, toutes les associations fiscalisées, quelle que soit leur taille, devront être en mesure de recevoir des factures électroniques. L'obligation d'émission interviendra ensuite selon un calendrier propre. Une association non fiscalisée n'est, en principe, pas dans le champ de cette obligation."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que le contrat d'engagement républicain ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "C'est un engagement, issu de la loi du 24 août 2021, que toute association doit souscrire pour obtenir une subvention publique ou un agrément de l'État. L'association s'engage notamment à respecter les principes de liberté, d'égalité, de fraternité et de dignité de la personne humaine, ainsi que l'ordre public. Le non-respect peut entraîner le retrait de la subvention."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Fiscalité des associations 2026" }
      ]
    }
  ]
}

export default function ArticleAssociationFiscalite2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Fiscalité des associations 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIE ASSOCIATIVE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FISCALITÉ</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Votre association est-elle imposable ? Non-lucrativité, franchise et obligations en 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 20 avril 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 15 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/association-fiscalite-non-lucrativite-2026.webp"
                alt="Votre association est-elle imposable ? Non-lucrativité, franchise et obligations en 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#principe" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Non-lucrativité et règle des 4P</a></li>
                <li><a href="#franchise" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. La franchise des impôts commerciaux</a></li>
                <li><a href="#manifestations" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Les six manifestations de bienfaisance</a></li>
                <li><a href="#imposable" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Quand l'association devient imposable</a></li>
                <li><a href="#dirigeants" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Rémunérer un dirigeant</a></li>
                <li><a href="#autres" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Les autres obligations 2026</a></li>
                <li><a href="#securiser" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Sécuriser sa gestion</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>C'est une idée reçue tenace : une association loi 1901 serait, par nature, exonérée d'impôts. C'est faux. Une association <strong>n'est pas automatiquement non imposable</strong> : son régime fiscal dépend directement de la nature de ses activités et du respect de critères précis posés par l'administration. Beaucoup de dirigeants associatifs l'ignorent, jusqu'au jour d'un contrôle.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point, de façon complète et vérifiée, sur la frontière entre lucratif et non lucratif, sur la franchise des impôts commerciaux et son seuil revalorisé pour 2026, sur les six manifestations exonérées, sur la rémunération des dirigeants et sur les autres obligations de l'année. L'objectif : vous permettre de sécuriser votre gestion en connaissance de cause.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> tant que votre <strong>gestion est désintéressée</strong> et que vos activités non lucratives restent <strong>prépondérantes</strong>, vos activités lucratives accessoires échappent aux impôts commerciaux dans la limite de <strong>81&nbsp;051&nbsp;€</strong> de recettes en 2026, sans compter les six manifestations de bienfaisance.
                  </p>
                </div>
              </section>

              <section id="principe">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Non-lucrativité et règle des 4P
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour déterminer si une association est imposable, l'administration suit une méthode hiérarchique, issue d'une instruction de 1998, confirmée par une jurisprudence constante du Conseil d'État et reprise au Bulletin officiel des finances publiques. Une activité est considérée comme <strong>lucrative</strong> lorsque trois conditions sont réunies.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Une gestion non désintéressée.</strong> À l'inverse, la gestion désintéressée suppose des dirigeants bénévoles (sous réserve des tolérances de rémunération) et l'absence de distribution de bénéfices.</li>
                  <li><strong>Une concurrence avec le secteur commercial.</strong> L'association exerce-t-elle une activité que des entreprises proposent aussi ?</li>
                  <li><strong>Des conditions d'exercice similaires à celles des entreprises</strong>, appréciées selon la <strong>règle des 4P</strong>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>La règle des 4P compare l'association au secteur marchand sur quatre éléments : le <strong>Produit</strong> proposé et son utilité sociale, le <strong>Public</strong> visé (notamment les personnes ne pouvant accéder au marché), le <strong>Prix</strong> pratiqué (sensiblement inférieur, ou modulé selon les ressources), et la <strong>Publicité</strong> employée (un commerçant fait de la publicité, une association communique). Une étape préalable doit aussi être vérifiée : si l'association entretient des <strong>relations privilégiées</strong> avec des entreprises qui en tirent un avantage concurrentiel, elle est en principe lucrative pour l'ensemble de ses activités.</p>
              </section>

              <section id="franchise">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. La franchise des impôts commerciaux
                </h2>
                <p style={{marginBottom: '1rem'}}>Une association peut exercer une activité lucrative <strong>accessoire</strong> sans perdre le bénéfice de l'exonération, grâce à la franchise des impôts commerciaux. Celle-ci est commune aux trois impôts (TVA, impôt sur les sociétés, contribution économique territoriale) et s'applique <strong>de plein droit</strong>, sans démarche ni option. Trois conditions cumulatives doivent être réunies.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>La gestion doit rester <strong>désintéressée</strong>.</li>
                  <li>Les activités non lucratives doivent rester <strong>significativement prépondérantes</strong>.</li>
                  <li>Les recettes des activités lucratives accessoires ne doivent pas dépasser le <strong>seuil annuel</strong>.</li>
                </ul>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le seuil 2026.</strong> Revalorisé chaque année en fonction de l'inflation, le seuil s'établit à <strong>81&nbsp;051&nbsp;€</strong> pour 2026, contre <strong>80&nbsp;011&nbsp;€</strong> en 2025. Il s'apprécie par organisme, hors TVA, sur les recettes encaissées au cours de l'année civile. Ne sont pas comptées dans ce seuil les recettes des activités non lucratives, les cotisations, les revenus du patrimoine, les résultats des activités financières lucratives, ni les recettes des six manifestations de bienfaisance.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Un conseil pratique : tenir un <strong>suivi des recettes</strong> tirées des opérations lucratives accessoires, afin de savoir à tout moment si le seuil risque d'être franchi.</p>
              </section>

              <section id="manifestations">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Les six manifestations de bienfaisance
                </h2>
                <p style={{marginBottom: '1rem'}}>Indépendamment de la franchise, une association peut organiser jusqu'à <strong>six manifestations de bienfaisance ou de soutien par an</strong> (bals, kermesses, concerts, ventes de charité, lotos) dont les recettes sont <strong>exonérées de TVA et d'impôt sur les sociétés</strong>. Point essentiel : ces recettes ne sont <strong>pas comptabilisées</strong> dans le seuil de franchise, et <strong>aucune limite de montant</strong> ne leur est applicable.</p>
                <p style={{marginBottom: '1rem'}}>C'est un levier de financement précieux, particulièrement pour les associations sportives, culturelles et caritatives : une association peut organiser six événements générant chacun plusieurs milliers d'euros sans alourdir sa situation fiscale, à condition de respecter le cadre de ces manifestations.</p>
              </section>

              <section id="imposable">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Quand l'association devient imposable
                </h2>
                <p style={{marginBottom: '1rem'}}>Lorsque les conditions ne sont plus réunies, deux situations très différentes se présentent.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>L'imposition sur l'ensemble des activités.</strong> Si la gestion cesse d'être désintéressée, ou si l'activité lucrative devient prépondérante, l'association est imposable sur la totalité de ses activités, dans les conditions de droit commun.</li>
                  <li><strong>La sectorisation.</strong> Si l'activité lucrative reste accessoire mais que ses recettes dépassent le seuil de franchise, l'association peut isoler ces activités dans un <strong>secteur distinct</strong>, qui sera seul soumis à l'impôt, sans contaminer l'activité non lucrative.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>En matière d'impôt sur les sociétés de droit commun, les taux 2026 sont de <strong>15&nbsp;%</strong> sur les premiers <strong>42&nbsp;500&nbsp;€</strong> de bénéfice (sous conditions) puis <strong>25&nbsp;%</strong> au-delà. Par ailleurs, même non lucrative, une association reste imposée à un taux réduit sur ses <strong>revenus du patrimoine</strong> (loyers, certains dividendes). Du côté de la contribution économique territoriale, la composante CVAE est en voie de suppression, sa disparition étant prévue pour 2027, seule la CFE devant subsister à terme.</p>
              </section>

              <section id="dirigeants">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Rémunérer un dirigeant
                </h2>
                <p style={{marginBottom: '1rem'}}>La gestion désintéressée suppose en principe des dirigeants bénévoles, mais il existe des tolérances qui permettent une rémunération sans perdre la non-lucrativité.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le mécanisme ouvert à toutes les associations.</strong> Chaque dirigeant peut percevoir une rémunération qui ne dépasse pas les <strong>trois quarts du SMIC</strong>, de l'ordre de <strong>1&nbsp;367&nbsp;€ brut par mois</strong> en 2026.</li>
                  <li><strong>Le mécanisme réservé aux associations à ressources élevées.</strong> Les associations dont les ressources annuelles propres dépassent <strong>200&nbsp;000&nbsp;€</strong> peuvent, sous des conditions plus strictes de transparence et de plafonnement, rémunérer un ou plusieurs dirigeants au-delà de cette limite.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Dans tous les cas, la vigilance s'impose : une rémunération mal encadrée, ou des avantages en nature non justifiés, peuvent être requalifiés en <strong>rémunération dissimulée</strong> et faire perdre à l'association son caractère non lucratif. Le remboursement des frais des bénévoles obéit lui aussi à des règles précises, pour éviter toute requalification.</p>
              </section>

              <section id="autres">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Les autres obligations 2026
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>La taxe sur les salaires.</strong> Elle est due par les associations employeuses non assujetties à la TVA. Les associations loi 1901 bénéficient d'un abattement, porté à <strong>24&nbsp;256&nbsp;€</strong> pour la taxe due au titre des salaires de 2026.</li>
                  <li><strong>La facturation électronique.</strong> À compter du <strong>1er septembre 2026</strong>, toutes les associations fiscalisées, quelle que soit leur taille, devront être en mesure de <strong>recevoir</strong> des factures électroniques. L'obligation d'émission suivra selon un calendrier propre.</li>
                  <li><strong>Le contrat d'engagement républicain.</strong> Toute association sollicitant une <strong>subvention publique</strong> ou un <strong>agrément</strong> doit le souscrire, et s'engager à respecter les principes de la République et l'ordre public, sous peine de retrait.</li>
                </ul>
              </section>

              <section id="securiser">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Sécuriser sa gestion
                </h2>
                <p style={{marginBottom: '1rem'}}>La frontière entre lucratif et non lucratif n'est pas toujours intuitive, et les conséquences d'une erreur peuvent être lourdes : redressement, perte de l'exonération, voire requalification de l'ensemble des activités. Pour un dirigeant bénévole, souvent seul face à ces questions, l'enjeu est de bâtir une gestion claire et documentée, et d'anticiper plutôt que de subir.</p>
                <p style={{marginBottom: '1rem'}}>C'est précisément l'objet de l'accompagnement du cabinet auprès des associations et des acteurs de l'économie sociale et solidaire : clarifier votre situation au regard de la non-lucrativité, sécuriser vos statuts et votre gouvernance, et vous aider sur vos obligations déclaratives et vos demandes de subvention.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Sécuriser la gestion de votre association</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Non-lucrativité, statuts, gouvernance, subventions : le cabinet accompagne les associations et l'ESS. Une question précise ? Notre juriste vous répond par écrit.
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
                <p style={{marginBottom: '1rem'}}>Le caractère non lucratif d'une association n'est jamais acquis d'avance : il se vérifie, activité par activité, au regard de la gestion désintéressée et de la règle des 4P. La franchise des impôts commerciaux, portée à 81&nbsp;051&nbsp;€ en 2026, et les six manifestations exonérées offrent une marge de manœuvre appréciable, à condition d'en maîtriser les limites.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de suivre ses recettes lucratives, d'encadrer rigoureusement toute rémunération, et de tenir à jour ses obligations déclaratives. En cas de doute sur votre situation, mieux vaut poser la question en amont que la découvrir lors d'un contrôle.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code général des impôts, article 261, 7-1° (franchise des impôts commerciaux et exonérations applicables aux organismes sans but lucratif)</li>
                  <li>Bulletin officiel des finances publiques (BOFiP), doctrine sur la lucrativité des organismes sans but lucratif et mise à jour annuelle du montant de la franchise, <a href="https://bofip.impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>bofip.impots.gouv.fr</a></li>
                  <li>Instruction fiscale 4 H-5-98 du 15 septembre 1998 (méthode d'appréciation de la lucrativité, règle des 4P) et jurisprudence du Conseil d'État</li>
                  <li>Loi n° 2021-1109 du 24 août 2021 (contrat d'engagement républicain) et portail <a href="https://www.associations.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>associations.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les montants et seuils sont donnés à jour à la date de publication ; ils sont revalorisés chaque année.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Une association loi 1901 paie-t-elle des impôts ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pas automatiquement. Une association loi 1901 n'est pas exonérée par principe : son régime fiscal dépend de la nature de ses activités. Si sa gestion est désintéressée et qu'elle n'exerce pas d'activité lucrative au sens fiscal, elle échappe aux impôts commerciaux. Dès lors qu'elle exerce une activité lucrative, elle peut y être soumise, selon la règle des 4P.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la règle des 4P ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est la méthode de l'administration pour apprécier le caractère lucratif d'une activité. Une activité est lucrative si la gestion n'est pas désintéressée, si elle concurrence le secteur commercial, et si elle est exercée dans des conditions similaires à celles des entreprises, appréciées selon quatre critères : le Produit proposé, le Public visé, le Prix pratiqué et la Publicité utilisée.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le seuil de la franchise des impôts commerciaux en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour 2026, le seuil de recettes lucratives accessoires en dessous duquel une association à gestion désintéressée échappe aux impôts commerciaux s'établit à 81&nbsp;051&nbsp;€ (contre 80&nbsp;011&nbsp;€ en 2025). Ce seuil est revalorisé chaque année. La franchise est commune à la TVA, à l'impôt sur les sociétés et à la contribution économique territoriale, et s'applique de plein droit.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les six manifestations de bienfaisance comptent-elles dans le seuil ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Les recettes des six manifestations annuelles de bienfaisance ou de soutien sont exonérées de TVA et d'impôt sur les sociétés, et ne sont pas comptabilisées dans le seuil de la franchise. Aucune limite de recettes ne s'applique à ces manifestations : c'est un outil de financement très utilisé par les associations sportives, culturelles et caritatives.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand mon association devient-elle imposable ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Dans deux cas. Si la gestion n'est plus désintéressée ou si l'activité lucrative devient prépondérante, l'association est imposable sur l'ensemble de ses activités. Si l'activité lucrative reste accessoire mais que ses recettes dépassent le seuil de franchise, l'association peut isoler ces activités dans un secteur distinct, qui sera seul imposé.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on rémunérer un dirigeant d'association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, sous conditions, sans remettre en cause la non-lucrativité. Un premier mécanisme, ouvert à toutes les associations, permet de verser à chaque dirigeant une rémunération qui ne dépasse pas les trois quarts du SMIC, de l'ordre de 1&nbsp;367&nbsp;€ brut par mois en 2026. Un second mécanisme, plus encadré, est réservé aux associations dont les ressources annuelles dépassent 200&nbsp;000&nbsp;€.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mon association est-elle concernée par la facturation électronique ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si elle est fiscalisée, oui. À compter du 1er septembre 2026, toutes les associations fiscalisées, quelle que soit leur taille, devront être en mesure de recevoir des factures électroniques. L'obligation d'émission interviendra ensuite selon un calendrier propre. Une association non fiscalisée n'est, en principe, pas dans le champ de cette obligation.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le contrat d'engagement républicain ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>C'est un engagement, issu de la loi du 24 août 2021, que toute association doit souscrire pour obtenir une subvention publique ou un agrément de l'État. L'association s'engage notamment à respecter les principes de liberté, d'égalité, de fraternité et de dignité de la personne humaine, ainsi que l'ordre public. Le non-respect peut entraîner le retrait de la subvention.</p>
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
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Accompagnement des associations</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Non-lucrativité, statuts, gouvernance, subventions : le cabinet accompagne les associations et l'économie sociale et solidaire.</p>
              <a href="/accompagnement-associations" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Découvrir l'accompagnement →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Facturation électronique obligatoire 2026 : ce qui change →
              </a>
              <a href="/blog/loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Loi de finances 2026 : ce qui change pour les TPE →
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
                <span key="Association" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Association</span>
                <span key="Non-lucrativité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Non-lucrativité</span>
                <span key="Fiscalité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Fiscalité</span>
                <span key="ESS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>ESS</span>
                <span key="Loi 1901" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Loi 1901</span>
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
