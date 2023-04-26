import { configureChains, createClient } from 'wagmi';

import { chains } from '@/constants/wallet/chains';
import {
  web3ModalConnectors,
  web3ModalProvider,
} from '@/constants/wallet/web3modal';

const { provider } = configureChains(chains, [web3ModalProvider]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: web3ModalConnectors,
  provider,
});
