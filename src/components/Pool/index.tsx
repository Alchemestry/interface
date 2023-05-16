import React from 'react';

import { ReferralSection } from '../ReferralsSection';

import { InformationSection } from '@/components/InformationSection';
import { ProgressTable } from '@/components/ProgressTable';
import { PurchasedTablesSection } from '@/components/PurchasedTablesSection';

const Pool = () => {
  return (
    <div className='flex w-full flex-col mb-5 mt-20' style={{ gap: '4rem'}}>
      <ReferralSection referralsCount={10} userReferralId='jjsdfshcuy2sdv'/>
      <ProgressTable />
      <div className='flex flex-wrap flex-row gap-20'>
        <PurchasedTablesSection />
        <InformationSection />
      </div>
    </div>
  )
};

export default Pool;
