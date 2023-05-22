'use client';

import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import ModalBase from '../ModalBase';

import { GradientDiv } from '@/components/GradientDiv';
import { Checkbox } from '@/components/icons/Checkbox';
import { ExclamationMarkIcon } from '@/components/icons/ExclamationMarkIcon';
import { useCautionModal } from '@/hooks/modals/useCautionModal';

const RiskCautionModal = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useCautionModal();

  const pathName = usePathname();

  const [isAlreadyRead, setIsAlreadyRead] = useState(true);
  const [isContinueActive, setIsContinueActive] = useState(false);

  useEffect(() => {
    setIsAlreadyRead(
      Boolean(localStorage.getItem('isRiskCautionRead') ?? false),
    );
  }, [isOpen]);

  const shouldOpen = useMemo(
    () => pathName != '/faq' && !isAlreadyRead,
    [pathName, isAlreadyRead],
  );

  if (!shouldOpen) return null;

  if (shouldOpen && !isOpen) onOpen();

  if (!isOpen) return null;

  return (
    <>
      <ModalBase className="grid grid-rows-2 px-10">
        <div className="flex h-full w-full items-center justify-center">
          <GradientDiv className="h-32 w-32 origin-center rotate-45 rounded-md p-0.5">
            <div className="h-full w-full rounded-md bg-primary">
              <ExclamationMarkIcon
                size={'8rem'}
                className="box-border origin-center -rotate-45 overflow-visible pb-4 pt-2"
              />
            </div>
          </GradientDiv>
        </div>
        <div className="flex w-full flex-col items-center gap-7 text-xl">
          <div className="max-w-[579px] text-center font-bold text-[#FF6161]">
            This is a crypto pyramid. You can both lost your money and get a lot
            more then you have for now
          </div>
          <div className="">
            <span>To get more information go to </span>
            <span
              className="cursor-pointer border-b-2 border-dashed border-primary font-bold"
              onClick={() => router.push(`/faq`)}
            >
              FAQ
            </span>
          </div>

          <div className="font-medium underline underline-offset-4">
            <Checkbox
              onChange={(val) => {
                setIsContinueActive(val);
              }}
              className="inline-block"
            >
              <span className="ml-3.5">Yes, I know what Im doing</span>
            </Checkbox>
          </div>

          <div
            className={clsx(
              'border-b-2 border-dashed border-primary text-2xl font-bold',
              isContinueActive ? 'cursor-pointer' : 'cursor-not-allowed',
            )}
            onClick={
              !isContinueActive
                ? undefined
                : () => {
                    localStorage.setItem('isRiskCautionRead', 'true');
                    onClose();
                  }
            }
          >
            Continue
          </div>
        </div>
      </ModalBase>
    </>
  );
};

export default RiskCautionModal;
