import clsx from 'clsx';
import { Arimo } from 'next/font/google';
import Image from 'next/image';
import type { FC, HTMLAttributes } from 'react';
import React, { useMemo } from 'react';

import { SidebarSocials } from '@/components/Sidebar/SidebarSocials';

import SidebarIcon from '@/public/images/sidebar.svg';

interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const arimo = Arimo({ subsets: ['latin'] });

export const SidebarFooter: FC<SidebarFooterProps> = ({
  isOpen,
  className,
  ...props
}) => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div
      className={clsx('flex w-full flex-col gap-[70px]', className)}
      {...props}
    >
      <SidebarSocials isOpen={isOpen} />
      {isOpen && (
        <>
          <div className="flex w-full items-center justify-center">
            <Image src={SidebarIcon} alt="Sidebar" />
          </div>
          <div
            className={clsx(
              arimo.className,
              'flex items-center justify-between text-[14px] font-bold',
            )}
          >
            <div>Copyright {year}</div>
            <div>All rights reserved</div>
          </div>
        </>
      )}
    </div>
  );
};
