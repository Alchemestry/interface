'use client';

import React, { useEffect, useState } from 'react';

import { PurchasedTablesCard } from './PurchasedTablesSection';

import { GradientDiv } from '../GradientDiv';
import { CopyIcon } from '../icons/CopyIcon';
import { GearIcon } from '../icons/GearIcon';
import { Title } from '../Title';

import ProgressTableCardLevel1 from '@/../public/images/progress-table-card-level-1.png';
import ProgressTableCardLevel2 from '@/../public/images/progress-table-card-level-2.png';
import ProgressTableCardLevel3 from '@/../public/images/progress-table-card-level-3.png';

export interface ReferralSectionProps {
  userReferralId: string,
  referralsCount: number
}

export const ReferralSection: React.FC<ReferralSectionProps> = ({ referralsCount, userReferralId }) => {
  const [referralUrl, setReferralUrl] = useState<string | undefined>();
  
  useEffect(()=> { 
    setReferralUrl(`${window.location.origin}/?referrer=${userReferralId}`)
  }, [])
  
  return (
    <>
      <div style={{ maxWidth: '888px'}}>
        <Title>Referrals</Title>
        <div className="text-xl font-bold ml-9 mt-9 flex flex-wrap gap-x-9 gap-y-9">  
          <div className='font-arimo'> 
            Use the link down below to invite your friends. When one of your friends mints their first 
            founding table, both of you will get some sh*t for a chance to earn a whitelist spot!
          </div>
          { referralUrl && <div className='flex flex-row gap-2.5 h-10 w-full'>
            <div className='bg-secondary flex items-center px-6 text-secondary truncate h-full' style={{ maxWidth: '512px' }}>
              {referralUrl}
            </div>
            <GradientDiv className='flex items-center justify-center h-full w-10 cursor-pointer'>
              <CopyIcon size={'1.5rem'} onClick={()=> { navigator.clipboard.writeText(referralUrl) }}/>
            </GradientDiv>
          </div>}
        </div>
      </div>
    </>
  );
};
