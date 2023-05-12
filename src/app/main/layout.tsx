import type { PropsWithChildren } from 'react';
import React from 'react';

import { ClientProviders } from '@/components/ClientProviders';
import { Navbar } from '@/components/Navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClientProviders>
      <main className="flex h-full w-full flex-col bg-main px-5 md:px-10">
        <Navbar />
        {children}
      </main>
    </ClientProviders>
  );
};

export default MainLayout;
