import type { SVGProps } from 'react';
import React from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type StarIconProps = BaseIconProps;

export const StarIcon = ({ ...props }: StarIconProps) => {
  const stars: SVGProps<SVGPathElement>[] = [
    {
      d: 'M7.15256 4.65157L7.27824 5.15206L7.77451 5.01065L10.3513 4.27647L8.42707 6.14091L8.05647 6.5L8.42707 6.85909L10.3513 8.72353L7.77451 7.98935L7.27824 7.84794L7.15256 8.34843L6.5 10.9471L5.84744 8.34843L5.72176 7.84794L5.22549 7.98935L2.64873 8.72353L4.57293 6.85909L4.94353 6.5L4.57293 6.14091L2.64873 4.27647L5.22549 5.01065L5.72176 5.15206L5.84744 4.65157L6.5 2.05294L7.15256 4.65157Z',
    },
    {
      d: 'M8.5 1.60041L10.1287 6.55257L10.2076 6.79244L10.4474 6.87133L15.3996 8.5L10.4474 10.1287L10.2076 10.2076L10.1287 10.4474L8.5 15.3996L6.87133 10.4474L6.79244 10.2076L6.55257 10.1287L1.60041 8.5L6.55257 6.87133L6.79244 6.79244L6.87133 6.55257L8.5 1.60041Z',
      transform: 'translate(5, 18)',
    },
    {
      d: 'M6.5 1.60042L7.6337 5.04754L7.71258 5.28741L7.95246 5.3663L11.3996 6.5L7.95246 7.6337L7.71258 7.71258L7.6337 7.95246L6.5 11.3996L5.3663 7.95246L5.28741 7.71258L5.04754 7.6337L1.60042 6.5L5.04754 5.3663L5.28741 5.28741L5.3663 5.04754L6.5 1.60042Z',
      fill: '#FFF9C7',
      transform: 'translate(20, 8)',
    },
  ];

  return (
    <>
      <IconBase
        {...props}
        fill="none"
        stroke="#FFF9C7"
        strokeWidth="1"
      >
        {stars.map((value, index) => (
          <path key={index} {...value} />
        ))}
      </IconBase>
    </>
  );
};
