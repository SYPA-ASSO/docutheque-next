import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Caution et dépôt de garantie : deux notions souvent confondues, pourtant très différentes · Blog Cabinet Cholez-Pagotto`,
  description: `Dans le droit de la location, caution et dépôt de garantie sont deux mécanismes juridiquement distincts. Comprendre la différence évite des erreurs fréquentes et parfois coûteuses.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/caution-depot-de-garantie-difference-locataire-proprietaire',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/caution-depot-de-garantie.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/caution-depot-de-garantie.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Caution et dépôt de garantie : deux notions souvent confondues, pourtant très différentes",
      "description": "Dans le droit de la location, caution et dépôt de garantie sont deux mécanismes juridiquement distincts. Comprendre la différence évite des erreurs fréquentes et parfois coûteuses.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/caution-depot-de-garantie.webp",
      "datePublished": "2025-02-03",
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
      "url": "https://cholez-pagotto.fr/blog/caution-depot-de-garantie-difference-locataire-proprietaire",
      "keywords": ["Caution", "Dépôt de garantie", "Location", "Bail", "Droit immobilier", "Locataire", "Propriétaire"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Le dépôt de garantie est-il obligatoire ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. La loi ne rend pas obligatoire le dépôt de garantie. C'est une faculté laissée au bailleur. S'il est prévu, il doit être mentionné dans le contrat de bail et respecter les plafonds légaux (1 mois de loyer hors charges pour un logement vide, 2 mois pour un logement meublé)."
          }
        },
        {
          "@type": "Question",
          "name": "Que faire si le propriétaire ne restitue pas le dépôt de garantie dans les délais ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "En cas de non-restitution dans les délais légaux (1 ou 2 mois selon l'état des lieux), le locataire peut mettre en demeure le bailleur par lettre recommandée avec AR. Si le bailleur ne s'exécute pas, le locataire peut demander au juge le paiement du dépôt assorti d'une majoration de 10 % du loyer mensuel hors charges par mois de retard."
          }
        },
        {
          "@type": "Question",
          "name": "La caution peut-elle refuser de payer si elle estime la dette injustifiée ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. La caution peut contester la dette si elle l'estime injustifiée ou si les conditions de mise en jeu ne sont pas réunies. En cas de caution simple, elle peut invoquer le bénéfice de discussion et exiger que le bailleur poursuive d'abord le locataire. En cas de caution solidaire, ses moyens de contestation sont plus limités."
          }
        },
        {
          "@type": "Question",
          "name": "La garantie Visale peut-elle remplacer la caution et le dépôt de garantie ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La garantie Visale est une caution accordée par Action Logement. Elle couvre les impayés de loyers et les dégradations. En cas de Visale, le propriétaire ne peut pas exiger de caution supplémentaire d'une personne physique. En revanche, le dépôt de garantie reste possible, sous réserve des plafonds légaux."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Caution et dépôt de garantie" }
      ]
    }
  ]
}

export default function ArticleCaution() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Caution et dépôt de garantie</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>DROIT IMMOBILIER</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Caution et dépôt de garantie : deux notions souvent confondues, pourtant très différentes</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 3 février 2025
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 10 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/caution-depot-de-garantie.webp"
                alt="Caution et dépôt de garantie : deux notions souvent confondues, pourtant très différentes"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
              
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#depot" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le dépôt de garantie : une somme d'argent encadrée</a></li>
                <li><a href="#depot-objet" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>A. À quoi sert le dépôt de garantie ?</a></li>
                <li><a href="#depot-loi" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>B. Ce que dit la loi</a></li>
                <li><a href="#depot-restitution" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>C. Restitution : un point source de litiges</a></li>
                <li><a href="#caution" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. La caution : un engagement personnel</a></li>
                <li><a href="#caution-def" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>A. Définition et fonctionnement</a></li>
                <li><a href="#caution-types" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>B. Caution simple ou caution solidaire</a></li>
                <li><a href="#cumul" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Peut-on cumuler dépôt de garantie et caution ?</a></li>
                <li><a href="#confusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Pourquoi cette confusion est problématique</a></li>
                <li><a href="#references" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Références juridiques et jurisprudentielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Lorsqu'on loue un logement, que l'on soit locataire ou propriétaire, deux mots reviennent systématiquement : <strong>caution</strong> et <strong>dépôt de garantie</strong>. Dans le langage courant, ils sont souvent utilisés comme des synonymes. En droit, c'est une erreur.</p>
                <p style={{marginBottom: '1rem'}}>Ces deux mécanismes ont un point commun : ils servent à sécuriser le bail. Mais leur fonctionnement, leur nature juridique et leurs conséquences sont très différents. Comprendre cette distinction permet d'éviter des erreurs fréquentes, parfois coûteuses.</p>
              </section>

              <section id="depot">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le dépôt de garantie : une somme d'argent encadrée par la loi
                </h2>

                <section id="depot-objet">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    A. À quoi sert le dépôt de garantie ?
                  </h3>
                  <p style={{marginBottom: '1rem'}}>Le dépôt de garantie est <strong>une somme versée par le locataire au moment de la signature du bail</strong>. Il ne s'agit ni d'un loyer d'avance ni d'une pénalité. Son objectif est de permettre au bailleur de se protéger si, à la fin de la location, le locataire n'a pas respecté toutes ses obligations.</p>
                  <p style={{marginBottom: '0.75rem'}}>Concrètement, le dépôt de garantie peut servir à couvrir :</p>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                    <li>Des loyers ou charges restés impayés</li>
                    <li>Des dégradations du logement imputables au locataire</li>
                    <li>Certaines réparations locatives non effectuées</li>
                  </ul>
                </section>

                <section id="depot-loi">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    B. Ce que dit la loi
                  </h3>
                  <p style={{marginBottom: '1rem'}}>Le dépôt de garantie est strictement encadré par la loi du 6 juillet 1989. Pour une résidence principale :</p>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <li><strong>Logement vide :</strong> maximum <strong>un mois de loyer hors charges</strong></li>
                    <li><strong>Logement meublé :</strong> maximum <strong>deux mois de loyer hors charges</strong></li>
                  </ul>
                  <div style={{background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                    <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                      <strong>Important :</strong> l'article 22 de la loi de 1989 n'est applicable qu'aux baux de résidence principale. Pour d'autres baux (mobilité, saisonnier, bail commercial), ces plafonds ne s'appliquent pas ou sont différents.
                    </p>
                  </div>
                </section>

                <section id="depot-restitution">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    C. Restitution : un point source de nombreux litiges
                  </h3>
                  <p style={{marginBottom: '1rem'}}>À la fin du bail, le dépôt de garantie <strong>doit être restitué</strong> :</p>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <li>Dans un délai d'<strong>un mois</strong> si l'état des lieux de sortie est conforme à celui d'entrée</li>
                    <li>Dans un délai de <strong>deux mois</strong> s'il existe des différences entre les deux états des lieux</li>
                  </ul>
                  <p style={{marginBottom: '1rem'}}>Le bailleur ne peut retenir des sommes <strong>que s'il peut les justifier</strong> (factures, devis, état des lieux comparatif). Les tribunaux rappellent régulièrement que la preuve des retenues incombe au bailleur.</p>
                </section>
              </section>

              <section id="caution">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. La caution : un engagement personnel, pas une somme versée
                </h2>

                <section id="caution-def">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    A. Définition et fonctionnement
                  </h3>
                  <p style={{marginBottom: '1rem'}}>Contrairement au dépôt de garantie, la caution <strong>n'est pas une somme d'argent</strong>. La caution est une <strong>personne (ou un organisme)</strong> qui s'engage à payer à la place du locataire si celui-ci ne respecte pas ses obligations (loyers, charges, réparations).</p>
                  <p style={{marginBottom: '1rem'}}>La caution n'intervient <strong>qu'en cas de problème</strong>. Tant que le locataire paie son loyer et respecte le bail, la caution n'a rien à faire. En cas d'impayé, le bailleur peut demander le paiement à la caution.</p>
                </section>

                <section id="caution-types">
                  <h3 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>
                    B. Caution simple ou caution solidaire : une différence importante
                  </h3>
                  <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <li><strong>Caution simple :</strong> le bailleur doit d'abord poursuivre le locataire avant de s'adresser à la caution. La caution bénéficie du "bénéfice de discussion".</li>
                    <li><strong>Caution solidaire :</strong> le bailleur peut demander directement le paiement à la caution, dès le premier impayé, sans avoir à poursuivre d'abord le locataire. C'est la forme la plus courante dans les baux actuels et la plus protectrice pour le bailleur.</li>
                  </ul>
                </section>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Acte de cautionnement (simple ou solidaire)</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>L'engagement du garant, à jour des mentions obligatoires : montant en lettres et en chiffres, durée, et reproduction de l'avant-dernier alinéa de l'article 22-1 de la loi de 1989. Conditions de sa validité.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-acte-cautionnement-solidaire-location" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-proprietaire-bailleur" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Propriétaire</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Résiliation d'un engagement de caution</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Caution à durée indéterminée ? Notre modèle notifie la résiliation au bailleur ; elle prend effet au terme du bail en cours.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-lettre-resiliation-engagement-caution" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-proprietaire-bailleur" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Propriétaire</a></span>
                  </div>
                </div>
              </section>

              <section id="cumul">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Peut-on cumuler dépôt de garantie et caution ?
                </h2>
                <p style={{marginBottom: '1rem'}}>Oui, dans la majorité des cas. Le dépôt de garantie et la caution n'ont pas la même nature et peuvent parfaitement coexister :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Le dépôt de garantie couvre principalement les manquements constatés en <strong>fin de bail</strong></li>
                  <li>La caution sécurise les paiements <strong>pendant toute la durée</strong> de la location</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Cependant, certains dispositifs spécifiques peuvent limiter ce cumul (ex. : garantie Visale). Il est toujours conseillé de vérifier la situation précise du bail.</p>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Visale et assurance loyers impayés (GLI)</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Plutôt qu'un garant, le bailleur peut s'appuyer sur la garantie Visale (Action Logement, gratuite) ou sur une assurance loyers impayés. Attention au non-cumul avec une caution, sauf locataire étudiant ou apprenti. En courtier, le cabinet compare et vous oriente.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              </section>

              <section id="confusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Pourquoi cette confusion est problématique
                </h2>
                <p style={{marginBottom: '1rem'}}>Confondre caution et dépôt de garantie peut entraîner :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Des <strong>exigences illégales</strong> lors de la signature du bail (ex. : demander deux mois de dépôt de garantie pour un logement vide)</li>
                  <li>Des <strong>retenues abusives</strong> en fin de location sans justification</li>
                  <li>Des <strong>engagements de caution mal compris</strong>, parfois lourds de conséquences financières pour le garant</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>En pratique, de nombreux litiges pourraient être évités par une meilleure compréhension de ces notions de base.</p>
              </section>

              <section id="references">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Références juridiques et jurisprudentielles
                </h2>
                <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <ul style={{paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#374151'}}>
                    <li><strong>Article 22 de la loi n°89-462 du 6 juillet 1989</strong> : Dépôt de garantie : montant maximal, délais de restitution, obligation de justification des retenues. <a href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000028806696/" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba'}}>Lire sur Légifrance →</a></li>
                    <li><strong>Article 22-1</strong> : Cautionnement : conditions de validité et de protection de la caution dans les baux d'habitation.</li>
                    <li><strong>Article 2288 du Code civil</strong> : Définition du cautionnement comme l'engagement de payer à la place du débiteur.</li>
                    <li><strong>Cass. 3e civ., 6 mai 2021</strong> : Toute retenue sur le dépôt de garantie doit être justifiée.</li>
                    <li><strong>Cass. 3e civ., 2 octobre 2007, n°06-18.142</strong> : Des devis sérieux peuvent suffire à justifier des retenues.</li>
                    <li><strong>Cass. 3e civ., 23 janvier 2020, n°18-23.900</strong> : Le non-respect des formalités protectrices peut entraîner la nullité du cautionnement.</li>
                  </ul>
                </div>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.5rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '12px', lineHeight: '1.7', margin: 0}}>
                    <strong>Information importante</strong> : Les informations et documents proposés sont fournis à titre purement informatif et pédagogique. Ils ne constituent en aucun cas une consultation juridique ou un conseil personnalisé. Pour toute situation spécifique ou en cas de doute, il est recommandé de consulter un professionnel habilité du droit.
                  </p>
                </div>
              </section>
              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Le dépôt de garantie est-il obligatoire ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. La loi ne rend pas obligatoire le dépôt de garantie. C'est une faculté laissée au bailleur. S'il est prévu, il doit être mentionné dans le contrat de bail et respecter les plafonds légaux (1 mois de loyer hors charges pour un logement vide, 2 mois pour un logement meublé).</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que faire si le propriétaire ne restitue pas le dépôt de garantie dans les délais ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>En cas de non-restitution dans les délais légaux (1 ou 2 mois selon l'état des lieux), le locataire peut mettre en demeure le bailleur par lettre recommandée avec AR. Si le bailleur ne s'exécute pas, le locataire peut demander au juge le paiement du dépôt assorti d'une majoration de 10 % du loyer mensuel hors charges par mois de retard.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La caution peut-elle refuser de payer si elle estime la dette injustifiée ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Oui. La caution peut contester la dette si elle l'estime injustifiée ou si les conditions de mise en jeu ne sont pas réunies. En cas de caution simple, elle peut invoquer le bénéfice de discussion et exiger que le bailleur poursuive d'abord le locataire. En cas de caution solidaire, ses moyens de contestation sont plus limités.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La garantie Visale peut-elle remplacer la caution et le dépôt de garantie ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La garantie Visale est une caution accordée par Action Logement. Elle couvre les impayés de loyers et les dégradations. En cas de Visale, le propriétaire ne peut pas exiger de caution supplémentaire d'une personne physique. En revanche, le dépôt de garantie reste possible, sous réserve des plafonds légaux.</p>
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
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Expert auprès de collectifs d'orientation juridiques francophones.
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
                <span key="Caution" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Caution</span>
                <span key="Dépôt de garantie" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Dépôt de garantie</span>
                <span key="Location" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Location</span>
                <span key="Bail" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Bail</span>
                <span key="Droit immobilier" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droit immobilier</span>
                <span key="Locataire" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Locataire</span>
                <span key="Propriétaire" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Propriétaire</span>
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