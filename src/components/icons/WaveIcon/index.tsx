import { BaseIconProps } from '@/types/base-icon';
import clsx from 'clsx';
import React from 'react';
import { IconBase } from 'react-icons';

type WaveIconProps = BaseIconProps;

export const WaveIcon = ({ size = 35, ...props }: WaveIconProps) => {
  return (
    <>
      <IconBase
        {...props}
        size={size}
        fill="none"
        stroke="#F4E6B0"
        strokeWidth="3"
      >
        <path d="M2 22L10 14L18 22L26 14L34 22" />
        <path d="M2 33L10 25L18 33L26 25L34 33" />
        <path d="M2 11L10 3L18 11L26 3L34 11" />
      </IconBase>
    </>
  );
};
