import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, ArrowRight, Scale, Gavel, FileText, Building2, Umbrella, ShieldCheck, CheckCircle2, XCircle, Lightbulb } from 'lucide-react'

export const metadata = {
  title: "Juriste-formaliste ou avocat : quelles différences et lequel choisir ? · Cabinet Cholez-Pagotto",
  description: "Juriste-formaliste ou avocat : information juridique, formalités et assurance d'un côté, conseil personnalisé et représentation de l'autre. Tableau comparatif, cas pratiques et complémentarité.",
  alternates: { canonical: 'https://cholez-pagotto.fr/juriste-formaliste-ou-avocat' },
}

const faq = [
  {
    q: "Le Cabinet Cholez-Pagotto peut-il remplacer un avocat ?",
    a: "Non. Le cabinet n'accomplit aucun acte réservé aux avocats : il ne représente pas devant les juridictions, ne plaide pas et ne délivre pas de consultation juridique personnalisée engageant une responsabilité au sens de la profession d'avocat. Il intervient en amont, pour informer, fournir des documents et réaliser des formalités.",
  },
  {
    q: "Quelle différence entre information juridique et conseil juridique ?",
    a: "L'information juridique consiste à expliquer le cadre légal applicable, présenter les règles et leurs conséquences générales, sans recommander une stratégie propre à une situation particulière. Le conseil juridique personnalisé, qui analyse une situation donnée et oriente une décision engageante, relève de l'avocat. Les services d'information du cabinet s'inscrivent dans la loi n°71-1130 du 31 décembre 1971.",
  },
  {
    q: "Le cabinet réalise-t-il les formalités d'entreprise ?",
    a: "Oui. La réalisation de formalités (immatriculations, modifications, cessations, dépôts) est une activité non réglementée, distincte de la consultation juridique. Le cabinet exerce comme formaliste, membre du CRFF, à partir des actes établis par le client ou son conseil.",
  },
  {
    q: "Le cabinet est-il assureur ?",
    a: "Non. Le cabinet est intermédiaire en assurance (conseil et courtage), immatriculé à l'ORIAS sous le numéro 26003943 et placé sous le contrôle de l'ACPR. Il ne porte pas le risque : il analyse les besoins, compare les offres et accompagne, conformément au devoir de conseil prévu par la directive sur la distribution d'assurances.",
  },
  {
    q: "Mes échanges avec le cabinet sont-ils confidentiels ?",
    a: "Oui. Le cabinet est tenu à un engagement de confidentialité. À la différence de l'avocat, dont le secret professionnel est une obligation légale, la confidentialité du cabinet repose sur un engagement contractuel et, pour les données personnelles, sur les obligations du RGPD.",
  },
  {
    q: "Le cabinet peut-il me conseiller sur le choix d'un statut juridique ?",
    a: "Le cabinet peut vous informer sur les règles applicables aux différentes formes (société, entreprise individuelle, association) et sur leurs conséquences générales. Le choix d'un statut qui engage votre responsabilité relève d'un conseil personnalisé, du ressort de l'avocat ou de l'expert-comptable. Le cabinet vous oriente alors vers le professionnel compétent.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://cholez-pagotto.fr/juriste-formaliste-ou-avocat#article",
      "headline": "Juriste-formaliste ou avocat : quelles différences et lequel choisir ?",
      "description": "Comparaison du juriste-formaliste et de l'avocat : information juridique, formalités et intermédiation en assurance d'un côté, conseil personnalisé et représentation de l'autre.",
      "author": { "@type": "Organization", "name": "Cabinet Cholez-Pagotto", "url": "https://cholez-pagotto.fr" },
      "publisher": {
        "@type": "Organization",
        "name": "Cabinet Cholez-Pagotto",
        "logo": { "@type": "ImageObject", "url": "https://cholez-pagotto.fr/logo-cholez-pagotto-transparent.svg" }
      },
      "datePublished": "2026-06-16",
      "dateModified": "2026-06-16",
      "mainEntityOfPage": "https://cholez-pagotto.fr/juriste-formaliste-ou-avocat"
    },
    {
      "@type": "FAQPage",
      "@id": "https://cholez-pagotto.fr/juriste-formaliste-ou-avocat#faq",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://cholez-pagotto.fr" },
        { "@type": "ListItem", "position": 2, "name": "Juriste-formaliste ou avocat", "item": "https://cholez-pagotto.fr/juriste-formaliste-ou-avocat" }
      ]
    }
  ]
}

const sommaire = [
  { id: 'distinction', label: "Pourquoi cette distinction est importante" },
  { id: 'tableau', label: "Tableau comparatif" },
  { id: 'formaliste', label: "La dimension formaliste" },
  { id: 'assurance', label: "La dimension assurance" },
  { id: 'quand', label: "Quand s'adresser à l'un ou à l'autre" },
  { id: 'cas', label: "Cas pratiques" },
  { id: 'complementarite', label: "Deux approches complémentaires" },
  { id: 'faq', label: "Questions fréquentes" },
  { id: 'resume', label: "En résumé" },
]

const tableau = [
  { aspect: "Représentation en justice", cab: "Non", avo: "Oui", cabOk: false, avoOk: true },
  { aspect: "Nature de l'intervention", cab: "Information juridique, documents, formalités, RGPD, assurance", avo: "Conseil personnalisé, défense, contentieux", cabOk: null, avoOk: null },
  { aspect: "Rédaction d'actes réservés", cab: "Non", avo: "Oui", cabOk: false, avoOk: true },
  { aspect: "Réalisation de formalités d'entreprise", cab: "Oui, activité dédiée de formaliste", avo: "Possible, non spécialisé", cabOk: true, avoOk: null },
  { aspect: "Intermédiation en assurance (conseil et courtage)", cab: "Oui, ORIAS, sous contrôle ACPR", avo: "Non", cabOk: true, avoOk: false },
  { aspect: "Cadre et appartenance", cab: "Formaliste membre du CRFF ; assurance immatriculée ORIAS", avo: "Barreau (ordre des avocats)", cabOk: null, avoOk: null },
  { aspect: "Confidentialité", cab: "Engagement contractuel", avo: "Secret professionnel (obligation légale)", cabOk: null, avoOk: null },
  { aspect: "Quand s'adresser à lui", cab: "Comprendre et sécuriser en amont, réaliser des formalités, s'assurer", avo: "Défendre, représenter, accomplir un acte réservé", cabOk: null, avoOk: null },
]

const cas = [
  { besoin: "Créer ou structurer une activité", txt: "Pour les modèles de documents, l'information sur les règles et la réalisation des formalités, le cabinet intervient. Pour un choix de structure engageant votre responsabilité, l'avocat ou l'expert-comptable apporte le conseil personnalisé.", liens: [['Accompagnement à la création', '/accompagnement-professionnels'], ['Bibliothèque de documents', '/catalogue']] },
  { besoin: "Réaliser une formalité (modification, transfert de siège)", txt: "La formalité elle-même (dépôt, immatriculation, suivi) relève du formaliste ; l'acte qui la fonde est rédigé par vous ou votre conseil.", liens: [['Formalités externalisées', '/formalites-juridiques-externalisees']] },
  { besoin: "Comprendre une obligation (RGPD, droit du travail)", txt: "Le cabinet explique le cadre applicable et aide à identifier les actions nécessaires, dans le cadre de l'information juridique.", liens: [['Information sur vos droits', '/information-sur-vos-droits'], ['RGPD et conformité', '/rgpd-conformite']] },
  { besoin: "Assurer une activité, comparer des garanties", txt: "Le cabinet, intermédiaire en assurance, analyse les besoins, compare les offres et accompagne, conformément au devoir de conseil. Un avocat n'exerce pas cette activité réglementée.", liens: [['Conseil en assurances', '/conseil-assurances']] },
  { besoin: "Un litige, une procédure, une représentation", txt: "Dès qu'un différend est en cours ou imminent, ou qu'une représentation devant une juridiction est nécessaire, le recours à un avocat s'impose. Le cabinet vous oriente.", liens: [] },
  { besoin: "Divorce, succession contentieuse", txt: "Ces situations relèvent de l'avocat et, le cas échéant, du notaire, seuls habilités pour les actes et la représentation correspondants.", liens: [] },
]

export default function JuristeFormalisteOuAvocat() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        {/* BREADCRUMB */}
        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: '500' }}>Juriste-formaliste ou avocat</span>
          </div>
        </div>

        {/* HERO */}
        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '4rem 0' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', fontWeight: '600', marginBottom: '16px', letterSpacing: '0.05em' }}>
              COMPRENDRE LES RÔLES
            </span>
            <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: '700', margin: '0 0 16px', lineHeight: '1.3', maxWidth: '780px' }}>
              Juriste-formaliste ou avocat : quelles différences, et lequel choisir ?
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', lineHeight: '1.8', margin: '0 0 16px', maxWidth: '740px' }}>
              Ces deux interlocuteurs n'interviennent ni au même niveau, ni avec les mêmes prérogatives. L'un informe, fournit des documents, réalise des formalités et accompagne en assurance ; l'autre conseille de façon personnalisée, rédige des actes réservés et représente en justice. Comprendre la distinction permet de solliciter le bon professionnel, au bon moment.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px', lineHeight: '1.7', margin: 0 }}>
              Cette page a une vocation d'information. Elle ne constitue pas une consultation juridique personnalisée.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>

          {/* SOMMAIRE */}
          <nav style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem 1.5rem', marginBottom: '3rem' }}>
            <p style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 12px' }}>Sommaire</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '6px' }}>
              {sommaire.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} style={{ color: '#1a4fba', fontSize: '13px', textDecoration: 'none', padding: '4px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ChevronRight size={13} /> {s.label}
                </a>
              ))}
            </div>
          </nav>

          {/* DISTINCTION */}
          <section id="distinction" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1rem' }}>Pourquoi cette distinction est importante</h2>
            <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.85', margin: '0 0 14px' }}>
              Le juriste-formaliste et l'avocat exercent des activités fondées sur des statuts distincts, encadrés par des règles différentes.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Scale size={20} color="#1a4fba" strokeWidth={1.5} />
                  <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: 0 }}>Le Cabinet Cholez-Pagotto</h3>
                </div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.75', margin: 0 }}>
                  Juriste et formaliste, il exerce hors barreau. Il ne représente pas devant les juridictions et n'accomplit pas d'actes réservés. Il fournit de l'information juridique, des modèles de documents, réalise des formalités d'entreprise et exerce, en complément, une activité réglementée d'intermédiation en assurance.
                </p>
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <Gavel size={20} color="#0f2d6e" strokeWidth={1.5} />
                  <h3 style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: 0 }}>L'avocat</h3>
                </div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.75', margin: 0 }}>
                  Profession réglementée, inscrite à un barreau. L'avocat dispose de prérogatives spécifiques : la consultation juridique personnalisée, la rédaction d'actes réservés, la représentation en justice et la plaidoirie.
                </p>
              </div>
            </div>
            <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.85', margin: '16px 0 0' }}>
              Comprendre cette distinction permet d'éviter toute confusion entre information juridique et représentation légale, et de solliciter le bon interlocuteur selon la situation.
            </p>
          </section>

          {/* TABLEAU */}
          <section id="tableau" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Tableau comparatif</h2>
            <div style={{ overflowX: 'auto', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#0f2d6e' }}>
                    <th style={{ color: 'white', padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Aspect</th>
                    <th style={{ color: 'white', padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Cabinet Cholez-Pagotto</th>
                    <th style={{ color: 'white', padding: '12px 14px', textAlign: 'left', fontWeight: '600' }}>Avocat</th>
                  </tr>
                </thead>
                <tbody>
                  {tableau.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #e5e7eb', background: i % 2 === 0 ? 'white' : '#f8fafc' }}>
                      <td style={{ padding: '12px 14px', color: '#0f2d6e', fontWeight: '600' }}>{row.aspect}</td>
                      <td style={{ padding: '12px 14px', color: '#374151' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px' }}>
                          {row.cabOk === true && <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />}
                          {row.cabOk === false && <XCircle size={14} color="#9ca3af" style={{ flexShrink: 0, marginTop: '2px' }} />}
                          {row.cab}
                        </span>
                      </td>
                      <td style={{ padding: '12px 14px', color: '#374151' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '6px' }}>
                          {row.avoOk === true && <CheckCircle2 size={14} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />}
                          {row.avoOk === false && <XCircle size={14} color="#9ca3af" style={{ flexShrink: 0, marginTop: '2px' }} />}
                          {row.avo}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.75', margin: '14px 0 0' }}>
              Ce tableau ne met pas les professions en opposition : il éclaire leurs rôles respectifs et leur complémentarité. Les deux interlocuteurs n'interviennent pas au même niveau, ni avec les mêmes pouvoirs.
            </p>
          </section>

          {/* FORMALISTE */}
          <section id="formaliste" style={{ marginBottom: '3.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', background: '#eff6ff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={22} color="#1a4fba" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px' }}>La dimension formaliste, souvent oubliée</h2>
                <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: '0 0 12px' }}>
                  Au-delà de l'information juridique, le cabinet exerce une activité de formaliste : il réalise les formalités d'entreprise (immatriculations, modifications statutaires, cessations, dépôts de comptes, registre des bénéficiaires effectifs) sur le guichet unique de l'INPI. C'est une activité non réglementée, distincte de la consultation juridique et de la rédaction d'actes : le cabinet exécute la formalité à partir de l'acte établi par le client ou son conseil.
                </p>
                <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0 }}>
                  Cette activité s'adresse aussi aux professionnels (avocats, experts-comptables) qui souhaitent déléguer l'exécution de leurs formalités. Voir la page <a href="/formalites-juridiques-externalisees" style={{ color: '#1a4fba', fontWeight: '600' }}>formalités juridiques externalisées</a>, ainsi que l'<a href="/accompagnement-professionnels" style={{ color: '#1a4fba' }}>accompagnement à la création d'entreprise</a>.
                </p>
              </div>
            </div>
          </section>

          {/* ASSURANCE */}
          <section id="assurance" style={{ marginBottom: '3.5rem', background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '2rem' }}>
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', background: '#fff7ed', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Umbrella size={22} color="#b8860b" strokeWidth={1.5} />
              </div>
              <div>
                <h2 style={{ color: '#0f2d6e', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 8px' }}>Une activité réglementée que l'avocat n'exerce pas : l'assurance</h2>
                <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: '0 0 12px' }}>
                  Le cabinet est, en complément, intermédiaire en assurance (conseil et courtage), une profession elle aussi réglementée, mais différente de celle de l'avocat. Il est immatriculé à l'ORIAS sous le numéro 26003943 et placé sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR). Le conseil en assurance s'entend ici au sens du devoir de conseil de la directive sur la distribution d'assurances (art. L.521-4 du Code des assurances) : il est individualisé, documenté et motivé. Il ne se confond pas avec une consultation juridique.
                </p>
                <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0 }}>
                  Le cabinet ne porte pas le risque : il analyse les besoins, compare les offres du marché et accompagne. Voir la page <a href="/conseil-assurances" style={{ color: '#1a4fba', fontWeight: '600' }}>conseil en assurances</a>.
                </p>
              </div>
            </div>
          </section>

          {/* QUAND */}
          <section id="quand" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Quand s'adresser à l'un ou à l'autre</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              <div style={{ background: 'white', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ color: '#1a4fba', fontSize: '14px', fontWeight: '700', margin: '0 0 12px' }}>S'adresser au cabinet</h3>
                {[
                  "Comprendre une obligation ou le cadre applicable à une activité",
                  "Disposer de modèles de documents à adapter",
                  "Réaliser des formalités d'entreprise",
                  "Mettre une structure en conformité RGPD",
                  "Analyser ses besoins et comparer des contrats d'assurance",
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '9px' }}>
                    <CheckCircle2 size={15} color="#16a34a" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#374151', fontSize: '13px', lineHeight: '1.6' }}>{t}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 12px' }}>S'adresser à un avocat</h3>
                {[
                  "Un litige ou un différend en cours ou imminent",
                  "Une procédure judiciaire engagée ou envisagée",
                  "Une représentation devant une juridiction",
                  "Un conseil juridique personnalisé qui engage une décision",
                  "Un acte que la loi réserve expressément à l'avocat",
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '9px' }}>
                    <Gavel size={14} color="#0f2d6e" strokeWidth={2} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: '#374151', fontSize: '13px', lineHeight: '1.6' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CAS PRATIQUES */}
          <section id="cas" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Cas pratiques</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cas.map((c, i) => (
                <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
                  <h3 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 6px' }}>{c.besoin}</h3>
                  <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.75', margin: c.liens.length ? '0 0 8px' : 0 }}>{c.txt}</p>
                  {c.liens.length > 0 && (
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      {c.liens.map((l, j) => (
                        <a key={j} href={l[1]} style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '600', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          {l[0]} <ArrowRight size={12} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* COMPLÉMENTARITÉ */}
          <section id="complementarite" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1rem' }}>Deux approches complémentaires</h2>
            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '12px', padding: '1.5rem 1.75rem', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <Lightbulb size={20} color="#1a4fba" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.85', margin: 0 }}>
                Le cabinet intervient pour clarifier, structurer et expliquer le cadre juridique en amont, fournir des documents, réaliser des formalités et accompagner en assurance. L'avocat intervient lorsque la situation exige un conseil personnalisé engageant, la rédaction d'un acte réservé ou une représentation. Le cabinet n'est pas un cabinet d'avocats : il travaille en collaboration avec des avocats et d'autres professionnels du droit réglementés (notaires), et oriente vers eux toute situation qui le requiert. Identifier correctement le rôle de chacun permet une gestion juridique plus claire et mieux sécurisée.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1.5rem' }}>Questions fréquentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '820px' }}>
              {faq.map((item, i) => (
                <details key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem' }}>
                  <summary style={{ fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <span>{item.q}</span>
                    <span style={{ color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1 }}>＋</span>
                  </summary>
                  <p style={{ color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0 }}>{item.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* RÉSUMÉ */}
          <section id="resume" style={{ marginBottom: '3.5rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 1rem' }}>En résumé</h2>
            <p style={{ color: '#374151', fontSize: '14px', lineHeight: '1.85', margin: 0 }}>
              Le juriste-formaliste et l'avocat répondent à des besoins distincts, sans se substituer l'un à l'autre. Le cabinet intervient dans une logique d'information, de documents, de formalités et d'accompagnement en assurance, en amont de toute situation contentieuse. L'avocat agit lorsque la situation exige un conseil personnalisé, un acte réservé ou une représentation. Bien identifier le rôle de chacun, c'est respecter le cadre légal et sécuriser ses démarches.
            </p>
          </section>

          {/* CTA */}
          <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 10px' }}>Une question sur le bon interlocuteur ?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.7', margin: '0 auto 24px', maxWidth: '560px' }}>
              Posez votre question à notre juriste, ou découvrez l'ensemble des services du cabinet.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/information-sur-vos-droits" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'white', color: '#0f2d6e', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
                Poser une question <ArrowRight size={16} />
              </a>
              <a href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.6)', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                Voir tous les services
              </a>
            </div>
          </section>

          {/* NOTE LÉGALE */}
          <p style={{ color: '#9ca3af', fontSize: '11px', lineHeight: '1.7', textAlign: 'center', maxWidth: '820px', margin: '2.5rem auto 0' }}>
            Le Cabinet Cholez-Pagotto n'est pas un cabinet d'avocats. Les informations et documents proposés constituent une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constituent pas une consultation juridique personnalisée. L'activité de formaliste (réalisation de formalités) est distincte de la consultation juridique et de la rédaction d'actes. L'activité d'intermédiation en assurance est exercée sous le numéro ORIAS 26003943, sous le contrôle de l'ACPR. Le cabinet travaille en collaboration avec des avocats et des notaires et oriente vers eux toute situation relevant de leurs prérogatives.
          </p>

        </div>
      </main>
      <Footer />
    </>
  )
}