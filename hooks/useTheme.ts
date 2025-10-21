import { useTheme as useNextTheme } from 'next-themes';
import { useMemo, useState } from 'react';
import type { ThemeConfig } from 'antd';

export type ThemeMode = 'light' | 'dark' | 'system';
export type PageTheme = 'default' | 'blue' | 'green' | 'purple' | 'orange';

export interface CustomThemeConfig extends ThemeConfig {
  pageTheme?: PageTheme;
}

// Helper function to adjust color brightness
const adjustColor = (color: string, amount: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  const newR = Math.max(0, Math.min(255, r + amount));
  const newG = Math.max(0, Math.min(255, g + amount));
  const newB = Math.max(0, Math.min(255, b + amount));
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
};

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextTheme();
  const [pageTheme, setPageTheme] = useState<PageTheme>('default');

  const colors = useMemo(() => {
    const isDark = resolvedTheme === 'dark';
    const primaryColor = getPrimaryColor(pageTheme);
    
    return {
      // Primary colors
      primary: primaryColor,
      primaryHover: adjustColor(primaryColor, -10),
      primaryActive: adjustColor(primaryColor, -20),
      
      // Background colors
      background: isDark ? '#0f0f0f' : '#ffffff',
      backgroundSecondary: isDark ? '#1a1a1a' : '#f8f9fa',
      backgroundTertiary: isDark ? '#262626' : '#f0f0f0',
      
      // Surface colors
      surface: isDark ? '#1f1f1f' : '#ffffff',
      surfaceHover: isDark ? '#2a2a2a' : '#f5f5f5',
      
      // Text colors
      text: isDark ? '#ffffff' : '#1a1a1a',
      textSecondary: isDark ? '#a0a0a0' : '#666666',
      textTertiary: isDark ? '#707070' : '#999999',
      
      // Border colors
      border: isDark ? '#404040' : '#e0e0e0',
      borderLight: isDark ? '#2a2a2a' : '#f0f0f0',
      
      // Status colors
      success: '#52c41a',
      warning: '#faad14',
      error: '#ff4d4f',
      info: primaryColor,
      
      // Gradient colors
      gradientStart: isDark ? '#1a1a1a' : '#667eea',
      gradientEnd: isDark ? '#2d2d2d' : '#764ba2',
    };
  }, [resolvedTheme, pageTheme]);

  const antdTheme: CustomThemeConfig = useMemo(() => {
    const isDark = resolvedTheme === 'dark';
    const primaryColor = getPrimaryColor(pageTheme);

    const baseTheme: ThemeConfig = {
      // algorithm: isDark ? 'darkAlgorithm' : 'defaultAlgorithm',
      token: {
        // Primary colors
        colorPrimary: primaryColor,
        colorSuccess: '#52c41a',
        colorWarning: '#faad14',
        colorError: '#ff4d4f',
        colorInfo: primaryColor,

        // Background colors
        colorBgBase: isDark ? '#141414' : '#ffffff',
        colorBgContainer: isDark ? '#1f1f1f' : '#ffffff',
        colorBgElevated: isDark ? '#262626' : '#ffffff',
        colorBgLayout: isDark ? '#000000' : '#f5f5f5',

        // Text colors
        colorTextBase: isDark ? '#ffffff' : '#000000',
        colorText: isDark ? '#ffffff' : '#000000',
        colorTextSecondary: isDark ? '#a6a6a6' : '#666666',
        colorTextTertiary: isDark ? '#737373' : '#999999',
        colorTextQuaternary: isDark ? '#595959' : '#cccccc',

        // Border colors
        colorBorder: isDark ? '#434343' : '#d9d9d9',
        colorBorderSecondary: isDark ? '#303030' : '#f0f0f0',

        // Border radius
        borderRadius: 8,
        borderRadiusLG: 12,
        borderRadiusSM: 6,

        // Font
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
        fontSize: 14,
        fontSizeLG: 16,
        fontSizeSM: 12,

        // Shadows
        boxShadow: isDark
          ? '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
          : '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
        boxShadowSecondary: isDark
          ? '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)'
          : '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',

        // Animation
        motionDurationSlow: '0.3s',
        motionDurationMid: '0.2s',
        motionDurationFast: '0.1s',

        wireframe: false,
      },
      components: {
        Layout: {
          bodyBg: isDark ? '#141414' : '#f5f5f5',
          headerBg: isDark ? '#1f1f1f' : '#ffffff',
          siderBg: isDark ? '#1f1f1f' : '#ffffff',
          footerBg: isDark ? '#1f1f1f' : '#ffffff',
        },
        Card: {
          headerBg: isDark ? '#1f1f1f' : '#ffffff',
          borderRadius: 12,
          boxShadow: isDark
            ? '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)'
            : '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
        },
        Button: {
          borderRadius: 8,
          fontWeight: 500,
          boxShadow: 'none',
        },
        Input: {
          borderRadius: 8,
          boxShadow: 'none',
        },
        Form: {
          labelColor: isDark ? '#ffffff' : '#262626',
          labelFontSize: 14,
          labelRequiredMarkColor: isDark ? '#ff4d4f' : '#ff4d4f',
        },
        Alert: {
          borderRadius: 8,
          fontSize: 14,
        },
        Typography: {
          colorText: isDark ? '#ffffff' : '#000000',
        },
      },
    };

    return {
      ...baseTheme,
      pageTheme,
    };
  }, [resolvedTheme, pageTheme]);

  const updatePageTheme = (newPageTheme: PageTheme) => {
    setPageTheme(newPageTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return {
    theme,
    resolvedTheme,
    pageTheme,
    antdTheme,
    colors,
    setTheme,
    toggleTheme,
    updatePageTheme,
    isDark: resolvedTheme === 'dark',
  };
}

// Helper function to get primary color based on page theme
const getPrimaryColor = (pageTheme: PageTheme): string => {
  const colors = {
    default: '#1890ff',
    blue: '#1890ff',
    green: '#52c41a',
    purple: '#722ed1',
    orange: '#fa8c16',
  };
  return colors[pageTheme];
};
