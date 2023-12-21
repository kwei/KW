'use client';

import useCreateFocusRef from '@/hooks/useCreateFocusRef';
import Link from 'next/link';
import { ReactNode, useCallback, useState } from 'react';
import {
  FaAnglesLeft,
  FaHouse,
  FaRegCommentDots,
  FaListCheck,
  FaRegNewspaper,
} from 'react-icons/fa6';

export const SlideMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useCreateFocusRef<HTMLDivElement>(() => {
    setOpen(false);
  });

  const trigger = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex ${
        open ? 'w-52' : 'w-16'
      } h-screen flex-col bg-primary-800 transition-all`}
    >
      <nav className="flex h-full w-full flex-col gap-4 overflow-y-auto overflow-x-hidden px-2 py-4">
        <NavElement isOpen={open} label="Home" route="/">
          <FaHouse className="w-4" />
        </NavElement>
        <NavElement isOpen={open} label="News" route="/news">
          <FaRegNewspaper className="w-4" />
        </NavElement>
        <NavElement isOpen={open} label="Todo" route="/todo">
          <FaListCheck className="w-4" />
        </NavElement>
        <NavElement isOpen={open} label="Contact" route="/contact">
          <FaRegCommentDots className="w-4" />
        </NavElement>
      </nav>
      <CollapseController isOpen={open} onClick={trigger} />
    </div>
  );
};

const NavElement = ({
  route,
  label,
  isOpen,
  children,
}: {
  route: string;
  label: string;
  isOpen: boolean;
  children: ReactNode;
}) => {
  return (
    <Link
      href={route}
      className="group flex w-full items-center gap-4 rounded-lg px-4 py-1 text-lg font-semibold transition-all hover:bg-primary-700"
    >
      <div className="flex h-8 items-center">{children}</div>
      {isOpen && <div className="h-8 leading-8">{label}</div>}
    </Link>
  );
};

const CollapseController = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-end p-2">
      <button
        className="flex w-full items-center gap-4 rounded-lg px-4 py-1 text-base transition-all hover:bg-primary-700"
        onClick={onClick}
      >
        <div className="flex h-8 items-center">
          <FaAnglesLeft className={`w-4 ${isOpen ? '' : 'rotate-180'}`} />
        </div>
        {isOpen && <div className="h-8 leading-8">Collapse</div>}
      </button>
    </div>
  );
};
