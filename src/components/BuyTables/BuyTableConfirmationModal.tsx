import React, { useState } from 'react';

import { BuyTableConfirmationItem } from './BuyTableConfirmationItem';

import { GradientButton } from '../GradientButton';
import { GradientDiv } from '../GradientDiv';
import { Title } from '../Title';

import { useBuyTable } from '@/hooks/useBuyTable';

type BuyTableConfirmationModalType = {
  handleCloseTableConfirm: (event: React.MouseEvent<HTMLElement>) => void;
  levelMark: string;
};

export const BuyTableConfirmationModal = ({
  handleCloseTableConfirm,
  levelMark,
}: BuyTableConfirmationModalType) => {
  const chosenTable = useBuyTable((state) => state.pickUpTable);
  const userHasTableLvl1 = useBuyTable((state) => state.userHasLvl1Table);
  const userHasTableLvl1AndLvl2 = useBuyTable(
    (state) => state.userHasLvl1AndLvl2Table,
  );

  const totalAmount = useBuyTable((state) => state.getTotalPrice);

  const [level1Btn, setLevel1Btn] = useState<boolean>(false);
  const [level2Btn, setLevel2Btn] = useState<boolean>(false);

  const level1Invisible = level1Btn ? (
    <BuyTableConfirmationItem {...chosenTable('lvl 1')} />
  ) : (
    <div onClick={() => setLevel1Btn(true)}>
      <button className="border-b-2 border-dashed border-primary">
        Add Level 1 table +
      </button>
    </div>
  );

  const level2Invisible = level2Btn ? (
    <BuyTableConfirmationItem {...chosenTable('lvl 2')} />
  ) : (
    <div onClick={() => setLevel2Btn(true)}>
      <button className="border-b-2 border-dashed border-primary">
        Add Level 2 table +
      </button>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto overflow-x-hidden text-primary">
        <GradientDiv>
          <div className="bg-primary pl-9 pr-20">
            <div className="pt-9">
              <Title>Order confirmation</Title>
            </div>
            <div className="ml-9 mt-9">
              <BuyTableConfirmationItem {...chosenTable(levelMark)} />
              {levelMark === 'lvl 2' && !userHasTableLvl1() && (
                <>
                  <div className="mt-12 text-[#FF6161]">
                    Please note that You cannot buy{' '}
                    <span className="underline decoration-solid">Level 2</span>{' '}
                    tables without any a{' '}
                    <span className="underline decoration-solid">Level 1</span>{' '}
                    table
                  </div>
                  {level1Invisible}
                </>
              )}
              {levelMark === 'lvl 3' && !userHasTableLvl1AndLvl2() && (
                <>
                  <div className="mt-12 text-[#FF6161]">
                    Please note that You cannot buy{' '}
                    <span className="underline decoration-solid">Level 3</span>{' '}
                    tables without any a{' '}
                    <span className="underline decoration-solid">Level 1</span>{' '}
                    and{' '}
                    <span className="underline decoration-solid">Level 2</span>{' '}
                    tables
                  </div>
                  {level1Invisible}
                  {level2Invisible}
                </>
              )}
              <div className="mt-12 flex text-3xl">
                <div>Total:</div>
                <div className="ml-5 min-w-[5rem]">{totalAmount()}</div>
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
