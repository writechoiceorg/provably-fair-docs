/**
 * ReferencesList
 *
 * Renders config.overview.references[] as gb-expand panels.
 * Fully reusable — swap config for any game.
 *
 * Supported section shapes:
 *   content     string          — plain paragraph
 *   steps       string[]        — numbered steps ("Label — description")
 *   bullets     string[]        — checkmark list
 *   terms       Term[]          — glossary entries { term, definition }
 *   table       { columns, rows }
 *   note        string
 *   checklistGroups ChecklistGroup[]
 *   collapsible boolean         — wraps entire section body in inner <details>
 *
 * Usage (never changes per game):
 *   <ReferencesList references={config.overview.references ?? []} />
 */

// ── Icon registry ──────────────────────────────────────────────────────────
const ICONS = {
  plinko: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5"/>
      <line x1="6"  y1="22" x2="8"  y2="12"/>
      <line x1="18" y1="22" x2="16" y2="12"/>
      <line x1="8"  y1="12" x2="16" y2="12"/>
    </svg>
  ),
  lock: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  list: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8"    y1="6"    x2="21"   y2="6"/>
      <line x1="8"    y1="12"   x2="21"   y2="12"/>
      <line x1="8"    y1="18"   x2="21"   y2="18"/>
      <line x1="3"    y1="6"    x2="3.01" y2="6"/>
      <line x1="3"    y1="12"   x2="3.01" y2="12"/>
      <line x1="3"    y1="18"   x2="3.01" y2="18"/>
    </svg>
  ),
  book: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  dice: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3"/>
      <circle cx="8"  cy="8"  r="1.2" fill="currentColor"/>
      <circle cx="16" cy="8"  r="1.2" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
      <circle cx="8"  cy="16" r="1.2" fill="currentColor"/>
      <circle cx="16" cy="16" r="1.2" fill="currentColor"/>
    </svg>
  ),
  chart: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6"  y1="20" x2="6"  y2="14"/>
    </svg>
  ),
  info: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8"  x2="12" y2="8.01"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
    </svg>
  ),
  crash: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  blackjack: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="14" height="18" rx="2"/>
      <path d="M16 8h4a2 2 0 0 1 0 4h-4"/>
      <path d="M16 16h4a2 2 0 0 0 0-4h-4"/>
    </svg>
  ),
};

// ── Sub-renderers ──────────────────────────────────────────────────────────
function RefTable({ table }) {
  if (!table) return null;

  return (
    <div className="pf-coverage-wrap pf-ref-table-wrap">
      <div
  className="pf-coverage-wrap pf-ref-table-wrap"
  style={{ outline: '3px solid red' }}
></div>
      <table className="pf-coverage-table" style={{ width: '100%', tableLayout: 'fixed' }}>
        <thead>
          <tr>
            {table.columns.map((col, i) => (
              <th key={i}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{ci === 0 ? <strong>{cell}</strong> : cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RefBullets({ bullets }) {
  if (!bullets?.length) return null;
  return (
    <ul className="ck-list single" style={{ margin: '0.3rem 0 0.6rem' }}>
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  );
}

function RefSteps({ steps }) {
  if (!steps?.length) return null;
  return (
    <p style={{ fontSize: '0.88rem' }}>
      {steps.map((step, i) => {
        const parts = step.split(' — ');
        const label = parts[0];
        const rest  = parts.slice(1).join(' — ');
        return (
          <span key={i}>
            <strong>{i + 1}. {label}</strong>
            {rest ? ` — ${rest}` : ''}
            <br />
          </span>
        );
      })}
    </p>
  );
}

// Glossary term list — used by Technical Glossary sections
function RefTerms({ terms }) {
  if (!terms?.length) return null;
  return (
    <>
      {terms.map((item, i) => (
        <p key={i} style={{ fontSize: '0.88rem' }}>
          <strong>{item.term}</strong>
          <br />
          {item.definition}
        </p>
      ))}
    </>
  );
}

function ChecklistGroups({ groups }) {
  if (!groups?.length) return null;
  return (
    <>
      {groups.map((group, gi) => (
        <div key={gi}>
          <p style={{ fontSize: '0.82rem', fontWeight: 700, margin: '0.8rem 0 0.3rem' }}>
            {group.heading}
          </p>
          <RefTable table={group.table} />
        </div>
      ))}
    </>
  );
}

// A single subsection block — renders the sub/sub-hdr/sub-div chrome + body
function RefSection({ section }) {
  const body = (
    <>
      {section.intro            && <p style={{ fontSize: '0.88rem' }}>{section.intro}</p>}
      {section.content          && <p style={{ fontSize: '0.88rem' }}>{section.content}</p>}
      {section.steps            && <RefSteps   steps={section.steps} />}
      {section.bullets          && <RefBullets bullets={section.bullets} />}
      {section.terms            && <RefTerms   terms={section.terms} />}
      {section.table            && <RefTable   table={section.table} />}
      {section.checklistGroups  && <ChecklistGroups groups={section.checklistGroups} />}
      {section.note             && (
        <div className="pf-note" style={{ marginTop: '0.4rem' }}>{section.note}</div>
      )}
    </>
  );

  // collapsible: true wraps the whole section in an inner <details>
  if (section.collapsible) {
    return (
      <details className="pf-ref-inner">
        <summary className="pf-ref-inner__summary">{section.title}</summary>
        <div className="pf-ref-inner__body">{body}</div>
      </details>
    );
  }

  // Standard sub block — matches HTML .sub / .sub-hdr / .sub-div / .sub-t exactly
  return (
    <div className="sub">
      <div className="sub-hdr">
        <span className="sub-t">{section.title}</span>
      </div>
      <div className="sub-div" />
      {body}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

export default function ReferencesList({ references = [] }) {
  if (!references.length) return null;

  return (
    <div className="pf-refs">
      {references.map((ref, i) => (
        <details key={i} className="pf-ref-panel">
          <summary className="pf-ref-panel__summary">
            <span className="pf-ref-panel__badge" aria-hidden="true">
              {ICONS[ref.icon] ?? ICONS.info}
            </span>
            <span className="pf-ref-panel__title">{ref.title}</span>
            {ref.count && (
              <span className="pf-ref-panel__count">{ref.count}</span>
            )}
            <span className="pf-ref-panel__arrow">▶</span>
          </summary>

          <div className="pf-ref-panel__body">
            {ref.intro   && <p style={{ fontSize: '0.88rem' }}>{ref.intro}</p>}
            {ref.bullets && <RefBullets bullets={ref.bullets} />}
            {(ref.sections ?? []).map((section, si) => (
              <RefSection key={si} section={section} />
            ))}
          </div>
        </details>
      ))}
    </div>
  );
}