import type { FC, ReactElement } from 'react';
import React from 'react';

import { StarIcon } from '@/components/icons/StarIcon';
import type { BaseIconProps } from '@/types/base-icon';

interface TitleProps {
  children: string;
  icon?: ReactElement<BaseIconProps>;
}

export const Title: FC<TitleProps> = ({ children, icon }) => {
  return (
    <div className="flex h-[48px]">
      <StarIcon size={'2.3rem'} />
      <div className="relative text-3xl font-bold capitalize before:absolute before:-bottom-[4px] before:h-[3px] before:w-1/2 before:bg-gradient-to-r before:from-primary before:to-primary-dark">
        {children}
      </div>
      {icon && <div className="ml-5">{icon}</div>}
    </div>
  );
};
