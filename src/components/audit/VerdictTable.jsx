import React from "react";

export default function VerdictTable({ rows }) {
  return (
    <div className="verdictCardRows">
      <table>
        <thead>
          <tr>
            <th>Test</th>
            <th>Status</th>
            <th>What this means for you</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id ?? row.test}>
              <td>{row.test}</td>
              <td>
                <span className="gameAuditStatus">{row.status ?? "PASS"}</span>
              </td>
              <td>{row.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
