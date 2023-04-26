import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

interface NavHeading extends PropsWithChildren {
  active?: boolean;
  onClick: () => void;
}

export const NavHeading: FC<NavHeading> = ({ active, children, onClick }) => {
  return (
    <button
      className={clsx(
        `border-[5px] border-t-0 border-primary px-[18px] text-3xl capitalize underline-offset-[5px] transition-all`,
        {
          'text-primary': !active,
          'text-secondary': active,
          'bg-primary': !active,
          'bg-secondary': active,
          'py-[8px]': !active,
          'py-[25px]': active,
          'font-bold': active,
          'font-medium': !active,
          underline: active,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
