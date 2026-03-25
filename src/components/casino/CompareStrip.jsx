import React from 'react';

export default function CompareStrip({ leftLabel, leftValue, rightLabel, rightValue, middle = '=' }) {
  return (
    <div className="pf-compare-strip">
      <div className="pf-compare-strip__side">
        <div className="pf-compare-strip__label">{leftLabel}</div>
        <div className="pf-compare-strip__value">{leftValue}</div>
      </div>

      <div className="pf-compare-strip__middle">{middle}</div>

      <div className="pf-compare-strip__side">
        <div className="pf-compare-strip__label">{rightLabel}</div>
        <div className="pf-compare-strip__value">{rightValue}</div>
      </div>
    </div>
  );
}