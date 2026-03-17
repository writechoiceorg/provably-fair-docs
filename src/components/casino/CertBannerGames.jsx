import React from 'react';

export default function CertBanner({ config }) {
  return (
    <div className="pf-cert-banner">
      <div className="pf-cert-banner__inner">
        <div className="pf-cert-banner__top">
          <div className="pf-cert-banner__check">
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <div className="pf-cert-banner__casino">{config.name}</div>
            <div className="pf-cert-banner__subtitle">{config.subtitle}</div>
          </div>
        </div>

        <div className="pf-cert-banner__meta">
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Certified by</span>
            <span className="pf-cert-banner__cert-by">&nbsp;{config.certifiedBy}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Audit Date</span>
            <span className="pf-cert-banner__val">&nbsp;{config.auditDate}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Audit ID:</span>
            <span className="pf-cert-banner__val">&nbsp;{config.auditId}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Status:</span>
            <span className="pf-cert-banner__status">&nbsp;{config.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}