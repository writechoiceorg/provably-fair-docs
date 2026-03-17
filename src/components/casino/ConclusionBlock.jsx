import React from 'react';

/**
 * ConclusionBlock — dark conclusion / certification block.
 * Reads from casino config object.
 *
 * Props:
 *   config: casino config object with name, games[], auditId, certDate, nextReview, framework
 */
export default function ConclusionBlock({ config }) {
  return (
    <div className="pf-conclusion">
      <h3 className="pf-conclusion__heading">
        {config.name} satisfies all required validation domains across the{' '}
        {config.games.length} reviewed games.
      </h3>
      <p className="pf-conclusion__sub">Under the {config.framework || 'ProvablyFair.org Audit Framework v1.0'}</p>
      <div className="pf-conclusion__meta">
        <div className="pf-conclusion__field">
          <span className="pf-conclusion__key">Status</span>
          <span className="pf-conclusion__val pf-conclusion__val--green">{config.status}</span>
        </div>
        <div className="pf-conclusion__field">
          <span className="pf-conclusion__key">Audit ID</span>
          <span className="pf-conclusion__val">{config.auditId}</span>
        </div>
        <div className="pf-conclusion__field">
          <span className="pf-conclusion__key">Issued</span>
          <span className="pf-conclusion__val">{config.certDate}</span>
        </div>
        <div className="pf-conclusion__field">
          <span className="pf-conclusion__key">Next Review</span>
          <span className="pf-conclusion__val">{config.nextReview}</span>
        </div>
      </div>
    </div>
  );
}
