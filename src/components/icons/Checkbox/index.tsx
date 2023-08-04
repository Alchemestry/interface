'use client';

import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { useEffect, useState } from 'react';

interface CheckboxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (newVal: boolean) => void;
}

export const Checkbox = ({
  onChange,
  children,
  className,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onChange?.(checked);
  }, [checked]);

  return (
    <>
      <div
        className={clsx('flex cursor-pointer flex-row items-center', className)}
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <div
          {...props}
          className="flex h-5 w-5 appearance-none items-center justify-center rounded-[0.2rem] border-2 border-solid border-primary bg-primary p-0.5 "
        >
          {checked && (
            <div className="h-full w-full rounded-full bg-secondary"></div>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
