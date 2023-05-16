import clsx from 'clsx';
import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type CopyIconProps = BaseIconProps;

export const CopyIcon: FC<CopyIconProps> = (props) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 18 20"
      fill="none"
    >
      <path d="M12 4.5V1H1V16H6.5" stroke="#0D1826" stroke-width="2"/>
      <rect x="6" y="4" width="11" height="15" stroke="#0D1826" stroke-width="2"/>
    </IconBase>
  );
};
