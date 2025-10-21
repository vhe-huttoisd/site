import Head from 'next/head';
import { CandyMonsterPage } from '@/components/CandyMonsterPage';
import { AppHeader } from '@/components/AppHeader';
import { COPY, BACKGROUND_IMAGE_URL } from '@/constants/copy';
export default function Home() {
  const styles = useStyles();

  return (
    <div style={styles.backgroundContainer}>
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
    </div>
  );
}

function useStyles() {
  return {
    backgroundContainer: {
      backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
    },
  };
}
