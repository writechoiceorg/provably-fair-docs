/**
 * SectionVerdictTable
 *
 * Renders the per-section verdict table that appears after the
 * section diagram and before VerdictBox in every S1–S7 section.
 * Matches HTML .tw > table with .pass / .flag / .fail pills exactly.
 *
 * Usage:
 *   <SectionVerdictTable rows={[
 *     { check: "Server seed committed before bet", status: "Pass", finding: "..." },
 *   ]} />
 *
 * Status values: "Pass" | "Flag" | "Fail" | "N/A"
 */
export default function SectionVerdictTable({ rows = [] }) {
  if (!rows.length) return null;

  return (
    <div className="tw">
       <table
        className="pf-coverage-table"
        style={{ width: '100%', tableLayout: 'fixed' }}
      >
        <thead>
          <tr>
            <th>Test</th>
            <th>Status</th>
            <th>Finding</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td><strong>{row.check}</strong></td>
              <td><StatusPill status={row.status} /></td>
              <td>{row.finding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusPill({ status }) {
  const s = (status ?? '').toLowerCase();
  if (s === 'pass')  return <span className="pf-status pf-status--pass">{status}</span>;
  if (s === 'flag')  return <span className="pf-status pf-status--flag">{status}</span>;
  if (s === 'fail')  return <span className="pf-status pf-status--fail">{status}</span>;
  return <span className="pf-status pf-status--na">{status}</span>;
}