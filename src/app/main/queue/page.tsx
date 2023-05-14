import React from 'react';

import { ProgressTable } from '@/components/ProgressTable';
import { InformationSection } from '@/components/InformationSection';

const QueuePage = async () => {
  return (
    <div>
      <ProgressTable />;
      <InformationSection />
    </div>
  )
};

export default QueuePage;
