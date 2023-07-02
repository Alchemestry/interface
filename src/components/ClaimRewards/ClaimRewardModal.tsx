import React from 'react';

import { ClaimRewardModalItem } from './ClaimRewardModalItem';

import { CancelButton } from '../Button/CancelButton';
import { GradientButton } from '../GradientButton';
import { GradientDiv } from '../GradientDiv';
import { BaseModal } from '../Modals';
import { Title } from '../Title';

import { useClaimReward } from '@/hooks/useClaimReward';
import { Decimal } from '@/utils/Decimal';

export const ClaimRewardModal = () => {
  const { isOpen, onClose } = useClaimReward();
  if (!isOpen) return null;

  const userHasReward = true;

  const reward = [
    { type: 'Referrals', amount: Decimal.from('4') },
    { type: 'Random Pool wins', amount: Decimal.from('100000') },
    { type: 'Queue Pool wins', amount: Decimal.from('2342') },
  ];

  const totalReward = reward.reduce(
    (prevValue, { amount }) => prevValue + amount.toNumber(),
    0,
  );

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
                {reward.map(({ type, amount }, index) => (
                  <ClaimRewardModalItem
                    key={index}
                    Title={type}
                    Amount={amount}
                  />
                ))}
                <div className="mt-7 flex text-3xl">
                  <div>Total:</div>
                  <div className="ml-5 min-w-[5rem]">{totalReward}</div>
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
