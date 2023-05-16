import React from 'react';

import { PurchasedTablesCard } from './PurchasedTablesSection';

import { BNBIcon } from '../icons/BNBIcon';
import { Title } from '../Title';

import ProgressTableCardLevel1 from '@/../public/images/progress-table-card-level-1.png';
import ProgressTableCardLevel2 from '@/../public/images/progress-table-card-level-2.png';
import ProgressTableCardLevel3 from '@/../public/images/progress-table-card-level-3.png';

export const PurchasedTablesSection = () => {
  const progressTableCards = [
    {
      title: 'Level 1',
      image: ProgressTableCardLevel1,
      amount: 10,
      price: 0.15,
    },
    {
      title: 'Level 2',
      image: ProgressTableCardLevel2,
      amount: 15,
      price: 0.15,
    },
    {
      title: 'Level 3',
      image: ProgressTableCardLevel3,
      amount: 3,
      price: 0.15,
    },
  ];

  return (
    <>
      <div>
        <div className='flex flex-row items-center'>
          <Title>Purchased Tables</Title>
          <BNBIcon className='ml-5 mb-2' size={'1.7rem'}/>
        </div>
        <div className="ml-9 mt-9 flex flex-wrap gap-x-9 gap-y-9">
          {progressTableCards.map(({ title, image, amount, price }) => (
            <PurchasedTablesCard
              key={title}
              title={title}
              image={image}
              currentAmount={amount}
              price={price}
            />
          ))}
        </div>
      </div>
    </>
  );
};
