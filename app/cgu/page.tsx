import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { ChevronRight } from 'lucide-react'

export const metadata = {
  title: "Conditions Générales d'Utilisation · Cabinet Cholez-Pagotto",
  description: "Conditions générales d'utilisation de la plateforme Docuthèque du Cabinet Cholez-Pagotto.",
  robots: 'noindex',
  alternates: { canonical: 'https://cholez-pagotto.fr/cgu' },
}

const sections = [
  { id: 'definitions', label: "Art. 1 : Définitions" },
  { id: 'objet', label: "Art. 2 : Objet et champ d'application" },
  { id: 'acceptation', label: "Art. 3 : Acceptation des CGU" },
  { id: 'info-precontractuelle', label: "Art. 4 : Information précontractuelle" },
  { id: 'services', label: "Art. 5 : Description des services" },
  { id: 'compte', label: "Art. 6 : Compte utilisateur" },
  { id: 'tarifs', label: "Art. 7 : Conditions financières" },
  { id: 'paiement', label: "Art. 8 : Modalités de paiement" },
  { id: 'retractation', label: "Art. 9 : Droit de rétractation" },
  { id: 'resiliation', label: "Art. 10 : Résiliation" },
  { id: 'renouvellement', label: "Art. 11 : Renouvellement" },
  { id: 'conformite', label: "Art. 12 : Garantie de conformité" },
  { id: 'obligations-prestataire', label: "Art. 13 : Obligations du Prestataire" },
  { id: 'obligations-client', label: "Art. 14 : Obligations du Client" },
  { id: 'pi', label: "Art. 15 : Propriété intellectuelle" },
  { id: 'responsabilite', label: "Art. 16 : Responsabilité" },
  { id: 'force-majeure', label: "Art. 17 : Force majeure" },
  { id: 'donnees', label: "Art. 18 : Données personnelles" },
  { id: 'mediation', label: "Art. 19 : Médiation et litiges" },
  { id: 'droit', label: "Art. 20 : Droit applicable" },
  { id: 'modifications', label: "Art. 21 : Modifications des CGU" },
]

const h2style = {color: '#0f2d6e', fontSize: '1rem', fontWeight: '700' as const, margin: '0 0 1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6'}
const pstyle = {fontSize: '14px', color: '#374151', lineHeight: '1.85' as const, margin: '0 0 10px'}
const plastyle = {fontSize: '14px', color: '#374151', lineHeight: '1.85' as const, margin: 0}
const ulstyle = {paddingLeft: '1.5rem', margin: '8px 0', display: 'flex' as const, flexDirection: 'column' as const, gap: '6px', fontSize: '14px', color: '#374151', lineHeight: '1.7' as const}
const cardstyle = {background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem'}
const hlstyle = {background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '12px 14px', margin: '12px 0', fontSize: '13px', color: '#1e3a5f', lineHeight: '1.7' as const}
const warnstyle = {background: '#fef3c7', border: '1px solid #fcd34d', borderRadius: '8px', padding: '12px 14px', margin: '12px 0', fontSize: '13px', color: '#92400e', lineHeight: '1.7' as const}
const h3style = {fontSize: '14px', fontWeight: '600' as const, color: '#0f2d6e', margin: '0 0 6px'}

export default function CGU() {
  return (
    <>
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh'}}>

        <div style={{background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0'}}>
          <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280'}}>
            <a href="/" style={{color: '#6b7280', textDecoration: 'none'}}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{color: '#0f2d6e', fontWeight: '500'}}>Conditions Générales d'Utilisation</span>
          </div>
        </div>

        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: '1fr 240px', gap: '3rem', alignItems: 'start'}}>

          <div style={{flex: 1, minWidth: 0}}>

            <div style={{marginBottom: '2rem'}}>
              <span style={{display: 'inline-block', background: '#eff6ff', color: '#1a4fba', fontSize: '11px', fontWeight: '600', padding: '3px 12px', borderRadius: '20px', marginBottom: '12px'}}>CONDITIONS D'UTILISATION</span>
              <h1 style={{color: '#0f2d6e', fontSize: '1.8rem', fontWeight: '700', margin: '0 0 8px'}}>Conditions Générales d'Utilisation</h1>
              <p style={{color: '#6b7280', fontSize: '13px', margin: 0, lineHeight: '1.6'}}>En vigueur au 12 mai 2026 · Plateforme Docuthèque du Cabinet Cholez-Pagotto</p>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

              {/* ART. 1 */}
              <section id="definitions" style={cardstyle}>
                <h2 style={h2style}>Article 1 : Définitions</h2>
                <ul style={ulstyle}>
                  <li><strong>« Prestataire »</strong> : Cabinet Cholez-Pagotto, entreprise individuelle, SIRET 490 889 516 00053, 12 rue d'Olima, 88000 Épinal, exploitant la plateforme Docuthèque.</li>
                  <li><strong>« Plateforme »</strong> : le site internet accessible à l'adresse cholez-pagotto.fr et ses sous-domaines, proposant des services d'information juridique et de mise à disposition de documents.</li>
                  <li><strong>« Client »</strong> : toute personne physique ou morale créant un compte sur la Plateforme et accédant aux services proposés.</li>
                  <li><strong>« Consommateur »</strong> : tout Client agissant à des fins n'entrant pas dans le cadre de son activité commerciale, industrielle, artisanale, libérale ou agricole, au sens de l'article liminaire du Code de la consommation.</li>
                  <li><strong>« Professionnel »</strong> : tout Client agissant dans le cadre de son activité commerciale, industrielle, artisanale, libérale ou agricole.</li>
                  <li><strong>« Contenu numérique »</strong> : tout document, modèle, fiche ou ressource mis à disposition en téléchargement sur la Plateforme, au sens de l'article L.217-27 du Code de la consommation.</li>
                  <li><strong>« Service numérique »</strong> : tout service permettant la création, le traitement, le stockage ou l'accès à des données sous forme numérique, au sens de l'article L.217-27 du Code de la consommation.</li>
                  <li><strong>« Service d'information juridique »</strong> : réponse rédigée par un juriste, fournie dans le cadre de l'offre « Information sur vos droits » ou de l'Abonnement Optimal.</li>
                  <li><strong>« Abonnement Optimal »</strong> : offre d'accès payante à durée déterminée, renouvelable, donnant accès à l'ensemble de la bibliothèque de la Plateforme et incluant une question mensuelle au Service d'information juridique.</li>
                  <li><strong>« CGU »</strong> : les présentes Conditions Générales d'Utilisation.</li>
                </ul>
              </section>

              {/* ART. 2 */}
              <section id="objet" style={cardstyle}>
                <h2 style={h2style}>Article 2 : Objet et champ d'application</h2>
                <p style={pstyle}>Les présentes CGU régissent l'accès et l'utilisation de la Plateforme ainsi que les relations contractuelles entre le Prestataire et tout Client, qu'il soit Consommateur ou Professionnel.</p>
                <p style={pstyle}>Elles s'appliquent à l'ensemble des services proposés : accès gratuit aux contenus en accès libre, Abonnement Optimal, Service d'information juridique à l'unité et accompagnement à la création d'entreprise.</p>
                <p style={pstyle}>Les présentes CGU prévalent sur tout autre document, sauf accord dérogatoire exprès et écrit du Prestataire. Elles sont conformes au droit français et au droit de l'Union européenne applicable, notamment :</p>
                <ul style={ulstyle}>
                  <li>La Directive 2011/83/UE relative aux droits des consommateurs, telle que modifiée par la Directive 2019/2161, transposée par l'Ordonnance n°2021-1247 du 29 septembre 2021 ;</li>
                  <li>La Directive 2019/770/UE relative aux contrats de fourniture de contenus numériques et de services numériques, transposée aux articles L.217-27 et suivants du Code de la consommation ;</li>
                  <li>Le Règlement (UE) 2016/679 relatif à la protection des données personnelles (RGPD).</li>
                </ul>
                <p style={plastyle}>Les CGU applicables sont celles en vigueur à la date de souscription ou, à défaut, à la date d'utilisation du service concerné. Elles sont accessibles en permanence sur la Plateforme avant toute souscription.</p>
              </section>

              {/* ART. 3 */}
              <section id="acceptation" style={cardstyle}>
                <h2 style={h2style}>Article 3 : Acceptation des CGU</h2>
                <p style={pstyle}>La création d'un compte sur la Plateforme, le téléchargement d'un Contenu numérique ou la souscription à l'un des services proposés emporte acceptation pleine et entière des présentes CGU, après en avoir pris connaissance.</p>
                <p style={pstyle}>Pour les services payants, l'acceptation est matérialisée par le cochage d'une case d'acceptation expresse des présentes CGU préalablement à tout paiement, conformément aux articles L.221-14 et L.221-15 du Code de la consommation (procédure dite du « double clic »).</p>
                <p style={plastyle}>Le Client déclare avoir la capacité juridique de contracter. S'agissant d'un mineur, l'accord préalable du représentant légal est requis. Le Prestataire se réserve le droit de demander tout justificatif en cas de doute sur la capacité du Client à contracter.</p>
              </section>

              {/* ART. 4 */}
              <section id="info-precontractuelle" style={cardstyle}>
                <h2 style={h2style}>Article 4 : Information précontractuelle</h2>
                <p style={pstyle}>Conformément à l'article L.221-5 du Code de la consommation, le Prestataire met à la disposition du Client, avant toute souscription, les informations suivantes :</p>
                <ul style={ulstyle}>
                  <li>Les caractéristiques essentielles des services proposés, telles que décrites à l'article 5 des présentes ;</li>
                  <li>Le prix des services, exprimé hors taxes en euros (le Cabinet Cholez-Pagotto bénéficie de la franchise en base de TVA en application de l'article 293 B du Code général des impôts : aucune TVA n'est donc collectée ni facturée) ;</li>
                  <li>La durée minimale d'engagement et les modalités de résiliation ;</li>
                  <li>Les conditions d'exercice du droit de rétractation et le formulaire type de rétractation prévu à l'annexe du Règlement délégué (UE) n°2022/689 de la Commission et à l'article R.221-1 du Code de la consommation, accessible sur demande auprès du Prestataire ;</li>
                  <li>Les coordonnées du Prestataire et du médiateur de la consommation désigné ;</li>
                  <li>Les modalités de traitement des réclamations.</li>
                </ul>
                <p style={plastyle}>Ces informations sont accessibles en permanence sur la Plateforme, notamment sur les pages /tarifs, /confidentialite et /mentions-legales.</p>
              </section>

              {/* ART. 5 */}
              <section id="services" style={cardstyle}>
                <h2 style={h2style}>Article 5 : Description des services</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div>
                    <p style={h3style}>5.1 Accès gratuit</p>
                    <p style={plastyle}>La création d'un compte gratuit donne accès aux Contenus numériques disponibles en accès libre, téléchargeables au format DOCX, ainsi qu'à la newsletter. Cet accès est sans engagement et résiliable à tout moment.</p>
                  </div>
                  <div>
                    <p style={h3style}>5.2 Abonnement Optimal Particulier</p>
                    <p style={pstyle}>L'Abonnement Optimal Particulier donne accès à l'intégralité de la bibliothèque de Contenus numériques de la Plateforme et inclut une question mensuelle au Service d'information juridique. Cette question est strictement <strong>non cumulable d'un mois sur l'autre</strong> : toute question non utilisée au cours d'un mois civil est définitivement perdue et ne peut être reportée.</p>
                    <p style={plastyle}>Des questions supplémentaires peuvent être acquises par l'abonné au tarif préférentiel de <strong>14,90 € HT</strong> par question.</p>
                  </div>
                  <div>
                    <p style={h3style}>5.3 Abonnement Optimal Pro</p>
                    <p style={pstyle}>L'Abonnement Optimal Pro donne accès à l'intégralité de la bibliothèque de Contenus numériques de la Plateforme et inclut deux questions mensuelles au Service d'information juridique. Ces questions sont strictement <strong>non cumulables d'un mois sur l'autre</strong>.</p>
                    <p style={plastyle}>Des questions supplémentaires peuvent être acquises par l'abonné au tarif préférentiel de <strong>14,90 € HT</strong> par question. L'Abonnement Optimal Pro inclut en outre l'accès aux alertes légales événementielles publiées par le Prestataire.</p>
                  </div>
                  <div>
                    <p style={h3style}>5.4 Service d'information juridique à l'unité</p>
                    <p style={plastyle}>Ce service permet à tout Client de poser une question juridique et d'obtenir une réponse rédigée par un juriste, au tarif de <strong>47 € HT</strong> par question, sans abonnement ni engagement de durée.</p>
                  </div>
                  <div>
                    <p style={h3style}>5.5 Conseil en assurances</p>
                    <p style={pstyle}>Conformément à l'article L.521-4 du Code des assurances (devoir de conseil DDA), le conseil est individualisé, documenté et motivé. Un forfait est dû avant la remise du rapport de conseil, indépendamment de toute souscription ultérieure. Le montant du forfait varie selon le profil du Client :</p>
                    <ul style={ulstyle}>
                      <li><strong>Particulier :</strong> 90 € HT</li>
                      <li><strong>Professionnel, association, structure ESS :</strong> 150 € HT</li>
                      <li><strong>Structure complexe (PME, structure multi-contrats) :</strong> sur devis</li>
                    </ul>
                    <p style={plastyle}>En cas de souscription d'un contrat d'assurance via le Cabinet, celui-ci perçoit en complément une commission versée par l'assureur, indépendante du forfait, dont le montant est communiqué au Client avant toute souscription, conformément à l'article L.521-2 du Code des assurances et à la Directive sur la Distribution d'Assurances (DDA). Le Cabinet est enregistré à l'ORIAS sous le numéro 26003943, catégorie IAS Niveau 1, sous contrôle de l'ACPR.</p>
                  </div>
                  <div>
                    <p style={h3style}>5.6 Accompagnement à la création d'entreprise</p>
                    <p style={plastyle}>Ce service fait l'objet d'un devis personnalisé communiqué avant toute souscription. Les frais de greffe et de publication au journal d'annonces légales sont indépendants des honoraires du Prestataire et restent à la charge exclusive du Client.</p>
                  </div>
                  <div style={hlstyle}>
                    <strong>Nature des services : information importante</strong>. Les Contenus numériques et le Service d'information juridique sont fournis à titre informatif et pédagogique. Ils ne constituent pas un conseil juridique personnalisé ni un acte sous seing privé au sens de la loi n°71-1130 du 31 décembre 1971. Le Cabinet Cholez-Pagotto n'est pas un cabinet d'avocats ; il travaille en collaboration avec des avocats et d'autres professionnels du droit réglementés (notaires). Pour toute situation nécessitant un acte juridique ou une représentation, le Client est accompagné avec le concours de ces partenaires ou orienté vers le professionnel du droit habilité.
                  </div>
                </div>
              </section>

              {/* ART. 6 */}
              <section id="compte" style={cardstyle}>
                <h2 style={h2style}>Article 6 : Compte utilisateur</h2>
                <p style={pstyle}>La création d'un compte nécessite la fourniture d'informations exactes, complètes et à jour. Le Client s'engage à maintenir ces informations actualisées pendant toute la durée de son utilisation de la Plateforme, sous peine de voir son accès suspendu.</p>
                <p style={pstyle}>Les identifiants de connexion sont strictement personnels et confidentiels. Le Client est seul responsable de leur conservation et de toute utilisation faite depuis son compte. Toute utilisation non autorisée doit être signalée sans délai au Prestataire via le <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>formulaire de contact</a>.</p>
                <p style={plastyle}>Le Prestataire se réserve le droit de suspendre ou de supprimer tout compte dont les informations s'avèrent inexactes ou en cas de manquement aux présentes CGU, après mise en demeure restée sans effet pendant 7 jours, sauf urgence.</p>
              </section>

              {/* ART. 7 */}
              <section id="tarifs" style={cardstyle}>
                <h2 style={h2style}>Article 7 : Conditions financières et tarifs</h2>
                <p style={pstyle}>Les prix sont indiqués en euros hors taxes (HT). Le Cabinet Cholez-Pagotto bénéficie de la franchise en base de TVA en application de l'article 293 B du Code général des impôts : aucune TVA n'est collectée ni facturée sur les prestations proposées.</p>
                <div style={{overflowX: 'auto', margin: '12px 0'}}>
                  <table style={{width: '100%', borderCollapse: 'collapse', fontSize: '13px'}}>
                    <thead>
                      <tr style={{background: '#0f2d6e'}}>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Offre</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Tarif HT</th>
                        <th style={{color: 'white', padding: '10px 12px', textAlign: 'left', fontWeight: '600'}}>Engagement</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Accès gratuit', 'Gratuit', 'Aucun'],
                        ['Abonnement Optimal Particulier mensuel', '17,90 €/mois', 'Aucun (résiliation 30 j)'],
                        ['Abonnement Optimal Particulier annuel', '149 €/an (soit 12,42 €/mois)', '12 mois'],
                        ['Abonnement Optimal Pro mensuel', '27,90 €/mois', 'Aucun (résiliation 30 j)'],
                        ['Abonnement Optimal Pro annuel', '249 €/an (soit 20,75 €/mois)', '12 mois'],
                        ['Question supplémentaire (abonné)', '14,90 €/question', 'Aucun'],
                        ['Information sur vos droits (unitaire)', '47 €/question', 'Aucun'],
                        ['Conseil en assurances - Particulier', '90 €/forfait HT', 'Aucun'],
                        ['Conseil en assurances - Pro / Association', '150 €/forfait HT', 'Aucun'],
                        ['Conseil en assurances - Structure complexe', 'Sur devis', 'Aucun'],
                      ].map(([offre, tarif, engagement], i) => (
                        <tr key={i} style={{borderBottom: '1px solid #e5e7eb', background: i % 2 === 0 ? 'white' : '#f8fafc'}}>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{offre}</td>
                          <td style={{padding: '10px 12px', color: '#0f2d6e', fontWeight: '600'}}>{tarif}</td>
                          <td style={{padding: '10px 12px', color: '#374151'}}>{engagement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p style={pstyle}>L'Abonnement Optimal annuel implique un engagement ferme de 12 mois. <strong>Aucun remboursement au prorata ne sera effectué</strong> en cas de résiliation avant le terme de la période annuelle en cours.</p>
                <p style={plastyle}>Le Prestataire se réserve le droit de modifier ses tarifs. Toute modification sera notifiée au Client par email au moins 30 jours avant son entrée en vigueur. En cas de refus, le Client peut résilier son abonnement sans frais dans les conditions prévues à l'article 10.</p>
              </section>

              {/* ART. 8 */}
              <section id="paiement" style={cardstyle}>
                <h2 style={h2style}>Article 8 : Modalités de paiement</h2>
                <p style={pstyle}>Le paiement s'effectue par carte bancaire ou virement bancaire. Les transactions sont sécurisées. Aucune information bancaire n'est conservée sur les serveurs du Prestataire.</p>
                <p style={pstyle}>Pour l'Abonnement Optimal mensuel, le paiement est prélevé chaque mois à la date anniversaire de la souscription. Pour l'abonnement annuel, le paiement est effectué en une seule fois à la souscription, puis à chaque renouvellement.</p>
                <p style={plastyle}>En cas d'échec de paiement, le Prestataire notifie le Client par email. Un délai de <strong>7 jours calendaires</strong> est accordé pour régulariser la situation. À défaut de régularisation dans ce délai, le Prestataire se réserve le droit de suspendre l'accès aux services payants jusqu'au paiement effectif, sans préjudice de toute action en recouvrement.</p>
              </section>

              {/* ART. 9 */}
              <section id="retractation" style={cardstyle}>
                <h2 style={h2style}>Article 9 : Droit de rétractation</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <p style={pstyle}>Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client Consommateur dispose d'un délai de <strong>14 jours calendaires</strong> à compter de la souscription d'un service payant pour exercer son droit de rétractation, sans avoir à motiver sa décision ni à supporter de pénalités.</p>
                  <p style={pstyle}>La rétractation s'exerce via le <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>formulaire de contact</a> ou par courrier recommandé avec accusé de réception à l'adresse du siège social du Prestataire, en utilisant si souhaité le formulaire type de rétractation prévu à l'article R.221-1 du Code de la consommation, disponible sur demande.</p>

                  <div style={warnstyle}>
                    <strong>9.1 : Renonciation expresse au droit de rétractation pour les Contenus numériques</strong><br /><br />
                    Conformément à l'article L.221-28 13° du Code de la consommation, le Client reconnaît qu'en demandant l'accès immédiat à un Contenu numérique (téléchargement) avant la fin du délai de rétractation de 14 jours et en cochant la case d'acceptation des présentes CGU, il demande expressément l'exécution du contrat et renonce ainsi à son droit de rétractation pour ce Contenu numérique. Cette renonciation s'applique indépendamment pour chaque Contenu numérique téléchargé pendant le délai de rétractation.
                  </div>

                  <p style={pstyle}><strong>9.2 : Service d'information juridique.</strong> Conformément à l'article L.221-28 1° du Code de la consommation, le droit de rétractation ne peut plus être exercé dès lors que le Service d'information juridique a été intégralement exécuté, c'est-à-dire dès la transmission de la réponse rédigée par le juriste au Client, celui-ci ayant donné son accord exprès pour l'exécution du service avant l'expiration du délai de rétractation.</p>
                  <p style={plastyle}><strong>9.3 : Clients Professionnels.</strong> Le droit de rétractation prévu par le Code de la consommation ne s'applique pas aux Clients agissant en qualité de Professionnels au sens de l'article liminaire du Code de la consommation.</p>
                </div>
              </section>

              {/* ART. 10 */}
              <section id="resiliation" style={cardstyle}>
                <h2 style={h2style}>Article 10 : Résiliation</h2>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <p style={h3style}>10.1 Résiliation par le Client</p>
                  <p style={pstyle}>Le Client peut résilier son Abonnement Optimal à tout moment en adressant une demande via le <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>formulaire de contact</a>. Conformément à l'article L.215-3-1 du Code de la consommation, la résiliation est possible en ligne de manière simple, sans démarche complexe ni délai excessif.</p>
                  <p style={pstyle}>Pour l'abonnement annuel, la résiliation prend effet à l'<strong>échéance de la période annuelle en cours</strong>, sous réserve d'un préavis d'au moins <strong>30 jours</strong> avant cette date. Pour l'abonnement mensuel sans engagement, la résiliation prend effet à la fin du mois en cours sous réserve d'un préavis de 30 jours.</p>
                  <div style={hlstyle}>
                    Aucun remboursement au prorata de la période restante ne sera effectué pour l'abonnement annuel. L'accès à la bibliothèque de la Plateforme cesse à la date d'effet de la résiliation. Les fichiers Contenus numériques déjà téléchargés sur l'appareil du Client avant cette date restent disponibles localement.
                  </div>

                  <p style={h3style}>10.2 Résiliation par le Prestataire</p>
                  <p style={pstyle}>Le Prestataire peut résilier l'accès à la Plateforme en cas de manquement grave du Client à ses obligations (violation des droits de propriété intellectuelle, comportement abusif, défaut de paiement persistant), après mise en demeure restée sans effet pendant <strong>15 jours</strong>.</p>
                  <p style={plastyle}>En cas de résiliation à l'initiative du Prestataire pour motif légitime non imputable au Client, celui-ci est remboursé au prorata des sommes versées correspondant à la période non consommée.</p>
                </div>
              </section>

              {/* ART. 11 */}
              <section id="renouvellement" style={cardstyle}>
                <h2 style={h2style}>Article 11 : Renouvellement</h2>
                <p style={pstyle}>Conformément à l'article L.215-1 du Code de la consommation, le Prestataire informera le Client Consommateur par email de la reconduction automatique de l'Abonnement Optimal annuel <strong>entre 1 et 3 mois</strong> avant la date d'échéance annuelle, en lui rappelant la possibilité de ne pas renouveler.</p>
                <p style={pstyle}>À défaut d'une telle information dans ce délai légal, le Client Consommateur peut résilier son abonnement à tout moment après la date de reconduction, sans frais, par simple notification au Prestataire. Les sommes versées au-delà de la date de résiliation sont remboursées dans un délai de 30 jours.</p>
                <p style={plastyle}>Le renouvellement s'effectue aux tarifs en vigueur au jour du renouvellement, sous réserve de la notification préalable prévue à l'article 7.</p>
              </section>

              {/* ART. 12 */}
              <section id="conformite" style={cardstyle}>
                <h2 style={h2style}>Article 12 : Garantie légale de conformité des contenus et services numériques</h2>
                <p style={pstyle}>Conformément aux articles L.217-27 à L.217-36 du Code de la consommation, issus de la transposition de la Directive 2019/770/UE, le Prestataire est tenu de fournir des Contenus numériques et des Services numériques conformes au contrat.</p>
                <p style={pstyle}>Un Contenu ou Service numérique est conforme lorsqu'il correspond à la description fournie sur la Plateforme, qu'il est propre à l'usage habituellement attendu d'un contenu similaire, et qu'il est fourni dans sa version la plus récente disponible à la date de la souscription, sauf accord contraire.</p>
                <p style={pstyle}>En cas de défaut de conformité, le Client Consommateur peut demander la mise en conformité du contenu ou du service, ou à défaut, la réduction du prix ou la résolution du contrat, dans les conditions prévues aux articles L.217-32 et suivants du Code de la consommation.</p>
                <p style={plastyle}>La garantie légale de conformité s'applique sans préjudice de toute garantie commerciale qui pourrait être accordée par le Prestataire. Elle ne peut être exclue ni limitée par les présentes CGU à l'égard des Clients Consommateurs.</p>
              </section>

              {/* ART. 13 */}
              <section id="obligations-prestataire" style={cardstyle}>
                <h2 style={h2style}>Article 13 : Obligations du Prestataire</h2>
                <p style={pstyle}>Le Prestataire s'engage à :</p>
                <ul style={ulstyle}>
                  <li>Mettre à disposition les services décrits aux présentes dans les conditions tarifaires et techniques affichées sur la Plateforme ;</li>
                  <li>Assurer la disponibilité de la Plateforme avec le soin d'un professionnel diligent, sans engagement de continuité absolue compte tenu des aléas inhérents aux réseaux de communication électronique ;</li>
                  <li>Maintenir les Contenus numériques à jour en fonction des évolutions législatives et réglementaires significatives, dans un délai raisonnable ;</li>
                  <li>Assurer la sécurité et la confidentialité des données personnelles du Client conformément au RGPD et à la Politique de confidentialité ;</li>
                  <li>Informer le Client de tout incident susceptible d'affecter l'accès aux services dans les meilleurs délais.</li>
                </ul>
                <div style={hlstyle}>
                  <strong>Service d'information juridique : Obligation de moyen</strong><br /><br />
                  Le Prestataire s'engage à fournir une réponse rédigée par un juriste dans un délai de <strong>24 à 48 heures ouvrées</strong> suivant la réception complète de la question et la confirmation du paiement. Cet engagement constitue une <strong>obligation de moyen</strong> au sens de la jurisprudence de la Cour de cassation (Civ. 1re, 20 mai 1936, Mercier) : le Prestataire met en œuvre tous les moyens raisonnables pour respecter ce délai mais ne peut être tenu responsable des dépassements résultant de circonstances indépendantes de sa volonté. En cas de dépassement prévisible, le Client en est informé sans délai.
                </div>
              </section>

              {/* ART. 14 */}
              <section id="obligations-client" style={cardstyle}>
                <h2 style={h2style}>Article 14 : Obligations du Client</h2>
                <p style={pstyle}>Le Client s'engage à :</p>
                <ul style={ulstyle}>
                  <li>Utiliser la Plateforme conformément à sa destination et aux présentes CGU ;</li>
                  <li>Ne pas diffuser, reproduire, vendre ou exploiter commercialement les Contenus numériques sans autorisation écrite préalable du Prestataire ;</li>
                  <li>Fournir des informations exactes lors de la création de son compte et lors de toute demande au Service d'information juridique ;</li>
                  <li>Ne pas tenter de contourner les mesures techniques de protection de la Plateforme ;</li>
                  <li>Ne pas utiliser la Plateforme à des fins illicites, contraires à l'ordre public ou aux bonnes mœurs ;</li>
                  <li>Ne pas soumettre de questions relevant d'une urgence judiciaire (garde à vue, audience imminente) pour lesquelles seul un avocat est habilité à intervenir.</li>
                </ul>
                <p style={plastyle}>Le Client reconnaît que les Contenus numériques mis à disposition sont des modèles généraux à visée pédagogique. Leur adaptation à sa situation particulière lui incombe et relève de sa seule responsabilité. Pour toute situation complexe ou contentieuse, le Client est accompagné en lien avec un avocat partenaire ou orienté vers le professionnel du droit habilité.</p>
              </section>

              {/* ART. 15 */}
              <section id="pi" style={cardstyle}>
                <h2 style={h2style}>Article 15 : Propriété intellectuelle</h2>
                <p style={pstyle}>L'ensemble des éléments de la Plateforme (textes, articles, analyses juridiques, documents, charte graphique, logiciels, bases de données) est protégé par le droit d'auteur et les droits de propriété intellectuelle, et demeure la propriété exclusive du Cabinet Cholez-Pagotto, conformément aux articles L.111-1 et suivants du Code de la propriété intellectuelle.</p>
                <p style={pstyle}>La souscription à un service ou le téléchargement d'un Contenu numérique confère au Client une <strong>licence d'utilisation personnelle, non exclusive, non transférable et non sous-licenciable</strong>, pour ses besoins propres uniquement. Toute reproduction ou diffusion à des tiers, à titre gratuit ou onéreux, est strictement interdite.</p>
                <p style={plastyle}>Toute violation de ces droits expose son auteur aux sanctions civiles (dommages et intérêts) et pénales (jusqu'à 3 ans d'emprisonnement et 300 000 € d'amende) prévues aux articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
              </section>

              {/* ART. 16 */}
              <section id="responsabilite" style={cardstyle}>
                <h2 style={h2style}>Article 16 : Responsabilité</h2>
                <p style={pstyle}>Le Prestataire ne saurait être tenu responsable des dommages indirects résultant de l'utilisation de la Plateforme ou des Contenus numériques, notamment les pertes de revenus, de données ou d'opportunités commerciales, <strong>sauf dispositions légales d'ordre public contraires</strong>, notamment les droits légaux des Consommateurs qui ne peuvent être exclus ou limités.</p>
                <p style={pstyle}>Le Prestataire ne garantit pas l'exhaustivité ni l'adéquation des Contenus numériques à la situation particulière du Client. Ces contenus constituent des informations générales qui ne se substituent pas à un conseil juridique personnalisé.</p>
                <p style={pstyle}>Dans les limites autorisées par la loi applicable et sans préjudice des droits légaux des Consommateurs, la responsabilité du Prestataire est limitée au montant des sommes effectivement versées par le Client au titre du service en cause au cours des 12 derniers mois précédant le fait générateur du dommage.</p>
                <p style={plastyle}>Cette limitation de responsabilité ne s'applique pas en cas de dommages corporels, de faute lourde ou dolosive du Prestataire, ni aux cas où la loi applicable interdit toute limitation de responsabilité.</p>
              </section>

              {/* ART. 17 */}
              <section id="force-majeure" style={cardstyle}>
                <h2 style={h2style}>Article 17 : Force majeure</h2>
                <p style={plastyle}>Conformément à l'article 1218 du Code civil, aucune des parties ne sera responsable de l'inexécution ou du retard d'exécution de ses obligations résultant d'un événement de force majeure présentant les caractères d'imprévisibilité, d'irrésistibilité et d'extériorité, notamment : catastrophe naturelle, pandémie, cyberattaque d'ampleur, défaillance généralisée des réseaux de télécommunication, grève ou décision administrative imprévisible. La partie concernée notifie l'autre sans délai et les obligations suspendues reprennent dès la cessation de l'événement.</p>
              </section>

              {/* ART. 18 */}
              <section id="donnees" style={cardstyle}>
                <h2 style={h2style}>Article 18 : Données personnelles</h2>
                <p style={pstyle}>Les données personnelles du Client sont collectées et traitées par le Cabinet Cholez-Pagotto en qualité de responsable de traitement, conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n°78-17 du 6 janvier 1978 modifiée relative à l'informatique, aux fichiers et aux libertés.</p>
                <p style={pstyle}>Les finalités, bases légales, durées de conservation et destinataires des traitements sont détaillés dans la <a href="/confidentialite" style={{color: '#1a4fba', textDecoration: 'none', fontWeight: '600'}}>Politique de confidentialité</a>, accessible en permanence sur la Plateforme.</p>
                <p style={plastyle}>Conformément aux articles 15 à 22 du RGPD, le Client dispose d'un droit d'accès, de rectification, d'effacement, de portabilité, d'opposition et de limitation du traitement de ses données, exerceable via le <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>formulaire de contact</a>. En cas de réclamation non satisfaite, le Client peut saisir la Commission Nationale de l'Informatique et des Libertés (CNIL), <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>www.cnil.fr</a>.</p>
              </section>

              {/* ART. 19 */}
              <section id="mediation" style={cardstyle}>
                <h2 style={h2style}>Article 19 : Médiation et règlement des litiges</h2>
                <p style={pstyle}>En cas de litige, le Client adresse une réclamation écrite préalable au Prestataire via le <a href="/contact" style={{color: '#1a4fba', textDecoration: 'none'}}>formulaire de contact</a>. Le Prestataire s'engage à y répondre dans un délai de <strong>30 jours</strong>.</p>
                <p style={pstyle}>À défaut de résolution amiable dans ce délai, et conformément à l'article L.612-1 du Code de la consommation, le Client Consommateur peut recourir gratuitement à la médiation de la consommation auprès du médiateur désigné :</p>
                <div style={hlstyle}>
                  <strong>Centre de Médiation de la Consommation de Conciliateurs de Justice (CM2C)</strong><br />
                  <a href="https://www.cm2c.net" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>www.cm2c.net</a>
                </div>
                <p style={pstyle}>Le Client peut également recourir à la plateforme européenne de règlement en ligne des litiges (RLL) de la Commission européenne, accessible à l'adresse : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{color: '#1a4fba', textDecoration: 'none'}}>ec.europa.eu/consumers/odr</a></p>
                <p style={plastyle}>Le recours à la médiation est sans préjudice du droit du Client de saisir les juridictions compétentes à tout moment.</p>
              </section>

              {/* ART. 20 */}
              <section id="droit" style={cardstyle}>
                <h2 style={h2style}>Article 20 : Droit applicable et juridiction compétente</h2>
                <p style={pstyle}>Les présentes CGU sont soumises au droit français.</p>
                <p style={pstyle}>En cas de litige non résolu par voie amiable ou de médiation, les tribunaux français seront compétents. Pour les Clients Consommateurs, le tribunal compétent est celui du lieu de résidence du consommateur au moment de la conclusion du contrat ou de la survenance du fait dommageable, conformément à l'article R.631-3 du Code de la consommation.</p>
                <p style={plastyle}>Pour les Clients Professionnels établis hors de France, toute contestation relative à la formation, l'interprétation ou l'exécution des présentes CGU sera soumise à la compétence exclusive des tribunaux de Paris, nonobstant pluralité de défendeurs ou appel en garantie.</p>
              </section>

              {/* ART. 21 */}
              <section id="modifications" style={cardstyle}>
                <h2 style={h2style}>Article 21 : Modifications des CGU</h2>
                <p style={pstyle}>Le Prestataire se réserve le droit de modifier les présentes CGU à tout moment pour les adapter aux évolutions légales, réglementaires ou techniques. Les modifications substantielles seront notifiées au Client par email au moins <strong>30 jours</strong> avant leur entrée en vigueur.</p>
                <p style={pstyle}>En cas de refus des nouvelles CGU, le Client peut résilier son abonnement sans frais dans un délai de 30 jours suivant la notification, selon les modalités prévues à l'article 10.</p>
                <p style={plastyle}>L'utilisation de la Plateforme après l'entrée en vigueur des nouvelles CGU vaut acceptation de celles-ci. Les CGU antérieures restent applicables aux contrats conclus avant leur modification.</p>
              </section>

              <p style={{color: '#9ca3af', fontSize: '12px', textAlign: 'center', margin: 0}}>
                CGU en vigueur au 12 mai 2026 · Cabinet Cholez-Pagotto · SIRET 490 889 516 00053
              </p>

            </div>
          </div>

          {/* SIDEBAR */}
          <aside style={{flex: '0 0 240px', position: 'sticky', top: '80px'}}>
            <div style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem'}}>
              <p style={{color: '#0f2d6e', fontSize: '12px', fontWeight: '700', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Sommaire</p>
              <nav style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} style={{color: '#6b7280', fontSize: '11px', textDecoration: 'none', padding: '5px 8px', borderRadius: '6px', lineHeight: '1.4', display: 'block'}}>
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