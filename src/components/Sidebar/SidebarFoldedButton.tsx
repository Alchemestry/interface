import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

interface SidebarFoldedButtonProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const SidebarFoldedButton: FC<SidebarFoldedButtonProps> = ({
  active,
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'flex h-[80px] w-[80px] items-center justify-center rounded-[16px] transition-all hover:border-[1px] hover:border-primary',
        {
          'border-[1px]': active,
          'border-primary': active,
          'border-transparent': !active,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
