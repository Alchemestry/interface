import type { PropsWithChildren } from 'react';
import React from 'react';

import { ClientProviders } from '@/components/ClientProviders';
import { Navbar } from '@/components/Navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClientProviders>
      <main className="left-0 top-0 flex h-full w-full flex-col overflow-auto bg-main px-10 lg:pl-24">
        <Navbar className="" />
        {children}
      </main>
    </ClientProviders>
  );
};

export default MainLayout;
