'use client';

import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

export function AppHeader() {
  const styles = useStyles();

  return (
    <div style={styles.header}>
      <div style={styles.logoContainer}>
        <Logo size={50} />
        <div style={styles.titleContainer}>
          <h1 style={styles.title}>VHE PTA</h1>
        </div>
      </div>
      <div style={styles.themeSwitcherContainer}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

function useStyles() {
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '1rem',
      backgroundColor: 'var(--translucent-background)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--translucent-border)',
      boxShadow: '0 2px 8px var(--translucent-shadow)',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
    titleContainer: {
      flex: 1,
    },
    title: {
      margin: 0,
      fontSize: '24px',
      fontWeight: '300',
      color: 'var(--text)',
      letterSpacing: '0.5px',
      // textShadow: '0 2px 4px var(--translucent-text-shadow)',
    },
    themeSwitcherContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  };
}
