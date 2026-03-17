import React from 'react';

export default function CodeCard({ label, language, lines = [] }) {
  return (
    <details className="pf-code-card">
      <summary>
        <span className="pf-code-card__label">{label}</span>
        {language ? <span className="pf-code-card__lang">{language}</span> : null}
      </summary>

      <div className="pf-code-card__body">
        <div className="pf-code-card__nums">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <pre className="pf-code-card__pre">
          <code>{lines.join('\n')}</code>
        </pre>
      </div>
    </details>
  );
}