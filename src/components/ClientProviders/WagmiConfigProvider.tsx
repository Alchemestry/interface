import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { WagmiConfig } from 'wagmi';

import { wagmiClient } from '@/constants/wallet';

export const WagmiConfigProvider: FC<PropsWithChildren> = ({ children }) => {
  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
};
