import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import React from 'react';
import type { IconType } from 'react-icons';

import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { TelegramIcon } from '@/components/icons/TelegramIcon';
import { TwitterIcon } from '@/components/icons/TwitterIcon';

type SidebarSocialsType = {
  href: string;
  icon: IconType;
};

interface SidebarSocialsProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

export const SidebarSocials: React.FC<SidebarSocialsProps> = ({
  isOpen,
  className,
  ...props
}) => {
  const socials: SidebarSocialsType[] = [
    {
      href: 'https://discord.gg',
      icon: DiscordIcon,
    },
    {
      href: 'https://twitter.com',
      icon: TwitterIcon,
    },
    {
      href: 'https://telegram.org',
      icon: TelegramIcon,
    },
  ];

  return (
    <div
      className={clsx(
        'flex w-full items-center justify-center transition-all',
        {
          'flex-row': isOpen,
          'flex-col-reverse': !isOpen,
          'gap-[100px]': isOpen,
          'gap-[50px]': !isOpen,
        },
        className,
      )}
      {...props}
    >
      {socials.map(({ href, icon: Icon }) => (
        <a key={href} href={href} target="_blank">
          <Icon size={isOpen ? 35 : 21} />
        </a>
      ))}
    </div>
  );
};
