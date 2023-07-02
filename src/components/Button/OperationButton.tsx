import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import type { Decimal } from '@/utils/Decimal';

interface OperationButton extends HTMLAttributes<HTMLButtonElement> {
  breakCaptureValue: Decimal;
  captureValue: Decimal;
  onStateAction: () => void;
}

export const OperationButton: FC<OperationButton> = ({
  className,
  children,
  breakCaptureValue,
  captureValue,
  onStateAction,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'transform transition duration-75 ease-in-out active:scale-[2]',
        captureValue.eq(breakCaptureValue) &&
          'pointer-events-none text-secondary/40',
        className,
      )}
      onClick={() => onStateAction()}
      {...props}
    >
      {children}
    </button>
  );
};
