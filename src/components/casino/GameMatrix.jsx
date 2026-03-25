import React from 'react';
import GameIcon from './GameIcon';

function PassPill() {
  return (
    <span className="pf-pass-pill">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Pass
    </span>
  );
}

export default function GameMatrix({ games }) {
  return (
    <div className="pf-gm">
      <div className="pf-gm__header">
        <div className="pf-gm__th">Game</div>
        <div className="pf-gm__th">RNG Model</div>
        <div className="pf-gm__th">Parity</div>
        <div className="pf-gm__th">RTP</div>
        <div className="pf-gm__th">Integrity</div>
        <div className="pf-gm__th">Validation Scope</div>
        <div className="pf-gm__th">Status</div>
      </div>
      {games.map((game, index) => (
        <div
          key={game.slug}
          className={`pf-gm__row ${index === games.length - 1 ? 'pf-gm__row--last' : ''}`}
        >
          <div className="pf-gm__td">
            <div className="pf-gm__name">
              <span className="pf-gm__icon"><GameIcon name={game.icon} /></span>
              <a href={`${game.slug}/s1`}>{game.name}</a>
            </div>
          </div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.rngModel}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.parity}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.rtp}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.integrity}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.scope}</span></div>
          <div className="pf-gm__td"><PassPill /></div>
        </div>
      ))}
    </div>
  );
}