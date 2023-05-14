import React from 'react';

import { Title } from '../Title';
import { InformationSectionContent, InformationSectionContentProps } from './InformationSectionContent';
import { Decimal } from '@/utils/Decimal';

export const InformationSection = () => {
  const informationSectionProps = {
    generalInfo: {
      tables: 33,
      income: Decimal.from('134').toNumber(),
      spents: Decimal.from('456.4').toNumber(),
    }
  } as InformationSectionContentProps;

  return (
    <>
      <div className='flex flex-col' style={{ maxWidth: '334px' }}> 
        <div className='flex justify-center'>
          <Title >Information</Title>
        </div>
        <InformationSectionContent
          generalInfo={informationSectionProps.generalInfo}
          poolInfo={informationSectionProps.poolInfo}
        />
      </div>
    </>
  );
};
