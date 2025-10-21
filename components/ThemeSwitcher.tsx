import { Button, Dropdown, Space, Typography } from 'antd';
import {
  BulbOutlined,
  BulbFilled,
  SettingOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';

import { useTheme, type PageTheme } from '@/hooks/useTheme';
import { COPY } from '@/constants/copy';

const { Text } = Typography;

export const ThemeSwitcher = () => {
  const { theme, toggleTheme, pageTheme, updatePageTheme, isDark, colors } =
    useTheme();
  const styles = useStyles(colors);

  const pageThemeOptions = [
    {
      key: 'default',
      label: COPY.THEME.PAGE_THEMES.DEFAULT,
      color: colors.primary,
    },
    { key: 'blue', label: COPY.THEME.PAGE_THEMES.BLUE, color: '#1890ff' },
    {
      key: 'green',
      label: COPY.THEME.PAGE_THEMES.GREEN,
      color: colors.success,
    },
    { key: 'purple', label: COPY.THEME.PAGE_THEMES.PURPLE, color: '#722ed1' },
    {
      key: 'orange',
      label: COPY.THEME.PAGE_THEMES.ORANGE,
      color: colors.warning,
    },
  ];

  const themeMenuItems = [
    {
      key: 'light',
      label: 'Light Mode',
      icon: <BulbOutlined />,
      onClick: () => updatePageTheme('default'),
    },
    {
      key: 'dark',
      label: 'Dark Mode',
      icon: <BulbFilled />,
      onClick: () => updatePageTheme('default'),
    },
  ];

  const pageThemeMenuItems = pageThemeOptions.map(option => ({
    key: option.key,
    label: (
      <Space>
        <div
          style={{
            ...styles.colorIndicator,
            backgroundColor: option.color,
          }}
        />
        {option.label}
      </Space>
    ),
    onClick: () => updatePageTheme(option.key as PageTheme),
  }));

  return (
    <Space>
      <Button
        type="text"
        icon={isDark ? <BulbFilled /> : <BulbOutlined />}
        onClick={toggleTheme}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <Text>{isDark ? COPY.THEME.DARK : COPY.THEME.LIGHT}</Text>
      </Button>

      <Dropdown
        menu={{ items: pageThemeMenuItems }}
        placement="bottomRight"
        trigger={['click']}
      >
        <Button type="text" icon={<BgColorsOutlined />}>
          <Text>{COPY.THEME.THEME_BUTTON}</Text>
        </Button>
      </Dropdown>
    </Space>
  );
};

function useStyles(colors: any) {
  return {
    colorIndicator: {
      width: 12,
      height: 12,
      borderRadius: '50%',
    },
  };
}
