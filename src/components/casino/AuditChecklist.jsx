import React from 'react';

/**
 * CheckList
 *
 * Renders a 2-column grid of items with green checkmarks.
 * Content is driven by the items prop (array of strings).
 *
 * Usage in MDX:
 *   import CheckList from '@site/src/components/casino/CheckList';
 *   <CheckList items={config.overview.whatWasAudited} />
 */
export default function AuditCheckList({ items = [] }) {
  if (!items.length) return null;

  return (
    <ul className="pf-cl">
      {items.map((item, index) => (
        <li key={index} className="pf-cl__item">
          <span className="pf-cl__icon" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 8l4 4 6-6"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="pf-cl__text">{item}</span>
        </li>
      ))}
    </ul>
  );
}