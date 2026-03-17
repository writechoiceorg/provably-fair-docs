import React from 'react';

/**
 * Note — callout/note box.
 *
 * Props:
 *   variant?: 'default' | 'ok' | 'warn'
 *   children: ReactNode
 *
 * Usage:
 *   <Note variant="ok"><strong>No issues found.</strong> Supporting detail here.</Note>
 *   <Note variant="warn"><strong>Important:</strong> Certification assumes...</Note>
 */
export default function Note({ variant = 'default', children }) {
  return (
    <div className={[
      'pf-note',
      variant === 'ok'   ? 'pf-note--ok'   : '',
      variant === 'warn' ? 'pf-note--warn' : '',
    ].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
