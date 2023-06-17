import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import type { FC, HTMLAttributes } from 'react';
import React from 'react';
import type { IconType } from 'react-icons';

import { Button } from '@/components/Button';
import { FaqIcon } from '@/components/icons/FaqIcon';
import { ShopIcon } from '@/components/icons/ShopIcon';
import { SidebarFoldedButton } from '@/components/Sidebar/SidebarFoldedButton';

interface SidebarButtonsProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

type SidebarButtonType = {
  route: 'main' | 'faq';
  icon: IconType;
};

export const SidebarButtons: FC<SidebarButtonsProps> = ({
  isOpen,
  className,
  ...props
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const routes: SidebarButtonType[] = [
    {
      route: 'main',
      icon: ShopIcon,
    },
    {
      route: 'faq',
      icon: FaqIcon,
    },
  ];

  return (
    <div
      className={clsx(
        'flex flex-col gap-5 self-center justify-self-center',
        className,
      )}
      {...props}
    >
      {isOpen
        ? routes.map(({ route }) => (
            <Button
              key={route}
              active={pathname.includes(route)}
              className="h-[66px] w-[258px]"
              onClick={() => router.push(`/${route}`)}
            >
              {route}
            </Button>
          ))
        : routes.map(({ route, icon: Icon }) => (
            <SidebarFoldedButton
              key={route}
              active={pathname.includes(route)}
              onClick={() => router.push(`/${route}`)}
            >
              <Icon size={32} />
            </SidebarFoldedButton>
          ))}
    </div>
  );
};
