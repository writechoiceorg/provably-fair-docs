import React from 'react';

function PassPill() {
  return (
    <span className="pf-pass-pill">
      <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 6l3 3 5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Pass
    </span>
  );
}

export default function GameVerdictTable({ rows = [] }) {
  return (
    <div className="pf-vt pf-vt--verdict">
      {/* Header */}
      <div className="pf-vt__header">
        <div className="pf-vt__th">CHECK</div>
        <div className="pf-vt__th">RESULT</div>
        <div className="pf-vt__th">REFERENCE</div>
      </div>

      {/* Rows */}
      {rows.map((row, index) => (
        <div
          key={index}
          className={`pf-vt__row${index === rows.length - 1 ? ' pf-vt__row--last' : ''}`}
        >
          <div className="pf-vt__td pf-vt__name">{row.check}</div>
          <div className="pf-vt__td">
            {row.result === 'Pass' ? <PassPill /> : row.result}
          </div>
          <div className="pf-vt__td pf-vt__evidence">{row.reference}</div>
        </div>
      ))}
    </div>
  );
}