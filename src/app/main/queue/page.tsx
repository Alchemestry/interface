import React from 'react';

import { BuyTables } from '@/components/BuyTables';
import { ProgressTable } from '@/components/ProgressTable';

const QueuePage = async () => {
  return (
    <div className="flex h-full w-full flex-col">
      <ProgressTable />
      <BuyTables />
    </div>
  );
};

export default QueuePage;
