import type { PropsWithChildren } from 'react';
import React from 'react';

import { Navbar } from '@/components/Navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex h-full w-full flex-col px-5 md:px-10">
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
