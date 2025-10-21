'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useColors, useIsDarkMode } from '../hooks';

// Dynamically import Chart to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// Types for our chart data
interface ChartData {
  goal: number;
  achieved: number;
  pct: number;
}

interface CandyMonsterGoalTrackerProps {
  className?: string;
  style?: React.CSSProperties;
}

// Constants from the original script
const COPY = {
  seriesName: 'Goal',
  totalTitle: 'Progress',
  valueSuffix: '%',
  totalFormat: ({ achieved, goal }: { achieved: number; goal: number }) =>
    `${achieved} / ${goal}`,
};

const GOOGLE_SHEETS_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR70fpSVLEzzbGatiRFIzy6hrXfx3IaEqzmm5rl5NNK_lYG0O7YFxy2KPXZ3VANg15Gy4AduBxWVOwj/pub?output=csv';

export function CandyMonsterGoalTracker({
  className,
  style,
}: CandyMonsterGoalTrackerProps) {
  const [data, setData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const colors = useColors();
  const isDarkMode = useIsDarkMode();
  const styles = useStyles(colors);

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load data on mount
  useEffect(() => {
    if (isClient) {
      loadData(setData, setLoading, setError);
    }
  }, [isClient]);

  // Render loading state
  if (loading || !isClient) {
    return (
      <div
        className={className}
        style={{ ...style, ...styles.loadingContainer }}
      >
        Loading progress chart...
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className={className} style={{ ...style, ...styles.errorContainer }}>
        {error}
      </div>
    );
  }

  // Render chart using react-apexcharts
  if (!data) return null;

  const options = getChartOptions(data, colors, isDarkMode);
  const series = [data.pct];

  return (
    <div className={className} style={style}>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        width="100%"
        height="300"
      />
    </div>
  );
}

// Get chart options
function getChartOptions(
  chartData: ChartData,
  colors: ReturnType<typeof useColors>,
  isDarkMode: boolean
) {
  const { goal, achieved, pct } = chartData;

  return {
    chart: {
      type: 'radialBar' as const,
      fontFamily:
        'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
      animations: {
        enabled: true,
        speed: 200,
        dynamicAnimation: { enabled: false },
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: colors.primary,
        shadeTo: 'light' as const,
        shadeIntensity: 0.6,
      },
    },
    series: [pct],
    labels: [COPY.seriesName],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '62%',
          background: 'transparent',
          dropShadow: { enabled: false },
        },
        track: {
          background: colors.border,
          margin: 8,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            color: colors.text,
            fontSize: '40px',
            fontWeight: 700,
            offsetY: 4,
            formatter: (val: number) => `${Math.round(val)}${COPY.valueSuffix}`,
          },
          total: {
            show: true,
            label: COPY.totalTitle,
            color: colors.textSecondary,
            fontSize: '14px',
            fontWeight: 600,
            offsetY: 28,
            formatter: () => COPY.totalFormat({ achieved, goal }),
          },
        },
      },
    },
    fill: {
      type: 'solid' as const,
      colors: [colors.primary],
    },
  };
}

// Load data from Google Sheets
async function loadData(
  setData: React.Dispatch<React.SetStateAction<ChartData | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>
) {
  try {
    setLoading(true);
    setError(null);

    const chartData = await fetchData();
    setData(chartData);
  } catch (err) {
    console.error('Error loading data:', err);
    setError('Failed to load progress chart');
  } finally {
    setLoading(false);
  }
}

// Fetch data from Google Sheets
async function fetchData(): Promise<ChartData> {
  const res = await fetch(GOOGLE_SHEETS_URL, { cache: 'no-store' });
  const text = await res.text();

  const rows = text
    .trim()
    .split('\n')
    .map(r => r.split(','));
  const headers = rows[0].map(h => h.trim().toLowerCase());
  const vals = rows[1].map(v => Number(v));

  let goalIdx = headers.findIndex(h => /goal/.test(h));
  let achIdx = headers.findIndex(h => /achiev|actual|progress/.test(h));
  if (goalIdx === -1) goalIdx = 0;
  if (achIdx === -1) achIdx = 1;

  const goal = Number(vals[goalIdx]);
  const achieved = Number(vals[achIdx]);
  const pct = Math.max(0, Math.min(100, (achieved / goal) * 100));

  //   return { goal, achieved, pct: Math.round(pct) };
  return { goal, achieved, pct: 50 };
}

function useStyles(colors: ReturnType<typeof useColors>) {
  return {
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      color: colors.textSecondary,
    },
    errorContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '300px',
      color: colors.error,
    },
    chartContainer: {
      width: '100%',
      height: '300px',
    },
  };
}
