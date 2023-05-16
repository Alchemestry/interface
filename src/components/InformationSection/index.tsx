import React from 'react';

import type { InformationSectionContentProps } from './InformationSectionContent';
import { InformationSectionContent } from './InformationSectionContent';

import { StarInCircleIcon } from '../icons/StarInCircleIcon';
import { Title } from '../Title';

import { Decimal } from '@/utils/Decimal';


export const InformationSection = () => {
  const informationSectionProps = {
    generalInfo: {
      tables: 33,
      income: Decimal.from('134').toNumber(),
      spents: Decimal.from('456.4').toNumber(),
    },
    poolInfo: {
      tables: 2,
      income: Decimal.from('1').toNumber(),
      spents: Decimal.from('4').toNumber(),
    }
  } as InformationSectionContentProps;

  return (
    <>
      <div className='flex flex-col' style={{ maxWidth: '334px' }}> 
        <div className='flex flex-row justify-around'>
          <Title >Information</Title>
          <StarInCircleIcon size={'2.3rem'}/>
        </div>
        <InformationSectionContent
          generalInfo={informationSectionProps.generalInfo}
          poolInfo={informationSectionProps.poolInfo}
        />
      </div>
    </>
  );
};
