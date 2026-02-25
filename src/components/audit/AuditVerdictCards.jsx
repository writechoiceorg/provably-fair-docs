import React from "react";

export default function AuditVerdictCards({
  items,
  gridClassName = "auditVerdictCardsGrid",
  cardClassName = "auditVerdictCard",
}) {
  return (
    <div className={gridClassName}>
      {items.map((item) => (
        <section
          key={item.id ?? item.title}
          className={[cardClassName, item.cardClassName].filter(Boolean).join(" ")}
        >
          <h4>
            {item.href ? (
              <a className="auditVerdictTitleLink" href={item.href}>
                {item.title}
              </a>
            ) : (
              item.title
            )}
          </h4>
          <span className="gameAuditStatus">{item.status ?? "PASS"}</span>
          {item.reference ? <p className="auditVerdictRef">{item.reference}</p> : null}
        </section>
      ))}
    </div>
  );
}
