import Image from 'next/image';
import type { FC } from 'react';
import { useMemo } from 'react';
import React from 'react';

import { OperationButton } from '../Button/OperationButton';
import { GradientDiv } from '../GradientDiv';

import type { ITable } from '@/hooks/useBuyTable';
import { useBuyTable } from '@/hooks/useBuyTable';

type BuyTableConfirmationModalProps = ITable;

export const BuyTableConfirmationItem: FC<BuyTableConfirmationModalProps> = ({
  image,
  levelTitle,
  levelMark,
  userSelectedAmount,
  minTableAmount,
  maxTableAmount,
  price,
}) => {
  const setTableSelectionAmount = useBuyTable(
    (state) => state.updateUserSelectedAmount,
  );

  const priceAmount = useMemo(
    () => userSelectedAmount.mul(price).toNumber().toFixed(2),
    [userSelectedAmount, price],
  );

  return (
    <div className="flex items-center text-2xl">
      <div className="grid grid-flow-col grid-rows-2">
        <div className="row-span-2 h-[105px] w-[105px] overflow-hidden border-2 border-primary">
          <Image src={image} alt="img-1" />
        </div>
        <div className="ml-7 self-end font-black">{levelTitle} Table</div>
        <div className="ml-7">
          Pool:
          <span className="underline decoration-solid">Random</span>
        </div>
      </div>
      <GradientDiv className="ml-24 grid h-[36px] w-[120px] grid-cols-3 bg-secondary p-[2px] text-center text-secondary">
        <div>
          <OperationButton
            className="w-full"
            captureValue={userSelectedAmount}
            onStateAction={() => setTableSelectionAmount(levelMark, 'decrease')}
            breakCaptureValue={minTableAmount}
          >
            -
          </OperationButton>
        </div>
        <div className="bg-primary text-center text-primary">
          {userSelectedAmount.toNumber()}
        </div>
        <div>
          <OperationButton
            className="w-full"
            captureValue={userSelectedAmount}
            onStateAction={() => setTableSelectionAmount(levelMark, 'increase')}
            breakCaptureValue={maxTableAmount}
          >
            +
          </OperationButton>
        </div>
      </GradientDiv>
      <div className="ml-14 min-w-[4rem]">{priceAmount}</div>
      <div className="ml-2.5">BNB</div>
    </div>
  );
};
