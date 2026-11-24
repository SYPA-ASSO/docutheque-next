'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Scale, UserCheck, Shield, Clock, Lock, Building2, Users, PenLine, KeyRound, AlertCircle, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import GoogleAvis from '@/components/GoogleAvis'
import FooterMinimal from '@/components/FooterMinimal'
import { supabase } from '@/lib/supabase'
import { PhoneInput, PAYS_PREFIXES } from '@/components/PhoneInput'

export default function Connexion() {
  const router = useRouter()
  const [mode, setMode] = useState<'choix' | 'connexion' | 'inscription'>('choix')
  const [statut, setStatut] = useState<'particulier' | 'professionnel' | 'association' | 'collectivite'>('particulier')
  const [loading, setLoading] = useState(false)
  const [erreur, setErreur] = useState('')
  const [succes, setSucces] = useState('')

  // Champs connexion
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  // Champs inscription
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [prenom, setPrenom] = useState('')
  const [nom, setNom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [rue, setRue] = useState('')
  const [codePostal, setCodePostal] = useState('')
  const [ville, setVille] = useState('')
  const [nomStructure, setNomStructure] = useState('')
  const [siret, setSiret] = useState('')
  const [rna, setRna] = useState('')
  const [qualite, setQualite] = useState('')
  const [cguAccepte, setCguAccepte] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  const [telephonePrefixe, setTelephonePrefixe] = useState('+33')

  const handleConnexion = async (e: React.FormEvent) => {
    e.preventDefault()
    setErreur('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginEmail,
        password: loginPassword,
      })

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          setErreur('Email ou mot de passe incorrect.')
        } else if (error.message.includes('not confirmed')) {
          setErreur("Votre compte n'est pas encore activé. Cliquez sur le lien d'activation reçu par email lors de votre inscription.")
        } else {
          setErreur(error.message)
        }
        return
      }

      // Aiguillage selon le type d'espace : un compte mentorat qualite est dirigé
      // vers son espace dédié, les autres comptes vers l'espace client classique.
      const { data: sessionData } = await supabase.auth.getSession()
      const uid = sessionData.session?.user.id
      if (uid) {
        const { data: u } = await supabase
          .from('users')
          .select('acces_mentorat_qualite')
          .eq('id', uid)
          .maybeSingle()
        if (u && u.acces_mentorat_qualite) {
          router.push('/espace-mentorat-qualite')
          return
        }
      }
      router.push('/espace-client')
    } catch {
      setErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const handleInscription = async (e: React.FormEvent) => {
    e.preventDefault()
    setErreur('')

    if (!prenom || !nom || !email || !password) {
      setErreur('Veuillez remplir tous les champs obligatoires.')
      return
    }
    if (password !== passwordConfirm) {
      setErreur('Les mots de passe ne correspondent pas.')
      return
    }
    if (password.length < 8) {
      setErreur('Le mot de passe doit contenir au moins 8 caractères.')
      return
    }
    if (!cguAccepte) {
      setErreur('Vous devez accepter les CGU pour créer un compte.')
      return
    }

    setLoading(true)

    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email, password, prenom, nom,
          type: statut,
          telephone: telephone ? `${telephonePrefixe} ${telephone}` : '',
          rue,
          code_postal: codePostal, ville,
          nom_structure: nomStructure,
          siret, rna, newsletter,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.error?.includes('already registered') || data.error?.includes('already been registered')) {
          setErreur('Un compte existe déjà avec cette adresse email.')
        } else {
          setErreur(data.error || 'Erreur lors de la création du compte.')
        }
        return
      }

      // Compte créé non confirmé : pas de connexion automatique.
      // On renvoie vers le formulaire de connexion avec un message d'activation, email pré-rempli.
      setLoginEmail(email)
      setSucces("Compte créé. Un email d'activation vient d'être envoyé à " + email + ". Cliquez sur le lien qu'il contient pour activer votre compte, puis connectez-vous.")
      setMode('connexion')
    } catch {
      setErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '13px',
    boxSizing: 'border-box' as const,
    outline: 'none',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600' as const,
    color: '#374151',
    marginBottom: '6px',
  }

  return (
    <>
      <Header />
      <style dangerouslySetInnerHTML={{ __html: '@media(max-width:820px){.cx-wrap{flex-direction:column !important;align-items:stretch !important;gap:1.25rem !important}.cx-aside{flex:none !important;position:static !important;top:auto !important;order:2 !important;padding:1.75rem !important}.cx-form{flex:none !important;order:1 !important;padding:1.75rem !important}.cx-2col{grid-template-columns:1fr !important}}' }} />
      <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '3rem 0' }}>
        <div className="cx-wrap" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

          {/* COLONNE GAUCHE */}
          <div className="cx-aside" style={{ flex: '0 0 380px', background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '16px', padding: '2.5rem', position: 'sticky', top: '80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Scale size={18} color="white" strokeWidth={1.5} />
              </div>
              <span style={{ color: 'white', fontWeight: '700', fontSize: '15px' }}>Cabinet Cholez-Pagotto</span>
            </div>
            <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: '700', lineHeight: '1.4', marginBottom: '8px' }}>
              Vos documents juridiques et vos droits expliqués, sans jargon.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.7', marginBottom: '28px' }}>
              Accédez à votre espace client pour télécharger vos documents, poser vos questions et gérer votre abonnement.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {[
                { label: 'Compte gratuit', desc: "Espace client, achat de documents à l'unité, newsletter. Modèles gratuits fournis sur demande.", color: '#4ade80' },
                { label: 'Abonnement Optimal', desc: 'Bibliothèque complète de documents juridiques, 1 question juriste incluse par mois, non cumulable. À partir de 17,90 €/mois ou 149 €/an.', color: '#93c5fd' },
                { label: 'Information sur vos droits', desc: 'Une question, une réponse rédigée par un juriste sous 24 à 48h. 47 € à l\'unité, sans abonnement. Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971 et ne constitue pas une consultation juridique personnalisée.', color: '#fcd34d' },
              ].map((offre, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 14px' }}>
                  <p style={{ color: offre.color, fontSize: '12px', fontWeight: '700', margin: '0 0 3px' }}>{offre.label}</p>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px', margin: 0, lineHeight: '1.5' }}>{offre.desc}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: <UserCheck size={16} color="#93c5fd" strokeWidth={1.5} />, text: '100% humain, zéro intelligence artificielle' },
                { icon: <Shield size={16} color="#93c5fd" strokeWidth={1.5} />, text: 'Paiement sécurisé · CB et virement' },
                { icon: <Clock size={16} color="#93c5fd" strokeWidth={1.5} />, text: 'Réponse juriste sous 24 à 48h' },
                { icon: <Lock size={16} color="#93c5fd" strokeWidth={1.5} />, text: 'Données personnelles protégées (RGPD)' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  {item.icon}
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px' }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '16px' }}>
              <GoogleAvis variant="compact" />
            </div>
          </div>

          {/* COLONNE DROITE */}
          <div className="cx-form" style={{ flex: 1, background: 'white', borderRadius: '16px', padding: '2.5rem', border: '1px solid #e5e7eb' }}>

            {/* ERREUR / SUCCÈS GLOBAUX */}
            {erreur && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px 14px', marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <AlertCircle size={16} color="#dc2626" style={{ flexShrink: 0, marginTop: '1px' }} />
                <p style={{ color: '#dc2626', fontSize: '13px', margin: 0 }}>{erreur}</p>
              </div>
            )}
            {succes && (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 14px', marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '1px' }} />
                <p style={{ color: '#15803d', fontSize: '13px', margin: 0 }}>{succes}</p>
              </div>
            )}

            {/* ÉCRAN DE CHOIX */}
            {mode === 'choix' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 6px' }}>Bienvenue sur votre espace client</h2>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>Pour commencer, dites-nous où vous en êtes :</p>
                </div>
                <button
                  onClick={() => { setMode('inscription'); setErreur(''); setSucces('') }}
                  style={{ width: '100%', background: 'white', border: '2px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1a4fba'; (e.currentTarget as HTMLButtonElement).style.background = '#eff6ff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.background = 'white' }}
                >
                  <div style={{ width: '48px', height: '48px', background: '#eff6ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <PenLine size={24} color="#1a4fba" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px' }}>C'est ma première visite</p>
                    <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 8px', lineHeight: '1.5' }}>Je n'ai pas encore de compte et je souhaite en créer un.</p>
                    <span style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '600' }}>Créer mon compte →</span>
                  </div>
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
                  <span style={{ color: '#9ca3af', fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em' }}>OU</span>
                  <div style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
                </div>
                <button
                  onClick={() => { setMode('connexion'); setErreur(''); setSucces('') }}
                  style={{ width: '100%', background: 'white', border: '2px solid #e5e7eb', borderRadius: '14px', padding: '1.75rem', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#1a4fba'; (e.currentTarget as HTMLButtonElement).style.background = '#eff6ff' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb'; (e.currentTarget as HTMLButtonElement).style.background = 'white' }}
                >
                  <div style={{ width: '48px', height: '48px', background: '#f0fdf4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <KeyRound size={24} color="#16a34a" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px' }}>J'ai déjà un compte</p>
                    <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 8px', lineHeight: '1.5' }}>Je suis déjà inscrit et je souhaite accéder à mon espace client.</p>
                    <span style={{ color: '#16a34a', fontSize: '12px', fontWeight: '600' }}>Me connecter →</span>
                  </div>
                </button>
                <p style={{ color: '#9ca3af', fontSize: '11px', textAlign: 'center', margin: 0, lineHeight: '1.6' }}>
                  Vos données sont protégées conformément au RGPD · <a href="/confidentialite" style={{ color: '#9ca3af' }}>Politique de confidentialité</a>
                </p>
              </div>
            )}

            {/* FORMULAIRE CONNEXION */}
            {mode === 'connexion' && (
              <form onSubmit={handleConnexion} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <button type="button" onClick={() => { setMode('choix'); setErreur('') }} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '12px', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-start' }}>
                  â† Retour
                </button>
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 4px' }}>Accédez à votre espace client</h2>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>Renseignez vos identifiants pour accéder à vos documents et à votre suivi.</p>
                </div>
                <div>
                  <label style={labelStyle}>Adresse email *</label>
                  <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="votre@email.fr" required style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Mot de passe *</label>
                  <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="••••••••" required style={inputStyle} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="/mot-de-passe-oublie" style={{ color: '#1a4fba', fontSize: '12px', textDecoration: 'none' }}>Mot de passe oublié ?</a>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', background: loading ? '#6b7280' : '#1a4fba', color: 'white', fontSize: '14px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Connexion en cours...' : 'Se connecter'}
                </button>
                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '14px 16px' }}>
                  <p style={{ color: '#1e3a5f', fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Depuis votre espace client, vous pouvez :</p>
                  {['Télécharger vos documents en format DOCX', 'Poser une question à votre juriste', 'Gérer votre abonnement Optimal', 'Consulter vos réponses et historique'].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <span style={{ color: '#1a4fba', fontSize: '12px', flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#374151', fontSize: '12px' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <p style={{ color: '#6b7280', fontSize: '12px', textAlign: 'center', margin: 0 }}>
                  Pas encore de compte ?{' '}
                  <button type="button" onClick={() => { setMode('inscription'); setErreur('') }} style={{ color: '#1a4fba', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0 }}>
                    Inscription rapide
                  </button>
                </p>
              </form>
            )}

            {/* FORMULAIRE INSCRIPTION */}
            {mode === 'inscription' && (
              <form onSubmit={handleInscription} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <button type="button" onClick={() => { setMode('choix'); setErreur('') }} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: '12px', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '4px', alignSelf: 'flex-start' }}>
                  â† Retour
                </button>
                <div>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f2d6e', margin: '0 0 4px' }}>Créer mon compte</h2>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>Accès immédiat à votre espace client.</p>
                </div>

                <div>
                  <label style={labelStyle}>Adresse email *</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="votre@email.fr" required style={inputStyle} />
                </div>

                <div className="cx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Mot de passe *</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required minLength={8} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Confirmer le mot de passe *</label>
                    <input type="password" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} placeholder="••••••••" required style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Vous êtes *</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                    {[
                      { value: 'particulier', label: 'Particulier', icon: <Users size={14} strokeWidth={1.5} /> },
                      { value: 'professionnel', label: 'Professionnel', icon: <Building2 size={14} strokeWidth={1.5} /> },
                      { value: 'association', label: 'Association', icon: <Shield size={14} strokeWidth={1.5} /> },
                      { value: 'collectivite', label: 'Collectivité', icon: <Scale size={14} strokeWidth={1.5} /> },
                    ].map((s) => (
                      <button key={s.value} type="button" onClick={() => {
                        // Reinitialise les champs propres a un statut professionnel/association/collectivite
                        // pour eviter qu'une valeur saisie puis abandonnee (ex. SIRET tape puis retour a
                        // "Particulier") ne soit envoyee malgre tout a l'inscription.
                        setStatut(s.value as typeof statut)
                        if (s.value === 'particulier') {
                          setNomStructure(''); setSiret(''); setRna(''); setQualite('')
                        }
                      }}
                        style={{ padding: '10px', borderRadius: '8px', border: `2px solid ${statut === s.value ? '#1a4fba' : '#e5e7eb'}`, background: statut === s.value ? '#eff6ff' : 'white', color: statut === s.value ? '#1a4fba' : '#374151', fontSize: '12px', fontWeight: statut === s.value ? '700' : '500', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.15s' }}>
                        {s.icon} {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="cx-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Prénom *</label>
                    <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)} placeholder="Jean" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Nom *</label>
                    <input type="text" value={nom} onChange={e => setNom(e.target.value)} placeholder="Dupont" required style={inputStyle} />
                  </div>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px' }}>
                  <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '600', margin: '0 0 12px' }}>
                    Informations complémentaires <span style={{ fontWeight: '400', fontStyle: 'italic' }}>(optionnelles pour le compte gratuit, requises pour l'Abonnement Optimal et la question payante)</span>
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div>
                      <label style={labelStyle}>Rue</label>
                      <input type="text" value={rue} onChange={e => setRue(e.target.value)} placeholder="12 rue de la République" style={inputStyle} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
                      <div>
                        <label style={labelStyle}>Code postal</label>
                        <input type="text" value={codePostal} onChange={e => setCodePostal(e.target.value)} placeholder="75001" style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>Ville</label>
                        <input type="text" value={ville} onChange={e => setVille(e.target.value)} placeholder="Paris" style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>Téléphone</label>
                      <PhoneInput
                        prefixe={telephonePrefixe}
                        onPrefixeChange={setTelephonePrefixe}
                        numero={telephone}
                        onNumeroChange={setTelephone}
                      />
                    </div>
                  </div>
                </div>

                {statut === 'professionnel' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb' }}>
                    <p style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: 0 }}>Informations professionnelles</p>
                    <div>
                      <label style={labelStyle}>Nom commercial *</label>
                      <input type="text" value={nomStructure} onChange={e => setNomStructure(e.target.value)} placeholder="Nom de votre entreprise" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Numéro SIRET *</label>
                      <input type="text" value={siret} onChange={e => setSiret(e.target.value)} placeholder="000 000 000 00000" style={inputStyle} />
                    </div>
                  </div>
                )}

                {statut === 'association' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb' }}>
                    <p style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: 0 }}>Informations association</p>
                    <div>
                      <label style={labelStyle}>Nom de l'association *</label>
                      <input type="text" value={nomStructure} onChange={e => setNomStructure(e.target.value)} placeholder="Nom de votre association" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Numéro RNA *</label>
                      <input type="text" value={rna} onChange={e => setRna(e.target.value)} placeholder="W000000000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Numéro SIRET (si applicable)</label>
                      <input type="text" value={siret} onChange={e => setSiret(e.target.value)} placeholder="000 000 000 00000" style={inputStyle} />
                    </div>
                  </div>
                )}

                {statut === 'collectivite' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', borderRadius: '10px', padding: '16px', border: '1px solid #e5e7eb' }}>
                    <p style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: 0 }}>Informations collectivité</p>
                    <div>
                      <label style={labelStyle}>Nom de la collectivité *</label>
                      <input type="text" value={nomStructure} onChange={e => setNomStructure(e.target.value)} placeholder="Commune de..." style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Numéro SIRET *</label>
                      <input type="text" value={siret} onChange={e => setSiret(e.target.value)} placeholder="000 000 000 00000" style={inputStyle} />
                    </div>
                    <div>
                      <label style={labelStyle}>Qualité du signataire *</label>
                      <input type="text" value={qualite} onChange={e => setQualite(e.target.value)} placeholder="ex. Maire, DGS, Élu délégué..." style={inputStyle} />
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <input type="checkbox" id="cgu" checked={cguAccepte} onChange={e => setCguAccepte(e.target.checked)} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <label htmlFor="cgu" style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6' }}>
                    J'accepte les <a href="/cgu" style={{ color: '#1a4fba' }}>Conditions Générales d'Utilisation</a> et la <a href="/confidentialite" style={{ color: '#1a4fba' }}>Politique de confidentialité</a> *
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <input type="checkbox" id="newsletter" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} style={{ marginTop: '2px', flexShrink: 0 }} />
                  <label htmlFor="newsletter" style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6' }}>
                    Je souhaite recevoir la newsletter du cabinet (informations juridiques, offres sur nos services)
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{ width: '100%', padding: '13px', borderRadius: '8px', border: 'none', background: loading ? '#6b7280' : '#1a4fba', color: 'white', fontSize: '14px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? 'Création en cours...' : 'Créer mon compte'}
                </button>

                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 14px' }}>
                  <p style={{ color: '#15803d', fontSize: '12px', lineHeight: '1.6', margin: '0 0 6px', fontWeight: '600' }}>Après création de votre compte :</p>
                  {[
                    "Espace client, achat de documents à l'unité et newsletter",
                    'Souscription à l\'abonnement Optimal si vous le souhaitez',
                    'Question unitaire à 47 € · ou incluse dans l\'Abonnement Optimal.',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <span style={{ color: '#16a34a', fontSize: '12px', flexShrink: 0 }}>✓</span>
                      <span style={{ color: '#374151', fontSize: '12px' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <p style={{ color: '#6b7280', fontSize: '12px', textAlign: 'center', margin: 0 }}>
                  Déjà un compte ?{' '}
                  <button type="button" onClick={() => { setMode('connexion'); setErreur('') }} style={{ color: '#1a4fba', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0 }}>
                    Me connecter
                  </button>
                </p>
                <p style={{ color: '#9ca3af', fontSize: '10px', textAlign: 'center', margin: 0, lineHeight: '1.6' }}>
                  * Champs obligatoires · Vos données sont protégées conformément au RGPD · <a href="/confidentialite" style={{ color: '#9ca3af' }}>Politique de confidentialité</a>
                </p>
              </form>
            )}

          </div>
        </div>
      </main>
      <FooterMinimal />
    </>
  )
}
