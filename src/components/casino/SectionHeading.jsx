import React from 'react';

export default function SectionHeading({ id, label, title }) {
  return (
    <div id={id} className="pf-sh">
      <span className="pf-sh__label">{label}</span>
      <h2 className="pf-sh__title">{title}</h2>
    </div>
  );
}
