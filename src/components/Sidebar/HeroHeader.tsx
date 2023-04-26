import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import { LogoIcon } from '@/components/icons/Logo';

interface HeroHeaderProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const HeroHeader: FC<HeroHeaderProps> = ({
  isOpen,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={clsx('mt-[80px] font-albert text-6xl', className)}
    >
      {isOpen ? 'Alchemestry' : <LogoIcon size={55.5} />}
    </div>
  );
};
