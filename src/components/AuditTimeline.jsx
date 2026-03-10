export default function AuditTimeline({ steps = [] }) {
  const formatTitle = (title) => {
    const words = title.trim().split(/\s+/);
    if (words.length === 3 && words[2].toLowerCase() === 'completed') {
      return (
        <>
          {words[0]} {words[1]}
          <br />
          {words[2]}
        </>
      );
    }

    return title;
  };

  return (
    <div className="pf-timeline">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className={`pf-timeline__step ${index === steps.length - 1 ? 'pf-timeline__step--last' : ''}`}
        >
          <div className="pf-timeline__dot" />
          <div className="pf-timeline__content">
            <div className="pf-timeline__title">{formatTitle(step.title)}</div>
            <div className="pf-timeline__date">{step.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}