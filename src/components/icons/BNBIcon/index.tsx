import clsx from 'clsx';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type BNBIconProps = BaseIconProps;

export const BNBIcon = (props: BNBIconProps) => {
  return (
    <IconBase
      {...props}
      className={clsx('text-primary', props.className)}
      viewBox="0 0 14 17"
    >
      <path d="m1.576 8.232.009 3.185 2.705 1.592v1.864L.001 12.358V7.3l1.575.931Zm0-3.184v1.856L0 5.97V4.116l1.576-.932 1.583.932-1.583.932Zm3.844-.932 1.576-.932 1.584.932-1.584.932-1.576-.932Z" />
      <path d="M2.714 10.757V8.893l1.576.932v1.855l-1.576-.923Zm2.706 2.92 1.576.932 1.583-.932v1.856l-1.583.932-1.576-.932v-1.856Zm5.42-9.561 1.575-.932 1.584.932V5.97l-1.584.933V5.048l-1.576-.932Zm1.575 7.3.009-3.184 1.575-.932v5.057L9.71 14.873v-1.865l2.705-1.591Z" />
      <path d="m11.285 10.757-1.576.923V9.825l1.576-.932v1.864Z" />
      <path d="m11.285 5.708.009 1.864L8.58 9.165v3.192l-1.576.923-1.576-.923V9.165L2.715 7.572V5.708l1.582-.932 2.698 1.6 2.713-1.6 1.584.932h-.007ZM2.714 2.524 6.996 0l4.289 2.524-1.576.933-2.713-1.6-2.706 1.6-1.576-.933Z" />
    </IconBase>
  );
};
