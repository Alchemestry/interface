import clsx from 'clsx';
import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type LogoIconProps = BaseIconProps;

export const LogoIcon: FC<LogoIconProps> = (props) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 58 67"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 3V21.4352L1.81422 65.593L1.18689 67.0002H2.72757H27.7276L53.7276 67.0002H55.2827L54.6374 65.5852L34.5 21.4309V3.00015H32.5V21.6482V21.8654L32.5902 22.0631L52.1724 65.0002L27.7276 65.0002H4.26824L23.4134 22.0552L23.5 21.8608V21.648V3H21.5Z"
        fill="#F4E6B0"
      />
      <rect x="18" width="20" height="4" rx="2" fill="#F4E6B0" />
      <path
        d="M12.5 43.5001C6.66667 41.1668 0.999936 44.0006 1 47.5005C1.00006 51.0003 2.5 53.0003 7.49976 53.0003C11.4707 53.0003 19.6463 50.3373 27.5 47.8311"
        stroke="#F4E6B0"
        strokeWidth="2"
      />
      <path
        d="M48.0002 53.5C54.5 53.5 56.5001 50.9998 56.5 47.5C56.4999 44.0002 53 43.0001 48.0002 43.0001C44.0293 43.0001 34.8537 45.4938 27 47.9999"
        stroke="#F4E6B0"
        strokeWidth="2"
      />
    </IconBase>
  );
};
