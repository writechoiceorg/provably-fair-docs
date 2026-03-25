import React from 'react';

const icons = {
  dice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="3"/>
      <circle cx="8.5" cy="8.5" r="1.2"/>
      <circle cx="15.5" cy="8.5" r="1.2"/>
      <circle cx="8.5" cy="15.5" r="1.2"/>
      <circle cx="15.5" cy="15.5" r="1.2"/>
      <circle cx="12" cy="12" r="1.2"/>
    </svg>
  ),
  crash: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"/>
    </svg>
  ),
  plinko: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2L3 22h18L12 2z"/>
      <circle cx="12" cy="10" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="9" cy="15" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="15" cy="15" r="1.2" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="19" r="1.2" fill="currentColor" stroke="none"/>
    </svg>
  ),
  blackjack: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <text x="8" y="10" fontSize="8" fill="currentColor" stroke="none" fontWeight="700">A</text>
      <path d="M12 14l1.5 3 1.5-3-1.5-1-1.5 1z" fill="currentColor" stroke="none"/>
    </svg>
  ),
  roulette: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="1.5"/>
    </svg>
  ),
  keno: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8" cy="8" r="1.8"/>
      <circle cx="16" cy="8" r="1.8"/>
      <circle cx="8" cy="16" r="1.8"/>
      <circle cx="16" cy="16" r="1.8"/>
    </svg>
  ),
  mines: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="14" r="7"/>
      <path d="M12 7V4"/>
      <path d="M10 4h4"/>
      <path d="M17 9l2-2"/>
      <path d="M7 9L5 7"/>
      <circle cx="10" cy="13" r="1.5" fill="currentColor" stroke="none" opacity="0.3"/>
    </svg>
  ),
  beef: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7c0-2 1-3 3-3s2 2 4 2 2-2 4-2 3 1 3 3"/>
      <ellipse cx="10" cy="14" rx="7" ry="5"/>
      <path d="M6 9v2"/>
      <path d="M14 9v2"/>
      <circle cx="8" cy="14" r="0.8" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none"/>
      <path d="M8 18v3"/>
      <path d="M12 18v3"/>
    </svg>
  ),
};

export default function GameIcon({ name }) {
  return icons[name] || null;
}
