import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Politique de confidentialité · Cabinet Cholez-Pagotto',
  description: 'Politique de confidentialité et protection des données personnelles du site du Cabinet Cholez-Pagotto. Conforme au RGPD.',
}

export default function Confidentialite() {
  return (
    <>
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        <section style={{background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '3rem 0'}}>
          <div style={{maxWidth: '900px', margin: '0 auto', padding: '0 2rem'}}>
            <span style={{display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', marginBottom: '14px'}}>
              RGPD
            </span>
            <h1 style={{color: 'white', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 10px'}}>
              Politique de confidentialité
            </h1>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '12px', margin: 0}}>
              Mise à jour le 11 mai 2026 · Applicable à cholez-pagotto.fr et ses services
            </p>
          </div>
        </section>

        <div style={{maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem'}}>

          {/* INTRO */}
          <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem', marginBottom: '2rem'}}>
            <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.9', margin: 0}}>
              Le Cabinet Cholez-Pagotto, représenté par François CHOLEZ (ci-après « Nous » ou « le Responsable de traitement »), accorde une importance primordiale à la protection de vos données personnelles. La présente politique s'applique à l'ensemble des traitements effectués via le site accessible à l'adresse <strong>cholez-pagotto.fr</strong>, conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée.
            </p>
          </div>

          {[
            {
              titre: '1. Responsable de traitement',
              contenu: (
                <div style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  <p><strong>Cabinet Cholez-Pagotto · François CHOLEZ (Entreprise Individuelle)</strong></p>
                  <p>SIRET : 490 889 516 00053</p>
                  <p>Siège social : 12 rue d'Olima, 88000 Épinal</p>
                  <p>Représentant : François CHOLEZ</p>
                  <p style={{marginTop: '10px'}}>
                    <strong>Référent protection des données :</strong> François CHOLEZ<br />
                    Contact : via le formulaire disponible à l'adresse{' '}
                    <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>cholez-pagotto.fr/contact</a>
                  </p>
                </div>
              )
            },
            {
              titre: '2. Principes généraux',
              contenu: (
                <div style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  <p>En application de l'article 5 du RGPD, nous nous engageons à ce que vos données soient :</p>
                  <ul style={{paddingLeft: '1.5rem', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '6px'}}>
                    <li><strong>Licitement et loyalement collectées</strong>, de manière transparente</li>
                    <li><strong>Collectées pour des finalités déterminées</strong>, explicites et légitimes</li>
                    <li><strong>Adéquates, pertinentes et limitées</strong> au strict nécessaire (minimisation)</li>
                    <li><strong>Exactes</strong> et tenues à jour</li>
                    <li><strong>Conservées</strong> pour une durée n'excédant pas celle nécessaire aux finalités</li>
                    <li><strong>Sécurisées</strong> contre tout traitement non autorisé, perte ou destruction accidentelle</li>
                  </ul>
                </div>
              )
            },
            {
              titre: '3. Données collectées et finalités',
              contenu: (
                <div style={{color: '#374151', fontSize: '13px', lineHeight: '1.9', display: 'flex', flexDirection: 'column', gap: '16px'}}>

                  <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem'}}>
                    <p style={{color: '#0f2d6e', fontWeight: '700', margin: '0 0 8px'}}>3.1 Création de compte et gestion de l'espace client</p>
                    <p><strong>Données :</strong> nom, prénom, adresse email, statut (particulier / professionnel / association / collectivité), mot de passe (haché)</p>
                    <p><strong>Finalité :</strong> création et gestion du compte utilisateur, accès aux documents et services souscrits</p>
                    <p><strong>Base légale :</strong> exécution du contrat (art. 6.1.b RGPD)</p>
                    <p><strong>Durée :</strong> pendant toute la durée de vie du compte, puis 3 ans après la dernière activité</p>
                  </div>

                  <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem'}}>
                    <p style={{color: '#0f2d6e', fontWeight: '700', margin: '0 0 8px'}}>3.2 Abonnement Optimal et paiement en ligne</p>
                    <p><strong>Données :</strong> données d'identification, informations de facturation (nom, adresse), données de transaction (montant, date). <em>Les données de carte bancaire ne sont pas collectées ni stockées par le cabinet : elles sont traitées directement par notre prestataire de paiement.</em></p>
                    <p><strong>Finalité :</strong> gestion de l'abonnement, facturation, obligations comptables</p>
                    <p><strong>Base légale :</strong> exécution du contrat (art. 6.1.b) et obligation légale (art. 6.1.c RGPD)</p>
                    <p><strong>Durée :</strong> durée de la relation contractuelle + 5 ans (prescription de droit commun) ; données de facturation : 10 ans (Code de commerce)</p>
                  </div>

                  <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem'}}>
                    <p style={{color: '#0f2d6e', fontWeight: '700', margin: '0 0 8px'}}>3.3 Service « Information sur vos droits »</p>
                    <p><strong>Données :</strong> question posée, données d'identification, historique des échanges</p>
                    <p><strong>Finalité :</strong> traitement de la demande et fourniture de la réponse pédagogique</p>
                    <p><strong>Base légale :</strong> exécution du contrat (art. 6.1.b RGPD)</p>
                    <p><strong>Durée :</strong> durée de la relation contractuelle + 3 ans</p>
                  </div>

                  <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem'}}>
                    <p style={{color: '#0f2d6e', fontWeight: '700', margin: '0 0 8px'}}>3.4 Newsletter et communications</p>
                    <p><strong>Données :</strong> adresse email, prénom (facultatif)</p>
                    <p><strong>Sous-traitant :</strong> Brevo SAS, 55 rue d'Amsterdam, 75008 Paris, entreprise française, données hébergées dans l'Union Européenne, DPA Art. 28 RGPD disponible sur <a href="https://www.brevo.com/fr/legal/termsofuse/" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>brevo.com</a></p>
                    <p><strong>Finalité :</strong> envoi de la newsletter incluant des informations juridiques pratiques, des actualités sur les nouveaux documents disponibles, des offres sur nos services et abonnements, des promotions négociées auprès de partenaires sélectionnés, et des contenus exclusifs abonnés Optimal</p>
                    <p><strong>Base légale :</strong> consentement explicite et informé (art. 6.1.a RGPD)</p>
                    <p><strong>Durée :</strong> jusqu'au retrait du consentement (désinscription), et au maximum 3 ans après le dernier contact actif</p>
                    <p style={{color: '#6b7280', fontSize: '12px', marginTop: '8px', fontStyle: 'italic'}}>Note : le consentement à la newsletter est indépendant de tout abonnement souscrit. La résiliation d'un abonnement Optimal n'entraîne pas automatiquement la désinscription de la newsletter. Vous pouvez vous désinscrire à tout moment, en un clic, depuis chaque édition reçue.</p>
                  </div>

                  <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem'}}>
                    <p style={{color: '#0f2d6e', fontWeight: '700', margin: '0 0 8px'}}>3.5 Navigation et données techniques</p>
                    <p><strong>Données :</strong> adresse IP, type de navigateur, pages visitées, durée de visite (données de journalisation)</p>
                    <p><strong>Finalité :</strong> sécurité du site, prévention des abus et journalisation technique (logs serveur). Aucune mesure d'audience par cookies ou traceurs n'est mise en œuvre</p>
                    <p><strong>Base légale :</strong> intérêt légitime (art. 6.1.f RGPD)</p>
                    <p><strong>Durée :</strong> 12 mois maximum</p>
                  </div>

                </div>
              )
            },
            {
              titre: '4. Destinataires des données',
              contenu: (
                <div style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  <p>Vos données sont accessibles :</p>
                  <ul style={{paddingLeft: '1.5rem', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <li><strong>En interne :</strong> aux seules personnes habilitées du cabinet, dans le cadre de leurs fonctions</li>
                    <li><strong>Aux sous-traitants techniques :</strong> hébergeur (Vercel Inc.), base de données et authentification (Supabase), prestataire de paiement (Stripe), Brevo SAS (plateforme d'emailing, 55 rue d'Amsterdam, 75008 Paris, données hébergées dans l'UE) pour la newsletter, tous liés par un contrat de sous-traitance conforme à l'article 28 du RGPD</li>
                    <li><strong>Aux autorités compétentes :</strong> sur réquisition judiciaire ou légale</li>
                  </ul>
                  <p style={{marginTop: '12px'}}>Les fonctions applicatives du site sont exécutées dans l'Union européenne (région Paris, France) et le stockage des documents et images du site (Vercel Blob) y est également localisé. Certains de nos prestataires sont des sociétés établies aux États-Unis (Vercel Inc., Stripe, Supabase) : les transferts de données susceptibles d'en résulter sont encadrés par le cadre de protection des données UE-États-Unis (Data Privacy Framework), auquel ces prestataires adhèrent, et le cas échéant par les clauses contractuelles types approuvées par la Commission européenne. Brevo, notre plateforme d'emailing, est une société française dont les données sont hébergées dans l'Union européenne.</p>
                  <p style={{marginTop: '8px'}}><strong>Nous ne vendons jamais vos données personnelles à des tiers.</strong></p>
                </div>
              )
            },
            {
              titre: '5. Sécurité des données',
              contenu: (
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  Nous mettons en oeuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, altération ou divulgation. Les accès sont strictement limités aux personnes habilitées. Toute violation de données sera notifiée à la CNIL dans les 72 heures conformément aux articles 33 et 34 du RGPD, et aux personnes concernées si cette violation est susceptible d'engendrer un risque élevé pour leurs droits et libertés.
                </p>
              )
            },
            {
              titre: '6. Vos droits',
              contenu: (
                <div style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px'}}>
                    {[
                      ['Droit d\'accès', 'Savoir si nous traitons vos données et en obtenir une copie (art. 15 RGPD)'],
                      ['Droit de rectification', 'Corriger des données inexactes ou incomplètes (art. 16 RGPD)'],
                      ['Droit à l\'effacement', 'Demander la suppression de vos données, sous réserve des obligations légales de conservation (art. 17 RGPD)'],
                      ['Droit d\'opposition', 'Vous opposer au traitement pour motif légitime (art. 21 RGPD)'],
                      ['Droit à la limitation', 'Suspendre temporairement le traitement de vos données (art. 18 RGPD)'],
                      ['Droit à la portabilité', 'Recevoir vos données dans un format structuré et lisible (art. 20 RGPD)'],
                      ['Retrait du consentement', 'Retirer votre consentement à tout moment pour les traitements fondés sur celui-ci (newsletter), sans porter atteinte à la licéité des traitements antérieurs'],
                      ['Directives post-mortem', 'Définir le sort de vos données après votre décès (art. 85 Loi Informatique et Libertés)'],
                    ].map(([droit, desc], i) => (
                      <div key={i} style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px'}}>
                        <p style={{color: '#0f2d6e', fontWeight: '700', margin: '0 0 3px', fontSize: '12px'}}>{droit as string}</p>
                        <p style={{color: '#6b7280', margin: 0, fontSize: '12px'}}>{desc as string}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{marginTop: '16px'}}>
                    Pour exercer vos droits : <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>formulaire de contact</a>. Nous disposons d'un délai d'un mois pour répondre (pouvant être prolongé de deux mois supplémentaires pour les demandes complexes). Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> (3 place de Fontenoy, 75007 Paris, <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>www.cnil.fr</a>).
                  </p>
                </div>
              )
            },
            {
              titre: '7. Cookies et traceurs',
              contenu: (
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  Le site utilise uniquement des cookies techniques strictement nécessaires à son fonctionnement : session et authentification de l'espace client, sécurité, et cookies de prévention de la fraude déposés par notre prestataire de paiement Stripe lors d'un règlement. Aucun cookie publicitaire, de mesure d'audience ou de traçage n'est déposé. Ces cookies sont exemptés de consentement conformément à la délibération CNIL n°2020-091 du 17 septembre 2020 ; un bandeau d'information le rappelle lors de votre première visite. Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies, ce qui peut affecter certaines fonctionnalités du site.
                </p>
              )
            },
            {
              titre: '8. Modifications de la présente politique',
              contenu: (
                <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.9'}}>
                  Nous nous réservons le droit de modifier la présente politique à tout moment, notamment pour tenir compte des évolutions réglementaires, législatives, jurisprudentielles ou de nos services. La date de mise à jour figurant en en-tête de ce document est systématiquement actualisée. En cas de modification substantielle affectant vos droits, vous en serez informé par email si vous disposez d'un compte ou d'une inscription à la newsletter.
                </p>
              )
            },
          ].map((section, i) => (
            <div key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem', marginBottom: '1rem'}}>
              <h2 style={{color: '#0f2d6e', fontSize: '1rem', fontWeight: '700', margin: '0 0 14px', paddingBottom: '10px', borderBottom: '1px solid #f3f4f6'}}>{section.titre}</h2>
              {section.contenu}
            </div>
          ))}

          {/* NOTE FINALE */}
          <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1rem 1.25rem', marginTop: '1rem'}}>
            <p style={{color: '#1e3a5f', fontSize: '12px', lineHeight: '1.7', margin: 0}}>
              La présente politique de confidentialité constitue le document unique et exhaustif applicable à l'ensemble des services proposés par le Cabinet Cholez-Pagotto via ce site, qu'il s'agisse de la consultation des contenus, de l'utilisation du site ou de toute autre prestation disponible à l'adresse <strong>cholez-pagotto.fr</strong>.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}