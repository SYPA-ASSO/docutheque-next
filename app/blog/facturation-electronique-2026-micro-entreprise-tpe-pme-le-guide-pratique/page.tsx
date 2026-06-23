import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME · Blog Cabinet Cholez-Pagotto`,
  description: `Quelles dates s'appliquent à mon statut, le piège de la franchise de TVA, comment choisir sa plateforme agréée et quelles mentions ajouter : le guide d'action concret pour se mettre en conformité sans stress.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Facturation électronique 2026 : le guide pratique pour les micro-entreprises, TPE et PME",
      "description": "Quelles dates s'appliquent à mon statut, le piège de la franchise de TVA, comment choisir sa plateforme agréée et quelles mentions ajouter : le guide d'action concret pour se mettre en conformité sans stress.",
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
      "keywords": ["Facturation électronique micro-entreprise", "Facture électronique TPE", "PME", "Plateforme agréée", "Franchise de TVA", "Auto-entrepreneur", "Conformité 2026"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Je suis auto-entrepreneur sans TVA, dois-je vraiment m'en occuper ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La franchise en base de TVA vous dispense de facturer la TVA, mais vous restez un assujetti au sens de la réglementation. Vous devez donc pouvoir recevoir des factures électroniques dès le 1er septembre 2026, et en émettre à compter du 1er septembre 2027."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la première chose à faire concrètement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choisir une plateforme agréée pour pouvoir recevoir vos factures, car la réception est obligatoire pour tous dès le 1er septembre 2026. Vous pouvez souscrire directement auprès d'une plateforme immatriculée ou vérifier que votre logiciel de facturation est connecté à l'une d'elles."
          }
        },
        {
          "@type": "Question",
          "name": "Combien cela coûte-t-il pour une petite structure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le coût dépend de la plateforme et des fonctionnalités retenues. L'offre est large, depuis des formules d'entrée de gamme intégrées à des logiciels de gestion jusqu'à des solutions plus complètes avec archivage. Il est conseillé de comparer plusieurs plateformes agréées selon la compatibilité avec vos outils, le volume de factures et l'accompagnement proposé."
          }
        },
        {
          "@type": "Question",
          "name": "Puis-je encore envoyer une facture papier ou un PDF à un particulier ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La facture électronique obligatoire concerne les opérations entre entreprises assujetties à la TVA. Pour vos clients particuliers ou des organismes non assujettis, vous pourrez continuer à émettre des factures classiques, mais ces opérations entrent dans le champ du e-reporting selon votre situation."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles nouvelles mentions dois-je ajouter à mes factures ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Quatre mentions s'ajoutent à compter du 1er septembre 2026 : le numéro SIREN du client, l'adresse de livraison si elle diffère de l'adresse de facturation, la catégorie de l'opération (livraison de biens, prestation de services ou les deux) et, le cas échéant, l'option pour le paiement de la TVA d'après les débits."
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
                  <Clock size={13} strokeWidth={1.5} /> 11 min de lecture
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
                <li><a href="#recevoir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. La priorité absolue : pouvoir recevoir</a></li>
                <li><a href="#choisir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Choisir sa plateforme agréée</a></li>
                <li><a href="#mentions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Mettre ses factures à jour</a></li>
                <li><a href="#feuille-route" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Votre feuille de route en 5 étapes</a></li>
                <li><a href="#cas" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Trois cas concrets</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Si vous êtes micro-entrepreneur, artisan, commerçant, profession libérale ou dirigeant d'une petite société, la facturation électronique vous concerne directement, et plus tôt que vous ne le pensez. Ce guide va droit au but : quelles dates s'appliquent à votre situation, quel piège éviter, comment choisir votre plateforme, et quelles actions mener dès maintenant pour être prêt sereinement.</p>
                <p style={{marginBottom: '1rem'}}>Pour comprendre l'ensemble de la réforme, son cadre légal et sa logique d'ensemble, vous pouvez lire notre article général, <a href="/blog/facturation-electronique-obligatoire-2026-ce-qui-change-pour-toutes-les-entreprises" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>Facturation électronique obligatoire en 2026, ce qui change pour toutes les entreprises</a>. Le présent guide est sa version pratique, centrée sur les petites structures.</p>
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
                <p style={{marginBottom: '1rem'}}>Autrement dit, pour toutes les petites structures, la même échéance s'applique : <strong>réception en 2026, émission en 2027</strong>. Les catégories d'entreprises se définissent par référence à l'article 51 de la loi de modernisation de l'économie du 4 août 2008, appréciées au niveau de chaque personne juridique.</p>
              </section>

              <section id="franchise">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le piège de la franchise de TVA
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est l'erreur la plus répandue chez les indépendants. Beaucoup de micro-entrepreneurs raisonnent ainsi : « je ne facture pas de TVA, donc cette réforme ne me concerne pas ». C'est faux, et la nuance est importante.</p>
                <p style={{marginBottom: '1rem'}}>Être en <strong>franchise en base de TVA</strong> signifie que vous êtes dispensé de collecter et de reverser la TVA. Mais vous demeurez un <strong>assujetti</strong> au sens de la réglementation : vous réalisez des opérations qui entrent, par nature, dans le champ de la TVA. Or la réforme vise précisément tous les assujettis. Vous êtes donc concerné, en réception comme en émission, exactement comme une entreprise qui facture la TVA.</p>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Ne vous laissez pas surprendre.</strong> Assujetti et redevable sont deux notions distinctes. La franchise vous exonère du paiement de la TVA, pas des obligations de facturation électronique. Considérer le contraire vous exposerait à recevoir, dès 2026, des factures que vous ne pourriez pas traiter.
                  </p>
                </div>
              </section>

              <section id="recevoir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. La priorité absolue : pouvoir recevoir
                </h2>
                <p style={{marginBottom: '1rem'}}>Beaucoup se focalisent sur l'émission, prévue en 2027, et oublient l'essentiel : l'obligation de <strong>réception est universelle dès le 1er septembre 2026</strong>. Pourquoi est-ce la priorité ? Parce que vos fournisseurs grandes entreprises et ETI, eux, basculent en émission dès 2026. Vos factures d'énergie, de téléphonie, de logiciels ou de fournitures vous parviendront donc au format électronique, via une plateforme, dès l'automne 2026.</p>
                <p style={{marginBottom: '1rem'}}>Concrètement, si vous n'avez pas désigné de plateforme de réception, vous risquez tout simplement de ne pas recevoir correctement ces factures. La première action à mener n'est donc pas d'attendre 2027, mais de vous équiper pour recevoir, dès 2026.</p>
              </section>

              <section id="choisir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Choisir sa plateforme agréée
                </h2>
                <p style={{marginBottom: '1rem'}}>Rappelons le changement majeur de la réforme : il n'existe plus de solution publique gratuite. Le portail public de facturation a été recentré sur l'annuaire et la transmission des données, et chaque entreprise doit passer par une <strong>plateforme agréée</strong>, immatriculée par l'administration fiscale. La première liste officielle a été publiée le 16 janvier 2026.</p>
                <p style={{marginBottom: '1rem'}}>Vous avez deux voies possibles :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Souscrire directement</strong> auprès d'une plateforme agréée, qui gérera l'émission, la réception et la transmission des données</li>
                  <li><strong>Conserver votre logiciel</strong> de devis et de facturation actuel, à condition qu'il soit lui-même raccordé à une plateforme agréée. Beaucoup d'éditeurs s'y connectent</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pour choisir, voici les critères qui comptent réellement pour une petite structure :</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6'}}>
                    <li>La <strong>compatibilité</strong> avec vos outils existants (logiciel de facturation, comptabilité)</li>
                    <li>Les <strong>fonctionnalités</strong> couvertes : émission, réception, e-reporting et, idéalement, archivage</li>
                    <li>Le <strong>coût</strong> rapporté à votre volume réel de factures</li>
                    <li>La <strong>simplicité d'usage</strong> et la qualité de l'accompagnement, déterminantes quand on est seul ou en très petite équipe</li>
                    <li>Le fait que la plateforme soit bien <strong>immatriculée</strong> par l'administration fiscale, et non un simple opérateur non habilité</li>
                  </ul>
                </div>
                <p style={{marginBottom: '1rem'}}>Quant au coût, il dépend de la plateforme et des options. L'offre est large, des formules d'entrée de gamme intégrées à des logiciels de gestion jusqu'aux solutions plus complètes. Le bon réflexe est de comparer plusieurs plateformes agréées plutôt que de souscrire dans l'urgence à la première sollicitation reçue.</p>
              </section>

              <section id="mentions">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Mettre ses factures à jour
                </h2>
                <p style={{marginBottom: '1rem'}}>Au-delà du canal de transmission, vos factures elles-mêmes doivent évoluer. À compter du 1er septembre 2026, quatre nouvelles mentions s'ajoutent à celles déjà obligatoires, conformément à l'article 242 nonies A de l'annexe II au Code général des impôts :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Le <strong>numéro SIREN du client</strong></li>
                  <li>L'<strong>adresse de livraison</strong> des biens, si elle diffère de l'adresse de facturation</li>
                  <li>La <strong>catégorie de l'opération</strong> : livraison de biens, prestation de services, ou les deux</li>
                  <li>L'<strong>option pour le paiement de la TVA d'après les débits</strong>, le cas échéant</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>C'est l'occasion de remettre à plat vos modèles. Des conditions générales de vente claires et des modèles de factures à jour, intégrant ces mentions et adaptés à votre activité, vous éviteront des corrections de dernière minute. Le cabinet propose des modèles prêts à l'emploi dans la <a href="/catalogue" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>Docuthèque</a>.</p>
              </section>

              <section id="feuille-route">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Votre feuille de route en 5 étapes
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour passer à l'action sans vous disperser, voici un déroulé simple, applicable à toute petite structure.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>1. Vérifiez votre situation.</strong> Confirmez que vous êtes assujetti (c'est le cas même en franchise de TVA) et notez vos deux échéances : réception en 2026, émission en 2027.</li>
                  <li><strong>2. Choisissez une plateforme agréée.</strong> Comparez quelques solutions immatriculées, ou vérifiez si votre logiciel actuel est raccordé à l'une d'elles.</li>
                  <li><strong>3. Activez la réception.</strong> Désignez votre plateforme afin d'être référencé dans l'annuaire et de pouvoir recevoir les factures de vos fournisseurs dès l'automne 2026.</li>
                  <li><strong>4. Mettez vos modèles à jour.</strong> Intégrez les nouvelles mentions obligatoires à vos factures et à vos CGV.</li>
                  <li><strong>5. Préparez l'émission.</strong> Testez l'émission au format électronique en amont, pour aborder l'échéance de 2027 sans précipitation.</li>
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

              <section id="cas">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Trois cas concrets
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>La consultante en micro-entreprise.</strong> En franchise de TVA, elle pensait être hors champ. Elle réalise qu'elle doit, dès 2026, pouvoir recevoir les factures de ses outils en ligne, et choisit une plateforme intégrée à son logiciel de facturation pour ne rien changer à ses habitudes.</li>
                  <li><strong>L'artisan en TPE.</strong> Il reçoit ses factures de fournisseurs de matériaux au format électronique dès 2026. Il active la réception à temps, met à jour ses devis et factures avec les nouvelles mentions, et se laisse l'année pour préparer sereinement l'émission de 2027.</li>
                  <li><strong>La PME de services.</strong> Elle compare plusieurs plateformes agréées, vérifie la compatibilité avec son outil de gestion, forme son assistante administrative et teste l'émission dès le premier semestre 2027, bien avant l'échéance.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour une micro-entreprise, une TPE ou une PME, la facturation électronique se résume à deux dates et une priorité : être prêt à <strong>recevoir le 1er septembre 2026</strong>, prêt à <strong>émettre le 1er septembre 2027</strong>, et ne pas attendre la dernière minute pour choisir sa plateforme. Le piège à éviter est de se croire dispensé sous prétexte de franchise de TVA.</p>
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
                  <li>Communiqué de presse du ministère de l'Économie du 15 octobre 2024 (évolution du portail public de facturation)</li>
                  <li>Portail officiel : <a href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>economie.gouv.fr</a> et la liste des plateformes agréées sur <a href="https://www.impots.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>impots.gouv.fr</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Ce guide relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les informations sont données à jour à la date de publication ; le calendrier et les montants relevant de la loi de finances peuvent évoluer.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Je suis auto-entrepreneur sans TVA, dois-je vraiment m'en occuper ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La franchise en base vous dispense de facturer la TVA, mais vous restez un assujetti au sens de la réglementation. Vous devez pouvoir recevoir des factures électroniques dès le 1er septembre 2026, et en émettre à compter du 1er septembre 2027.</p>
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
                      <span>Combien cela coûte-t-il pour une petite structure ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le coût dépend de la plateforme et des fonctionnalités. L'offre est large, depuis des formules d'entrée de gamme intégrées à des logiciels de gestion jusqu'à des solutions plus complètes avec archivage. Comparez plusieurs plateformes agréées selon la compatibilité avec vos outils, votre volume de factures et l'accompagnement proposé.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Puis-je encore envoyer un PDF à un particulier ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La facture électronique obligatoire concerne les opérations entre entreprises assujetties à la TVA. Pour vos clients particuliers ou des organismes non assujettis, vous pourrez continuer à émettre des factures classiques, mais ces opérations entrent dans le champ du e-reporting selon votre situation.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles nouvelles mentions dois-je ajouter à mes factures ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Quatre mentions s'ajoutent au 1er septembre 2026 : le numéro SIREN du client, l'adresse de livraison si elle diffère de l'adresse de facturation, la catégorie de l'opération (livraison de biens, prestation de services ou les deux) et, le cas échéant, l'option pour le paiement de la TVA d'après les débits.</p>
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
                <span key="Micro-entreprise" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Micro-entreprise</span>
                <span key="TPE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>TPE</span>
                <span key="PME" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>PME</span>
                <span key="Franchise de TVA" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Franchise de TVA</span>
                <span key="Plateforme agréée" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Plateforme agréée</span>
                <span key="Conformité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Conformité</span>
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
