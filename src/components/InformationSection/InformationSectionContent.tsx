'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import { } from "ethers"
import { Decimal } from '@/utils/Decimal';
import { BNBIcon } from '../icons/BNBIcon';
import { IconType } from 'react-icons';
import { Button } from '../Button';
import { GradientButton } from '../GradientButton';
import { TablesIcon } from '../icons/TablesIcon';

export interface InformationSectionContentProps {
  generalInfo: PoolInformationData;
  poolInfo: PoolInformationData;
  onInfoSwitch?: (newType: InformationDisplayType) => void;
}

enum InformationDisplayType {
  GENERAL,
  POOL
}

interface PoolInformationData {
  tables: number;
  spents: number;
  income: number;
}

const SingleInfoRow: React.FC<{
  name: string,
  value: string | number,
  icon?: IconType
}> = ({ name, value, icon: Icon }) => {
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div className='font-medium text-2xl'>{name}:</div>
        <div className='flex flex-row justify-center content-center'>
          <div className='font-medium text-xl'>{value.toString()}</div>
          <div className='self-center pb-1 pl-1' >
            {Icon && <Icon size={'1.2rem'} />}
          </div>
        </div>
      </div>
    </>
  )
}

const SwitchButton = () => {
  return <GradientButton style={{ padding: '10px', maxHeight: "52px", maxWidth: '222px', }}>
    <div className='flex flex-row'>
      <TablesIcon className='pt-1' size={'1.7rem'} />
      <div className='text-secondary text-2xl capitalize'>
        General Info
      </div>
    </div>
  </GradientButton>
}

export const InformationSectionContent: FC<InformationSectionContentProps> = ({ generalInfo, poolInfo, onInfoSwitch }) => {
  const [currentDisplayType, setCurrentDisplayType] = useState<InformationDisplayType>(InformationDisplayType.POOL);
  const [currentDisplayInfo, setCurrentDisplayInfo] = useState<PoolInformationData>(generalInfo);

  useCallback(() => onInfoSwitch?.(currentDisplayType) ?? (() => { })(), [currentDisplayType]);

  return (
    <div className="grid grid-flow-col grid-rows-3 font-bold" style={{ maxWidth: '334px' }}>
      <div className='flex flex-col'>
        <div className='flex-col align-start'>
          <div className="mt-12 mb-5">
            <div className="text-2xl capitalize">{
              currentDisplayType === InformationDisplayType.GENERAL
                ? 'General'
                : 'Current Pool'
            }
            </div>
          </div>
          <div className='flex flex-row justify-stretch' >
            <div style={{width: '1px',  marginRight: '1.4rem' }} className='bg-secondary'></div>
            <div className='flex flex-col w-full' style={{gap:'20px'}}>
              <SingleInfoRow name='Tables' value={currentDisplayInfo.tables} />
              <SingleInfoRow name='Spents' value={currentDisplayInfo.spents} icon={BNBIcon} />
              <SingleInfoRow name='Income' value={currentDisplayInfo.income} icon={BNBIcon} />
            </div>
          </div>

        </div>
      </div>
      <div className='justify-self-end pt-6'>
        <SwitchButton />
      </div>
    </div>
  );
};
