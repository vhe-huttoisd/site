'use client';

import { Button, Card, Space, Typography, Image } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useColors } from '../hooks';
import { CandyMonsterGoalTracker } from './CandyMonsterGoalTracker';
import { ButtonIds, trackDonateButtonClick } from '@/analytics';

const CANDY_MONSTER_IMAGE_PATH = '/images/candy-monster.png';
const DONATE_LINK =
  'https://my.cheddarup.com/c/vhe-trunk-or-treat-donations/items';

const { Title, Paragraph } = Typography;

export function CandyMonsterPage() {
  const styles = useStyles();

  return (
    <div style={styles.container} suppressHydrationWarning>
      <Card style={styles.card}>
        <Space direction="vertical" size="small" style={styles.spaceContainer}>
          {/* Header */}
          <div style={styles.header}>
            <Title level={2}>🍭 Feed the Candy Monster!</Title>
            <Paragraph style={styles.subtitle}>
              The Candy Monster is hungry — and we need your help to make sure
              there’s enough candy for everyone!
              <br /> Bring a bag (or two!) of candy to school or donate below.
            </Paragraph>
          </div>

          {/* Goal Tracker and Donate Button - Responsive Grid */}
          {/* Goal Tracker - Full width on mobile, half on desktop */}
          <div style={styles.goalTracker}>
            <CandyMonsterGoalTracker />
          </div>

          {/* Donate CTA Button - Full width on mobile, half on desktop */}
          <div style={styles.ctaSection}>
            <Button
              type="primary"
              size="large"
              icon={<HeartOutlined />}
              style={styles.donateButton}
              href={DONATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackDonateButtonClick(ButtonIds.TRUBK_OR_TREAT);
                console.log('Donate button clicked!');
              }}
            >
              Donate Now
            </Button>
          </div>

          {/* Candy Monster Image */}
          <div style={styles.imageContainer}>
            <Image
              src={CANDY_MONSTER_IMAGE_PATH}
              alt="Candy Monster"
              style={styles.image}
              preview={false}
            />
          </div>
        </Space>
      </Card>
    </div>
  );
}

function useStyles() {
  const colors = useColors();

  return {
    card: {
      overflow: 'hidden',
      backgroundColor: 'var(--translucent-background)',
      backdropFilter: 'blur(10px)',
      border: '1px solid var(--translucent-border)',
      boxShadow: '0 8px 32px var(--translucent-shadow)',
    },
    container: {
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    spaceContainer: {
      width: '100%',
    },
    header: {
      textAlign: 'center' as const,
      padding: '1.5rem',
    },
    subtitle: {
      marginBottom: 0,
      color: 'var(--text)',
      fontSize: '18px',
    },
    imageContainer: {
      textAlign: 'center' as const,
    },
    image: {
      maxWidth: '300px',
      height: 'auto',
    },
    goalTracker: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    ctaSection: {
      textAlign: 'center' as const,
    },
    donateButton: {
      height: '50px',
      fontSize: '18px',
      padding: '0 2rem',
      // Let Ant Design handle the primary color through theme
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    descriptionContainer: {
      marginTop: '1rem',
    },
    description: {
      //   color: colors.textSecondary,
      fontSize: '24px',
    },
    divider: {
      borderColor: 'var(--translucent-border)',
      borderWidth: '2px',
    },
  };
}
