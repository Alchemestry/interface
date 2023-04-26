import clsx from 'clsx';
import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type HorseshoeIconProps = BaseIconProps;

export const HorseshoeIcon: FC<HorseshoeIconProps> = (props) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 35 41"
      fill="none"
    >
      <path
        d="M31.9811 2L23.5853 2L23.5853 10.6333C28.9212 12.9717 32.627 18.227 32.627 24.2C32.627 32.3738 25.6874 39 17.127 39C8.56654 39 1.62696 32.3738 1.62696 24.2C1.62696 18.227 5.33267 13.0804 10.6686 10.742L10.6686 1.99999L2.27279 1.99999"
        stroke="#D1CEA5"
        strokeWidth="3"
      />
    </IconBase>
  );
};
