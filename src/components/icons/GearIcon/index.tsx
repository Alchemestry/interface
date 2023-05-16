import clsx from 'clsx';
import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type GearIconProps = BaseIconProps;

export const GearIcon: FC<GearIconProps> = (props) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 33 33"
      fill="none"
    >
      <circle
        cx="17.2207"
        cy="16.5"
        r="6.5"
        stroke="#F4E6B0"
        stroke-width="3"
      />
      <path
        d="M11.154 19.8296C10.1944 17.2402 7.52732 15.8413 5.19692 16.7049C2.86652 17.5685 1.75526 20.3677 2.71484 22.957"
        stroke="#F4E6B0"
        stroke-width="3"
      />
      <path
        d="M31.0876 10.31C32.0472 12.8994 30.9359 15.6985 28.6055 16.5622C26.2751 17.4258 23.608 16.0268 22.6484 13.4375"
        stroke="#F4E6B0"
        stroke-width="3"
      />
      <path
        d="M14.6935 22.3309C12.4414 22.402 10.6769 24.3993 10.7524 26.7921C10.8279 29.185 12.7147 31.0671 14.9668 30.9961"
        stroke="#F4E6B0"
        stroke-width="3"
      />
      <path
        d="M18.1485 1.53993C20.4006 1.46889 22.2874 3.35106 22.3629 5.74387C22.4384 8.13669 20.6739 10.134 18.4219 10.2051"
        stroke="#F4E6B0"
        stroke-width="3"
      />
      <path
        d="M21.2724 20.9527C19.9921 22.8068 20.5511 25.4126 22.5211 26.7729C24.4911 28.1333 27.1259 27.733 28.4062 25.8789"
        stroke="#F4E6B0"
        stroke-width="3"
      />
      <path
        d="M4.75675 7.28865C6.03706 5.43457 8.67193 5.0343 10.6419 6.39463C12.6119 7.75496 13.1709 10.3608 11.8906 12.2148"
        stroke="#F4E6B0"
        stroke-width="3"
      />
    </IconBase>
  );
};
