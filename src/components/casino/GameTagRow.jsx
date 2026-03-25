import React from 'react';

export default function TagRow({ tags = [] }) {
  if (!tags.length) return null;

  return (
    <div className="pf-tag-row">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`pf-tag pf-tag--${tag.variant || 'default'}`}
        >
          {tag.label}
        </span>
      ))}
    </div>
  );
}