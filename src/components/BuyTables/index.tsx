'use client';
import React from 'react';

import { BuyTableCard } from './BuyTableCard';

import { WaveIcon } from '../icons/WaveIcon';
import { Title } from '../Title';

import { useBuyTable } from '@/hooks/useBuyTable';

export const BuyTables = () => {
  const buyTableCards = useBuyTable((state) => state.buyTables);

  return (
    <div className="mt-16">
      <Title icon={<WaveIcon />}>Buy tables</Title>
      <div className="ml-9 mt-9 flex flex-wrap gap-x-9 gap-y-9">
        {buyTableCards.map((table) => (
          <BuyTableCard key={table.levelMark} {...table} />
        ))}
      </div>
    </div>
  );
};
