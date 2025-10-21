import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from '@/providers/ThemeProvider';
import { COPY } from '@/constants/copy';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>{COPY.SITE.TITLE}</title>
        <meta name="description" content={COPY.SITE.DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
