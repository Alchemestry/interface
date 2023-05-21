import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';

export interface IncrementButton extends HTMLAttributes<HTMLButtonElement> {
  uppermost: number;
  captureValue: number;
  onStateAction: React.Dispatch<React.SetStateAction<number>>;
}

export const IncrementButton: FC<IncrementButton> = ({
  className,
  children,
  uppermost,
  captureValue,
  onStateAction,
  ...props
}) => {
  const incrementAmount = () =>
    captureValue >= uppermost ? uppermost : captureValue + 1;

  return (
    <button
      className={clsx(
        'transform transition duration-75 ease-in-out active:scale-[2]',
        captureValue == uppermost && 'pointer-events-none text-secondary/40',
        className,
      )}
      onClick={() => onStateAction(incrementAmount)}
      {...props}
    >
      {children}
    </button>
  );
};
