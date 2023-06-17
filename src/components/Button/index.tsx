import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import { SunIcon } from '@/components/icons/SunIcon';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  active,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'relative overflow-hidden border-2 bg-contrast text-3xl font-bold capitalize text-primary transition-all hover:border-primary',
        {
          'border-primary': active,
          'border-contrast': !active,
        },
        className,
      )}
      {...props}
    >
      {children}
      <SunIcon
        size={64}
        className={clsx('absolute right-0 top-0 transition-all', {
          'translate-x-[50%]': active,
          'translate-x-[101%]': !active,
        })}
      />
    </button>
  );
};
