'use client';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';
import type { FC } from 'react';

import { BuyTableConfirmationModal } from './BuyTableConfirmationModal';

import { DecrementButton } from '../Button/DecrementButton';
import { IncrementButton } from '../Button/IncrementButton';
import { BNBIcon } from '../icons/BNBIcon';

interface BuyTableCardProps {
  levelMark: string;
  image: StaticImageData;
  price: number;
  minTableAmount: number;
  maxTableAmount: number;
}

export const BuyTableCard: FC<BuyTableCardProps> = ({
  levelMark,
  image,
  price,
  minTableAmount,
  maxTableAmount,
}) => {
  const [tableSelectionAmount, setTableSelectionAmount] =
    useState<number>(minTableAmount);

  const [isShowTableBuyConfirm, handleShowTableBuyConfirm] = useState(false);

  const isTableAllowAmount = (amount: number) =>
    tableSelectionAmount == amount ? 'text-secondary/40' : '';

  return (
    <div className="flex select-none flex-wrap font-bold text-secondary">
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="p-[5px]">
          <div className="relative">
            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 items-center justify-center border-[3px] border-primary text-3.5xl leading-[2.438rem] text-primary">
              <div>{price.toFixed(2)}</div>
              <div className="ml-1.5">
                <BNBIcon size={24} />
              </div>
            </div>
            <Image src={image} alt={levelMark} width={228} />
          </div>
          <div
            className="flex h-[89px] transform items-center justify-center text-5xl transition duration-150 ease-out hover:cursor-pointer hover:bg-gradient-to-l hover:from-primary hover:to-primary-dark active:scale-90"
            onClick={() => handleShowTableBuyConfirm(!isShowTableBuyConfirm)}
          >
            BUY
          </div>
        </div>
        <div className="px-3 shadow-[inset_0px_2px_5px_rgba(0,0,0,0.25)]">
          <div className="flex h-[42px] items-center justify-between text-secondary/40 hover:text-secondary/100">
            <div>
              <button
                onClick={() => setTableSelectionAmount(minTableAmount)}
                className={isTableAllowAmount(minTableAmount)}
              >
                min
              </button>
            </div>
            <div className="mx-[20px] flex flex-auto justify-around text-2xl">
              <div>
                <DecrementButton
                  captureValue={tableSelectionAmount}
                  onStateAction={setTableSelectionAmount}
                  rockBottom={minTableAmount}
                >
                  -
                </DecrementButton>
              </div>
              <div className="text-secondary/100">{tableSelectionAmount}</div>
              <div>
                <IncrementButton
                  captureValue={tableSelectionAmount}
                  onStateAction={setTableSelectionAmount}
                  uppermost={maxTableAmount}
                >
                  +
                </IncrementButton>
              </div>
            </div>
            <div>
              <button
                onClick={() => setTableSelectionAmount(maxTableAmount)}
                className={isTableAllowAmount(maxTableAmount)}
              >
                max
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="break-word flex h-[68px] w-[46px] flex-wrap items-center justify-center bg-[#DFB26F] text-center shadow-level-mark">
        {levelMark}
      </div>
      {isShowTableBuyConfirm && (
        <BuyTableConfirmationModal
          handleCloseTableConfirm={() => handleShowTableBuyConfirm(false)}
          image={image}
          amount={tableSelectionAmount}
          price={price}
        />
      )}
    </div>
  );
};
