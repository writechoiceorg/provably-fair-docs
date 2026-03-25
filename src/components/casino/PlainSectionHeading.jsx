import React from 'react';

export default function PlainSectionHeading({ id, title }) {
  return (
    <div id={id} className="pf-sh">
      <h2 className="pf-sh__title">{title}</h2>
    </div>
  );
}
