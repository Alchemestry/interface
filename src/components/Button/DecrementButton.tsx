import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

export interface DecrementButton extends HTMLAttributes<HTMLButtonElement> {
  rockBottom: number;
  captureValue: number;
  onStateAction: () => void;
}

export const DecrementButton: FC<DecrementButton> = ({
  className,
  children,
  rockBottom,
  captureValue,
  onStateAction,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'transform transition duration-75 ease-in-out active:scale-[2]',
        captureValue == rockBottom && 'pointer-events-none text-secondary/40',
        className,
      )}
      onClick={() => onStateAction()}
      {...props}
    >
      {children}
    </button>
  );
};
