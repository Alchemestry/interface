import React from 'react';

import { BuyTableCard } from './BuyTableCard';

import { WaveIcon } from '../icons/WaveIcon';
import { Title } from '../Title';

import BuyTableCardLevel1 from '@/../public/images/buy-table-card-level-1.png';
import BuyTableCardLevel2 from '@/../public/images/buy-table-card-level-2.png';
import BuyTableCardLevel3 from '@/../public/images/buy-table-card-level-3.png';

export const BuyTables = () => {
  const buyTableCards = [
    {
      levelMark: 'lvl 1',
      image: BuyTableCardLevel1,
      price: 0.15,
      minTableAmount: 3,
      maxTableAmount: 15,
    },
    {
      levelMark: 'lvl 2',
      image: BuyTableCardLevel2,
      price: 0.3,
      minTableAmount: 2,
      maxTableAmount: 10,
    },
    {
      levelMark: 'lvl 3',
      image: BuyTableCardLevel3,
      price: 0.5,
      minTableAmount: 1,
      maxTableAmount: 5,
    },
  ];

  return (
    <div className="mt-16">
      <Title icon={<WaveIcon />}>Buy tables</Title>
      <div className="ml-9 mt-9 flex flex-wrap gap-x-9 gap-y-9">
        {buyTableCards.map(
          ({ levelMark, image, price, minTableAmount, maxTableAmount }) => (
            <BuyTableCard
              key={levelMark}
              levelMark={levelMark}
              image={image}
              price={price}
              minTableAmount={minTableAmount}
              maxTableAmount={maxTableAmount}
            />
          ),
        )}
      </div>
    </div>
  );
};
