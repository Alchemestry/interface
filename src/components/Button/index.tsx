import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

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
        'border-2 bg-contrast text-3xl font-bold capitalize text-primary transition-all hover:border-primary',
        {
          'border-primary': active,
          'border-contrast': !active,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
