import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Créer une association loi 1901 en 2026 : le guide complet, étape par étape · Blog Cabinet Cholez-Pagotto`,
  description: `Projet, statuts, assemblée constitutive, déclaration, publication au JOAFE, démarches après la création : le guide complet et vérifié pour créer une association loi 1901 en 2026, gratuitement et sans erreur.`,
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/creer-une-association-loi-1901-2026-guide-complet-etapes',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-association-loi-1901-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-association-loi-1901-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Créer une association loi 1901 en 2026 : le guide complet, étape par étape",
      "description": "Projet, statuts, assemblée constitutive, déclaration, publication au JOAFE, démarches après la création : le guide complet et vérifié pour créer une association loi 1901 en 2026, gratuitement et sans erreur.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-association-loi-1901-2026.webp",
      "datePublished": "2026-05-12",
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
      "url": "https://cholez-pagotto.fr/blog/creer-une-association-loi-1901-2026-guide-complet-etapes",
      "keywords": ["Créer une association", "Loi 1901", "Statuts", "Assemblée constitutive", "JOAFE", "RNA", "Déclaration association", "Vie associative"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de personnes faut-il pour créer une association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deux personnes au minimum suffisent pour créer une association loi 1901. Il faut être majeur ou, pour un mineur, respecter certaines conditions. Dans les départements d'Alsace-Moselle, qui relèvent du droit local (loi de 1908), le minimum est porté à sept membres fondateurs. Au-delà du minimum légal, c'est la solidité du projet collectif qui compte."
          }
        },
        {
          "@type": "Question",
          "name": "Créer une association coûte-t-il de l'argent ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, la création est gratuite. La déclaration auprès du greffe des associations et la publication au Journal officiel des associations (JOAFE) sont sans frais depuis le 1er janvier 2020. Les seuls coûts éventuels sont annexes : ouverture d'un compte bancaire, assurance, ou domiciliation. Vous pouvez aussi rédiger vos statuts vous-même, même si un accompagnement réduit le risque d'erreur."
          }
        },
        {
          "@type": "Question",
          "name": "Que doivent contenir les statuts d'une association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La loi de 1901 n'impose aucun modèle (sauf en Alsace-Moselle), mais les statuts doivent au minimum préciser la dénomination, l'objet, le siège social et les règles de fonctionnement : conditions d'adhésion, organes de direction, modalités des assemblées générales, règles de modification des statuts, et dissolution avec dévolution des biens. L'objet, en particulier, mérite d'être rédigé avec soin."
          }
        },
        {
          "@type": "Question",
          "name": "Comment déclarer son association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La déclaration se fait auprès du greffe des associations, soit en ligne via le téléservice e-création sur service-public.fr, soit en déposant le formulaire Cerfa à la préfecture ou sous-préfecture du siège. Le dossier comprend les statuts datés et signés par au moins deux dirigeants, la copie du procès-verbal de l'assemblée constitutive et la liste des dirigeants. Vous recevez un récépissé sous cinq jours."
          }
        },
        {
          "@type": "Question",
          "name": "Qu'est-ce que le numéro RNA ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le RNA est le numéro d'inscription au Répertoire national des associations. Composé d'un W suivi de neuf chiffres, il est attribué automatiquement par le greffe lors de la déclaration et figure sur le récépissé. C'est l'identifiant de l'association, demandé dans la plupart de ses démarches. Il doit être conservé pendant toute la vie de l'association. Les associations d'Alsace-Moselle n'en disposent pas."
          }
        },
        {
          "@type": "Question",
          "name": "Quand l'association obtient-elle la capacité juridique ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La capacité juridique naît de la publication d'un extrait de la déclaration au Journal officiel des associations (JOAFE). Tant que cette publication n'a pas eu lieu, l'association existe mais ne peut pas, en pratique, ouvrir un compte bancaire, signer un bail ou un contrat, recevoir des dons ou des subventions, ni agir en justice. La publication est gratuite et automatique après la déclaration."
          }
        },
        {
          "@type": "Question",
          "name": "Quelles démarches après la création de l'association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une fois la publication obtenue, il est recommandé d'ouvrir un compte bancaire dédié, de souscrire une assurance responsabilité civile, et, si l'association emploie, demande des subventions ou exerce une activité économique, d'obtenir un numéro SIRET auprès de l'INSEE. Enfin, toute modification ultérieure (nom, objet, siège, dirigeants, statuts) doit être déclarée dans un délai de trois mois."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il une assurance pour une association ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Une assurance responsabilité civile est vivement recommandée dès la première activité, et devient obligatoire dans certains cas (associations sportives, accueil de public, locaux, véhicules, événements). Elle couvre les dommages causés à des tiers dans le cadre des activités. Le contrat doit être adapté à la réalité de l'association et de ses risques, ce qui justifie un conseil sur mesure."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Créer une association loi 1901" }
      ]
    }
  ]
}

export default function ArticleCreerAssociation1901_2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Créer une association loi 1901</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>VIE ASSOCIATIVE</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CRÉATION</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Créer une association loi 1901 en 2026 : le guide complet, étape par étape</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 12 mai 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 17 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/creer-association-loi-1901-2026.webp"
                alt="Créer une association loi 1901 en 2026 : le guide complet, étape par étape"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#projet" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Le projet et les fondateurs</a></li>
                <li><a href="#statuts" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Rédiger les statuts</a></li>
                <li><a href="#ag" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. L'assemblée constitutive</a></li>
                <li><a href="#declaration" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Déclarer l'association</a></li>
                <li><a href="#joafe" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. La publication au JOAFE</a></li>
                <li><a href="#apres" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Les démarches après la création</a></li>
                <li><a href="#pieges" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VII. Cas particuliers et pièges</a></li>
                <li><a href="#accompagnement" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VIII. Se faire accompagner</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Créer une association loi 1901 est l'une des démarches les plus accessibles du droit français : c'est <strong>gratuit</strong>, ouvert à tous, et cela ne prend souvent que quelques semaines. Pourtant, près d'un dossier sur trois est rejeté ou retardé pour des raisons évitables : statuts incomplets, procès-verbal mal rédigé, nom mal choisi. Une bonne préparation change tout.</p>
                <p style={{marginBottom: '1rem'}}>Ce guide complet vous accompagne de A à Z, étape par étape : définir le projet, rédiger les statuts, tenir l'assemblée constitutive, déclarer l'association, obtenir sa capacité juridique par la publication au Journal officiel, et accomplir les démarches qui suivent. Le tout à jour des règles et de la procédure applicables en 2026.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> il suffit de <strong>2 personnes</strong>, de <strong>statuts</strong> bien rédigés et d'une <strong>assemblée constitutive</strong>, puis d'une <strong>déclaration</strong> (en ligne ou en préfecture) suivie d'une <strong>publication gratuite au JOAFE</strong>, qui donne à l'association sa pleine capacité juridique.
                  </p>
                </div>
              </section>

              <section id="projet">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Le projet et les fondateurs
                </h2>
                <p style={{marginBottom: '1rem'}}>L'association, régie par la <strong>loi du 1er juillet 1901</strong>, est un groupement de personnes réunies autour d'un projet commun, dans un <strong>but autre que le partage de bénéfices</strong>. C'est ce caractère non lucratif qui la distingue d'une société.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Les fondateurs.</strong> Deux personnes suffisent pour une association loi 1901 (sept en Alsace-Moselle). Réunissez un groupe partageant réellement le même projet : c'est le socle de l'association.</li>
                  <li><strong>L'objet.</strong> Définissez précisément ce que fera l'association. L'objet délimite son champ d'action et conditionne nombre de ses droits (subventions, agréments) : il mérite d'être pensé avec soin, ni trop étroit, ni trop vague.</li>
                  <li><strong>Le nom.</strong> Choisissez une dénomination qui se distingue nettement des associations existant dans la même commune, pour éviter un rejet.</li>
                  <li><strong>Le siège social.</strong> Il détermine la préfecture compétente. Il peut être au domicile d'un dirigeant, dans un local, ou en domiciliation.</li>
                </ul>
              </section>

              <section id="statuts">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Rédiger les statuts
                </h2>
                <p style={{marginBottom: '1rem'}}>Les statuts sont le <strong>document fondateur</strong> et la véritable colonne vertébrale de l'association. La loi de 1901 laisse une grande <strong>liberté de rédaction</strong> (sauf en Alsace-Moselle), mais certains éléments doivent y figurer pour que le dossier soit accepté et que la gestion soit sécurisée.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>La <strong>dénomination</strong> (250 caractères maximum) et, le cas échéant, le sigle.</li>
                  <li>L'<strong>objet</strong> de l'association.</li>
                  <li>L'adresse du <strong>siège social</strong>.</li>
                  <li>Les <strong>règles de fonctionnement</strong> : conditions d'adhésion et de perte de la qualité de membre, organes de direction (bureau, conseil d'administration), modalités de convocation et de décision des assemblées générales, règles de modification des statuts, et conditions de dissolution avec dévolution des biens.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Un <strong>règlement intérieur</strong>, facultatif, peut compléter les statuts pour les détails pratiques (horaires, fonctionnement interne), plus faciles à modifier. Pour partir sur des bases solides, mieux vaut s'appuyer sur des modèles éprouvés et les adapter à votre projet, plutôt que de recopier un modèle générique qui oublie souvent des mentions importantes.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Statuts d'association loi 1901</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>La colonne vertébrale de votre association : dénomination, objet, siège, organes, assemblées, modification, dissolution. Notre modèle évite les mentions oubliées qui font rejeter un dossier.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-statuts-association-loi-1901" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création d'association</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Règlement intérieur d'association</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Pour compléter les statuts sur les détails pratiques (cotisations, fonctionnement interne), plus faciles à faire évoluer. Notre modèle s'adapte à votre projet.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-reglement-interieur-association" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création d'association</a></span>
                  </div>
                </div>
              </section>

              <section id="ag">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. L'assemblée constitutive
                </h2>
                <p style={{marginBottom: '1rem'}}>L'<strong>assemblée générale constitutive</strong> est la réunion fondatrice. Convoquée par les fondateurs, elle réunit les futurs membres pour officialiser la naissance de l'association. Son déroulement type est le suivant.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li><strong>Présentation et vote des statuts.</strong> Les fondateurs présentent le projet de statuts, recueillent les observations, l'amendent si besoin, puis le soumettent au vote. L'association est constituée entre tous les membres qui adoptent les statuts.</li>
                  <li><strong>Élection des dirigeants.</strong> Les membres élisent les administrateurs ou les membres du bureau (président, trésorier, secrétaire), conformément aux statuts adoptés.</li>
                  <li><strong>Le procès-verbal.</strong> Rédigez un procès-verbal de l'assemblée constitutive, indiquant la date, les participants et les décisions prises (adoption des statuts, élection des dirigeants). Il sera demandé lors de la déclaration.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Pensez aussi à établir et à conserver la <strong>liste des adhérents</strong> présents. Selon les statuts, un premier conseil d'administration peut suivre pour désigner le bureau.</p>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>PV d'assemblée générale constitutive</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Date, participants, adoption des statuts, élection des dirigeants : un procès-verbal constitutif complet, qui vous sera demandé lors de la déclaration.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-proces-verbal-assemblee-constitutive" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création d'association</a></span>
                  </div>
                </div>
                <div style={{background: '#fffaf0', border: '1px solid #f0d488', borderLeft: '4px solid #d4a017', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#d4a017', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>MODÈLE PRÊT À L'EMPLOI</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Liste des dirigeants</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Nom, prénom, date et lieu de naissance, domicile, nationalité, fonction : la liste exigée par le greffe, prête à compléter.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/catalogue/modele-liste-des-dirigeants-association" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir le modèle →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou dans le <a href="/catalogue/pack-creation-association" style={{color: '#b8860b', fontWeight: 600, textDecoration: 'none'}}>pack Création d'association</a></span>
                  </div>
                </div>
                <div style={{background: 'linear-gradient(135deg, #fff8e6, #fbe7bd)', border: '1px solid #eaca72', borderRadius: '12px', padding: '1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>PACK COMPLET · PRIX GROUPÉ</span>
                  <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>Pack Création d'association loi 1901</p>
                  <p style={{color: '#78350f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Tout pour créer votre association du premier coup, réuni et à prix groupé : statuts, procès-verbal d'assemblée constitutive, règlement intérieur, liste des dirigeants, et check-list de déclaration.</p>
                  <a href="/catalogue/pack-creation-association" style={{display: 'inline-block', background: '#b8860b', color: 'white', fontSize: '12px', fontWeight: '700', padding: '9px 18px', borderRadius: '8px', textDecoration: 'none'}}>Découvrir le pack Création d'association →</a>
                </div>
              </section>

              <section id="declaration">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Déclarer l'association
                </h2>
                <p style={{marginBottom: '1rem'}}>La déclaration s'effectue auprès du <strong>greffe des associations</strong>, par deux voies au choix : <strong>en ligne</strong>, via le téléservice e-création sur service-public.fr, ou au <strong>format papier</strong>, en déposant le formulaire Cerfa à la préfecture ou sous-préfecture du siège. La voie en ligne est la plus rapide.</p>
                <p style={{marginBottom: '1rem'}}>Le dossier comprend principalement :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>les <strong>statuts</strong> datés et signés par au moins deux dirigeants, avec leurs nom, prénom et fonction ;</li>
                  <li>la <strong>copie du procès-verbal</strong> de l'assemblée constitutive, signée par au moins un dirigeant ;</li>
                  <li>la <strong>liste des dirigeants</strong> (nom, prénom, date et lieu de naissance, domicile, nationalité, fonction) ;</li>
                  <li>le cas échéant, le <strong>mandat</strong> de la personne chargée d'effectuer la démarche.</li>
                </ul>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le récépissé et le numéro RNA.</strong> Le greffe délivre un <strong>récépissé sous cinq jours</strong>, qui donne une date certaine à la déclaration et comporte le <strong>numéro RNA</strong> (un W suivi de neuf chiffres). En pratique, via le téléservice, le récépissé parvient souvent en quelques jours. Ce numéro, à conserver, est l'identifiant de l'association.
                  </p>
                </div>
                <div style={{background: '#f1f5fb', border: '1px solid #c7d6ec', borderLeft: '4px solid #0f2d6e', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>LE CABINET S'EN CHARGE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Déclaration et publication : on s'occupe de tout</p>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>La déclaration au greffe et la publication au JOAFE sont gratuites, mais formelles et chronophages. Le cabinet constitue et dépose votre dossier, et le suit jusqu'au récépissé et à la parution, pour un lancement sans accroc.</p>
                  <div style={{display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center'}}>
                    <a href="/formalites-juridiques-externalisees" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Confier mes formalités →</a>
                    <span style={{color: '#6b7280', fontSize: '12px'}}>ou l'<a href="/accompagnement-associations" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>accompagnement des associations</a></span>
                  </div>
                </div>
              </section>

              <section id="joafe">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. La publication au JOAFE
                </h2>
                <p style={{marginBottom: '1rem'}}>C'est l'étape décisive, et la plus mal comprise. Pour acquérir la <strong>personnalité morale</strong> et la <strong>capacité juridique</strong>, l'association doit faire l'objet d'une publication au <strong>Journal officiel des associations et fondations d'entreprise</strong> (JOAFE). La demande est <strong>incluse dans le formulaire de déclaration</strong> : vous n'avez aucune démarche supplémentaire à accomplir.</p>
                <p style={{marginBottom: '1rem'}}>Depuis le <strong>1er janvier 2020, cette publication est gratuite</strong>. Le greffe transmet la demande à la Direction de l'information légale et administrative, qui diffuse l'annonce sous huit à dix jours, chaque mardi. Pensez à télécharger le <strong>justificatif de publication</strong> : ce document prouve l'existence et la capacité juridique de l'association, et vous sera demandé tout au long de sa vie.</p>
                <div style={{background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0'}}>
                  <p style={{color: '#92400e', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Le point à retenir.</strong> Tant que la publication n'a pas eu lieu, l'association existe « sur le papier » mais ne peut pas, en pratique, ouvrir un compte bancaire, signer un bail ou un contrat, recevoir des dons ou des subventions, ni agir en justice. Le récépissé tient lieu de preuve d'existence en attendant la parution.
                  </p>
                </div>
              </section>

              <section id="apres">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Les démarches après la création
                </h2>
                <p style={{marginBottom: '1rem'}}>Une fois la publication obtenue, quelques démarches permettent de rendre l'association pleinement opérationnelle.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Ouvrir un compte bancaire dédié.</strong> Les banques exigent le justificatif de publication au JOAFE, les statuts, le procès-verbal d'élection et la pièce d'identité du dirigeant. Comparez les offres associatives.</li>
                  <li><strong>Souscrire une assurance responsabilité civile.</strong> Vivement recommandée dès la première activité, et obligatoire dans certains cas, elle couvre les dommages causés aux tiers.</li>
                  <li><strong>Demander un numéro SIRET</strong> auprès de l'INSEE si l'association emploie du personnel, sollicite des subventions ou exerce une activité économique. La demande se fait avec le récépissé et l'extrait de publication au JOAFE.</li>
                  <li><strong>Déclarer les modifications ultérieures.</strong> Tout changement important (nom, objet, siège, dirigeants, statuts) doit être déclaré dans un <strong>délai de trois mois</strong>, sous peine d'amende.</li>
                </ul>
                <div style={{background: '#eef5ff', border: '1px solid #bcd4f6', borderLeft: '4px solid #1a4fba', borderRadius: '12px', padding: '1.1rem 1.25rem', margin: '1.5rem 0'}}>
                  <span style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '0.05em', padding: '3px 9px', borderRadius: '20px', marginBottom: '8px'}}>ASSURANCE</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 4px'}}>Responsabilité civile de l'association</p>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.6', margin: '0 0 12px'}}>Recommandée dès la première activité, et obligatoire dans certains cas (sport, accueil de public, locaux, événements), elle couvre les dommages causés aux tiers. Pensez aussi à protéger les dirigeants. En courtier, le cabinet vous propose une couverture adaptée à vos activités.</p>
                  <a href="/conseil-assurances" style={{display: 'inline-block', background: '#1a4fba', color: 'white', fontSize: '12px', fontWeight: '700', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none'}}>Voir notre conseil en assurances →</a>
                </div>
              </section>

              <section id="pieges">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VII. Cas particuliers et pièges
                </h2>
                <p style={{marginBottom: '1rem'}}>Quelques situations sortent du cadre standard, et quelques erreurs reviennent souvent.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Alsace-Moselle.</strong> Dans le Bas-Rhin, le Haut-Rhin et la Moselle, le droit local (loi de 1908) s'applique : inscription au registre des associations du tribunal judiciaire, <strong>sept membres</strong> fondateurs minimum, et pas de numéro RNA.</li>
                  <li><strong>Associations sportives.</strong> Elles impliquent des formalités supplémentaires auprès des services de la jeunesse et des sports, et une affiliation à une fédération pour accéder à la compétition.</li>
                  <li><strong>Les erreurs qui bloquent un dossier.</strong> Statuts incomplets (mentions oubliées), nom insuffisamment distinctif, procès-verbal mal documenté, incohérences entre les pièces. Ce sont les causes les plus fréquentes de rejet.</li>
                </ul>
              </section>

              <section id="accompagnement">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VIII. Se faire accompagner
                </h2>
                <p style={{marginBottom: '1rem'}}>La création d'une association est simple dans son principe, mais la rédaction des statuts et la cohérence du dossier conditionnent toute la vie future de la structure. Des statuts bien pensés évitent des blocages de gouvernance, des difficultés fiscales et des conflits ultérieurs. C'est pourquoi un accompagnement, même léger, est souvent un investissement rentable.</p>
                <p style={{marginBottom: '1rem'}}>Le cabinet accompagne les fondateurs d'associations et les acteurs de l'économie sociale et solidaire : aide à la rédaction des statuts, sécurisation du dossier de déclaration, conseil sur la gouvernance, et orientation sur les obligations à venir.</p>
                <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0'}}>
                  <p style={{color: 'white', fontSize: '15px', fontWeight: '700', margin: '0 0 8px'}}>Créer votre association sur des bases solides</p>
                  <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.7', margin: '0 0 14px'}}>
                    Statuts, gouvernance, déclaration, modèles de documents : le cabinet accompagne les associations et l'ESS. Une question précise ? Notre juriste vous répond par écrit.
                  </p>
                  <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
                    <a href="/accompagnement-associations" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Accompagnement des associations</a>
                    <a href="/catalogue" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '9px 18px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none'}}>Modèles de documents</a>
                  </div>
                </div>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Créer une association loi 1901 tient en une logique simple : un projet, des statuts, une assemblée constitutive, une déclaration et une publication au Journal officiel. Chacune de ces étapes obéit à des règles précises, mais aucune n'est insurmontable, et l'ensemble reste gratuit. La clé d'un dossier validé du premier coup, c'est la qualité des statuts et la cohérence des pièces.</p>
                <p style={{marginBottom: '1rem'}}>Le bon réflexe est de soigner l'objet et les statuts, de bien documenter l'assemblée constitutive, et de ne pas confondre récépissé et capacité juridique, qui ne naît qu'à la publication. En cas de doute, un accompagnement vous évitera les allers-retours administratifs.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem', fontSize: '13px', color: '#6b7280'}}>Cet article s'appuie exclusivement sur des textes et publications officiels, vérifiés à la source.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Loi du 1er juillet 1901 relative au contrat d'association (notamment articles 5 et 6) et décret du 16 août 1901, <a href="https://www.legifrance.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>legifrance.gouv.fr</a></li>
                  <li>Service Public : déclaration initiale d'une association, <a href="https://www.service-public.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>service-public.gouv.fr</a></li>
                  <li>Associations.gouv.fr : déclarer et publier son association, et téléservice e-création, <a href="https://www.associations.gouv.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', fontWeight: 600, textDecoration: 'none'}}>associations.gouv.fr</a></li>
                  <li>Journal officiel des associations (JOAFE), publication gratuite depuis le 1er janvier 2020</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n° 71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Il ne se substitue pas à une analyse de votre projet au cas par cas.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Combien de personnes faut-il pour créer une association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Deux personnes au minimum suffisent pour créer une association loi 1901. Dans les départements d'Alsace-Moselle, qui relèvent du droit local (loi de 1908), le minimum est porté à sept membres fondateurs. Au-delà du minimum légal, c'est la solidité du projet collectif qui compte.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Créer une association coûte-t-il de l'argent ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, la création est gratuite. La déclaration auprès du greffe des associations et la publication au Journal officiel des associations (JOAFE) sont sans frais depuis le 1er janvier 2020. Les seuls coûts éventuels sont annexes : compte bancaire, assurance ou domiciliation. Vous pouvez aussi rédiger vos statuts vous-même.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que doivent contenir les statuts d'une association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La loi de 1901 n'impose aucun modèle (sauf en Alsace-Moselle), mais les statuts doivent au minimum préciser la dénomination, l'objet, le siège social et les règles de fonctionnement : conditions d'adhésion, organes de direction, modalités des assemblées générales, règles de modification des statuts, et dissolution avec dévolution des biens. L'objet, en particulier, mérite d'être rédigé avec soin.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Comment déclarer son association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La déclaration se fait auprès du greffe des associations, soit en ligne via le téléservice e-création sur service-public.fr, soit en déposant le formulaire Cerfa à la préfecture ou sous-préfecture du siège. Le dossier comprend les statuts datés et signés par au moins deux dirigeants, la copie du procès-verbal de l'assemblée constitutive et la liste des dirigeants. Vous recevez un récépissé sous cinq jours.</p>
                  </details>
                  <details key={4} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Qu'est-ce que le numéro RNA ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le RNA est le numéro d'inscription au Répertoire national des associations. Composé d'un W suivi de neuf chiffres, il est attribué automatiquement par le greffe lors de la déclaration et figure sur le récépissé. C'est l'identifiant de l'association, demandé dans la plupart de ses démarches. Il doit être conservé. Les associations d'Alsace-Moselle n'en disposent pas.</p>
                  </details>
                  <details key={5} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand l'association obtient-elle la capacité juridique ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>La capacité juridique naît de la publication d'un extrait de la déclaration au Journal officiel des associations (JOAFE). Tant que cette publication n'a pas eu lieu, l'association existe mais ne peut pas, en pratique, ouvrir un compte bancaire, signer un bail ou un contrat, recevoir des dons ou des subventions, ni agir en justice. La publication est gratuite et automatique après la déclaration.</p>
                  </details>
                  <details key={6} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quelles démarches après la création de l'association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Une fois la publication obtenue, il est recommandé d'ouvrir un compte bancaire dédié, de souscrire une assurance responsabilité civile, et, si l'association emploie, demande des subventions ou exerce une activité économique, d'obtenir un numéro SIRET auprès de l'INSEE. Enfin, toute modification ultérieure (nom, objet, siège, dirigeants, statuts) doit être déclarée dans un délai de trois mois.</p>
                  </details>
                  <details key={7} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Faut-il une assurance pour une association ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Une assurance responsabilité civile est vivement recommandée dès la première activité, et devient obligatoire dans certains cas (associations sportives, accueil de public, locaux, véhicules, événements). Elle couvre les dommages causés à des tiers. Le contrat doit être adapté à la réalité de l'association et de ses risques, ce qui justifie un conseil sur mesure.</p>
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
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Modèles de documents</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Statuts, procès-verbal d'assemblée constitutive, règlement intérieur : des modèles à personnaliser pour votre association.</p>
              <a href="/catalogue" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600', display: 'block'}}>
                Voir le catalogue →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/responsabilite-dirigeants-benevoles-association-civile-penale-financiere" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Responsabilité des dirigeants bénévoles d'association →
              </a>
              <a href="/blog/association-imposable-non-lucrativite-franchise-impots-commerciaux-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block'}}>
                Votre association est-elle imposable ? Non-lucrativité et franchise 2026 →
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
                <a href="/blog?tag=Association" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Association</a>
                <a href="/blog?tag=Loi%201901" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Loi 1901</a>
                <a href="/blog?tag=Statuts" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Statuts</a>
                <a href="/blog?tag=JOAFE" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>JOAFE</a>
                <a href="/blog?tag=Cr%C3%A9ation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px", textDecoration: 'none', cursor: 'pointer'}}>Création</a>
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
