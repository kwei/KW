'use client';

import { memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const PopupMenu = (props: Props) => {
  const { children } = props;

  return (
    <div className="absolute left-6 top-5 flex flex-col rounded-md border border-solid border-primary-800 bg-primary-500 py-1">
      {children}
    </div>
  );
};

export const PopupMenuOption = memo(
  ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
    return (
      <div
        onClick={onClick}
        className="flex shrink-0 gap-2 items-center whitespace-nowrap border-b border-solid border-primary-700 px-3 py-1 text-sm last:border-b-0 hover:bg-primary-300 hover:text-primary-900"
      >
        {children}
      </div>
    );
  },
);

PopupMenuOption.displayName = 'PopupMenuOption';
