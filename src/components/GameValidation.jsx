import PassPill from './PassPill';

const GAME_ICONS = {
  Dice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/>
      <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/>
      <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/>
      <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
    </svg>
  ),
  Crash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 20L12 4l8 16"/>
      <line x1="7" y1="14" x2="17" y2="14"/>
    </svg>
  ),
  Plinko: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="5" r="2"/>
      <path d="M5 22l7-15 7 15"/>
      <circle cx="8" cy="18" r="1.2" fill="currentColor"/>
      <circle cx="16" cy="18" r="1.2" fill="currentColor"/>
      <circle cx="12" cy="14" r="1.2" fill="currentColor"/>
    </svg>
  ),
  Blackjack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="16" rx="2"/>
      <path d="M12 4v16"/>
      <path d="M3 10h18"/>
    </svg>
  ),
  Roulette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
    </svg>
  ),
  Keno: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8" cy="8" r="1.8" fill="currentColor"/>
      <circle cx="16" cy="8" r="1.8" fill="currentColor"/>
      <circle cx="8" cy="16" r="1.8" fill="currentColor"/>
      <circle cx="16" cy="16" r="1.8" fill="currentColor"/>
    </svg>
  ),
  Mines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <line x1="3" y1="9" x2="21" y2="9"/>
      <line x1="3" y1="15" x2="21" y2="15"/>
      <line x1="9" y1="3" x2="9" y2="21"/>
      <line x1="15" y1="3" x2="15" y2="21"/>
    </svg>
  ),
  'Cross Road': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h4l2-6 4 12 2-6h4"/>
    </svg>
  ),
};

const COLUMNS = ['Game', 'RNG Model', 'Parity', 'RTP', 'Integrity', 'Validation Scope', 'Status'];

export default function GameValidation({ games = [] }) {
  return (
    <div className="pf-gm">

      {/* Header */}
      <div className="pf-gm__header">
        {COLUMNS.map((col) => (
          <div key={col} className="pf-gm__th">{col}</div>
        ))}
      </div>

      {/* Rows */}
      {games.map((game, index) => (
        <div
          key={game.name}
          className={`pf-gm__row ${index === games.length - 1 ? 'pf-gm__row--last' : ''}`}
        >
          <div className="pf-gm__td">
            <div className="pf-gm__name">
              <span className="pf-gm__icon">{GAME_ICONS[game.name]}</span>
              <a href={game.href ?? '#'}>{game.name}</a>
            </div>
          </div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.rng}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.parity}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.rtp}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.integrity}</span></div>
          <div className="pf-gm__td"><span className="pf-gm__mono">{game.validationScope}</span></div>
          <div className="pf-gm__td"><PassPill /></div>
        </div>
      ))}

    </div>
  );
}