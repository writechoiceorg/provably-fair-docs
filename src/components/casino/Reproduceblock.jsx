/**
 * ReproduceBlock
 *
 * Renders the "Reproduce This Audit" section:
 *   - Repo URL, commit hash, public verifier link (paragraph)
 *   - Collapsible "View reproduction commands" wrapper
 *   - CodeCard inside (using the passed commands prop)
 *   - NoteBlock below the collapsible
 *
 * Usage in MDX:
 *   import ReproduceBlock from '@site/src/components/casino/ReproduceBlock';
 *   <ReproduceBlock config={config.overview.reproduce} />
 *
 * Config shape (config.overview.reproduce):
 *   {
 *     repoUrl:      string,
 *     repoLabel:    string,
 *     commit:       string,
 *     verifierUrl:  string,
 *     verifierLabel: string,
 *     note:         { variant: 'ok' | 'default', strong: string, body: string },
 *     commands:     { label: string, language: string, lines: string[] }
 *   }
 */
import CodeCard  from '@site/src/components/casino/CodeCard';
import NoteBlock from '@site/src/components/casino/NoteBlock';

export default function ReproduceBlock({ config }) {
  if (!config) return null;

  const { repoUrl, repoLabel, commit, verifierUrl, verifierLabel, note, commands } = config;

  return (
    <div className="pf-reproduce">

      {/* Meta links paragraph */}
      <p className="pf-reproduce__meta">
        <strong>Repository:</strong>{' '}
        <a href={repoUrl} className="pf-reproduce__link">{repoLabel}</a>
        <br />
        <strong>Commit Audited:</strong>{' '}
        <code className="pf-reproduce__code">{commit}</code>
        <br />
        <strong>Public Verifier:</strong>{' '}
        <a href={verifierUrl} className="pf-reproduce__link">{verifierLabel}</a>
      </p>

      {/* Collapsible commands */}
      {commands && (
        <details className="pf-reproduce__expand">
          <summary className="pf-reproduce__summary">View reproduction commands</summary>
          <div className="pf-reproduce__body">
            <CodeCard
              label={commands.label}
              language={commands.language}
              lines={commands.lines}
            />
          </div>
        </details>
      )}

      {/* Note block */}
      {note && (
        <NoteBlock
          variant={note.variant}
          strong={note.strong}
          body={note.body}
        />
      )}
    </div>
  );
}