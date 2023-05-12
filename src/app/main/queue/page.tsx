import React from 'react';

import { ProgressTable } from '@/components/ProgressTable';

const QueuePage = async () => {
  return (
    <div className="flex h-full w-full flex-col">
      <ProgressTable />
    </div>
  );
};

export default QueuePage;
