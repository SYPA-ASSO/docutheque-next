import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Refus en master 2026 : ce qui change dans la saisine du recteur et la procédure Mon Master · Blog Cabinet Cholez-Pagotto",
  description: "Deux décrets publiés au Journal officiel du 1er juillet 2026 modifient la saisine du recteur et son articulation avec la plateforme Mon Master : liste d'attente, fin du traitement en cas d'admission, choix entre propositions. Ce qui change concrètement pour les étudiants.",
  openGraph: {
    type: 'article',
    url: 'https://cholez-pagotto.fr/blog/refus-en-master-2026-saisine-du-recteur-mon-master-ce-qui-change',
    siteName: 'Cabinet Cholez-Pagotto',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/master-saisine-recteur-2026.webp'],
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/master-saisine-recteur-2026.webp'],
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Refus en master 2026 : ce qui change dans la saisine du recteur et la procédure Mon Master",
      "description": "Deux décrets publiés au Journal officiel du 1er juillet 2026 modifient la saisine du recteur et son articulation avec la plateforme Mon Master : liste d'attente, fin du traitement en cas d'admission, choix entre propositions. Ce qui change concrètement pour les étudiants.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/master-saisine-recteur-2026.webp",
      "datePublished": "2026-07-03",
      "dateModified": "2026-07-03",
      "author": {
        "@type": "Person",
        "name": "François CHOLEZ",
        "worksFor": {
          "@type": "Organization",
          "name": "Cabinet Cholez-Pagotto"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "url": "https://cholez-pagotto.fr"
      },
      "url": "https://cholez-pagotto.fr/blog/refus-en-master-2026-saisine-du-recteur-mon-master-ce-qui-change",
      "keywords": [
        "Mon Master",
        "saisine du recteur",
        "refus en master",
        "décret 2026-584",
        "décret 2026-585",
        "R. 612-36-3",
        "admission master",
        "étudiants",
        "recours master"
      ],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Être sur liste d'attente empêche-t-il encore toute saisine du recteur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le décret n° 2026-584 supprime précisément cette condition de la première phrase de l'article R. 612-36-3 du Code de l'éducation et réorganise l'articulation entre le placement sur liste d'attente et la procédure de saisine du recteur de région académique."
          }
        },
        {
          "@type": "Question",
          "name": "Que se passe-t-il si j'obtiens une nouvelle proposition après avoir accepté une place via le recteur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Vous devez choisir dans le délai prévu : si vous acceptez la nouvelle proposition, vous perdez le bénéfice de celle déjà acceptée dans le cadre de la procédure liée au recteur ; si vous la refusez, vous conservez la première. Si vous ne répondez pas dans les délais, vous êtes réputé conserver la proposition déjà acceptée."
          }
        },
        {
          "@type": "Question",
          "name": "La saisine du recteur continue-t-elle si je suis finalement admis quelque part ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Le traitement de la saisine prend fin si vous recevez une réponse positive à l'une de vos candidatures dans la procédure dématérialisée : la voie de recours n'a plus d'objet dès lors qu'une admission est acquise."
          }
        },
        {
          "@type": "Question",
          "name": "Où trouver le calendrier de la procédure de saisine ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Un arrêté du 25 juin 2026, publié au Journal officiel du 1er juillet 2026, fixe le calendrier de la procédure dématérialisée de saisine du recteur de région académique, ainsi que celui de la procédure de réexamen des candidatures des étudiants en situation de handicap et de la commission d'accès au deuxième cycle."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Accueil",
          "item": "https://cholez-pagotto.fr"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://cholez-pagotto.fr/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Refus en master 2026 : la saisine du recteur"
        }
      ]
    }
  ]
}

export default function ArticleMasterSaisineRecteur2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Refus en master 2026 : la saisine du recteur</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TÊTE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>ÉDUCATION</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>PARTICULIERS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.9rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Refus en master 2026 : ce qui change dans la saisine du recteur et la procédure Mon Master</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 3 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 10 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/master-saisine-recteur-2026.webp"
                alt="Refus en master 2026 : ce qui change dans la saisine du recteur et la procédure Mon Master"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#decret584" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Ce que change le décret n° 2026-584 sur la saisine du recteur</a></li>
                <li><a href="#decret585" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Ce que change le décret n° 2026-585 en cas de propositions successives</a></li>
                <li><a href="#pratique" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Pourquoi c'est important en pratique</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>Chaque année, des milliers d'étudiants titulaires d'une licence se retrouvent dans une situation simple à décrire et difficile à vivre : <strong>aucune admission en première année de master</strong>, ou une procédure qui se bloque alors même qu'une voie de recours existe. Cette voie, c'est la <strong>saisine du recteur de région académique</strong>, qui peut proposer des inscriptions aux étudiants restés sans solution à l'issue de la procédure nationale <strong>Mon Master</strong>.</p>
                <p style={{marginBottom: '1rem'}}>Deux décrets publiés au Journal officiel du <strong>1er juillet 2026</strong> viennent précisément ajuster l'articulation entre la plateforme et cette saisine : le <strong>décret n°&nbsp;2026-584</strong> et le <strong>décret n°&nbsp;2026-585</strong>, tous deux datés du 25 juin 2026, complétés par un <strong>arrêté du 25 juin 2026</strong> relatif au calendrier. Voici, point par point, ce qui change pour les étudiants et leurs familles.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong> depuis le 2 juillet 2026, le <strong>placement sur liste d'attente ne bloque plus automatiquement</strong> la saisine du recteur de région académique, le <strong>traitement de la saisine prend fin</strong> si une candidature aboutit positivement dans la procédure dématérialisée, et le candidat qui reçoit une nouvelle proposition d'admission doit <strong>choisir explicitement</strong> entre celle-ci et celle déjà acceptée via le recteur, le silence valant conservation de la proposition acceptée.
                  </p>
                </div>
              </section>

              <section id="decret584">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Ce que change le décret n° 2026-584 sur la saisine du recteur
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret n°&nbsp;2026-584 du 25 juin 2026 modifie l'<strong>article R.&nbsp;612-36-3 du Code de l'éducation</strong>, qui organise la saisine du recteur de région académique par les titulaires d'une licence non admis en première année de master.</p>
                <p style={{marginBottom: '1rem'}}>Le changement le plus important est le suivant : la condition tenant au fait que l'étudiant <strong>ne soit pas placé sur liste d'attente</strong> est supprimée de la première phrase du texte. Jusqu'ici, être sur liste d'attente pouvait fermer la porte de la saisine, alors même que cette position n'offrait aucune garantie d'admission. Le décret prévoit au contraire qu'un placement sur liste d'attente peut désormais être <strong>pris en compte dans l'articulation</strong> de la procédure.</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Fin du traitement en cas d'admission :</strong> le traitement de la saisine prend fin si l'étudiant reçoit finalement une réponse positive à l'une de ses candidatures dans la procédure dématérialisée. La saisine n'a plus d'objet dès lors qu'une place est obtenue.</li>
                  <li><strong>Un calendrier fixé par arrêté :</strong> le décret renvoie à un arrêté ministériel le soin de fixer le calendrier de la procédure de saisine. L'arrêté du 25 juin 2026, publié le même jour au Journal officiel, couvre la saisine du recteur, la procédure de réexamen des candidatures des étudiants en situation de handicap et la commission d'accès au deuxième cycle.</li>
                </ul>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Pourquoi c'est un vrai changement.</strong> La liste d'attente est l'angle mort historique du dispositif : des étudiants classés loin sur plusieurs listes restaient formellement « en course », donc exclus de la saisine, sans réelle perspective d'admission. La nouvelle rédaction permet de mieux articuler ces deux situations au lieu de les opposer.
                  </p>
                </div>
              </section>

              <section id="decret585">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Ce que change le décret n° 2026-585 en cas de propositions successives
                </h2>
                <p style={{marginBottom: '1rem'}}>Le décret n°&nbsp;2026-585 du 25 juin 2026 intervient, lui, sur la <strong>procédure de recrutement</strong> en première année des formations conduisant au diplôme national de master. Il règle une hypothèse concrète qui posait difficulté : celle du candidat qui a déjà <strong>accepté une proposition obtenue dans le cadre de la procédure liée au recteur</strong>, puis qui reçoit une <strong>nouvelle proposition d'admission</strong> dans le circuit ordinaire de la plateforme.</p>
                <p style={{marginBottom: '1rem'}}>Dans ce cas, la règle est désormais claire :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>le candidat doit indiquer, <strong>dans le délai prévu</strong>, s'il accepte ou refuse la nouvelle proposition ;</li>
                  <li>s'il <strong>accepte</strong> la nouvelle proposition, il <strong>perd le bénéfice</strong> de la proposition déjà acceptée dans le cadre de la procédure liée au recteur ;</li>
                  <li>s'il la <strong>refuse</strong>, il <strong>conserve</strong> la première ;</li>
                  <li>s'il <strong>ne répond pas</strong> dans les délais, il est <strong>réputé avoir choisi de conserver</strong> la proposition déjà acceptée.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>Ce mécanisme de choix explicite, avec un silence qui protège la place déjà acquise, évite les situations absurdes où un étudiant pouvait perdre une place faute d'avoir compris qu'une réponse était attendue de lui.</p>
              </section>

              <section id="pratique">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Pourquoi c'est important en pratique
                </h2>
                <p style={{marginBottom: '1rem'}}>Ces ajustements peuvent paraître techniques, mais ils répondent à un vrai problème : éviter que les différentes couches de la procédure, plateforme, listes d'attente, saisine du recteur, <strong>se contredisent ou se neutralisent</strong>. En clair, le pouvoir réglementaire cherche à faire coexister proprement la voie normale de recrutement et la voie de recours.</p>
                <p style={{marginBottom: '1rem'}}>Pour les étudiants concernés et leurs familles, trois réflexes s'imposent désormais :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li><strong>Raisonner en délais.</strong> Le calendrier fixé par l'arrêté du 25 juin 2026 devient un point de vigilance à part entière : chaque phase (candidatures, réponses, saisine, choix entre propositions) a ses échéances propres.</li>
                  <li><strong>Répondre explicitement.</strong> Face à une nouvelle proposition, ne rien faire revient à conserver la place déjà acceptée via le recteur ; accepter la nouvelle fait perdre l'ancienne. Le choix doit être réfléchi, pas subi.</li>
                  <li><strong>Garder la cohérence de ses candidatures.</strong> La saisine du recteur s'éteint dès qu'une candidature aboutit : il faut donc suivre en parallèle l'état de ses vœux sur la plateforme et l'avancement de la saisine.</li>
                </ul>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Pour les étudiants et leurs familles, le message est simple : la procédure d'accès au master reste sélective, mais sa mécanique a été retouchée au 1er juillet 2026 pour mieux articuler <strong>liste d'attente</strong>, <strong>saisine du recteur</strong> et <strong>propositions d'admission successives</strong>. Si vous êtes concerné, raisonnez désormais en termes de délais, de choix explicite et de cohérence entre vos candidatures. Et si votre situation soulève une question de droit précise, notre juriste peut vous apporter une information claire sur le cadre applicable.</p>
              </section>

              <section id="sources">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Sources officielles
                </h2>
                <p style={{marginBottom: '1rem'}}>Cet article s'appuie sur le décret n°&nbsp;2026-584 du 25 juin 2026 modifiant les dispositions de l'article R.&nbsp;612-36-3 du Code de l'éducation, le décret n°&nbsp;2026-585 du 25 juin 2026 modifiant la procédure de recrutement en première année des formations conduisant au diplôme national de master, et l'arrêté du 25 juin 2026 relatif au calendrier de la procédure dématérialisée de saisine du recteur de région académique, tous publiés au <a href="https://www.legifrance.gouv.fr/jorf/jo/2026/07/01/0152" style={{color: '#1a4fba', fontWeight: 600}}>Journal officiel du 1er juillet 2026</a>.</p>
              </section>

              <section id="faq">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Questions fréquentes
                </h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details key={0} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Être sur liste d'attente empêche-t-il encore toute saisine du recteur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le décret n° 2026-584 supprime précisément cette condition de la première phrase de l'article R. 612-36-3 du Code de l'éducation et réorganise l'articulation entre le placement sur liste d'attente et la procédure de saisine du recteur de région académique.</p>
                  </details>
                  <details key={1} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Que se passe-t-il si j'obtiens une nouvelle proposition après avoir accepté une place via le recteur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Vous devez choisir dans le délai prévu : si vous acceptez la nouvelle proposition, vous perdez le bénéfice de celle déjà acceptée dans le cadre de la procédure liée au recteur ; si vous la refusez, vous conservez la première. Si vous ne répondez pas dans les délais, vous êtes réputé conserver la proposition déjà acceptée.</p>
                  </details>
                  <details key={2} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La saisine du recteur continue-t-elle si je suis finalement admis quelque part ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non. Le traitement de la saisine prend fin si vous recevez une réponse positive à l'une de vos candidatures dans la procédure dématérialisée : la voie de recours n'a plus d'objet dès lors qu'une admission est acquise.</p>
                  </details>
                  <details key={3} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Où trouver le calendrier de la procédure de saisine ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Un arrêté du 25 juin 2026, publié au Journal officiel du 1er juillet 2026, fixe le calendrier de la procédure dématérialisée de saisine du recteur de région académique, ainsi que celui de la procédure de réexamen des candidatures des étudiants en situation de handicap et de la commission d'accès au deuxième cycle.</p>
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
                Poser ma question &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Lire aussi</p>
              <a href="/blog/camsp-cmpp-decret-26-juin-2026-associations-medico-social" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Associations du médico-social : ce qu'il faut retenir du décret sur les CAMSP et les CMPP &rarr;
              </a>
              <a href="/blog/mayotte-protection-universelle-maladie-1er-juillet-2026" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none', fontWeight: '600', lineHeight: '1.5', display: 'block', marginBottom: '10px'}}>
                Mayotte : la protection universelle maladie est entrée en vigueur le 1er juillet 2026 &rarr;
              </a>
            </div>

            <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités et informations juridiques directement dans votre boîte mail.</p>
              <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                En savoir plus &rarr;
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
              <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                <span key="Éducation" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Éducation</span>
                <span key="Étudiants" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Étudiants</span>
                <span key="Enseignement supérieur" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Enseignement supérieur</span>
                <span key="Droits des usagers" style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Droits des usagers</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              &larr; Retour au blog
            </a>

          </aside>

        </div>
      </main>
      <Footer />
    </>
  )
}
