import { useMemo } from 'react';
import { CSSProperties } from 'react';

export const createStyles = <T extends Record<string, CSSProperties>>(
  stylesFn: (colors?: any) => T
) => {
  return (colors?: any) => {
    return useMemo(() => stylesFn(colors), [colors]);
  };
};
