import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, Calendar, Clock, FileText } from 'lucide-react'

export const metadata = {
  title: 'AT/MP : trois décisions récentes de la Cour de cassation à retenir · Cabinet Cholez-Pagotto',
  description: 'Découvrez l\'essentiel de trois arrêts rendus en juin 2025 par la Cour de cassation en matière d\'accidents du travail et maladies professionnelles.',
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AT/MP : trois décisions récentes de la Cour de cassation à retenir",
  "description": "Découvrez l'essentiel de trois arrêts rendus en juin 2025 par la Cour de cassation en matière d'accidents du travail et maladies professionnelles.",
  "datePublished": "3 juillet 2025",
  "author": {
    "@type": "Person",
    "name": "François CHOLEZ",
    "jobTitle": "Juriste, formaliste"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Cabinet Cholez-Pagotto — Docuthèque",
    "url": "https://cholez-pagotto.fr"
  },
  "url": "https://cholez-pagotto.fr/blog/at-mt-3-decisions-cour-cassation-juin-2025",
  "image": "https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/AT-MT-cours-de-cassation-scaled.jpg",
  "keywords": ["AT/MP", "Cour de cassation", "Droit du travail", "Jurisprudence", "Faute inexcusable"]
}

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        {/* HERO */}
        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '2rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px'}}>
              <a href="/" style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', textDecoration: 'none'}}>Accueil</a>
              <ChevronRight size={12} color="rgba(255,255,255,0.4)" />
              <a href="/blog" style={{color: 'rgba(255,255,255,0.6)', fontSize: '12px', textDecoration: 'none'}}>Blog</a>
              <ChevronRight size={12} color="rgba(255,255,255,0.4)" />
              <span style={{color: 'rgba(255,255,255,0.9)', fontSize: '12px'}}>Droit du travail</span>
            </div>
            <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '3px 12px', fontSize: '11px', marginBottom: '12px'}}>DROIT DU TRAVAIL</span>
            <h1 style={{color: 'white', fontSize: '1.6rem', fontWeight: '700', margin: '0 0 12px', lineHeight: '1.35', maxWidth: '700px'}}>AT/MP : trois décisions récentes de la Cour de cassation à retenir</h1>
            <div style={{display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap'}}>
              <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.7)', fontSize: '12px'}}>
                <Calendar size={13} strokeWidth={1.5} /> 3 juillet 2025
              </span>
              <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.7)', fontSize: '12px'}}>
                <Clock size={13} strokeWidth={1.5} /> 5 min de lecture
              </span>
              <span style={{display: 'flex', alignItems: 'center', gap: '5px', color: 'rgba(255,255,255,0.7)', fontSize: '12px'}}>
                <FileText size={13} strokeWidth={1.5} /> François CHOLEZ
              </span>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section style={{padding: '3rem 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

            {/* ARTICLE */}
            <article style={{flex: 1, minWidth: 0}}>
              <img src="https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/AT-MT-cours-de-cassation-scaled.jpg" alt="AT/MP : trois décisions récentes de la Cour de cassation à retenir" style={{width: "100%", borderRadius: "12px", marginBottom: "2rem", objectFit: "cover", maxHeight: "400px"}} />

              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '2rem', lineHeight: '1.85', color: '#374151', fontSize: '14px'}}>

                <h2 style={{color: '#0f2d6e', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 1rem'}}>Action récursoire de la caisse : l'inopposabilité du caractère professionnel n'est pas un obstacle</h2>
                <p style={{marginBottom: '1rem'}}>Dans un arrêt du 26 juin 2025 (n°23-16.183), la Cour de cassation a précisé qu'une décision judiciaire ayant écarté le caractère professionnel d'un accident ou d'une maladie ne bloque pas la caisse dans l'exercice de son action récursoire contre l'employeur.</p>
                <p style={{marginBottom: '0.75rem'}}>Elle rappelle que :</p>
                <ul style={{paddingLeft: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>Selon les articles L.452-2, L.452-3 et D.452-1 du CSS, en cas de faute inexcusable, la majoration de rente versée à la victime est avancée par la caisse, qui peut en récupérer le montant auprès de l'employeur.</li>
                  <li>Avant 2009, l'action récursoire était exclue si le caractère professionnel avait été écarté par un jugement définitif. La réforme du décret du 29 juillet 2009 a renforcé l'information des parties et la sécurité juridique de la procédure.</li>
                  <li>La jurisprudence distingue les rapports caisse/victime et caisse/employeur : la victime peut faire reconnaître la faute inexcusable même si la caisse et l'employeur contestent le caractère professionnel, et inversement.</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>La loi du 17 décembre 2012 a confirmé que la reconnaissance de la faute inexcusable emporte pour l'employeur l'obligation de rembourser la caisse, indépendamment des conditions d'information pendant l'instruction.</p>
                <p style={{marginBottom: '2rem'}}>Dans l'affaire jugée, la Cour a cassé l'arrêt d'appel qui avait rejeté la demande de remboursement de la caisse au motif que la maladie n'était pas reconnue comme professionnelle.</p>

                <h2 style={{color: '#0f2d6e', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 1rem'}}>Maladie professionnelle : la date de première constatation médicale ne suffit pas</h2>
                <p style={{marginBottom: '1rem'}}>Dans une autre décision du 26 juin 2025 (n°23-15.112), la Cour a rappelé que :</p>
                <ul style={{paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>La date de première constatation médicale sert à vérifier le délai de prise en charge.</li>
                  <li>En revanche, la durée d'exposition au risque doit être appréciée à la date de la déclaration de maladie professionnelle accompagnée du certificat médical initial.</li>
                </ul>

                <h2 style={{color: '#0f2d6e', fontSize: '1.25rem', fontWeight: '700', margin: '0 0 1rem'}}>Faute inexcusable : l'action interrompt la prescription des actions connexes</h2>
                <p style={{marginBottom: '1rem'}}>Dans un arrêt du 26 juin 2025 (n°23-13.295), la Cour a jugé que :</p>
                <ul style={{paddingLeft: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <li>L'action engagée pour faire reconnaître la faute inexcusable de l'employeur interrompt la prescription de toute autre action fondée sur le même fait dommageable, conformément aux articles 2241 du code civil et L.431-2 du CSS.</li>
                  <li>La CPAM reste seule redevable des indemnités versées à la victime ou à ses ayants droit, son recours ne pouvant viser que l'employeur.</li>
                </ul>

                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '1rem', marginTop: '1.5rem', fontSize: '12px', color: '#1e3a5f', lineHeight: '1.6'}}>
                  <strong>Information importante</strong> — Les informations présentées sont à visée informative et pédagogique. Elles ne constituent pas un conseil juridique personnalisé. Pour toute situation spécifique, consultez un professionnel habilité.
                </div>
              </div>
            </article>


            {/* SIDEBAR */}
            <aside style={{flex: '0 0 280px', display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '80px', alignSelf: 'flex-start'}}>
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
                <p style={{color: '#9ca3af', fontSize: '11px', margin: 0}}>Cabinet Cholez-Pagotto — FCFBL ACTIVITIES</p>
              </div>
              <div style={{background: '#0f2d6e', borderRadius: '12px', padding: '1.25rem'}}>
                <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Une question juridique ?</p>
                <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Un juriste vous répond par écrit sous 24 à 48h. 47 € à l'unité, sans abonnement.</p>
                <a href="/information-sur-vos-droits" style={{display: 'block', background: 'white', color: '#0f2d6e', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                  Poser ma question →
                </a>
              </div>
              <div style={{background: 'linear-gradient(135deg, #b8860b 0%, #d4a017 50%, #b8860b 100%)', borderRadius: '12px', padding: '1.25rem'}}>
                <p style={{color: 'white', fontSize: '13px', fontWeight: '700', margin: '0 0 8px'}}>Newsletter gratuite</p>
                <p style={{color: 'rgba(255,255,255,0.85)', fontSize: '12px', lineHeight: '1.6', margin: '0 0 14px'}}>Actualités, analyses et informations juridiques directement dans votre boîte mail.</p>
                <a href="/newsletter" style={{display: 'block', background: 'white', color: '#b8860b', padding: '10px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', textDecoration: 'none', textAlign: 'center'}}>
                  En savoir plus →
                </a>
              </div>
              <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
                <p style={{color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px'}}>Tags</p>
                <div style={{display: 'flex', gap: '6px', flexWrap: 'wrap'}}>
                  <span key="AT/MP" style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>AT/MP</span>
                  <span key="Cour de cassation" style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>Cour de cassation</span>
                  <span key="Droit du travail" style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>Droit du travail</span>
                  <span key="Jurisprudence" style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>Jurisprudence</span>
                  <span key="Faute inexcusable" style={{background: '#eff6ff', color: '#1a4fba', fontSize: '11px', padding: '3px 10px', borderRadius: '20px'}}>Faute inexcusable</span>
                </div>
              </div>
              <a href="/blog" style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '12px', textDecoration: 'none'}}>
                ← Retour au blog
              </a>
            </aside>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}