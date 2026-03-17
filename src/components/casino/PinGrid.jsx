import React from 'react';

export default function PinGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="pf-pin-grid">
      {items.map((item, index) => (
        <div className="pf-pin-grid__item" key={index}>
          <div className="pf-pin-grid__key">{item.key}</div>
          <div className="pf-pin-grid__value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}