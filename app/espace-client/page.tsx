'use client'

import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { formatPrix } from '@/lib/format'
import type { DocItem, Categorie } from '@/lib/types'
import { DIAGNOSTIC_FORFAITS } from '@/lib/diagnostic-forfaits'
import { AVIS_GOOGLE } from '@/lib/avis-google'
import Header from '@/components/Header'
import FooterMinimal from '@/components/FooterMinimal'
import { CategorySearch } from '@/components/CategorySearch'
import { DocumentSearch } from '@/components/DocumentSearch'
import { PhoneInput } from '@/components/PhoneInput'
import {
  User, FileText, Package, MessageSquare, Shield, LogOut,
  Crown, Clock, CheckCircle, AlertCircle, Lock,
  ChevronRight, Calendar, Star, Zap, TrendingUp,
  ShoppingBag, Receipt, Download, Filter, Send,
  Upload, Trash2, FolderSync
} from 'lucide-react'

type UserProfile = {
  id: string
  email: string
  prenom: string
  nom: string
  type: string
  telephone: string | null
  rue: string | null
  code_postal: string | null
  ville: string | null
  abonnement_actif: boolean
  abonnement_type: string | null
  abonnement_periode: string | null
  date_expiration: string | null
  stripe_customer_id: string | null
  resiliation_programmee: boolean | null
  resiliation_fin: string | null
  avis_google_propose: boolean | null
}

type Question = {
  id: string
  question: string | null
  reponse: string | null
  statut: string
  type: string
  created_at: string
  repondu_at: string | null
  stripe_payment_id: string | null
}

type Facture = {
  id: string
  facture_url: string
  montant: number | null
  type: string | null
  created_at: string
}

type DossierAssurance = {
  id: string
  statut: string
  type: string
  created_at: string
  stripe_payment_id: string | null
}

type DossierRgpd = {
  id: string
  forfait: string
  montant: number | null
  mode_paiement: string
  reference: string | null
  statut: string
  livrable_url: string | null
  created_at: string
}

function formatTailleFichier(octets: number | null): string {
  if (octets == null) return ''
  if (octets < 1024) return `${octets} o`
  if (octets < 1024 * 1024) return `${Math.round(octets / 1024)} Ko`
  return `${(octets / (1024 * 1024)).toFixed(1).replace('.', ',')} Mo`
}

function formatDateFichier(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
  } catch {
    return iso
  }
}

export default function EspaceClient() {
  const router = useRouter()
  const [onglet, setOnglet] = useState<'tableau-bord' | 'questions' | 'documents' | 'echanges' | 'commandes' | 'factures' | 'abonnement' | 'profil'>('tableau-bord')
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [factures, setFactures] = useState<Facture[]>([])
  const [fichiersPartages, setFichiersPartages] = useState<{ id: string; nom: string; taille: number | null; typeMime: string | null; deposePar: 'client' | 'cabinet'; creeLe: string; url: string | null }[]>([])
  const [fichiersPartagesCharges, setFichiersPartagesCharges] = useState(false)
  const [fichiersPartagesLoading, setFichiersPartagesLoading] = useState(false)
  const [fichiersPartagesErreur, setFichiersPartagesErreur] = useState('')
  const [uploadEnCours, setUploadEnCours] = useState(false)
  const [dossiers, setDossiers] = useState<DossierAssurance[]>([])
  const [dossiersRgpd, setDossiersRgpd] = useState<DossierRgpd[]>([])
  const [catalogue, setCatalogue] = useState<DocItem[]>([])
  const [catalogueFiltre, setCatalogueFiltre] = useState<DocItem[]>([])
  const [categoriesFiltres, setCategoriesFiltres] = useState<string[]>([])
  const [categoriesCatalogue, setCategoriesCatalogue] = useState<Categorie[]>([])
  const [loading, setLoading] = useState(true)
  const [periodeChoisie, setPeriodeChoisie] = useState<'monthly' | 'yearly'>('yearly')
  const [downloadEnCours, setDownloadEnCours] = useState<string | null>(null)
  const [factureEnCours, setFactureEnCours] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState('')

  // Saisie de question
  const [questionSaisie, setQuestionSaisie] = useState<{ id: string; type: string } | null>(null)
  const [questionTexte, setQuestionTexte] = useState('')
  const [questionErreur, setQuestionErreur] = useState('')
  const [questionLoading, setQuestionLoading] = useState(false)

  // Question incluse (gratuite) et resiliation en ligne
  const [questionInclLoading, setQuestionInclLoading] = useState(false)
  const [resiliationEtape, setResiliationEtape] = useState<0 | 1 | 2>(0)
  const [resiliationLoading, setResiliationLoading] = useState(false)
  const [resiliationErreur, setResiliationErreur] = useState('')

  // Achat de document a l'unite
  const [documentsAchetes, setDocumentsAchetes] = useState<Record<string, string>>({})
  const [achatDoc, setAchatDoc] = useState<DocItem | null>(null)
  const [achatLoading, setAchatLoading] = useState(false)
  const [achatErreur, setAchatErreur] = useState('')
  const [achatReference, setAchatReference] = useState('')

  useEffect(() => { checkAuth() }, [])

  // Lecture des paramètres URL après chargement
  useEffect(() => {
    if (!loading) {
      const params = new URLSearchParams(window.location.search)
      const ongletParam = params.get('onglet')
      const validOnglets = ['tableau-bord', 'questions', 'documents', 'echanges', 'commandes', 'factures', 'abonnement', 'profil']
      if (ongletParam && validOnglets.includes(ongletParam)) {
        setOnglet(ongletParam as typeof onglet)
      }
      if (params.get('success') === 'abonnement') {
        setSuccessMessage('Votre abonnement est maintenant actif. Bienvenue dans Optimal !')
      }
      if (params.get('achat') === 'succes') {
        setSuccessMessage('Paiement reçu. Votre document est disponible dans l\'onglet Documents.')
      }
      // Nettoyer l'URL
      window.history.replaceState({}, '', '/espace-client')
    }
  }, [loading])

  const checkAuth = async () => {
    let session = (await supabase.auth.getSession()).data.session
    if (!session) {
      const { data: refreshed } = await supabase.auth.refreshSession()
      session = refreshed.session
    }
    if (!session) { router.push('/connexion'); return }
    await Promise.all([
      loadProfile(session.user.id),
      loadQuestions(session.user.id),
      loadFactures(session.user.id),
      loadDossiers(session.user.id),
      loadDossiersRgpd(session.user.id),
      loadAchats(session.user.id),
      loadCatalogue(),
    ])
    setLoading(false)
  }

  const loadProfile = async (userId: string) => {
    const { data } = await supabase.from('users').select('*').eq('id', userId).single()
    // Cloisonnement : un compte mentorat qualite n'accède pas à l'espace client classique.
    if (data && data.acces_mentorat_qualite) { router.push('/espace-mentorat-qualite'); return }
    if (data) setProfile(data)
  }

  const loadQuestions = async (userId: string) => {
    const { data } = await supabase.from('questions').select('*').eq('user_id', userId).order('created_at', { ascending: false })
    if (data) setQuestions(data)
  }

  const loadFactures = async (userId: string) => {
    const { data } = await supabase.from('factures').select('*').eq('user_id', userId).order('created_at', { ascending: false })
    if (data) setFactures(data)
  }

  const loadDossiers = async (userId: string) => {
    const { data } = await supabase.from('dossiers_assurances').select('*').eq('user_id', userId).order('created_at', { ascending: false })
    if (data) setDossiers(data)
  }

  const loadDossiersRgpd = async (userId: string) => {
    const { data } = await supabase.from('dossiers_rgpd').select('*').eq('user_id', userId).order('created_at', { ascending: false })
    if (data) setDossiersRgpd(data)
  }

  const loadAchats = async (userId: string) => {
    const { data } = await supabase.from('achats_documents').select('document_id, statut').eq('user_id', userId)
    if (data) {
      const map: Record<string, string> = {}
      for (const a of data) { if (a.document_id) map[a.document_id] = a.statut }
      setDocumentsAchetes(map)
    }
  }

  const loadCatalogue = async () => {
    const { data: docs } = await supabase.from('documents').select('*').eq('actif', true).order('ordre', { ascending: true })
    const { data: cats } = await supabase.from('categories').select('id, nom, ordre, mots_cles').order('ordre', { ascending: true })
    if (docs) { setCatalogue(docs); setCatalogueFiltre(docs) }
    if (cats) setCategoriesCatalogue(cats)
  }

  const handleDeconnexion = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  // Invitation a laisser un avis Google : reste affichee en permanence, tant que le
  // cabinet ne l'a pas desactivee manuellement depuis l'admin (avis_google_propose),
  // en constatant l'avis directement sur la fiche Google. Le client ne peut plus la
  // masquer lui-meme : ouvrir le lien ne dit rien sur le fait qu'il ait ete au bout.
  const ouvrirAvisGoogle = () => {
    window.open(AVIS_GOOGLE.lien, '_blank', 'noopener,noreferrer')
  }

  const handlePaiement = async (priceKey: string) => {
    if (!profile) return
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        priceKey,
        userEmail: profile.email,
        userId: profile.id,
      }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
  }

  // Poser une question : gratuite si la question incluse du mois est disponible, sinon payante
  const poserQuestion = async () => {
    if (questionIncluseDisponible) {
      if (!profile) return
      setQuestionInclLoading(true)
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) { router.push('/connexion'); return }
        const res = await fetch('/api/questions/incluse', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${session.access_token}` },
        })
        const data = await res.json()
        if (res.ok && data.success) {
          await loadQuestions(profile.id)
          setOnglet('questions')
          if (data.questionId) {
            setQuestionSaisie({ id: data.questionId, type: 'incluse' })
            setQuestionTexte('')
            setQuestionErreur('')
          }
        } else {
          alert(data.error || 'Votre question incluse de ce mois a deja ete utilisee.')
          await loadQuestions(profile.id)
        }
      } catch {
        alert('Une erreur est survenue. Veuillez reessayer.')
      } finally {
        setQuestionInclLoading(false)
      }
      return
    }
    handlePaiement(estAbonne ? 'question_abonne' : 'question_unitaire')
  }

  // Resiliation en ligne de l'abonnement (article L215-1-1 du Code de la consommation)
  const handleResiliation = async () => {
    setResiliationLoading(true)
    setResiliationErreur('')
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/connexion'); return }
      const res = await fetch('/api/compte/resilier', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${session.access_token}` },
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setResiliationEtape(2)
        if (profile) await loadProfile(profile.id)
      } else {
        setResiliationErreur(data.error || 'La resiliation a echoue. Veuillez reessayer ou nous contacter.')
      }
    } catch {
      setResiliationErreur('Une erreur est survenue. Veuillez reessayer.')
    } finally {
      setResiliationLoading(false)
    }
  }

  // Achat d'un document a l'unite : carte (redirection Stripe) ou virement (reference + RIB par email)
  const acheterDocument = async (mode: 'carte' | 'virement') => {
    if (!achatDoc) return
    setAchatLoading(true)
    setAchatErreur('')
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.push('/connexion'); return }
      const res = await fetch('/api/documents/acheter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
        body: JSON.stringify({ documentId: achatDoc.id, mode }),
      })
      const data = await res.json()
      if (mode === 'carte') {
        if (res.ok && data.url) { window.location.href = data.url; return }
        setAchatErreur(data.error || "Le paiement n'a pas pu démarrer. Veuillez réessayer.")
      } else {
        if (res.ok && data.success) {
          setAchatReference(data.reference || '')
          if (profile) await loadAchats(profile.id)
        } else {
          setAchatErreur(data.error || "La commande n'a pas pu être enregistrée. Veuillez réessayer.")
        }
      }
    } catch {
      setAchatErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setAchatLoading(false)
    }
  }

  const handleDownload = async (documentId: string, nomDoc: string) => {
    setDownloadEnCours(documentId)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return
      const res = await fetch(`/api/documents/download?id=${documentId}`, {
        headers: { 'Authorization': `Bearer ${session.access_token}` },
      })
      if (res.ok) {
        const ext = res.headers.get('x-file-ext') || 'docx'
        const blob = await res.blob()
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${nomDoc}.${ext}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } else if (res.status === 403) {
        alert("Vous n'avez pas accès à ce document. Vérifiez votre abonnement.")
      } else {
        alert('Erreur lors du téléchargement.')
      }
    } catch { alert('Erreur lors du téléchargement.') }
    finally { setDownloadEnCours(null) }
  }

  const handleDownloadFacture = async (factureId: string) => {
    setFactureEnCours(factureId)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return
      const res = await fetch(`/api/compte/factures/download?id=${factureId}`, {
        headers: { 'Authorization': `Bearer ${session.access_token}` },
      })
      if (!res.ok) { alert('Facture indisponible.'); return }
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `facture-${factureId.slice(0, 8)}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch { alert('Erreur lors du téléchargement.') }
    finally { setFactureEnCours(null) }
  }

  const chargerFichiersPartages = useCallback(async () => {
    setFichiersPartagesLoading(true)
    setFichiersPartagesErreur('')
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return
      const res = await fetch('/api/compte/documents-partages', {
        headers: { 'Authorization': `Bearer ${session.access_token}` },
      })
      const data = await res.json()
      if (res.ok && data.fichiers) {
        setFichiersPartages(data.fichiers)
        setFichiersPartagesCharges(true)
      } else {
        setFichiersPartagesErreur(data.error || 'Le chargement a échoué. Veuillez réessayer.')
      }
    } catch {
      setFichiersPartagesErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setFichiersPartagesLoading(false)
    }
  }, [])

  const handleUploadFichierPartage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadEnCours(true)
    setFichiersPartagesErreur('')
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      // 1. Demande d'une URL de depot signee (le fichier ne transite pas par cette requete :
      // les fonctions Vercel refusent tout corps de requete de plus de 4,5 Mo).
      const initRes = await fetch('/api/compte/documents-partages/init-upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
        body: JSON.stringify({ nomFichier: file.name, typeMime: file.type, tailleOctets: file.size }),
      })
      const initData = await initRes.json()
      if (!initRes.ok) { setFichiersPartagesErreur(initData.error || 'Le dépôt a échoué.'); return }

      // 2. Depot direct du navigateur vers Supabase Storage, avec l'URL signee obtenue.
      const { error: uploadError } = await supabase.storage
        .from('documents-partages')
        .uploadToSignedUrl(initData.chemin, initData.token, file)
      if (uploadError) { setFichiersPartagesErreur("Le dépôt du fichier a échoué."); return }

      // 3. Confirmation aupres du serveur : enregistre les metadonnees du fichier depose.
      const confirmRes = await fetch('/api/compte/documents-partages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
        body: JSON.stringify({ chemin: initData.chemin, nomFichier: file.name, tailleOctets: file.size, typeMime: file.type }),
      })
      const confirmData = await confirmRes.json()
      if (!confirmRes.ok) { setFichiersPartagesErreur(confirmData.error || "La confirmation du dépôt a échoué."); return }

      chargerFichiersPartages()
    } catch {
      setFichiersPartagesErreur('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setUploadEnCours(false)
      e.target.value = ''
    }
  }

  const handleSupprimerFichierPartage = async (id: string, nom: string) => {
    if (!confirm(`Supprimer définitivement "${nom}" ?`)) return
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return
      const res = await fetch('/api/compte/documents-partages', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      if (!res.ok) { setFichiersPartagesErreur(data.error || 'La suppression a échoué.'); return }
      chargerFichiersPartages()
    } catch {
      setFichiersPartagesErreur('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  useEffect(() => {
    if (onglet === 'echanges' && !fichiersPartagesCharges && !fichiersPartagesLoading) chargerFichiersPartages()
  }, [onglet, fichiersPartagesCharges, fichiersPartagesLoading, chargerFichiersPartages])

  const handleSubmitQuestion = async (questionId: string) => {
    if (questionTexte.trim().length < 10) {
      setQuestionErreur('Veuillez développer votre question (10 caractères minimum).')
      return
    }
    setQuestionLoading(true)
    setQuestionErreur('')
    try {
      const res = await fetch('/api/questions/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId, userId: profile?.id, texte: questionTexte }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setQuestionSaisie(null)
        setQuestionTexte('')
        if (profile) await loadQuestions(profile.id)
      } else {
        setQuestionErreur(data.error || 'Erreur lors de la soumission.')
      }
    } catch {
      setQuestionErreur('Erreur réseau. Veuillez réessayer.')
    } finally {
      setQuestionLoading(false)
    }
  }

  // Filtre catalogue par catégories sélectionnées
  useEffect(() => {
    if (categoriesFiltres.length === 0) {
      setCatalogueFiltre(catalogue)
    } else {
      setCatalogueFiltre(catalogue.filter(doc =>
        categoriesFiltres.some(cat => doc.categories?.includes(cat))
      ))
    }
  }, [categoriesFiltres, catalogue])

  if (loading) {
    return (
      <>
        <Header />
        <main style={{ background: '#f8fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>Chargement de votre espace client...</p>
        </main>
        <FooterMinimal />
      </>
    )
  }

  const estAbonne = profile?.abonnement_actif
  const estPro = profile?.abonnement_type === 'optimal_pro'
  const typeProfil = profile?.type || 'particulier'

  // Question incluse Optimal : 1 par mois calendaire, non cumulable.
  // On regarde si une question de type 'incluse' a deja ete creee ce mois-ci.
  const maintenant = new Date()
  const questionIncluseUtilisee = questions.some(q => {
    if (q.type !== 'incluse') return false
    const d = new Date(q.created_at)
    return d.getFullYear() === maintenant.getFullYear() && d.getMonth() === maintenant.getMonth()
  })
  const questionIncluseDisponible = !!estAbonne && !questionIncluseUtilisee
  const prochaineQuestionIncluse = new Date(maintenant.getFullYear(), maintenant.getMonth() + 1, 1)
    .toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  const labelPoserQuestion = questionIncluseDisponible
    ? 'Poser ma question incluse'
    : estAbonne ? 'Poser ma question · 19\u00a0€' : 'Poser ma question · 47\u00a0€'

  const abonnementLabel = () => {
    if (!estAbonne) return null
    const type = estPro ? 'Optimal Pro' : 'Optimal Particulier'
    const periode = profile?.abonnement_periode === 'yearly' ? 'annuel' : 'mensuel'
    return `${type} · ${periode}`
  }

  const dateExpiration = profile?.date_expiration
    ? new Date(profile.date_expiration).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null

  const resiliationProgrammee = !!profile?.resiliation_programmee
  const resiliationFinTexte = profile?.resiliation_fin
    ? new Date(profile.resiliation_fin).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : dateExpiration

  const prixOptimal = typeProfil === 'particulier'
    ? { monthly: { key: 'optimal_particulier_monthly', prix: '17,90 €' }, yearly: { key: 'optimal_particulier_yearly', prix: '149 €', parMois: '12,42 €' } }
    : { monthly: { key: 'optimal_pro_monthly', prix: '27,90 €' }, yearly: { key: 'optimal_pro_yearly', prix: '249 €', parMois: '20,75 €' } }

  const navItems = [
    { id: 'tableau-bord', label: 'Tableau de bord', icon: <User size={16} strokeWidth={1.5} /> },
    { id: 'questions', label: 'Mes questions', icon: <MessageSquare size={16} strokeWidth={1.5} />, badge: questions.filter(q => q.statut === 'repondu').length || null },
    { id: 'documents', label: 'Documents', icon: <FileText size={16} strokeWidth={1.5} />, locked: !estAbonne },
    { id: 'echanges', label: 'Échanges de documents', icon: <FolderSync size={16} strokeWidth={1.5} /> },
    { id: 'commandes', label: 'Mes commandes', icon: <ShoppingBag size={16} strokeWidth={1.5} /> },
    { id: 'factures', label: 'Factures', icon: <Receipt size={16} strokeWidth={1.5} />, badge: factures.length || null },
    { id: 'abonnement', label: 'Abonnement', icon: <Crown size={16} strokeWidth={1.5} />, highlight: !estAbonne },
    { id: 'profil', label: 'Mon profil', icon: <Shield size={16} strokeWidth={1.5} /> },
  ]

  const accesDocLabel = (doc: DocItem): { label: string; color: string; bg: string; accessible: boolean; achetable?: boolean; enAttente?: boolean } => {
    if (doc.acces_gratuit) return { label: 'Gratuit', color: '#15803d', bg: '#f0fdf4', accessible: true }
    if (doc.acces_optimal && estAbonne) return { label: 'Optimal', color: '#1a4fba', bg: '#eff6ff', accessible: true }
    const statutAchat = documentsAchetes[doc.id]
    if (doc.acces_payant && statutAchat === 'paye') return { label: 'Acheté', color: '#15803d', bg: '#f0fdf4', accessible: true }
    if (doc.acces_payant && statutAchat === 'en_attente') return { label: 'Virement en attente', color: '#d97706', bg: '#fff7ed', accessible: false, enAttente: true }
    // Un document payant non encore acquis reste achetable a l'unite, meme s'il est aussi propose en Optimal (cas du non-abonne).
    if (doc.acces_payant) return { label: formatPrix(doc.prix_unitaire) || '?\u00a0€', color: '#d97706', bg: '#fff7ed', accessible: false, achetable: true }
    // Document Optimal seul et non-abonne : acces verrouille, orientation vers l'abonnement.
    if (doc.acces_optimal && !estAbonne) return { label: 'Optimal', color: '#1a4fba', bg: '#eff6ff', accessible: false }
    return { label: '-', color: '#9ca3af', bg: '#f3f4f6', accessible: false }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '13px',
    boxSizing: 'border-box' as const,
    outline: 'none',
    fontFamily: 'inherit',
    lineHeight: '1.6',
  }

  return (
    <>
      <Header />
      <style dangerouslySetInnerHTML={{ __html: '@media(max-width:768px){.ec-layout{flex-direction:column !important;align-items:stretch !important;padding-left:1rem !important;padding-right:1rem !important}.ec-sidebar{flex-basis:auto !important;width:100% !important;position:static !important;top:auto !important;box-sizing:border-box !important}}' }} />
      <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem 0' }}>
        <div className="ec-layout" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

          {/* SIDEBAR */}
          <div className="ec-sidebar" style={{ flex: '0 0 240px', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '1.5rem', position: 'sticky', top: '80px' }}>
            <div style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid #f3f4f6' }}>
              <div style={{ width: '48px', height: '48px', background: estAbonne ? 'linear-gradient(135deg, #0f2d6e, #1a4fba)' : '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                {estAbonne ? <Crown size={20} color="white" strokeWidth={1.5} /> : <User size={22} color="#9ca3af" strokeWidth={1.5} />}
              </div>
              <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 2px' }}>{profile?.prenom} {profile?.nom}</p>
              <p style={{ color: '#9ca3af', fontSize: '11px', margin: '0 0 8px' }}>{profile?.email}</p>
              {estAbonne
                ? <span style={{ background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', color: 'white', fontSize: '10px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>✦ {abonnementLabel()}</span>
                : <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '10px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px' }}>Compte gratuit</span>
              }
            </div>

            {!estAbonne && (
              <div style={{ background: '#f8fafc', borderRadius: '8px', padding: '10px 12px', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <p style={{ color: '#6b7280', fontSize: '10px', fontWeight: '600', margin: 0 }}>Accès Optimal</p>
                  <p style={{ color: '#1a4fba', fontSize: '10px', fontWeight: '700', margin: 0 }}>Non actif</p>
                </div>
                <div style={{ height: '4px', background: '#e5e7eb', borderRadius: '4px' }}>
                  <div style={{ height: '4px', background: 'linear-gradient(90deg, #1a4fba, #93c5fd)', borderRadius: '4px', width: '0%' }} />
                </div>
                <p style={{ color: '#9ca3af', fontSize: '10px', margin: '6px 0 0', lineHeight: '1.4' }}>Passez à l'Optimal pour tout débloquer</p>
              </div>
            )}

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '1.25rem' }}>
              {navItems.map((item) => (
                <button key={item.id} onClick={() => setOnglet(item.id as typeof onglet)}
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 12px', borderRadius: '8px', border: 'none', background: onglet === item.id ? '#eff6ff' : 'transparent', color: onglet === item.id ? '#1a4fba' : (item as any).highlight ? '#d97706' : '#6b7280', fontSize: '13px', fontWeight: onglet === item.id ? '700' : '500', cursor: 'pointer', textAlign: 'left', width: '100%', transition: 'all 0.15s' }}>
                  {(item as any).locked ? <Lock size={14} strokeWidth={1.5} /> : item.icon}
                  <span style={{ flex: 1 }}>{item.label}</span>
                  {(item as any).locked && <Lock size={11} color="#d1d5db" style={{ flexShrink: 0 }} />}
                  {(item as any).highlight && !(item as any).locked && <Star size={11} color="#d97706" style={{ flexShrink: 0 }} />}
                  {item.badge ? <span style={{ background: '#16a34a', color: 'white', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '10px' }}>{item.badge}</span> : null}
                </button>
              ))}
            </nav>

            {!estAbonne && (
              <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '10px', padding: '14px', marginBottom: '1rem' }}>
                <p style={{ color: 'white', fontSize: '12px', fontWeight: '700', margin: '0 0 4px' }}>✦ Passer à l'Optimal</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '11px', margin: '0 0 10px', lineHeight: '1.5' }}>Moins de 0,60 €/jour pour accéder à tout.</p>
                <button onClick={() => setOnglet('abonnement')} style={{ width: '100%', background: 'white', color: '#0f2d6e', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>
                  Voir les offres →
                </button>
              </div>
            )}

            <button onClick={handleDeconnexion} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderRadius: '8px', border: 'none', background: 'transparent', color: '#9ca3af', fontSize: '12px', cursor: 'pointer', width: '100%' }}>
              <LogOut size={14} strokeWidth={1.5} /> Se déconnecter
            </button>
          </div>

          {/* CONTENU PRINCIPAL */}
          <div style={{ flex: 1 }}>

            {/* ── TABLEAU DE BORD ── */}
            {onglet === 'tableau-bord' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Bonjour, {profile?.prenom} 👋</h1>

                {/* Message de succès abonnement */}
                {successMessage && (
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle size={18} color="#16a34a" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                    <p style={{ color: '#15803d', fontSize: '13px', fontWeight: '600', margin: 0 }}>{successMessage}</p>
                  </div>
                )}

                {profile && !profile.avis_google_propose && (
                  <div style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)', border: '1px solid #fcd34d', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" strokeWidth={1.5} />
                      ))}
                    </div>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <p style={{ color: '#92400e', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>Votre avis compte</p>
                      <p style={{ color: '#a16207', fontSize: '12px', margin: 0, lineHeight: '1.5' }}>
                        Si le cabinet vous est utile, un avis Google nous aide beaucoup. Cela prend une minute.
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                      <button onClick={ouvrirAvisGoogle} style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                        Laisser un avis
                      </button>
                    </div>
                  </div>
                )}

                {!estAbonne && (
                  <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '14px', padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', position: 'relative' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <Crown size={16} color="#fcd34d" strokeWidth={1.5} />
                          <span style={{ color: '#fcd34d', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Abonnement Optimal</span>
                        </div>
                        <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 6px' }}>Bibliothèque complète + 1 question juriste / mois</p>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', margin: 0 }}>À partir de <strong style={{ color: 'white' }}>12,42 €/mois</strong> en annuel</p>
                      </div>
                      <button onClick={() => setOnglet('abonnement')} style={{ background: 'white', color: '#0f2d6e', border: 'none', padding: '11px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', flexShrink: 0 }}>
                        Voir les offres
                      </button>
                    </div>
                  </div>
                )}

                {estAbonne && dateExpiration && (
                  <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} color="#16a34a" strokeWidth={1.5} />
                    <div>
                      <p style={{ color: '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>{abonnementLabel()} · Actif</p>
                      <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Prochain renouvellement : {dateExpiration}</p>
                    </div>
                  </div>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {[
                    { label: 'Questions posées', value: questions.length, icon: <MessageSquare size={20} color="#1a4fba" strokeWidth={1.5} />, action: () => setOnglet('questions') },
                    { label: 'En attente de réponse', value: questions.filter(q => q.statut !== 'repondu').length, icon: <Clock size={20} color="#d97706" strokeWidth={1.5} />, action: () => setOnglet('questions') },
                    { label: 'Factures disponibles', value: factures.length, icon: <Receipt size={20} color="#16a34a" strokeWidth={1.5} />, action: () => setOnglet('factures') },
                  ].map((card, i) => (
                    <button key={i} onClick={card.action} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', textAlign: 'left', cursor: 'pointer', transition: 'all 0.15s' }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = '#bfdbfe')}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}>
                      <div style={{ marginBottom: '10px' }}>{card.icon}</div>
                      <p style={{ color: '#0f2d6e', fontSize: '1.5rem', fontWeight: '700', margin: '0 0 4px' }}>{card.value}</p>
                      <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>{card.label}</p>
                    </button>
                  ))}
                </div>

                {/* Aperçu documents */}
                {!estAbonne && catalogue.length > 0 && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0 }}>Bibliothèque de documents</p>
                      <span style={{ background: '#fff7ed', color: '#d97706', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px' }}>
                        {catalogue.filter(d => !d.acces_gratuit).length} documents Optimal
                      </span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '1rem' }}>
                      {catalogue.slice(0, 6).map((doc, i) => {
                        const acces = accesDocLabel(doc)
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', background: acces.accessible ? '#f0fdf4' : '#ffffff', borderRadius: '8px', border: `1px solid ${acces.accessible ? '#bbf7d0' : '#e5e7eb'}` }}>
                            {doc.type === 'pack' ? <Package size={14} color={acces.color} style={{ flexShrink: 0 }} /> : <FileText size={13} color={acces.color} style={{ flexShrink: 0 }} />}
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ color: '#374151', fontSize: '11px', fontWeight: '600', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.nom}</p>
                            </div>
                            <span style={{ background: acces.bg, color: acces.color, fontSize: '9px', fontWeight: '700', padding: '1px 5px', borderRadius: '4px', flexShrink: 0 }}>{acces.label}</span>
                          </div>
                        )
                      })}
                    </div>
                    <button onClick={() => setOnglet('abonnement')} style={{ width: '100%', background: '#0f2d6e', color: 'white', border: 'none', padding: '11px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                      Débloquer toute la bibliothèque →
                    </button>
                  </div>
                )}

                {/* Poser une question */}
                <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                  <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 8px' }}>Poser une question juridique</p>
                  <p style={{ color: '#6b7280', fontSize: '13px', margin: '0 0 12px', lineHeight: '1.6' }}>
                    {estAbonne ? "Votre abonnement inclut 1 question par mois. Questions supplémentaires à 19 €." : "Réponse rédigée par un juriste sous 24 à 48h ouvrées. 47 € à l'unité, sans abonnement."}
                  </p>
                  {estAbonne && (
                    <div style={{ background: questionIncluseDisponible ? '#f0fdf4' : '#f8fafc', border: `1px solid ${questionIncluseDisponible ? '#bbf7d0' : '#e5e7eb'}`, borderRadius: '8px', padding: '10px 12px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {questionIncluseDisponible
                        ? <CheckCircle size={14} color="#16a34a" style={{ flexShrink: 0 }} />
                        : <Clock size={14} color="#6b7280" style={{ flexShrink: 0 }} />}
                      <p style={{ color: questionIncluseDisponible ? '#15803d' : '#6b7280', fontSize: '12px', margin: 0 }}>
                        {questionIncluseDisponible
                          ? 'Question incluse de ce mois : disponible.'
                          : `Question incluse de ce mois : utilisée. Prochaine disponible le ${prochaineQuestionIncluse}.`}
                      </p>
                    </div>
                  )}
                  {!estAbonne && (
                    <div style={{ background: '#eff6ff', borderRadius: '8px', padding: '10px 12px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <TrendingUp size={14} color="#1a4fba" style={{ flexShrink: 0 }} />
                      <p style={{ color: '#1e3a5f', fontSize: '12px', margin: 0 }}>Avec l'Optimal, votre première question est <strong>incluse</strong>. Économisez 47 €.</p>
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      onClick={poserQuestion}
                      disabled={questionInclLoading}
                      style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: questionInclLoading ? 'not-allowed' : 'pointer' }}
                    >
                      {questionInclLoading ? 'Ouverture...' : labelPoserQuestion}
                    </button>
                    {!estAbonne && (
                      <button onClick={() => setOnglet('abonnement')} style={{ background: 'white', color: '#1a4fba', border: '1px solid #bfdbfe', padding: '11px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                        Incluse dans l'Optimal →
                      </button>
                    )}
                  </div>
                  <p style={{ color: '#9ca3af', fontSize: '11px', margin: '10px 0 0', lineHeight: '1.6', fontStyle: 'italic' }}>
                    Après paiement, vous serez invité à rédiger votre question dans votre espace client. Notre juriste vous répondra par écrit sous 24 à 48h ouvrées.
                  </p>
                </div>
              </div>
            )}

            {/* ── QUESTIONS ── */}
            {onglet === 'questions' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Mes questions</h1>
                  <button
                    onClick={poserQuestion}
                    disabled={questionInclLoading}
                    style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: questionInclLoading ? 'not-allowed' : 'pointer' }}
                  >
                    {questionIncluseDisponible ? '+ Question incluse' : `+ Nouvelle question ${estAbonne ? '· 19\u00a0€' : '· 47\u00a0€'}`}
                  </button>
                </div>

                {!estAbonne && (
                  <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Zap size={16} color="#1a4fba" style={{ flexShrink: 0 }} />
                    <p style={{ color: '#1e3a5f', fontSize: '12px', margin: 0 }}>
                      Avec l'Abonnement Optimal, 1 question incluse par mois. Questions supplémentaires à 19 € au lieu de 47 €.{' '}
                      <button onClick={() => setOnglet('abonnement')} style={{ color: '#1a4fba', fontWeight: '700', background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', padding: 0, textDecoration: 'underline' }}>Voir les offres →</button>
                    </p>
                  </div>
                )}

                {estAbonne && (
                  <div style={{ background: questionIncluseDisponible ? '#f0fdf4' : '#f8fafc', border: `1px solid ${questionIncluseDisponible ? '#bbf7d0' : '#e5e7eb'}`, borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {questionIncluseDisponible ? <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0 }} /> : <Clock size={16} color="#6b7280" style={{ flexShrink: 0 }} />}
                    <p style={{ color: questionIncluseDisponible ? '#15803d' : '#6b7280', fontSize: '12px', margin: 0 }}>
                      {questionIncluseDisponible
                        ? 'Votre question incluse de ce mois est disponible. Questions supplémentaires à 19\u00a0€.'
                        : `Votre question incluse de ce mois a été utilisée. Prochaine disponible le ${prochaineQuestionIncluse}. Questions supplémentaires à 19\u00a0€.`}
                    </p>
                  </div>
                )}

                {/* Questions avec paiement effectué mais texte non saisi */}
                {questions.some(q => !q.question) && (
                  <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <AlertCircle size={16} color="#d97706" style={{ flexShrink: 0, marginTop: '1px' }} />
                    <p style={{ color: '#92400e', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                      Vous avez une ou plusieurs questions en attente de rédaction. Cliquez sur "Rédiger ma question" pour les compléter.
                    </p>
                  </div>
                )}

                {questions.length === 0 ? (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                    <MessageSquare size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 6px' }}>Vous n'avez pas encore posé de question.</p>
                    <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0 0 16px', lineHeight: '1.6' }}>
                      Après paiement, vous pourrez rédiger votre question ici. Notre juriste vous répondra sous 24 à 48h ouvrées.
                    </p>
                    <button onClick={poserQuestion} disabled={questionInclLoading} style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: questionInclLoading ? 'not-allowed' : 'pointer' }}>
                      {questionIncluseDisponible ? 'Poser ma question incluse' : 'Poser ma première question'}
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {questions.map(q => (
                      <div key={q.id} style={{ background: 'white', border: `1px solid ${!q.question ? '#fed7aa' : '#e5e7eb'}`, borderRadius: '12px', padding: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                          <span style={{ fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', background: q.statut === 'repondu' ? '#f0fdf4' : q.statut === 'en_cours' ? '#fff7ed' : '#f3f4f6', color: q.statut === 'repondu' ? '#15803d' : q.statut === 'en_cours' ? '#d97706' : '#6b7280' }}>
                            {q.statut === 'repondu' ? '✓ Répondu' : q.statut === 'en_cours' ? '⋯ En cours' : '○ En attente'}
                          </span>
                          <span style={{ color: '#9ca3af', fontSize: '11px' }}>{new Date(q.created_at).toLocaleDateString('fr-FR')}</span>
                          <span style={{ color: '#9ca3af', fontSize: '11px' }}>
                            · {q.type === 'unitaire' ? '47 €' : q.type === 'abonne' ? '19 €' : 'Incluse'}
                          </span>
                        </div>

                        {/* Texte de la question ou formulaire de saisie */}
                        {q.question ? (
                          <p style={{ color: '#374151', fontSize: '13px', margin: '0 0 12px', lineHeight: '1.6' }}>{q.question}</p>
                        ) : (
                          <div style={{ marginBottom: '12px' }}>
                            {questionSaisie?.id !== q.id ? (
                              <div style={{ background: '#fff7ed', borderRadius: '8px', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                                <p style={{ color: '#92400e', fontSize: '13px', margin: 0, fontStyle: 'italic' }}>
                                  {q.type === 'incluse' ? 'Question incluse de ce mois. Rédigez-la pour que notre juriste puisse vous répondre.' : 'Paiement reçu. Rédigez votre question pour que notre juriste puisse vous répondre.'}
                                </p>
                                <button
                                  onClick={() => { setQuestionSaisie({ id: q.id, type: q.type }); setQuestionTexte(''); setQuestionErreur('') }}
                                  style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '9px 18px', borderRadius: '7px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', flexShrink: 0 }}
                                >
                                  Rédiger ma question →
                                </button>
                              </div>
                            ) : (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div>
                                  <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#374151', marginBottom: '6px' }}>
                                    Votre question
                                    <span style={{ color: '#9ca3af', fontWeight: '400', marginLeft: '8px' }}>{questionTexte.length}/2000</span>
                                  </label>
                                  <textarea
                                    value={questionTexte}
                                    onChange={e => setQuestionTexte(e.target.value)}
                                    maxLength={2000}
                                    rows={6}
                                    placeholder="Décrivez votre situation et posez votre question avec le plus de précisions possible. Notre juriste vous répondra sous 24 à 48h ouvrées."
                                    style={{ ...inputStyle, resize: 'vertical' }}
                                  />
                                </div>
                                {questionErreur && (
                                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <AlertCircle size={14} color="#dc2626" style={{ flexShrink: 0 }} />
                                    <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{questionErreur}</p>
                                  </div>
                                )}
                                <div style={{ display: 'flex', gap: '10px' }}>
                                  <button
                                    onClick={() => handleSubmitQuestion(q.id)}
                                    disabled={questionLoading}
                                    style={{ background: questionLoading ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: questionLoading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '7px' }}
                                  >
                                    <Send size={13} strokeWidth={2} />
                                    {questionLoading ? 'Envoi en cours...' : 'Envoyer ma question'}
                                  </button>
                                  <button
                                    onClick={() => { setQuestionSaisie(null); setQuestionTexte(''); setQuestionErreur('') }}
                                    style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '10px 16px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}
                                  >
                                    Annuler
                                  </button>
                                </div>
                                <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0, lineHeight: '1.6' }}>
                                  Ce service constitue une information juridique au sens de la loi n°71-1130 du 31 décembre 1971. La réponse vous sera transmise par écrit dans votre espace client.
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {q.reponse && (
                          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1rem' }}>
                            <p style={{ color: '#15803d', fontSize: '12px', fontWeight: '700', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <CheckCircle size={13} /> Réponse du juriste
                              {q.repondu_at && <span style={{ color: '#9ca3af', fontWeight: '400' }}>· {new Date(q.repondu_at).toLocaleDateString('fr-FR')}</span>}
                            </p>
                            <p style={{ color: '#374151', fontSize: '13px', margin: 0, lineHeight: '1.7', whiteSpace: 'pre-line' }}>{q.reponse}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── DOCUMENTS ── */}
            {onglet === 'documents' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Documents</h1>

                {!estAbonne && (
                  <div style={{ background: 'linear-gradient(135deg, #0f2d6e 0%, #1a4fba 100%)', borderRadius: '12px', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ color: '#fcd34d', fontSize: '11px', fontWeight: '700', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>✦ {catalogue.filter(d => !d.acces_gratuit).length} documents verrouillés</p>
                      <p style={{ color: 'white', fontSize: '14px', fontWeight: '700', margin: '0 0 4px' }}>Débloquez toute la bibliothèque</p>
                      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', margin: 0 }}>Abonnement Optimal · à partir de 12,42 €/mois</p>
                    </div>
                    <button onClick={() => setOnglet('abonnement')} style={{ background: 'white', color: '#0f2d6e', border: 'none', padding: '11px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', flexShrink: 0 }}>
                      Débloquer →
                    </button>
                  </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <DocumentSearch documents={catalogue} onChange={(filtered: DocItem[]) => setCatalogueFiltre(filtered)} placeholder="Rechercher un document..." />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Filter size={13} color="#6b7280" />
                      <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: '600', margin: 0 }}>Filtrer par catégorie</p>
                      {categoriesFiltres.length > 0 && (
                        <button onClick={() => setCategoriesFiltres([])} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', fontSize: '11px', textDecoration: 'underline' }}>
                          Effacer
                        </button>
                      )}
                    </div>
                    <CategorySearch
                      categories={categoriesCatalogue}
                      selected={categoriesFiltres}
                      onToggle={(nom: string) => setCategoriesFiltres(prev => prev.includes(nom) ? prev.filter(c => c !== nom) : [...prev, nom])}
                      placeholder="Filtrer par catégorie..."
                    />
                  </div>
                  {catalogueFiltre.length !== catalogue.length && (
                    <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>{catalogueFiltre.length} document{catalogueFiltre.length > 1 ? 's' : ''} affiché{catalogueFiltre.length > 1 ? 's' : ''}</p>
                  )}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {catalogueFiltre.map(doc => {
                    const acces = accesDocLabel(doc)
                    return (
                      <div key={doc.id} style={{ background: 'white', border: `1px solid ${acces.accessible ? '#bbf7d0' : '#e5e7eb'}`, borderRadius: '10px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '36px', height: '36px', background: acces.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          {doc.type === 'pack' ? <Package size={16} color={acces.color} /> : <FileText size={16} color={acces.color} />}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ color: '#0f2d6e', fontSize: '12px', fontWeight: '600', margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.nom}</p>
                          {doc.categories && doc.categories.length > 0 && (
                            <p style={{ color: '#d1d5db', fontSize: '10px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.categories[0]}</p>
                          )}
                        </div>
                        {acces.accessible ? (
                          <button onClick={() => handleDownload(doc.id, doc.nom)} disabled={downloadEnCours === doc.id}
                            style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', cursor: downloadEnCours === doc.id ? 'not-allowed' : 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {downloadEnCours === doc.id ? '...' : <><Download size={11} /> DOCX</>}
                          </button>
                        ) : acces.achetable ? (
                          <button onClick={() => { setAchatDoc(doc); setAchatErreur(''); setAchatReference('') }}
                            style={{ background: '#d97706', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', flexShrink: 0, whiteSpace: 'nowrap' }}>
                            Acheter · {acces.label}
                          </button>
                        ) : (
                          <span style={{ background: acces.bg, color: acces.color, fontSize: '9px', fontWeight: '700', padding: '2px 7px', borderRadius: '4px', flexShrink: 0, whiteSpace: 'nowrap' }}>{acces.label}</span>
                        )}
                      </div>
                    )
                  })}
                </div>

                {catalogue.length === 0 && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                    <FileText size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>La bibliothèque sera disponible prochainement.</p>
                  </div>
                )}
              </div>
            )}

            {/* ── ECHANGES DE DOCUMENTS ── */}
            {onglet === 'echanges' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                  <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Échanges de documents</h1>
                  <div>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.docx" onChange={handleUploadFichierPartage} style={{ display: 'none' }} id="upload-fichier-partage" />
                    <label htmlFor="upload-fichier-partage" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#0f2d6e', color: 'white', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: uploadEnCours ? 'not-allowed' : 'pointer', opacity: uploadEnCours ? 0.6 : 1 }}>
                      <Upload size={14} /> {uploadEnCours ? 'Envoi...' : 'Déposer un fichier'}
                    </label>
                  </div>
                </div>

                <p style={{ color: '#6b7280', fontSize: '12.5px', margin: 0, lineHeight: '1.7' }}>
                  Un espace privé pour transmettre vos pièces au cabinet et recevoir celles que nous vous adressons (formats acceptés : PDF, image ou DOCX, 20 Mo maximum). Vous seul et le cabinet pouvez y accéder.
                </p>

                {fichiersPartagesErreur && (
                  <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <AlertCircle size={14} color="#dc2626" style={{ flexShrink: 0 }} />
                    <p style={{ color: '#dc2626', fontSize: '12.5px', margin: 0 }}>{fichiersPartagesErreur}</p>
                  </div>
                )}

                {fichiersPartagesLoading ? (
                  <p style={{ color: '#9ca3af', fontSize: '13px', textAlign: 'center', padding: '2rem 0' }}>Chargement de vos documents...</p>
                ) : fichiersPartages.length === 0 ? (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                    <FolderSync size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Aucun document échangé pour le moment.</p>
                  </div>
                ) : (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '0.5rem 1.25rem' }}>
                    {fichiersPartages.map((f, i) => (
                      <div key={f.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 0', borderTop: i === 0 ? 'none' : '1px solid #f1f3f7' }}>
                        <FileText size={16} color="#6b7280" style={{ flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.nom}</p>
                          <p style={{ margin: 0, fontSize: '11px', color: '#9aa2b1' }}>
                            {f.deposePar === 'cabinet' ? 'Envoyé par le cabinet' : 'Envoyé par vous'} · {formatTailleFichier(f.taille)} · {formatDateFichier(f.creeLe)}
                          </p>
                        </div>
                        {f.url && (
                          <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: '700', color: '#0f2d6e', border: '1px solid #d7dce5', borderRadius: '6px', padding: '7px 11px', textDecoration: 'none', flexShrink: 0 }}>
                            <Download size={12} /> Télécharger
                          </a>
                        )}
                        {f.deposePar === 'client' && (
                          <button onClick={() => handleSupprimerFichierPartage(f.id, f.nom)} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11.5px', fontWeight: '700', color: '#dc2626', background: 'white', border: '1px solid #fecaca', borderRadius: '6px', padding: '7px 11px', cursor: 'pointer', flexShrink: 0 }}>
                            <Trash2 size={12} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── COMMANDES ── */}
            {onglet === 'commandes' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Mes commandes</h1>

                {estAbonne && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 12px' }}>Abonnement en cours</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                      <Crown size={18} color="#15803d" strokeWidth={1.5} />
                      <div style={{ flex: 1 }}>
                        <p style={{ color: '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>{abonnementLabel()}</p>
                        <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Renouvellement le {dateExpiration}</p>
                      </div>
                      <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>Actif</span>
                    </div>
                  </div>
                )}

                {questions.length > 0 && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 12px' }}>Questions juridiques</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {questions.map(q => (
                        <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          <MessageSquare size={16} color="#6b7280" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {q.question || 'Question en attente de rédaction'}
                            </p>
                            <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                              {new Date(q.created_at).toLocaleDateString('fr-FR')} ·{' '}
                              {q.type === 'unitaire' ? '47 €' : q.type === 'abonne' ? '19 €' : 'Incluse'}
                            </p>
                          </div>
                          <span style={{ fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', flexShrink: 0, background: q.statut === 'repondu' ? '#f0fdf4' : '#f3f4f6', color: q.statut === 'repondu' ? '#15803d' : '#6b7280' }}>
                            {q.statut === 'repondu' ? 'Répondu' : 'En attente'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Diagnostics RGPD */}
                {dossiersRgpd.length > 0 && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 12px' }}>Diagnostics RGPD</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {dossiersRgpd.map(d => {
                        const conf = DIAGNOSTIC_FORFAITS[d.forfait as 'essentiel' | 'standard'] || DIAGNOSTIC_FORFAITS.essentiel
                        return (
                          <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                            <Shield size={16} color="#7c3aed" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>{conf.label}</p>
                              <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                                {new Date(d.created_at).toLocaleDateString('fr-FR')} · {d.montant ? `${d.montant}\u00a0€` : conf.prix} · {d.mode_paiement === 'virement' ? 'Virement' : 'Carte'}
                                {d.mode_paiement === 'virement' && d.reference ? ` · ${d.reference}` : ''}
                              </p>
                            </div>
                            {d.livrable_url ? (
                              <a href={d.livrable_url} target="_blank" rel="noopener noreferrer"
                                style={{ background: '#0f2d6e', color: 'white', padding: '7px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0 }}>
                                <Download size={12} /> Rapport
                              </a>
                            ) : (
                              <span style={{ fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', flexShrink: 0, background: d.statut === 'livre' ? '#f0fdf4' : d.statut === 'en_cours' ? '#fff7ed' : '#f3f4f6', color: d.statut === 'livre' ? '#15803d' : d.statut === 'en_cours' ? '#d97706' : '#6b7280' }}>
                                {d.statut === 'livre' ? 'Livré' : d.statut === 'en_cours' ? 'En cours' : 'En attente'}
                              </span>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '11px', margin: '12px 0 0', lineHeight: '1.6' }}>
                      Le rapport de conformité est déposé ici dès qu'il est prêt, et vous est également envoyé par email. Le délai court à compter de la réception de vos réponses au questionnaire de cadrage.
                    </p>
                  </div>
                )}

                {dossiers.length > 0 && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 12px' }}>Forfaits conseil assurances</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {dossiers.map(d => (
                        <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '8px' }}>
                          <Shield size={16} color="#6b7280" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                          <div style={{ flex: 1 }}>
                            <p style={{ color: '#374151', fontSize: '12px', fontWeight: '600', margin: '0 0 2px' }}>
                              Forfait conseil assurances · {d.type === 'pro' ? 'Pro / Association' : 'Particulier'}
                            </p>
                            <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                              {new Date(d.created_at).toLocaleDateString('fr-FR')} · {d.type === 'pro' ? '150\u00a0€' : '90\u00a0€'}
                            </p>
                          </div>
                          <span style={{ fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '20px', flexShrink: 0, background: d.statut === 'livre' ? '#f0fdf4' : d.statut === 'en_cours' ? '#fff7ed' : '#f3f4f6', color: d.statut === 'livre' ? '#15803d' : d.statut === 'en_cours' ? '#d97706' : '#6b7280' }}>
                            {d.statut === 'livre' ? 'Livré' : d.statut === 'en_cours' ? 'En cours' : 'En attente'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {questions.length === 0 && dossiers.length === 0 && dossiersRgpd.length === 0 && !estAbonne && (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                    <ShoppingBag size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 16px' }}>Aucune commande pour l'instant.</p>
                    <button onClick={() => handlePaiement('question_unitaire')} style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                      Poser ma première question
                    </button>
                  </div>
                )}

                <p style={{ color: '#9ca3af', fontSize: '12px', margin: 0, textAlign: 'center' }}>
                  Pour toute question sur une commande : <a href="mailto:contact@cholez-pagotto.fr" style={{ color: '#1a4fba' }}>contact@cholez-pagotto.fr</a>
                </p>
              </div>
            )}

            {/* ── FACTURES ── */}
            {onglet === 'factures' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Factures</h1>

                <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <AlertCircle size={16} color="#1a4fba" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <div>
                    <p style={{ color: '#1e3a5f', fontSize: '12px', fontWeight: '700', margin: '0 0 2px' }}>Facturation</p>
                    <p style={{ color: '#374151', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                      Les factures sont émises par le Cabinet Cholez-Pagotto et déposées ici après traitement. Le reçu de paiement Stripe vous est envoyé automatiquement par email à chaque transaction.
                    </p>
                  </div>
                </div>

                {factures.length === 0 ? (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
                    <Receipt size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: 0 }}>Aucune facture disponible pour l'instant.</p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {factures.map(f => (
                      <div key={f.id} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '40px', height: '40px', background: '#eff6ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Receipt size={18} color="#1a4fba" strokeWidth={1.5} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 2px' }}>
                            Facture {f.type ? `· ${f.type}` : ''} {f.montant ? `· ${f.montant} €` : ''}
                          </p>
                          <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>
                            Émise le {new Date(f.created_at).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <button onClick={() => handleDownloadFacture(f.id)} disabled={factureEnCours === f.id}
                          style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '700', cursor: factureEnCours === f.id ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                          {factureEnCours === f.id ? '...' : <><Download size={13} /> PDF</>}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* ── ABONNEMENT ── */}
            {onglet === 'abonnement' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Abonnement</h1>

                {estAbonne ? (
                  <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
                      <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #0f2d6e, #1a4fba)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Crown size={20} color="white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 2px' }}>{abonnementLabel()}</p>
                        <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>Renouvellement le {dateExpiration}</p>
                      </div>
                      {resiliationProgrammee
                        ? <span style={{ marginLeft: 'auto', background: '#fff7ed', color: '#d97706', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>Résiliation programmée</span>
                        : <span style={{ marginLeft: 'auto', background: '#f0fdf4', color: '#15803d', fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>Actif</span>}
                    </div>
                    <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1.25rem' }}>
                      {resiliationProgrammee ? (
                        <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', padding: '14px 16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <Clock size={16} color="#d97706" style={{ flexShrink: 0, marginTop: '1px' }} />
                          <div>
                            <p style={{ color: '#92400e', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>Résiliation programmée</p>
                            <p style={{ color: '#374151', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                              Votre abonnement prendra fin le {resiliationFinTexte || 'la fin de la période en cours'}, sans renouvellement. Vous conservez l'accès jusque-là. Pour revenir sur cette décision, écrivez-nous à <a href="mailto:contact@cholez-pagotto.fr" style={{ color: '#1a4fba' }}>contact@cholez-pagotto.fr</a>.
                            </p>
                          </div>
                        </div>
                      ) : (
                      <>
                      {resiliationEtape === 0 && (
                        <>
                          <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px 14px', marginBottom: '14px' }}>
                            <p style={{ color: '#6b7280', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                              Conformément à l'article L215-1-1 du Code de la consommation, vous pouvez résilier votre abonnement directement en ligne, ci-dessous, sans avoir à nous contacter.
                            </p>
                          </div>
                          <button
                            onClick={() => { setResiliationErreur(''); setResiliationEtape(1) }}
                            style={{ background: 'white', color: '#b91c1c', border: '1px solid #fecaca', padding: '10px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}
                          >
                            Résilier mon contrat
                          </button>
                          <p style={{ color: '#9ca3af', fontSize: '11px', margin: '12px 0 0', lineHeight: '1.6' }}>
                            Pour un changement de moyen de paiement, écrivez-nous à <a href="mailto:contact@cholez-pagotto.fr" style={{ color: '#1a4fba' }}>contact@cholez-pagotto.fr</a>
                          </p>
                        </>
                      )}

                      {resiliationEtape === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                          <div style={{ background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: '8px', padding: '14px 16px' }}>
                            <p style={{ color: '#92400e', fontSize: '13px', fontWeight: '700', margin: '0 0 10px' }}>Confirmer la résiliation</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                                <span style={{ color: '#9ca3af', fontSize: '12px' }}>Contrat concerné</span>
                                <span style={{ color: '#374151', fontSize: '12px', fontWeight: '600', textAlign: 'right' }}>{abonnementLabel()}</span>
                              </div>
                              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
                                <span style={{ color: '#9ca3af', fontSize: '12px' }}>Effet</span>
                                <span style={{ color: '#374151', fontSize: '12px', fontWeight: '600', textAlign: 'right', lineHeight: '1.6' }}>
                                  {dateExpiration ? `Actif jusqu'au ${dateExpiration}, puis non renouvelé` : "Actif jusqu'à la fin de la période en cours, puis non renouvelé"}
                                </span>
                              </div>
                            </div>
                            <p style={{ color: '#92400e', fontSize: '12px', margin: '10px 0 0', lineHeight: '1.6' }}>
                              Vous conservez l'accès à vos avantages jusqu'à cette date. Aucun nouveau prélèvement ne sera effectué ensuite. La période en cours n'est pas remboursée.
                            </p>
                          </div>
                          {resiliationErreur && (
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                              <AlertCircle size={14} color="#dc2626" style={{ flexShrink: 0 }} />
                              <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{resiliationErreur}</p>
                            </div>
                          )}
                          <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                              onClick={handleResiliation}
                              disabled={resiliationLoading}
                              style={{ background: resiliationLoading ? '#9ca3af' : '#b91c1c', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: resiliationLoading ? 'not-allowed' : 'pointer' }}
                            >
                              {resiliationLoading ? 'Résiliation en cours...' : 'Confirmer la résiliation'}
                            </button>
                            <button
                              onClick={() => { setResiliationEtape(0); setResiliationErreur('') }}
                              disabled={resiliationLoading}
                              style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', cursor: resiliationLoading ? 'not-allowed' : 'pointer' }}
                            >
                              Annuler
                            </button>
                          </div>
                        </div>
                      )}

                      {resiliationEtape === 2 && (
                        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '14px 16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '1px' }} />
                          <div>
                            <p style={{ color: '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>Résiliation enregistrée</p>
                            <p style={{ color: '#374151', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                              {dateExpiration
                                ? `Votre abonnement prendra fin le ${dateExpiration}, sans renouvellement. Vous conservez l'accès jusque-là. Un email de confirmation vient de vous être envoyé.`
                                : "Votre abonnement ne sera pas renouvelé. Un email de confirmation vient de vous être envoyé."}
                            </p>
                          </div>
                        </div>
                      )}
                      </>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ background: '#f3f4f6', borderRadius: '10px', padding: '4px', display: 'inline-flex', gap: '4px' }}>
                        {(['monthly', 'yearly'] as const).map(p => (
                          <button key={p} onClick={() => setPeriodeChoisie(p)}
                            style={{ padding: '8px 20px', borderRadius: '8px', border: 'none', background: periodeChoisie === p ? 'white' : 'transparent', color: periodeChoisie === p ? '#0f2d6e' : '#6b7280', fontSize: '13px', fontWeight: periodeChoisie === p ? '700' : '500', cursor: 'pointer', boxShadow: periodeChoisie === p ? '0 1px 3px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.15s' }}>
                            {p === 'monthly' ? 'Mensuel' : 'Annuel'}
                            {p === 'yearly' && <span style={{ marginLeft: '6px', background: '#0f2d6e', color: 'white', fontSize: '9px', fontWeight: '700', padding: '1px 6px', borderRadius: '10px' }}>2 mois offerts</span>}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', borderBottom: '1px solid #e5e7eb' }}>
                        <div style={{ padding: '1.25rem', borderRight: '1px solid #e5e7eb' }} />
                        <div style={{ padding: '1.25rem', borderRight: '1px solid #e5e7eb' }}>
                          <p style={{ color: '#9ca3af', fontSize: '12px', fontWeight: '700', margin: '0 0 4px' }}>Compte gratuit</p>
                          <p style={{ color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>0 €</p>
                        </div>
                        <div style={{ padding: '1.25rem', borderRight: '1px solid #e5e7eb', background: '#f8fafc' }}>
                          <p style={{ color: '#1a4fba', fontSize: '12px', fontWeight: '700', margin: '0 0 4px' }}>Optimal Particulier</p>
                          <p style={{ color: '#0f2d6e', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 2px' }}>
                            {periodeChoisie === 'yearly' ? '12,42 €' : '17,90 €'}<span style={{ fontSize: '10px', fontWeight: '400', color: '#6b7280' }}>/mois</span>
                          </p>
                          {periodeChoisie === 'yearly' && <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0 }}>149 € / an</p>}
                        </div>
                        <div style={{ padding: '1.25rem', background: '#0f2d6e' }}>
                          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: '700', margin: '0 0 4px' }}>Optimal Pro</p>
                          <p style={{ color: 'white', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 2px' }}>
                            {periodeChoisie === 'yearly' ? '20,75 €' : '27,90 €'}<span style={{ fontSize: '10px', fontWeight: '400', color: 'rgba(255,255,255,0.6)' }}>/mois</span>
                          </p>
                          {periodeChoisie === 'yearly' && <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', margin: 0 }}>249 € / an</p>}
                        </div>
                      </div>

                      {[
                        { label: 'Modèles gratuits (DOCX)', gratuit: 'Sur demande', part: '✓', pro: '✓' },
                        { label: 'Bibliothèque complète (DOCX)', gratuit: '✗', part: '✓', pro: '✓' },
                        { label: 'Question juriste incluse / mois', gratuit: '✗', part: '1 incluse', pro: '1 incluse' },
                        { label: 'Questions supplémentaires', gratuit: '47 €', part: '19 €', pro: '19 €' },
                        { label: "Délai de réponse", gratuit: '24-48h', part: '24-48h', pro: '24-48h' },
                        { label: 'Professionnels / associations', gratuit: '✗', part: '✗', pro: '✓' },
                      ].map((row, i) => (
                        <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', borderBottom: i < 5 ? '1px solid #f3f4f6' : 'none' }}>
                          <div style={{ padding: '12px 1.25rem', borderRight: '1px solid #e5e7eb' }}>
                            <p style={{ color: '#374151', fontSize: '12px', margin: 0 }}>{row.label}</p>
                          </div>
                          <div style={{ padding: '12px 1.25rem', borderRight: '1px solid #e5e7eb', textAlign: 'center' }}>
                            <p style={{ color: row.gratuit === '✗' ? '#d1d5db' : '#374151', fontSize: '12px', fontWeight: '600', margin: 0 }}>{row.gratuit}</p>
                          </div>
                          <div style={{ padding: '12px 1.25rem', borderRight: '1px solid #e5e7eb', background: '#f8fafc', textAlign: 'center' }}>
                            <p style={{ color: row.part === '✗' ? '#d1d5db' : '#0f2d6e', fontSize: '12px', fontWeight: '600', margin: 0 }}>{row.part}</p>
                          </div>
                          <div style={{ padding: '12px 1.25rem', background: '#fafafa', textAlign: 'center' }}>
                            <p style={{ color: row.pro === '✗' ? '#d1d5db' : '#374151', fontSize: '12px', fontWeight: '600', margin: 0 }}>{row.pro}</p>
                          </div>
                        </div>
                      ))}

                      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', padding: '1.25rem', gap: '12px', borderTop: '1px solid #e5e7eb' }}>
                        <div />
                        <div style={{ textAlign: 'center', color: '#9ca3af', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Accès actuel</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <button onClick={() => handlePaiement(periodeChoisie === 'yearly' ? 'optimal_particulier_yearly' : 'optimal_particulier_monthly')}
                            style={{ background: '#1a4fba', color: 'white', border: 'none', padding: '11px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                            Souscrire Particulier
                          </button>
                          <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0, textAlign: 'center' }}>Particulier · Usage personnel</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <button onClick={() => handlePaiement(periodeChoisie === 'yearly' ? 'optimal_pro_yearly' : 'optimal_pro_monthly')}
                            style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 8px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer' }}>
                            Souscrire Pro / Asso
                          </button>
                          <p style={{ color: '#9ca3af', fontSize: '10px', margin: 0, textAlign: 'center' }}>Professionnel · Micro-entrepreneur · Association · Collectivité</p>
                        </div>
                      </div>
                    </div>
                    <p style={{ color: '#9ca3af', fontSize: '11px', textAlign: 'center', margin: 0 }}>Sans engagement pour les formules mensuelles · Paiement sécurisé par carte bancaire</p>
                  </>
                )}
              </div>
            )}

            {/* ── PROFIL ── */}
            {onglet === 'profil' && profile && (
              <ProfilOnglet profile={profile} />
            )}

          </div>
        </div>
      </main>

      {/* Modale d'achat de document a l'unite */}
      {achatDoc && (
        <div onClick={() => { if (!achatLoading) setAchatDoc(null) }}
          style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '1rem' }}>
          <div onClick={e => e.stopPropagation()}
            style={{ background: 'white', borderRadius: '14px', padding: '1.5rem', width: '100%', maxWidth: '420px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            {!achatReference ? (
              <>
                <p style={{ color: '#0f2d6e', fontSize: '15px', fontWeight: '700', margin: '0 0 4px' }}>Acheter ce document</p>
                <p style={{ color: '#374151', fontSize: '13px', margin: '0 0 4px', lineHeight: '1.5' }}>{achatDoc.nom}</p>
                <p style={{ color: '#d97706', fontSize: '1.3rem', fontWeight: '700', margin: '0 0 16px' }}>{formatPrix(achatDoc.prix_unitaire) || '?\u00a0€'}</p>
                <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 16px', lineHeight: '1.6' }}>
                  Achat définitif : une fois réglé, le document reste téléchargeable depuis votre espace client. Choisissez votre mode de paiement.
                </p>
                {achatErreur && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                    <AlertCircle size={14} color="#dc2626" style={{ flexShrink: 0 }} />
                    <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{achatErreur}</p>
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button onClick={() => acheterDocument('carte')} disabled={achatLoading}
                    style={{ background: achatLoading ? '#9ca3af' : '#0f2d6e', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: achatLoading ? 'not-allowed' : 'pointer' }}>
                    {achatLoading ? 'Redirection...' : 'Payer par carte bancaire'}
                  </button>
                  <button onClick={() => acheterDocument('virement')} disabled={achatLoading}
                    style={{ background: 'white', color: '#0f2d6e', border: '1px solid #cbd5e1', padding: '12px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: achatLoading ? 'not-allowed' : 'pointer' }}>
                    Payer par virement
                  </button>
                  <button onClick={() => setAchatDoc(null)} disabled={achatLoading}
                    style={{ background: 'transparent', color: '#6b7280', border: 'none', padding: '8px', borderRadius: '8px', fontSize: '12px', cursor: achatLoading ? 'not-allowed' : 'pointer' }}>
                    Annuler
                  </button>
                </div>
                <p style={{ color: '#9ca3af', fontSize: '11px', margin: '12px 0 0', lineHeight: '1.6' }}>
                  Le paiement par carte est immédiat. Le virement ouvre l'accès dès réception, après vérification.
                </p>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <CheckCircle size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '1px' }} />
                  <div>
                    <p style={{ color: '#15803d', fontSize: '14px', fontWeight: '700', margin: '0 0 4px' }}>Commande enregistrée</p>
                    <p style={{ color: '#374151', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>
                      Un email contenant le RIB et la référence vient de vous être envoyé. Votre document sera téléchargeable dès réception et vérification de votre virement.
                    </p>
                  </div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px' }}>
                  <p style={{ color: '#6b7280', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 2px' }}>Référence de votre virement</p>
                  <p style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0, letterSpacing: '0.03em' }}>{achatReference}</p>
                </div>
                <button onClick={() => { setAchatDoc(null); setAchatReference('') }}
                  style={{ width: '100%', background: '#0f2d6e', color: 'white', border: 'none', padding: '11px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
                  Fermer
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <FooterMinimal />
    </>
  )
}

// ── COMPOSANT PROFIL ─────────────────────────────────────────────────────────
function ProfilOnglet({ profile }: { profile: UserProfile }) {
  const [showMigration, setShowMigration] = useState(false)
  const [telephonePro, setTelephonePro] = useState('')
  const [telephoneProPrefixe, setTelephoneProPrefixe] = useState('+33')
  const [migrationData, setMigrationData] = useState({ nom_structure: '', siret: '', rue_pro: '', cp_pro: '', ville_pro: '', email_pro: '' })
  const [migrationStatut, setMigrationStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [migrationErreur, setMigrationErreur] = useState('')
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState({ rue: profile.rue || '', code_postal: profile.code_postal || '', ville: profile.ville || '' })
  const [editTelPrefixe, setEditTelPrefixe] = useState('+33')
  const [editTelNumero, setEditTelNumero] = useState(profile.telephone ? profile.telephone.replace(/^\+\d+\s/, '') : '')
  const [editStatut, setEditStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSaveCoordonnees = async () => {
    setEditStatut('loading')
    try {
      const res = await fetch('/api/profil-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: profile.id, rue: editData.rue, code_postal: editData.code_postal, ville: editData.ville, telephone: editTelNumero ? `${editTelPrefixe} ${editTelNumero}` : '' }),
      })
      if (res.ok) { setEditStatut('success'); setEditMode(false); setTimeout(() => setEditStatut('idle'), 3000) }
      else setEditStatut('error')
    } catch { setEditStatut('error') }
  }

  const handleMigration = async (e: React.FormEvent) => {
    e.preventDefault()
    setMigrationErreur('')
    if (!migrationData.nom_structure || !migrationData.siret) { setMigrationErreur('Le nom commercial et le SIRET sont obligatoires.'); return }
    setMigrationStatut('loading')
    try {
      const res = await fetch('/api/migration-demande', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: profile.id, email: profile.email, prenom: profile.prenom, nom: profile.nom, ...migrationData, telephone_pro: telephonePro ? `${telephoneProPrefixe} ${telephonePro}` : '' }),
      })
      if (res.ok) setMigrationStatut('success')
      else { setMigrationStatut('error'); setMigrationErreur('Une erreur est survenue. Veuillez réessayer.') }
    } catch { setMigrationStatut('error'); setMigrationErreur('Une erreur est survenue.') }
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none' }
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600' as const, color: '#374151', marginBottom: '6px' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: 0 }}>Mon profil</h1>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
        <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 1rem' }}>Informations du compte</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '1rem' }}>
          {[
            { label: 'Prénom', value: profile.prenom },
            { label: 'Nom', value: profile.nom },
            { label: 'Email', value: profile.email },
            { label: 'Type de compte', value: profile.type ? profile.type.charAt(0).toUpperCase() + profile.type.slice(1) : '-' },
          ].map((field, i) => (
            <div key={i}>
              <p style={{ color: '#9ca3af', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>{field.label}</p>
              <p style={{ color: '#374151', fontSize: '14px', margin: 0 }}>{field.value || '-'}</p>
            </div>
          ))}
        </div>
        <p style={{ color: '#9ca3af', fontSize: '12px', margin: '1rem 0 0', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
          Pour modifier votre nom ou email, contactez-nous à <a href="mailto:contact@cholez-pagotto.fr" style={{ color: '#1a4fba' }}>contact@cholez-pagotto.fr</a>
        </p>
      </div>

      <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>Coordonnées</p>
          {!editMode && <button onClick={() => setEditMode(true)} style={{ background: '#eff6ff', color: '#1a4fba', border: '1px solid #bfdbfe', padding: '7px 14px', borderRadius: '7px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Modifier</button>}
        </div>
        {editStatut === 'success' && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '10px 14px', marginBottom: '12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <CheckCircle size={14} color="#16a34a" />
            <p style={{ color: '#15803d', fontSize: '12px', margin: 0 }}>Coordonnées mises à jour.</p>
          </div>
        )}
        {!editMode ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[{ label: 'Adresse', value: profile.rue }, { label: 'Code postal', value: profile.code_postal }, { label: 'Ville', value: profile.ville }, { label: 'Téléphone', value: profile.telephone }].map((f, i) => (
              <div key={i}>
                <p style={{ color: '#9ca3af', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 4px' }}>{f.label}</p>
                <p style={{ color: '#374151', fontSize: '14px', margin: 0 }}>{f.value || '-'}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <label style={labelStyle}>Rue</label>
              <input type="text" value={editData.rue} onChange={e => setEditData({ ...editData, rue: e.target.value })} placeholder="12 rue de la République" style={inputStyle} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px' }}>
              <div>
                <label style={labelStyle}>Code postal</label>
                <input type="text" value={editData.code_postal} onChange={e => setEditData({ ...editData, code_postal: e.target.value })} placeholder="75001" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Ville</label>
                <input type="text" value={editData.ville} onChange={e => setEditData({ ...editData, ville: e.target.value })} placeholder="Paris" style={inputStyle} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Téléphone</label>
              <PhoneInput prefixe={editTelPrefixe} onPrefixeChange={setEditTelPrefixe} numero={editTelNumero} onNumeroChange={setEditTelNumero} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleSaveCoordonnees} disabled={editStatut === 'loading'} style={{ background: editStatut === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: editStatut === 'loading' ? 'not-allowed' : 'pointer' }}>
                {editStatut === 'loading' ? 'Enregistrement...' : 'Enregistrer'}
              </button>
              <button onClick={() => { setEditMode(false); setEditStatut('idle') }} style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '10px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>

      {profile.type === 'particulier' && (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
            <div>
              <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>Faire évoluer mon compte</p>
              <p style={{ color: '#6b7280', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>Vous avez créé votre entreprise ou votre association ? Migrez vers un compte Professionnel.</p>
            </div>
            {!showMigration && migrationStatut !== 'success' && (
              <button onClick={() => setShowMigration(true)} style={{ background: '#eff6ff', color: '#1a4fba', border: '1px solid #bfdbfe', padding: '9px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', flexShrink: 0 }}>
                Faire une demande
              </button>
            )}
          </div>
          {migrationStatut === 'success' && (
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '1rem', marginTop: '1rem', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <CheckCircle size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '1px' }} />
              <div>
                <p style={{ color: '#15803d', fontSize: '13px', fontWeight: '700', margin: '0 0 4px' }}>Demande envoyée</p>
                <p style={{ color: '#374151', fontSize: '12px', margin: 0, lineHeight: '1.6' }}>Votre demande a bien été transmise. Validation sous 24h, confirmation par email.</p>
              </div>
            </div>
          )}
          {showMigration && migrationStatut !== 'success' && (
            <form onSubmit={handleMigration} style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {migrationErreur && (
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '10px 12px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <AlertCircle size={14} color="#dc2626" />
                  <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{migrationErreur}</p>
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom commercial / Structure *</label>
                  <input type="text" value={migrationData.nom_structure} onChange={e => setMigrationData({ ...migrationData, nom_structure: e.target.value })} placeholder="Nom de votre entreprise" style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>Numéro SIRET *</label>
                  <input type="text" value={migrationData.siret} onChange={e => setMigrationData({ ...migrationData, siret: e.target.value })} placeholder="000 000 000 00000" style={inputStyle} required />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Adresse professionnelle</label>
                <input type="text" value={migrationData.rue_pro} onChange={e => setMigrationData({ ...migrationData, rue_pro: e.target.value })} placeholder="Rue" style={{ ...inputStyle, marginBottom: '8px' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '8px' }}>
                  <input type="text" value={migrationData.cp_pro} onChange={e => setMigrationData({ ...migrationData, cp_pro: e.target.value })} placeholder="Code postal" style={inputStyle} />
                  <input type="text" value={migrationData.ville_pro} onChange={e => setMigrationData({ ...migrationData, ville_pro: e.target.value })} placeholder="Ville" style={inputStyle} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Email professionnel</label>
                  <input type="email" value={migrationData.email_pro} onChange={e => setMigrationData({ ...migrationData, email_pro: e.target.value })} placeholder="contact@structure.fr" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Téléphone professionnel</label>
                  <PhoneInput prefixe={telephoneProPrefixe} onPrefixeChange={setTelephoneProPrefixe} numero={telephonePro} onNumeroChange={setTelephonePro} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={migrationStatut === 'loading'} style={{ background: migrationStatut === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: migrationStatut === 'loading' ? 'not-allowed' : 'pointer' }}>
                  {migrationStatut === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>
                <button type="button" onClick={() => { setShowMigration(false); setMigrationErreur('') }} style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '11px 20px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                  Annuler
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
