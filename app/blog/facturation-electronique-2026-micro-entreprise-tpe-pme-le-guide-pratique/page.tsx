import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME · Blog Cabinet Cholez-Pagotto`,
  description: `Quelles dates pour mon statut, le piège de la franchise de TVA, B2B contre B2C, comment choisir sa plateforme agréée, quelles mentions ajouter et comment conserver ses factures : le guide d'action complet et vérifié.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-guide-pratique.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-guide-pratique.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME",
      "description": "Quelles dates pour mon statut, le piège de la franchise de TVA, B2B contre B2C, comment choisir sa plateforme agréée, quelles mentions ajouter et comment conserver ses factures : le guide d'action complet et vérifié.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-guide-pratique.webp",
      "datePublished": "2026-01-27",
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
      "url": "https://cholez-pagotto.fr/blog/facturation-electronique-2026-micro-entreprise-tpe-pme-le-guide-pratique",
      "keywords": ["Facturation électronique micro-entreprise", "Facture électronique TPE", "PME", "Plateforme agréée", "Franchise de TVA", "e-reporting", "Auto-entrepreneur", "Conformité 2026"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Je suis en franchise de TVA, suis-je vraiment concerné ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La franchise en base de TVA vous dispense de facturer la TVA, mais vous restez un assujetti au sens de la réglementation. La réforme vise les assujettis, pas seulement les redevables. Vous êtes donc concerné, en réception dès le 1er septembre 2026 et en émission au 1er septembre 2027."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la première chose à faire concrètement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choisir une plateforme agréée pour pouvoir recevoir vos factures, car la réception est obligatoire pour tous dès le 1er septembre 2026. Vous pouvez souscrire directement auprès d'une plateforme immatriculée par l'administration ou vérifier que votre logiciel de facturation est raccordé à l'une d'elles."
          }
        },
        {
          "@type": "Question",
          "name": "Suis-je concerné si je facture uniquement des particuliers ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La facture électronique obligatoire ne vise que les opérations entre entreprises (B2B). Pour vos clients particuliers, vous pourrez continuer d'émettre une facture classique. En revanche, ces ventes relèvent du e-reporting, c'est-à-dire la transmission des données à l'administration, à compter du 1er septembre 2027 pour les micro-entreprises."
          }
        },
        {
          "@type": "Question",
          "name": "Dois-je changer de logiciel de facturation ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pas nécessairement. Si votre logiciel actuel est raccordé à une plateforme agréée, vous pouvez le conserver. Sinon, vous devrez soit en changer, soit souscrire directement à une plateforme agréée. Le point à vérifier est la connexion effective à une plateforme immatriculée."
          }
        },
        {
          "@type": "Question",
          "name": "Le portail public gratuit existe-t-il encore ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, pas comme plateforme d'échange. Le portail public de facturation ne conserve qu'un rôle d'annuaire central et de concentrateur de données. Chaque entreprise doit passer par une plateforme agréée, c'est-à-dire une solution privée immatriculée par l'administration."
          }
        },
        {
          "@type": "Question",
          "name": "Combien cela coûte-t-il pour une petite structure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le coût dépend de la plateforme et des fonctionnalités. Des plateformes agréées proposent des offres gratuites adaptées aux micro-entreprises, et les offres payantes débutent généralement autour de quelques euros par mois. Comparez selon votre volume de factures, la compatibilité avec vos outils et l'accompagnement proposé."
          }
        },
        {
          "@type": "Question",
          "name": "La mention TVA non applicable change-t-elle sur mes factures ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. À la suite de la recodification des règles de TVA dans le Code des impositions sur les biens et services (ordonnance du 17 décembre 2025), la référence évolue au 1er septembre 2026. Jusqu'au 31 août 2026, vous indiquez TVA non applicable, art. 293 B du CGI. À compter du 1er septembre 2026, la référence devient l'article L.223-3 du CIBS. Les deux formulations sont acceptées pendant la transition."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles nouvelles mentions dois-je ajouter à mes factures ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quatre mentions s'ajoutent au 1er septembre 2026 : le numéro SIREN du client, l'adresse de livraison si elle diffère de l'adresse de facturation, la catégorie de l'opération (livraison de biens, prestation de services ou les deux) et, le cas échéant, l'option pour le paiement de la TVA d'après les débits."
          }
        },
        {
          "@type": "Question",
          "name": "Combien de temps dois-je conserver mes factures ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dix ans, au titre de leur qualité de pièces comptables, que les factures soient électroniques ou non. Les plateformes agréées assurent un archivage sécurisé, mais il reste prudent d'exporter une copie de vos factures avant tout changement d'outil."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il si je ne désigne pas de plateforme ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sans plateforme désignée, vous n'êtes pas référencé dans l'annuaire et vos fournisseurs ne peuvent pas vous adresser leurs factures électroniques. Le défaut de désignation expose par ailleurs à une mise en demeure assortie d'un délai de régularisation, puis à une amende en cas de non-conformité."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Guide pratique micro, TPE et PME" }
      ]
    }
  ]
}

export default function ArticleFacturationElectroniqueGuidePratique() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Guide pratique micro, TPE et PME</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FISCALITÉ</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>MICRO &amp; TPE</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 27 janvier 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 16 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/facturation-electronique-guide-pratique.webp"
                alt="Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#concerne" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Suis-je concerné, et à quelle date</a></li>
                <li><a href="#franchise" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le piège de la franchise de TVA</a></li>
                <li><a href="#clients" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. B2B, B2C, international : tout dépend de vos clients</a></li>
                <li><a href="#recevoir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. La priorité absolue : pouvoir recevoir</a></li>
                <li><a href="#choisir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Choisir sa plateforme agréée</a></li>
                <li><a href="#fonctionnement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Comment ça se passe concrètement</a></li>
                <li><a href="#mentions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Mettre ses factures à jour</a></li>
                <li><a href="#conservation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Conserver ses factures dix ans</a></li>
                <li><a href="#feuille-route" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IX. Votre feuille de route</a></li>
                <li><a href="#idees-recues" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>X. Les idées reçues à éviter</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>XI. Trois cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Si vous êtes micro-entrepreneur, artisan, commerçant, profession libérale ou dirigeant d'une petite société, la facturation électronique vous concerne directement, et plus tôt que vous ne le pensez. Ce guide va droit au but : quelles dates s'appliquent à votre situation, quels pièges éviter, comment choisir votre plateforme, ce qui change sur vos factures, et quelles actions mener dès maintenant pour être prêt sereinement.</p>
                <p style={{marginBottom: '1rem'}}>Pour comprendre l'ensemble de la réforme, son cadre légal et sa logique générale, vous pouvez lire notre article général, <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>Facturation électronique obligatoire en 2026, ce qui change pour toutes les entreprises</a>. Le présent guide en est la version pratique, centrée sur les petites structures.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>À retenir d'emblée :</strong> même les plus petites structures doivent pouvoir <strong>recevoir</strong> une facture électronique dès le <strong>1er septembre 2026</strong>. L'obligation d'<strong>émettre</strong> arrive plus tard, au 1er septembre 2027, mais l'équipement, lui, se prépare avant.
                  </p>
                </div>
              </section>

              <section id="concerne">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Suis-je concerné, et à quelle date
                </h2>
                <p style={{marginBottom: '1rem'}}>La règle est simple : dès lors que vous êtes une entreprise assujettie à la TVA établie en France, vous êtes concerné. Seule l'échéance d'émission varie selon votre taille. Voici ce qui s'applique aux petites structures.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Votre situation</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Recevoir</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Émettre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Micro-entreprise / auto-entrepreneur", "1er sept. 2026", "1er sept. 2027"],
                        ["TPE (moins de 10 salariés)", "1er sept. 2026", "1er sept. 2027"],
                        ["PME (jusqu'à 250 salariés)", "1er sept. 2026", "1er sept. 2027"],
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
                <p style={{marginBottom: '1rem'}}>Autrement dit, pour toutes les petites structures, la même échéance s'applique : <strong>réception en 2026, émission en 2027</strong>. Les catégories d'entreprises se définissent par référence à l'article 51 de la loi de modernisation de l'économie du 4 août 2008, appréciées au niveau de chaque personne juridique. Le calendrier 2026-2027 est désormais inscrit dans la loi, l'hypothèse d'un nouveau report ayant été écartée.</p>
              </section>

              <section id="franchise">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le piège de la franchise de TVA
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est l'erreur la plus répandue chez les indépendants, et la question qui revient le plus souvent sur les forums et les groupes professionnels. Beaucoup raisonnent ainsi : « je ne facture pas de TVA, donc cette réforme ne me concerne pas ». C'est faux, et la nuance est juridiquement importante.</p>
                <p style={{marginBottom: '1rem'}}>Être en <strong>franchise en base de TVA</strong> signifie que vous êtes dispensé de collecter et de reverser la TVA. Mais vous demeurez un <strong>assujetti</strong> au sens de la réglementation : vous exercez une activité économique qui entre, par nature, dans le champ de la TVA. Or la réforme vise tous les assujettis, et non les seuls redevables. Vous êtes donc concerné, en réception comme en émission, exactement comme une entreprise qui facture la TVA.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ne vous laissez pas surprendre.</strong> Assujetti et redevable sont deux notions distinctes. La franchise vous exonère du paiement de la TVA, pas des obligations de facturation électronique. Considérer le contraire vous exposerait à recevoir, dès 2026, des factures que vous ne pourriez pas traiter.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Un point très concret pour vous : la mention de franchise à porter sur vos factures évolue. À la suite de la recodification des règles de TVA dans le Code des impositions sur les biens et services (CIBS), opérée par l'ordonnance n° 2025-1247 du 17 décembre 2025, la référence change au 1er septembre 2026. Jusqu'au 31 août 2026, vous indiquez « TVA non applicable, art. 293 B du Code général des impôts ». À compter du 1er septembre 2026, la référence devient « TVA non applicable, article L.223-3 du Code des impositions sur les biens et des services (CIBS) ». Les deux formulations sont acceptées pendant la période de transition.</p>
              </section>

              <section id="clients">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. B2B, B2C, international : tout dépend de vos clients
                </h2>
                <p style={{marginBottom: '1rem'}}>Votre situation pratique dépend de la nature de vos clients. Il faut distinguer deux obligations qui n'ont ni le même périmètre ni le même calendrier.</p>
                <p style={{marginBottom: '1rem'}}>La <strong>facture électronique obligatoire</strong>, ou e-invoicing, ne vise que les opérations entre entreprises assujetties établies en France, c'est-à-dire le <strong>B2B domestique</strong>. Pour vos ventes à des <strong>particuliers</strong>, vous pourrez continuer d'émettre une facture classique, papier ou PDF. En revanche, ces ventes aux particuliers, ainsi que vos opérations avec l'<strong>étranger</strong>, relèvent du <strong>e-reporting</strong> : la transmission à l'administration des données de ces transactions, à compter du 1er septembre 2027 pour les micro-entreprises.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>En clair.</strong> Si vous ne facturez que des particuliers, vous n'êtes pas concerné par l'envoi de factures électroniques, mais vous devrez transmettre vos données de vente via le e-reporting. Si vous facturez des professionnels, vous êtes concerné par les deux. La plupart des plateformes gèrent automatiquement le e-reporting, à condition de le vérifier avant de souscrire.
                  </p>
                </div>
              </section>

              <section id="recevoir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. La priorité absolue : pouvoir recevoir
                </h2>
                <p style={{marginBottom: '1rem'}}>Beaucoup se focalisent sur l'émission, prévue en 2027, et oublient l'essentiel : l'obligation de <strong>réception est universelle dès le 1er septembre 2026</strong>. Pourquoi est-ce la priorité ? Parce que vos fournisseurs grandes entreprises et ETI basculent en émission dès 2026. Vos factures d'énergie, de téléphonie, de logiciels ou de fournitures vous parviendront donc au format électronique, via une plateforme, dès l'automne 2026.</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, si vous n'avez pas désigné de plateforme de réception, vous risquez tout simplement de ne pas recevoir correctement ces factures. La première action à mener n'est donc pas d'attendre 2027, mais de vous équiper pour recevoir, dès 2026. Ouvrir un compte dès maintenant pour la réception vous prépare en outre naturellement à l'émission de 2027, sans effort supplémentaire.</p>
              </section>

              <section id="choisir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Choisir sa plateforme agréée
                </h2>
                <p style={{marginBottom: '1rem'}}>Rappelons le changement majeur de la réforme : il n'existe plus de solution publique gratuite. Le portail public de facturation a été recentré sur l'annuaire et la transmission des données, et chaque entreprise doit passer par une <strong>plateforme agréée</strong>, immatriculée par l'administration fiscale. La première liste officielle a été publiée le 16 janvier 2026 et recensait une centaine d'opérateurs.</p>
                <p style={{marginBottom: '1rem'}}>Un mot de vocabulaire utile, car deux notions circulent. La <strong>plateforme agréée</strong> (PA), anciennement appelée plateforme de dématérialisation partenaire (PDP), est immatriculée par l'administration et habilitée à transmettre directement vos factures et vos données. L'<strong>opérateur de dématérialisation</strong> (OD) peut servir d'intermédiaire technique, mais doit s'adosser à une plateforme agréée pour la transmission réglementaire. Autrement dit, une plateforme agréée doit toujours figurer dans la chaîne, que vous y souscriviez directement ou via votre logiciel.</p>
                <p style={{marginBottom: '1rem'}}>Vous avez donc deux voies possibles :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Souscrire directement</strong> auprès d'une plateforme agréée, qui gérera l'émission, la réception et la transmission des données</li>
                  <li><strong>Conserver votre logiciel</strong> de devis et de facturation actuel, à condition qu'il soit lui-même raccordé à une plateforme agréée. Beaucoup d'éditeurs s'y connectent</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour choisir, voici les critères qui comptent réellement pour une petite structure :</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6'}}>
                    <li>La <strong>compatibilité</strong> avec vos outils existants (logiciel de facturation, comptabilité)</li>
                    <li>Les <strong>fonctionnalités</strong> couvertes : émission, réception, e-reporting et, idéalement, archivage</li>
                    <li>La <strong>gestion de la TVA</strong> si vous risquez de sortir de la franchise, par exemple en cas de dépassement de seuil</li>
                    <li>Le <strong>coût</strong> rapporté à votre volume réel de factures, sachant que des offres gratuites existent pour les micro-entreprises</li>
                    <li>La <strong>simplicité d'usage</strong> et la possibilité d'<strong>exporter vos données</strong>, déterminantes quand on est seul ou en très petite équipe</li>
                    <li>Le fait que la plateforme soit bien <strong>immatriculée</strong> par l'administration, la seule liste officielle faisant foi</li>
                  </ul>
                </div>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de comparer plusieurs plateformes agréées plutôt que de souscrire dans l'urgence à la première sollicitation reçue.</p>
              </section>

              <section id="fonctionnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Comment ça se passe concrètement
                </h2>
                <p style={{marginBottom: '1rem'}}>Bonne nouvelle : vous n'aurez pas à gérer la technique. Lorsque vous émettez une facture, à partir de 2027, vous la créez dans votre plateforme agréée ou votre logiciel raccordé. La plateforme la met au bon format structuré, identifie le destinataire dans l'<strong>annuaire</strong> grâce à son numéro SIREN, l'achemine vers la plateforme de votre client, et transmet en parallèle les données utiles à l'administration.</p>
                <p style={{marginBottom: '1rem'}}>Pour la réception, le mécanisme fonctionne en sens inverse : la facture de votre fournisseur arrive dans votre plateforme, où vous la consultez et la téléchargez. C'est précisément pour cela que la désignation d'une plateforme est indispensable dès 2026 : en la désignant, vous êtes référencé dans l'annuaire, par votre SIREN, ce qui permet à vos fournisseurs de savoir où vous adresser leurs factures.</p>
                <p style={{marginBottom: '1rem'}}>Les formats admis, le <strong>Factur-X</strong>, l'<strong>UBL</strong> et le <strong>CII</strong>, reposent tous sur la norme européenne EN 16931. Vous n'avez pas à les manipuler vous-même : votre plateforme s'en charge. De votre côté, l'essentiel est de saisir des informations fiables sur vos clients, à commencer par leur numéro SIREN.</p>
              </section>

              <section id="mentions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Mettre ses factures à jour
                </h2>
                <p style={{marginBottom: '1rem'}}>Au-delà du canal de transmission, vos factures elles-mêmes doivent évoluer. À compter du 1er septembre 2026, quatre nouvelles mentions s'ajoutent à celles déjà obligatoires, conformément à l'article 242 nonies A de l'annexe II au Code général des impôts :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Le <strong>numéro SIREN du client</strong></li>
                  <li>L'<strong>adresse de livraison</strong> des biens, si elle diffère de l'adresse de facturation</li>
                  <li>La <strong>catégorie de l'opération</strong> : livraison de biens, prestation de services, ou les deux</li>
                  <li>L'<strong>option pour le paiement de la TVA d'après les débits</strong>, le cas échéant</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Si vous êtes en franchise de TVA, pensez aussi à la nouvelle référence de la mention de franchise, qui passe de l'article 293 B du CGI à l'article L.223-3 du CIBS au 1er septembre 2026 (voir plus haut). C'est l'occasion de remettre à plat vos modèles. Des conditions générales de vente claires et des modèles de factures à jour, intégrant ces mentions et adaptés à votre activité, vous éviteront des corrections de dernière minute.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Facture conforme, nouvelles mentions 2026</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Une facture à jour au 1er septembre 2026 : numéro SIREN du client, adresse de livraison, catégorie d'opération, option TVA sur les débits, et la nouvelle référence de franchise. Prête à dupliquer.</p>
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

              <section id="conservation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Conserver ses factures dix ans
                </h2>
                <p style={{marginBottom: '1rem'}}>Que vos factures soient électroniques ou non, l'obligation de conservation ne change pas : <strong>dix ans</strong>, au titre de leur qualité de pièces comptables. Les plateformes agréées assurent un archivage sécurisé et horodaté, mais il reste prudent, avant de changer d'outil, d'<strong>exporter une copie</strong> de vos factures, ce que toutes les plateformes permettent. Vous conservez ainsi la maîtrise de votre historique, quel que soit le prestataire que vous utilisez.</p>
              </section>

              <section id="feuille-route">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IX. Votre feuille de route
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour passer à l'action sans vous disperser, voici un déroulé simple, applicable à toute petite structure.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>1. Vérifiez votre situation.</strong> Confirmez que vous êtes assujetti, même en franchise, identifiez la nature de vos clients (professionnels, particuliers ou les deux) et notez vos deux échéances : réception en 2026, émission en 2027.</li>
                  <li><strong>2. Choisissez une plateforme agréée.</strong> Comparez quelques solutions immatriculées, ou vérifiez si votre logiciel actuel est raccordé à l'une d'elles.</li>
                  <li><strong>3. Activez la réception.</strong> Désignez votre plateforme afin d'être référencé dans l'annuaire et de pouvoir recevoir les factures de vos fournisseurs dès l'automne 2026.</li>
                  <li><strong>4. Mettez vos modèles à jour.</strong> Intégrez les nouvelles mentions obligatoires, et la nouvelle référence de franchise si vous êtes concerné.</li>
                  <li><strong>5. Anticipez le e-reporting.</strong> Si vous avez des clients particuliers ou à l'étranger, vérifiez que votre plateforme transmettra ces données pour 2027.</li>
                  <li><strong>6. Préparez l'émission.</strong> Testez l'émission au format électronique en amont, pour aborder l'échéance de 2027 sans précipitation.</li>
                </ul>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Vous voulez être accompagné pas à pas ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Le cabinet vous aide à identifier vos échéances, à sécuriser vos formalités et à mettre vos documents en conformité. Une question précise sur votre situation ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-professionnels" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des professionnels</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser une question</a>
                  </div>
                </div>
              </section>

              <section id="idees-recues">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  X. Les idées reçues à éviter
                </h2>
                <p style={{marginBottom: '1rem'}}>Quelques confusions reviennent constamment. Les lever vous évite les mauvaises surprises.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>« Un PDF par email, c'est déjà une facture électronique. »</strong> Non. Il faut un format structuré, transmis par une plateforme agréée, et non un simple fichier envoyé en pièce jointe.</li>
                  <li><strong>« En franchise de TVA, je ne suis pas concerné. »</strong> Faux. Vous êtes assujetti, donc dans le champ de la réforme.</li>
                  <li><strong>« C'est pour 2027, j'ai le temps. »</strong> La réception est obligatoire dès 2026, et vos fournisseurs basculent dès cette date.</li>
                  <li><strong>« Je pourrai utiliser le portail public gratuit. »</strong> Il n'est plus une plateforme d'échange. Une plateforme agréée est nécessaire.</li>
                  <li><strong>« Mon expert-comptable s'occupe de tout. »</strong> Il peut vous accompagner, mais l'obligation et le choix de la plateforme restent les vôtres.</li>
                </ul>
              </section>

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  XI. Trois cas concrets
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>La consultante en micro-entreprise, clients professionnels.</strong> En franchise de TVA, elle pensait être hors champ. Elle réalise qu'elle doit, dès 2026, pouvoir recevoir les factures de ses outils en ligne, et choisit une plateforme intégrée à son logiciel de facturation pour ne rien changer à ses habitudes. Elle met aussi à jour la mention de franchise pour le 1er septembre 2026.</li>
                  <li><strong>L'artisan en TPE, clients mixtes.</strong> Il facture des professionnels et des particuliers. Il active la réception à temps, prépare l'émission électronique pour ses clients professionnels en 2027, et vérifie que sa plateforme transmettra bien le e-reporting de ses ventes aux particuliers.</li>
                  <li><strong>La coiffeuse en micro-entreprise, clients particuliers.</strong> Elle ne facture que des particuliers. Elle n'a pas de factures électroniques à émettre vers ses clients, mais devra transmettre les données de ses ventes via le e-reporting à compter de 2027, et doit pouvoir recevoir les factures électroniques de ses fournisseurs dès 2026.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour une micro-entreprise, une TPE ou une PME, la facturation électronique se résume à deux dates et une priorité : être prêt à <strong>recevoir le 1er septembre 2026</strong>, prêt à <strong>émettre le 1er septembre 2027</strong>, et ne pas attendre la dernière minute pour choisir sa plateforme. Le piège à éviter est de se croire dispensé sous prétexte de franchise de TVA, et le réflexe utile est d'identifier la nature de ses clients pour savoir si l'on relève de la facture électronique, du e-reporting, ou des deux.</p>
                <p style={{marginBottom: '1rem'}}>Bien anticipée, cette transition n'est pas une contrainte de plus mais un gain réel : moins de saisie, un meilleur suivi des règlements, une comptabilité mieux alimentée. Le délai d'un an entre réception et émission est justement là pour vous permettre de vous approprier le dispositif. Autant en profiter dès maintenant.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Ce guide s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Ordonnance n° 2021-1190 du 15 septembre 2021 relative à la généralisation de la facturation électronique (Légifrance)</li>
                  <li>Code général des impôts, articles 289 bis et 290 (facture électronique et e-reporting) et article 242 nonies A de l'annexe II (mentions obligatoires)</li>
                  <li>Loi n° 2023-1322 du 29 décembre 2023 de finances pour 2024, article 91 (calendrier 2026-2027)</li>
                  <li>Décret n° 2022-1299 du 7 octobre 2022 et décret n° 2024-266 du 25 mars 2024 (modalités d'application)</li>
                  <li>Article 51 de la loi n° 2008-776 du 4 août 2008 de modernisation de l'économie (catégories d'entreprises)</li>
                  <li>Ordonnance n° 2025-1247 du 17 décembre 2025 (recodification de la TVA dans le CIBS) et mention de franchise, art. 293 B du CGI puis article L.223-3 du CIBS</li>
                  <li>Communiqué de presse du ministère de l'Économie du 15 octobre 2024 (évolution du portail public de facturation)</li>
                  <li>Portails officiels : <a href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a>, <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>impots.gouv.fr</a> et la liste des plateformes agréées</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Ce guide relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; le calendrier et les montants relevant de la loi de finances peuvent évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Je suis en franchise de TVA, suis-je vraiment concerné ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La franchise en base vous dispense de facturer la TVA, mais vous restez assujetti au sens de la réglementation. La réforme vise les assujettis, pas seulement les redevables. Vous êtes donc concerné, en réception dès le 1er septembre 2026 et en émission au 1er septembre 2027.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la première chose à faire concrètement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Choisir une plateforme agréée pour pouvoir recevoir vos factures, car la réception est obligatoire pour tous dès le 1er septembre 2026. Vous pouvez souscrire directement auprès d'une plateforme immatriculée ou vérifier que votre logiciel de facturation est raccordé à l'une d'elles.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Suis-je concerné si je facture uniquement des particuliers ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La facture électronique obligatoire ne vise que les opérations entre entreprises (B2B). Pour vos clients particuliers, vous pourrez continuer d'émettre une facture classique. En revanche, ces ventes relèvent du e-reporting, la transmission des données à l'administration, à compter du 1er septembre 2027 pour les micro-entreprises.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Dois-je changer de logiciel de facturation ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pas nécessairement. Si votre logiciel actuel est raccordé à une plateforme agréée, vous pouvez le conserver. Sinon, vous devrez soit en changer, soit souscrire directement à une plateforme agréée. Le point à vérifier est la connexion effective à une plateforme immatriculée.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le portail public gratuit existe-t-il encore ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, pas comme plateforme d'échange. Le portail public de facturation ne conserve qu'un rôle d'annuaire central et de concentrateur de données. Chaque entreprise doit passer par une plateforme agréée, c'est-à-dire une solution privée immatriculée par l'administration.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Combien cela coûte-t-il pour une petite structure ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le coût dépend de la plateforme et des fonctionnalités. Des plateformes agréées proposent des offres gratuites adaptées aux micro-entreprises, et les offres payantes débutent généralement autour de quelques euros par mois. Comparez selon votre volume de factures, la compatibilité avec vos outils et l'accompagnement proposé.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La mention TVA non applicable change-t-elle sur mes factures ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. À la suite de la recodification des règles de TVA dans le Code des impositions sur les biens et services (ordonnance du 17 décembre 2025), la référence évolue au 1er septembre 2026. Jusqu'au 31 août 2026, vous indiquez « TVA non applicable, art. 293 B du CGI ». À compter du 1er septembre 2026, la référence devient l'article L.223-3 du CIBS. Les deux formulations sont acceptées pendant la transition.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles nouvelles mentions dois-je ajouter à mes factures ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Quatre mentions s'ajoutent au 1er septembre 2026 : le numéro SIREN du client, l'adresse de livraison si elle diffère de l'adresse de facturation, la catégorie de l'opération (livraison de biens, prestation de services ou les deux) et, le cas échéant, l'option pour le paiement de la TVA d'après les débits.</p>
                  </details>
                  <details key={8} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Combien de temps dois-je conserver mes factures ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Dix ans, au titre de leur qualité de pièces comptables, que les factures soient électroniques ou non. Les plateformes agréées assurent un archivage sécurisé, mais il reste prudent d'exporter une copie de vos factures avant tout changement d'outil.</p>
                  </details>
                  <details key={9} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que se passe-t-il si je ne désigne pas de plateforme ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Sans plateforme désignée, vous n'êtes pas référencé dans l'annuaire et vos fournisseurs ne peuvent pas vous adresser leurs factures électroniques. Le défaut de désignation expose par ailleurs à une mise en demeure assortie d'un délai de régularisation, puis à une amende en cas de non-conformité.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
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
                <a href="/blog?tag=Micro-entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Micro-entreprise</a>
                <a href="/blog?tag=TPE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>TPE</a>
                <a href="/blog?tag=PME" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>PME</a>
                <a href="/blog?tag=Franchise%20de%20TVA" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Franchise de TVA</a>
                <a href="/blog?tag=Plateforme%20agr%C3%A9%C3%A9e" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Plateforme agréée</a>
                <a href="/blog?tag=e-reporting" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>e-reporting</a>
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
