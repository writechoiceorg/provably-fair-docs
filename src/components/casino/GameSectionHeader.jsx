import React from 'react';

export default function GameSectionHeader({ number, title, subtitle }) {
  return (
    <div className="pf-game-section-header">
      <div className={`pf-game-section-header__num pf-game-section-header__num--${number}`}>
        {number}
      </div>
      <div className="pf-game-section-header__titles">
        <div className="pf-game-section-header__title">{title}</div>
        {subtitle && (
          <div className="pf-game-section-header__subtitle">{subtitle}</div>
        )}
      </div>
    </div>
  );
}