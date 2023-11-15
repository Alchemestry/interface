import type { FC, PropsWithChildren } from 'react';
import React from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full min-h-full w-full transition-all">{children}</div>
  );
};
