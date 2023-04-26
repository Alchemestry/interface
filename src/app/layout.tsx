import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';
import React from 'react';

import { ClientProviders } from '@/components/ClientProviders';
import { Sidebar } from '@/components/Sidebar';
import { albertText, montserrat } from '@/utils/fonts';
import { timeout } from '@/utils/timeout';

export const metadata: Metadata = {
  title: 'Alchemestry',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <div
            className={clsx(
              'bg-primary',
              albertText.variable,
              montserrat.variable,
              'flex h-full w-full flex-col font-montserrat text-primary md:flex-row',
            )}
          >
            <Sidebar />
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
