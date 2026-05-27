// Composant sélecteur téléphone avec préfixe pays
// À utiliser dans tous les formulaires ayant un champ téléphone

export const PAYS_PREFIXES = [
  { code: 'FR', flag: '🇫🇷', prefixe: '+33' },
  { code: 'BE', flag: '🇧🇪', prefixe: '+32' },
  { code: 'LU', flag: '🇱🇺', prefixe: '+352' },
  { code: 'CH', flag: '🇨🇭', prefixe: '+41' },
  { code: 'MC', flag: '🇲🇨', prefixe: '+377' },
]

type PhoneInputProps = {
  prefixe: string
  onPrefixeChange: (val: string) => void
  numero: string
  onNumeroChange: (val: string) => void
  placeholder?: string
  required?: boolean
}

export function PhoneInput({
  prefixe, onPrefixeChange,
  numero, onNumeroChange,
  placeholder = '06 00 00 00 00',
  required = false,
}: PhoneInputProps) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <select
        value={prefixe}
        onChange={e => onPrefixeChange(e.target.value)}
        style={{
          padding: '10px 8px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '12px',
          background: 'white',
          color: '#374151',
          cursor: 'pointer',
          flexShrink: 0,
          outline: 'none',
          minWidth: '100px',
        }}
      >
        {PAYS_PREFIXES.map(p => (
          <option key={p.code} value={p.prefixe}>{p.flag} {p.prefixe}</option>
        ))}
      </select>
      <input
        type="tel"
        value={numero}
        onChange={e => onNumeroChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          flex: 1,
          padding: '10px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '8px',
          fontSize: '13px',
          boxSizing: 'border-box' as const,
          outline: 'none',
        }}
      />
    </div>
  )
}