'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ConfigProvider } from 'antd';
import { useTheme } from '@/hooks/useTheme';
import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

const AntdThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { antdTheme } = useTheme();

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AntdThemeWrapper>{children}</AntdThemeWrapper>
    </NextThemeProvider>
  );
};
