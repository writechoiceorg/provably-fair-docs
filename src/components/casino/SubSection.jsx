import React from 'react';
import CodeCard from './CodeCard';
import NoteBlock from './NoteBlock';
import PinGrid from './PinGrid';
import DiagramImage from './DiagramImage';

function SubTable({ table, small }) {
  if (!table) return null;
  return (
    <div className="tw">
      <table style={small ? { fontSize: '0.78rem' } : undefined}>
        <thead>
          <tr>{table.columns.map((col, i) => <th key={i}>{col}</th>)}</tr>
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

function CompareStrip({ compare }) {
  if (!compare) return null;
  return (
    <div className="compare">
      <div className="compare-side">
        <div className="compare-label orange">{compare.leftLabel}</div>
        <div className="compare-val">{compare.leftValue}</div>
      </div>
      <div className="compare-mid">
        <span className="compare-eq">{compare.middle}</span>
      </div>
      <div className="compare-side">
        <div className="compare-label green">{compare.rightLabel}</div>
        <div className="compare-val">{compare.rightValue}</div>
      </div>
    </div>
  );
}

export default function SubSection({ sub }) {
  if (!sub) return null;
  return (
    <div className="sub">
      <div className="sub-hdr">
        {sub.number && <span className="sub-n">{sub.number}</span>}
        <span className="sub-t">{sub.title}</span>
      </div>
      <div className="sub-div" />

      {sub.content && (
        <p style={{ fontSize: '0.88rem' }}>{sub.content}</p>
      )}

      {sub.preBlock && (
        <pre><code>{sub.preBlock}</code></pre>
      )}

      {sub.diagram && (
        <DiagramImage src={sub.diagram} alt={sub.title} />
      )}

      {sub.image && (
        <div style={{ margin: '0.5rem 0', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <img src={sub.image.src} alt={sub.image.alt} style={{ width: '100%', display: 'block' }} />
          {sub.image.caption && (
            <p style={{ fontSize: '0.75rem', color: 'var(--text-4)', margin: '0.3rem 0.5rem' }}>{sub.image.caption}</p>
          )}
        </div>
      )}

      {sub.bullets && (
        <ul className="ck-list single" style={{ margin: '0.2rem 0 0.6rem' }}>
          {sub.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}

      {sub.table && <SubTable table={sub.table} small={sub.tableSmall} />}

      {sub.tables && sub.tables.map((t, i) => (
        <SubTable key={i} table={t} small={sub.tableSmall} />
      ))}

      {sub.pins && <PinGrid pins={sub.pins} />}

      {sub.code && (
        <CodeCard
          label={sub.code.file ? `${sub.code.file} · ${sub.code.lines}` : sub.code.label}
          language={sub.code.lang || sub.code.language}
          badge={sub.code.badge}
          lines={sub.code.body ? sub.code.body.split('\n') : sub.code.lines}
        />
      )}

      {sub.postCodeBlock && (
        <pre><code>{sub.postCodeBlock}</code></pre>
      )}

      {sub.extraCodes && sub.extraCodes.map((c, i) => (
        <CodeCard
          key={i}
          label={c.file ? `${c.file} · ${c.lines}` : c.label}
          language={c.lang || c.language}
          badge={c.badge}
          lines={c.body ? c.body.split('\n') : c.lines}
        />
      ))}

      {sub.extraContent && (
        <p style={{ fontSize: '0.88rem' }}>{sub.extraContent}</p>
      )}

      {sub.compare && <CompareStrip compare={sub.compare} />}

      {sub.note && (
        <NoteBlock
          variant={sub.note.variant}
          strong={sub.note.strong}
          body={sub.note.body}
        />
      )}

      {sub.notes && sub.notes.map((note, i) => (
        <NoteBlock
          key={i}
          variant={note.variant}
          strong={note.strong}
          body={note.body}
        />
      ))}
    </div>
  );
}
