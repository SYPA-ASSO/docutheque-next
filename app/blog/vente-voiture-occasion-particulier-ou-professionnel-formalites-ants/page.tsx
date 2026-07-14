import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, ChevronRight } from 'lucide-react'

export const metadata = {
  title: `Vendre son véhicule d'occasion à un particulier ou un professionnel : la procédure complète · Blog Cabinet Cholez-Pagotto`,
  description: `Certificat de situation administrative, contrôle technique, déclaration de cession sur l'ANTS, carte grise barrée, résiliation de l'assurance : le guide complet pour vendre son véhicule d'occasion à un particulier ou à un professionnel.`,
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Vendre son véhicule d'occasion à un particulier ou un professionnel : la procédure complète",
      "description": "Certificat de situation administrative, contrôle technique, déclaration de cession sur l'ANTS, carte grise barrée, résiliation de l'assurance : le guide complet pour vendre son véhicule d'occasion à un particulier ou à un professionnel.",
      "image": "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/vente-vehicule-occasion-2026.webp",
      "datePublished": "2026-07-09",
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
      "url": "https://cholez-pagotto.fr/blog/vente-voiture-occasion-particulier-ou-professionnel-formalites-ants",
      "keywords": ["Vente véhicule occasion", "ANTS", "Déclaration de cession", "Certificat de situation administrative", "Contrôle technique", "Carte grise"],
      "inLanguage": "fr-FR"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quel est le délai pour déclarer la vente d'une voiture entre particuliers ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le vendeur doit déclarer la cession du véhicule dans les 15 jours à compter de la vente. En l'absence de déclaration dans ce délai, il s'expose à une contravention de 4e classe, soit 135 euros d'amende."
          }
        },
        {
          "@type": "Question",
          "name": "Quels documents le vendeur doit-il remettre à l'acheteur ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le code de cession, le certificat de cession (Cerfa n°15776*02) en deux exemplaires, le certificat de situation administrative, le procès-verbal de contrôle technique de moins de 6 mois si le véhicule y est soumis, et la carte grise barrée portant la mention « Vendu le » avec la date, l'heure et la signature du vendeur."
          }
        },
        {
          "@type": "Question",
          "name": "La vente à un professionnel suit-elle la même procédure qu'entre particuliers ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non, sur un point important : le contrôle technique de moins de 6 mois, obligatoire pour vendre à un particulier, n'a pas à être fourni en cas de vente à un professionnel de l'automobile (article 5 bis du décret n°78-993 du 4 octobre 1978), qui peut racheter le véhicule en l'état. Un professionnel habilité peut par ailleurs réaliser lui-même la déclaration de cession pour le compte du vendeur."
          }
        },
        {
          "@type": "Question",
          "name": "Quand résilier son contrat d'assurance après la vente d'un véhicule ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dès que la vente est réalisée, le vendeur peut envoyer une lettre recommandée avec accusé de réception à son assureur, accompagnée d'une copie du certificat de cession. Le contrat est suspendu le jour de la vente à minuit et la résiliation prend effet dans les 10 jours calendaires à compter de la réception de la lettre."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cholez-pagotto.fr/blog" },
        { "@type": "ListItem", "position": 3, "name": "Vendre son véhicule d'occasion" }
      ]
    }
  ]
}

export default function ArticleVenteVehiculeOccasion2026() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Vendre son véhicule d'occasion</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <article style={{flex: 1, minWidth: 0}}>

            {/* EN-TETE */}
            <div style={{marginBottom: '2rem'}}>
              <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '14px'}}>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>CONSOMMATION</span>
                <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px'}}>FORMALITÉS ANTS</span>
              </div>
              <h1 style={{color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', lineHeight: '1.3', margin: '0 0 16px'}}>Vendre son véhicule d'occasion à un particulier ou un professionnel : la procédure complète</h1>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '20px'}}>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <User size={13} strokeWidth={1.5} /> François CHOLEZ
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Calendar size={13} strokeWidth={1.5} /> 9 juillet 2026
                </span>
                <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: '#6b7280', fontSize: '12px'}}>
                  <Clock size={13} strokeWidth={1.5} /> 14 min de lecture
                </span>
              </div>
              <img
                src="https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/vente-vehicule-occasion-2026.webp"
                alt="Vendre son véhicule d'occasion à un particulier ou un professionnel : la procédure complète"
                style={{width: '100%', borderRadius: '12px', objectFit: 'cover', maxHeight: '400px', marginBottom: '0'}}
              />
            </div>

            {/* SOMMAIRE */}
            <nav style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Sommaire</p>
              <ol style={{margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                <li><a href="#intro" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Introduction</a></li>
                <li><a href="#verifications" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>I. Les vérifications à faire avant de vendre</a></li>
                <li><a href="#professionnel" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>II. Vendre à un professionnel : ce qui change</a></li>
                <li><a href="#documents" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>III. Vendre à un particulier : les documents à remettre</a></li>
                <li><a href="#complementaires" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>IV. Les documents complémentaires utiles</a></li>
                <li><a href="#apres-vente" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>V. Après la vente : la déclaration de cession</a></li>
                <li><a href="#assurance" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>VI. Le sort du contrat d'assurance</a></li>
                <li><a href="#conclusion" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Conclusion</a></li>
                <li><a href="#sources" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Sources officielles</a></li>
                <li><a href="#faq" style={{color: "#1a4fba", fontSize: "12px", textDecoration: "none", lineHeight: "1.5"}}>Questions fréquentes</a></li>
              </ol>
            </nav>

            {/* CONTENU */}
            <div style={{color: '#374151', fontSize: '0.95rem', lineHeight: '1.9'}}>

              <section id="intro">
                <p style={{marginBottom: '1rem'}}>La vente d'un véhicule à un professionnel se déroule généralement sans difficulté : parfaitement avisés des démarches administratives, garagistes et concessionnaires peuvent même s'en charger pour le compte du vendeur. La vente entre particuliers, elle, laisse l'ensemble des formalités à la charge du vendeur : comment déclarer la cession auprès de l'Agence Nationale des Titres Sécurisés (ANTS), quelles pièces fournir à l'acheteur, quels documents conserver, et pourquoi ?</p>
                <p style={{marginBottom: '1rem'}}>Cet article détaille la procédure complète, en distinguant ce qui reste commun aux deux types d'acheteurs et ce qui change lorsque l'acquéreur est un professionnel de l'automobile plutôt qu'un particulier.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>L'essentiel en une phrase :</strong>{' '}avant la vente, le propriétaire doit vérifier sa situation administrative (certificat de non-gage) et le contrôle technique du véhicule ; il doit ensuite remettre à l'acheteur le code de cession, le certificat de cession et la carte grise barrée, puis déclarer la cession en ligne sur l'ANTS dans les 15 jours, sous peine d'une amende de 135 euros.
                  </p>
                </div>
              </section>

              <section id="verifications">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  I. Les vérifications à faire avant de vendre
                </h2>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Vérifier l'identité du titulaire du véhicule</h3>
                <p style={{marginBottom: '1rem'}}>Avant de vendre son véhicule, le vendeur doit s'assurer qu'il en est réellement le propriétaire (article 1599 du Code civil, qui frappe de nullité la vente de la chose d'autrui). Le titulaire du certificat d'immatriculation n'est en effet pas toujours celui qui utilise le véhicule au quotidien : c'est le cas lorsque celui-ci est loué, prêté, ou dans le cadre d'une succession en cours de règlement.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Vérifier la situation administrative</h3>
                <p style={{marginBottom: '1rem'}}>Le certificat de situation administrative (CSA), aussi appelé certificat de non-gage, permet de vérifier si le véhicule fait l'objet d'un gage ou d'une opposition au transfert du certificat d'immatriculation (OTCI). Le vendeur doit obligatoirement remettre ce document au nouveau propriétaire lors de la cession. Il s'obtient gratuitement sur le site HistoVec.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Vérifier la sécurité avec un contrôle technique</h3>
                <p style={{marginBottom: '1rem'}}>Une voiture de plus de 4 ans doit avoir passé le contrôle technique pour pouvoir être vendue, la remise d'un procès-verbal valide de moins de 6 mois à la date de vente étant obligatoire (arrêté du 18 juin 1991 relatif à la mise en place et à l'organisation du contrôle technique des véhicules dont le poids n'excède pas 3,5 tonnes, articles 3 et 7-1). Lorsqu'une contre-visite est nécessaire, la vente reste possible jusqu'à la date limite fixée, dans les 2 mois suivant la visite initiale, sauf si le contrôle a révélé au moins une défaillance critique, auquel cas la vente à un particulier devient impossible tant que le véhicule n'a pas été remis en conformité.</p>
                <p style={{marginBottom: '1rem'}}>Le contrôle technique s'applique désormais également aux deux-roues motorisés (motos, scooters, cyclomoteurs) et aux quadricycles à moteur, catégorie L, depuis le 15 avril 2024, en application du décret n°&nbsp;2023-974 du 23 octobre 2023 : la première visite doit intervenir dans les 6 mois précédant le 5e anniversaire de la première mise en circulation, puis tous les 3 ans. Comme pour les voitures, un contrôle de moins de 6 mois est exigé pour finaliser une vente.</p>
              </section>

              <section id="professionnel">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  II. Vendre à un professionnel : ce qui change
                </h2>
                <p style={{marginBottom: '1rem'}}>Les vérifications de propriété et de situation administrative restent identiques, qu'il s'agisse de vendre à un particulier ou à un professionnel. En revanche, le contrôle technique fait l'objet d'une différence de taille, trop souvent ignorée : l'obligation de remettre un procès-verbal de contrôle technique de moins de 6 mois avant la vente (article R.&nbsp;323-22 du Code de la route) ne s'applique qu'en cas de vente à un <strong>acheteur non professionnel</strong>. L'article 5 bis du décret n°&nbsp;78-993 du 4 octobre 1978 limite en effet expressément cette obligation aux ventes conclues avec un acheteur non professionnel.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Concrètement.</strong>{' '}Lors d'une reprise ou d'une vente à un professionnel de l'automobile (garagiste, concessionnaire, racheteur agréé), le contrôle technique n'a pas à être fourni, qu'il date de plus de 6 mois, qu'il soit en attente de contre-visite, ou même s'il est totalement inexistant. Le professionnel achète le véhicule en l'état, sous sa propre responsabilité d'évaluation. C'est d'ailleurs la solution vers laquelle se tournent naturellement les vendeurs dont le véhicule ne pourrait pas être vendu à un particulier faute de contrôle technique valide ou en raison d'une défaillance critique.
                  </p>
                </div>
                <p style={{marginBottom: '1rem'}}>Un garagiste, un concessionnaire ou toute autre professionnel de l'automobile habilité par le ministère de l'Intérieur peut par ailleurs réaliser lui-même, pour le compte du vendeur, la déclaration de cession en ligne. En pratique, le particulier vendeur signe le certificat de cession et remet les pièces requises (CSA, carte grise), et c'est le professionnel qui se charge d'effectuer la démarche auprès de l'ANTS. Le vendeur reste toutefois responsable de l'exactitude des informations qu'il a fournies et du respect du délai légal si, pour une raison quelconque, il choisit malgré tout d'effectuer la démarche lui-même.</p>
                <p style={{marginBottom: '1rem'}}>Sur le plan de la responsabilité, la qualité de professionnel de l'acheteur ne dispense pas le vendeur particulier de son obligation de bonne foi : la vente d'un véhicule affecté d'un vice cache ou d'un défaut sciemment dissimulé engage sa responsabilité, y compris envers un professionnel, sur le fondement de la garantie des vices cachés (articles 1641 et suivants du Code civil). En pratique cependant, un acheteur professionnel de l'automobile est réputé mieux à même de détecter les défauts apparents ou courants d'un véhicule d'occasion qu'un particulier, ce qui limite en fait, sans l'exclure en droit, le contentieux sur ce terrain.</p>
              </section>

              <section id="documents">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  III. Vendre à un particulier : les documents à remettre
                </h2>
                <p style={{marginBottom: '1rem'}}>Lorsque l'acheteur est un particulier, c'est au vendeur de conduire l'ensemble des démarches. Il est tenu de délivrer les documents nécessaires au transfert du certificat d'immatriculation.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Le code de cession</h3>
                <p style={{marginBottom: '1rem'}}>Avant la vente, la déclaration de cession doit être initiée en ligne (arrêté du 9 février 2009 relatif aux modalités d'immatriculation des véhicules, article 10). Cette étape permet d'obtenir un code de cession à transmettre à l'acheteur ; la démarche en ligne est ensuite finalisée avec les renseignements du certificat de cession. Un accusé d'enregistrement est remis à l'issue : il convient de le télécharger et de le conserver.</p>
                <p style={{marginBottom: '1rem'}}>Si le vendeur et l'acheteur utilisent l'application Simplimmat au moment de la transaction, cette étape préalable de génération du code de cession sur le site de l'ANTS n'est plus nécessaire : tout se fait en temps réel depuis le smartphone des deux parties.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>Le certificat de cession</h3>
                <p style={{marginBottom: '1rem'}}>Ce document Cerfa n°&nbsp;15776*02 formalise l'accord entre les parties et mentionne notamment l'identité de l'acquéreur, la date et le prix de vente. Il est établi en deux exemplaires, un pour chaque partie, et sert de support pour finaliser la déclaration de cession en ligne et justifier du changement de propriétaire.</p>
                <p style={{marginBottom: '1rem'}}>Depuis le 18 octobre 2023, l'application Simplimmat permet à l'acheteur et au vendeur de compléter la déclaration de cession directement depuis un smartphone, sans passer par un support papier.</p>

                <h3 style={{color: '#0f2d6e', fontSize: '1.05rem', fontWeight: '700', margin: '1.5rem 0 10px'}}>La carte grise barrée</h3>
                <p style={{marginBottom: '1rem'}}>La carte grise doit être barrée et porter la mention « Vendu le », accompagnée de la date, de l'heure de la cession et de la signature du vendeur (article R.&nbsp;322-3 du Code de la route). Ces indications matérialisent le transfert de propriété et fixent le moment précis à partir duquel le vendeur n'est plus responsable du véhicule.</p>
                <p style={{marginBottom: '1rem'}}>Le coupon détachable doit être complété avec les informations concernant l'acheteur, sans être découpé : il permet à ce dernier de circuler pendant 1 mois, le temps de procéder au changement de titulaire du certificat d'immatriculation.</p>
              </section>

              <section id="complementaires">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  IV. Les documents complémentaires utiles
                </h2>
                <p style={{marginBottom: '1rem'}}>Certains documents ne sont pas obligatoires, mais peuvent utilement rassurer l'acheteur et accélérer la vente, qu'il soit particulier ou professionnel :</p>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <li>la facture d'achat d'origine ;</li>
                  <li>le carnet d'entretien ;</li>
                  <li>l'historique des réparations effectuées ;</li>
                  <li>le double des clés, lorsque le vendeur en dispose.</li>
                </ul>
              </section>

              <section id="apres-vente">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  V. Après la vente : la déclaration de cession
                </h2>
                <p style={{marginBottom: '1rem'}}>Le vendeur doit déclarer la cession du véhicule dans les <strong>15 jours</strong> à compter de la vente. En l'absence de déclaration dans ce délai, il s'expose à une contravention de 4e classe, soit 135 euros d'amende (articles R.&nbsp;322-4 du Code de la route et R.&nbsp;49 du Code de procédure pénale).</p>
                <p style={{marginBottom: '1rem'}}>Depuis le plan préfectures nouvelle génération mis en place en 2017, la déclaration de cession se réalise exclusivement en ligne sur le site de l'ANTS (article L.&nbsp;322-1 du Code de la route) : il n'est plus possible d'envoyer le certificat de cession à la préfecture ou à la sous-préfecture. La démarche s'effectue depuis l'espace personnel ANTS, au moyen du code confidentiel associé au certificat d'immatriculation ou, à défaut, via FranceConnect.</p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1.25rem 0'}}>
                  <p style={{color: '#1e3a5f', fontSize: '13px', lineHeight: '1.7', margin: 0}}>
                    <strong>Que faire si l'acheteur ne déclare pas la cession ?</strong>{' '}Dès lors que le vendeur a déclaré la cession dans le délai de 15 jours, il n'est pas pénalisé, même si l'acheteur tarde à effectuer les démarches de son côté. Cette déclaration suffit à établir le transfert de propriété et protège le vendeur contre les contraventions liées à l'usage du véhicule après la vente. Si le nouveau propriétaire ne procède pas au changement de titulaire, c'est lui qui s'expose à un refus d'immatriculation et à l'impossibilité de circuler légalement.
                  </p>
                </div>
              </section>

              <section id="assurance">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  VI. Le sort du contrat d'assurance
                </h2>
                <p style={{marginBottom: '1rem'}}>Après la vente, le certificat de cession conservé par le vendeur permet d'engager la résiliation du contrat d'assurance auto. Il convient d'envoyer une lettre recommandée avec accusé de réception à l'assureur, mentionnant les coordonnées du souscripteur, le numéro du contrat, la date de la vente, la marque du véhicule et son numéro d'immatriculation, accompagnée d'une copie du certificat de cession.</p>
                <p style={{marginBottom: '1rem'}}>Le contrat est suspendu le jour de la vente à minuit, et la résiliation prend effet dans les 10 jours calendaires à compter de la réception de la lettre par l'assureur (article L.&nbsp;121-11 du Code des assurances).</p>
              </section>

              <section id="conclusion">
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '2rem 0 16px', paddingTop: '1rem'}}>
                  Conclusion
                </h2>
                <p style={{marginBottom: '1rem'}}>Que la vente se fasse auprès d'un particulier ou d'un professionnel, la vérification de la propriété du véhicule et de sa situation administrative s'impose dans tous les cas. Le contrôle technique, en revanche, n'est exigé qu'en cas de vente à un particulier : un professionnel de l'automobile peut racheter le véhicule en l'état, sans procès-verbal valide, ce qui en fait une solution de recours lorsque le véhicule ne peut pas être vendu à un particulier. Autre différence notable : un professionnel habilité peut réaliser la déclaration de cession pour le compte du vendeur, tandis qu'entre particuliers, cette responsabilité repose entièrement sur ce dernier, avec un délai strict de 15 jours à respecter. Dans tous les cas, conserver l'accusé d'enregistrement, le double du certificat de cession et la preuve de la résiliation d'assurance protège durablement le vendeur.</p>
              </section>

              <section id="sources" style={{marginTop: '2.5rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px'}}>
                  Sources officielles
                </h2>
                <ul style={{paddingLeft: '1.5rem', margin: '1rem 0', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px'}}>
                  <li>Code civil, article 1599 (nullité de la vente de la chose d'autrui)</li>
                  <li>Code civil, articles 1641 et suivants (garantie des vices cachés)</li>
                  <li>Arrêté du 18 juin 1991 relatif à la mise en place et à l'organisation du contrôle technique des véhicules dont le poids n'excède pas 3,5 tonnes, articles 3 et 7-1 (procès-verbal de moins de 6 mois, contre-visite)</li>
                  <li>Code de la route, article R.&nbsp;323-22 (obligation de contrôle technique de moins de 6 mois avant toute mutation d'un véhicule de plus de 4 ans)</li>
                  <li>Décret n°&nbsp;78-993 du 4 octobre 1978, article 5 bis (limitation de l'obligation de remise du procès-verbal de contrôle technique aux ventes conclues avec un acheteur non professionnel)</li>
                  <li>Décret n°&nbsp;2023-974 du 23 octobre 2023 relatif au contrôle technique des véhicules de catégorie L (motos, scooters, cyclomoteurs, quadricycles à moteur), en vigueur depuis le 15 avril 2024</li>
                  <li>Code de la route, article L.&nbsp;323-1 (contrôle technique)</li>
                  <li>Arrêté du 9 février 2009 relatif aux modalités d'immatriculation des véhicules, article 10 (code de cession)</li>
                  <li>Code de la route, article R.&nbsp;322-3 (carte grise barrée, coupon détachable, circulation pendant 1 mois)</li>
                  <li>Code de la route, article R.&nbsp;322-4, et Code de procédure pénale, article R.&nbsp;49 (contravention de 4e classe pour absence de déclaration de cession dans les 15 jours)</li>
                  <li>Code de la route, article L.&nbsp;322-1 (déclaration de cession exclusivement en ligne depuis le plan préfectures nouvelle génération)</li>
                  <li>Code des assurances, article L.&nbsp;121-11 (suspension et résiliation du contrat d'assurance après cession du véhicule)</li>
                </ul>
                <p style={{marginBottom: '1rem', fontSize: '12px', color: '#9ca3af', fontStyle: 'italic'}}>Cet article relève d'une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971. Le cabinet ne délivre pas de consultation juridique personnalisée. Pour l'analyse d'une situation individuelle, un professionnel du droit compétent reste le bon interlocuteur.</p>
              </section>

              <section id="faq" style={{marginTop: '3rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.5rem'}}>Questions fréquentes</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quel est le délai pour déclarer la vente d'une voiture entre particuliers ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le vendeur doit déclarer la cession du véhicule dans les 15 jours à compter de la vente. En l'absence de déclaration dans ce délai, il s'expose à une contravention de 4e classe, soit 135 euros d'amende.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quels documents le vendeur doit-il remettre à l'acheteur ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Le code de cession, le certificat de cession (Cerfa n°15776*02) en deux exemplaires, le certificat de situation administrative, le procès-verbal de contrôle technique de moins de 6 mois si le véhicule y est soumis, et la carte grise barrée portant la mention « Vendu le » avec la date, l'heure et la signature du vendeur.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>La vente à un professionnel suit-elle la même procédure qu'entre particuliers ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Non, sur un point important : le contrôle technique de moins de 6 mois, obligatoire pour vendre à un particulier, n'a pas à être fourni en cas de vente à un professionnel de l'automobile (article 5 bis du décret n°78-993 du 4 octobre 1978), qui peut racheter le véhicule en l'état. Un professionnel habilité peut par ailleurs réaliser lui-même la déclaration de cession pour le compte du vendeur.</p>
                  </details>
                  <details style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                    <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                      <span>Quand résilier son contrat d'assurance après la vente d'un véhicule ?</span>
                      <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>+</span>
                    </summary>
                    <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>Dès que la vente est réalisée, le vendeur peut envoyer une lettre recommandée avec accusé de réception à son assureur, accompagnée d'une copie du certificat de cession. Le contrat est suspendu le jour de la vente à minuit et la résiliation prend effet dans les 10 jours calendaires à compter de la réception de la lettre.</p>
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
                Accompagne particuliers, professionnels, collectivités et acteurs de l'ESS dans la compréhension de leurs droits, la sécurisation des activités et le développement de projets.
              </p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 8px'}}>
                Membre du CRFF (Conseil Représentatif des Formalistes de France). Expert auprès de collectifs francophones d'orientation juridique.
              </p>
              <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto</p>
            </div>

            <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 10px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47&nbsp;€ à l'unité, sans abonnement.</p>
              <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: '0 0 14px', fontStyle: 'italic'}}>Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.</p>
              <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question →
              </a>
            </div>

            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Se défendre par écrit</p>
              <p style={{color: '#6b7280', fontSize: '11px', lineHeight: '1.7', margin: '0 0 12px'}}>Modèles de certificat de cession et de courrier de résiliation d'assurance à télécharger dans la Docuthèque.</p>
              <a href="/catalogue" style={{color: '#1a4fba', fontSize: '11px', textDecoration: 'none', fontWeight: '600'}}>
                Voir les modèles →
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
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Vente véhicule</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>ANTS</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Déclaration de cession</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>Contrôle technique</span>
                <span style={{background: "#eff6ff", color: "#1a4fba", fontSize: "11px", padding: "3px 10px", borderRadius: "20px"}}>2026</span>
              </div>
            </div>

            <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
              ← Retour au blog
            </a>

          </aside>

        </div>

        {/* CES ARTICLES PEUVENT AUSSI VOUS INTERESSER */}
        <section style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem 3.5rem'}}>
          <h2 style={{color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 1.25rem'}}>Ces articles peuvent aussi vous intéresser</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px'}}>
            {[
              { cat: 'CONSOMMATION', titre: "Garantie légale de conformité : vos droits face à un produit défectueux en 2026", href: '/blog/garantie-legale-de-conformite-vos-droits-produit-defectueux-2026', date: '2 juin 2026' },
              { cat: 'CONSOMMATION', titre: "Bouton de rétractation : l'obligation des sites de vente en ligne depuis le 19 juin 2026", href: '/blog/bouton-de-retractation-obligation-vente-en-ligne-19-juin-2026', date: '22 juin 2026' },
              { cat: 'DROIT DU TRAVAIL', titre: "DUERP : le guide pratique employeur, CSE et salariés", href: '/blog/duerp-guide-pratique-employeur-cse-salaries', date: '8 juillet 2026' },
            ].map((a) => (
              <a key={a.href} href={a.href} style={{display: 'flex', flexDirection: 'column', gap: '8px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.1rem 1.25rem', textDecoration: 'none'}}>
                <span style={{alignSelf: 'flex-start', background: '#eff6ff', color: '#1a4fba', fontSize: '10px', fontWeight: '700', padding: '2px 9px', borderRadius: '20px'}}>{a.cat}</span>
                <span style={{color: '#0f2d6e', fontSize: '13.5px', fontWeight: '700', lineHeight: '1.4'}}>{a.titre}</span>
                {a.date && <span style={{color: '#9ca3af', fontSize: '11px'}}>{a.date}</span>}
              </a>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
