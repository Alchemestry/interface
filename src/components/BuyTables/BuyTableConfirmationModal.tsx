import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React, { useState } from 'react';

import { DecrementButton } from '../Button/DecrementButton';
import { IncrementButton } from '../Button/IncrementButton';
import { GradientDiv } from '../GradientDiv';
import { Title } from '../Title';

type BuyTableConfirmationModalType = {
  handleCloseTableConfirm: (event: React.MouseEvent<HTMLElement>) => void;
  image: StaticImageData;
  amount: number;
  price: number;
};

export const BuyTableConfirmationModal = ({
  handleCloseTableConfirm,
  image,
  amount,
  price,
}: BuyTableConfirmationModalType) => {
  const [tableSelectionAmount, setTableSelectionAmount] =
    useState<number>(amount);

  const [priceTable, setPriceTable] = useState<number>(amount * price);

  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto overflow-x-hidden text-primary">
        <GradientDiv>
          <div className="bg-primary pl-9 pr-20">
            <div className="pt-9">
              <Title>Order confirmation</Title>
            </div>
            <div className="ml-9 mt-9">
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
                <div className="ml-14">{priceTable} BNB</div>
              </div>
              <div className="mt-12 text-[#FF6161]">
                Please note that You cannot buy{' '}
                <span className="underline decoration-solid">Level 2</span>{' '}
                tables without any{' '}
                <span className="underline decoration-solid">
                  Level 1 table
                </span>
              </div>
              <div>Add Level 1 table +</div>
              <div className="mt-12 text-3xl">Total: 1.5 bnb</div>
              <div className="mt-12 flex justify-between pb-9">
                <div className="text-[2rem]">
                  <button
                    onClick={handleCloseTableConfirm}
                    className="border-b-2 border-dashed border-primary"
                  >
                    Cancel
                  </button>
                </div>
                <div className="rounded-3xl border-2 text-[2.625rem]">
                  <button>Accept</button>
                </div>
              </div>
            </div>
          </div>
        </GradientDiv>
      </div>
      <div className="fixed inset-0 z-10 bg-primary/50"></div>
    </>
  );
};
