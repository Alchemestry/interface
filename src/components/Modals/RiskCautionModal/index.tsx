'use client'

import { GradientDiv } from "@/components/GradientDiv";
import ModalBase from "../ModalBase";
import { useEffect, useMemo, useState } from "react";
import { ExclamationMarkIcon } from "@/components/icons/ExclamationMarkIcon";
import { useRouter, usePathname } from "next/navigation";
import { useCautionModal } from "@/hooks/modals/useCautionModal";


const RiskCautionModal = () => {
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useCautionModal();

    const pathName = usePathname();

    const [isAlreadyRead, setIsAlreadyRead] = useState(true);
    
    useEffect(()=> {
        setIsAlreadyRead(Boolean(localStorage.getItem("isRiskCautionRead") ?? false));
    }, [isOpen])

    const shouldOpen = useMemo(()=> pathName != '/faq' && !isAlreadyRead, [pathName, isAlreadyRead]);
    
    console.log(pathName, shouldOpen, pathName != '/faq', isAlreadyRead)

    if (!shouldOpen) return null

    if (shouldOpen && !isOpen) onOpen();

    if (!isOpen) return null;

    return (<>
        <ModalBase className="grid grid-rows-2 px-10">
            <div className="w-full h-full flex justify-center items-center">
                <GradientDiv className="w-36 h-34 rounded-md rotate-45 origin-center">
                    <div className="bg-primary w-full h-full rounded-md">
                        <ExclamationMarkIcon size={'8rem'} className="box-border pt-4 overflow-visible -rotate-45 origin-center" />

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
                    I have read and understand that
                </div>

                <div
                    className="font-bold text-2xl border-dashed border-b-2 border-primary cursor-pointer"
                    onClick={() => { localStorage.setItem("isRiskCautionRead", 'true');  onClose() }}
                >
                    Continue
                </div>
            </div>
        </ModalBase>
    </>)
}

export default RiskCautionModal;