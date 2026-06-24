import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ? · Blog Cabinet Cholez-Pagotto`,
  description: `Près de 15\u00a0000 entités concernées en France, deux catégories, des obligations strictes et de lourdes sanctions : le point complet et vérifié sur la directive NIS2 et l'état de sa transposition par la loi Résilience.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/directive-nis2-cybersecurite-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/directive-nis2-cybersecurite-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ?",
      "description": "Près de 15 000 entités concernées en France, deux catégories, des obligations strictes et de lourdes sanctions : le point complet et vérifié sur la directive NIS2 et l'état de sa transposition par la loi Résilience.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/directive-nis2-cybersecurite-2026.webp",
      "datePublished": "2026-03-24",
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
      "url": "https://cholez-pagotto.fr/blog/directive-nis2-cybersecurite-2026-mon-entreprise-est-elle-concernee",
      "keywords": ["NIS2", "Cybersécurité", "Loi Résilience", "ANSSI", "Entités essentielles", "Entités importantes", "Directive UE 2022/2555", "Conformité"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Qu'est-ce que la directive NIS2 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NIS2 est la directive européenne (UE) 2022/2555 du 14 décembre 2022, qui remplace la première directive NIS de 2016. Elle vise à assurer un niveau élevé et commun de cybersécurité dans toute l'Union européenne, en imposant à un grand nombre d'organisations des mesures de gestion des risques, des obligations de notification d'incidents et une supervision renforcée."
          }
        },
        {
          "@type": "Question",
          "name": "Mon entreprise est-elle concernée par NIS2 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NIS2 concerne les entités d'une certaine taille (en principe au moins 50 salariés ou plus de 10 millions d'euros de chiffre d'affaires) exerçant dans l'un des 18 secteurs visés, classées en entités essentielles ou importantes. Les très petites entreprises ne sont généralement pas concernées directement, mais elles peuvent l'être indirectement, car leurs clients soumis à NIS2 leur demanderont des garanties de sécurité au titre de la chaîne d'approvisionnement."
          }
        },
        {
          "@type": "Question",
          "name": "NIS2 est-elle déjà applicable en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas encore pleinement. La directive devait être transposée au plus tard le 17 octobre 2024, mais la France a pris du retard. La loi de transposition, dite loi Résilience, a été adoptée par le Sénat en mars 2025 et examinée en commission à l'Assemblée nationale en septembre 2025, sans être encore promulguée à ce jour. L'ANSSI recommande malgré tout de ne pas attendre pour engager sa mise en conformité."
          }
        },
        {
          "@type": "Question",
          "name": "Qui contrôle l'application de NIS2 en France ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'autorité compétente est l'Agence nationale de la sécurité des systèmes d'information (ANSSI). Elle tiendra le registre des entités régulées, définira le référentiel de sécurité et exercera le contrôle. Elle met déjà à disposition la plateforme MonEspaceNIS2, dont le pré-enregistrement est ouvert depuis novembre 2025, et un référentiel opérationnel, le ReCyF, publié le 17 mars 2026."
          }
        },
        {
          "@type": "Question",
          "name": "Quels sont les délais de notification d'un incident ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La notification est graduée : une alerte précoce dans les 24 heures suivant la connaissance d'un incident significatif, une notification plus complète sous 72 heures, puis un rapport final dans un délai d'un mois. La déclaration se fait auprès de l'ANSSI, et la responsabilité de cette déclaration ne peut être transférée à un prestataire technique."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sanctions en cas de manquement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La directive prévoit des amendes pouvant atteindre, pour les entités essentielles, 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial, et pour les entités importantes, 7 millions d'euros ou 1,4 % du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu. Des mesures complémentaires sont possibles, comme la suspension de certifications ou l'interdiction temporaire d'exercer des fonctions de direction."
          }
        },
        {
          "@type": "Question",
          "name": "Quel est le lien entre NIS2 et le RGPD ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les deux relèvent d'une même logique de conformité : gouvernance impliquant la direction, analyse des risques, documentation, gestion des incidents et sécurité des données et des systèmes. Une organisation déjà avancée sur le RGPD ou certifiée ISO 27001 dispose d'un socle utile pour NIS2, sans que cela suffise à lui seul. Mutualiser les deux démarches fait gagner du temps."
          }
        },
        {
          "@type": "Question",
          "name": "Par où commencer sans attendre la loi ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commencez par cartographier vos services critiques et vos dépendances, qualifier votre exposition (taille, secteur), désigner un responsable et sensibiliser la direction, puis mettre à niveau vos mesures de sécurité et préparer votre procédure de notification. Le pré-enregistrement sur MonEspaceNIS2 et la lecture du référentiel ReCyF de l'ANSSI sont de bons points de départ."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Directive NIS2" }
      ]
    }
  ]
}

export default function ArticleNIS2Cybersecurite2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Directive NIS2</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONFORMITÉ</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CYBERSÉCURITÉ</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ?</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 24 mars 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 14 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/directive-nis2-cybersecurite-2026.webp"
                alt="Directive NIS2 : votre entreprise est-elle concernée par les nouvelles obligations de cybersécurité ?"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#quoi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. NIS2, qu'est-ce que c'est</a></li>
                <li><a href="#concerne" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Suis-je concerné, et dans quelle catégorie</a></li>
                <li><a href="#transposition" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Où en est la transposition en France</a></li>
                <li><a href="#obligations" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Obligations et sanctions</a></li>
                <li><a href="#rgpd" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. NIS2 et RGPD, une même logique</a></li>
                <li><a href="#commencer" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Par où commencer</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La cybersécurité quitte le terrain des seuls grands opérateurs pour devenir une obligation de masse. Avec la directive <strong>NIS2</strong>, l'Union européenne impose un socle commun de sécurité numérique à un nombre considérable d'organisations. En France, <strong>près de 15&nbsp;000 entités</strong> seraient concernées, réparties dans 18 secteurs d'activité, là où la première directive NIS n'en visait qu'environ 500.</p>
                <p style={{marginBottom: '1rem'}}>La transposition française est entrée dans sa dernière ligne droite, sans être encore achevée. Cet article fait le point, de façon complète et vérifiée, sur ce qu'est NIS2, sur les entités concernées, sur l'état d'avancement du texte français, sur les obligations et les sanctions, et sur les premières actions à mener, même avant l'entrée en vigueur.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> NIS2 concerne principalement les <strong>PME, ETI et collectivités</strong> d'une certaine taille dans 18 secteurs ; les très petites structures ne sont en général pas visées directement, mais peuvent l'être <strong>par effet de chaîne</strong>, et l'autorité française, l'ANSSI, invite à ne pas attendre la loi pour se préparer.
                  </p>
                </div>
              </section>

              <section id="quoi">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. NIS2, qu'est-ce que c'est
                </h2>
                <p style={{marginBottom: '1rem'}}>NIS2 est la <strong>directive (UE) 2022/2555 du 14 décembre 2022</strong>. Elle remplace la première directive NIS, adoptée en 2016, et poursuit un objectif clair : assurer un niveau élevé et commun de cybersécurité dans toute l'Union européenne. La logique a changé de dimension. Là où la première directive ciblait quelques centaines d'opérateurs vitaux, NIS2 vise des milliers d'organisations, parce que les cyberattaques touchent désormais tout le tissu économique.</p>
                <p style={{marginBottom: '1rem'}}>Le périmètre a été profondément élargi, en nombre d'entités comme en nombre de secteurs. La directive classe les organisations en deux catégories, les <strong>entités essentielles</strong> et les <strong>entités importantes</strong>, selon la criticité de leur activité et leur taille, et distingue les secteurs hautement critiques de son annexe I des secteurs critiques de son annexe II.</p>
              </section>

              <section id="concerne">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Suis-je concerné, et dans quelle catégorie
                </h2>
                <p style={{marginBottom: '1rem'}}>La réponse dépend de deux critères combinés : votre <strong>secteur d'activité</strong> et votre <strong>taille</strong>. En principe, sont concernées les entités à partir d'une taille moyenne, c'est-à-dire au moins 50 salariés ou plus de 10 millions d'euros de chiffre d'affaires, exerçant dans l'un des 18 secteurs visés.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Catégorie</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Profil type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Entités essentielles (EE)", "Secteurs hautement critiques et entités de grande taille, soumises aux exigences les plus strictes"],
                        ["Entités importantes (EI)", "Secteurs critiques ou entités de taille moyenne, soumises à des exigences allégées par rapport aux EE"],
                      ].map(([c, p], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{c}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Les 18 secteurs couvrent un champ très large : énergie, transports, banque et marchés financiers, santé, eau potable et eaux usées, infrastructures et services numériques, administration publique et espace pour les plus critiques ; services postaux, gestion des déchets, produits chimiques, agro-alimentaire, industrie manufacturière, fournisseurs de services numériques et recherche pour les autres. La France a par ailleurs fait le choix d'aller au-delà du minimum européen en incluant de nombreuses <strong>collectivités territoriales</strong>, avec un seuil abaissé.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Et si je suis une petite structure ?</strong> Une micro-entreprise ou une TPE n'est, en règle générale, pas directement soumise à NIS2. Mais attention à l'<strong>effet de chaîne</strong> : si vous êtes prestataire ou fournisseur d'une entité concernée, celle-ci devra sécuriser sa chaîne d'approvisionnement et vous demandera des garanties de cybersécurité. Être au clair sur vos pratiques devient alors un argument commercial, parfois une condition pour travailler avec ces clients.
                  </p>
                </div>
              </section>

              <section id="transposition">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Où en est la transposition en France
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est un point essentiel, car il conditionne l'exigibilité des obligations. La directive devait être transposée par les États membres au plus tard le <strong>17 octobre 2024</strong>. La France n'a pas tenu ce délai, ce qui lui a valu un rappel à l'ordre de la Commission européenne, sous la forme d'un avis motivé adressé en mai 2025.</p>
                <p style={{marginBottom: '1rem'}}>La transposition prend la forme d'un texte plus large, le <strong>projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité</strong>, dit « loi Résilience », qui transpose simultanément trois directives européennes : NIS2, la directive sur la résilience des entités critiques et le règlement DORA pour le secteur financier. Présenté en Conseil des ministres le 15 octobre 2024, ce texte a été <strong>adopté en première lecture par le Sénat en mars 2025</strong>, puis examiné par une commission spéciale de l'<strong>Assemblée nationale en septembre 2025</strong>. À ce stade, il n'est <strong>pas encore promulgué</strong>, son passage en séance publique ayant été repoussé.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ce que fait déjà l'ANSSI.</strong> Sans attendre la loi, l'autorité a ouvert le pré-enregistrement des entités sur sa plateforme <strong>MonEspaceNIS2</strong> depuis novembre 2025, et publié le <strong>17 mars 2026</strong> un référentiel opérationnel, le <strong>ReCyF</strong> (Référentiel Cyber France), qui traduit les principes de la directive en objectifs de sécurité concrets. Ce sont des outils précieux pour se préparer dès maintenant.
                  </p>
                </div>
              </section>

              <section id="obligations">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Obligations et sanctions
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les entités concernées, NIS2 impose une approche continue de gestion du risque, et non plus des actions ponctuelles. Les obligations s'articulent autour de quatre axes.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Des mesures de gestion des risques.</strong> Politique de sécurité, gestion des incidents, continuité d'activité et reprise après sinistre, sécurité de la chaîne d'approvisionnement, contrôle d'accès et authentification renforcée, chiffrement, entre autres.</li>
                  <li><strong>La notification des incidents.</strong> Selon une procédure graduée : une alerte précoce sous <strong>24 heures</strong>, une notification plus complète sous <strong>72 heures</strong>, puis un <strong>rapport final sous un mois</strong>, auprès de l'ANSSI. La responsabilité de cette déclaration ne peut être transférée à un prestataire technique.</li>
                  <li><strong>L'implication de la direction.</strong> Les dirigeants doivent approuver et superviser les mesures de cybersécurité, et se former. Leur responsabilité est renforcée : la gouvernance cyber devient un sujet de direction, pas seulement un sujet technique.</li>
                  <li><strong>L'enregistrement</strong> auprès de l'ANSSI, qui tiendra le registre des entités régulées.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Les sanctions sont à la hauteur de l'enjeu. La directive prévoit des amendes pouvant atteindre, pour les <strong>entités essentielles</strong>, <strong>10 millions d'euros ou 2&nbsp;% du chiffre d'affaires annuel mondial</strong>, et pour les <strong>entités importantes</strong>, <strong>7 millions d'euros ou 1,4&nbsp;% du chiffre d'affaires annuel mondial</strong>, le montant le plus élevé étant retenu. S'y ajoutent des mesures complémentaires possibles, comme la suspension de certifications ou l'interdiction temporaire d'exercer des fonctions de direction.</p>
              </section>

              <section id="rgpd">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. NIS2 et RGPD, une même logique de conformité
                </h2>
                <p style={{marginBottom: '1rem'}}>Si vous avez déjà engagé une démarche RGPD, NIS2 vous paraîtra familier. Les deux textes partagent une même logique : une <strong>gouvernance impliquant la direction</strong>, une <strong>analyse des risques</strong>, de la <strong>documentation</strong>, une <strong>gestion des incidents</strong> et la protection des données et des systèmes. Une organisation avancée sur le RGPD, ou certifiée selon une norme reconnue de sécurité de l'information, dispose d'un socle utile pour NIS2, même si ce socle ne suffit pas à lui seul, notamment sur les délais stricts de notification et la sécurité de la chaîne d'approvisionnement.</p>
                <p style={{marginBottom: '1rem'}}>L'intérêt est donc de <strong>mutualiser les deux démarches</strong> plutôt que de les mener en silos. C'est précisément l'approche que le cabinet propose à travers son <a href="/rgpd-conformite" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>accompagnement à la conformité RGPD</a> et son service de <a href="/dpo-externalise" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>délégué à la protection des données externalisé</a>, qui peuvent servir de point d'appui à votre préparation à NIS2.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Savoir si NIS2 vous concerne, et structurer votre conformité</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet vous aide à qualifier votre situation au regard de NIS2, à articuler cette démarche avec votre conformité RGPD, et à mettre en place une organisation documentée. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/rgpd-conformite" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Conformité RGPD et DPO</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="commencer">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Par où commencer
                </h2>
                <p style={{marginBottom: '1rem'}}>Que vous soyez directement concerné ou sollicité par un client qui l'est, voici un déroulé simple pour avancer sans attendre la promulgation.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>1. Cartographiez vos services critiques.</strong> Recensez vos processus, vos systèmes d'information et vos dépendances, notamment vis-à-vis du cloud et de vos prestataires.</li>
                  <li><strong>2. Qualifiez votre exposition.</strong> Croisez votre taille et votre secteur pour déterminer si vous relevez d'une entité essentielle, importante, ou d'aucune des deux.</li>
                  <li><strong>3. Désignez un responsable et impliquez la direction.</strong> La gouvernance est au cœur de NIS2 : un pilote identifié et une direction sensibilisée sont indispensables.</li>
                  <li><strong>4. Mettez à niveau vos mesures.</strong> Appuyez-vous sur le référentiel ReCyF de l'ANSSI pour combler les écarts entre vos pratiques et les objectifs de sécurité attendus.</li>
                  <li><strong>5. Préparez la notification et l'enregistrement.</strong> Mettez en place la procédure 24h, 72h et un mois, et utilisez le pré-enregistrement sur MonEspaceNIS2.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>NIS2 marque un changement d'échelle de la cybersécurité réglementée en France. La transposition n'est pas encore achevée, mais la direction est claire et l'ANSSI invite à ne pas attendre. Pour les entités concernées, l'enjeu est de structurer une démarche continue de gestion du risque ; pour les plus petites structures, c'est l'occasion de soigner des pratiques que leurs clients leur demanderont de plus en plus.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de qualifier sa situation sans tarder, de mutualiser cette préparation avec sa conformité RGPD, et de s'appuyer sur les outils déjà publiés par l'ANSSI. Anticiper, ici, c'est à la fois se conformer et se protéger d'une menace bien réelle.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Directive (UE) 2022/2555 du Parlement européen et du Conseil du 14 décembre 2022 (NIS2), date limite de transposition fixée au 17 octobre 2024</li>
                  <li>Projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité (loi Résilience), transposant NIS2, la directive sur la résilience des entités critiques et le règlement DORA, dossiers législatifs du Sénat et de l'Assemblée nationale</li>
                  <li>Avis motivé de la Commission européenne à la France (mai 2025) pour défaut de transposition dans les délais</li>
                  <li>Agence nationale de la sécurité des systèmes d'information (ANSSI) : portail <a href="https://cyber.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>cyber.gouv.fr</a>, plateforme <a href="https://monespacenis2.cyber.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>MonEspaceNIS2</a> et référentiel ReCyF publié le 17 mars 2026</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; le contenu de la loi de transposition et de ses décrets peut évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que la directive NIS2 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>NIS2 est la directive européenne (UE) 2022/2555 du 14 décembre 2022, qui remplace la première directive NIS de 2016. Elle vise un niveau élevé et commun de cybersécurité dans l'Union, en imposant des mesures de gestion des risques, des obligations de notification d'incidents et une supervision renforcée à un grand nombre d'organisations.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mon entreprise est-elle concernée par NIS2 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>NIS2 concerne en principe les entités à partir d'une taille moyenne (au moins 50 salariés ou plus de 10 millions d'euros de chiffre d'affaires) dans l'un des 18 secteurs visés, classées en entités essentielles ou importantes. Les très petites entreprises ne sont en général pas concernées directement, mais peuvent l'être indirectement via la chaîne d'approvisionnement de leurs clients soumis à NIS2.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>NIS2 est-elle déjà applicable en France ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pas encore pleinement. La directive devait être transposée au plus tard le 17 octobre 2024, mais la France a pris du retard. La loi de transposition, dite loi Résilience, a été adoptée par le Sénat en mars 2025 et examinée en commission à l'Assemblée nationale en septembre 2025, sans être encore promulguée à ce jour. L'ANSSI recommande de ne pas attendre pour engager sa mise en conformité.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qui contrôle l'application de NIS2 en France ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'autorité compétente est l'ANSSI. Elle tiendra le registre des entités régulées, définira le référentiel de sécurité et exercera le contrôle. Elle met déjà à disposition la plateforme MonEspaceNIS2, dont le pré-enregistrement est ouvert depuis novembre 2025, et le référentiel ReCyF, publié le 17 mars 2026.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels sont les délais de notification d'un incident ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La notification est graduée : une alerte précoce sous 24 heures, une notification plus complète sous 72 heures, puis un rapport final sous un mois, auprès de l'ANSSI. La responsabilité de cette déclaration ne peut être transférée à un prestataire technique, même s'il exploite le système concerné.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles sanctions en cas de manquement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La directive prévoit des amendes pouvant atteindre, pour les entités essentielles, 10 millions d'euros ou 2&nbsp;% du chiffre d'affaires annuel mondial, et pour les entités importantes, 7 millions d'euros ou 1,4&nbsp;% du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu. Des mesures complémentaires sont possibles, comme la suspension de certifications ou l'interdiction temporaire d'exercer des fonctions de direction.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le lien entre NIS2 et le RGPD ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les deux relèvent d'une même logique de conformité : gouvernance impliquant la direction, analyse des risques, documentation, gestion des incidents et protection des données et des systèmes. Une organisation avancée sur le RGPD dispose d'un socle utile pour NIS2, sans que cela suffise à lui seul. Mutualiser les deux démarches fait gagner du temps.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Par où commencer sans attendre la loi ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Cartographiez vos services critiques et vos dépendances, qualifiez votre exposition selon votre taille et votre secteur, désignez un responsable et sensibilisez la direction, puis mettez à niveau vos mesures et préparez votre procédure de notification. Le pré-enregistrement sur MonEspaceNIS2 et la lecture du référentiel ReCyF de l'ANSSI sont de bons points de départ.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Conformité RGPD et DPO</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Une même logique que NIS2. Le cabinet vous accompagne dans votre conformité et peut assurer un rôle de délégué à la protection des données externalisé.</p>
              <a href="/rgpd-conformite" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '6px'}}>
                Conformité RGPD →
              </a>
              <a href="/dpo-externalise" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                DPO externalisé →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/loi-de-finances-2026-ce-qui-change-pour-les-tpe-et-les-independants" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Loi de finances 2026 : ce qui change pour les TPE et les indépendants →
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
                <span key="NIS2" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>NIS2</span>
                <span key="Cybersécurité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Cybersécurité</span>
                <span key="Conformité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Conformité</span>
                <span key="ANSSI" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>ANSSI</span>
                <span key="RGPD" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>RGPD</span>
                <span key="Entreprises" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Entreprises</span>
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
