import clsx from 'clsx';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type ExclamationMarkIconProps = BaseIconProps;

export const ExclamationMarkIcon = ({ className, ...props }: ExclamationMarkIconProps) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', className)}
      viewBox="0 0 15 90"
      fill="none"
    >
      <path d="M2.99999 1L12 1L12 56.5L3 65.5L2.99999 1Z" stroke="url(#paint0_linear_0_1)" stroke-width="2"/>
      <circle cx="7.5" cy="82.5" r="6.5" stroke="url(#paint1_linear_0_1)" stroke-width="2"/>
      <defs>
      <linearGradient id="paint0_linear_0_1" x1="-4" y1="19.5" x2="19" y2="47" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3E4AE"/>
      <stop offset="1" stop-color="#DEB06D"/>
      </linearGradient>
      <linearGradient id="paint1_linear_0_1" x1="1.5" y1="76.5" x2="13" y2="87" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F3E4AE"/>
      <stop offset="1" stop-color="#DEB06D"/>
      </linearGradient>
      </defs>

    </IconBase>
  );
};
