import clsx from 'clsx';
import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type TablesIconProps = BaseIconProps;

export const TablesIcon: FC<TablesIconProps> = (props) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 22 24"
      fill="none"
    >
      <path d="M5.5 2V22M5.5 2L1 6.5M5.5 2L10 6.5" stroke="#0D1826" stroke-width="2"/>
      <path d="M16.5 22V2M16.5 22L12 17.5M16.5 22L21 17.5" stroke="#0D1826" stroke-width="2"/>
    </IconBase>
  );
};
