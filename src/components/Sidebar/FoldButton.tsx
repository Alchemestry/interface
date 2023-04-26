import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';
import { TbArrowLeftTail, TbArrowRightTail } from 'react-icons/tb';

interface FoldButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const FoldButton: FC<FoldButtonProps> = ({
  isOpen,
  onOpen,
  onClose,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx('self-end text-primary', className)}
      onClick={(e) => {
        if (isOpen) {
          onClose();
        } else {
          onOpen();
        }
        return onClick?.(e);
      }}
    >
      {isOpen ? <TbArrowLeftTail size={36} /> : <TbArrowRightTail size={36} />}
    </button>
  );
};
