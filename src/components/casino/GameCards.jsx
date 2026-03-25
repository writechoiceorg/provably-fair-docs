import React from 'react';
import GameIcon from './GameIcon';

export default function GameCards({ games = [], casinoSlug }) {
  return (
    <div className="game-cards">
      {games.map((game) => (
        <div className="gc" key={game.slug}>
          <div className="gc-name">
            <span className="gc-icon">
              <GameIcon name={game.icon} />
            </span>
            {game.name}
          </div>

          <div className="gc-badge">✓ Verified</div>

          {game.rngModel ? (
            <div className="gc-row">
              RNG: <span>{game.rngModel}</span>
            </div>
          ) : null}

          {game.parity ? (
            <div className="gc-row">
              Parity: <span>{game.parity}</span>
            </div>
          ) : null}

          {game.rtp ? (
            <div className="gc-row">
              RTP: <span>{game.rtp}</span>
            </div>
          ) : null}

          {game.sim ? (
            <div className="gc-row">
              Sim: <span>{game.sim}</span>
            </div>
          ) : null}

          <a
            className="gc-link"
            href={`/audits/casinos/${casinoSlug}/games/${game.slug}/s1`}
          >
            View Audit →
          </a>
        </div>
      ))}
    </div>
  );
}