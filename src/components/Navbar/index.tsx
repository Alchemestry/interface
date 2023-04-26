'use client';

import { Web3Button } from '@web3modal/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

import { HorseshoeIcon } from '@/components/icons/Horseshoe';
import { NavHeading } from '@/components/Navbar/NavHeading';

type Route = 'queue' | 'random';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routes: Route[] = ['queue', 'random'];

  return (
    <nav className="flex w-full items-center justify-between">
      <div className="flex items-start gap-2 self-start">
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
      <div className="flex h-[120px] items-center gap-2">
        <Web3Button />
        <HorseshoeIcon size={31} />
      </div>
    </nav>
  );
};
