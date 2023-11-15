'use client';

import clsx from 'clsx';
import React from 'react';

import { FoldButton } from '@/components/Sidebar/FoldButton';
import { HeroHeader } from '@/components/Sidebar/HeroHeader';
import { SidebarButtons } from '@/components/Sidebar/SidebarButtons';
import { SidebarFooter } from '@/components/Sidebar/SidebarFooter';
import { useSidebar } from '@/hooks/useSidebar';

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useSidebar();

  return (
    <aside
      className={clsx(
        'z-30 h-full flex-col items-center justify-between bg-primary p-[40px] shadow-sidebar transition-all',
        {
          'min-w-screen flex lg:w-full lg:max-w-[480px]': isOpen,
          'hidden lg:flex lg:max-w-[110px]': !isOpen,
        },
      )}
    >
      <div className="flex w-full flex-col items-center">
        <FoldButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <HeroHeader isOpen={isOpen} />
      </div>
      <SidebarButtons isOpen={isOpen} />
      <SidebarFooter isOpen={isOpen} />
    </aside>
  );
};
