export default function SectionVerdictTable({ rows = [] }) {
  if (!rows.length) return null;

  return (
    <div style={{ width: '100%', overflowX: 'auto', margin: '0.75rem 0' }}>
      <table style={{
        width: '100%',
        minWidth: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'separate',
        borderSpacing: 0,
        border: '1px solid var(--border)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}>
        <thead>
          <tr>
            {[['TEST', '45%'], ['STATUS', '15%'], ['FINDING', '40%']].map(([label, width], i) => (
              <th key={i} style={{
                width,
                background: 'var(--dark)',
                padding: '0.55rem 0.9rem',
                fontSize: '0.62rem',
                fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                textAlign: 'left',
                border: 'none',
              }}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td style={{
                padding: '0.6rem 0.9rem',
                fontSize: '0.88rem',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
                background: 'var(--bg)',
                verticalAlign: 'top',
                border: 'none',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}><strong style={{ fontWeight: 600, color: 'var(--text)' }}>{row.check}</strong></td>
              <td style={{
                padding: '0.6rem 0.9rem',
                fontSize: '0.88rem',
                background: 'var(--bg)',
                verticalAlign: 'top',
                border: 'none',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}><StatusPill status={row.status} /></td>
              <td style={{
                padding: '0.6rem 0.9rem',
                fontSize: '0.88rem',
                background: 'var(--bg)',
                verticalAlign: 'top',
                border: 'none',
                borderBottom: i < rows.length - 1 ? '1px solid var(--border-light)' : 'none',
                wordBreak: 'break-word',
              }}>{row.finding}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusPill({ status }) {
  const s = (status ?? '').toLowerCase();
  if (s === 'pass') return <span className="pf-status pf-status--pass">{status}</span>;
  if (s === 'flag') return <span className="pf-status pf-status--flag">{status}</span>;
  if (s === 'fail') return <span className="pf-status pf-status--fail">{status}</span>;
  return <span className="pf-status pf-status--na">{status}</span>;
}
