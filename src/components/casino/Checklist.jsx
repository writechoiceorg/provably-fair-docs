import React from 'react';

/**
 * Checklist — styled bullet list with orange dot markers.
 *
 * Usage (JSX children):
 *   <Checklist>
 *     <li>Item one</li>
 *     <li><strong>Bold label</strong> — supporting detail</li>
 *   </Checklist>
 *
 * Usage (string array):
 *   <Checklist items={['Item one', 'Item two']} />
 */
export default function Checklist({ items, children }) {
  if (items?.length) {
    return (
      <ul className="pf-checklist">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return <ul className="pf-checklist">{children}</ul>;
}
