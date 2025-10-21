import Head from 'next/head';
import { CandyMonsterPage } from '@/components/CandyMonsterPage';
import { AppHeader } from '@/components/AppHeader';
import { COPY } from '@/constants/copy';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {COPY.PAGES.CANDY_MONSTER.TITLE} | {COPY.SITE_TITLE_SUFFIX}
        </title>
        <meta
          name="description"
          content={COPY.PAGES.CANDY_MONSTER.DESCRIPTION}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AppHeader />
      <CandyMonsterPage />
    </>
  );
}
