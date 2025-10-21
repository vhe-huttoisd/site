import { useTheme as useNextTheme } from 'next-themes';
import { theme } from 'antd';
import { useColors } from './useColors';
import { useEffect, useState } from 'react';

export function useTheme() {
  const { resolvedTheme } = useNextTheme();
  const colors = useColors();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before hydration, default to light theme
  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: colors.primary,
      colorBgContainer: colors.background,
      colorBgElevated: colors.surface,
      colorText: colors.text,
      colorTextSecondary: colors.textSecondary,
      colorBorder: colors.border,
    },
  };
}
