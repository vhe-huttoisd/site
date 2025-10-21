'use client';

import { useColors } from '../hooks';
import LogoImage from '../public/images/logo.png';
import Image from 'next/image';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  const colors = useColors();

  return <Image src={LogoImage.src} alt="Logo" width={size} height={size} />;
}
