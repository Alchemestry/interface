import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';
import { IconType } from 'react-icons';

import { SunIcon } from '@/components/icons/SunIcon';

export type GradientButtonProps = HTMLAttributes<HTMLButtonElement>

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
