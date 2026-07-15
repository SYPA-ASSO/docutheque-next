import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Martinique : ce que permet la loi du 30 juin 2026 sur l'énergie, l'eau et l'assainissement · Blog Cabinet Cholez-Pagotto",
  description: "La loi n° 2026-574 du 30 juin 2026 habilite l'assemblée de Martinique, sur le fondement de l'article 73 de la Constitution, à fixer des règles locales en matière d'énergie et à créer une autorité unique de l'eau et de l'assainissement. Analyse pour les collectivités.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/martinique-loi-30-juin-2026-energie-eau-assainissement-habilitation',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/martinique-loi-energie-eau-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/martinique-loi-energie-eau-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Martinique : ce que permet la loi du 30 juin 2026 sur l'énergie, l'eau et l'assainissement",
      "description": "La loi n° 2026-574 du 30 juin 2026 habilite l'assemblée de Martinique, sur le fondement de l'article 73 de la Constitution, à fixer des règles locales en matière d'énergie et à créer une autorité unique de l'eau et de l'assainissement. Analyse pour les collectivités.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/martinique-loi-energie-eau-2026.webp",
      "datePublished": "2026-07-04",
      "dateModified": "2026-07-04",
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
      "url": "https://cholez-pagotto.fr/blog/martinique-loi-30-juin-2026-energie-eau-assainissement-habilitation",
      "keywords": [
        "Martinique",
        "loi 2026-574",
        "article 73 Constitution",
        "habilitation",
        "énergie",
        "eau",
        "assainissement",
        "autorité unique",
        "différenciation territoriale",
        "collectivités"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "La loi modifie-t-elle immédiatement les règles applicables en Martinique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Elle habilite l'assemblée de Martinique à adopter des dispositions spécifiques ; elle n'épuise donc pas, à elle seule, le contenu normatif à venir. Ce sont les délibérations locales prises sur ce fondement qui produiront les changements concrets."
          }
        },
        {
          "@type": "Question",
          "name": "Quels domaines sont visés par l'habilitation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux volets : l'énergie d'une part (maîtrise de la demande, réglementation thermique des bâtiments, énergies renouvelables, mobilité durable), et la création d'une autorité unique en matière d'eau et d'assainissement d'autre part."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps l'habilitation est-elle valable ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jusqu'au prochain renouvellement général de l'assemblée de Martinique. C'est dans cette fenêtre que les délibérations d'application doivent être adoptées."
          }
        },
        {
          "@type": "Question",
          "name": "L'adaptation locale peut-elle toucher aux tarifs de l'électricité ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La loi pose une limite expresse : les dispositions adoptées ne peuvent pas avoir d'impact sur les charges de service public de l'énergie prises en compte dans le calcul de la péréquation tarifaire, qui garantit l'égalité tarifaire entre les territoires."
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
          "name": "Martinique : la loi du 30 juin 2026"
        }
      ]
    }
  ]
}

export default function ArticleMartiniqueLoi2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Martinique : la loi du 30 juin 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>COLLECTIVITÉS</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>OUTRE-MER</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT PUBLIC</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Martinique : ce que permet la loi du 30 juin 2026 sur l'énergie, l'eau et l'assainissement</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 4 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 9 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/martinique-loi-energie-eau-2026.webp"
                alt="Martinique : ce que permet la loi du 30 juin 2026 sur l'énergie, l'eau et l'assainissement"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#mecanisme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le mécanisme : l'habilitation de l'article 73 de la Constitution</a></li>
                <li><a href="#energie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Une habilitation en matière d'énergie</a></li>
                <li><a href="#eau" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Une habilitation pour l'eau et l'assainissement : vers une autorité unique</a></li>
                <li><a href="#signal" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Pourquoi ce texte dépasse la seule Martinique</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La <strong>loi n°&nbsp;2026-574 du 30 juin 2026</strong>, publiée au Journal officiel du 1er juillet 2026, n'est pas un simple texte local. Derrière son objet territorialement ciblé, elle dit quelque chose de plus large sur la <strong>différenciation normative</strong> et sur la capacité d'une collectivité ultramarine à adapter les règles applicables à son territoire, dans des domaines aussi opérationnels que l'énergie, l'eau et l'assainissement.</p>
                <p style={{marginBottom: '1rem'}}>Cet article présente les deux habilitations accordées à l'assemblée de Martinique et explique pourquoi ce texte intéresse, au-delà de la Martinique, l'ensemble des acteurs publics locaux.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> la loi n°&nbsp;2026-574 du 30 juin 2026, publiée au Journal officiel du 1er juillet, <strong>habilite l'assemblée de Martinique</strong>, jusqu'à son prochain renouvellement, à adopter des <strong>dispositions spécifiques en matière d'énergie</strong> et à <strong>créer une autorité unique en matière d'eau et d'assainissement</strong>, sur le fondement de l'article 73 de la Constitution.
                  </p>
                </div>
              </section>

              <section id="mecanisme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le mécanisme : l'habilitation de l'article 73 de la Constitution
                </h2>
                <p style={{marginBottom: '1rem'}}>L'article 73 de la Constitution permet aux départements et régions d'outre-mer, et aux collectivités qui s'y substituent comme la collectivité territoriale de Martinique, d'être <strong>habilités par la loi</strong> à adapter les lois et règlements dans leurs domaines de compétences, voire à fixer eux-mêmes les règles dans certaines matières, pour tenir compte de leurs caractéristiques et contraintes particulières.</p>
                <p style={{marginBottom: '1rem'}}>C'est ce mécanisme que met en œuvre la loi du 30 juin 2026 : elle n'édicte pas elle-même de nouvelles règles applicables en Martinique, elle <strong>ouvre à l'assemblée de Martinique le pouvoir d'en adopter</strong>, dans un périmètre défini et pour une durée limitée, jusqu'au prochain renouvellement général de l'assemblée. Les décisions locales à venir seront donc au moins aussi importantes que la loi d'habilitation elle-même.</p>
              </section>

              <section id="energie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Une habilitation en matière d'énergie
                </h2>
                <p style={{marginBottom: '1rem'}}>L'article 1er autorise l'assemblée de Martinique à adopter des <strong>dispositions spécifiques à la Martinique en matière d'énergie</strong>. Le texte cite notamment :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>la <strong>maîtrise de la demande en énergie</strong> ;</li>
                  <li>la <strong>réglementation thermique des bâtiments</strong>, un enjeu évident en climat tropical où les référentiels hexagonaux sont souvent inadaptés ;</li>
                  <li>le <strong>développement des énergies renouvelables</strong> ;</li>
                  <li>la <strong>mobilité durable</strong>.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Une limite importante est posée : les dispositions adoptées <strong>ne peuvent pas avoir d'impact sur les charges de service public de l'énergie</strong> prises en compte dans le calcul de la péréquation tarifaire. Autrement dit, l'adaptation locale ne peut pas se faire au détriment du principe d'égalité tarifaire entre les territoires, ni en reportant des coûts sur la solidarité nationale.</p>
              </section>

              <section id="eau">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Une habilitation pour l'eau et l'assainissement : vers une autorité unique
                </h2>
                <p style={{marginBottom: '1rem'}}>L'article 2 va plus loin sur un terrain très concret et très sensible en Martinique : il habilite l'assemblée à <strong>créer et mettre en œuvre une autorité unique en matière d'eau et d'assainissement</strong>, à laquelle seraient confiées les compétences prévues par le Code général des collectivités territoriales dans ce domaine.</p>
                <p style={{marginBottom: '1rem'}}>Pour les collectivités, c'est un point structurant : la gestion de l'eau martiniquaise est aujourd'hui éclatée entre plusieurs autorités organisatrices, une fragmentation régulièrement pointée dans les crises de l'eau qu'a connues l'île. Le texte ne règle pas tout immédiatement, mais il <strong>ouvre le cadre juridique</strong> permettant une réorganisation institutionnelle d'ampleur : création de l'autorité, transfert des compétences, réorganisation des services.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce que la loi ne fait pas.</strong> Elle ne crée pas elle-même l'autorité unique et ne transfère aucune compétence : tout dépendra des délibérations que l'assemblée de Martinique adoptera sur le fondement de cette habilitation, dans la fenêtre temporelle ouverte jusqu'à son prochain renouvellement.
                  </p>
                </div>
              </section>

              <section id="signal">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Pourquoi ce texte dépasse la seule Martinique
                </h2>
                <p style={{marginBottom: '1rem'}}>Même territorialement ciblée, cette loi intéresse l'ensemble des acteurs publics locaux, car elle illustre la façon dont l'article 73 de la Constitution peut être mobilisé pour permettre des <strong>adaptations fines dans des domaines très opérationnels</strong> : énergie, bâtiments, mobilité, eau. Chaque habilitation votée enrichit la pratique de la différenciation territoriale et dessine, précédent après précédent, ce que les collectivités peuvent obtenir du législateur.</p>
                <p style={{marginBottom: '1rem'}}>Pour les élus, directions générales et services des collectivités, ultramarines ou non, c'est donc un texte à verser au dossier de la différenciation : il montre qu'une demande d'habilitation ciblée, portée sur des compétences précises et assortie de garde-fous (ici la péréquation tarifaire), peut aboutir.</p>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La loi du 30 juin 2026 ne transforme pas à elle seule l'organisation des compétences en Martinique. En revanche, elle donne une <strong>base claire</strong> pour que l'assemblée de Martinique agisse sur des sujets structurants : énergie, eau, assainissement. Pour les collectivités et leurs partenaires, c'est un texte à surveiller de près, car l'essentiel se jouera dans les délibérations locales à venir, leur contenu, leur calendrier et leur sécurisation juridique.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur la loi n°&nbsp;2026-574 du 30 juin 2026 portant habilitation de l'assemblée de Martinique à fixer des règles applicables sur son territoire en application de l'article 73 de la Constitution en matière d'énergie, d'eau et d'assainissement, publiée au <a href="https://www.legifrance.gouv.fr/jorf/jo/2026/07/01/0152" style={{color: '#1a4fba', fontWeight: 600}}>Journal officiel du 1er juillet 2026</a>.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La loi modifie-t-elle immédiatement les règles applicables en Martinique ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Elle habilite l'assemblée de Martinique à adopter des dispositions spécifiques ; elle n'épuise donc pas, à elle seule, le contenu normatif à venir. Ce sont les délibérations locales prises sur ce fondement qui produiront les changements concrets.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels domaines sont visés par l'habilitation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux volets : l'énergie d'une part (maîtrise de la demande, réglementation thermique des bâtiments, énergies renouvelables, mobilité durable), et la création d'une autorité unique en matière d'eau et d'assainissement d'autre part.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Combien de temps l'habilitation est-elle valable ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Jusqu'au prochain renouvellement général de l'assemblée de Martinique. C'est dans cette fenêtre que les délibérations d'application doivent être adoptées.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'adaptation locale peut-elle toucher aux tarifs de l'électricité ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La loi pose une limite expresse : les dispositions adoptées ne peuvent pas avoir d'impact sur les charges de service public de l'énergie prises en compte dans le calcul de la péréquation tarifaire, qui garantit l'égalité tarifaire entre les territoires.</p>
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
              <a href="/blog/hydroelectricite-loi-du-29-juin-2026-concessions-autorisation-territoires" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Hydroélectricité : ce que change la loi du 29 juin 2026 pour les concessions et les territoires &rarr;
              </a>
              <a href="/blog/mayotte-protection-universelle-maladie-1er-juillet-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026 &rarr;
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
                <a href="/blog?tag=Collectivit%C3%A9s" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Collectivités</a>
                <a href="/blog?tag=Outre-mer" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Outre-mer</a>
                <a href="/blog?tag=%C3%89nergie" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Énergie</a>
                <a href="/blog?tag=Eau%20et%20assainissement" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Eau et assainissement</a>
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
