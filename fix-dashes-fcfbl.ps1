# fix-dashes-fcfbl.ps1
# Utilise des variables pour eviter les problemes d'encodage
# Executer depuis la racine : .\fix-dashes-fcfbl.ps1

$em   = [char]0x2014  # tiret long
$euro = [char]0x20AC  # signe euro

$files = Get-ChildItem -Path "app" -Recurse -Filter "*.tsx"
$totalFiles = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content

    # ── FCFBL ACTIVITIES ──────────────────────────────────────────

    $content = $content -replace "Cabinet Cholez-Pagotto $em FCFBL ACTIVITIES", "Cabinet Cholez-Pagotto"
    $content = $content -replace """Cabinet Cholez-Pagotto $em FCFBL ACTIVITIES""", """Cabinet Cholez-Pagotto"""
    $content = $content -replace "CGU en vigueur au 12 mai 2026 $em FCFBL ACTIVITIES $em SIRET", "CGU en vigueur au 12 mai 2026 · Cabinet Cholez-Pagotto · SIRET"
    $content = $content -replace "exploitee par FCFBL ACTIVITIES", "exploitee par le Cabinet Cholez-Pagotto"
    $content = $content -replace "exploitée par FCFBL ACTIVITIES", "exploitée par le Cabinet Cholez-Pagotto"
    $content = $content -replace "FCFBL ACTIVITIES beneficie", "Le Cabinet Cholez-Pagotto beneficie"
    $content = $content -replace "FCFBL ACTIVITIES bénéficie", "Le Cabinet Cholez-Pagotto bénéficie"
    $content = $content -replace "FCFBL ACTIVITIES n'est pas", "Le Cabinet Cholez-Pagotto n'est pas"
    $content = $content -replace "propriete exclusive de FCFBL ACTIVITIES", "propriete exclusive du Cabinet Cholez-Pagotto"
    $content = $content -replace "propriété exclusive de FCFBL ACTIVITIES", "propriété exclusive du Cabinet Cholez-Pagotto"
    $content = $content -replace "plateforme Docutheque $em FCFBL ACTIVITIES\.", "plateforme Docuthèque du Cabinet Cholez-Pagotto."
    $content = $content -replace "plateforme Docuthèque $em FCFBL ACTIVITIES\.", "plateforme Docuthèque du Cabinet Cholez-Pagotto."
    $content = $content -replace "Docutheque exploitee par FCFBL ACTIVITIES", "Docuthèque exploitée par le Cabinet Cholez-Pagotto"

    # ── TIRETS LONGS DANS LE CONTENU VISIBLE ─────────────────────

    # Deux-points
    $content = $content -replace " $em c'est la date", " : c'est la date"
    $content = $content -replace " $em deux décrets", " : deux décrets"
    $content = $content -replace " $em deux decrets", " : deux décrets"
    $content = $content -replace " $em le salarié perçoit", " : le salarié perçoit"
    $content = $content -replace " $em toute violence", " : toute violence"
    $content = $content -replace "qualités humaines $em jugement", "qualités humaines : jugement"
    $content = $content -replace "singularité $em des qualités", "singularité : des qualités"
    $content = $content -replace "aux biais $em ils ne sont", "aux biais : ils ne sont"
    $content = $content -replace "Références $em Cass\.", "Références : Cass."
    $content = $content -replace " $em il n'existe pas", " : il n'existe pas"

    # Virgule
    $content = $content -replace " $em soit ", ", soit "
    $content = $content -replace " $em et non plus seulement", ", et non plus seulement"
    $content = $content -replace " $em et non un tiers", ", et non un tiers"
    $content = $content -replace " $em non une démarche", ", non une démarche"
    $content = $content -replace " $em ce qui réduit", ", ce qui réduit"
    $content = $content -replace " $em ce qui érode", ", ce qui érode"
    $content = $content -replace " $em primordiaux", ", primordiaux"
    $content = $content -replace " $em avec des conséquences", ", avec des conséquences"
    $content = $content -replace " $em avec la même assurance", ", avec la même assurance"
    $content = $content -replace " $em comme l'a démontré", ", comme l'a démontré"
    $content = $content -replace " $em même en contrôlant", ", même en contrôlant"
    $content = $content -replace " $em risque de généralisation", ", avec risque de généralisation"
    $content = $content -replace " $em un droit aligné", ", un droit aligné"
    $content = $content -replace " $em jamais un substitut", ", jamais un substitut"
    $content = $content -replace "newsletter\) $em sans porter atteinte", "newsletter), sans porter atteinte"
    $content = $content -replace "qui est une absence justifiée sans comportement fautif $em entre", "qui est une absence justifiée sans comportement fautif, entre"
    $content = $content -replace "de gouvernance des données robustes $em problème", "de gouvernance des données robustes, un problème"
    $content = $content -replace " $em produire un contenu", ", c'est-à-dire produire un contenu"
    $content = $content -replace "hallucinations, biais algorithmiques, absence de jugement éthique $em en font", "hallucinations, biais algorithmiques, absence de jugement éthique, en font"

    # Point
    $content = $content -replace " $em peines alourdies", ". Peines alourdies"
    $content = $content -replace " $em amende jusqu", ". Amende jusqu"
    $content = $content -replace "L'IA est un outil $em le concept", "L'IA est un outil. Le concept"
    $content = $content -replace "47 $euro $em si vous posez", "47 $euro. Si vous posez"

    # Autres pages
    $content = $content -replace "/mois $em Accès complet", "/mois, accès complet"
    $content = $content -replace "exclusifs abonnés $em tout ce qui compte", "exclusifs abonnés : tout ce qui compte"
    $content = $content -replace "du quotidien $em rédigées par", "du quotidien, rédigées par"
    $content = $content -replace "à la Docuthèque $em contrats", "à la Docuthèque : contrats"
    $content = $content -replace "Newsletter gratuite $em inscription", "Newsletter gratuite, inscription"
    $content = $content -replace "Abonnement Optimal $em à partir", "Abonnement Optimal, à partir"
    $content = $content -replace "dans votre boîte mail $em sans jargon", "dans votre boîte mail, sans jargon"
    $content = $content -replace " $em tarifs 2026", ", tarifs 2026"
    $content = $content -replace "pour l'accès gratuit $em requises pour", "pour l'accès gratuit, requises pour"
    $content = $content -replace "tous liés par un contrat de sous-traitance conforme", "tous liés par un contrat de sous-traitance conforme"
    $content = $content -replace "structure et mise en page $em est la propriété", "structure et mise en page, est la propriété"
    $content = $content -replace "sur cette base $em délai raté", "sur cette base : délai raté"

    # Table des matières : ">— A." etc
    $content = $content -replace ">$em ([A-D])\. ", '>${1}. '

    if ($content -ne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        $totalFiles++
        Write-Host "[MODIFIE] $($file.Name)"
    }
}

Write-Host ""
Write-Host "Termine : $totalFiles fichier(s) modifie(s)."
Write-Host ""
Write-Host "Verifications manuelles restantes :"
Write-Host "  app\information-sur-vos-droits\page.tsx : <span>tiret</span> visuel (ligne 270)"
Write-Host "  app\cgu\page.tsx : ligne 65 - 'En vigueur au ... - Plateforme'"
Write-Host "  app\connexion\page.tsx : ligne 341 - fin de phrase avec tiret"