import type { FC } from 'react';
import React from 'react';

import { StarIcon } from '@/components/icons/StarIcon';

export const Title: FC<{ children: string }> = ({ children }) => {
  return (
    <div className="flex h-[48px]">
      <StarIcon size={35} />
      <div className="relative text-3xl font-bold capitalize">
        {children}
        <span className="absolute bottom-0 left-0 w-1/2 bg-gradient-to-r from-primary to-primary-dark p-[2px]"></span>
      </div>
    </div>
  );
};
