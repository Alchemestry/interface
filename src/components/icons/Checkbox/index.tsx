'use client'

import clsx from "clsx";
import { HTMLAttributes, useEffect, useState } from "react"

interface CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    onChange?: (newVal: boolean) => void;
}

export const Checkbox = ({ onChange, children, className, ...props }: CheckboxProps) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        onChange?.(checked);
    }, [checked])

    return (
        <>
            <div className={clsx(
                "flex flex-row items-center cursor-pointer",
                className
            )}
                onClick={() => {
                    setChecked(!checked);
                }}>
                <div {...props} className="flex items-center justify-center appearance-none bg-primary w-5 h-5 border-2 border-solid border-primary rounded-[0.2rem] p-0.5 ">
                    {checked && <div className="rounded-full bg-secondary w-full h-full"></div>}
                </div>
                {children}
            </div>
        </>
    )
}