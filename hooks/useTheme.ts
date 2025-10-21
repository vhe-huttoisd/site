import { theme } from 'antd';
import { useColors } from './useColors';
import { useIsDarkMode } from './useIsDarkMode';

export function useTheme() {
  const colors = useColors();
  const isDark = useIsDarkMode();

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
