/**
 * ExcludeList
 *
 * Renders a list of items that are explicitly OUT OF SCOPE for this audit.
 * Each item gets a ✗ bullet in muted gray, matching the HTML .ex-list pattern.
 *
 * Mirror of AuditCheckList — same structure, different visual treatment.
 *
 * Usage in MDX:
 *   import ExcludeList from '@site/src/components/casino/ExcludeList';
 *   <ExcludeList items={config.overview.excludes} />
 *
 * Config shape:
 *   config.overview.excludes: string[]
 */
export default function ExcludeList({ items = [] }) {
  if (!items.length) return null;

  return (
    <ul className="pf-xl">
      {items.map((item, index) => (
        <li key={index} className="pf-xl__item">
          <span className="pf-xl__icon" aria-hidden="true">✗</span>
          <span className="pf-xl__text">{item}</span>
        </li>
      ))}
    </ul>
  );
}