import clsx from 'clsx';
import React from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type BurgerIconProps = BaseIconProps;

export const BurgerIcon = ({ className, ...props }: BurgerIconProps) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', className)}
      viewBox="0 0 32 25"
      fill="none"
    >
      <g id="burger">
        <line
          id="Line 6"
          y1="1"
          x2="32"
          y2="1"
          // stroke="#F4E6B0"
          strokeWidth="2"
        />
        <line
          id="Line 7"
          y1="13"
          x2="32"
          y2="13"
          // stroke="#F4E6B0"
          strokeWidth="2"
        />
        <line
          id="Line 8"
          y1="24"
          x2="32"
          y2="24"
          // stroke="#F4E6B0"
          strokeWidth="2"
        />
      </g>
    </IconBase>
  );
};
