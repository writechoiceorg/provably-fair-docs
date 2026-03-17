import React from 'react';
import GameIcon from './GameIcon';

/**
 * GameCards — 4-per-row grid of per-game summary cards.
 * Used at the bottom of exec-summary.
 *
 * Props:
 *   games: array of game config objects (each from games/{slug}/config.json)
 *   casinoSlug: string — used to build links e.g. "duel"
 *
 * Each game config needs:
 *   slug, icon, name, rngModel, betsVerified, parityRate, simRounds, rtp
 */
export default function GameCards({ games = [], casinoSlug }) {
  return (
    <div className="pf-game-cards">
      {games.map((game) => (
        <div className="pf-game-card" key={game.slug}>
          <div className="pf-game-card__name">
            <span className="pf-game-card__icon">
              <GameIcon name={game.icon} />
            </span>
            {game.name}
          </div>
          <div className="pf-game-card__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Verified
          </div>
          <div className="pf-game-card__row">
            RNG: <span>{game.rngModel}</span>
          </div>
          <div className="pf-game-card__row">
            Parity: <span>{game.betsVerified} · {game.parityRate}</span>
          </div>
          {game.rtp && (
            <div className="pf-game-card__row">
              RTP: <span>{game.rtp}</span>
            </div>
          )}
          <div className="pf-game-card__row">
            Sim: <span>{game.simRounds}</span>
          </div>
          <a
            className="pf-game-card__link"
            href={`/audits/casinos/${casinoSlug}/games/${game.slug}/s1`}
          >
            View Audit →
          </a>
        </div>
      ))}
    </div>
  );
}
