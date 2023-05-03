import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

export const ProgressbarCard: FC<{
  title: string;
  image: StaticImageData;
  currentAmount: number;
  maxAmount: number;
}> = ({ title, image, currentAmount, maxAmount }) => {
  const currentProgressInPercent = Math.round(currentAmount / maxAmount * 100);

  return (
    <div className="grid auto-cols-max grid-flow-col grid-rows-3 font-bold">
      <div className="row-span-3">
        <Image src={image} alt="progress bar level 1" />
      </div>
      <div className="ml-4">
        <div className="text-2xl capitalize">{title}</div>
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
        <div className="text-xl">{currentAmount} out of {maxAmount}</div>
      </div>
    </div>
  );
};
