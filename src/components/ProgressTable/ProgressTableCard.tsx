import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import type { Decimal } from '@/utils/Decimal';

interface ProgressTableCardProps {
  title: string;
  image: StaticImageData;
  currentAmount: Decimal;
  maxAmount: Decimal;
}

export const ProgressTableCard: FC<ProgressTableCardProps> = ({
  title,
  image,
  currentAmount,
  maxAmount,
}) => {
  const currentProgressInPercent = currentAmount
    .div(maxAmount)
    .mul(100)
    .toNumber();

  return (
    <div className="grid grid-flow-col grid-rows-3 font-bold">
      <div className="row-span-3">
        <Image src={image} alt={title} />
      </div>
      <div className="ml-4">
        <div className="text-xl capitalize">{title}</div>
      </div>
      <div className="ml-4 self-end">
        <div className="h-3.5 w-full border border-primary bg-primary">
          <div
            style={{ width: `${currentProgressInPercent}%` }}
            className="h-full bg-gradient-to-r from-primary to-primary-dark"
          ></div>
        </div>
      </div>
      <div className="ml-4 self-end">
        <div className="text-base">
          {currentAmount.toString()} out of {maxAmount.toString()}
        </div>
      </div>
    </div>
  );
};
