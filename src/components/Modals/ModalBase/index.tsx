import clsx from 'clsx';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import { GradientDiv } from '@/components/GradientDiv';

const ModalBase = ({
  children,
  className,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <>
      <div
        className={clsx(
          'align-center fixed z-50 flex h-full w-full items-center justify-center bg-primary/90 p-3',
        )}
        {...props}
      >
        <GradientDiv className="h-[523px] max-h-[523px] w-[785px] max-w-[785px] p-[0.3125rem]">
          <div className={clsx('h-full w-full bg-main', className)}>
            {children}
          </div>
        </GradientDiv>
      </div>
    </>
  );
};

export default ModalBase;
