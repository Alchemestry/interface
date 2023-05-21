'use client'

import { GradientDiv } from "@/components/GradientDiv";
import ModalBase from "../ModalBase";
import { useEffect, useMemo, useState } from "react";
import { ExclamationMarkIcon } from "@/components/icons/ExclamationMarkIcon";
import { useRouter, usePathname } from "next/navigation";
import { useCautionModal } from "@/hooks/modals/useCautionModal";
import { Checkbox } from "@/components/icons/Checkbox";
import clsx from "clsx";


const RiskCautionModal = () => {
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useCautionModal();

    const pathName = usePathname();

    const [isAlreadyRead, setIsAlreadyRead] = useState(true);
    const [isContinueActive, setIsContinueActive] = useState(false);

    useEffect(() => {
        setIsAlreadyRead(Boolean(localStorage.getItem("isRiskCautionRead") ?? false));
    }, [isOpen])

    const shouldOpen = useMemo(() => pathName != '/faq' && !isAlreadyRead, [pathName, isAlreadyRead]);

    if (!shouldOpen) return null

    if (shouldOpen && !isOpen) onOpen();

    if (!isOpen) return null;

    return (<>
        <ModalBase className="grid grid-rows-2 px-10">
            <div className="w-full h-full flex justify-center items-center">
                <GradientDiv className="w-32 h-32 rounded-md rotate-45 origin-center p-0.5">
                    <div className="bg-primary w-full h-full rounded-md">
                        <ExclamationMarkIcon size={'8rem'} className="box-border pt-2 pb-4 overflow-visible -rotate-45 origin-center" />
                    </div>
                </GradientDiv>
            </div>
            <div className="w-full items-center flex flex-col text-xl gap-7">
                <div className="text-center text-[#FF6161] max-w-[579px] font-bold">
                    This is a crypto pyramid. You can both lost your money and get a lot more then you have for now
                </div>
                <div className="">
                    <span>To get more information go to </span>
                    <span className="font-bold border-dashed border-b-2 border-primary cursor-pointer" onClick={() => router.push(`/faq`)}>FAQ</span>
                </div>

                <div className="font-medium underline underline-offset-4">
                    <Checkbox onChange={(val) => { setIsContinueActive(val) }} className="inline-block">
                        <span className="ml-3.5">Yes, I know what Im doing</span>
                    </Checkbox>
                </div>

                <div
                    className={clsx(
                        "font-bold text-2xl border-dashed border-b-2 border-primary",
                        isContinueActive ? 'cursor-pointer' : 'cursor-not-allowed'
                    )}
                    onClick={!isContinueActive ? undefined : () => { localStorage.setItem("isRiskCautionRead", 'true'); onClose() }}
                >
                    Continue
                </div>
            </div>
        </ModalBase>
    </>)
}

export default RiskCautionModal;