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

const DEFAULT_COLUMNS = [
  { id: 'game', label: 'Game' },
  { id: 'rng', label: 'RNG Model', mono: true },
  { id: 'parity', label: 'Parity', mono: true },
  { id: 'rtp', label: 'RTP', mono: true },
  { id: 'integrity', label: 'Integrity', mono: true },
  { id: 'validationScope', label: 'Validation Scope', mono: true },
  { id: 'status', label: 'Status' },
];

const LEGACY_COLUMN_MAP = {
  Game: { id: 'game', label: 'Game' },
  'RNG Model': { id: 'rng', label: 'RNG Model', mono: true },
  Parity: { id: 'parity', label: 'Parity', mono: true },
  RTP: { id: 'rtp', label: 'RTP', mono: true },
  Integrity: { id: 'integrity', label: 'Integrity', mono: true },
  'Validation Scope': { id: 'validationScope', label: 'Validation Scope', mono: true },
  Status: { id: 'status', label: 'Status' },
};

function normalizeColumns(columns = DEFAULT_COLUMNS) {
  return columns.map((column) => {
    if (typeof column === 'string') {
      return LEGACY_COLUMN_MAP[column] ?? { id: column, label: column };
    }

    return {
      mono: false,
      ...column,
    };
  });
}

function renderLinkedValue(value) {
  if (value && typeof value === 'object' && typeof value.href === 'string') {
    return <a href={value.href}>{value.label ?? value.href}</a>;
  }

  return value;
}

export default function GameValidation({ games = [], columns = DEFAULT_COLUMNS, columnTemplate }) {
  const normalizedColumns = normalizeColumns(columns);
  const gridStyle = columnTemplate ? { gridTemplateColumns: columnTemplate } : undefined;

  return (
    <div className="pf-gm">

      {/* Header */}
      <div className="pf-gm__header" style={gridStyle}>
        {normalizedColumns.map((column) => (
          <div key={column.id} className="pf-gm__th">{column.label}</div>
        ))}
      </div>

      {/* Rows */}
      {games.map((game, index) => (
        <div
          key={game.name}
          className={`pf-gm__row ${index === games.length - 1 ? 'pf-gm__row--last' : ''}`}
          style={gridStyle}
        >
          {normalizedColumns.map((column) => {
            if (column.id === 'game') {
              return (
                <div key={column.id} className="pf-gm__td">
                  <div className="pf-gm__name">
                    <span className="pf-gm__icon">{GAME_ICONS[game.name]}</span>
                    <a href={game.href ?? '#'}>{game.name}</a>
                  </div>
                </div>
              );
            }

            if (column.id === 'status') {
              return (
                <div key={column.id} className="pf-gm__td">
                  <PassPill label={game.status ?? 'Pass'} />
                </div>
              );
            }

            const value = renderLinkedValue(game[column.id]);

            return (
              <div key={column.id} className="pf-gm__td">
                {column.mono ? <span className="pf-gm__mono">{value}</span> : value}
              </div>
            );
          })}
        </div>
      ))}

    </div>
  );
}