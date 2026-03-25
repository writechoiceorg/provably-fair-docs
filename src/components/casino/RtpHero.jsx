import React from 'react';

export default function RtpHero({ hero }) {
  if (!hero) return null;
  return (
    <div className="pf-rtp-hero">
      <div>
        <span className="pf-rtp-big">{hero.primary.value}</span>
        <div className="pf-rtp-hero__label">{hero.primary.label}</div>
      </div>
      <div className="pf-rtp-hero__stats">
        {hero.stats.map((stat, i) => (
          <div key={i}>
            <div className={`pf-rtp-hero__stat-val${stat.green ? ' pf-rtp-hero__stat-val--green' : ''}`}>
              {stat.value}
            </div>
            <div className="pf-rtp-hero__stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
