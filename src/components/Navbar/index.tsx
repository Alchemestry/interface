'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { HTMLAttributes } from 'react';
import React from 'react';

import { ClientOnly } from '@/components/ClientOnly';
import { BurgerIcon } from '@/components/icons/BurgerIcon';
import { NavHeading } from '@/components/Navbar/NavHeading';
import { WalletSection } from '@/components/Navbar/WalletSection';
import { useSidebar } from '@/hooks/useSidebar';

type Route = 'queue' | 'random';

export const Navbar: React.FC<HTMLAttributes<HTMLDivElement>> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { onOpen } = useSidebar();

  const routes: Route[] = ['queue', 'random'];

  return (
    <nav className="flex w-full flex-col items-center justify-between lg:flex-row lg:px-[10px]">
      <div className="z-20 flex w-full items-center justify-between bg-primary p-[30px] lg:hidden">
        <div className=" cursor-pointer">
          <BurgerIcon className="h-[25px] w-[32px]" onClick={onOpen} />
        </div>
        <ClientOnly>
          <WalletSection />
        </ClientOnly>
      </div>
      <div className="flex h-[92px] w-full items-start justify-center gap-5 self-start lg:justify-start">
        {routes.map((route) => (
          <NavHeading
            key={route}
            active={pathname.includes(route)}
            onClick={() => router.push(`/main/${route}`)}
          >
            {route}
          </NavHeading>
        ))}
      </div>
      <ClientOnly>
        <WalletSection className="hidden" />
      </ClientOnly>
    </nav>
  );
};
