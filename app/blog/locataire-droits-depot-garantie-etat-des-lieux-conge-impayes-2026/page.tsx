import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Locataire : vos droits sur le dépôt de garantie, l'état des lieux, le congé et les impayés en 2026 · Blog Cabinet Cholez-Pagotto`,
  description: `Dépôt de garantie, état des lieux, préavis, loyers impayés : tout ce qu'un locataire doit savoir en 2026, avec les montants, les délais et la procédure à jour, vérifiés à la source.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/locataire-droits-depot-garantie-etat-des-lieux-conge-impayes-2026',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/droits-locataire-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/droits-locataire-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Locataire : vos droits sur le dépôt de garantie, l'état des lieux, le congé et les impayés en 2026",
      "description": "Dépôt de garantie, état des lieux, préavis, loyers impayés : tout ce qu'un locataire doit savoir en 2026, avec les montants, les délais et la procédure à jour, vérifiés à la source.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/droits-locataire-2026.webp",
      "datePublished": "2026-06-08",
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
      "url": "https://cholez-pagotto.fr/blog/locataire-droits-depot-garantie-etat-des-lieux-conge-impayes-2026",
      "keywords": ["Locataire", "Dépôt de garantie", "État des lieux", "Préavis", "Loyers impayés", "Bail", "Loi 1989", "Logement"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le montant maximum du dépôt de garantie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le dépôt de garantie est plafonné par la loi : il ne peut excéder un mois de loyer hors charges pour un logement loué vide, et deux mois pour un logement meublé. Dans le cas particulier du bail mobilité, le dépôt de garantie est interdit, même si le bailleur peut demander un garant. Ces règles figurent à l'article 22 de la loi du 6 juillet 1989."
          }
        },
        {
          "@type": "Question",
          "name": "Dans quel délai le dépôt de garantie doit-il être restitué ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un mois si l'état des lieux de sortie est conforme à celui d'entrée, avec restitution intégrale. Deux mois en cas de retenues justifiées (dégradations, loyers ou charges impayés). Le délai court à compter de la remise des clés, et non de la fin du préavis. En cas de retard, le bailleur doit une majoration de 10 % du loyer mensuel hors charges par mois de retard commencé."
          }
        },
        {
          "@type": "Question",
          "name": "Quel préavis pour quitter mon logement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le locataire peut résilier le bail à tout moment, sans justification. Le préavis est de trois mois pour un logement vide, réduit à un mois pour un meublé. Il est aussi ramené à un mois pour un logement vide situé en zone tendue, ou dans certains cas (mutation professionnelle, perte d'emploi, premier emploi, état de santé, bénéficiaire de certaines aides, violences conjugales)."
          }
        },
        {
          "@type": "Question",
          "name": "Le propriétaire peut-il me donner congé quand il veut ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Contrairement au locataire, le bailleur ne peut donner congé qu'à l'échéance du bail, en respectant un préavis de six mois pour un logement vide et de trois mois pour un meublé. Ce congé doit être motivé et reposer sur l'un des motifs prévus par la loi : reprise du logement pour y habiter, vente, ou motif légitime et sérieux."
          }
        },
        {
          "@type": "Question",
          "name": "L'état des lieux est-il obligatoire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui, à l'entrée comme à la sortie. Il doit être contradictoire, signé par les deux parties et annexé au bail. À défaut d'état des lieux d'entrée, le locataire est en principe présumé avoir reçu le logement en bon état. Un état des lieux établi unilatéralement par le bailleur ne peut pas servir de base à des retenues sur le dépôt de garantie."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il en cas de loyers impayés ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le bailleur commence en principe par une relance amiable, puis fait délivrer un commandement de payer par un commissaire de justice. Depuis la loi du 27 juillet 2023, le locataire dispose de six semaines pour régulariser (contre deux mois auparavant) pour les baux conclus après le 29 juillet 2023. À défaut, le juge peut résilier le bail et ordonner l'expulsion, ou accorder des délais de paiement. La trêve hivernale suspend les expulsions du 1er novembre au 31 mars."
          }
        },
        {
          "@type": "Question",
          "name": "Qui contacter en cas de litige avec mon propriétaire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pour de nombreux litiges (loyer, charges, dépôt de garantie, état des lieux), la saisine de la commission départementale de conciliation est un préalable gratuit et souvent efficace. L'ADIL offre une information gratuite sur le logement, et le Fonds de solidarité pour le logement peut apporter une aide. En dernier recours, le tribunal judiciaire est compétent pour trancher."
          }
        },
        {
          "@type": "Question",
          "name": "Mon assurance peut-elle m'aider ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Souvent, oui. Beaucoup de contrats comportent une garantie de protection juridique qui peut prendre en charge les frais d'un litige locatif. Côté bailleur, l'assurance loyers impayés et la garantie Visale (gratuite, proposée par Action Logement) couvrent les impayés et certaines dégradations. Avant d'engager des frais, il est utile de vérifier ses contrats."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Droits du locataire 2026" }
      ]
    }
  ]
}

export default function ArticleDroitsLocataire2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Droits du locataire 2026</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>LOCATAIRE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>LOGEMENT</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Locataire : vos droits sur le dépôt de garantie, l'état des lieux, le congé et les impayés en 2026</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 8 juin 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 16 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/droits-locataire-2026.webp"
                alt="Locataire : vos droits sur le dépôt de garantie, l'état des lieux, le congé et les impayés en 2026"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#bail" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le bail et l'état des lieux</a></li>
                <li><a href="#depot" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Le dépôt de garantie</a></li>
                <li><a href="#conge-locataire" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Le congé du locataire</a></li>
                <li><a href="#conge-bailleur" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Le congé du bailleur</a></li>
                <li><a href="#impayes" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Les loyers impayés</a></li>
                <li><a href="#recours" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Vos recours en cas de litige</a></li>
                <li><a href="#assurance" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Le réflexe assurance</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Louer un logement, c'est s'engager dans une relation encadrée par la loi, qui protège le locataire autant qu'elle l'oblige. Pourtant, au moment d'un départ, d'un dépôt de garantie non restitué ou d'un désaccord, beaucoup de locataires ignorent l'étendue de leurs droits, et renoncent par méconnaissance.</p>
                <p style={{marginBottom: '1rem'}}>Cet article fait le point, de façon complète et vérifiée, sur les quatre sujets qui concentrent l'essentiel des litiges : l'état des lieux, le dépôt de garantie, le congé et les loyers impayés. Le tout à jour des règles applicables en 2026, dans le cadre de la loi du 6 juillet 1989 et de ses réformes récentes.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> votre dépôt de garantie (<strong>1 mois</strong> en vide, <strong>2 mois</strong> en meublé) doit être restitué sous <strong>1 mois</strong> si l'état des lieux est conforme, vous pouvez partir à tout moment avec un préavis de <strong>3 mois</strong> (1 mois en meublé ou en zone tendue), et l'état des lieux est votre meilleure protection.
                  </p>
                </div>
              </section>

              <section id="bail">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le bail et l'état des lieux
                </h2>
                <p style={{marginBottom: '1rem'}}>Le contrat de location d'une résidence principale, vide ou meublée, doit mentionner un certain nombre d'éléments obligatoires : identité des parties, adresse et surface habitable du logement, montant du loyer et des charges, montant du dépôt de garantie, date de prise d'effet, et classement énergétique (DPE). Il est régi par la <strong>loi du 6 juillet 1989</strong>.</p>
                <p style={{marginBottom: '1rem'}}>L'<strong>état des lieux</strong> est sans doute votre meilleure protection. Établi de façon <strong>contradictoire</strong> à l'entrée et à la sortie, signé par les deux parties et annexé au bail, il sert de référence pour apprécier d'éventuelles dégradations. Trois précisions essentielles.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>À défaut d'état des lieux d'entrée, le locataire est en principe <strong>présumé avoir reçu le logement en bon état</strong>.</li>
                  <li>Un état des lieux établi <strong>unilatéralement</strong> par le bailleur ne peut servir de base à des retenues sur le dépôt de garantie.</li>
                  <li>Une <strong>grille de vétusté</strong>, annexée au bail, permet de distinguer l'usure normale (à la charge du bailleur) des dégradations imputables au locataire.</li>
                </ul>
                <div style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '3px solid #d4a017', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le modèle qui va avec</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Notre <strong>modèle d'état des lieux d'entrée et de sortie</strong>, conforme à la loi de 1989 et prêt à compléter pièce par pièce, sécurise votre meilleure protection en cas de litige sur le dépôt de garantie.</p>
                  <a href="/catalogue/modele-etat-des-lieux-entree-sortie-location" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le modèle d'état des lieux →</a>
                </div>
              </section>

              <section id="depot">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Le dépôt de garantie
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est le sujet qui génère le plus de litiges. Le dépôt de garantie est <strong>plafonné</strong> : un mois de loyer hors charges pour un logement vide, deux mois pour un meublé. Pour un bail mobilité, il est tout simplement <strong>interdit</strong>.</p>
                <div style={{overflowX: 'auto', margin: '1.5rem 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Situation</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Règle</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Montant, logement vide", "1 mois de loyer hors charges maximum"],
                        ["Montant, logement meublé", "2 mois de loyer hors charges maximum"],
                        ["Restitution, état des lieux conforme", "1 mois à compter de la remise des clés, restitution intégrale"],
                        ["Restitution, retenues justifiées", "2 mois à compter de la remise des clés"],
                        ["Retard de restitution", "Majoration de 10 % du loyer mensuel hors charges par mois de retard commencé"],
                      ].map(([s, r], i) => (
                        <tr key={i} style={{background: i % 2 === 0 ? 'white' : '#f8fafc', borderBottom: '1px solid #e5e7eb'}}>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{s}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{r}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={{marginBottom: '1rem'}}>Le bailleur ne peut retenir une somme que pour des loyers ou charges impayés, des dégradations constatées à l'état des lieux de sortie (hors usure normale), ou des réparations locatives. En copropriété, il peut conserver une provision de <strong>20&nbsp;%</strong> jusqu'à l'arrêté annuel des comptes. Pour aller plus loin sur ce point précis, voir notre article dédié à la différence entre caution et dépôt de garantie.</p>
                <div style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '3px solid #d4a017', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le modèle qui va avec</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Dépôt non restitué dans les délais ? Notre <strong>modèle de lettre de demande de restitution du dépôt de garantie</strong> réclame la somme due et la majoration de 10&nbsp;% par mois de retard, sur les bons fondements.</p>
                  <a href="/catalogue/modele-lettre-restitution-depot-de-garantie" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le modèle de demande de restitution →</a>
                </div>
              </section>

              <section id="conge-locataire">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Le congé du locataire
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est l'un de vos droits les plus protecteurs : en application de l'article 15 de la loi de 1989, vous pouvez <strong>résilier le bail à tout moment, sans avoir à vous justifier</strong>. Seul le préavis doit être respecté.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Trois mois</strong> pour un logement vide, c'est le principe.</li>
                  <li><strong>Un mois</strong> pour un logement meublé.</li>
                  <li><strong>Un mois</strong> également pour un logement vide en <strong>zone tendue</strong>, ou dans certains cas : mutation professionnelle, perte d'emploi, premier emploi, état de santé justifiant un changement de domicile, bénéficiaire de certaines aides sociales, ou violences conjugales.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Le congé se notifie par lettre recommandée avec accusé de réception, par acte de commissaire de justice, ou par remise en main propre contre récépissé. Attention : pendant le préavis, vous restez <strong>redevable du loyer et des charges</strong> jusqu'à son terme, sauf si le logement est reloué plus tôt en accord avec le bailleur. Vous ne pouvez pas non plus déduire le dépôt de garantie de vos derniers loyers.</p>
                <div style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '3px solid #d4a017', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le modèle qui va avec</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Notre <strong>modèle de lettre de congé du locataire</strong>, à envoyer en recommandé, mentionne le préavis applicable (et le motif de réduction à un mois en zone tendue) pour un congé incontestable.</p>
                  <a href="/catalogue/modele-lettre-conge-locataire-preavis" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le modèle de congé →</a>
                </div>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le pack qui va plus loin</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Notre <strong>pack Locataire</strong> réunit vos documents utiles du début à la fin du bail : état des lieux, lettre de congé avec le bon préavis, demande de restitution du dépôt de garantie, et mise en demeure pour des réparations à la charge du bailleur.</p>
                  <a href="/catalogue/pack-locataire" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le pack Locataire →</a>
                </div>
              </section>

              <section id="conge-bailleur">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Le congé du bailleur
                </h2>
                <p style={{marginBottom: '1rem'}}>La situation du bailleur est bien plus encadrée. Contrairement au locataire, il ne peut donner congé qu'à l'<strong>échéance du bail</strong>, en respectant un préavis de <strong>six mois</strong> pour un logement vide et de <strong>trois mois</strong> pour un meublé.</p>
                <p style={{marginBottom: '1rem'}}>Surtout, ce congé doit être <strong>motivé</strong> et reposer sur l'un des motifs limitativement prévus par la loi : la <strong>reprise</strong> du logement pour y habiter (lui-même ou un proche), la <strong>vente</strong> du logement, ou un <strong>motif légitime et sérieux</strong> (par exemple des manquements répétés du locataire). Un congé qui ne respecte pas ces conditions peut être contesté.</p>
                <div style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '3px solid #d4a017', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le modèle qui va avec</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Notre <strong>modèle de congé du bailleur</strong> (reprise, vente ou motif légitime et sérieux) respecte la motivation et le préavis imposés, et intègre, pour le congé pour vendre, l'offre de vente qui ouvre au locataire son droit de préemption (article 15 de la loi de 1989).</p>
                  <a href="/catalogue/modele-conge-bailleur-reprise-vente-motif" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le modèle de congé bailleur →</a>
                </div>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le pack qui va plus loin</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Notre <strong>pack Propriétaire bailleur</strong> rassemble les documents clés de la location : bail conforme, état des lieux, congé du bailleur, relance et mise en demeure pour loyers impayés, et quittance de loyer.</p>
                  <a href="/catalogue/pack-proprietaire-bailleur" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le pack Propriétaire →</a>
                </div>
              </section>

              <section id="impayes">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Les loyers impayés
                </h2>
                <p style={{marginBottom: '1rem'}}>La procédure a été sensiblement durcie par la <strong>loi du 27 juillet 2023</strong>. Elle se déroule par étapes.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>La relance amiable.</strong> Dès le premier impayé, le bailleur agit par écrit pour tenter de résoudre la situation et constituer une preuve.</li>
                  <li><strong>Le commandement de payer.</strong> Délivré par un commissaire de justice, il vise la clause résolutoire du bail. Depuis la réforme de 2023, le locataire dispose de <strong>six semaines</strong> pour régulariser, contre deux mois auparavant, pour les baux conclus après le 29 juillet 2023.</li>
                  <li><strong>La phase judiciaire.</strong> À défaut de régularisation, le juge peut prononcer la résiliation du bail et l'expulsion, ou, selon la situation, accorder des <strong>délais de paiement</strong> (de quelques mois à plusieurs années) et un accompagnement social.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Deux garde-fous importants pour le locataire : la <strong>trêve hivernale</strong>, qui suspend les expulsions du <strong>1er novembre au 31 mars</strong>, et la possibilité de solliciter très tôt l'ADIL ou le Fonds de solidarité pour le logement. Côté bailleur, l'assurance loyers impayés et la garantie Visale permettent d'anticiper ce risque.</p>
                <div style={{background: 'white', border: '1px solid #e5e7eb', borderLeft: '3px solid #d4a017', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Le modèle qui va avec</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Avant le commandement de payer délivré par commissaire de justice, notre <strong>modèle de lettre de relance puis de mise en demeure pour loyers impayés</strong> formalise les premières étapes amiables et constitue une preuve utile pour la suite de la procédure.</p>
                  <a href="/catalogue/modele-lettre-relance-mise-en-demeure-loyers-impayes" style={{color: '#b8860b', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir le modèle pour impayés →</a>
                </div>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Côté assurance</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>L'<strong>assurance loyers impayés (GLI)</strong> rembourse les loyers non perçus et prend souvent en charge les frais de procédure, parfois les dégradations. Elle ne se cumule pas avec une caution, sauf locataire étudiant ou apprenti. Pensez aussi à l'assurance <strong>propriétaire non occupant (PNO)</strong>, obligatoire en copropriété. En courtier, le cabinet vous aide à choisir la bonne combinaison.</p>
                  <a href="/conseil-assurances" style={{color: '#1a4fba', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              </section>

              <section id="recours">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Vos recours en cas de litige
                </h2>
                <p style={{marginBottom: '1rem'}}>Avant d'envisager un procès, le réflexe le plus efficace est de bien cerner vos droits et de formaliser votre demande au bon niveau. Le cabinet peut vous y aider directement (<a href="/information-sur-vos-droits" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>réponse écrite de notre juriste</a> ou <a href="/accompagnement-particuliers" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>accompagnement des particuliers</a>), pour éviter une procédure quand c'est possible et préparer votre dossier quand elle devient nécessaire.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>En complément</strong>, plusieurs voies extérieures, souvent gratuites, peuvent débloquer la situation : la commission départementale de conciliation (préalable utile pour les litiges de loyer, de charges, de dépôt de garantie ou d'état des lieux), l'information neutre délivrée par l'ADIL, et le Fonds de solidarité pour le logement en cas de difficultés.</li>
                  <li><strong>Le tribunal judiciaire</strong> tranche en dernier recours les litiges locatifs.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Dans tous les cas, conservez précieusement vos documents : bail, états des lieux signés, quittances, courriers et photographies. Ce sont vos preuves.</p>
              </section>

              <section id="assurance">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Le réflexe assurance
                </h2>
                <p style={{marginBottom: '1rem'}}>Un point souvent négligé : un litige locatif peut engager des frais (expertise, procédure). Or de nombreux contrats comportent une garantie de <strong>protection juridique</strong> qui peut les prendre en charge, voire accompagner la démarche. Avant d'engager des frais, vérifiez vos contrats d'assurance habitation, votre carte bancaire ou un contrat dédié.</p>
                <p style={{marginBottom: '1rem'}}>C'est tout l'intérêt d'un regard combinant le juridique et l'assurantiel : identifier vos droits, puis vérifier comment ils sont couverts. Côté bailleur, le bon réflexe est d'anticiper le risque d'impayés (garant, assurance loyers impayés, garantie Visale) plutôt que de le subir.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 6px'}}>Côté assurance</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: '0 0 10px'}}>Rappel utile : l'<strong>assurance habitation est obligatoire pour le locataire</strong> (article 7 de la loi de 1989), à justifier chaque année. Côté propriétaire, la PNO (obligatoire en copropriété) et, selon le profil du locataire, la GLI complètent la protection. En tant que courtier, le cabinet compare et vous oriente vers le contrat adapté à votre situation.</p>
                  <a href="/conseil-assurances" style={{color: '#1a4fba', fontSize: '13px', fontWeight: '700', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Un litige avec votre propriétaire ou votre locataire ?</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Dépôt de garantie non restitué, congé contesté, impayés : notre juriste vous répond par écrit, identifie vos droits et la marche à suivre, sous 24 à 48h.
                  </p>
                  <a href="/information-sur-vos-droits" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Poser ma question</a>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>La relation locative est l'une des plus encadrées du droit français, et la loi protège largement le locataire : plafonnement du dépôt, délais de restitution, liberté de résiliation, motifs limités du congé donné par le bailleur. Encore faut-il connaître ces règles pour les faire respecter.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de soigner l'état des lieux, de conserver toutes vos preuves, de respecter les formes et les délais, et de mobiliser la conciliation ou votre protection juridique avant d'aller plus loin. En cas de doute sur votre situation, mieux vaut faire le point en amont.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi n° 89-462 du 6 juillet 1989 tendant à améliorer les rapports locatifs (notamment articles 15 et 22), <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>legifrance.gouv.fr</a></li>
                  <li>Loi n° 2023-668 du 27 juillet 2023 (réforme de la procédure en cas de loyers impayés) et décret n° 2023-822 du 25 août 2023 (zones tendues)</li>
                  <li>Service Public : préavis, dépôt de garantie et procédures locatives, <a href="https://www.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>service-public.gouv.fr</a></li>
                  <li>ANIL et réseau des ADIL pour l'information sur le logement, <a href="https://www.anil.org" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>anil.org</a></li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Les règles présentées ne se substituent pas à une analyse de votre bail et de votre situation au cas par cas.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le montant maximum du dépôt de garantie ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le dépôt de garantie est plafonné par la loi : il ne peut excéder un mois de loyer hors charges pour un logement loué vide, et deux mois pour un logement meublé. Dans le cas particulier du bail mobilité, le dépôt de garantie est interdit, même si le bailleur peut demander un garant. Ces règles figurent à l'article 22 de la loi du 6 juillet 1989.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Dans quel délai le dépôt de garantie doit-il être restitué ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Un mois si l'état des lieux de sortie est conforme à celui d'entrée, avec restitution intégrale. Deux mois en cas de retenues justifiées (dégradations, loyers ou charges impayés). Le délai court à compter de la remise des clés, et non de la fin du préavis. En cas de retard, le bailleur doit une majoration de 10&nbsp;% du loyer mensuel hors charges par mois de retard commencé.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel préavis pour quitter mon logement ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le locataire peut résilier le bail à tout moment, sans justification. Le préavis est de trois mois pour un logement vide, réduit à un mois pour un meublé. Il est aussi ramené à un mois pour un logement vide situé en zone tendue, ou dans certains cas (mutation professionnelle, perte d'emploi, premier emploi, état de santé, bénéficiaire de certaines aides, violences conjugales).</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le propriétaire peut-il me donner congé quand il veut ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Contrairement au locataire, le bailleur ne peut donner congé qu'à l'échéance du bail, en respectant un préavis de six mois pour un logement vide et de trois mois pour un meublé. Ce congé doit être motivé et reposer sur l'un des motifs prévus par la loi : reprise du logement pour y habiter, vente, ou motif légitime et sérieux.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>L'état des lieux est-il obligatoire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui, à l'entrée comme à la sortie. Il doit être contradictoire, signé par les deux parties et annexé au bail. À défaut d'état des lieux d'entrée, le locataire est en principe présumé avoir reçu le logement en bon état. Un état des lieux établi unilatéralement par le bailleur ne peut pas servir de base à des retenues sur le dépôt de garantie.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que se passe-t-il en cas de loyers impayés ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le bailleur commence en principe par une relance amiable, puis fait délivrer un commandement de payer par un commissaire de justice. Depuis la loi du 27 juillet 2023, le locataire dispose de six semaines pour régulariser (contre deux mois auparavant) pour les baux conclus après le 29 juillet 2023. À défaut, le juge peut résilier le bail et ordonner l'expulsion, ou accorder des délais de paiement. La trêve hivernale suspend les expulsions du 1er novembre au 31 mars.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qui contacter en cas de litige avec mon propriétaire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Pour de nombreux litiges (loyer, charges, dépôt de garantie, état des lieux), la saisine de la commission départementale de conciliation est un préalable gratuit et souvent efficace. L'ADIL offre une information gratuite sur le logement, et le Fonds de solidarité pour le logement peut apporter une aide. En dernier recours, le tribunal judiciaire est compétent pour trancher.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Mon assurance peut-elle m'aider ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Souvent, oui. Beaucoup de contrats comportent une garantie de protection juridique qui peut prendre en charge les frais d'un litige locatif. Côté bailleur, l'assurance loyers impayés et la garantie Visale (gratuite, proposée par Action Logement) couvrent les impayés et certaines dégradations. Avant d'engager des frais, il est utile de vérifier ses contrats.</p>
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
              <a href="/blog/caution-depot-de-garantie-difference-locataire-proprietaire" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Caution et dépôt de garantie : quelle différence ? →
              </a>
              <a href="/blog/garantie-legale-de-conformite-vos-droits-produit-defectueux-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Garantie légale de conformité : vos droits face à un produit défectueux →
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
                <span key="Locataire" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Locataire</span>
                <span key="Dépôt de garantie" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Dépôt de garantie</span>
                <span key="Bail" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Bail</span>
                <span key="Loyers impayés" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Loyers impayés</span>
                <span key="Logement" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Logement</span>
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
