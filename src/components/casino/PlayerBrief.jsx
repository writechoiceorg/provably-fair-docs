import React from 'react';

export default function PlayerBrief({ brief }) {
  if (!brief) return null;

  return (
    <div className="pf-player-brief">
      <div className="pf-player-brief__bar">
        <div className="pf-player-brief__headline">{brief.headline}</div>

        <div className="pf-player-brief__stat">
          <span className="pf-player-brief__stat-value">{brief.statValue}</span>
          {brief.statLabel && (
            <span className="pf-player-brief__stat-label">{brief.statLabel}</span>
          )}
        </div>
      </div>

      <div className="pf-player-brief__body">
        <div className="pf-player-brief__col">
          <h5>{brief.leftTitle || 'What We Verified'}</h5>
          <ul className="pf-game-list pf-game-list--check">
            {(brief.verified || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="pf-player-brief__col">
          <h5>{brief.rightTitle || 'What This Means for You'}</h5>
          <ul className="pf-game-list pf-game-list--dash">
            {(brief.means || []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}