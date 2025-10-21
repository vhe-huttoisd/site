'use client';

import { Switch, Space } from 'antd';
import { useTheme } from 'next-themes';
import { useIsDarkMode } from '../hooks';

export function ThemeSwitcher() {
  const { setTheme } = useTheme();
  const isDarkMode = useIsDarkMode();

  return (
    <Space>
      <span>☀️</span>
      <Switch
        checked={isDarkMode}
        onChange={checked => setTheme(checked ? 'dark' : 'light')}
      />
      <span>🌙</span>
    </Space>
  );
}
