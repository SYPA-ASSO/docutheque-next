import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: "À propos · François CHOLEZ — Cabinet Cholez-Pagotto",
  description: "Découvrez le parcours et les valeurs de François CHOLEZ, juriste-formaliste et conseil en assurances, fondateur du Cabinet Cholez-Pagotto. Un cabinet né de 25 ans d'expérience au carrefour de l'entreprise, du droit et du secteur social.",
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "François CHOLEZ",
      "jobTitle": "Juriste · Formaliste · Conseil en assurances",
      "worksFor": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/a-propos",
      "image": "https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=400&d=mm&r=g",
      "description": "Juriste-formaliste et conseil en assurances, fondateur du Cabinet Cholez-Pagotto. 25 ans d'expérience au carrefour de l'entrepreneuriat, du management et du secteur social et associatif.",
      "memberOf": [
        {
          "@type": "Organization",
          "name": "Conseil Représentatif des Formalistes de France (CRFF)"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "À propos" }
      ]
    }
  ]
}

const valeurs = [
  {
    titre: "L'accessibilité comme exigence",
    texte: "Comprendre ses droits, sécuriser son activité, être bien couvert en assurances — ce ne sont pas des privilèges réservés à ceux qui ont les moyens d'un avocat ou d'un expert-comptable. Ce cabinet est construit sur la conviction que chacun mérite un accès clair, humain et abordable à l'information juridique et aux formalités.",
  },
  {
    titre: "La rigueur sans la complexité",
    texte: "Le droit est précis. Il n'a pas à être obscur. Chaque réponse, chaque document, chaque accompagnement proposé ici est rédigé avec rigueur — et en langage clair. Parce que comprendre ce qu'on signe, ce qu'on déclare ou ce à quoi on a droit, c'est la base de toute décision éclairée.",
  },
  {
    titre: "Le terrain avant la théorie",
    texte: "L'expertise de ce cabinet n'est pas née dans un prétoire. Elle s'est construite dans les structures d'insertion, les quartiers prioritaires, les conseils d'administration associatifs, les formalités de création d'entreprise. Cette expérience du terrain est ce qui rend les réponses utiles — pas seulement exactes.",
  },
  {
    titre: "Un engagement de long terme",
    texte: "Accompagner un porteur de projet, une association ou un particulier, ce n'est pas livrer un document et passer à la suite. C'est comprendre une situation, anticiper les besoins à venir, orienter vers les bons interlocuteurs quand nécessaire. C'est ce qu'on appelle un service utile.",
  },
]

export default function APropos() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>À propos</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '3rem', alignItems: 'center'}}>
            <div style={{flex: '0 0 auto'}}>
              <img
                src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=400&d=mm&r=g"
                alt="François CHOLEZ — Juriste, Formaliste, Conseil en assurances"
                style={{width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.2)'}}
              />
            </div>
            <div style={{flex: 1}}>
              <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '600', marginBottom: '14px', letterSpacing: '0.05em'}}>
                À PROPOS
              </span>
              <h1 style={{color: 'white', fontSize: '1.9rem', fontWeight: '700', margin: '0 0 10px', lineHeight: '1.3'}}>
                François CHOLEZ
              </h1>
              <p style={{color: '#93c5fd', fontSize: '14px', margin: '0 0 16px', fontWeight: '500'}}>
                Juriste · Formaliste membre du CRFF · Conseil en assurances (ORIAS 26003943)
              </p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.85', margin: 0, maxWidth: '560px'}}>
                Le droit ne devrait pas être une affaire de spécialistes. Pas quand il s'agit de comprendre ses droits, de créer son activité ou de s'assurer correctement. Le Cabinet Cholez-Pagotto est né de cette conviction — et de vingt-cinq ans d'expérience pour la mettre en pratique.
              </p>
            </div>
          </div>
        </section>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '4rem'}}>

          {/* PARCOURS */}
          <section style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start'}}>
            <div>
              <h2 style={{color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Un parcours construit à l'intersection de deux mondes</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#374151', fontSize: '14px', lineHeight: '1.9'}}>
                <p style={{margin: 0}}>
                  Pendant quinze ans, François CHOLEZ a créé, développé et géré des entreprises. Une expérience de l'intérieur de ce que signifie naviguer seul dans les formalités administratives, les obligations juridiques, les questions d'assurance — sans guide, sans interlocuteur disponible, souvent sans réponse claire.
                </p>
                <p style={{margin: 0}}>
                  En parallèle, une carrière construite dans le secteur social et associatif — éducateur spécialisé, responsable de service, cadre de direction, directeur de projets de territoire. Treize ans à accompagner des personnes en difficulté, co-fonder et administrer des structures associatives, piloter des projets d'insertion dans des quartiers prioritaires. À mesurer, chaque jour, le coût de l'incompréhension juridique et administrative pour des gens qui n'avaient personne à qui poser leurs questions.
                </p>
                <p style={{margin: 0}}>
                  Ces deux mondes ont forgé une même conviction : l'accès à l'information juste, au bon moment, change des trajectoires. Personnelles. Professionnelles. Associatives. Le Cabinet Cholez-Pagotto est né de cette évidence — en octobre 2024.
                </p>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem'}}>
                <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 12px'}}>Pourquoi cette combinaison de services ?</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  {[
                    "Formaliste parce que j'ai créé et géré des structures, et que je sais ce que coûte une mauvaise immatriculation.",
                    "Information sur vos droits parce que j'accompagnais déjà des gens bénévolement — il fallait rendre ce service accessible et pérenne.",
                    "Conseil en assurances parce qu'un créateur sans RC Pro est exposé dès le premier jour.",
                    "ESS parce que le secteur associatif est mon terrain depuis plus de dix ans.",
                    "RGPD et DPO parce que les structures sociales gèrent les données les plus sensibles qui soient, souvent sans les moyens d'un expert dédié.",
                    "La Docuthèque parce qu'un outil bien fait vaut mieux qu'une explication répétée.",
                  ].map((item, i) => (
                    <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                      <CheckCircle size={14} color="#1a4fba" style={{flexShrink: 0, marginTop: '2px'}} strokeWidth={2} />
                      <span style={{color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* VALEURS */}
          <section>
            <h2 style={{color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 1.75rem', textAlign: 'center'}}>Ce qui guide notre approche</h2>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              {valeurs.map((v, i) => (
                <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem'}}>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 10px'}}>{v.titre}</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0}}>{v.texte}</p>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERTISES ET ENGAGEMENTS */}
          <section style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem'}}>

            <div>
              <h2 style={{color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Formaliste ESS, juriste pour associations loi 1901 et créateurs d'entreprise</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
                {[
                  {
                    label: "Juriste-Formaliste",
                    detail: "Membre du Conseil Représentatif des Formalistes de France (CRFF). Spécialisation en droit des affaires, droit social et droit des associations."
                  },
                  {
                    label: "Courtier en assurances et réassurances",
                    detail: "Immatriculé à l'ORIAS sous le numéro 26003943, sous contrôle de l'ACPR (4 place de Budapest, 75436 Paris Cedex 09). IAS Niveau 1."
                  },
                  {
                    label: "Expert en protection des données",
                    detail: "Accompagnement RGPD et missions de DPO externalisé pour entreprises, associations et structures ESS."
                  },
                  {
                    label: "Expert juridique ESS et action sociale",
                    detail: "Expertise appliquée au Code de l'Action Sociale et des Familles (CASF) et aux spécificités juridiques du secteur de l'économie sociale et solidaire."
                  },
                ].map((e, i) => (
                  <div key={i} style={{background: '#f8fafc', borderRadius: '10px', padding: '14px 16px', borderLeft: '3px solid #1a4fba'}}>
                    <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 4px'}}>{e.label}</p>
                    <p style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6', margin: 0}}>{e.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Engagements</h2>
              <div style={{color: '#374151', fontSize: '14px', lineHeight: '1.9', marginBottom: '1.5rem'}}>
                <p style={{margin: '0 0 1rem'}}>
                  En dehors du cabinet, je m'engage bénévolement dans plusieurs domaines qui me tiennent profondément à cœur : l'éducation populaire, la protection de l'enfance et le parrainage, l'insertion sociale et professionnelle.
                </p>
                <p style={{margin: 0}}>
                  Ces engagements ne sont pas accessoires. Ils sont le prolongement naturel des valeurs qui guident ce cabinet — la conviction que chacun, quelle que soit sa situation, mérite d'être accompagné, orienté et écouté.
                </p>
              </div>
              <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem'}}>
                <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>
                  <strong>Chercheur associé</strong> — Co-auteur de l'ouvrage <em>« L'éducation, ça se partage ? »</em> aux éditions L'Harmattan (2021), issu d'une recherche action collaborative et participative sur la co-éducation et les ressources de l'entourage.
                </p>
                <p style={{color: '#6b7280', fontSize: '11px', margin: 0}}>Université de Strasbourg · UNAPP · 2018–2021</p>
              </div>
            </div>

          </section>


          {/* TÉMOIGNAGES */}
          <section>
            <h2 style={{color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 0.5rem', textAlign: 'center'}}>Ils nous font confiance</h2>
            <p style={{color: '#6b7280', fontSize: '13px', textAlign: 'center', margin: '0 0 2rem', lineHeight: '1.6'}}>Des particuliers, des créateurs d'entreprise, des associations — et des professionnels du droit.</p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>

              {/* Nathalie V. — avocate, pleine largeur */}
              <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <p style={{color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: '1.85', margin: 0, fontStyle: 'italic'}}>
                  « Mon cabinet formaliste préféré. Je recommande. »
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{width: '36px', height: '36px', background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px', fontWeight: '700', flexShrink: 0}}>N</div>
                  <div style={{flex: 1}}>
                    <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: 0}}>Nathalie V.</p>
                    <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', margin: 0}}>Avocate</p>
                  </div>
                  <span style={{background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)', fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px'}}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="white"/>
                  </svg>
                  Facebook
                </span>
                </div>
              </div>

              {/* SYP Association */}
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0, fontStyle: 'italic'}}>
                  « Les informations juridiques pédagogiques fournies, ainsi que les guides et documents explicatifs, m'ont permis de mieux comprendre le droit, mes droits en tant que bénévole gérant une association. L'écoute est bienveillante, les besoins sont rapidement identifiés. Les solutions proposées sont claires, efficaces et adaptées à la situation. Une entreprise professionnelle, éthique et experte, que je recommande sans hésitation. »
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{width: '36px', height: '36px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a4fba', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>S</div>
                  <div style={{flex: 1}}>
                    <p style={{color: '#374151', fontSize: '13px', fontWeight: '700', margin: 0}}>SYP Association</p>
                    <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Responsable associatif</p>
                  </div>
                  <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </span>
                </div>
              </div>

              {/* David O. */}
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0, fontStyle: 'italic'}}>
                  « Ma situation et mon projet de création d'entreprise ont été rapidement bien compris. J'ai bénéficié de toutes les informations utiles pour ne pas faire d'erreur dans le process de création de mon statut de micro-entrepreneur. Bravo pour la clarté des informations, les modèles de documents et le guide adressé. Futurs entrepreneurs, soumettez vos projets auprès de François — vous serez soutenu, accompagné et gagnerez en tranquillité d'esprit. »
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{width: '36px', height: '36px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a4fba', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>D</div>
                  <div style={{flex: 1}}>
                    <p style={{color: '#374151', fontSize: '13px', fontWeight: '700', margin: 0}}>David O.</p>
                    <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Créateur d'entreprise</p>
                  </div>
                  <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </span>
                </div>
              </div>

              {/* Thierry V. */}
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0, fontStyle: 'italic'}}>
                  « Merci à Monsieur CHOLEZ pour tous ses bons conseils et toute son aide dans mes démarches administratives suite à mon burnout. »
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{width: '36px', height: '36px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a4fba', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>T</div>
                  <div style={{flex: 1}}>
                    <p style={{color: '#374151', fontSize: '13px', fontWeight: '700', margin: 0}}>Thierry V.</p>
                    <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Particulier</p>
                  </div>
                  <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </span>
                </div>
              </div>

              {/* Sara B. */}
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0, fontStyle: 'italic'}}>
                  « Un accompagnement professionnel, une écoute attentive et des réponses rapides. Un service fiable et efficace, comme on l'attend. »
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                  <div style={{width: '36px', height: '36px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a4fba', fontSize: '12px', fontWeight: '700', flexShrink: 0}}>S</div>
                  <div style={{flex: 1}}>
                    <p style={{color: '#374151', fontSize: '13px', fontWeight: '700', margin: 0}}>Sara B.</p>
                    <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Particulier</p>
                  </div>
                  <span style={{background: '#f3f4f6', color: '#6b7280', fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '4px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px'}}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Google
                  </span>
                </div>
              </div>

            </div>
          </section>

          {/* CTA */}
          <section style={{background: '#0f2d6e', borderRadius: '14px', padding: '2.5rem', display: 'flex', gap: '3rem', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
            <div style={{flex: 1, minWidth: '280px'}}>
              <p style={{color: 'white', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px'}}>Une question, un projet, une situation à clarifier ?</p>
              <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0, lineHeight: '1.7'}}>
                Le cabinet est disponible pour vous accompagner — sans jargon, sans engagement préalable.
              </p>
            </div>
            <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap'}}>
              <a href="/contact" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '12px 28px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>
                Nous contacter →
              </a>
              <a href="/services" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '12px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none'}}>
                Voir nos services
              </a>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}