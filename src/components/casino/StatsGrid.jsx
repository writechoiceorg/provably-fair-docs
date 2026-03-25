import React from 'react';

/**
 * StatsGrid — 4-column grid with 1px gap dividers.
 * Used on exec-summary. Distinct from StatBlocks (which has left-border card style).
 *
 * Props:
 *   stats: Array<{ value: string, label: string, variant?: 'green' | 'orange' }>
 */
export default function StatsGrid({ stats = [] }) {
  return (
    <div className="pf-stats-grid">
      {stats.map((stat, i) => (
        <div className="pf-stats-grid__cell" key={i}>
          <div className={[
            'pf-stats-grid__value',
            stat.variant === 'green'  ? 'pf-stats-grid__value--green'  : '',
            stat.variant === 'orange' ? 'pf-stats-grid__value--orange' : '',
          ].filter(Boolean).join(' ')}>
            {stat.value}
          </div>
          <div className="pf-stats-grid__label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
