import React from 'react';

export default function AuditTimeline({ timeline }) {
  return (
    <div className="pf-timeline">
      {timeline.map((step, index) => (
        <div
          key={index}
          className={`pf-timeline__step ${index === timeline.length - 1 ? 'pf-timeline__step--last' : ''}`}
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
