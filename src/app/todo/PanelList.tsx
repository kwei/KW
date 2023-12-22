'use client';

import { memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const PanelList = memo((props: Props) => {
  const { children } = props;
  return (
    <div className="flex h-full shrink-0 flex-row items-start gap-4 px-8">
      {children}
    </div>
  );
});

PanelList.displayName = 'PanelList';
