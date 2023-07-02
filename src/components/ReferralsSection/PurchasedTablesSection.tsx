import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { GradientDiv } from '../GradientDiv';

import type { Decimal } from '@/utils/Decimal';

interface PurchasedTablesCardProps {
  title: string;
  image: StaticImageData;
  currentAmount: Decimal;
  price: Decimal;
}

export const PurchasedTablesCard: FC<PurchasedTablesCardProps> = ({
  title,
  image,
  currentAmount,
  price,
}) => {
  return (
    <GradientDiv className="grid-rows-7 grid h-48 w-48 grid-flow-row auto-rows-fr justify-items-center font-bold">
      <div className="row-span-2 flex items-center px-4">
        <div className="text-2xl capitalize text-secondary before:lowercase before:content-['x']">
          {currentAmount.toNumber()}
        </div>
      </div>
      <div className="relative row-span-4">
        <Image className="h-full w-48 object-cover" src={image} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 mx-auto h-full w-full bg-gradient-to-b from-transparent to-black text-center  text-xl capitalize text-primary">
          <div className="absolute bottom-3 left-0 right-0 mx-auto w-full text-center text-xl">
            {title}
          </div>
        </div>
      </div>
      <div className="row-span-1 text-center text-xl text-secondary">
        {price.toNumber()}
      </div>
    </GradientDiv>
  );
};
