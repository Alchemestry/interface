import clsx from 'clsx';
import React from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type TwitterIconProps = BaseIconProps;

export const TwitterIcon = ({ className, ...props }: TwitterIconProps) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', className)}
      viewBox="0 0 35 28"
      fill="none"
    >
      <path
        d="M31.4024 6.97742C31.4246 7.28363 31.4246 7.5899 31.4246 7.8961C31.4246 17.2358 24.207 27.9973 11.0153 27.9973C6.95115 27.9973 3.17578 26.838 0 24.8257C0.577434 24.8913 1.13258 24.9132 1.73223 24.9132C5.08562 24.9132 8.1726 23.7977 10.6377 21.8948C7.48415 21.8291 4.84137 19.795 3.93082 16.9952C4.37502 17.0608 4.81915 17.1046 5.28557 17.1046C5.92958 17.1046 6.57367 17.017 7.17325 16.864C3.88645 16.2078 1.42127 13.3643 1.42127 9.93027V9.84281C2.37618 10.3678 3.48668 10.6959 4.66363 10.7395C2.73151 9.47089 1.4657 7.30551 1.4657 4.85573C1.4657 3.54338 1.82096 2.34037 2.44283 1.29047C5.97395 5.57755 11.2817 8.37723 17.2335 8.6835C17.1224 8.15855 17.0558 7.61178 17.0558 7.06495C17.0558 3.17153 20.2538 0 24.229 0C26.2944 0 28.1599 0.85304 29.4702 2.23103C31.0913 1.92483 32.6459 1.33423 34.0229 0.524953C33.4898 2.16546 32.3572 3.54345 30.8693 4.4183C32.3129 4.26527 33.712 3.87147 35 3.3247C34.023 4.72451 32.8015 5.97121 31.4024 6.97742Z"
        fill="#F2E0A9"
      />
    </IconBase>
  );
};