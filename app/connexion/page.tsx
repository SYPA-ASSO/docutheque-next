'use client'

import { useState } from 'react'
import { Scale, UserCheck, Shield, Clock, Lock, Building2, Users, PenLine, KeyRound } from 'lucide-react'
import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'

export default function Connexion() {
  const [mode, setMode] = useState<'choix' | 'connexion' | 'inscription'>('choix')
  const [statut, setStatut] = useState<'particulier' | 'professionnel' | 'association' | 'collectivite'>('particulier')

  return (
    <>
      <Header />
      <main style={{background: '#f8fafc', minHeight: '100vh', padding: '3rem 0'}}>
        <div style={{maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start'}}>

          {/* COLONNE GAUCHE */}
          <div style={{flex: '0 0 380px', background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', position: 'sticky', top: '80px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px'}}>
              <div style={{width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Scale size={18} color="white" strokeWidth={1.5} />
              </div>
              <span style={{color: 'white', fontWeight: '700', fontSize: '15px'}}>Docuthèque</span>
            </div>

            <h2 style={{color: 'white', fontSize: '1.3rem', fontWeight: '700', lineHeight: '1.4', marginBottom: '8px'}}>
              Vos documents juridiques et vos droits expliqués, sans jargon.
            </h2>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.7', marginBottom: '28px'}}>
              Accédez à votre espace client pour télécharger vos documents, poser vos questions et gérer votre abonnement.
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px'}}>
              {[
                { label: 'Accès gratuit', desc: 'Tous les documents disponibles en accès libre, format DOCX.', color: '#4ade80' },
                { label: 'Abonnement Optimal', desc: 'Bibliothèque complète de documents juridiques, 1 question juriste incluse par mois, non cumulable. 12,49 €/mois ou 147,97 €/an.', color: '#93c5fd' },
                { label: 'Information sur vos droits', desc: 'Une question, une réponse rédigée par un juriste sous 24 à 48h. 47 € à l\'unité, sans abonnement.', color: '#fcd34d' },
              ].map((offre, i) => (
                <div key={i} style={{background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 14px'}}>
                  <p style={{color: offre.color, fontSize: '12px', fontWeight: '700', margin: '0 0 3px'}}>{offre.label}</p>
                  <p style={{color: 'rgba(255,255,255,0.75)', fontSize: '11px', margin: 0, lineHeight: '1.5'}}>{offre.desc}</p>
                </div>
              ))}
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              {[
                { icon: <UserCheck size={16} color="#93c5fd" strokeWidth={1.5} />, text: '100% humain, zéro intelligence artificielle' },
                { icon: <Shield size={16} color="#93c5fd" strokeWidth={1.5} />, text: 'Paiement sécurisé · CB et virement' },
                { icon: <Clock size={16} color="#93c5fd" strokeWidth={1.5} />, text: 'Réponse juriste sous 24 à 48h' },
                { icon: <Lock size={16} color="#93c5fd" strokeWidth={1.5} />, text: 'Données personnelles protégées (RGPD)' },
              ].map((item, i) => (
                <div key={i} style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  {item.icon}
                  <span style={{color: 'rgba(255,255,255,0.8)', fontSize: '12px'}}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div style={{flex: 1, background: 'white', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e5e7eb'}}>

            {/* ÉCRAN DE CHOIX */}
            {mode === 'choix' && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div>
                  <h2 style={{fontSize: '1.4rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 6px'}}>Bienvenue sur Docuthèque</h2>
                  <p style={{color: '#6b7280', fontSize: '13px', margin: 0}}>Pour commencer, dites-nous où vous en êtes :</p>
                </div>

                <button
                  onClick={() => setMode('inscription')}
                  style={{width: '100%', background: 'white', border: '2px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', display: 'flex', gap: '1.25rem', alignItems: 'flex-start'}}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1a4fba'; (e.currentTarget as HTMLButtonElement).style.background = '#eff6ff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.background = 'white' }}
                >
                  <div style={{width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <PenLine size={24} color="#1a4fba" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>C'est ma première visite</p>
                    <p style={{color: '#6b7280', fontSize: '13px', margin: '0 0 8px', lineHeight: '1.5'}}>Je n'ai pas encore de compte Docuthèque et je souhaite en créer un.</p>
                    <span style={{color: '#1a4fba', fontSize: '12px', fontWeight: '600'}}>Créer mon compte →</span>
                  </div>
                </button>

                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div style={{flex: 1, height: '1px', background: '#e5e7eb'}} />
                  <span style={{color: '#9ca3af', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em'}}>OU</span>
                  <div style={{flex: 1, height: '1px', background: '#e5e7eb'}} />
                </div>

                <button
                  onClick={() => setMode('connexion')}
                  style={{width: '100%', background: 'white', border: '2px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', display: 'flex', gap: '1.25rem', alignItems: 'flex-start'}}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1a4fba'; (e.currentTarget as HTMLButtonElement).style.background = '#eff6ff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.background = 'white' }}
                >
                  <div style={{width: '48px', height: '48px', background: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>
                    <KeyRound size={24} color="#16a34a" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px'}}>J'ai déjà un compte</p>
                    <p style={{color: '#6b7280', fontSize: '13px', margin: '0 0 8px', lineHeight: '1.5'}}>Je suis déjà inscrit sur Docuthèque et je souhaite accéder à mon espace client.</p>
                    <span style={{color: '#16a34a', fontSize: '12px', fontWeight: '600'}}>Me connecter →</span>
                  </div>
                </button>

                <p style={{color: '#9ca3af', fontSize: '11px', textAlign: 'center', margin: 0, lineHeight: '1.6'}}>
                  Vos données sont protégées conformément au RGPD · <a href="/confidentialite" style={{color: '#9ca3af'}}>Politique de confidentialité</a>
                </p>
              </div>
            )}

            {/* FORMULAIRE CONNEXION */}
            {mode === 'connexion' && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                <button onClick={() => setMode('choix')} style={{background: 'none', border: 'none', color: '#6b7280', fontSize: '12px', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-start'}}>
                  ← Retour
                </button>
                <div>
                  <h2 style={{fontSize: '1.3rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 4px'}}>Accédez à votre espace client</h2>
                  <p style={{color: '#6b7280', fontSize: '13px', margin: 0}}>Renseignez vos identifiants pour accéder à vos documents et à votre suivi.</p>
                </div>
                <div>
                  <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Adresse email *</label>
                  <input type="email" placeholder="votre@email.fr" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box', outline: 'none'}} />
                </div>
                <div>
                  <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Mot de passe *</label>
                  <input type="password" placeholder="••••••••" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box', outline: 'none'}} />
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <a href="/mot-de-passe-oublie" style={{color: '#1a4fba', fontSize: '12px', textDecoration: 'none'}}>Mot de passe oublié ?</a>
                </div>
                <button style={{width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: '#1a4fba', color: 'white', fontSize: '14px', fontWeight: '700', cursor: 'pointer'}}>
                  Se connecter
                </button>
                <p style={{color: '#9ca3af', fontSize: '11px', textAlign: 'center', margin: 0}}>
                  Vous serez redirigé vers votre espace client après connexion.
                </p>
                <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '14px 16px'}}>
                  <p style={{color: '#1e3a5f', fontSize: '12px', fontWeight: '600', marginBottom: '8px'}}>Depuis votre espace client, vous pouvez :</p>
                  {[
                    'Télécharger vos documents en format DOCX',
                    'Poser une question à votre juriste',
                    'Gérer votre abonnement Optimal',
                    'Consulter vos réponses et historique',
                  ].map((item, i) => (
                    <div key={i} style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px'}}>
                      <span style={{color: '#1a4fba', fontSize: '12px', flexShrink: 0}}>✓</span>
                      <span style={{color: '#374151', fontSize: '12px'}}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{color: '#6b7280', fontSize: '12px', textAlign: 'center', margin: 0}}>
                  Pas encore de compte ?{' '}
                  <button onClick={() => setMode('inscription')} style={{color: '#1a4fba', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0}}>
                    Inscription rapide
                  </button>
                </p>
              </div>
            )}

            {/* FORMULAIRE INSCRIPTION */}
            {mode === 'inscription' && (
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <button onClick={() => setMode('choix')} style={{background: 'none', border: 'none', color: '#6b7280', fontSize: '12px', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-start'}}>
                  ← Retour
                </button>
                <div>
                  <h2 style={{fontSize: '1.3rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 4px'}}>Créer mon compte</h2>
                  <p style={{color: '#6b7280', fontSize: '13px', margin: 0}}>Accès immédiat à votre espace client.</p>
                </div>

                {/* CHAMPS OBLIGATOIRES */}
                <div>
                  <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Adresse email *</label>
                  <input type="email" placeholder="votre@email.fr" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Mot de passe *</label>
                    <input type="password" placeholder="••••••••" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                  </div>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Confirmer le mot de passe *</label>
                    <input type="password" placeholder="••••••••" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                  </div>
                </div>

                <div>
                  <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '8px'}}>Vous êtes *</label>
                  <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px'}}>
                    {[
                      { value: 'particulier', label: 'Particulier', icon: <Users size={14} strokeWidth={1.5} /> },
                      { value: 'professionnel', label: 'Professionnel', icon: <Building2 size={14} strokeWidth={1.5} /> },
                      { value: 'association', label: 'Association', icon: <Shield size={14} strokeWidth={1.5} /> },
                      { value: 'collectivite', label: 'Collectivité', icon: <Scale size={14} strokeWidth={1.5} /> },
                    ].map((s) => (
                      <button
                        key={s.value}
                        onClick={() => setStatut(s.value as typeof statut)}
                        style={{padding: '10px', borderRadius: '8px', border: `2px solid ${statut === s.value ? '#1a4fba' : '#e5e7eb'}`, background: statut === s.value ? '#eff6ff' : 'white', color: statut === s.value ? '#1a4fba' : '#374151', fontSize: '12px', fontWeight: statut === s.value ? '700' : '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.15s'}}>
                        {s.icon} {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px'}}>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Prénom *</label>
                    <input type="text" placeholder="Jean" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                  </div>
                  <div>
                    <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Nom *</label>
                    <input type="text" placeholder="Dupont" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                  </div>
                </div>

                {/* CHAMPS OPTIONNELS */}
                <div style={{background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px'}}>
                  <p style={{color: '#6b7280', fontSize: '12px', fontWeight: '600', margin: '0 0 12px'}}>
                    Informations complémentaires <span style={{fontWeight: '400', fontStyle: 'italic'}}>(optionnelles pour l'accès gratuit — requises pour l'Abonnement Optimal et la question payante)</span>
                  </p>

                  <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Rue</label>
                      <input type="text" placeholder="12 rue de la République" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px'}}>
                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Code postal</label>
                        <input type="text" placeholder="75001" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                      </div>
                      <div>
                        <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Ville</label>
                        <input type="text" placeholder="Paris" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                      </div>
                    </div>

                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Téléphone</label>
                      <input type="tel" placeholder="06 00 00 00 00" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                  </div>
                </div>

                {/* CHAMPS SPÉCIFIQUES PAR STATUT */}
                {statut === 'professionnel' && (
                  <div style={{display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb'}}>
                    <p style={{color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: 0}}>Informations professionnelles</p>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Nom commercial *</label>
                      <input type="text" placeholder="Nom de votre entreprise" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Numéro SIRET *</label>
                      <input type="text" placeholder="000 000 000 00000" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                  </div>
                )}

                {statut === 'association' && (
                  <div style={{display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb'}}>
                    <p style={{color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: 0}}>Informations association</p>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Nom de l'association *</label>
                      <input type="text" placeholder="Nom de votre association" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Numéro RNA *</label>
                      <input type="text" placeholder="W000000000" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Numéro SIRET (si applicable)</label>
                      <input type="text" placeholder="000 000 000 00000" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                  </div>
                )}

                {statut === 'collectivite' && (
                  <div style={{display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb'}}>
                    <p style={{color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: 0}}>Informations collectivité</p>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Nom de la collectivité *</label>
                      <input type="text" placeholder="Commune de..." style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Numéro SIRET *</label>
                      <input type="text" placeholder="000 000 000 00000" style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                    <div>
                      <label style={{display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px'}}>Qualité du signataire *</label>
                      <input type="text" placeholder="ex. Maire, DGS, Élu délégué..." style={{width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box'}} />
                    </div>
                  </div>
                )}

                <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                  <input type="checkbox" id="cgu" style={{marginTop: '2px', flexShrink: 0}} />
                  <label htmlFor="cgu" style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
                    J'accepte les <a href="/cgu" style={{color: '#1a4fba'}}>Conditions Générales d'Utilisation</a> et la <a href="/confidentialite" style={{color: '#1a4fba'}}>Politique de confidentialité</a> *
                  </label>
                </div>

                <div style={{display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
                  <input type="checkbox" id="newsletter" defaultChecked={false} style={{marginTop: '2px', flexShrink: 0}} />
                  <label htmlFor="newsletter" style={{color: '#6b7280', fontSize: '12px', lineHeight: '1.6'}}>
                    Je souhaite recevoir la newsletter de Docuthèque (informations juridiques, offres sur nos services et sélections partenaires)
                  </label>
                </div>

                <button style={{width: '100%', padding: '13px', borderRadius: '8px', border: 'none', background: '#1a4fba', color: 'white', fontSize: '14px', fontWeight: '700', cursor: 'pointer'}}>
                  Créer mon compte
                </button>

                <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 14px'}}>
                  <p style={{color: '#15803d', fontSize: '12px', lineHeight: '1.6', margin: '0 0 6px', fontWeight: '600'}}>Après création de votre compte :</p>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px'}}>
                    <span style={{color: '#16a34a', fontSize: '12px', flexShrink: 0}}>✓</span>
                    <span style={{color: '#374151', fontSize: '12px'}}>Accès gratuit immédiat aux documents en accès libre</span>
                  </div>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px'}}>
                    <span style={{color: '#16a34a', fontSize: '12px', flexShrink: 0}}>✓</span>
                    <span style={{color: '#374151', fontSize: '12px'}}>Souscription à l'abonnement Optimal si vous le souhaitez</span>
                  </div>
                  <div style={{display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px'}}>
                    <span style={{color: '#16a34a', fontSize: '12px', flexShrink: 0}}>✓</span>
                    <span style={{color: '#374151', fontSize: '12px'}}>
                      Question unitaire à 47 € · ou incluse dans l'Abonnement Optimal —{' '}
                      <a href="/tarifs" style={{color: '#1a4fba', textDecoration: 'none', fontWeight: '600'}}>Comparer les offres →</a>
                    </span>
                  </div>
                </div>

                <p style={{color: '#6b7280', fontSize: '12px', textAlign: 'center', margin: 0}}>
                  Déjà un compte ?{' '}
                  <button onClick={() => setMode('connexion')} style={{color: '#1a4fba', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0}}>
                    Me connecter
                  </button>
                </p>

                <p style={{color: '#9ca3af', fontSize: '10px', textAlign: 'center', margin: 0, lineHeight: '1.6'}}>
                  * Champs obligatoires · Vos données sont protégées conformément au RGPD · <a href="/confidentialite" style={{color: '#9ca3af'}}>Politique de confidentialité</a>
                </p>
              </div>
            )}

          </div>
        </div>
      </main>
      <FooterMinimal />
    </>
  )
}