import type { Chain } from '@wagmi/chains';
import { sepolia } from '@wagmi/chains';

const providerUrl = process.env.NEXT_PUBLIC_PROVIDER_URL;

if (!providerUrl) {
  throw new Error('NEXT_PUBLIC_PROVIDER_URL is not set');
}

const sepoliaFixed: Chain = {
  ...sepolia,
  rpcUrls: {
    ...sepolia.rpcUrls,
    default: {
      http: [providerUrl],
    },
    public: {
      http: [providerUrl],
    },
  },
};

export const chains: Chain[] = [sepoliaFixed];
