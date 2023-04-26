import { Web3Modal } from '@web3modal/react';
import React from 'react';

import colors from '@/constants/theme/colors';
import { ethereumClient, WEB3_MODAL_PROJECT_ID } from '@/constants/wallet';
import { montserrat } from '@/utils/fonts';

export const Web3ModalProvider = () => {
  return (
    <Web3Modal
      projectId={WEB3_MODAL_PROJECT_ID}
      ethereumClient={ethereumClient}
      themeMode="dark"
      themeVariables={{
        '--w3m-font-family': `${montserrat.variable}, sans-serif`,
        '--w3m-accent-color': colors.primary,
        '--w3m-accent-fill-color': colors.secondary,
        '--w3m-background-color': colors.primary,
      }}
    />
  );
};
