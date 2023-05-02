import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

export const ProgressbarCard: FC<{
  title: string;
  image: StaticImageData;
  currentProgressInPercent: number;
  currentAmount: number;
  maxAmount: number;
}> = ({ title, image, currentProgressInPercent, currentAmount, maxAmount }) => {
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
