import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Contrat d'engagement éducatif (CEE) : le seuil minimum de la rémunération du salarié a été revalorisé · Blog Docuthèque`,
  description: `Le décret du 4 décembre 2024 augmente le seuil minimum de rémunération des salariés en CEE à 51,08 € bruts/jour à partir du 1er mai 2025. Tout ce qu'il faut savoir sur ce contrat spécifique.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Contrat d'engagement éducatif (CEE) : le seuil minimum de la rémunération du salarié a été revalorisé",
      "description": "Le décret du 4 décembre 2024 augmente le seuil minimum de rémunération des salariés en CEE à 51,08 € bruts/jour à partir du 1er mai 2025. Tout ce qu'il faut savoir sur ce contrat spécifique.",
      "image": "https://www.cholez-pagotto.fr/wp-content/uploads/2016/10/CEE-revalorisation-scaled.jpg",
      "datePublished": "30 janvier 2025",
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
      "url": "https://cholez-pagotto.fr/blog/cee-revalorisation-remuneration-decret-4-decembre-2024",
      "keywords": ["CEE", "Animation", "Rémunération", "Contrat", "ACM", "BAFA", "Animateurs"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "La revalorisation de mai 2025 s'applique-t-elle aux contrats déjà signés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La revalorisation s'applique à partir du 1er mai 2025, y compris pour les contrats en cours à cette date. L'employeur doit s'assurer que la rémunération versée respecte le nouveau minimum à partir de cette date."
          }
        },
        {
          "@type": "Question",
          "name": "Le CEE ouvre-t-il droit aux congés payés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le CEE ne crée pas de droit à des congés payés au sens habituel du terme. En revanche, le salarié bénéficie de jours de repos compensateurs, notamment lorsque le repos quotidien de 11 heures est supprimé en raison de la présence continue requise sur le lieu d'accueil."
          }
        },
        {
          "@type": "Question",
          "name": "Un salarié peut-il cumuler plusieurs CEE avec différents employeurs ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, mais la durée cumulée de l'ensemble de ses CEE ne peut pas excéder 80 jours sur une période de 12 mois consécutifs. Au-delà, le contrat risque la requalification en contrat de travail ordinaire."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sont les conséquences d'un CEE non conforme ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un CEE non conforme aux exigences légales (mentions obligatoires manquantes, dépassement du plafond de 80 jours, rémunération inférieure au minimum) peut être requalifié en contrat de travail à durée indéterminée (CDI). L'employeur s'expose alors au paiement des salaires, charges sociales et indemnités correspondants."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "CEE revalorisation 2025" }
      ]
    }
  ]
}

export default function ArticleCEE() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>CEE revalorisation 2025</span>
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
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Contrat d'engagement éducatif (CEE) : le seuil minimum de la rémunération du salarié a été revalorisé</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 30 janvier 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 8 min de lecture
                </span>
              </div>
                            <img
                src="https://www.cholez-pagotto.fr/wp-content/uploads/2016/10/CEE-revalorisation-scaled.jpg"
                alt="Contrat d'engagement éducatif (CEE) : le seuil minimum de la rémunération du salarié a été revalorisé"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#revalorisation" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. La revalorisation : ce qu'il faut retenir</a></li>
                <li><a href="#statut" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le CEE : un statut spécifique pour l'animation</a></li>
                <li><a href="#concerne" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>— A. Qui est concerné ?</a></li>
                <li><a href="#mentions" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>— B. Mentions obligatoires du contrat</a></li>
                <li><a href="#temps" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>— C. Temps de travail et flexibilité</a></li>
                <li><a href="#obligations" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>— D. Obligations de l'employeur avant embauche</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Le décret du 4 décembre 2024 a <strong>augmenté le seuil minimum de rémunération</strong> des salariés en Contrat d'Engagement Éducatif (CEE). Ce dispositif contractuel de droit privé est conçu spécifiquement pour l'encadrement occasionnel des mineurs en Accueils Collectifs de Mineurs (ACM).</p>
              </section>

              <section id="revalorisation">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. La revalorisation : ce qu'il faut retenir
                </h2>
                <p style={{marginBottom: '1rem'}}>Il est important de savoir que la <strong>rémunération journalière en CEE est forfaitaire</strong> — le salarié perçoit le même montant pour une journée de travail, qu'il travaille 4 ou 8 heures.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Période</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Minimum journalier brut</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Calcul</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{borderBottom: '1px solid #e5e7eb', background: 'white'}}>
                        <td style={{padding: '10px 12px', color: '#374151', fontWeight: '600'}}>Jusqu'au 30 avril 2025</td>
                        <td style={{padding: '10px 12px', color: '#374151'}}><strong>26,14 € bruts</strong></td>
                        <td style={{padding: '10px 12px', color: '#6b7280'}}>2,20 × SMIC horaire (11,88 €)</td>
                      </tr>
                      <tr style={{borderBottom: '1px solid #e5e7eb', background: '#f8fafc'}}>
                        <td style={{padding: '10px 12px', color: '#374151', fontWeight: '600'}}>À partir du 1er mai 2025</td>
                        <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '700'}}><strong>51,08 € bruts</strong></td>
                        <td style={{padding: '10px 12px', color: '#6b7280'}}>4,30 × SMIC horaire</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Il est toujours possible de fixer une rémunération journalière <strong>supérieure</strong> au minimum légal, à condition qu'elle reste indépendante du nombre d'heures réellement travaillées.</p>
              </section>

              <section id="statut">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le CEE : un statut spécifique pour l'animation
                </h2>
                <p style={{marginBottom: '1rem'}}>Le Contrat d'Engagement Éducatif est régi par des dispositions spécifiques du Code de l'Action Sociale et des Familles (CASF). Il déroge à certaines règles du Code du travail afin de s'adapter aux particularités des missions d'animation et de direction.</p>

                <section id="concerne">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    A. Qui est concerné ?
                  </h3>
                  <p style={{marginBottom: '1rem'}}>Le CEE s'adresse principalement aux <strong>animateurs, éducateurs et directeurs</strong> qui exercent des fonctions d'encadrement de manière occasionnelle pendant les vacances scolaires, les congés professionnels ou de loisirs.</p>
                  <p style={{marginBottom: '1rem'}}>Les employeurs éligibles sont les organismes ayant reçu une qualification pour l'accueil collectif de mineurs ou de personnes handicapées.</p>
                  <div style={{background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                    <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                      <strong>Important :</strong> le CEE ne s'applique pas aux personnels occupant un emploi permanent dans la structure, ni à ceux qui animent quotidiennement les accueils périscolaires, sauf si leur engagement est strictement occasionnel et limité dans le temps.
                    </p>
                  </div>
                </section>

                <section id="mentions">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    B. Mentions obligatoires du contrat
                  </h3>
                  <p style={{marginBottom: '0.75rem'}}>Pour être valide et éviter toute requalification, le contrat doit impérativement comporter :</p>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                    <li>L'identité et le domicile de l'employé et de l'organisateur</li>
                    <li>La durée du contrat et les conditions de rupture anticipée</li>
                    <li>Le montant et les modalités de la rémunération</li>
                    <li>Le nombre de jours travaillés prévus et, si possible, un programme indicatif des jours de repos</li>
                  </ul>
                  <p style={{marginBottom: '1rem'}}>Le salarié s'engage par ailleurs à ce que la durée cumulée de ses CEE n'excède pas <strong>80 jours sur une période de 12 mois consécutifs</strong>.</p>
                </section>

                <section id="temps">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    C. Temps de travail et flexibilité
                  </h3>
                  <p style={{marginBottom: '1rem'}}>Le CEE autorise des aménagements spécifiques au temps de travail :</p>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <li>Lorsque l'employé est présent en permanence sur le lieu d'accueil, le repos quotidien de 11 heures peut être supprimé, à condition d'être compensé</li>
                    <li>À partir d'un séjour de 4 jours, une partie du repos doit être prise pendant le séjour (au moins 4 heures consécutives)</li>
                    <li>La durée hebdomadaire de travail ne peut excéder <strong>48 heures en moyenne sur 6 mois consécutifs</strong></li>
                  </ul>
                </section>

                <section id="obligations">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    D. Obligations de l'employeur avant embauche
                  </h3>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <li>Consultation du <strong>casier judiciaire</strong> et du <strong>FIJAIS</strong> (Fichier judiciaire national des auteurs d'infractions sexuelles)</li>
                    <li>Attestation d'honorabilité (obligatoire)</li>
                    <li>Vérification des qualifications professionnelles (BAFA, BAFD ou équivalents)</li>
                  </ul>
                </section>
              </section>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La revalorisation de mai 2025 s'applique-t-elle aux contrats déjà signés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La revalorisation s'applique à partir du 1er mai 2025, y compris pour les contrats en cours à cette date. L'employeur doit s'assurer que la rémunération versée respecte le nouveau minimum à partir de cette date.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le CEE ouvre-t-il droit aux congés payés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le CEE ne crée pas de droit à des congés payés au sens habituel du terme. En revanche, le salarié bénéficie de jours de repos compensateurs, notamment lorsque le repos quotidien de 11 heures est supprimé en raison de la présence continue requise sur le lieu d'accueil.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Un salarié peut-il cumuler plusieurs CEE avec différents employeurs ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, mais la durée cumulée de l'ensemble de ses CEE ne peut pas excéder 80 jours sur une période de 12 mois consécutifs. Au-delà, le contrat risque la requalification en contrat de travail ordinaire.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles sont les conséquences d'un CEE non conforme ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Un CEE non conforme aux exigences légales (mentions obligatoires manquantes, dépassement du plafond de 80 jours, rémunération inférieure au minimum) peut être requalifié en contrat de travail à durée indéterminée (CDI). L'employeur s'expose alors au paiement des salaires, charges sociales et indemnités correspondants.</p>
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
                <span key="CEE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>CEE</span>
                <span key="Animation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Animation</span>
                <span key="Rémunération" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Rémunération</span>
                <span key="Contrat" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Contrat</span>
                <span key="ACM" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>ACM</span>
                <span key="BAFA" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>BAFA</span>
                <span key="Animateurs" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Animateurs</span>
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