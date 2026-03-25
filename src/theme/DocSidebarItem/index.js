import React from 'react';
import OriginalDocSidebarItem from '@theme-original/DocSidebarItem';

const icons = {
  dashboard: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
    </svg>
  ),
  summary: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  ),
  dice: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2.5"/>
      <circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="9" r="1.2"/>
      <circle cx="9" cy="15" r="1.2"/><circle cx="15" cy="15" r="1.2"/>
      <circle cx="12" cy="12" r="1.2"/>
    </svg>
  ),
  plinko: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2L3 22h18L12 2z"/>
      <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
      <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none"/>
      <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none"/>
    </svg>
  ),
};

export default function DocSidebarItem({ item, ...props }) {
  const icon = item.customProps?.icon;
  if (!icon || !icons[icon]) {
    return <OriginalDocSidebarItem item={item} {...props} />;
  }

  const itemWithLabel = {
    ...item,
    label: item.label,
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ 
        display: 'flex', 
        alignItems: 'center', 
        flexShrink: 0,
        opacity: 0.6,
        marginLeft: '8px'
      }}>
        {icons[icon]}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <OriginalDocSidebarItem item={itemWithLabel} {...props} />
      </div>
    </div>
  );
}
