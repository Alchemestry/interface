import clsx from 'clsx';
import type { FC } from 'react';
import React from 'react';
import type ReactModal from 'react-modal';
import Modal from 'react-modal';

import { montserrat } from '@/utils/fonts';

type BaseModalProps = ReactModal.Props;

export const BaseModal: FC<BaseModalProps> = ({
  children,
  className,
  overlayClassName,
  ...props
}) => {
  return (
    <Modal
      className={clsx(
        montserrat.variable,
        'font-montserrat font-bold text-primary lg:absolute lg:left-1/2 lg:top-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%]',
        className,
      )}
      overlayClassName={clsx('fixed inset-0 bg-primary/50', overlayClassName)}
      ariaHideApp={false}
      {...props}
    >
      {children}
    </Modal>
  );
};
