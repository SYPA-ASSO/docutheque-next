import { Building2, User, ShoppingCart, Shield, FileText, Scale } from 'lucide-react'

const categories = [
  { bg: '#eff6ff', ic: '#2563eb', icone: <Building2 size={20} color="#2563eb" strokeWidth={1.5} />, label: 'Employeur', desc: 'Contrats, licenciement, rupture conventionnelle, règlement intérieur' },
  { bg: '#f0fdf4', ic: '#16a34a', icone: <User size={20} color="#16a34a" strokeWidth={1.5} />, label: 'Salarié', desc: 'Démission, contestation de sanction, solde de tout compte' },
  { bg: '#fff7ed', ic: '#ea580c', icone: <ShoppingCart size={20} color="#ea580c" strokeWidth={1.5} />, label: 'Consommateur', desc: 'Mise en demeure, rétractation, garantie légale' },
  { bg: '#fdf4ff', ic: '#9333ea', icone: <Shield size={20} color="#9333ea" strokeWidth={1.5} />, label: 'RGPD / Conformité', desc: 'Registre, DPA, AIPD, politique de confidentialité' },
  { bg: '#eff6ff', ic: '#1a4fba', icone: <FileText size={20} color="#1a4fba" strokeWidth={1.5} />, label: 'Contrats', desc: 'Prestation de services, CGV, NDA, mandat, freelance' },
  { bg: '#f8fafc', ic: '#475569', icone: <Scale size={20} color="#475569" strokeWidth={1.5} />, label: 'Recouvrement', desc: 'Mise en demeure de payer, relances, injonction de payer' },
]

export default function Categories() {
  return (
    <section style={{background: 'white', padding: '4rem 0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 2rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
          <div>
            <h2 style={{fontSize: '1.6rem', fontWeight: '700', color: '#0f2d6e', margin: 0}}>Parcourir par profil</h2>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginTop: '4px'}}>Choisissez votre situation pour accéder aux bons modèles.</p>
          </div>
          <a href="/catalogue" style={{color: '#1a4fba', fontSize: '13px', fontWeight: '500', textDecoration: 'none'}}>Voir tout le catalogue →</a>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
          {categories.map((cat) => (
            <div key={cat.label} style={{border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', cursor: 'pointer', display: 'flex', gap: '12px', alignItems: 'flex-start'}}>
              <div style={{width: '42px', height: '42px', background: cat.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                {cat.icone}
              </div>
              <div>
                <strong style={{fontSize: '13px', color: '#0f2d6e'}}>{cat.label}</strong>
                <p style={{color: '#6b7280', fontSize: '12px', marginTop: '4px', lineHeight: '1.5'}}>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}