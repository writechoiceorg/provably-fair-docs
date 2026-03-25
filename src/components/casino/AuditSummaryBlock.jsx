import React from 'react';
import Note from './Note';

export default function AuditSummaryBlock({ section }) {
  if (!section) return null;

  const {
    intro,
    checklist,
    body,
    muted,
    note,
  } = section;

  return (
    <>
      {intro ? <p>{intro}</p> : null}

      {Array.isArray(checklist) && checklist.length > 0 ? (
        <ul className="ck">
          {checklist.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}

      {body ? <p>{body}</p> : null}

      {muted ? <p className="pf-muted">{muted}</p> : null}

      {note ? (
        <Note variant={note.variant || 'info'}>
          {note.content}
        </Note>
      ) : null}
    </>
  );
}