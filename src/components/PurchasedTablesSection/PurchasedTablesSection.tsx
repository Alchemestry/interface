import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

import { GradientDiv } from '../GradientDiv';

interface PurchasedTablesCardProps {
  title: string;
  image: StaticImageData;
  currentAmount: number;
  price: number;
}

export const PurchasedTablesCard: FC<PurchasedTablesCardProps> = ({ title, image, currentAmount, price }) => {
  return (
    <GradientDiv className='grid justify-items-center grid-flow-row auto-rows-fr grid-rows-7 font-bold h-48 w-48'>
      <div className="px-4 row-span-2 flex items-center">
        <div className="text-2xl capitalize before:content-['x'] before:lowercase text-secondary">{currentAmount}</div>
      </div>
      <div className="row-span-4 relative">
        <Image className='object-cover h-full w-48' src={image} alt={title} />
        <div className='capitalize absolute text-primary bottom-0 mx-auto left-0 right-0 w-full h-full text-center text-xl  bg-gradient-to-b from-transparent to-black'>
            <div className='absolute bottom-3 mx-auto left-0 right-0 w-full text-center text-xl'>
              {title}
            </div>
          </div>
      </div>
      <div className="text-center row-span-1 text-secondary text-xl">
        {price}
      </div>
    </GradientDiv>
  );
};