import React from 'react';

export default function TagRow() {
  return (
    <div className="pf-tag-row">
      <span className="pf-tag pf-tag--green">✓ Certified</span>
      <span className="pf-tag pf-tag--orange">Open Source</span>
      <span className="pf-tag pf-tag--blue">PF Audit v1.0</span>
    </div>
  );
}