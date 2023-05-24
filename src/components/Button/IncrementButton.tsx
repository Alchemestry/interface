import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

export interface IncrementButton extends HTMLAttributes<HTMLButtonElement> {
  uppermost: number;
  captureValue: number;
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
        captureValue == uppermost && 'pointer-events-none text-secondary/40',
        className,
      )}
      onClick={() => onStateAction()}
      {...props}
    >
      {children}
    </button>
  );
};
