import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Micro-entreprise, EURL ou SASU : quel statut choisir en 2026 ? · Blog Cabinet Cholez-Pagotto`,
  description: `Régime social du dirigeant, fiscalité, dividendes, chômage, simplicité : le comparatif complet et vérifié des trois statuts pour entreprendre seul, pour faire le bon choix en 2026.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/micro-entreprise-eurl-sasu-quel-statut-choisir-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/micro-eurl-sasu-quel-statut-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/micro-eurl-sasu-quel-statut-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Micro-entreprise, EURL ou SASU : quel statut choisir en 2026 ?",
      "description": "Régime social du dirigeant, fiscalité, dividendes, chômage, simplicité : le comparatif complet et vérifié des trois statuts pour entreprendre seul, pour faire le bon choix en 2026.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/micro-eurl-sasu-quel-statut-2026.webp",
      "datePublished": "2026-01-15",
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
      "url": "https://cholez-pagotto.fr/blog/micro-entreprise-eurl-sasu-quel-statut-choisir-2026",
      "keywords": ["Micro-entreprise", "EURL", "SASU", "Statut juridique", "TNS", "Assimilé salarié", "Création d'entreprise", "Dividendes"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la différence entre micro-entreprise, EURL et SASU ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La micro-entreprise est une entreprise individuelle au régime simplifié, sans personne morale distincte. L'EURL est une SARL à associé unique, dont le dirigeant gérant est un travailleur non salarié. La SASU est une SAS à associé unique, dont le président est assimilé salarié. Les trois protègent le patrimoine personnel, mais diffèrent fortement sur le régime social, la fiscalité et la souplesse."
          }
        },
        {
          "@type": "Question",
          "name": "Quel statut paie le moins de cotisations sociales ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En micro-entreprise, les cotisations sont un forfait sur le chiffre d'affaires (de 12,3 % à 25,6 %). En EURL, le gérant travailleur non salarié cotise de l'ordre de 45 % de sa rémunération nette. En SASU, le président assimilé salarié cotise davantage, de l'ordre de 80 % du net, en contrepartie d'une meilleure protection sociale. Aucun de ces statuts n'ouvre droit au chômage au titre du mandat."
          }
        },
        {
          "@type": "Question",
          "name": "EURL ou SASU pour les dividendes ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La SASU est plus favorable : les dividendes ne supportent pas de cotisations sociales, seulement le prélèvement forfaitaire unique de 30 %. En EURL soumise à l'impôt sur les sociétés, la fraction des dividendes qui dépasse 10 % du capital social (augmenté des primes et du compte courant moyen) est soumise aux cotisations du travailleur non salarié, comme une rémunération."
          }
        },
        {
          "@type": "Question",
          "name": "Quel statut pour garder mon chômage (ARE) ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La SASU est souvent privilégiée : un président qui ne se verse aucune rémunération ne paie aucune cotisation et conserve 100 % de son allocation chômage. En EURL, le gérant est un travailleur non salarié affilié d'office, ce qui conduit à une allocation réduite dès le premier jour, même sans rémunération. C'est un critère décisif pour qui se lance après un emploi salarié."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on déduire ses charges réelles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non en micro-entreprise : un abattement forfaitaire remplace la déduction des charges, ce qui est défavorable si vos frais sont élevés. Oui en EURL et en SASU : vous déduisez vos charges réelles du résultat. C'est souvent l'élément qui justifie le passage en société lorsque les dépenses professionnelles dépassent l'abattement forfaitaire du régime micro."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le régime fiscal par défaut de chaque statut ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La micro-entreprise relève du régime micro-fiscal (abattement forfaitaire, imposition au barème). L'EURL est par défaut à l'impôt sur le revenu, avec une option pour l'impôt sur les sociétés. La SASU est par défaut à l'impôt sur les sociétés, avec une option temporaire pour l'impôt sur le revenu. L'impôt sur les sociétés est de 15 % jusqu'à 42 500 euros de bénéfice, puis 25 %."
          }
        },
        {
          "@type": "Question",
          "name": "À partir de quel niveau passer de la micro à la société ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il n'y a pas de seuil unique. La société devient intéressante lorsque vos charges réelles dépassent l'abattement forfaitaire, lorsque vous recherchez une meilleure protection sociale, ou pour préparer une levée de fonds. À titre indicatif, l'EURL est souvent plus avantageuse en dessous d'un bénéfice de l'ordre de 120 000 euros, la SASU au-dessus, mais cela dépend de votre situation."
          }
        },
        {
          "@type": "Question",
          "name": "Peut-on changer de statut plus tard ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. On peut passer de la micro-entreprise à une société, transformer une EURL en SASU, ou faire évoluer une structure pour accueillir des associés. Ces opérations supposent des formalités, réalisées sur le guichet unique, et parfois une modification des statuts. Mieux vaut toutefois choisir un statut cohérent dès le départ pour éviter des changements coûteux."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Micro, EURL ou SASU" }
      ]
    }
  ]
}

export default function ArticleStatutMicroEurlSasu2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Micro, EURL ou SASU</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CRÉATION D'ENTREPRISE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CHOIX DU STATUT</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Micro-entreprise, EURL ou SASU : quel statut choisir en 2026 ?</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 15 janvier 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 15 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/micro-eurl-sasu-quel-statut-2026.webp"
                alt="Micro-entreprise, EURL ou SASU : quel statut choisir en 2026 ?"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#trois" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Trois statuts pour entreprendre seul</a></li>
                <li><a href="#social" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le régime social du dirigeant</a></li>
                <li><a href="#fiscalite" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La fiscalité</a></li>
                <li><a href="#dividendes" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Les dividendes</a></li>
                <li><a href="#charges" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Charges et simplicité</a></li>
                <li><a href="#chomage" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Le cas du chômage</a></li>
                <li><a href="#choisir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Comment choisir</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>C'est la première grande décision du créateur, et l'une des plus structurantes : quel statut juridique choisir ? Pour entreprendre seul, trois voies dominent : la <strong>micro-entreprise</strong>, l'<strong>EURL</strong> et la <strong>SASU</strong>. Aucune n'est meilleure dans l'absolu : tout dépend de votre activité, de vos charges, de votre protection sociale et de vos projets.</p>
                <p style={{marginBottom: '1rem'}}>Cet article compare ces trois statuts, de façon complète et vérifiée, sur les critères qui comptent vraiment : le régime social du dirigeant, la fiscalité, les dividendes, les charges, la simplicité et le chômage. L'objectif : vous donner une grille de lecture claire pour faire un choix éclairé.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> la <strong>micro</strong> pour la simplicité et des frais faibles, l'<strong>EURL</strong> pour un revenu net immédiat maximal grâce à des cotisations plus basses, la <strong>SASU</strong> pour une meilleure protection sociale, des dividendes sans cotisations et la préparation d'une levée de fonds.
                  </p>
                </div>
              </section>

              <section id="trois">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Trois statuts pour entreprendre seul
                </h2>
                <p style={{marginBottom: '1rem'}}>Commençons par les définitions, car le vocabulaire prête à confusion.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>La micro-entreprise</strong> est une <strong>entreprise individuelle</strong> au régime simplifié. Il n'y a pas de personne morale distincte, mais depuis la réforme de 2022, votre patrimoine personnel est en principe protégé.</li>
                  <li><strong>L'EURL</strong> est une <strong>SARL à associé unique</strong>. C'est une société, donc une personne morale, et votre responsabilité est limitée à vos apports. Le dirigeant est le <strong>gérant</strong>.</li>
                  <li><strong>La SASU</strong> est une <strong>SAS à associé unique</strong>. C'est également une société à responsabilité limitée aux apports, avec une grande liberté statutaire. Le dirigeant est le <strong>président</strong>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Les trois protègent donc votre patrimoine personnel. La différence se joue ailleurs, à commencer par le statut social du dirigeant.</p>
              </section>

              <section id="social">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le régime social du dirigeant
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le critère le plus déterminant. En <strong>micro-entreprise</strong>, vous relevez du régime micro-social : vos cotisations sont un pourcentage du chiffre d'affaires. En <strong>EURL</strong>, le gérant associé unique est <strong>travailleur non salarié</strong> (TNS), avec des cotisations de l'ordre de <strong>45&nbsp;%</strong> de sa rémunération nette, mais une protection sociale plus limitée, notamment sur la retraite complémentaire et la prévoyance. En <strong>SASU</strong>, le président est <strong>assimilé salarié</strong> : ses cotisations sont plus élevées, de l'ordre de <strong>80&nbsp;%</strong> du net, mais sa couverture est proche de celle d'un cadre, hors assurance chômage.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Un point souvent oublié.</strong> En EURL, le gérant TNS doit régler des <strong>cotisations minimales</strong> (de l'ordre de 1&nbsp;200 à 1&nbsp;500&nbsp;€ par an) même sans rémunération. En SASU, à l'inverse, un président qui ne se verse rien <strong>ne paie aucune cotisation</strong>, mais n'a alors aucune couverture au titre de son mandat. Aucun des deux ne cotise à l'assurance chômage.
                  </p>
                </div>
              </section>

              <section id="fiscalite">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La fiscalité
                </h2>
                <p style={{marginBottom: '1rem'}}>La <strong>micro-entreprise</strong> applique un abattement forfaitaire sur le chiffre d'affaires, puis le résultat est imposé au barème de l'impôt sur le revenu (ou via le versement libératoire). L'<strong>EURL</strong> est par défaut à l'<strong>impôt sur le revenu</strong>, avec une option pour l'impôt sur les sociétés. La <strong>SASU</strong> est par défaut à l'<strong>impôt sur les sociétés</strong>, avec une option temporaire pour l'impôt sur le revenu.</p>
                <p style={{marginBottom: '1rem'}}>L'impôt sur les sociétés, qui concerne l'EURL sur option et la SASU par défaut, s'élève à <strong>15&nbsp;%</strong> jusqu'à <strong>42&nbsp;500&nbsp;€</strong> de bénéfice (sous conditions), puis <strong>25&nbsp;%</strong> au-delà. C'est ce passage à l'impôt sur les sociétés qui ouvre le terrain de l'arbitrage entre rémunération et dividendes.</p>
              </section>

              <section id="dividendes">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Les dividendes
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est l'une des différences les plus marquées entre EURL et SASU, lorsqu'elles sont à l'impôt sur les sociétés.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Statut</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Traitement des dividendes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["EURL à l'IS", "La fraction des dividendes supérieure à 10 % du capital social (augmenté des primes et du compte courant moyen) est soumise aux cotisations du travailleur non salarié"],
                        ["SASU", "Aucune cotisation sociale sur les dividendes, quel que soit le montant : seul s'applique le prélèvement forfaitaire unique de 30 %"],
                      ].map(([s, t], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{s}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{t}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Concrètement, pour un dirigeant qui prévoit de distribuer une part significative de ses bénéfices en dividendes, la <strong>SASU est nettement plus avantageuse</strong>. Le prélèvement forfaitaire unique, ou flat tax, de <strong>30&nbsp;%</strong> se décompose en 12,8&nbsp;% d'impôt sur le revenu et 17,2&nbsp;% de prélèvements sociaux (le barème progressif avec abattement de 40&nbsp;% reste possible sur option).</p>
              </section>

              <section id="charges">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Charges et simplicité
                </h2>
                <p style={{marginBottom: '1rem'}}>La <strong>micro-entreprise</strong> est imbattable sur la simplicité : pas de bilan, une comptabilité réduite à un suivi des recettes, des déclarations rapides. Sa limite est connue : vous ne pouvez <strong>pas déduire vos charges réelles</strong>, l'abattement forfaitaire en tenant lieu. Si vos frais sont élevés (matériel, sous-traitance, déplacements), vous payez des cotisations et un impôt sur un chiffre d'affaires qui ne reflète pas votre marge réelle.</p>
                <p style={{marginBottom: '1rem'}}>L'<strong>EURL</strong> et la <strong>SASU</strong> permettent au contraire de <strong>déduire les charges réelles</strong>, mais imposent une comptabilité complète, des comptes annuels et donc des coûts de gestion plus élevés. C'est précisément l'arbitrage : davantage de formalisme et de coûts, en échange d'une fiscalité ajustée à la réalité de votre activité et d'une protection patrimoniale par la personne morale.</p>
              </section>

              <section id="chomage">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Le cas du chômage
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour qui se lance après un emploi salarié, la gestion de l'allocation chômage (ARE) est souvent décisive. En <strong>SASU</strong>, tant que le président <strong>ne se verse aucune rémunération</strong>, il continue de percevoir <strong>100&nbsp;%</strong> de son ARE, puisqu'il ne tire aucun revenu d'activité. En <strong>EURL</strong>, le gérant étant travailleur non salarié affilié d'office, son allocation est <strong>réduite</strong> dès le premier jour, même sans rémunération.</p>
                <p style={{marginBottom: '1rem'}}>Ce point fait de la SASU un choix fréquent pour tester une activité en conservant ses droits, quitte à arbitrer ensuite vers un autre statut une fois l'activité lancée.</p>
              </section>

              <section id="choisir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Comment choisir
                </h2>
                <p style={{marginBottom: '1rem'}}>Aucun statut n'est universellement meilleur. Voici une orientation par profil.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>La micro-entreprise</strong> si vous testez une activité, avez des frais faibles et un chiffre d'affaires modéré, et privilégiez la simplicité.</li>
                  <li><strong>L'EURL</strong> si vos charges réelles sont élevées et que vous cherchez à maximiser votre revenu net immédiat, grâce à des cotisations plus basses.</li>
                  <li><strong>La SASU</strong> si vous visez une protection sociale proche du salariat, une sortie de dividendes sans cotisations, le maintien de vos droits au chômage, ou une future levée de fonds.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>À titre d'ordre de grandeur, l'EURL est souvent plus avantageuse en dessous d'un bénéfice de l'ordre de <strong>120&nbsp;000&nbsp;€</strong>, et la SASU au-dessus, grâce à l'absence de cotisations sur les dividendes. Mais ce repère n'est pas une règle absolue : il dépend de vos charges, de votre situation familiale et de votre stratégie. Une simulation personnalisée reste indispensable avant de trancher.</p>
                <p style={{marginBottom: '1rem'}}>Votre choix est fait ? Voici les statuts à personnaliser, et un coup de main pour les formalités.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Statuts d'EURL</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Vous penchez pour l'EURL ? Notre modèle de statuts, à personnaliser, couvre objet, capital, gérance, décisions de l'associé unique et exercice social.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-statuts-eurl" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Statuts de SASU</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Vous penchez pour la SASU ? Notre modèle de statuts, à personnaliser, couvre objet, capital, présidence, décisions de l'associé unique et clauses de cession.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-statuts-sasu" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-societe" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création de société</a></span>
                  </div>
                </div>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>LE CABINET S'EN CHARGE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>De la simulation à l'immatriculation</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Hésitation sur le statut, rédaction des statuts, dépôt au guichet unique : le cabinet vous aide à arbitrer puis prend en charge les formalités, en lien avec votre expert-comptable pour les simulations chiffrées.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/creation-entreprise" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Créer ma société →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou <a href="/formalites-juridiques-externalisees" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>confier mes formalités</a></span>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Choisir entre micro, EURL et SASU revient à arbitrer entre simplicité, revenu net immédiat et protection sociale. La micro reste la porte d'entrée la plus accessible ; l'EURL optimise la rémunération courante ; la SASU sécurise et prépare l'avenir. Le bon choix est celui qui colle à votre activité réelle, pas au statut le plus à la mode.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de raisonner sur vos charges réelles, votre besoin de couverture sociale et vos projets de développement, et de faire chiffrer les scénarios avant l'immatriculation. Un statut bien choisi au départ évite des changements coûteux par la suite.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie sur des sources officielles, vérifiées à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Bpifrance Création : comparaison des structures juridiques (EURL, SASU), <a href="https://bpifrance-creation.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>bpifrance-creation.fr</a></li>
                  <li>Service Public Entreprendre : statuts juridiques et régime social des dirigeants, <a href="https://entreprendre.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>entreprendre.service-public.gouv.fr</a></li>
                  <li>Code de la sécurité sociale, articles L. 131-6 (assiette des cotisations) et L. 311-3 (affiliation des dirigeants)</li>
                  <li>URSSAF (cotisations) et impots.gouv.fr (impôt sur les sociétés et prélèvement forfaitaire unique)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les taux et seuils sont donnés à jour à la date de publication. Une analyse chiffrée personnalisée, par exemple auprès d'un expert-comptable, est recommandée avant tout choix.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la différence entre micro-entreprise, EURL et SASU ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La micro-entreprise est une entreprise individuelle au régime simplifié, sans personne morale distincte. L'EURL est une SARL à associé unique, dont le gérant est travailleur non salarié. La SASU est une SAS à associé unique, dont le président est assimilé salarié. Les trois protègent le patrimoine personnel, mais diffèrent fortement sur le régime social, la fiscalité et la souplesse.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel statut paie le moins de cotisations sociales ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En micro-entreprise, les cotisations sont un forfait sur le chiffre d'affaires (de 12,3&nbsp;% à 25,6&nbsp;%). En EURL, le gérant travailleur non salarié cotise de l'ordre de 45&nbsp;% de sa rémunération nette. En SASU, le président assimilé salarié cotise davantage, de l'ordre de 80&nbsp;% du net, en contrepartie d'une meilleure protection sociale. Aucun de ces statuts n'ouvre droit au chômage au titre du mandat.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>EURL ou SASU pour les dividendes ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La SASU est plus favorable : les dividendes ne supportent pas de cotisations sociales, seulement le prélèvement forfaitaire unique de 30&nbsp;%. En EURL soumise à l'impôt sur les sociétés, la fraction des dividendes qui dépasse 10&nbsp;% du capital social (augmenté des primes et du compte courant moyen) est soumise aux cotisations du travailleur non salarié, comme une rémunération.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel statut pour garder mon chômage (ARE) ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La SASU est souvent privilégiée : un président qui ne se verse aucune rémunération ne paie aucune cotisation et conserve 100&nbsp;% de son allocation chômage. En EURL, le gérant est un travailleur non salarié affilié d'office, ce qui conduit à une allocation réduite dès le premier jour, même sans rémunération. C'est un critère décisif pour qui se lance après un emploi salarié.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on déduire ses charges réelles ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non en micro-entreprise : un abattement forfaitaire remplace la déduction des charges, ce qui est défavorable si vos frais sont élevés. Oui en EURL et en SASU : vous déduisez vos charges réelles du résultat. C'est souvent l'élément qui justifie le passage en société lorsque les dépenses professionnelles dépassent l'abattement forfaitaire du régime micro.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le régime fiscal par défaut de chaque statut ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La micro-entreprise relève du régime micro-fiscal (abattement forfaitaire, imposition au barème). L'EURL est par défaut à l'impôt sur le revenu, avec une option pour l'impôt sur les sociétés. La SASU est par défaut à l'impôt sur les sociétés, avec une option temporaire pour l'impôt sur le revenu. L'impôt sur les sociétés est de 15&nbsp;% jusqu'à 42&nbsp;500&nbsp;€ de bénéfice, puis 25&nbsp;%.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À partir de quel niveau passer de la micro à la société ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Il n'y a pas de seuil unique. La société devient intéressante lorsque vos charges réelles dépassent l'abattement forfaitaire, lorsque vous recherchez une meilleure protection sociale, ou pour préparer une levée de fonds. À titre indicatif, l'EURL est souvent plus avantageuse en dessous d'un bénéfice de l'ordre de 120&nbsp;000&nbsp;€, la SASU au-dessus, mais cela dépend de votre situation.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Peut-on changer de statut plus tard ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. On peut passer de la micro-entreprise à une société, transformer une EURL en SASU, ou faire évoluer une structure pour accueillir des associés. Ces opérations supposent des formalités, réalisées sur le guichet unique, et parfois une modification des statuts. Mieux vaut toutefois choisir un statut cohérent dès le départ pour éviter des changements coûteux.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Accompagnement des professionnels</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Choix du statut, création, formalités : le cabinet vous aide à structurer votre projet et à faire les bons choix dès le départ.</p>
              <a href="/accompagnement-professionnels" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Découvrir l'accompagnement →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/creer-sa-micro-entreprise-2026-guide-complet-plafonds-cotisations-demarches" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Créer sa micro-entreprise en 2026 : le guide complet →
              </a>
              <a href="/blog/guichet-unique-inpi-2026-formalites-d-entreprise-mode-d-emploi-et-pieges-a-eviter" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Guichet unique INPI 2026 : mode d'emploi →
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
                <span key="Micro-entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Micro-entreprise</span>
                <span key="EURL" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>EURL</span>
                <span key="SASU" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>SASU</span>
                <span key="Statut juridique" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Statut juridique</span>
                <span key="Création d'entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Création d'entreprise</span>
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
