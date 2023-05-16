import React from 'react';

import { InformationSection } from '@/components/InformationSection';
import { ProgressTable } from '@/components/ProgressTable';

const QueuePage = async () => {
  return (
    <div className='flex flex-col' style={{ gap: '4rem'}}>
      <ProgressTable />
      <InformationSection />
    </div>
  )
};

export default QueuePage;
