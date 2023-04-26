import { EthereumClient } from '@web3modal/ethereum';

import { chains } from '@/constants/wallet/chains';
import { wagmiClient } from '@/constants/wallet/wagmi';

export const ethereumClient = new EthereumClient(wagmiClient, chains);
