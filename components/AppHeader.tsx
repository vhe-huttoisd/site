'use client';

import { useColors } from '../hooks';
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
  const colors = useColors();

  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '1rem',
      backgroundColor: 'transparent',
      borderBottom: `1px solid ${colors.border}`,
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
      color: colors.textSecondary,
      letterSpacing: '0.5px',
    },
    themeSwitcherContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  };
}
