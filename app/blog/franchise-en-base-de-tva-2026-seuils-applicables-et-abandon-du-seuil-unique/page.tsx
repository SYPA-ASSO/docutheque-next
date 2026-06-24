import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Franchise en base de TVA : le seuil unique à 25 000 € abandonné, les seuils applicables en 2026 · Blog Cabinet Cholez-Pagotto`,
  description: `Le seuil unique de TVA à 25\u00a0000\u00a0€ a été définitivement abandonné par la loi du 3 novembre 2025. Quels seuils s'appliquent en 2026, que se passe-t-il en cas de dépassement et quelle mention porter sur vos factures : le point complet et vérifié.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/franchise-en-base-de-tva-2026-seuils-applicables-et-abandon-du-seuil-unique',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/franchise-en-base-tva-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/franchise-en-base-tva-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Franchise en base de TVA : le seuil unique à 25 000 € abandonné, les seuils applicables en 2026",
      "description": "Le seuil unique de TVA à 25 000 € a été définitivement abandonné par la loi du 3 novembre 2025. Quels seuils s'appliquent en 2026, que se passe-t-il en cas de dépassement et quelle mention porter sur vos factures : le point complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/franchise-en-base-tva-2026.webp",
      "datePublished": "2025-11-20",
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
      "url": "https://cholez-pagotto.fr/blog/franchise-en-base-de-tva-2026-seuils-applicables-et-abandon-du-seuil-unique",
      "keywords": ["Franchise en base de TVA", "Seuils TVA 2026", "Seuil unique 25000 euros", "Micro-entreprise", "Auto-entrepreneur", "Article 293 B CGI", "Loi du 3 novembre 2025", "TVA non applicable"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quels sont les seuils de franchise en base de TVA en 2026 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour 2026, les seuils sont maintenus. Pour les ventes de biens, la restauration et l'hébergement : 85 000 € de chiffre d'affaires l'année précédente (seuil de base) et 93 500 € l'année en cours (seuil majoré). Pour les prestations de services et les professions libérales : 37 500 € l'année précédente et 41 250 € l'année en cours. Des seuils spécifiques existent pour certaines activités, comme les avocats, auteurs et artistes-interprètes."
          }
        },
        {
          "@type": "Question",
          "name": "Le seuil unique de TVA à 25 000 € va-t-il s'appliquer ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Ce seuil unique, instauré par la loi de finances pour 2025, n'a jamais été appliqué. Il a été suspendu à plusieurs reprises en 2025, puis définitivement abandonné par la loi n° 2025-1044 du 3 novembre 2025, qui a maintenu les seuils antérieurs distinguant les ventes des prestations de services."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il si je dépasse les seuils de franchise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Si votre chiffre d'affaires dépasse le seuil de base mais reste sous le seuil majoré, vous restez en franchise l'année en cours et devenez redevable de la TVA au 1er janvier de l'année suivante. Si vous dépassez le seuil majoré (93 500 € ou 41 250 € selon l'activité), vous devenez redevable de la TVA dès le premier jour du dépassement."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle mention dois-je porter sur mes factures en franchise de TVA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La mention « TVA non applicable, article 293 B du Code général des impôts » pour une entreprise établie en France. À compter du 1er septembre 2026, à la suite de la recodification de la TVA dans le Code des impositions sur les biens et services, la référence devient « TVA non applicable, article L.223-3 du CIBS », les deux formulations étant acceptées pendant la transition."
          }
        },
        {
          "@type": "Question",
          "name": "Franchise en base et régime micro, est-ce la même chose ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, ce sont deux mécanismes distincts qui coexistent souvent. Le régime micro concerne l'imposition des bénéfices et le calcul des cotisations sociales. La franchise en base concerne uniquement la TVA. Un micro-entrepreneur peut très bien relever du régime micro tout en sortant de la franchise de TVA s'il dépasse les seuils de TVA."
          }
        },
        {
          "@type": "Question",
          "name": "Suis-je concerné par la facturation électronique si je suis en franchise de TVA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La franchise vous dispense de facturer la TVA, mais vous restez assujetti à la TVA au sens de la réglementation. Vous entrez donc dans le champ de la facturation électronique, en réception dès le 1er septembre 2026 et en émission au 1er septembre 2027."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je renoncer à la franchise et opter pour la TVA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Vous pouvez opter pour le paiement de la TVA même en restant sous les seuils, sur le fondement de l'article 293 F du Code général des impôts. Cette option permet de déduire la TVA sur vos achats et investissements. Elle prend effet le premier jour du mois de la déclaration, vaut pour deux années et se reconduit tacitement."
          }
        },
        {
          "@type": "Question",
          "name": "La franchise en base de TVA est-elle toujours avantageuse ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cela dépend de votre activité. La franchise est avantageuse si votre clientèle est composée de particuliers, car vos prix sont affichés sans TVA. Elle l'est moins si vous réalisez d'importants achats grevés de TVA ou si votre clientèle est composée de professionnels qui récupèrent la TVA, car vous ne pouvez pas déduire la TVA de vos propres achats."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Franchise en base de TVA 2026" }
      ]
    }
  ]
}

export default function ArticleFranchiseTVASeuils2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Franchise en base de TVA 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FISCALITÉ</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>MICRO &amp; INDÉPENDANTS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Franchise en base de TVA : le seuil unique à 25&nbsp;000&nbsp;€ abandonné, les seuils applicables en 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 20 novembre 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 14 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/franchise-en-base-tva-2026.webp"
                alt="Franchise en base de TVA : le seuil unique à 25 000 euros abandonné, les seuils applicables en 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#rappel" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. La franchise en base de TVA, en bref</a></li>
                <li><a href="#saga" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. La saga du seuil unique à 25 000 €</a></li>
                <li><a href="#seuils" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Les seuils applicables en 2026</a></li>
                <li><a href="#depassement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. En cas de dépassement</a></li>
                <li><a href="#mention" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. La mention sur vos factures</a></li>
                <li><a href="#arbitrer" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Franchise ou TVA : comment arbitrer</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Trois cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Rarement une mesure fiscale aura autant agité les indépendants. Annoncé fin 2024, le passage à un <strong>seuil unique de franchise en base de TVA fixé à 25&nbsp;000&nbsp;€</strong> aurait fait basculer des centaines de milliers de micro-entrepreneurs dans le régime de la TVA. Après une année de suspensions successives et une vive opposition, ce projet a finalement été écarté. Le point est aujourd'hui stabilisé, et c'est l'occasion de remettre les idées au clair pour 2026.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le tour de la question, de façon complète et vérifiée : ce qu'est la franchise en base, le détail de l'épisode du seuil unique, les seuils réellement applicables en 2026, ce qui se passe en cas de dépassement, la mention à porter sur vos factures et la manière d'arbitrer entre franchise et TVA.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> le seuil unique à 25&nbsp;000&nbsp;€ a été <strong>définitivement abandonné</strong> par la loi du 3 novembre 2025, et les seuils antérieurs, qui distinguent les ventes des prestations de services, <strong>restent applicables en 2026</strong>.
                  </p>
                </div>
              </section>

              <section id="rappel">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. La franchise en base de TVA, en bref
                </h2>
                <p style={{marginBottom: '1rem'}}>La <strong>franchise en base de TVA</strong> est un régime, encadré par les <strong>articles 293 B à 293 F du Code général des impôts</strong>, qui dispense les petites entreprises de déclarer et de reverser la TVA, tant que leur chiffre d'affaires ne dépasse pas certains seuils. Concrètement, l'entreprise facture sans TVA, ne réalise aucune déclaration de TVA, et allège ainsi nettement sa gestion.</p>
                <p style={{marginBottom: '1rem'}}>La contrepartie est importante : sous ce régime, vous ne pouvez pas <strong>déduire la TVA</strong> sur vos achats et investissements professionnels. Vous supportez donc cette TVA comme un consommateur final. L'arbitrage tient là tout entier, et nous y revenons plus loin.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ne pas confondre franchise et régime micro.</strong> Ce sont deux mécanismes distincts qui coexistent le plus souvent. Le <strong>régime micro</strong> concerne l'imposition de vos bénéfices et le calcul de vos cotisations sociales. La <strong>franchise en base</strong> concerne uniquement la TVA. On peut très bien relever du régime micro et, parce qu'on dépasse les seuils de TVA, sortir de la franchise.
                  </p>
                </div>
              </section>

              <section id="saga">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. La saga du seuil unique à 25 000 €
                </h2>
                <p style={{marginBottom: '1rem'}}>Tout commence avec la <strong>loi de finances pour 2025</strong> (loi n° 2025-127 du 14 février 2025). Son <strong>article 32</strong> prévoyait d'instituer, au 1er mars 2025, un <strong>seuil unique de franchise fixé à 25&nbsp;000&nbsp;€</strong> de chiffre d'affaires, avec un seuil majoré de 27&nbsp;500&nbsp;€, supprimant la distinction entre activités de vente et de services. L'objectif affiché était de réduire les distorsions de concurrence, notamment dans le bâtiment, et de rapprocher la France de certains de ses voisins européens.</p>
                <p style={{marginBottom: '1rem'}}>La mesure a immédiatement suscité une forte opposition des travailleurs indépendants et des organisations professionnelles. Le calendrier s'est alors transformé en série de reports. Dès le <strong>6 février 2025</strong>, le ministre de l'Économie annonçait une première mise en pause, confirmée fin février, repoussant l'entrée en vigueur. Le <strong>30 avril 2025</strong>, un nouveau report était décidé, au-delà du 1er juin, dans l'attente du projet de loi de finances pour 2026. Entre-temps, la commission des finances du <strong>Sénat</strong>, dans un rapport du 9 avril 2025, jugeait la réforme improvisée et en recommandait l'abandon.</p>
                <p style={{marginBottom: '1rem'}}>L'épilogue est venu d'un texte spécifique. La <strong>loi n° 2025-1044 du 3 novembre 2025</strong>, adoptée à l'unanimité par le Sénat puis promulguée, a <strong>mis fin à la réforme</strong> et maintenu les seuils antérieurs, afin de garantir aux micro-entrepreneurs un cadre fiscal stable et lisible. Dans la foulée, la nouvelle tentative figurant dans le projet de budget 2026, qui proposait cette fois un seuil de 37&nbsp;500&nbsp;€ assorti d'un seuil spécifique pour les travaux immobiliers, a elle aussi été écartée par les députés. Au final, le seuil unique à 25&nbsp;000&nbsp;€ n'aura jamais été appliqué.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce qu'il faut en retenir.</strong> Aucune démarche n'est à effectuer du fait de cet abandon. Les entreprises en franchise restent en franchise selon les seuils habituels. Le sujet ayant beaucoup évolué, et une loi de finances pouvant toujours rouvrir le débat, il reste prudent de vérifier régulièrement les seuils en vigueur auprès des sources officielles.
                  </p>
                </div>
              </section>

              <section id="seuils">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Les seuils applicables en 2026
                </h2>
                <p style={{marginBottom: '1rem'}}>Les seuils maintenus distinguent deux grandes catégories d'activité. Pour chacune, il existe un <strong>seuil de base</strong>, apprécié sur le chiffre d'affaires de l'année précédente, et un <strong>seuil majoré</strong>, apprécié sur l'année en cours.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Activité</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Seuil de base (N-1)</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Seuil majoré (N)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Ventes de biens, restauration, hébergement", "85\u00a0000\u00a0€", "93\u00a0500\u00a0€"],
                        ["Prestations de services, professions libérales", "37\u00a0500\u00a0€", "41\u00a0250\u00a0€"],
                      ].map(([a, b, m], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{a}</td>
                          <td style={{padding: '10px 12px', textAlign: 'center', color: '#0f2d6e', fontWeight: '600'}}>{b}</td>
                          <td style={{padding: '10px 12px', textAlign: 'center', color: '#0f2d6e', fontWeight: '600'}}>{m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>En pratique, une activité mixte combine les deux régimes de seuils, avec des règles de ventilation propres. Et certaines activités relèvent de <strong>seuils spécifiques</strong>, en particulier les avocats, les auteurs et les artistes-interprètes. Si vous exercez l'une de ces activités, vérifiez le seuil qui vous est propre plutôt que d'appliquer les seuils généraux ci-dessus.</p>
              </section>

              <section id="depassement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. En cas de dépassement
                </h2>
                <p style={{marginBottom: '1rem'}}>Le mécanisme des deux seuils détermine le moment où vous basculez dans la TVA. Deux situations sont à distinguer.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>Vous dépassez le seuil de base, mais pas le seuil majoré.</strong> Vous restez en franchise pour l'année en cours, et vous devenez redevable de la TVA à compter du <strong>1er janvier de l'année suivante</strong>.</li>
                  <li><strong>Vous dépassez le seuil majoré</strong> (93&nbsp;500&nbsp;€ pour les ventes, 41&nbsp;250&nbsp;€ pour les services). Vous devenez redevable de la TVA <strong>dès le premier jour du dépassement</strong>. Les opérations réalisées à compter de ce jour doivent être facturées avec TVA.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Sur ce dernier point, la règle s'est durcie : la sortie de franchise intervient désormais dès le premier jour du dépassement, et non plus au premier jour du mois concerné. Une fois redevable, vous récupérez en contrepartie le droit de déduire la TVA sur vos dépenses professionnelles. Pensez alors à signaler ce changement à votre service des impôts des entreprises afin que votre dossier soit mis à jour.</p>
              </section>

              <section id="mention">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. La mention sur vos factures
                </h2>
                <p style={{marginBottom: '1rem'}}>Une entreprise en franchise ne facture pas la TVA, mais elle doit le signaler clairement. La mention obligatoire est : <strong>« TVA non applicable, article 293 B du Code général des impôts »</strong> pour une entreprise établie en France. Une entreprise établie dans un autre État membre de l'Union européenne porte la mention équivalente visant l'article 293 B bis.</p>
                <p style={{marginBottom: '1rem'}}>Un changement de référence est toutefois à anticiper. À la suite de la recodification des règles de TVA dans le <strong>Code des impositions sur les biens et services (CIBS)</strong>, opérée par l'ordonnance du 17 décembre 2025, la mention évolue au <strong>1er septembre 2026</strong> : la référence devient « TVA non applicable, article L.223-3 du CIBS », les deux formulations restant acceptées pendant la transition. Nous détaillons ce point, et plus largement les obligations qui touchent les micro-entreprises, dans notre <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>guide de la facturation électronique pour les micro-entreprises, TPE et PME</a>.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Franchise et facturation électronique.</strong> Être en franchise ne vous exclut pas de la réforme de la facture électronique. Vous restez un assujetti à la TVA, donc concerné, en réception dès le 1er septembre 2026 et en émission au 1er septembre 2027. À voir aussi : notre article général sur <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>ce qui change pour toutes les entreprises</a>.
                  </p>
                </div>
              </section>

              <section id="arbitrer">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Franchise ou TVA : comment arbitrer
                </h2>
                <p style={{marginBottom: '1rem'}}>Rester en franchise n'est pas toujours le plus avantageux. Tant que vous êtes sous les seuils, vous pouvez d'ailleurs <strong>renoncer à la franchise et opter pour la TVA</strong>, sur le fondement de l'<strong>article 293 F du Code général des impôts</strong>. Cette option prend effet le premier jour du mois où elle est déclarée, vaut pour deux années et se reconduit tacitement. Trois critères guident le choix.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Votre clientèle.</strong> Si vous vendez surtout à des particuliers, la franchise est précieuse : vos prix affichés ne supportent pas de TVA, ce qui vous rend plus compétitif. Si vous facturez des professionnels qui récupèrent la TVA, l'avantage disparaît, puisque la TVA leur est neutre.</li>
                  <li><strong>Vos achats.</strong> Si votre activité suppose des achats ou des investissements importants grevés de TVA, l'option pour la TVA vous permet de la déduire, ce qui peut représenter une économie réelle. En franchise, cette TVA reste à votre charge.</li>
                  <li><strong>Votre gestion.</strong> La franchise allège considérablement les obligations déclaratives. L'option pour la TVA implique des déclarations périodiques et un suivi plus rigoureux.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Cet arbitrage mérite d'être posé chiffre en main, en fonction de votre situation réelle. C'est précisément le type de question sur lequel un éclairage personnalisé fait gagner du temps et évite les erreurs.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Une question sur votre situation ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Franchise ou TVA, seuils, mentions de factures, conséquences d'un dépassement : notre juriste vous répond par écrit et vous aide à sécuriser vos choix.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                  </div>
                </div>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Trois cas concrets
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>La graphiste en micro-entreprise.</strong> Prestataire de services, elle a réalisé 34&nbsp;000&nbsp;€ de chiffre d'affaires. Elle reste largement sous le seuil de 37&nbsp;500&nbsp;€ et conserve la franchise. Comme sa clientèle est surtout composée de particuliers et de très petites structures, la franchise lui est favorable, et elle conserve la mention 293 B sur ses factures.</li>
                  <li><strong>L'artisan qui investit.</strong> Il prévoit d'acheter du matériel pour 20&nbsp;000&nbsp;€. En franchise, il supporterait la TVA de cet achat sans pouvoir la récupérer. En optant pour la TVA au titre de l'article 293 F, il déduit cette TVA, ce qui change son calcul, d'autant que ses clients professionnels récupèrent eux-mêmes la taxe.</li>
                  <li><strong>La consultante qui se développe.</strong> Son chiffre d'affaires de services atteint 42&nbsp;000&nbsp;€ en cours d'année, dépassant le seuil majoré de 41&nbsp;250&nbsp;€. Elle devient redevable de la TVA dès le jour du dépassement, doit facturer avec TVA à compter de ce moment et le signaler à son service des impôts.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Après une année d'incertitude, le message est clair : le seuil unique à 25&nbsp;000&nbsp;€ ne s'appliquera pas, et les seuils habituels demeurent pour 2026, soit <strong>85&nbsp;000&nbsp;€ et 93&nbsp;500&nbsp;€</strong> pour les ventes et l'hébergement, <strong>37&nbsp;500&nbsp;€ et 41&nbsp;250&nbsp;€</strong> pour les services et le libéral. Pour la grande majorité des micro-entrepreneurs, rien ne change donc dans l'immédiat.</p>
                <p style={{marginBottom: '1rem'}}>L'essentiel est de bien comprendre le fonctionnement des deux seuils, de ne pas confondre franchise et régime micro, et de poser l'arbitrage entre franchise et TVA en fonction de sa clientèle et de ses achats. Et, le débat fiscal restant ouvert d'une loi de finances à l'autre, de garder un œil sur les évolutions à venir.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code général des impôts, articles 293 B à 293 F (régime de la franchise en base de TVA), dont l'article 293 B (mention) et l'article 293 F (option pour le paiement de la TVA)</li>
                  <li>Loi n° 2025-127 du 14 février 2025 de finances pour 2025, article 32 (instauration du seuil unique de 25&nbsp;000&nbsp;€)</li>
                  <li>Loi n° 2025-1044 du 3 novembre 2025 (abandon du seuil unique et maintien des seuils antérieurs)</li>
                  <li>Ordonnance n° 2025-1247 du 17 décembre 2025 (recodification de la TVA dans le Code des impositions sur les biens et services et évolution de la mention de franchise)</li>
                  <li>Portails officiels : <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F21746" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>entreprendre.service-public.gouv.fr</a> (seuils de la franchise) et <a href="https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/entreprises-pouvez-vous-beneficier-de-la-franchise-de-tva" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a></li>
                  <li>Rapport de la commission des finances du Sénat du 9 avril 2025 sur la réforme du seuil de franchise</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; les seuils et les règles relevant de la loi de finances peuvent évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels sont les seuils de franchise en base de TVA en 2026 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour les ventes de biens, la restauration et l'hébergement : 85&nbsp;000&nbsp;€ l'année précédente et 93&nbsp;500&nbsp;€ l'année en cours. Pour les prestations de services et les professions libérales : 37&nbsp;500&nbsp;€ l'année précédente et 41&nbsp;250&nbsp;€ l'année en cours. Des seuils spécifiques s'appliquent à certaines activités, comme les avocats, auteurs et artistes-interprètes.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le seuil unique à 25 000 € va-t-il s'appliquer ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Ce seuil unique, instauré par la loi de finances pour 2025, n'a jamais été appliqué. Il a été suspendu à plusieurs reprises en 2025, puis définitivement abandonné par la loi du 3 novembre 2025, qui a maintenu les seuils antérieurs distinguant les ventes des services.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que se passe-t-il si je dépasse les seuils ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Si vous dépassez le seuil de base mais restez sous le seuil majoré, vous restez en franchise l'année en cours et devenez redevable de la TVA au 1er janvier de l'année suivante. Si vous dépassez le seuil majoré, vous devenez redevable de la TVA dès le premier jour du dépassement.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle mention dois-je porter sur mes factures ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La mention « TVA non applicable, article 293 B du Code général des impôts » pour une entreprise établie en France. À compter du 1er septembre 2026, à la suite de la recodification dans le CIBS, la référence devient « TVA non applicable, article L.223-3 du CIBS », les deux étant acceptées pendant la transition.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Franchise en base et régime micro, est-ce la même chose ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Ce sont deux mécanismes distincts qui coexistent souvent. Le régime micro concerne l'imposition des bénéfices et le calcul des cotisations sociales. La franchise en base concerne uniquement la TVA. Un micro-entrepreneur peut relever du régime micro tout en sortant de la franchise s'il dépasse les seuils de TVA.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Suis-je concerné par la facturation électronique en franchise ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La franchise vous dispense de facturer la TVA, mais vous restez assujetti à la TVA au sens de la réglementation. Vous entrez donc dans le champ de la facturation électronique, en réception dès le 1er septembre 2026 et en émission au 1er septembre 2027.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Puis-je renoncer à la franchise et opter pour la TVA ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Vous pouvez opter pour le paiement de la TVA même en restant sous les seuils, sur le fondement de l'article 293 F du Code général des impôts. Cette option permet de déduire la TVA sur vos achats. Elle prend effet le premier jour du mois de la déclaration, vaut deux ans et se reconduit tacitement.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La franchise est-elle toujours avantageuse ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Cela dépend de votre activité. La franchise est avantageuse si votre clientèle est composée de particuliers, car vos prix sont affichés sans TVA. Elle l'est moins si vous réalisez d'importants achats grevés de TVA ou si vos clients sont des professionnels qui récupèrent la TVA, car vous ne pouvez pas déduire la TVA de vos achats.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Facturation électronique 2026 : le guide pratique micro, TPE et PME →
              </a>
              <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Facturation électronique 2026 : ce qui change pour toutes les entreprises →
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
                <span key="Franchise de TVA" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Franchise de TVA</span>
                <span key="TVA" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>TVA</span>
                <span key="Micro-entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Micro-entreprise</span>
                <span key="Seuils 2026" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Seuils 2026</span>
                <span key="Auto-entrepreneur" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Auto-entrepreneur</span>
                <span key="Fiscalité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Fiscalité</span>
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
