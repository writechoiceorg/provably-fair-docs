import React from 'react';

export default function VerdictBox({ title, body }) {
  if (!title && !body) return null;

  return (
    <div className="pf-verdict-box">
      {title && <strong>{title}</strong>}
      {body && <p>{body}</p>}
    </div>
  );
}