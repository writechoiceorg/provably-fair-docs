export default function AuditTimeline({ steps = [] }) {
  return (
    <div className="pf-timeline">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`pf-timeline__step ${index === steps.length - 1 ? 'pf-timeline__step--last' : ''}`}
        >
          <div className="pf-timeline__dot" />
          <div className="pf-timeline__content">
            <div className="pf-timeline__title">{step.title}</div>
            <div className="pf-timeline__date">{step.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}