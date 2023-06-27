import React from 'react';

import { GradientButton } from '../GradientButton';
import { GradientDiv } from '../GradientDiv';
import { BaseModal } from '../Modals';
import { Title } from '../Title';

import { useClaimReward } from '@/hooks/useClaimReward';

export const ClaimRewardModal = () => {
  const { isOpen, onClose } = useClaimReward();
  if (!isOpen) return null;

  const userHasReward = true;

  return (
    <>
      <BaseModal isOpen={isOpen}>
        <GradientDiv>
          <div className="bg-primary pl-9 pr-20">
            <div className="pt-9">
              <Title>Claim Rewards</Title>
            </div>
            {userHasReward ? (
              <div className="grid ">
                <div className="flex">
                  <div>Referrals</div>
                  <div>4</div>
                  <div>BNB</div>
                </div>
                <div className="flex">
                  <div>Random Pool wins</div>
                  <div>100000</div>
                  <div>BNB</div>
                </div>
                <div className="flex">
                  <div>Queue Pool wins</div>
                  <div>234</div>
                  <div>BNB</div>
                </div>
                <div className="text-[2.625rem]">
                  <GradientButton className="min-w-[210px] rounded-full text-secondary">
                    Claim
                  </GradientButton>
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
                  <button
                    onClick={onClose}
                    className="border-b-2 border-dashed border-primary"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </GradientDiv>
      </BaseModal>
    </>
  );
};
