import React from 'react';
import { StarIcon } from '@/components/icons/StarIcon';
export const Progressbar = () => {
  return (
    <div className="flex h-[48px]">
      <StarIcon size={35} />
      <div className="relative text-3xl font-bold capitalize">
        Progress{' '}
        <span className="absolute bottom-0 left-0 w-1/2 bg-gradient-to-r p-[2px] from-[#F4E6B0] to-[#DEB16E]"></span>
      </div>
    </div>
  );
};
