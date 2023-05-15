import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

interface PurchasedTablesCardProps {
  title: string;
  image: StaticImageData;
  currentAmount: number;
  price: number;
}

export const PurchasedTablesCard: FC<PurchasedTablesCardProps> = ({ title, image, currentAmount, price }) => {
  // const currentProgressInPercent = Math.round(currentAmount / price * 100);

  return (
    <div className="grid grid-flow-row grid-rows-7 font-bold">
      <div className="px-4 row-span-2">
        <div className="text-xl capitalize">x{currentAmount}</div>
      </div>
      <div className="row-span-4">
        <Image className='object-cover' src={image} alt={title} />
      </div>
      <div className="row-span-1">
        <div className="text-base">{price}</div>
      </div>
    </div>
  );
};
