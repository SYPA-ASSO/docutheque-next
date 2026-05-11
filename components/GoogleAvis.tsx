export default function GoogleAvis({ variant = 'default' }: { variant?: 'default' | 'compact' | 'inline' }) {
 
  // Variante inline : une seule ligne, pour sidebar ou header
  if (variant === 'inline') {
    return (
      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
          {/* Google G */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          {/* Étoiles */}
          <span style={{color: '#FBBC05', fontSize: '13px', letterSpacing: '-1px'}}>★★★★★</span>
          <span style={{color: '#374151', fontSize: '12px', fontWeight: '700'}}>5/5</span>
        </div>
        <span style={{color: '#9ca3af', fontSize: '11px'}}>sur Google</span>
      </div>
    )
  }
 
  // Variante compact : carte petite, pour sidebar connexion
  if (variant === 'compact') {
    return (
      <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '10px', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: '12px'}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0}}>
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
            <span style={{color: '#FBBC05', fontSize: '14px', letterSpacing: '-1px'}}>★★★★★</span>
            <span style={{color: 'white', fontSize: '13px', fontWeight: '700'}}>5 / 5</span>
          </div>
          <p style={{color: 'rgba(255,255,255,0.65)', fontSize: '10px', margin: 0}}>Avis clients · Google</p>
        </div>
      </div>
    )
  }
 
  // Variante default : carte complète, pour homepage et tarifs
  return (
    <div style={{display: 'inline-flex', alignItems: 'center', gap: '14px', background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '12px 18px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)'}}>
      {/* Logo Google */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{flexShrink: 0}}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div style={{borderLeft: '1px solid #e5e7eb', paddingLeft: '14px'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px'}}>
          <span style={{color: '#FBBC05', fontSize: '16px', letterSpacing: '-1px'}}>★★★★★</span>
          <span style={{color: '#111827', fontSize: '15px', fontWeight: '800'}}>5 / 5</span>
        </div>
        <p style={{color: '#6b7280', fontSize: '11px', margin: 0}}>
          Avis clients vérifiés · <span style={{fontWeight: '600', color: '#374151'}}>Google</span>
        </p>
      </div>
    </div>
  )
}