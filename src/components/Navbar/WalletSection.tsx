import { useWeb3Modal } from '@web3modal/react';
import clsx from 'clsx';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import React, { useCallback, useEffect, useMemo } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { useAccount } from 'wagmi';

import WaxIcon from '@/../public/images/wax.svg';
import { HorseshoeIcon } from '@/components/icons/Horseshoe';
import { useWalletSection } from '@/hooks/useWalletSection';
import { shortenAddress } from '@/utils/shortenAddress';

export type WalletSectionProps = HTMLAttributes<HTMLDivElement>;

export const WalletSection = ({ className, ...props }: WalletSectionProps) => {
  const { isOpen, onOpen, onClose } = useWalletSection();
  const { open: openModal } = useWeb3Modal();
  const { isConnected, address } = useAccount();

  const buttonText = useMemo(() => {
    if (!isConnected) {
      return <div className="w-[185px]">Connect wallet</div>;
    }
    if (isConnected && address) {
      return (
        <div
          className={clsx(
            'mx-[20px] flex items-center justify-between gap-2 lg:flex',
            className,
          )}
          {...props}
        >
          {shortenAddress(address)}{' '}
          <BsChevronDown
            size={22}
            className={clsx('transition-all', { 'rotate-180': isOpen })}
          />
        </div>
      );
    }
  }, [isConnected, address, isOpen]);
  const actions = useMemo(
    () => [
      {
        text: 'copy referral link',
        onClick: () => alert('TODO: COPY LINK'),
      },
      {
        text: 'change wallet',
        onClick: () => openModal({ route: 'Account' }),
      },
    ],
    [openModal],
  );

  const handleClick = useCallback(() => {
    if (!isConnected) {
      return openModal({ route: 'ConnectWallet' });
    }
    if (isConnected) {
      if (isOpen) {
        onClose();
      } else {
        onOpen();
      }
    }
  }, [isConnected, openModal, isOpen, onOpen, onClose]);

  useEffect(() => {
    if (!isConnected) {
      onClose();
    }
  }, [isConnected, onClose]);

  return (
    <div
      className={clsx('relative z-20 lg:right-0 lg:mt-10 lg:block', className)}
      {...props}
    >
      <div
        className={clsx(
          'absolute -left-[220px] top-0 z-0 mt-[2px] w-[215px] cursor-default bg-connectWalletList bg-100 bg-center bg-no-repeat pt-[20px] transition-all lg:-left-[260px]',
          {
            'h-0 select-none text-transparent': !isOpen,
            'h-[175px] select-text': isOpen,
          },
        )}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-[20px]">
          <Image
            src={WaxIcon}
            alt="wax"
            className={clsx('absolute -bottom-[23px] right-0', {
              hidden: !isOpen || !isConnected,
            })}
          />
          {actions.map(({ text, onClick }) => (
            <button
              key={text}
              onClick={onClick}
              className={clsx(
                'text-center text-[20px] font-bold text-ternary',
                { hidden: !isOpen || !isConnected },
              )}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute -left-[220px] -top-[20px] flex items-center gap-2 lg:-left-[260px]">
        <button
          className="bg-connectWallet bg-100 bg-center bg-no-repeat px-[20px] py-[10px] font-bold text-secondary"
          onClick={handleClick}
        >
          {buttonText}
        </button>
        <HorseshoeIcon
          size={31}
          className={clsx('hidden transition-all lg:block', {
            'rotate-180': !isConnected,
          })}
        />
      </div>
    </div>
  );
};
