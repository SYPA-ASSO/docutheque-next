# Script de remplacement des images WordPress → Vercel Blob
# À exécuter depuis la racine du projet : .\replace-images.ps1

$replacements = @{
    "https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/AT-MT-cours-de-cassation-scaled.jpg"                                             = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/AT-MT-cours-de-cassation-scaled.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2016/10/CEE-revalorisation-scaled.jpg"                                                   = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/CEE-revalorisation-scaled.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2016/10/Conges-jurisprudence-scaled.jpg"                                                 = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/Conges-jurisprudence-scaled.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/IA-droit-1536x1280.jpg"                                                          = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/IA-droit-1536x1280.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2016/10/apprentissage-exoneration-employeur-scaled.jpg"                                  = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/apprentissage-exoneration-employeur-scaled.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2025/11/arnaque-registre-des-societes-europeennes.jpg"                                   = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/arnaque-registre-des-societes-europeennes.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2016/10/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.jpg"                       = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/conges-parternite-Alsace-Moselle-Jurisprudence-scaled.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/loi-2025-623-9-juillet-2025-renforcant-securite-professionnels-sante.png"        = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/loi-2025-623-9-juillet-2025-renforcant-securite-professionnels-sante.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2025/07/saisie-sur-salaire.jpg"                                                          = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/saisie-sur-salaire.webp"
    "https://www.cholez-pagotto.fr/wp-content/uploads/2025/09/travailleurs-handicapes-heureux.jpg"                                             = "https://8n0jumnfihjqiv3s.public.blob.vercel-storage.com/travailleurs-handicapes-heureux.webp"
}

$files = Get-ChildItem -Path "app/blog" -Recurse -Filter "*.tsx"
$totalReplacements = 0

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $modified = $false

    foreach ($old in $replacements.Keys) {
        if ($content -contains $old -or $content -like "*$old*") {
            $new = $replacements[$old]
            if ($content -match [regex]::Escape($old)) {
                $content = $content -replace [regex]::Escape($old), $new
                $modified = $true
                $totalReplacements++
                Write-Host "  [OK] $($file.Name) : $($old.Split('/')[-1]) -> webp"
            }
        }
    }

    if ($modified) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8 -NoNewline
        Write-Host "[SAVED] $($file.FullName)"
    }
}

Write-Host ""
Write-Host "Terminé : $totalReplacements remplacement(s) effectué(s)."