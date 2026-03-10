import React from "react";
import PassPill from "@site/src/components/PassPill";

export default function VerdictTable({ rows, meaningHeader = "What this means for you" }) {
  return (
    <div className="pf-vt">
      <div className="pf-vt__header">
        <div className="pf-vt__th">#</div>
        <div className="pf-vt__th">Test</div>
        <div className="pf-vt__th">Status</div>
        <div className="pf-vt__th">{meaningHeader}</div>
      </div>

      {rows.map((row, index) => (
        <div key={row.id ?? row.test} className={`pf-vt__row ${index === rows.length - 1 ? "pf-vt__row--last" : ""}`}>
          <div className="pf-vt__td">
            <span className="pf-vt__num">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="pf-vt__td">
            <span className="pf-vt__name">{row.test}</span>
          </div>
          <div className="pf-vt__td">
            <PassPill label={row.status ?? "PASS"} />
          </div>
          <div className="pf-vt__td">
            <span className="pf-vt__evidence">{row.meaning}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
