import type { FC } from 'react';
import React from 'react';

import { StarIcon } from '@/components/icons/StarIcon';

export const Title: FC<{ children: string }> = ({ children }) => {
  return (
    <div className="flex h-[48px]">
      <StarIcon size={35} />
      <div className="relative text-3xl font-bold capitalize before:absolute before:-bottom-[4px] before:h-[3px] before:w-1/2 before:bg-gradient-to-r before:from-primary before:to-primary-dark">
        {children}
      </div>
    </div>
  );
};
