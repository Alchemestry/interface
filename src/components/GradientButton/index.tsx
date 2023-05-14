import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import { SunIcon } from '@/components/icons/SunIcon';
import { IconType } from 'react-icons';

export interface GradientButtonProps extends HTMLAttributes<HTMLButtonElement> {
  // icon?: IconType,
  // text: string
}

export const GradientButton: FC<GradientButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className='h-full bg-gradient-to-r from-primary to-primary-dark'
      {...props}
    >
      {children}
    </button>
  );
};
