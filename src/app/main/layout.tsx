import type { PropsWithChildren } from 'react';
import React from 'react';

import { ClientProviders } from '@/components/ClientProviders';
import { Navbar } from '@/components/Navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClientProviders>
      <main className="overflow-auto top-0 left-0 flex w-full flex-col bg-main px-5 md:px-10 h-full">
        <Navbar />
        {children}
      </main>
    </ClientProviders>
  );
};

export default MainLayout;
