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

export default function GameVerdictTable({ rows = [] }) {
  return (
    <div className="pf-vt pf-vt--verdict">
      <div className="pf-vt__header">
        <div className="pf-vt__th">Check</div>
        <div className="pf-vt__th">Result</div>
        <div className="pf-vt__th">Reference</div>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`pf-vt__row ${i === rows.length - 1 ? 'pf-vt__row--last' : ''} ${
            row.result.toLowerCase() === 'fail' ? 'pf-vt__row--fail' : ''
          } ${
            row.result.toLowerCase() === 'flag' ? 'pf-vt__row--flag' : ''
          }`}
        >
          <div className="pf-vt__td pf-vt__name">{row.check}</div>
          <div className="pf-vt__td">
            <StatusPill status={row.result} />
          </div>
          <div className="pf-vt__td pf-vt__evidence">{row.reference}</div>
        </div>
      ))}
    </div>
  );
}
