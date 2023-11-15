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
        'h-full transform bg-gradient-to-r from-primary to-primary-dark transition duration-150 ease-out hover:cursor-pointer hover:bg-gradient-to-l hover:from-primary hover:to-primary-dark active:scale-90',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
