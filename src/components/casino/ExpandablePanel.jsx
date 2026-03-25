import React from 'react';

export default function ExpandablePanel({ title, count, children, defaultOpen = false }) {
  return (
    <details className="pf-expandable" open={defaultOpen}>
      <summary>
        <span className="pf-expandable__title">{title}</span>
        {count ? <span className="pf-expandable__count">{count}</span> : null}
      </summary>
      <div className="pf-expandable__body">{children}</div>
    </details>
  );
}