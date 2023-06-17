'use client';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import { useSidebar } from '@/hooks/useSidebar';

export const LayoutClient: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen } = useSidebar();

  return (
    <div
      className={clsx('h-full min-h-full w-full transition-all', {
        'pl-[475px]': isOpen,
        'pl-[105px]': !isOpen,
      })}
    >
      {children}
    </div>
  );
};
