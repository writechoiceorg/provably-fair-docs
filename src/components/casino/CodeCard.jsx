/**
 * CodeCard
 *
 * Collapsible code block matching HTML .code-card / .cc-* pattern exactly.
 * Open by default. Supports syntax token coloring via simple regex tokenizer.
 *
 * Props:
 *   label     string    — "filename · annotation" shown in summary bar
 *   language  string    — 'ts' | 'js' | 'sh' | 'json' | 'python' | 'text'
 *   lines     string[]  — one string per code line
 *   badge     string    — optional green pill (e.g. "Verified", "Core RNG")
 */
import { useState } from 'react';

// ── Syntax tokenizer ────────────────────────────────────────────────────────
// Returns an array of {type, text} tokens for a single line.
// Types map to CSS classes: kw, fn, str, cm, nm, tp, plain

const KW = /\b(const|let|var|for|of|if|else|return|function|export|import|from|new|class|async|await|break|continue|in|typeof|instanceof|void|try|catch|finally|throw|switch|case|default|while|do|delete|yield|static|get|set|extends|super|this|true|false|null|undefined|type|interface|enum|namespace|declare|abstract|readonly|public|private|protected|override|git|cd|npm|npx|cat)\b/g;
const FN  = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g;
const STR = /(`[^`]*`|"[^"]*"|'[^']*')/g;
const CM  = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/#)/g;
const NM  = /\b(\d+)\b/g;

function tokenize(line) {
  // Comments — entire line
  if (/^\s*(\/\/|#)/.test(line)) {
    return [{ type: 'cm', text: line }];
  }

  // Build token map by position
  const tokens = [];
  const used = new Set();

  function mark(regex, type) {
    let m;
    regex.lastIndex = 0;
    while ((m = regex.exec(line)) !== null) {
      const start = m.index;
      const end   = start + m[0].length;
      let blocked = false;
      for (let i = start; i < end; i++) {
        if (used.has(i)) { blocked = true; break; }
      }
      if (!blocked) {
        tokens.push({ start, end, type, text: m[0] });
        for (let i = start; i < end; i++) used.add(i);
      }
    }
  }

  // Order matters — strings first, then comments inline, then keywords, functions, numbers
  mark(STR, 'str');
  mark(KW,  'kw');
  mark(FN,  'fn');
  mark(NM,  'nm');

  // Sort by position
  tokens.sort((a, b) => a.start - b.start);

  // Fill gaps with plain text
  const result = [];
  let cursor = 0;
  for (const tok of tokens) {
    if (tok.start > cursor) {
      result.push({ type: 'plain', text: line.slice(cursor, tok.start) });
    }
    result.push(tok);
    cursor = tok.end;
  }
  if (cursor < line.length) {
    result.push({ type: 'plain', text: line.slice(cursor) });
  }

  return result.length ? result : [{ type: 'plain', text: line }];
}

function CodeLine({ line, language }) {
  // No highlighting for sh, text, json, plain
  if (!language || ['sh', 'text', 'json'].includes(language)) {
    // Comments still get colored in sh
    if (language === 'sh' && /^\s*#/.test(line)) {
      return <><span className="cm">{line}</span></>;
    }
    return <>{line}</>;
  }

  const tokens = tokenize(line);
  return (
    <>
      {tokens.map((tok, i) =>
        tok.type === 'plain'
          ? <span key={i}>{tok.text}</span>
          : <span key={i} className={tok.type}>{tok.text}</span>
      )}
    </>
  );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function CodeCard({ label = '', language = '', lines = [], badge }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  // Split label: "filename · annotation"
  const dotIdx     = label.indexOf(' ·');
  const filename   = dotIdx > -1 ? label.slice(0, dotIdx)   : label;
  const annotation = dotIdx > -1 ? label.slice(dotIdx + 1)  : '';

  return (
    <details className="code-card" open>
      <summary>
        <span className="cc-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5"/>
            <line x1="12" y1="19" x2="20" y2="19"/>
          </svg>
        </span>

        <span className="cc-file">
          {filename}
          {annotation && <span className="cc-lines">{annotation}</span>}
        </span>

        {badge && <span className="cc-badge">{badge}</span>}

        <button
          className={'cc-copy' + (copied ? ' copied' : '')}
          onClick={(e) => { e.preventDefault(); handleCopy(); }}
          aria-label="Copy code"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          {copied ? 'Copied' : 'Copy'}
        </button>

        <span className="cc-arrow" aria-hidden="true">▶</span>
      </summary>

      <div className="cc-body">
        {/* Line numbers — each span is display:block via CSS */}
        <div className="cc-nums" aria-hidden="true">
          {lines.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        {/* Code — each line is a block-level div to match HTML line-height */}
        <pre className="cc-pre">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="cc-line">
                <CodeLine line={line} language={language} />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </details>
  );
}