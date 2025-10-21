import React from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
