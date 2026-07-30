import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Création de site internet : le délai de rétractation court dès la conclusion du contrat (Cass. 28 mai 2026) · Blog Cabinet Cholez-Pagotto`,
  description: `La Cour de cassation juge que la conception d'un site internet personnalisé est une prestation de services, non une vente : le délai de rétractation de 14 jours court dès la conclusion du contrat, pas à sa réception. Analyse de l'arrêt du 28 mai 2026.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/creation-site-internet-delai-retractation-cour-cassation-28-mai-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creation-site-internet-retractation-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creation-site-internet-retractation-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Création de site internet : le délai de rétractation court dès la conclusion du contrat",
      "description": "La Cour de cassation juge que la conception d'un site internet personnalisé est une prestation de services, non une vente : le délai de rétractation de 14 jours court dès la conclusion du contrat.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creation-site-internet-retractation-2026.webp",
      "datePublished": "2026-05-29",
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
      "url": "https://cholez-pagotto.fr/blog/creation-site-internet-delai-retractation-cour-cassation-28-mai-2026",
      "keywords": ["Droit de rétractation", "Site internet", "Contrat hors établissement", "Cour de cassation", "Prestation de services", "Article 528 code civil", "Agence web", "Consommation"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Un contrat de création de site internet personnalisé est-il une vente ou une prestation de services ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selon la Cour de cassation (Civ. 1re, 28 mai 2026, n° 25-14.507), c'est une prestation de services. Le contrat n'emporte pas transfert de propriété d'un bien meuble au sens de l'article 528 du Code civil, ce qui exclut la qualification de vente, même lorsque le contrat porte aussi sur la mise à disposition du site."
          }
        },
        {
          "@type": "Question",
          "name": "À partir de quand court le délai de rétractation de 14 jours ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour ce type de contrat, le délai court à compter de la conclusion du contrat, en pratique le plus souvent la date de signature pour ce type de contrats conclus hors établissement, et non à compter de la réception ou de la mise en ligne du site."
          }
        },
        {
          "@type": "Question",
          "name": "Un professionnel peut-il aussi se rétracter d'un contrat de création de site internet ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, à condition que le contrat soit conclu hors établissement, que son objet n'entre pas dans le champ de l'activité principale du professionnel sollicité, et que celui-ci emploie cinq salariés au plus (article L. 221-3 du Code de la consommation)."
          }
        },
        {
          "@type": "Question",
          "name": "Que risque un prestataire dont les conditions générales indiquent un mauvais point de départ du délai ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si l'information sur le délai de rétractation est absente, ou suffisamment erronée pour priver le consommateur d'une information effective, le professionnel s'expose selon les cas à la prorogation de douze mois prévue par l'article L. 221-20 du Code de la consommation, voire à la nullité du contrat sur le fondement des articles L. 221-9 et L. 242-1 du même code."
          }
        },
        {
          "@type": "Question",
          "name": "Un bien incorporel peut-il faire l'objet d'une vente ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cela dépend du montage contractuel. Dans un cas précis, celui d'une copie de logiciel téléchargée et rendue utilisable de façon permanente contre paiement, la chambre commerciale de la Cour de cassation (6 mars 2024, n° 22-23.657) a jugé, sur le fondement de l'article L. 122-6, 3° du Code de la propriété intellectuelle, que cette mise à disposition impliquait un transfert de propriété. La première chambre civile, dans l'arrêt du 28 mai 2026, retient une lecture différente pour un site internet personnalisé, faute de transfert de propriété d'un bien meuble au sens de l'article 528 du Code civil et du Code de la consommation."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la source juridique sur la condition des cinq salariés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La condition d'effectif est posée à l'article L. 221-3 du Code de la consommation (deux conditions cumulatives). La Cour de cassation rappelle que le juge du fond doit apprécier exclusivement si l'objet du contrat entre dans le champ de l'activité principale, sans substituer d'autres critères tels que les compétences du professionnel ou l'utilité du contrat (Cass. 1re civ., 31 août 2022, n° 21-11.455, Bull. ; Cass. 1re civ., 27 nov. 2019, n° 18-22.525 ; Cass. 1re civ., 12 sept. 2018, n° 17-17.319)."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Création de site internet et délai de rétractation" }
      ]
    }
  ]
}

export default function ArticleSiteInternetRetractation2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Site internet et délai de rétractation</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONSOMMATION</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>NUMÉRIQUE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Création de site internet : le délai de rétractation court dès la conclusion du contrat</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 29 mai 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 11 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creation-site-internet-retractation-2026.webp"
                alt="Création de site internet : le délai de rétractation court dès la conclusion du contrat"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Selon la Cour de cassation (Civ. 1re, 28 mai 2026, n° 25-14.507), c'est une prestation de services.</li>
                <li>Pour ce type de contrat, le délai court à compter de la conclusion du contrat, en pratique le plus souvent la date de signature pour ce type de contrats conclus hors établissement, et non à…</li>
                <li>À condition que le contrat soit conclu hors établissement, que son objet n'entre pas dans le champ de l'activité principale du professionnel sollicité, et que celui-ci emploie cinq salariés au…</li>
                <li>Si l'information sur le délai de rétractation est absente, ou suffisamment erronée pour priver le consommateur d'une information effective, le professionnel s'expose selon les cas à la…</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#faits" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Les faits : un site livré, une rétractation contestée</a></li>
                <li><a href="#appel" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. La cour d'appel : un contrat "mixte" assimilé à une vente</a></li>
                <li><a href="#cassation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La cassation : pas de transfert de propriété, pas de vente</a></li>
                <li><a href="#divergence" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Une lecture différente pour les biens incorporels</a></li>
                <li><a href="#consequence" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. La conséquence pratique sur le point de départ du délai</a></li>
                <li><a href="#professionnels" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Un professionnel peut-il aussi se rétracter ?</a></li>
                <li><a href="#clauses" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Ce que les prestataires doivent revoir dans leurs contrats</a></li>
                <li><a href="#contrats" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Au-delà de ce contrat : sécuriser vos relations contractuelles</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Un contrat de création de site internet personnalisé est-il une vente ou une prestation de services ? La question paraît académique, mais elle commande une chose très concrète : la date à partir de laquelle court le délai de rétractation de <strong>quatorze jours</strong>. Par un arrêt du <strong>28 mai 2026</strong> (pourvoi n°&nbsp;25-14.507, arrêt n°&nbsp;356 F-B, publié au Bulletin), la première chambre civile de la Cour de cassation vient trancher ce point, au terme d'un litige qui aura mis près de cinq ans à remonter jusqu'à elle.</p>
                <p style={{marginBottom: '1rem'}}>La solution intéresse directement les agences web, les développeurs indépendants, les prestataires de référencement et d'UX, mais aussi tous leurs clients, particuliers comme professionnels, qui signent ce type de contrat le plus souvent hors établissement, à domicile, sur un salon ou lors d'un rendez-vous commercial.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}un contrat portant sur la conception et la réalisation d'un site internet personnalisé <strong>n'emporte pas transfert de propriété d'un bien</strong> au sens du II de l'article L.&nbsp;221-1 du Code de la consommation ; pour apprécier cette notion, la Cour se réfère à l'article 528 du Code civil, qui définit les biens meubles par leur nature ; ce n'est donc pas une vente, mais une <strong>prestation de services</strong>, et le délai de rétractation court dès la <strong>conclusion du contrat</strong>, non à compter de sa réception.
                  </p>
                </div>
              </section>

              <section id="faits">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Les faits : un site livré, une rétractation contestée
                </h2>
                <p style={{marginBottom: '1rem'}}>L'affaire débute le <strong>26 juillet 2021</strong>. Une professionnelle conclut, en dehors des locaux du prestataire, un contrat portant sur la création et la maintenance d'un site internet destiné à promouvoir son activité. Ce mode de conclusion, hors établissement, ouvre en principe un droit de rétractation de quatorze jours au bénéfice du client.</p>
                <p style={{marginBottom: '1rem'}}>Plusieurs semaines plus tard, la cliente refuse de signer le procès-verbal de réception du site et déclare exercer son droit de rétractation. Le prestataire s'y oppose : pour lui, le délai de quatorze jours avait commencé à courir dès la signature du contrat, le 26 juillet, et était donc largement expiré. La cliente saisit alors la justice pour faire reconnaître sa rétractation et obtenir l'annulation du contrat.</p>
              </section>

              <section id="appel">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. La cour d'appel : un contrat "mixte" assimilé à une vente
                </h2>
                <p style={{marginBottom: '1rem'}}>La cour d'appel donne raison à la cliente. Son raisonnement : le contrat ne se limite pas à une prestation de services, puisque le prestataire a aussi livré quelque chose de concret, à savoir le site internet lui-même, mis à la disposition de la cliente pour qu'elle l'exploite. Ce double objet, services et mise à disposition d'un bien, conduit les juges du fond à assimiler le contrat à une <strong>vente</strong> au sens du Code de la consommation.</p>
                <p style={{marginBottom: '1rem'}}>Or, pour un contrat de vente, le délai de rétractation ne court pas à compter de la signature, mais à compter de la <strong>réception du bien</strong>. En reclassant ainsi le contrat, la cour d'appel déplace le point de départ du délai vers la date de réception du site, ce qui rend la rétractation de la cliente parfaitement recevable. Les juges retiennent en outre que l'information donnée par le prestataire sur le point de départ du délai était erronée, ce qui aurait eu pour effet de <strong>prolonger le délai de rétractation de douze mois</strong> en application de l'article L.&nbsp;221-20 du Code de la consommation.</p>
                <p style={{marginBottom: '1rem'}}>Le prestataire forme un pourvoi en cassation. Son argument est simple : créer un site internet, c'est rendre un service, pas transférer la propriété d'un objet.</p>
              </section>

              <section id="cassation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La cassation : pas de transfert de propriété, pas de vente
                </h2>
                <p style={{marginBottom: '1rem'}}>La Cour de cassation censure l'arrêt d'appel. Son raisonnement part du <strong>Code de la consommation</strong>, qui n'autorise à assimiler un contrat à une vente que s'il porte, au moins pour partie, sur le <strong>transfert de propriété d'un bien</strong>. Pour apprécier si le contrat porte sur le transfert de propriété d'un bien, la Cour se réfère à l'article 528 du <strong>Code civil</strong>, qui définit les biens meubles par leur nature comme les biens pouvant se transporter d'un lieu à un autre.</p>
                <p style={{marginBottom: '1rem'}}>Or un site internet, aussi personnalisé et exploitable soit-il par le client, ne constitue pas, en substance, un bien meuble au sens de ces textes : son existence numérique ne satisfait pas aux critères retenus pour qualifier de vente le transfert de propriété d'un bien. La Cour ne se fonde ni sur la valeur économique du site, ni sur son utilité pour la cliente : elle vérifie uniquement si le contrat emporte, juridiquement, le transfert de propriété d'un bien au sens exigé pour la qualification de vente. En l'absence d'un tel transfert, l'opération relève d'une <strong>prestation intellectuelle et technique</strong>, quand bien même son résultat, le site, peut être exploité par le client conformément aux droits qui lui sont contractuellement consentis, qu'il s'agisse d'une simple licence d'usage, d'une cession de droits d'auteur, du nom de domaine ou des fichiers sources : ce que l'arrêt écarte, c'est uniquement la qualification de vente au sens du Code de la consommation, non l'existence de tout transfert de droits entre les parties.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>La portée de la décision.</strong>{' '}La création d'un site internet personnalisé ne devient pas une vente du seul fait que le client peut ensuite exploiter ce site. C'est l'existence, ou l'absence, d'un transfert de propriété d'un bien meuble au sens du Code de la consommation qui commande la qualification, pas l'utilité concrète du résultat pour le client. L'arrêt ne statue pas sur la qualification générale du site internet comme bien en droit civil ; il apprécie uniquement si le contrat litigieux pouvait être qualifié de vente au sens de ce code.
                  </p>
                </div>
              </section>

              <section id="divergence">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Une lecture différente pour les biens incorporels
                </h2>
                <p style={{marginBottom: '1rem'}}>Cette solution de la première chambre civile mérite d'être mise en perspective avec une autre décision, rendue par une formation différente de la Cour de cassation, dans un contexte très différent. Dans un arrêt du <strong>6 mars 2024</strong> (Cass. com., n°&nbsp;22-23.657), rendu dans un litige d'affacturage opposant un factor à un fournisseur de logiciels, la <strong>chambre commerciale</strong> a jugé, en s'appuyant sur l'article&nbsp;L.&nbsp;122-6, 3° du Code de la propriété intellectuelle et sur la jurisprudence de la Cour de justice de l'Union européenne, que la mise à disposition par téléchargement d'une copie de logiciel, rendue utilisable de façon permanente moyennant le paiement d'un prix, impliquait le transfert du droit de propriété de cette copie, ce qui permettait de faire jouer une clause de réserve de propriété.</p>
                <p style={{marginBottom: '1rem'}}>Les deux décisions ne sont pas à proprement parler en contradiction : elles ne portent ni sur le même type de bien, ni sur le même corps de règles. L'arrêt de 2024 est cantonné à un cas précis, la copie de logiciel téléchargée et exploitée de façon permanente, apprécié au regard du Code de la propriété intellectuelle dans un litige de réserve de propriété ; il ne pose aucune règle générale selon laquelle tout bien incorporel serait susceptible de vente. La comparaison révèle plutôt des <strong>approches différentes selon les contextes normatifs</strong> : le Code de la propriété intellectuelle, appliqué dans le cadre d'un litige de réserve de propriété sur des licences logicielles, admet le transfert de propriété d'une copie de logiciel dans les conditions qu'il précise, tandis que la première chambre civile, statuant au regard du Code de la consommation, retient une lecture propre à ce corps de règles pour apprécier la qualification du contrat de site internet.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce que cela signifie en pratique.</strong>{' '}Il ne faut pas déduire de l'arrêt du 28 mai 2026 une règle générale selon laquelle aucun bien incorporel ne pourrait jamais faire l'objet d'une vente. La qualification reste affaire de cas d'espèce : un site internet personnalisé relève de la prestation de services, mais d'autres montages contractuels portant sur des biens immatériels durablement transférés pourraient recevoir une analyse différente.
                  </p>
                </div>
              </section>

              <section id="consequence">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. La conséquence pratique sur le point de départ du délai
                </h2>
                <p style={{marginBottom: '1rem'}}>Le Code de la consommation distingue nettement les deux régimes. Pour une <strong>prestation de services</strong>, le délai de rétractation de quatorze jours court à compter du jour de la <strong>conclusion du contrat</strong> (article L.&nbsp;221-18). Pour une <strong>vente de biens</strong>, il court à compter du jour de la <strong>réception du bien</strong> par le consommateur.</p>
                <p style={{marginBottom: '1rem'}}>En qualifiant le contrat de création de site internet personnalisé de prestation de services, la Cour de cassation fixe donc le point de départ du délai au jour de la conclusion du contrat, et non au jour de la mise en ligne, de l'opération de réception ou de la signature d'un procès-verbal de réception. Dans l'affaire jugée, la rétractation intervenue plusieurs semaines après la signature était donc tardive : la Cour a cassé l'arrêt d'appel et renvoyé l'affaire.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'erreur à ne pas commettre.</strong>{' '}Un client qui pense pouvoir attendre la réception ou la mise en ligne du site pour se rétracter risque, à la lumière de cet arrêt, d'agir hors délai. Inversement, un prestataire dont les conditions générales renvoyaient la réception du site comme point de départ prenait un risque : une clause ou une mention absente, ou suffisamment erronée pour priver le consommateur d'une information effective, expose selon les cas à la prorogation de douze mois prévue par l'article L.&nbsp;221-20 du Code de la consommation, voire à la nullité du contrat sur le fondement des articles L.&nbsp;221-9 et L.&nbsp;242-1 du même code.
                  </p>
                </div>
              </section>

              <section id="professionnels">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Un professionnel peut-il aussi se rétracter ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Le contentieux des sites internet oppose très souvent une agence web à un client lui-même professionnel : artisan, commerçant, profession libérale, indépendant. Le droit de rétractation n'est pourtant pas réservé aux seuls consommateurs. L'article L.&nbsp;221-3 du Code de la consommation l'étend aux contrats conclus hors établissement entre deux professionnels, à deux conditions cumulatives : l'objet du contrat doit être <strong>étranger à l'activité principale</strong> du professionnel sollicité, et celui-ci doit employer <strong>cinq salariés au plus</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Un artisan qui fait créer le site vitrine de son activité, sans que la gestion de sites internet relève de son cœur de métier, peut ainsi, selon les circonstances, bénéficier de cette protection s'il remplit la condition d'effectif. Ce n'est donc pas parce que le site sert l'activité professionnelle du client qu'il entre nécessairement dans le champ de son activité principale.</p>
              </section>

              <section id="clauses">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Ce que les prestataires doivent revoir dans leurs contrats
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les agences web, développeurs et consultants qui vendent des offres de création de site, souvent couplées à du référencement, de la maintenance ou de l'hébergement, cet arrêt appelle une relecture des documents contractuels sur plusieurs points :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le point de départ du délai de rétractation</strong> doit être indiqué sans ambiguïté : la conclusion du contrat, pas une prétendue réception du site.</li>
                  <li><strong>Le formulaire type de rétractation</strong> doit être remis avec le contrat lorsque le droit existe, conformément à l'article L.&nbsp;221-9 du Code de la consommation.</li>
                  <li><strong>La demande expresse d'exécution anticipée</strong>, si le prestataire souhaite commencer à travailler avant la fin du délai de quatorze jours, doit être recueillie sur papier ou support durable, avec reconnaissance par le client de la perte de son droit de rétractation en cas d'exécution complète.</li>
                  <li><strong>Aucune clause de renonciation générale</strong> ne peut valablement priver le client de son droit : une telle clause est nulle, les dispositions du Code de la consommation en la matière étant d'ordre public.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Point à part, sans lien direct avec la question ici tranchée : à compter du <strong>19 juin 2026</strong>, les sites de vente en ligne devront intégrer un bouton de rétractation directement accessible sur leur interface, en application de l'ordonnance n°&nbsp;2026-2. Nous y consacrons une analyse dédiée.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Vos contrats de prestation sont-ils à jour ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet accompagne les indépendants et les petites structures dans la relecture et la mise à jour de leurs conditions générales et de leurs mentions de rétractation.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Le bouton de rétractation en ligne</a>
                  </div>
                </div>
              </section>

              <section id="contrats">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Au-delà de ce contrat : sécuriser vos relations contractuelles
                </h2>
                <p style={{marginBottom: '1rem'}}>L'affaire jugée le 28 mai 2026 porte sur un contrat de création de site internet, mais la logique qu'elle illustre déborde largement ce seul cadre. Elle rappelle une règle de fond valable pour <strong>tout contrat</strong>, quel que soit son objet : sa qualification juridique n'est jamais une simple étiquette commerciale, elle commande des conséquences concrètes, ici le point de départ d'un délai, ailleurs la garantie applicable, le régime de responsabilité ou les conditions de résiliation.</p>
                <p style={{marginBottom: '1rem'}}>Plusieurs types de clauses méritent une attention particulière dans n'importe quel contrat de prestation, numérique ou non :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Les clauses de qualification</strong>, qui décrivent l'objet du contrat : plus elles sont approximatives, plus elles ouvrent la porte à une requalification judiciaire, dans un sens ou dans l'autre.</li>
                  <li><strong>Les clauses de délai et de point de départ</strong>, qu'il s'agisse d'un délai de rétractation, de garantie, de préavis ou de prescription : une date de départ mal fixée peut priver une clause de tout effet.</li>
                  <li><strong>Les clauses limitatives ou exonératoires de responsabilité</strong>, qui doivent rester compatibles avec l'obligation essentielle du contrat, sous peine d'être réputées non écrites.</li>
                  <li><strong>Les clauses de renonciation à un droit d'ordre public</strong>, comme on l'a vu pour la rétractation : une clause qui prive le cocontractant d'un droit qu'il tient de la loi encourt la nullité, quelle que soit sa formulation.</li>
                  <li><strong>Les clauses d'interdépendance contractuelle</strong>, lorsque plusieurs conventions liées entre elles (prestation principale, financement, licence, maintenance) doivent être articulées pour éviter qu'une contestation sur l'une ne fragilise l'ensemble.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>C'est précisément sur ce terrain que le cabinet intervient, au-delà du seul secteur du numérique : mise à disposition de modèles de conditions générales et de contrats de prestation commentés, repères pratiques sur les points de vigilance contractuels, accompagnement à la création d'entreprise, conformité RGPD et DPO externalisé, ou encore orientation vers un avocat ou notaire partenaire lorsque la rédaction ou la révision d'un acte spécifique s'impose.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Un cabinet, plusieurs métiers, un même souci de rigueur contractuelle</p>
                  <p style={{color: '#5c5238', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Que votre besoin porte sur un contrat de prestation, une création d'entreprise, une mise en conformité RGPD ou un accompagnement associatif, le cabinet propose une gamme de services complémentaires, tous fondés sur la même exigence documentaire.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/services" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Tous nos services</a>
                    <a href="/catalogue" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', border: '1px solid #0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Catalogue de modèles</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>L'arrêt du 28 mai 2026 referme un débat récurrent dans le contentieux des sites internet : la conception d'un site personnalisé, même réceptionné et exploité par le client, ne se transforme pas en vente du seul fait de son utilité concrète. C'est une <strong>prestation de services</strong>, et le délai de rétractation court dès la <strong>conclusion du contrat</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Pour les prestataires du numérique, la leçon est claire : la sécurité juridique se joue dans la précision des mentions contractuelles, pas dans une qualification approximative destinée à repousser artificiellement le point de départ du délai. Pour les clients, particuliers comme professionnels sous condition d'effectif, cet arrêt offre une grille de lecture plus nette pour vérifier si un contrat a été correctement présenté et si le délai de rétractation a été respecté.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Cour de cassation, 1ère chambre civile, arrêt n°&nbsp;356 F-B du 28 mai 2026, pourvoi n°&nbsp;25-14.507, publié au Bulletin</li>
                  <li>Code civil, article 528 (définition des biens meubles)</li>
                  <li>Code de la consommation, articles L.&nbsp;221-3 (extension aux professionnels), L.&nbsp;221-5 et L.&nbsp;221-9 (information précontractuelle et bordereau), L.&nbsp;221-18 (point de départ du délai), L.&nbsp;221-20 (prorogation en cas d'absence d'information), L.&nbsp;242-1 (sanctions : nullité)</li>
                  <li>Code de la propriété intellectuelle, article L.&nbsp;122-6, 3°</li>
                  <li>Cour de cassation, 1re chambre civile, 12 septembre 2018, n°&nbsp;17-17.319 (conditions de L.&nbsp;221-3 : appréciation souveraine des juges du fond)</li>
                  <li>Cour de cassation, 1re chambre civile, 27 novembre 2019, n°&nbsp;18-22.525 (double condition cumulative : activité principale et effectif)</li>
                  <li>Cour de cassation, 1re chambre civile, 31 août 2022, n°&nbsp;21-11.455, publié au Bulletin (critère exclusif de l'objet du contrat pour l'appréciation de l'activité principale)</li>
                  <li>Cour de cassation, chambre commerciale, 6 mars 2024, n°&nbsp;22-23.657 (transfert de propriété d'une copie de logiciel mise à disposition de façon permanente)</li>
                  <li>Ordonnance n°&nbsp;2026-2 et décret n°&nbsp;2026-3 du 5 janvier 2026 (bouton de rétractation en ligne, applicable à compter du 19 juin 2026)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'un contrat déterminé, il convient de tenir compte de l'ensemble de ses stipulations et des circonstances de sa conclusion.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un contrat de création de site internet personnalisé est-il une vente ou une prestation de services ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Selon la Cour de cassation (Civ. 1re, 28 mai 2026, n°&nbsp;25-14.507), c'est une prestation de services. Le contrat n'emporte pas transfert de propriété d'un bien meuble au sens de l'article 528 du Code civil, ce qui exclut la qualification de vente, même lorsque le contrat porte aussi sur la mise à disposition du site.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À partir de quand court le délai de rétractation de 14 jours ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour ce type de contrat, le délai court à compter de la conclusion du contrat, en pratique le plus souvent la date de signature pour ce type de contrats conclus hors établissement, et non à compter de la réception ou de la mise en ligne du site.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un professionnel peut-il aussi se rétracter d'un contrat de création de site internet ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, à condition que le contrat soit conclu hors établissement, que son objet n'entre pas dans le champ de l'activité principale du professionnel sollicité, et que celui-ci emploie cinq salariés au plus (article L.&nbsp;221-3 du Code de la consommation).</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que risque un prestataire dont les conditions générales indiquent un mauvais point de départ du délai ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si l'information sur le délai de rétractation est absente, ou suffisamment erronée pour priver le consommateur d'une information effective, le professionnel s'expose selon les cas à la prorogation de douze mois prévue par l'article L.&nbsp;221-20 du Code de la consommation, voire à la nullité du contrat sur le fondement des articles L.&nbsp;221-9 et L.&nbsp;242-1 du même code.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un bien incorporel peut-il faire l'objet d'une vente ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Cela dépend du montage contractuel. Dans un cas précis, celui d'une copie de logiciel téléchargée et rendue utilisable de façon permanente contre paiement, la chambre commerciale de la Cour de cassation (6 mars 2024, n°&nbsp;22-23.657) a jugé, sur le fondement de l'article L.&nbsp;122-6, 3° du Code de la propriété intellectuelle, que cette mise à disposition impliquait un transfert de propriété. La première chambre civile, dans l'arrêt du 28 mai 2026, retient une lecture différente pour un site internet personnalisé, faute de transfert de propriété d'un bien meuble au sens de l'article 528 du Code civil et du Code de la consommation.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la source juridique sur la condition des cinq salariés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La condition d'effectif est posée à l'article L. 221-3 du Code de la consommation, qui exige deux conditions cumulatives : l'objet du contrat doit être étranger à l'activité principale du professionnel sollicité, et celui-ci doit employer au plus cinq salariés. La Cour de cassation rappelle que le juge du fond doit apprécier exclusivement le premier critère sans y substituer d'autres éléments tels que les compétences du professionnel ou l'utilité du contrat pour son activité (Cass. 1re civ., 31 août 2022, n° 21-11.455, publié au Bulletin). Cette jurisprudence s'inscrit dans une ligne constante (Cass. 1re civ., 27 nov. 2019, n° 18-22.525 ; Cass. 1re civ., 12 sept. 2018, n° 17-17.319).</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Mettre ses contrats en conformité</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles de CGV, de CGU et de mentions de rétractation à jour, à télécharger dans la Docuthèque.</p>
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
                <a href="/blog?tag=R%C3%A9tractation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Rétractation</a>
                <a href="/blog?tag=Site%20internet" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Site internet</a>
                <a href="/blog?tag=Consommation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Consommation</a>
                <a href="/blog?tag=Cour%20de%20cassation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Cour de cassation</a>
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
              { cat: 'FORMALITÉS', titre: "Guichet unique INPI 2026 : formalités d'entreprise, mode d'emploi et pièges à éviter", href: '/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter', date: '30 avril 2026' },
              { cat: 'ENTREPRISES', titre: "Arnaques aux entreprises nouvellement créées : les reconnaître et s'en protéger en 2026", href: '/blog/arnaques-aux-entreprises-nouvellement-creees-2026-les-reconnaitre-et-s-en-proteger', date: '10 juin 2026' },
              { cat: 'FISCALITÉ', titre: 'Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises', href: '/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises', date: '20 janvier 2026' },
              { cat: 'TPE & INDÉPENDANTS', titre: 'Loi de finances 2026 : ce qui change pour les TPE et les indépendants', href: '/blog/loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants', date: '19 février 2026' },
            ].map((a) => (
              <a key={a.href} href={a.href} style={{display: 'flex', flexDirection: 'column', gap: '8px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.1rem 1.25rem', textDecoration: 'none'}}>
                <span style={{alignSelf: 'flex-start', background: '#eff6ff', color: '#1a4fba', fontSize: '10px', fontWeight: '700', padding: '2px 9px', borderRadius: '20px'}}>{a.cat}</span>
                <span style={{color: '#0f2d6e', fontSize: '13.5px', fontWeight: '700', lineHeight: '1.4'}}>{a.titre}</span>
                <span style={{color: '#9ca3af', fontSize: '11px'}}>{a.date}</span>
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
