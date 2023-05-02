import React from 'react';
import { Title } from '../Title';
import { ProgressbarCard } from './ProgressbarCard';
import ProgressBarLevel1 from '@/../public/images/progressbar-bg-level-1.png';
import ProgressBarLevel2 from '@/../public/images/progressbar-bg-level-2.png';
import ProgressBarLevel3 from '@/../public/images/progressbar-bg-level-3.png';

export const Progressbar = () => {
  return (
    <>
      <Title>Progress</Title>
      <div className="ml-9 mt-9 flex gap-x-9">
        <ProgressbarCard
          title="Level 1"
          image={ProgressBarLevel1}
          currentProgressInPercent={88}
          currentAmount={14}
          maxAmount={8888}
        />
        <ProgressbarCard
          title="Level 2"
          image={ProgressBarLevel2}
          currentProgressInPercent={50}
          currentAmount={14}
          maxAmount={8888}
        />
        <ProgressbarCard
          title="Level 3"
          image={ProgressBarLevel3}
          currentProgressInPercent={14}
          currentAmount={14}
          maxAmount={8888}
        />
      </div>
    </>
  );
};
