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
        'border-l-[5px] border-r-[5px] border-l-[#F4E6B0] border-r-[#DFB26F] bg-mainGradient bg-100_5px bg-0_0_0_100% bg-no-repeat',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
