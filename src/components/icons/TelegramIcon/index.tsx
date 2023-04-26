import clsx from 'clsx';
import React from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type TelegramIconProps = BaseIconProps;

export const TelegramIcon = ({ className, ...props }: TelegramIconProps) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', className)}
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M32.5419 0.220785L0.853896 18.4946C-0.383541 19.2054 -0.226297 20.9275 1.0043 21.4469L8.27168 24.4948L27.9134 7.19136C28.2895 6.8565 28.8227 7.36904 28.5014 7.75858L12.0319 27.8161V33.3174C12.0319 34.9302 13.9803 35.5657 14.9374 34.3971L19.2787 29.1145L27.7972 32.6818C28.768 33.0918 29.8756 32.4836 30.0533 31.438L34.9757 1.91559C35.2082 0.535144 33.7246 -0.462605 32.5419 0.220785Z"
        fill="#F2E1AA"
      />
    </IconBase>
  );
};
