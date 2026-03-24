import React from 'react';

export default function DiagramImage({ src, alt = '' }) {
  if (!src) return null;
  return (
    <div className="diagram">
      <img
        src={src}
        alt={alt}
        style={{ display: 'block', width: '100%', height: 'auto' }}
      />
    </div>
  );
}
