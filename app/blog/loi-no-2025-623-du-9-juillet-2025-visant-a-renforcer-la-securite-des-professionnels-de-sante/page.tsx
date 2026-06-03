import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Loi visant à renforcer la sécurité des professionnels de santé · Blog Docuthèque`,
  description: `La loi n°2025-623 du 9 juillet 2025 renforce la protection des soignants face aux agressions. Peines aggravées, aide au dépôt de plainte, rapport annuel obligatoire : ce qu'il faut savoir.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Loi visant à renforcer la sécurité des professionnels de santé",
      "description": "La loi n°2025-623 du 9 juillet 2025 renforce la protection des soignants face aux agressions. Peines aggravées, aide au dépôt de plainte, rapport annuel obligatoire : ce qu'il faut savoir.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-2025-623-9-juillet-2025-renforcant-securite-professionnels-sante.webp",
      "datePublished": "2025-07-10",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Docuthèque · Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/loi-no-2025-623-du-9-juillet-2025-visant-a-renforcer-la-securite-des-professionnels-de-sante",
      "keywords": ["Santé", "Professionnels de santé", "Violences", "Loi 2025-623", "Sécurité", "Employeurs"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "La loi s'applique-t-elle aux professionnels libéraux ou uniquement aux salariés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La loi s'applique à l'ensemble des professionnels de santé, qu'ils soient salariés ou libéraux. Les ordres professionnels peuvent agir pour les professionnels libéraux exerçant en cabinet."
          }
        },
        {
          "@type": "Question",
          "name": "L'obligation de rapport annuel concerne-t-elle tous les établissements ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'obligation concerne les établissements de santé (publics et privés) ainsi que les structures médico-sociales. Elle implique la présentation chaque année au conseil d'administration ou de surveillance d'un bilan des actes de violence et des dispositifs de sécurité déployés."
          }
        },
        {
          "@type": "Question",
          "name": "Comment un soignant peut-il dissimuler son adresse personnelle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La loi permet aux professionnels de santé victimes d'agressions de communiquer l'adresse de leur ordre professionnel ou de leur lieu de travail dans les procédures judiciaires, en lieu et place de leur adresse personnelle, pour protéger leur vie privée."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles sont les nouvelles peines encourues pour une agression envers un professionnel de santé ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Les peines sont significativement alourdies par la loi. Pour les violences physiques aggravées commises envers un professionnel de santé, elles peuvent atteindre 7 ans d'emprisonnement et 100 000 € d'amende. Le délit d'outrage (paroles, gestes ou menaces à caractère irrespectueux) est puni d'une amende pouvant aller jusqu'à 7 500 €. Les peines varient selon la nature et la gravité des faits."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Loi n°2025-623 sécurité professionnels de santé" }
      ]
    }
  ]
}

export default function ArticleLoisante() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Loi n°2025-623 sécurité professionnels de santé</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DE LA SANTÉ</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Loi visant à renforcer la sécurité des professionnels de santé</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 10 juillet 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 6 min de lecture
                </span>
              </div>
                            <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-2025-623-9-juillet-2025-renforcant-securite-professionnels-sante.webp"
                alt="Loi visant à renforcer la sécurité des professionnels de santé"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#retenir" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce qu'il faut retenir</a></li>
                <li><a href="#mesures" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Principales mesures</a></li>
                <li><a href="#employeurs" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Obligations des employeurs et collectivités</a></li>
                <li><a href="#tableau" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Tableau récapitulatif des dispositions</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La <strong>loi n°2025-623 du 9 juillet 2025</strong>, publiée au Journal Officiel du 10 juillet 2025, vise à mieux protéger les professionnels de santé, leurs collaborateurs et leurs proches face aux agressions ou menaces qu'ils peuvent subir dans l'exercice de leurs fonctions.</p>
                <p style={{marginBottom: '1rem'}}>Cette loi s'inscrit dans un contexte préoccupant : les actes de violence envers les soignants ont significativement augmenté ces dernières années, touchant médecins, infirmiers, pharmaciens, aides-soignants et l'ensemble des personnels de santé et médico-sociaux.</p>
              </section>

              <section id="retenir">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce qu'il faut retenir
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>Sécurité juridique renforcée :</strong> le champ d'application des peines est élargi : toute violence, outrage ou vol visant les professionnels ou le matériel médical, en ville, en établissement ou à domicile, est désormais puni par des peines plus lourdes.</li>
                  <li><strong>Aide active au dépôt de plainte :</strong> employeurs, ordres professionnels et établissements peuvent agir pour soutenir et représenter les victimes.</li>
                  <li><strong>Suivi systématique :</strong> obligation de bilan annuel des violences et sécurité, avec prise en compte formelle par les conseils de gouvernance des établissements.</li>
                  <li><strong>Discrétion et protection des victimes :</strong> possibilité pour les soignants de dissimuler leur adresse personnelle dans les procédures judiciaires.</li>
                  <li><strong>Message fort :</strong> l'État affirme une « tolérance zéro » face aux violences faites aux soignants.</li>
                </ul>
              </section>

              <section id="mesures">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Principales mesures
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                  <li><strong>Création d'un observatoire national</strong> des violences envers les professionnels de santé et médico-sociaux pour centraliser les données et améliorer la prévention.</li>
                  <li><strong>Facilitation du dépôt de plainte :</strong> les ordres professionnels (Ordre des médecins, des infirmiers…) peuvent désormais <strong>se constituer partie civile</strong> pour soutenir leurs membres victimes d'agressions dans l'exercice de leurs fonctions.</li>
                  <li><strong>Sécurisation des lieux d'exercice :</strong> la loi impose de prendre en compte la protection des professionnels de santé dans les aménagements urbains et de prévoir des dispositifs renforçant leur sécurité.</li>
                </ul>
              </section>

              <section id="employeurs">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Obligations des employeurs et collectivités
                </h2>
                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  Dépôt de plainte facilité
                </h3>
                <p style={{marginBottom: '1rem'}}>L'employeur public ou privé d'un professionnel de santé (ou tout établissement médico-social) peut <strong>déposer plainte en lieu et place de la victime</strong>, avec son accord, dès qu'un incident est constaté dans le cadre professionnel.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  Rapport annuel obligatoire
                </h3>
                <p style={{marginBottom: '1rem'}}>Les établissements de santé (publics ou privés), ainsi que les structures médico-sociales, doivent présenter chaque année au conseil d'administration ou de surveillance un <strong>bilan des actes de violence subis</strong> et des dispositifs déployés pour la sécurité, suivi d'un avis formel du conseil.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                  Ordres professionnels engagés
                </h3>
                <p style={{marginBottom: '1rem'}}>Les ordres professionnels (médicaux, infirmiers…) et leurs unions régionales peuvent se constituer <strong>partie civile</strong>, porter plainte au nom de professionnels libéraux victimes, ou ester en justice pour défendre l'intérêt collectif de la profession.</p>
              </section>

              <section id="tableau">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Tableau récapitulatif des dispositions
                </h2>
                <div style={{overflowX: 'auto', margin: '1rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Axe</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Description détaillée</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Peines aggravées", "Extension aux violences (physiques, verbales, menaces, vols) commises envers tout personnel de santé. Peines alourdies pouvant aller jusqu'à 7 ans d'emprisonnement et 100 000 € d'amende pour violences aggravées, davantage selon la gravité des faits et les circonstances."],
                        ["Extension du délit d'outrage", "L'outrage (paroles, gestes ou menaces à caractère irrespectueux) désormais expressément puni lorsqu'il s'adresse à tout professionnel de santé ou personnel de structure médicale dans l'exercice de ses fonctions. Amende jusqu'à 7 500 €."],
                        ["Vols aggravés", "Le vol de matériel médical ou tout matériel au détriment d'un professionnel de santé est désormais une circonstance aggravante."],
                        ["Protection vie privée", "Les victimes peuvent utiliser l'adresse de leur ordre ou de leur lieu de travail lorsqu'elles déposent plainte, pour préserver leur vie privée."],
                        ["Territoires d'Outre-Mer", "Les dispositions s'appliquent également en Nouvelle-Calédonie, Polynésie, Wallis-et-Futuna."],
                      ].map(([axe, desc], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600', verticalAlign: 'top'}}>{axe}</td>
                          <td style={{padding: '10px 12px', color: '#374151', verticalAlign: 'top'}}>{desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.5rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '600', margin: '0 0 6px'}}>Texte de référence</p>
                  <a href="https://www.legifrance.gouv.fr/download/pdf?id=rUzV-KwVubczTVGwjiQsiuZ-PkK9A6thiDb3sgQcNsM=" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontSize: '13px', fontWeight: '600', textDecoration: 'none'}}>Loi n°2025-623 du 9 juillet 2025 · Journal officiel du 10 juillet 2025 sur Légifrance →</a>
                </div>
              </section>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La loi s'applique-t-elle aux professionnels libéraux ou uniquement aux salariés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La loi s'applique à l'ensemble des professionnels de santé, qu'ils soient salariés ou libéraux. Les ordres professionnels peuvent agir pour les professionnels libéraux exerçant en cabinet.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'obligation de rapport annuel concerne-t-elle tous les établissements ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>L'obligation concerne les établissements de santé (publics et privés) ainsi que les structures médico-sociales. Elle implique la présentation chaque année au conseil d'administration ou de surveillance d'un bilan des actes de violence et des dispositifs de sécurité déployés.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment un soignant peut-il dissimuler son adresse personnelle ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La loi permet aux professionnels de santé victimes d'agressions de communiquer l'adresse de leur ordre professionnel ou de leur lieu de travail dans les procédures judiciaires, en lieu et place de leur adresse personnelle, pour protéger leur vie privée.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles sont les nouvelles peines encourues pour une agression envers un professionnel de santé ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Les peines sont significativement alourdies par la loi. Pour les violences physiques aggravées commises envers un professionnel de santé, elles peuvent atteindre 7 ans d'emprisonnement et 100 000 € d'amende. Le délit d'outrage (paroles, gestes ou menaces à caractère irrespectueux) est puni d'une amende pouvant aller jusqu'à 7 500 €. Les peines varient selon la nature et la gravité des faits.</p>
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
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47 € à l'unité, sans abonnement.</p>
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
                <span key="Santé" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Santé</span>
                <span key="Professionnels de santé" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Professionnels de santé</span>
                <span key="Violences" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Violences</span>
                <span key="Loi 2025-623" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Loi 2025-623</span>
                <span key="Sécurité" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Sécurité</span>
                <span key="Employeurs" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Employeurs</span>
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