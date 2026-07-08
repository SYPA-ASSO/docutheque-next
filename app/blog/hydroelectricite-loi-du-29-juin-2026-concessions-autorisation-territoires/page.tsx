import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Hydroélectricité : ce que change la loi du 29 juin 2026 pour les concessions et les territoires · Blog Cabinet Cholez-Pagotto",
  description: "La loi n° 2026-554 du 29 juin 2026 fait basculer les installations hydroélectriques de plus de 4 500 kW du régime de la concession vers un régime d'autorisation. Résiliation des concessions, droit réel de 70 ans, redevances, compensation des collectivités : le point complet.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/hydroelectricite-loi-du-29-juin-2026-concessions-autorisation-territoires',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/hydroelectricite-loi-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/hydroelectricite-loi-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Hydroélectricité : ce que change la loi du 29 juin 2026 pour les concessions et les territoires",
      "description": "La loi n° 2026-554 du 29 juin 2026 fait basculer les installations hydroélectriques de plus de 4 500 kW du régime de la concession vers un régime d'autorisation. Résiliation des concessions, droit réel de 70 ans, redevances, compensation des collectivités : le point complet.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/hydroelectricite-loi-2026.webp",
      "datePublished": "2026-07-01",
      "dateModified": "2026-07-01",
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
      "url": "https://cholez-pagotto.fr/blog/hydroelectricite-loi-du-29-juin-2026-concessions-autorisation-territoires",
      "keywords": [
        "hydroélectricité",
        "loi 2026-554",
        "concessions hydroélectriques",
        "régime d'autorisation",
        "barrages",
        "EDF",
        "collectivités territoriales",
        "redevances",
        "transition énergétique"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelles installations sont concernées par la fin des concessions ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les installations hydroélectriques d'une puissance supérieure à 4 500 kW (4,5 MW), soit environ 340 concessions. La concession de la Compagnie nationale du Rhône et les concessions internationales font l'objet d'un traitement particulier. La petite hydroélectricité (4 500 kW ou moins) relève d'un régime transitoire spécifique pour les contrats échus avant le 29 avril 2016."
          }
        },
        {
          "@type": "Question",
          "name": "Les barrages sont-ils privatisés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La réforme s'opère sans cession des ouvrages et des installations, qui demeurent la propriété de l'État. Les exploitants reçoivent un droit réel de 70 ans associé à un droit d'occupation domaniale, et les concessionnaires actuels bénéficient d'un droit de préférence pour obtenir l'autorisation."
          }
        },
        {
          "@type": "Question",
          "name": "Quand la loi entre-t-elle en vigueur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "À une date fixée par décret, et au plus tard le 1er septembre 2026. Les textes d'application préciseront les modalités de résiliation des concessions, d'attribution des autorisations et d'organisation des enchères de capacités."
          }
        },
        {
          "@type": "Question",
          "name": "Que deviennent les redevances perçues par les collectivités ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le régime des redevances et compensations est réorganisé par la loi. Un mécanisme de compensation des pertes de recettes importantes est prévu à compter de 2029 au profit des collectivités et EPCI concernés, selon une formule de comparaison avec les recettes perçues l'année de la première résiliation d'un contrat de concession."
          }
        },
        {
          "@type": "Question",
          "name": "Les conventions d'usage de l'eau conclues avec les concessionnaires tombent-elles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La loi prévoit que les conventions relatives à la gestion de l'eau ou au domaine public des collectivités sont maintenues, sauf accord des parties pour les modifier. Les usages locaux de l'eau ne sont pas remis en cause par le seul changement de régime."
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
          "name": "Hydroélectricité : la loi du 29 juin 2026"
        }
      ]
    }
  ]
}

export default function ArticleHydroelectriciteLoi2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Hydroélectricité : la loi du 29 juin 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ÉNERGIE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT PUBLIC</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>COLLECTIVITÉS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Hydroélectricité : ce que change la loi du 29 juin 2026 pour les concessions et les territoires</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 1er juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 12 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/hydroelectricite-loi-2026.webp"
                alt="Hydroélectricité : ce que change la loi du 29 juin 2026 pour les concessions et les territoires"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#pourquoi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Pourquoi cette réforme : sortir de dix ans de blocage européen</a></li>
                <li><a href="#bascule" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. La bascule : de la concession à l'autorisation pour les installations de plus de 4 500 kW</a></li>
                <li><a href="#contrepartie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La contrepartie : des capacités hydroélectriques ouvertes aux autres opérateurs</a></li>
                <li><a href="#collectivites" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Ce qui change pour les collectivités des vallées</a></li>
                <li><a href="#calendrier" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Le calendrier</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>C'est l'épilogue d'un feuilleton de plus de dix ans. La <strong>loi n°&nbsp;2026-554 du 29 juin 2026</strong> visant à relancer les investissements dans le secteur de l'hydroélectricité, publiée au Journal officiel du 30 juin 2026, transforme en profondeur le régime juridique des grandes installations hydroélectriques françaises. L'hydroélectricité n'est pas un sujet marginal : c'est la <strong>deuxième source de production électrique</strong> du pays après le nucléaire et la première des énergies renouvelables.</p>
                <p style={{marginBottom: '1rem'}}>Ce texte, adopté définitivement par le Parlement le 17 juin 2026, traduit l'accord de principe trouvé à l'été 2025 entre la France et la Commission européenne pour clore deux précontentieux anciens. Il intéresse les opérateurs énergétiques, bien sûr, mais aussi et surtout les <strong>collectivités territoriales</strong> des vallées concernées, dont les recettes et les conventions sont directement touchées. Voici ce qu'il faut en retenir.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> la loi n°&nbsp;2026-554 du 29 juin 2026, publiée au Journal officiel du 30 juin, organise la <strong>résiliation des contrats de concession</strong> des quelque 340 installations hydroélectriques de plus de 4&nbsp;500&nbsp;kW et leur bascule vers un <strong>régime d'autorisation</strong>, avec un droit réel de 70 ans au profit des exploitants actuels, sans cession des ouvrages, qui restent la propriété de l'État ; l'entrée en vigueur sera fixée par décret, au plus tard le <strong>1er septembre 2026</strong>.
                  </p>
                </div>
              </section>

              <section id="pourquoi">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Pourquoi cette réforme : sortir de dix ans de blocage européen
                </h2>
                <p style={{marginBottom: '1rem'}}>Depuis la loi de 1919, l'exploitation des grandes chutes d'eau relève du <strong>régime de la concession</strong> : l'État, propriétaire des ouvrages, en confie l'exploitation à un concessionnaire pour une durée déterminée. Environ <strong>340 contrats de concession</strong> sont en cours, très majoritairement détenus par EDF et par la Compagnie nationale du Rhône.</p>
                <p style={{marginBottom: '1rem'}}>Deux précontentieux européens paralysaient le secteur : l'un, ouvert en 2015, portait sur la <strong>position dominante d'EDF</strong> dans l'hydroélectricité ; l'autre, ouvert en 2019, sur l'<strong>absence de remise en concurrence des concessions échues</strong>. Faute de visibilité sur l'avenir des contrats, les investissements de modernisation étaient gelés dans de nombreuses vallées.</p>
                <p style={{marginBottom: '1rem'}}>L'accord de principe conclu avec la Commission européenne à la fin de l'été 2025 repose sur une idée simple : <strong>supprimer le régime concessif</strong> pour les grandes installations et le remplacer par un régime d'autorisation, ce qui fait disparaître l'obligation de mise en concurrence propre aux concessions. La loi du 29 juin 2026 en est la traduction législative.</p>
              </section>

              <section id="bascule">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. La bascule : de la concession à l'autorisation pour les installations de plus de 4 500 kW
                </h2>
                <p style={{marginBottom: '1rem'}}>Le cœur de la réforme tient en quelques principes :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>les <strong>contrats de concession</strong> des installations de plus de 4&nbsp;500&nbsp;kW (4,5&nbsp;MW) sont <strong>résiliés</strong>, avec indemnisation des exploitants ;</li>
                  <li>les installations basculent vers un <strong>régime d'autorisation</strong>, adossé à une autorisation environnementale assortie de prescriptions propres à l'hydroélectricité ;</li>
                  <li>la réforme s'opère <strong>sans cession des ouvrages</strong> : barrages et installations demeurent la <strong>propriété de l'État</strong> ;</li>
                  <li>un <strong>droit réel</strong>, associé à un droit d'occupation domaniale, est attribué pour <strong>70 ans</strong> aux exploitants ;</li>
                  <li>les <strong>concessionnaires actuels bénéficient d'un droit de préférence</strong> pour se voir accorder l'autorisation portant sur leurs installations.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Deux exceptions notables sont prévues : la concession de la <strong>Compagnie nationale du Rhône</strong> et les <strong>concessions internationales</strong> conservent leur régime propre. Le dispositif s'applique en revanche aussi bien à l'Hexagone qu'aux zones non interconnectées.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Et la petite hydroélectricité ?</strong> Pour les concessions dites « autorisables », d'une puissance inférieure ou égale à 4&nbsp;500&nbsp;kW, dont le contrat a échu avant le 29 avril 2016, la loi organise un régime transitoire : les exploitants peuvent poursuivre leur activité jusqu'à l'obtention de l'autorisation prévue par le Code de l'environnement.
                  </p>
                </div>
              </section>

              <section id="contrepartie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La contrepartie : des capacités hydroélectriques ouvertes aux autres opérateurs
                </h2>
                <p style={{marginBottom: '1rem'}}>La disparition de la mise en concurrence des concessions ne pouvait s'obtenir sans contrepartie concurrentielle. La loi prévoit qu'<strong>EDF met à disposition d'autres opérateurs</strong>, par voie d'<strong>enchères</strong>, des capacités de production hydroélectrique dites virtuelles, au bénéfice final des consommateurs. La filière évoque un volume de l'ordre de plusieurs gigawatts.</p>
                <p style={{marginBottom: '1rem'}}>Le législateur a pris soin de distinguer ce mécanisme de l'Arenh, le dispositif d'accès régulé à l'électricité nucléaire historique qui avait contraint EDF à céder de l'électricité à prix administré : ici, les enchères doivent tenir compte des coûts de production. L'objectif affiché est double : ouvrir le marché sans démembrer la gestion des ouvrages, et débloquer plusieurs milliards d'euros d'investissements dans les vallées.</p>
              </section>

              <section id="collectivites">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Ce qui change pour les collectivités des vallées
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le volet le plus concret pour nos lecteurs publics. Le régime des concessions générait pour les collectivités des <strong>ressources spécifiques</strong> : redevances hydroélectriques et compensations. La bascule vers l'autorisation réorganise ces flux.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Redevances et compensations.</strong> Les redevances prévues par le Code de l'énergie dans leur rédaction antérieure et la compensation financière associée sont réaménagées ; l'État perçoit certaines sommes pendant la transition.</li>
                  <li><strong>Compensation des pertes de recettes.</strong> À compter de 2029, un mécanisme de compensation est prévu au profit des communes, EPCI à fiscalité propre et autres collectivités qui constateraient, d'une année sur l'autre, une perte de recettes importante du fait de la réforme, selon une formule de calcul détaillée par la loi.</li>
                  <li><strong>Conventions maintenues.</strong> Les conventions relatives à la gestion de l'eau ou au domaine public des collectivités, conclues dans le cadre des concessions, sont <strong>maintenues sauf accord des parties</strong> : les usages de l'eau (irrigation, soutien d'étiage, tourisme) ne sont pas remis en cause par la seule bascule de régime.</li>
                  <li><strong>Zones non interconnectées.</strong> Des mesures de simplification facilitent la construction de stations de transfert d'énergie par pompage (STEP) en Corse et outre-mer, avec une possibilité de dérogation à la loi Littoral.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Point de vigilance budgétaire.</strong> Les collectivités concernées ont intérêt à cartographier dès maintenant leurs recettes liées aux installations hydroélectriques de leur territoire (redevances, compensations, fiscalité) et à suivre la publication des décrets d'application : la formule de compensation des pertes s'applique à compter de 2029 et suppose de pouvoir documenter précisément la situation de référence.
                  </p>
                </div>
              </section>

              <section id="calendrier">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Le calendrier
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi entrera en vigueur à une <strong>date fixée par décret, et au plus tard le 1er septembre 2026</strong>. Suivront la résiliation progressive des contrats, l'attribution des autorisations et des droits réels, et la mise en place des enchères de capacités. Les acteurs concernés doivent donc considérer le second semestre 2026 comme une période de transition active, pendant laquelle les textes d'application préciseront les modalités pratiques.</p>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi du 29 juin 2026 referme un dossier européen ouvert depuis plus de dix ans et redonne de la visibilité à un secteur stratégique pour la transition énergétique. Pour les exploitants, elle troque la précarité des concessions échues contre un droit réel de long terme. Pour les collectivités, elle déplace les équilibres financiers et contractuels des vallées : c'est maintenant, avant l'entrée en vigueur et la publication des décrets, qu'il faut faire l'inventaire de ses recettes, de ses conventions et de ses intérêts.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur la <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054340720" style={{color: '#1a4fba', fontWeight: 600}}>loi n° 2026-554 du 29 juin 2026</a> visant à relancer les investissements dans le secteur de l'hydroélectricité pour contribuer à la transition énergétique, publiée au Journal officiel du 30 juin 2026, ainsi que sur les travaux parlementaires du Sénat et de l'Assemblée nationale relatifs à ce texte.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles installations sont concernées par la fin des concessions ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les installations hydroélectriques d'une puissance supérieure à 4 500 kW (4,5 MW), soit environ 340 concessions. La concession de la Compagnie nationale du Rhône et les concessions internationales font l'objet d'un traitement particulier. La petite hydroélectricité (4 500 kW ou moins) relève d'un régime transitoire spécifique pour les contrats échus avant le 29 avril 2016.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les barrages sont-ils privatisés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La réforme s'opère sans cession des ouvrages et des installations, qui demeurent la propriété de l'État. Les exploitants reçoivent un droit réel de 70 ans associé à un droit d'occupation domaniale, et les concessionnaires actuels bénéficient d'un droit de préférence pour obtenir l'autorisation.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand la loi entre-t-elle en vigueur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>À une date fixée par décret, et au plus tard le 1er septembre 2026. Les textes d'application préciseront les modalités de résiliation des concessions, d'attribution des autorisations et d'organisation des enchères de capacités.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que deviennent les redevances perçues par les collectivités ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le régime des redevances et compensations est réorganisé par la loi. Un mécanisme de compensation des pertes de recettes importantes est prévu à compter de 2029 au profit des collectivités et EPCI concernés, selon une formule de comparaison avec les recettes perçues l'année de la première résiliation d'un contrat de concession.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les conventions d'usage de l'eau conclues avec les concessionnaires tombent-elles ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La loi prévoit que les conventions relatives à la gestion de l'eau ou au domaine public des collectivités sont maintenues, sauf accord des parties pour les modifier. Les usages locaux de l'eau ne sont pas remis en cause par le seul changement de régime.</p>
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
              <a href="/blog/a69-decision-conseil-d-etat-29-juin-2026-riipm-grands-projets-locaux" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                A69 : ce que la décision du Conseil d'État du 29 juin 2026 change pour les grands projets locaux &rarr;
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
                <span key="Énergie" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Énergie</span>
                <span key="Droit public" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit public</span>
                <span key="Collectivités" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Collectivités</span>
                <span key="Transition énergétique" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Transition énergétique</span>
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
