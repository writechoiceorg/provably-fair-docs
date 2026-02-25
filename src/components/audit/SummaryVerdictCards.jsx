import React from "react";
import AuditVerdictCards from "./AuditVerdictCards";

export default function SummaryVerdictCards({ items }) {
  const normalizedItems = items.map((item) => ({
    ...item,
    cardClassName: [item.cardClassName, "summaryVerdictCard", item.primary ? "summaryVerdictCardPrimary" : ""]
      .filter(Boolean)
      .join(" "),
  }));

  return <AuditVerdictCards items={normalizedItems} gridClassName="summaryVerdictCardsGrid" />;
}
