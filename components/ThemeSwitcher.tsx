'use client';

import { Switch, Space } from 'antd';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Space>
      <span>☀️</span>
      <Switch
        checked={theme === 'dark'}
        onChange={checked => setTheme(checked ? 'dark' : 'light')}
      />
      <span>🌙</span>
    </Space>
  );
}
