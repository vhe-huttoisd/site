export function useColors() {
  return {
    // Primary brand color
    primary: 'var(--primary)',

    // Background colors
    background: 'var(--background)',
    backgroundSecondary: 'var(--background)',
    backgroundTertiary: 'var(--background)',

    // Text colors
    text: 'var(--text)',
    textSecondary: 'var(--text-secondary)',
    textTertiary: 'var(--text-secondary)',
    textDisabled: 'var(--text-secondary)',

    // Border colors
    border: 'var(--border)',
    borderSecondary: 'var(--border)',
    borderTertiary: 'var(--border)',

    // Surface colors
    surface: 'var(--surface)',
    surfaceSecondary: 'var(--surface)',
    surfaceTertiary: 'var(--surface)',

    // Interactive colors
    hover: 'var(--surface)',
    active: 'var(--surface)',
    focus: 'var(--primary)',

    // Status colors
    success: 'var(--primary)',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1890ff',
  };
}
