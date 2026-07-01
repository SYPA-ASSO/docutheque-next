// Formatage des prix en euros, format francais : deux decimales et espace insecable avant le symbole.
const NBSP = '\u00a0'

export function formatPrix(n: number | string | null | undefined): string {
  if (n == null || n === '') return ''
  const v = typeof n === 'number' ? n : Number(n)
  if (Number.isNaN(v)) return ''
  return `${v.toFixed(2).replace('.', ',')}${NBSP}€`
}
