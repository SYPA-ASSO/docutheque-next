import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, FileText, Clock, CheckCircle, MessageSquare, Send, Shield, User } from 'lucide-react'

export const metadata = {
  title: "Information sur vos droits · Posez votre question à un juriste — Cabinet Cholez-Pagotto",
  description: "Un juriste vous répond par écrit sous 24 à 48h. Service d'information juridique accessible à tous : droit du travail, logement, consommation, assurances, création d'entreprise. 47 € à l'unité, sans abonnement.",
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Information sur vos droits",
      "description": "Service d'information juridique rédigée par un juriste sous 24 à 48h ouvrées. Réponse pédagogique sur le droit applicable à votre situation, rédigée en fonction des éléments transmis.",
      "provider": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto — FCFBL ACTIVITIES",
        "url": "https://cholez-pagotto.fr"
      },
      "offers": {
        "@type": "Offer",
        "price": "47",
        "priceCurrency": "EUR",
        "description": "Réponse rédigée par un juriste sous 24 à 48h ouvrées. À l'unité, sans abonnement ni engagement."
      },
      "serviceType": "Information juridique",
      "url": "https://cholez-pagotto.fr/information-sur-vos-droits"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Ce service remplace-t-il un avocat ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971. Il vous permet de comprendre vos droits, d'identifier les règles applicables à votre situation et de préparer vos démarches. Si votre situation nécessite une représentation en justice ou la rédaction d'actes, vous serez orienté vers le professionnel compétent."
          }
        },
        {
          "@type": "Question",
          "name": "Quels types de questions puis-je poser ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Toutes les questions relatives à vos droits peuvent être posées : droit du travail, droit immobilier, droit de la consommation, droit des assurances, droit social, droit des associations, création d'entreprise, formalités administratives, RGPD, et bien d'autres. Aucun domaine juridique n'est exclu pour l'information pédagogique."
          }
        },
        {
          "@type": "Question",
          "name": "Comment la réponse m'est-elle transmise ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "La réponse vous est adressée par écrit sous 24 à 48h ouvrées suivant la réception de votre question et la confirmation du paiement. Elle est rédigée en langage clair, sans jargon, avec les références juridiques applicables."
          }
        },
        {
          "@type": "Question",
          "name": "Quelle est la différence avec l'Abonnement Optimal ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "L'Abonnement Optimal inclut une question mensuelle au tarif préférentiel de 9,90 € pour les questions supplémentaires, plus l'accès à toute la bibliothèque de documents juridiques. Si vous posez régulièrement des questions, l'abonnement devient plus économique dès la deuxième question mensuelle."
          }
        },
        {
          "@type": "Question",
          "name": "Ma question est-elle confidentielle ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Toutes les informations transmises dans le cadre de ce service sont traitées de manière strictement confidentielle, conformément à notre politique de confidentialité et au RGPD."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Information sur vos droits" }
      ]
    }
  ]
}

const exemples = [
  {
    domaine: "Droit du travail",
    question: "Mon patron veut changer mon poste et mes horaires sans me demander mon avis. Il dit que je suis obligé d'accepter. Est-ce qu'il a le droit ?",
    contexte: "Modification du contrat de travail imposée unilatéralement par l'employeur.",
    color: "#0f2d6e",
  },
  {
    domaine: "Droit du travail",
    question: "Mon employeur me propose une rupture conventionnelle. Je ne sais pas si c'est intéressant pour moi, ce que je vais toucher, ni si j'aurai droit au chômage.",
    contexte: "Rupture conventionnelle : conditions, indemnités et accès à l'assurance chômage.",
    color: "#1a4fba",
  },
  {
    domaine: "Droit immobilier",
    question: "Je viens de quitter mon appartement. Mon propriétaire refuse de me rendre ma caution en disant qu'il y a des dégâts. Je ne suis pas d'accord. Qu'est-ce que je peux faire ?",
    contexte: "Retenue sur dépôt de garantie contestée par le locataire à la sortie du logement.",
    color: "#0f2d6e",
  },
  {
    domaine: "Droit de la consommation",
    question: "J'ai commandé un produit sur internet, je ne l'ai jamais reçu et le vendeur ne répond plus à mes messages. Comment est-ce que je peux me faire rembourser ?",
    contexte: "Achat en ligne non livré : recours contre le vendeur et droit au remboursement.",
    color: "#1a4fba",
  },
  {
    domaine: "Droit social",
    question: "Je me suis blessé au travail la semaine dernière. Je ne sais pas ce que je dois faire, ce que je vais toucher et si mon employeur peut me licencier pendant mon arrêt.",
    contexte: "Accident du travail : déclaration, indemnisation et protection contre le licenciement.",
    color: "#0f2d6e",
  },
  {
    domaine: "Droit des assurances",
    question: "Mon assurance refuse de rembourser mon sinistre en invoquant une clause que je ne comprends pas. Est-ce que ce refus est justifié et qu'est-ce que je peux faire ?",
    contexte: "Refus de prise en charge d'un sinistre : exclusions de garantie et recours possibles.",
    color: "#1a4fba",
  },
]

const etapes = [
  {
    num: "1",
    titre: "Vous posez votre question",
    desc: "En langage courant, sans jargon. Décrivez votre situation avec le maximum de détails pour permettre une réponse précise et utile.",
    icon: <MessageSquare size={24} color="#1a4fba" strokeWidth={1.5} />,
  },
  {
    num: "2",
    titre: "Un juriste identifie le droit applicable",
    desc: "Votre question est traitée par un juriste qui identifie les textes et règles juridiques applicables à votre situation, puis rédige une réponse pédagogique avec les références correspondantes.",
    icon: <User size={24} color="#1a4fba" strokeWidth={1.5} />,
  },
  {
    num: "3",
    titre: "Vous recevez votre réponse sous 24 à 48h",
    desc: "Une réponse écrite, claire, avec les références juridiques applicables. Vous comprenez vos droits et savez comment agir.",
    icon: <Send size={24} color="#1a4fba" strokeWidth={1.5} />,
  },
]

const garanties = [
  "Réponse rédigée par un juriste — 100% humain, aucune IA",
  "Délai de 24 à 48h ouvrées",
  "Réponse en langage clair, sans jargon",
  "Références juridiques précises (articles de loi, jurisprudences)",
  "Confidentialité totale de vos échanges",
  "Orientation vers le professionnel compétent si nécessaire",
]

const faqs = [
  {
    q: "Ce service remplace-t-il un avocat ?",
    a: "Non. Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971. Il vous permet de comprendre vos droits, d'identifier les règles applicables à votre situation et de préparer vos démarches. Si votre situation nécessite une représentation en justice ou la rédaction d'actes, vous serez orienté vers le professionnel compétent."
  },
  {
    q: "Quels types de questions puis-je poser ?",
    a: "Toutes les questions relatives à vos droits peuvent être posées : droit du travail, droit immobilier, droit de la consommation, droit des assurances, droit social, droit des associations, création d'entreprise, formalités administratives, RGPD, et bien d'autres. Aucun domaine juridique n'est exclu pour l'information pédagogique."
  },
  {
    q: "Comment la réponse m'est-elle transmise ?",
    a: "La réponse vous est adressée par écrit sous 24 à 48h ouvrées suivant la réception de votre question et la confirmation du paiement. Elle est rédigée en langage clair, avec les références juridiques applicables à votre situation."
  },
  {
    q: "Quelle est la différence avec l'Abonnement Optimal ?",
    a: "L'Abonnement Optimal inclut une question mensuelle, plus l'accès à toute la bibliothèque de documents juridiques (DOCX). Les questions supplémentaires sont à 9,90 € pour les abonnés au lieu de 47 €. Si vous posez régulièrement des questions, l'abonnement devient plus économique dès la deuxième question mensuelle."
  },
  {
    q: "Ma question est-elle confidentielle ?",
    a: "Oui. Toutes les informations transmises dans le cadre de ce service sont traitées de manière strictement confidentielle, conformément à notre politique de confidentialité et au RGPD."
  },
  {
    q: "Puis-je poser une question en urgence ?",
    a: "Ce service n'est pas adapté aux situations d'urgence judiciaire (garde à vue, audience imminente) pour lesquelles seul un avocat est habilité à intervenir en temps réel. Pour toute question d'information juridique, nous traitons votre demande dans le délai de 24 à 48h ouvrées."
  },
]

export default function InformationDroits() {
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
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Information sur vos droits</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '4rem', alignItems: 'center'}}>
            <div style={{flex: 1}}>
              <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.05em'}}>
                SERVICE D'INFORMATION JURIDIQUE
              </span>
              <h1 style={{color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px', lineHeight: '1.3'}}>
                Comprenez vos droits.<br />Un juriste vous répond.
              </h1>
              <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.8', margin: '0 0 24px', maxWidth: '520px'}}>
                Vous avez une question juridique et vous ne savez pas quels sont vos droits ? Un juriste identifie les règles et textes applicables à votre situation et vous apporte une réponse pédagogique, rédigée en langage clair, sous 24 à 48h ouvrées.
              </p>
              <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center'}}>
                <a href="/connexion" style={{display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none'}}>
                  Poser ma question — 47 € →
                </a>
                <a href="/tarifs" style={{display: 'inline-block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.5)', padding: '13px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none'}}>
                  Voir l'Abonnement Optimal
                </a>
              </div>
            </div>
            <div style={{flex: '0 0 280px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              {garanties.map((g, i) => (
                <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                  <CheckCircle size={15} color="#93c5fd" style={{flexShrink: 0, marginTop: '2px'}} strokeWidth={2} />
                  <span style={{color: 'rgba(255,255,255,0.85)', fontSize: '13px', lineHeight: '1.5'}}>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '4rem'}}>

          {/* QU'EST-CE QUE CE SERVICE */}
          <section>
            <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 2.5rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px'}}>Un service d'information juridique, pas une consultation d'avocat</h2>
              <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.8', margin: 0}}>
                Le droit encadre chaque aspect de votre vie quotidienne — travail, logement, famille, consommation, assurances. Pourtant, face à une situation juridique, la plupart des personnes ne savent pas quels textes s'appliquent, quels sont leurs droits réels, ni comment agir efficacement.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 12px'}}>Ce service vous permet de :</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  {[
                    "Comprendre le cadre juridique applicable à votre situation",
                    "Identifier vos droits et obligations selon les textes en vigueur",
                    "Identifier les recours légaux applicables à votre type de situation",
                    "Préparer un échange avec un avocat ou une démarche administrative",
                    "Prendre vos décisions en toute connaissance de cause",
                    "Être orienté vers le professionnel compétent si nécessaire",
                  ].map((item, i) => (
                    <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                      <CheckCircle size={14} color="#16a34a" style={{flexShrink: 0, marginTop: '2px'}} strokeWidth={2} />
                      <span style={{color: '#374151', fontSize: '13px', lineHeight: '1.5'}}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <p style={{color: '#6b7280', fontSize: '14px', fontWeight: '700', margin: '0 0 12px'}}>Ce service ne remplace pas :</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  {[
                    "La consultation d'un avocat pour une représentation en justice",
                    "La rédaction d'actes juridiques par un professionnel habilité",
                    "L'intervention d'un notaire pour les actes authentiques",
                    "L'assistance d'urgence en cas de garde à vue ou d'audience imminente",
                  ].map((item, i) => (
                    <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
                      <span style={{color: '#9ca3af', fontSize: '14px', flexShrink: 0, marginTop: '1px'}}>—</span>
                      <span style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.5'}}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{marginTop: '16px', background: '#eff6ff', borderRadius: '8px', padding: '12px', fontSize: '12px', color: '#1e3a5f', lineHeight: '1.6', fontStyle: 'italic'}}>
                  Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971. La réponse apportée vous permettra de mieux comprendre vos droits, d'identifier les règles juridiques applicables à votre situation et de prendre vos décisions en toute connaissance de cause. Le cas échéant, vous serez orienté vers le professionnel du droit compétent.
                </div>
              </div>
            </div>
          </section>

          {/* COMMENT ÇA MARCHE */}
          <section>
            <h2 style={{color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 2rem', textAlign: 'center'}}>Comment ça marche ?</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
              {etapes.map((e, i) => (
                <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                    <div style={{width: '36px', height: '36px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                      {e.icon}
                    </div>
                    <span style={{background: '#0f2d6e', color: 'white', fontSize: '11px', fontWeight: '700', padding: '2px 10px', borderRadius: '20px'}}>Étape {e.num}</span>
                  </div>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0}}>{e.titre}</p>
                  <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0}}>{e.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* EXEMPLES DE QUESTIONS */}
          <section>
            <div style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 2rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px'}}>Des exemples de questions que vous pouvez poser</h2>
              <p style={{color: '#6b7280', fontSize: '14px', lineHeight: '1.7', margin: 0}}>
                Ces questions figurent parmi les plus fréquemment posées sur les moteurs de recherche et les outils d'intelligence artificielle. Ce sont aussi celles pour lesquelles une réponse imprécise peut avoir des conséquences importantes.
              </p>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px'}}>
              {exemples.map((ex, i) => (
                <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <span style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '2px 10px', borderRadius: '20px', alignSelf: 'flex-start'}}>{ex.domaine}</span>
                  <p style={{color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0, lineHeight: '1.4'}}>« {ex.question} »</p>
                  <p style={{color: '#9ca3af', fontSize: '12px', margin: 0, lineHeight: '1.5', fontStyle: 'italic'}}>{ex.contexte}</p>
                </div>
              ))}
            </div>
            <p style={{color: '#6b7280', fontSize: '13px', textAlign: 'center', margin: '1.5rem 0 0', lineHeight: '1.6'}}>
              Ces exemples sont illustratifs. Vous pouvez poser toute question relative à vos droits dans tous les domaines juridiques, sans restriction de thème pour l'information pédagogique.
            </p>
          </section>

          {/* TARIF + CTA */}
          <section style={{background: '#0f2d6e', borderRadius: '16px', padding: '2.5rem', display: 'flex', gap: '3rem', alignItems: 'center'}}>
            <div style={{flex: 1}}>
              <h2 style={{color: 'white', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px'}}>Prêt à poser votre question ?</h2>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.8', margin: '0 0 20px'}}>
                Créez votre compte, posez votre question en langage courant, et recevez une réponse rédigée par un juriste sous 24 à 48h ouvrées. Sans abonnement, sans engagement.
              </p>
              <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 20px', textAlign: 'center'}}>
                  <p style={{color: 'white', fontSize: '1.8rem', fontWeight: '700', margin: 0}}>47 €</p>
                  <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: 0}}>À l'unité · HT</p>
                </div>
                <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 20px', textAlign: 'center'}}>
                  <p style={{color: 'white', fontSize: '1.8rem', fontWeight: '700', margin: 0}}>24–48h</p>
                  <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: 0}}>Délai de réponse</p>
                </div>
                <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '14px 20px', textAlign: 'center'}}>
                  <p style={{color: 'white', fontSize: '1.8rem', fontWeight: '700', margin: 0}}>9,90 €</p>
                  <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: 0}}>Abonnés Optimal</p>
                </div>
              </div>
            </div>
            <div style={{flex: '0 0 260px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
              <a href="/connexion" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '14px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                Poser ma question — 47 € →
              </a>
              <a href="/tarifs" style={{display: 'block', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', textDecoration: 'none', textAlign: 'center'}}>
                Voir l'Abonnement Optimal
              </a>
              <div style={{background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'flex-start', gap: '8px'}}>
                <Shield size={14} color="rgba(255,255,255,0.6)" style={{flexShrink: 0, marginTop: '2px'}} strokeWidth={1.5} />
                <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: '1.6', margin: 0}}>Paiement sécurisé. Vos données sont protégées conformément au RGPD.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 style={{color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem', textAlign: 'center'}}>Questions fréquentes</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '760px', margin: '0 auto'}}>
              {faqs.map((faq, i) => (
                <details key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
                  <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                    <span>{faq.q}</span>
                    <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
                  </summary>
                  <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* RASSURANCE FINALE */}
          <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem', textAlign: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '12px'}}>
              <img src="https://secure.gravatar.com/avatar/6c4917275b124957f449a0eb107866858eaaf8ab6f17ccc1d2262120d3c04478?s=200&d=mm&r=g" alt="François CHOLEZ" style={{width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover'}} />
              <div style={{textAlign: 'left'}}>
                <p style={{color: '#374151', fontSize: '13px', fontWeight: '700', margin: 0}}>François CHOLEZ</p>
                <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Juriste · Formaliste · Conseil en assurances</p>
              </div>
            </div>
            <p style={{color: '#6b7280', fontSize: '13px', lineHeight: '1.8', margin: '0 0 16px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>
              Membre du CRFF. Courtier en assurances immatriculé à l'ORIAS n°26003943, sous contrôle de l'ACPR. Chaque réponse est rédigée avec rigueur, dans un langage accessible, en citant les textes applicables.
            </p>
            <a href="/connexion" style={{display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '12px 32px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none'}}>
              Poser ma question →
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}