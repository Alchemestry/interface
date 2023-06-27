import React from 'react';
import { shallow } from 'zustand/shallow';

import { BuyTableConfirmationItem } from './BuyTableConfirmationItem';

import { GradientButton } from '../GradientButton';
import { GradientDiv } from '../GradientDiv';
import { BaseModal } from '../Modals';
import { Title } from '../Title';

import { useBuyTable } from '@/hooks/useBuyTable';

type BuyTableConfirmationModalType = {
  isShowTableBuyConfirm: boolean;
  handleCloseTableConfirm: (event: React.MouseEvent<HTMLElement>) => void;
  levelMark: string;
};

export const BuyTableConfirmationModal = ({
  isShowTableBuyConfirm,
  handleCloseTableConfirm,
  levelMark,
}: BuyTableConfirmationModalType) => {
  const chosenTable = useBuyTable((state) => state.pickUpTable);
  const userHasTableLvl1 = useBuyTable(
    (state) => state.userHasLvl1Table,
    shallow,
  );
  const userHasTableLvl2 = useBuyTable(
    (state) => state.userHasLvl2Table,
    shallow,
  );

  const totalAmount = useBuyTable((state) => state.getTotalPrice);

  const resetPickUpTables = useBuyTable((state) => state.resetPickUpTables);

  return (
    <>
      <BaseModal
        isOpen={isShowTableBuyConfirm}
        onAfterClose={resetPickUpTables}
      >
        <GradientDiv>
          <div className="bg-primary pl-9 pr-20">
            <div className="pt-9">
              <Title>Order confirmation</Title>
            </div>
            <div className="ml-9 mt-6">
              <BuyTableConfirmationItem {...chosenTable(levelMark)} />
              {levelMark === 'lvl 2' && !userHasTableLvl1() && (
                <>
                  <div className="mt-6 text-base text-[#FF6161]">
                    Please note that You cannot buy{' '}
                    <span className="underline decoration-solid">Level 2</span>{' '}
                    tables without any a{' '}
                    <span className="underline decoration-solid">Level 1</span>{' '}
                    table
                  </div>
                  <div className="mt-6">
                    <BuyTableConfirmationItem {...chosenTable('lvl 1')} />
                  </div>
                </>
              )}
              {levelMark === 'lvl 3' && (
                <>
                  <div className="mt-6 text-[#FF6161]">
                    Please note that You cannot buy{' '}
                    <span className="underline decoration-solid">Level 3</span>{' '}
                    tables without any a{' '}
                    <span className="underline decoration-solid">Level 1</span>{' '}
                    and{' '}
                    <span className="underline decoration-solid">Level 2</span>{' '}
                    tables
                  </div>
                  {!userHasTableLvl1() && (
                    <div className="mt-6">
                      <BuyTableConfirmationItem {...chosenTable('lvl 1')} />
                    </div>
                  )}
                  {!userHasTableLvl2() && (
                    <div className="mt-6">
                      <BuyTableConfirmationItem {...chosenTable('lvl 2')} />
                    </div>
                  )}
                </>
              )}
              <div className="mt-8 flex text-3xl">
                <div>Total:</div>
                <div className="ml-5 min-w-[5rem]">{totalAmount()}</div>
                <div className="ml-1.5">BNB</div>
              </div>
              <div className="mt-8 flex justify-between pb-9">
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
      </BaseModal>
    </>
  );
};
