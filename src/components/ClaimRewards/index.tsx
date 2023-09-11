'use client';
import React from 'react';

import { ClaimRewardModal } from './ClaimRewardModal';

import { GradientButton } from '../GradientButton';
import { GiftIcon } from '../icons/GiftIcon';

import { useClaimReward } from '@/hooks/useClaimReward';

const ClaimRewards = () => {
  const { isOpen, onClose, onOpen } = useClaimReward();

  return (
    <div className="relative flex min-h-[4.5rem] flex-col items-center justify-around gap-[10px] bg-[#F4E6B00D] p-[10px] text-center font-bold lg:flex-row">
      <div className="text-xl">
        You`ve got an unclaimed rewards from tables!
      </div>
      <div className="flex">
        <div
          onClick={() => {
            isOpen ? onClose() : onOpen();
          }}
        >
          <GradientButton className="min-h-[2.5rem] min-w-[12rem] text-secondary">
            Claim Rewards
          </GradientButton>
        </div>
        <div className="ml-5">
          <GiftIcon size="2.3rem" />
        </div>
      </div>
      <ClaimRewardModal />
    </div>
  );
};

export default ClaimRewards;
