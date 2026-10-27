'use client'

// app/espace-mentorat-qualite/page.tsx
// Espace prive du mentorat consultant qualite (transfert de savoir-faire metier,
// mentoring d'affaires et licence d'outils, a destination d'un futur consultant
// en demarche qualite). Accompagnement individuel et a la carte : contenu, rythme
// et priorites sont ajustes au profil, au parcours et a l'experience de chacun.
// Acces reserve aux comptes porteurs du drapeau acces_mentorat_qualite : les autres comptes
// connectes sont rediriges vers l'espace client classique, et inversement (cloisonnement).
// Regles editoriales : zero tiret long, point median pour les separateurs, NBSP avant euro.

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { PROCHAINE_SESSION } from '@/lib/mentorat-session'
import {
  Compass, FolderOpen, ClipboardCheck, LogOut, Download,
  CheckCircle, Clock, AlertCircle, ShieldCheck, BookOpen,
  Users, RefreshCw, FileText, Calendar, Sparkles,
  FileCheck2, ScrollText, Scale, XCircle
} from 'lucide-react'

type ProfilMentorat = {
  id: string
  email: string
  prenom: string
  nom: string
  nom_structure: string | null
  acces_mentorat_qualite: boolean
}

type DossierMentorat = {
  id: string
  montant: number | null
  mode_paiement: string
  statut: string
  created_at: string
}

type FichierMentorat = {
  nom: string
  chemin: string
  url: string
  taille: number | null
  maj: string | null
}

type RubriqueMentorat = {
  nom: string
  fichiers: FichierMentorat[]
}

const STATUTS: Record<string, { label: string; couleur: string; fond: string }> = {
  en_attente: { label: 'En attente de démarrage', couleur: '#b8860b', fond: '#fdf6e3' },
  en_cours: { label: 'Accompagnement en cours', couleur: '#15803d', fond: '#f0fdf4' },
  termine: { label: 'Accompagnement terminé', couleur: '#374151', fond: '#f3f4f6' },
}

// Date de la prochaine session : voir lib/mentorat-session.ts

function formatMontant(montant: number | null): string {
  if (montant == null) return ''
  return montant.toFixed(2).replace('.', ',').replace(/,00$/, '') + '\u00a0\u20ac'
}

function formatDate(iso: string | null): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return ''
  }
}

function formatTaille(octets: number | null): string {
  if (octets == null) return ''
  if (octets < 1024) return `${octets} o`
  if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} Ko`
  return `${(octets / (1024 * 1024)).toFixed(1).replace('.', ',')} Mo`
}

// Profils de depart pour lesquels le parcours se calibre differemment.
// Purement illustratif : affiche pour rappeler que le contenu s'ajuste a la situation de chacun.
const PROFILS_TYPES = [
  'Juriste ou consultant en reconversion',
  'Ancien auditeur ou évaluateur qualité',
  'Organisme de formation cherchant à diversifier son offre',
  'Indépendant du conseil RH ou qualité',
  'Consultant indépendant',
  'Cabinet de gestion administrative',
  "Formateur métier de l'animation",
  'Secrétaire administrative',
  "Agent d'accueil",
  'Traductrice',
]

// Rappel condense de ce que l'accompagnement ne couvre pas (detail complet sur la page publique).
const HORS_PERIMETRE_RESUME = [
  { t: 'Marketing et développement commercial', d: "Pas de stratégie de prospection, de pricing ni d'image de marque." },
  { t: 'Ingénierie pédagogique et animation', d: 'Le prisme reste la preuve documentaire côté évaluateur, pas le métier de formateur.' },
  { t: 'Structuration de votre propre cabinet', d: <>Statut, comptabilité, immatriculation : voir l&apos;offre <a href="/accompagnement-professionnels" style={{ color: '#1a4fba', fontWeight: 600 }}>accompagnement des professionnels</a>.</> },
  { t: "Déploiement d'outils tiers (LMS/ERP)", d: "L'accompagnement s'arrête à la donnée documentaire, pas au paramétrage logiciel." },
  { t: 'Le métier d\u2019auditeur certificateur', d: 'Vous conservez une stricte posture de consultant-préparateur.' },
]

const VOLETS = [
  {
    icone: Compass,
    couleur: '#0f2d6e',
    titre: 'Décryptage et posture',
    sousTitre: 'Le transfert de méthodologie',
    points: [
      'Sessions de travail conjointes pour décortiquer les 32 indicateurs du Référentiel National Qualité, côté évaluateur et non côté apprenant.',
      'Lecture croisée des exigences légales et des attentes concrètes des auditeurs.',
      'Vérification des prérequis administratifs en amont : numéro de déclaration d\u2019activité (NDA), conformité du Bilan Pédagogique et Financier (BPF).',
      'Posture du consultant : mener un audit diagnostic chez votre futur client, identifier les non-conformités.',
      'Analyse des pièges juridiques et administratifs fréquents.',
    ],
    livrable: 'Votre manuel opératoire du consultant : une feuille de route d\u2019intervention prête à l\u2019emploi.',
    surMesure: 'Le nombre de séances et leur contenu s\u2019ajustent à votre expérience préalable de l\u2019audit ou de la formation.',
  },
  {
    icone: FolderOpen,
    couleur: '#1a4fba',
    titre: 'La boîte à outils du consultant',
    sousTitre: 'L\u2019ingénierie documentaire',
    points: [
      'Mise à disposition d\u2019une architecture documentaire complète et paramétrable, sous licence d\u2019utilisation.',
      'Trames prêtes à adapter : règlements intérieurs, conventions, grilles d\u2019évaluation, formulaires de recueil des besoins, registres de sous-traitance.',
      'Documents de conformité RGPD adaptés à l\u2019activité de formation.',
      'L\u2019ensemble est disponible dans l\u2019onglet Boîte à outils de cet espace, à cloner comme base pour vos propres clients.',
    ],
    livrable: null,
    surMesure: 'Les trames fournies en priorité dépendent du secteur et du type de client que vous visez.',
  },
  {
    icone: Users,
    couleur: '#7c3aed',
    titre: 'Le co-pilotage de votre première mission',
    sousTitre: 'La supervision en back-office',
    points: [
      'Vous signez avec votre premier centre de formation ; nous n\u2019intervenons jamais face à votre client final.',
      'Points de supervision à chaque étape clé : après votre diagnostic, lors de la constitution des preuves, avant l\u2019audit blanc.',
      'Posture à adopter le jour de l\u2019audit officiel, et gestion de l\u2019après-visite : analyse du rapport de l\u2019auditeur certificateur, plan d\u2019actions correctives et levée des non-conformités.',
      'Assistance de type maîtrise d\u2019ouvrage en arrière-plan : vous apprenez par la pratique, sécurisé par un contrôle d\u2019expertise discret.',
    ],
    livrable: null,
    surMesure: 'Le niveau de supervision, plus ou moins rapproché, dépend de votre autonomie et de votre parcours.',
  },
  {
    icone: RefreshCw,
    couleur: '#065f46',
    titre: 'Veille et maintien des outils',
    sousTitre: 'Le support juridique et qualité',
    points: [
      'Mise à jour des trames documentaires au fil des évolutions légales, de la jurisprudence et des exigences de France Compétences.',
      'Crédit d\u2019heures mensuel pour vos questions complexes sur des cas clients spécifiques.',
    ],
    livrable: null,
    surMesure: 'Le crédit d\u2019heures mensuel se calibre selon votre rythme d\u2019activité et vos priorités du moment.',
    option: true,
  },
]

export default function EspaceMentoratQualite() {
  const router = useRouter()
  const [onglet, setOnglet] = useState<'programme' | 'outils' | 'suivi'>('programme')
  const [profil, setProfil] = useState<ProfilMentorat | null>(null)
  const [dossiers, setDossiers] = useState<DossierMentorat[]>([])
  const [rubriques, setRubriques] = useState<RubriqueMentorat[]>([])
  const [outilsCharges, setOutilsCharges] = useState(false)
  const [outilsErreur, setOutilsErreur] = useState('')
  const [outilsLoading, setOutilsLoading] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => { checkAuth() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const checkAuth = async () => {
    let session = (await supabase.auth.getSession()).data.session
    if (!session) {
      const { data: refreshed } = await supabase.auth.refreshSession()
      session = refreshed.session
    }
    if (!session) { router.push('/connexion'); return }

    const { data } = await supabase
      .from('users')
      .select('id, email, prenom, nom, nom_structure, acces_mentorat_qualite')
      .eq('id', session.user.id)
      .single()

    // Cloisonnement : sans drapeau mentorat qualite, retour a l'espace client classique.
    if (!data || !data.acces_mentorat_qualite) { router.push('/espace-client'); return }
    setProfil(data)

    const { data: d } = await supabase
      .from('dossiers_mentorat_qualite')
      .select('id, montant, mode_paiement, statut, created_at')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false })
    if (d) setDossiers(d)

    setLoading(false)
  }

  const chargerOutils = useCallback(async () => {
    setOutilsLoading(true)
    setOutilsErreur('')
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/connexion'); return }
      const res = await fetch('/api/mentorat-qualite/documents', {
        headers: { Authorization: `Bearer ${session.access_token}` },
      })
      const data = await res.json()
      if (res.ok && data.rubriques) {
        setRubriques(data.rubriques)
        setOutilsCharges(true)
      } else {
        setOutilsErreur(data.error || 'Le chargement des documents a échoué. Veuillez réessayer.')
      }
    } catch {
      setOutilsErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setOutilsLoading(false)
    }
  }, [router])

  useEffect(() => {
    if (onglet === 'outils' && !outilsCharges && !outilsLoading) chargerOutils()
  }, [onglet, outilsCharges, outilsLoading, chargerOutils])

  const handleDeconnexion = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const dossierActif = dossiers[0] || null
  const statut = dossierActif ? (STATUTS[dossierActif.statut] || STATUTS.en_cours) : null

  const carte: React.CSSProperties = { background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem' }
  const ongletStyle = (actif: boolean): React.CSSProperties => ({
    display: 'inline-flex', alignItems: 'center', gap: '7px',
    padding: '9px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: 700,
    cursor: 'pointer', border: actif ? '1.5px solid #0f2d6e' : '1px solid #d7dce5',
    background: actif ? '#0f2d6e' : 'white', color: actif ? 'white' : '#374151',
    transition: 'all 0.15s',
  })

  if (loading) {
    return (
      <>
        <Header />
        <main style={{ background: '#f7f8fb', minHeight: '100vh' }}>
          <p style={{ textAlign: 'center', color: '#6b7280', padding: '6rem 1rem' }}>Chargement de votre espace...</p>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <style dangerouslySetInnerHTML={{ __html: '@media(max-width:720px){.mentorat-entete{flex-direction:column !important;align-items:flex-start !important;gap:1rem !important}.mentorat-volets{grid-template-columns:1fr !important}}' }} />
      <main style={{ background: '#f7f8fb', minHeight: '100vh', padding: '2.5rem 0 4rem' }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 1.5rem' }}>

          {/* En-tete */}
          <div className="mentorat-entete" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', flexWrap: 'wrap' }}>
                <p style={{ color: '#c8a84b', fontSize: '11px', letterSpacing: '2px', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>
                  Accompagnement individuel · à la carte
                </p>
                <span style={{ background: '#1a4fba18', color: '#1a4fba', fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 12, border: '1px solid #1a4fba30' }}>
                  Sur mesure
                </span>
              </div>
              <h1 style={{ margin: '0 0 6px', color: '#0f2d6e', fontSize: '1.65rem', fontWeight: 700 }}>
                Bienvenue{profil?.prenom ? `, ${profil.prenom}` : ''}
              </h1>
              <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>
                Votre mentorat consultant Qualiopi
                {profil?.nom_structure ? <> · {profil.nom_structure}</> : null}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {statut && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: statut.couleur, background: statut.fond, border: `1px solid ${statut.couleur}33`, borderRadius: '50px', padding: '7px 14px' }}>
                  {dossierActif?.statut === 'termine' ? <CheckCircle size={14} /> : <Clock size={14} />}
                  {statut.label}
                </span>
              )}
              <button onClick={handleDeconnexion} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 600, color: '#6b7280', background: 'white', border: '1px solid #d7dce5', borderRadius: '50px', padding: '8px 14px', cursor: 'pointer' }}>
                <LogOut size={14} /> Me déconnecter
              </button>
            </div>
          </div>

          {/* Prochaine session */}
          <div style={{ background: '#fdf6e3', border: '1px solid #e9d28a', borderRadius: '12px', padding: '14px 18px', marginBottom: '1rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Calendar size={18} style={{ color: '#b8860b', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '12.5px', color: '#6b4f14', lineHeight: 1.7 }}>
              <strong>Prochaine session d&apos;accompagnement : démarrage le {PROCHAINE_SESSION}.</strong>{' '}
              L&apos;accompagnement restant individuel, le rythme des séances qui suivent ce démarrage se cale ensuite sur votre disponibilité et votre progression.
            </p>
          </div>

          {/* Cadre de l'intervention */}
          <div style={{ background: '#eef1fa', border: '1px solid #d3daf0', borderRadius: '12px', padding: '14px 18px', marginBottom: '1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <ShieldCheck size={18} style={{ color: '#0f2d6e', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '12.5px', color: '#1e3a5f', lineHeight: 1.7 }}>
              <strong>Cadre de l&apos;intervention.</strong> Cet accompagnement relève du transfert de savoir-faire métier, du mentoring d&apos;affaires et de la licence d&apos;outils, au service du développement commercial et organisationnel de votre activité de conseil. Il ne constitue pas une action de formation professionnelle. Vos clients restent seuls responsables de l&apos;obtention de leur certification, et vous restez leur unique interlocuteur.
            </p>
          </div>

          {/* Individualisation : profils de depart */}
          <div style={{ ...carte, marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={16} style={{ color: '#c8a84b' }} />
              <h2 style={{ margin: 0, fontSize: '14px', color: '#0f2d6e', fontWeight: 700 }}>Un parcours construit avec vous</h2>
            </div>
            <p style={{ margin: '0 0 12px', fontSize: '12.5px', color: '#374151', lineHeight: 1.7 }}>
              Il n&apos;existe pas de programme standardisé : le contenu, le rythme et les priorités de chaque volet sont ajustés à votre profil de départ, à votre parcours professionnel et à votre expérience du secteur. Les profils suivants illustrent la diversité des points de départ possibles.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PROFILS_TYPES.map((p) => (
                <span key={p} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '20px', padding: '4px 10px', fontSize: '11px', color: '#374151', fontWeight: 500 }}>
                  <span style={{ color: '#16a34a', fontSize: '12px' }}>✓</span>
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Exercice pratique central */}
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem', marginBottom: '1.25rem', borderLeft: '4px solid #7c3aed', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <FileCheck2 size={22} style={{ color: '#7c3aed', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h2 style={{ margin: '0 0 6px', fontSize: '14px', color: '#0f2d6e', fontWeight: 700 }}>Le cœur de votre accompagnement : un dossier Qualiopi fictif</h2>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#374151', lineHeight: 1.7 }}>
                Le montage d&apos;un dossier Qualiopi fictif, pour un centre de formation ou un formateur indépendant, représente la plus grande part du temps consacré à votre accompagnement. Chaque étape (diagnostic, constitution des preuves, audit blanc) est suivie individuellement : toute erreur est corrigée avec vous avant de poursuivre.
              </p>
            </div>
          </div>

          {/* Convention de mentorat */}
          <div style={{ ...carte, marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <ScrollText size={16} style={{ color: '#1a4fba' }} />
              <h2 style={{ margin: 0, fontSize: '14px', color: '#0f2d6e', fontWeight: 700 }}>Votre convention de mentorat</h2>
            </div>
            <p style={{ margin: 0, fontSize: '12.5px', color: '#374151', lineHeight: 1.7 }}>
              Votre accompagnement est encadré par une convention de mentorat (parfois intitulée contrat de prestation de conseil et d&apos;assistance à la création d&apos;une offre de services, ou contrat de mentoring et de licence d&apos;outils), qui précise l&apos;objet de la mission, le rythme, la confidentialité et le partage des responsabilités : vous restez seul responsable, vis-à-vis de vos propres clients, de l&apos;obtention de leur certification.
            </p>
          </div>

          {/* Acces a l'offre juridique du cabinet */}
          <div style={{ background: '#eef1fa', border: '1px solid #d3daf0', borderRadius: '12px', padding: '14px 18px', marginBottom: '1.75rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <Scale size={18} style={{ color: '#0f2d6e', flexShrink: 0, marginTop: '2px' }} />
            <p style={{ margin: 0, fontSize: '12.5px', color: '#1e3a5f', lineHeight: 1.7 }}>
              <strong>Un accès qui dépasse la durée de l&apos;accompagnement.</strong> Pendant votre mentorat, et bien au-delà, vous bénéficiez de l&apos;accès à l&apos;offre juridique du cabinet : <a href="/catalogue" style={{ color: '#1a4fba', fontWeight: 600 }}>modèles de documents sur demande</a>, service <a href="/information-sur-vos-droits" style={{ color: '#1a4fba', fontWeight: 600 }}>information sur vos droits</a>, veille réglementaire. Cet accès continue de vous accompagner lorsque vous monterez vous-même des dossiers Qualiopi pour vos clients, centres de formation et formateurs indépendants.
            </p>
          </div>

          {/* Onglets */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            <button onClick={() => setOnglet('programme')} style={ongletStyle(onglet === 'programme')}><BookOpen size={15} /> Votre programme</button>
            <button onClick={() => setOnglet('outils')} style={ongletStyle(onglet === 'outils')}><FolderOpen size={15} /> Boîte à outils</button>
            <button onClick={() => setOnglet('suivi')} style={ongletStyle(onglet === 'suivi')}><ClipboardCheck size={15} /> Suivi du dossier</button>
          </div>

          {/* Onglet Programme */}
          {onglet === 'programme' && (
            <div className="mentorat-volets" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {VOLETS.map((v, i) => {
                const Icone = v.icone
                return (
                  <div key={i} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: 14, padding: '1.5rem', borderTop: `4px solid ${v.couleur}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '10px', background: v.couleur + '18', color: v.couleur, flexShrink: 0 }}>
                          <Icone size={17} />
                        </span>
                        <div>
                          <p style={{ margin: 0, fontSize: '10.5px', fontWeight: 700, color: v.couleur, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{v.sousTitre}</p>
                          <h2 style={{ margin: '2px 0 0', fontSize: '15px', color: '#0f2d6e', fontWeight: 700 }}>{v.titre}</h2>
                        </div>
                      </div>
                      <span style={{ background: v.option ? '#f3f4f6' : v.couleur + '18', color: v.option ? '#374151' : v.couleur, fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 12, border: v.option ? '1px solid #d1d5db' : `1px solid ${v.couleur}30`, whiteSpace: 'nowrap', flexShrink: 0 }}>
                        {v.option ? 'Option · sur devis' : `Volet ${i + 1}`}
                      </span>
                    </div>
                    <ul style={{ margin: '12px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {v.points.map((p, j) => (
                        <li key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '12.5px', color: '#374151', lineHeight: 1.65 }}>
                          <CheckCircle size={14} style={{ color: v.couleur, flexShrink: 0, marginTop: '3px' }} />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                    {v.livrable && (
                      <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#1e3a5f', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '10px 12px', lineHeight: 1.6 }}>
                        <strong>Livrable :</strong> {v.livrable}
                      </p>
                    )}
                    <p style={{ margin: '10px 0 0', fontSize: '11.5px', color: '#6b7280', fontStyle: 'italic', lineHeight: 1.6 }}>
                      Sur mesure : {v.surMesure}
                    </p>
                  </div>
                )
              })}
            </div>
          )}

          {/* Rappel du hors-perimetre, en complement du programme */}
          {onglet === 'programme' && (
            <div style={{ ...carte, marginTop: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <XCircle size={16} style={{ color: '#9ca3af' }} />
                <h2 style={{ margin: 0, fontSize: '13px', color: '#0f2d6e', fontWeight: 700 }}>Pour rappel, ce que cet accompagnement ne couvre pas</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                {HORS_PERIMETRE_RESUME.map((item, i) => (
                  <div key={i} style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 8, padding: '10px 12px' }}>
                    <p style={{ margin: '0 0 3px', fontSize: '11.5px', fontWeight: 700, color: '#374151' }}>{item.t}</p>
                    <p style={{ margin: 0, fontSize: '11px', color: '#6b7280', lineHeight: 1.6 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Onglet Boite a outils */}
          {onglet === 'outils' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {outilsLoading && (
                <p style={{ textAlign: 'center', color: '#6b7280', padding: '3rem 1rem', margin: 0 }}>Chargement de votre boîte à outils...</p>
              )}
              {!outilsLoading && outilsErreur && (
                <div style={{ ...carte, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <AlertCircle size={18} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#374151' }}>{outilsErreur}</p>
                    <button onClick={chargerOutils} style={{ fontSize: '12px', fontWeight: 600, color: '#0f2d6e', background: 'white', border: '1px solid #d7dce5', borderRadius: '50px', padding: '7px 14px', cursor: 'pointer' }}>Réessayer</button>
                  </div>
                </div>
              )}
              {!outilsLoading && !outilsErreur && outilsCharges && rubriques.length === 0 && (
                <div style={carte}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6b7280', lineHeight: 1.7 }}>
                    Votre boîte à outils est en cours de constitution. Les trames documentaires y seront déposées au fil de votre accompagnement, sélectionnées selon votre secteur cible ; vous serez informé de chaque mise à disposition.
                  </p>
                </div>
              )}
              {!outilsLoading && rubriques.map((r, i) => (
                <div key={i} style={carte}>
                  <h2 style={{ margin: '0 0 4px', fontSize: '15px', color: '#0f2d6e', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FolderOpen size={16} style={{ color: '#c8a84b' }} /> {r.nom}
                  </h2>
                  <p style={{ margin: '0 0 12px', fontSize: '11.5px', color: '#9aa2b1' }}>
                    {r.fichiers.length} document{r.fichiers.length > 1 ? 's' : ''} · liens de téléchargement valables 1&nbsp;heure, rechargez la page au besoin
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {r.fichiers.map((f, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderTop: j === 0 ? 'none' : '1px solid #f1f3f7' }}>
                        <FileText size={15} style={{ color: '#6b7280', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ margin: 0, fontSize: '13px', color: '#1f2937', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.nom}</p>
                          <p style={{ margin: 0, fontSize: '11px', color: '#9aa2b1' }}>
                            {formatTaille(f.taille)}{f.taille != null && f.maj ? ' · ' : ''}{f.maj ? `mis à jour le ${formatDate(f.maj)}` : ''}
                          </p>
                        </div>
                        <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'white', background: '#0f2d6e', borderRadius: '50px', padding: '8px 14px', textDecoration: 'none', flexShrink: 0 }}>
                          <Download size={13} /> Télécharger
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {!outilsLoading && rubriques.length > 0 && (
                <p style={{ margin: 0, fontSize: '11.5px', color: '#9aa2b1', lineHeight: 1.7 }}>
                  Ces trames vous sont fournies sous licence d&apos;utilisation dans le cadre de votre accompagnement : vous pouvez les adapter et les déployer chez vos propres clients.
                </p>
              )}
            </div>
          )}

          {/* Onglet Suivi */}
          {onglet === 'suivi' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {dossiers.length === 0 && (
                <div style={carte}>
                  <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>
                    Aucun dossier enregistré pour le moment. Si vous venez de régler votre accompagnement, patientez quelques minutes puis rechargez la page.
                  </p>
                </div>
              )}
              {dossiers.map((d) => {
                const s = STATUTS[d.statut] || STATUTS.en_cours
                return (
                  <div key={d.id} style={carte}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                      <div>
                        <h2 style={{ margin: '0 0 4px', fontSize: '15px', color: '#0f2d6e', fontWeight: 700 }}>Mentorat consultant Qualiopi</h2>
                        <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>
                          Souscrit le {formatDate(d.created_at)}
                          {d.montant != null ? <> · {formatMontant(d.montant)}</> : null}
                          {' '}· règlement par {d.mode_paiement === 'virement' ? 'virement' : 'carte'}
                        </p>
                      </div>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: s.couleur, background: s.fond, border: `1px solid ${s.couleur}33`, borderRadius: '50px', padding: '7px 14px' }}>
                        {d.statut === 'termine' ? <CheckCircle size={14} /> : <Clock size={14} />}
                        {s.label}
                      </span>
                    </div>
                  </div>
                )
              })}
              <div style={carte}>
                <h2 style={{ margin: '0 0 8px', fontSize: '14px', color: '#0f2d6e', fontWeight: 700 }}>Une question sur votre accompagnement ?</h2>
                <p style={{ margin: 0, fontSize: '12.5px', color: '#374151', lineHeight: 1.7 }}>
                  Les points de supervision se planifient directement avec notre juriste, au rythme qui convient à votre progression. Pour toute demande entre deux sessions, utilisez le <a href="/contact" style={{ color: '#1a4fba', fontWeight: 600 }}>formulaire de contact</a> ou répondez à l&apos;un de nos emails : votre crédit d&apos;heures mensuel couvre l&apos;étude de vos cas clients spécifiques.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
      <FooterMinimal />
    </>
  )
}
