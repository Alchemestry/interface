'use client';

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { ClientOnly } from '@/components/ClientOnly';
import { NavHeading } from '@/components/Navbar/NavHeading';
import { WalletSection } from '@/components/Navbar/WalletSection';

type Route = 'queue' | 'random';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routes: Route[] = ['queue', 'random'];

  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex h-[92px] items-start gap-2 self-start">
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
        <WalletSection />
      </ClientOnly>
    </nav>
  );
};
