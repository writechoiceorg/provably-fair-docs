export default function CertBanner({
  casino,
  subtitle,
  certifiedBy,
  auditId,
  issued,
  nextReview,
  status = 'CERTIFIED',
  metadataItems,
}) {
  const defaultMetadataItems = [
    { label: "Certified by", value: certifiedBy, tone: "accent" },
    { label: "Issued:", value: issued },
    { label: "Audit ID:", value: auditId },
    { label: "Next Review:", value: nextReview },
    { label: "Status:", value: status, tone: "success" },
  ];

  const items = Array.isArray(metadataItems) && metadataItems.length > 0 ? metadataItems : defaultMetadataItems;

  const getValueClassName = (tone) => {
    if (tone === "accent") return "pf-cert-banner__cert-by";
    if (tone === "success") return "pf-cert-banner__status";
    return "pf-cert-banner__val";
  };

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
          {items.map((item) => (
            <div className="pf-cert-banner__field" key={`${item.label}-${String(item.value)}`}>
              <span className="pf-cert-banner__key">{item.label}</span>
              <span className={getValueClassName(item.tone)}>{item.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}