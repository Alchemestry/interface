import { GradientDiv } from "@/components/GradientDiv";
import clsx from "clsx";
import { HTMLAttributes, PropsWithChildren } from "react";

const ModalBase = ({ children, className, ...props }: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
    return (<>
        <div className={clsx(
            'p-3 fixed flex w-full h-full z-50 align-center justify-center items-center bg-primary/90', 
        )} {...props}>
            <GradientDiv className="p-1.5 max-w-[785px] max-h-[523px] w-[785px] h-[523px]" >
                <div className={
                    clsx(
                        "w-full h-full bg-main",
                        className
                    )
                }>
                    {children}
                </div>
            </GradientDiv>
        </div>
    </>)
}

export default ModalBase;