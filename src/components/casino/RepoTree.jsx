import React from 'react';

export default function RepoTree({ title, lines }) {
  if (!lines || lines.length === 0) return null;
  return (
    <div style={{ margin: '0.8rem 0' }}>
      {title && <h5 style={{ fontSize:'0.72rem', fontWeight:700, color:'var(--text-3)', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'0.4rem' }}>{title}</h5>}
      <div style={{ background:'var(--bg-muted)', border:'1px solid var(--border)', borderRadius:'8px', padding:'0.8rem 1rem', fontFamily:"'JetBrains Mono', monospace", fontSize:'0.7rem', lineHeight:1.8, color:'var(--text-3)', overflowX:'auto', whiteSpace:'pre' }}>
        {lines.join('\n')}
      </div>
    </div>
  );
}
