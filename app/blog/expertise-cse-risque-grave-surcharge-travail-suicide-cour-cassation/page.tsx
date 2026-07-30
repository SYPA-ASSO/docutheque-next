import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Expertise CSE pour risque grave : ce que confirme la Cour de cassation après un suicide lié à la surcharge de travail · Blog Cabinet Cholez-Pagotto`,
  description: `Chez Microsoft France, un CSE a voté une expertise pour risque grave après un suicide lié à la surcharge de travail. La Cour de cassation censure le tribunal qui l'avait annulée en écartant l'absence d'alerte individuelle et les mesures correctives tardives de l'employeur.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/expertise-cse-risque-grave-surcharge-travail-suicide-cour-cassation',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/expertise-cse-risque-grave-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/expertise-cse-risque-grave-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Expertise CSE pour risque grave : ce que confirme la Cour de cassation après un suicide lié à la surcharge de travail",
      "description": "Chez Microsoft France, un CSE a voté une expertise pour risque grave après un suicide lié à la surcharge de travail. La Cour de cassation censure le tribunal qui l'avait annulée en écartant l'absence d'alerte individuelle et les mesures correctives tardives de l'employeur.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/expertise-cse-risque-grave-2026.webp",
      "datePublished": "2026-07-16",
      "author": { "@type": "Person", "name": "François CHOLEZ", "worksFor": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto" } },
      "publisher": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "url": "https://cholez-pagotto.fr/blog/expertise-cse-risque-grave-surcharge-travail-suicide-cour-cassation",
      "keywords": ["CSE", "Risque grave", "Expertise CSE", "Risques psychosociaux", "Surcharge de travail", "DUERP"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Le CSE a-t-il un droit automatique à l'expertise pour risque grave ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. Le CSE doit démontrer l'existence d'un risque grave, identifié et actuel, pour la santé physique ou mentale des salariés, au jour de sa délibération. La charge de la preuve pèse sur le comité en cas de contestation devant le président du tribunal judiciaire." } },
        { "@type": "Question", "name": "L'employeur peut-il écarter un risque grave en prenant des mesures après le vote du CSE ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. La Cour de cassation rappelle que le risque grave s'apprécie au jour de la délibération du CSE. Des mesures prises par l'employeur après ce vote, comme l'actualisation du document unique d'évaluation des risques, ne peuvent pas rétroactivement priver le comité de son droit à l'expertise." } },
        { "@type": "Question", "name": "L'absence d'alerte du salarié avant son suicide empêche-t-elle la reconnaissance d'un risque grave ?", "acceptedAnswer": { "@type": "Answer", "text": "Non. La Cour de cassation a censuré un jugement qui écartait le risque grave notamment au motif que le salarié n'avait pas alerté sur sa situation avant son suicide. L'absence d'alerte individuelle n'empêche pas de retenir un risque grave déjà documenté par des expertises antérieures portant sur la charge de travail collective." } },
        { "@type": "Question", "name": "L'expertise pour risque grave est-elle indépendante du droit d'alerte et du pouvoir d'enquête du CSE ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. La Cour de cassation a confirmé, dans un arrêt du 1er octobre 2025, que l'existence de pouvoirs d'enquête ou la mise en œuvre préalable d'une procédure d'alerte pour danger grave et imminent ne font pas obstacle à l'exercice, par le CSE, de son droit à l'expertise pour risque grave. Ce sont trois outils distincts et cumulables." } }
      ]
    },
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
      { "@type": "ListItem", "position": 3, "name": "Expertise CSE pour risque grave" }
    ] }
  ]
}

export default function ArticleExpertiseCseRisqueGrave2026() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>
        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <a href="/blog" style={{color: '#6b7280', textDecoration: 'none'}}>Blog</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Expertise CSE pour risque grave</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>
          <article style={{flex: 1, minWidth: 0}}>
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT DU TRAVAIL</span>
                <span style={{background: '#fef2f2', color: '#dc2626', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>JURISPRUDENCE 2026</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Expertise CSE pour risque grave : ce que confirme la Cour de cassation après un suicide lié à la surcharge de travail</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><User size={13} strokeWidth={1.5} /> François CHOLEZ</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Calendar size={13} strokeWidth={1.5} /> 16 juillet 2026</span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}><Clock size={13} strokeWidth={1.5} /> 16 min de lecture</span>
              </div>
              <img src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/expertise-cse-risque-grave-2026.webp" alt="Expertise CSE pour risque grave : ce que confirme la Cour de cassation après un suicide lié à la surcharge de travail" style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px'}} />
            </div>

                        {/* EN RÉSUMÉ */}
            <div style={{background: '#f8fafc', border: '1px solid #dbeafe', borderLeft: '4px solid #0f2d6e', borderRadius: '10px', padding: '1.1rem 1.4rem', marginBottom: '1.75rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px', textTransform: 'uppercase', letterSpacing: '0.03em'}}>En résumé</p>
              <ul style={{paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', color: '#374151', fontSize: '13px', lineHeight: '1.6'}}>
                <li>Le CSE doit démontrer l'existence d'un risque grave, identifié et actuel, pour la santé physique ou mentale des salariés, au jour de sa délibération.</li>
                <li>La Cour de cassation rappelle que le risque grave s'apprécie au jour de la délibération du CSE.</li>
                <li>La Cour de cassation a censuré un jugement qui écartait le risque grave notamment au motif que le salarié n'avait pas alerté sur sa situation avant son suicide.</li>
                <li>La Cour de cassation a confirmé, dans un arrêt du 1er octobre 2025, que l'existence de pouvoirs d'enquête ou la mise en œuvre préalable d'une procédure d'alerte pour danger grave et imminent ne…</li>
              </ul>
            </div>

<nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Introduction</a></li>
                <li><a href="#cadre" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>I. L'expertise pour risque grave, un outil à la disposition du CSE</a></li>
                <li><a href="#autonomie" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>II. Une prérogative autonome, distincte de l'alerte et de l'enquête</a></li>
                <li><a href="#affaire" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>III. L'affaire jugée le 10 juin 2026 : chronologie des faits</a></li>
                <li><a href="#censure" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>IV. Ce que la Cour de cassation censure précisément</a></li>
                <li><a href="#panorama" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>V. Quand le risque grave est-il reconnu, ou écarté ?</a></li>
                <li><a href="#pratique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>VI. Ce que ça change concrètement</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>
              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Une rupture conventionnelle collective qui emporte 13&nbsp;% des effectifs. Deux réorganisations en deux ans. Deux rapports d'expertise qui, coup sur coup, pointent les risques psychosociaux liés à la charge de travail. Puis, en mars 2024, un salarié se suicide. Le comité social et économique (CSE) vote une expertise pour risque grave. L'employeur conteste, et obtient gain de cause en première instance. La Cour de cassation vient de rebattre les cartes, dans un arrêt du 10 juin 2026 qui mérite qu'on s'y attarde.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}le risque grave qui ouvre droit à l'expertise du CSE s'apprécie au jour de la délibération, un employeur ne peut pas écarter des risques psychosociaux que ses propres expertises ont déjà documentés, ni se rattraper en actualisant son document unique après coup, et l'absence d'alerte individuelle du salarié n'empêche pas de retenir un risque grave par ailleurs établi.
                  </p>
                </div>
              </section>

              <section id="cadre">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>I. L'expertise pour risque grave, un outil à la disposition du CSE</h2>
                <p style={{marginBottom: '1rem'}}>Dans les entreprises d'au moins 50 salariés, le CSE peut faire appel à un expert, intégralement rémunéré par l'employeur, lorsqu'un risque grave, identifié et actuel, est constaté pour la santé physique ou mentale des salariés, qu'il soit ou non révélé par un accident du travail, une maladie professionnelle ou à caractère professionnel (article L.&nbsp;2315-94, 1° du Code du travail). Le comité ne dispose toutefois d'aucun droit automatique à l'expertise : il doit démontrer, en cas de contestation, l'existence de ce risque grave, la charge de la preuve pesant sur lui devant le président du tribunal judiciaire (article L.&nbsp;2315-86 du même code).</p>
                <p style={{marginBottom: '1rem'}}>Ce n'est pas une nouveauté isolée : la jurisprudence retient de façon constante qu'un simple mécontentement, une compression d'effectifs sans autre élément, ou le nombre de salariés concernés, ne suffisent pas à eux seuls à caractériser un risque grave. Encore faut-il des indicateurs concrets et actuels.</p>
              </section>

              <section id="autonomie">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>II. Une prérogative autonome, distincte de l'alerte et de l'enquête</h2>
                <p style={{marginBottom: '1rem'}}>Le CSE d'au moins 50 salariés dispose en réalité de trois outils distincts en matière de santé et de sécurité : le pouvoir d'enquête en cas d'accident du travail ou de maladie professionnelle, le droit d'alerte en cas de danger grave et imminent, et l'expertise pour risque grave. Dans un arrêt du 1er octobre 2025, la Cour de cassation a précisé que ces trois outils sont cumulables et indépendants les uns des autres : l'existence de pouvoirs d'enquête, ou la mise en œuvre préalable d'une procédure d'alerte, ne fait pas obstacle en soi à l'exercice, par le comité, de son droit à l'expertise pour risque grave. Le juge, de son côté, doit se limiter à vérifier si les faits invoqués caractérisent ou non l'existence d'un risque grave, identifié et actuel, au jour de la délibération, sans se laisser distraire par les autres démarches déjà engagées.</p>
              </section>

              <section id="affaire">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>III. L'affaire jugée le 10 juin 2026 : chronologie des faits</h2>
                <p style={{marginBottom: '1rem'}}>L'affaire s'inscrit dans un contexte social tendu chez Microsoft France. Entre 2023 et 2024, l'entreprise connaît plusieurs restructurations d'ampleur : une rupture conventionnelle collective en 2023, qui entraîne le départ de 13&nbsp;% des effectifs, suivie d'une nouvelle réorganisation en 2024, elle-même contestée par les équipes, tandis qu'une autre restructuration se profile pour 2025.</p>
                <p style={{marginBottom: '1rem'}}>Deux rapports du cabinet Sextant, remis en août 2023 puis en août 2024, alertent la direction sur l'aggravation des risques psychosociaux et les déséquilibres dans la répartition de la charge de travail. En mars 2024, entre ces deux rapports, un salarié se suicide. Une enquête paritaire est diligentée ; son rapport, rendu le 15 juillet 2024, relève une intensité potentiellement problématique du travail et retient que l'hypothèse d'un épuisement professionnel ne peut être écartée.</p>
                <p style={{marginBottom: '1rem'}}>Le 21 octobre 2024, le CSE de Microsoft France délibère et désigne le cabinet Sextant expertise pour procéder à une expertise pour risque grave. Le 25 octobre, l'expert notifie sa lettre de mission et son estimation financière à la direction. Dès le 30 octobre 2024, l'employeur saisit le président du tribunal judiciaire de Nanterre selon la procédure accélérée au fond, pour obtenir à titre principal l'annulation de la délibération, et à titre subsidiaire une réduction du coût de l'expertise.</p>
                <p style={{marginBottom: '1rem'}}>Par un jugement du 30 janvier 2025, le tribunal judiciaire de Nanterre fait droit à la demande de l'employeur et annule l'expertise, sur la base de trois arguments : l'absence d'alerte individuelle du salarié décédé concernant sa propre charge de travail ; l'écartement des deux rapports d'expertise de 2023 et 2024, au motif qu'ils émanaient du même cabinet Sextant, devenu partie au litige en tant qu'expert désigné ; et la mise à jour du DUERP ainsi que la mise en place d'un PAPRIPACT, engagées par Microsoft France juste après le vote du CSE. Le tribunal en déduit que le lien entre le suicide et les conditions de travail n'était pas formellement établi, et que la surcharge de travail relevait d'un risque seulement potentiel. Le CSE et le cabinet d'expertise forment un pourvoi en cassation.</p>
              </section>


              <section id="censure">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>IV. Ce que la Cour de cassation censure précisément</h2>
                <p style={{marginBottom: '1rem'}}>La Cour de cassation casse ce jugement au visa de l'article L.&nbsp;2315-94, 1° du Code du travail, et le raisonnement qu'elle sanctionne mérite d'être détaillé point par point, car il touche à des arguments que beaucoup d'employeurs mobilisent en pratique.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Le moment de l'appréciation.</strong> Le risque grave s'apprécie au jour de la délibération du CSE, le 21 octobre 2024 dans cette affaire. Des mesures prises après cette date, aussi réelles soient-elles, ne peuvent pas rétroactivement faire disparaître un risque qui existait au moment du vote.</li>
                  <li><strong>La valeur des propres expertises de l'entreprise.</strong> Un employeur ne peut pas écarter des risques psychosociaux que ses propres expertises, commandées par lui ou avec son accord, ont déjà documentés. Contester la neutralité du cabinet d'expertise après en avoir accepté les conclusions pendant des mois n'a pas convaincu la Cour de cassation.</li>
                  <li><strong>L'absence d'alerte individuelle.</strong> Le fait que le salarié n'ait pas personnellement alerté sur sa situation avant son geste n'empêche pas de retenir un risque grave déjà établi au niveau collectif, par des rapports antérieurs portant sur la charge de travail de l'ensemble d'un service ou d'une équipe.</li>
                </ul>
              </section>

              <section id="panorama">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>V. Quand le risque grave est-il reconnu, ou écarté ?</h2>
                <p style={{marginBottom: '1rem'}}>Cette décision s'inscrit dans une jurisprudence déjà dense, et parfois moins favorable au CSE qu'on pourrait le croire à la lecture de cet arrêt. Dans une affaire jugée le 19 novembre 2025 concernant un projet de réorganisation à la SNCF, la Cour de cassation a au contraire validé l'annulation d'une expertise pour risque grave, alors même que l'existence de risques psychosociaux (surcharge de travail, désorganisation, accidents, mal-être) était établie : ce qui a fait la différence, c'est que l'employeur avait mené un long travail préparatoire, une analyse approfondie, et pris des mesures de prévention jugées suffisantes à la suite d'un droit d'alerte, faisant ainsi disparaître le risque grave avant la délibération elle-même.</p>
                <p style={{marginBottom: '1rem'}}>D'autres décisions illustrent ce même équilibre délicat. Le risque grave a par exemple été écarté lorsque seuls 14 salariés sur 84 s'estimaient en risque psychosocial élevé dans un questionnaire, ou face à une simple insatisfaction sur les conditions de travail sans élément de preuve supplémentaire, ou encore lorsqu'une tentative de suicide sur le lieu de travail avait été explicitement rattachée par la personne concernée à des raisons personnelles plutôt qu'à ses conditions de travail. À l'inverse, il a été reconnu lorsque plusieurs situations d'épuisement professionnel avaient conduit des salariés à un arrêt maladie, dans un contexte de surcharge de travail liée à un rachat d'entreprise et à la défaillance des fonctions supports.</p>
                <p style={{marginBottom: '1rem'}}>Ce que ces décisions ont en commun, c'est l'exigence d'éléments concrets et actuels, pas de l'automaticité dans un sens ou dans l'autre : ni un droit systématique à l'expertise pour le CSE, ni une immunité pour l'employeur qui aurait simplement pris quelques mesures après coup.</p>
                <p style={{marginBottom: '1rem'}}>Le principe selon lequel le risque grave s'apprécie au jour de la délibération n'est d'ailleurs pas une nouveauté de l'arrêt du 10 juin 2026 : la Cour de cassation l'avait déjà affirmé, dans un contexte différent, à propos d'un accident industriel ayant exposé des riverains à des fumées toxiques (Cass. soc., 12 mai 2021, n°&nbsp;20-12.072), puis à propos d'un CSE d'Électricité de Mayotte (Cass. soc., 14 février 2024, n°&nbsp;22-18.413), qui exigeait déjà du juge qu'il contrôle la réalité des motifs invoqués dans la délibération du CSE et leur actualité au jour du vote. L'arrêt Microsoft France a donc surtout une portée pédagogique, en rappelant avec force ce principe déjà établi dans une affaire où l'enjeu humain était particulièrement lourd.</p>
              </section>

              <section id="pratique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>VI. Ce que ça change concrètement</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Pour l'employeur :</strong> traiter chaque rapport d'expertise commandé en interne comme une obligation d'agir, datée et documentée, jamais comme un simple document d'archive dont on pourrait ensuite minimiser la portée. Tenir le DUERP réellement à jour en continu, risques psychosociaux compris, plutôt que de l'actualiser une fois une délibération votée.</li>
                  <li><strong>Pour le CSE :</strong> s'appuyer sur les expertises et enquêtes déjà réalisées, y compris celles commandées par l'employeur lui-même, pour construire un dossier solide au moment de la délibération, sans attendre une alerte individuelle qui n'est pas une condition de l'expertise pour risque grave.</li>
                  <li><strong>Pour les deux :</strong> la prévention se joue avant l'incident. Une fois la délibération votée, la fenêtre pour agir rétroactivement se referme : la bonne intention tardive ne protège ni l'un ni l'autre.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Sécuriser votre prévention des risques psychosociaux</h2>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>DUERP, CSE, prévention des RPS : besoin d'y voir clair ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>Le cabinet propose des formations sur-mesure en droit du travail pour dirigeants, RH et membres du CSE, ainsi qu'une information juridique écrite sous 24 à 48h : notre juriste identifie les textes applicables à votre situation et vous apporte une réponse documentée.</p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/formations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Formations sur-mesure</a>
                    <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px'}}>Conclusion</h2>
                <p style={{marginBottom: '1rem'}}>Cet arrêt du 10 juin 2026 ne bouleverse pas les conditions de l'expertise pour risque grave, il en rappelle la logique la plus exigeante : ce qui compte, c'est l'état du risque au moment où le CSE délibère, pas ce que l'employeur fait ensuite. Nos articles sur le <a href="/blog/duerp-guide-pratique-employeur-cse-salaries" style={{color: '#1a4fba', textDecoration: 'underline'}}>DUERP</a> et sur la <a href="/blog/loi-fraudes-sociales-fiscales-2026-mesures-rh-paie" style={{color: '#1a4fba', textDecoration: 'underline'}}>loi de lutte contre les fraudes sociales et fiscales</a> abordent d'autres facettes de cette même exigence : une prévention documentée, tenue à jour, et jamais reconstituée après coup.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>Sources officielles</h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Cour de cassation, chambre sociale, 10 juin 2026, n°&nbsp;25-11.463, inédit (affaire Microsoft France) : <a href="https://www.legifrance.gouv.fr/juri/id/JURITEXT000054293575" style={{color: '#1a4fba'}}>JURITEXT000054293575</a></li>
                  <li>Cour de cassation, chambre sociale, 1er octobre 2025 (caractère autonome de l'expertise pour risque grave)</li>
                  <li>Cour de cassation, chambre sociale, 19 novembre 2025 (deux arrêts, dont l'un relatif au projet de réorganisation SNCF)</li>
                  <li>Cour de cassation, chambre sociale, 12 mai 2021, n°&nbsp;20-12.072 (le risque grave s'apprécie au jour de la délibération, appliqué à un accident industriel)</li>
                  <li>Cour de cassation, chambre sociale, 14 février 2024, n°&nbsp;22-18.413 (Électricité de Mayotte, contrôle de la réalité et de l'actualité des motifs de la délibération)</li>
                  <li>Code du travail, article L.&nbsp;2315-94, 1° (expertise pour risque grave)</li>
                  <li>Code du travail, article L.&nbsp;2315-86 (charge de la preuve du risque grave)</li>
                  <li>Cour de cassation, chambre sociale, 17 octobre 2018, n°&nbsp;17-18.609 ; 7 juillet 2021, n°&nbsp;19-50.068 ; 15 mai 2019, n°&nbsp;17-17.863 (exemples de risque grave écarté)</li>
                  <li>Cour de cassation, chambre sociale, 5 février 2020, n°&nbsp;18-23.753 (exemple de risque grave reconnu)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur. Cet article traite d'un sujet sensible (suicide en lien avec le travail) ; si vous-même ou une personne de votre entourage traversez une période difficile, n'hésitez pas à solliciter un professionnel de santé ou une ligne d'écoute dédiée.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>Le CSE a-t-il un droit automatique à l'expertise pour risque grave ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. Le CSE doit démontrer l'existence d'un risque grave, identifié et actuel, pour la santé physique ou mentale des salariés, au jour de sa délibération. La charge de la preuve pèse sur le comité en cas de contestation devant le président du tribunal judiciaire.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>L'employeur peut-il écarter un risque grave en prenant des mesures après le vote du CSE ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. La Cour de cassation rappelle que le risque grave s'apprécie au jour de la délibération du CSE. Des mesures prises par l'employeur après ce vote, comme l'actualisation du document unique d'évaluation des risques, ne peuvent pas rétroactivement priver le comité de son droit à l'expertise.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>L'absence d'alerte du salarié avant son suicide empêche-t-elle la reconnaissance d'un risque grave ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Non. La Cour de cassation a censuré un jugement qui écartait le risque grave notamment au motif que le salarié n'avait pas alerté sur sa situation avant son suicide. L'absence d'alerte individuelle n'empêche pas de retenir un risque grave déjà documenté par des expertises antérieures portant sur la charge de travail collective.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}><span>L'expertise pour risque grave est-elle indépendante du droit d'alerte et du pouvoir d'enquête du CSE ?</span><span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0}}>+</span></summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px'}}>Oui. La Cour de cassation a confirmé, dans un arrêt du 1er octobre 2025, que l'existence de pouvoirs d'enquête ou la mise en œuvre préalable d'une procédure d'alerte pour danger grave et imminent ne font pas obstacle à l'exercice, par le CSE, de son droit à l'expertise pour risque grave. Ce sont trois outils distincts et cumulables.</p>
                  </details>
                </div>
              </section>
            </div>
          </article>

          <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>À propos de l'auteur</p>
              <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px'}}>
                <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0}} />
                <div><p style={{color: '#374151', fontSize: '12px', fontWeight: '700', margin: '0 0 2px'}}>François CHOLEZ</p><p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p></div>
              </div>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.</p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>
            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>Poser ma question →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/duerp-guide-pratique-employeur-cse-salaries" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block', marginBottom: '10px'}}>DUERP : le guide pratique employeur, CSE et salariés →</a>
              <a href="/blog/loi-fraudes-sociales-fiscales-2026-mesures-rh-paie" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>Loi de lutte contre les fraudes sociales et fiscales : mesures RH et paie →</a>
            </div>
            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>En savoir plus →</a>
            </div>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <a href="/blog?tag=CSE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>CSE</a>
                <a href="/blog?tag=Risque%20grave" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Risque grave</a>
                <a href="/blog?tag=Risques%20psychosociaux" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>Risques psychosociaux</a>
                <a href="/blog?tag=DUERP" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none'}}>DUERP</a>
              </div>
            </div>
            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>← Retour au blog</a>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
