import React from 'react';

export default function VerifierLinks({ links }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="pf-verifier-links">
      {links.map((link, i) => (
      <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="pf-verifier-link"
          style={{ borderColor: link.color }}
        >
          <div className="pf-verifier-link__icon" style={{ background: link.color }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {link.icon === 'shield'
                ? <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                : <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>
              }
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <div className="pf-verifier-link__name">{link.label}</div>
            <div className="pf-verifier-link__sub">{link.sublabel}</div>
          </div>
          <div className="pf-verifier-link__open" style={{ color: link.color }}>Open →</div>
        </a>
      ))}
    </div>
  );
}
