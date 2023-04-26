'use client';

import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/Button';
import { FoldButton } from '@/components/Sidebar/FoldButton';
import { HeroHeader } from '@/components/Sidebar/HeroHeader';
import { useSidebar } from '@/hooks/useSidebar';

type Route = 'main' | 'faq';

export const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useSidebar();
  const pathname = usePathname();
  const router = useRouter();

  const routes: Route[] = ['main', 'faq'];

  return (
    <aside
      className={clsx(
        'flex h-full w-full flex-col items-center justify-between p-[40px] shadow-sidebar transition-all',
        {
          'max-w-[480px]': isOpen,
          'max-w-[110px]': !isOpen,
        },
      )}
    >
      <div className="flex w-full flex-col items-center">
        <FoldButton isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <HeroHeader isOpen={isOpen} />
      </div>
      <div className="flex flex-col gap-5 self-center justify-self-center">
        {routes.map((route) => (
          <Button
            key={route}
            active={pathname.includes(route)}
            className="h-[66px] w-[258px]"
            onClick={() => router.push(`/${route}`)}
          >
            {route}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-5 self-center justify-self-center">
        Footer
      </div>
    </aside>
  );
};
