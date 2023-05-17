import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

export type GradientButtonProps = HTMLAttributes<HTMLButtonElement>;

export const GradientButton: FC<GradientButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'h-full bg-gradient-to-r from-primary to-primary-dark',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
