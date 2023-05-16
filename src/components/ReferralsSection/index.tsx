'use client';

import React, { useMemo } from 'react';

import { GradientDiv } from '../GradientDiv';
import { CopyIcon } from '../icons/CopyIcon';
import { Title } from '../Title';

export interface ReferralSectionProps {
  userReferralId: string;
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({
  userReferralId,
}) => {
  const referralUrl = useMemo(
    () => `${window.location.origin}/?referrer=${userReferralId}`,
    [userReferralId],
  );

  return (
    <>
      <div className="max-w-[888px]">
        <Title>Referrals</Title>
        <div className="ml-9 mt-9 flex flex-wrap gap-x-9 gap-y-9 text-xl font-bold">
          <div className="font-arimo">
            Use the link down below to invite your friends. When one of your
            friends mints their first founding table, both of you will get some
            sh*t for a chance to earn a whitelist spot!
          </div>
          {referralUrl && (
            <div className="flex h-10 w-full flex-row gap-2.5">
              <div className="flex h-full max-w-[512px] items-center truncate bg-secondary px-6 text-secondary">
                {referralUrl}
              </div>
              <GradientDiv className="flex h-full w-10 cursor-pointer items-center justify-center">
                <CopyIcon
                  size={'1.5rem'}
                  onClick={() => navigator.clipboard.writeText(referralUrl)}
                />
              </GradientDiv>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
