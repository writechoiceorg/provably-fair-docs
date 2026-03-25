import React from 'react';

export default function PinGrid({ items, pins, variant }) {
  const data = items || pins || [];
  if (!data.length) return null;

  // variant="pinning" uses the S7-style monospace grid
  if (variant === 'pinning') {
    return (
      <div className="pf-s7-pinning">
        {data.map((item, i) => (
          <div className="pf-s7-pinning__item" key={i}>
            <div className="pf-s7-pinning__key">{item.key}</div>
            <div className="pf-s7-pinning__val">{item.value}</div>
          </div>
        ))}
      </div>
    );
  }

  // default: subsection pin grid
  return (
    <div className="pf-pin-grid">
      {data.map((item, i) => (
        <div className="pf-pin-grid__item" key={i}>
          <div className="pf-pin-grid__key">{item.key}</div>
          <div className="pf-pin-grid__value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
