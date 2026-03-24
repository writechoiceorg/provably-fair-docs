import React, { useState } from 'react';

export default function CollapsibleTable({ title, badge, iconColor = '#2563eb', iconBg, columns, rows, tableSmall }) {
  const [open, setOpen] = useState(false);
  if (!columns || !rows) return null;
  return (
    <div style={{ margin:'0.8rem 0', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:'10px', overflow:'hidden' }}>
      <div onClick={() => setOpen(o => !o)} style={{ display:'flex', alignItems:'center', gap:'8px', padding:'0.7rem 1rem', cursor:'pointer' }}>
        <div style={{ width:28, height:28, borderRadius:7, background: iconBg || 'var(--bg-muted)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <span style={{ color:iconColor, fontSize:'0.85rem', fontWeight:700 }}>≡</span>
        </div>
        <div style={{ flex:1 }}>
          <span style={{ fontSize:'0.8rem', fontWeight:700, color:'var(--text)' }}>{title}</span>
          {badge && <span style={{ fontSize:'0.68rem', color:'var(--text-4)', marginLeft:8 }}>{badge}</span>}
        </div>
        <span style={{ fontSize:'0.7rem', color:'var(--text-4)', display:'inline-block', transform: open ? 'rotate(90deg)' : 'none', transition:'transform 0.2s' }}>▶</span>
      </div>
      {open && (
        <div style={{ padding:'0 1rem 0.8rem' }}>
          <div className="tw">
            <table style={tableSmall ? { fontSize:'0.78rem' } : undefined}>
              <thead><tr>{columns.map((col,i) => <th key={i}>{col}</th>)}</tr></thead>
              <tbody>{rows.map((row,ri) => (
                <tr key={ri}>{row.map((cell,ci) => <td key={ci}>{ci===0 ? <strong>{cell}</strong> : cell}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
