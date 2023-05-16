import React from 'react';

import { ProgressTable } from '@/components/ProgressTable';
import { InformationSection } from '@/components/InformationSection';
import { PurchasedTablesSection } from '@/components/PurchasedTablesSection';

const QueuePage = async () => {
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

export default QueuePage;
