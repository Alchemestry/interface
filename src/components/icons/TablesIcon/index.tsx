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
      viewBox="0 0 33 33"
      fill="none"
    >
      <path stroke="#F4E6B0" d="M18.3.66c0 2.66.33 3.17 3.22 8.14a5.65 5.65 0 1 1-9.78 0c3.33-5 3.33-5.48 3.33-8.14"/><rect width="4.66" height="1.33" x="14.3" fill="#F4E6B0" rx=".67"/><rect width="4.66" height="1.33" x="6.32" y="1.8" fill="#F4E6B0" rx=".67"/><rect width="4.66" height="1.33" x="21.62" y="1.33" fill="#F4E6B0" rx=".67"/><path stroke="#F4E6B0" d="M11.31 9.31c.11.11.6.67 3 .67 2.99 0 2.65-.67 4.65-.67 2 0 2 .67 3 .67M10.98 6.98c-3 0-2.66-.66-4.66-.66M20.96 7.98c2 0 1.33.67 2.99.67 1.66 0 1-.67 3.33-.67"/><path stroke="#F4E6B0" d="M22.28 12.24a3.66 3.66 0 1 0 3-6.67V2h-2.66v3.57c-.84.33-1.53.95-1.93 1.75M10.98 12.14h-5.5a1 1 0 0 1-.94-1.37L7.06 4.5a1 1 0 0 0 .07-.37v-.8a1 1 0 0 1 1-1h.94a1 1 0 0 1 1 1v.8a1 1 0 0 0 .07.37l1.7 4.2M11.3 13.64c-2.89.55-4.98 1.5-4.98 2.99 0 2.35 4.77 3.33 10.64 3.33 5.88 0 10.65-.98 10.65-3.33 0-1.6-2.41-2.47-5.66-3"/><path stroke="#F4E6B0" d="M5.1 9.33c-2.64.18-4.1 1.64-4.1 3.3 0 1.84 2.14 3.13 5.32 3.23M27.28 15.8c2.62-.33 4.32-1.53 4.32-3.16 0-1.39-1.84-2.76-4-3.18"/><path stroke="#F4E6B0" stroke-width=".5" d="M13.3 9.98v-1M14.63 9.98v-2M15.96 9.98V8.65M17.3 9.78v-1.8M18.63 9.31v-.66M19.96 9.31V7.98M21.95 7.98v-1M23.28 8.65v-2M24.61 8.65V7.32M25.94 8.32V6.65M7.32 6.65v-1M8.65 6.65V5.32M9.98 6.65V6"/>
    </IconBase>
  );
};
