import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'
import { ChevronDown, HelpCircle, FileText, Compass, BookOpen, ClipboardCheck, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Cabinet Cholez-Pagotto · Comprendre. Décider. Agir.',
  description: "Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Juriste formaliste, membre CRFF, ORIAS n°26003943. Épinal · Grand Est · France.",
  alternates: {
    canonical: 'https://cholez-pagotto.fr',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cabinet Cholez-Pagotto",
  "url": "https://cholez-pagotto.fr",
  "description": "Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Comprendre. Décider. Agir.",
  "publisher": {
    "@type": "Organization",
    "name": "Cabinet Cholez-Pagotto",
    "url": "https://cholez-pagotto.fr",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cholez-pagotto.fr/logo-cholez-pagotto-transparent.svg"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 rue d'Olima",
      "postalCode": "88000",
      "addressLocality": "Épinal",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "contact@cholez-pagotto.fr"
    }
  }
}

const faqAccueil = [
  { q: "Que propose le Cabinet Cholez-Pagotto ?", r: "Le cabinet réunit l'information juridique, une bibliothèque de modèles de documents téléchargeables au format DOCX, l'accompagnement à la création d'entreprise et aux formalités, la conformité RGPD et le conseil en assurances. Il s'adresse aux particuliers, aux professionnels, aux associations et aux collectivités." },
  { q: "Le cabinet remplace-t-il un avocat ?", r: "Non. Notre juriste délivre une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et vous accompagne dans vos formalités. La consultation personnalisée, la rédaction d'actes pour autrui et la représentation en justice relèvent de l'avocat, vers lequel vous êtes orienté si votre situation l'exige." },
  { q: "Comment obtenir une réponse à une question juridique ?", r: "Vous pouvez poser une question et recevoir une réponse écrite rédigée par notre juriste sous 24 à 48h ouvrées, au tarif de 47 € sans abonnement. L'Abonnement Optimal Particulier inclut 1 question par mois, l'Abonnement Optimal Pro en inclut 2." },
  { q: "Faut-il payer pour accéder aux documents ?", r: "Une sélection de modèles est en accès libre, téléchargeable au format DOCX après création d'un compte gratuit. Les autres documents sont disponibles à l'unité à partir de 2,99 €, ou en illimité via l'abonnement Optimal à partir de 17,90 €/mois." },
  { q: "Où le cabinet est-il établi ?", r: "Le cabinet est établi à Épinal, en région Grand Est, et intervient en ligne pour des clients partout en France." },
  { q: "Le cabinet peut-il intervenir en assurance ?", r: "Oui. Le cabinet est intermédiaire en assurances immatriculé à l'ORIAS sous le numéro 26003943 et placé sous le contrôle de l'ACPR. Notre juriste vous informe sur les garanties utiles et vous oriente selon votre intérêt." }
]

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h1 style={{ color: 'white', fontSize: '2.2rem', fontWeight: '700', margin: '0 0 12px', lineHeight: '1.3' }}>
              Votre droit, simplement expliqué.<br />Vos démarches, professionnellement accompagnées.
            </h1>
            <p style={{ color: '#c8a84b', fontSize: '1.1rem', fontWeight: '600', margin: '0 0 16px', letterSpacing: '0.03em' }}>
              Comprendre. Décider. Agir.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.8', margin: '0 auto 24px' }}>
              Information juridique, documents téléchargeables et personnalisables, conseil en assurances. Pour les particuliers, les professionnels et les associations. Un juriste humain qui traite lui-même vos demandes, sans intelligence artificielle, réponse sous 24 à 48 heures ouvrées.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', textAlign: 'left', marginTop: '8px' }}>
              {[
                { icone: HelpCircle, titre: "J'ai une question juridique", texte: "Réponse écrite et pédagogique d'un juriste sous 24 à 48 h.", href: '/information-sur-vos-droits', action: 'Poser ma question' },
                { icone: FileText, titre: "J'ai besoin d'un document", texte: "Modèles DOCX prêts à personnaliser, dès l'accès gratuit.", href: '/catalogue', action: 'Parcourir le catalogue' },
                { icone: Compass, titre: "J'ai un projet ou un besoin de conformité", texte: 'Création, formalités, RGPD, assurances : des accompagnements dédiés.', href: '/services', action: 'Voir les accompagnements' },
              ].map((porte, i) => (
                <a key={i} href={porte.href} style={{ background: 'white', borderRadius: '12px', padding: '1.1rem 1.25rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <porte.icone size={20} color="#1a4fba" strokeWidth={1.5} />
                  <span style={{ color: '#0f2d6e', fontSize: '14.5px', fontWeight: 700, lineHeight: 1.35 }}>{porte.titre}</span>
                  <span style={{ color: '#6b7280', fontSize: '12.5px', lineHeight: 1.55, flex: 1 }}>{porte.texte}</span>
                  <span style={{ color: '#1a4fba', fontSize: '12.5px', fontWeight: 700 }}>{porte.action} &rarr;</span>
                </a>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', margin: '18px auto 0', maxWidth: '560px', lineHeight: '1.7' }}>
              47&nbsp;€ la question · Abonnement Optimal dès 17,90&nbsp;€/mois · Forfait conseil assurances dès 90&nbsp;€
            </p>
          </div>
        </section>

        {/* TROIS MÉTIERS */}
        <section style={{ background: 'white', padding: '3.5rem 0', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.6rem', fontWeight: 700, textAlign: 'center', margin: '0 0 8px' }}>Un cabinet, trois métiers</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center', maxWidth: 640, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Toute notre offre tient dans un même fil : comprendre votre situation, décider en connaissance de cause, agir avec les bons outils.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {[
                { icone: BookOpen, kicker: 'COMPRENDRE', titre: 'Informer', texte: "Information juridique par notre juriste, bibliothèque de modèles commentés et blog d'actualité : des repères fiables pour comprendre vos droits.", liens: [{ label: 'Poser une question', href: '/information-sur-vos-droits' }, { label: 'Catalogue de documents', href: '/catalogue' }] },
                { icone: ClipboardCheck, kicker: 'DÉCIDER ET AGIR', titre: 'Accomplir', texte: "Création d'entreprise, formalités externalisées, accompagnement des professionnels et des associations, conformité RGPD et DPO externalisé : vos démarches menées de bout en bout.", liens: [{ label: 'Nos accompagnements', href: '/services' }] },
                { icone: ShieldCheck, kicker: 'PROTÉGER', titre: 'Assurer', texte: "Courtier en assurances (ORIAS n° 26003943, sous le contrôle de l'ACPR) : analyse de vos contrats et conseil individualisé, indépendant des compagnies.", liens: [{ label: 'Conseil en assurances', href: '/conseil-assurances' }] },
              ].map((m, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <m.icone size={22} color="#1a4fba" strokeWidth={1.5} />
                  <p style={{ color: '#b8860b', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em', margin: 0 }}>{m.kicker}</p>
                  <h3 style={{ color: '#0f2d6e', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>{m.titre}</h3>
                  <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: 1.7, margin: 0, flex: 1 }}>{m.texte}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
                    {m.liens.map((l) => (
                      <a key={l.href} href={l.href} style={{ color: '#1a4fba', fontSize: '12.5px', fontWeight: 700, textDecoration: 'none' }}>{l.label} &rarr;</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section style={{ background: '#f8fafc', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px', letterSpacing: '0.05em' }}>NOS SERVICES</span>
              <h2 style={{ color: '#0f2d6e', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 8px' }}>Ce que nous proposons</h2>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto' }}>
                Des services concrets, accessibles, fondés sur l'information juridique et non sur la consultation.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                {
                  titre: "Bibliothèque de documents",
                  desc: "Modèles DOCX téléchargeables et personnalisables : contrats, mises en demeure, statuts, RGPD. Accès libre ou abonnement Optimal.",
                  lien: '/catalogue',
                  cta: 'Voir le catalogue',
                  badge: 'Information juridique',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "Information sur vos droits",
                  desc: "Posez votre question à notre juriste. Réponse rédigée sous 24 à 48 heures ouvrées. 47 € à l'unité, inclus dans l'abonnement Optimal.",
                  lien: '/information-sur-vos-droits',
                  cta: 'Poser une question',
                  badge: '24 à 48h',
                  badgeColor: '#f0fdf4',
                  badgeText: '#16a34a',
                },
                {
                  titre: "Conseil en assurances",
                  desc: "Analyse de vos besoins, audit des contrats existants, comparaison des offres. Forfait conseil 90 € (particuliers) · 150 € (professionnels). Commission assureur séparée, communiquée avant souscription.",
                  lien: '/conseil-assurances',
                  cta: 'En savoir plus',
                  badge: 'ORIAS 26003943',
                  badgeColor: '#fef3c7',
                  badgeText: '#92400e',
                },
                {
                  titre: "Création d'entreprise",
                  desc: "Accompagnement complet à la création de votre société : choix de la forme juridique, rédaction des statuts, dépôt au greffe. Création offerte hors frais de greffe et journal d'annonces légales.",
                  lien: '/accompagnement-professionnels',
                  cta: 'Accompagnement pro',
                  badge: 'Offert',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "Associations · ESS",
                  desc: "Création, modification des statuts, AGO/AGE, obligations comptables, RGPD pour les associations loi 1901 et structures de l'économie sociale et solidaire.",
                  lien: '/accompagnement-associations',
                  cta: 'Accompagnement associations',
                  badge: 'Sur devis',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "RGPD & conformité",
                  desc: "Diagnostic de conformité, registre des traitements, AIPD, politique de confidentialité. Mise en conformité de votre structure au RGPD, audit RGPD Express offert.",
                  lien: '/rgpd-conformite',
                  cta: 'Voir les forfaits',
                  badge: 'Dès 350 €',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "DPO externalisé",
                  desc: "Externalisez votre Délégué à la Protection des Données : point de contact CNIL, veille réglementaire, suivi de conformité, sans recrutement interne.",
                  lien: '/dpo-externalise',
                  cta: 'En savoir plus',
                  badge: 'Dès 150 €/mois',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
                {
                  titre: "Formations sur-mesure",
                  desc: "Formations en droit du travail, RGPD, droit des associations, formalités juridiques. Intra ou inter-entreprises, adaptées à vos équipes.",
                  lien: '/formations',
                  cta: 'Voir les formations',
                  badge: 'Sur devis',
                  badgeColor: '#eff6ff',
                  badgeText: '#1a4fba',
                },
              ].map((service, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: 0, lineHeight: '1.3', flex: 1 }}>{service.titre}</p>
                    <span style={{ background: service.badgeColor, color: service.badgeText, fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px', marginLeft: '8px', whiteSpace: 'nowrap', flexShrink: 0 }}>{service.badge}</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0, flex: 1 }}>{service.desc}</p>
                  <a href={service.lien} style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '700', textDecoration: 'none', alignSelf: 'flex-start' }}>
                    {service.cta} →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABONNEMENT OPTIMAL */}
        <section style={{ background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '20px', padding: '3rem', textAlign: 'center' }}>
              <span style={{ display: 'inline-block', background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', color: 'white', fontSize: '11px', fontWeight: '700', padding: '3px 14px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '0.05em' }}>
                ABONNEMENT OPTIMAL
              </span>
              <h2 style={{ color: 'white', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 12px' }}>
                Accès illimité à toute la bibliothèque + questions juriste incluses
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.8', margin: '0 0 24px', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}>
                Documents téléchargeables et personnalisables, question juriste mensuelle non cumulable, newsletter exclusive abonnés, tarif préférentiel sur les questions supplémentaires.
              </p>
              <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>Particulier</p>
                  <p style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>à partir de 17,90 €</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>par mois · ou 149 €/an</p>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>Pro · Association</p>
                  <p style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>à partir de 27,90 €</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', margin: 0 }}>par mois · ou 249 €/an</p>
                </div>
              </div>
              <a href="/tarifs" style={{ display: 'inline-block', background: 'white', color: '#0f2d6e', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Voir les offres en détail →
              </a>
            </div>
          </div>
        </section>

        {/* POURQUOI NOUS */}
        <section style={{ background: '#f8fafc', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 8px' }}>Pourquoi choisir le Cabinet Cholez-Pagotto ?</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {[
                {
                  titre: '100% humain',
                  desc: "Notre juriste rédige toutes les réponses. Aucune intelligence artificielle n'intervient dans la production de contenu.",
                },
                {
                  titre: 'Information juridique conforme',
                  desc: "Notre activité est exercée dans le cadre de la loi n°71-1130 du 31 décembre 1971. Nous ne sommes pas un cabinet d'avocats.",
                },
                {
                  titre: 'Réponse sous 24 à 48h ouvrées',
                  desc: "Une obligation de moyen : nous mettons tout en oeuvre pour répondre dans ce délai, et vous prévenons en cas de dépassement.",
                },
                {
                  titre: 'Garanties professionnelles',
                  desc: "Membre CRFF, ORIAS n°26003943, sous contrôle ACPR, membre ENDYA. Des accréditations vérifiables.",
                },
              ].map((item, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
                  <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 8px' }}>{item.titre}</p>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SITUATIONS CONCRÈTES */}
        <section style={{ background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.6rem', fontWeight: 700, textAlign: 'center', margin: '0 0 8px' }}>Des situations concrètes</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center', maxWidth: 680, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Trois exemples types, volontairement simplifiés, pour situer ce que le cabinet apporte. Chaque situation réelle appelle une lecture qui lui est propre.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { kicker: 'PARTICULIER', question: "Mon propriétaire ne me rend pas le dépôt de garantie, deux mois après mon départ. Quels sont mes droits ?", apport: "Une réponse écrite sous 24 à 48 h : les délais légaux, la majoration applicable, la marche à suivre. Et le modèle de mise en demeure du catalogue pour agir.", href: '/information-sur-vos-droits', action: 'Poser ma question' },
                { kicker: 'ASSOCIATION', question: "Notre association embauche son premier salarié : par quoi devons-nous commencer ?", apport: "Les repères essentiels (déclarations, registre du personnel, affichages), les modèles associés, et le relais de notre service dédié pour les bulletins de paie et la DSN.", href: '/accompagnement-associations', action: "Voir l'accompagnement" },
                { kicker: "CRÉATEUR D'ENTREPRISE", question: "Je passe de la micro-entreprise à la société : formalités, assurances, par où commencer ?", apport: "Un accompagnement de la création au guichet unique, des repères pour choisir la forme en connaissance de cause, et un point sur les assurances professionnelles obligatoires.", href: '/creation-entreprise', action: 'Découvrir la création' },
              ].map((c, i) => (
                <div key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p style={{ color: '#b8860b', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em', margin: 0 }}>{c.kicker}</p>
                  <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: 600, fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>« {c.question} »</p>
                  <p style={{ color: '#4b5563', fontSize: '13px', lineHeight: 1.7, margin: 0, flex: 1 }}><strong style={{ color: '#0f2d6e' }}>Ce que le cabinet apporte :</strong> {c.apport}</p>
                  <a href={c.href} style={{ color: '#1a4fba', fontSize: '12.5px', fontWeight: 700, textDecoration: 'none' }}>{c.action} &rarr;</a>
                </div>
              ))}
            </div>
            <p style={{ color: '#9ca3af', fontSize: '11px', textAlign: 'center', maxWidth: 760, margin: '1.5rem auto 0', lineHeight: 1.7 }}>
              Exemples illustratifs. Le cabinet délivre une information juridique au sens de la loi n°&nbsp;71-1130 du 31 décembre 1971 ; il ne délivre pas de consultation juridique personnalisée et, si votre situation le nécessite, vous oriente vers le professionnel du droit compétent.
            </p>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ background: 'white', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 12px' }}>Prêt à commencer ?</h2>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.8', margin: '0 0 28px' }}>
              Créez votre compte gratuit, accédez aux documents disponibles en accès libre, et découvrez nos offres.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/connexion" style={{ display: 'inline-block', background: '#0f2d6e', color: 'white', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Créer mon compte gratuit →
              </a>
              <a href="/blog" style={{ display: 'inline-block', background: 'white', color: '#0f2d6e', border: '1px solid #e5e7eb', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                Lire nos articles
              </a>
            </div>
          </div>
        </section>


        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqAccueil.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) }) }} />
        {/* FAQ */}
        <section id="faq" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <style dangerouslySetInnerHTML={{ __html: 'details.faq-item summary::-webkit-details-marker{display:none}details.faq-item summary{list-style:none}details.faq-item[open] .faq-chevron{transform:rotate(180deg)}' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2d6e', marginBottom: '0.5rem' }}>Questions fréquentes</h2>
          <p style={{ color: '#6b7280', fontSize: 13, marginBottom: '2rem' }}>Les réponses aux questions les plus fréquentes sur le cabinet et ses services.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqAccueil.map((faq, i) => (
              <details key={i} className="faq-item" style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden' }}>
                <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.5rem', cursor: 'pointer', gap: '1rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f2d6e', lineHeight: 1.4 }}>{faq.q}</span>
                  <ChevronDown className="faq-chevron" size={18} strokeWidth={2} style={{ color: '#1a4fba', flexShrink: 0, transition: 'transform 0.2s' }} />
                </summary>
                <div style={{ padding: '0 1.5rem 1.1rem', fontSize: 13, color: '#374151', lineHeight: 1.7, borderTop: '1px solid #f3f4f6' }}>
                  <div style={{ paddingTop: '1rem' }}>{faq.r}</div>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section style={{ maxWidth: '760px', margin: '0 auto', padding: '0 1.5rem 3.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: 16, padding: '2.5rem 1.75rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(15,45,110,0.25)' }}>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', margin: '0 0 0.5rem' }}>Restez informé</h2>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              Recevez nos analyses juridiques, les évolutions réglementaires et nos actualités. Une lettre claire, sans spam, désinscription en un clic.
            </p>
            <NewsletterForm variant="hero" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}