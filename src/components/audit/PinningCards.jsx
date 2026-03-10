import React from "react";

export default function PinningCards({ items }) {
  return (
    <div className="auditPinningGrid">
      {items.map((item) => (
        <section key={item.id ?? item.label} className="auditPinningCard">
          <div className="auditPinningLabel">{item.label}</div>
          {item.code ? (
            <code className="auditPinningValue">{item.value}</code>
          ) : (
            <div className="auditPinningValue">{item.value}</div>
          )}
        </section>
      ))}
    </div>
  );
}
