import type { FC } from 'react';
import React from 'react';

import type { Decimal } from '@/utils/Decimal';

interface IClaimRewardItemProps {
  Title: string;
  Amount: Decimal;
  Currency?: string;
}

export const ClaimRewardModalItem: FC<IClaimRewardItemProps> = ({
  Title,
  Amount,
  Currency = 'BNB',
}) => {
  return (
    <div className="mb-5 flex text-2xl md:w-[605px]">
      <div className="basis-2/4">{Title}</div>
      <div className="basis-2/5 text-end">{Amount.toNumber()}</div>
      <div className="ml-2.5">{Currency}</div>
    </div>
  );
};
