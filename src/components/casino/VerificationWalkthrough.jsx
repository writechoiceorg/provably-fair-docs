import React from 'react';

export default function VerificationWalkthrough({ steps, heading }) {
  if (!steps || steps.length === 0) return null;
  return (
    <div className="pf-verify-wrap">
      <div className="pf-verify-heading">{heading || 'Verification Walkthrough'}</div>
      {steps.map((step, i) => (
        <div className="pf-verify-step" key={i}>
          <div className="pf-verify-step__num">{step.num || i + 1}</div>
          <div className="pf-verify-step__text">
            <strong>{step.title}</strong> — {step.body}
          </div>
        </div>
      ))}
    </div>
  );
}
