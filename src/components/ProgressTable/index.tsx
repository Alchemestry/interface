import React from 'react';

import { ProgressTableCard } from './ProgressTableCard';

import { Title } from '../Title';

import ProgressTableCardLevel1 from '@/../public/images/progress-table-card-level-1.png';
import ProgressTableCardLevel2 from '@/../public/images/progress-table-card-level-2.png';
import ProgressTableCardLevel3 from '@/../public/images/progress-table-card-level-3.png';
import { Decimal } from '@/utils/Decimal';

export const ProgressTable = () => {
  const progressTableCards = [
    {
      title: 'Level 1',
      image: ProgressTableCardLevel1,
      amount: Decimal.from('6666'),
      maxAmount: Decimal.from('8888'),
    },
    {
      title: 'Level 2',
      image: ProgressTableCardLevel2,
      amount: Decimal.from('4444'),
      maxAmount: Decimal.from('8888'),
    },
    {
      title: 'Level 3',
      image: ProgressTableCardLevel3,
      amount: Decimal.from('2000'),
      maxAmount: Decimal.from('8888'),
    },
  ];

  return (
    <>
      <div>
        <Title>Progress</Title>
        <div className="ml-9 mt-9 flex flex-wrap gap-x-9 gap-y-9">
          {progressTableCards.map(({ title, image, amount, maxAmount }) => (
            <ProgressTableCard
              key={title}
              title={title}
              image={image}
              currentAmount={amount}
              maxAmount={maxAmount}
            />
          ))}
        </div>
      </div>
    </>
  );
};
