import React from 'react';

import { CancelButton } from '../Button/CancelButton';
import { GradientButton } from '../GradientButton';
import { GradientDiv } from '../GradientDiv';
import { BaseModal } from '../Modals';
import { Title } from '../Title';

import { useClaimReward } from '@/hooks/useClaimReward';

export const ClaimRewardModal = () => {
  const { isOpen, onClose } = useClaimReward();
  if (!isOpen) return null;

  const userHasReward = true;

  const Row = (row1: string, row2: string, row3: string) => {
    return (
      <div className="mb-5 flex text-2xl md:w-[605px]">
        <div className="basis-2/4">{row1}</div>
        <div className="basis-2/5 text-end">{row2}</div>
        <div className="ml-2.5">{row3}</div>
      </div>
    );
  };

  return (
    <>
      <BaseModal isOpen={isOpen}>
        <GradientDiv>
          <div className="bg-primary pl-9 pr-9">
            <div className="pt-9">
              <Title>Claim Rewards</Title>
            </div>
            {userHasReward ? (
              <div className="ml-9 mt-6 grid">
                {Row('Referrals', '4', 'BNB')}
                {Row('Random Pool wins', '100000', 'BNB')}
                {Row('Queue Pool wins', '234', 'BNB')}
                <div className="mt-7 flex text-3xl">
                  <div>Total:</div>
                  <div className="ml-5 min-w-[5rem]">132310</div>
                  <div className="ml-1.5">BNB</div>
                </div>
                <div className="mb-9 mt-12 flex justify-between">
                  <div className="self-center text-2xl">
                    <CancelButton onClick={onClose} />
                  </div>
                  <div className=" text-[2.625rem]">
                    <GradientButton className="min-w-[210px] rounded-full text-secondary">
                      Claim
                    </GradientButton>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-32 mt-32 text-center text-3xl text-[#FF6161]">
                  You have no rewards yet
                  <br />
                  Come back later
                </div>
                <div className="pb-14 text-center text-2xl">
                  <CancelButton onClick={onClose} />
                </div>
              </>
            )}
          </div>
        </GradientDiv>
      </BaseModal>
    </>
  );
};
