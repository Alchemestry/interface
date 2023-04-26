'use client';

import type { FC } from 'react';
import React from 'react';
import { RingLoader } from 'react-spinners';

export const MainLoader: FC = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <RingLoader size={100} color="#F4E6B0" />
    </div>
  );
};
