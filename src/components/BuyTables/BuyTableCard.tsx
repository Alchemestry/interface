import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import type { FC } from 'react';

import { BuyTableConfirmationModal } from './BuyTableConfirmationModal';

import { OperationButton } from '../Button/OperationButton';
import { GradientButton } from '../GradientButton';
import { BNBIcon } from '../icons/BNBIcon';

import type { ITable } from '@/hooks/useBuyTable';
import { useBuyTable } from '@/hooks/useBuyTable';

type BuyTableCardProps = ITable;

export const BuyTableCard: FC<BuyTableCardProps> = ({
  levelMark,
  image,
  userSelectedAmount,
  minTableAmount,
  maxTableAmount,
  price,
}) => {
  const setTableSelectionAmount = useBuyTable(
    (state) => state.updateUserSelectedAmount,
  );

  const [isShowTableBuyConfirm, handleShowTableBuyConfirm] = useState(false);

  return (
    <div className="flex select-none flex-wrap font-bold text-secondary">
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <div className="p-[5px]">
          <div className="relative">
            <div className="absolute bottom-8 left-1/2 flex w-10/12 -translate-x-1/2 items-center justify-center border-[3px] border-primary text-3.5xl leading-[2.438rem] text-primary">
              <div>{price.toNumber().toFixed(2)}</div>
              <div className="ml-1.5">
                <BNBIcon size={24} />
              </div>
            </div>
            <Image src={image} alt={levelMark} width={228} />
          </div>
          <div className="grid h-[89px] justify-stretch text-5xl">
            <GradientButton
              onClick={() => handleShowTableBuyConfirm(!isShowTableBuyConfirm)}
            >
              Buy
            </GradientButton>
          </div>
        </div>
        <div className="px-3 shadow-[inset_0px_2px_5px_rgba(0,0,0,0.25)]">
          <div className="flex h-[42px] items-center justify-between text-secondary/40 hover:text-secondary/100">
            <div>
              <button
                onClick={() => setTableSelectionAmount(levelMark, 'min')}
                className={clsx(
                  userSelectedAmount === minTableAmount &&
                    'pointer-events-none text-secondary/40',
                )}
              >
                min
              </button>
            </div>
            <div className="mx-[20px] flex flex-auto justify-around text-2xl">
              <div>
                <OperationButton
                  captureValue={userSelectedAmount}
                  onStateAction={() =>
                    setTableSelectionAmount(levelMark, 'decrease')
                  }
                  breakCaptureValue={minTableAmount}
                >
                  -
                </OperationButton>
              </div>
              <div className="text-secondary/100">
                {userSelectedAmount.toNumber()}
              </div>
              <div>
                <OperationButton
                  captureValue={userSelectedAmount}
                  onStateAction={() =>
                    setTableSelectionAmount(levelMark, 'increase')
                  }
                  breakCaptureValue={maxTableAmount}
                >
                  +
                </OperationButton>
              </div>
            </div>
            <div>
              <button
                onClick={() => setTableSelectionAmount(levelMark, 'max')}
                className={clsx(
                  userSelectedAmount === maxTableAmount &&
                    'pointer-events-none text-secondary/40',
                )}
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
      {isShowTableBuyConfirm ? (
        <BuyTableConfirmationModal
          isShowTableBuyConfirm={isShowTableBuyConfirm}
          handleCloseTableConfirm={() => {
            handleShowTableBuyConfirm(false);
          }}
          levelMark={levelMark}
        />
      ) : null}
    </div>
  );
};
