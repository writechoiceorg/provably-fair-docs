import React from 'react';

function StatusPill({ status = 'Pass' }) {
  const normalized = status.toLowerCase();
  const isPass = normalized === 'pass';
  const isFail = normalized === 'fail';
  const isFlag = normalized === 'flag';

  const className = isPass
    ? 'pf-pass-pill'
    : isFail
    ? 'pf-pass-pill pf-pass-pill--fail'
    : isFlag
    ? 'pf-pass-pill pf-pass-pill--flag'
    : 'pf-pass-pill pf-pass-pill--na';

  return (
    <span className={className}>
      {isPass && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      )}
      {isFail && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      )}
      {isFlag && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
          <line x1="4" y1="22" x2="4" y2="15"/>
        </svg>
      )}
      {status}
    </span>
  );
}

export default function VerdictTable({ verdicts }) {
  return (
    <div className="pf-vt">
      <div className="pf-vt__header">
        <div className="pf-vt__th">#</div>
        <div className="pf-vt__th">Control Area</div>
        <div className="pf-vt__th">Status</div>
        <div className="pf-vt__th">Evidence Summary</div>
      </div>
      {verdicts.map((item, index) => (
        <div
          key={item.number}
          className={`pf-vt__row ${index === verdicts.length - 1 ? 'pf-vt__row--last' : ''}`}
        >
          <div className="pf-vt__td"><span className="pf-vt__num">{item.number}</span></div>
          <div className="pf-vt__td"><span className="pf-vt__name">{item.area}</span></div>
          <div className="pf-vt__td"><StatusPill status={item.status} /></div>
          <div className="pf-vt__td"><span className="pf-vt__evidence">{item.evidence}</span></div>
        </div>
      ))}
    </div>
  );
}
