import React from 'react';

import { BuyTables } from '../BuyTables';
import ClaimRewards from '../ClaimRewards';
import { ReferralSection } from '../ReferralsSection';

import { InformationSection } from '@/components/InformationSection';
import { ProgressTable } from '@/components/ProgressTable';
import { PurchasedTablesSection } from '@/components/PurchasedTablesSection';

const Pool = () => {
  return (
    <div className="mb-5 mt-20 flex w-full flex-col gap-[4rem]">
      <ClaimRewards />
      <ReferralSection userReferralId="jjsdfshcuy2sdv" />
      <ProgressTable />
      <BuyTables />
      <div className="flex flex-row flex-wrap gap-20">
        <PurchasedTablesSection />
        <InformationSection />
      </div>
    </div>
  );
};

export default Pool;
