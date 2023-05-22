import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import React from 'react';

import { DecrementButton } from '../Button/DecrementButton';
import { IncrementButton } from '../Button/IncrementButton';
import { GradientDiv } from '../GradientDiv';

interface BuyTableConfirmationModalProps {
  levelMark: string;
  image: StaticImageData;
  price: number;
  minTableAmount: number;
  maxTableAmount: number;
  amount: number;
}

export const BuyTableConfirmationItem: FC<BuyTableConfirmationModalProps> = ({
  image,
  amount,
  price,
}) => {
  const [tableSelectionAmount, setTableSelectionAmount] =
    useState<number>(amount);

  const priceAmount = useMemo(
    () => (tableSelectionAmount * price).toFixed(2),
    [tableSelectionAmount, price],
  );

  return (
    <div className="flex items-center text-2xl">
      <div className="grid grid-flow-col grid-rows-2">
        <div className="row-span-2 h-[105px] w-[105px] overflow-hidden border-2 border-primary">
          <Image src={image} alt="img-1" />
        </div>
        <div className="ml-7 self-end font-black">Level 2 Table</div>
        <div className="ml-7">
          Pool:
          <span className="underline decoration-solid">Random</span>
        </div>
      </div>
      <GradientDiv className="ml-24 grid h-[36px] w-[120px] grid-cols-3 bg-secondary p-[2px] text-center text-secondary">
        <div>
          <DecrementButton
            className="w-full"
            captureValue={tableSelectionAmount}
            onStateAction={setTableSelectionAmount}
            rockBottom={1}
          >
            -
          </DecrementButton>
        </div>
        <div className="bg-primary text-center text-primary">
          {tableSelectionAmount}
        </div>
        <div>
          <IncrementButton
            className="w-full"
            captureValue={tableSelectionAmount}
            onStateAction={setTableSelectionAmount}
            uppermost={20}
          >
            +
          </IncrementButton>
        </div>
      </GradientDiv>
      <div className="ml-14 min-w-[4rem]">{priceAmount}</div>
      <div className="ml-2.5">BNB</div>
    </div>
  );
};
