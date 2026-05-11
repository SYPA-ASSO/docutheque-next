export default function FAQ() {
  const faqs = [
    {
      q: "Qu'est-ce qu'un modèle de document juridique ?",
      a: "Un modèle de document juridique est un document prérédigé, conforme à la législation en vigueur, que vous pouvez télécharger, compléter et adapter à votre situation. Il vous évite de rédiger un document de zéro et garantit que les mentions obligatoires sont bien présentes."
    },
    {
      q: "Les modèles sont-ils conformes au droit français en vigueur ?",
      a: "Oui. Chaque modèle est rédigé par un juriste et mis à jour dans les meilleurs délais dès qu'une loi, un décret ou une jurisprudence modifie le cadre applicable."
    },
    {
      q: "Quelle est la différence entre un modèle gratuit et un modèle Optimal ?",
      a: "L'accès gratuit donne accès à tous les documents disponibles en accès libre, en format DOCX. L'abonnement Optimal débloque la bibliothèque complète, les notices explicatives des documents, les fiches pédagogiques de vulgarisation juridique et une question incluse par mois sous 24 à 48h."
    },
    {
      q: "Puis-je modifier les documents après téléchargement ?",
      a: "Oui. Tous nos modèles sont fournis au format DOCX, le format Word universel. Vous pouvez les ouvrir, les modifier et les personnaliser librement, sans logiciel spécifique ni abonnement supplémentaire."
    },
    {
      q: 'Qu\'est-ce que le service "Information sur vos droits" ?',
      a: "C'est un service à l'unité, sans abonnement, à 47 €. Vous posez votre question en langage courant et un juriste vous apporte une réponse pédagogique par écrit sous 24 à 48h. Cette réponse a vocation à vous informer, elle ne constitue pas une consultation juridique au sens de la loi du 31 décembre 1971. Si votre situation génère plusieurs questions, l'abonnement Optimal est plus adapté : à partir de 14,90 €/mois, il inclut une question par mois et les suivantes à seulement 9,90 €."
    },
    {
      q: "L'intelligence artificielle est-elle utilisée pour rédiger les documents ?",
      a: "Non. Chaque modèle est rédigé et relu par un juriste. Il n'y a aucune intervention de l'IA dans la rédaction de nos documents. L'IA peut halluciner. Nos juristes, non."
    },
    {
      q: "Comment fonctionne l'abonnement Optimal ?",
      a: "L'abonnement Optimal est souscrit pour une durée minimale de 12 mois à 14,90 €/mois, ou 147,97 €/an avec 2 mois offerts. Il inclut 1 question par mois, non cumulable, avec réponse sous 24 à 48h. À l'issue de la période, il se renouvelle automatiquement sauf résiliation adressée par écrit au moins 30 jours avant l'échéance."
    },
    {
      q: "Pouvez-vous m'orienter vers un avocat ?",
      a: "Oui. Nous disposons d'un réseau d'avocats partenaires vers lesquels nous pouvons vous orienter si votre situation nécessite une représentation ou un acte juridique formel, sans obligation de votre part et en toute liberté de choix."
    },
    {
      q: "Proposez-vous un accompagnement pour la création d'entreprise et les formalités juridiques ?",
      a: "Oui. En tant que juriste formaliste, nous vous accompagnons dans toutes vos démarches de formalités : création de société (SASU, SAS, SARL, EURL), de micro-entreprise, d'entreprise individuelle, vos statuts, vos modifications statutaires, de transfert de siège, de dissolution et de liquidation. Notre cabinet est membre du CRFF (Conseil Représentatif des Formalistes de France)."
    },
    {
      q: "Proposez-vous des services de courtage en assurances ?",
      a: "Oui. En complément de notre activité documentaire et pédagogique, nous exerçons une activité de conseil en assurances et réassurances, déclarée à l'ORIAS sous le numéro 26003943 et exercée sous le contrôle de l'ACPR. Nous pouvons vous accompagner dans la recherche et la mise en place de solutions assurantielles adaptées à votre situation personnelle ou professionnelle, en tous domaines concernés par de l'assurance."
    },
  ]

  return (
    <section style={{background: '#f8fafc', borderTop: '1px solid #e5e7eb', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{textAlign: 'center', marginBottom: '2.5rem'}}>
          <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Questions fréquentes</h2>
          <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '6px'}}>Tout ce que vous devez savoir avant de commencer.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '860px', margin: '0 auto'}}>
          {faqs.map((faq, i) => (
            <details key={i} style={{background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem 1.25rem'}}>
              <summary style={{fontWeight: '600', color: '#0f2d6e', fontSize: '14px', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px'}}>
                <span>{faq.q}</span>
                <span style={{color: '#1a4fba', fontSize: '18px', flexShrink: 0, lineHeight: 1}}>＋</span>
              </summary>
              <p style={{color: '#374151', fontSize: '13px', lineHeight: '1.75', marginTop: '12px', marginBottom: 0}}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}