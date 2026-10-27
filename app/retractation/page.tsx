import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ChevronRight, Printer, FileText } from 'lucide-react'

export const metadata = {
  title: 'Formulaire de rétractation · Cabinet Cholez-Pagotto',
  description: "Formulaire type de rétractation prévu en annexe à l'article R.221-1 du Code de la consommation, consultable et imprimable à tout moment. Conditions et modalités d'exercice du droit de rétractation.",
  alternates: { canonical: 'https://cholez-pagotto.fr/retractation' },
}

const pstyle = { color: '#374151', fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }

export default function PageRetractation() {
  return (
    <>
      <Header />
      <main style={{ background: '#f8fafc', minHeight: '100vh' }}>

        <div style={{ background: 'white', borderBottom: '1px solid #e5e7eb', padding: '10px 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#6b7280' }}>
            <a href="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Accueil</a>
            <ChevronRight size={12} />
            <span style={{ color: '#0f2d6e', fontWeight: 500 }}>Formulaire de rétractation</span>
          </div>
        </div>

        <section style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', padding: '2.75rem 1.5rem', color: 'white' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: 'clamp(1.7rem, 4vw, 2.1rem)', fontWeight: 700, margin: '0 0 10px' }}>Droit de rétractation</h1>
            <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.88)', margin: 0, lineHeight: 1.6, maxWidth: 720 }}>
              Conditions d&apos;exercice et formulaire type de rétractation, consultable et imprimable à tout moment, conformément à l&apos;annexe à l&apos;article R.221-1 du Code de la consommation.
            </p>
          </div>
        </section>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.15rem', fontWeight: 700, margin: '0 0 12px' }}>1. Votre droit de rétractation</h2>
            <p style={pstyle}>Lorsque vous contractez à distance en qualité de consommateur, vous disposez d&apos;un délai de quatorze jours pour exercer votre droit de rétractation, sans avoir à motiver votre décision (articles L.221-18 et suivants du Code de la consommation). Le délai court à compter de la conclusion du contrat pour les prestations de services et les contenus numériques.</p>
            <p style={pstyle}><strong>Exception propre aux contenus numériques :</strong> conformément au 13° de l&apos;article L.221-28 du Code de la consommation, le droit de rétractation ne peut plus être exercé pour un contenu numérique fourni immédiatement (par exemple un document téléchargeable), dès lors que vous avez expressément consenti à son exécution immédiate et reconnu la perte corrélative de votre droit de rétractation. Ce consentement est recueilli avant le paiement et sa preuve est conservée.</p>
            <p style={pstyle}><strong>Services (information juridique, conseil en assurances) :</strong> si vous demandez que le service commence avant la fin du délai de quatorze jours, cette demande expresse est recueillie avant le paiement, et vous reconnaissez qu&apos;une fois le service entièrement exécuté (réponse transmise, rapport de conseil remis), vous ne disposez plus de votre droit de rétractation. Si vous vous rétractez après le début de l&apos;exécution que vous avez demandé, vous ne payez que la part du service déjà fournie, proportionnée au prix total. Sans demande expresse de votre part, le service ne commence pas avant la fin du délai et aucune somme n&apos;est due en cas de rétractation.</p>
            <p style={{ ...pstyle, marginBottom: 0 }}>Les modalités complètes figurent dans nos <a href="/cgu" style={{ color: '#1a4fba', textDecoration: 'none', fontWeight: 600 }}>conditions générales d&apos;utilisation et de vente</a>.</p>
          </section>

          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem' }}>
            <h2 style={{ color: '#0f2d6e', fontSize: '1.15rem', fontWeight: 700, margin: '0 0 12px' }}>2. Comment exercer ce droit</h2>
            <p style={pstyle}>Il vous suffit de nous adresser, avant l&apos;expiration du délai, une déclaration dénuée d&apos;ambiguïté exprimant votre volonté de vous rétracter :</p>
            <ul style={{ paddingLeft: '1.5rem', margin: '0 0 12px', display: 'flex', flexDirection: 'column', gap: '8px', color: '#374151', fontSize: '14px', lineHeight: 1.7 }}>
              <li>par courriel à <a href="mailto:francois@cholez-pagotto.fr" style={{ color: '#1a4fba', textDecoration: 'none', fontWeight: 600 }}>francois@cholez-pagotto.fr</a> ;</li>
              <li>via le <a href="/contact" style={{ color: '#1a4fba', textDecoration: 'none', fontWeight: 600 }}>formulaire de contact</a> du site ;</li>
              <li>ou par courrier recommandé avec accusé de réception à : Cabinet Cholez-Pagotto, François CHOLEZ E.I., 12 rue d&apos;Olima, 88000 Épinal.</li>
            </ul>
            <p style={{ ...pstyle, marginBottom: 0 }}>Vous pouvez utiliser le formulaire type ci-dessous, sans que cela soit obligatoire. En cas de rétractation valablement exercée, le remboursement intervient au plus tard quatorze jours à compter de la date à laquelle nous sommes informés de votre décision (article L.221-24 du Code de la consommation).</p>
          </section>

          <section style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <FileText size={18} color="#1a4fba" strokeWidth={1.5} />
              <h2 style={{ color: '#0f2d6e', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>3. Formulaire type de rétractation</h2>
            </div>
            <p style={{ ...pstyle, fontSize: '13px', color: '#6b7280' }}>Modèle figurant en annexe à l&apos;article R.221-1 du Code de la consommation. Vous pouvez imprimer cette page, ou copier le formulaire dans un courriel ou un courrier.</p>
            <div style={{ background: '#f8fafc', border: '1px dashed #c3cbd9', borderRadius: '10px', padding: '1.5rem', color: '#374151', fontSize: '14px', lineHeight: 2 }}>
              <p style={{ margin: '0 0 12px', fontStyle: 'italic' }}>(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat.)</p>
              <p style={{ margin: '0 0 12px' }}>À l&apos;attention du Cabinet Cholez-Pagotto, François CHOLEZ E.I., 12 rue d&apos;Olima, 88000 Épinal, courriel : francois@cholez-pagotto.fr :</p>
              <p style={{ margin: '0 0 12px' }}>Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la vente du bien (*) / pour la prestation de services (*) ci-dessous :</p>
              <p style={{ margin: '0 0 8px' }}>Commandé le (*) / reçu le (*) : ............................................................</p>
              <p style={{ margin: '0 0 8px' }}>Nom du (des) consommateur(s) : ............................................................</p>
              <p style={{ margin: '0 0 8px' }}>Adresse du (des) consommateur(s) : ............................................................</p>
              <p style={{ margin: '0 0 8px' }}>Signature du (des) consommateur(s) (uniquement en cas de notification du présent formulaire sur papier) :</p>
              <p style={{ margin: '0 0 8px' }}>Date : ............................................................</p>
              <p style={{ margin: 0, fontStyle: 'italic' }}>(*) Rayez la mention inutile.</p>
            </div>
            <p style={{ ...pstyle, marginTop: '14px', marginBottom: 0, display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7280', fontSize: '13px' }}>
              <Printer size={15} strokeWidth={1.5} /> Pour imprimer : utilisez la fonction d&apos;impression de votre navigateur (Ctrl+P ou Cmd+P).
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
