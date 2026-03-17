import React from 'react';

/**
 * NoteBlock
 *
 * Props:
 *   variant  — "default" (gray border) | "ok" (green border)
 *   strong   — optional bold prefix text
 *   body     — the main note text
 *
 * Config shape (from config.json):
 * {
 *   "variant": "ok",
 *   "strong": "Result:",
 *   "body": "All 152 revealed seeds matched. Zero mismatches."
 * }
 *
 * MDX usage (inline):
 *   <NoteBlock variant="ok" strong="Result:" body="All 152 revealed seeds matched." />
 *
 * MDX usage (from config):
 *   <NoteBlock {...config.someSection.note} />
 */
export default function NoteBlock({ variant = 'default', strong, body }) {
  const className = variant === 'ok' ? 'pf-note pf-note--ok' : 'pf-note';

  return (
    <div className={className}>
      {strong && <strong>{strong} </strong>}
      {body}
    </div>
  )
}