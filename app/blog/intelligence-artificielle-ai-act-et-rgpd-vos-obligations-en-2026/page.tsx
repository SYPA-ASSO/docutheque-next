import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD · Blog Cabinet Cholez-Pagotto`,
  description: `Deux textes encadrent désormais l'IA : le règlement européen (AI Act) et le RGPD. Calendrier échelonné, report des règles sur le haut risque par le Digital Omnibus, doctrine de la CNIL : le point complet et vérifié pour les entreprises.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/intelligence-artificielle-ai-act-et-rgpd-vos-obligations-en-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/intelligence-artificielle-ai-act-rgpd-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/intelligence-artificielle-ai-act-rgpd-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD",
      "description": "Deux textes encadrent désormais l'IA : le règlement européen (AI Act) et le RGPD. Calendrier échelonné, report des règles sur le haut risque par le Digital Omnibus, doctrine de la CNIL : le point complet et vérifié pour les entreprises.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/intelligence-artificielle-ai-act-rgpd-2026.webp",
      "datePublished": "2026-06-20",
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
      "url": "https://cholez-pagotto.fr/blog/intelligence-artificielle-ai-act-et-rgpd-vos-obligations-en-2026",
      "keywords": ["Intelligence artificielle", "AI Act", "RGPD", "CNIL", "Digital Omnibus", "Règlement UE 2024/1689", "Conformité", "Haut risque"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que l'AI Act ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'AI Act est le règlement européen (UE) 2024/1689, entré en vigueur le 1er août 2024. C'est le premier cadre juridique général au monde sur l'intelligence artificielle. Il repose sur une approche par les risques : certaines pratiques sont interdites, les systèmes à haut risque sont strictement encadrés, les systèmes à risque limité sont soumis à des obligations de transparence, et la grande majorité des usages, à risque minimal, ne sont pas réglementés."
          }
        },
        {
          "@type": "Question",
          "name": "Mon entreprise est-elle concernée par l'AI Act ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si vous utilisez ou déployez de l'IA, vous êtes concerné, mais à un degré variable. La plupart des entreprises utilisent des outils à risque minimal ou limité, et sont surtout tenues à la transparence et à la littératie en IA. Les obligations lourdes visent les systèmes à haut risque, par exemple une IA qui prend, suggère ou influence une décision significative sur une personne, comme un tri de candidatures."
          }
        },
        {
          "@type": "Question",
          "name": "L'AI Act et le RGPD, est-ce la même chose ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, ce sont deux textes distincts. L'AI Act relève d'une logique de sécurité des produits et de protection des droits fondamentaux. Le RGPD protège les données personnelles. La CNIL le rappelle : lorsqu'un système d'IA traite des données personnelles, les deux s'appliquent en même temps et doivent être respectés conjointement."
          }
        },
        {
          "@type": "Question",
          "name": "Le calendrier de l'AI Act a-t-il changé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le Digital Omnibus sur l'IA, qui a fait l'objet d'un accord politique le 7 mai 2026 et a été approuvé par le Parlement européen le 16 juin 2026, reporte l'application des règles sur les systèmes à haut risque de l'annexe III du 2 août 2026 au 2 décembre 2027, et de l'annexe I du 2 août 2027 au 2 août 2028. Tant que ce texte n'est pas formellement adopté et publié, les échéances initiales restent juridiquement applicables."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la littératie en intelligence artificielle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depuis le 2 février 2025, l'AI Act impose une obligation de littératie en IA. Les organisations qui utilisent des systèmes d'IA doivent veiller à ce que les personnes qui s'en servent disposent d'un niveau suffisant de compétences pour en comprendre les usages, les limites et les risques. C'est une obligation qui concerne même les petites structures."
          }
        },
        {
          "@type": "Question",
          "name": "Dois-je informer mes clients quand j'utilise une IA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, dans plusieurs cas. L'AI Act prévoit des obligations de transparence : informer une personne lorsqu'elle interagit avec un système d'IA, comme un agent conversationnel, et signaler les contenus générés ou manipulés par une IA. L'essentiel de ces obligations de transparence s'applique à compter du 2 août 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle base légale pour entraîner une IA sur des données personnelles ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Selon la CNIL, l'intérêt légitime est la base légale la plus couramment mobilisable pour le développement d'un système d'IA, sous réserve d'un triple test (intérêt légitime, nécessité, mise en balance) et de garanties fortes. Le consentement est parfois adapté pour une collecte directe. Le moissonnage de données en ligne n'est pas interdit, mais doit être encadré, et une analyse d'impact peut être obligatoire."
          }
        },
        {
          "@type": "Question",
          "name": "Qui contrôle l'intelligence artificielle en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La CNIL est l'autorité de protection des données et a vocation à exercer un rôle central sur l'IA. Elle a indiqué qu'elle serait l'autorité de surveillance du marché pour une large part des systèmes à haut risque, notamment en matière de biométrie, d'emploi, de migration et d'usages répressifs. La désignation complète des autorités compétentes au titre de l'AI Act se précise en 2026."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "IA, AI Act et RGPD" }
      ]
    }
  ]
}

export default function ArticleIARGPDAiAct2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>IA, AI Act et RGPD</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONFORMITÉ</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>INTELLIGENCE ARTIFICIELLE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 20 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 15 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/intelligence-artificielle-ai-act-rgpd-2026.webp"
                alt="Intelligence artificielle : vos obligations à l'heure de l'AI Act et du RGPD"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>L'AI Act est le règlement européen (UE) 2024/1689, entré en vigueur le 1er août 2024, premier cadre juridique général au monde sur l'intelligence artificielle.</li>
                <li>Toute entreprise qui utilise ou déploie de l'IA est concernée par l'AI Act, à un degré variable selon le niveau de risque des outils utilisés.</li>
                <li>L'AI Act et le RGPD sont deux textes distincts : l'AI Act relève d'une logique de sécurité des produits et de protection des droits fondamentaux, tandis que le RGPD protège les données personnelles.</li>
                <li>Le Digital Omnibus sur l'IA, approuvé par le Parlement européen le 16 juin 2026, reporte l'application des règles sur les systèmes à haut risque.</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#deux-textes" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Deux textes, pas un</a></li>
                <li><a href="#risques" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. L'approche par les risques de l'AI Act</a></li>
                <li><a href="#calendrier" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le calendrier, et ce que le Digital Omnibus reporte</a></li>
                <li><a href="#faire" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Ce que vous devez faire, même petite structure</a></li>
                <li><a href="#cnil" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. IA et RGPD : la doctrine de la CNIL</a></li>
                <li><a href="#mutualiser" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Mutualiser avec sa conformité RGPD</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Trois cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>L'intelligence artificielle s'est installée dans le quotidien des entreprises, des indépendants et des associations : rédaction assistée, génération d'images, agents conversationnels, tri de documents. Cette diffusion rapide s'accompagne désormais d'un cadre juridique. Deux textes encadrent l'IA en France : le <strong>règlement européen sur l'intelligence artificielle</strong>, dit AI Act, et le <strong>RGPD</strong> dès que des données personnelles sont en jeu.</p>
                <p style={{marginBottom: '1rem'}}>Le sujet est d'autant plus d'actualité que le calendrier de l'AI Act vient d'être ajusté par un texte de simplification, le Digital Omnibus. Cet article fait le point, de façon complète et vérifiée, sur l'articulation de ces deux textes, sur l'approche par les risques, sur les échéances réelles, et surtout sur ce que doit faire une entreprise, même de petite taille.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> la plupart des entreprises utilisent une IA à <strong>risque minimal ou limité</strong> et sont surtout tenues à la <strong>transparence</strong> et à la <strong>littératie en IA</strong> ; les obligations lourdes visent le <strong>haut risque</strong>, dont l'échéance a été repoussée à fin 2027, et le <strong>RGPD s'applique en parallèle</strong> dès que des données personnelles sont traitées.
                  </p>
                </div>
              </section>

              <section id="deux-textes">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Deux textes, pas un
                </h2>
                <p style={{marginBottom: '1rem'}}>La première erreur consiste à confondre les deux cadres. L'<strong>AI Act</strong>, le règlement (UE) 2024/1689, relève d'une logique de sécurité des produits et de protection des droits fondamentaux : il classe les systèmes d'IA selon leur niveau de risque et impose des obligations proportionnées. Le <strong>RGPD</strong>, lui, protège les données personnelles, quel que soit l'outil utilisé.</p>
                <p style={{marginBottom: '1rem'}}>Les deux ne s'excluent pas, ils se cumulent. La CNIL l'a explicitement rappelé : lorsqu'un système d'IA repose sur des données personnelles, le RGPD et le règlement sur l'IA <strong>s'appliquent tous les deux</strong>. Une entreprise conforme à l'un n'est donc pas dispensée de l'autre, et c'est précisément à l'intersection des deux que se joue la conformité réelle.</p>
              </section>

              <section id="risques">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. L'approche par les risques de l'AI Act
                </h2>
                <p style={{marginBottom: '1rem'}}>L'AI Act ne traite pas tous les usages de la même manière. Il distingue quatre niveaux.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Niveau de risque</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Traitement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Risque inacceptable", "Pratiques interdites (notation sociale généralisée, manipulation subliminale, etc.)"],
                        ["Haut risque", "Encadrement strict (par exemple IA de recrutement, d'évaluation, de contrôle)"],
                        ["Risque limité", "Obligations de transparence (signaler une interaction avec une IA, un contenu généré)"],
                        ["Risque minimal", "Aucune obligation spécifique (la grande majorité des usages courants)"],
                      ].map(([r, t], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{r}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{t}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Pour un entrepreneur, la bonne question n'est pas de mémoriser toute l'architecture du texte, mais de se demander, à chaque nouveau projet : <strong>mon système d'IA prend-il, suggère-t-il ou influence-t-il une décision ayant un effet significatif sur une personne</strong>, par exemple en matière de recrutement, d'accès à un service, d'évaluation ou de contrôle ? Si la réponse est oui, la vigilance doit être maximale, car on bascule potentiellement dans le haut risque.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Nouvelle interdiction.</strong> Au-delà des pratiques déjà prohibées, le Digital Omnibus introduit une interdiction visant les systèmes d'IA qui génèrent des contenus intimes représentant une personne sans son consentement, ainsi que les contenus pédocriminels. Cette interdiction est prévue pour s'appliquer à compter du 2 décembre 2026.
                  </p>
                </div>
              </section>

              <section id="calendrier">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le calendrier, et ce que le Digital Omnibus reporte
                </h2>
                <p style={{marginBottom: '1rem'}}>L'AI Act est entré en vigueur le <strong>1er août 2024</strong>, mais il s'applique par étapes. Les <strong>pratiques interdites</strong> et l'obligation de <strong>littératie en IA</strong> s'appliquent depuis le <strong>2 février 2025</strong>. Les règles relatives aux <strong>modèles d'IA à usage général</strong> s'appliquent depuis le <strong>2 août 2025</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Les obligations les plus lourdes, celles qui visent les systèmes à <strong>haut risque</strong>, étaient initialement prévues pour le 2 août 2026. C'est ici qu'intervient le <strong>Digital Omnibus sur l'IA</strong>, un paquet d'amendements de simplification proposé par la Commission le 19 novembre 2025. Il a fait l'objet d'un <strong>accord politique le 7 mai 2026</strong>, puis a été <strong>approuvé par le Parlement européen le 16 juin 2026</strong>.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Systèmes à haut risque de l'<strong>annexe III</strong> (usages sensibles comme l'emploi ou la biométrie) : obligations reportées du 2 août 2026 au <strong>2 décembre 2027</strong>.</li>
                  <li>Systèmes à haut risque de l'<strong>annexe I</strong> (IA intégrée à des produits déjà réglementés) : reportées du 2 août 2027 au <strong>2 août 2028</strong>.</li>
                  <li><strong>Transparence</strong> (article 50) : l'essentiel, comme l'obligation d'informer qu'on interagit avec une IA, reste applicable au <strong>2 août 2026</strong> ; seul le marquage des contenus déjà sur le marché bénéficie d'un délai jusqu'au 2 décembre 2026.</li>
                </ul>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Attention, le texte n'est pas encore définitif.</strong> À ce stade, le Digital Omnibus a été approuvé par le Parlement mais n'a pas encore été formellement adopté par le Conseil ni publié au Journal officiel de l'Union européenne. Tant que cette dernière étape n'est pas franchie, ce sont les <strong>échéances initiales de l'AI Act qui restent juridiquement applicables</strong>. Mieux vaut donc préparer la conformité sans tabler sur le report.
                  </p>
                </div>
              </section>

              <section id="faire">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Ce que vous devez faire, même petite structure
                </h2>
                <p style={{marginBottom: '1rem'}}>Beaucoup de dirigeants pensent, à tort, que l'AI Act ne concerne que les grands groupes technologiques. Trois obligations touchent en réalité presque tout le monde.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>La littératie en IA.</strong> Depuis février 2025, si vous utilisez des outils d'IA, vous devez veiller à ce que les personnes qui s'en servent disposent d'un niveau suffisant de compétences pour en comprendre les usages, les limites et les risques. Une sensibilisation interne suffit souvent, mais elle doit exister.</li>
                  <li><strong>La transparence.</strong> Informez les personnes lorsqu'elles interagissent avec une IA, par exemple un agent conversationnel, et signalez les contenus générés ou manipulés par une IA. C'est une question de loyauté autant que de conformité.</li>
                  <li><strong>Le RGPD, dès qu'il y a des données personnelles.</strong> Si vous alimentez une IA avec des données de clients, de prospects ou de salariés, vous devez avoir une base légale, limiter les données utilisées, informer les personnes, respecter leurs droits et, dans les cas à risque, réaliser une analyse d'impact.</li>
                </ul>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Registre des activités de traitement</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>La pièce maîtresse de votre conformité : recenser vos traitements (finalités, données, durées, destinataires), y compris vos usages d'IA. Exigible en cas de contrôle de la CNIL.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-registre-des-traitements-rgpd" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-rgpd" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité RGPD</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Analyse d'impact (AIPD)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Obligatoire pour les traitements à risque élevé (article 35 du RGPD), dont certains usages d'IA : notre trame guide l'évaluation des risques et des mesures à prendre.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-analyse-impact-aipd" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-rgpd" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité RGPD</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Politique de confidentialité</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>L'information due aux personnes : finalités, bases légales, durées, droits, et mention de vos outils d'IA. À publier sur votre site et à jour de la doctrine CNIL.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-politique-de-confidentialite" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-rgpd" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité RGPD</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Charte d'encadrement de l'usage de l'IA</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Pour cadrer l'usage de l'IA en interne (littératie, transparence, validation humaine, données autorisées) et répondre à l'obligation de littératie de l'AI Act.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-clause-encadrement-usage-ia" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-conformite-rgpd" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Conformité RGPD</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Conformité RGPD</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Votre socle de conformité, réuni et à prix groupé : registre des traitements, analyse d'impact, politique de confidentialité, mentions, contrat de sous-traitance, et charte d'usage de l'IA.</p>
                  <a href="/catalogue/pack-conformite-rgpd" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Conformité RGPD →</a>
                </div>
              </section>

              <section id="cnil">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. IA et RGPD : la doctrine de la CNIL
                </h2>
                <p style={{marginBottom: '1rem'}}>La CNIL a publié, depuis 2024, une série de fiches pratiques sur l'application du RGPD au développement des systèmes d'IA. Ces recommandations ne sont pas, en elles-mêmes, juridiquement contraignantes, mais elles reflètent l'interprétation de l'autorité et constituent le standard qu'elle appliquera lors de ses contrôles. Plusieurs points sont à retenir.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Les principes du RGPD s'appliquent à l'entraînement.</strong> Licéité, loyauté, transparence, limitation des finalités, minimisation et exactitude valent aussi pour la constitution des bases d'apprentissage.</li>
                  <li><strong>L'intérêt légitime, base la plus courante.</strong> La CNIL reconnaît que l'intérêt légitime est la base légale la plus souvent mobilisable pour développer un système d'IA, sous réserve d'un triple test (intérêt légitime, nécessité, mise en balance) et de garanties solides.</li>
                  <li><strong>Le moissonnage de données encadré.</strong> Le web scraping pour constituer une base d'entraînement n'est pas interdit, mais il doit s'accompagner de mesures : documentation des sources, exclusion de certaines données, droit d'opposition effectif.</li>
                  <li><strong>La protection des données dès la conception.</strong> Il faut documenter ses choix de conception, ce qui est, dans la pratique, le maillon faible le plus fréquent, et conduire une analyse d'impact (au titre de l'article 35 du RGPD) lorsque le traitement présente un risque élevé.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>La CNIL a par ailleurs indiqué qu'elle aurait un rôle central au titre de l'AI Act : outre sa mission historique de protection des données, elle serait <strong>autorité de surveillance du marché pour une large part des systèmes à haut risque</strong>, notamment en matière de biométrie, d'emploi, de migration et d'usages répressifs. La désignation complète des autorités compétentes se précise en 2026.</p>
              </section>

              <section id="mutualiser">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Mutualiser avec sa conformité RGPD
                </h2>
                <p style={{marginBottom: '1rem'}}>La bonne nouvelle, pour qui a déjà engagé une démarche RGPD, est que l'essentiel du socle est commun : une gouvernance claire, une analyse des risques, de la documentation, une information des personnes et le respect de leurs droits. Préparer sa conformité à l'IA, c'est en grande partie prolonger et structurer ce qui a déjà été fait pour les données personnelles, plutôt que de repartir de zéro.</p>
                <p style={{marginBottom: '1rem'}}>C'est l'approche que le cabinet propose à travers son <a href="/rgpd-conformite" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>accompagnement à la conformité RGPD</a> et son service de <a href="/dpo-externalise" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>délégué à la protection des données externalisé</a> : cartographier vos usages de l'IA, sécuriser vos bases légales, documenter vos choix et bâtir une organisation qui tient autant au regard du RGPD que de l'AI Act.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Sécuriser vos usages de l'IA</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet vous aide à qualifier vos usages au regard de l'AI Act, à articuler cette démarche avec votre conformité RGPD, et à documenter le tout. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/rgpd-conformite" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Conformité RGPD et DPO</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Trois cas concrets
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>L'artisan qui utilise un assistant de rédaction.</strong> Il rédige ses devis et ses publications avec une IA générative. L'usage est à risque minimal, mais il doit s'assurer de ne pas y saisir de données personnelles sensibles de ses clients, et signaler, le cas échéant, les contenus générés par IA.</li>
                  <li><strong>L'association qui trie des candidatures.</strong> Elle envisage un outil d'IA pour présélectionner des bénévoles ou des salariés. Là, on touche à l'emploi : un usage potentiellement à haut risque, qui appelle une vigilance forte et, du côté RGPD, une information des personnes et probablement une analyse d'impact.</li>
                  <li><strong>L'indépendant qui entraîne un petit modèle.</strong> Il veut spécialiser un modèle sur ses données clients. Avant tout, il doit définir une finalité, choisir une base légale (souvent l'intérêt légitime, sous conditions), minimiser les données et documenter ses choix de conception.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>L'encadrement de l'IA n'est pas un mur infranchissable, mais un cadre qui se met en place par étapes. Pour la plupart des entreprises, indépendants et associations, l'enjeu immédiat tient en trois mots : transparence, littératie, et respect du RGPD dès que des données personnelles sont en jeu. Les obligations les plus lourdes, réservées au haut risque, ont vu leur échéance repoussée, mais le texte de report n'est pas encore définitif.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de cartographier ses usages de l'IA, de poser la question de l'effet sur les personnes, et de mutualiser cette préparation avec sa conformité RGPD. Anticiper, ici, c'est se donner les moyens d'utiliser l'IA en confiance, sans subir le cadre.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Règlement (UE) 2024/1689 du 13 juin 2024 établissant des règles harmonisées concernant l'intelligence artificielle (AI Act), entré en vigueur le 1er août 2024</li>
                  <li>Digital Omnibus sur l'IA : proposition de la Commission du 19 novembre 2025, accord politique du 7 mai 2026, approbation par le Parlement européen le 16 juin 2026 (en cours d'adoption formelle)</li>
                  <li>Règlement (UE) 2016/679 (RGPD)</li>
                  <li>CNIL : recommandations et fiches pratiques sur l'application du RGPD au développement des systèmes d'IA, <a href="https://www.cnil.fr/fr/intelligence-artificielle" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>cnil.fr</a></li>
                  <li>Commission européenne, plateforme d'information sur l'AI Act, <a href="https://digital-strategy.ec.europa.eu" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>digital-strategy.ec.europa.eu</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; le cadre de l'IA évolue rapidement, notamment au gré de l'adoption définitive du Digital Omnibus.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que l'AI Act ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'AI Act est le règlement européen (UE) 2024/1689, entré en vigueur le 1er août 2024, premier cadre juridique général au monde sur l'IA. Il repose sur une approche par les risques : pratiques interdites, systèmes à haut risque strictement encadrés, systèmes à risque limité soumis à la transparence, et grande majorité des usages, à risque minimal, non réglementés.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mon entreprise est-elle concernée par l'AI Act ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si vous utilisez ou déployez de l'IA, vous êtes concerné, à un degré variable. La plupart des entreprises utilisent des outils à risque minimal ou limité, et sont surtout tenues à la transparence et à la littératie en IA. Les obligations lourdes visent le haut risque, par exemple une IA qui prend, suggère ou influence une décision significative sur une personne.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'AI Act et le RGPD, est-ce la même chose ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, ce sont deux textes distincts. L'AI Act relève d'une logique de sécurité des produits et de protection des droits fondamentaux. Le RGPD protège les données personnelles. La CNIL le rappelle : lorsqu'un système d'IA traite des données personnelles, les deux s'appliquent en même temps.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le calendrier de l'AI Act a-t-il changé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le Digital Omnibus sur l'IA, qui a fait l'objet d'un accord politique le 7 mai 2026 et a été approuvé par le Parlement européen le 16 juin 2026, reporte les règles sur les systèmes à haut risque de l'annexe III au 2 décembre 2027 et de l'annexe I au 2 août 2028. Tant que ce texte n'est pas formellement adopté et publié, les échéances initiales restent applicables.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la littératie en intelligence artificielle ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Depuis le 2 février 2025, l'AI Act impose une obligation de littératie en IA. Les organisations qui utilisent des systèmes d'IA doivent veiller à ce que les personnes qui s'en servent disposent d'un niveau suffisant de compétences pour en comprendre les usages, les limites et les risques. Cette obligation concerne même les petites structures.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Dois-je informer mes clients quand j'utilise une IA ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, dans plusieurs cas. L'AI Act prévoit des obligations de transparence : informer une personne lorsqu'elle interagit avec un système d'IA, comme un agent conversationnel, et signaler les contenus générés ou manipulés par une IA. L'essentiel de ces obligations s'applique à compter du 2 août 2026.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle base légale pour entraîner une IA sur des données personnelles ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Selon la CNIL, l'intérêt légitime est la base légale la plus couramment mobilisable, sous réserve d'un triple test (intérêt légitime, nécessité, mise en balance) et de garanties fortes. Le consentement est parfois adapté pour une collecte directe. Le moissonnage de données en ligne n'est pas interdit, mais doit être encadré, et une analyse d'impact peut être obligatoire.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qui contrôle l'intelligence artificielle en France ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La CNIL est l'autorité de protection des données et a vocation à exercer un rôle central sur l'IA. Elle a indiqué qu'elle serait l'autorité de surveillance du marché pour une large part des systèmes à haut risque, notamment en biométrie, emploi, migration et usages répressifs. La désignation complète des autorités compétentes au titre de l'AI Act se précise en 2026.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Conformité RGPD et DPO</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>IA et RGPD partagent le même socle. Le cabinet vous accompagne dans votre conformité et peut assurer un rôle de délégué à la protection des données externalisé.</p>
              <a href="/rgpd-conformite" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '6px'}}>
                Conformité RGPD →
              </a>
              <a href="/dpo-externalise" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                DPO externalisé →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/lintelligence-artificielle-en-droit-une-fausse-bonne-idee" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                L'intelligence artificielle en droit : une fausse bonne idée →
              </a>
              <a href="/blog/directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Directive NIS2 : votre entreprise est-elle concernée ? →
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
                <a href="/blog?tag=Intelligence%20artificielle" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Intelligence artificielle</a>
                <a href="/blog?tag=AI%20Act" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>AI Act</a>
                <a href="/blog?tag=RGPD" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>RGPD</a>
                <a href="/blog?tag=CNIL" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>CNIL</a>
                <a href="/blog?tag=Conformit%C3%A9" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Conformité</a>
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
