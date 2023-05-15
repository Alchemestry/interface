import React from 'react';

import { ProgressTable } from '@/components/ProgressTable';
import { InformationSection } from '@/components/InformationSection';

const QueuePage = async () => {
  return (
    <div className='flex flex-col' style={{ gap: '4rem'}}>
      <ProgressTable />
      <InformationSection />
    </div>
  )
};

export default QueuePage;
