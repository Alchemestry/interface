import type { FC, HTMLAttributes } from 'react';
import React from 'react';

type CancelButtonProps = HTMLAttributes<HTMLButtonElement>;

export const CancelButton: FC<CancelButtonProps> = ({
  defaultValue = 'Cancel',
  ...props
}) => {
  return (
    <button className="border-b-2 border-dashed border-primary" {...props}>
      {defaultValue}
    </button>
  );
};
