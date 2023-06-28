import type { FC } from 'react';
import React from 'react';

interface IClaimRewardItemProps {
  Title: string;
  Amount: number;
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
      <div className="basis-2/5 text-end">{Amount}</div>
      <div className="ml-2.5">{Currency}</div>
    </div>
  );
};
