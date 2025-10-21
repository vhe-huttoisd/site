'use client';

import {
  Button,
  Card,
  Space,
  Typography,
  Image,
  Grid,
  Row,
  Col,
  Divider,
} from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useColors } from '../hooks';
import { CandyMonsterGoalTracker } from './CandyMonsterGoalTracker';
const CANDY_MONSTER_IMAGE_PATH = '/images/candy-monster.png';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export function CandyMonsterPage() {
  const styles = useStyles();
  const screens = useBreakpoint();
  const isMobile = !screens.md; // md breakpoint is 768px

  return (
    <div
      style={isMobile ? styles.mobileContainer : styles.container}
      suppressHydrationWarning
    >
      <Card style={styles.card}>
        <Space
          direction="vertical"
          size={isMobile ? 'small' : 'large'}
          style={styles.spaceContainer}
        >
          {/* Header */}
          <div style={isMobile ? styles.mobileHeader : styles.header}>
            <Title level={2}>🍭 Feed the Candy Monster!</Title>
            <Paragraph style={styles.subtitle}>
              The Candy Monster is hungry — and we need your help to make sure
              there’s enough candy for everyone!
              <br /> Bring a bag (or two!) of candy to school or donate below.
            </Paragraph>
          </div>

          {/* Goal Tracker and Donate Button - Responsive Grid */}
          <Row align="middle">
            {/* Goal Tracker - Full width on mobile, half on desktop */}
            <Col xs={24} md={12} order={isMobile ? 1 : 0}>
              <div
                style={isMobile ? styles.mobileGoalTracker : styles.goalTracker}
              >
                <CandyMonsterGoalTracker />
              </div>
            </Col>

            {/* Donate CTA Button - Full width on mobile, half on desktop */}
            <Col xs={24} md={12} order={isMobile ? 2 : 0}>
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
              </div>
            </Col>
          </Row>

          <Divider style={styles.divider} />

          {/* Candy Monster Image */}
          <div
            style={
              isMobile ? styles.mobileImageContainer : styles.imageContainer
            }
          >
            <Image
              src={CANDY_MONSTER_IMAGE_PATH}
              alt="Candy Monster"
              style={isMobile ? styles.mobileImage : styles.image}
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
      maxWidth: '800px',
      margin: '0 auto',
    },
    mobileContainer: {
      padding: '0.5rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    spaceContainer: {
      width: '100%',
    },
    header: {
      textAlign: 'center' as const,
      borderRadius: '12px',
      padding: '1.5rem',
    },
    mobileHeader: {
      textAlign: 'center' as const,
      borderRadius: '12px',
    },
    subtitle: {
      marginBottom: 0,
      color: 'var(--text)',
    },
    imageContainer: {
      textAlign: 'center' as const,
    },
    image: {
      maxWidth: '300px',
      height: 'auto',
    },
    goalTracker: {
      minHeight: '300px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
    mobileImageContainer: {
      textAlign: 'center' as const,
      order: 2, // Move to bottom on mobile
    },
    mobileImage: {
      maxWidth: '200px',
      height: 'auto',
    },
    mobileGoalTracker: {
      //   minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      order: 1, // Move to top on mobile
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
      fontSize: '14px',
    },
    divider: {
      borderColor: 'var(--translucent-border)',
      borderWidth: '2px',
    },
  };
}
