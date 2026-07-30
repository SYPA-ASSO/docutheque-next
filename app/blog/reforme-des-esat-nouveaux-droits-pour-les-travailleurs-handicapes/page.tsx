import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Réforme des ESAT : nouveaux droits pour les travailleurs handicapés · Blog Cabinet Cholez-Pagotto`,
  description: `Trois textes réglementaires publiés au Journal Officiel du 25 août 2025 concrétisent la réforme des ESAT et étendent significativement les droits des travailleurs en situation de handicap.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/travailleurs-handicapes-heureux.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/travailleurs-handicapes-heureux.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Réforme des ESAT : nouveaux droits pour les travailleurs handicapés",
      "description": "Trois textes réglementaires publiés au Journal Officiel du 25 août 2025 concrétisent la réforme des ESAT et étendent significativement les droits des travailleurs en situation de handicap.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/travailleurs-handicapes-heureux.webp",
      "datePublished": "2025-09-01",
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
      "url": "https://cholez-pagotto.fr/blog/reforme-des-esat-nouveaux-droits-pour-les-travailleurs-handicapes",
      "keywords": ["ESAT", "Travailleurs handicapés", "Réforme", "Droit social", "ARS", "Complémentaire santé"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la différence entre l'ancien statut et le nouveau statut des travailleurs en ESAT ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le nouveau statut remplace le terme d'aide par accompagnement. Concrètement, cela se traduit par un contrat d'accompagnement par le travail plus structuré, des droits étendus (congés, complémentaire santé, instance représentative), et un parcours professionnel mieux balisé vers le milieu ordinaire de travail."
          }
        },
        {
          "@type": "Question",
          "name": "Les travailleurs en ESAT bénéficient-ils maintenant de la complémentaire santé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L'arrêté du 25 août 2025 concrétise ce droit, déjà introduit par la loi de décembre 2023. Les ESAT ont l'obligation de proposer une couverture collective obligatoire pour les frais de santé. L'État compense la moitié des cotisations payées par l'ESAT à l'organisme assureur."
          }
        },
        {
          "@type": "Question",
          "name": "Les ARS ont-elles de nouveaux pouvoirs sur les ESAT ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Le décret 2025-844 confère aux directeurs généraux des ARS la capacité de fixer des objectifs aux ESAT : niveau moyen de participation financière à la rémunération garantie et investissement dans la formation. Ces objectifs s'appuient sur le rapport annuel que chaque ESAT doit transmettre avant le 30 avril."
          }
        },
        {
          "@type": "Question",
          "name": "Quand ces nouvelles dispositions entrent-elles en vigueur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les deux décrets et l'arrêté sont publiés au Journal Officiel du 25 août 2025 et entrent en vigueur à des dates définies par chaque texte. Les ESAT doivent adapter leurs pratiques et contrats en conséquence. Il est recommandé de consulter les textes sur Légifrance pour les dates précises d'entrée en vigueur de chaque disposition."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Réforme des ESAT 2025" }
      ]
    }
  ]
}

export default function ArticleESAT() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Réforme des ESAT 2025</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT SOCIAL</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Réforme des ESAT : nouveaux droits pour les travailleurs handicapés</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 1er septembre 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 6 min de lecture
                </span>
              </div>
                            <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/travailleurs-handicapes-heureux.webp"
                alt="Réforme des ESAT : nouveaux droits pour les travailleurs handicapés"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Le nouveau statut remplace le terme d'aide par accompagnement.</li>
                <li>L'arrêté du 25 août 2025 concrétise ce droit, déjà introduit par la loi de décembre 2023.</li>
                <li>Le décret 2025-844 confère aux directeurs généraux des ARS la capacité de fixer des objectifs aux ESAT : niveau moyen de participation financière à la rémunération garantie et investissement…</li>
                <li>Les deux décrets et l'arrêté sont publiés au Journal Officiel du 25 août 2025 et entrent en vigueur à des dates définies par chaque texte.</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#terminologie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Clarifications terminologiques (décret 2025-845)</a></li>
                <li><a href="#droits" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Nouveaux droits et pilotage ARS (décret 2025-844)</a></li>
                <li><a href="#sante" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Compensation complémentaire santé (arrêté)</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Une série de textes réglementaires, deux décrets et un arrêté, concernant les <strong>Établissements et Services d'Accompagnement par le Travail (ESAT)</strong> ont été publiés au Journal Officiel du 25 août 2025.</p>
                <p style={{marginBottom: '1rem'}}>Ces publications concrétisent les dispositions de la <strong>loi n°2023-1196 du 18 décembre 2023</strong> pour le plein emploi, qui avait introduit des droits étendus pour les travailleurs en situation de handicap admis en ESAT.</p>
              </section>

              <section id="terminologie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Clarifications terminologiques et évolution des statuts (décret 2025-845)
                </h2>
                <p style={{marginBottom: '1rem'}}>Le <strong>décret n°2025-845 du 25 août 2025</strong> formalise un changement sémantique majeur, remplaçant le terme d'« aide » par celui d'<strong>« accompagnement »</strong>. Cette modification entraîne une mise à jour des dénominations :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Les anciens <em>« établissements et services d'aide par le travail »</em> deviennent les <strong>« établissements et services d'accompagnement par le travail » (ESAT)</strong></li>
                  <li>Les <em>« personnes handicapées accueillies »</em> sont désormais appelées <strong>« travailleurs handicapés admis en ESAT »</strong></li>
                  <li>Le contrat liant le travailleur à l'établissement est renommé <strong>« contrat d'accompagnement par le travail »</strong>, et son contenu minimal est désormais précisé</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ce décret détaille également les <strong>parcours renforcés en emploi</strong>, encadre les <strong>conventions d'appui</strong> visant à sécuriser la transition vers le milieu ordinaire de travail, et fixe les modalités de la <strong>complémentaire santé</strong> pour les travailleurs en ESAT.</p>
              </section>

              <section id="droits">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Détail des nouveaux droits et du pilotage par les ARS (décret 2025-844)
                </h2>
                <p style={{marginBottom: '1rem'}}>Le <strong>décret n°2025-844 du 25 août 2025</strong> précise les modalités d'application des nouveaux droits individuels et collectifs des travailleurs en ESAT, couvrant notamment :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Les règles relatives à la <strong>durée de la période d'essai</strong> et sa prorogation en cas d'absence</li>
                  <li>Les éléments obligatoires du <strong>contrat d'accompagnement par le travail</strong></li>
                  <li>Le droit aux <strong>congés</strong> des travailleurs handicapés en ESAT</li>
                  <li>Le mode de fonctionnement de la nouvelle <strong>instance mixte</strong> regroupant travailleurs handicapés et salariés de l'établissement</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ce décret confère aux directeurs généraux des <strong>Agences Régionales de Santé (ARS)</strong> la capacité de fixer des objectifs aux ESAT portant sur leur participation financière à la rémunération garantie et sur leur investissement dans la formation. Ce pilotage s'appuie sur le rapport annuel que chaque ESAT doit présenter avant le 30 avril.</p>
              </section>

              <section id="sante">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Compensation étatique pour la complémentaire santé (arrêté)
                </h2>
                <p style={{marginBottom: '1rem'}}>L'<strong>arrêté du 25 août 2025</strong> finalise le dispositif de prise en charge de la couverture collective obligatoire pour les frais de santé des travailleurs en ESAT, un droit aligné sur celui des salariés, prévu par l'article L.344-2-10 du Code de l'action sociale et des familles (CASF).</p>
                <p style={{marginBottom: '1rem'}}>L'arrêté établit l'assiette et le taux de la compensation accordée par l'État aux organismes gestionnaires d'ESAT :</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    La compensation est fixée à <strong>la moitié des cotisations effectivement payées</strong> l'année précédente par l'ESAT à l'organisme assureur (mutuelle, société d'assurances). L'Agence de Services et de Paiement (ASP) est chargée d'effectuer ce versement sur présentation des attestations justificatives par l'ESAT.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>L'ensemble de ces textes renforce le statut des travailleurs handicapés en ESAT en leur garantissant des droits et un accompagnement professionnel plus structurés et valorisants.</p>
              </section>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ACCOMPAGNEMENT</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Accompagnement du secteur médico-social</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Droits des travailleurs handicapés, fonctionnement de l'ESAT, conformité : le cabinet accompagne les associations et les structures du médico-social.</p>
                  <a href="/accompagnement-associations" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Être accompagné →</a>
                </div>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la différence entre l'ancien statut et le nouveau statut des travailleurs en ESAT ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le nouveau statut remplace le terme d'aide par accompagnement. Concrètement, cela se traduit par un contrat d'accompagnement par le travail plus structuré, des droits étendus (congés, complémentaire santé, instance représentative), et un parcours professionnel mieux balisé vers le milieu ordinaire de travail.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les travailleurs en ESAT bénéficient-ils maintenant de la complémentaire santé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. L'arrêté du 25 août 2025 concrétise ce droit, déjà introduit par la loi de décembre 2023. Les ESAT ont l'obligation de proposer une couverture collective obligatoire pour les frais de santé. L'État compense la moitié des cotisations payées par l'ESAT à l'organisme assureur.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Les ARS ont-elles de nouveaux pouvoirs sur les ESAT ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Le décret 2025-844 confère aux directeurs généraux des ARS la capacité de fixer des objectifs aux ESAT : niveau moyen de participation financière à la rémunération garantie et investissement dans la formation. Ces objectifs s'appuient sur le rapport annuel que chaque ESAT doit transmettre avant le 30 avril.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand ces nouvelles dispositions entrent-elles en vigueur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les deux décrets et l'arrêté sont publiés au Journal Officiel du 25 août 2025 et entrent en vigueur à des dates définies par chaque texte. Les ESAT doivent adapter leurs pratiques et contrats en conséquence. Il est recommandé de consulter les textes sur Légifrance pour les dates précises d'entrée en vigueur de chaque disposition.</p>
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
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47 € à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
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
                <a href="/blog?tag=ESAT" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>ESAT</a>
                <a href="/blog?tag=Travailleurs%20handicap%C3%A9s" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Travailleurs handicapés</a>
                <a href="/blog?tag=R%C3%A9forme" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Réforme</a>
                <a href="/blog?tag=Droit%20social" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Droit social</a>
                <a href="/blog?tag=ARS" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>ARS</a>
                <a href="/blog?tag=Compl%C3%A9mentaire%20sant%C3%A9" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Complémentaire santé</a>
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