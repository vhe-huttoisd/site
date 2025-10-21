import Head from 'next/head';
import { Layout, Typography, Space } from 'antd';

import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { COPY } from '@/constants/copy';
import { useTheme } from '@/hooks/useTheme';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
  const { colors } = useTheme();
  const styles = useStyles(colors);

  return (
    <>
      <Head>
        <title>{COPY.SITE.TITLE}</title>
        <meta name="description" content={COPY.SITE.DESCRIPTION} />
      </Head>

      <Layout style={styles.layout}>
        <Header style={styles.header}>
          <Space>
            <Title level={2} style={styles.headerTitle}>
              {COPY.HEADER.TITLE}
            </Title>
          </Space>
          <ThemeSwitcher />
        </Header>

        <Content style={styles.content}>
          <div style={styles.contentWrapper}>
            <Title level={1} style={styles.title}>
              {COPY.HEADER.TITLE}
            </Title>
            <Paragraph style={styles.subtitle}>
              {COPY.HEADER.SUBTITLE}
            </Paragraph>
          </div>
        </Content>

        <Footer style={styles.footer}>{COPY.FOOTER.TEXT}</Footer>
      </Layout>
    </>
  );
}

function useStyles(colors: any) {
  return {
    layout: {
      minHeight: '100vh',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
    },
    headerTitle: {
      color: colors.text,
      margin: 0,
    },
    content: {
      padding: '24px',
      background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
    },
    contentWrapper: {
      maxWidth: 800,
      margin: '0 auto',
      background: colors.surface,
      borderRadius: 12,
      padding: 48,
      boxShadow: `0 10px 30px ${colors.isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)'}`,
      textAlign: 'center' as const,
    },
    title: {
      fontSize: '3rem',
      marginBottom: '1rem',
      background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    subtitle: {
      fontSize: 18,
      color: colors.textSecondary,
      marginBottom: '2rem',
    },
    footer: {
      textAlign: 'center' as const,
      background: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
      color: colors.text,
    },
  };
}
