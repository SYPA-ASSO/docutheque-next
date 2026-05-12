import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Saisie sur salaire : décryptage complet de la nouvelle procédure et du cadre légal · Blog Docuthèque`,
  description: `La saisie des rémunérations a été profondément modernisée en 2025. Nouveau rôle du commissaire de justice, barème actualisé et obligations de l'employeur : tout ce qu'il faut savoir.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Saisie sur salaire : décryptage complet de la nouvelle procédure et du cadre légal",
      "description": "La saisie des rémunérations a été profondément modernisée en 2025. Nouveau rôle du commissaire de justice, barème actualisé et obligations de l'employeur : tout ce qu'il faut savoir.",
      "image": "https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/saisie-sur-salaire.jpg",
      "datePublished": "16 juillet 2025",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Docuthèque — Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/saisie-sur-salaire-decryptage-complet-de-la-nouvelle-procedure-et-du-cadre-legal",
      "keywords": ["Saisie sur salaire", "Procédure", "Droit social", "Employeur", "Commissaire de justice", "Barème 2025"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quelle est la part insaisissable du salaire en 2025 ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La part insaisissable correspond au montant du RSA pour une personne seule, soit 646,52 € en 2025. Cette somme doit impérativement rester au débiteur. Une majoration de 143,33 € par personne à charge s'y ajoute."
          }
        },
        {
          "@type": "Question",
          "name": "L'employeur doit-il informer le salarié de la saisie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. L'employeur (tiers saisi) doit informer le salarié de la saisie pratiquée sur son salaire. Il est tenu de lui remettre un bulletin de paie mentionnant les retenues effectuées."
          }
        },
        {
          "@type": "Question",
          "name": "Que risque l'employeur s'il ne respecte pas ses obligations ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'employeur qui ne respecte pas ses obligations de tiers saisi peut être condamné à payer la dette à la place du salarié. Il encourt également des sanctions civiles pour manquement à ses obligations légales."
          }
        },
        {
          "@type": "Question",
          "name": "Un accord amiable est-il possible après le déclenchement de la saisie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Même après l'ouverture de la procédure, le débiteur peut négocier un accord amiable avec son créancier (délai de paiement, remise partielle). En cas d'accord, la saisie peut être suspendue ou arrêtée."
          }
        },
        {
          "@type": "Question",
          "name": "La saisie s'applique-t-elle aux primes et aux heures supplémentaires ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La saisie s'applique à l'ensemble des revenus du travail : salaire de base, primes, heures supplémentaires, indemnités soumises à cotisations. Les sommes non saisissables sont strictement limitées par la loi (remboursement de frais, certaines indemnités spécifiques)."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Saisie sur salaire 2025" }
      ]
    }
  ]
}

export default function ArticleSaisieSalaire() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Saisie sur salaire 2025</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Saisie sur salaire : décryptage complet de la nouvelle procédure et du cadre légal</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 16 juillet 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 8 min de lecture
                </span>
              </div>
                            <img
                src="https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/saisie-sur-salaire.jpg"
                alt="Saisie sur salaire : décryptage complet de la nouvelle procédure et du cadre légal"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#reforme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Une réforme majeure de la procédure en 2025</a></li>
                <li><a href="#commissaire" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>— A. Le nouveau rôle du commissaire de justice</a></li>
                <li><a href="#procedure" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>— B. Déroulement étape par étape</a></li>
                <li><a href="#bareme" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le barème de saisie 2025</a></li>
                <li><a href="#employeur" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le rôle et les obligations de l'employeur</a></li>
                <li><a href="#cas-particuliers" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Cas particuliers et recours</a></li>
                <li><a href="#simulateur" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Estimer le montant d'une saisie</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La saisie sur salaire, qualifiée de <strong>saisie des rémunérations</strong>, est une mesure d'exécution forcée qui permet à un créancier de recouvrer une dette impayée par un prélèvement direct sur la paie du débiteur. Longtemps encadrée par un processus judiciaire, cette procédure a été profondément modernisée en 2025 pour la rendre plus rapide et efficace, sans pour autant sacrifier les droits du débiteur.</p>
              </section>

              <section id="reforme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Une réforme majeure de la procédure en 2025
                </h2>

                <section id="commissaire">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    A. Le nouveau rôle du commissaire de justice
                  </h3>
                  <p style={{marginBottom: '1rem'}}>La réforme marque la <strong>fin de l'intervention systématique du juge</strong> pour l'ouverture de la procédure. Alors que le processus exigeait autrefois une audience de conciliation obligatoire au tribunal, le nouveau système repose sur une démarche simplifiée, administrée par le <strong>commissaire de justice</strong>.</p>
                  <p style={{marginBottom: '1rem'}}>Le commissaire de justice, agissant en vertu d'un titre exécutoire, est l'acteur central du processus. Cette nouvelle approche, dont les modalités sont définies par le <strong>Code des procédures civiles d'exécution</strong>, a pour but d'accélérer les démarches pour les créanciers. Elle ne modifie toutefois pas les principes de fond de la saisie.</p>
                </section>

                <section id="procedure">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    B. Déroulement étape par étape
                  </h3>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    <li><strong>1. Mandatement :</strong> le créancier mandate un commissaire de justice qui initie la saisie sans passer par le tribunal. Le commissaire vérifie la validité du titre exécutoire.</li>
                    <li><strong>2. Notification à l'employeur :</strong> l'employeur (tiers saisi) est notifié de l'acte de saisie. Dès réception, le versement mensuel des montants dus est enclenché.</li>
                    <li><strong>3. Registre numérique national :</strong> toutes les étapes sont consignées dans un registre géré par la Chambre nationale des commissaires de justice, assurant traçabilité et transparence.</li>
                    <li><strong>4. Recours a posteriori :</strong> le débiteur dispose toujours d'un droit de contestation, mais il s'exerce après l'ouverture de la procédure. Si la saisie est estimée irrégulière, le juge de l'exécution peut être saisi.</li>
                  </ul>
                </section>
              </section>

              <section id="bareme">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le barème de saisie 2025 : un calcul précis et progressif
                </h2>
                <p style={{marginBottom: '1rem'}}>Le montant saisissable n'est jamais laissé au hasard. La loi protège une part minimale du salaire, correspondant au RSA pour une personne seule — soit <strong>646,52 € en 2025</strong>. Cette somme, dite part insaisissable, doit impérativement être laissée au débiteur.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Tranche mensuelle de revenu net</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'center', fontWeight: '600'}}>Fraction saisissable</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Jusqu'à 370 €", "1/20ᵉ"],
                        ["De 370,01 € à 721,67 €", "1/10ᵉ"],
                        ["De 721,68 € à 1 074,17 €", "1/5ᵉ"],
                        ["De 1 074,18 € à 1 424,17 €", "1/4"],
                        ["De 1 424,18 € à 1 775 €", "1/3"],
                        ["De 1 775,01 € à 2 133,33 €", "2/3"],
                        ["Au-delà de 2 133,33 €", "100 %"],
                      ].map(([t, f], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{t}</td>
                          <td style={{padding: '10px 12px', textAlign: 'center', color: '#0f2d6e', fontWeight: '600'}}>{f}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Majoration :</strong> une majoration de <strong>143,33 € par personne à charge</strong> s'ajoute à chaque tranche — ce qui réduit le montant saisissable. À noter dans les entreprises de plus de 10 salariés : la part soumise à CSG-CRDS est également assujettie à la taxe sur les salaires.
                  </p>
                </div>
              </section>

              <section id="employeur">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le rôle et les obligations de l'employeur
                </h2>
                <p style={{marginBottom: '1rem'}}>L'employeur, ou « tiers saisi », a une responsabilité légale majeure dès qu'il est informé de la saisie. Il doit :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>Effectuer une <strong>déclaration du tiers saisi</strong> au commissaire de justice en fournissant toutes les informations requises sur la situation de l'employé</li>
                  <li>Retenir la fraction saisissable sur la paie du salarié à chaque échéance</li>
                  <li>Verser les sommes retenues au commissaire de justice, qui se charge de les transférer au créancier</li>
                </ul>
                <div style={{background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#dc2626', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Attention :</strong> tout manquement à ces obligations peut engager la responsabilité de l'employeur, qui pourrait être contraint de payer la dette à la place du salarié.
                  </p>
                </div>
              </section>

              <section id="cas-particuliers">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Cas particuliers et recours
                </h2>
                <p style={{marginBottom: '1rem'}}>Certaines dettes bénéficient de procédures de recouvrement spécifiques et prioritaires :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Les <strong>pensions alimentaires</strong> peuvent faire l'objet d'une procédure de paiement direct</li>
                  <li>Les <strong>dettes fiscales</strong> sont recouvrées par le biais d'un avis à tiers détenteur (ATD)</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Bien que la procédure soit simplifiée, le débiteur a toujours un droit de contestation. S'il estime que la saisie est irrégulière, il peut saisir le <strong>juge de l'exécution</strong>. Un avocat spécialisé peut analyser la situation et mettre en œuvre les recours appropriés.</p>
              </section>

              <section id="simulateur">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Estimer le montant d'une saisie sur salaire
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour mieux anticiper les conséquences d'une éventuelle saisie, un simulateur officiel est disponible. En renseignant le salaire net et le nombre de personnes à charge, il permet d'obtenir une estimation précise de la quotité saisissable.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '600', margin: '0 0 6px'}}>Simulateur officiel du gouvernement</p>
                  <a href="https://www.justice.fr/simulateurs/saisie-salaire#simuler" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontSize: '13px', fontWeight: '600', textDecoration: 'none'}}>Accéder au simulateur sur justice.fr →</a>
                </div>
              </section>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelle est la part insaisissable du salaire en 2025 ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La part insaisissable correspond au montant du RSA pour une personne seule, soit 646,52 € en 2025. Cette somme doit impérativement rester au débiteur. Une majoration de 143,33 € par personne à charge s'y ajoute.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'employeur doit-il informer le salarié de la saisie ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. L'employeur (tiers saisi) doit informer le salarié de la saisie pratiquée sur son salaire. Il est tenu de lui remettre un bulletin de paie mentionnant les retenues effectuées.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que risque l'employeur s'il ne respecte pas ses obligations ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'employeur qui ne respecte pas ses obligations de tiers saisi peut être condamné à payer la dette à la place du salarié. Il encourt également des sanctions civiles pour manquement à ses obligations légales.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un accord amiable est-il possible après le déclenchement de la saisie ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. Même après l'ouverture de la procédure, le débiteur peut négocier un accord amiable avec son créancier (délai de paiement, remise partielle). En cas d'accord, la saisie peut être suspendue ou arrêtée.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La saisie s'applique-t-elle aux primes et aux heures supplémentaires ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La saisie s'applique à l'ensemble des revenus du travail : salaire de base, primes, heures supplémentaires, indemnités soumises à cotisations. Les sommes non saisissables sont strictement limitées par la loi (remboursement de frais, certaines indemnités spécifiques).</p>
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
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto — FCFBL ACTIVITIES</p>
            </div>

            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47 € à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée.</p>
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
                <span key="Saisie sur salaire" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Saisie sur salaire</span>
                <span key="Procédure" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Procédure</span>
                <span key="Droit social" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit social</span>
                <span key="Employeur" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Employeur</span>
                <span key="Commissaire de justice" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Commissaire de justice</span>
                <span key="Barème 2025" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Barème 2025</span>
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