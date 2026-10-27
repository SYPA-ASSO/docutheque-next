import TarifsClient from './TarifsClient'

export const metadata = {
  title: 'Tarifs · Modèles de documents, information sur vos droits et création d\'entreprise',
  description: 'Modèles de documents en DOCX sur demande, information pédagogique sur le droit, accompagnement création d\'entreprise. Offres simples et transparentes.',
}

export default function Page() {
  return <TarifsClient />
}