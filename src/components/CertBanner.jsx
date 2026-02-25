export default function CertBanner({ casino, subtitle, certifiedBy, auditId, issued, nextReview, status = 'CERTIFIED' }) {
  return (
    <div className="pf-cert-banner">
      <div className="pf-cert-banner__inner">

        <div className="pf-cert-banner__top">
          <div className="pf-cert-banner__check">
            <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <div className="pf-cert-banner__casino">{casino}</div>
            <div className="pf-cert-banner__subtitle">{subtitle}</div>
          </div>
        </div>

        <div className="pf-cert-banner__meta">
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Certified by</span>
            <span className="pf-cert-banner__cert-by">{certifiedBy}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Issued:</span>
            <span className="pf-cert-banner__val">{issued}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Audit ID:</span>
            <span className="pf-cert-banner__val">{auditId}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Next Review:</span>
            <span className="pf-cert-banner__val">{nextReview}</span>
          </div>
          <div className="pf-cert-banner__field">
            <span className="pf-cert-banner__key">Status:</span>
            <span className="pf-cert-banner__status">{status}</span>
          </div>
        </div>

      </div>
    </div>
  );
}