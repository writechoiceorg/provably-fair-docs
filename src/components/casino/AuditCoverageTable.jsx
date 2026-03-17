export default function AuditCoverageTable({ config }) {
  if (!config) return null;
 
  const {
    columns = { left: 'Area', right: 'Description' },
    rows = [],
  } = config;
 
  return (
    <>
      
      <div className="pf-coverage-wrap">
        <table className="pf-coverage-table">
          <thead>
            <tr>
              <th className="pf-coverage-col-area">{columns.left}</th>
              <th>{columns.right}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="pf-coverage-col-area">
                  <strong>{row.area}</strong>
                </td>
                <td className="pf-coverage-col-desc">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
 