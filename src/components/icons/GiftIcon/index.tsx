import type { FC } from 'react';
import { IconBase } from 'react-icons';

import type { BaseIconProps } from '@/types/base-icon';

type GiftIconProps = BaseIconProps;

export const GiftIcon: FC<GiftIconProps> = (props) => {
  return (
    <IconBase
      viewBox="0 0 32 33"
      fill="none"
      stroke="#F4E6B0"
      strokeWidth="2"
      {...props}
    >
      <path
        id="pack"
        d="M3.10527 31.0017H28.8949V12.6178H3.10527V31.0017ZM1 12.6178V7.36523H31.0001V12.6178H1Z"
      />
      <path id="string_l" d="M13.7266 7.36523L13.7266 31.0017" />
      <path id="string_r" d="M18.2734 7.36523L18.2734 31.0017" />
      <path
        id="bun_l"
        d="M11.7556 3.93502C13.3042 5.53505 15.9035 6.79198 16.4565 7.36367C15.9035 6.79198 15.6268 3.64939 13.6913 1.64952C12.0322 -0.0647479 9.81995 1.93497 11.7556 3.93502Z"
      />
      <path
        id="bun_r"
        d="M20.2444 3.93502C18.6958 5.53505 16.0965 6.79198 15.5435 7.36367C16.0965 6.79198 16.3732 3.64939 18.3087 1.64952C19.9678 -0.0647479 22.18 1.93497 20.2444 3.93502Z"
      />
    </IconBase>
  );
};
