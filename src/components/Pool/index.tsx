import React from 'react';

import { InformationSection } from '@/components/InformationSection';
import { ProgressTable } from '@/components/ProgressTable';
import { PurchasedTablesSection } from '@/components/PurchasedTablesSection';

const Pool = () => {
  return (
    <div className='flex w-full flex-col mb-5' style={{ gap: '4rem'}}>
      <ProgressTable />
      <div className='flex flex-wrap flex-row gap-20'>
        <PurchasedTablesSection />
        <InformationSection />
      </div>
    </div>
  )
};

export default Pool;
