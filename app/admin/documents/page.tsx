'use client'

import { useState, useEffect, useCallback } from 'react'
import type { CSSProperties } from 'react'
import { useAdmin } from '@/app/admin/layout'
import { Upload, FileText, Eye, EyeOff, Plus, X, ExternalLink, Trash2 } from 'lucide-react'
import { CategorySearch } from '@/components/CategorySearch'
import { DocumentSearch } from '@/components/DocumentSearch'
import type { DocItem, Categorie } from '@/lib/types'
import { formatPrix } from '@/lib/format'

const PROFILS = [
  { value: 'particulier', label: 'Particulier' },
  { value: 'professionnel', label: 'Professionnel' },
  { value: 'association', label: 'Association' },
  { value: 'collectivite', label: 'Collectivité' },
]

type EditFormType = {
  nom: string
  description: string
  categories: string[]
  profils: string[]
  acces_gratuit: boolean
  acces_optimal: boolean
  acces_payant: boolean
  prix: string
  ordre: string
  type: string
  slug: string
  sous_titre: string
  contenu: string
  image_url: string
  modeles_lies: string
  articles_lies: string
  services_lies: string
  inclus_dans: string
  contient: string
  cadre_legal: string
  conseil: string
  definitions: Record<string, string>[]
  faq: Record<string, string>[]
  date_maj: string
  masque_catalogue: boolean
  file: File | null
}

const emptyForm = {
  nom: '', description: '', categories: [],
  profils: ['particulier', 'professionnel', 'association', 'collectivite'],
  acces_gratuit: false, acces_optimal: true, acces_payant: false,
  prix: '', ordre: '0',
  type: 'document', slug: '', sous_titre: '', contenu: '', image_url: '',
  modeles_lies: '', articles_lies: '', services_lies: '', inclus_dans: '', contient: '',
  cadre_legal: '', conseil: '', date_maj: '',
  definitions: [] as Record<string, string>[], faq: [] as Record<string, string>[],
  masque_catalogue: false,
  file: null as File | null,
}

function slugify(s: string): string {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 80)
}
function toArr(s: string): string[] {
  return (s || '').split(',').map((x) => x.trim()).filter(Boolean)
}

function EditeurListe({
  items, onChange, champs, labelAjout, inputStyle,
}: {
  items: Record<string, string>[]
  onChange: (next: Record<string, string>[]) => void
  champs: { cle: string; label: string; multi?: boolean }[]
  labelAjout: string
  inputStyle: CSSProperties
}) {
  const maj = (i: number, cle: string, val: string) => onChange(items.map((it, j) => (j === i ? { ...it, [cle]: val } : it)))
  const champStyle = { ...inputStyle, marginBottom: '6px' }
  return (
    <div>
      {items.map((it, i) => (
        <div key={i} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px', marginBottom: '8px', background: '#f8fafc' }}>
          {champs.map((c) =>
            c.multi ? (
              <textarea key={c.cle} value={it[c.cle] || ''} onChange={(e) => maj(i, c.cle, e.target.value)} placeholder={c.label} rows={2} style={{ ...champStyle, resize: 'vertical', fontFamily: 'inherit' }} />
            ) : (
              <input key={c.cle} type="text" value={it[c.cle] || ''} onChange={(e) => maj(i, c.cle, e.target.value)} placeholder={c.label} style={champStyle} />
            ),
          )}
          <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} style={{ background: 'none', border: 'none', color: '#dc2626', fontSize: '12px', fontWeight: 600, cursor: 'pointer', padding: 0 }}>
            Supprimer
          </button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...items, Object.fromEntries(champs.map((c) => [c.cle, '']))])} style={{ background: '#eef2ff', border: '1px dashed #1a4fba', color: '#1a4fba', fontSize: '12px', fontWeight: 600, cursor: 'pointer', padding: '8px 12px', borderRadius: '6px', width: '100%' }}>
        + {labelAjout}
      </button>
    </div>
  )
}

function RessourceFields({ f, setF, inputStyle, labelStyle }: { f: EditFormType, setF: (v: EditFormType) => void, inputStyle: CSSProperties, labelStyle: CSSProperties }) {
  const note = { fontWeight: 400 as const, color: '#9ca3af' }
  return (
    <>
      <div style={{ borderTop: '1px dashed #e5e7eb', paddingTop: '14px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#0f2d6e', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Page dediee et maillage (SEO)</p>
        <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>Genere la page publique /catalogue/[slug]. Slug vide = pas de page individuelle.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '12px' }}>
        <div>
          <label style={labelStyle}>Type</label>
          <select value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })} style={inputStyle}>
            <option value="document">Document</option>
            <option value="pack">Pack</option>
            <option value="guide">Guide</option>
            <option value="livre">Livre</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Slug URL <span style={note}>(vide = genere depuis le nom)</span></label>
          <input type="text" value={f.slug} onChange={(e) => setF({ ...f, slug: e.target.value })} placeholder="modele-mise-en-demeure-impayes" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Sous-titre (accroche)</label>
        <input type="text" value={f.sous_titre} onChange={(e) => setF({ ...f, sous_titre: e.target.value })} placeholder="Phrase affichee sous le titre" style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Contenu de la page <span style={note}>(Markdown : ## titre, - liste, **gras**)</span></label>
        <textarea value={f.contenu} onChange={(e) => setF({ ...f, contenu: e.target.value })} rows={6} placeholder="Texte de la page en Markdown" style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
      </div>
      <div>
        <label style={labelStyle}>Image de couverture (URL)</label>
        <input type="text" value={f.image_url} onChange={(e) => setF({ ...f, image_url: e.target.value })} placeholder="https://..." style={inputStyle} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={labelStyle}>Modeles lies <span style={note}>(slugs, virgules)</span></label>
          <input type="text" value={f.modeles_lies} onChange={(e) => setF({ ...f, modeles_lies: e.target.value })} placeholder="slug-1, slug-2" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Articles de blog lies <span style={note}>(slugs, virgules)</span></label>
          <input type="text" value={f.articles_lies} onChange={(e) => setF({ ...f, articles_lies: e.target.value })} placeholder="slug-article" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Services lies <span style={note}>(chemins, virgules)</span></label>
          <input type="text" value={f.services_lies} onChange={(e) => setF({ ...f, services_lies: e.target.value })} placeholder="/rgpd-conformite" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Inclus dans le pack <span style={note}>(slugs, virgules)</span></label>
          <input type="text" value={f.inclus_dans} onChange={(e) => setF({ ...f, inclus_dans: e.target.value })} placeholder="slug-pack" style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Contient <span style={note}>(pack/guide : slugs des documents inclus, virgules)</span></label>
        <input type="text" value={f.contient} onChange={(e) => setF({ ...f, contient: e.target.value })} placeholder="slug-doc-1, slug-doc-2" style={inputStyle} />
      </div>
      <div style={{ borderTop: '1px dashed #e5e7eb', paddingTop: '14px' }}>
        <p style={{ fontSize: '12px', fontWeight: 700, color: '#0f2d6e', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Fiche produit (contenu enrichi)</p>
        <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>Sections affichees seulement si remplies.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 170px', gap: '12px' }}>
        <div>
          <label style={labelStyle}>Ce que dit la loi <span style={note}>(encadre juridique)</span></label>
          <textarea value={f.cadre_legal} onChange={(e) => setF({ ...f, cadre_legal: e.target.value })} rows={3} placeholder="Reference et explication du cadre legal applicable" style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
        </div>
        <div>
          <label style={labelStyle}>Mis a jour le</label>
          <input type="date" value={f.date_maj} onChange={(e) => setF({ ...f, date_maj: e.target.value })} style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Le conseil de notre juriste</label>
        <textarea value={f.conseil} onChange={(e) => setF({ ...f, conseil: e.target.value })} rows={3} placeholder="Conseil pratique affiche dans l'encadre jaune" style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
      </div>
      <div>
        <label style={labelStyle}>Definitions utiles <span style={note}>(colonne de droite)</span></label>
        <EditeurListe items={f.definitions} onChange={(n) => setF({ ...f, definitions: n })} champs={[{ cle: 'terme', label: 'Terme' }, { cle: 'definition', label: 'Definition', multi: true }]} labelAjout="Ajouter une definition" inputStyle={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Questions frequentes redigees <span style={note}>(en plus des questions automatiques)</span></label>
        <EditeurListe items={f.faq} onChange={(n) => setF({ ...f, faq: n })} champs={[{ cle: 'question', label: 'Question' }, { cle: 'reponse', label: 'Reponse', multi: true }]} labelAjout="Ajouter une question" inputStyle={inputStyle} />
      </div>
    </>
  )
}

export default function AdminDocuments() {
  const { password } = useAdmin()
  const [documents, setDocuments] = useState<DocItem[]>([])
  const [documentsFiltrés, setDocumentsFiltrés] = useState<DocItem[]>([])
  const [categories, setCategories] = useState<Categorie[]>([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState<EditFormType>({ ...emptyForm })
  const [uploadStatut, setUploadStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [uploadErreur, setUploadErreur] = useState('')
  const [nouvelleCat, setNouvelleCat] = useState('')
  const [ajoutCatStatut, setAjoutCatStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [ajoutCatErreur, setAjoutCatErreur] = useState('')
  const [suppressionCat, setSuppressionCat] = useState<string | null>(null)
  const [editDoc, setEditDoc] = useState<DocItem | null>(null)
  const [editForm, setEditForm] = useState<EditFormType | null>(null)
  const [editStatut, setEditStatut] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [editErreur, setEditErreur] = useState('')

  const loadDocuments = useCallback(async (pwd: string) => {
    setLoading(true)
    const res = await fetch('/api/admin/documents-list', { headers: { 'x-admin-password': pwd } })
    if (res.ok) { const d = await res.json(); setDocuments(d.documents || []); setDocumentsFiltrés(d.documents || []) }
    setLoading(false)
  }, [])

  const loadCategories = useCallback(async (pwd: string) => {
    const res = await fetch('/api/admin/categories-list', { headers: { 'x-admin-password': pwd } })
    if (res.ok) { const d = await res.json(); setCategories(d.categories || []) }
  }, [])

  useEffect(() => {
    if (!password) return
    loadDocuments(password)
    loadCategories(password)
  }, [password])



  const handleAjoutCategorie = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nouvelleCat.trim()) return
    setAjoutCatStatut('loading'); setAjoutCatErreur('')
    try {
      const res = await fetch('/api/admin/categories-add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ nom: nouvelleCat.trim() }),
      })
      const data = await res.json()
      if (res.ok) { setAjoutCatStatut('success'); setNouvelleCat(''); loadCategories(password); setTimeout(() => setAjoutCatStatut('idle'), 2000) }
      else { setAjoutCatStatut('error'); setAjoutCatErreur(data.error || `Erreur ${res.status}`); setTimeout(() => setAjoutCatStatut('idle'), 3000) }
    } catch { setAjoutCatStatut('error'); setAjoutCatErreur('Erreur réseau.'); setTimeout(() => setAjoutCatStatut('idle'), 3000) }
  }

  const handleSuppressionCategorie = async (catId: string, catNom: string) => {
    const docsUtilisant = documents.filter(d => d.categories?.includes(catNom))
    const msg = docsUtilisant.length > 0
      ? `${docsUtilisant.length} document(s) utilisent "${catNom}".\nElle sera retirée de ces documents.\nConfirmer ?`
      : `Supprimer la catégorie "${catNom}" ?`
    if (!window.confirm(msg)) return
    setSuppressionCat(catId)
    await fetch('/api/admin/categories-delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ id: catId, nom: catNom }),
    })
    setSuppressionCat(null)
    loadCategories(password)
    loadDocuments(password)
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.nom) { setUploadErreur('Nom obligatoire.'); return }
    if (form.type === 'document' && !form.file) { setUploadErreur('Fichier DOCX obligatoire pour un document.'); return }
    if (!form.acces_gratuit && !form.acces_optimal && !form.acces_payant) { setUploadErreur("Sélectionnez au moins un niveau d'accès."); return }
    setUploadStatut('loading'); setUploadErreur('')
    const fd = new FormData()
    if (form.file) fd.append('file', form.file)
    fd.append('nom', form.nom); fd.append('description', form.description)
    fd.append('type', form.type); fd.append('slug', form.slug); fd.append('sous_titre', form.sous_titre); fd.append('contenu', form.contenu); fd.append('image_url', form.image_url)
    fd.append('modeles_lies', form.modeles_lies); fd.append('articles_lies', form.articles_lies); fd.append('services_lies', form.services_lies); fd.append('inclus_dans', form.inclus_dans); fd.append('contient', form.contient)
    fd.append('categories', JSON.stringify(form.categories)); fd.append('profils', JSON.stringify(form.profils))
    fd.append('acces_gratuit', String(form.acces_gratuit)); fd.append('acces_optimal', String(form.acces_optimal)); fd.append('acces_payant', String(form.acces_payant)); fd.append('masque_catalogue', String(form.masque_catalogue))
    if (form.prix) fd.append('prix', form.prix)
    fd.append('ordre', form.ordre)
    fd.append('cadre_legal', form.cadre_legal); fd.append('conseil', form.conseil); fd.append('date_maj', form.date_maj)
    fd.append('definitions', JSON.stringify(form.definitions)); fd.append('faq', JSON.stringify(form.faq))
    const res = await fetch('/api/documents/upload', { method: 'POST', headers: { 'x-admin-password': password }, body: fd })
    if (res.ok) { setUploadStatut('success'); setShowForm(false); setForm({ ...emptyForm }); loadDocuments(password); setTimeout(() => setUploadStatut('idle'), 3000) }
    else { setUploadStatut('error'); setUploadErreur("Erreur lors de l'upload.") }
  }

  const ouvrirEdition = (doc: DocItem) => {
    setEditDoc(doc)
    setEditForm({ nom: doc.nom, description: doc.description || '', categories: doc.categories || [], profils: doc.profils_autorises || [], acces_gratuit: doc.acces_gratuit, acces_optimal: doc.acces_optimal, acces_payant: doc.acces_payant, prix: doc.prix_unitaire ? String(doc.prix_unitaire) : '', ordre: String(doc.ordre), type: doc.type || 'document', slug: doc.slug || '', sous_titre: doc.sous_titre || '', contenu: doc.contenu || '', image_url: doc.image_url || '', modeles_lies: (doc.modeles_lies || []).join(', '), articles_lies: (doc.articles_lies || []).join(', '), services_lies: (doc.services_lies || []).join(', '), inclus_dans: (doc.inclus_dans || []).join(', '), contient: (doc.contient || []).join(', '), cadre_legal: doc.cadre_legal || '', conseil: doc.conseil || '', date_maj: doc.date_maj || '', definitions: doc.definitions || [], faq: doc.faq || [], masque_catalogue: !!doc.masque_catalogue, file: null })
    setEditStatut('idle'); setEditErreur('')
  }

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editDoc || !editForm) return
    if (!editForm.acces_gratuit && !editForm.acces_optimal && !editForm.acces_payant) { setEditErreur("Sélectionnez au moins un niveau d'accès."); return }
    setEditStatut('loading'); setEditErreur('')
    try {
      let blobUrl = editDoc.blob_url
      if (editForm.file) {
        const fd = new FormData()
        fd.append('file', editForm.file); fd.append('nom', editForm.nom); fd.append('description', editForm.description)
        fd.append('categories', JSON.stringify(editForm.categories)); fd.append('profils', JSON.stringify(editForm.profils))
        fd.append('acces_gratuit', String(editForm.acces_gratuit)); fd.append('acces_optimal', String(editForm.acces_optimal)); fd.append('acces_payant', String(editForm.acces_payant)); fd.append('masque_catalogue', String(editForm.masque_catalogue))
        if (editForm.prix) fd.append('prix', editForm.prix)
        fd.append('ordre', editForm.ordre); fd.append('replace_id', editDoc.id)
        const res = await fetch('/api/documents/upload', { method: 'POST', headers: { 'x-admin-password': password }, body: fd })
        if (!res.ok) { setEditStatut('error'); setEditErreur("Erreur lors de l'upload du fichier."); return }
        const data = await res.json()
        blobUrl = data.document?.blob_url || blobUrl
      }
      const res = await fetch('/api/admin/documents-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
        body: JSON.stringify({ id: editDoc.id, nom: editForm.nom, description: editForm.description, categories: editForm.categories, profils_autorises: editForm.profils, acces_gratuit: editForm.acces_gratuit, acces_optimal: editForm.acces_optimal, acces_payant: editForm.acces_payant, masque_catalogue: editForm.masque_catalogue, prix_unitaire: editForm.prix ? parseFloat(editForm.prix) : null, ordre: parseInt(editForm.ordre), blob_url: blobUrl, type: editForm.type, slug: editForm.slug.trim() ? slugify(editForm.slug) : slugify(editForm.nom), sous_titre: editForm.sous_titre || null, contenu: editForm.contenu || null, image_url: editForm.image_url || null, modeles_lies: toArr(editForm.modeles_lies), articles_lies: toArr(editForm.articles_lies), services_lies: toArr(editForm.services_lies), inclus_dans: toArr(editForm.inclus_dans), contient: toArr(editForm.contient), cadre_legal: editForm.cadre_legal || null, conseil: editForm.conseil || null, date_maj: editForm.date_maj || null, definitions: editForm.definitions, faq: editForm.faq }),
      })
      if (res.ok) { setEditStatut('success'); setEditDoc(null); setEditForm(null); loadDocuments(password) }
      else { setEditStatut('error'); setEditErreur('Erreur lors de la mise à jour.') }
    } catch { setEditStatut('error'); setEditErreur('Erreur inattendue.') }
  }

  const toggleActif = async (doc: DocItem) => {
    await fetch('/api/admin/documents-update', { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-admin-password': password }, body: JSON.stringify({ id: doc.id, actif: !doc.actif }) })
    loadDocuments(password)
  }

  const handleDelete = async (doc: DocItem) => {
    if (!confirm(`Supprimer définitivement « ${doc.nom} » ? Le document et son fichier seront retirés. Cette action est irréversible.`)) return
    const res = await fetch('/api/admin/documents-delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': password },
      body: JSON.stringify({ id: doc.id }),
    })
    if (res.ok) loadDocuments(password)
    else alert('Erreur lors de la suppression.')
  }

  const accesLabel = (doc: DocItem) => {
    const parts: string[] = []
    if (doc.acces_gratuit) parts.push('Gratuit')
    if (doc.acces_optimal) parts.push('Optimal')
    if (doc.acces_payant) parts.push(formatPrix(doc.prix_unitaire) || "À l'unité")
    return parts.join(' · ') || '-'
  }

  const accesColor = (doc: DocItem) => {
    if (doc.acces_gratuit) return { bg: '#f0fdf4', color: '#15803d' }
    if (doc.acces_optimal) return { bg: '#eff6ff', color: '#1a4fba' }
    return { bg: '#fff7ed', color: '#d97706' }
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', boxSizing: 'border-box' as const, outline: 'none' }
  const labelStyle = { display: 'block', fontSize: '12px', fontWeight: '600' as const, color: '#374151', marginBottom: '6px' }

  const AccesCheckboxes = ({ f, setF }: { f: EditFormType, setF: (v: EditFormType) => void }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[
        { key: 'acces_gratuit' as const, label: 'Gratuit', sub: "Accessible à tout compte", color: '#16a34a', bg: '#f0fdf4', border: '#16a34a' },
        { key: 'acces_optimal' as const, label: 'Abonnement Optimal', sub: "Inclus dans l'abonnement Optimal", color: '#1a4fba', bg: '#eff6ff', border: '#1a4fba' },
        { key: 'acces_payant' as const, label: "Achat à l'unité", sub: "Achetable individuellement", color: '#d97706', bg: '#fff7ed', border: '#d97706' },
      ].map(item => (
        <div key={item.key} style={{ border: `1px solid ${f[item.key] ? item.border : '#e5e7eb'}`, borderRadius: '8px', background: f[item.key] ? item.bg : 'white' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '10px 14px' }}>
            <input type="checkbox" checked={f[item.key]} onChange={ev => setF({ ...f, [item.key]: ev.target.checked })} style={{ width: '16px', height: '16px', accentColor: item.color }} />
            <div>
              <p style={{ color: item.color, fontSize: '13px', fontWeight: '700', margin: 0 }}>{item.label}</p>
              <p style={{ color: '#6b7280', fontSize: '11px', margin: 0 }}>{item.sub}</p>
            </div>
          </label>
          {item.key === 'acces_payant' && f.acces_payant && (
            <div style={{ padding: '0 14px 12px' }}>
              <label style={labelStyle}>Prix unitaire (€) *</label>
              <input type="number" value={f.prix} onChange={ev => setF({ ...f, prix: ev.target.value })} placeholder="Ex. 9.90" step="0.01" min="0.01" style={{ ...inputStyle, maxWidth: '200px' }} required />
            </div>
          )}
        </div>
      ))}
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '10px 14px', border: `1px solid ${f.masque_catalogue ? '#7c3aed' : '#e5e7eb'}`, borderRadius: '8px', background: f.masque_catalogue ? '#f5f3ff' : 'white' }}>
        <input type="checkbox" checked={f.masque_catalogue} onChange={ev => setF({ ...f, masque_catalogue: ev.target.checked })} style={{ width: '16px', height: '16px', accentColor: '#7c3aed' }} />
        <div>
          <p style={{ color: '#7c3aed', fontSize: '13px', fontWeight: '700', margin: 0 }}>Masquer du catalogue public</p>
          <p style={{ color: '#6b7280', fontSize: '11px', margin: 0 }}>Le fichier reste actif et telechargeable via un pack, mais n'apparait ni dans la grille ni dans la recherche ni sur sa propre page</p>
        </div>
      </label>
    </div>
  )

  const ProfilsButtons = ({ f, setF }: { f: EditFormType, setF: (v: EditFormType) => void }) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {PROFILS.map(p => (
        <button key={p.value} type="button"
          onClick={() => setF({ ...f, profils: f.profils.includes(p.value) ? f.profils.filter((x: string) => x !== p.value) : [...f.profils, p.value] })}
          style={{ padding: '7px 14px', borderRadius: '8px', border: `1px solid ${f.profils.includes(p.value) ? '#0f2d6e' : '#e5e7eb'}`, background: f.profils.includes(p.value) ? '#0f2d6e' : 'white', color: f.profils.includes(p.value) ? 'white' : '#6b7280', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
          {p.label}
        </button>
      ))}
    </div>
  )

  return (
    <main style={{ background: '#f8fafc', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ color: '#0f2d6e', fontSize: '1.4rem', fontWeight: '700', margin: '0 0 4px' }}>Bibliothèque de documents</h1>
            <p style={{ color: '#6b7280', fontSize: '13px', margin: 0 }}>{documents.length} document{documents.length > 1 ? 's' : ''} · {categories.length} catégorie{categories.length > 1 ? 's' : ''}</p>
          </div>
          <button onClick={() => setShowForm(true)}
            style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Plus size={16} /> Ajouter un document
          </button>
        </div>

        {uploadStatut === 'success' && (
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '12px 16px', marginBottom: '1rem' }}>
            <p style={{ color: '#15803d', fontSize: '13px', margin: 0 }}>✓ Document uploadé avec succès.</p>
          </div>
        )}

        {/* Catégories */}
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
          <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: '0 0 12px' }}>Catégories</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
            {categories.sort((a, b) => a.ordre - b.ordre).map(cat => (
              <span key={cat.id} style={{ background: '#f3f4f6', color: '#374151', fontSize: '12px', padding: '4px 8px 4px 12px', borderRadius: '20px', border: '1px solid #e5e7eb', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                {cat.nom}
                <button onClick={() => handleSuppressionCategorie(cat.id, cat.nom)} disabled={suppressionCat === cat.id}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af', padding: 0, fontSize: '14px', lineHeight: 1 }}>
                  {suppressionCat === cat.id ? '...' : '×'}
                </button>
              </span>
            ))}
          </div>
          <form onSubmit={handleAjoutCategorie} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="text" value={nouvelleCat} onChange={e => { setNouvelleCat(e.target.value); setAjoutCatErreur('') }}
                placeholder="Nouvelle catégorie..."
                style={{ flex: 1, padding: '8px 12px', border: `1px solid ${ajoutCatStatut === 'error' ? '#dc2626' : '#d1d5db'}`, borderRadius: '8px', fontSize: '13px', outline: 'none' }} />
              <button type="submit" disabled={ajoutCatStatut === 'loading'}
                style={{ background: ajoutCatStatut === 'success' ? '#16a34a' : ajoutCatStatut === 'error' ? '#dc2626' : '#1a4fba', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '700', cursor: 'pointer', flexShrink: 0 }}>
                {ajoutCatStatut === 'success' ? '✓ Ajoutée' : ajoutCatStatut === 'loading' ? '...' : ajoutCatStatut === 'error' ? '✗ Erreur' : '+ Ajouter'}
              </button>
            </div>
            {ajoutCatErreur && <p style={{ color: '#dc2626', fontSize: '11px', margin: 0 }}>{ajoutCatErreur}</p>}
          </form>
        </div>

        {/* Formulaire upload */}
        {showForm && (
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h2 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: 0 }}>Nouveau document</h2>
              <button onClick={() => setShowForm(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={18} /></button>
            </div>
            <form onSubmit={handleUpload} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom du document *</label>
                  <input type="text" value={form.nom} onChange={e => setForm({ ...form, nom: e.target.value })} placeholder="Ex. Contrat de travail CDI" style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>Fichier DOCX *</label>
                  <input type="file" accept=".docx,.pdf" onChange={e => setForm({ ...form, file: e.target.files?.[0] || null })} style={{ ...inputStyle, padding: '8px 12px' }} required={form.type === 'document'} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Description</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Courte description..." rows={2} style={{ ...inputStyle, resize: 'vertical' as const }} />
              </div>
              <div>
                <label style={labelStyle}>Catégories</label>
                <CategorySearch categories={categories} selected={form.categories}
                  onToggle={(nom: string) => setForm({ ...form, categories: form.categories.includes(nom) ? form.categories.filter((c: string) => c !== nom) : [...form.categories, nom] })}
                  placeholder="Rechercher une catégorie (ex: bail, assistante sociale...)" />
              </div>
              <div>
                <label style={labelStyle}>Profils autorisés</label>
                <ProfilsButtons f={form} setF={setForm} />
              </div>
              <div>
                <label style={labelStyle}>Niveaux d'accès <span style={{ fontWeight: '400', color: '#9ca3af' }}>(plusieurs possibles)</span></label>
                <AccesCheckboxes f={form} setF={setForm} />
              </div>
              <div style={{ maxWidth: '200px' }}>
                <label style={labelStyle}>Ordre d'affichage</label>
                <input type="number" value={form.ordre} onChange={e => setForm({ ...form, ordre: e.target.value })} style={inputStyle} />
              </div>
              <RessourceFields f={form} setF={setForm} inputStyle={inputStyle} labelStyle={labelStyle} />
              {uploadErreur && <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{uploadErreur}</p>}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={uploadStatut === 'loading'}
                  style={{ background: uploadStatut === 'loading' ? '#6b7280' : '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: uploadStatut === 'loading' ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Upload size={15} /> {uploadStatut === 'loading' ? 'Upload en cours...' : 'Uploader le document'}
                </button>
                <button type="button" onClick={() => setShowForm(false)}
                  style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '11px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Formulaire édition */}
        {editDoc && editForm && (
          <div style={{ background: 'white', border: '2px solid #d97706', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <h2 style={{ color: '#0f2d6e', fontSize: '14px', fontWeight: '700', margin: '0 0 2px' }}>Modifier le document</h2>
                <p style={{ color: '#9ca3af', fontSize: '11px', margin: 0 }}>{editDoc.nom}</p>
              </div>
              <button onClick={() => { setEditDoc(null); setEditForm(null) }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#9ca3af' }}><X size={18} /></button>
            </div>
            <form onSubmit={handleEdit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={labelStyle}>Nom du document *</label>
                  <input type="text" value={editForm.nom} onChange={e => setEditForm({ ...editForm, nom: e.target.value })} style={inputStyle} required />
                </div>
                <div>
                  <label style={labelStyle}>Nouveau fichier DOCX <span style={{ fontWeight: '400', color: '#9ca3af' }}>(laisser vide pour conserver)</span></label>
                  <input type="file" accept=".docx" onChange={e => setEditForm({ ...editForm, file: e.target.files?.[0] || null })} style={{ ...inputStyle, padding: '8px 12px' }} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Description</label>
                <textarea value={editForm.description} onChange={e => setEditForm({ ...editForm, description: e.target.value })} rows={2} style={{ ...inputStyle, resize: 'vertical' as const }} />
              </div>
              <div>
                <label style={labelStyle}>Catégories</label>
                <CategorySearch categories={categories} selected={editForm.categories}
                  onToggle={(nom: string) => setEditForm({ ...editForm, categories: editForm.categories.includes(nom) ? editForm.categories.filter((c: string) => c !== nom) : [...editForm.categories, nom] })}
                  placeholder="Rechercher une catégorie..." />
              </div>
              <div>
                <label style={labelStyle}>Profils autorisés</label>
                <ProfilsButtons f={editForm} setF={setEditForm} />
              </div>
              <div>
                <label style={labelStyle}>Niveaux d'accès</label>
                <AccesCheckboxes f={editForm} setF={setEditForm} />
              </div>
              <div style={{ maxWidth: '200px' }}>
                <label style={labelStyle}>Ordre d'affichage</label>
                <input type="number" value={editForm.ordre} onChange={e => setEditForm({ ...editForm, ordre: e.target.value })} style={inputStyle} />
              </div>
              <RessourceFields f={editForm} setF={setEditForm} inputStyle={inputStyle} labelStyle={labelStyle} />
              {editErreur && <p style={{ color: '#dc2626', fontSize: '12px', margin: 0 }}>{editErreur}</p>}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" disabled={editStatut === 'loading'}
                  style={{ background: editStatut === 'loading' ? '#6b7280' : '#d97706', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: editStatut === 'loading' ? 'not-allowed' : 'pointer' }}>
                  {editStatut === 'loading' ? 'Enregistrement...' : '✎ Enregistrer les modifications'}
                </button>
                <button type="button" onClick={() => { setEditDoc(null); setEditForm(null) }}
                  style={{ background: 'transparent', color: '#6b7280', border: '1px solid #e5e7eb', padding: '11px 18px', borderRadius: '8px', fontSize: '13px', cursor: 'pointer' }}>
                  Annuler
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Recherche documents */}
        {!loading && documents.length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            <DocumentSearch documents={documents} onChange={(filtered: DocItem[]) => setDocumentsFiltrés(filtered)} placeholder="Rechercher un document par nom, description ou catégorie..." />
            {documentsFiltrés.length !== documents.length && (
              <p style={{ color: '#6b7280', fontSize: '12px', margin: '6px 0 0' }}>
                {documentsFiltrés.length} résultat{documentsFiltrés.length > 1 ? 's' : ''} sur {documents.length} documents
              </p>
            )}
          </div>
        )}

        {/* Liste documents */}
        {loading ? (
          <p style={{ color: '#6b7280', fontSize: '13px', textAlign: 'center', padding: '2rem' }}>Chargement...</p>
        ) : documents.length === 0 ? (
          <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
            <FileText size={32} color="#d1d5db" strokeWidth={1} style={{ marginBottom: '12px' }} />
            <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 16px' }}>Aucun document au catalogue.</p>
            <button onClick={() => setShowForm(true)}
              style={{ background: '#0f2d6e', color: 'white', border: 'none', padding: '11px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: '700', cursor: 'pointer' }}>
              Ajouter le premier document
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {documentsFiltrés.sort((a, b) => a.ordre - b.ordre).map(doc => {
              const colors = accesColor(doc)
              return (
                <div key={doc.id} style={{ background: 'white', border: `1px solid ${doc.actif ? '#e5e7eb' : '#f3f4f6'}`, borderRadius: '12px', padding: '1.25rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', opacity: doc.actif ? 1 : 0.6 }}>
                  <div style={{ width: '40px', height: '40px', background: doc.actif ? '#eff6ff' : '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <FileText size={18} color={doc.actif ? '#1a4fba' : '#9ca3af'} strokeWidth={1.5} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <p style={{ color: '#0f2d6e', fontSize: '13px', fontWeight: '700', margin: 0 }}>{doc.nom}</p>
                      <span style={{ background: colors.bg, color: colors.color, fontSize: '10px', fontWeight: '700', padding: '1px 7px', borderRadius: '4px' }}>{accesLabel(doc)}</span>
                      {!doc.actif && <span style={{ background: '#f3f4f6', color: '#9ca3af', fontSize: '10px', fontWeight: '600', padding: '1px 7px', borderRadius: '4px' }}>Désactivé</span>}
                      {doc.masque_catalogue && <span style={{ background: '#f5f3ff', color: '#7c3aed', fontSize: '10px', fontWeight: '600', padding: '1px 7px', borderRadius: '4px' }}>Masqué (pack uniquement)</span>}
                    </div>
                    {doc.description && <p style={{ color: '#6b7280', fontSize: '12px', margin: '0 0 6px', lineHeight: '1.5' }}>{doc.description}</p>}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {doc.categories?.map((cat: string) => (
                        <span key={cat} style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '10px', padding: '1px 7px', borderRadius: '4px' }}>{cat}</span>
                      ))}
                      {doc.profils_autorises?.map((p: string) => (
                        <span key={p} style={{ background: '#f8fafc', color: '#9ca3af', fontSize: '10px', padding: '1px 7px', borderRadius: '4px', border: '1px solid #e5e7eb' }}>{p}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                    <button onClick={() => ouvrirEdition(doc)} title="Modifier"
                      style={{ background: '#fff7ed', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '33px', height: '33px' }}>
                      <span style={{ fontSize: '14px', lineHeight: 1 }}>✎</span>
                    </button>
                    <button onClick={() => toggleActif(doc)} title={doc.actif ? 'Désactiver' : 'Activer'}
                      style={{ background: '#f3f4f6', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      {doc.actif ? <EyeOff size={15} color="#6b7280" /> : <Eye size={15} color="#6b7280" />}
                    </button>
                    {doc.slug && (
                      <a href={`/catalogue/${doc.slug}`} target="_blank" rel="noopener noreferrer" title="Voir la page publique"
                        style={{ background: '#f0fdf4', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '33px', height: '33px', textDecoration: 'none' }}>
                        <ExternalLink size={15} color="#15803d" />
                      </a>
                    )}
                    {doc.blob_url && (
                      <a href={doc.blob_url} target="_blank" rel="noopener noreferrer"
                        style={{ background: '#eff6ff', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <FileText size={15} color="#1a4fba" />
                      </a>
                    )}
                    <button onClick={() => handleDelete(doc)} title="Supprimer"
                      style={{ background: '#fef2f2', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '33px', height: '33px' }}>
                      <Trash2 size={15} color="#dc2626" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}