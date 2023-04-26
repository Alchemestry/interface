'use client';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import { WagmiConfigProvider } from '@/components/ClientProviders/WagmiConfigProvider';
import { Web3ModalProvider } from '@/components/ClientProviders/Web3ModalProvider';

export const ClientProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <WagmiConfigProvider>{children}</WagmiConfigProvider>

      <Web3ModalProvider />
    </>
  );
};
