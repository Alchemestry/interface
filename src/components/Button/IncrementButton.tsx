import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import type { Decimal } from '@/utils/Decimal';

export interface IncrementButton extends HTMLAttributes<HTMLButtonElement> {
  uppermost: Decimal;
  captureValue: Decimal;
  onStateAction: () => void;
}

export const IncrementButton: FC<IncrementButton> = ({
  className,
  children,
  uppermost,
  captureValue,
  onStateAction,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'transform transition duration-75 ease-in-out active:scale-[2]',
        captureValue.eq(uppermost) && 'pointer-events-none text-secondary/40',
        className,
      )}
      onClick={() => onStateAction()}
      {...props}
    >
      {children}
    </button>
  );
};
