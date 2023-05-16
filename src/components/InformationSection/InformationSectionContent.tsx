'use client';

import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';

import { GradientButton } from '../GradientButton';
import { BNBIcon } from '../icons/BNBIcon';
import { SwitchIcon } from '../icons/SwitchIcon';

export interface InformationSectionContentProps {
  generalInfo: PoolInformationData;
  poolInfo: PoolInformationData;
  onInfoSwitch?: (newType: InformationDisplayType) => void;
}

enum InformationDisplayType {
  GENERAL,
  POOL,
}

interface PoolInformationData {
  tables: number;
  spents: number;
  income: number;
}

const SingleInfoRow: React.FC<{
  name: string;
  value: string | number;
  icon?: IconType;
}> = ({ name, value, icon: Icon }) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-medium">{name}:</div>
        <div className="flex flex-row content-center justify-center">
          <div className="text-xl font-medium">{value.toString()}</div>
          <div className="self-center pb-1 pl-1">
            {Icon && <Icon size={'1.2rem'} />}
          </div>
        </div>
      </div>
    </>
  );
};

const SwitchButton: React.FC<{
  onClick: () => void;
  text: string;
}> = ({ onClick, text }) => {
  return (
    <GradientButton
      onClick={onClick}
      style={{ padding: '0.6rem', maxHeight: '52px', maxWidth: '222px' }}
    >
      <div className="flex flex-row">
        <SwitchIcon className="pt-1" size={'1.7rem'} />
        <div className="text-2xl capitalize text-secondary">{text}</div>
      </div>
    </GradientButton>
  );
};

const isPoolType = (type: InformationDisplayType) => {
  return type === InformationDisplayType.POOL;
};

export const InformationSectionContent: FC<InformationSectionContentProps> = ({
  generalInfo,
  poolInfo,
  onInfoSwitch,
}) => {
  const [currentDisplayType, setCurrentDisplayType] =
    useState<InformationDisplayType>(InformationDisplayType.GENERAL);
  const [currentDisplayInfo, setCurrentDisplayInfo] =
    useState<PoolInformationData>(generalInfo);

  useEffect(() => {
    console.log('CHANGE');
    setCurrentDisplayInfo(
      isPoolType(currentDisplayType) ? poolInfo : generalInfo,
    );
  }, [currentDisplayType]);

  return (
    <div className="grid-col grid font-bold" style={{ maxWidth: '334px' }}>
      <div className="flex flex-col">
        <div className="align-start flex-col">
          <div className="mb-7 mt-12">
            <div className="text-2xl capitalize">
              {currentDisplayType === InformationDisplayType.GENERAL
                ? 'General'
                : 'Current Pool'}
            </div>
          </div>
          <div className="flex flex-row justify-stretch">
            <div
              style={{ width: '1px', marginRight: '1.4rem' }}
              className="bg-secondary"
            ></div>
            <div className="flex w-full flex-col" style={{ gap: '20px' }}>
              <SingleInfoRow name="Tables" value={currentDisplayInfo.tables} />
              <SingleInfoRow
                name="Spents"
                value={currentDisplayInfo.spents}
                icon={BNBIcon}
              />
              <SingleInfoRow
                name="Income"
                value={currentDisplayInfo.income}
                icon={BNBIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="justify-self-end pt-6">
        <SwitchButton
          text={isPoolType(currentDisplayType) ? 'General Info' : 'Pool Info'}
          onClick={() => {
            setCurrentDisplayType(
              isPoolType(currentDisplayType)
                ? InformationDisplayType.GENERAL
                : InformationDisplayType.POOL,
            );
          }}
        />
      </div>
    </div>
  );
};
