import { useTheme as useNextTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useIsDarkMode() {
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR or before hydration, default to light theme
  return mounted ? resolvedTheme === 'dark' : false;
}
