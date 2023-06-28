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
    },
  } as InformationSectionContentProps;

  return (
    <>
      <div className="flex w-full max-w-[334px] flex-col">
        <div className="flex flex-row">
          <Title icon={<StarInCircleIcon size={'2.3rem'} />}>Information</Title>
        </div>
        <InformationSectionContent
          generalInfo={informationSectionProps.generalInfo}
          poolInfo={informationSectionProps.poolInfo}
        />
      </div>
    </>
  );
};
