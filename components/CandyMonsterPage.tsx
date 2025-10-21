'use client';

import { Button, Card, Space, Typography, Image } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useTheme, useColors } from '../hooks';
const CANDY_MONSTER_IMAGE_PATH = '/images/candy-monster.png';

const { Title, Paragraph } = Typography;

export function CandyMonsterPage() {
  const styles = useStyles();

  return (
    <div style={styles.container} suppressHydrationWarning>
      <Card>
        <Space direction="vertical" size="large" style={styles.spaceContainer}>
          {/* Header */}
          <div style={styles.header}>
            <Title level={1}>Feed The Candy Monster!</Title>
            <Paragraph style={styles.subtitle}>
              Help feed the hungry monster with candy! Bring a bag or two of
              candy to the school by October 30th. You can also donate money to
              the candy monster fund.
            </Paragraph>
          </div>

          {/* Donate CTA Button */}
          <div style={styles.ctaSection}>
            <Button
              type="primary"
              size="large"
              icon={<HeartOutlined />}
              style={styles.donateButton}
              onClick={() => {
                // TODO: Implement donation functionality
                alert('Donate button clicked!');
              }}
            >
              Donate Now
            </Button>
            <div style={styles.descriptionContainer}>
              <Paragraph style={styles.description}>
                Every donation helps feed the monster and supports our cause!
              </Paragraph>
            </div>
          </div>

          {/* Goal Tracker and Monster Image Side by Side */}
          <div style={styles.sideBySideContainer}>
            {/* Goal Tracker - Left */}
            <div style={styles.goalTracker}>
              <div style={styles.goalTrackerText}>
                🎯 Goal Tracker Coming Soon
              </div>
            </div>

            {/* Candy Monster Image - Right */}
            <div style={styles.imageContainer}>
              <Image
                src={CANDY_MONSTER_IMAGE_PATH}
                alt="Candy Monster"
                style={styles.image}
                preview={false}
              />
            </div>
          </div>
        </Space>
      </Card>
    </div>
  );
}

function useStyles() {
  const colors = useColors();

  return {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: colors.background,
      color: colors.text,
    },
    spaceContainer: {
      width: '100%',
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '2rem',
    },
    subtitle: {
      fontSize: '18px',
      marginBottom: 0,
    },
    sideBySideContainer: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    imageContainer: {
      textAlign: 'center' as const,
      flex: '0 0 auto',
    },
    image: {
      maxWidth: '300px',
      height: 'auto',
      borderRadius: '12px',
    },
    goalTracker: {
      flex: '1',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.surface,
      borderRadius: '8px',
      border: `2px dashed ${colors.border}`,
    },
    goalTrackerText: {
      color: colors.textSecondary,
      fontSize: '16px',
    },
    ctaSection: {
      textAlign: 'center' as const,
    },
    donateButton: {
      height: '50px',
      fontSize: '18px',
      padding: '0 2rem',
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    descriptionContainer: {
      marginTop: '1rem',
    },
    description: {
      color: colors.textSecondary,
      fontSize: '14px',
    },
  };
}
