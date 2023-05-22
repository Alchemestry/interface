import type { StaticImageData } from 'next/image';
import React from 'react';

import { BuyTableConfirmationItem } from './BuyTableConfirmationItem';

import { GradientButton } from '../GradientButton';
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
  const priceAmount = 0;

  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto overflow-x-hidden text-primary">
        <GradientDiv>
          <div className="bg-primary pl-9 pr-20">
            <div className="pt-9">
              <Title>Order confirmation</Title>
            </div>
            <div className="ml-9 mt-9">
              <BuyTableConfirmationItem
                image={image}
                amount={amount}
                price={price}
                levelMark="s"
                maxTableAmount={10}
                minTableAmount={1}
              />
              <div className="mt-12 text-[#FF6161]">
                Please note that You cannot buy{' '}
                <span className="underline decoration-solid">Level 2</span>{' '}
                tables without any{' '}
                <span className="underline decoration-solid">
                  Level 1 table
                </span>
              </div>
              <div className="border-b-2 border-dashed border-primary">
                Add Level 1 table +
              </div>
              <div className="mt-12 flex text-3xl">
                <div>Total:</div>
                <div className="ml-5 min-w-[5rem]">{priceAmount}</div>
                <div className="ml-1.5">BNB</div>
              </div>
              <div className="mt-12 flex justify-between pb-9">
                <div className="text-[2rem]">
                  <button
                    onClick={handleCloseTableConfirm}
                    className="border-b-2 border-dashed border-primary"
                  >
                    Cancel
                  </button>
                </div>
                <div className="text-[2.625rem]">
                  <GradientButton className="min-w-[200px] rounded-full text-secondary">
                    Accept
                  </GradientButton>
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
