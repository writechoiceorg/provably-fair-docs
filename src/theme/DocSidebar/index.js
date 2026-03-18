
import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 2V4M12 20V22M4 12H2M22 12H20M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M18.36 5.64L19.78 4.22M5.64 18.36L4.22 19.78"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ColorToggle() {
  const {colorMode, setColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <button
      type="button"
      className={styles.toggleBtn}
      onClick={() => setColorMode(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function DocSidebarWrapper(props) {
  return (
    <div className={styles.sidebarShell}>
      <div className={styles.sidebarBody}>
        <DocSidebar {...props} />
      </div>

      <div className={styles.sidebarFooter}>
        <ColorToggle />
      </div>
    </div>
  );
}