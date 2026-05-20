import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: 'Mentions légales · Cabinet Cholez-Pagotto',
  description: 'Mentions légales du site cholez-pagotto.fr — éditeur, hébergeur, propriété intellectuelle, responsabilité et données personnelles.',
  robots: 'noindex',
}

const sections = [
  { id: 'editeur', label: '1. Éditeur du site' },
  { id: 'activites', label: '2. Activités réglementées' },
  { id: 'autres-activites', label: '3. Autres activités' },
  { id: 'hebergement', label: '4. Hébergement' },
  { id: 'propriete', label: '5. Propriété intellectuelle' },
  { id: 'responsabilite', label: '6. Limitation de responsabilité' },
  { id: 'donnees', label: '7. Données personnelles' },
  { id: 'cookies', label: '8. Cookies' },
  { id: 'droit', label: '9. Droit applicable' },
]

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        {/* BREADCRUMB */}
        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Mentions légales</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', gap: '3rem', alignItems: 'flex-start'}}>

          {/* COLONNE PRINCIPALE */}
          <div style={{flex: 1, minWidth: 0}}>

            <div style={{marginBottom: '2rem'}}>
              <span style={{display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px'}}>INFORMATIONS LÉGALES</span>
              <h1 style={{color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px'}}>Mentions légales</h1>
              <p style={{color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6'}}>Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), notamment son article 6-III.</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>

              <section id="editeur" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>1. Éditeur du site</h2>
                <div style={{display: 'grid', gridTemplateColumns: '160px 1fr', gap: '8px 16px', fontSize: '14px', color: '#374151', lineHeight: '1.7'}}>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>Dénomination</span>
                  <span><strong>FCFBL ACTIVITIES</strong></span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>Forme juridique</span>
                  <span>Entreprise individuelle (E.I.)</span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>SIRET</span>
                  <span>490 889 516 00053</span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>Siège social</span>
                  <span>12 rue d'Olima, 88000 Épinal</span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>Directeur de publication</span>
                  <span>François CHOLEZ</span>
                  <span style={{color: '#6b7280', fontSize: '13px'}}>Contact</span>
                  <span><a href="/contact" style={{color: '#1a4fba', textDecoration: 'none', fontWeight: '600'}}>Formulaire de contact →</a></span>
                </div>
              </section>

              <section id="activites" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>2. Activités réglementées</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                  <div>
                    <p style={{fontSize: '14px', fontWeight: '600', color: '#0f2d6e', margin: '0 0 6px'}}>Courtage en assurances et réassurances</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px', lineHeight: '1.7'}}>Activité réglementée exercée sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) — 4 place de Budapest, CS 92459, 75436 Paris Cedex 09.</p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: '0 0 4px'}}>Immatriculé à l'ORIAS sous le numéro <strong>26003943</strong> — <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>www.orias.fr</a></p>
                    <p style={{fontSize: '13px', color: '#6b7280', margin: 0}}>Membre de l'association d'autorégulation <strong>ENDYA</strong>.</p>
                  </div>

                  <div style={{background: '#eff6ff', borderRadius: '8px', padding: '12px 14px'}}>
                    <p style={{color: '#1e3a5f', fontSize: '12px', lineHeight: '1.7', margin: 0}}>
                      Le Cabinet Cholez-Pagotto n'est pas un cabinet d'avocats. Les informations et documents proposés sur ce site sont à visée informative et pédagogique. Ils ne constituent pas un conseil juridique personnalisé ni un acte sous seing privé au sens de la loi n°71-1130 du 31 décembre 1971. Toute situation nécessitant une consultation juridique ou la rédaction d'actes fera l'objet d'une orientation vers les professionnels du droit compétents (avocats, notaires).
                    </p>
                  </div>
                </div>
              </section>

              <section id="autres-activites" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>3. Autres activités</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '6px'}}>
                  <p style={{fontSize: '14px', fontWeight: '600', color: '#0f2d6e', margin: '0 0 4px'}}>Information juridique et formalités administratives</p>
                  <p style={{fontSize: '13px', color: '#6b7280', margin: 0, lineHeight: '1.7'}}>Ces activités ne sont pas réglementées au sens des professions du droit. François CHOLEZ intervient en qualité de juriste et de formaliste, dans le cadre d'une activité d'information juridique pédagogique et d'assistance aux formalités administratives, distincte de la profession d'avocat et de toute activité de représentation ou de rédaction d'actes sous seing privé à titre habituel.</p>
                  <p style={{fontSize: '13px', color: '#6b7280', margin: '6px 0 0', lineHeight: '1.7'}}>Membre adhérent du <strong>Conseil Représentatif des Formalistes de France (CRFF)</strong>.</p>
                </div>
              </section>

              <section id="hebergement" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>4. Hébergement</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div style={{display: 'grid', gridTemplateColumns: '220px 1fr', gap: '4px 16px', fontSize: '13px'}}>
                    <span style={{color: '#6b7280', fontWeight: '600'}}>Site — cholez-pagotto.fr</span>
                    <span style={{color: '#374151'}}>Vercel Inc., 340 Pine Street Suite 701, San Francisco CA 94104, États-Unis — <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>vercel.com</a></span>
                    <span style={{color: '#6b7280', fontWeight: '600'}}>Documents — docs.cholez-pagotto.fr</span>
                    <span style={{color: '#374151'}}>Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre — <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>hostinger.fr</a></span>
                    <span style={{color: '#6b7280', fontWeight: '600'}}>Nom de domaine</span>
                    <span style={{color: '#374151'}}>Enregistré et géré via Hostinger International Ltd.</span>
                  </div>
                </div>
              </section>

              <section id="propriete" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>5. Propriété intellectuelle</h2>
                <div style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <p style={{margin: 0}}>L'ensemble du contenu de ce site — textes, articles, analyses juridiques, documents téléchargeables, structure et mise en page — est la propriété exclusive de FCFBL ACTIVITIES et est protégé par les lois françaises et internationales relatives au droit d'auteur et à la propriété intellectuelle.</p>
                  <p style={{margin: 0}}>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de FCFBL ACTIVITIES.</p>
                  <p style={{margin: 0}}>Les modèles de documents proposés en téléchargement sont fournis à titre d'exemples généraux. Ils doivent être adaptés à chaque situation particulière. Leur utilisation reste sous la seule responsabilité de l'utilisateur.</p>
                </div>
              </section>

              <section id="responsabilite" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>6. Limitation de responsabilité</h2>
                <div style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <p style={{margin: 0}}>Les informations publiées sur ce site sont fournies à titre informatif et pédagogique. FCFBL ACTIVITIES s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, mais ne saurait être tenu responsable des erreurs ou omissions, ni des conséquences de leur utilisation.</p>
                  <p style={{margin: 0}}>Les modèles de documents mis à disposition sont des exemples généraux qui nécessitent une adaptation à chaque situation. FCFBL ACTIVITIES ne saurait être tenu responsable de l'usage qui en est fait par l'utilisateur.</p>
                  <p style={{margin: 0}}>Les liens hypertextes présents sur ce site pointant vers des sites tiers n'engagent pas la responsabilité de FCFBL ACTIVITIES quant à leur contenu.</p>
                </div>
              </section>

              <section id="donnees" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>7. Données personnelles</h2>
                <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: '0 0 10px'}}>
                  Le traitement des données personnelles collectées via ce site est détaillé dans notre{" "}
                  <a href="/confidentialite" style={{color: '#1a4fba', textDecoration: 'none', fontWeight: '600'}}>Politique de confidentialité</a>.
                </p>
                <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: 0}}>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation du traitement de vos données. Pour exercer ces droits :{" "}
                  <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none', fontWeight: '600'}}>Formulaire de contact →</a>
                </p>
              </section>

              <section id="cookies" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>8. Cookies</h2>
                <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: 0}}>
                  Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage à des fins commerciales n'est déposé sans votre consentement préalable, conformément à la délibération CNIL n°2020-091 du 17 septembre 2020.
                </p>
              </section>

              <section id="droit" style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
                <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}}>9. Droit applicable et juridiction compétente</h2>
                <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: 0}}>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <p style={{color: '#9ca3af', fontSize: '12px', textAlign: 'center', margin: 0}}>
                Dernière mise à jour : mai 2026
              </p>

            </div>
          </div>

          {/* SIDEBAR NAVIGATION */}
          <aside style={{flex: '0 0 240px', position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '12px', fontWeight: '700', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Sommaire</p>
              <nav style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} style={{color: '#6b7280', fontSize: '12px', textDecoration: 'none', padding: '6px 8px', borderRadius: '6px', lineHeight: '1.4', display: 'block'}}>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

        </div>
      </main>
      <FooterMinimal />
    </>
  )
}