# renommage-docutheque.ps1
# Remplace "Docutheque" / "Docuthèque" par le bon terme selon l'emplacement.
# Chaque remplacement est une chaine LITTERALE precise (jamais un remplacement aveugle).
# Sortie : UTF-8 sans BOM. Les fichiers non modifies ne sont pas reecrits.
# A lancer depuis la racine du depot :  .\renommage-docutheque.ps1

$ErrorActionPreference = 'Stop'

# Couples [ancien, nouveau]. Ordre important : les combinaisons de marque d'abord.
$pairs = @(
  # --- Combinaisons de marque (titres de page, noms JSON-LD, index du blog) ---
  @('Cabinet Cholez-Pagotto · Docuthèque', 'Cabinet Cholez-Pagotto'),
  @('Docuthèque · Cabinet Cholez-Pagotto', 'Cabinet Cholez-Pagotto'),
  @('Blog Docuthèque', 'Blog Cabinet Cholez-Pagotto'),

  # --- Pieds / logos d'emails ---
  @('Cabinet CHOLEZ PAGOTTO &middot; Docuthèque', 'Cabinet CHOLEZ PAGOTTO'),
  @('Cabinet CHOLEZ PAGOTTO &nbsp;·&nbsp; Docuthèque', 'Cabinet CHOLEZ PAGOTTO'),
  @('Cabinet CHOLEZ PAGOTTO &nbsp;&middot;&nbsp; Docuthèque', 'Cabinet CHOLEZ PAGOTTO'),

  # --- Expediteurs d'emails ---
  @("name: 'Docuthèque'", "name: 'Cabinet CHOLEZ PAGOTTO'"),
  @('Docutheque · Cabinet Cholez-Pagotto', 'Cabinet CHOLEZ PAGOTTO'),

  # --- Sujets / corps d'emails (corrige aussi le tiret cadratin du sujet contact) ---
  @('[Docuthèque] ${sujetSafe} — ${nomSafe}', '[Cabinet Cholez-Pagotto] ${sujetSafe} · ${nomSafe}'),
  @('Activez votre compte Docuthèque', 'Activez votre espace client'),
  @('Votre compte Docuthèque a été mis à jour', 'Votre espace client a été mis à jour'),
  @('Votre compte Docuthèque a bien été migré', 'Votre espace client a bien été migré'),
  @('client de la Docuthèque du Cabinet CHOLEZ PAGOTTO', 'client du Cabinet CHOLEZ PAGOTTO'),

  # --- Pages legales : confidentialite + CGU ---
  @('de la plateforme Docuthèque, service du Cabinet Cholez-Pagotto', 'du site du Cabinet Cholez-Pagotto'),
  @('la plateforme <strong>Docuthèque</strong> accessible', 'le site accessible'),
  @('stockées par Docuthèque :', 'stockées par le cabinet :'),
  @('La plateforme Docuthèque peut utiliser des cookies', 'Le site peut utiliser des cookies'),
  @('de la plateforme Docuthèque ou de toute autre', 'du site ou de toute autre'),
  @('Plateforme Docuthèque du Cabinet Cholez-Pagotto', 'Site du Cabinet Cholez-Pagotto'),
  @('de la plateforme Docuthèque du Cabinet Cholez-Pagotto', 'du site du Cabinet Cholez-Pagotto'),
  @('exploitant la plateforme Docuthèque.', 'exploitant le présent site.'),

  # --- Espace client (connexion, mot de passe, conseil assurances) ---
  @('>Docuthèque</span>', '>Cabinet Cholez-Pagotto</span>'),
  @('Bienvenue sur Docuthèque', 'Bienvenue sur votre espace client'),
  @('compte Docuthèque et je souhaite', 'compte et je souhaite'),
  @('inscrit sur Docuthèque et je souhaite', 'inscrit et je souhaite'),
  @('la newsletter de Docuthèque (informations', 'la newsletter du cabinet (informations'),
  @('votre espace client Docuthèque. Vous y accédez', 'votre espace client. Vous y accédez'),
  @('pour votre compte Docuthèque.', 'pour votre espace client.'),

  # --- Newsletter ---
  @('newsletter · Docuthèque"', 'newsletter · Cabinet Cholez-Pagotto"'),
  @('Newsletter Docuthèque : informations', 'Newsletter du cabinet : informations'),
  @('ajouté à la Docuthèque : contrats', 'ajouté à la bibliothèque : contrats'),
  @('Les nouveaux modèles Docuthèque sont signalés', 'Les nouveaux modèles sont signalés'),
  @('Rejoignez la communauté Docuthèque', 'Rejoignez la communauté du cabinet'),
  @('newsletter Docuthèque.', 'newsletter du cabinet.'),

  # --- Services / tarifs ---
  @('La bibliothèque Docuthèque regroupe des modèles', 'La bibliothèque du cabinet regroupe des modèles'),
  @('Tarifs Docuthèque', 'Tarifs Cabinet Cholez-Pagotto'),
  @('tarifs de la plateforme Docuthèque :', 'tarifs du cabinet :'),
  @('votre entreprise, Docuthèque propose une offre', 'votre entreprise, le cabinet propose une offre'),

  # --- Accueil : badge + bloc A propos ---
  @("badge: 'Docuthèque'", "badge: 'Information juridique'"),
  @('Docuthèque est la plateforme de ressources', 'Ce site est la plateforme de ressources'),
  @('Chaque document de la Docuthèque', 'Chaque document de ce site'),
  @('Docuthèque a été conçue pour vous', 'ce site a été conçu pour vous'),

  # --- Banniere cookies ---
  @('utilise des cookies sur Docuthèque', 'utilise des cookies sur son site'),
  @("Docuthèque utilise des cookies pour améliorer votre navigation et mesurer l'audience de ses pages.", "Le site du cabinet utilise des cookies pour améliorer votre navigation et mesurer l'audience de ses pages."),

  # --- Schema.org (alias) ---
  @('"alternateName": "Docuthèque"', '"alternateName": "CBT CHOLEZ PAGOTTO"')
)

$racines = @('app', 'components')
$fichiers = Get-ChildItem -Path $racines -Recurse -File -Include *.tsx, *.ts |
  Where-Object { $_.FullName -notmatch 'node_modules|\.next|\.git' }

$utf8SansBom = New-Object System.Text.UTF8Encoding $false
$modifies = 0

foreach ($f in $fichiers) {
  $contenu = [System.IO.File]::ReadAllText($f.FullName)
  $avant = $contenu
  foreach ($p in $pairs) {
    $contenu = $contenu.Replace($p[0], $p[1])
  }
  if ($contenu -ne $avant) {
    [System.IO.File]::WriteAllText($f.FullName, $contenu, $utf8SansBom)
    $modifies++
    Write-Host "Modifie : $($f.FullName)"
  }
}

Write-Host ""
Write-Host "Termine. $modifies fichier(s) modifie(s)."
Write-Host "Verifiez ensuite avec la recherche 'docuth' : il ne doit rester que des fichiers internes (.json, .vercel)."
