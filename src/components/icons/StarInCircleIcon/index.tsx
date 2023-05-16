import clsx from 'clsx';
import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type StarInCircleIconProps = BaseIconProps;

export const StarInCircleIcon: FC<StarInCircleIconProps> = (props) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 37 37"
      fill="none"
    >
      <circle cx="18.5" cy="18.5" r="10" stroke="#F4E6B0"/>
      <path d="M18.5 0L20.593 16.407L37 18.5L20.593 20.593L18.5 37L16.407 20.593L0 18.5L16.407 16.407L18.5 0Z" fill="#F4E6B0"/>
    </IconBase>
  );
};
