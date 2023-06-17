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
        `outline-t-0 px-[18px] text-3xl capitalize underline-offset-[5px] outline outline-[5px] transition-all duration-200 hover:py-[25px]`,
        {
          'bg-primary py-[8px] font-medium text-primary outline-primary':
            !active,
          'clip-navbar bg-gradient-to-t from-[#F4E6B0] to-[#DEB16E] py-[25px] font-bold text-secondary underline outline-0':
            active,
        },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
