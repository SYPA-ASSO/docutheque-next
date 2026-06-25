import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises · Blog Cabinet Cholez-Pagotto`,
  description: `Réception dès le 1er septembre 2026 pour toutes les entreprises, émission en 2026 puis 2027, fin du portail public gratuit et passage obligatoire par une plateforme agréée : le point complet et vérifié sur la réforme.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises",
      "description": "Réception dès le 1er septembre 2026 pour toutes les entreprises, émission en 2026 puis 2027, fin du portail public gratuit et passage obligatoire par une plateforme agréée : le point complet et vérifié sur la réforme.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-2026.webp",
      "datePublished": "2026-01-20",
      "dateModified": "2026-06-23",
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
      "url": "https://cholez-pagotto.fr/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises",
      "keywords": ["Facturation électronique", "Facture électronique 2026", "Plateforme agréée", "PDP", "e-reporting", "TVA", "Ordonnance 2021-1190", "Article 289 bis CGI"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "À partir de quand la facturation électronique est-elle obligatoire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La réception de factures électroniques devient obligatoire pour toutes les entreprises assujetties à la TVA dès le 1er septembre 2026. L'obligation d'émettre des factures électroniques s'applique au 1er septembre 2026 pour les grandes entreprises et les ETI, et au 1er septembre 2027 pour les PME, les TPE et les micro-entreprises."
          }
        },
        {
          "@type": "Question",
          "name": "Un micro-entrepreneur en franchise de TVA est-il concerné ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le micro-entrepreneur en franchise en base reste un assujetti à la TVA au sens de la réglementation, même s'il n'en est pas redevable. Il entre donc dans le champ de la réforme : en réception dès le 1er septembre 2026, et en émission au 1er septembre 2027."
          }
        },
        {
          "@type": "Question",
          "name": "Le portail public de facturation gratuit existe-t-il toujours ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, pas comme plateforme d'échange généraliste. Par communiqué du 15 octobre 2024, l'État a abandonné le développement du portail public de facturation comme plateforme gratuite. Il ne subsiste que l'annuaire central et le concentrateur de données. Chaque entreprise doit désormais choisir une plateforme agréée, c'est-à-dire une solution privée immatriculée par l'administration fiscale."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence entre une facture électronique et un PDF envoyé par email ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un simple PDF envoyé par email n'est pas une facture électronique au sens de la réforme. Une facture électronique comporte un socle minimal de données structurées et lisibles par une machine, dans un format normé (Factur-X, UBL ou CII), et transite par une plateforme agréée qui transmet aussi les données à l'administration fiscale."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sanctions en cas de non-respect ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'article 1737 du Code général des impôts prévoit une amende par facture non émise sous forme électronique, plafonnée à 15 000 € par année civile. Ce montant, fixé à 15 € à l'origine, a été relevé à 50 € par facture par la loi de finances pour 2026 selon les sources spécialisées. Des sanctions distinctes s'appliquent au e-reporting et au défaut de désignation d'une plateforme de réception."
          }
        },
        {
          "@type": "Question",
          "name": "Pourquoi l'État met-il en place la facturation électronique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'objectif est double : lutter contre la fraude à la TVA, en donnant à l'administration une vision plus fine et plus rapide des transactions entre entreprises, et simplifier les obligations déclaratives, notamment en pré-remplissant à terme les déclarations de TVA. La réforme vise donc à la fois un meilleur contrôle et une réduction de la charge administrative."
          }
        },
        {
          "@type": "Question",
          "name": "La France est-elle la seule à imposer la facture électronique en Europe ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La démarche française s'inscrit dans le cadre européen ViDA (VAT in the Digital Age), adopté le 11 mars 2025. Depuis son entrée en vigueur, un État membre peut imposer la facturation électronique sur son territoire sans dérogation préalable de la Commission européenne, à condition de respecter la norme européenne EN 16931. Plusieurs pays, dont l'Italie, ont engagé des réformes comparables."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que la norme EN 16931 et le format Factur-X ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La norme EN 16931 est la norme européenne qui définit le modèle de données d'une facture électronique et les formats admis. Le Factur-X est un format hybride associant un PDF lisible par l'humain et des données structurées lisibles par une machine ; les formats UBL et CII sont purement structurés. Tous trois sont conformes à la norme EN 16931 et acceptés par la réforme française."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Facturation électronique 2026" }
      ]
    }
  ]
}

export default function ArticleFacturationElectronique2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Facturation électronique 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FISCALITÉ</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ENTREPRISES</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 20 janvier 2026  ·  Mis à jour le 23 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 15 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-2026.webp"
                alt="Facturation électronique obligatoire en 2026 : ce qui change pour toutes les entreprises"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#definition" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Qu'est-ce qu'une facture électronique</a></li>
                <li><a href="#cadre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le cadre légal de la réforme</a></li>
                <li><a href="#calendrier" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le calendrier officiel 2026-2027</a></li>
                <li><a href="#plateforme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. La fin du portail gratuit et la plateforme agréée</a></li>
                <li><a href="#mentions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Les nouvelles mentions obligatoires</a></li>
                <li><a href="#sanctions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Les sanctions encourues</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Trois situations concrètes</a></li>
                <li><a href="#europe" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Une réforme française dans un cadre européen</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La facturation électronique entre entreprises devient une obligation en France à compter du <strong>1er septembre 2026</strong>. Présentée comme une simple modernisation administrative, elle constitue en réalité l'un des changements de gestion les plus structurants de la décennie pour les professionnels. Plus de dix millions d'acteurs économiques sont concernés, des plus grands groupes jusqu'au micro-entrepreneur, sans exception dès lors qu'ils sont assujettis à la TVA.</p>
                <p style={{marginBottom: '1rem'}}>La réforme a connu plusieurs reports depuis 2021, ce qui a entretenu un certain flou. Le calendrier est aujourd'hui stabilisé, l'hypothèse d'un nouveau glissement a été écartée, et un changement majeur est intervenu en cours de route : l'abandon de la solution publique gratuite. Cet article fait le point, de façon complète et vérifiée, sur ce que dit le droit, sur les échéances réelles et sur ce que chaque entreprise doit anticiper.</p>
                <p style={{marginBottom: '1rem'}}>Pourquoi cette réforme ? L'objectif affiché par les pouvoirs publics est double. Il s'agit d'une part de <strong>lutter contre la fraude à la TVA</strong>, en donnant à l'administration une vision plus fine et plus rapide des transactions entre entreprises. Il s'agit d'autre part de <strong>simplifier la gestion des entreprises</strong>, en automatisant la saisie, en réduisant les erreurs et, à terme, en pré-remplissant les déclarations de TVA. Ce double objectif explique pourquoi la réforme dépasse la seule dématérialisation des documents : c'est toute la chaîne de facturation et de déclaration qui se réorganise.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> toutes les entreprises assujetties à la TVA doivent pouvoir <strong>recevoir</strong> une facture électronique dès le 1er septembre 2026, et toutes devront aussi en <strong>émettre</strong>, en 2026 pour les grandes structures et les ETI, en 2027 pour les autres, en passant par une plateforme agréée.
                  </p>
                </div>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Mise à jour de juin 2026.</strong> À l'approche de l'échéance, la réforme est entrée dans sa phase opérationnelle. Son calendrier a été confirmé au plus haut niveau, sans report : lors de la Journée de la facturation électronique du 6 mai 2026, la direction générale des finances publiques et l'Agence pour l'informatique financière de l'État ont écarté tout nouveau décalage. Une phase pilote nationale est par ailleurs opérationnelle depuis le 27 février 2026, de vraies factures y étant échangées en conditions réelles. Le nombre de plateformes immatriculées a dépassé 150 au printemps 2026, contre une centaine en janvier. Pour vous accompagner, l'administration a ouvert un numéro national d'assistance, le 0 806 807 807, et publié une page « Je passe à la facturation électronique » ainsi qu'une FAQ dédiée sur impots.gouv.fr.
                  </p>
                </div>
              </section>

              <section id="definition">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Qu'est-ce qu'une facture électronique, juridiquement
                </h2>
                <p style={{marginBottom: '1rem'}}>Première idée reçue à écarter : un fichier PDF envoyé en pièce jointe d'un email <strong>n'est pas</strong> une facture électronique au sens de la réforme. La facture électronique, définie à l'<strong>article 289 bis du Code général des impôts</strong>, comporte un socle minimal de données structurées, c'est-à-dire lisibles et exploitables automatiquement par un logiciel, dans un format normé.</p>
                <p style={{marginBottom: '1rem'}}>Trois formats sont admis : le <strong>Factur-X</strong>, format hybride associant un PDF lisible par l'humain et des données structurées, ainsi que les formats <strong>UBL</strong> et <strong>CII</strong>, purement structurés. Au-delà du format, la logique change : la facture ne circule plus librement d'une boîte mail à l'autre, elle <strong>transite par une plateforme</strong> qui l'achemine au destinataire et transmet en parallèle les données utiles à l'administration fiscale.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Deux obligations distinctes.</strong> Il faut bien séparer l'<strong>e-invoicing</strong>, l'échange de factures électroniques entre entreprises françaises assujetties à la TVA (relations dites B2B domestiques), et l'<strong>e-reporting</strong>, la transmission à l'administration des données de certaines transactions non couvertes par la facture électronique, comme les ventes aux particuliers ou à l'international. Le e-reporting est encadré par l'article 290 du Code général des impôts.
                  </p>
                </div>
              </section>

              <section id="cadre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le cadre légal : un empilement de textes
                </h2>
                <p style={{marginBottom: '1rem'}}>La réforme ne repose pas sur un texte unique mais sur une succession de normes, ce qui explique en partie sa complexité. Le point de départ est l'<strong>ordonnance n° 2021-1190 du 15 septembre 2021</strong>, acte fondateur qui pose le principe de la généralisation de la facturation électronique entre assujettis à la TVA et qui crée notamment l'article 289 bis du Code général des impôts.</p>
                <p style={{marginBottom: '1rem'}}>Le calendrier initial, prévu dès 2024, a été modifié par l'<strong>article 26 de la loi de finances rectificative pour 2022</strong> (loi n° 2022-1157 du 16 août 2022), puis gravé dans sa forme actuelle par l'<strong>article 91 de la loi de finances pour 2024</strong> (loi n° 2023-1322 du 29 décembre 2023). Les modalités techniques, formats, annuaire et règles relatives aux plateformes, ont été précisées par le <strong>décret n° 2022-1299 du 7 octobre 2022</strong> puis ajustées par le <strong>décret n° 2024-266 du 25 mars 2024</strong>.</p>
                <p style={{marginBottom: '1rem'}}>L'ensemble est codifié au Code général des impôts, aux articles 289 et 289 bis pour la facture électronique et à l'article 290 pour la transmission des données. C'est cette codification qui rend les manquements directement sanctionnables par l'administration fiscale, sujet sur lequel nous revenons plus loin.</p>
                <p style={{marginBottom: '1rem'}}>À cet empilement s'ajoute une évolution plus récente, d'ordre architectural : la recodification des règles de TVA au sein du <strong>Code des impositions sur les biens et services (CIBS)</strong>, opérée par l'<strong>ordonnance n° 2025-1247 du 17 décembre 2025</strong>. Plusieurs dispositions du Code général des impôts relatives à la TVA migrent ainsi vers ce nouveau code, avec une entrée en vigueur prévue au 1er septembre 2026, soit la date même du démarrage de la réforme. Pour les entreprises, le fond des obligations ne change pas, mais certaines références d'articles évoluent, ce à quoi il faudra être attentif sur les modèles de factures.</p>
              </section>

              <section id="calendrier">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le calendrier officiel 2026-2027
                </h2>
                <p style={{marginBottom: '1rem'}}>La réforme distingue deux obligations qui ne partagent pas la même échéance, et c'est le point que beaucoup d'entreprises manquent. L'obligation de <strong>réception</strong> est universelle et immédiate : dès le 1er septembre 2026, toute entreprise assujettie à la TVA, quelle que soit sa taille, doit être techniquement capable de recevoir une facture électronique. L'obligation d'<strong>émission</strong>, elle, est progressive et dépend de la taille de l'entreprise.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Taille de l'entreprise</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Réception</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Émission et e-reporting</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Grandes entreprises et ETI", "1er sept. 2026", "1er sept. 2026"],
                        ["PME", "1er sept. 2026", "1er sept. 2027"],
                        ["TPE et micro-entreprises", "1er sept. 2026", "1er sept. 2027"],
                      ].map(([t, r, e], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{t}</td>
                          <td style={{padding: '10px 12px', textAlign: 'center', color: '#0f2d6e', fontWeight: '600'}}>{r}</td>
                          <td style={{padding: '10px 12px', textAlign: 'center', color: '#0f2d6e', fontWeight: '600'}}>{e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Les catégories d'entreprises mentionnées sont celles définies pour l'application de l'<strong>article 51 de la loi de modernisation de l'économie du 4 août 2008</strong>, l'appartenance à une catégorie s'appréciant au niveau de chaque personne juridique. Un débat parlementaire avait envisagé un nouveau report vers 2027-2028 : il a été écarté, et le calendrier ci-dessus est aujourd'hui confirmé.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le piège du délai d'émission.</strong> Même si votre obligation d'émettre n'arrive qu'en 2027, vos fournisseurs et clients grandes entreprises ou ETI basculeront dès 2026. Vous recevrez donc des factures électroniques dès septembre 2026 et devrez être prêt à les traiter. Attendre 2027 pour s'équiper, c'est déjà être en retard.
                  </p>
                </div>
              </section>

              <section id="plateforme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. La fin du portail gratuit et l'obligation de plateforme agréée
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le changement le plus lourd de conséquences, et le moins connu. Le projet initial prévoyait une solution publique gratuite, le portail public de facturation, par laquelle toute entreprise aurait pu émettre et recevoir gratuitement ses factures. Par <strong>communiqué du 15 octobre 2024</strong>, l'État a annoncé l'arrêt de ce développement. Le portail public ne joue plus le rôle de plateforme généraliste : il ne conserve que deux fonctions, l'annuaire central des destinataires et le concentrateur des données vers l'administration fiscale.</p>
                <p style={{marginBottom: '1rem'}}>La conséquence est directe et concrète : <strong>aucune option gratuite de l'État n'existe</strong>. Chaque entreprise doit contractualiser avec une <strong>plateforme agréée</strong>, immatriculée par la direction générale des finances publiques. Cette terminologie a d'ailleurs évolué : on parlait auparavant de plateforme de dématérialisation partenaire, ou PDP, désormais remplacée par l'appellation officielle de plateforme agréée. La première liste officielle des plateformes immatriculées a été publiée le <strong>16 janvier 2026</strong> et recensait une centaine d'opérateurs ; leur nombre n'a cessé d'augmenter depuis, dépassant 150 au printemps 2026. Seule la liste tenue à jour par l'administration sur impots.gouv.fr fait foi.</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, vous avez deux options : souscrire directement auprès d'une plateforme agréée, ou continuer d'utiliser votre logiciel de facturation habituel à condition qu'il soit lui-même connecté à une plateforme agréée. Le choix se fait selon la compatibilité avec vos outils, les fonctionnalités proposées (émission, réception, e-reporting, archivage), le niveau d'accompagnement et le coût.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Vigilance arnaques.</strong> Toute réforme d'ampleur attire les fraudeurs. Méfiez-vous des courriers ou emails vous pressant de payer en urgence une prétendue inscription obligatoire. Le sujet rejoint celui des fausses sollicitations qui ciblent les entreprises, que nous avons traité dans notre article sur <a href="/blog/arnaque-au-registre-des-societes-europeennes-ne-laissez-pas-les-fraudeurs-saboter-votre-lancement" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>l'arnaque au registre des sociétés européennes</a>.
                  </p>
                </div>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>LE CABINET S'EN CHARGE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Choisir sa plateforme et se mettre en conformité</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Il n'existe aucune option gratuite de l'État : chaque entreprise doit contractualiser avec une plateforme agréée et mettre ses factures à jour. Le cabinet vous aide à cadrer le choix, à mettre vos documents en conformité, et à coordonner l'opération avec votre expert-comptable.</p>
                  <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Être accompagné →</a>
                </div>
              </section>

              <section id="mentions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Les nouvelles mentions obligatoires
                </h2>
                <p style={{marginBottom: '1rem'}}>La réforme modifie le mode de transmission des factures, mais elle ajoute aussi des informations à y faire figurer. À compter du 1er septembre 2026, quatre nouvelles mentions s'ajoutent à celles déjà exigées, conformément à l'article 242 nonies A de l'annexe II au Code général des impôts :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Le <strong>numéro SIREN du client</strong>, afin d'identifier sans ambiguïté le destinataire dans l'annuaire</li>
                  <li>L'<strong>adresse de livraison des biens</strong>, lorsqu'elle est différente de l'adresse de facturation</li>
                  <li>La <strong>catégorie de l'opération</strong> : livraison de biens, prestation de services, ou les deux à la fois</li>
                  <li>La mention de l'<strong>option pour le paiement de la TVA d'après les débits</strong>, lorsque le prestataire l'a retenue</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ces mentions s'ajoutent aux obligations classiques, qui demeurent inchangées. Les factures, qu'elles soient électroniques ou non, doivent toujours être <strong>conservées pendant dix ans</strong> au titre de leur qualité de pièces comptables.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Facture conforme, nouvelles mentions 2026</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Une facture à jour au 1er septembre 2026 : numéro SIREN du client, adresse de livraison, catégorie d'opération, option TVA sur les débits, en plus des mentions classiques. Prête à dupliquer.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-mentions-facture-electronique" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-mise-en-conformite-facturation" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Mise en conformité facturation</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>CGV à jour pour la facturation électronique</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Des conditions générales de vente claires, qui intègrent le nouveau cadre (mentions, délais, plateforme) et s'adaptent à votre activité.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-cgv-conformes-facturation-electronique" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-mise-en-conformite-facturation" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Mise en conformité facturation</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Mise en conformité facturation</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Tout pour aborder la réforme sereinement, réuni et à prix groupé : facture aux nouvelles mentions, CGV à jour, mentions avec et sans TVA, option pour la TVA, et check-list de choix de plateforme.</p>
                  <a href="/catalogue/pack-mise-en-conformite-facturation" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack →</a>
                </div>
              </section>

              <section id="sanctions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Les sanctions encourues
                </h2>
                <p style={{marginBottom: '1rem'}}>Parce que les obligations sont codifiées, leur non-respect est directement sanctionnable. L'<strong>article 1737 du Code général des impôts</strong> prévoit une amende par facture non émise sous forme électronique, plafonnée à <strong>15&nbsp;000&nbsp;€ par année civile</strong>. Le montant unitaire, fixé à 15&nbsp;€ dans le texte d'origine, a été relevé à <strong>50&nbsp;€ par facture</strong> par la loi de finances pour 2026, d'après les commentaires des spécialistes de la réforme.</p>
                <p style={{marginBottom: '1rem'}}>Les autres manquements suivent la même logique. Le défaut de transmission au titre du e-reporting est sanctionné par une amende par transmission omise, également plafonnée par année civile. Enfin, l'entreprise qui n'a pas désigné de plateforme de réception fait l'objet d'une mise en demeure assortie d'un délai de régularisation, puis d'une amende si elle ne se met pas en conformité.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Un point de droit à retenir.</strong> L'obligation légale pèse sur l'entreprise elle-même, pas sur son cabinet ni sur son prestataire comptable. Ces derniers peuvent vous guider, mais l'enrôlement auprès d'une plateforme et la conformité de vos factures restent de votre responsabilité.
                  </p>
                </div>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Trois situations concrètes
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour rendre la réforme tangible, voici trois cas représentatifs de ce que vivront les professionnels.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>Le commerçant en société.</strong> Une SARL reçoit, dès septembre 2026, ses factures d'électricité et de télécommunications au format électronique, parce que ses fournisseurs sont de grandes entreprises. Elle doit donc avoir choisi sa plateforme de réception avant cette date, même si elle ne devra émettre ses propres factures électroniques qu'en 2027.</li>
                  <li><strong>L'indépendant en franchise de TVA.</strong> Un consultant en micro-entreprise, sous franchise en base, pense être hors du dispositif puisqu'il ne facture pas de TVA. C'est une erreur fréquente : il reste assujetti, donc concerné, en réception dès 2026 et en émission en 2027.</li>
                  <li><strong>La PME prestataire.</strong> Une PME de services anticipe en 2026 le choix de sa plateforme agréée, vérifie la compatibilité avec son logiciel de devis et de facturation, et met à jour ses modèles de factures pour intégrer les nouvelles mentions obligatoires, afin d'être prête bien avant l'échéance d'émission de 2027.</li>
                </ul>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Besoin d'y voir clair pour votre structure ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet vous aide à identifier vos échéances, à mettre vos documents en conformité et à sécuriser vos formalités. Un guide pratique dédié aux micro-entreprises, TPE et PME complète cet article.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Le guide micro, TPE et PME</a>
                  </div>
                </div>
              </section>

              <section id="europe">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Une réforme française dans un cadre européen
                </h2>
                <p style={{marginBottom: '1rem'}}>La réforme française n'est pas un cas isolé : elle s'inscrit dans un mouvement européen de fond. Le 11 mars 2025, le Conseil de l'Union européenne a adopté le paquet législatif <strong>ViDA</strong> (pour <em>VAT in the Digital Age</em>, la TVA à l'ère du numérique), entré en vigueur le 14 avril 2025. Son ambition est de moderniser le système commun de TVA et de l'adapter à l'économie numérique.</p>
                <p style={{marginBottom: '1rem'}}>Deux apports de ViDA éclairent directement le calendrier français. D'abord, depuis son entrée en vigueur, un État membre peut <strong>imposer la facturation électronique sur son territoire sans demander de dérogation préalable à la Commission européenne</strong>. C'est ce qui sécurise juridiquement la démarche engagée par la France, comme par l'Italie avant elle. En contrepartie, et c'est le second apport, les systèmes nationaux doivent être <strong>conformes à la norme sémantique européenne EN 16931</strong>, celle-là même à laquelle répondent les formats Factur-X, UBL et CII. C'est la raison pour laquelle ces formats, et non d'autres, ont été retenus en France.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'enjeu chiffré.</strong> La Commission européenne évalue l'écart de TVA, c'est-à-dire la différence entre les recettes théoriques et celles réellement perçues, à 93&nbsp;milliards d'euros pour la seule année 2020, dont près de la moitié imputable à la fraude sur les opérations intracommunautaires. À l'échelle de l'Union, le passage à la facture électronique est attendu pour réduire la fraude à la TVA de plusieurs milliards d'euros par an et alléger d'autant les coûts administratifs des entreprises.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>ViDA prévoit par ailleurs, à compter du 1er juillet 2030, une obligation de facture électronique structurée et de transmission de données quasi en temps réel pour les <strong>opérations transfrontalières entre entreprises</strong> au sein de l'Union. La réforme française, centrée sur les opérations domestiques, et le volet européen, centré sur les flux transfrontaliers, sont donc appelés à se compléter dans les années qui viennent. Sur le plan technique, la France a retenu un modèle dit <strong>à cinq coins</strong>, associant l'émetteur, le destinataire, leurs plateformes respectives et le portail public dans son rôle de concentrateur de données.</p>
                <p style={{marginBottom: '1rem'}}>Pour les conséquences pratiques selon votre statut, et notamment si vous êtes une petite structure, nous renvoyons à notre <a href="/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>guide dédié aux micro-entreprises, TPE et PME</a>.</p>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La facturation électronique n'est ni un report de plus ni une formalité lointaine. La première échéance, la réception, concerne <strong>toutes les entreprises dès le 1er septembre 2026</strong>, et elle suppose d'avoir choisi une plateforme agréée, puisque la solution publique gratuite a été abandonnée. L'émission suit, en 2026 pour les grandes structures, en 2027 pour les autres, avec de nouvelles mentions à intégrer et des sanctions désormais bien réelles.</p>
                <p style={{marginBottom: '1rem'}}>La bonne nouvelle est que cette transition, anticipée, se traduit aussi par un gain de temps durable : suivi des factures facilité, réduction des délais de paiement, comptabilité mieux alimentée. La clé est de ne pas attendre la dernière échéance. Choisir sa plateforme, vérifier la compatibilité de ses outils et mettre ses modèles à jour sont des actions à mener dès maintenant.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source. Les références ci-dessous permettent à chacun de les consulter directement.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Ordonnance n° 2021-1190 du 15 septembre 2021 relative à la généralisation de la facturation électronique (Légifrance)</li>
                  <li>Code général des impôts, articles 289, 289 bis et 290 (facturation électronique et transmission des données)</li>
                  <li>Code général des impôts, article 1737 (sanctions) et article 242 nonies A de l'annexe II (mentions obligatoires)</li>
                  <li>Loi n° 2022-1157 du 16 août 2022 de finances rectificative pour 2022, article 26</li>
                  <li>Loi n° 2023-1322 du 29 décembre 2023 de finances pour 2024, article 91 (calendrier)</li>
                  <li>Décret n° 2022-1299 du 7 octobre 2022 et décret n° 2024-266 du 25 mars 2024 (modalités d'application)</li>
                  <li>Article 51 de la loi n° 2008-776 du 4 août 2008 de modernisation de l'économie (catégories d'entreprises)</li>
                  <li>Communiqué de presse du ministère de l'Économie du 15 octobre 2024 (évolution du portail public de facturation)</li>
                  <li>Ordonnance n° 2025-1247 du 17 décembre 2025 (recodification de la TVA au sein du Code des impositions sur les biens et services)</li>
                  <li>Paquet « VAT in the Digital Age » (ViDA), adopté par le Conseil de l'Union européenne le 11 mars 2025 (Commission européenne, fiscalité et union douanière)</li>
                  <li>Norme européenne EN 16931 (modèle de données de la facture électronique) et directive 2014/55/UE du 16 avril 2014</li>
                  <li>Direction générale des finances publiques : page « Je passe à la facturation électronique » et FAQ destinée aux PME et micro-entreprises sur impots.gouv.fr, et numéro national d'assistance 0 806 807 807</li>
                  <li>Portail officiel : <a href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a> et la liste des plateformes agréées sur <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>impots.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de mise à jour indiquée ; le calendrier et les montants relevant de la loi de finances peuvent évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>À partir de quand la facturation électronique est-elle obligatoire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La réception devient obligatoire pour toutes les entreprises assujetties à la TVA dès le 1er septembre 2026. L'émission s'applique au 1er septembre 2026 pour les grandes entreprises et les ETI, et au 1er septembre 2027 pour les PME, les TPE et les micro-entreprises.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un micro-entrepreneur en franchise de TVA est-il concerné ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le micro-entrepreneur en franchise en base reste assujetti à la TVA au sens de la réglementation, même s'il n'en est pas redevable. Il entre donc dans le champ de la réforme, en réception dès le 1er septembre 2026 et en émission au 1er septembre 2027.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le portail public gratuit existe-t-il toujours ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, pas comme plateforme d'échange. Par communiqué du 15 octobre 2024, l'État a abandonné le portail public de facturation comme solution gratuite. Il ne subsiste que l'annuaire central et le concentrateur de données. Chaque entreprise doit choisir une plateforme agréée, c'est-à-dire une solution privée immatriculée par l'administration fiscale.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un PDF envoyé par email suffit-il ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Un simple PDF n'est pas une facture électronique au sens de la réforme. Celle-ci suppose un format structuré normé (Factur-X, UBL ou CII) et une transmission par une plateforme agréée, qui achemine la facture et communique les données à l'administration fiscale.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles sanctions en cas de non-respect ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'article 1737 du Code général des impôts prévoit une amende par facture non émise sous forme électronique, plafonnée à 15&nbsp;000&nbsp;€ par année civile. Ce montant, fixé à 15&nbsp;€ à l'origine, a été relevé à 50&nbsp;€ par facture par la loi de finances pour 2026 selon les sources spécialisées. Des sanctions distinctes visent le e-reporting et le défaut de désignation d'une plateforme de réception.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Pourquoi l'État met-il en place la facturation électronique ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'objectif est double : lutter contre la fraude à la TVA, en donnant à l'administration une vision plus fine et plus rapide des transactions entre entreprises, et simplifier les obligations déclaratives, notamment en pré-remplissant à terme les déclarations de TVA. La réforme vise à la fois un meilleur contrôle et une réduction de la charge administrative.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La France est-elle la seule à imposer la facture électronique en Europe ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La démarche française s'inscrit dans le cadre européen ViDA (VAT in the Digital Age), adopté le 11 mars 2025. Depuis son entrée en vigueur, un État membre peut imposer la facturation électronique sur son territoire sans dérogation préalable de la Commission européenne, à condition de respecter la norme européenne EN 16931. Plusieurs pays, dont l'Italie, ont engagé des réformes comparables.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la norme EN 16931 et le format Factur-X ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La norme EN 16931 est la norme européenne qui définit le modèle de données d'une facture électronique et les formats admis. Le Factur-X est un format hybride associant un PDF lisible par l'humain et des données structurées lisibles par une machine ; les formats UBL et CII sont purement structurés. Tous trois sont conformes à la norme EN 16931 et acceptés par la réforme française.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Mettre ses documents en conformité</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles de CGV, de factures et de mentions obligatoires à jour, à télécharger dans la Docuthèque.</p>
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
                <span key="Facturation électronique" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Facturation électronique</span>
                <span key="Plateforme agréée" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Plateforme agréée</span>
                <span key="TVA" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>TVA</span>
                <span key="e-reporting" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>e-reporting</span>
                <span key="Entreprises" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Entreprises</span>
                <span key="2026" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>2026</span>
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
