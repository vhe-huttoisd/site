'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ConfigProvider } from 'antd';
import { ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';

interface ThemeProviderProps {
  children: ReactNode;
}

function AntdConfigProvider({ children }: { children: ReactNode }) {
  const theme = useTheme();

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="theme"
      forcedTheme={undefined}
    >
      <AntdConfigProvider>{children}</AntdConfigProvider>
    </NextThemesProvider>
  );
}
