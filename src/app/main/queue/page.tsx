import React from 'react';

import { ProgressTable } from '@/components/ProgressTable';
import { BuyTables } from '@/components/BuyTables';

const QueuePage = async () => {
  return (
    <div className="flex h-full w-full flex-col">
      <ProgressTable />
      <BuyTables />
    </div>
  );
};

export default QueuePage;
