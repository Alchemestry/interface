import React from 'react';

import { ReferralSection } from '../ReferralsSection';

import { InformationSection } from '@/components/InformationSection';
import { ProgressTable } from '@/components/ProgressTable';
import { PurchasedTablesSection } from '@/components/PurchasedTablesSection';
import RiskCautionModal from '../Modals/RiskCautionModal';

const Pool = () => {
  return (
    <div className="mb-5 mt-20 flex w-full flex-col gap-[4rem]">
      <ReferralSection userReferralId="jjsdfshcuy2sdv" />
      <ProgressTable />
      <div className="flex flex-row flex-wrap gap-20">
        <PurchasedTablesSection />
        <InformationSection />
      </div>
    </div>
  );
};

export default Pool;
