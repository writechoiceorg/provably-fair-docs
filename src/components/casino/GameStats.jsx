import React from 'react';

export default function GameStats({ config }) {
  if (!config) return null;

  const { stats = [], featured } = config;

  return (
    <div className="pf-gs">
      {/* 2×2 stat grid */}
      <div className="pf-gs__grid">
        {stats.map((stat, index) => (
          <div className="pf-gs__cell" key={index}>
            <span
              className={[
                'pf-gs__value',
                stat.variant === 'green'  ? 'pf-gs__value--green'  : '',
                stat.variant === 'accent' ? 'pf-gs__value--accent' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {stat.value}
            </span>
            <span className="pf-gs__label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Featured "tests passed" bar */}
      {featured && (
        <div className="pf-gs__feat">
          <span className="pf-gs__feat-value">{featured.value}</span>
          <span className="pf-gs__feat-label">{featured.label}</span>
          <span className="pf-gs__pip-bar">
            {Array.from({ length: featured.total || 0 }).map((_, i) => (
              <span
                key={i}
                className={`pf-gs__pip${i >= (featured.filled || 0) ? ' pf-gs__pip--empty' : ''}`}
              />
            ))}
          </span>
        </div>
      )}
    </div>
  );
}