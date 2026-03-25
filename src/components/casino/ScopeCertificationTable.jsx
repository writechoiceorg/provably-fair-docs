// src/components/casino/ScopeCertificationTable.tsx
import React from 'react';


export default function ScopeCertificationTable({
  covered,
  notCovered,
}) {
  return (
   <div className="tw pf-scope-table">
  <table>
    <thead>
      <tr>
        <th>Covered</th>
        <th>Not Covered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <ul className="ck pf-scope-list">
            {covered.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </td>
        <td>
          <ul className="ck pf-scope-list pf-scope-list--muted">
            {notCovered.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  );
}