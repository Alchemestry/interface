import { w3mConnectors, w3mProvider } from '@web3modal/ethereum';

import { chains } from '@/constants/wallet/chains';

export const WEB3_MODAL_PROJECT_ID = process.env
  .NEXT_PUBLIC_WEB3_MODAL_PROJECT_ID as string;

export const web3ModalProvider = w3mProvider({
  projectId: WEB3_MODAL_PROJECT_ID,
});

export const web3ModalConnectors = w3mConnectors({
  chains,
  projectId: WEB3_MODAL_PROJECT_ID,
  version: 2,
});
