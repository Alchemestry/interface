import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

type GradientDivProps = HTMLAttributes<HTMLDivElement>;

export const GradientDiv: FC<GradientDivProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        'h-full bg-gradient-to-r from-primary to-primary-dark p-1',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
