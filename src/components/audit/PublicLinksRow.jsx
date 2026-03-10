import React from "react";

function LinkIcon({ icon }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.37-1.33-1.73-1.33-1.73-1.1-.73.09-.72.09-.72 1.2.08 1.84 1.23 1.84 1.23 1.08 1.84 2.84 1.31 3.53 1 .11-.77.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.9 0-1.3.47-2.36 1.22-3.2-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.22a11.4 11.4 0 0 1 6 0c2.29-1.54 3.29-1.22 3.29-1.22.66 1.64.25 2.86.13 3.16.76.84 1.22 1.9 1.22 3.2 0 4.58-2.82 5.6-5.5 5.9.43.37.82 1.11.82 2.25v3.33c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (icon === "commit") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="12" r="3" />
        <path d="M10 12h4" />
      </svg>
    );
  }

  if (icon === "verifier") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 4v5c0 5-3.4 8.8-7 9.9C8.4 20.8 5 17 5 12V7l7-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5a2 2 0 0 1 2-2h5v18H6a2 2 0 0 0-2 2V5Z" />
      <path d="M20 5a2 2 0 0 0-2-2h-5v18h5a2 2 0 0 1 2 2V5Z" />
    </svg>
  );
}

export default function PublicLinksRow({ links }) {
  return (
    <div className="dicePublicLinksRow">
      {links.map((link) => (
        <a key={link.id ?? link.label} className="dicePublicLinkButton" href={link.href}>
          <span className="dicePublicLinkIcon" aria-hidden="true">
            <LinkIcon icon={link.icon} />
          </span>
          <span className="dicePublicLinkLabel">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
