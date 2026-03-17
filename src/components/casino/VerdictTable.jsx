import React from 'react';

function PassPill() {
  return (
    <span className="pf-pass-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Pass
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
          <div className="pf-vt__td"><PassPill /></div>
          <div className="pf-vt__td"><span className="pf-vt__evidence">{item.evidence}</span></div>
        </div>
      ))}
    </div>
  );
}