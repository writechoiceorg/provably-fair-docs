import React, { useState } from 'react';

export default function TabbedCode({ tabs }) {
  const [active, setActive] = useState(0);
  if (!tabs || tabs.length === 0) return null;
  return (
    <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '10px', overflow: 'hidden', margin: '0.8rem 0' }}>
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)} style={{ flex:1, padding:'0.55rem 0.8rem', fontSize:'0.72rem', fontWeight:700, border:'none', background:'none', cursor:'pointer', color: active===i ? 'var(--accent)' : 'var(--text-4)', borderBottom: active===i ? '2px solid var(--accent)' : '2px solid transparent', transition:'all 0.15s' }}>
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ padding: '1rem 1.2rem' }}>
        <pre style={{ margin:0, fontSize:'0.78rem', lineHeight:1.6, overflowX:'auto', background:'var(--bg-muted)', border:'1px solid var(--border-light)', borderRadius:'6px', padding:'0.8rem 1rem', color:'var(--text-body)' }}>
          <code>{tabs[active].code}</code>
        </pre>
        {tabs[active].note && <p style={{ fontSize:'0.75rem', color:'var(--text-4)', marginTop:'0.5rem', marginBottom:0 }}>{tabs[active].note}</p>}
        {tabs[active].output && <>
          <p style={{ fontSize:'0.75rem', color:'var(--text-4)', margin:'0.5rem 0 0.3rem' }}>Expected output:</p>
          <pre style={{ fontSize:'0.7rem', lineHeight:1.5, margin:0, overflowX:'auto', background:'var(--bg-muted)', border:'1px solid var(--border-light)', borderRadius:'6px', padding:'0.8rem 1rem', color:'var(--text-body)' }}>
            <code>{tabs[active].output}</code>
          </pre>
        </>}
      </div>
    </div>
  );
}
