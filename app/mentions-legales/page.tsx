import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'

export const metadata = {
  title: 'Mentions légales · Cabinet Cholez-Pagotto',
  description: 'Mentions légales du site cholez-pagotto.fr — éditeur, hébergeur, propriété intellectuelle, responsabilité.',
  robots: 'noindex',
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh', padding: '3rem 0'}}>
        <div style={{maxWidth: '860px', margin: '0 auto', padding: '0 2rem'}}>

          <div style={{marginBottom: '2.5rem'}}>
            <span style={{display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px'}}>LÉGAL</span>
            <h1 style={{color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px'}}>Mentions légales</h1>
            <p style={{color: '#6b7280', fontSize: '13px', margin: 0}}>Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), notamment son article 6-III.</p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>1. Éditeur du site</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#374151', lineHeight: '1.7'}}>
                <p style={{margin: 0}}><strong>Dénomination :</strong> FCFBL ACTIVITIES</p>
                <p style={{margin: 0}}><strong>Forme juridique :</strong> Entreprise individuelle (E.I.)</p>
                <p style={{margin: 0}}><strong>Numéro SIRET :</strong> 490 889 516 00053</p>
                <p style={{margin: 0}}><strong>Siège social :</strong> 12 rue d'Olima, 88000 Épinal</p>
                <p style={{margin: 0}}><strong>Directeur de la publication :</strong> François CHOLEZ</p>
                <p style={{margin: 0}}><strong>Contact :</strong> <a href="mailto:contact@fcfbl.net" style={{color: '#1a4fba', textDecoration: 'none'}}>contact@fcfbl.net</a></p>
              </div>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>2. Activités réglementées</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '14px', color: '#374151', lineHeight: '1.7'}}>
                <div>
                  <p style={{margin: '0 0 4px'}}><strong>Courtage en assurances et réassurances</strong></p>
                  <p style={{margin: 0, color: '#6b7280', fontSize: '13px'}}>Activité réglementée exercée sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR) — 4 place de Budapest, CS 92459, 75436 Paris Cedex 09.</p>
                  <p style={{margin: '4px 0 0', color: '#6b7280', fontSize: '13px'}}>Immatriculé à l'ORIAS sous le numéro <strong>26003943</strong> — <a href="https://www.orias.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>www.orias.fr</a></p>
                </div>
                <div>
                  <p style={{margin: '0 0 4px'}}><strong>Formaliste juridique</strong></p>
                  <p style={{margin: 0, color: '#6b7280', fontSize: '13px'}}>Membre adhérent du Conseil Représentatif des Formalistes de France (CRFF). Membre de l'association d'autorégulation ENDYA.</p>
                </div>
                <div style={{background: '#eff6ff', borderRadius: '8px', padding: '12px 14px'}}>
                  <p style={{color: '#1e3a5f', fontSize: '12px', lineHeight: '1.7', margin: 0}}>
                    FCFBL ACTIVITIES n'est pas un cabinet d'avocats. Les informations et documents proposés sur ce site sont à visée informative et pédagogique. Ils ne constituent pas un conseil juridique personnalisé ni un acte sous seing privé au sens de la loi n°71-1130 du 31 décembre 1971. Toute situation nécessitant une consultation juridique ou la rédaction d'actes fera l'objet d'une orientation vers les professionnels du droit compétents (avocats, notaires).
                  </p>
                </div>
              </div>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>3. Hébergement</h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '14px', color: '#374151', lineHeight: '1.7'}}>
                <div>
                  <p style={{margin: '0 0 4px'}}><strong>Site web — cholez-pagotto.fr</strong></p>
                  <p style={{margin: 0, color: '#6b7280', fontSize: '13px'}}>Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
                  <p style={{margin: '2px 0 0'}}><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none', fontSize: '13px'}}>vercel.com</a></p>
                </div>
                <div>
                  <p style={{margin: '0 0 4px'}}><strong>Documents téléchargeables — docs.cholez-pagotto.fr</strong></p>
                  <p style={{margin: 0, color: '#6b7280', fontSize: '13px'}}>Hostinger International Ltd. — 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                  <p style={{margin: '2px 0 0'}}><a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none', fontSize: '13px'}}>hostinger.fr</a></p>
                </div>
                <div>
                  <p style={{margin: '0 0 4px'}}><strong>Nom de domaine</strong></p>
                  <p style={{margin: 0, color: '#6b7280', fontSize: '13px'}}>Enregistré et géré via Hostinger International Ltd.</p>
                </div>
              </div>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>4. Propriété intellectuelle</h2>
              <div style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <p style={{margin: 0}}>L'ensemble du contenu de ce site — textes, articles, analyses juridiques, documents téléchargeables, structure et mise en page — est la propriété exclusive de FCFBL ACTIVITIES et est protégé par les lois françaises et internationales relatives au droit d'auteur et à la propriété intellectuelle.</p>
                <p style={{margin: 0}}>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de FCFBL ACTIVITIES.</p>
                <p style={{margin: 0}}>Les modèles de documents proposés en téléchargement sont fournis à titre d'exemples généraux. Ils doivent être adaptés à chaque situation particulière. Leur utilisation reste sous la seule responsabilité de l'utilisateur.</p>
              </div>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>5. Limitation de responsabilité</h2>
              <div style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <p style={{margin: 0}}>Les informations publiées sur ce site sont fournies à titre informatif et pédagogique. FCFBL ACTIVITIES s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, mais ne saurait être tenu responsable des erreurs ou omissions, ni des conséquences de leur utilisation.</p>
                <p style={{margin: 0}}>Les modèles de documents mis à disposition sont des exemples généraux qui nécessitent une adaptation à chaque situation. FCFBL ACTIVITIES ne saurait être tenu responsable de l'usage qui en est fait par l'utilisateur.</p>
                <p style={{margin: 0}}>Les liens hypertextes présents sur ce site pointant vers des sites tiers n'engagent pas la responsabilité de FCFBL ACTIVITIES quant à leur contenu.</p>
              </div>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>6. Données personnelles</h2>
              <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: 0}}>
                Le traitement des données personnelles collectées via ce site est détaillé dans notre{" "}
                <a href="/confidentialite" style={{color: '#1a4fba', textDecoration: 'none', fontWeight: '600'}}>Politique de confidentialité</a>.
                {" "}Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit d'opposition et de limitation du traitement, en adressant votre demande à{" "}
                <a href="mailto:contact@fcfbl.net" style={{color: '#1a4fba', textDecoration: 'none'}}>contact@fcfbl.net</a>.
              </p>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>7. Cookies</h2>
              <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: 0}}>
                Ce site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement. Aucun cookie publicitaire ou de traçage à des fins commerciales n'est déposé sans votre consentement préalable, conformément à la délibération CNIL n°2020-091 du 17 septembre 2020.
              </p>
            </section>

            <section style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 1rem'}}>8. Droit applicable et juridiction compétente</h2>
              <p style={{fontSize: '14px', color: '#374151', lineHeight: '1.8', margin: 0}}>
                Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <p style={{color: '#9ca3af', fontSize: '12px', textAlign: 'center', margin: 0}}>
              Dernière mise à jour : mai 2026
            </p>

          </div>
        </div>
      </main>
      <FooterMinimal />
    </>
  )
}