import clsx from 'clsx';
import { Kalam } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import FaqSun from '@/../public/images/faq-sun.png';
import Stars from '@/../public/images/stars.svg';

const kalam = Kalam({ subsets: ['latin'], weight: ['400', '700'] });

type QandA = { q: string; a: string };

const items: QandA[] = [
  {
    q: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto ducimus natus quia?',
    a: 'Non nobis domine',
  },
  {
    q: 'Adipisci architecto ducimus natus quia?',
    a: 'Te gloriam',
  },
  {
    q: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit?',
    a: 'Non nobis domine',
  },
  {
    q: 'Lorem ipsun dolor te amet set ani uno de relaam ist te onor?',
    a: 'Non nobis domine',
  },
];

const FaqPage = () => {
  return (
    <div className="flex min-h-full w-full flex-col gap-10 bg-faq bg-100 pl-10 pt-10 text-ternary">
      <div className="flex items-center gap-5">
        <div className="select-none text-[40px] font-bold text-transparent">
          -
        </div>
        <Link href={'/main/queue'} className="flex items-center gap-5">
          <HiOutlineArrowNarrowLeft size={32} />
          <div className="text-[20px] font-bold">To Store</div>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <Image src={Stars} alt="start" />
        <div className="relative text-[32px] font-bold before:absolute before:-bottom-[4px] before:h-[3px] before:w-[180px] before:bg-ternary">
          Questions & Answers
        </div>
      </div>
      <div className={clsx('flex flex-col gap-10', kalam.className)}>
        {items.map(({ q, a }) => (
          <div
            key={q}
            className="grid grid-cols-[auto_auto_1fr] gap-x-[15px] text-[40px]"
          >
            <div />
            <div>Q:</div>
            <div>{q}</div>
            <div className="font-bold">-</div>
            <div className="font-bold">A:</div>
            <div className="font-bold">{a}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Image src={FaqSun} alt="sun" />
      </div>
    </div>
  );
};

export default FaqPage;
